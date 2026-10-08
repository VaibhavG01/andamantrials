// src/components/TrustBar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Trust & Social Proof Bar — Google Reviews, Tripadvisor, Instagram, Awards & Partner Brands
// Features custom SVG Partner Logos and an Infinite Smooth Marquee Slider.

import React from 'react';
import { Star, Camera, Award, ShieldCheck, Globe, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const trustMetrics = [
    {
      id: 'google',
      icon: (
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #4285F4, #34A853)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          color: '#ffffff',
          fontSize: 16,
          boxShadow: '0 4px 12px rgba(66, 133, 244, 0.35)',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          G
        </div>
      ),
      badgeText: '4.9 RATING',
      badgeColor: '#4285F4',
      badgeBg: 'rgba(66, 133, 244, 0.12)',
      title: '4.9 Rating',
      stars: 5,
      subtitle: '1,200+ Reviews',
    },
    {
      id: 'tripadvisor',
      icon: (
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #00AA6C, #34E0A1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 170, 108, 0.35)',
        }}>
          <Globe size={20} color="#ffffff" strokeWidth={2.5} />
        </div>
      ),
      badgeText: 'TOP RATED',
      badgeColor: '#34E0A1',
      badgeBg: 'rgba(52, 224, 161, 0.12)',
      title: '4.8 Excellence',
      stars: 5,
      subtitle: '800+ Reviews',
    },
    {
      id: 'instagram',
      icon: (
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#334155',
          boxShadow: '0 4px 12px rgba(220, 39, 67, 0.35)',
        }}>
          <Camera size={19} color="#fff" strokeWidth={2.2} />
        </div>
      ),
      badgeText: 'INSTAGRAM',
      badgeColor: '#ff758c',
      badgeBg: 'rgba(255, 117, 140, 0.12)',
      title: '120K+ Explorers',
      subtitle: '@andamantrails',
    },
    {
      id: 'award',
      icon: (
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '12px',
          background: 'rgba(240, 101, 67, 0.12)',
          border: '1.5px solid rgba(240, 101, 67, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F06543',
          boxShadow: '0 4px 14px rgba(240, 101, 67, 0.2)',
        }}>
          <Award size={20} color="#F06543" strokeWidth={2.2} />
        </div>
      ),
      badgeText: 'WINNER 2024',
      badgeColor: '#F06543',
      badgeBg: 'rgba(240, 101, 67, 0.12)',
      title: 'Best DMC Andaman',
      subtitle: 'Tourism Award',
    },
    {
      id: 'trust',
      icon: (
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '12px',
          background: 'rgba(240, 101, 67, 0.12)',
          border: '1.5px solid rgba(240, 101, 67, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F06543',
          boxShadow: '0 4px 14px rgba(240, 101, 67, 0.2)',
        }}>
          <ShieldCheck size={20} color="#F06543" strokeWidth={2.2} />
        </div>
      ),
      badgeText: 'TRUSTED',
      badgeColor: '#F06543',
      badgeBg: 'rgba(240, 101, 67, 0.12)',
      title: '500+ Companies',
      subtitle: '100% Verified Trips',
    },
  ];

  const partnerBrands = [
    {
      id: 'mmt',
      name: 'make my trip',
      color: '#e41d24',
      logo: (
        <svg width="115" height="28" viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="135" height="32" rx="6" fill="#ffffff"/>
          <path d="M10 21V11L15 17L20 11V21" stroke="#e41d24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="24" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="13" fill="#e41d24">make</text>
          <rect x="60" y="8" width="24" height="16" rx="4" fill="#f5af02"/>
          <text x="64" y="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="11" fill="#000000">my</text>
          <text x="88" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="13" fill="#e41d24">trip</text>
        </svg>
      )
    },
    {
      id: 'goibibo',
      name: 'goibibo',
      color: '#ec5b24',
      logo: (
        <svg width="105" height="28" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="32" rx="6" fill="#ffffff"/>
          <circle cx="18" cy="16" r="9" fill="#2276e3"/>
          <path d="M15 12C13 13.5 13 18.5 15 20C17 21.5 21 20 21 16H18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
          <text x="32" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="14" fill="#ec5b24">goibibo</text>
        </svg>
      )
    },
    {
      id: 'yatra',
      name: 'yatra',
      color: '#ea2330',
      logo: (
        <svg width="95" height="28" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="110" height="32" rx="6" fill="#ffffff"/>
          <path d="M12 9L18 17V23" stroke="#ea2330" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 9L18 17" stroke="#ea2330" strokeWidth="3" strokeLinecap="round"/>
          <text x="28" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="14" fill="#ea2330">yatra</text>
          <circle cx="82" cy="19" r="2" fill="#ea2330"/>
          <text x="86" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="9" fill="#ea2330">com</text>
        </svg>
      )
    },
    {
      id: 'easemytrip',
      name: 'EaseMyTrip',
      color: '#008cff',
      logo: (
        <svg width="115" height="28" viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="135" height="32" rx="6" fill="#ffffff"/>
          <path d="M12 16C12 11 16 9 22 9C20 13 22 18 26 19C21 21 16 21 12 16Z" fill="#008cff"/>
          <text x="30" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="13" fill="#184382">EaseMyTrip</text>
        </svg>
      )
    },
    {
      id: 'airasia',
      name: 'AirAsia',
      color: '#ff0000',
      logo: (
        <svg width="95" height="28" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="110" height="32" rx="6" fill="#e21717"/>
          <text x="12" y="22" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="16" fill="#ffffff">AirAsia</text>
        </svg>
      )
    },
    {
      id: 'indigo',
      name: 'IndiGo',
      color: '#001b69',
      logo: (
        <svg width="95" height="28" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="110" height="32" rx="6" fill="#ffffff"/>
          <g fill="#001b69">
            <circle cx="12" cy="11" r="1.5"/><circle cx="16" cy="11" r="1.5"/><circle cx="20" cy="11" r="1.5"/>
            <circle cx="14" cy="15" r="1.5"/><circle cx="18" cy="15" r="1.5"/><circle cx="22" cy="15" r="1.5"/>
            <circle cx="16" cy="19" r="1.5"/><circle cx="20" cy="19" r="1.5"/><circle cx="24" cy="19" r="1.5"/>
          </g>
          <text x="30" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="14" fill="#001b69">IndiGo</text>
        </svg>
      )
    },
    {
      id: 'spicejet',
      name: 'SpiceJet',
      color: '#ff3000',
      logo: (
        <svg width="105" height="28" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="32" rx="6" fill="#ffffff"/>
          <g fill="#ff3000">
            <circle cx="12" cy="11" r="1.5"/><circle cx="16" cy="11" r="1.5"/><circle cx="20" cy="11" r="1.5"/>
            <circle cx="14" cy="16" r="1.5"/><circle cx="18" cy="16" r="1.5"/><circle cx="22" cy="16" r="1.5"/>
            <circle cx="16" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><circle cx="26" cy="21" r="1.5"/>
          </g>
          <text x="28" y="21" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontStyle="italic" fontSize="13" fill="#ff3000">SpiceJet</text>
        </svg>
      )
    },
  ];

  // Duplicated array for smooth endless looping
  const sliderItems = [...partnerBrands, ...partnerBrands];

  return (
    <section id="trust-bar" className="trustbar-section">
      <style>{`
        .trustbar-section {
          width: 100%;
          background: #FAF4EE;
          padding: 24px 0;
          border-top: 1.5px solid #EBDED2;
          border-bottom: 1.5px solid #EBDED2;
          position: relative;
          overflow: hidden;
        }

        .trustbar-ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(240, 101, 67, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .trustbar-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          position: relative;
          z-index: 2;
        }

        .trustbar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 14px;
          width: 100%;
        }

        .trustbar-card {
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 16px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.03);
        }

        .trustbar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          transition: left 0.6s ease;
        }

        .trustbar-card:hover {
          transform: translateY(-3px);
          border-color: #F06543;
          box-shadow: 0 10px 24px rgba(240, 101, 67, 0.12);
          background: #ffffff;
        }

        .trustbar-card:hover::before {
          left: 100%;
        }

        .trustbar-partners-strip {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 16px;
          border-top: 1.5px solid #EBDED2;
        }

        .trustbar-partners-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #5C6F84;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Continuous Infinite Slider Track */
        .trustbar-slider-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          padding: 4px 0;
        }

        .trustbar-slider-track {
          display: flex;
          align-items: center;
          gap: 16px;
          width: max-content;
          animation: trustbarMarquee 26s linear infinite;
        }

        .trustbar-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes trustbarMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .trustbar-brand-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 12px;
          padding: 8px 16px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(11, 37, 69, 0.04);
          cursor: pointer;
          white-space: nowrap;
        }

        .trustbar-brand-card:hover {
          background: #ffffff;
          border-color: #F06543;
          box-shadow: 0 6px 18px rgba(240, 101, 67, 0.15);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .trustbar-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .trustbar-section {
            padding: 16px 0;
          }
          .trustbar-container {
            padding: 0 14px;
            gap: 14px;
          }
          .trustbar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .trustbar-card {
            padding: 11px 12px;
            gap: 10px;
            border-radius: 14px;
          }
        }

        @media (max-width: 640px) {
          .trustbar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          /* Make 5th card span full width (2 columns) on small mobile for clean symmetry */
          .trustbar-card:nth-child(5) {
            grid-column: span 2;
          }
          .trustbar-card {
            padding: 10px 11px;
            gap: 9px;
          }
        }
      `}</style>

      {/* Ambient Radial Background Glow */}
      <div className="trustbar-ambient-glow" />

      <div className="trustbar-container">
        {/* Top Section: Trust Metrics Grid */}
        <div className="trustbar-grid">
          {trustMetrics.map((item) => (
            <div key={item.id} className="trustbar-card">
              {/* Icon Container */}
              <div style={{ flexShrink: 0 }}>
                {item.icon}
              </div>

              {/* Text & Ratings */}
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                {/* Header row: Badge or Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, marginBottom: 2 }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: item.badgeColor,
                    background: item.badgeBg,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    lineHeight: 1.2
                  }}>
                    {item.badgeText}
                  </span>

                  {item.tag && (
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: '#64748b',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Main Title & Stars */}
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 800,
                  color: '#0B2545',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  lineHeight: 1.2
                }}>
                  <span>{item.title}</span>
                  {item.stars && (
                    <span style={{ display: 'inline-flex', gap: 1.5, alignItems: 'center' }}>
                      {Array.from({ length: item.stars }, (_, i) => (
                        <Star key={i} size={10} fill="#F06543" stroke="#F06543" />
                      ))}
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12.5,
                  color: '#5C6F84',
                  marginTop: 2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Official Travel Partners Infinite Slider */}
        <div className="trustbar-partners-strip">
          <div className="trustbar-partners-label">
            <Sparkles size={13} color="#F06543" />
            <span>OFFICIAL BOOKING & TRAVEL PARTNERS</span>
          </div>

          <div className="trustbar-slider-viewport">
            <div className="trustbar-slider-track">
              {sliderItems.map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="trustbar-brand-card">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


