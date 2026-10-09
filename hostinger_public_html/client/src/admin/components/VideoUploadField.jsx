import React, { useState } from 'react';
import { Video, Play, X, ExternalLink } from 'lucide-react';

/**
 * VideoUploadField - Production Video Trailer URL input with instant embedded player preview
 */
export default function VideoUploadField({
  value = '',
  onChange,
  label = 'VIDEO TRAILER (YOUTUBE / MP4)',
  placeholder = 'https://www.youtube.com/watch?v=... or https://example.com/video.mp4',
  helpText = 'Paste a YouTube video link or direct MP4 URL to show a video preview modal.',
}) {
  const [showPreview, setShowPreview] = useState(false);

  // Convert YouTube watch URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=0`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=0`;
    }
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    return null; // Might be direct MP4 or other video
  };

  const embedUrl = getEmbedUrl(value);
  const isMp4 = value && (value.endsWith('.mp4') || value.endsWith('.webm'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: 11, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
          {label}
        </label>
        {value && (
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: 'none', border: 'none', color: '#F06543',
              fontSize: 11, fontWeight: 800, cursor: 'pointer'
            }}
          >
            <Play size={11} /> {showPreview ? 'Hide Preview' : 'Live Preview'}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Video size={14} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
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

      {/* Video Live Preview Frame */}
      {(showPreview || embedUrl || isMp4) && value && (
        <div style={{
          marginTop: 6, borderRadius: 12, overflow: 'hidden',
          background: '#020b12', border: '1px solid #e2e8f0', position: 'relative',
          aspectRatio: '16/9', maxHeight: 220,
        }}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Video Preview"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isMp4 ? (
            <video
              src={value}
              controls
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#94a3b8', gap: 6 }}>
              <Video size={32} color="#F06543" />
              <span style={{ fontSize: 12 }}>Custom Video URL Ready</span>
              <a href={value} target="_blank" rel="noreferrer" style={{ color: '#F06543', fontSize: 11, display: 'flex', alignItems: 'center', gap: 2 }}>
                Test Link <ExternalLink size={11} />
              </a>
            </div>
          )}
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
