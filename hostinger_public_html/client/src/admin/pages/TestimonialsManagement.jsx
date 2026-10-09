import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import DataTable from '../components/DataTable';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import VideoUploadField from '../components/VideoUploadField';
import { Star, Plus, Edit3, Trash2, ArrowLeft, Sparkles, Quote, User, Video, CheckCircle2 } from 'lucide-react';

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  // Modal / Studio State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState('story');

  const [formData, setFormData] = useState({
    name: '',
    tripType: '',
    duration: '',
    destinations: '',
    rating: 5.0,
    quote: '',
    avatar: '',
    videoThumbnail: '',
    videoUrl: '',
    videoDuration: '01:30',
    tag: '',
  });

  const loadTestimonials = async () => {
    setLoading(true);
    try {
      const res = await adminService.getTestimonials();
      if (res && res.data) {
        setTestimonials(res.data.map(item => ({
          ...item,
          id: String(item.id)
        })));
      }
    } catch (e) {
      console.error('Failed to load testimonials:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      tripType: '',
      duration: '',
      destinations: '',
      rating: 5.0,
      quote: '',
      avatar: '',
      videoThumbnail: '',
      videoUrl: '',
      videoDuration: '01:30',
      tag: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name || '',
      tripType: item.tripType || '',
      duration: item.duration || '',
      destinations: item.destinations || '',
      rating: item.rating || 5.0,
      quote: item.quote || '',
      avatar: item.avatar || '',
      videoThumbnail: item.videoThumbnail || '',
      videoUrl: item.videoUrl || '',
      videoDuration: item.videoDuration || '01:30',
      tag: item.tag || '',
    });
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quote) return;

    const payload = {
      name: formData.name,
      tripType: formData.tripType,
      duration: formData.duration,
      destinations: formData.destinations,
      rating: parseFloat(formData.rating),
      quote: formData.quote,
      avatar: formData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      videoThumbnail: formData.videoThumbnail || 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
      videoUrl: formData.videoUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      videoDuration: formData.videoDuration || '01:30',
      tag: formData.tag || 'TRAVEL STORY',
      status: 'ACTIVE',
    };

    try {
      if (editingItem) {
        await adminService.updateTestimonial(editingItem.id, payload);
        alert('Testimonial updated successfully.');
      } else {
        await adminService.createTestimonial(payload);
        alert('Testimonial created successfully.');
      }
      setModalOpen(false);
      loadTestimonials();
    } catch (err) {
      alert('Error saving testimonial: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await adminService.deleteTestimonial(deleteId);
      setDeleteId(null);
      loadTestimonials();
    } catch (err) {
      alert('Failed to delete testimonial.');
    }
  };

  const columns = [
    {
      header: 'Traveler Details',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={row.avatar} alt={row.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <div style={{ color: '#334155', fontWeight: 800 }}>{row.name}</div>
            <div style={{ color: '#F06543', fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase' }}>{row.tag}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Trip Specs',
      accessor: 'tripType',
      render: (row) => (
        <div>
          <div style={{ color: '#334155', fontSize: 11, fontWeight: 700 }}>{row.tripType}</div>
          <div style={{ color: '#64748b', fontSize: 12.5 }}>{row.duration} ({row.destinations})</div>
        </div>
      )
    },
    {
      header: 'Quote Excerpt',
      accessor: 'quote',
      render: (row) => (
        <p style={{ color: '#64748b', fontSize: 11, margin: 0, maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          "{row.quote}"
        </p>
      )
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#f5af02', fontSize: 11, fontWeight: 800 }}>
          <Star size={12} fill="#f5af02" stroke="#f5af02" />
          <span>{row.rating}</span>
        </div>
      )
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => handleOpenEdit(row)}
            style={{ background: 'rgba(22, 217, 255, 0.1)', border: '1px solid rgba(22, 217, 255, 0.3)', color: '#F06543', padding: '4px 10px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            EDIT
          </button>
          <button
            onClick={() => setDeleteId(row.id)}
            style={{ background: 'rgba(255, 79, 123, 0.1)', border: '1px solid rgba(255, 79, 123, 0.3)', color: '#ff4f7b', padding: '4px 10px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            DELETE
          </button>
        </div>
      )
    }
  ];

  if (modalOpen) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Sticky Action Header */}
        <div style={{
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
          gap: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                padding: '8px 14px',
                borderRadius: 12,
                color: '#64748B',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={16} />
              Back to Stories
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingItem ? `Edit: ${formData.name || 'Story'}` : 'Create New Traveler Story'}
                </h2>
                {formData.tag && (
                  <span style={{ background: '#FFF1EE', color: '#F06543', padding: '2px 8px', borderRadius: 8, fontSize: 11, fontWeight: 800 }}>
                    {formData.tag}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Configure traveler review, profile avatar, video reel, and trip details
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#F1F5F9',
                border: '1.5px solid #E2E8F0',
                color: '#64748B',
                padding: '9px 18px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 22px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(240,101,67,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <CheckCircle2 size={15} />
              {editingItem ? 'Save Story Changes' : 'Publish Story →'}
            </button>
          </div>
        </div>

        {/* Studio Content Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 24,
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Navigation Tabs */}
          <div style={{
            display: 'flex',
            borderBottom: '1.5px solid #E2E8F0',
            background: '#F8FAFC',
            padding: '4px 16px',
            gap: 6,
            overflowX: 'auto'
          }}>
            {[
              { id: 'story', label: '1. Traveler & Journey', icon: User },
              { id: 'media', label: '2. Avatar & Video Reel', icon: Video },
              { id: 'quote', label: '3. Testimonial Quote & Preview', icon: Quote }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 18px',
                    border: 'none',
                    borderBottom: isActive ? '3px solid #F06543' : '3px solid transparent',
                    background: 'transparent',
                    color: isActive ? '#F06543' : '#64748B',
                    fontWeight: isActive ? 900 : 700,
                    fontSize: 13,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div style={{ padding: '32px' }}>
            {/* TAB 1: STORY & JOURNEY */}
            {activeTab === 'story' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 840 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      TRAVELER NAME(S) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Neha & Rohit Sharma"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      TRIP TYPE TAG
                    </label>
                    <input
                      type="text"
                      value={formData.tag}
                      onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                      placeholder="e.g. HONEYMOON STORY, FAMILY TRIP"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      TRIP TYPE DESCRIPTION
                    </label>
                    <input
                      type="text"
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                      placeholder="e.g. Honeymoon Special, Luxury Island Hopping"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      DURATION
                    </label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g. 6 Nights / 7 Days"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      VISITED ISLANDS / DESTINATIONS
                    </label>
                    <input
                      type="text"
                      value={formData.destinations}
                      onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
                      placeholder="e.g. Port Blair • Havelock • Neil Island"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      RATING SCORE (1-5)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MEDIA & VIDEO REEL */}
            {activeTab === 'media' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 840 }}>
                <MediaUploadField
                  label="TRAVELER AVATAR PHOTO"
                  value={formData.avatar}
                  onChange={(url) => setFormData({ ...formData, avatar: url })}
                  helpText="Upload a crisp portrait photo of the traveler (JPG/PNG) or enter an image URL."
                />

                <MediaUploadField
                  label="VIDEO THUMBNAIL COVER IMAGE"
                  value={formData.videoThumbnail}
                  onChange={(url) => setFormData({ ...formData, videoThumbnail: url })}
                  helpText="High-resolution poster image shown before video playback starts."
                />

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
                  <VideoUploadField
                    label="TRAVELER STORY VIDEO URL"
                    value={formData.videoUrl}
                    onChange={(url) => setFormData({ ...formData, videoUrl: url })}
                    helpText="Paste YouTube video link or direct MP4 stream with embedded live preview."
                  />

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      VIDEO DURATION
                    </label>
                    <input
                      type="text"
                      value={formData.videoDuration}
                      onChange={(e) => setFormData({ ...formData, videoDuration: e.target.value })}
                      placeholder="e.g. 01:24"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: QUOTE & PREVIEW */}
            {activeTab === 'quote' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, alignItems: 'start' }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                    TESTIMONIAL QUOTE *
                  </label>
                  <textarea
                    required
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    placeholder="Enter the traveler's authentic experience quote or review text..."
                    rows={6}
                    style={{
                      width: '100%',
                      background: '#F8FAFC',
                      border: '1.5px solid #E2E8F0',
                      borderRadius: 14,
                      padding: '16px',
                      color: '#0B2545',
                      fontSize: 14,
                      lineHeight: '1.6',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Live Card Preview */}
                <div style={{
                  background: '#F8FAFC',
                  borderRadius: 20,
                  border: '1.5px solid #E2E8F0',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16
                }}>
                  <div style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Live Story Card Preview
                  </div>

                  <div style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    border: '1px solid #E2E8F0',
                    padding: 20,
                    boxShadow: '0 8px 24px rgba(11,37,69,0.06)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <img
                        src={formData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                        alt={formData.name || 'Traveler'}
                        style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontWeight: 900, color: '#0B2545', fontSize: 14 }}>{formData.name || 'Traveler Name'}</div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', textTransform: 'uppercase' }}>{formData.tag || 'TRAVEL STORY'}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#F59E0B', marginBottom: 10 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(Number(formData.rating) || 5) ? '#F59E0B' : 'none'} stroke="#F59E0B" />
                      ))}
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', marginLeft: 4 }}>{formData.rating || 5.0}</span>
                    </div>

                    <p style={{ fontSize: 13, color: '#475569', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                      "{formData.quote || 'Their experience quote will appear here...'}"
                    </p>

                    <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #F1F5F9', fontSize: 11, color: '#94A3B8' }}>
                      {formData.duration ? `${formData.duration} • ` : ''}{formData.destinations || 'Andaman Islands'}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Real Traveler Stories"
        subtitle="TESTIMONIALS DIRECTORY"
        columns={columns}
        data={testimonials}
        loading={loading}
        searchPlaceholder="Search traveler name, trip type, or quote..."
        actions={
          <button
            onClick={handleOpenCreate}
            style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 16px', borderRadius: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, cursor: 'pointer' }}
          >
            + ADD TESTIMONIAL
          </button>
        }
      />

      {/* CONFIRM DELETE DIALOG */}
      {deleteId && (
        <ConfirmDialog
          isOpen={true}
          title="Delete Testimonial Record?"
          message="Are you sure you want to delete this traveler testimonial? This will remove the story card from the homepage testimonials section."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}
