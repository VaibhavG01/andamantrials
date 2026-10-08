// src/components/packages/FamilyPackageExperience.jsx
import React from 'react';
import { Users, ArrowRight, Check, MapPin, Star, Building2 } from 'lucide-react';

export default function FamilyPackageExperience({ onDiscoverFamily }) {
  return (
    <section className="fam-pkg-exp-root">
      <style>{`
        .fam-pkg-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .fam-pkg-card {
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
          .fam-pkg-card { grid-template-columns: 1fr; }
        }

        .fam-pkg-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .fam-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .fam-pkg-card:hover .fam-pkg-img-box img {
          transform: scale(1.06);
        }

        .fam-pkg-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .fam-pkg-content-box { padding: 26px; }
        }

        .fam-pkg-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .fam-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .fam-pkg-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .fam-pkg-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .fam-pkg-checklist { grid-template-columns: 1fr; }
        }

        .fam-pkg-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .fam-pkg-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .fam-pkg-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="fam-pkg-card">
        {/* Left Visual */}
        <div className="fam-pkg-img-box">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
            alt="Andaman Family Vacation Holiday Package"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm">
            👨‍👩‍👧‍👦 Kid & Senior Friendly
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
              <MapPin size={13} /> 5D / 4N Family Classic
            </span>
            <span className="text-[#ffd700] font-bold flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700]" /> 4.9 (320+ Families)
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="fam-pkg-content-box">
          <div className="fam-pkg-tag">
            <Users size={13} />
            <span>RELAXED FAMILY LEISURE VACATION</span>
          </div>

          <h2 className="fam-pkg-title">
            5D/4N Relaxed Island Family Escape
          </h2>

          <p className="fam-pkg-desc">
            Carefully paced for kids and elders with zero rushed transits. Features private AC vehicles at all ports, glass-bottom coral boat rides, Cellular Jail light & sound VIP seats, and shallow white-sand lagoon swimming in Havelock.
          </p>

          <div className="fam-pkg-checklist">
            <div className="fam-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Glass-Bottom Coral Safari Boat</span>
            </div>
            <div className="fam-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Spacious Family Resort Cottages</span>
            </div>
            <div className="fam-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Cellular Jail Light & Sound Show</span>
            </div>
            <div className="fam-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Private Dedicated Driver & AC Cab</span>
            </div>
          </div>

          <button onClick={onDiscoverFamily} className="fam-pkg-cta-btn">
            <span>VIEW FAMILY HOLIDAY PACKAGES</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
