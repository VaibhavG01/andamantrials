// src/components/faq/FAQSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// FAQ SECTION — Accordion with Category Tabs, smooth animations, zero emojis

import React, { useState } from 'react';
import {
  Sparkles, ChevronDown, Phone, Mail, MessageCircle,
  Map, Plane, CreditCard, Ship, Waves, Shield, Clock, Users,
} from 'lucide-react';

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: Sparkles },
  { id: 'planning', label: 'Trip Planning', icon: Map },
  { id: 'travel', label: 'Getting There', icon: Plane },
  { id: 'activities', label: 'Activities', icon: Waves },
  { id: 'booking', label: 'Booking & Payment', icon: CreditCard },
  { id: 'ferry', label: 'Ferry & Cruise', icon: Ship },
  { id: 'safety', label: 'Safety & Policy', icon: Shield },
];

const FAQS = [
  // PLANNING
  {
    id: 'f1', category: 'planning',
    question: 'What is the best time to visit the Andaman Islands?',
    answer: 'The ideal time to visit Andaman is between October and May. The weather is clear, the sea is calm, and water visibility for diving is at its best. Peak season is December to February. Avoid June to September as the monsoon makes sea activities difficult and many islands are inaccessible.',
  },
  {
    id: 'f2', category: 'planning',
    question: 'How many days are enough for Andaman?',
    answer: 'We recommend a minimum of 5–7 nights to properly explore Port Blair, Havelock Island, and Neil Island. For a complete experience including Baratang and Ross Island, 9–10 nights is ideal. Our most popular packages run 6N/7D and 8N/9D.',
  },
  {
    id: 'f3', category: 'planning',
    question: 'Do I need a permit to visit the Andaman Islands?',
    answer: 'Indian nationals do not need any special permit to visit the Andaman & Nicobar Islands. Foreign nationals need a Restricted Area Permit (RAP), which is issued free of charge on arrival at Port Blair airport or seaport. Some tribal-protected islands require additional permits.',
  },
  {
    id: 'f4', category: 'planning',
    question: 'What currency is used in Andaman? Are ATMs available?',
    answer: 'Indian Rupee (INR) is the only accepted currency. ATMs are available in Port Blair and Havelock Island. Neil Island has limited ATM access. We strongly recommend carrying sufficient cash before leaving Port Blair as connectivity and power can be inconsistent on smaller islands.',
  },
  // TRAVEL
  {
    id: 'f5', category: 'travel',
    question: 'How do I reach the Andaman Islands?',
    answer: 'You can reach Andaman either by flight (2–3 hours from major Indian cities like Chennai, Kolkata, Delhi, and Bangalore) or by ship (56–65 hours from Chennai, Kolkata, or Visakhapatnam). Flights are far more convenient and preferred by most travelers. We assist with flight bookings at best prices.',
  },
  {
    id: 'f6', category: 'travel',
    question: 'Which airports have direct flights to Port Blair?',
    answer: 'Veer Savarkar International Airport (IXZ) in Port Blair receives direct flights from Chennai, Kolkata, Delhi, Bangalore, Hyderabad, Mumbai, and Bhubaneswar. IndiGo, Air India, SpiceJet, and Go First operate on these routes. We can arrange your flights as part of our all-inclusive packages.',
  },
  // ACTIVITIES
  {
    id: 'f7', category: 'activities',
    question: 'Do I need prior experience for scuba diving?',
    answer: 'No experience is required for a Discover Scuba Diving (DSD) session. Our PADI-certified instructors will give you a 30-minute briefing and then guide you on the dive at shallow depths (3–6 meters). For deeper dives and certification courses, prior experience or completing a beginner course is needed.',
  },
  {
    id: 'f8', category: 'activities',
    question: 'Is sea walking safe? Can non-swimmers do it?',
    answer: 'Absolutely. Sea walking is one of the safest water activities and does not require swimming ability. You wear a special oxygen-supplied helmet and walk on the ocean floor at 3–5 meters depth. Our trained guides accompany you throughout. It is suitable for ages 10 and above.',
  },
  {
    id: 'f9', category: 'activities',
    question: 'What activities can children do in Andaman?',
    answer: 'Andaman is very family-friendly. Children can enjoy glass bottom boat rides, sea walking (age 10+), snorkeling (age 8+), banana boat rides, beach games at Radhanagar, the Cellular Jail Light & Sound show, and Ross Island wildlife tours where deer roam freely. We design dedicated family itineraries.',
  },
  // BOOKING
  {
    id: 'f10', category: 'booking',
    question: 'How do I book a package with Andaman Trails?',
    answer: 'You can book directly on our website by selecting a package and filling the inquiry form, or call/WhatsApp us at +91 91378 35433. Our travel experts will customise the itinerary to your exact needs, confirm availability, and send you a detailed quote. A 25% advance secures your booking.',
  },
  {
    id: 'f11', category: 'booking',
    question: 'What payment methods are accepted?',
    answer: 'We accept all major UPI apps (GPay, PhonePe, Paytm), net banking, debit/credit cards (Visa, Mastercard, RuPay), and bank transfers (NEFT/RTGS/IMPS). International guests can pay via wire transfer or PayPal. All transactions are secured with 256-bit SSL encryption.',
  },
  {
    id: 'f12', category: 'booking',
    question: 'What is the cancellation and refund policy?',
    answer: 'Cancellations made 30+ days before departure receive a 90% refund. 15–30 days: 70% refund. 7–14 days: 50% refund. Less than 7 days: no refund on bookings. Force majeure (natural disasters, government restrictions) situations are handled with full flexibility — we reschedule at no extra cost.',
  },
  // FERRY
  {
    id: 'f13', category: 'ferry',
    question: 'How do I travel between Port Blair, Havelock, and Neil Island?',
    answer: 'The primary mode of inter-island transport is government ferries and private speed boats. Makruzz, Nautika, and Green Ocean are popular private operators with online booking. Government ferries are cheaper but slower. We include all inter-island ferry bookings in our packages — you don\'t need to arrange them separately.',
  },
  {
    id: 'f14', category: 'ferry',
    question: 'How long is the ferry ride from Port Blair to Havelock?',
    answer: 'Government ferries take approximately 2.5 to 3 hours. Private speed ferries (Makruzz, Nautika) take about 1.5 to 2 hours and are more comfortable with air-conditioned cabins, snack bars, and smoother rides. We recommend booking in advance, especially during peak season (Dec–Jan) as they fill up quickly.',
  },
  // SAFETY
  {
    id: 'f15', category: 'safety',
    question: 'Is Andaman safe for solo female travelers?',
    answer: 'Yes, Andaman is considered one of the safest travel destinations in India for solo female travelers. Crime rates are very low, the local population is friendly, and most tourist areas are well-monitored. We also offer solo female traveler packages with female guides and curated group itineraries.',
  },
  {
    id: 'f16', category: 'safety',
    question: 'Is travel insurance included in your packages?',
    answer: 'Our premium and honeymoon packages include comprehensive travel insurance covering medical emergencies, trip cancellation, baggage loss, and activity accidents. For standard packages, we strongly recommend purchasing travel insurance — we can assist you with a trusted insurer at a nominal cost.',
  },
];

