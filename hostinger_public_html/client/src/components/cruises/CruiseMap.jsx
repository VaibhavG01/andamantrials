// src/components/cruises/CruiseMap.jsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Compass, CheckCircle2, ArrowRight, Anchor } from 'lucide-react';

const CRUISE_MAP_NODES = [
  { id: 'port-blair', name: 'PORT BLAIR', pos: [-0.6, 0, 0.5], key: 'port-blair', cruises: ['Sunset Cruise', 'Private Charter', 'Family Cruise'] },
  { id: 'havelock', name: 'HAVELOCK ISLAND', pos: [0.6, 0, -0.6], key: 'havelock', cruises: ['Island Sightseeing', 'Couple Escape', 'Luxury Cruise'] },
  { id: 'neil', name: 'NEIL ISLAND', pos: [0.4, 0, 0.4], key: 'neil', cruises: ['Reef Experience', 'Sightseeing Cruise'] },
];

function InteractiveCruiseScene({ activeId, onSelectNode }) {
  const groupRef = useRef();
  const shipRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
    }

    if (shipRef.current) {
      const time = state.clock.getElapsedTime() * 0.35;
      const progress = (Math.sin(time) + 1) / 2;
      shipRef.current.position.x = -0.6 + progress * (0.6 - (-0.6));
      shipRef.current.position.z = 0.5 + progress * (-0.6 - 0.5);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Port Blair */}
      <mesh position={[-0.6, 0, 0.5]} onClick={() => onSelectNode('port-blair')}>
        <cylinderGeometry args={[0.55, 0.75, 0.2, 20]} />
        <meshStandardMaterial color={activeId === 'port-blair' ? '#F06543' : '#00b8d4'} roughness={0.3} metalness={0.3} />
      </mesh>

      {/* Havelock */}
      <mesh position={[0.6, 0, -0.6]} onClick={() => onSelectNode('havelock')}>
        <cylinderGeometry args={[0.5, 0.65, 0.22, 20]} />
        <meshStandardMaterial color={activeId === 'havelock' ? '#F06543' : '#F06543'} roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Neil */}
      <mesh position={[0.4, 0, 0.4]} onClick={() => onSelectNode('neil')}>
        <cylinderGeometry args={[0.35, 0.45, 0.18, 16]} />
        <meshStandardMaterial color={activeId === 'neil' ? '#40c4a0' : '#30a080'} roughness={0.3} metalness={0.3} />
      </mesh>

      {/* Route Line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={3}
            array={new Float32Array([
              -0.6, 0.18, 0.5,
              0.4, 0.18, 0.4,
              0.6, 0.18, -0.6,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffd700" linewidth={2} />
      </line>

      {/* Moving Cruise Ship */}
      <mesh ref={shipRef} position={[-0.6, 0.35, 0.5]}>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffd700" emissiveIntensity={0.7} />
      </mesh>

      {/* Beacons */}
      {CRUISE_MAP_NODES.map((node) => (
        <mesh key={node.id} position={node.pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color={activeId === node.id ? '#ffffff' : '#ffd700'} />
        </mesh>
      ))}
    </group>
  );
}

export default function CruiseMap({ onSelectRoute }) {
  const [selectedNodeKey, setSelectedNodeKey] = useState('port-blair');
  const activeNode = CRUISE_MAP_NODES.find((n) => n.key === selectedNodeKey);

  return (
    <section className="cruise-map-root">
      <style>{`
        .cruise-map-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .cruise-map-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        @media (max-width: 900px) {
          .cruise-map-card { grid-template-columns: 1fr; padding: 24px; }
        }

        .cruise-map-canvas-container {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .node-btn-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800;
          padding: 8px 16px; border-radius: 16px; cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #ffffff; color: #64748b;
          transition: all 0.25s ease;
        }
        .node-btn-pill.active {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(33, 230, 193, 0.15));
          border-color: #ffd700; color: #ffd700;
          box-shadow: 0 4px 14px rgba(255, 215, 0, 0.25);
        }
      `}</style>

      <div className="cruise-map-card">
        {/* LEFT PANEL */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#ffd700', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>
            <Compass size={13} color="#ffd700" />
            <span>3D OCEAN VISUALIZER</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 600, color: '#0B2545', margin: '0 0 12px', lineHeight: 1.1 }}>
            SEE THE ANDAMAN FROM THE SEA
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', lineHeight: 1.6, marginBottom: 24 }}>
            Explore cruise routes across the Andaman Sea connecting Port Blair harbour, Havelock Island, and Neil Island.
          </p>

          {/* ISLAND SELECTOR PILLS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {CRUISE_MAP_NODES.map((node) => (
              <button
                key={node.id}
                className={`node-btn-pill${selectedNodeKey === node.key ? ' active' : ''}`}
                onClick={() => setSelectedNodeKey(node.key)}
              >
                {node.name}
              </button>
            ))}
          </div>

          {/* ACTIVE CONNECTIONS PANEL */}
          {activeNode && (
            <div style={{ background: '#ffffff', border: '1px solid rgba(255, 215, 0, 0.25)', borderRadius: 16, padding: 20, marginBottom: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#ffd700', marginBottom: 8 }}>
                {activeNode.name} CRUISE ROUTES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {activeNode.cruises.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#334155' }}>
                    <CheckCircle2 size={13} color="#F06543" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => onSelectRoute && onSelectRoute(selectedNodeKey)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#ffffff',
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
              padding: '12px 24px', borderRadius: 14, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all 0.25s ease',
              boxShadow: '0 4px 16px rgba(22, 217, 255, 0.35)',
            }}
          >
            <span>EXPLORE ROUTES</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* RIGHT 3D CANVAS */}
        <div className="cruise-map-canvas-container">
          <Canvas camera={{ position: [0, 3.2, 3.5], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 5]} intensity={1.3} />
            <pointLight position={[-3, 4, -2]} intensity={1.5} color="#F06543" />
            <pointLight position={[3, 4, 2]} intensity={1.0} color="#ffd700" />
            <InteractiveCruiseScene activeId={selectedNodeKey} onSelectNode={(key) => setSelectedNodeKey(key)} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
