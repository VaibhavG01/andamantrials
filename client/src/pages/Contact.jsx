// src/pages/Contact.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Traveler Contact & Trip Inquiry Page Container Component

import React, { useState, useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import TripInquiryOptions from '../components/contact/TripInquiryOptions';
import ContactTrust from '../components/contact/ContactTrust';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';
import WhatsAppButton from '../components/contact/WhatsAppButton';
import FooterBottom from '../components/FooterBottom';

export default function Contact() {
  const [selectedInquiryCategory, setSelectedInquiryCategory] = useState(null);

  // SEO Page Title & Meta Tags
  useEffect(() => {
    document.title = 'Contact Andaman Trails | Plan Your Andaman Trip';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact Andaman Trails to plan customized Andaman trips, explore packages, ask about travel experiences and get expert assistance.'
      );
    }
  }, []);

  const handleStartPlanning = () => {
    const formEl = document.getElementById('contact-form-container');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page-root">
      <style>{`
        .contact-page-root {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .contact-main-grid-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 60px;
        }

        .contact-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .contact-two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. HERO SECTION (60-70vh) */}
      <ContactHero onStartPlanning={handleStartPlanning} />

      {/* 2. CONTACT INFORMATION CARDS */}
      <ContactInfo />

      {/* 3. MAIN CONTACT AREA (50% FORM + 50% 3D MAP) */}
      <section className="contact-main-grid-section">
        <div className="contact-two-col">
          {/* LEFT: CONTACT FORM */}
          <ContactForm selectedInquiryCategory={selectedInquiryCategory} />

          {/* RIGHT: INTERACTIVE 3D MAP & OFFICE LOCATION */}
          <ContactMap />
        </div>
      </section>

      {/* 4. QUICK INQUIRY OPTIONS */}
      <TripInquiryOptions
        onSelectCategory={(categoryValue) => setSelectedInquiryCategory(categoryValue)}
      />

      {/* 5. WHY TALK TO US? */}
      <ContactTrust />

      {/* 6. QUICK ANSWERS (FAQ) */}
      <ContactFAQ />

      {/* 7. FINAL CTA */}
      <ContactCTA onStartPlanning={handleStartPlanning} />

      {/* 8. FOOTER */}
      <FooterBottom />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}
