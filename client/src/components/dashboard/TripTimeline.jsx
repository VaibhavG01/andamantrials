import React, { useState, useEffect } from 'react';
import {
  Calendar, MapPin, Clock, Ship, Plane, Home,
  Sun, Waves, Sparkles, Camera, Compass, ChevronRight, CheckCircle2, ShoppingBag, ShieldCheck
} from 'lucide-react';
import { apiClient } from '../../api/apiClient';
import { bookingService } from '../../api/bookingService';
import { ITINERARY_DAYS } from '../../data/dashboard/itineraryData';

const ICON_COMPONENTS = {
  Ship, Plane, Home, Sun, Waves, Sparkles, Camera, Compass, ShoppingBag
};

export default function TripTimeline() {
  const [itineraryDays, setItineraryDays] = useState([]);
  const [activeDay, setActiveDay] = useState('');
  const [dateRangeStr, setDateRangeStr] = useState('13-19 Aug');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDynamicItinerary() {
      setLoading(true);
      try {
        // 1. Try to fetch user's real bookings
        const bookingsRes = await bookingService.getMyBookings();
        const bookings = bookingsRes?.data || [];
        const confirmedBookings = bookings.filter(b => b.bookingStatus === 'CONFIRMED' || b.paymentStatus === 'PAID');

        // 2. Try to fetch dynamic package / itinerary data from API
        let apiItineraries = [];
        try {
          const res = await apiClient('/itineraries');
          if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
            apiItineraries = res.data;
          }
        } catch {
          // fallback to dashboard data
        }

        // 3. Build dynamic days
        let days = [];

        if (apiItineraries.length > 0 && apiItineraries[0]?.days?.length > 0) {
          const master = apiItineraries[0];
          days = master.days.map((d, idx) => ({
            day: `DAY ${String(d.dayNumber || idx + 1).padStart(2, '0')}`,
            date: d.title || `Day ${idx + 1} Island Adventure`,
            location: d.location || (idx === 0 || idx >= 4 ? 'Port Blair' : 'Havelock Island'),
            tagline: d.description || 'Pristine beaches, transfers and curated excursions',
            hotel: d.accommodation || (idx === 0 ? 'Sea Shell Port Blair' : idx <= 3 ? 'Taj Exotica Havelock' : 'Fortune Resort Bay Island'),
            events: (d.activities && d.activities.length > 0) ? d.activities.map(a => ({
              id: a.id || `act-${Math.random()}`,
              time: a.timeSlot || a.time || '10:00 AM',
              title: a.title || a.name || 'Island Activity',
              category: a.category || 'ACTIVITY',
              icon: a.icon || 'Waves',
              desc: a.description || 'Curated guided experience.',
              location: a.location || d.location || 'Andaman Islands',
              confirmed: true,
            })) : [
              { id: `ev-${idx}-1`, time: '09:30 AM', title: 'Private AC SUV Transfer', category: 'TRANSFER', icon: 'Plane', desc: 'Air-conditioned vehicle with dedicated driver.', confirmed: true },
              { id: `ev-${idx}-2`, time: '03:30 PM', title: d.title || 'Beach & Sunset Sightseeing', category: 'ACTIVITY', icon: 'Sun', desc: d.description || 'Guided island tour.', confirmed: true }
            ]
          }));
        } else {
          // High fidelity comprehensive 7-day Andaman master itinerary
          days = ITINERARY_DAYS.map((d, idx) => ({
            day: d.day || `DAY ${String(idx + 1).padStart(2, '0')}`,
            date: d.title || 'Island Discovery',
            location: d.location || 'Port Blair',
            tagline: d.events?.[0]?.desc || 'Tropical beaches and private transfers',
            hotel: d.hotel || 'Luxury Beachside Resort',
            events: (d.events || []).map((ev, eIdx) => ({
              id: `ev-${idx}-${eIdx}`,
              time: ev.time || '10:00 AM',
              title: ev.title,
              category: (ev.type || 'ACTIVITY').toUpperCase(),
              icon: ev.icon || 'Compass',
              desc: ev.desc || 'Scheduled island excursion.',
              location: d.location,
              confirmed: true,
            }))
          }));
        }

        // 4. Inject real confirmed user bookings into the active itinerary
        if (confirmedBookings.length > 0) {
          confirmedBookings.forEach((bk, bIdx) => {
            const dayTargetIdx = Math.min(bIdx, days.length - 1);
            if (days[dayTargetIdx]) {
              const bookingTitle = bk.activity?.name || bk.serviceName || bk.package?.name || bk.ferry?.name || `${bk.bookingType} Pass`;
              const bookingTime = bk.slotStartTime || '09:30 AM';
              
              // Prepend real confirmed booking to that day's events
              days[dayTargetIdx].events.unshift({
                id: `real-${bk.bookingNumber || bIdx}`,
                time: bookingTime,
                title: `${bookingTitle} (Ref: ${bk.bookingNumber})`,
                category: bk.bookingType || 'CONFIRMED PASS',
                icon: bk.bookingType === 'FERRY' ? 'Ship' : bk.bookingType === 'STAY' ? 'Home' : 'Waves',
                desc: `Live confirmed booking for ${bk.totalGuests || 1} guest(s). Status: PAID & ISSUED.`,
                location: bk.activityLocation?.locationName || days[dayTargetIdx].location,
                confirmed: true,
                isRealBooking: true
              });
            }
          });

          // Set dynamic date range from first booking if available
          const firstDate = confirmedBookings[0]?.activityDate || confirmedBookings[0]?.bookingDate;
          if (firstDate) {
            try {
              const d1 = new Date(firstDate);
              const d2 = new Date(d1);
              d2.setDate(d1.getDate() + (days.length - 1));
              const m1 = d1.toLocaleDateString('en-US', { month: 'short' });
              const m2 = d2.toLocaleDateString('en-US', { month: 'short' });
              setDateRangeStr(m1 === m2 ? `${d1.getDate()}-${d2.getDate()} ${m1}` : `${d1.getDate()} ${m1} - ${d2.getDate()} ${m2}`);
            } catch {
              setDateRangeStr('13-19 Aug');
            }
          }
        }

        setItineraryDays(days);
        setActiveDay(days[0]?.day || 'DAY 01');
      } catch (err) {
        console.error('Failed to load dynamic timeline:', err);
      } finally {
        setLoading(false);
      }
    }

    loadDynamicItinerary();
  }, []);

  return (
    <div className="dash-timeline-card">
      <style>{`
        .dash-timeline-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 32px 32px;
          margin-bottom: 28px;
          box-shadow: 0 10px 30px -5px rgba(11, 37, 69, 0.05);
        }
        @media (max-width: 640px) {
          .dash-timeline-card { padding: 20px 16px; border-radius: 20px; }
        }

        .dash-tl-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 14px;
        }
        .dash-tl-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 4px;
        }
        .dash-tl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.2vw, 34px); font-weight: 700;
          color: #0B2545; margin: 0; line-height: 1.1;
        }

        /* Day Selector Tabs */
        .dash-tl-day-tabs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 12px;
          margin-bottom: 24px;
          border-bottom: 1.5px solid #f1f5f9;
        }
        .dash-tl-day-tabs::-webkit-scrollbar { display: none; }

        .dash-tl-day-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 10px 18px; border-radius: 16px;
          cursor: pointer; flex-shrink: 0;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b; transition: all 0.25s ease;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
        }
        .dash-tl-day-btn:hover {
          color: #F06543; border-color: #fdba74; background: #fff7ed;
        }
        .dash-tl-day-btn.active {
          background: #FFF1EE;
          border-color: #F06543; color: #F06543;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.25);
        }

        /* Day Main Box */
        .dash-tl-day-content {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px; padding: 26px 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        @media (max-width: 640px) {
          .dash-tl-day-content { padding: 18px 16px; }
        }

        .dash-tl-day-hdr {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px; margin-bottom: 22px;
          padding-bottom: 18px; border-bottom: 1.5px solid #f1f5f9;
        }

        /* Timeline Items List */
        .dash-tl-events-list {
          position: relative;
          display: flex; flex-direction: column; gap: 16px;
          padding-left: 28px;
        }
        .dash-tl-events-list::before {
          content: '';
          position: absolute; left: 8px; top: 12px; bottom: 12px;
          width: 2px;
          background: linear-gradient(180deg, #FF6B4A, #F06543);
          border-radius: 2px;
        }

        .dash-tl-event-item {
          position: relative;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px; padding: 16px 20px;
          transition: all 0.25s ease;
        }
        .dash-tl-event-item:hover {
          border-color: #fdba74;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          transform: translateX(4px);
        }

        .dash-tl-node-dot {
          position: absolute; left: -28px; top: 20px;
          width: 14px; height: 14px; border-radius: 50%;
          background: #ffffff; border: 2.5px solid #F06543;
          box-shadow: 0 0 10px rgba(240, 101, 67, 0.4);
          transform: translateX(-50%);
        }

        .dash-tl-time-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #F06543;
          display: inline-flex; align-items: center; gap: 6px;
          margin-bottom: 4px;
        }
        .dash-tl-event-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 800; color: #0B2545;
          margin-bottom: 4px;
        }
        .dash-tl-event-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-tl-header">
        <div>
          <div className="dash-tl-sub">
            <Sparkles size={13} color="#F06543" />
            <span>DAY-BY-DAY ITINERARY</span>
          </div>
          <h3 className="dash-tl-title">Your Island Journey</h3>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#334155',
          background: '#f8fafc', padding: '8px 16px', borderRadius: 20,
          border: '1.5px solid #e2e8f0',
        }}>
          <Calendar size={14} color="#F06543" />
          <span>{itineraryDays.length} Days Total • {dateRangeStr}</span>
        </div>
      </div>

      {/* DAY TABS */}
      <div className="dash-tl-day-tabs">
        {itineraryDays.map((d) => {
          const locWord = (d.location || 'Port').split(' ')[0].replace(/[^a-zA-Z]/g, '');
          return (
            <button
              key={d.day}
              className={`dash-tl-day-btn${activeDay === d.day ? ' active' : ''}`}
              onClick={() => setActiveDay(d.day)}
            >
              <span>{d.day}</span>
              <span style={{ fontSize: 11, opacity: 0.85, fontWeight: 700 }}>{locWord || 'Port'}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE DAY DETAILS */}
      {(() => {
        const dayData = itineraryDays.find((d) => d.day === activeDay) || itineraryDays[0];
        if (!dayData) {
          return (
            <div style={{ padding: 30, textAlign: 'center', color: '#64748b', fontSize: 13 }}>
              Loading daily island itinerary...
            </div>
          );
        }

        return (
          <div className="dash-tl-day-content">
            <div className="dash-tl-day-hdr">
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#F06543', letterSpacing: '0.04em' }}>
                  {dayData.day} • {dayData.date}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748b', marginTop: 4, lineHeight: 1.5, maxWidth: 620 }}>
                  {dayData.tagline || dayData.date}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545',
                  background: '#f1f5f9', padding: '6px 12px', borderRadius: 12,
                  border: '1px solid #e2e8f0',
                }}>
                  <MapPin size={13} color="#F06543" />
                  <span>{dayData.location}</span>
                </div>

                {dayData.hotel && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#059669',
                    background: '#ecfdf5', padding: '6px 12px', borderRadius: 12,
                    border: '1px solid #a7f3d0',
                  }}>
                    <Home size={13} color="#059669" />
                    <span>{dayData.hotel}</span>
                  </div>
                )}
              </div>
            </div>

            {/* EVENTS TIMELINE */}
            <div className="dash-tl-events-list">
              {(dayData.events || []).map((ev, i) => {
                const IconComp = ICON_COMPONENTS[ev.icon] || Compass;
                return (
                  <div 
                    key={i} 
                    className="dash-tl-event-item"
                    style={{
                      borderLeftColor: ev.isRealBooking ? '#10b981' : undefined,
                      borderLeftWidth: ev.isRealBooking ? '3px' : undefined
                    }}
                  >
                    <div className="dash-tl-node-dot" />
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                      <div className="dash-tl-time-badge">
                        <Clock size={12} color="#F06543" />
                        <span>{ev.time}</span>
                        <span style={{ color: '#cbd5e1', margin: '0 4px' }}>•</span>
                        <span style={{ 
                          background: ev.category === 'FERRY' ? '#e0f2fe' : ev.category === 'TRANSFER' ? '#f1f5f9' : '#fff1ee',
                          color: ev.category === 'FERRY' ? '#0284c7' : ev.category === 'TRANSFER' ? '#475569' : '#F06543',
                          fontSize: 10.5,
                          fontWeight: 900,
                          padding: '2px 8px',
                          borderRadius: 6,
                          letterSpacing: '0.04em'
                        }}>
                          {ev.category || 'ACTIVITY'}
                        </span>
                      </div>

                      {ev.isRealBooking && (
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#059669', background: '#ecfdf5', padding: '2px 8px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <CheckCircle2 size={11} /> Confirmed Voucher
                        </span>
                      )}
                    </div>

                    <div className="dash-tl-event-title">{ev.title}</div>
                    <div className="dash-tl-event-desc">{ev.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

