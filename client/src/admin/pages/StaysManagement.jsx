import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import MultiMediaUploadField from '../components/MultiMediaUploadField';
import { Plus, Edit3, Trash2, Bed, Eye } from 'lucide-react';

export default function StaysManagement() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Modal Form State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState('general'); // 'general' or 'rooms'

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    type: 'BEACH_RESORT',
    location: '',
    description: '',
    shortDescription: '',
    heroImage: '',
    gallery: [],
    rating: 4.8,
    pricePerNight: '',
    status: 'ACTIVE',
    featured: false
  });

  // Rooms inventory states (nested inside Stays)
  const [rooms, setRooms] = useState([]);
  const [loadingRooms, setLoadingRooms] = useState(false);
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [deleteRoomId, setDeleteRoomId] = useState(null);

  const [roomFormData, setRoomFormData] = useState({
    name: '',
    description: '',
    capacity: 2,
    price: '',
    availableRooms: 10,
    amenitiesRaw: '',
    image: ''
  });

  const loadStays = () => {
    setLoading(true);
    adminService.getStays()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((s) => ({
            id: String(s.id),
            name: s.name || '',
            slug: s.slug || '',
            type: s.type || 'BEACH_RESORT',
            location: s.location || 'Andaman',
            rating: Number(s.rating || 4.8),
            status: s.status || 'ACTIVE',
            pricePerNight: Number(s.pricePerNight || 6500),
            heroImage: s.heroImage || '',
            gallery: Array.isArray(s.gallery) ? s.gallery : (typeof s.gallery === 'string' ? JSON.parse(s.gallery || '[]') : []),
            description: s.description || '',
            shortDescription: s.shortDescription || '',
            featured: !!s.featured
          }));
          setStays(mapped);
        }
      })
      .catch((e) => console.error('Failed to load stays:', e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadStays();
  }, []);

  // Fetch rooms for stay
  const loadRooms = (stayId) => {
    if (!stayId) return;
    setLoadingRooms(true);
    adminService.getRooms(stayId)
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          setRooms(res.data);
        }
      })
      .catch((e) => console.error('Failed loading rooms:', e))
      .finally(() => setLoadingRooms(false));
  };

  useEffect(() => {
    if (editingItem && activeTab === 'rooms') {
      loadRooms(editingItem.id);
    }
  }, [editingItem, activeTab]);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setActiveTab('general');
    setFormData({
      name: '',
      slug: '',
      type: 'BEACH_RESORT',
      location: 'Havelock Island',
      description: 'Stunning beachside resort with views of Radhanagar beach.',
      shortDescription: 'Stunning beachside resort experience.',
      heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      gallery: [],
      rating: 4.8,
      pricePerNight: '6500',
      status: 'ACTIVE',
      featured: false
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setActiveTab('general');
    setFormData({
      name: item.name || '',
      slug: item.slug || '',
      type: item.type || 'BEACH_RESORT',
      location: item.location || '',
      description: item.description || '',
      shortDescription: item.shortDescription || '',
      heroImage: item.heroImage || '',
      gallery: Array.isArray(item.gallery) ? item.gallery : [],
      rating: item.rating || 4.8,
      pricePerNight: String(item.pricePerNight || ''),
      status: item.status || 'ACTIVE',
      featured: !!item.featured
    });
    setModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    const numericPrice = Number(String(formData.pricePerNight).replace(/[^0-9.]/g, '')) || 6500;

    const payload = {
      name: formData.name,
      slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      type: formData.type,
      location: formData.location,
      description: formData.description,
      shortDescription: formData.shortDescription,
      heroImage: formData.heroImage,
      gallery: Array.isArray(formData.gallery) ? formData.gallery : [],
      rating: Number(formData.rating),
      pricePerNight: numericPrice,
      status: formData.status,
      featured: formData.featured
    };

    if (editingItem) {
      adminService.updateStay(editingItem.id, payload)
        .then(() => {
          setModalOpen(false);
          loadStays();
        })
        .catch((err) => {
          alert(`Failed to update stay: ${err.response?.data?.message || err.message}`);
        });
    } else {
      adminService.createStay(payload)
        .then(() => {
          setModalOpen(false);
          loadStays();
        })
        .catch((err) => {
          alert(`Failed to create stay: ${err.response?.data?.message || err.message}`);
        });
    }
  };

  const handleDelete = () => {
    if (!deleteId) return;
    adminService.deleteStay(deleteId)
      .then(() => {
        setDeleteId(null);
        loadStays();
      })
      .catch((err) => {
        alert(`Failed to delete stay: ${err.response?.data?.message || err.message}`);
        setDeleteId(null);
      });
  };

  // Rooms CRUD helper methods
  const handleOpenCreateRoom = () => {
    setEditingRoom(null);
    setRoomFormData({
      name: '',
      description: 'Spacious beachside room with AC and premium bedding.',
      capacity: 2,
      price: '6000',
      availableRooms: 10,
      amenitiesRaw: 'Air Conditioning, Free Wifi, Ocean View, King Bed, Mini Bar',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });
    setRoomModalOpen(true);
  };

  const handleOpenEditRoom = (room) => {
    setEditingRoom(room);
    const amenitiesText = Array.isArray(room.amenities)
      ? room.amenities.join(', ')
      : (typeof room.amenities === 'string' ? JSON.parse(room.amenities).join(', ') : '');

    setRoomFormData({
      name: room.name || '',
      description: room.description || '',
      capacity: room.capacity || 2,
      price: String(room.price || ''),
      availableRooms: room.availableRooms || 10,
      amenitiesRaw: amenitiesText,
      image: room.image || ''
    });
    setRoomModalOpen(true);
  };

  const handleSaveRoom = (e) => {
    e.preventDefault();
    if (!editingItem) return;

    const parsedAmenities = roomFormData.amenitiesRaw
      ? roomFormData.amenitiesRaw.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    const roomPayload = {
      name: roomFormData.name,
      description: roomFormData.description,
      capacity: Number(roomFormData.capacity),
      price: Number(roomFormData.price),
      availableRooms: Number(roomFormData.availableRooms),
      amenities: parsedAmenities,
      image: roomFormData.image
    };

    if (editingRoom) {
      adminService.updateRoom(editingRoom.id, roomPayload)
        .then(() => {
          setRoomModalOpen(false);
          loadRooms(editingItem.id);
        })
        .catch(err => alert(err.response?.data?.message || 'Failed to update room details'));
    } else {
      adminService.addRoom(editingItem.id, roomPayload)
        .then(() => {
          setRoomModalOpen(false);
          loadRooms(editingItem.id);
        })
        .catch(err => alert(err.response?.data?.message || 'Failed to add room details'));
    }
  };

  const handleDeleteRoom = () => {
    if (!deleteRoomId || !editingItem) return;
    adminService.deleteRoom(deleteRoomId)
      .then(() => {
        setDeleteRoomId(null);
        loadRooms(editingItem.id);
      })
      .catch(err => {
        alert('Failed to delete room');
        setDeleteRoomId(null);
      });
  };

  const columns = [
    {
      header: 'Property Details',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {row.heroImage && (
            <img src={row.heroImage} alt={row.name} style={{ width: 44, height: 36, borderRadius: 8, objectFit: 'cover', border: '1px solid #e2e8f0' }} />
          )}
          <div>
            <div style={{ color: '#334155', fontWeight: 800, fontSize: 13 }}>{row.name}</div>
            <div style={{ color: '#64748b', fontSize: 11 }}>{row.location}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Category',
      accessor: 'type',
      render: (row) => (
        <span style={{ fontSize: 11, color: '#F06543', fontWeight: 700 }}>
          {row.type.replace('_', ' ')}
        </span>
      )
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (row) => <span style={{ color: '#f0c060', fontWeight: 800 }}>★ {row.rating}</span>,
    },
    {
      header: 'Night Rate',
      accessor: 'pricePerNight',
      render: (row) => (
        <span style={{ fontWeight: 800, color: '#F06543' }}>
          ₹{Number(row.pricePerNight).toLocaleString('en-IN')}/night
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
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
      ),
    },
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
              ← Back to Stays List
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingItem ? `Edit Stay: ${formData.name || editingItem.name}` : 'Add New Resort / Luxury Stay'}
                </h2>
                {formData.slug && (
                  <span style={{ fontSize: 11, background: 'rgba(240, 101, 67, 0.1)', color: '#F06543', padding: '3px 8px', borderRadius: 6, fontWeight: 700 }}>
                    /{formData.slug}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Resort portfolio, room categories, pricing, amenities & high-res galleries
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {formData.slug && (
              <a
                href={`/stays/${formData.slug}`}
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
                <Eye size={13} /> Preview Live Stay
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
              type="button"
              onClick={handleSave}
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
              {editingItem ? 'Update Stay →' : 'Publish Stay →'}
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
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Tabs */}
          {editingItem && (
            <div style={{ display: 'flex', background: '#F8FAFC', borderBottom: '1.5px solid #E2E8F0', padding: '6px 24px 0 24px', gap: 8 }}>
              <button
                type="button"
                onClick={() => setActiveTab('general')}
                style={{
                  background: activeTab === 'general' ? '#ffffff' : 'transparent',
                  border: '1.5px solid',
                  borderColor: activeTab === 'general' ? '#E2E8F0 #E2E8F0 transparent #E2E8F0' : 'transparent',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  color: activeTab === 'general' ? '#F06543' : '#64748B',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  fontWeight: activeTab === 'general' ? 800 : 600,
                  padding: '10px 18px',
                  cursor: 'pointer',
                }}
              >
                1. General Resort Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rooms')}
                style={{
                  background: activeTab === 'rooms' ? '#ffffff' : 'transparent',
                  border: '1.5px solid',
                  borderColor: activeTab === 'rooms' ? '#E2E8F0 #E2E8F0 transparent #E2E8F0' : 'transparent',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  color: activeTab === 'rooms' ? '#F06543' : '#64748B',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  fontWeight: activeTab === 'rooms' ? 800 : 600,
                  padding: '10px 18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Bed size={14} />
                2. Room Inventory & Rates ({rooms.length})
              </button>
            </div>
          )}

          <div style={{ padding: 28 }}>
            {(!editingItem || activeTab === 'general') ? (
              <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>RESORT / HOTEL NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        const name = e.target.value;
                        setFormData(prev => {
                          const autoSlug = (prev.name || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                          const isAuto = !prev.slug || prev.slug === autoSlug;
                          return {
                            ...prev,
                            name,
                            slug: isAuto ? name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : prev.slug
                          };
                        });
                      }}
                      placeholder="e.g. Barefoot at Havelock"
                      style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>URL SLUG (AUTO-GENERATED)</label>
                    <input type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} placeholder="e.g. barefoot-at-havelock" style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>LOCATION / BEACH</label>
                    <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Radhanagar Beach, Havelock" style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>CATEGORY TYPE</label>
                    <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                      <option value="BEACH_RESORT">Beach Resort</option>
                      <option value="LUXURY_VILLA">Luxury Villa</option>
                      <option value="ECO_LODGE">Eco Lodge</option>
                      <option value="HERITAGE_HOTEL">Heritage Hotel</option>
                      <option value="BOUTIQUE_RESORT">Boutique Resort</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>PRICE PER NIGHT (INR)</label>
                    <input type="number" required value={formData.pricePerNight} onChange={(e) => setFormData({ ...formData, pricePerNight: e.target.value })} placeholder="6500" style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>RATING</label>
                    <input type="number" step="0.1" min="1" max="5" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <MediaUploadField
                  label="HERO COVER IMAGE"
                  value={formData.heroImage}
                  onChange={(url) => setFormData({ ...formData, heroImage: url })}
                  helpText="Upload resort exterior or beachfront cover photograph."
                />

                <MultiMediaUploadField
                  label="RESORT PHOTO GALLERY (MULTI-IMAGE)"
                  value={formData.gallery}
                  returnString={false}
                  onChange={(newGallery) => setFormData({ ...formData, gallery: Array.isArray(newGallery) ? newGallery : (newGallery ? newGallery.split('\n') : []) })}
                  helpText="Upload multiple resort, room, and amenities photos (drag & drop or paste URLs)."
                />

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>SHORT DESCRIPTION</label>
                  <input type="text" value={formData.shortDescription} onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })} placeholder="Eco luxury beachfront villas..." style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>DETAILED DESCRIPTION</label>
                  <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Nestled in native rainforest, Barefoot features..." style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', minHeight: 80, fontFamily: 'sans-serif', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 10 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#0B2545', fontWeight: 800 }}>
                    <input type="checkbox" checked={formData.featured} onChange={e => setFormData({ ...formData, featured: e.target.checked })} style={{ width: 18, height: 18, accentColor: '#F06543', cursor: 'pointer' }} />
                    <span>FEATURE PROPERTY ON HOMEPAGE</span>
                  </label>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#64748b' }}>STATUS:</span>
                    <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '6px 12px', color: '#0f172a', fontSize: 12, outline: 'none', cursor: 'pointer' }}>
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 16, borderTop: '1px solid #e2e8f0', paddingTop: 16 }}>
                  <button type="button" onClick={() => setModalOpen(false)} style={{ background: 'transparent', border: '1.5px solid #e2e8f0', color: '#334155', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, padding: '10px 20px', borderRadius: 10, cursor: 'pointer' }}>
                    CANCEL
                  </button>
                  <button type="submit" style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, padding: '10px 24px', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,201,212,0.3)' }}>
                    {editingItem ? 'SAVE CHANGES' : 'CREATE STAY'}
                  </button>
                </div>
              </form>
            ) : (
              // Tab 2: Room Inventory manager (Nested)
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 14 }}>
                    Rooms listed under {editingItem.name}
                  </h4>
                  <button
                    onClick={handleOpenCreateRoom}
                    style={{ background: 'rgba(33,230,193,0.12)', border: '1px solid rgba(33,230,193,0.3)', color: '#F06543', padding: '6px 12px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
                  >
                    + ADD ROOM CATEGORY
                  </button>
                </div>

                {loadingRooms ? (
                  <div style={{ padding: '20px 0', textAlign: 'center', color: '#F06543', fontSize: 12 }}>
                    Loading rooms list...
                  </div>
                ) : rooms.length === 0 ? (
                  <div style={{ background: '#e2e8f0', padding: 30, borderRadius: 16, border: '1px dashed #e2e8f0', textAlign: 'center' }}>
                    <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>No room categories defined yet for this resort stay.</p>
                  </div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '1.5px solid #e2e8f0', color: '#64748b', fontSize: 11, fontWeight: 800 }}>
                          <th style={{ padding: 10 }}>Room Name</th>
                          <th style={{ padding: 10 }}>Capacity</th>
                          <th style={{ padding: 10 }}>Rate/Night</th>
                          <th style={{ padding: 10 }}>Total Rooms</th>
                          <th style={{ padding: 10, textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rooms.map(room => (
                          <tr key={room.id} style={{ borderBottom: '1px solid #e2e8f0', fontSize: 12, color: '#334155' }}>
                            <td style={{ padding: 10, fontWeight: 700 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {room.image && <img src={room.image} alt={room.name} style={{ width: 36, height: 26, borderRadius: 4, objectFit: 'cover' }} />}
                                <span>{room.name}</span>
                              </div>
                            </td>
                            <td style={{ padding: 10 }}>{room.capacity} Pax</td>
                            <td style={{ padding: 10, color: '#F06543', fontWeight: 800 }}>₹{Number(room.price).toLocaleString('en-IN')}</td>
                            <td style={{ padding: 10 }}>{room.availableRooms} Rooms</td>
                            <td style={{ padding: 10, textAlign: 'right' }}>
                              <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                                <button onClick={() => handleOpenEditRoom(room)} style={{ background: 'rgba(22,217,255,0.12)', border: 'none', color: '#F06543', padding: '4px 8px', borderRadius: 6, cursor: 'pointer', fontSize: 11, fontWeight: 800 }}>
                                  EDIT
                                </button>
                                <button onClick={() => setDeleteRoomId(room.id)} style={{ background: 'rgba(255,79,123,0.12)', border: 'none', color: '#ff4f7b', padding: '4px 8px', borderRadius: 6, cursor: 'pointer', fontSize: 11, fontWeight: 800 }}>
                                  DELETE
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

          {/* NESTED ADD/EDIT ROOM MODAL */}
          {roomModalOpen && (
            <div style={{
              position: 'fixed', inset: 0, zIndex: 1600,
              background: 'rgba(2, 11, 18, 0.92)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
            }}>
              <form
                onSubmit={handleSaveRoom}
                style={{
                  width: '100%', maxWidth: 460, background: '#ffffff',
                  border: '1.5px solid #E2E8F0', borderRadius: 20, padding: 24,
                  boxShadow: '0 25px 60px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', gap: 14,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: 10 }}>
                  <h4 style={{ margin: 0, color: '#0B2545', fontSize: 15, fontWeight: 900 }}>
                    {editingRoom ? `EDIT ROOM TYPE: ${editingRoom.name}` : 'ADD ROOM CATEGORY'}
                  </h4>
                  <button type="button" onClick={() => setRoomModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 18, cursor: 'pointer' }}>✕</button>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>ROOM TYPE NAME</label>
                  <input type="text" required value={roomFormData.name} onChange={e => setRoomFormData({ ...roomFormData, name: e.target.value })} placeholder="e.g. Luxury Beach Villa" style={{ width: '100%', background: '#f8fafc', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, color: '#334155', fontSize: 12, outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>GUEST CAPACITY</label>
                    <input type="number" required value={roomFormData.capacity} onChange={e => setRoomFormData({ ...roomFormData, capacity: Number(e.target.value) })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, color: '#334155', fontSize: 12, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>TOTAL ALLOTMENT</label>
                    <input type="number" required value={roomFormData.availableRooms} onChange={e => setRoomFormData({ ...roomFormData, availableRooms: Number(e.target.value) })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, color: '#334155', fontSize: 12, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>RATE PER NIGHT (INR)</label>
                  <input type="number" required value={roomFormData.price} onChange={e => setRoomFormData({ ...roomFormData, price: e.target.value })} placeholder="6000" style={{ width: '100%', background: '#f8fafc', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, color: '#334155', fontSize: 12, outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <MediaUploadField
                  label="ROOM PHOTOGRAPH"
                  value={roomFormData.image}
                  onChange={(url) => setRoomFormData({ ...roomFormData, image: url })}
                  helpText="Upload interior room photograph or enter image URL."
                />

                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>AMENITIES (COMMA SEPARATED)</label>
                  <input type="text" value={roomFormData.amenitiesRaw} onChange={e => setRoomFormData({ ...roomFormData, amenitiesRaw: e.target.value })} placeholder="Ocean View, AC, King Bed" style={{ width: '100%', background: '#f8fafc', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, color: '#334155', fontSize: 12, outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>ROOM DESCRIPTION</label>
                  <textarea value={roomFormData.description} onChange={e => setRoomFormData({ ...roomFormData, description: e.target.value })} placeholder="Room specifications..." style={{ width: '100%', background: '#f8fafc', border: '1px solid #E2E8F0', borderRadius: 10, padding: 8, color: '#334155', fontSize: 12, outline: 'none', minHeight: 50, fontFamily: 'sans-serif', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 12 }}>
                  <button type="button" onClick={() => setRoomModalOpen(false)} style={{ background: 'transparent', border: '1.5px solid #CBD5E1', color: '#334155', fontSize: 11, fontWeight: 700, padding: '8px 16px', borderRadius: 8, cursor: 'pointer' }}>
                    CANCEL
                  </button>
                  <button type="submit" style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontSize: 11, fontWeight: 900, padding: '8px 20px', borderRadius: 8, cursor: 'pointer' }}>
                    {editingRoom ? 'SAVE ROOM' : 'ADD ROOM'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* CONFIRM DELETE ROOM */}
          <ConfirmDialog
            isOpen={Boolean(deleteRoomId)}
            title="Delete Room Type?"
            message="Are you sure you want to remove this room category from this stay?"
            onConfirm={handleDeleteRoom}
            onCancel={() => setDeleteRoomId(null)}
          />
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <DataTable
          title="Beach Resorts & Luxury Stays"
          subtitle="ACCOMMODATION DIRECTORY MANAGEMENT"
          columns={columns}
          data={stays}
          loading={loading}
          searchPlaceholder="Search resort name or location..."
          actions={
            <button
              onClick={handleOpenCreate}
              style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 16px', borderRadius: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, cursor: 'pointer' }}
            >
              + ADD RESORT / STAY
            </button>
          }
        />

        {/* CONFIRM DELETE STAY */}
        <ConfirmDialog
          isOpen={Boolean(deleteId)}
          title="Delete Resort Property?"
          message="Are you sure you want to delete this resort stay from accommodation inventory?"
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      </div>
    );
  }
