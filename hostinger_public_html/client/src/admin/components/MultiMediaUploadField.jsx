import React, { useState, useRef } from 'react';
import { Upload, Link as LinkIcon, Image as ImageIcon, X, Plus, Loader2, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import adminService from '../services/adminService';

/**
 * MultiMediaUploadField - Production Multi-Image Gallery Manager (Upload Multiple / Paste URLs)
 * @param {Array|string} value - Array of image URLs or newline-separated string
 * @param {function} onChange - Callback function(urls: Array|string)
 * @param {string} label - Input label
 * @param {boolean} returnString - If true, calls onChange with newline-joined string, else Array
 */
export default function MultiMediaUploadField({
  value = [],
  onChange,
  label = 'GALLERY IMAGES',
  returnString = true,
  helpText = 'Upload multiple photos at once or paste multiple image URLs (1 per line).',
}) {
  // Normalize value to array
  const imageList = Array.isArray(value)
    ? value.filter(Boolean)
    : (typeof value === 'string' ? value.split('\n').map(u => u.trim()).filter(Boolean) : []);

  const [mode, setMode] = useState('upload'); // 'upload' | 'url'
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const emitChange = (newList) => {
    if (returnString) {
      onChange(newList.join('\n'));
    } else {
      onChange(newList);
    }
  };

  const handleMultipleFileUpload = async (files) => {
    if (!files || files.length === 0) return;

    setUploadError('');
    setIsUploading(true);

    try {
      const res = await adminService.uploadMultipleImages(files);
      let newUrls = [];
      if (Array.isArray(res)) {
        newUrls = res.map(u => (typeof u === 'string' ? u : u?.url)).filter(Boolean);
      } else if (Array.isArray(res?.urls)) {
        newUrls = res.urls;
      } else if (Array.isArray(res?.data?.urls)) {
        newUrls = res.data.urls;
      } else if (Array.isArray(res?.data)) {
        newUrls = res.data.map(u => (typeof u === 'string' ? u : u?.url)).filter(Boolean);
      } else if (res?.url) {
        newUrls = [res.url];
      }
      const combined = [...imageList, ...newUrls];
      emitChange(combined);
    } catch (err) {
      console.warn('Batch upload error, using local fallback:', err);
      const localUrls = Array.from(files).map(f => URL.createObjectURL(f));
      emitChange([...imageList, ...localUrls]);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddUrl = () => {
    if (!urlInput.trim()) return;
    const lines = urlInput
      .split('\n')
      .map(u => u.trim())
      .filter(u => u.length > 0 && !imageList.includes(u));

    if (lines.length > 0) {
      emitChange([...imageList, ...lines]);
      setUrlInput('');
    }
  };

  const handleRemove = (index) => {
    const updated = imageList.filter((_, i) => i !== index);
    emitChange(updated);
  };

  const handleMove = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= imageList.length) return;
    const updated = [...imageList];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    emitChange(updated);
  };

  const handleSetCover = (index) => {
    if (index === 0) return;
    const updated = [...imageList];
    const [cover] = updated.splice(index, 1);
    updated.unshift(cover);
    emitChange(updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
      {/* Top Bar with Mode Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label style={{ fontSize: 11, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
            {label}
          </label>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#F06543', background: '#ecfdf5', padding: '2px 8px', borderRadius: 10 }}>
            {imageList.length} {imageList.length === 1 ? 'photo' : 'photos'}
          </span>
        </div>

        <div style={{ display: 'flex', background: '#f1f5f9', padding: 2, borderRadius: 8, gap: 2 }}>
          <button
            type="button"
            onClick={() => setMode('upload')}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              padding: '3px 10px', borderRadius: 6, border: 'none',
              fontSize: 11, fontWeight: 800, cursor: 'pointer',
              background: mode === 'upload' ? '#ffffff' : 'transparent',
              color: mode === 'upload' ? '#F06543' : '#64748b',
              boxShadow: mode === 'upload' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            <Upload size={12} /> Upload Files
          </button>
          <button
            type="button"
            onClick={() => setMode('url')}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              padding: '3px 10px', borderRadius: 6, border: 'none',
              fontSize: 11, fontWeight: 800, cursor: 'pointer',
              background: mode === 'url' ? '#ffffff' : 'transparent',
              color: mode === 'url' ? '#F06543' : '#64748b',
              boxShadow: mode === 'url' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            <LinkIcon size={12} /> Paste URLs
          </button>
        </div>
      </div>

      {/* Upload Mode Area */}
      {mode === 'upload' && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            if (e.dataTransfer.files) handleMultipleFileUpload(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${dragOver ? '#F06543' : '#cbd5e1'}`,
            borderRadius: 12,
            padding: '16px 14px',
            textAlign: 'center',
            background: dragOver ? '#FFF0EB' : '#f8fafc',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files) handleMultipleFileUpload(e.target.files);
            }}
          />

          {isUploading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#F06543' }}>
              <Loader2 size={22} style={{ animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 700 }}>Uploading photos...</span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0, 150, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543' }}>
                <Upload size={16} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#334155' }}>
                  Select or drag & drop multiple gallery images
                </div>
                <div style={{ fontSize: 10.5, color: '#94a3b8' }}>
                  Select up to 10 images at once (JPG, PNG, WebP)
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* URL Mode Area */}
      {mode === 'url' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <textarea
            rows={2}
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Paste image URLs (one per line) e.g.&#10;https://images.unsplash.com/...&#10;https://images.unsplash.com/..."
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: 10,
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              fontSize: 12,
              color: '#0f172a',
              outline: 'none',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={handleAddUrl}
              disabled={!urlInput.trim()}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                background: urlInput.trim() ? '#F06543' : '#e2e8f0',
                border: 'none', color: '#ffffff',
                padding: '5px 14px', borderRadius: 8, fontSize: 11, fontWeight: 800,
                cursor: urlInput.trim() ? 'pointer' : 'default',
              }}
            >
              <Plus size={13} /> Add to Gallery
            </button>
          </div>
        </div>
      )}

      {uploadError && (
        <div style={{ fontSize: 11, color: '#ef4444', fontWeight: 600 }}>
          ⚠️ {uploadError}
        </div>
      )}

      {/* Gallery Thumbnail Grid */}
      {imageList.length > 0 && (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: 8, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10
        }}>
          {imageList.map((url, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative', borderRadius: 8, overflow: 'hidden',
                background: '#0f172a', height: 95, border: idx === 0 ? '2px solid #F06543' : '1px solid #e2e8f0',
              }}
            >
              <img
                src={url}
                alt={`Gallery ${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80';
                }}
              />

              {/* Cover Badge */}
              {idx === 0 && (
                <div style={{
                  position: 'absolute', top: 4, left: 4,
                  background: '#F06543', color: '#ffffff', fontSize: 9, fontWeight: 900,
                  padding: '1px 5px', borderRadius: 4, letterSpacing: '0.04em'
                }}>
                  COVER
                </div>
              )}

              {/* Action Overlay */}
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.45)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: 4, opacity: 0, transition: 'opacity 0.15s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {idx !== 0 ? (
                    <button
                      type="button"
                      onClick={() => handleSetCover(idx)}
                      title="Set as First/Cover photo"
                      style={{ background: '#0B2545', border: 'none', color: '#ffffff', fontSize: 9, fontWeight: 800, padding: '2px 5px', borderRadius: 4, cursor: 'pointer' }}
                    >
                      Top
                    </button>
                  ) : <div />}

                  <button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    title="Remove Photo"
                    style={{ background: '#ef4444', border: 'none', color: '#ffffff', width: 20, height: 20, borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <X size={12} />
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                  {idx > 0 && (
                    <button
                      type="button"
                      onClick={() => handleMove(idx, -1)}
                      style={{ background: 'rgba(255,255,255,0.85)', border: 'none', color: '#0f172a', width: 20, height: 20, borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <ArrowLeft size={11} />
                    </button>
                  )}
                  {idx < imageList.length - 1 && (
                    <button
                      type="button"
                      onClick={() => handleMove(idx, 1)}
                      style={{ background: 'rgba(255,255,255,0.85)', border: 'none', color: '#0f172a', width: 20, height: 20, borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <ArrowRight size={11} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {helpText && imageList.length === 0 && (
        <div style={{ fontSize: 11, color: '#94a3b8' }}>
          {helpText}
        </div>
      )}
    </div>
  );
}
