// src/components/destinations/DestinationFAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Which island is best for first-time visitors to the Andamans?',
    a: 'Swaraj Dweep (Havelock Island) is the top recommendation. It is home to Asia’s top-ranked Radhanagar Beach (No. 7), vibrant coral gardens at Elephant Beach, bioluminescent night kayaking, and Asia’s premier PADI scuba diving hubs.'
  },
  {
    q: 'How do I travel between Port Blair, Havelock, and Neil Island?',
    a: 'High-speed luxury private catamarans (Makruzz, Nautika, Green Ocean) operate multiple daily sailings between Port Blair, Havelock, and Neil Island. Journey times are 90 mins between Port Blair & Havelock, and 60 mins between Havelock & Neil.'
  },
  {
    q: 'Are special permits required for Indian and Foreign tourists?',
    a: 'Indian citizens require standard government photo ID (Aadhaar/Passport/Driving License). Restricted Area Permits (RAP) are now issued automatically upon arrival at Port Blair Veer Savarkar International Airport for most foreign nationals.'
  },
  {
    q: 'When is the best season to explore the Andaman Islands?',
    a: 'October to May is the prime season featuring calm turquoise seas, sunny blue skies, and high underwater visibility (up to 25 meters) ideal for scuba diving, snorkeling, and inter-island cruising.'
  },
  {
    q: 'Can I do a day trip to Baratang Island from Port Blair?',
    a: 'Yes, Baratang is a popular full-day tour starting from Port Blair at 05:30 AM or 08:30 AM via the authorized Jarawa tribal forest convoy and speedboat mangrove creeks, returning by 05:00 PM.'
  },
  {
    q: 'How do I commute locally on Havelock and Neil Island?',
    a: 'Self-drive automatic scooters/bikes are available for rent at ₹500–₹600/day. Private AC taxis, auto-rickshaws, and eco-friendly island buses are also readily available at all jetties and hotel reception desks.'
  }
];

export default function DestinationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="dest-faq-root">
      <style>{`
        .dest-faq-root {
          max-width: 980px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-faq-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .dest-faq-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-faq-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.04);
          transition: all 0.25s ease;
        }
        .dest-faq-card:hover {
          border-color: #F06543;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.08);
        }
      `}</style>

      <div className="dest-faq-header">
        <div className="dest-faq-eyebrow">FREQUENTLY ASKED QUESTIONS</div>
        <h2 className="dest-faq-title">ANDAMAN ISLAND TRAVEL FAQ</h2>
      </div>

      <div>
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="dest-faq-card">
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
