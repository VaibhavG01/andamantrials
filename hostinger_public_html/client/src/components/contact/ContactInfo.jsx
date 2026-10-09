import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles } from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';

const DEFAULT_CONTACT_CARDS = [
  {
    id: 'call-us',
    title: 'CALL US',
    desc: 'Get direct travel assistance from our island experts.',
    actionText: 'CALL NOW',
    actionType: 'phone',
    value: '+91 91378 35433',
    icon: 'PhoneCall',
  },
  {
    id: 'email-us',
    title: 'EMAIL US',
    desc: 'Send us your custom itinerary & travel requirements.',
    actionText: 'SEND EMAIL',
    actionType: 'email',
    value: 'info@andamantrails.com',
    icon: 'Mail',
  },
  {
    id: 'whatsapp-us',
    title: 'WHATSAPP',
    desc: 'Chat directly with our island vacation concierges.',
    actionText: 'CHAT NOW',
    actionType: 'whatsapp',
    value: '+91 91378 35433',
    icon: 'MessageSquare',
  },
  {
    id: 'visit-office',
    title: 'VISIT US',
    desc: 'Meet our trip designers at our island booking lounge.',
    actionText: 'GET DIRECTIONS',
    actionType: 'maps',
    value: 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair',
    icon: 'MapPin',
  },
];

export default function ContactInfo({ cards = DEFAULT_CONTACT_CARDS }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cardElements = cardsRef.current.children;
    gsap.fromTo(
      cardElements,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, []);

  const handleCardAction = (item) => {
    if (item.actionType === 'phone') {
      window.location.href = `tel:${item.value.replace(/\s+/g, '')}`;
    } else if (item.actionType === 'email') {
      window.location.href = `mailto:${item.value}`;
    } else if (item.actionType === 'whatsapp') {
      window.open(
        `https://wa.me/919137835433?text=${encodeURIComponent('Hello Andaman Trails! I would like to plan a trip to the Andaman Islands.')}`,
        '_blank'
      );
    } else if (item.actionType === 'maps') {
      window.open('https://maps.google.com/?q=Raghuleela+Mega+Mall+Kandivali+West+Mumbai', '_blank');
    }
  };

  return (
    <section className="contact-info-section">
      <style>{`
        .contact-info-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .contact-info-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 44px;
        }

        .contact-sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .contact-sec-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 12px;
        }

        .contact-sec-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="contact-info-header">
        <div className="contact-sub-badge">
          <Sparkles size={12} color="#F06543" />
          <span>REACH OUT ANYTIME</span>
        </div>
        <h2 className="contact-sec-title">WE'RE HERE TO HELP</h2>
        <p className="contact-sec-desc">
          Reach out to us and let's turn your Andaman travel idea into an unforgettable real journey.
        </p>
      </div>

      {/* 4 GLASS CARDS */}
      <div ref={cardsRef} className="contact-cards-grid">
        {cards.map((card) => (
          <ContactInfoCard key={card.id} item={card} onAction={handleCardAction} />
        ))}
      </div>
    </section>
  );
}
