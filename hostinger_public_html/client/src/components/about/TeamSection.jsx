import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Users, Mail, MapPin } from 'lucide-react';

const DEFAULT_TEAM_DATA = [
  {
    id: 'vikram',
    name: 'Vikram Seth',
    role: 'Founder & Senior Island Guide',
    desc: 'Island born and raised in Port Blair with over 15 years navigating inter-island catamaran routes and rainforest trekking paths.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'anita',
    name: 'Anita Roy',
    role: 'Head of Romance & Luxury Experiences',
    desc: 'Curator of bespoke honeymoon escapes, private candlelight dinners on Radhanagar Beach, and five-star resort bookings.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'mike',
    name: 'Mike Ross',
    role: 'Lead PADI Master Instructor & Marine Biologist',
    desc: 'With 4,500+ logged dives, Mike oversees our scuba diving training safety protocols and coral reef conservation initiatives.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
];

export default function TeamSection({ team = DEFAULT_TEAM_DATA }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="team-section-root">
      <style>{`
        .team-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .team-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .team-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .team-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr; }
        }

        .team-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          overflow: hidden;
          padding: 28px 24px;
          text-align: center;
          transition: all 0.35s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45), 0 0 24px rgba(33, 230, 193, 0.15);
        }

        .team-photo {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #F06543;
          margin: 0 auto 16px;
          box-shadow: 0 0 20px rgba(33, 230, 193, 0.3);
          transition: transform 0.4s ease;
        }
        .team-card:hover .team-photo {
          transform: scale(1.06);
        }
      `}</style>

      <div className="team-hdr">
        <div className="team-sub">OUR LEADERSHIP & CONCIERGES</div>
        <h2 className="team-title">THE PEOPLE BEHIND THE JOURNEY</h2>
      </div>

      <div ref={cardsRef} className="team-grid">
        {team.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 900, color: '#334155', marginBottom: 3 }}>
              {member.name}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, color: '#F06543', marginBottom: 10 }}>
              {member.role}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6, margin: '0 0 16px' }}>
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
