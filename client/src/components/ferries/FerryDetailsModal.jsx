// src/components/ferries/FerryDetailsModal.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium Glass Ferry Details Modal / Drawer Component

import React from 'react';
import { X, Ship, Clock, MapPin, CheckCircle2, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export default function FerryDetailsModal({ ferry, onClose, onBookNow }) {
  if (!ferry) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <style>{`
        .modal-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(2, 14, 22, 0.85);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
        }

        .modal-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px; width: 100%; max-width: 620px;
          padding: 32px; box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8), 0 0 30px rgba(22, 217, 255, 0.15);
          position: relative; max-height: 90vh; overflow-y: auto;
        }
        @media (max-width: 640px) {
          .modal-card { padding: 20px; }
        }

        .modal-close-btn {
          position: absolute; top: 20px; right: 20px;
          background: #e2e8f0; border: 1px solid #e2e8f0;
          color: #ffffff; width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .modal-close-btn:hover { background: rgba(255, 255, 255, 0.2); }
      `}</style>

      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn">
          <X size={16} />
        </button>

        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(22, 217, 255, 0.15)', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ship size={22} />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#0B2545', margin: 0 }}>
              {ferry.operator}
            </h3>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#F06543' }}>
              {ferry.vesselClass} • {ferry.status}
            </div>
          </div>
        </div>

        {/* ROUTE INFORMATION */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16, padding: 18, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#334155' }}>
                {ferry.departure}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543' }}>
                {ferry.from}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b', marginTop: 2 }}>
                {ferry.boardingPoint}
              </div>
            </div>

            <div style={{ textCenter: 'center', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543' }}>
                {ferry.duration}
              </div>
              <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #F06543, #F06543)', margin: '6px auto' }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b' }}>Direct Cruise</div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#334155' }}>
                {ferry.arrival}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543' }}>
                {ferry.to}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b', marginTop: 2 }}>
                {ferry.dropPoint}
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>
              BAGGAGE ALLOWANCE
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#334155', fontWeight: 600 }}>
              {ferry.baggageAllowance || '25kg check-in baggage + 7kg hand cabin luggage per passenger included free.'}
            </div>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 4 }}>
              SEATS REMAINING
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#334155', fontWeight: 600 }}>
              {ferry.seatsAvailable || 200} seats left in this class
            </div>
          </div>
        </div>

        {/* CANCELLATION POLICY */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14, marginBottom: 24 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
            <ShieldCheck size={13} color="#F06543" />
            CANCELLATION POLICY
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>
            {ferry.cancellationPolicy}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#334155' }}>
              ₹{ferry.price.toLocaleString()}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b' }}>
              inclusive of jetty fees
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookNow(ferry);
            }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#ffffff',
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
              padding: '12px 24px', borderRadius: 14, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 20px rgba(22, 217, 255, 0.4)',
            }}
          >
            <span>CONTINUE TO BOOK</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
