// src/components/stays/StayMap.jsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MapPin, ArrowRight, Star, Compass, Building } from 'lucide-react';

const MAP_NODES = [
  { id: 'havelock', name: 'HAVELOCK ISLAND', pos: [0.6, 0, -0.6], key: 'Havelock' },
  { id: 'neil', name: 'NEIL ISLAND', pos: [0.4, 0, 0.4], key: 'Neil' },
  { id: 'port-blair', name: 'PORT BLAIR', pos: [-0.6, 0, 0.5], key: 'Port Blair' },
  { id: 'baratang', name: 'BARATANG', pos: [-0.1, 0, -0.2], key: 'Baratang' },
  { id: 'diglipur', name: 'DIGLIPUR', pos: [0.2, 0, -1.2], key: 'Diglipur' },
  { id: 'great-nicobar', name: 'GREAT NICOBAR', pos: [-0.4, 0, 1.4], key: 'Great Nicobar' },
];

function InteractiveStayScene({ selectedKey, onSelectKey }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Ocean plane base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#0A2540" roughness={0.4} metalness={0.6} />
      </mesh>

      {MAP_NODES.map((node) => {
        const isSelected = selectedKey.toLowerCase().includes(node.key.toLowerCase());
        return (
          <group key={node.id} position={node.pos} onClick={() => onSelectKey(node.key)}>
            <mesh>
              <cylinderGeometry args={[0.35, 0.45, 0.16, 24]} />
              <meshStandardMaterial
                color={isSelected ? '#F06543' : '#14B8A6'}
                roughness={0.2}
                metalness={0.4}
              />
            </mesh>
            {/* Pulsing Beacon */}
            <mesh position={[0, 0.22, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={isSelected ? '#FFFFFF' : '#FF6B4A'} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function StayMap({ stays, onViewStay }) {
  const [selectedKey, setSelectedKey] = useState('Havelock');

  const activeStays = stays.filter(s => 
    (s.destination || '').toLowerCase().includes(selectedKey.toLowerCase())
  );

  return (
    <div className="stay-map-container">
      <style>{`
        .stay-map-container {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }
        @media (max-width: 900px) {
          .stay-map-container {
            grid-template-columns: 1fr;
          }
        }

        .canvas-box {
          height: 420px;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #0B192C;
          border: 2px solid #1E293B;
          position: relative;
        }

        .canvas-instruction {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #94A3B8;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }

        .island-pills-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .island-pill-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .island-pill-btn:hover {
          border-color: #F06543;
          color: #0B2545;
        }
        .island-pill-btn.active {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
        }

        .map-stay-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 360px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .map-stay-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          padding: 12px;
          display: flex;
          gap: 14px;
          align-items: center;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .map-stay-card:hover {
          border-color: #F06543;
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.08);
        }
      `}</style>

      {/* 3D Canvas Box */}
      <div className="canvas-box">
        <Canvas camera={{ position: [0, 3.8, 3.8], fov: 45 }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 8, 5]} intensity={1.4} />
          <pointLight position={[-3, 4, -2]} intensity={2} color="#F06543" />
          <InteractiveStayScene selectedKey={selectedKey} onSelectKey={setSelectedKey} />
        </Canvas>
        <div className="canvas-instruction">
          💡 Click 3D island beacons to inspect resorts
        </div>
      </div>

      {/* Right Side Stays List */}
      <div>
        <div className="island-pills-bar">
          {MAP_NODES.map(node => (
            <button
              key={node.id}
              type="button"
              className={`island-pill-btn${selectedKey === node.key ? ' active' : ''}`}
              onClick={() => setSelectedKey(node.key)}
            >
              {node.name}
            </button>
          ))}
        </div>

        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#0B2545', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <MapPin size={14} color="#F06543" />
          <span>PROPERTIES IN {selectedKey.toUpperCase()} ({activeStays.length})</span>
        </div>

        <div className="map-stay-list">
          {activeStays.length === 0 ? (
            <div style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: 13, padding: '40px 20px', textAlign: 'center', background: '#F8FAFC', borderRadius: 14 }}>
              No stays found matching filters in {selectedKey}.
            </div>
          ) : (
            activeStays.map((stay) => (
              <div 
                key={stay.id} 
                className="map-stay-card"
                onClick={() => onViewStay && onViewStay(stay)}
              >
                <img 
                  src={stay.heroImage || stay.image} 
                  alt={stay.name} 
                  style={{ width: 72, height: 72, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} 
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {stay.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '2px 0 4px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 11, fontWeight: 800, color: '#D97706' }}>
                      <Star size={11} className="fill-[#F59E0B] text-[#F59E0B]" />
                      {stay.rating || 4.8}
                    </span>
                    <span style={{ color: '#CBD5E1' }}>•</span>
                    <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>{stay.type?.replace(/_/g, ' ')}</span>
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: '#F06543', fontWeight: 900 }}>
                    ₹{(stay.pricePerNight || 8500).toLocaleString()} <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>/night</span>
                  </div>
                </div>
                <button
                  type="button"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif", 
                    fontSize: 11, 
                    fontWeight: 900, 
                    color: '#ffffff', 
                    background: '#0B2545', 
                    border: 'none', 
                    padding: '8px 14px', 
                    borderRadius: 10, 
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  VIEW
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
