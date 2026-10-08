// src/components/activities/ActivityFAQ.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ACTIVITY_FAQ = [
  {
    id: 'non-swimmers-scuba',
    question: 'Can non-swimmers do PADI Discover Scuba Diving in Andaman?',
    answer: 'Yes, absolutely! Discover Scuba Diving (DSD) is specially designed for beginners and non-swimmers. A dedicated PADI certified dive master accompanies you 1-on-1 underwater the entire time.'
  },
  {
    id: 'best-season-diving',
    question: 'What is the best season for diving and water sports in Andaman?',
    answer: 'The best season is from October through May when sea conditions are calm, underwater visibility reaches 20–30 meters, and tropical reef life is at its peak.'
  },
  {
    id: 'bioluminescence-season',
    question: 'When can I see bioluminescence night kayaking in Havelock?',
    answer: 'Bioluminescence is best witnessed during new moon and low moon nights when the sea is darkest and disturbance causes the phytoplankton to glow electric blue.'
  },
  {
    id: 'safety-medical-fitness',
    question: 'Are there any medical restrictions for scuba diving?',
    answer: 'Guests with severe asthma, cardiac conditions, or pregnancy cannot dive. A standard PADI medical disclaimer questionnaire is filled out before entering the water.'
  }
];

export default function ActivityFAQ() {
  const [openId, setOpenId] = useState(ACTIVITY_FAQ[0].id);
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
    <section ref={rootRef} className="faq-act-root">
      <style>{`
        .faq-act-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .faq-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .faq-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .faq-act-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .faq-act-item {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px; overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 45, 98, 0.04);
        }
        .faq-act-item.open {
          border-color: #F06543;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.1);
        }

        .faq-act-header {
          padding: 22px 26px; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; user-select: none;
        }

        .faq-act-question {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 800; color: #0B2545;
          margin: 0; line-height: 1.4;
        }
        .faq-act-item.open .faq-act-question { color: #F06543; }

        .faq-act-icon {
          color: #F06543; transition: transform 0.3s ease; shrink: 0;
        }
        .faq-act-item.open .faq-act-icon {
          transform: rotate(180deg);
        }

        .faq-act-answer-wrap {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .faq-act-item.open .faq-act-answer-wrap {
          max-height: 400px;
        }

        .faq-act-answer {
          padding: 0 26px 22px;
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.7; margin: 0;
          border-top: 1.5px solid #f1f5f9;
          padding-top: 16px; font-weight: 500;
        }
      `}</style>

      <div className="faq-act-eyebrow">
        <HelpCircle size={14} color="#F06543" />
        <span>FREQUENTLY ASKED QUESTIONS</span>
      </div>
      <h2 className="faq-act-title">ACTIVITY & DIVING FAQ</h2>

      <div className="faq-act-list">
        {ACTIVITY_FAQ.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className={`faq-act-item${isOpen ? ' open' : ''}`}>
              <div className="faq-act-header" onClick={() => toggle(item.id)}>
                <h3 className="faq-act-question">{item.question}</h3>
                <ChevronDown size={19} className="faq-act-icon" />
              </div>

              <div className="faq-act-answer-wrap">
                <p className="faq-act-answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
