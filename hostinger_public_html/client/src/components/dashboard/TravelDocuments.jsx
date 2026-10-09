import React, { useState, useEffect } from 'react';
import { FileText, Ship, Home, CreditCard, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

const ICON_MAP = {
  FileText, Ship, Home, CreditCard,
};

export default function TravelDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    bookingService.getMyBookings()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          // Only show vouchers for confirmed and paid bookings
          const paidBookings = res.data.filter(b => {
            const status = String(b.bookingStatus || b.status || '').toUpperCase();
            const payStatus = String(b.paymentStatus || '').toUpperCase();
            const isPending = status === 'PENDING' || status === 'PAYMENT_PENDING' || payStatus === 'PENDING' || payStatus === 'FAILED' || status === 'FAILED';
            const isPaid = payStatus === 'PAID' || status === 'CONFIRMED';
            return !isPending && isPaid;
          });
          const docs = paidBookings.map(b => ({
            id: `doc-${b.id || b.bookingNumber}`,
            name: `${b.bookingType || 'Experience'} Booking Voucher & Pass`,
            format: 'PDF Voucher',
            size: '1.2 MB',
            refNo: b.bookingNumber,
            icon: b.bookingType === 'FERRY' ? 'Ship' : (b.bookingType === 'STAY' ? 'Home' : 'FileText'),
          }));
          setDocuments(docs);
        } else {
          setDocuments([]);
        }
      })
      .catch(() => {
        setDocuments([]);
      });
  }, []);
  return (
    <div className="dash-docs-card">
      <style>{`
        .dash-docs-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }
        @media (max-width: 640px) {
          .dash-docs-card { padding: 20px; }
        }

        .dash-doc-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
        }
        .dash-doc-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 4px;
        }
        .dash-doc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        .dash-docs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        @media (max-width: 840px) {
          .dash-docs-grid { grid-template-columns: 1fr; }
        }

        .dash-doc-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px; padding: 18px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 14px; transition: all 0.3s ease;
        }
        .dash-doc-item:hover {
          border-color: rgba(33, 230, 193, 0.4);
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .dash-doc-icon-box {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(22, 217, 255, 0.12);
          color: #F06543; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .dash-doc-download-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          border: 1px solid rgba(33, 230, 193, 0.3);
          padding: 8px 14px; border-radius: 12px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 5px;
          transition: all 0.25s ease; flex-shrink: 0;
        }
        .dash-doc-download-btn:hover {
          background: linear-gradient(135deg, #0B2545, #F06543); color: #ffffff; border-color: #F06543;
          box-shadow: 0 4px 16px rgba(33, 230, 193, 0.4);
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-doc-hdr">
        <div>
          <div className="dash-doc-sub">
            <ShieldCheck size={12} color="#F06543" />
            <span>SECURE TRAVEL VAULT</span>
          </div>
          <h3 className="dash-doc-title">Travel Documents</h3>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#F06543',
          background: 'rgba(33, 230, 193, 0.12)', border: '1px solid rgba(33, 230, 193, 0.3)',
          padding: '6px 14px', borderRadius: 20,
        }}>
          <CheckCircle2 size={12} color="#F06543" />
          <span>ALL {documents.length} DOCS VERIFIED</span>
        </div>
      </div>

      {/* GRID */}
      {documents.length === 0 ? (
        <div style={{
          background: '#FAF4EE',
          border: '1px dashed #ebded2',
          borderRadius: 18,
          padding: '36px 24px',
          textAlign: 'center',
        }}>
          <FileText size={32} color="#F06543" style={{ margin: '0 auto 12px', opacity: 0.8 }} />
          <h4 style={{ color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, margin: '0 0 6px', fontWeight: 800 }}>
            No Travel Documents Available
          </h4>
          <p style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: 13, margin: 0 }}>
            Your official PDF vouchers, catamaran ferry tickets, and booking passes will be generated automatically once your reservation is confirmed.
          </p>
        </div>
      ) : (
        <div className="dash-docs-grid">
          {documents.map(doc => {
            const Icon = ICON_MAP[doc.icon] || FileText;
            return (
              <div key={doc.id} className="dash-doc-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="dash-doc-icon-box">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#334155', marginBottom: 2 }}>
                      {doc.name}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b' }}>
                      {doc.format} • {doc.size} • Ref: {doc.refNo}
                    </div>
                  </div>
                </div>

                <button
                  className="dash-doc-download-btn"
                  onClick={() => {
                    window.history.pushState({}, '', `/booking-confirmation/${doc.refNo}`);
                    window.dispatchEvent(new Event('popstate'));
                  }}
                >
                  <Download size={12} />
                  <span>VIEW VOUCHER</span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
