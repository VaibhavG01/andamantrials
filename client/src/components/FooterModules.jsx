// src/components/FooterModules.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Row 6 Modules — Why Travel With Us, Real Traveler Stories, FAQ Accordion (Emoji Free).

import { useState } from 'react';

export default function FooterModules() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: 'What is the best time to visit Andaman?', a: 'October to May offers sunny skies, calm sea waters, and ideal conditions for scuba diving and island hopping.' },
    { q: 'How to reach Andaman?', a: 'Direct flights operate daily to Veer Savarkar International Airport (IXZ) in Port Blair from major Indian cities like Delhi, Mumbai, Bengaluru, Kolkata, and Chennai.' },
    { q: 'Is Andaman safe for tourists?', a: 'Yes! Andaman is one of the safest travel destinations in India with very low crime rates and warm local hospitality.' },
    { q: 'Do we need permits for visiting islands?', a: 'Indian nationals do not require permits for major islands (Port Blair, Havelock, Neil, Baratang). Foreign nationals receive a RAP on arrival.' },
    { q: 'Can I customize my itinerary?', a: 'Absolutely! Our AI Trip Planner and island experts allow 100% customization of hotels, ferries, and activities.' },
  ];

  return (
    <section
      style={{
        width: '100%',
        background: '#FAF4EE',
        color: '#0B2545',
        padding: '60px 0 70px',
        borderTop: '1px solid #ebded2',
        borderBottom: '1px solid #ebded2',
      }}
    >
      <div
        style={{
          maxWidth: 1340,
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {/* MODULE 1: WHY TRAVEL WITH US? */}
        <div style={{ background: '#ffffff', border: '1px solid #ebded2', borderRadius: 20, padding: 20, boxShadow: '0 8px 24px rgba(11, 37, 69, 0.04)' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
            TRUST & QUALITY
          </div>
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', marginBottom: 16 }}>
            WHY TRAVEL WITH US?
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              { label: 'Local Expert Team', iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
              { label: 'Best Price Guarantee', iconPath: 'M7 7h10v10H7z M12 1v22 M1 12h22' },
              { label: '24x7 Support', iconPath: 'M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z' },
              { label: 'Customizable Packages', iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
              { label: '3D & Secure', iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
              { label: '100% Satisfaction', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#FAF4EE', border: '1px solid #ebded2', padding: '10px 12px', borderRadius: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F06543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.iconPath} />
                </svg>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#0B2545' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MODULE 2: REAL TRAVELER STORIES */}
        <div style={{ background: '#ffffff', border: '1px solid #ebded2', borderRadius: 20, padding: 20, boxShadow: '0 8px 24px rgba(11, 37, 69, 0.04)' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
            TESTIMONIALS
          </div>
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', marginBottom: 4 }}>
            REAL TRAVELER STORIES
          </h4>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b', marginBottom: 12 }}>
            See what our travelers say
          </div>

          {/* Video Thumbnail */}
          <div style={{ position: 'relative', height: 160, borderRadius: 14, overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80" alt="Traveler story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 37, 69, 0.6) 0%, transparent 60%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button style={{ width: 44, height: 44, borderRadius: '50%', background: '#F06543', border: 'none', color: '#ffffff', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(240, 101, 67, 0.5)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>
            <div style={{ position: 'absolute', bottom: 10, left: 12, right: 12, color: '#ffffff', fontFamily: "'Inter', sans-serif", fontSize: 12.5, fontStyle: 'italic', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              &ldquo;The trip was beyond amazing! Everything was perfectly planned.&rdquo; — Neha & Rohit
            </div>
          </div>
        </div>

        {/* MODULE 3: FREQUENTLY ASKED QUESTIONS */}
        <div style={{ background: '#ffffff', border: '1px solid #ebded2', borderRadius: 20, padding: 20, boxShadow: '0 8px 24px rgba(11, 37, 69, 0.04)' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
            HELP & INFO
          </div>
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', marginBottom: 12 }}>
            FREQUENTLY ASKED QUESTIONS
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#FAF4EE', border: '1px solid #ebded2', borderRadius: 10, padding: 10 }}>
                <div
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#0B2545' }}
                >
                  <span>{f.q}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F06543" strokeWidth="2.5" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {openFaq === i && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', marginTop: 6, lineHeight: 1.4 }}>
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MODULE 4: ARCHITECTURE & STACK */}
        <div style={{ background: '#ffffff', border: '1px solid #ebded2', borderRadius: 20, padding: 20, boxShadow: '0 8px 24px rgba(11, 37, 69, 0.04)' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
            ARCHITECTURE
          </div>
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', marginBottom: 12 }}>
            TECHNOLOGY STACK
          </h4>

          {/* Tech Badges Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', marginBottom: 4 }}>FRONTEND</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['React.js', 'Three.js', 'React Three Fiber', 'GSAP', 'Tailwind CSS'].map((t, idx) => (
                  <span key={idx} style={{ background: '#FFF0EB', border: '1px solid #FFD3C4', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontFamily: "'Space Grotesk', sans-serif", color: '#F06543' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', marginBottom: 4 }}>BACKEND & DATABASE</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Node.js', 'Express.js', 'MySQL', 'REST API'].map((t, idx) => (
                  <span key={idx} style={{ background: '#FFF0EB', border: '1px solid #FFD3C4', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontFamily: "'Space Grotesk', sans-serif", color: '#F06543' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', marginBottom: 4 }}>SERVICES & EXPERIENCE</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Cloudinary', 'AWS S3', 'Redis', 'JWT Auth', 'AI Planner', '360° Gallery'].map((t, idx) => (
                  <span key={idx} style={{ background: '#FAF4EE', border: '1px solid #ebded2', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontFamily: "'Space Grotesk', sans-serif", color: '#0B2545' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
