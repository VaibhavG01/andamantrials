// client/src/admin/pages/FerriesManagement.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Unified Ferries & Luxury Cruises Admin Management Studio
// Catamarans (Makruzz, Nautika, Green Ocean) + Sunset/Yacht Cruises + Slots & Schedules

import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import { Plus, Edit3, Trash2, Calendar, Eye, Ship, Anchor, MapPin, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';

export default function FerriesManagement() {
  const [activeSection, setActiveSection] = useState('FERRIES'); // 'FERRIES' | 'CRUISES' | 'ROUTES'

  // Ferries State
  const [ferries, setFerries] = useState([]);
  const [loadingFerries, setLoadingFerries] = useState(false);
  const [deleteFerryId, setDeleteFerryId] = useState(null);

  // Cruises State
  const [cruises, setCruises] = useState([]);
  const [loadingCruises, setLoadingCruises] = useState(false);
  const [deleteCruiseId, setDeleteCruiseId] = useState(null);

  // Routes State
  const [routes, setRoutes] = useState([]);
  const [loadingRoutes, setLoadingRoutes] = useState(false);

  // Full-Page Studio State (for Ferry or Cruise)
  const [studioOpen, setStudioOpen] = useState(false);
  const [studioType, setStudioType] = useState('FERRY'); // 'FERRY' | 'CRUISE'
  const [editingItem, setEditingItem] = useState(null);
  const [studioTab, setStudioTab] = useState('general'); // 'general' | 'schedules'

  // Ferry Form Data
  const [ferryFormData, setFerryFormData] = useState({
    name: '',
    slug: '',
    operator: '',
    type: 'CATAMARAN',
    description: '',
    image: '',
    capacity: 250,
    status: 'ACTIVE',
    featuresRaw: ''
  });

  // Cruise Form Data
  const [cruiseFormData, setCruiseFormData] = useState({
    name: '',
    slug: '',
    type: 'SUNSET_SAIL',
    duration: '2 Hours',
    departurePoint: 'Port Blair Harbour',
    capacity: 40,
    price: '2500',
    image: '',
    status: 'ACTIVE',
    description: '',
    featuresRaw: '',
    inclusionsRaw: '',
    exclusionsRaw: ''
  });

  // Schedules State (for nested schedules tab)
  const [schedules, setSchedules] = useState([]);
  const [loadingSchedules, setLoadingSchedules] = useState(false);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [deleteScheduleId, setDeleteScheduleId] = useState(null);

  const [scheduleFormData, setScheduleFormData] = useState({
    routeId: '',
    travelDate: new Date().toISOString().split('T')[0],
    departureTime: '08:00 AM',
    arrivalTime: '09:30 AM',
    availableSeats: 200,
    price: '1650',
    status: 'SCHEDULED'
  });

  // ── Loaders ──
  const loadFerries = () => {
    setLoadingFerries(true);
    adminService.getFerries()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((f) => ({
            id: String(f.id),
            name: f.name || '',
            slug: f.slug || '',
            operator: f.operator || '',
            type: f.type || 'CATAMARAN',
            capacity: Number(f.capacity || 250),
            status: f.status || 'ACTIVE',
            description: f.description || '',
            image: f.image || '',
            features: f.features || []
          }));
          setFerries(mapped);
        }
      })
      .catch((e) => console.error('Failed to load ferries:', e))
      .finally(() => setLoadingFerries(false));
  };

  const loadCruises = () => {
    setLoadingCruises(true);
    adminService.getCruises()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((c) => ({
            id: String(c.id),
            name: c.name || '',
            slug: c.slug || '',
            type: c.type || 'SUNSET_SAIL',
            duration: c.duration || '2 Hours',
            departurePoint: c.departurePoint || 'Port Blair Harbour',
            capacity: c.capacity || 40,
            price: Number(c.price || 2500),
            status: c.status || 'ACTIVE',
            image: c.heroImage || c.image || '',
            description: c.description || c.shortDescription || '',
            features: c.features || [],
            schedules: c.schedules || []
          }));
          setCruises(mapped);
        }
      })
      .catch((e) => console.error('Failed to load cruises:', e))
      .finally(() => setLoadingCruises(false));
  };

  const loadRoutes = () => {
    setLoadingRoutes(true);
    adminService.getFerryRoutes()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          setRoutes(res.data);
        }
      })
      .catch((e) => console.error('Failed loading ferry routes:', e))
      .finally(() => setLoadingRoutes(false));
  };

  useEffect(() => {
    loadFerries();
    loadCruises();
    loadRoutes();
  }, []);

  const loadSchedulesForFerry = (ferryId) => {
    if (!ferryId) return;
    setLoadingSchedules(true);
    adminService.getFerrySchedulesByFerry(ferryId)
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          setSchedules(res.data);
        }
      })
      .catch((e) => console.error('Failed loading schedules:', e))
      .finally(() => setLoadingSchedules(false));
  };

  // ── Open Studio Handlers ──
  const handleOpenCreateFerry = () => {
    setStudioType('FERRY');
    setEditingItem(null);
    setStudioTab('general');
    setFerryFormData({
      name: '',
      slug: '',
      operator: '',
      type: 'CATAMARAN',
      description: '',
      image: '',
      capacity: 250,
      status: 'ACTIVE',
      featuresRaw: ''
    });
    setStudioOpen(true);
  };

  const handleOpenEditFerry = (item) => {
    setStudioType('FERRY');
    setEditingItem(item);
    setStudioTab('general');
    setFerryFormData({
      name: item.name,
      slug: item.slug,
      operator: item.operator,
      type: item.type,
      description: item.description || '',
      image: item.image || '',
      capacity: item.capacity || 250,
      status: item.status || 'ACTIVE',
      featuresRaw: Array.isArray(item.features) ? item.features.join(', ') : ''
    });
    setStudioOpen(true);
    loadSchedulesForFerry(item.id);
  };

  const handleOpenCreateCruise = () => {
    setStudioType('CRUISE');
    setEditingItem(null);
    setStudioTab('general');
    setCruiseFormData({
      name: '',
      slug: '',
      type: 'SUNSET_SAIL',
      duration: '2 Hours',
      departurePoint: 'Port Blair Harbour',
      capacity: 40,
      price: '2500',
      image: '',
      status: 'ACTIVE',
      description: '',
      featuresRaw: 'Scenic Ocean Views, Live Acoustic Music, Welcome Mocktail',
      inclusionsRaw: 'Harbor Sail, Snacks, Life Vest',
      exclusionsRaw: 'Hotel Cab Transfers'
    });
    setStudioOpen(true);
  };

  const handleOpenEditCruise = (item) => {
    setStudioType('CRUISE');
    setEditingItem(item);
    setStudioTab('general');
    setCruiseFormData({
      name: item.name,
      slug: item.slug,
      type: item.type || 'SUNSET_SAIL',
      duration: item.duration || '2 Hours',
      departurePoint: item.departurePoint || 'Port Blair Harbour',
      capacity: item.capacity || 40,
      price: String(item.price || 2500),
      image: item.image || '',
      status: item.status || 'ACTIVE',
      description: item.description || '',
      featuresRaw: Array.isArray(item.features) ? item.features.join(', ') : '',
      inclusionsRaw: Array.isArray(item.inclusions) ? item.inclusions.join(', ') : '',
      exclusionsRaw: Array.isArray(item.exclusions) ? item.exclusions.join(', ') : ''
    });
    setStudioOpen(true);
  };

  // ── Save Handlers ──
  const handleSaveFerry = (e) => {
    if (e) e.preventDefault();
    const parsedFeatures = ferryFormData.featuresRaw
      ? ferryFormData.featuresRaw.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    const payload = {
      name: ferryFormData.name,
      slug: ferryFormData.slug || ferryFormData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      operator: ferryFormData.operator,
      type: ferryFormData.type,
      description: ferryFormData.description,
      image: ferryFormData.image,
      capacity: Number(ferryFormData.capacity),
      status: ferryFormData.status,
      features: parsedFeatures
    };

    if (editingItem) {
      adminService.updateFerry(editingItem.id, payload)
        .then(() => {
          setStudioOpen(false);
          loadFerries();
        })
        .catch((err) => alert(`Failed: ${err.message}`));
    } else {
      adminService.createFerry(payload)
        .then(() => {
          setStudioOpen(false);
          loadFerries();
        })
        .catch((err) => alert(`Failed: ${err.message}`));
    }
  };

  const handleSaveCruise = (e) => {
    if (e) e.preventDefault();
    const payload = {
      name: cruiseFormData.name,
      slug: cruiseFormData.slug || cruiseFormData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      type: cruiseFormData.type,
      duration: cruiseFormData.duration,
      departurePoint: cruiseFormData.departurePoint,
      capacity: Number(cruiseFormData.capacity),
      price: Number(cruiseFormData.price),
      heroImage: cruiseFormData.image,
      status: cruiseFormData.status,
      description: cruiseFormData.description,
      features: cruiseFormData.featuresRaw.split(',').map(s => s.trim()).filter(Boolean),
      inclusions: cruiseFormData.inclusionsRaw.split(',').map(s => s.trim()).filter(Boolean),
      exclusions: cruiseFormData.exclusionsRaw.split(',').map(s => s.trim()).filter(Boolean)
    };

    if (editingItem) {
      adminService.updateCruise(editingItem.id, payload)
        .then(() => {
          setStudioOpen(false);
          loadCruises();
        })
        .catch((err) => alert(`Failed: ${err.message}`));
    } else {
      adminService.createCruise(payload)
        .then(() => {
          setStudioOpen(false);
          loadCruises();
        })
        .catch((err) => alert(`Failed: ${err.message}`));
    }
  };

  // ── Schedules Handlers ──
  const handleOpenCreateSchedule = () => {
    setEditingSchedule(null);
    const firstRoute = routes.find(r => String(r.ferryId) === String(editingItem?.id)) || routes[0];
    setScheduleFormData({
      routeId: firstRoute ? String(firstRoute.id) : '',
      travelDate: new Date().toISOString().split('T')[0],
      departureTime: '08:00 AM',
      arrivalTime: '09:30 AM',
      availableSeats: editingItem?.capacity || 200,
      price: '1650',
      status: 'SCHEDULED'
    });
    setScheduleModalOpen(true);
  };

  const handleOpenEditSchedule = (sched) => {
    setEditingSchedule(sched);
    setScheduleFormData({
      routeId: String(sched.routeId || ''),
      travelDate: sched.travelDate || '',
      departureTime: sched.departureTime || '',
      arrivalTime: sched.arrivalTime || '',
      availableSeats: sched.availableSeats || 200,
      price: String(sched.price || '1650'),
      status: sched.status || 'SCHEDULED'
    });
    setScheduleModalOpen(true);
  };

  const handleSaveSchedule = (e) => {
    e.preventDefault();
    if (!editingItem || !scheduleFormData.routeId) return;

    const schedPayload = {
      ferryId: Number(editingItem.id),
      routeId: Number(scheduleFormData.routeId),
      travelDate: scheduleFormData.travelDate,
      departureTime: scheduleFormData.departureTime,
      arrivalTime: scheduleFormData.arrivalTime,
      availableSeats: Number(scheduleFormData.availableSeats),
      price: Number(scheduleFormData.price),
      status: scheduleFormData.status
    };

    if (editingSchedule) {
      adminService.updateFerrySchedule(editingSchedule.id, schedPayload)
        .then(() => {
          setScheduleModalOpen(false);
          loadSchedulesForFerry(editingItem.id);
        })
        .catch((err) => alert(`Failed: ${err.message}`));
    } else {
      adminService.createFerrySchedule(editingItem.id, schedPayload)
        .then(() => {
          setScheduleModalOpen(false);
          loadSchedulesForFerry(editingItem.id);
        })
        .catch((err) => alert(`Failed: ${err.message}`));
    }
  };

  const handleDeleteSchedule = () => {
    if (!deleteScheduleId) return;
    adminService.deleteFerrySchedule(deleteScheduleId)
      .then(() => {
        setDeleteScheduleId(null);
        if (editingItem) loadSchedulesForFerry(editingItem.id);
      })
      .catch((err) => {
        alert(`Failed: ${err.message}`);
        setDeleteScheduleId(null);
      });
  };

  // ── Columns ──
  const ferryColumns = [
    {
      header: 'Vessel / Catamaran',
      accessor: 'name',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {row?.image ? (
            <img src={row.image} alt={row?.name} style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', border: '1px solid #e2e8f0' }} />
          ) : (
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#F8FAFC', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543' }}>
              <Ship size={20} />
            </div>
          )}
          <div>
            <div style={{ fontWeight: 800, color: '#0B2545' }}>{row?.name}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>{row?.operator} • {row?.type}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Passenger Capacity',
      accessor: 'capacity',
      sortable: true,
      render: (row) => <span style={{ fontWeight: 800, color: '#0B2545' }}>{row?.capacity} Seats</span>,
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      render: (row) => <StatusBadge status={row?.status} />,
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button
            onClick={() => handleOpenEditFerry(row)}
            style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0B2545', padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
          >
            <Edit3 size={13} /> Edit Studio
          </button>
          <button
            onClick={() => setDeleteFerryId(row?.id)}
            style={{ background: '#fff1f2', border: '1px solid #fecdd3', color: '#e11d48', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
          >
            <Trash2 size={13} />
          </button>
        </div>
      ),
    },
  ];

  const cruiseColumns = [
    {
      header: 'Cruise Experience',
      accessor: 'name',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {row?.image || row?.heroImage ? (
            <img src={row.image || row.heroImage} alt={row?.name} style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', border: '1px solid #e2e8f0' }} />
          ) : (
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#F8FAFC', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
              <Anchor size={20} />
            </div>
          )}
          <div>
            <div style={{ fontWeight: 800, color: '#0B2545' }}>{row?.name}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>{row?.type} • {row?.duration}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Harbour / Pier',
      accessor: 'departurePoint',
      sortable: true,
      render: (row) => <span style={{ fontSize: 12, color: '#475569' }}>📍 {row?.departurePoint}</span>,
    },
    {
      header: 'Starting Price',
      accessor: 'price',
      sortable: true,
      render: (row) => <span style={{ fontWeight: 900, color: '#F06543' }}>₹{Number(row?.price || 0).toLocaleString('en-IN')}</span>,
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: true,
      render: (row) => <StatusBadge status={row?.status} />,
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button
            onClick={() => handleOpenEditCruise(row)}
            style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0B2545', padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
          >
            <Edit3 size={13} /> Edit Studio
          </button>
          <button
            onClick={() => setDeleteCruiseId(row?.id)}
            style={{ background: '#fff1f2', border: '1px solid #fecdd3', color: '#e11d48', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
          >
            <Trash2 size={13} />
          </button>
        </div>
      ),
    },
  ];

  // ─────────────────────────────────────────────────────────────
  // FULL-PAGE STUDIO RENDER
  // ─────────────────────────────────────────────────────────────
  if (studioOpen) {
    const isFerry = studioType === 'FERRY';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Sticky Action Header */}
        <div style={{
          position: 'sticky', top: 10, zIndex: 100,
          background: '#ffffff', borderRadius: 20, padding: '16px 24px',
          border: '1.5px solid #E2E8F0', boxShadow: '0 8px 30px rgba(11,37,69,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button
              type="button"
              onClick={() => setStudioOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, background: '#F8FAFC',
                border: '1.5px solid #E2E8F0', padding: '8px 14px', borderRadius: 12,
                color: '#64748B', fontSize: 13, fontWeight: 700, cursor: 'pointer'
              }}
            >
              <ArrowLeft size={16} />
              Back to Fleets
            </button>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                {editingItem ? `Edit ${isFerry ? 'Vessel' : 'Cruise'}: ${editingItem.name}` : `Add New ${isFerry ? 'Catamaran Vessel' : 'Cruise Experience'}`}
              </h2>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                {isFerry ? 'Configure catamaran specs, seat capacity, and departure schedule runs' : 'Configure sunset yacht specifications, deck capacity, and slots'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => setStudioOpen(false)}
              style={{ background: '#F1F5F9', border: '1.5px solid #E2E8F0', color: '#64748B', padding: '9px 18px', borderRadius: 12, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={isFerry ? handleSaveFerry : handleSaveCruise}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
                color: '#ffffff', padding: '9px 22px', borderRadius: 12, fontSize: 12,
                fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 14px rgba(240,101,67,0.3)',
                display: 'flex', alignItems: 'center', gap: 8
              }}
            >
              <CheckCircle2 size={15} />
              Save Changes →
            </button>
          </div>
        </div>

        {/* Studio Content Card */}
        <div style={{
          background: '#ffffff', borderRadius: 24, border: '1.5px solid #E2E8F0',
          boxShadow: '0 10px 40px rgba(11,37,69,0.04)', overflow: 'hidden'
        }}>
          {/* Tabs for Ferry (General / Schedules) */}
          {isFerry && editingItem && (
            <div style={{ display: 'flex', borderBottom: '1.5px solid #E2E8F0', background: '#F8FAFC', padding: '0 24px' }}>
              <button
                type="button"
                onClick={() => setStudioTab('general')}
                style={{
                  padding: '14px 20px', background: 'none', border: 'none',
                  borderBottom: studioTab === 'general' ? '3px solid #F06543' : '3px solid transparent',
                  color: studioTab === 'general' ? '#F06543' : '#64748B',
                  fontWeight: 800, fontSize: 13, cursor: 'pointer'
                }}
              >
                Vessel General Details
              </button>
              <button
                type="button"
                onClick={() => setStudioTab('schedules')}
                style={{
                  padding: '14px 20px', background: 'none', border: 'none',
                  borderBottom: studioTab === 'schedules' ? '3px solid #F06543' : '3px solid transparent',
                  color: studioTab === 'schedules' ? '#F06543' : '#64748B',
                  fontWeight: 800, fontSize: 13, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 6
                }}
              >
                <Calendar size={14} />
                Departure Schedule Slots ({schedules.length})
              </button>
            </div>
          )}

          <div style={{ padding: 32 }}>
            {/* FERRY FORM */}
            {isFerry && studioTab === 'general' && (
              <form onSubmit={handleSaveFerry} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 6 }}>VESSEL NAME *</label>
                    <input
                      type="text" required value={ferryFormData.name}
                      onChange={(e) => setFerryFormData({ ...ferryFormData, name: e.target.value })}
                      placeholder="e.g. Makruzz Gold"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>OPERATOR FLEET *</label>
                    <input
                      type="text" required value={ferryFormData.operator}
                      onChange={(e) => setFerryFormData({ ...ferryFormData, operator: e.target.value })}
                      placeholder="e.g. Makruzz Lines"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>CAPACITY (SEATS)</label>
                    <input
                      type="number" value={ferryFormData.capacity}
                      onChange={(e) => setFerryFormData({ ...ferryFormData, capacity: Number(e.target.value) })}
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <MediaUploadField
                  label="VESSEL PHOTO"
                  value={ferryFormData.image}
                  onChange={(url) => setFerryFormData({ ...ferryFormData, image: url })}
                  helpText="Upload catamaran image or paste high-res Unsplash URL."
                />

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>ONBOARD FEATURES (COMMA SEPARATED)</label>
                  <input
                    type="text" value={ferryFormData.featuresRaw}
                    onChange={(e) => setFerryFormData({ ...ferryFormData, featuresRaw: e.target.value })}
                    placeholder="Air Conditioned, Pushback Seats, Onboard Cafe, Panoramic Sea Windows"
                    style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>VESSEL DESCRIPTION</label>
                  <textarea
                    rows={3} value={ferryFormData.description}
                    onChange={(e) => setFerryFormData({ ...ferryFormData, description: e.target.value })}
                    placeholder="Provide overview of passenger facilities, speed and comforts..."
                    style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                  />
                </div>
              </form>
            )}

            {/* FERRY SCHEDULES TAB */}
            {isFerry && studioTab === 'schedules' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                      Active Sailing Schedule Runs for {editingItem.name}
                    </h3>
                    <p style={{ fontSize: 12, color: '#64748B', margin: '2px 0 0' }}>
                      Add and manage real-time departure slots, seat allocation, and live pricing.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenCreateSchedule}
                    style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 16px', borderRadius: 12, fontSize: 12, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Plus size={14} /> Add Departure Run Slot
                  </button>
                </div>

                {loadingSchedules ? (
                  <div style={{ padding: 40, textAlign: 'center', color: '#64748B' }}>Loading schedules...</div>
                ) : schedules.length === 0 ? (
                  <div style={{ background: '#F8FAFC', border: '1.5px dashed #CBD5E1', borderRadius: 16, padding: 36, textAlign: 'center' }}>
                    <p style={{ color: '#64748B', fontSize: 13, margin: 0 }}>No departure runs scheduled for this vessel yet.</p>
                  </div>
                ) : (
                  <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: 16, overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
                      <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: 11, textTransform: 'uppercase' }}>
                          <th style={{ padding: '12px 16px' }}>Date</th>
                          <th style={{ padding: '12px 16px' }}>Transit Route</th>
                          <th style={{ padding: '12px 16px' }}>Time (Dep ➔ Arr)</th>
                          <th style={{ padding: '12px 16px' }}>Seats</th>
                          <th style={{ padding: '12px 16px' }}>Base Price</th>
                          <th style={{ padding: '12px 16px' }}>Status</th>
                          <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedules.map((sched) => {
                          const routeObj = routes.find(r => r.id === sched.routeId);
                          const routeName = routeObj
                            ? `${routeObj.fromDestination?.name || 'Port Blair'} ➔ ${routeObj.toDestination?.name || 'Havelock'}`
                            : 'Inter-Island Route';
                          return (
                            <tr key={sched.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                              <td style={{ padding: '12px 16px', fontWeight: 800, color: '#0B2545' }}>{sched.travelDate}</td>
                              <td style={{ padding: '12px 16px', color: '#F06543', fontWeight: 700 }}>{routeName}</td>
                              <td style={{ padding: '12px 16px', fontWeight: 800 }}>{sched.departureTime} ➔ {sched.arrivalTime}</td>
                              <td style={{ padding: '12px 16px' }}>{sched.availableSeats} Seats</td>
                              <td style={{ padding: '12px 16px', fontWeight: 900, color: '#0B2545' }}>₹{Number(sched.price).toLocaleString('en-IN')}</td>
                              <td style={{ padding: '12px 16px' }}><StatusBadge status={sched.status} /></td>
                              <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                                <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                                  <button onClick={() => handleOpenEditSchedule(sched)} style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#0B2545', padding: '4px 8px', borderRadius: 6, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}>Edit</button>
                                  <button onClick={() => setDeleteScheduleId(sched.id)} style={{ background: '#FFF1F2', border: '1px solid #FECDD3', color: '#E11D48', padding: '4px 8px', borderRadius: 6, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}>Delete</button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* CRUISE FORM */}
            {!isFerry && (
              <form onSubmit={handleSaveCruise} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 6 }}>CRUISE EXPERIENCE NAME *</label>
                    <input
                      type="text" required value={cruiseFormData.name}
                      onChange={(e) => setCruiseFormData({ ...cruiseFormData, name: e.target.value })}
                      placeholder="e.g. Andaman Sunset Sail"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>DEPARTURE PIER / HARBOUR</label>
                    <input
                      type="text" required value={cruiseFormData.departurePoint}
                      onChange={(e) => setCruiseFormData({ ...cruiseFormData, departurePoint: e.target.value })}
                      placeholder="e.g. Port Blair Harbour"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>STARTING PRICE (₹)</label>
                    <input
                      type="number" required value={cruiseFormData.price}
                      onChange={(e) => setCruiseFormData({ ...cruiseFormData, price: e.target.value })}
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <MediaUploadField
                  label="COVER / HERO IMAGE"
                  value={cruiseFormData.image}
                  onChange={(url) => setCruiseFormData({ ...cruiseFormData, image: url })}
                  helpText="Upload sunset cruise or yacht photo."
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>DURATION</label>
                    <input
                      type="text" value={cruiseFormData.duration}
                      onChange={(e) => setCruiseFormData({ ...cruiseFormData, duration: e.target.value })}
                      placeholder="e.g. 2 Hours or Half Day"
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>CAPACITY</label>
                    <input
                      type="number" value={cruiseFormData.capacity}
                      onChange={(e) => setCruiseFormData({ ...cruiseFormData, capacity: Number(e.target.value) })}
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>HIGHLIGHTS / FEATURES (COMMA SEPARATED)</label>
                  <input
                    type="text" value={cruiseFormData.featuresRaw}
                    onChange={(e) => setCruiseFormData({ ...cruiseFormData, featuresRaw: e.target.value })}
                    placeholder="Golden Hour Deck, Live Music, Mocktails, Coral Viewing"
                    style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>CRUISE DESCRIPTION</label>
                  <textarea
                    rows={3} value={cruiseFormData.description}
                    onChange={(e) => setCruiseFormData({ ...cruiseFormData, description: e.target.value })}
                    placeholder="Detailed experience description..."
                    style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', fontSize: 13, boxSizing: 'border-box' }}
                  />
                </div>
              </form>
            )}
          </div>
        </div>

        {/* NESTED SCHEDULE MODAL */}
        {scheduleModalOpen && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 1600,
            background: 'rgba(7, 24, 44, 0.85)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
          }}>
            <form
              onSubmit={handleSaveSchedule}
              style={{
                width: '100%', maxWidth: 480, background: '#ffffff',
                border: '1.5px solid #E2E8F0', borderRadius: 20, padding: 24,
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', gap: 14,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: 10 }}>
                <h4 style={{ margin: 0, color: '#0B2545', fontSize: 16, fontWeight: 900 }}>
                  {editingSchedule ? 'Edit Departure Slot Run' : 'Add New Departure Slot Run'}
                </h4>
                <button type="button" onClick={() => setScheduleModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 18, cursor: 'pointer' }}>✕</button>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>TRANSIT ROUTE</label>
                <select
                  required
                  value={scheduleFormData.routeId}
                  onChange={e => setScheduleFormData({ ...scheduleFormData, routeId: e.target.value })}
                  style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }}
                >
                  <option value="">-- Choose Route --</option>
                  {routes.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.fromDestination?.name || 'Port Blair'} ➔ {r.toDestination?.name || 'Havelock'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 4 }}>TRAVEL DATE</label>
                <input type="date" required value={scheduleFormData.travelDate} onChange={e => setScheduleFormData({ ...scheduleFormData, travelDate: e.target.value })} style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 4 }}>DEPARTURE TIME</label>
                  <input type="text" required value={scheduleFormData.departureTime} onChange={e => setScheduleFormData({ ...scheduleFormData, departureTime: e.target.value })} placeholder="08:00 AM" style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 4 }}>ARRIVAL TIME</label>
                  <input type="text" required value={scheduleFormData.arrivalTime} onChange={e => setScheduleFormData({ ...scheduleFormData, arrivalTime: e.target.value })} placeholder="09:30 AM" style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 4 }}>SEATS AVAILABLE</label>
                  <input type="number" required value={scheduleFormData.availableSeats} onChange={e => setScheduleFormData({ ...scheduleFormData, availableSeats: Number(e.target.value) })} style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 4 }}>BASE FARE (₹)</label>
                  <input type="number" required value={scheduleFormData.price} onChange={e => setScheduleFormData({ ...scheduleFormData, price: e.target.value })} placeholder="1650" style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 4 }}>STATUS</label>
                <select
                  value={scheduleFormData.status}
                  onChange={e => setScheduleFormData({ ...scheduleFormData, status: e.target.value })}
                  style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, fontSize: 12, boxSizing: 'border-box' }}
                >
                  <option value="SCHEDULED">SCHEDULED</option>
                  <option value="ON_TIME">ON_TIME</option>
                  <option value="BOARDING">BOARDING</option>
                  <option value="DELAYED">DELAYED</option>
                  <option value="CANCELLED">CANCELLED</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 12 }}>
                <button type="button" onClick={() => setScheduleModalOpen(false)} style={{ background: '#F1F5F9', border: 'none', padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 20px', borderRadius: 8, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}>Save Slot</button>
              </div>
            </form>
          </div>
        )}

        <ConfirmDialog
          isOpen={Boolean(deleteScheduleId)}
          title="Delete Departure Run Slot?"
          message="Are you sure you want to remove this departure run slot?"
          onConfirm={handleDeleteSchedule}
          onCancel={() => setDeleteScheduleId(null)}
        />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // MASTER LIST VIEW WITH TOGGLE TABS
  // ─────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* TOP SECTION TOGGLE SWITCHER */}
      <div style={{
        background: '#ffffff', borderRadius: 20, padding: '12px 18px',
        border: '1.5px solid #E2E8F0', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 12
      }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            onClick={() => setActiveSection('FERRIES')}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px',
              borderRadius: 12, border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800,
              background: activeSection === 'FERRIES' ? '#0B2545' : '#F8FAFC',
              color: activeSection === 'FERRIES' ? '#ffffff' : '#64748B',
              boxShadow: activeSection === 'FERRIES' ? '0 4px 14px rgba(11,37,69,0.2)' : 'none'
            }}
          >
            <Ship size={15} />
            Catamarans & Fast Ferries ({ferries.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveSection('CRUISES')}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px',
              borderRadius: 12, border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800,
              background: activeSection === 'CRUISES' ? '#0B2545' : '#F8FAFC',
              color: activeSection === 'CRUISES' ? '#ffffff' : '#64748B',
              boxShadow: activeSection === 'CRUISES' ? '0 4px 14px rgba(11,37,69,0.2)' : 'none'
            }}
          >
            <Anchor size={15} />
            Sunset & Luxury Cruises ({cruises.length})
          </button>
        </div>

        <div>
          {activeSection === 'FERRIES' ? (
            <button
              onClick={handleOpenCreateFerry}
              style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '9px 20px', borderRadius: 12, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <Plus size={15} /> + Add Catamaran Vessel
            </button>
          ) : (
            <button
              onClick={handleOpenCreateCruise}
              style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '9px 20px', borderRadius: 12, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <Plus size={15} /> + Add Cruise Experience
            </button>
          )}
        </div>
      </div>

      {/* RENDER ACTIVE DATA TABLE */}
      {activeSection === 'FERRIES' ? (
        <DataTable
          title="Catamarans & Fast Ferries"
          subtitle="INTER-ISLAND TRANSIT & SLOTS DIRECTORY"
          columns={ferryColumns}
          data={ferries}
          loading={loadingFerries}
          searchPlaceholder="Search vessel name or operator..."
        />
      ) : (
        <DataTable
          title="Sunset & Luxury Cruises"
          subtitle="HARBOUR, STARLIGHT & YACHT CHARTERS"
          columns={cruiseColumns}
          data={cruises}
          loading={loadingCruises}
          searchPlaceholder="Search cruise name or pier..."
        />
      )}

      {/* CONFIRM DELETE DIALOGS */}
      <ConfirmDialog
        isOpen={Boolean(deleteFerryId)}
        title="Delete Vessel Listing?"
        message="Are you sure you want to delete this vessel? All associated departure schedules will also be deleted."
        onConfirm={() => {
          if (!deleteFerryId) return;
          adminService.deleteFerry(deleteFerryId)
            .then(() => {
              setDeleteFerryId(null);
              loadFerries();
            })
            .catch((err) => alert(err.message));
        }}
        onCancel={() => setDeleteFerryId(null)}
      />

      <ConfirmDialog
        isOpen={Boolean(deleteCruiseId)}
        title="Delete Cruise Listing?"
        message="Are you sure you want to delete this cruise experience?"
        onConfirm={() => {
          if (!deleteCruiseId) return;
          adminService.deleteCruise(deleteCruiseId)
            .then(() => {
              setDeleteCruiseId(null);
              loadCruises();
            })
            .catch((err) => alert(err.message));
        }}
        onCancel={() => setDeleteCruiseId(null)}
      />
    </div>
  );
}
