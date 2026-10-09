import React, { useState, useEffect } from 'react';
import {
  Calendar, Clock, Users, Plus, Filter, RefreshCw,
  Edit2, Trash2, CheckCircle, AlertTriangle, XCircle, Eye,
  Sparkles, Layers, MapPin, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight, Check
} from 'lucide-react';
import { activityService } from '../../api/activityService';
import ConfirmDialog from '../components/ConfirmDialog';

export default function ActivitySlotsManagement() {
  const [activities, setActivities] = useState([]);
  const [selectedActivityId, setSelectedActivityId] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const [slots, setSlots] = useState([]);
  const [totalSlots, setTotalSlots] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Modals
  const [recurringModalOpen, setRecurringModalOpen] = useState(false);
  const [singleModalOpen, setSingleModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [bookingsModalSlot, setBookingsModalSlot] = useState(null);
  const [slotBookings, setSlotBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(false);

  // Single Slot Form State
  const [slotForm, setSlotForm] = useState({
    activityId: '',
    activityLocationId: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '08:00',
    endTime: '10:30',
    capacity: 15,
    priceOverride: '',
    childPriceOverride: '',
    status: 'ACTIVE',
    notes: '',
  });

  // Recurring Generator State
  const [recurringForm, setRecurringForm] = useState({
    activityId: '',
    activityLocationId: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    capacity: 15,
    priceOverride: '',
    childPriceOverride: '',
    timeSlots: [
      { startTime: '06:30', endTime: '09:00', capacity: 15 },
      { startTime: '09:30', endTime: '12:00', capacity: 15 },
      { startTime: '14:00', endTime: '16:30', capacity: 15 },
    ],
  });

  // Load activities on mount
  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      const data = await activityService.adminGetActivities();
      setActivities(data || []);
      if (data && data.length > 0) {
        // Read URL param if present
        const urlParams = new URLSearchParams(window.location.search);
        const actIdParam = urlParams.get('activityId');
        const defaultId = actIdParam && data.some(a => String(a.id) === actIdParam)
          ? actIdParam
          : String(data[0].id);

        setSelectedActivityId(defaultId);
        loadLocationsForActivity(defaultId);
      }
    } catch (err) {
      console.error('Failed to load activities:', err);
    }
  };

  const loadLocationsForActivity = async (activityId) => {
    if (!activityId) {
      setLocations([]);
      return;
    }
    try {
      const locs = await activityService.getActivityLocations(activityId);
      setLocations(locs || []);
      if (locs && locs.length > 0) {
        setSelectedLocationId(String(locs[0].id));
      } else {
        setSelectedLocationId('');
      }
    } catch (err) {
      console.error('Failed to load locations:', err);
      setLocations([]);
    }
  };

  // Handle activity change
  const handleActivityChange = (actId) => {
    setSelectedActivityId(actId);
    setSelectedLocationId('');
    setPage(1);
    loadLocationsForActivity(actId);
  };

  // Load Slots whenever filters change
  const loadSlots = async () => {
    setLoading(true);
    try {
      const params = {
        page,
        limit,
      };
      if (selectedActivityId) params.activityId = selectedActivityId;
      if (selectedLocationId) params.locationId = selectedLocationId;
      if (selectedDate) params.date = selectedDate;
      if (statusFilter && statusFilter !== 'ALL') params.status = statusFilter;

      const res = await activityService.adminGetSlots(params);
      setSlots(res.slots || []);
      setTotalSlots(res.total || 0);
    } catch (err) {
      console.error('Failed to load slots:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSlots();
  }, [selectedActivityId, selectedLocationId, selectedDate, statusFilter, page, limit]);

  // Open Create Single Slot
  const handleOpenSingleCreate = () => {
    setEditingSlot(null);
    setSlotForm({
      activityId: selectedActivityId || (activities[0]?.id ? String(activities[0].id) : ''),
      activityLocationId: selectedLocationId || (locations[0]?.id ? String(locations[0].id) : ''),
      date: selectedDate || new Date().toISOString().split('T')[0],
      startTime: '08:00',
      endTime: '10:30',
      capacity: 15,
      priceOverride: '',
      childPriceOverride: '',
      status: 'ACTIVE',
      notes: '',
    });
    setSingleModalOpen(true);
  };

  // Open Edit Single Slot
  const handleOpenSingleEdit = (slot) => {
    setEditingSlot(slot);
    setSlotForm({
      activityId: String(slot.activityId),
      activityLocationId: String(slot.locationId || slot.activityLocationId || (locations[0]?.id ? locations[0].id : '')),
      date: slot.date,
      startTime: slot.startTime,
      endTime: slot.endTime,
      capacity: slot.capacity,
      priceOverride: slot.priceOverride ? String(slot.priceOverride) : '',
      childPriceOverride: slot.childPriceOverride ? String(slot.childPriceOverride) : '',
      status: slot.status || 'ACTIVE',
      notes: slot.notes || '',
    });
    setSingleModalOpen(true);
  };

  // Save Single Slot (Create or Update)
  const handleSaveSingleSlot = async (e) => {
    e.preventDefault();
    if (!slotForm.activityId || !slotForm.activityLocationId || !slotForm.date || !slotForm.startTime || !slotForm.endTime) {
      alert('Please complete all required fields.');
      return;
    }

    const payload = {
      activityId: Number(slotForm.activityId),
      activityLocationId: Number(slotForm.activityLocationId),
      date: slotForm.date,
      startTime: slotForm.startTime,
      endTime: slotForm.endTime,
      capacity: Number(slotForm.capacity) || 1,
      priceOverride: slotForm.priceOverride ? Number(slotForm.priceOverride) : null,
      childPriceOverride: slotForm.childPriceOverride ? Number(slotForm.childPriceOverride) : null,
      status: slotForm.status,
      notes: slotForm.notes,
    };

    try {
      if (editingSlot) {
        await activityService.adminUpdateSlot(editingSlot.id, payload);
        alert('Slot updated successfully.');
      } else {
        await activityService.adminCreateSlot(payload);
        alert('Slot created successfully.');
      }
      setSingleModalOpen(false);
      loadSlots();
    } catch (err) {
      alert('Failed to save slot: ' + (err.message || 'Unknown error'));
    }
  };

  // Delete Slot
  const handleDeleteSlot = async () => {
    if (!deleteId) return;
    try {
      await activityService.adminDeleteSlot(deleteId);
      setDeleteId(null);
      loadSlots();
    } catch (err) {
      alert('Failed to delete slot: ' + (err.message || 'Slot may have existing bookings.'));
    }
  };

  // Toggle Status
  const handleToggleStatus = async (slotId) => {
    try {
      await activityService.adminToggleSlotStatus(slotId);
      loadSlots();
    } catch (err) {
      alert('Failed to toggle slot status.');
    }
  };

  // View Slot Bookings
  const handleViewBookings = async (slot) => {
    setBookingsModalSlot(slot);
    setBookingsLoading(true);
    try {
      const bookings = await activityService.adminGetSlotBookings(slot.id);
      setSlotBookings(bookings || []);
    } catch (err) {
      console.error('Failed to load slot bookings:', err);
      setSlotBookings([]);
    } finally {
      setBookingsLoading(false);
    }
  };

  // Open Recurring Generator
  const handleOpenRecurringModal = () => {
    const act = activities.find(a => String(a.id) === String(selectedActivityId)) || activities[0];
    setRecurringForm({
      activityId: act ? String(act.id) : '',
      activityLocationId: selectedLocationId || (locations[0]?.id ? String(locations[0].id) : ''),
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
      capacity: 15,
      priceOverride: '',
      childPriceOverride: '',
      timeSlots: [
        { startTime: '06:30', endTime: '09:00', capacity: 15 },
        { startTime: '09:30', endTime: '12:00', capacity: 15 },
        { startTime: '14:00', endTime: '16:30', capacity: 15 },
      ],
    });
    setRecurringModalOpen(true);
  };

  // Handle Recurring Generator Submit
  const handleGenerateRecurring = async (e) => {
    e.preventDefault();
    if (!recurringForm.activityId || !recurringForm.activityLocationId || !recurringForm.startDate || !recurringForm.endDate) {
      alert('Please fill out all required fields.');
      return;
    }

    if (!recurringForm.timeSlots || recurringForm.timeSlots.length === 0) {
      alert('Please add at least one time slot.');
      return;
    }

    const payload = {
      activityId: Number(recurringForm.activityId),
      activityLocationId: Number(recurringForm.activityLocationId),
      startDate: recurringForm.startDate,
      endDate: recurringForm.endDate,
      daysOfWeek: recurringForm.daysOfWeek,
      timeSlots: recurringForm.timeSlots.map(t => ({
        startTime: t.startTime,
        endTime: t.endTime,
        capacity: Number(t.capacity) || 15,
        priceOverride: t.priceOverride ? Number(t.priceOverride) : (recurringForm.priceOverride ? Number(recurringForm.priceOverride) : null),
        childPriceOverride: t.childPriceOverride ? Number(t.childPriceOverride) : (recurringForm.childPriceOverride ? Number(recurringForm.childPriceOverride) : null),
      })),
    };

    try {
      setLoading(true);
      const res = await activityService.adminGenerateRecurringSlots(payload);
      alert(`Success! Generated ${res.createdCount || 0} slots.`);
      setRecurringModalOpen(false);
      loadSlots();
    } catch (err) {
      alert('Failed to generate recurring slots: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const totalPages = Math.ceil(totalSlots / limit) || 1;

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
      range.push(i);
    }

    if (page - delta > 2) {
      range.unshift('...');
    }
    if (page + delta < totalPages - 1) {
      range.push('...');
    }

    range.unshift(1);
    if (totalPages > 1 && !range.includes(totalPages)) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>
            REAL-TIME CAPACITY & SCHEDULER
          </span>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: '#0B2545', margin: '4px 0 0', fontFamily: "'Space Grotesk', sans-serif" }}>
            Activity Slots & Availability Engine
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            onClick={loadSlots}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569',
              padding: '10px 16px', borderRadius: 12, fontSize: 12, fontWeight: 800,
              cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            <RefreshCw size={14} /> Refresh
          </button>
          <button
            onClick={handleOpenRecurringModal}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg, #0B2545, #004599)', border: 'none', color: '#ffffff',
              padding: '10px 18px', borderRadius: 12, fontSize: 12, fontWeight: 800,
              cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 4px 14px rgba(0, 45, 98, 0.25)'
            }}
          >
            <Sparkles size={15} color="#2dd4bf" /> Recurring Batch Generator
          </button>
          <button
            onClick={handleOpenSingleCreate}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff',
              padding: '10px 18px', borderRadius: 12, fontSize: 12, fontWeight: 900,
              cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 4px 14px rgba(0, 150, 136, 0.25)'
            }}
          >
            <Plus size={16} /> + Add Single Slot
          </button>
        </div>
      </div>

      {/* Filter Control Center */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 18, padding: 20, boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, alignItems: 'center' }}>
          {/* Activity Selector */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: 6 }}>
              Select Activity
            </label>
            <select
              value={selectedActivityId}
              onChange={(e) => handleActivityChange(e.target.value)}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                background: '#f8fafc', color: '#0f172a', fontWeight: 600, fontSize: 13, outline: 'none'
              }}
            >
              {activities.map((act) => (
                <option key={act.id} value={act.id}>{act.name} ({act.category})</option>
              ))}
            </select>
          </div>

          {/* Location Selector */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: 6 }}>
              Location & Pricing
            </label>
            <select
              value={selectedLocationId}
              onChange={(e) => {
                setSelectedLocationId(e.target.value);
                setPage(1);
              }}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                background: '#f8fafc', color: '#0f172a', fontWeight: 600, fontSize: 13, outline: 'none'
              }}
            >
              <option value="">All Locations for Activity</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.locationName} (₹{loc.adultPrice} Adult / ₹{loc.childPrice || 0} Child)
                </option>
              ))}
            </select>
          </div>

          {/* Date Filter */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: 6 }}>
              Filter by Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setPage(1);
              }}
              style={{
                width: '100%', padding: '9px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                background: '#f8fafc', color: '#0f172a', fontWeight: 600, fontSize: 13, outline: 'none'
              }}
            />
          </div>

          {/* Status Filter */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: 6 }}>
              Slot Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #cbd5e1',
                background: '#f8fafc', color: '#0f172a', fontWeight: 600, fontSize: 13, outline: 'none'
              }}
            >
              <option value="ALL">All Statuses</option>
              <option value="ACTIVE">ACTIVE (Open)</option>
              <option value="SOLD_OUT">SOLD_OUT (Capacity Filled)</option>
              <option value="CANCELLED">CANCELLED (Suspended)</option>
              <option value="COMPLETED">COMPLETED (Past)</option>
            </select>
          </div>
        </div>

        {selectedDate && (
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#64748b' }}>Filtered to date: <b>{selectedDate}</b></span>
            <button
              onClick={() => {
                setSelectedDate('');
                setPage(1);
              }}
              style={{ background: 'none', border: 'none', color: '#F06543', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}
            >
              Clear Date Filter
            </button>
          </div>
        )}
      </div>

      {/* Slots Table Container */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        {/* Table Top Controls & Page Size */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #f1f5f9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>
              {totalSlots === 0
                ? '0 Scheduled Slots'
                : `Showing ${(page - 1) * limit + 1} – ${Math.min(page * limit, totalSlots)} of ${totalSlots} Scheduled Slots`}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#64748b', fontWeight: 700 }}>Show:</span>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              style={{
                padding: '6px 12px',
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                background: '#f8fafc',
                color: '#0B2545',
                fontWeight: 800,
                fontSize: 12,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
              <option value={100}>100 per page</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div style={{ padding: 48, textAlign: 'center', color: '#64748b' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid #e2e8f0', borderTopColor: '#F06543', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            <span>Loading live activity slots...</span>
          </div>
        ) : slots.length === 0 ? (
          <div style={{ padding: 48, textAlign: 'center', color: '#64748b' }}>
            <Calendar size={40} color="#cbd5e1" style={{ margin: '0 auto 12px' }} />
            <h4 style={{ margin: 0, color: '#0f172a', fontWeight: 800 }}>No Time Slots Found</h4>
            <p style={{ margin: '6px 0 16px', fontSize: 13 }}>
              No slots match your active filters. Generate recurring slots for this activity or add a single slot.
            </p>
            <button
              onClick={handleOpenRecurringModal}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff',
                padding: '9px 18px', borderRadius: 12, fontSize: 12, fontWeight: 800, cursor: 'pointer'
              }}
            >
              Generate 30-Day Schedule
            </button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '12px 18px' }}>Date & Time</th>
                  <th style={{ padding: '12px 18px' }}>Activity & Location</th>
                  <th style={{ padding: '12px 18px' }}>Capacity & Bookings</th>
                  <th style={{ padding: '12px 18px' }}>Pricing</th>
                  <th style={{ padding: '12px 18px' }}>Status</th>
                  <th style={{ padding: '12px 18px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {slots.map((slot) => {
                  const available = Math.max(0, slot.capacity - (slot.bookedCount || 0) - (slot.reservedCount || 0));
                  const percentFilled = Math.min(100, Math.round(((slot.bookedCount + slot.reservedCount) / slot.capacity) * 100));

                  const locName = slot.location?.locationName || slot.activityLocation?.locationName || 'Main Location';
                  const adultPrice = slot.priceOverride || slot.location?.adultPrice || slot.activityLocation?.adultPrice || slot.activity?.price || 0;
                  const childPrice = slot.childPriceOverride || slot.location?.childPrice || slot.activityLocation?.childPrice || null;

                  return (
                    <tr key={slot.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}>
                      {/* Date & Time */}
                      <td style={{ padding: '14px 18px' }}>
                        <div style={{ fontWeight: 800, color: '#0B2545' }}>{slot.date}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#F06543', fontSize: 12, fontWeight: 700, marginTop: 2 }}>
                          <Clock size={13} /> {slot.startTime} – {slot.endTime}
                        </div>
                      </td>

                      {/* Activity & Location */}
                      <td style={{ padding: '14px 18px' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a' }}>{slot.activity?.name || 'Activity'}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: 12, marginTop: 2 }}>
                          <MapPin size={12} /> {locName}
                        </div>
                      </td>

                      {/* Capacity & Bookings */}
                      <td style={{ padding: '14px 18px', minWidth: 180 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                          <span style={{ fontWeight: 800, color: available === 0 ? '#ef4444' : '#F06543' }}>
                            {available} seats left
                          </span>
                          <span style={{ color: '#64748b' }}>
                            {slot.bookedCount || 0}/{slot.capacity} Booked
                            {slot.reservedCount > 0 ? ` (${slot.reservedCount} hold)` : ''}
                          </span>
                        </div>
                        <div style={{ width: '100%', height: 6, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{
                            width: `${percentFilled}%`,
                            height: '100%',
                            background: percentFilled >= 100 ? '#ef4444' : percentFilled >= 75 ? '#f59e0b' : '#F06543',
                            borderRadius: 3
                          }} />
                        </div>
                      </td>

                      {/* Pricing */}
                      <td style={{ padding: '14px 18px' }}>
                        <div>
                          <span style={{ fontWeight: 800, color: '#F06543' }}>
                            ₹{adultPrice}
                          </span>
                          <span style={{ color: '#64748b', fontSize: 11 }}> /adult</span>
                        </div>
                        {childPrice ? (
                          <div style={{ color: '#64748b', fontSize: 11 }}>
                            ₹{childPrice} /child
                          </div>
                        ) : null}
                      </td>

                      {/* Status */}
                      <td style={{ padding: '14px 18px' }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 800,
                          background: slot.status === 'ACTIVE' ? '#ecfdf5' : slot.status === 'SOLD_OUT' ? '#fff1f2' : '#f1f5f9',
                          color: slot.status === 'ACTIVE' ? '#059669' : slot.status === 'SOLD_OUT' ? '#e11d48' : '#64748b',
                          border: `1px solid ${slot.status === 'ACTIVE' ? '#a7f3d0' : slot.status === 'SOLD_OUT' ? '#fecdd3' : '#e2e8f0'}`
                        }}>
                          {slot.status === 'ACTIVE' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                          {slot.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                          <button
                            onClick={() => handleViewBookings(slot)}
                            title="View Bookings Dossier"
                            style={{
                              background: 'rgba(0, 45, 98, 0.08)', border: 'none', color: '#0B2545',
                              padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer',
                              display: 'flex', alignItems: 'center', gap: 4
                            }}
                          >
                            <Eye size={13} /> {slot.bookedCount || 0}
                          </button>

                          <button
                            onClick={() => handleToggleStatus(slot.id)}
                            title="Toggle Active / Sold Out"
                            style={{
                              background: slot.status === 'ACTIVE' ? '#fef3c7' : '#ecfdf5',
                              border: 'none',
                              color: slot.status === 'ACTIVE' ? '#d97706' : '#059669',
                              padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer'
                            }}
                          >
                            {slot.status === 'ACTIVE' ? 'Close' : 'Open'}
                          </button>

                          <button
                            onClick={() => handleOpenSingleEdit(slot)}
                            title="Edit Slot Capacity & Time"
                            style={{
                              background: '#f8fafc', border: '1px solid #cbd5e1', color: '#475569',
                              padding: '6px 8px', borderRadius: 8, cursor: 'pointer'
                            }}
                          >
                            <Edit2 size={13} />
                          </button>

                          <button
                            onClick={() => setDeleteId(slot.id)}
                            title="Delete Slot"
                            style={{
                              background: '#fff1f2', border: '1px solid #fecdd3', color: '#e11d48',
                              padding: '6px 8px', borderRadius: 8, cursor: 'pointer'
                            }}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Navigation Footer */}
        {totalSlots > 0 && (
          <div style={{
            padding: '14px 20px',
            borderTop: '1px solid #f1f5f9',
            background: '#fafbfd',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12
          }}>
            <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>
              Page <b style={{ color: '#0B2545' }}>{page}</b> of <b style={{ color: '#0B2545' }}>{totalPages}</b> ({totalSlots} total entries)
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {/* First Page */}
              <button
                disabled={page <= 1}
                onClick={() => setPage(1)}
                title="First Page"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 8,
                  border: '1px solid #e2e8f0', background: page <= 1 ? '#f8fafc' : '#ffffff',
                  color: page <= 1 ? '#cbd5e1' : '#0B2545',
                  cursor: page <= 1 ? 'not-allowed' : 'pointer',
                  fontWeight: 700, fontSize: 12, transition: 'all 0.15s'
                }}
              >
                <ChevronsLeft size={14} />
              </button>

              {/* Prev Page */}
              <button
                disabled={page <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                title="Previous Page"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 8,
                  border: '1px solid #e2e8f0', background: page <= 1 ? '#f8fafc' : '#ffffff',
                  color: page <= 1 ? '#cbd5e1' : '#0B2545',
                  cursor: page <= 1 ? 'not-allowed' : 'pointer',
                  fontWeight: 700, fontSize: 12, transition: 'all 0.15s'
                }}
              >
                <ChevronLeft size={14} />
              </button>

              {/* Numbered Page Buttons */}
              {getPaginationRange().map((pNum, idx) => {
                if (pNum === '...') {
                  return (
                    <span key={`ellipsis-${idx}`} style={{ padding: '0 4px', color: '#94a3b8', fontSize: 12, fontWeight: 700 }}>
                      …
                    </span>
                  );
                }
                const isCurrent = pNum === page;
                return (
                  <button
                    key={pNum}
                    onClick={() => setPage(pNum)}
                    style={{
                      minWidth: 32, height: 32, padding: '0 8px', borderRadius: 8,
                      border: isCurrent ? 'none' : '1px solid #e2e8f0',
                      background: isCurrent ? 'linear-gradient(135deg, #0B2545, #004599)' : '#ffffff',
                      color: isCurrent ? '#ffffff' : '#334155',
                      boxShadow: isCurrent ? '0 2px 8px rgba(0,45,98,0.25)' : 'none',
                      cursor: 'pointer',
                      fontWeight: 800, fontSize: 12, transition: 'all 0.15s'
                    }}
                  >
                    {pNum}
                  </button>
                );
              })}

              {/* Next Page */}
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                title="Next Page"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 8,
                  border: '1px solid #e2e8f0', background: page >= totalPages ? '#f8fafc' : '#ffffff',
                  color: page >= totalPages ? '#cbd5e1' : '#0B2545',
                  cursor: page >= totalPages ? 'not-allowed' : 'pointer',
                  fontWeight: 700, fontSize: 12, transition: 'all 0.15s'
                }}
              >
                <ChevronRight size={14} />
              </button>

              {/* Last Page */}
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(totalPages)}
                title="Last Page"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 8,
                  border: '1px solid #e2e8f0', background: page >= totalPages ? '#f8fafc' : '#ffffff',
                  color: page >= totalPages ? '#cbd5e1' : '#0B2545',
                  cursor: page >= totalPages ? 'not-allowed' : 'pointer',
                  fontWeight: 700, fontSize: 12, transition: 'all 0.15s'
                }}
              >
                <ChevronsRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* RECURRING SCHEDULE GENERATOR MODAL */}
      {recurringModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1500,
          background: 'rgba(2, 11, 18, 0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}>
          <form
            onSubmit={handleGenerateRecurring}
            style={{
              width: '100%', maxWidth: 640, background: '#ffffff',
              border: '1.5px solid #e2e8f0', borderRadius: 24, padding: 28,
              boxShadow: '0 25px 60px rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', gap: 16,
              maxHeight: '90vh', overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif" }}>BATCH SCHEDULE ENGINE</span>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Generate Recurring Activity Slots
                </h3>
              </div>
              <button type="button" onClick={() => setRecurringModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 20, cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>TARGET ACTIVITY</label>
                <select
                  required
                  value={recurringForm.activityId}
                  onChange={(e) => {
                    const actId = e.target.value;
                    setRecurringForm(prev => ({ ...prev, activityId: actId }));
                    loadLocationsForActivity(actId);
                  }}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                >
                  {activities.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>LOCATION</label>
                <select
                  required
                  value={recurringForm.activityLocationId}
                  onChange={(e) => setRecurringForm(prev => ({ ...prev, activityLocationId: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                >
                  {locations.map(l => <option key={l.id} value={l.id}>{l.locationName}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>START DATE</label>
                <input
                  type="date"
                  required
                  value={recurringForm.startDate}
                  onChange={(e) => setRecurringForm(prev => ({ ...prev, startDate: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>END DATE</label>
                <input
                  type="date"
                  required
                  value={recurringForm.endDate}
                  onChange={(e) => setRecurringForm(prev => ({ ...prev, endDate: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>
            </div>

            {/* Days of week */}
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 6 }}>DAYS OF WEEK</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {dayLabels.map((day, idx) => {
                  const isSelected = recurringForm.daysOfWeek.includes(idx);
                  return (
                    <button
                      type="button"
                      key={day}
                      onClick={() => {
                        const updated = isSelected
                          ? recurringForm.daysOfWeek.filter(d => d !== idx)
                          : [...recurringForm.daysOfWeek, idx];
                        setRecurringForm(prev => ({ ...prev, daysOfWeek: updated }));
                      }}
                      style={{
                        padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer',
                        background: isSelected ? '#F06543' : '#f1f5f9',
                        color: isSelected ? '#ffffff' : '#64748b',
                        border: 'none'
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Daily Time Slots */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <label style={{ fontSize: 11, fontWeight: 800, color: '#64748b' }}>DAILY TIME SLOTS & SEAT CAPACITIES</label>
                <button
                  type="button"
                  onClick={() => setRecurringForm(prev => ({
                    ...prev,
                    timeSlots: [...prev.timeSlots, { startTime: '12:00', endTime: '14:30', capacity: 15 }]
                  }))}
                  style={{ background: 'none', border: 'none', color: '#F06543', fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                >
                  + Add Another Slot
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {recurringForm.timeSlots.map((ts, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 100px 36px', gap: 8, alignItems: 'center', background: '#f8fafc', padding: 10, borderRadius: 10 }}>
                    <div>
                      <span style={{ fontSize: 10, color: '#64748b', display: 'block' }}>Start Time</span>
                      <input
                        type="time"
                        value={ts.startTime}
                        onChange={(e) => {
                          const updated = [...recurringForm.timeSlots];
                          updated[idx].startTime = e.target.value;
                          setRecurringForm(prev => ({ ...prev, timeSlots: updated }));
                        }}
                        style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 12 }}
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: 10, color: '#64748b', display: 'block' }}>End Time</span>
                      <input
                        type="time"
                        value={ts.endTime}
                        onChange={(e) => {
                          const updated = [...recurringForm.timeSlots];
                          updated[idx].endTime = e.target.value;
                          setRecurringForm(prev => ({ ...prev, timeSlots: updated }));
                        }}
                        style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 12 }}
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: 10, color: '#64748b', display: 'block' }}>Seats</span>
                      <input
                        type="number"
                        min="1"
                        value={ts.capacity}
                        onChange={(e) => {
                          const updated = [...recurringForm.timeSlots];
                          updated[idx].capacity = Number(e.target.value);
                          setRecurringForm(prev => ({ ...prev, timeSlots: updated }));
                        }}
                        style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 12 }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = recurringForm.timeSlots.filter((_, i) => i !== idx);
                        setRecurringForm(prev => ({ ...prev, timeSlots: updated }));
                      }}
                      style={{ background: '#fff1f2', border: 'none', color: '#e11d48', height: 32, borderRadius: 6, cursor: 'pointer', marginTop: 14 }}
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
                onClick={() => setRecurringModalOpen(false)}
                style={{ background: '#f1f5f9', border: 'none', color: '#475569', padding: '10px 18px', borderRadius: 12, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '10px 24px', borderRadius: 12, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}
              >
                Batch Generate Slots
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SINGLE SLOT CREATE / EDIT MODAL */}
      {singleModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1500,
          background: 'rgba(2, 11, 18, 0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}>
          <form
            onSubmit={handleSaveSingleSlot}
            style={{
              width: '100%', maxWidth: 540, background: '#ffffff',
              border: '1.5px solid #e2e8f0', borderRadius: 24, padding: 28,
              boxShadow: '0 25px 60px rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', gap: 14
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                {editingSlot ? 'Edit Activity Time Slot' : 'Create Single Activity Slot'}
              </h3>
              <button type="button" onClick={() => setSingleModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 18, cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>ACTIVITY</label>
                <select
                  required
                  value={slotForm.activityId}
                  onChange={(e) => {
                    setSlotForm(prev => ({ ...prev, activityId: e.target.value }));
                    loadLocationsForActivity(e.target.value);
                  }}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                >
                  {activities.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>LOCATION</label>
                <select
                  required
                  value={slotForm.activityLocationId}
                  onChange={(e) => setSlotForm(prev => ({ ...prev, activityLocationId: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                >
                  {locations.map(l => <option key={l.id} value={l.id}>{l.locationName}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>DATE</label>
              <input
                type="date"
                required
                value={slotForm.date}
                onChange={(e) => setSlotForm(prev => ({ ...prev, date: e.target.value }))}
                style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>START TIME</label>
                <input
                  type="time"
                  required
                  value={slotForm.startTime}
                  onChange={(e) => setSlotForm(prev => ({ ...prev, startTime: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>END TIME</label>
                <input
                  type="time"
                  required
                  value={slotForm.endTime}
                  onChange={(e) => setSlotForm(prev => ({ ...prev, endTime: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>SEAT CAPACITY</label>
                <input
                  type="number"
                  min="1"
                  required
                  value={slotForm.capacity}
                  onChange={(e) => setSlotForm(prev => ({ ...prev, capacity: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>STATUS</label>
                <select
                  value={slotForm.status}
                  onChange={(e) => setSlotForm(prev => ({ ...prev, status: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="SOLD_OUT">SOLD_OUT</option>
                  <option value="CANCELLED">CANCELLED</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>ADULT PRICE OVERRIDE (₹)</label>
                <input
                  type="number"
                  value={slotForm.priceOverride}
                  placeholder="Optional override"
                  onChange={(e) => setSlotForm(prev => ({ ...prev, priceOverride: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>CHILD PRICE OVERRIDE (₹)</label>
                <input
                  type="number"
                  value={slotForm.childPriceOverride}
                  placeholder="Optional override"
                  onChange={(e) => setSlotForm(prev => ({ ...prev, childPriceOverride: e.target.value }))}
                  style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13 }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
              <button
                type="button"
                onClick={() => setSingleModalOpen(false)}
                style={{ background: '#f1f5f9', border: 'none', color: '#475569', padding: '10px 18px', borderRadius: 12, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '10px 24px', borderRadius: 12, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}
              >
                {editingSlot ? 'Update Slot' : 'Create Slot'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* VIEW BOOKINGS DOSSIER MODAL */}
      {bookingsModalSlot && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1500,
          background: 'rgba(2, 11, 18, 0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}>
          <div style={{
            width: '100%', maxWidth: 680, background: '#ffffff',
            border: '1.5px solid #e2e8f0', borderRadius: 24, padding: 28,
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', gap: 16,
            maxHeight: '90vh', overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', fontFamily: "'Space Grotesk', sans-serif" }}>CONFIRMED GUEST MANIFEST</span>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {bookingsModalSlot.date} | {bookingsModalSlot.startTime} – {bookingsModalSlot.endTime}
                </h3>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                  {bookingsModalSlot.activity?.name} @ {bookingsModalSlot.activityLocation?.locationName}
                </div>
              </div>
              <button onClick={() => setBookingsModalSlot(null)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 20, cursor: 'pointer' }}>✕</button>
            </div>

            {bookingsLoading ? (
              <div style={{ padding: 32, textAlign: 'center', color: '#64748b' }}>Loading guest manifest...</div>
            ) : slotBookings.length === 0 ? (
              <div style={{ padding: 32, textAlign: 'center', color: '#64748b', background: '#f8fafc', borderRadius: 14 }}>
                <Users size={32} color="#cbd5e1" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, color: '#0f172a' }}>No Bookings Yet</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>This slot currently has zero confirmed reservations.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {slotBookings.map((b) => (
                  <div key={b.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: '#F06543', fontSize: 12 }}>
                          {b.bookingNumber}
                        </span>
                        <span style={{ fontSize: 11, background: '#ecfdf5', color: '#059669', padding: '2px 8px', borderRadius: 10, fontWeight: 800 }}>
                          {b.bookingStatus}
                        </span>
                      </div>
                      <div style={{ fontWeight: 700, color: '#0f172a', marginTop: 4 }}>{b.customerName}</div>
                      <div style={{ fontSize: 11, color: '#64748b' }}>{b.customerEmail} | {b.customerPhone}</div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, color: '#0B2545' }}>
                        {b.adultCount || 1} Adults{b.childCount > 0 ? `, ${b.childCount} Children` : ''}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 900, color: '#F06543', marginTop: 2 }}>
                        ₹{Number(b.totalAmount || 0).toLocaleString('en-IN')}
                      </div>
                      <div style={{ fontSize: 10, color: '#64748b' }}>
                        Paid via {b.paymentMethod || 'RAZORPAY'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
              <button
                onClick={() => setBookingsModalSlot(null)}
                style={{ background: '#0B2545', border: 'none', color: '#ffffff', padding: '10px 20px', borderRadius: 12, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
              >
                Close Manifest
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE DIALOG */}
      {deleteId && (
        <ConfirmDialog
          isOpen={true}
          title="Delete Activity Slot?"
          message="Are you sure you want to permanently delete this scheduled slot? If any guest bookings exist, the deletion will be blocked for safety."
          onConfirm={handleDeleteSlot}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}
