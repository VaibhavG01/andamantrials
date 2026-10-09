// src/components/stays/StayNewsletter.jsx
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StayNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="stay-newsletter-root">
      <style>{`
        .stay-newsletter-root {
          max-width: 800px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .newsletter-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px; padding: 48px 40px; text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        @media (max-width: 640px) {
          .newsletter-card { padding: 32px 20px; }
        }

        .nl-icon-circle {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }

        .nl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600; color: #0B2545; margin: 0 0 10px; line-height: 1.15;
        }

        .nl-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65;
          max-width: 520px; margin: 0 auto 28px;
        }

        .nl-form {
          display: flex; gap: 12px; max-width: 480px; margin: 0 auto;
        }
        @media (max-width: 500px) {
          .nl-form { flex-direction: column; }
        }

        .nl-input {
          flex: 1; padding: 13px 18px; border-radius: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155; font-family: 'Inter', sans-serif;
          font-size: 13px; outline: none; transition: border-color 0.25s;
        }
        .nl-input:focus {
          border-color: #F06543; box-shadow: 0 0 14px rgba(33, 230, 193, 0.2);
        }
        .nl-input::placeholder { color: #5a7888; }

        .nl-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 24px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; white-space: nowrap;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .nl-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }

        .nl-success {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          margin-top: 16px;
        }
      `}</style>

      <div className="newsletter-card">
        <div className="nl-icon-circle">
          <Mail size={24} color="#F06543" />
        </div>

        <h2 className="nl-title">FIND YOUR NEXT ESCAPE</h2>
        <p className="nl-desc">
          Get destination ideas, travel tips, and handpicked Andaman stays delivered to your inbox.
        </p>

        <form className="nl-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="nl-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email for newsletter subscription"
          />
          <button type="submit" className="nl-btn">
            <span>SUBSCRIBE</span>
            <ArrowRight size={14} />
          </button>
        </form>

        {submitted && (
          <div className="nl-success">
            <CheckCircle2 size={16} />
            <span>SUBSCRIBED SUCCESSFULLY!</span>
          </div>
        )}
      </div>
    </section>
  );
}
