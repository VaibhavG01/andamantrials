// src/pages/GalleryPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Photo Gallery Page — Illustrated masonry visual portfolio of Andaman.

import React, { useEffect, lazy, Suspense } from 'react';
import FooterBottom from '../components/FooterBottom';

const GallerySection = lazy(() => import('../components/gallery/GallerySection'));

export default function GalleryPage() {
  // SEO Page Title & Meta Tags
  useEffect(() => {
    document.title = 'Photo Gallery | Andaman Trails';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore the beauty of Andaman Islands through our high-resolution photo gallery. Real travelers, beaches, underwater diving, and beautiful sunsets.'
      );
    }
  }, []);

  return (
    <div className="gallery-page-root">
      <style>{`
        .gallery-page-root {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
          padding-top: 100px; /* offset for global navbar */
        }

        .gallery-hero-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 20px;
          padding: 0 24px;
        }

        .gallery-hdr-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .gallery-hdr-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 700;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 12px;
        }

        .gallery-hdr-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #5C6F84;
          line-height: 1.6;
        }
      `}</style>

      {/* Hero Header */}
      <div className="gallery-hero-header">
        <div className="gallery-hdr-sub">Visual Portfolio</div>
        <h1 className="gallery-hdr-title">Andaman in Frames</h1>
        <p className="gallery-hdr-desc">
          Step into a visual journey across the archipelago. Explore pristine shores, vibrant marine life, and golden sunsets captured by travelers and guides.
        </p>
      </div>

      {/* Main Gallery Section */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: 80, color: '#F06543' }}>Loading Gallery...</div>}>
        <GallerySection />
      </Suspense>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}
