import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import DataTable from '../components/DataTable';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import MultiMediaUploadField from '../components/MultiMediaUploadField';
import VideoUploadField from '../components/VideoUploadField';
import { Plus, Edit3, Trash2, Calendar, Sparkles, Video, CheckCircle2, Eye } from 'lucide-react';

export default function ActivitiesManagement() {
  const [activities, setActivities] = useState([]);
  const [masterCategories, setMasterCategories] = useState([]);
  const [masterLocations, setMasterLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: '',
    location: '',
    duration: '',
    rating: 4.8,
    price: '',
    childPrice: '',
    originalPrice: '',
    badge: 'POPULAR',
    badgeBg: 'linear-gradient(135deg, #F06543, #059669)',
    image: '',
    videoUrl: '',
    galleryRaw: '',
    tagline: '',
    overview: '',
    difficulty: 'Moderate',
    featured: true,
    bookingAvailability: true,
    inclusionsRaw: '',
    safetyGuidelinesRaw: '',
    requirementsRaw: '',
  });

  const loadActivitiesAndMasters = async () => {
    setLoading(true);
    try {
      const [actRes, catRes, locRes] = await Promise.all([
        adminService.getActivities(),
        adminService.getMasterCategories('ACTIVITY'),
        adminService.getMasterLocations(),
      ]);

      if (actRes && actRes.data) {
        setActivities(actRes.data.map(act => ({
          ...act,
          id: String(act.id)
        })));
      }

      setMasterCategories(catRes?.data || catRes || []);
      setMasterLocations(locRes?.data || locRes || []);
    } catch (e) {
      console.error('Failed to load activities and masters:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivitiesAndMasters();
  }, []);

  const handleOpenCreate = () => {
    setEditingItem(null);
    const defaultCat = masterCategories.length > 0 ? masterCategories[0].name : 'Underwater Adventure';
    const defaultLoc = masterLocations.length > 0 ? masterLocations[0].name + ', ' + masterLocations[0].island : 'Elephant Beach, Havelock Island';

    setFormData({
      name: '',
      slug: '',
      category: defaultCat,
      location: defaultLoc,
      duration: '2.5 Hours',
      rating: 4.8,
      price: '',
      childPrice: '',
      originalPrice: '',
      badge: 'POPULAR',
      badgeBg: 'linear-gradient(135deg, #F06543, #059669)',
      image: '',
      videoUrl: '',
      galleryRaw: '',
      tagline: '',
      overview: '',
      difficulty: 'Moderate',
      featured: true,
      bookingAvailability: true,
      inclusionsRaw: '["Equipment included", "Certified instructor guide", "High-res underwater photos"]',
      safetyGuidelinesRaw: '["Wear lifejacket compulsory", "Follow guide instructions"]',
      requirementsRaw: '["Minimum age: 10 years", "Basic swimming ability recommended"]',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);

    let incText = '[]';
    let safeText = '[]';
    let reqText = '[]';
    let galText = '';

    try {
      incText = Array.isArray(item.inclusions)
        ? JSON.stringify(item.inclusions)
        : (typeof item.inclusions === 'string' ? item.inclusions : '[]');
      safeText = Array.isArray(item.safetyGuidelines)
        ? JSON.stringify(item.safetyGuidelines)
        : (typeof item.safetyGuidelines === 'string' ? item.safetyGuidelines : '[]');
      reqText = Array.isArray(item.requirements)
        ? JSON.stringify(item.requirements)
        : (typeof item.requirements === 'string' ? item.requirements : '[]');
      galText = Array.isArray(item.gallery)
        ? item.gallery.join('\n')
        : (typeof item.gallery === 'string' ? item.gallery : '');
    } catch (e) {
      console.error('Failed parsing JSON arrays:', e);
    }

    setFormData({
      name: item.name || '',
      slug: item.slug || '',
      category: item.category || (masterCategories[0]?.name || 'Underwater Adventure'),
      location: item.location || (masterLocations[0]?.name || 'Elephant Beach, Havelock Island'),
      duration: item.duration || '',
      rating: item.rating || 4.8,
      price: item.price || '',
      childPrice: item.childPrice || '',
      originalPrice: item.originalPrice || '',
      badge: item.badge || '',
      badgeBg: item.badgeBg || '',
      image: item.image || '',
      videoUrl: item.videoUrl || '',
      galleryRaw: galText,
      tagline: item.tagline || '',
      overview: item.overview || '',
      difficulty: item.difficulty || 'Moderate',
      featured: item.featured !== false,
      bookingAvailability: item.bookingAvailability !== false,
      inclusionsRaw: incText,
      safetyGuidelinesRaw: safeText,
      requirementsRaw: reqText,
    });
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.image || !formData.price) {
      alert('Please fill out Activity Name, Cover Image (Upload or URL), and Selling Price.');
      return;
    }

    // Parse inclusions, safety, requirements, and gallery
    let finalInclusions = [];
    let finalSafety = [];
    let finalRequirements = [];
    let finalGallery = [];

    try {
      finalInclusions = JSON.parse(formData.inclusionsRaw || '[]');
      finalSafety = JSON.parse(formData.safetyGuidelinesRaw || '[]');
      finalRequirements = JSON.parse(formData.requirementsRaw || '[]');
    } catch (e) {
      alert('Error parsing JSON array format in Inclusions, Safety, or Requirements. E.g. ["item 1", "item 2"]');
      return;
    }

    if (formData.galleryRaw) {
      finalGallery = formData.galleryRaw
        .split('\n')
        .map(url => url.trim())
        .filter(url => url.length > 0);
    }

    const payload = {
      name: formData.name,
      slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      category: formData.category,
      location: formData.location,
      duration: formData.duration,
      rating: parseFloat(formData.rating) || 4.8,
      price: parseFloat(formData.price),
      childPrice: formData.childPrice ? parseFloat(formData.childPrice) : null,
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      badge: formData.badge,
      badgeBg: formData.badgeBg,
      image: formData.image,
      videoUrl: formData.videoUrl || null,
      gallery: finalGallery,
      tagline: formData.tagline,
      overview: formData.overview,
      difficulty: formData.difficulty,
      featured: Boolean(formData.featured),
      bookingAvailability: Boolean(formData.bookingAvailability),
      inclusions: finalInclusions,
      safetyGuidelines: finalSafety,
      requirements: finalRequirements,
    };

    try {
      if (editingItem) {
        await adminService.updateActivity(editingItem.id, payload);
        alert('Activity updated successfully.');
      } else {
        await adminService.createActivity(payload);
        alert('Activity created successfully.');
      }
      setModalOpen(false);
      loadActivitiesAndMasters();
    } catch (err) {
      alert('Error saving activity: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await adminService.deleteActivity(deleteId);
      setDeleteId(null);
      loadActivitiesAndMasters();
    } catch (err) {
      alert('Failed to delete activity: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleNavigateToSlots = (activityId) => {
    window.history.pushState({}, '', `/admin/activity-slots?activityId=${activityId}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const columns = [
    {
      header: 'Activity Details',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={row.image} alt={row.name} style={{ width: 52, height: 42, borderRadius: 8, objectFit: 'cover' }} />
          <div>
            <div style={{ color: '#0B2545', fontWeight: 800 }}>{row.name}</div>
            <div style={{ color: '#F06543', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>{row.category}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Location / Duration',
      accessor: 'location',
      render: (row) => (
        <div>
          <div style={{ color: '#334155', fontSize: 12, fontWeight: 600 }}>{row.location}</div>
          <div style={{ color: '#64748b', fontSize: 11 }}>{row.duration} • {row.difficulty || 'Moderate'}</div>
        </div>
      )
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (row) => (
        <span style={{ color: '#f59e0b', fontWeight: 800, fontSize: 12 }}>
          ★ {row.rating}
        </span>
      )
    },
    {
      header: 'Price & Discount',
      accessor: 'price',
      render: (row) => {
        const selling = Number(row.price || 0);
        const original = Number(row.originalPrice) || (selling > 0 ? Math.round(selling * 1.2) : 0);
        const discountPct = (original > selling && original > 0) ? Math.round(((original - selling) / original) * 100) : 0;
        return (
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ color: '#F06543', fontWeight: 900, fontSize: 13.5 }}>₹{selling.toLocaleString('en-IN')}</span>
              {original > selling && (
                <span style={{ color: '#94a3b8', fontSize: 11, textDecoration: 'line-through', fontWeight: 600 }}>₹{original.toLocaleString('en-IN')}</span>
              )}
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 2 }}>
              {discountPct > 0 && (
                <span style={{ background: '#dcfce7', color: '#16a34a', fontSize: 10, fontWeight: 900, padding: '1px 6px', borderRadius: 6 }}>
                  {discountPct}% OFF
                </span>
              )}
              {row.childPrice && (
                <span style={{ color: '#64748b', fontSize: 11 }}>
                  Child: ₹{Number(row.childPrice).toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
        );
      }
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <button
            onClick={() => handleNavigateToSlots(row.id)}
            title="Manage Schedule & Slots"
            style={{
              background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#059669',
              padding: '5px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 4
            }}
          >
            <Calendar size={12} /> Slots
          </button>
          <button
            onClick={() => handleOpenEdit(row)}
            style={{
              background: '#f8fafc', border: '1px solid #cbd5e1', color: '#334155',
              padding: '5px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer'
            }}
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteId(row.id)}
            style={{
              background: '#fff1f2', border: '1px solid #fecdd3', color: '#e11d48',
              padding: '5px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      )
    }
  ];

  if (modalOpen) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Sticky Top Action Bar */}
        <div
          style={{
            position: 'sticky',
            top: 10,
            zIndex: 100,
            background: '#ffffff',
            borderRadius: 20,
            padding: '16px 24px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 8px 30px rgba(11,37,69,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                color: '#0B2545',
                padding: '9px 16px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ← Back to Activities List
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingItem ? `Edit Activity: ${formData.name || editingItem.name}` : 'Add New Island Activity & Experience'}
                </h2>
                {formData.slug && (
                  <span style={{ fontSize: 11, background: 'rgba(240, 101, 67, 0.1)', color: '#F06543', padding: '3px 8px', borderRadius: 6, fontWeight: 700 }}>
                    /{formData.slug}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Water sports, scuba diving, trekking, island adventures, pricing, inclusions & safety guidelines
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {formData.slug && (
              <a
                href={`/activities/${formData.slug}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  color: '#475569',
                  padding: '9px 14px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Eye size={13} /> Preview Live Page
              </a>
            )}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#ffffff',
                border: '1.5px solid #CBD5E1',
                color: '#475569',
                padding: '9px 16px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              form="activity-form"
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 24px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {editingItem ? 'Update Experience →' : 'Publish Experience →'}
            </button>
          </div>
        </div>

        {/* Studio Content Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 24,
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
            overflow: 'hidden',
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <form
            id="activity-form"
            onSubmit={handleSave}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>ACTIVITY NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value,
                    slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                  })}
                  placeholder="e.g. Scuba Diving Expedition"
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>URL SLUG</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="scuba-diving-expedition"
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            {/* Dynamic Master Category & Master Location Dropdowns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif" }}>
                    CATEGORY (AUTO-FETCHED MASTER)
                  </label>
                </div>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                >
                  {masterCategories.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                  {/* Fallback if custom */}
                  {formData.category && !masterCategories.some(c => c.name === formData.category) && (
                    <option value={formData.category}>{formData.category}</option>
                  )}
                </select>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif" }}>
                    PRIMARY LOCATION (MASTER REGISTRY)
                  </label>
                </div>
                <select
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                >
                  {masterLocations.map((l) => (
                    <option key={l.id} value={`${l.name}, ${l.island}`}>
                      {l.name} ({l.island})
                    </option>
                  ))}
                  {/* Fallback if custom */}
                  {formData.location && !masterLocations.some(l => `${l.name}, ${l.island}` === formData.location) && (
                    <option value={formData.location}>{formData.location}</option>
                  )}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>DURATION</label>
                <input
                  type="text"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g. 2.5 Hours"
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>DIFFICULTY</label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                >
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Challenging">Challenging</option>
                  <option value="Extreme">Extreme</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>RATING SCORE</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr 1fr', gap: 14 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif" }}>
                    OFFER / SELLING PRICE (₹)
                  </label>
                </div>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      price: val,
                      originalPrice: prev.originalPrice || (val ? Math.round(Number(val) * 1.2) : '')
                    }));
                  }}
                  placeholder="5500"
                  style={{ width: '100%', background: '#f8fafc', border: '1.5px solid #F06543', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif" }}>
                    ORIGINAL / MRP RATE (₹)
                  </label>
                  {Number(formData.originalPrice) > Number(formData.price) && (
                    <span style={{ fontSize: 10, fontWeight: 900, color: '#16a34a', background: '#dcfce7', padding: '1px 6px', borderRadius: 6 }}>
                      {Math.round(((Number(formData.originalPrice) - Number(formData.price)) / Number(formData.originalPrice)) * 100)}% OFF
                    </span>
                  )}
                </div>
                <input
                  type="number"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  placeholder="6600"
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>CHILD PRICE (₹) (OPTIONAL)</label>
                <input
                  type="number"
                  value={formData.childPrice}
                  onChange={(e) => setFormData({ ...formData, childPrice: e.target.value })}
                  placeholder="2500"
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            {/* DUAL-MODE COVER IMAGE UPLOADER */}
            <MediaUploadField
              label="COVER IMAGE"
              value={formData.image}
              onChange={(url) => setFormData({ ...formData, image: url })}
              required
              helpText="Upload a high-res cover image file (drag & drop) or paste a direct image URL."
            />

            {/* DUAL-MODE MULTI-IMAGE GALLERY UPLOADER */}
            <MultiMediaUploadField
              label="GALLERY IMAGES"
              value={formData.galleryRaw}
              onChange={(val) => setFormData({ ...formData, galleryRaw: val })}
              helpText="Upload multiple image files at once or paste multiple URLs (1 per line)."
            />

            {/* VIDEO TRAILER FIELD WITH LIVE PREVIEW */}
            <VideoUploadField
              label="VIDEO TRAILER (YOUTUBE / MP4)"
              value={formData.videoUrl}
              onChange={(url) => setFormData({ ...formData, videoUrl: url })}
              helpText="Paste a YouTube or MP4 video URL to show an interactive preview player."
            />

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>SHORT TAGLINE</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                placeholder="Magical glowing plankton night tour..."
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>OVERVIEW DESCRIPTION</label>
              <textarea
                value={formData.overview}
                onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                placeholder="Write full details about the activity..."
                rows={3}
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>INCLUSIONS (JSON ARRAY)</label>
                <input
                  type="text"
                  value={formData.inclusionsRaw}
                  onChange={(e) => setFormData({ ...formData, inclusionsRaw: e.target.value })}
                  placeholder='["Equipment", "Guide"]'
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>SAFETY GUIDELINES (JSON ARRAY)</label>
                <input
                  type="text"
                  value={formData.safetyGuidelinesRaw}
                  onChange={(e) => setFormData({ ...formData, safetyGuidelinesRaw: e.target.value })}
                  placeholder='["Wear lifejacket"]'
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 10, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 4 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#0f172a', fontWeight: 700, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  style={{ width: 18, height: 18, accentColor: '#F06543' }}
                />
                Featured Experience (Hero Carousel)
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#0f172a', fontWeight: 700, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.bookingAvailability}
                  onChange={(e) => setFormData({ ...formData, bookingAvailability: e.target.checked })}
                  style={{ width: 18, height: 18, accentColor: '#F06543' }}
                />
                Available for Online Booking
              </label>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16, borderTop: '1px solid #E2E8F0', paddingTop: 16 }}>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                style={{ background: '#ffffff', border: '1px solid #CBD5E1', color: '#475569', padding: '10px 20px', borderRadius: 12, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '10px 26px', borderRadius: 12, fontSize: 12, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)' }}
              >
                {editingItem ? 'Update Experience →' : 'Publish Experience →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Island Activities & Experiences"
        subtitle="ACTIVITY CMS DIRECTORY"
        columns={columns}
        data={activities}
        loading={loading}
        searchPlaceholder="Search activity name, category, or location..."
        actions={
          <button
            onClick={handleOpenCreate}
            style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '10px 18px', borderRadius: 12, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 14px rgba(240, 101, 67, 0.25)' }}
          >
            + Add New Experience
          </button>
        }
      />

      {/* CONFIRM DELETE DIALOG */}
      {deleteId && (
        <ConfirmDialog
          isOpen={true}
          title="Delete Experience Highlight?"
          message="Are you sure you want to delete this experience highlight? This will remove the card from the marketplace and website."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}
