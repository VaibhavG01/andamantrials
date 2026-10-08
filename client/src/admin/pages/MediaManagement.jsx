import React, { useState, useRef } from 'react';
import { Upload, Copy, Check, Trash2, Image as ImageIcon, Video, FileText, Search, Plus, Loader2, Link as LinkIcon, ExternalLink } from 'lucide-react';
import ConfirmDialog from '../components/ConfirmDialog';
import adminService from '../services/adminService';

const DEFAULT_MEDIA = [
  { id: '1', name: 'port-blair-hero.jpg', type: 'image', size: '1.2 MB', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
  { id: '2', name: 'havelock-beach.jpg', type: 'image', size: '2.4 MB', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { id: '3', name: 'scuba-diving-video.mp4', type: 'video', size: '14.8 MB', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
  { id: '4', name: 'radhanagar-sunset.jpg', type: 'image', size: '3.1 MB', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
];

export default function MediaManagement() {
  const [mediaList, setMediaList] = useState(DEFAULT_MEDIA);
  const [copiedId, setCopiedId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [filterType, setFilterType] = useState('ALL');
  const [search, setSearch] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');
  const fileInputRef = useRef(null);

  const handleCopy = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleDelete = () => {
    if (!deleteId) return;
    setMediaList((prev) => prev.filter((m) => m.id !== deleteId));
    setDeleteId(null);
  };

  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;
    setIsUploading(true);

    try {
      const urls = await adminService.uploadMultipleImages(files);
      const newItems = Array.from(files).map((file, idx) => ({
        id: String(Date.now() + idx),
        name: file.name,
        type: file.type.startsWith('video/') ? 'video' : file.type.startsWith('image/') ? 'image' : 'document',
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        url: (Array.isArray(urls) && urls[idx]) ? urls[idx] : URL.createObjectURL(file),
      }));

      setMediaList((prev) => [...newItems, ...prev]);
    } catch (err) {
      console.warn('Upload error, adding local references:', err);
      const newItems = Array.from(files).map((file, idx) => ({
        id: String(Date.now() + idx),
        name: file.name,
        type: file.type.startsWith('video/') ? 'video' : file.type.startsWith('image/') ? 'image' : 'document',
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        url: URL.createObjectURL(file),
      }));
      setMediaList((prev) => [...newItems, ...prev]);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddViaUrl = (e) => {
    e.preventDefault();
    if (!newUrl.trim()) return;

    const isVid = newUrl.includes('youtube') || newUrl.endsWith('.mp4');
    const item = {
      id: String(Date.now()),
      name: newName.trim() || (isVid ? 'External Video' : 'Web Asset'),
      type: isVid ? 'video' : 'image',
      size: 'External CDN',
      url: newUrl.trim(),
    };

    setMediaList((prev) => [item, ...prev]);
    setNewUrl('');
    setNewName('');
    setUrlModalOpen(false);
  };

  const filtered = mediaList.filter((m) => {
    const matchType = filterType === 'ALL' || m.type === filterType.toLowerCase();
    const matchQuery = m.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchQuery;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*,application/pdf"
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files) handleFileUpload(e.target.files);
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ASSETS & UPLOADS
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 900, color: '#0B2545', margin: '4px 0 0' }}>
            Media & Asset Library
          </h1>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => setUrlModalOpen(true)}
            style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#334155',
              padding: '10px 18px',
              borderRadius: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <LinkIcon size={14} /> + Add via URL
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            style={{
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
              border: 'none',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 900,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 14px rgba(0, 150, 136, 0.25)',
            }}
          >
            {isUploading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Upload size={16} />}
            <span>{isUploading ? 'Uploading...' : 'Upload Files'}</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['ALL', 'IMAGE', 'VIDEO', 'DOCUMENT'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              style={{
                background: filterType === type ? 'rgba(0, 150, 136, 0.12)' : '#ffffff',
                border: `1px solid ${filterType === type ? '#F06543' : '#e2e8f0'}`,
                color: filterType === type ? '#F06543' : '#64748b',
                padding: '6px 14px',
                borderRadius: 10,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              {type}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: 260 }}>
          <Search size={14} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search media files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: 10,
              padding: '7px 12px 7px 32px',
              color: '#334155',
              fontSize: 12,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 16,
              padding: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ width: '100%', height: 130, borderRadius: 10, overflow: 'hidden', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'; }} />
                ) : item.type === 'video' ? (
                  <Video size={36} color="#F06543" />
                ) : (
                  <FileText size={36} color="#0B2545" />
                )}
              </div>

              <div style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{item.size}</div>
            </div>

            <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
              <button
                onClick={() => handleCopy(item.id, item.url)}
                style={{
                  flex: 1, background: copiedId === item.id ? '#ecfdf5' : '#f8fafc', border: `1px solid ${copiedId === item.id ? '#a7f3d0' : '#cbd5e1'}`,
                  color: copiedId === item.id ? '#059669' : '#F06543', padding: '6px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {copiedId === item.id ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedId === item.id ? 'COPIED' : 'COPY URL'}</span>
              </button>

              <button
                onClick={() => setDeleteId(item.id)}
                style={{
                  background: '#fff1f2', border: '1px solid #fecdd3',
                  color: '#e11d48', padding: '6px 10px', borderRadius: 8, cursor: 'pointer'
                }}
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD VIA URL MODAL */}
      {urlModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1500,
          background: 'rgba(2, 11, 18, 0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}>
          <form
            onSubmit={handleAddViaUrl}
            style={{
              width: '100%', maxWidth: 460, background: '#ffffff',
              border: '1.5px solid #e2e8f0', borderRadius: 20, padding: 24,
              boxShadow: '0 25px 60px rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column', gap: 14
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                Add Media via External URL
              </h3>
              <button type="button" onClick={() => setUrlModalOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: 18, cursor: 'pointer' }}>✕</button>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>FILE NAME / TITLE</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Scuba Diving Hero Photo"
                style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13, boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>IMAGE OR VIDEO URL</label>
              <input
                type="url"
                required
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://images.unsplash.com/... or YouTube URL"
                style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: 13, boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
              <button
                type="button"
                onClick={() => setUrlModalOpen(false)}
                style={{ background: '#f1f5f9', border: 'none', color: '#475569', padding: '10px 18px', borderRadius: 10, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '10px 22px', borderRadius: 10, fontSize: 12, fontWeight: 900, cursor: 'pointer' }}
              >
                Add Asset
              </button>
            </div>
          </form>
        </div>
      )}

      <ConfirmDialog
        isOpen={Boolean(deleteId)}
        title="Delete Media File?"
        message="Are you sure you want to remove this asset file from the library?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
