// src/components/ferries/FerryTerminals.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "FERRY TERMINALS" Jetty Hubs Cards Component

import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { masterService } from '../../api/masterService';

const DEFAULT_TERMINALS = [
  {
    id: 'phoenix-bay-port-blair',
    name: 'Phoenix Bay Jetty',
    location: 'Port Blair, South Andaman',
    desc: 'The central maritime hub connecting Port Blair with Swaraj Dweep, Shaheed Dweep, and inter-island government ferries.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'havelock-jetty',
    name: 'Havelock Jetty (Swaraj Dweep)',
    location: 'Havelock Island',
    desc: 'The primary gateway to Havelock, receiving all private luxury catamarans (Nautika, Makruzz) and local diving boats.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'neil-jetty',
    name: 'Neil Island Jetty',
    location: 'Shaheed Dweep',
    desc: 'Scenic shallow water harbor greeting visitors to the serene beaches and natural rock formations of Neil Island.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'haddo-wharf',
    name: 'Haddo Wharf',
    location: 'Port Blair',
    desc: 'Deep-water port terminal for mainland passenger ships and long-range inter-island voyages to Little Andaman and Nicobar.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FerryTerminals({ onViewTerminalDetails }) {
  const [terminals, setTerminals] = useState(DEFAULT_TERMINALS);

  useEffect(() => {
    masterService.getLocations()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.slice(0, 4).map((loc, idx) => ({
            id: `term-${loc.id}`,
            name: loc.name,
            location: `${loc.island || 'Andaman'}, Andaman`,
            desc: loc.description || 'Verified jetty hub for passenger ferry embarkation and arrivals.',
            image: DEFAULT_TERMINALS[idx % DEFAULT_TERMINALS.length].image,
          }));
          setTerminals(mapped);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <section className="terminals-root">
      <style>{`
        .terminals-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .terminals-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .terminals-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .terminals-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .terminals-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .terminals-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .terminals-grid { grid-template-columns: 1fr; }
        }

        .terminal-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease;
        }
        .terminal-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .terminal-img-box {
          height: 140px; overflow: hidden; position: relative;
        }
        .terminal-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .terminal-card:hover .terminal-img-box img {
          transform: scale(1.08);
        }
      `}</style>

      <div className="terminals-hdr">
        <div className="terminals-sub">JETTY HUBS & HARBORS</div>
        <h2 className="terminals-title">FERRY TERMINALS</h2>
      </div>

      <div className="terminals-grid">
        {terminals.map((term) => (
          <div key={term.id} className="terminal-card">
            <div className="terminal-img-box">
              <img src={term.image} alt={term.name} />
            </div>

            <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#334155', marginBottom: 4 }}>
                  {term.name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#F06543', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={11} />
                  {term.location}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  {term.desc}
                </p>
              </div>

              <button
                onClick={() => onViewTerminalDetails && onViewTerminalDetails(term)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543',
                  background: 'rgba(22, 217, 255, 0.1)', border: '1px solid rgba(22, 217, 255, 0.3)',
                  padding: '8px 14px', borderRadius: 12, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                  transition: 'all 0.25s ease', marginTop: 16, width: '100%',
                }}
              >
                <span>VIEW TERMINAL DETAILS</span>
                <ArrowRight size={11} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
