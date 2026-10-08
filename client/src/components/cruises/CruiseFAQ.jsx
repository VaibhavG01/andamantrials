// src/components/cruises/CruiseFAQ.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CRUISE_FAQ = [
  {
    id: 'boarding-time',
    question: 'How early do I need to report at the cruise terminal / jetty?',
    answer: 'Guests must report at least 45 minutes prior to scheduled cruise departure for boarding pass verification and security check.'
  },
  {
    id: 'included-amenities',
    question: 'What is included in the sunset luxury catamaran cruise?',
    answer: 'Sunset cruises include welcome mocktails, live acoustic island music, scenic sundeck access, safety jackets, and evening light snacks.'
  },
  {
    id: 'monsoon-weather-sailing',
    question: 'What happens if the sea weather is rough or cruise is cancelled by Port Authority?',
    answer: 'In the rare event of inclement weather or port authority advisory, you will be offered a 100% full refund or immediate free rescheduling to the next available sailing slot.'
  },
  {
    id: 'private-charters-booking',
    question: 'Can I book a private luxury yacht charter for couples or family groups?',
    answer: 'Yes, we provide custom yacht charters for private sunset parties, honeymoon sails, and island hopping with custom food & beverage arrangements.'
  }
];

export default function CruiseFAQ() {
  const [openId, setOpenId] = useState(CRUISE_FAQ[0].id);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' }
      }
    );
  }, []);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={rootRef} className="faq-root">
      <style>{`
        .faq-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
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
          display: flex; flex-direction: column; gap: 12px;
        }

        .faq-item {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 18px; overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.open {
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(33, 230, 193, 0.1);
        }

        .faq-header {
          padding: 20px 24px; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; user-select: none;
        }

        .faq-question {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 700; color: #0B2545;
          margin: 0; line-height: 1.35;
        }
        .faq-item.open .faq-question { color: #F06543; }

        .faq-icon {
          color: #F06543; transition: transform 0.3s ease; shrink: 0;
        }
        .faq-item.open .faq-icon {
          transform: rotate(180deg); color: #F06543;
        }

        .faq-answer-wrap {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .faq-item.open .faq-answer-wrap {
          max-height: 400px;
        }

        .faq-answer {
          padding: 0 24px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.7; margin: 0;
          border-top: 1px solid #e2e8f0;
          padding-top: 14px;
        }
      `}</style>

      <div className="faq-eyebrow">
        <HelpCircle size={14} color="#F06543" />
        <span>FREQUENTLY ASKED</span>
      </div>
      <h2 className="faq-title">CRUISE FAQ</h2>

      <div className="faq-list">
        {CRUISE_FAQ.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className={`faq-item${isOpen ? ' open' : ''}`}>
              <div className="faq-header" onClick={() => toggle(item.id)}>
                <h3 className="faq-question">{item.question}</h3>
                <ChevronDown size={18} className="faq-icon" />
              </div>

              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
