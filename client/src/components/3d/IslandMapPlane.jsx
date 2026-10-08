import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function IslandMapPlane() {
  const meshRef = useRef();
  const shadowMeshRef = useRef();
  const glowMeshRef = useRef();

  // Load exact uploaded map image texture reliably using native TextureLoader
  const texture = useLoader(THREE.TextureLoader, '/andaman-island-map-2021.png');
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  // Floating bobbing animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const bob = Math.sin(t * 1.2) * 0.08;
    if (meshRef.current) {
      meshRef.current.position.y = 0.2 + bob;
    }
    if (glowMeshRef.current) {
      glowMeshRef.current.position.y = 0.18 + bob;
    }
    if (shadowMeshRef.current) {
      shadowMeshRef.current.position.y = -0.05;
      shadowMeshRef.current.scale.set(1 + bob * 0.02, 1 + bob * 0.02, 1);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Soft Drop Shadow Plane on Ocean */}
      <mesh
        ref={shadowMeshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, 0]}
      >
        <planeGeometry args={[18.8, 18.8]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.45}
          color="#000000"
          depthWrite={false}
        />
      </mesh>

      {/* Subtle Rim Glow Base */}
      <mesh
        ref={glowMeshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.18, 0]}
      >
        <planeGeometry args={[18.2, 18.2]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.3}
          color="#F06543"
          depthWrite={false}
        />
      </mesh>

      {/* Primary Island Map 3D Plane - Exact Original Image */}
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.2, 0]}
      >
        <planeGeometry args={[18, 18, 32, 32]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.02}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
