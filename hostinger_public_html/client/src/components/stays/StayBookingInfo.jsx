// src/components/stays/StayBookingInfo.jsx
import React from 'react';
import { Clock, LogOut, RotateCcw, CreditCard, ShieldCheck } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: Clock,
    title: 'CHECK-IN',
    description: 'Standard check-in is between 10:00 AM – 12:00 PM. Early check-in subject to availability and prior request.',
    color: '#F06543',
  },
  {
    icon: LogOut,
    title: 'CHECK-OUT',
    description: 'Standard check-out is between 08:00 AM – 10:00 AM, aligned with inter-island ferry departures.',
    color: '#F06543',
  },
  {
    icon: RotateCcw,
    title: 'CANCELLATION',
    description: 'Cancellation policies vary by property. Free cancellation is typically available 48–72 hours before check-in.',
    color: '#a78bfa',
  },
  {
    icon: CreditCard,
    title: 'PAYMENT',
    description: 'UPI, credit/debit cards, and net banking accepted. Partial advance payment may be required for peak-season bookings.',
    color: '#ffd700',
  },
];

export default function StayBookingInfo() {
  return (
    <section className="booking-info-root">
      <style>{`
        .booking-info-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .info-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .info-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .info-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 1024px) {
          .info-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .info-grid { grid-template-columns: 1fr; }
        }

        .info-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 24px; padding: 28px 22px;
          transition: all 0.35s ease;
        }
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        }

        .info-icon-circle {
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }

        .info-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 900; letter-spacing: 0.08em;
          margin: 0 0 8px;
        }

        .info-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
        }
      `}</style>

      <div className="info-eyebrow">
        <ShieldCheck size={14} color="#F06543" />
        <span>BOOKING ESSENTIALS</span>
      </div>
      <h2 className="info-title">BOOK YOUR STAY WITH CONFIDENCE</h2>

      <div className="info-grid">
        {INFO_CARDS.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div key={idx} className="info-card" style={{ borderColor: `${card.color}30` }}>
              <div className="info-icon-circle" style={{ background: `${card.color}18` }}>
                <IconComp size={22} color={card.color} />
              </div>
              <h3 className="info-card-title" style={{ color: card.color }}>{card.title}</h3>
              <p className="info-card-desc">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
