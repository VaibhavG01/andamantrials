import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define ferry routes connecting major islands
const ROUTES = [
  {
    name: "Port Blair - Havelock Express Ferry",
    points: [
      new THREE.Vector3(-1.0, 0.22, 3.2),
      new THREE.Vector3(0.5, 0.22, 2.2),
      new THREE.Vector3(2.3, 0.22, 1.0)
    ],
    speed: 0.12,
    color: "#38bdf8"
  },
  {
    name: "Havelock - Neil Island Cruise",
    points: [
      new THREE.Vector3(2.3, 0.22, 1.0),
      new THREE.Vector3(2.1, 0.22, 1.5),
      new THREE.Vector3(1.8, 0.22, 2.0)
    ],
    speed: 0.18,
    color: "#2dd4bf"
  },
  {
    name: "Port Blair - Little Andaman Cargo Ship",
    points: [
      new THREE.Vector3(-1.0, 0.22, 3.2),
      new THREE.Vector3(-2.8, 0.22, 5.2),
      new THREE.Vector3(-4.5, 0.22, 7.5)
    ],
    speed: 0.08,
    color: "#f59e0b"
  },
  {
    name: "Diglipur - Mayabunder Coastal Launch",
    points: [
      new THREE.Vector3(1.2, 0.22, -6.6),
      new THREE.Vector3(1.0, 0.22, -5.7),
      new THREE.Vector3(0.8, 0.22, -4.8)
    ],
    speed: 0.15,
    color: "#a855f7"
  }
];

export function AnimatedBoats() {
  return (
    <group>
      {ROUTES.map((route, idx) => (
        <SingleBoat key={idx} route={route} offset={idx * 0.25} />
      ))}
    </group>
  );
}

function SingleBoat({ route, offset }) {
  const groupRef = useRef();

  // Create smooth CatmullRom curve path
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(route.points, true);
  }, [route.points]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = (state.clock.getElapsedTime() * route.speed * 0.1 + offset) % 1;

    // Get current position on curve
    const pos = curve.getPoint(t);
    const tangent = curve.getTangent(t);

    // Wave bobbing
    const waveY = Math.sin(state.clock.getElapsedTime() * 3 + offset * 10) * 0.03;
    groupRef.current.position.set(pos.x, pos.y + waveY, pos.z);

    // Orient boat facing tangent direction
    const angle = Math.atan2(tangent.x, tangent.z);
    groupRef.current.rotation.y = angle;
    groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 4) * 0.05; // roll
  });

  return (
    <group ref={groupRef}>
      {/* Boat Hull */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <boxGeometry args={[0.18, 0.08, 0.45]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </mesh>

      {/* Cabin / Bridge */}
      <mesh position={[0, 0.12, -0.05]}>
        <boxGeometry args={[0.14, 0.07, 0.22]} />
        <meshStandardMaterial color={route.color} roughness={0.3} />
      </mesh>

      {/* Flag / Mast */}
      <mesh position={[0, 0.22, -0.12]}>
        <cylinderGeometry args={[0.01, 0.01, 0.14]} />
        <meshBasicMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0.04, 0.26, -0.12]}>
        <boxGeometry args={[0.08, 0.04, 0.01]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {/* Water Wake Ripple */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -0.25]}>
        <planeGeometry args={[0.25, 0.5]} />
        <meshBasicMaterial
          color="#FFD3C4"
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
