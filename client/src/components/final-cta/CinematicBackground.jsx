import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CinematicBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    // Ken Burns-style subtle slow zoom animation
    gsap.to(bgRef.current, {
      scale: 1.15,
      duration: 30,
      ease: 'none',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Image Container */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550956488-82ff5e67990b?q=80&w=2070&auto=format&fit=crop')", // Aerial tropical island placeholder
          transformOrigin: 'center center'
        }}
      />
      
      {/* Dark gradient overlay (#03151F) */}
      <div className="absolute inset-0 bg-[#03151F]/80 bg-gradient-to-t from-[#03151F] via-[#03151F]/70 to-[#03151F]/40" />
      
      {/* Warm sunset golden-hour rim glow and cyan highlights */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F06543]/10 via-transparent to-[#f59e0b]/20 mix-blend-overlay" />
      
      {/* Soft floating ocean dust/particles (CSS based) */}
      <div className="absolute inset-0 opacity-30">
         <div className="particles-container">
           {[...Array(20)].map((_, i) => (
             <div 
               key={i} 
               className="absolute rounded-full bg-[#F06543]"
               style={{
                 width: `${Math.random() * 4 + 1}px`,
                 height: `${Math.random() * 4 + 1}px`,
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
                 opacity: Math.random() * 0.5 + 0.1
               }}
             />
           ))}
         </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-40px) translateX(-10px); }
          100% { transform: translateY(-60px) translateX(0); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default CinematicBackground;
