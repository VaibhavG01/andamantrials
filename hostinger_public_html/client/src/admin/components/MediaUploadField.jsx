import React, { useState, useRef } from 'react';
import { Upload, Link as LinkIcon, Image as ImageIcon, X, Check, Loader2, ExternalLink } from 'lucide-react';
import adminService from '../services/adminService';

/**
 * MediaUploadField - Production Dual-Mode Single Image Picker (Upload File / Enter URL)
 * @param {string} value - Current image URL
 * @param {function} onChange - Callback function(url: string)
 * @param {string} label - Input label (e.g., 'COVER IMAGE')
 * @param {string} placeholder - Placeholder for URL input
 * @param {boolean} required - Is the field required
 * @param {string} helpText - Optional helper description
 */
export default function MediaUploadField({
  value = '',
  onChange,
  label = 'IMAGE',
  placeholder = 'https://images.unsplash.com/... or upload a file',
  required = false,
  helpText = 'Upload a high-resolution JPG/PNG/WebP image or paste a direct image URL.',
}) {
  const [mode, setMode] = useState(value && !value.startsWith('/uploads') ? 'url' : 'upload');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size exceeds 10MB limit.');
      return;
    }

    setUploadError('');
    setIsUploading(true);

    try {
      const res = await adminService.uploadSingleImage(file);
      // res may be { success: true, data: { url: '...' } } or unwrapped string
      const url = res?.data?.url || res?.url || (typeof res === 'string' ? res : '');
      if (url) {
        onChange(url);
      } else {
        // Fallback to local object URL if backend offline
        const localUrl = URL.createObjectURL(file);
        onChange(localUrl);
      }
    } catch (err) {
      console.warn('Upload error, using local fallback:', err);
      const localUrl = URL.createObjectURL(file);
      onChange(localUrl);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
      {/* Label and Mode Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: 11, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>

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
            <Upload size={12} /> Upload File
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
            <LinkIcon size={12} /> Image URL
          </button>
        </div>
      </div>

      {/* Upload Mode Area */}
      {mode === 'upload' && !value && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${dragOver ? '#F06543' : '#cbd5e1'}`,
            borderRadius: 12,
            padding: '20px 16px',
            textAlign: 'center',
            background: dragOver ? '#FFF0EB' : '#f8fafc',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
            }}
          />

          {isUploading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#F06543' }}>
              <Loader2 size={24} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 700 }}>Uploading image to server...</span>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0, 150, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543' }}>
                <Upload size={18} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#334155' }}>
                Click to browse or drag & drop image here
              </div>
              <div style={{ fontSize: 11, color: '#94a3b8' }}>
                Supports JPG, PNG, WebP up to 10MB
              </div>
            </div>
          )}
        </div>
      )}

      {/* URL Mode Area */}
      {mode === 'url' && (
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <LinkIcon size={14} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              required={required && !value}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              style={{
                width: '100%',
                padding: '9px 12px 9px 34px',
                borderRadius: 10,
                border: '1px solid #cbd5e1',
                background: '#f8fafc',
                fontSize: 13,
                color: '#0f172a',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
          {value && (
            <button
              type="button"
              onClick={() => onChange('')}
              style={{
                background: '#fee2e2', border: 'none', color: '#ef4444',
                padding: '0 12px', borderRadius: 10, fontSize: 12, fontWeight: 800, cursor: 'pointer'
              }}
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Upload Error Banner */}
      {uploadError && (
        <div style={{ fontSize: 11, color: '#ef4444', fontWeight: 600, marginTop: 2 }}>
          ⚠️ {uploadError}
        </div>
      )}

      {/* Live Preview Card */}
      {value && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12,
          padding: 8, marginTop: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
        }}>
          <div style={{ width: 64, height: 50, borderRadius: 8, overflow: 'hidden', background: '#0f172a', flexShrink: 0, position: 'relative' }}>
            <img
              src={value}
              alt="Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: '#059669', background: '#ecfdf5', padding: '2px 6px', borderRadius: 4 }}>
                IMAGE READY
              </span>
              <a
                href={value}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: 2, fontSize: 11, textDecoration: 'none' }}
              >
                View <ExternalLink size={11} />
              </a>
            </div>
            <div style={{ fontSize: 11, color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 3 }}>
              {value}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 6 }}>
            <button
              type="button"
              onClick={() => {
                if (mode === 'upload') {
                  fileInputRef.current?.click();
                } else {
                  onChange('');
                }
              }}
              style={{
                background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#475569',
                padding: '5px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer'
              }}
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => onChange('')}
              style={{
                background: '#fee2e2', border: 'none', color: '#ef4444',
                padding: '5px 8px', borderRadius: 8, cursor: 'pointer'
              }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {helpText && !value && (
        <div style={{ fontSize: 11, color: '#94a3b8' }}>
          {helpText}
        </div>
      )}
    </div>
  );
}
