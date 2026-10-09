// src/components/cruises/CruiseDetailsModal.jsx
import React, { useEffect, useRef } from 'react';
import { X, MapPin, Clock, Users, Check, AlertCircle, Calendar, ArrowRight, Shield } from 'lucide-react';
import { gsap } from 'gsap';

export default function CruiseDetailsModal({ cruise, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.93, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.4)' }
      );
    }
  }, [isOpen]);

  if (!isOpen || !cruise) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <style>{`
        .modal-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(2, 14, 22, 0.85);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; box-sizing: border-box;
        }

        .modal-card {
          position: relative; width: 100%; max-width: 680px;
          max-height: 88vh; overflow-y: auto;
          background: #ffffff;
          backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(22, 217, 255, 0.12);
        }

        .modal-close-btn {
          position: absolute; top: 16px; right: 16px; z-index: 10;
          width: 36px; height: 36px; border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #ffffff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
        }
        .modal-close-btn:hover {
          background: rgba(22, 217, 255, 0.2); color: #F06543;
        }

        .modal-hero-img {
          position: relative; width: 100%; height: 220px; overflow: hidden;
        }
        .modal-hero-img img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .modal-cat-badge {
          position: absolute; bottom: 16px; left: 24px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 4px 14px; border-radius: 14px; text-transform: uppercase;
        }

        .modal-body {
          padding: 28px 32px 36px;
        }
        @media (max-width: 640px) {
          .modal-body { padding: 20px 24px; }
        }

        .modal-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 600; color: #0B2545;
          line-height: 1.15; margin: 0 0 16px;
        }

        .meta-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px; padding: 16px; margin-bottom: 24px;
        }

        .meta-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; color: #334155; font-weight: 700;
        }

        .section-hdr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;
        }

        .inc-list {
          display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;
        }
        .inc-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #e2f0f8;
        }

        .desc-text {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .policy-box {
          background: rgba(22, 217, 255, 0.06);
          border-left: 3px solid #F06543; border-radius: 0 14px 14px 0;
          padding: 14px 18px; margin-bottom: 28px;
          font-family: 'Inter', sans-serif; font-size: 12.5px; color: #475569;
        }

        .price-row {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 20px; border-top: 1px solid #e2e8f0;
          flex-wrap: wrap; gap: 16px;
        }

        .book-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
          width: 100%; justify-content: center; text-decoration: none;
        }
        .book-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <div
        ref={modalRef}
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="modal-hero-img">
          <img src={cruise.coverImage || cruise.image} alt={cruise.name} />
          <span className="modal-cat-badge">{cruise.type}</span>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{cruise.name}</h2>

          <div className="meta-grid">
            <div className="meta-item">
              <MapPin size={14} color="#F06543" />
              <span>{cruise.location}</span>
            </div>
            <div className="meta-item">
              <Clock size={14} color="#F06543" />
              <span>{cruise.duration}</span>
            </div>
            <div className="meta-item" style={{ gridColumn: 'span 2' }}>
              <Users size={14} color="#F06543" />
              <span>Best For: {cruise.bestFor}</span>
            </div>
          </div>

          <p className="desc-text">{cruise.description}</p>

          <div className="section-hdr">INCLUSIONS</div>
          <div className="inc-list">
            {(Array.isArray(cruise.inclusions) 
              ? cruise.inclusions 
              : (typeof cruise.inclusions === 'string' 
                  ? cruise.inclusions.split('\n').map(s => s.trim().replace(/^[-*•]\s*/, '')).filter(Boolean)
                  : [])
            ).map((inc, i) => (
              <div key={i} className="inc-item">
                <Check size={14} color="#F06543" />
                <span>{inc}</span>
              </div>
            ))}
          </div>

          <div className="policy-box">
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', marginBottom: 4 }}>
              CANCELLATION & WEATHER POLICY
            </div>
            {cruise.cancellationPolicy}
          </div>

          <div className="price-row">
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                STARTING PRICE
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#F06543' }}>
                {cruise.startingPrice ? `₹${cruise.startingPrice}` : 'ENQUIRE FOR PRICE'}
              </div>
            </div>

            <a href="/contact" className="book-btn">
              <span>BOOK THIS CRUISE</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
