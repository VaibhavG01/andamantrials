// src/components/3d/AndamanScene.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master R3F Scene Component for Section 01 3D Map Hero — auto-rotation enabled.

import React, { Suspense, forwardRef, useImperativeHandle, useRef, useState, useCallback } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

import { SceneLighting }   from './SceneLighting';
import { OceanWater }      from './OceanWater';
import { IslandMapPlane }  from './IslandMapPlane';
import { IslandMarkers }   from './IslandMarkers';
import { AnimatedBoats }   from './AnimatedBoats';
import { AnimatedAirplane }from './AnimatedAirplane';
import { WindParticles }   from './WindParticles';
import { CameraController }from './CameraController';

import { DESTINATIONS } from '../../data/destinations';

const AndamanScene = forwardRef(function AndamanScene(
  { destinations = DESTINATIONS, selectedId, hoveredId, onIslandClick, onIslandHover, onIntroComplete, isNight },
  ref
) {
  const { camera } = useThree();
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);

  const selectedIsland = destinations.find(d => d.id === selectedId) || null;
  const hoveredIsland  = destinations.find(d => d.id === hoveredId)  || null;

  useImperativeHandle(ref, () => ({
    flyTo: (destination) => {
      onIslandClick?.(destination);
    },
    resetView: () => {
      setResetTrigger(prev => prev + 1);
      setAutoRotate(true);
    },
    zoomIn: () => {
      const dir = camera.position.clone().normalize();
      const newPos = camera.position.clone().sub(dir.multiplyScalar(2.5));
      gsap.to(camera.position, { x: newPos.x, y: newPos.y, z: newPos.z, duration: 0.5, ease: 'power2.out' });
    },
    zoomOut: () => {
      const dir = camera.position.clone().normalize();
      const newPos = camera.position.clone().add(dir.multiplyScalar(3));
      gsap.to(camera.position, { x: newPos.x, y: newPos.y, z: newPos.z, duration: 0.5, ease: 'power2.out' });
    },
    tilt: () => {
      const targetY = camera.position.y > 10 ? 6 : 14;
      gsap.to(camera.position, { y: targetY, duration: 1.2, ease: 'power2.inOut' });
    },
    toggleRotate: (val) => {
      setAutoRotate(prev => val ?? !prev);
    },
    alignNorth: () => {
      gsap.to(camera.position, {
        x: 0, y: camera.position.y, z: Math.abs(camera.position.z),
        duration: 1.2,
        ease: 'power2.inOut',
      });
    },
  }));

  const handleSelectIsland = useCallback((island) => {
    onIslandClick?.(island);
  }, [onIslandClick]);

  const handleHoverIsland = useCallback((island) => {
    onIslandHover?.(island);
  }, [onIslandHover]);

  return (
    <>
      <CameraController
        selectedIsland={selectedIsland}
        isAutoRotateEnabled={autoRotate}
        resetTrigger={resetTrigger}
      />

      <fog attach="fog" args={[isNight ? '#010812' : '#010d1f', 20, 80]} />
      <color attach="background" args={[isNight ? '#010812' : '#010d1f']} />

      <SceneLighting />
      <OceanWater />

      <Suspense fallback={null}>
        <IslandMapPlane />
      </Suspense>

      <IslandMarkers
        islands={destinations}
        selectedIsland={selectedIsland}
        hoveredIsland={hoveredIsland}
        onSelectIsland={handleSelectIsland}
        onHoverIsland={handleHoverIsland}
      />

      <AnimatedBoats />
      <AnimatedAirplane />
      <WindParticles />
    </>
  );
});

export default AndamanScene;
