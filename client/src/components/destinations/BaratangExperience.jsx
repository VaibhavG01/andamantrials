// src/components/destinations/BaratangExperience.jsx
import React from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Star, Trees } from 'lucide-react';

export default function BaratangExperience({ onDiscoverBaratang }) {
  return (
    <section className="baratang-exp-root">
      <style>{`
        .baratang-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .baratang-card {
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
          .baratang-card { grid-template-columns: 1fr; }
        }

        .baratang-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .baratang-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .baratang-card:hover .baratang-img-box img {
          transform: scale(1.06);
        }

        .baratang-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .baratang-content-box { padding: 26px; }
        }

        .baratang-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .baratang-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .baratang-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .baratang-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .baratang-checklist { grid-template-columns: 1fr; }
        }

        .baratang-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .baratang-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .baratang-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="baratang-card">
        {/* Left Visual */}
        <div className="baratang-img-box">
          <img
            src="https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=1200&q=85"
            alt="Baratang Mangrove Safari Andaman"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm">
            🛶 Untamed Jungle Creeks
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
              <MapPin size={13} /> Middle Andaman
            </span>
            <span className="text-[#ffd700] font-bold flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700]" /> 4.6 (180+ Reviews)
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="baratang-content-box">
          <div className="baratang-tag">
            <Trees size={13} />
            <span>WILD TROPICAL MANGROVE EXPEDITIONS</span>
          </div>

          <h2 className="baratang-title">
            Baratang Island Mangrove Safari
          </h2>

          <p className="baratang-desc">
            An adrenaline-pumping nature expedition featuring authorized vehicular convoys through the indigenous Jarawa forest reserve, high-speed fiber boat creek rides through dense mangrove canopies, and prehistoric stalactite limestone caves.
          </p>

          <div className="baratang-checklist">
            <div className="baratang-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Speedboat Mangrove Creek Ride</span>
            </div>
            <div className="baratang-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Stalactite Limestone Caves</span>
            </div>
            <div className="baratang-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Mud Volcano Formations</span>
            </div>
            <div className="baratang-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Parrot Island Sunset Boat</span>
            </div>
          </div>

          <button onClick={onDiscoverBaratang} className="baratang-cta-btn">
            <span>VIEW BARATANG ISLAND EXPERIENCES</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
