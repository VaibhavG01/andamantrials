import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const DEFAULT_FAQS = [
  { q: 'How far in advance should I book my Andaman trip?', a: 'We recommend booking 3 to 6 weeks in advance for regular season and 2 to 3 months in advance for peak season (December to February) to secure private catamaran ferry seats and beachfront villas.' },
  { q: 'Do Indian citizens require a passport or special permit for Andaman?', a: 'No, Indian national passport holders and citizens do not require any special permits to visit Port Blair, Havelock (Swaraj Dweep), Neil (Shaheed Dweep), and Baratang. Only a valid government photo ID (Aadhaar, Voter ID, Driving License) is needed.' },
  { q: 'Can non-swimmers participate in Scuba Diving?', a: 'Yes, absolutely! Our PADI Discover Scuba Diving (DSD) program is specifically designed for non-swimmers and beginners. A personal certified divemaster stays with you one-on-one throughout the entire shallow dive.' },
  { q: 'What happens if a ferry gets cancelled due to weather?', a: 'Andaman Trails provides 100% weather disruption support with priority rescheduling on the next available catamaran or immediate alternative stay arrangements in Port Blair.' },
];

export default function ContactFAQ({ faqs = DEFAULT_FAQS }) {
  const [openIdx, setOpenIdx] = useState(0); // Default first open

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="contact-faq-section">
      <style>{`
        .contact-faq-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .faq-hdr {
          text-align: center;
          margin-bottom: 36px;
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
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.active {
          border-color: rgba(33, 230, 193, 0.45);
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.1);
        }

        .faq-btn {
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }

        .faq-question {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
        }
        .faq-item.active .faq-question {
          color: #F06543;
        }

        .faq-[#icon] {
          transition: transform 0.3s ease;
          color: #F06543;
          flex-shrink: 0;
        }
        .faq-item.active .faq-[#icon] {
          transform: rotate(180deg);
          color: #F06543;
        }

        .faq-ans-box {
          padding: 0 24px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.65;
          animation: faqOpen 0.3s ease;
        }
        @keyframes faqOpen {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="faq-hdr">
        <div className="faq-sub">GOT QUESTIONS?</div>
        <h2 className="faq-title">QUICK ANSWERS</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq-item${isOpen ? ' active' : ''}`}>
              <button className="faq-btn" onClick={() => toggle(idx)}>
                <span className="faq-question">{item.q}</span>
                <ChevronDown size={18} className="faq-[#icon]" />
              </button>

              {isOpen && <div className="faq-ans-box">{item.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
