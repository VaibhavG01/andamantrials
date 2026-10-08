// src/components/ferries/SeaTravelFAQ.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Unified Sea Travel, Ferry & Cruise FAQ Accordion

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: 'What is the difference between private catamaran ferries and government ferries?',
    a: 'Private catamarans (Makruzz, Nautika, Green Ocean, ITT Majestic) offer high-speed transit (90 mins to Havelock), 100% confirmed online advance seat allocation, fully air-conditioned cabins, and luxury pushback seats. Government DSS ferries operate on open unreserved schedules primarily for local island residents and cannot be booked with guaranteed advance tourist confirmation.'
  },
  {
    q: 'How early should I reach the Jetty Terminal before sailing?',
    a: 'All passengers are required to report at the passenger jetty terminal at least 45 minutes prior to departure for luggage tagging and security screening. Gate closing occurs 15 minutes before departure.'
  },
  {
    q: 'Are seat numbers pre-allocated on Andaman catamaran ferries?',
    a: 'Yes, your seat class (Premium, Deluxe, or Royal) and designated seat number are pre-allocated and printed directly on your confirmed E-Ticket voucher.'
  },
  {
    q: 'What happens if a sailing is delayed or cancelled due to bad weather?',
    a: 'Safety is paramount in the Andaman Sea. If the Port Management Board / Directorate of Shipping Services suspends sailings due to squally weather or cyclone alerts, you receive a 100% full refund or priority auto-rescheduling onto the next safe sailing.'
  },
  {
    q: 'Is food and beverage available on board the ferries and sunset cruises?',
    a: 'Yes, all premier catamarans feature an onboard cafeteria serving hot tea, coffee, packaged juices, fresh sandwiches, snacks, and cookies. Sunset & dinner cruises include complimentary welcome mocktails and gourmet snacks.'
  },
  {
    q: 'Do children need separate tickets for ferry sailings?',
    a: 'Infants under 2 years of age travel free (without a separate seat). Children aged 2 years and above require a standard passenger seat ticket.'
  },
];

export default function SeaTravelFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="sea-faq-root">
      <style>{`
        .sea-faq-root {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .faq-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .faq-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .faq-item.active {
          border-color: #F06543;
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.08);
        }

        .faq-question-btn {
          width: 100%;
          padding: 18px 22px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
          gap: 16px;
        }

        .faq-answer-body {
          padding: 0 22px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.6;
          color: #64748B;
        }
      `}</style>

      <div className="faq-hdr">
        <div className="faq-sub">ANSWERS & MARITIME ADVISORY</div>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-accordion-list">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  color={isOpen ? '#F06543' : '#64748B'}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.25s ease',
                    flexShrink: 0
                  }}
                />
              </button>

              {isOpen && (
                <div className="faq-answer-body">
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
