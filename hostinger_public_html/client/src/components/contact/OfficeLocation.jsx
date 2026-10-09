import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, ArrowRight } from 'lucide-react';
import { settingService, DEFAULT_SITE_SETTINGS } from '../../api/settingService';

export default function OfficeLocation({ office }) {
  const [siteSettings, setSiteSettings] = useState(DEFAULT_SITE_SETTINGS);

  useEffect(() => {
    settingService.getSettings()
      .then((data) => {
        if (data) setSiteSettings(data);
      })
      .catch(() => {});
  }, []);

  const displayOffice = {
    label: office?.label || siteSettings.headOfficeLabel || 'PORT BLAIR HEADQUARTERS',
    address: office?.address || siteSettings.headOfficeAddress || 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101',
    googleMapsUrl: office?.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(siteSettings.headOfficeAddress || 'Aberdeen Bazaar Port Blair')}`,
    hours: office?.hours || siteSettings.supportHours || 'Mon - Sat: 9:00 AM - 7:00 PM IST',
  };

  return (
    <div className="office-loc-card">
      <style>{`
        .office-loc-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .office-loc-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 4px;
        }

        .office-loc-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 2px;
        }

        .office-loc-addr {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          line-height: 1.4;
          max-width: 340px;
        }

        .office-dir-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          background: rgba(240, 101, 67, 0.12);
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 10px 18px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .office-dir-btn:hover {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 45, 98, 0.25);
        }
      `}</style>

      <div>
        <div className="office-loc-lbl">
          <MapPin size={12} color="#F06543" />
          <span>{displayOffice.label}</span>
        </div>
        <div className="office-loc-title">VISIT US</div>
        <div className="office-loc-addr">{displayOffice.address}</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#627d8a', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <Clock size={11} color="#627d8a" />
          <span>{displayOffice.hours}</span>
        </div>
      </div>

      <a
        href={displayOffice.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="office-dir-btn"
      >
        <span>GET DIRECTIONS</span>
        <ArrowRight size={12} />
      </a>
    </div>
  );
}
