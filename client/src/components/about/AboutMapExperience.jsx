import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Compass, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const DEFAULT_MAP_HIGHLIGHTS = {
  havelock: { name: 'Havelock Island (Swaraj Dweep)', desc: 'Radhanagar Beach No. 7, world-class PADI scuba diving centers, and bioluminescent night kayaking lagoons.' },
  neil: { name: 'Neil Island (Shaheed Dweep)', desc: 'Natural Living Coral Bridge, Bharatpur shallow snorkeling reef, and serene tropical island pace.' },
  'port-blair': { name: 'Port Blair (Capital City)', desc: 'Historic Cellular Jail heritage monument, Ross Island British ruins, and gateway to inter-island ferries.' },
  baratang: { name: 'Baratang Island', desc: 'Ancient million-year-old limestone caves, active mud volcanoes, and dense mangrove creek boat expeditions.' },
};

const MAP_DESTINATIONS = [
  { id: 'havelock', name: 'HAVELOCK ISLAND (SWARAJ DWEEP)', pos: [0.6, 0.2, -0.6], key: 'havelock' },
  { id: 'neil', name: 'NEIL ISLAND (SHAHEED DWEEP)', pos: [0.4, 0.15, 0.4], key: 'neil' },
  { id: 'port-blair', name: 'PORT BLAIR (CAPITAL CITY)', pos: [-0.6, 0.2, 0.5], key: 'port-blair' },
  { id: 'baratang', name: 'BARATANG ISLAND', pos: [-0.2, 0.2, -0.1], key: 'baratang' },
];

function IslandScene({ activeId, onSelect }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Port Blair */}
      <mesh position={[-0.6, 0, 0.5]} onClick={() => onSelect('port-blair')}>
        <cylinderGeometry args={[0.55, 0.75, 0.2, 20]} />
        <meshStandardMaterial color={activeId === 'port-blair' ? '#F06543' : '#00b8d4'} roughness={0.3} metalness={0.3} />
      </mesh>

      {/* Havelock */}
      <mesh position={[0.6, 0, -0.6]} onClick={() => onSelect('havelock')}>
        <cylinderGeometry args={[0.5, 0.65, 0.22, 20]} />
        <meshStandardMaterial color={activeId === 'havelock' ? '#F06543' : '#F06543'} roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Neil */}
      <mesh position={[0.4, 0, 0.4]} onClick={() => onSelect('neil')}>
        <cylinderGeometry args={[0.35, 0.45, 0.18, 16]} />
        <meshStandardMaterial color={activeId === 'neil' ? '#40c4a0' : '#30a080'} roughness={0.3} metalness={0.3} />
      </mesh>

      {/* Baratang */}
      <mesh position={[-0.2, 0, -0.1]} onClick={() => onSelect('baratang')}>
        <cylinderGeometry args={[0.4, 0.5, 0.18, 16]} />
        <meshStandardMaterial color={activeId === 'baratang' ? '#F06543' : '#0090a8'} roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Route Lines */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={4}
            array={new Float32Array([
              -0.6, 0.18, 0.5,
              0.4, 0.18, 0.4,
              0.6, 0.18, -0.6,
              -0.2, 0.18, -0.1,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#F06543" linewidth={2} />
      </line>

      {/* Beacons */}
      {MAP_DESTINATIONS.map((m) => (
        <mesh key={m.id} position={m.pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color={activeId === m.id ? '#ffffff' : '#F06543'} />
        </mesh>
      ))}
    </group>
  );
}

export default function AboutMapExperience() {
  const [selectedKey, setSelectedKey] = useState('havelock');
  const activeInfo = DEFAULT_MAP_HIGHLIGHTS[selectedKey];

  return (
    <section className="about-map-section">
      <style>{`
        .about-map-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .about-map-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        @media (max-width: 900px) {
          .about-map-grid { grid-template-columns: 1fr; padding: 24px; }
        }

        .about-map-canvas {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .dest-btn-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 16px;
          border-radius: 16px;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #64748b;
          transition: all 0.25s ease;
        }
        .dest-btn-pill.active {
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border-color: #F06543;
          color: #F06543;
          box-shadow: 0 4px 14px rgba(33, 230, 193, 0.25);
        }
      `}</style>

      <div className="about-map-grid">
        {/* LEFT TEXT & SELECTOR */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>
            <Compass size={13} color="#F06543" />
            3D DIGITAL EXPLORATION
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 600, color: '#0B2545', margin: '0 0 12px', lineHeight: 1.1 }}>
            SEE ANDAMAN DIFFERENTLY
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', lineHeight: 1.6, marginBottom: 24 }}>
            Explore the islands through an immersive digital experience designed to bring your journey to life before you even arrive.
          </p>

          {/* ISLAND SELECTOR BUTTONS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {MAP_DESTINATIONS.map((d) => (
              <button
                key={d.id}
                className={`dest-btn-pill${selectedKey === d.key ? ' active' : ''}`}
                onClick={() => setSelectedKey(d.key)}
              >
                {d.id.toUpperCase()}
              </button>
            ))}
          </div>

          {/* ACTIVE HIGHLIGHT INFO */}
          {activeInfo && (
            <div style={{ background: '#ffffff', border: '1px solid rgba(22, 217, 255, 0.25)', borderRadius: 16, padding: 20, marginBottom: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#F06543', marginBottom: 4 }}>
                {activeInfo.name}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#c0d8e6', lineHeight: 1.5 }}>
                {activeInfo.desc}
              </div>
            </div>
          )}

          <a
            href="/destinations"
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543',
              background: 'rgba(22, 217, 255, 0.12)', border: '1px solid rgba(22, 217, 255, 0.35)',
              padding: '10px 20px', borderRadius: 14, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all 0.25s ease',
            }}
          >
            <span>EXPLORE 3D MAP</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* RIGHT 3D CANVAS */}
        <div className="about-map-canvas">
          <Canvas camera={{ position: [0, 3.2, 3.5], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 5]} intensity={1.3} />
            <pointLight position={[-3, 4, -2]} intensity={1.5} color="#F06543" />
            <IslandScene activeId={selectedKey} onSelect={(key) => setSelectedKey(key)} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
