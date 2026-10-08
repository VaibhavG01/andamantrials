// src/components/cruises/CruiseAvailability.jsx
import React, { useState } from 'react';
import { Calendar, Users, Clock, Search, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';
import { checkCruiseAvailability } from '../../services/cruiseService';

export default function CruiseAvailability() {
  const [date, setDate] = useState('');
  const [cruiseType, setCruiseType] = useState('Sunset Cruise');
  const [travelers, setTravelers] = useState(2);
  const [time, setTime] = useState('Evening (Sunset)');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await checkCruiseAvailability({ date, cruiseSlug: cruiseType, travelers });
    setLoading(false);
    setResult(res.data);
  };

  return (
    <section className="avail-root">
      <style>{`
        .avail-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .avail-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .avail-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 16px; line-height: 1.1;
        }

        .mock-notice {
          background: rgba(255, 180, 50, 0.08);
          border: 1px solid rgba(255, 180, 50, 0.25);
          border-radius: 16px; padding: 12px 20px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px; color: #ffd700;
          margin: 0 auto 36px; max-width: 700px; text-align: center;
        }

        .avail-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px; padding: 36px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .avail-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
          margin-bottom: 24px;
        }
        @media (max-width: 680px) {
          .avail-grid { grid-template-columns: 1fr; }
        }

        .field-group {
          display: flex; flex-direction: column; gap: 6px;
        }
        .field-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .input-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #334155;
          outline: none; display: flex; align-items: center; gap: 10px;
        }

        .check-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 14px 28px; border-radius: 14px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .check-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }

        .result-box {
          margin-top: 24px; padding: 20px; border-radius: 16px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .result-available {
          background: rgba(33, 230, 193, 0.1); border: 1px solid rgba(33, 230, 193, 0.3);
          color: #F06543;
        }
        .result-limited {
          background: rgba(255, 180, 50, 0.1); border: 1px solid rgba(255, 180, 50, 0.3);
          color: #ffd700;
        }
        .result-sold-out {
          background: rgba(255, 79, 123, 0.1); border: 1px solid rgba(255, 79, 123, 0.3);
          color: #ff4f7b;
        }
      `}</style>

      <div className="avail-eyebrow">
        <Calendar size={14} color="#F06543" />
        <span>REAL-TIME CHECKER</span>
      </div>
      <h2 className="avail-title">CHECK CRUISE AVAILABILITY</h2>

      <div className="mock-notice">
        <Info size={15} />
        <span>NOTE: Availability status shown is for demonstration. Contact us to confirm real-time slots.</span>
      </div>

      <form className="avail-card" onSubmit={handleCheck}>
        <div className="avail-grid">
          <div className="field-group">
            <label className="field-lbl">DATE</label>
            <div className="input-box">
              <Calendar size={15} color="#F06543" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', width: '100%' }}
              />
            </div>
          </div>

          <div className="field-group">
            <label className="field-lbl">CRUISE EXPERIENCE</label>
            <div className="input-box">
              <select
                value={cruiseType}
                onChange={(e) => setCruiseType(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', width: '100%' }}
              >
                <option value="Sunset Cruise" style={{ background: '#ffffff' }}>Sunset Cruise</option>
                <option value="Luxury Cruise" style={{ background: '#ffffff' }}>Luxury Cruise</option>
                <option value="Private Cruise" style={{ background: '#ffffff' }}>Private Cruise</option>
                <option value="Couple Cruise" style={{ background: '#ffffff' }}>Couple Cruise</option>
                <option value="Family Cruise" style={{ background: '#ffffff' }}>Family Cruise</option>
                <option value="Sightseeing Cruise" style={{ background: '#ffffff' }}>Island Sightseeing</option>
              </select>
            </div>
          </div>

          <div className="field-group">
            <label className="field-lbl">TRAVELERS</label>
            <div className="input-box">
              <Users size={15} color="#F06543" />
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', width: '100%' }}
              >
                <option value={1} style={{ background: '#ffffff' }}>1 Traveler</option>
                <option value={2} style={{ background: '#ffffff' }}>2 Travelers</option>
                <option value={4} style={{ background: '#ffffff' }}>4 Travelers</option>
                <option value={6} style={{ background: '#ffffff' }}>6+ Group</option>
              </select>
            </div>
          </div>

          <div className="field-group">
            <label className="field-lbl">TIMING PREFERENCE</label>
            <div className="input-box">
              <Clock size={15} color="#F06543" />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', width: '100%' }}
              >
                <option value="Morning" style={{ background: '#ffffff' }}>Morning (09:00)</option>
                <option value="Afternoon" style={{ background: '#ffffff' }}>Afternoon (14:00)</option>
                <option value="Evening (Sunset)" style={{ background: '#ffffff' }}>Evening / Sunset (17:00)</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="check-btn" disabled={loading}>
          {loading ? 'CHECKING SLOTS...' : 'CHECK AVAILABILITY NOW'}
        </button>

        {result && (
          <div className={`result-box ${
            result.status === 'available' ? 'result-available' :
            result.status === 'limited' ? 'result-limited' : 'result-sold-out'
          }`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {result.status === 'available' && <CheckCircle2 size={20} />}
              {result.status === 'limited' && <AlertTriangle size={20} />}
              {result.status === 'sold-out' && <XCircle size={20} />}
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, textTransform: 'uppercase' }}>
                  STATUS: {result.status}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, opacity: 0.9 }}>
                  {result.message}
                </div>
              </div>
            </div>

            <a href="/contact" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
              color: '#ffffff', background: '#F06543', padding: '8px 18px', borderRadius: 12, textDecoration: 'none'
            }}>
              ENQUIRE NOW
            </a>
          </div>
        )}
      </form>
    </section>
  );
}
