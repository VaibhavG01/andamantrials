// src/components/contact/FormField.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Reusable Glass Form Field Component with Translucent Input Styling & Clean Error Labels

import React from 'react';

export default function FormField({
  label,
  required,
  error,
  children,
}) {
  return (
    <div className="form-field-wrapper">
      <style>{`
        .form-field-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          position: relative;
        }

        .form-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #b0c9d6;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .form-required-star {
          color: #F06543;
          margin-left: 3px;
        }

        .form-field-wrapper input,
        .form-field-wrapper select,
        .form-field-wrapper textarea {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #ffffff;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 16px;
          outline: none;
          transition: all 0.25s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .form-field-wrapper input::placeholder,
        .form-field-wrapper textarea::placeholder {
          color: #4a6678;
        }

        .form-field-wrapper input:focus,
        .form-field-wrapper select:focus,
        .form-field-wrapper textarea:focus {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 16px rgba(22, 217, 255, 0.25);
        }

        .form-error-msg {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #ff4f7b;
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 4px;
          animation: formErrFade 0.25s ease;
        }
        @keyframes formErrFade {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {label && (
        <label className="form-label">
          <span>
            {label}
            {required && <span className="form-required-star">*</span>}
          </span>
        </label>
      )}

      {children}

      {error && <div className="form-error-msg">⚠️ {error}</div>}
    </div>
  );
}
