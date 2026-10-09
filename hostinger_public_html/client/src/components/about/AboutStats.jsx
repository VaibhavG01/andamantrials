// src/components/about/AboutStats.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Dynamic Impact Statistics Component for Andaman Trails
// Connected to Global Settings & Dynamic Backend Database Counters.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { Users, MapPin, Sparkles, Award, Compass, TrendingUp } from 'lucide-react';
import { destinationService } from '../../api/destinationService';
import { packageService } from '../../api/packageService';
import { settingService } from '../../api/settingService';

const ICON_MAP = {
  Users,
  MapPin,
  Sparkles,
  Award,
  Compass,
  TrendingUp,
};

const DEFAULT_ABOUT_STATS = [
  {
    id: 'stat-travelers',
    label: 'HAPPY TRAVELERS',
    value: '50,000+',
    icon: 'Users',
    sub: 'Hosted across 40+ countries',
  },
  {
    id: 'stat-destinations',
    label: 'ISLAND DESTINATIONS',
    value: '6+',
    icon: 'MapPin',
    sub: 'Port Blair to Diglipur',
  },
  {
    id: 'stat-experiences',
    label: 'CURATED TRAILS',
    value: '7+',
    icon: 'Sparkles',
    sub: 'Scuba, ferries & resorts',
  },
  {
    id: 'stat-years',
    label: 'YEARS OF EXCELLENCE',
    value: '12+',
    icon: 'Award',
    sub: 'Native island leadership',
  },
];

export default function AboutStats() {
  const [stats, setStats] = useState(DEFAULT_ABOUT_STATS);

  useEffect(() => {
    Promise.allSettled([
      settingService.getSettings().catch(() => null),
      destinationService.getDestinations().catch(() => null),
      packageService.getPackages().catch(() => null),
    ]).then(([settingsRes, destRes, pkgRes]) => {
      const liveSettings = settingsRes.status === 'fulfilled' && settingsRes.value?.data
        ? (settingsRes.value.data.data || settingsRes.value.data)
        : null;

      const liveDestCount = destRes.status === 'fulfilled' && Array.isArray(destRes.value?.data) && destRes.value.data.length > 0
        ? destRes.value.data.length
        : 6;

      const livePkgCount = pkgRes.status === 'fulfilled' && Array.isArray(pkgRes.value?.data) && pkgRes.value.data.length > 0
        ? pkgRes.value.data.length
        : 7;

      setStats([
        {
          id: 'stat-travelers',
          label: liveSettings?.statTravelersLabel || 'HAPPY TRAVELERS',
          value: liveSettings?.statTravelersValue || '50,000+',
          icon: 'Users',
          sub: liveSettings?.statTravelersSub || 'Hosted across 40+ countries',
        },
        {
          id: 'stat-destinations',
          label: liveSettings?.statDestinationsLabel || 'ISLAND DESTINATIONS',
          value: liveSettings?.statDestinationsValue || `${liveDestCount}+`,
          icon: 'MapPin',
          sub: liveSettings?.statDestinationsSub || 'Port Blair to Diglipur',
        },
        {
          id: 'stat-experiences',
          label: liveSettings?.statTrailsLabel || 'CURATED TRAILS',
          value: liveSettings?.statTrailsValue || `${livePkgCount}+`,
          icon: 'Sparkles',
          sub: liveSettings?.statTrailsSub || 'Scuba, ferries & resorts',
        },
        {
          id: 'stat-years',
          label: liveSettings?.statYearsLabel || 'YEARS OF EXCELLENCE',
          value: liveSettings?.statYearsValue || '12+',
          icon: 'Award',
          sub: liveSettings?.statYearsSub || 'Native island leadership',
        },
      ]);
    }).catch(() => {});
  }, []);

  return (
    <section className="about-stats-root" aria-label="Platform Impact Statistics">
      <style>{`
        .about-stats-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .about-stats-grid { grid-template-columns: 1fr; }
        }

        .about-stat-card {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 22px;
          padding: 32px 26px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .about-stat-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 20px 40px rgba(11, 37, 69, 0.1), 0 0 20px rgba(240, 101, 67, 0.1);
        }

        .about-stat-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: #FFF0EB;
          color: #F06543;
          border: 1px solid #FFD3C4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.15);
        }

        .about-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(34px, 3.5vw, 42px);
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .about-stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .about-stat-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748B;
          line-height: 1.5;
          font-weight: 500;
        }
      `}</style>

      <div className="about-stats-grid">
        {stats.map((stat) => {
          const Icon = ICON_MAP[stat.icon] || Award;
          return (
            <div key={stat.id} className="about-stat-card">
              <div className="about-stat-icon-wrap">
                <Icon size={24} />
              </div>
              <div>
                <div className="about-stat-value">
                  {stat.value}
                </div>
                <div className="about-stat-label">
                  {stat.label}
                </div>
                <div className="about-stat-sub">
                  {stat.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
