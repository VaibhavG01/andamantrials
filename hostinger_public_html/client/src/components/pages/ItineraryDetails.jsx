import React, { useState, useEffect, useRef } from 'react';
import { Compass, Calendar, MapPin, Check, Coffee, Home, Ship, Clock, AlertCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import FooterBottom from '../FooterBottom';
import { apiClient } from '../../api/apiClient';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ItineraryDetails() {
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id') || queryParams.get('slug') || 'andaman-explorer';
        
        const res = await apiClient(`/itineraries/${id}`);
        if (res && res.data) {
          setItinerary(res.data);
        } else {
          throw new Error('No itinerary details returned');
        }
      } catch (err) {
        console.error('Failed to load itinerary:', err);
        setError('Unable to load travel schedule. Please verify the URL or try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchItinerary();
  }, []);

  useEffect(() => {
    if (!itinerary || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const dayCards = containerRef.current.querySelectorAll('.itin-day-card');
      dayCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [itinerary]);

  if (loading) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc] text-[#F06543]">
        <div className="w-11 h-11 rounded-full border-3 border-[rgba(22,217,255,0.2)] border-t-[#F06543] animate-spin mb-4" />
        <span className="font-mono text-xs font-black tracking-widest text-slate-500">
          LOADING TRAVEL ITINERARY...
        </span>
      </div>
    );
  }

  if (error || !itinerary) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc]  text-slate-800  p-6 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-[#ff4f7b] animate-pulse" />
        <h3 className="text-2xl font-bold font-serif text-[#F06543] uppercase">Itinerary Not Found</h3>
        <p className="text-xs text-slate-500 max-w-sm">{error || "This travel package schedule is currently unavailable."}</p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="itinerary-details-page">
      <style>{`
        .itinerary-details-page {
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
          padding-top: 100px;
        }

        /* ── BLUEPRINT HERO HEADER ── */
        .itin-hero {
          max-width: 1340px; margin: 0 auto 40px; padding: 40px 24px; text-align: center;
          position: relative;
        }

        .itin-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.15em;
          color: #F06543; background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 16px; border-radius: 30px; margin-bottom: 24px;
        }

        .itin-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.2vw, 60px);
          font-weight: 600; color: #0B2545;
          line-height: 1.15; margin: 0 auto 16px;
          text-transform: uppercase;
        }

        /* ── TIMELINE GLASS BLOCK ── */
        .itin-day-card {
          background: #ffffff;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          transition: border-color 0.3s ease;
        }
        .itin-day-card:hover {
          border-color: rgba(33, 230, 193, 0.4);
        }

        /* Specs outline chips */
        .spec-glass-chip {
          display: flex; align-items: center; gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 10px 16px; border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #334155;
        }
      `}</style>

      {/* ── CINEMATIC HEADER ── */}
      <section className="itin-hero">
        <div className="itin-breadcrumb">
          <span onClick={() => { window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('popstate')); }} className="cursor-pointer hover:underline text-slate-500">Home</span>
          <ChevronRight className="w-3 h-3 text-[#F06543]" />
          <span className="text-[#F06543]">Travel Blueprint</span>
        </div>

        <h1 className="itin-title max-w-4xl">
          {itinerary.title}
        </h1>

        <div className="flex justify-center items-center gap-6 mt-4 font-mono text-xs font-bold uppercase tracking-widest text-[#F06543]">
          <span>{itinerary.duration}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span className="text-slate-500">100% Customized Route</span>
        </div>

        <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed mt-6">
          {itinerary.description || "Follow our dynamic day-by-day luxury travel plan covering island highlights, transport, meals, and PADI scuba certifications."}
        </p>
      </section>

      {/* ── DAY-BY-DAY LIST ── */}
      <section ref={containerRef} className="max-w-[1340px] mx-auto px-6 pb-24 space-y-12">
        {itinerary.days.map((dayData, idx) => (
          <div 
            key={dayData.id || idx} 
            className="itin-day-block itin-day-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative"
          >
            {/* LEFT: Day Indicator & Visual */}
            <div className="itin-day-visual lg:col-span-5 space-y-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-[#9cb3bd] leading-none font-mono">
                  DAY {String(dayData.day).padStart(2, '0')}
                </span>
                <span className="px-3.5 py-1 rounded bg-[#F06543]/10 border border-[#F06543]/30 text-[#F06543] text-[10px] font-black uppercase font-mono">
                  {dayData.location}
                </span>
              </div>
              
              {dayData.date && (
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#F06543]" />
                  <span>Scheduled Date: {dayData.date}</span>
                </div>
              )}

              {dayData.image && (
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#e2e8f0] shadow-xl group">
                  <img 
                    src={dayData.image} 
                    alt={dayData.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b11]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
            </div>

            {/* RIGHT: Detailed events & specifications */}
            <div className="itin-day-details lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold  text-[#0B2545]  font-serif uppercase tracking-tight">
                  {dayData.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3.5 font-normal">
                  {dayData.description}
                </p>
              </div>

              {/* Day specifications row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-[#e2e8f0] py-4">
                <div>
                  <span className="block text-[9px] uppercase font-bold text-slate-500 tracking-widest font-mono mb-1.5">STAY</span>
                  <div className="spec-glass-chip">
                    <Home className="w-4 h-4 text-[#F06543] flex-shrink-0" />
                    <span className="truncate">{dayData.accommodation || 'Not Included'}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-slate-500 tracking-widest font-mono mb-1.5">TRANSPORT</span>
                  <div className="spec-glass-chip">
                    <Ship className="w-4 h-4 text-[#F06543] flex-shrink-0" />
                    <span className="truncate">{dayData.transport || 'Not Included'}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-slate-500 tracking-widest font-mono mb-1.5">MEALS</span>
                  <div className="spec-glass-chip">
                    <Coffee className="w-4 h-4 text-[orange] flex-shrink-0" />
                    <span className="truncate">
                      {dayData.meals && dayData.meals.length > 0 ? dayData.meals.join(' + ') : 'None'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Day Activities list */}
              {dayData.activities && dayData.activities.length > 0 && (
                <div className="space-y-3 font-mono">
                  <span className="block text-[10px] uppercase font-black text-[#F06543] tracking-widest">ACTIVITIES HIGHLIGHTS</span>
                  <div className="space-y-2.5 font-sans">
                    {dayData.activities.map((act, actIdx) => (
                      <div 
                        key={act.id || actIdx} 
                        className="bg-[#e2e8f0] border border-[#e2e8f0] rounded-xl p-4 flex items-start gap-3 hover:border-[#e2e8f0] transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#F06543]/10 border border-[#F06543]/35 flex items-center justify-center text-[#F06543] text-[10px] font-black flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start gap-4">
                            <span className="text-xs font-bold  text-[#0B2545]  font-mono uppercase tracking-wide">{act.activity}</span>
                            {act.time && (
                              <span className="text-[9px] font-bold text-slate-500 bg-[#f8fafc] px-2.5 py-1 rounded flex items-center gap-1 font-mono border border-[#e2e8f0]">
                                <Clock className="w-3 h-3 text-[#F06543]" />
                                {act.time} {act.duration && `(${act.duration})`}
                              </span>
                            )}
                          </div>
                          {act.description && (
                            <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{act.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <FooterBottom />
    </div>
  );
}
