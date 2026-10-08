// src/components/ferries/PortTerminalGuide.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Andaman Marine Jetties & Passenger Terminal Guide

import React from 'react';
import { MapPin, Clock, Luggage, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

const TERMINALS = [
  {
    name: 'Phoenix Bay Jetty Terminal',
    island: 'Port Blair (South Andaman)',
    type: 'Primary Passenger Hub',
    desc: 'Main passenger terminal for Makruzz, Nautika, and Green Ocean morning sailings to Havelock and Neil Island.',
    reportingTime: '45 mins prior to departure',
    facilities: ['Air-Conditioned Waiting Hall', 'Security Screen Gates', 'Luggage Check-in Hold', 'Taxi Stand & Snack Cafes'],
  },
  {
    name: 'Haddo Wharf Passenger Terminal',
    island: 'Port Blair (Deep Sea Pier)',
    type: 'Express Catamaran & Sunset Pier',
    desc: 'Deep water harbor pier for sunset cruises, yacht charters, and select high-speed catamaran sailings.',
    reportingTime: '45 mins prior to departure',
    facilities: ['Harbor View Deck', 'VIP Passenger Lounge', 'Private Cab Drop Zone', 'Direct Ship Gangway'],
  },
  {
    name: 'Swaraj Dweep Marine Jetty (Havelock)',
    island: 'Havelock Island (Govind Nagar)',
    type: 'Island Gateway Terminal',
    desc: 'Primary entry pier for all visitors arriving at Havelock Island. Scuba dive boats and speedboats dock adjacent.',
    reportingTime: '30 mins prior to departure',
    facilities: ['Tourist Information Counter', 'Auto & Rental Bike Stalls', 'Porter Baggage Assistance', 'Shaded Waiting Area'],
  },
  {
    name: 'Shaheed Dweep Jetty (Neil Island)',
    island: 'Neil Island (Bharatpur Pier)',
    type: 'Serene Island Jetty',
    desc: 'Gateway to Neil Island beaches and natural rock formation. Crystal clear turquoise water right at the pier.',
    reportingTime: '30 mins prior to departure',
    facilities: ['Glass Bottom Boat Desk', 'E-Rickshaw & Cab Pickups', 'Local Island Guides', 'Baggage Tagging'],
  },
];

export default function PortTerminalGuide() {
  return (
    <section className="terminal-guide-root">
      <style>{`
        .terminal-guide-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .guide-hdr-center {
          text-align: center;
          margin-bottom: 36px;
        }

        .guide-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .guide-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .advisory-strip-banner {
          background: #FFF1EE;
          border: 1.5px solid #FFD7CC;
          border-radius: 18px;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .terminals-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 800px) {
          .terminals-grid-2col { grid-template-columns: 1fr; }
        }

        .terminal-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }

        .term-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #0284C7;
          background: #E0F2FE;
          padding: 2px 8px;
          border-radius: 6px;
          width: fit-content;
          margin-bottom: 8px;
        }

        .term-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 4px;
        }

        .term-island {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #F06543;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .term-facilities-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px dashed #E2E8F0;
        }
      `}</style>

      <div className="guide-hdr-center">
        <div className="guide-sub">BOARDING & HARBOUR INFORMATION</div>
        <h2 className="guide-title">Andaman Passenger Jetty Terminal Guide</h2>
      </div>

      <div className="advisory-strip-banner">
        <Luggage size={24} color="#F06543" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 900, color: '#0B2545' }}>
            Boarding Guidelines & Baggage Allowance Advisory
          </div>
          <div style={{ fontSize: 12, color: '#64748B' }}>
            All catamaran operators permit <strong>25kg check-in baggage + 7kg cabin luggage</strong> free per passenger. Mandatory original Government Photo ID required for terminal gate security entry.
          </div>
        </div>
      </div>

      <div className="terminals-grid-2col">
        {TERMINALS.map((term) => (
          <div key={term.name} className="terminal-card">
            <div className="term-tag">{term.type}</div>
            <h3 className="term-title">{term.name}</h3>
            <div className="term-island">📍 {term.island}</div>
            <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.5, margin: 0 }}>
              {term.desc}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 800, color: '#0B2545', marginTop: 12 }}>
              <Clock size={13} color="#F06543" />
              <span>Reporting: {term.reportingTime}</span>
            </div>

            <div className="term-facilities-list">
              {term.facilities.map((fac) => (
                <div key={fac} style={{ fontSize: 11.5, color: '#475569', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ color: '#10B981', fontWeight: 900 }}>✓</span>
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
