// src/components/destinations/HavelockExperience.jsx
import React from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Clock, Star, Waves } from 'lucide-react';

export default function HavelockExperience({ onDiscoverHavelock }) {
  return (
    <section className="havelock-exp-root">
      <style>{`
        .havelock-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .havelock-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
        @media (max-width: 960px) {
          .havelock-card { grid-template-columns: 1fr; }
        }

        .havelock-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .havelock-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .havelock-card:hover .havelock-img-box img {
          transform: scale(1.06);
        }

        .havelock-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .havelock-content-box { padding: 26px; }
        }

        .havelock-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .havelock-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .havelock-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .havelock-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .havelock-checklist { grid-template-columns: 1fr; }
        }

        .havelock-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .havelock-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .havelock-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="havelock-card">
        {/* Left Visual */}
        <div className="havelock-img-box">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
            alt="Radhanagar Beach Havelock Island"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm">
            👑 Crown Jewel of Andaman
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
              <MapPin size={13} /> Swaraj Dweep
            </span>
            <span className="text-[#ffd700] font-bold flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700]" /> 4.9 (420+ Reviews)
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="havelock-content-box">
          <div className="havelock-tag">
            <Waves size={13} />
            <span>ASIA’S TOP RATED BEACH DESTINATION</span>
          </div>

          <h2 className="havelock-title">
            Swaraj Dweep (Havelock Island)
          </h2>

          <p className="havelock-desc">
            Renowned across the globe for Asia’s 7th best beach (Radhanagar), crystal turquoise lagoons and vibrant coral walls at Elephant Beach. Havelock is the undisputed capital of Andaman scuba diving and barefoot tropical luxury.
          </p>

          <div className="havelock-checklist">
            <div className="havelock-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Radhanagar Sunset Coast</span>
            </div>
            <div className="havelock-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Elephant Beach Coral Walk</span>
            </div>
            <div className="havelock-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>PADI 5-Star Dive Centers</span>
            </div>
            <div className="havelock-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Bioluminescence Night Kayak</span>
            </div>
          </div>

          <button onClick={onDiscoverHavelock} className="havelock-cta-btn">
            <span>VIEW HAVELOCK ISLAND EXPERIENCES</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
