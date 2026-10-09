import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton({
  number = '919137835433',
  defaultMessage = 'Hello Andaman Trails! I would like to plan a trip to the Andaman Islands.',
}) {
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float-button"
      title="Chat with Andaman Trails on WhatsApp"
    >
      <style>{`
        .wa-float-button {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .wa-float-button:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 16px 40px rgba(37, 211, 102, 0.65);
        }

        @media (max-width: 640px) {
          .wa-float-button {
            bottom: 80px; /* Above mobile bottom nav */
            right: 16px;
            padding: 10px 16px;
          }
          .wa-float-text {
            display: none;
          }
        }
      `}</style>

      <MessageSquare size={20} fill="#ffffff" color="#25d366" />
      <div className="wa-float-text" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: '0.05em' }}>
        <span>NEED QUICK HELP?</span>
        <span style={{ color: '#dcf8c6', marginLeft: 4 }}>CHAT WITH US →</span>
      </div>
    </a>
  );
}
