import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 180;

export function WindParticles() {
  const pointsRef = useRef();

  // Initialize random particle positions and velocities
  const [positions, velocities] = useMemo(() => {
    const posArray = new Float32Array(PARTICLE_COUNT * 3);
    const velArray = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      posArray[i * 3 + 0] = (Math.random() - 0.5) * 30; // X
      posArray[i * 3 + 1] = 0.8 + Math.random() * 4.5;   // Y (sky height)
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z

      velArray[i * 3 + 0] = -0.015 - Math.random() * 0.02; // wind direction X
      velArray[i * 3 + 1] = (Math.random() - 0.5) * 0.003; // slight bobbing Y
      velArray[i * 3 + 2] = 0.015 + Math.random() * 0.02;  // wind direction Z
    }

    return [posArray, velArray];
  }, []);

  // Update positions every frame
  useFrame(() => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    const array = attr.array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      array[i * 3 + 0] += velocities[i * 3 + 0];
      array[i * 3 + 1] += velocities[i * 3 + 1];
      array[i * 3 + 2] += velocities[i * 3 + 2];

      // Reset when particle drifts out of bounds
      if (array[i * 3 + 0] < -16) array[i * 3 + 0] = 16;
      if (array[i * 3 + 2] > 16) array[i * 3 + 2] = -16;
    }

    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#a5f3fc"
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
