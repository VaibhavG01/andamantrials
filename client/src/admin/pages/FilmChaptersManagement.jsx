import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import DataTable from '../components/DataTable';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import VideoUploadField from '../components/VideoUploadField';
import { Plus, X, Edit3, Trash2, ArrowLeft, CheckCircle2, Film, Video, Layers, Sparkles } from 'lucide-react';

export default function FilmChaptersManagement() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  // Modal / Studio State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: '4K ULTRA HD',
    description: '',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  });

  const loadChapters = async () => {
    setLoading(true);
    try {
      const res = await adminService.getFilmChapters();
      if (res && res.data) {
        setChapters(res.data.map(ch => ({
          ...ch,
          id: String(ch.id)
        })));
      }
    } catch (e) {
      console.error('Failed to load film chapters:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChapters();
  }, []);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      type: '4K ULTRA HD',
      description: '',
      thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      type: item.type || '',
      description: item.description || '',
      thumb: item.thumb || '',
      videoUrl: item.videoUrl || ''
    });
    setModalOpen(true);
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    if (!formData.title || !formData.thumb || !formData.videoUrl) {
      alert('Please fill in Chapter Title, Thumbnail, and Video URL.');
      return;
    }

    try {
      if (editingItem) {
        await adminService.updateFilmChapter(editingItem.id, formData);
        alert('Cinematic scene updated successfully.');
      } else {
        await adminService.createFilmChapter(formData);
        alert('Cinematic scene added successfully.');
      }
      setModalOpen(false);
      loadChapters();
    } catch (err) {
      alert('Error saving: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await adminService.deleteFilmChapter(deleteId);
      setDeleteId(null);
      loadChapters();
    } catch (err) {
      alert('Failed to delete scene.');
    }
  };

  const columns = [
    {
      header: 'Showcase Preview',
      accessor: 'title',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={row.thumb} alt={row.title} style={{ width: 64, height: 44, borderRadius: 8, objectFit: 'cover' }} />
          <div>
            <div style={{ color: '#334155', fontWeight: 800 }}>{row.title}</div>
            <div style={{ color: '#64748b', fontSize: 11 }}>Type: {row.type || 'Standard'}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Description Info',
      accessor: 'description',
      render: (row) => (
        <span style={{ color: '#64748B', fontSize: 12 }}>
          {row.description ? (row.description.length > 80 ? row.description.substring(0, 80) + '...' : row.description) : 'N/A'}
        </span>
      )
    },
    {
      header: 'YouTube Video Link',
      accessor: 'videoUrl',
      render: (row) => (
        <a 
          href={row.videoUrl} 
          target="_blank" 
          rel="noreferrer"
          style={{ color: '#F06543', fontWeight: 700, textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5 }}
        >
          Watch Video ↗
        </a>
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
              Back to Film Chapters
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingItem ? `Edit Scene: ${formData.title || 'Chapter'}` : 'Add New Cinematic Chapter'}
                </h2>
                {formData.type && (
                  <span style={{ background: '#FFF1EE', color: '#F06543', padding: '2px 8px', borderRadius: 8, fontSize: 11, fontWeight: 800 }}>
                    {formData.type}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Configure 4K cinematic scene, poster thumbnail, and YouTube player stream
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
              {editingItem ? 'Save Scene Changes' : 'Publish Film Chapter →'}
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
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                CHAPTER TITLE *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Radhanagar Sunset Drone Aerial"
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                VIDEO RESOLUTION / BADGE
              </label>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="e.g. 4K ULTRA HD, 60FPS CINEMATIC"
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              SCENE DESCRIPTION
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the cinematic footage, location highlights, and experience..."
              rows={3}
              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>

          <MediaUploadField
            label="POSTER / COVER THUMBNAIL"
            value={formData.thumb}
            onChange={(url) => setFormData({ ...formData, thumb: url })}
            required
            helpText="Upload a crisp cinematic video thumbnail or enter image URL."
          />

          <VideoUploadField
            label="YOUTUBE OR DIRECT VIDEO STREAM URL"
            value={formData.videoUrl}
            onChange={(url) => setFormData({ ...formData, videoUrl: url })}
            required
            helpText="Paste YouTube video link or direct MP4 stream with embedded live player preview."
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Cinematic Chapters"
        subtitle="4K FILM CMS MANAGEMENT"
        columns={columns}
        data={chapters}
        loading={loading}
        searchPlaceholder="Search scene title or description..."
        actions={
          <button
            onClick={handleOpenCreate}
            style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 16px', borderRadius: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, cursor: 'pointer' }}
          >
            + ADD FILM CHAPTER
          </button>
        }
      />

      {/* CONFIRM DELETE DIALOG */}
      {deleteId && (
        <ConfirmDialog
          isOpen={true}
          title="Delete Film Chapter Scene?"
          message="Are you sure you want to delete this scene highlight? This will remove the chapter button from the homepage cinematic showcase."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}
