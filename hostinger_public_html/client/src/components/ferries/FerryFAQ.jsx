// src/components/ferries/FerryFAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
// ─────────────────────────────────────────────────────────────────────────────
// Single Accordion Ferry FAQ Section Component

const FERRY_FAQS = [
  {
    q: 'How long before departure should I reach the ferry jetty?',
    a: 'We strongly recommend arriving at least 45 minutes to 1 hour prior to your departure for ticket verification and baggage screening.'
  },
  {
    q: 'What is the baggage allowance on high-speed catamarans (Nautika / Makruzz)?',
    a: 'Each passenger is allowed up to 25 kg of check-in luggage and 1 piece of cabin baggage (up to 7 kg). Excess luggage can be handled at the port jetty counter.'
  },
  {
    q: 'Can I select my preferred seat (Premium / Royal / Deluxe)?',
    a: 'Yes, seat categories can be chosen during booking. Upper deck Royal and Deluxe classes feature panoramic glass windows and executive lounge seating.'
  },
  {
    q: 'Are ferry tickets refundable if weather conditions prevent sailing?',
    a: 'Yes, if a sailing is cancelled by the Port Authority due to adverse sea weather or cyclonic advisory, a 100% full refund or free transfer to the next available sailing is provided.'
  }
];

export default function FerryFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-root">
      <style>{`
        .faq-root {
          max-width: 960px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .faq-hdr {
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .faq-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .faq-item {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.open {
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .faq-question-btn {
          width: 100%; padding: 20px 24px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          background: transparent; border: none; cursor: pointer; text-align: left;
        }

        .faq-q-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14.5px; font-weight: 800; color: #334155;
        }

        .faq-icon-arrow {
          color: #F06543; transition: transform 0.3s ease; flex-shrink: 0;
        }
        .faq-item.open .faq-icon-arrow {
          transform: rotate(180deg);
        }

        .faq-answer-content {
          padding: 0 24px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; lineHeight: 1.65;
        }
      `}</style>

      <div className="faq-hdr">
        <div className="faq-sub">QUESTIONS & ANSWERS</div>
        <h2 className="faq-title">FERRY FAQ</h2>
      </div>

      <div className="faq-list">
        {FERRY_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-item${isOpen ? ' open' : ''}`}>
              <button onClick={() => toggleAccordion(idx)} className="faq-question-btn">
                <span className="faq-q-text">{faq.q}</span>
                <ChevronDown size={18} className="faq-icon-arrow" />
              </button>

              {isOpen && (
                <div className="faq-answer-content">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
