// src/components/3d/CameraController.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Smooth camera navigation & auto-rotation controller with non-locking lerp.

import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const DEFAULT_TARGET  = new THREE.Vector3(0, 0.2, 0);
const DEFAULT_CAM_POS = new THREE.Vector3(0, 14, 14);

export function CameraController({
  selectedIsland,
  isAutoRotateEnabled = true,
  onUserInteraction,
  resetTrigger
}) {
  const controlsRef  = useRef();
  const targetPosRef = useRef(DEFAULT_TARGET.clone());
  const targetCamRef = useRef(DEFAULT_CAM_POS.clone());
  const isTransitioningRef = useRef(false);
  const { camera }   = useThree();

  // Handle island selection or view reset
  useEffect(() => {
    if (selectedIsland) {
      const [x, y, z] = selectedIsland.position;
      targetPosRef.current.set(x, y, z);
      targetCamRef.current.set(x, 6.5, z + 6.5);
      isTransitioningRef.current = true;
    } else {
      targetPosRef.current.copy(DEFAULT_TARGET);
      targetCamRef.current.copy(DEFAULT_CAM_POS);
      isTransitioningRef.current = true;
    }
  }, [selectedIsland, resetTrigger]);

  // Smooth lerp during transitions without locking camera permanently
  useFrame((state, delta) => {
    if (!controlsRef.current) return;

    if (isTransitioningRef.current) {
      // Lerp orbit target
      controlsRef.current.target.lerp(targetPosRef.current, delta * 4);

      // Lerp camera position
      camera.position.lerp(targetCamRef.current, delta * 3.5);

      // Stop transition locking when close enough to target position
      if (
        camera.position.distanceTo(targetCamRef.current) < 0.1 &&
        controlsRef.current.target.distanceTo(targetPosRef.current) < 0.1
      ) {
        isTransitioningRef.current = false;
      }
    }

    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.8}
      zoomSpeed={1.0}
      panSpeed={0.8}
      minDistance={4}
      maxDistance={28}
      minPolarAngle={Math.PI / 8}
      maxPolarAngle={Math.PI / 2.25}
      autoRotate={isAutoRotateEnabled}
      autoRotateSpeed={0.6}
    />
  );
}
