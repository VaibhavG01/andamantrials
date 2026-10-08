// src/components/packages/HoneymoonPackageExperience.jsx
import React from 'react';
import { Heart, ArrowRight, Check, MapPin, Star, Sparkles, Utensils } from 'lucide-react';

export default function HoneymoonPackageExperience({ onDiscoverHoneymoon }) {
  return (
    <section className="hm-pkg-exp-root">
      <style>{`
        .hm-pkg-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .hm-pkg-card {
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
          .hm-pkg-card { grid-template-columns: 1fr; }
        }

        .hm-pkg-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .hm-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .hm-pkg-card:hover .hm-pkg-img-box img {
          transform: scale(1.06);
        }

        .hm-pkg-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .hm-pkg-content-box { padding: 26px; }
        }

        .hm-pkg-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .hm-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .hm-pkg-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .hm-pkg-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .hm-pkg-checklist { grid-template-columns: 1fr; }
        }

        .hm-pkg-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .hm-pkg-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .hm-pkg-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="hm-pkg-card">
        {/* Left Visual */}
        <div className="hm-pkg-img-box">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
            alt="Andaman Luxury Honeymoon Package"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm">
            💍 Curated for Couples
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs">
            <span className="flex items-center gap-1.5 text-[#2dd4bf] font-bold">
              <MapPin size={13} /> 6D / 5N Luxury Escape
            </span>
            <span className="text-[#ffd700] font-bold flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700]" /> 5.0 (240+ Couples)
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="hm-pkg-content-box">
          <div className="hm-pkg-tag">
            <Heart size={13} className="fill-[#F06543]" />
            <span>EXCLUSIVE ROMANCE SPOTLIGHT</span>
          </div>

          <h2 className="hm-pkg-title">
            6D/5N Romantic Island Haven (Havelock & Neil)
          </h2>

          <p className="hm-pkg-desc">
            A bespoke romantic journey designed for newlyweds and couples. Includes luxury beachfront villa stays in Havelock & Neil, private candlelit dinner under the stars by the surf, flower bed decor, champagne sunset cruise and premium catamaran passes.
          </p>

          <div className="hm-pkg-checklist">
            <div className="hm-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Private Beach Candlelight Dinner</span>
            </div>
            <div className="hm-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Beachfront Private Villa</span>
            </div>
            <div className="hm-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Honeymoon Cake & Floral Bed</span>
            </div>
            <div className="hm-pkg-item">
              <Check size={14} color="#F06543" className="stroke-[3]" />
              <span>Makruzz Luxury Catamaran</span>
            </div>
          </div>

          <button onClick={onDiscoverHoneymoon} className="hm-pkg-cta-btn">
            <span>EXPLORE HONEYMOON PACKAGES</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
