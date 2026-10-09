import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const BADGES = [
  "3D MAP",
  "AI TRIP PLANNER",
  "BOOKING SYSTEM",
  "DESTINATIONS",
  "FERRY DATA",
  "360° EXPERIENCES"
];

const Line = ({ start, end }) => {
  const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end]);
  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#F06543" transparent opacity={0.4} />
    </line>
  );
};

const Island = () => {
  const islandRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (islandRef.current) {
      islandRef.current.rotation.y += 0.003;
      islandRef.current.position.y = Math.sin(t * 1.5) * 0.08;
    }
  });

  return (
    <group ref={islandRef}>
      {/* Extruded Island base */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 1.8, 0.5, 32]} />
        <meshStandardMaterial color="#0a2540" roughness={0.7} metalness={0.2} />
      </mesh>
      
      {/* Terrain details */}
      <mesh position={[0.5, 0.3, 0.5]}>
        <coneGeometry args={[0.5, 0.8, 16]} />
        <meshStandardMaterial color="#0a2a3b" roughness={0.8} />
      </mesh>
      <mesh position={[-0.6, 0.2, -0.4]}>
        <coneGeometry args={[0.4, 0.6, 16]} />
        <meshStandardMaterial color="#0a2a3b" roughness={0.8} />
      </mesh>

      {/* Radial Badges */}
      {BADGES.map((badge, index) => {
        const angle = (index / BADGES.length) * Math.PI * 2;
        const radius = 3.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group key={index}>
            <Line start={[0, 0, 0]} end={[x, 0, z]} />

            <Html position={[x, 0, z]} center style={{ pointerEvents: 'none' }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                backdropFilter: 'blur(20px)',
                padding: '8px 12px',
                borderRadius: '8px',
                color: '#F06543',
                fontSize: '12px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                textShadow: '0 0 10px rgba(33, 230, 193, 0.5)',
                boxShadow: '0 0 15px rgba(22, 217, 255, 0.1)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {badge}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

const Particles = () => {
  const count = 300;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 8;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial transparent color="#F06543" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  );
};

const TechnologyVisual = () => {
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 4, 9], fov: 45 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#f5fafc" />
        
        {/* Soft cyan rim light */}
        <spotLight 
          position={[-5, 5, -5]} 
          intensity={2.5} 
          color="#F06543" 
          angle={0.6} 
          penumbra={1} 
        />
        
        <Island />
        <Particles />
        
        {/* Dark Ocean plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[40, 40]} />
          <meshBasicMaterial color="#0B2545" opacity={0.8} transparent />
        </mesh>
      </Canvas>
    </div>
  );
};

export default TechnologyVisual;
