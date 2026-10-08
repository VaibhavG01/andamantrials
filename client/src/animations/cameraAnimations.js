// src/animations/cameraAnimations.js
// ─────────────────────────────────────────────────────────────────────────────
// GSAP camera animations — updated for vertical island chain layout.

import { gsap } from 'gsap';

const EASE_CINEMATIC = 'power3.inOut';
const EASE_SOFT      = 'power2.out';

// Default overview position for vertical chain
const DEFAULT_POS    = { x: 0, y: 12, z: 20 };
const DEFAULT_TARGET = { x: 0.5, y: 0, z: -2 };

/**
 * Cinematic intro: disable controls → animate camera → re-enable + autoRotate.
 */
export function playCinematicIntro(cameraRef, controlsRef, onComplete) {
  if (!cameraRef.current) return;
  const cam = cameraRef.current;

  if (controlsRef.current) controlsRef.current.enabled = false;

  cam.position.set(5, 30, 35);

  const tl = gsap.timeline({
    onComplete: () => {
      if (controlsRef.current) {
        controlsRef.current.enabled     = true;
        controlsRef.current.autoRotate  = true;
        controlsRef.current.autoRotateSpeed = 0.4;
        controlsRef.current.update();
      }
      onComplete?.();
    },
  });

  // Sweep down from above
  tl.to(cam.position, {
    x: -2, y: 16, z: 24,
    duration: 2.4,
    ease: EASE_CINEMATIC,
    onUpdate: () => {
      cam.lookAt(
        controlsRef.current?.target.x ?? DEFAULT_TARGET.x,
        controlsRef.current?.target.y ?? DEFAULT_TARGET.y,
        controlsRef.current?.target.z ?? DEFAULT_TARGET.z
      );
    },
  });

  // Settle into default overview
  tl.to(cam.position, {
    x: DEFAULT_POS.x,
    y: DEFAULT_POS.y,
    z: DEFAULT_POS.z,
    duration: 2.0,
    ease: EASE_SOFT,
    onUpdate: () => {
      cam.lookAt(
        controlsRef.current?.target.x ?? DEFAULT_TARGET.x,
        controlsRef.current?.target.y ?? DEFAULT_TARGET.y,
        controlsRef.current?.target.z ?? DEFAULT_TARGET.z
      );
    },
  });

  return tl;
}

/**
 * Fly camera to a destination.
 */
export function flyToDestination(cameraRef, controlsRef, targetPos, lookAtTarget, onComplete) {
  if (!cameraRef.current) return;
  const cam = cameraRef.current;

  if (controlsRef.current) {
    controlsRef.current.autoRotate = false;
    controlsRef.current.enabled    = false;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      if (controlsRef.current) {
        if (lookAtTarget) {
          controlsRef.current.target.set(
            lookAtTarget[0], lookAtTarget[1], lookAtTarget[2]
          );
        }
        controlsRef.current.enabled    = true;
        controlsRef.current.autoRotate = false;
        controlsRef.current.update();
      }
      onComplete?.();
    },
  });

  // Brief pull-back arc
  tl.to(cam.position, {
    x: cam.position.x * 1.04,
    y: cam.position.y + 1.5,
    z: cam.position.z * 1.03,
    duration: 0.4,
    ease: 'power1.in',
    onUpdate: () => {
      if (controlsRef.current)
        cam.lookAt(controlsRef.current.target);
    },
  });

  // Main fly
  tl.to(cam.position, {
    x: targetPos[0], y: targetPos[1], z: targetPos[2],
    duration: 2.0,
    ease: EASE_CINEMATIC,
    onUpdate: () => {
      const lx = lookAtTarget?.[0] ?? controlsRef.current?.target.x ?? 0;
      const ly = lookAtTarget?.[1] ?? controlsRef.current?.target.y ?? 0;
      const lz = lookAtTarget?.[2] ?? controlsRef.current?.target.z ?? 0;
      cam.lookAt(lx, ly, lz);
    },
  });

  return tl;
}

/**
 * Smooth reset to default view.
 */
export function resetCameraView(cameraRef, controlsRef, onComplete) {
  if (!cameraRef.current) return;
  const cam = cameraRef.current;

  if (controlsRef.current) {
    controlsRef.current.enabled    = false;
    controlsRef.current.autoRotate = false;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      if (controlsRef.current) {
        controlsRef.current.target.set(DEFAULT_TARGET.x, DEFAULT_TARGET.y, DEFAULT_TARGET.z);
        controlsRef.current.enabled     = true;
        controlsRef.current.autoRotate  = true;
        controlsRef.current.autoRotateSpeed = 0.4;
        controlsRef.current.update();
      }
      onComplete?.();
    },
  });

  tl.to(cam.position, {
    x: DEFAULT_POS.x,
    y: DEFAULT_POS.y,
    z: DEFAULT_POS.z,
    duration: 1.8,
    ease: EASE_CINEMATIC,
    onUpdate: () => cam.lookAt(DEFAULT_TARGET.x, DEFAULT_TARGET.y, DEFAULT_TARGET.z),
  });

  return tl;
}
