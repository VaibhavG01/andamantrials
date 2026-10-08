// src/components/packages/AdventurePackageExperience.jsx
import React from 'react';
import { Compass, ArrowRight, Check, MapPin, Star, Waves } from 'lucide-react';

export default function AdventurePackageExperience({ onDiscoverAdventure }) {
  return (
    <section className="adv-pkg-exp-root">
      <style>{`
        .adv-pkg-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .adv-pkg-card {
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
          .adv-pkg-card { grid-template-columns: 1fr; }
        }

        .adv-pkg-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .adv-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .adv-pkg-card:hover .adv-pkg-img-box img {
          transform: scale(1.06);
        }

        .adv-pkg-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .adv-pkg-content-box { padding: 26px; }
        }

        .adv-pkg-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .adv-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .adv-pkg-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .adv-pkg-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .adv-pkg-checklist { grid-template-columns: 1fr; }
        }

        .adv-pkg-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .adv-pkg-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .adv-pkg-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="adv-pkg-card">
        {/* Left Content */}
        <div className="adv-pkg-content-box order-2 lg:order-1">
          <div className="adv-pkg-tag">
            <Compass size={13} />
            <span>ADVENTURE & SCUBA SPOTLIGHT</span>
          </div>

          <h2 className="adv-pkg-title">
            7D/6N Ultimate Scuba & Watersports Expedition
          </h2>

          <p className="adv-pkg-desc">
            Engineered for thrill-seekers and marine enthusiasts. Features 2 certified PADI boat scuba dives at Dixon’s Pinnacle, Seakart self-drive adventure in Port Blair, bioluminescent night kayaking and elephant beach snorkeling.
          </p>

          <div className="adv-pkg-checklist">
            <div className="adv-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>PADI 1:1 Boat Scuba Diving</span>
            </div>
            <div className="adv-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Bioluminescence Night Kayak</span>
            </div>
            <div className="adv-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Seakart Self-Drive Thrill</span>
            </div>
            <div className="adv-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Free 4K Underwater GoPro Video</span>
            </div>
          </div>

          <button onClick={onDiscoverAdventure} className="adv-pkg-cta-btn">
            <span>EXPLORE ADVENTURE PACKAGES</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Right Visual */}
        <div className="adv-pkg-img-box order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
            alt="Andaman Scuba Diving Adventure Package"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm">
            🤿 100% PADI Certified
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
              <MapPin size={13} /> 7D / 6N Scuba Special
            </span>
            <span className="text-[#ffd700] font-bold flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700]" /> 4.9 (180+ Adventurers)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
