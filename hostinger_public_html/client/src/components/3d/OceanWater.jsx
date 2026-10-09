import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function OceanWater() {
  const meshRef = useRef();

  // Smooth real-time wave vertex animation
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      const pos = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const z = Math.sin(u * 0.18 + t * 1.2) * Math.cos(v * 0.18 + t * 0.9) * 0.35
                + Math.sin(u * 0.38 - t * 1.0) * 0.14;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.3, 0]}
      receiveShadow
    >
      <planeGeometry args={[120, 120, 48, 48]} />
      <meshStandardMaterial
        color="#0284c7"
        emissive="#06b6d4"
        emissiveIntensity={0.25}
        roughness={0.12}
        metalness={0.2}
        transparent
        opacity={0.96}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
