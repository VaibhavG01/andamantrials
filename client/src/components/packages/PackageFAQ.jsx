// src/components/packages/PackageFAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: 'Are ferry tickets and hotel stays included in these packages?',
    a: 'Yes! All our tour packages include confirmed inter-island catamaran ferry passes (Makruzz, Nautika, or Green Ocean), handpicked 4★ & 5★ beachfront resort stays with daily buffet breakfast, private AC cab transfers, and port permits.'
  },
  {
    q: 'Can I customize the day-by-day itinerary?',
    a: 'Absolutely. Every package is 100% tailor-made. You can add extra nights in Havelock or Neil Island, upgrade to private pool villas, add deep-sea scuba diving, candlelight beach dinners, or include Baratang mangrove safaris.'
  },
  {
    q: 'What is your cancellation and weather rescheduling policy?',
    a: 'We provide flexible payment terms with minimal token advances. In case of government ferry cancellations due to sea weather, our on-ground team handles instant rescheduling and alternative routing with zero convenience charges.'
  },
  {
    q: 'How do airport and inter-island jetty pickups work?',
    a: 'A dedicated representative meets you with your name placard at Port Blair Veer Savarkar International Airport and escorts you to your private AC vehicle. Similar private coordination is provided at every island jetty.'
  },
  {
    q: 'What is the best season to book an Andaman tour package?',
    a: 'October to May is the peak season featuring pleasant tropical sunshine, calm turquoise seas, and crystal-clear underwater scuba diving visibility across all islands.'
  },
  {
    q: 'Are introductory scuba diving & water sports safe for non-swimmers?',
    a: 'Yes! All discovery scuba programs included in our packages are specifically designed for non-swimmers and beginners, accompanied 1:1 by PADI-certified divemasters in shallow lagoons.'
  }
];

export default function PackageFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pkg-faq-root">
      <style>{`
        .pkg-faq-root {
          max-width: 980px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-faq-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .pkg-faq-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-faq-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.04);
          transition: all 0.25s ease;
        }
        .pkg-faq-card:hover {
          border-color: #F06543;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.08);
        }
      `}</style>

      <div className="pkg-faq-header">
        <div className="pkg-faq-eyebrow">FREQUENTLY ASKED QUESTIONS</div>
        <h2 className="pkg-faq-title">ANDAMAN TOUR PACKAGE FAQ</h2>
      </div>

      <div>
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="pkg-faq-card">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  padding: '22px 26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14.5, fontWeight: 900, color: '#0B2545', paddingRight: 16 }}>
                  {faq.q}
                </span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: isOpen ? '#0B2545' : '#FFF0EB',
                    border: '1.5px solid #F06543',
                    color: isOpen ? '#ffffff' : '#F06543',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                  }}
                >
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: '0 26px 24px', borderTop: '1.5px solid #f1f5f9', paddingTop: 16 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748b', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
