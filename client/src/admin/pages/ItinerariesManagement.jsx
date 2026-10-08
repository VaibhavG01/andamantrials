import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import DataTable from '../components/DataTable';
import ConfirmDialog from '../components/ConfirmDialog';
import { Plus, Edit3, Trash2, ArrowLeft, ArrowUp, ArrowDown, GripVertical, PlusCircle, Check, Trash } from 'lucide-react';

export default function ItinerariesManagement() {
  const [itineraries, setItineraries] = useState([]);
  const [packagesList, setPackagesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteItineraryId, setDeleteItineraryId] = useState(null);

  // View state: 'list', 'create', 'edit'
  const [view, setView] = useState('list');
  const [currentItinerary, setCurrentItinerary] = useState(null);
  
  // Main form fields
  const [itineraryForm, setItineraryForm] = useState({
    title: '',
    slug: '',
    description: '',
    durationDays: 5,
    durationNights: 4,
    coverImage: '',
    status: 'DRAFT',
  });

  // Day builder sub-form modal
  const [dayModalOpen, setDayModalOpen] = useState(false);
  const [editingDay, setEditingDay] = useState(null);
  const [deleteDayId, setDeleteDayId] = useState(null);
  const [dayForm, setDayForm] = useState({
    dayNumber: 1,
    date: '',
    location: '',
    title: '',
    description: '',
    image: '',
    accommodation: '',
    transport: '',
    activities: [],
    meals: {
      Breakfast: false,
      Lunch: false,
      Dinner: false,
    }
  });

  // Drag and Drop State
  const [draggedIdx, setDraggedIdx] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [res, pkgRes] = await Promise.all([
        adminService.getItineraries(),
        adminService.getPackages(),
      ]);
      if (res && res.data) {
        setItineraries(res.data.map(item => ({
          ...item,
          id: String(item.id)
        })));
      }
      if (pkgRes && pkgRes.data) {
        setPackagesList(Array.isArray(pkgRes.data) ? pkgRes.data : []);
      }
    } catch (e) {
      console.error('Failed to load itineraries or packages:', e);
    } finally {
      setLoading(false);
    }
  };

  const loadItineraries = loadData;

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenCreate = () => {
    setItineraryForm({
      title: '',
      slug: '',
      description: '',
      durationDays: 5,
      durationNights: 4,
      coverImage: 'https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=800&q=80',
      status: 'DRAFT',
    });
    setCurrentItinerary(null);
    setView('create');
  };

  const handleOpenEdit = async (itin) => {
    setLoading(true);
    try {
      const res = await adminService.getItinerary(itin.id);
      if (res && res.data) {
        setCurrentItinerary(res.data);
        setItineraryForm({
          title: res.data.title || '',
          slug: res.data.slug || '',
          description: res.data.description || '',
          durationDays: res.data.durationDays || 5,
          durationNights: res.data.durationNights || 4,
          coverImage: res.data.coverImage || '',
          status: res.data.status || 'DRAFT',
        });
        setView('edit');
      }
    } catch (err) {
      alert('Failed to load itinerary details.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveItinerary = async (e) => {
    e.preventDefault();
    if (!itineraryForm.title) return;

    const payload = {
      title: itineraryForm.title,
      slug: itineraryForm.slug || itineraryForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      description: itineraryForm.description,
      durationDays: parseInt(itineraryForm.durationDays),
      durationNights: parseInt(itineraryForm.durationNights),
      coverImage: itineraryForm.coverImage,
      status: itineraryForm.status,
    };

    try {
      if (view === 'edit' && currentItinerary) {
        await adminService.updateItinerary(currentItinerary.id, payload);
        alert('Itinerary header saved successfully.');
      } else {
        const res = await adminService.createItinerary(payload);
        alert('Itinerary created successfully! You can now add days.');
        if (res && res.data) {
          handleOpenEdit(res.data);
        }
      }
      loadItineraries();
    } catch (err) {
      alert('Failed to save: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDeleteItinerary = async () => {
    if (!deleteItineraryId) return;
    try {
      await adminService.deleteItinerary(deleteItineraryId);
      setDeleteItineraryId(null);
      loadItineraries();
      alert('Itinerary deleted successfully.');
    } catch (err) {
      alert('Failed to delete itinerary.');
    }
  };

  // Day Form Modal Actions
  const handleOpenAddDay = () => {
    const nextDayNum = currentItinerary?.days ? currentItinerary.days.length + 1 : 1;
    setEditingDay(null);
    setDayForm({
      dayNumber: nextDayNum,
      date: '',
      location: '',
      title: '',
      description: '',
      image: '',
      accommodation: '',
      transport: '',
      activities: [],
      meals: {
        Breakfast: true,
        Lunch: false,
        Dinner: true,
      }
    });
    setDayModalOpen(true);
  };

  const handleOpenEditDay = (day) => {
    setEditingDay(day);
    setDayForm({
      dayNumber: day.day,
      date: day.date || '',
      location: day.location || '',
      title: day.title || '',
      description: day.description || '',
      image: day.image || '',
      accommodation: day.accommodation || '',
      transport: day.transport || '',
      activities: day.activities || [],
      meals: {
        Breakfast: day.meals?.includes('Breakfast') || false,
        Lunch: day.meals?.includes('Lunch') || false,
        Dinner: day.meals?.includes('Dinner') || false,
      }
    });
    setDayModalOpen(true);
  };

  const handleSaveDay = async (e) => {
    e.preventDefault();
    if (!dayForm.title) return;

    // Convert meals object back to array
    const mealsArr = Object.keys(dayForm.meals).filter(key => dayForm.meals[key]);

    const payload = {
      dayNumber: dayForm.dayNumber,
      date: dayForm.date || null,
      location: dayForm.location,
      title: dayForm.title,
      description: dayForm.description,
      image: dayForm.image,
      accommodation: dayForm.accommodation,
      transport: dayForm.transport,
      activities: dayForm.activities,
      meals: mealsArr
    };

    try {
      if (editingDay) {
        await adminService.updateItineraryDay(currentItinerary.id, editingDay.id, payload);
        alert('Itinerary day updated.');
      } else {
        await adminService.addItineraryDay(currentItinerary.id, payload);
        alert('Itinerary day added.');
      }
      setDayModalOpen(false);
      // Reload current details
      handleOpenEdit(currentItinerary);
    } catch (err) {
      alert('Failed to save day: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDeleteDay = async () => {
    if (!deleteDayId) return;
    try {
      await adminService.deleteItineraryDay(currentItinerary.id, deleteDayId);
      setDeleteDayId(null);
      handleOpenEdit(currentItinerary);
      alert('Itinerary day deleted.');
    } catch (err) {
      alert('Failed to delete day.');
    }
  };

  // Activities array builder helpers
  const handleAddActivityField = () => {
    setDayForm(prev => ({
      ...prev,
      activities: [
        ...prev.activities,
        { activity: '', description: '', time: '', duration: '' }
      ]
    }));
  };

  const handleRemoveActivityField = (idx) => {
    setDayForm(prev => ({
      ...prev,
      activities: prev.activities.filter((_, i) => i !== idx)
    }));
  };

  const handleActivityChange = (idx, field, value) => {
    setDayForm(prev => {
      const updated = [...prev.activities];
      updated[idx] = {
        ...updated[idx],
        [field]: value
      };
      return {
        ...prev,
        activities: updated
      };
    });
  };

  // Drag and Drop functions
  const handleDragStart = (e, index) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === index) return;

    const reorderedDays = [...currentItinerary.days];
    const draggedItem = reorderedDays[draggedIdx];

    reorderedDays.splice(draggedIdx, 1);
    reorderedDays.splice(index, 0, draggedItem);

    // Update numbers
    const updatedDays = reorderedDays.map((d, i) => ({
      ...d,
      day: i + 1
    }));

    setDraggedIdx(index);
    setCurrentItinerary({
      ...currentItinerary,
      days: updatedDays
    });
  };

  const handleDragEnd = async () => {
    setDraggedIdx(null);
    try {
      const daysOrder = currentItinerary.days.map((d) => ({
        id: d.id,
        dayNumber: d.day
      }));
      await adminService.reorderItineraryDays(currentItinerary.id, daysOrder);
    } catch (err) {
      console.error('Failed to save drag order:', err);
    }
  };

  const handleViewPublic = (slug) => {
    window.open(`/itinerary-details?id=${slug}`, '_blank');
  };

  const columns = [
    {
      header: 'Itinerary Name',
      accessor: 'title',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {row.coverImage && (
            <img src={row.coverImage} alt={row.title} style={{ width: 50, height: 40, borderRadius: 8, objectFit: 'cover' }} />
          )}
          <div>
            <div style={{ color: '#334155', fontWeight: 800 }}>{row.title}</div>
            <div style={{ color: '#64748b', fontSize: 12.5 }}>/{row.slug}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Duration',
      render: (row) => (
        <span style={{ color: '#F06543', fontWeight: 800, fontSize: 11.5 }}>
          {row.durationDays} Days / {row.durationNights} Nights
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => (
        <span style={{
          background: row.status === 'PUBLISHED' ? 'rgba(33,230,193,0.15)' : '#e2e8f0',
          border: `1px solid ${row.status === 'PUBLISHED' ? '#F06543' : 'rgba(255,255,255,0.2)'}`,
          color: row.status === 'PUBLISHED' ? '#F06543' : '#9cb3bd',
          padding: '2px 8px', borderRadius: 8, fontSize: 12.5, fontWeight: 900
        }}>
          {row.status}
        </span>
      )
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => handleViewPublic(row.slug)}
            style={{ background: 'rgba(33, 230, 193, 0.1)', border: '1px solid rgba(33, 230, 193, 0.3)', color: '#F06543', padding: '4px 10px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            VIEW LIVE
          </button>
          <button
            onClick={() => handleOpenEdit(row)}
            style={{ background: 'rgba(22, 217, 255, 0.1)', border: '1px solid rgba(22, 217, 255, 0.3)', color: '#F06543', padding: '4px 10px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            EDIT
          </button>
          <button
            onClick={() => setDeleteItineraryId(row.id)}
            style={{ background: 'rgba(255, 79, 123, 0.1)', border: '1px solid rgba(255, 79, 123, 0.3)', color: '#ff4f7b', padding: '4px 10px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            DELETE
          </button>
        </div>
      )
    }
  ];

  if (view !== 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Back navigation header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => setView('list')}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#e2e8f0', border: '1px solid #e2e8f0', color: '#64748b', padding: '8px 16px', borderRadius: 14, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
          >
            <ArrowLeft size={14} /> Back to Directory
          </button>
          {currentItinerary && (
            <button
              onClick={() => handleViewPublic(currentItinerary.slug)}
              style={{ background: 'rgba(33, 230, 193, 0.12)', border: '1px solid rgba(33, 230, 193, 0.3)', color: '#F06543', padding: '8px 16px', borderRadius: 14, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}
            >
              Preview Live Details
            </button>
          )}
        </div>

        {/* ── MAIN ITINERARY EDIT FORM ── */}
        <form onSubmit={handleSaveItinerary} className="glass-box" style={{ display: 'flex', flexDirection: 'column', gap: 16, background: '#ffffff', padding: 28, borderRadius: 24, border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <h3 style={{ fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
              {view === 'create' ? 'Create Travel Package Blueprint' : 'Configure Travel Blueprint Header'}
            </h3>

            {packagesList.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F0F9FF', padding: '6px 12px', borderRadius: 10, border: '1px solid #BAE6FD' }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#0369A1' }}>⚡ Quick-Fill from Package:</span>
                <select
                  onChange={(e) => {
                    const selPkg = packagesList.find(p => String(p.id) === e.target.value);
                    if (selPkg) {
                      setItineraryForm({
                        title: selPkg.name,
                        slug: selPkg.slug || selPkg.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                        description: selPkg.description || '',
                        durationDays: parseInt(selPkg.duration) || 5,
                        durationNights: parseInt(selPkg.duration) ? parseInt(selPkg.duration) - 1 : 4,
                        coverImage: selPkg.image || selPkg.heroImage || '',
                        status: selPkg.status === 'ACTIVE' ? 'PUBLISHED' : 'DRAFT',
                      });
                    }
                  }}
                  defaultValue=""
                  style={{ background: '#ffffff', border: '1px solid #7DD3FC', borderRadius: 6, padding: '3px 8px', fontSize: 11.5, color: '#0284C7', fontWeight: 700, outline: 'none', cursor: 'pointer' }}
                >
                  <option value="" disabled>-- Select a Package to Import --</option>
                  {packagesList.map(p => (
                    <option key={p.id} value={p.id}>{p.name} ({p.duration || '5D'})</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>ITINERARY NAME</label>
              <input
                type="text"
                required
                value={itineraryForm.title}
                onChange={(e) => setItineraryForm({ ...itineraryForm, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') })}
                placeholder="e.g. Andaman Explorer"
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>URL SLUG</label>
              <input
                type="text"
                required
                value={itineraryForm.slug}
                onChange={(e) => setItineraryForm({ ...itineraryForm, slug: e.target.value })}
                placeholder="andaman-explorer"
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>NUMBER OF DAYS</label>
              <input
                type="number"
                required
                value={itineraryForm.durationDays}
                onChange={(e) => setItineraryForm({ ...itineraryForm, durationDays: e.target.value })}
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>NUMBER OF NIGHTS</label>
              <input
                type="number"
                required
                value={itineraryForm.durationNights}
                onChange={(e) => setItineraryForm({ ...itineraryForm, durationNights: e.target.value })}
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>STATUS</label>
              <select
                value={itineraryForm.status}
                onChange={(e) => setItineraryForm({ ...itineraryForm, status: e.target.value })}
                style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
              >
                <option value="DRAFT">DRAFT</option>
                <option value="PUBLISHED">PUBLISHED</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>COVER IMAGE URL</label>
            <input
              type="text"
              value={itineraryForm.coverImage}
              onChange={(e) => setItineraryForm({ ...itineraryForm, coverImage: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>DESCRIPTION</label>
            <textarea
              value={itineraryForm.description}
              onChange={(e) => setItineraryForm({ ...itineraryForm, description: e.target.value })}
              rows={3}
              style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <button
              type="submit"
              style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '12px 28px', borderRadius: 14, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}
            >
              {view === 'create' ? 'Save and Continue' : 'Update Header'}
            </button>
          </div>
        </form>

        {/* ── ITINERARY DAYS BUILDER (Visible only in edit view) ── */}
        {view === 'edit' && currentItinerary && (
          <div className="glass-box" style={{ display: 'flex', flexDirection: 'column', gap: 16, background: '#ffffff', padding: 28, borderRadius: 24, border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 900, color: '#0B2545', margin: 0 }}>Day-by-Day Journey Builder</h4>
                <p style={{ fontSize: 11, color: '#64748b', margin: '4px 0 0' }}>Drag and drop days to reorder. Changes update instantly in the database.</p>
              </div>
              <button
                onClick={handleOpenAddDay}
                style={{ background: 'rgba(33, 230, 193, 0.12)', border: '1px solid rgba(33, 230, 193, 0.3)', color: '#F06543', padding: '6px 14px', borderRadius: 12, fontSize: 11, fontWeight: 900, cursor: 'pointer' }}
              >
                + ADD DAY
              </button>
            </div>

            {/* List of Days (Draggable) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {currentItinerary.days && currentItinerary.days.length > 0 ? (
                currentItinerary.days.map((day, idx) => (
                  <div
                    key={day.id || idx}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDragEnd={handleDragEnd}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: draggedIdx === idx ? 'rgba(22, 217, 255, 0.08)' : 'rgba(4, 20, 33, 0.7)',
                      border: draggedIdx === idx ? '1px dashed #F06543' : '1px solid #e2e8f0',
                      padding: '12px 20px', borderRadius: 16, cursor: 'move', transition: 'background 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <GripVertical size={16} color="rgba(255,255,255,0.25)" />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 900, background: 'linear-gradient(135deg, #FF6B4A, #F06543)', color: '#ffffff', padding: '3px 10px', borderRadius: 8 }}>
                        DAY {String(day.day).padStart(2, '0')}
                      </span>
                      <div>
                        <div style={{ color: '#334155', fontSize: 13, fontWeight: 800 }}>{day.title}</div>
                        <div style={{ color: '#64748b', fontSize: 12.5 }}>📍 {day.location} • Stay: {day.accommodation || 'None'} • Transport: {day.transport || 'None'}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        type="button"
                        onClick={() => handleOpenEditDay(day)}
                        style={{ background: 'rgba(22,217,255,0.08)', border: '1px solid rgba(22,217,255,0.2)', color: '#F06543', padding: '4px 8px', borderRadius: 8, fontSize: 12.5, fontWeight: 800, cursor: 'pointer' }}
                      >
                        EDIT DAY
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeleteDayId(day.id)}
                        style={{ background: 'rgba(255,79,123,0.08)', border: '1px solid rgba(255,79,123,0.2)', color: '#ff4f7b', padding: '4px 8px', borderRadius: 8, fontSize: 12.5, fontWeight: 800, cursor: 'pointer' }}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textSet: 'center', padding: '40px 0', border: '1px dashed #e2e8f0', borderRadius: 16, color: '#64748b', fontSize: 12, textAlign: 'center' }}>
                  No days configured for this itinerary yet. Click "+ ADD DAY" to begin.
                </div>
              )}
            </div>
          </div>
        )}

        {/* DAY EDIT FORM MODAL */}
        {dayModalOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1600, background: 'rgba(2,11,18,0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <form onSubmit={handleSaveDay} style={{ width: '100%', maxWidth: 660, background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 24, padding: 28, boxShadow: '0 25px 60px rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', gap: 14, maxHeight: '90vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                  {editingDay ? `Configure Day ${dayForm.dayNumber} Details` : `Add Day ${dayForm.dayNumber} Details`}
                </h4>
                <button type="button" onClick={() => setDayModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 18, cursor: 'pointer' }}>✕</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '0.4fr 0.6fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>DAY NUMBER</label>
                  <input
                    type="number"
                    required
                    value={dayForm.dayNumber}
                    onChange={(e) => setDayForm({ ...dayForm, dayNumber: e.target.value })}
                    style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>DATE (YYYY-MM-DD)</label>
                  <input
                    type="text"
                    value={dayForm.date}
                    onChange={(e) => setDayForm({ ...dayForm, date: e.target.value })}
                    placeholder="2026-08-20"
                    style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>LOCATION</label>
                  <input
                    type="text"
                    required
                    value={dayForm.location}
                    onChange={(e) => setDayForm({ ...dayForm, location: e.target.value })}
                    placeholder="e.g. Port Blair / Havelock"
                    style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>DAY TITLE</label>
                <input
                  type="text"
                  required
                  value={dayForm.title}
                  onChange={(e) => setDayForm({ ...dayForm, title: e.target.value })}
                  placeholder="e.g. Arrival & Island Welcome"
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>DESCRIPTION</label>
                <textarea
                  value={dayForm.description}
                  onChange={(e) => setDayForm({ ...dayForm, description: e.target.value })}
                  rows={2}
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>ACCOMMODATION STAY</label>
                  <input
                    type="text"
                    value={dayForm.accommodation}
                    onChange={(e) => setDayForm({ ...dayForm, accommodation: e.target.value })}
                    placeholder="e.g. Port Blair Hotel"
                    style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>TRAVEL / TRANSPORT</label>
                  <input
                    type="text"
                    value={dayForm.transport}
                    onChange={(e) => setDayForm({ ...dayForm, transport: e.target.value })}
                    placeholder="e.g. Private Cab / Ferry"
                    style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>DAY IMAGE URL</label>
                <input
                  type="text"
                  value={dayForm.image}
                  onChange={(e) => setDayForm({ ...dayForm, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              {/* Meals Checklist */}
              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 6 }}>MEALS INCLUDED</label>
                <div style={{ display: 'flex', gap: 20 }}>
                  {['Breakfast', 'Lunch', 'Dinner'].map(meal => (
                    <label key={meal} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, cursor: 'pointer', color: '#0B2545' }}>
                      <input
                        type="checkbox"
                        checked={dayForm.meals[meal]}
                        onChange={(e) => setDayForm({
                          ...dayForm,
                          meals: {
                            ...dayForm.meals,
                            [meal]: e.target.checked
                          }
                        })}
                        style={{ cursor: 'pointer' }}
                      />
                      {meal}
                    </label>
                  ))}
                </div>
              </div>

              {/* Activities Builder Subsegment */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <label style={{ fontSize: 11, fontWeight: 900, color: '#F06543' }}>DAY ACTIVITIES</label>
                  <button
                    type="button"
                    onClick={handleAddActivityField}
                    style={{ background: 'none', border: 'none', color: '#F06543', fontSize: 11, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                  >
                    <PlusCircle size={14} /> Add Activity
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {dayForm.activities.map((act, actIdx) => (
                    <div key={actIdx} style={{ display: 'flex', gap: 8, alignItems: 'center', background: '#e2e8f0', padding: 10, borderRadius: 12, border: '1px solid #e2e8f0' }}>
                      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 0.5fr 0.5fr', gap: 8 }}>
                        <input
                          type="text"
                          required
                          value={act.activity}
                          onChange={(e) => handleActivityChange(actIdx, 'activity', e.target.value)}
                          placeholder="Activity Name"
                          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 6, color: '#334155', fontSize: 12 }}
                        />
                        <input
                          type="text"
                          value={act.description}
                          onChange={(e) => handleActivityChange(actIdx, 'description', e.target.value)}
                          placeholder="Description / Note"
                          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 6, color: '#334155', fontSize: 12 }}
                        />
                        <input
                          type="text"
                          value={act.time}
                          onChange={(e) => handleActivityChange(actIdx, 'time', e.target.value)}
                          placeholder="09:00 AM"
                          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 6, color: '#334155', fontSize: 12 }}
                        />
                        <input
                          type="text"
                          value={act.duration}
                          onChange={(e) => handleActivityChange(actIdx, 'duration', e.target.value)}
                          placeholder="2 Hours"
                          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 6, color: '#334155', fontSize: 12 }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveActivityField(actIdx)}
                        style={{ background: 'rgba(255,79,123,0.1)', border: 'none', color: '#ff4f7b', width: 26, height: 26, borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
                <button
                  type="button"
                  onClick={() => setDayModalOpen(false)}
                  style={{ background: '#e2e8f0', border: '1px solid #e2e8f0', color: '#b2c8d2', padding: '10px 20px', borderRadius: 14, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '10px 24px', borderRadius: 14, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}
                >
                  Save Day Info
                </button>
              </div>
            </form>
          </div>
        )}

        {/* CONFIRM DELETE DAY */}
        {deleteDayId && (
          <ConfirmDialog
            isOpen={true}
            title={`Delete Day ${currentItinerary.days.find(d => d.id === deleteDayId)?.day || ''}?`}
            message="Are you sure you want to delete this day? Remaining days will be automatically renumbered sequentially."
            onConfirm={handleDeleteDay}
            onCancel={() => setDeleteDayId(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Travel Blueprints & Itineraries"
        subtitle="DYNAMIC TOUR SCHEDULE CMS"
        columns={columns}
        data={itineraries}
        loading={loading}
        searchPlaceholder="Search itinerary title, slug, or status..."
        actions={
          <button
            onClick={handleOpenCreate}
            style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 16px', borderRadius: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, cursor: 'pointer' }}
          >
            + CREATE ITINERARY
          </button>
        }
      />

      {/* CONFIRM DELETE ITINERARY */}
      {deleteItineraryId && (
        <ConfirmDialog
          isOpen={true}
          title="Delete Tour Itinerary?"
          message="Are you sure you want to delete this itinerary package? This will permanently erase the itinerary days, transport lists, and meal plans from the database."
          onConfirm={handleDeleteItinerary}
          onCancel={() => setDeleteItineraryId(null)}
        />
      )}
    </div>
  );
}
