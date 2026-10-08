import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';

const MapElement = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef}>
        {/* Placeholder for Island Map - A stylized abstract geometry */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial 
            color="#0a2540" 
            wireframe={true} 
            emissive="#F06543"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Cyan edge glow ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8, 1.85, 64]} />
          <meshBasicMaterial color="#F06543" transparent opacity={0.6} />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
           <ringGeometry args={[2.0, 2.02, 64]} />
           <meshBasicMaterial color="#F06543" transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

const CTAVisual = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#F06543" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F06543" />
        
        <MapElement />
        
        {/* Subtle floating particles */}
        <Sparkles 
          count={50} 
          scale={6} 
          size={2} 
          speed={0.2} 
          opacity={0.5} 
          color="#F06543" 
        />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default CTAVisual;