// ─── ACCORDION ITEM ───────────────────────────────────────────────────────────
function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
      onClick={onToggle}
    >
      <div className="faq-question-row">
        <span className="faq-question-text">{faq.question}</span>
        <span className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`}>
          <ChevronDown size={18} />
        </span>
      </div>
      <div className="faq-answer-wrap" style={{ maxHeight: isOpen ? '400px' : '0' }}>
        <div className="faq-answer-text">{faq.answer}</div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState('f1');

  const filtered = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const handleToggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="faq-section" className="faq-section">
      <style>{`
        .faq-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #334155;
          padding: 72px 0 88px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .faq-glow-l {
          position: absolute; top: 15%; left: -6%;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(22,217,255,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .faq-glow-r {
          position: absolute; bottom: 15%; right: -6%;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(33,230,193,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .faq-container {
          max-width: 1380px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* Header */
        .faq-header-row {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
          margin-bottom: 36px;
        }
        .faq-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.22em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 7px;
          margin-bottom: 7px;
        }
        .faq-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 600;
          color: #0B2545; line-height: 1.1; margin: 0 0 6px;
        }
        .faq-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px; color: #64748b; line-height: 1.55;
          max-width: 500px; margin: 0;
        }
        .faq-count-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 8px 16px; border-radius: 20px;
          backdrop-filter: blur(8px);
        }

        /* Filter tabs */
        .faq-filters {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-bottom: 36px;
        }
        .faq-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 8px 16px; border-radius: 30px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .faq-filter-btn:hover {
          border-color: #F06543;
          color: #002d62;
          background: #FFF0EB;
        }
        .faq-filter-btn.active {
          background: linear-gradient(135deg, #002d62 0%, #F06543 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(13, 148, 136, 0.35);
        }

        /* Two-column layout */
        .faq-body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .faq-body-grid { grid-template-columns: 1fr; }
        }

        /* Accordion item */
        .faq-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 45, 98, 0.04);
        }
        .faq-item:hover {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.08);
          transform: translateY(-2px);
        }
        .faq-item--open {
          border-color: #F06543 !important;
          background: #ffffff !important;
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.12) !important;
        }

        .faq-question-row {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 18px 20px; gap: 14px;
        }
        .faq-question-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14.5px; font-weight: 800; color: #0f172a;
          line-height: 1.45; flex: 1;
        }
        .faq-item--open .faq-question-text {
          color: #002d62;
        }

        .faq-chevron {
          color: #64748b; flex-shrink: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          width: 32px; height: 32px; border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; justify-content: center;
        }
        .faq-chevron--open {
          transform: rotate(180deg);
          background: #FFF0EB;
          border-color: #F06543;
          color: #F06543;
        }

        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-answer-text {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #334155; line-height: 1.7;
          padding: 0 20px 20px;
          border-top: 1px solid #f1f5f9;
          padding-top: 14px;
        }

        /* ── Contact strip ── */
        .faq-contact-strip {
          margin-top: 52px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 28px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 30px 36px;
          box-shadow: 0 4px 24px rgba(0, 45, 98, 0.06);
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .faq-contact-strip { grid-template-columns: 1fr; padding: 24px; }
        }
        .faq-contact-btns {
          display: flex; gap: 12px; flex-wrap: wrap;
        }
        .faq-contact-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800;
          padding: 11px 22px; border-radius: 14px;
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer; text-decoration: none;
          transition: all 0.3s ease;
        }
        .faq-contact-btn--primary {
          background: linear-gradient(135deg, #002d62, #F06543);
          color: #ffffff; border: none;
          box-shadow: 0 4px 18px rgba(13, 148, 136, 0.35);
        }
        .faq-contact-btn--primary:hover {
          box-shadow: 0 8px 28px rgba(13, 148, 136, 0.5);
          transform: translateY(-2px);
        }
        .faq-contact-btn--secondary {
          background: #f8fafc;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }
        .faq-contact-btn--secondary:hover {
          background: #FFF0EB;
          border-color: #F06543;
          color: #002d62;
        }
        .faq-contact-btn--wa {
          background: rgba(37,211,102,0.15);
          color: #25d366;
          border: 1px solid rgba(37,211,102,0.35);
        }
        .faq-contact-btn--wa:hover {
          background: #25d366; color: #fff;
          box-shadow: 0 6px 20px rgba(37,211,102,0.4);
        }
      `}</style>

      {/* Ambient glows */}
      <div className="faq-glow-l" />
      <div className="faq-glow-r" />

      <div className="faq-container">

        {/* ── HEADER ── */}
        <div className="faq-header-row">
          <div>
            <div className="faq-header-sub">
              <Sparkles size={13} color="#F06543" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="faq-header-title">
              Everything You Need to Know
            </h2>
            <p className="faq-header-desc">
              Quick answers to the most common questions about planning your Andaman trip — from permits to payments.
            </p>
          </div>
          <div className="faq-count-chip">
            <MessageCircle size={13} color="#F06543" />
            <span>{FAQS.length} QUESTIONS ANSWERED</span>
          </div>
        </div>

        {/* ── FILTER TABS ── */}
        <div className="faq-filters">
          {FAQ_CATEGORIES.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`faq-filter-btn${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── TWO-COLUMN ACCORDION GRID ── */}
        <div className="faq-body-grid">
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.filter((_, i) => i % 2 === 0).map(faq => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.filter((_, i) => i % 2 === 1).map(faq => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* ── STILL HAVE QUESTIONS STRIP ── */}
        <div className="faq-contact-strip">
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18, fontWeight: 800, color: '#334155', marginBottom: 5,
            }}>
              Still Have Questions?
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, color: '#64748b', lineHeight: 1.5,
            }}>
              Our Andaman travel experts are available 9am–9pm daily. Get personalised answers in minutes.
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 18,
              marginTop: 12, flexWrap: 'wrap',
            }}>
              {[
                { Icon: Clock, text: 'Mon–Sun, 9am–9pm' },
                { Icon: Users, text: 'Expert Travel Team' },
                { Icon: Shield, text: '100% Free Consultation' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5, fontWeight: 700, color: '#64748b',
                }}>
                  <Icon size={12} color="#F06543" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="faq-contact-btns">
            {/* WhatsApp */}
            <a href="https://wa.me/919137835433?text=Hello%20Andaman%20Trails!%20I%20have%20a%20query." target="_blank" rel="noopener noreferrer" className="faq-contact-btn faq-contact-btn--wa">
              {/* WhatsApp SVG Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.557 4.118 1.529 5.845L.057 24l6.349-1.444A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.371l-.359-.214-3.721.847.876-3.607-.234-.37A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
              </svg>
              <span>WHATSAPP US</span>
            </a>

            {/* Call */}
            <a href="tel:+919137835433" className="faq-contact-btn faq-contact-btn--primary">
              <Phone size={14} />
              <span>CALL NOW</span>
            </a>

            {/* Email */}
            <a href="mailto:info@andamantrails.com" className="faq-contact-btn faq-contact-btn--secondary">
              <Mail size={14} />
              <span>EMAIL US</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
