import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AnimatedAirplane() {
  const planeRef = useRef();
  const trailRef = useRef();

  useFrame((state) => {
    if (!planeRef.current) return;
    const t = state.clock.getElapsedTime() * 0.25;

    // Elliptical flight path around island chain
    const radiusX = 8.5;
    const radiusZ = 10.5;
    const x = Math.sin(t) * radiusX;
    const z = Math.cos(t) * radiusZ - 1.0;
    const y = 3.8 + Math.sin(t * 2) * 0.4;

    planeRef.current.position.set(x, y, z);

    // Tangent direction facing
    const dx = Math.cos(t) * radiusX;
    const dz = -Math.sin(t) * radiusZ;
    const heading = Math.atan2(dx, dz);

    planeRef.current.rotation.y = heading;
    // Bank angle (tilt inwards on turn)
    planeRef.current.rotation.z = -Math.sin(t) * 0.25;
    planeRef.current.rotation.x = Math.cos(t * 2) * 0.05;
  });

  return (
    <group ref={planeRef}>
      {/* Fuselage (Main Airplane Body) */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.06, 1.2, 16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Nose Cone */}
      <mesh position={[0, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.08, 0.25, 16]} />
        <meshStandardMaterial color="#0284c7" roughness={0.2} />
      </mesh>

      {/* Wings */}
      <mesh position={[0, 0, 0.1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.6, 0.02, 0.35]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.2} metalness={0.6} />
      </mesh>

      {/* Tail Fin (Vertical Stabilizer) */}
      <mesh position={[0, 0.16, -0.5]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.02, 0.3, 0.2]} />
        <meshStandardMaterial color="#0284c7" roughness={0.2} />
      </mesh>

      {/* Horizontal Stabilizers */}
      <mesh position={[0, 0.04, -0.52]}>
        <boxGeometry args={[0.55, 0.02, 0.15]} />
        <meshStandardMaterial color="#f1f5f9" />
      </mesh>

      {/* Jet Engines (Left & Right) */}
      <mesh position={[-0.4, -0.06, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.2, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.9} />
      </mesh>
      <mesh position={[0.4, -0.06, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.2, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.9} />
      </mesh>

      {/* White Jet Contrail Stream */}
      <mesh position={[0, 0, -1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.12, 1.8, 8]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
