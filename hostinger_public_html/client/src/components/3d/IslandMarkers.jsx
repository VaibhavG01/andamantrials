// src/components/3d/IslandMarkers.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Interactive HTML 2D/3D Island Markers over 3D map.

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function IslandMarkers({
  islands,
  selectedIsland,
  hoveredIsland,
  onSelectIsland,
  onHoverIsland
}) {
  return (
    <group position={[0, 0.25, 0]}>
      {islands.map((island) => (
        <MarkerItem
          key={island.id}
          island={island}
          isSelected={selectedIsland?.id === island.id}
          isHovered={hoveredIsland?.id === island.id}
          onSelect={() => onSelectIsland(island)}
          onHover={(hovering) => onHoverIsland(hovering ? island : null)}
        />
      ))}
    </group>
  );
}

function MarkerItem({ island, isSelected, isHovered, onSelect, onHover }) {
  const ringRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.8;
      const s = 1 + Math.sin(t * 3 + (island.position?.[0] || 0)) * 0.15;
      ringRef.current.scale.set(s, s, s);
    }
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.4 + Math.sin(t * 4) * 0.25;
    }
  });

  const active = isSelected || isHovered;
  const accent = island.color || '#2dd4bf';

  return (
    <group position={island.position}>
      {/* 3D Ground Ring / Pulse Beacon */}
      <mesh
        ref={ringRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        <ringGeometry args={[0.3, 0.45, 32]} />
        <meshBasicMaterial
          color={active ? accent : '#2dd4bf'}
          transparent
          opacity={active ? 0.95 : 0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer Pulse Glow Sphere */}
      <mesh
        ref={glowRef}
        position={[0, 0.15, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        <sphereGeometry args={[active ? 0.35 : 0.22, 16, 16]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Floating 2D/3D Pin Indicator HTML Component */}
      <Html
        position={[0, 0.4, 0]}
        center
        distanceFactor={18}
        zIndexRange={[100, 0]}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          className={`cursor-pointer transition-all duration-300 transform ${
            active ? 'scale-125 z-50' : 'scale-100 opacity-85 hover:opacity-100'
          }`}
        >
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
              isSelected
                ? 'bg-emerald-500/90 text-white border-emerald-300 shadow-emerald-500/50'
                : isHovered
                ? 'bg-cyan-900/90 text-cyan-200 border-cyan-400/60'
                : 'bg-slate-950/75 text-slate-200 border-teal-500/30 hover:border-teal-400'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: accent }}
            />
            <span className="font-semibold text-xs tracking-wide whitespace-nowrap drop-shadow-md">
              {island.name}
            </span>
            {active && (
              <svg className="w-3 h-3 text-cyan-300 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            )}
          </div>
        </div>
      </Html>
    </group>
  );
}
