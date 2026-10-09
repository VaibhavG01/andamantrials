// src/components/dashboard/AITravelAssistant.jsx
// ─────────────────────────────────────────────────────────────────────────────
// AI Travel Assistant Floating Glass Card with Futuristic Visuals

import React from 'react';
import { Sparkles, MessageSquare, Bot, RefreshCw, Zap } from 'lucide-react';

export default function AITravelAssistant({ onAskAI, onUpdateItinerary }) {
  return (
    <div className="dash-ai-card">
      <style>{`
        .dash-ai-card {
          position: relative;
          background: #FAF4EE;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 28px;
          box-shadow: 0 16px 44px rgba(11, 37, 69, 0.08), 0 0 30px rgba(240, 101, 67, 0.08);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .dash-ai-glow {
          position: absolute;
          top: -40%; right: -10%;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .dash-ai-bot-icon {
          width: 52px; height: 52px; border-radius: 16px;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          color: #ffffff; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(240, 101, 67, 0.4); flex-shrink: 0;
        }

        .dash-ai-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.05em;
          padding: 10px 20px; border-radius: 14px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.3s ease;
        }
        .dash-ai-btn-primary {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          color: #ffffff; border: none;
          box-shadow: 0 4px 18px rgba(240, 101, 67, 0.35);
          text-decoration: none;
        }
        .dash-ai-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(240, 101, 67, 0.5);
        }
        .dash-ai-btn-sec {
          background: #ffffff;
          border: 1px solid #ebded2;
          color: #0B2545;
        }
        .dash-ai-btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: #FFF0EB;
        }
      `}</style>

      <div className="dash-ai-glow" />

      {/* Left Icon + Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className="dash-ai-bot-icon">
          <Bot size={28} />
        </div>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
            color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2,
          }}>
            <Zap size={11} color="#F06543" />
            <span>AI TRAVEL COMMAND ASSISTANT</span>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 800, color: '#0B2545', marginBottom: 2 }}>
            Need help planning your Andaman adventure?
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b' }}>
            Ask anything about weather, ferry delays, scuba gear, or custom food preferences.
          </div>
        </div>
      </div>

      {/* Right Buttons */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href="/plan-trip" className="dash-ai-btn dash-ai-btn-primary">
          <MessageSquare size={14} />
          <span>ASK AI ASSISTANT</span>
        </a>
        <button className="dash-ai-btn dash-ai-btn-sec" onClick={onUpdateItinerary}>
          <RefreshCw size={13} />
          <span>UPDATE ITINERARY</span>
        </button>
      </div>
    </div>
  );
}
