// src/components/contact/ContactInfoCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Glassmorphic Contact Card Component for Call, Email, WhatsApp & Office

import React from 'react';
import { PhoneCall, Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  PhoneCall,
  Mail,
  MessageSquare,
  MapPin,
};

export default function ContactInfoCard({ item, onAction }) {
  const IconComponent = ICON_MAP[item.icon] || PhoneCall;

  return (
    <div className="contact-info-card">
      <style>{`
        .contact-info-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.08);
          position: relative;
          overflow: hidden;
        }

        .contact-info-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(33, 230, 193, 0.15);
          background: #ffffff;
        }

        .contact-card-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(22, 217, 255, 0.12);
          border: 1px solid rgba(22, 217, 255, 0.3);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .contact-card-icon-box {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
        }

        .contact-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0B2545;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .contact-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 20px;
          flex: 1;
        }

        .contact-card-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #F06543;
          margin-bottom: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .contact-card-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          border: 1px solid rgba(33, 230, 193, 0.3);
          padding: 10px 18px;
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
          width: 100%;
          text-decoration: none;
          box-sizing: border-box;
        }

        .contact-info-card:hover .contact-card-btn {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
        }
      `}</style>

      <div>
        <div className="contact-card-icon-box">
          <IconComponent size={24} />
        </div>
        <div className="contact-card-title">{item.title}</div>
        <div className="contact-card-desc">{item.desc}</div>
        <div className="contact-card-value">{item.value}</div>
      </div>

      <button className="contact-card-btn" onClick={() => onAction && onAction(item)}>
        <span>{item.actionText}</span>
        <ArrowRight size={13} />
      </button>
    </div>
  );
}
