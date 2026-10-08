// src/components/destinations/NeilExperience.jsx
import React from 'react';
import { Sparkles, ArrowRight, Check, MapPin, Star, Compass } from 'lucide-react';

export default function NeilExperience({ onDiscoverNeil }) {
  return (
    <section className="neil-exp-root">
      <style>{`
        .neil-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .neil-card {
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
          .neil-card { grid-template-columns: 1fr; }
        }

        .neil-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .neil-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .neil-card:hover .neil-img-box img {
          transform: scale(1.06);
        }

        .neil-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .neil-content-box { padding: 26px; }
        }

        .neil-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .neil-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .neil-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .neil-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .neil-checklist { grid-template-columns: 1fr; }
        }

        .neil-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .neil-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .neil-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="neil-card">
        {/* Left Content */}
        <div className="neil-content-box order-2 lg:order-1">
          <div className="neil-tag">
            <Compass size={13} />
            <span>TRANQUIL ORGANIC ISLAND RETREAT</span>
          </div>

          <h2 className="neil-title">
            Shaheed Dweep (Neil Island)
          </h2>

          <p className="neil-desc">
            Known as the rustic vegetable bowl of the Andamans, Neil Island charms with its laid-back slow-island pace, bicycle trails, natural coral arches at Howrah Bridge and crimson sunsets at Laxmanpur Beach.
          </p>

          <div className="neil-checklist">
            <div className="neil-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Howrah Natural Rock Bridge</span>
            </div>
            <div className="neil-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Laxmanpur Sunset Horizon</span>
            </div>
            <div className="neil-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Bharatpur Coral Snorkeling</span>
            </div>
            <div className="neil-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Organic Island Cycle Rides</span>
            </div>
          </div>

          <button onClick={onDiscoverNeil} className="neil-cta-btn">
            <span>VIEW NEIL ISLAND EXPERIENCES</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Right Visual */}
        <div className="neil-img-box order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85"
            alt="Natural Rock Bridge Neil Island"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm">
            🌿 Serene & Slow-Paced
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
              <MapPin size={13} /> Shaheed Dweep
            </span>
            <span className="text-[#ffd700] font-bold flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700]" /> 4.8 (310+ Reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
