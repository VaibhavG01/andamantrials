// src/components/contact/ContactMap.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Interactive 3D Andaman Island Map Visual with R3F / Three.js & Hover/Click Tooltips
// Integrated with the realistic 3D AndamanScene (ocean water, island terrain, boats, plane, markers)

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { MapPin, Compass, Sparkles } from 'lucide-react';
import OfficeLocation from './OfficeLocation';
import AndamanScene from '../3d/AndamanScene';
import { DESTINATIONS as FALLBACK_DESTINATIONS } from '../../data/destinations';
import { destinationService } from '../../api/destinationService';

export default function ContactMap() {
  const [destinationsList, setDestinationsList] = useState(FALLBACK_DESTINATIONS);
  const [selectedIsland, setSelectedIsland] = useState(() => {
    return FALLBACK_DESTINATIONS.find(d => d.id === 'havelock' || d.id === 'havelock-island') || FALLBACK_DESTINATIONS[0];
  });
  const [hoveredId, setHoveredId] = useState(null);

  // Fetch dynamic destinations from backend
  useEffect(() => {
    destinationService.getDestinations()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          const merged = res.data.map((dbDest) => {
            const fallback = FALLBACK_DESTINATIONS.find(
              (f) => f.id === dbDest.slug || f.name.toLowerCase() === dbDest.name.toLowerCase()
            ) || FALLBACK_DESTINATIONS[0];

            return {
              ...fallback,
              id: dbDest.slug || fallback.id,
              name: dbDest.name || fallback.name,
              subtitle: dbDest.subtitle || fallback.subtitle,
              description: dbDest.description || fallback.description,
              shortDescription: dbDest.shortDescription || fallback.shortDescription,
              famousFor: dbDest.famousFor || fallback.famousFor,
              attractions: dbDest.attractions || fallback.attractions,
              activities: dbDest.activities || fallback.activities,
              badge: dbDest.badge || fallback.badge,
            };
          });
          setDestinationsList(merged);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="contact-map-card">
      <style>{`
        .contact-map-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 560px;
          background: #010d1f;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .map-canvas-container {
          position: relative;
          width: 100%;
          height: 380px;
          background: #010d1f;
        }

        .map-badge-hdr {
          position: absolute;
          top: 18px;
          left: 20px;
          z-index: 10;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #F06543;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(240, 101, 67, 0.35);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .map-tooltip-box {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          z-index: 10;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(240, 101, 67, 0.35);
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          animation: tooltipFade 0.3s ease;
        }
        @keyframes tooltipFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .map-tooltip-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          color: #0B2545;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .map-tooltip-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .map-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #F06543;
          background: #FFF0EB;
          padding: 3px 9px;
          border-radius: 10px;
          border: 1px solid rgba(240, 101, 67, 0.25);
        }
      `}</style>

      {/* TOP 3D CANVAS AREA (HERO 3D ANDAMAN SCENE) */}
      <div className="map-canvas-container">
        <div className="map-badge-hdr">
          <Compass size={13} color="#F06543" />
          <span>INTERACTIVE 3D ISLAND ROUTE</span>
        </div>

        <Canvas
          style={{ position: 'absolute', inset: 0 }}
          shadows={{ type: THREE.PCFShadowMap }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          camera={{ fov: 50, near: 0.1, far: 200, position: [0, 14, 16] }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.1;
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFShadowMap;
          }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <AndamanScene
              destinations={destinationsList}
              selectedId={selectedIsland?.id}
              hoveredId={hoveredId}
              onIslandClick={(dest) => setSelectedIsland(dest)}
              onIslandHover={(dest) => setHoveredId(dest?.id || dest)}
              isNight={false}
            />
          </Suspense>
        </Canvas>

        {/* CLICKED / HOVERED DESTINATION TOOLTIP */}
        {selectedIsland && (
          <div className="map-tooltip-box">
            <div className="map-tooltip-title">
              <MapPin size={14} color="#F06543" />
              <span>
                {selectedIsland.name.toUpperCase()} {selectedIsland.subtitle ? `(${selectedIsland.subtitle.toUpperCase()})` : ''}
              </span>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#64748b', marginBottom: 6 }}>
              Popular for: <strong style={{ color: '#0B2545' }}>{selectedIsland.famousFor || 'Coral Reefs & Pristine Beaches'}</strong>
            </div>
            <div className="map-tooltip-tags">
              {(selectedIsland.attractions || selectedIsland.activities || ['Radhanagar Beach', 'Scuba Diving', 'Snorkeling', 'Elephant Beach']).slice(0, 4).map((t, idx) => (
                <span key={idx} className="map-tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM OFFICE LOCATION OVERLAY CARD */}
      <div style={{ padding: 18, background: '#ffffff' }}>
        <OfficeLocation />
      </div>
    </div>
  );
}
