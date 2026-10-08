import React from 'react';

export function SceneLighting() {
  return (
    <group>
      {/* Sunlight Directional Light */}
      <directionalLight
        position={[25, 35, 18]}
        intensity={2.0}
        color="#fef08a"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Bright Light Blue / Azure Ambient Light */}
      <ambientLight intensity={1.1} color="#38bdf8" />

      {/* Tropical Turquoise Rim & Point Lights */}
      <pointLight position={[-20, 15, -20]} intensity={1.5} color="#2dd4bf" distance={90} />
      <pointLight position={[20, 10, 20]} intensity={1.2} color="#0284c7" distance={80} />

      {/* Under-water bright glow */}
      <pointLight position={[0, -2, 0]} intensity={2.0} color="#06b6d4" distance={35} />
    </group>
  );
}
