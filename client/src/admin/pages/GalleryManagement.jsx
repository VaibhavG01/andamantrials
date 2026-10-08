// client/src/admin/pages/GalleryManagement.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Photo Gallery & Visual Portfolio Admin Management

import React, { useState, useEffect, useRef } from 'react';
import {
  Image, Plus, Search, Filter, Trash2, Edit, Heart, Eye,
  ExternalLink, Copy, Check, Upload, Sparkles, RefreshCw,
  Camera, Anchor, Waves, Sun, Mountain, Star, AlertCircle, X
} from 'lucide-react';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';
import LoadingState from '../components/LoadingState';

const CATEGORY_OPTIONS = [
  { id: 'beaches', label: 'Beaches', icon: Anchor },
  { id: 'underwater', label: 'Underwater', icon: Waves },
  { id: 'sunsets', label: 'Sunsets', icon: Sun },
  { id: 'adventures', label: 'Adventures', icon: Mountain },
  { id: 'nature', label: 'Nature', icon: Star },
  { id: 'stays', label: 'Stays & Resorts', icon: Camera },
  { id: 'cruises', label: 'Cruises & Ferries', icon: Anchor },
];

export default function GalleryManagement() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formError, setFormError] = useState('');
  const fileInputRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'beaches',
    src: '',
    thumb: '',
    isFeatured: false,
    status: 'ACTIVE',
  });

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const res = await adminService.getGalleryPhotos({ status: '' });
      if (res.data && Array.isArray(res.data)) {
        setPhotos(res.data);
      } else if (res.data?.data && Array.isArray(res.data.data)) {
        setPhotos(res.data.data);
      } else {
        setPhotos([]);
      }
    } catch (err) {
      console.error('Failed to load gallery photos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const openAddModal = () => {
    setEditingPhoto(null);
    setFormData({
      title: '',
      category: 'beaches',
      src: '',
      thumb: '',
      isFeatured: false,
      status: 'ACTIVE',
    });
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (photo) => {
    setEditingPhoto(photo);
    setFormData({
      title: photo.title || '',
      category: photo.category || 'beaches',
      src: photo.src || '',
      thumb: photo.thumb || photo.src || '',
      isFeatured: !!photo.isFeatured,
      status: photo.status || 'ACTIVE',
    });
    setFormError('');
    setIsModalOpen(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setFormError('');
    try {
      const res = await adminService.uploadSingleImage(file);
      const url = res.data?.url || res.data?.data?.url;
      if (url) {
        setFormData((prev) => ({ ...prev, src: url, thumb: url }));
      }
    } catch (err) {
      console.error('Image upload failed:', err);
      setFormError('Failed to upload image to server. You can enter an image URL instead.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setFormError('Photo title is required');
      return;
    }
    if (!formData.src.trim()) {
      setFormError('Photo Image URL or uploaded file is required');
      return;
    }

    try {
      if (editingPhoto) {
        await adminService.updateGalleryPhoto(editingPhoto.id, formData);
      } else {
        await adminService.createGalleryPhoto(formData);
      }
      setIsModalOpen(false);
      fetchPhotos();
    } catch (err) {
      console.error('Save failed:', err);
      setFormError(err.response?.data?.message || 'Failed to save photo');
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    try {
      await adminService.deleteGalleryPhoto(deleteTarget.id);
      setDeleteTarget(null);
      fetchPhotos();
    } catch (err) {
      console.error('Failed to delete photo:', err);
    }
  };

  const handleCopyLink = (photo) => {
    navigator.clipboard.writeText(photo.src);
    setCopiedId(photo.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  // Filtered List
  const filteredPhotos = photos.filter((p) => {
    const matchCat = selectedCategory === 'all' || p.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = (p.title || '').toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const beachCount = photos.filter((p) => p.category === 'beaches').length;
  const underwaterCount = photos.filter((p) => p.category === 'underwater').length;
  const sunsetCount = photos.filter((p) => p.category === 'sunsets').length;
  const adventureCount = photos.filter((p) => p.category === 'adventures').length;
  const featuredCount = photos.filter((p) => p.isFeatured).length;

  return (
    <div style={{ paddingBottom: 40, fontFamily: "'Inter', sans-serif" }}>
      {/* ── HEADER ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 28 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
            <Camera size={15} />
            <span>VISUAL PORTFOLIO & ASSETS</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 900, color: '#0B2545', margin: 0 }}>
            Photo Gallery Management
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
            Manage dynamic photo showcase, categorized island collections, and homepage highlights.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={fetchPhotos}
            style={{
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              padding: '10px 14px',
              borderRadius: 12,
              color: '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12.5,
              fontWeight: 800,
            }}
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>

          <button
            onClick={openAddModal}
            style={{
              background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '10px 18px',
              borderRadius: 12,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 900,
              boxShadow: '0 4px 14px rgba(240, 101, 67, 0.3)',
            }}
          >
            <Plus size={16} />
            <span>Add New Photo</span>
          </button>
        </div>
      </div>

      {/* ── METRICS STRIP ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 14, marginBottom: 28 }}>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 4 }}>TOTAL PHOTOS</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545' }}>{photos.length}</div>
        </div>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 4 }}>BEACHES</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#F06543' }}>{beachCount}</div>
        </div>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 4 }}>UNDERWATER</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0284c7' }}>{underwaterCount}</div>
        </div>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 4 }}>SUNSETS</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#d97706' }}>{sunsetCount}</div>
        </div>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 4 }}>HOMEPAGE FEATURED</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#16a34a' }}>{featuredCount}</div>
        </div>
      </div>

      {/* ── FILTER TABS & SEARCH BAR ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginBottom: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: selectedCategory === 'all' ? '1.5px solid #F06543' : '1.5px solid #e2e8f0',
              background: selectedCategory === 'all' ? '#FFF0EB' : '#ffffff',
              color: selectedCategory === 'all' ? '#F06543' : '#475569',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12.5,
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            All ({photos.length})
          </button>
          {CATEGORY_OPTIONS.map((cat) => {
            const count = photos.filter((p) => p.category === cat.id).length;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 20,
                  border: active ? '1.5px solid #F06543' : '1.5px solid #e2e8f0',
                  background: active ? '#FFF0EB' : '#ffffff',
                  color: active ? '#F06543' : '#475569',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', width: 260 }}>
          <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search photo title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 12px 9px 36px',
              borderRadius: 12,
              border: '1.5px solid #e2e8f0',
              fontFamily: "'Inter', sans-serif",
              fontSize: 12.5,
              outline: 'none',
              background: '#ffffff',
            }}
          />
        </div>
      </div>

      {/* ── PHOTO GRID ── */}
      {loading ? (
        <LoadingState text="Loading photo gallery collection..." />
      ) : filteredPhotos.length === 0 ? (
        <div style={{ background: '#ffffff', border: '2px dashed #e2e8f0', borderRadius: 20, padding: 60, textAlign: 'center' }}>
          <Image size={42} color="#94a3b8" style={{ margin: '0 auto 12px' }} />
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '0 0 6px' }}>
            No Photos Found
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: '0 0 18px' }}>
            No gallery images matched your search or category filter.
          </p>
          <button
            onClick={openAddModal}
            style={{
              background: '#0B2545',
              color: '#ffffff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 10,
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Upload New Photo
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 45, 98, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s',
              }}
            >
              {/* Image Preview Box */}
              <div style={{ position: 'relative', height: 200, width: '100%', overflow: 'hidden', background: '#0B2545' }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75';
                  }}
                />

                {/* Badges Overlay */}
                <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 900, color: '#ffffff', background: 'rgba(0, 45, 98, 0.85)', backdropFilter: 'blur(6px)', padding: '3px 9px', borderRadius: 8, textTransform: 'uppercase' }}>
                    {photo.category}
                  </span>
                  {photo.isFeatured && (
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 900, color: '#ffd700', background: 'rgba(0, 0, 0, 0.75)', padding: '3px 8px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Sparkles size={11} /> Featured
                    </span>
                  )}
                </div>

                {/* Likes Pill */}
                <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', color: '#ffffff', padding: '3px 8px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700 }}>
                  <Heart size={12} fill="#F06543" color="#F06543" />
                  <span>{photo.likesCount || 0}</span>
                </div>
              </div>

              {/* Body Details */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', margin: '0 0 4px', lineHeight: 1.3 }}>
                    {photo.title}
                  </h4>
                </div>

                {/* Action Toolbar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: 12, marginTop: 10 }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      onClick={() => handleCopyLink(photo)}
                      title="Copy Image URL"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 6, cursor: 'pointer', color: copiedId === photo.id ? '#F06543' : '#64748b' }}
                    >
                      {copiedId === photo.id ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                    <a
                      href={photo.src}
                      target="_blank"
                      rel="noreferrer"
                      title="Open Original Image"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 6, cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center' }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      onClick={() => openEditModal(photo)}
                      style={{ background: '#FFF0EB', border: '1px solid rgba(13, 148, 136, 0.3)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#0B2545', display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800 }}
                    >
                      <Edit size={13} /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteTarget(photo)}
                      style={{ background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── ADD / EDIT MODAL ── */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(2, 11, 20, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 520,
              background: '#ffffff',
              borderRadius: 24,
              boxShadow: '0 25px 70px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Modal Header */}
            <div style={{ background: '#0B2545', color: '#ffffff', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#2dd4bf', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {editingPhoto ? 'UPDATE VISUAL' : 'NEW GALLERY ITEM'}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, margin: '2px 0 0' }}>
                  {editingPhoto ? 'Edit Photo Details' : 'Add Photo to Gallery'}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {formError && (
                <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', color: '#dc2626', padding: '10px 14px', borderRadius: 12, fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AlertCircle size={16} />
                  <span>{formError}</span>
                </div>
              )}

              {/* Title */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#334155', marginBottom: 6 }}>
                  PHOTO TITLE *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhanagar Sunset Golden Hour"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #cbd5e1', fontSize: 13, outline: 'none' }}
                />
              </div>

              {/* Category */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#334155', marginBottom: 6 }}>
                  CATEGORY *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #cbd5e1', fontSize: 13, outline: 'none', background: '#ffffff' }}
                >
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Image Source & Upload */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#334155', marginBottom: 6 }}>
                  IMAGE URL OR UPLOAD *
                </label>
                <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={formData.src}
                    onChange={(e) => setFormData({ ...formData, src: e.target.value, thumb: e.target.value })}
                    style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1.5px solid #cbd5e1', fontSize: 13, outline: 'none' }}
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                  <button
                    type="button"
                    disabled={isUploading}
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      background: '#0B2545',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 14px',
                      borderRadius: 10,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    <Upload size={14} />
                    <span>{isUploading ? 'Uploading...' : 'Upload'}</span>
                  </button>
                </div>

                {formData.src && (
                  <div style={{ position: 'relative', height: 140, borderRadius: 10, overflow: 'hidden', border: '1px solid #e2e8f0', background: '#0B2545', marginTop: 8 }}>
                    <img src={formData.src} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                )}
              </div>

              {/* Checkboxes: Featured & Status */}
              <div style={{ display: 'flex', gap: 24, padding: '12px 0', borderTop: '1px solid #f1f5f9' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#0B2545' }}>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    style={{ width: 16, height: 16 }}
                  />
                  <span>Show in Homepage Highlights</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#0B2545' }}>
                  <input
                    type="checkbox"
                    checked={formData.status === 'ACTIVE'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.checked ? 'ACTIVE' : 'INACTIVE' })}
                    style={{ width: 16, height: 16 }}
                  />
                  <span>Publish as Active</span>
                </label>
              </div>

              {/* Submit Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8 }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ padding: '10px 18px', borderRadius: 10, border: '1.5px solid #cbd5e1', background: '#ffffff', color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 22px',
                    borderRadius: 10,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(240, 101, 67, 0.3)',
                  }}
                >
                  {editingPhoto ? 'Save Changes' : 'Add Photo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        title="Delete Gallery Photo?"
        message={`Are you sure you want to remove "${deleteTarget?.title}" from the visual portfolio? This action cannot be undone.`}
        confirmText="Yes, Delete Photo"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
