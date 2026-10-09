// src/components/blog/BlogHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Cinematic 60-70vh Blog Hero Component with Dark Ocean Overlay & Floating 3D Element

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { ChevronRight, Sparkles, BookOpen } from 'lucide-react';

function FloatingIslandMini() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.08;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[0.8, 1.1, 0.3, 16]} />
        <meshStandardMaterial color="#F06543" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function BlogHero() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  return (
    <section className="blog-hero-root">
      <style>{`
        .blog-hero-root {
          position: relative;
          width: 100%;
          min-height: 62vh;
          max-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 100px 24px 70px;
          box-sizing: border-box;
        }

        .blog-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .blog-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.25);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .blog-hero-root:hover .blog-hero-bg img {
          transform: scale(1.08);
        }

        .blog-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .blog-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 750px; height: 380px;
          background: radial-gradient(ellipse at center, rgba(33, 230, 193, 0.16) 0%, rgba(22, 217, 255, 0.08) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .blog-hero-grid {
          position: relative; z-index: 4; max-width: 1100px;
          display: grid; grid-template-columns: 1.4fr 0.6fr;
          gap: 32px; align-items: center; margin: 0 auto; width: 100%;
        }
        @media (max-width: 860px) {
          .blog-hero-grid { grid-template-columns: 1fr; text-align: center; }
        }

        .blog-hero-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; background: #ffffff;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0;
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .blog-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.8vw, 68px);
          font-weight: 600; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
        }

        .blog-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #475569; line-height: 1.65; margin: 0;
        }

        .mini-3d-canvas-wrap {
          width: 100%; height: 220px; border-radius: 20px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }
        @media (max-width: 860px) {
          .mini-3d-canvas-wrap { display: none; }
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="blog-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Islands Editorial"
        />
      </div>

      <div className="blog-hero-overlay" />
      <div className="blog-hero-glow" />

      {/* GRID CONTENT */}
      <div ref={contentRef} className="blog-hero-grid">
        <div>
          <div className="blog-hero-breadcrumb">
            <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
            <ChevronRight size={12} color="#F06543" />
            <span>BLOG</span>
          </div>

          <h1 className="blog-hero-title">
            ANDAMAN <span style={{ color: '#F06543' }}>STORIES</span>
          </h1>

          <p className="blog-hero-desc">
            Travel guides, island stories, local experiences, and everything you need to know before exploring the Andaman archipelago.
          </p>
        </div>

        {/* 3D FLOATING MINI CANVAS */}
        <div className="mini-3d-canvas-wrap">
          <Canvas camera={{ position: [0, 2.2, 2.8], fov: 45 }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[4, 6, 4]} intensity={1.4} />
            <pointLight position={[-2, 3, -1]} intensity={1.5} color="#F06543" />
            <FloatingIslandMini />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
