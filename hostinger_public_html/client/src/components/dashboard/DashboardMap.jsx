// src/components/dashboard/DashboardMap.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Subtle Interactive 3D Island Route Visual for Dashboard Hero Card

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MiniIslandRoute() {
  const meshRef = useRef();
  const routeRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Port Blair Island Mesh */}
      <mesh position={[-0.8, 0, 0.4]}>
        <cylinderGeometry args={[0.5, 0.7, 0.18, 16]} />
        <meshStandardMaterial color="#F06543" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Havelock Island Mesh */}
      <mesh position={[0.6, 0, -0.5]}>
        <cylinderGeometry args={[0.45, 0.6, 0.2, 16]} />
        <meshStandardMaterial color="#F06543" roughness={0.2} metalness={0.3} />
      </mesh>

      {/* Neil Island Mesh */}
      <mesh position={[0.4, 0, 0.6]}>
        <cylinderGeometry args={[0.3, 0.4, 0.15, 16]} />
        <meshStandardMaterial color="#40c4a0" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Connecting Glowing Route Curve Line */}
      <line ref={routeRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={3}
            array={new Float32Array([
              -0.8, 0.15, 0.4,
              0.6, 0.15, -0.5,
              0.4, 0.15, 0.6,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#F06543" linewidth={2} />
      </line>

      {/* Route Pulsing Beacon Spheres */}
      <mesh position={[-0.8, 0.25, 0.4]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#F06543" />
      </mesh>

      <mesh position={[0.6, 0.25, -0.5]}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshBasicMaterial color="#F06543" />
      </mesh>

      <mesh position={[0.4, 0.2, 0.6]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color="#f0c060" />
      </mesh>
    </group>
  );
}

export default function DashboardMap() {
  return (
    <div style={{ width: '100%', height: 180, position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 2.5, 3], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-3, 4, -2]} intensity={1.5} color="#F06543" />
        <MiniIslandRoute />
      </Canvas>

      <div style={{
        position: 'absolute', bottom: 10, left: 14,
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
        color: '#F06543', background: '#f8fafc', backdropFilter: 'blur(6px)',
        padding: '4px 10px', borderRadius: 12, border: '1px solid rgba(22, 217, 255, 0.3)',
      }}>
        3D ROUTE: PORT BLAIR → HAVELOCK → NEIL
      </div>
    </div>
  );
}
