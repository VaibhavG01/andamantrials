import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
const STAY_FAQ = [
  {
    id: 'checkin-checkout',
    question: 'What are standard check-in and check-out timings for resorts?',
    answer: 'Standard check-in is typically 12:00 PM or 2:00 PM, and check-out is 10:00 AM or 11:00 AM. Early check-in and late check-out can be requested depending on room availability.'
  },
  {
    id: 'ferry-transfer-sync',
    question: 'Are resort transfers coordinated with inter-island ferry arrivals?',
    answer: 'Yes, all our luxury resorts and partner hotels provide direct jetty pickup and drop-off services synchronized with your ferry schedule.'
  },
  {
    id: 'wifi-connectivity',
    question: 'How is internet and cellular connectivity at island resorts?',
    answer: 'Most luxury resorts in Havelock, Neil, and Port Blair offer complimentary Wi-Fi and have Airtel/Jio 4G/5G mobile tower coverage.'
  },
  {
    id: 'cancellation-policy',
    question: 'What is the resort booking cancellation policy?',
    answer: 'Cancellations made 15 days prior to arrival are eligible for full refunds minus minimal payment processing charges.'
  }
];

export default function StayFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="stay-faq-root">
      <style>{`
        .stay-faq-root {
          max-width: 860px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .faq-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .faq-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .faq-item {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 20px; overflow: hidden;
          transition: border-color 0.25s ease;
        }
        .faq-item.open {
          border-color: rgba(33, 230, 193, 0.4);
        }

        .faq-question {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; cursor: pointer; gap: 16px;
          transition: background 0.2s ease;
        }
        .faq-question:hover {
          background: rgba(22, 217, 255, 0.04);
        }

        .faq-q-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 800; color: #334155;
          flex: 1; line-height: 1.4;
        }

        .faq-chevron {
          color: #F06543; transition: transform 0.3s ease; flex-shrink: 0;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s ease;
          padding: 0 24px;
        }
        .faq-item.open .faq-answer {
          max-height: 300px; padding: 0 24px 20px;
        }

        .faq-a-text {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.7;
        }
      `}</style>

      <div className="faq-eyebrow">
        <HelpCircle size={14} color="#F06543" />
        <span>FREQUENTLY ASKED</span>
      </div>
      <h2 className="faq-title">STAYS FAQ</h2>

      <div className="faq-list">
        {STAY_FAQ.map((item) => (
          <div
            key={item.id}
            className={`faq-item${openId === item.id ? ' open' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggle(item.id)}
              role="button"
              tabIndex={0}
              aria-expanded={openId === item.id}
              onKeyDown={(e) => e.key === 'Enter' && toggle(item.id)}
            >
              <span className="faq-q-text">{item.question}</span>
              <ChevronDown size={18} className="faq-chevron" />
            </div>
            <div className="faq-answer">
              <p className="faq-a-text">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
