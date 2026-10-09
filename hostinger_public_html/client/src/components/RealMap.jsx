// src/components/RealMap.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full-screen Maplibre GL real map of the Andaman Islands.
// Features: satellite / dark / terrain styles, custom markers, popups,
// animated ferry routes, island info panel, GSAP reveal animations.

import { useEffect, useRef, useState, useCallback } from 'react';
import * as maplibregl from 'maplibre-gl';
import { gsap } from 'gsap';
import './RealMap.css';
import {
  ANDAMAN_CENTER, ANDAMAN_BOUNDS,
  MAP_STYLES, MAP_DESTINATIONS, MAP_ROUTES,
} from '../data/mapConfig';

// ─────────────────────────────────────────────────────────────
// Marker HTML generator
// ─────────────────────────────────────────────────────────────
function createMarkerEl(dest, isSelected) {
  const el = document.createElement('div');
  el.className = 'andaman-marker';
  el.innerHTML = `
    <div style="
      display:flex; flex-direction:column; align-items:center;
      font-family:'Space Grotesk',sans-serif;
    ">
      <!-- Dot -->
      <div style="position:relative; width:16px; height:16px; margin-bottom:5px;">
        <div style="
          position:absolute; inset:-5px; border-radius:50%;
          border:1.5px solid ${dest.color};
          animation:ringPulse 2.2s ease-out infinite;
        "></div>
        <div style="
          position:absolute; inset:-10px; border-radius:50%;
          border:1.5px solid ${dest.color};
          animation:ringPulse 2.2s ease-out 0.8s infinite;
        "></div>
        <div style="
          width:16px; height:16px; border-radius:50%;
          background:radial-gradient(circle at 35% 35%, ${dest.color}, ${dest.color}99);
          box-shadow: 0 0 ${isSelected ? 20 : 12}px ${dest.color}90;
          animation:markerPulse 2.2s ease-in-out infinite;
        "></div>
      </div>
      <!-- Label -->
      <div style="
        background:rgba(4,10,28,0.85);
        backdrop-filter:blur(16px);
        -webkit-backdrop-filter:blur(16px);
        border:1px solid ${dest.color}44;
        border-radius:10px;
        padding:4px 10px;
        white-space:nowrap;
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
      ">
        <div style="font-size: 12.5px; font-weight:600; color:#fff; letter-spacing:0.04em;">${dest.name}</div>
        <div style="font-size: 12px; color:${dest.color}; letter-spacing:0.06em; margin-top:1px;">${dest.badge}</div>
      </div>
      <!-- Connector line -->
      <div style="
        width:1px; height:14px;
        background:linear-gradient(to bottom, ${dest.color}80, transparent);
        margin-top:-2px;
      "></div>
    </div>
  `;
  return el;
}

