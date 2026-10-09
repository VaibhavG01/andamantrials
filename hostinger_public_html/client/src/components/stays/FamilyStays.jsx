// src/components/stays/FamilyStays.jsx
import React from 'react';
import { Users, ShieldCheck, Waves, Utensils, ArrowRight } from 'lucide-react';

export default function FamilyStays({ onExploreFamily }) {
  return (
    <section className="family-stays-root">
      <style>{`
        .family-stays-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px;
        }

        .family-card {
          background: #ffffff; backdrop-filter: blur(25px);
          border: 1.5px solid rgba(33, 230, 193, 0.3); border-radius: 28px;
          overflow: hidden; display: grid; grid-template-columns: 1.1fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 900px) {
          .family-card { grid-template-columns: 1fr; }
        }

        .family-body {
          padding: 44px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .family-body { padding: 24px; }
        }

        .family-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .family-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600; color: #0B2545; line-height: 1.1; margin: 0 0 14px;
        }

        .family-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .family-pill-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px;
        }
        .family-pill {
          font-family: 'Space Grotesk', sans-serif; fontSize: 12; color: #334155; font-weight: 700;
          background: #ffffff; border: 1px solid rgba(33, 230, 193, 0.2);
          padding: 10px 14px; border-radius: 14px; display: flex; align-items: center; gap: 8px;
        }

        .family-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .family-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }

        .family-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .family-img-box img {
          width: 100%; height: 100%; object-fit: cover;
        }
      `}</style>

      <div className="family-card">
        <div className="family-body">
          <div>
            <div className="family-eyebrow">
              <Users size={14} color="#F06543" />
              <span>FAMILY VACATIONS</span>
            </div>
            <h2 className="family-title">ROOM FOR EVERYONE</h2>
            <p className="family-desc">
              Spacious multi-room suites, child-friendly swimming pools, connected family villas, and multi-cuisine dining options.
            </p>

            <div className="family-pill-grid">
              <div className="family-pill"><Users size={14} color="#F06543" /> Interconnecting Rooms</div>
              <div className="family-pill"><Waves size={14} color="#F06543" /> Kids Pool Circuit</div>
              <div className="family-pill"><Utensils size={14} color="#F06543" /> Multi-Cuisine Dining</div>
              <div className="family-pill"><ShieldCheck size={14} color="#F06543" /> Safe Beach Access</div>
            </div>
          </div>

          <button onClick={onExploreFamily} className="family-btn">
            <span>FIND FAMILY STAYS</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="family-img-box">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85"
            alt="Family Island Resort Stay"
          />
        </div>
      </div>
    </section>
  );
}
