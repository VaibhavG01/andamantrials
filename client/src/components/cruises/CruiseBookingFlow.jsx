// src/components/cruises/CruiseBookingFlow.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: '01', title: 'CHOOSE', desc: 'Select your preferred cruise experience from our curated collection.' },
  { num: '02', title: 'SELECT DATE', desc: 'Choose your preferred departure date and timing.' },
  { num: '03', title: 'CONFIRM', desc: 'Review details and complete booking confirmation with our team.' },
  { num: '04', title: 'SAIL', desc: 'Arrive at the harbour jetty and set sail into the Andaman Sea.' },
];

export default function CruiseBookingFlow({ onStartBooking }) {
  const stepsRef = useRef(null);

  useEffect(() => {
    if (!stepsRef.current) return;
    const cards = stepsRef.current.querySelectorAll('.step-card');
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
    <section className="flow-root">
      <style>{`
        .flow-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .flow-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .flow-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 54px; line-height: 1.1;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px; position: relative;
        }
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr; }
        }

        .step-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 24px; padding: 36px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          transition: all 0.35s ease; position: relative; z-index: 2;
        }
        .step-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .step-number-circle {
          width: 64px; height: 64px; border-radius: 50%;
          background: #f8fafc;
          border: 2.5px solid rgba(22, 217, 255, 0.4);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 26px; font-weight: 700; color: #F06543;
          margin-bottom: 20px; box-shadow: 0 0 20px rgba(22, 217, 255, 0.2);
        }

        .step-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px;
        }

        .step-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin: 0;
        }

        .flow-cta-wrap {
          text-align: center; margin-top: 48px;
        }

        .flow-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .flow-cta-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <div className="flow-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>EASY BOOKING PROCESS</span>
      </div>
      <h2 className="flow-title">YOUR CRUISE, MADE SIMPLE</h2>

      <div ref={stepsRef} className="steps-grid">
        {STEPS.map((s, idx) => (
          <div key={idx} className="step-card">
            <div className="step-number-circle">{s.num}</div>
            <h3 className="step-card-title">{s.title}</h3>
            <p className="step-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="flow-cta-wrap">
        <button onClick={onStartBooking} className="flow-cta-btn">
          <span>START PLANNING NOW</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