// ─────────────────────────────────────────────────────────────
// Popup HTML generator
// ─────────────────────────────────────────────────────────────
function createPopupHTML(dest) {
  const actHtml = dest.activities.map(a =>
    `<span style="
      background:rgba(0,201,212,0.08);
      border:1px solid rgba(0,201,212,0.18);
      color:#c8dff0;
      font-size:9.5px;
      padding:3px 10px;
      border-radius:20px;
      font-family:'Space Grotesk',sans-serif;
      white-space:nowrap;
    ">${a}</span>`
  ).join('');

  return `
    <div style="padding:0; border-radius:16px; overflow:hidden; min-width:230px;">
      <!-- Header gradient -->
      <div style="
        height:70px;
        background:linear-gradient(135deg, #0a2a50, #0d4060, #1a6050);
        position:relative; display:flex; align-items:flex-end; padding:12px 14px 10px;
      ">
        <div style="
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 40%, rgba(4,10,28,0.85));
        "></div>
        <div style="position:relative; z-index:1;">
          <div style="
            display:inline-block;
            background:rgba(0,201,212,0.15);
            border:1px solid ${dest.color}55;
            border-radius:20px; padding:3px 9px;
            font-family:'Space Grotesk',sans-serif;
            font-size: 12px; font-weight:700; letter-spacing:0.14em;
            color:${dest.color}; margin-bottom:4px;
          ">${dest.badge}</div>
          <div style="
            font-family:'Cormorant Garamond','Georgia',serif;
            font-size:19px; font-weight:600; color:#fff; line-height:1.1;
          ">${dest.name}</div>
        </div>
      </div>

      <!-- Body -->
      <div style="padding:14px 14px 16px; background:rgba(4,10,28,0.95);">
        <!-- Meta -->
        <div style="display:flex; gap:14px; margin-bottom:10px;">
          <span style="font-family:'Space Grotesk',sans-serif; font-size: 12px; color: #64748b;">
            📍 ${dest.distance}
          </span>
        </div>

        <!-- Subtitle -->
        <div style="
          font-family:'Space Grotesk',sans-serif;
          font-size: 12px; letter-spacing:0.15em; font-weight:600;
          color:${dest.color}; text-transform:uppercase; margin-bottom:8px;
        ">${dest.subtitle}</div>

        <!-- Description -->
        <p style="
          font-family:'Inter',sans-serif;
          font-size: 13px; color:#c8dff0; line-height:1.65; font-weight:300;
          margin-bottom:12px;
        ">${dest.description}</p>

        <!-- Activities -->
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px;">
          ${actHtml}
        </div>

        <!-- CTA -->
        <button
          onclick="window.__mapDestClick && window.__mapDestClick('${dest.id}')"
          style="
            width:100%;
            background:linear-gradient(135deg, #F06543, #00b4d8);
            border:none; color:#050d1a;
            font-family:'Space Grotesk',sans-serif;
            font-size: 13px; font-weight:700;
            padding:11px; border-radius:10px; cursor:pointer;
            letter-spacing:0.07em; transition:all 0.2s;
          "
          onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 20px rgba(0,201,212,0.4)'"
          onmouseout="this.style.transform=''; this.style.boxShadow=''"
        >
          EXPLORE ${dest.name.toUpperCase()} →
        </button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// Style switcher bar
// ─────────────────────────────────────────────────────────────
function StyleSwitcher({ currentStyle, onSwitch, isNight }) {
  const styles = Object.values(MAP_STYLES);
  return (
    <div style={{
      position:'absolute', top:18, right:18, zIndex:200,
      display:'flex', gap:6,
    }}>
      {styles.map(s => (
        <button
          key={s.id}
          onClick={() => onSwitch(s.id)}
          style={{
            background: currentStyle === s.id
              ? 'linear-gradient(135deg, #F06543, #00b4d8)'
              : isNight ? 'rgba(4,8,24,0.82)' : 'rgba(5,18,40,0.72)',
            backdropFilter:'blur(20px)',
            border: currentStyle === s.id
              ? '1px solid rgba(0,201,212,0.5)'
              : '1px solid rgba(0,201,212,0.16)',
            color: currentStyle === s.id ? '#050d1a' : '#c8dff0',
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize: 12.5, fontWeight: currentStyle === s.id ? 700 : 500,
            padding:'7px 14px', borderRadius:30, cursor:'pointer',
            letterSpacing:'0.06em', transition:'all 0.25s',
            display:'flex', alignItems:'center', gap:6,
            boxShadow: currentStyle === s.id
              ? '0 4px 20px rgba(0,201,212,0.35)'
              : '0 4px 16px rgba(0,0,0,0.4)',
          }}
        >
          <span style={{ fontSize:13 }}>{s.icon}</span>
          {s.label.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Map stats bar
// ─────────────────────────────────────────────────────────────
function MapStats({ isNight }) {
  const stats = [
    { label: 'ISLANDS', value: '572' },
    { label: 'AREA', value: '8,249 km²' },
    { label: 'CORAL REEFS', value: '96%' },
    { label: 'FOREST COVER', value: '86%' },
  ];
  return (
    <div style={{
      position:'absolute', bottom:16, left:'50%', transform:'translateX(-50%)',
      zIndex:200, pointerEvents:'none',
    }}>
      <div style={{
        background: isNight ? 'rgba(4,8,24,0.85)' : 'rgba(5,18,40,0.75)',
        backdropFilter:'blur(20px)', border:'1px solid rgba(0,201,212,0.14)',
        borderRadius:50, padding:'10px 24px',
        display:'flex', alignItems:'center', gap:22,
        boxShadow:'0 8px 40px rgba(0,0,0,0.5)',
        whiteSpace:'nowrap',
      }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ display:'flex', alignItems:'center', gap:22 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:700, color: '#334155', lineHeight:1.2 }}>{s.value}</div>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 12.5, color: '#64748b', letterSpacing:'0.12em' }}>{s.label}</div>
            </div>
            {i < stats.length - 1 && <div style={{ width:1, height:26, background:'#e2e8f0' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Route legend
// ─────────────────────────────────────────────────────────────
function RouteLegend({ isNight }) {
  return (
    <div style={{
      position:'absolute', bottom:70, left:16, zIndex:200,
    }}>
      <div style={{
        background: isNight ? 'rgba(4,8,24,0.85)' : 'rgba(5,18,40,0.75)',
        backdropFilter:'blur(16px)', border:'1px solid rgba(0,201,212,0.14)',
        borderRadius:14, padding:'12px 14px',
        boxShadow:'0 4px 20px rgba(0,0,0,0.5)',
      }}>
        <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 12, letterSpacing:'0.2em', color: '#64748b', marginBottom:8, textTransform:'uppercase' }}>Routes</div>
        {[
          { color:'#F06543', dash:false, label:'Ferry Route' },
          { color:'#f0c060', dash:true,  label:'Road + Boat' },
        ].map(r => (
          <div key={r.label} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:5 }}>
            <svg width="24" height="8">
              {r.dash
                ? <line x1="0" y1="4" x2="24" y2="4" stroke={r.color} strokeWidth="1.5" strokeDasharray="4 3"/>
                : <line x1="0" y1="4" x2="24" y2="4" stroke={r.color} strokeWidth="1.5"/>
              }
            </svg>
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 12.5, color:'#c8dff0' }}>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main RealMap component
// ─────────────────────────────────────────────────────────────
export default function RealMap({ isNight, visible }) {
  const containerRef = useRef(null);
  const mapRef       = useRef(null);
  const markersRef   = useRef([]);
  const popupRef     = useRef(null);

  const [styleId,      setStyleId]      = useState('satellite');
  const [selectedDest, setSelectedDest] = useState(null);
  const [mapReady,     setMapReady]     = useState(false);

  // ── Init map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const styleDef = MAP_STYLES[styleId];
    const map = new maplibregl.Map({
      container:  containerRef.current,
      style:      styleDef.style,
      center:     ANDAMAN_CENTER,
      zoom:       8.2,
      pitch:      20,
      bearing:    0,
      minZoom:    5,
      maxZoom:    18,
      antialias:  true,
    });

    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'bottom-right');
    map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('load', () => {
      setMapReady(true);
      addRoutes(map);
      addMarkers(map);
    });

    return () => {
      markersRef.current.forEach(m => m.remove());
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // ── Add ferry routes as GeoJSON lines
  const addRoutes = useCallback((map) => {
    const getCoords = (id) => {
      const d = MAP_DESTINATIONS.find(d => d.id === id);
      return d ? d.lngLat : null;
    };

    const ferryFeatures = MAP_ROUTES
      .filter(r => r.type === 'ferry')
      .map(r => ({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: [getCoords(r.from), getCoords(r.to)].filter(Boolean) },
        properties: { label: r.label },
      }));

    const roadFeatures = MAP_ROUTES
      .filter(r => r.type === 'road')
      .map(r => ({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: [getCoords(r.from), getCoords(r.to)].filter(Boolean) },
        properties: { label: r.label },
      }));

    // Ferry routes — teal dashed
    map.addSource('routes-ferry', { type: 'geojson', data: { type: 'FeatureCollection', features: ferryFeatures } });
    map.addLayer({
      id: 'routes-ferry-glow',
      type: 'line', source: 'routes-ferry',
      paint: { 'line-color': '#F06543', 'line-width': 5, 'line-opacity': 0.08, 'line-blur': 6 },
    });
    map.addLayer({
      id: 'routes-ferry',
      type: 'line', source: 'routes-ferry',
      paint: { 'line-color': '#F06543', 'line-width': 1.5, 'line-opacity': 0.65, 'line-dasharray': [4, 3] },
    });

    // Road routes — gold dashed
    map.addSource('routes-road', { type: 'geojson', data: { type: 'FeatureCollection', features: roadFeatures } });
    map.addLayer({
      id: 'routes-road',
      type: 'line', source: 'routes-road',
      paint: { 'line-color': '#f0c060', 'line-width': 1.5, 'line-opacity': 0.55, 'line-dasharray': [3, 4] },
    });
  }, []);

  // ── Add custom markers
  const addMarkers = useCallback((map) => {
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    MAP_DESTINATIONS.forEach((dest) => {
      const el = createMarkerEl(dest, false);

      const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(dest.lngLat)
        .addTo(map);

      el.addEventListener('click', () => {
        setSelectedDest(dest);

        // Close old popup
        if (popupRef.current) popupRef.current.remove();

        // Open new popup
        const popup = new maplibregl.Popup({ offset: 30, closeButton: true, maxWidth: '280px' })
          .setLngLat(dest.lngLat)
          .setHTML(createPopupHTML(dest))
          .addTo(map);

        popupRef.current = popup;

        // Fly to destination
        map.flyTo({
          center: dest.lngLat,
          zoom: dest.zoom,
          pitch: 45,
          bearing: Math.random() * 20 - 10,
          duration: 2200,
          easing: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
        });
      });

      markersRef.current.push(marker);
    });

    // Global click handler for popup CTA button
    window.__mapDestClick = (id) => {
      const dest = MAP_DESTINATIONS.find(d => d.id === id);
      if (dest) {
        setSelectedDest(dest);
        if (popupRef.current) popupRef.current.remove();
      }
    };
  }, []);

  // ── Style switching
  const handleStyleSwitch = useCallback((newStyleId) => {
    if (!mapRef.current || newStyleId === styleId) return;
    setStyleId(newStyleId);
    setMapReady(false);

    const styleDef = MAP_STYLES[newStyleId];
    mapRef.current.setStyle(styleDef.style);

    mapRef.current.once('styledata', () => {
      setTimeout(() => {
        addRoutes(mapRef.current);
        addMarkers(mapRef.current);
        setMapReady(true);
      }, 300);
    });
  }, [styleId, addRoutes, addMarkers]);

  // ── Reset to overview
  const handleResetView = useCallback(() => {
    if (!mapRef.current) return;
    setSelectedDest(null);
    if (popupRef.current) { popupRef.current.remove(); popupRef.current = null; }
    mapRef.current.flyTo({ center: ANDAMAN_CENTER, zoom: 8.2, pitch: 20, bearing: 0, duration: 1800 });
  }, []);

  // ── Entrance animation
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.parentElement,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    );
  }, [visible]);

  return (
    <div style={{ position:'absolute', inset:0, zIndex:10 }}>
      {/* ── Map container ── */}
      <div
        ref={containerRef}
        style={{ position:'absolute', inset:0 }}
      />

      {/* ── CSS animations for markers ── */}
      <style>{`
        @keyframes ringPulse { 0%{transform:scale(0.6);opacity:0.7} 100%{transform:scale(2.4);opacity:0} }
        @keyframes markerPulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,201,212,0.4)} 50%{box-shadow:0 0 0 8px rgba(0,201,212,0)} }
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400&display=swap');
      `}</style>

      {/* ── Style Switcher ── */}
      <StyleSwitcher currentStyle={styleId} onSwitch={handleStyleSwitch} isNight={isNight} />

      {/* ── Top-left: Reset + info ── */}
      <div style={{ position:'absolute', top:18, left:18, zIndex:200, display:'flex', gap:8 }}>
        <button
          onClick={handleResetView}
          style={{
            background: isNight ? 'rgba(4,8,24,0.85)' : 'rgba(5,18,40,0.75)',
            backdropFilter:'blur(20px)',
            border:'1px solid rgba(0,201,212,0.16)',
            borderRadius:30, padding:'7px 16px',
            color:'#c8dff0',
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize: 12.5, fontWeight:600, letterSpacing:'0.06em',
            cursor:'pointer', display:'flex', alignItems:'center', gap:7,
            transition:'all 0.2s',
            boxShadow:'0 4px 16px rgba(0,0,0,0.4)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,201,212,0.4)'; e.currentTarget.style.color='#F06543'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,201,212,0.16)'; e.currentTarget.style.color='#c8dff0'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          OVERVIEW
        </button>

        <div style={{
          background: isNight ? 'rgba(4,8,24,0.85)' : 'rgba(5,18,40,0.75)',
          backdropFilter:'blur(20px)',
          border:'1px solid rgba(0,201,212,0.14)',
          borderRadius:30, padding:'7px 14px',
          fontFamily:"'Space Grotesk',sans-serif",
          fontSize: 12.5, color: '#64748b', letterSpacing:'0.06em',
          display:'flex', alignItems:'center', gap:7,
          boxShadow:'0 4px 16px rgba(0,0,0,0.4)',
        }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'#00b4d8', boxShadow:'0 0 6px #00b4d8', animation:'markerPulse 1.5s ease-in-out infinite' }} />
          {MAP_DESTINATIONS.length} DESTINATIONS MAPPED
        </div>
      </div>

      {/* ── Route legend ── */}
      <RouteLegend isNight={isNight} />

      {/* ── Stats bar ── */}
      <MapStats isNight={isNight} />

      {/* ── Loading overlay ── */}
      {!mapReady && (
        <div style={{
          position:'absolute', inset:0, zIndex:300,
          background: isNight ? 'rgba(1,8,18,0.9)' : 'rgba(1,13,31,0.9)',
          display:'flex', alignItems:'center', justifyContent:'center',
          flexDirection:'column', gap:14,
          backdropFilter:'blur(8px)',
        }}>
          <div style={{
            width:48, height:48, borderRadius:'50%',
            border:'2px solid rgba(0,201,212,0.15)',
            borderTop:'2px solid #F06543',
            animation:'spin 1s linear infinite',
          }} />
          <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 12.5, color: '#64748b', letterSpacing:'0.15em' }}>
            LOADING MAP…
          </div>
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      )}
    </div>
  );
}
