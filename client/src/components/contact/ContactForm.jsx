// src/components/contact/ContactForm.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium Translucent Glass Contact & Travel Inquiry Form Component

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles, Loader2, Calendar, Users, Clock, Tag } from 'lucide-react';
import FormField from './FormField';
import { submitContactInquiry } from '../../services/contactService';

export default function ContactForm({ selectedInquiryCategory }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2 (Couple)',
    inquiryType: 'Honeymoon Package',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sync when parent quick inquiry card is clicked
  useEffect(() => {
    if (selectedInquiryCategory) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: selectedInquiryCategory,
        customTrip: selectedInquiryCategory === 'Custom Package',
      }));
    }
  }, [selectedInquiryCategory]);

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      const updated = exists
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated };
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Please enter your phone number.';
    if (!formData.travelDate) errs.travelDate = 'Please select your travel date.';
    if (!formData.travelers) errs.travelers = 'Please select number of travelers.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valErrs = validate();
    if (Object.keys(valErrs).length > 0) {
      setErrors(valErrs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await submitContactInquiry(formData);
      if (res.success) {
        setSuccess(true);
      }
    } catch (err) {
      setErrors({ form: 'Unable to submit inquiry. Please try again or WhatsApp us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact-form-container" className="contact-form-card">
      <style>{`
        .contact-form-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(22, 217, 255, 0.05);
          position: relative;
        }

        @media (max-width: 640px) {
          .contact-form-card {
            padding: 24px 20px;
          }
        }

        .contact-form-hdr {
          margin-bottom: 28px;
        }

        .contact-form-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .contact-form-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 8px;
        }

        .contact-form-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 18px;
        }

        @media (max-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Interest Pill Selector */
        .interest-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .interest-pill-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b;
          transition: all 0.25s ease;
        }

        .interest-pill-btn:hover {
          color: #F06543;
          border-color: rgba(22, 217, 255, 0.4);
        }

        .interest-pill-btn.active {
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border-color: #F06543;
          color: #F06543;
          box-shadow: 0 2px 10px rgba(33, 230, 193, 0.2);
        }

        /* Custom Checkbox */
        .custom-trip-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 24px;
          padding: 12px 16px;
          background: rgba(22, 217, 255, 0.05);
          border: 1px solid rgba(22, 217, 255, 0.18);
          border-radius: 12px;
          cursor: pointer;
        }

        .custom-trip-row input[type='checkbox'] {
          width: 16px;
          height: 16px;
          accent-color: #F06543;
          cursor: pointer;
        }

        .contact-submit-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 14px 28px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 0 6px 20px rgba(22, 217, 255, 0.3);
        }
        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(22, 217, 255, 0.5);
        }
        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Success Card */
        .contact-success-card {
          text-align: center;
          padding: 40px 24px;
          animation: succFadeIn 0.4s ease;
        }
        @keyframes succFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {success ? (
        <div className="contact-success-card">
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(33, 230, 193, 0.15)', border: '2px solid #F06543', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 0 30px rgba(33, 230, 193, 0.4)' }}>
            <CheckCircle2 size={32} />
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#334155', letterSpacing: '0.05em', marginBottom: 8 }}>
            INQUIRY SENT ✓
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', maxWidth: 420, margin: '0 auto 24px', lineHeight: 1.6 }}>
            Thank you! Our Andaman travel expert will get back to you shortly on email & WhatsApp.
          </div>
          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                travelDate: '',
                travelers: '2 (Couple)',
                inquiryType: 'Honeymoon Package',
                message: '',
              });
            }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543',
              background: 'rgba(22, 217, 255, 0.1)', border: '1px solid rgba(22, 217, 255, 0.3)',
              padding: '10px 20px', borderRadius: 12, cursor: 'pointer',
            }}
          >
            SEND ANOTHER INQUIRY
          </button>
        </div>
      ) : (
        <>
          <div className="contact-form-hdr">
            <div className="contact-form-sub">
              <Sparkles size={12} color="#F06543" />
              <span>CUSTOM TRIP ASSISTANT</span>
            </div>
            <h3 className="contact-form-title">TELL US ABOUT YOUR TRIP</h3>
            <p className="contact-form-desc">
              Share a few details and we'll help you plan the perfect Andaman experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form-grid">
              {/* FULL NAME */}
              <FormField label="FULL NAME *" required error={errors.fullName}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </FormField>

              {/* PHONE NUMBER */}
              <FormField label="PHONE NUMBER *" required error={errors.phone}>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </FormField>
            </div>

            <div className="contact-form-grid">
              {/* EMAIL ADDRESS */}
              <FormField label="EMAIL ADDRESS *" required error={errors.email}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </FormField>

              {/* TRAVEL DATE */}
              <FormField label="TRAVEL DATE" required error={errors.travelDate}>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                />
              </FormField>
            </div>

            <div className="contact-form-grid">
              {/* TRIP TYPE */}
              <FormField label="TRIP TYPE">
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                >
                  <option value="Honeymoon Package">Honeymoon Package</option>
                  <option value="Family Holiday">Family Holiday</option>
                  <option value="Adventure Trip">Adventure Trip</option>
                  <option value="Solo Travel">Solo Travel</option>
                  <option value="Corporate Group">Corporate Group</option>
                  <option value="Budget Backpacking">Budget Backpacking</option>
                  <option value="Custom Itinerary">Custom Itinerary</option>
                </select>
              </FormField>

              {/* NUMBER OF TRAVELERS */}
              <FormField label="NO. OF TRAVELERS" required error={errors.travelers}>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                >
                  <option value="1 (Solo)">1 (Solo)</option>
                  <option value="2 (Couple)">2 (Couple)</option>
                  <option value="3-5 (Small Group)">3–5 (Small Group)</option>
                  <option value="6-10 (Group)">6–10 (Group)</option>
                  <option value="10+ (Large Group)">10+ (Large Group)</option>
                </select>
              </FormField>
            </div>

            {/* MESSAGE */}
            <FormField label="YOUR MESSAGE / SPECIAL REQUESTS">
              <textarea
                rows={3}
                placeholder="Tell us what you're looking for, destinations you want to cover..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </FormField>

            {/* CTA BUTTON */}
            <button type="submit" disabled={submitting} className="contact-submit-btn">
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>SENDING ENQUIRY...</span>
                </>
              ) : (
                <>
                  <span>SEND MY ENQUIRY</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
