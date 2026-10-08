// src/components/activities/ActivityBookingFlow.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: '01', title: 'CHOOSE ADVENTURE', desc: 'Select your preferred scuba, sea walk, kayak, or water sports activity.' },
  { num: '02', title: 'SELECT ISLAND & DATE', desc: 'Pick Havelock, Port Blair, or Neil Island with preferred morning/afternoon slot.' },
  { num: '03', title: 'INSTANT CONFIRMATION', desc: 'Secure your slot with online booking voucher & instant instructor allocation.' },
  { num: '04', title: 'MEET & DIVE!', desc: 'Arrive at dive jetty, suit up with sanitized gear, and explore the Andaman sea!' },
];

export default function ActivityBookingFlow({ onStartBooking }) {
  const stepsRef = useRef(null);

  useEffect(() => {
    if (!stepsRef.current) return;
    const cards = stepsRef.current.querySelectorAll('.step-act-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section className="flow-act-root">
      <style>{`
        .flow-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .flow-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .flow-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 54px; line-height: 1.1;
        }

        .steps-act-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px; position: relative;
        }
        @media (max-width: 960px) {
          .steps-act-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .steps-act-grid { grid-template-columns: 1fr; }
        }

        .step-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 36px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          transition: all 0.35s ease; position: relative; z-index: 2;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .step-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .step-num-circle {
          width: 66px; height: 66px; border-radius: 50%;
          background: #FFF0EB;
          border: 2.5px solid #F06543;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px; font-weight: 700; color: #0B2545;
          margin-bottom: 20px; box-shadow: 0 0 20px rgba(13, 148, 136, 0.15);
        }

        .step-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px;
        }

        .step-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }

        .flow-act-cta-wrap {
          text-align: center; margin-top: 48px;
        }

        .flow-act-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 6px 22px rgba(0, 45, 98, 0.28);
        }
        .flow-act-cta-btn:hover {
          transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}</style>

      <div className="flow-act-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>EASY 4-STEP BOOKING PROCESS</span>
      </div>
      <h2 className="flow-act-title">YOUR ADVENTURE, MADE SIMPLE</h2>

      <div ref={stepsRef} className="steps-act-grid">
        {STEPS.map((s, idx) => (
          <div key={idx} className="step-act-card">
            <div className="step-num-circle">{s.num}</div>
            <h3 className="step-card-title">{s.title}</h3>
            <p className="step-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="flow-act-cta-wrap">
        <button onClick={onStartBooking} className="flow-act-cta-btn">
          <span>FIND LIVE SLOTS NOW</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
