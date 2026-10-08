// src/components/ferries/FerryTravelTips.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "FERRY TRAVEL TIPS" Compact Cards Component

import React from 'react';
import { Calendar, Clock, CloudSun, FileText, Luggage, Heart, Sparkles } from 'lucide-react';

const TIPS = [
  { icon: Calendar, title: 'BOOK AHEAD', desc: 'Swaraj Dweep & Shaheed Dweep ferries sell out early during peak season.' },
  { icon: Clock, title: 'ARRIVE EARLY', desc: 'Reach the Phoenix Bay or Havelock Jetty at least 45 minutes before departure.' },
  { icon: CloudSun, title: 'CHECK WEATHER', desc: 'Monitor ocean condition advisories during monsoon months.' },
  { icon: FileText, title: 'KEEP DOCUMENTS READY', desc: 'Keep physical photo IDs ready for security gate verification.' },
  { icon: Luggage, title: 'PACK LIGHT', desc: 'Store heavy suitcases in baggage hold and keep sea meds in hand pouch.' },
  { icon: Heart, title: 'STAY HYDRATED', desc: 'Carry water and enjoy scenic open-sea views from upper decks.' },
];

export default function FerryTravelTips() {
  return (
    <section className="tips-root">
      <style>{`
        .tips-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .tips-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .tips-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .tips-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .tips-grid { grid-template-columns: 1fr; }
        }

        .tip-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 20px;
          transition: all 0.35s ease;
          display: flex; gap: 14px; align-items: flex-start;
        }
        .tip-card:hover {
          transform: translateY(-4px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 12px 36px rgba(0,0,0,0.4);
        }

        .tip-icon-box {
          width: 40px; height: 40px; border-radius: 12px;
          background: rgba(22, 217, 255, 0.12); color: #F06543;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
      `}</style>

      <div className="tips-hdr">
        <div className="tips-sub">SMART SAILING ADVICE</div>
        <h2 className="tips-title">FERRY TRAVEL TIPS</h2>
      </div>

      <div className="tips-grid">
        {TIPS.map((tip, idx) => {
          const Icon = tip.icon;
          return (
            <div key={idx} className="tip-card">
              <div className="tip-icon-box">
                <Icon size={20} />
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 900, color: '#334155', letterSpacing: '0.04em', marginBottom: 4 }}>
                  {tip.title}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>
                  {tip.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
