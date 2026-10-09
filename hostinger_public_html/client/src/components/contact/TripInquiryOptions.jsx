import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Compass, Sparkles, Home, Ship, Waves, HelpCircle, ArrowRight } from 'lucide-react';

const DEFAULT_INQUIRY_CATEGORIES = [
  { id: 'plan-a-trip', label: 'Plan a New Trip', formValue: 'Custom Itinerary' },
  { id: 'custom-package', label: 'Custom Tour Package', formValue: 'Tour Package' },
  { id: 'hotel-and-stay', label: 'Hotel & Resort Stays', formValue: 'Resort & Stays' },
  { id: 'ferry-info', label: 'High-Speed Ferry Tickets', formValue: 'Ferry Booking' },
  { id: 'activities', label: 'Scuba & Watersports', formValue: 'Scuba Diving & Watersports' },
  { id: 'general-enquiry', label: 'General Questions', formValue: 'General Inquiry' },
];

const ICON_MAP = {
  'plan-a-trip': Compass,
  'custom-package': Sparkles,
  'hotel-and-stay': Home,
  'ferry-info': Ship,
  'activities': Waves,
  'general-enquiry': HelpCircle,
};

export default function TripInquiryOptions({ onSelectCategory, categories = DEFAULT_INQUIRY_CATEGORIES }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  const handleClick = (item) => {
    if (onSelectCategory) {
      onSelectCategory(item.formValue);
    }
    const formElement = document.getElementById('contact-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="inquiry-options-section">
      <style>{`
        .inquiry-options-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .inquiry-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .inquiry-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .inquiry-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .inquiry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .inquiry-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .inquiry-grid { grid-template-columns: 1fr; }
        }

        .inquiry-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .inquiry-card:hover {
          transform: translateY(-4px);
          border-color: rgba(33, 230, 193, 0.5);
          background: #ffffff;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .inquiry-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(22, 217, 255, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .inquiry-card:hover .inquiry-icon-box {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
        }
      `}</style>

      <div className="inquiry-hdr">
        <div className="inquiry-sub">SELECT AN INQUIRY TYPE</div>
        <h2 className="inquiry-title">WHAT CAN WE HELP YOU WITH?</h2>
      </div>

      <div ref={cardsRef} className="inquiry-grid">
        {categories.map((item) => {
          const Icon = ICON_MAP[item.id] || Compass;
          return (
            <div key={item.id} className="inquiry-card" onClick={() => handleClick(item)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div className="inquiry-icon-box">
                  <Icon size={22} />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 800, color: '#334155', letterSpacing: '0.04em' }}>
                  {item.label}
                </div>
              </div>
              <ArrowRight size={16} color="#F06543" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
