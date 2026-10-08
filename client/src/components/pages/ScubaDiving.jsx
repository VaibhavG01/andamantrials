import React, { useState, useEffect } from 'react';
import { Anchor, Compass, ShieldCheck, Map, Fish, Info, ChevronRight, Droplets, Clock, Waves, Eye, ArrowRight } from 'lucide-react';
import { activityService } from '../../api/activityService';

const DIVE_SITES = [
  { name: 'Tribe Gate', depth: '12m - 16m', level: 'Beginner', desc: 'A submerged seamount with vibrant coral life.' },
  { name: 'Lighthouse', depth: '10m - 20m', level: 'All Levels', desc: 'Famous for night dives and large barrel sponges.' },
  { name: "Dixon's Pinnacle", depth: '18m - 30m', level: 'Advanced', desc: 'Three pinnacles covered in glass fish and barracudas.' },
  { name: 'Johnny\'s Gorge', depth: '25m - 30m', level: 'Advanced', desc: 'High chance of spotting sharks, rays, and huge schools.' }
];

export default function ScubaDiving() {
  const [divingActivities, setDivingActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activityService.getActivities()
      .then(data => {
        if (data && Array.isArray(data)) {
          const diving = data.filter(a => 
            (a.category && (a.category.toLowerCase().includes('scuba') || a.category.toLowerCase().includes('dive') || a.category.toLowerCase().includes('sea walk') || a.category.toLowerCase().includes('snorkeling'))) ||
            (a.name && (a.name.toLowerCase().includes('diving') || a.name.toLowerCase().includes('sea walk') || a.name.toLowerCase().includes('snorkeling')))
          );
          setDivingActivities(diving.length > 0 ? diving : data.slice(0, 6));
        }
      })
      .catch(err => console.error('Failed to load diving activities from DB:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleBook = (slug) => {
    window.history.pushState({}, '', `/activities/${slug}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#0B2545] pt-20 sm:pt-24 pb-16 font-sans selection:bg-[#F06543] selection:text-white">
      
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden mb-12 sm:mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Scuba Diving Andaman" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/85 via-[#0B2545]/75 to-[#0B2545]/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight">
            Dive the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] to-[#F06543]">Andaman Sea</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 drop-shadow-md max-w-3xl mx-auto font-semibold">
            Crystal clear waters, vibrant coral reefs, and world-class PADI certified dive centers.
          </p>
          <button className="bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white hover:shadow-[0_0_30px_rgba(240,101,67,0.4)] px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-black text-base sm:text-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 mt-4 shadow-lg cursor-pointer">
            Book Dive Slot <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20 sm:space-y-32">
        
        {/* Courses Section */}
        <div>
          <div className="text-center mb-10 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545]">Certified Diving & Sea Experiences</h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
              Real-time available dive slots, certified PADI instructors, and photo/video inclusions across Havelock & Port Blair.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {loading ? (
              [1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} className="p-7 rounded-3xl bg-white border-2 border-[#ebded2] animate-pulse h-80" />
              ))
            ) : divingActivities.map((act, idx) => (
              <div
                key={`${act.id || 'act'}-${idx}`}
                onClick={() => handleBook(act.slug)}
                className="bg-[#ffffff] border-2 border-[#ebded2] p-7 sm:p-8 rounded-3xl hover:border-[#F06543] hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col shadow-md cursor-pointer justify-between"
              >
                <div className="absolute -right-8 -top-8 text-slate-100 group-hover:text-[#FFF0EB] group-hover:scale-110 transition-all duration-700 transform rotate-12 pointer-events-none">
                  <Anchor size={200} />
                </div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  {act.image && (
                    <div className="h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 relative">
                      <img src={act.image} alt={act.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#0B2545] shadow-sm">
                        {act.category || 'SCUBA & SNORKELING'}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2545] mb-1.5 font-serif group-hover:text-[#F06543] transition-colors">{act.name}</h3>
                  <p className="text-[#F06543] text-xs sm:text-sm font-black uppercase tracking-wider mb-2">
                    {act.locations && act.locations.length > 0 ? act.locations.map(l => l.locationName.split(' ')[0]).join(' • ') : (act.location || 'Port Blair & Havelock')}
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-700 text-xs font-bold mb-4 bg-[#FAF4EE] w-max px-3.5 py-1.5 rounded-xl border border-[#ebded2]">
                    <Clock size={14} className="text-[#F06543]" /> {act.duration || '45-60 Mins'}
                  </div>
                  
                  <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed flex-1 font-medium line-clamp-2">
                    {act.overview || act.tagline || 'Experience world-class coral reefs and exotic marine life with certified instructors.'}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t-2 border-[#ebded2] mt-auto">
                    <span className="text-2xl font-mono font-black text-[#0B2545]">₹{Number(act.price).toLocaleString()}</span>
                    <button className="w-11 h-11 rounded-2xl bg-gradient-to-r from-[#FF6B4A] to-[#F06543] flex items-center justify-center text-white group-hover:scale-105 transition-all cursor-pointer shadow-md">
                      <ChevronRight size={22} className="stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dive Sites Map & Rental */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Dive Sites */}
          <div className="bg-[#ffffff] border-2 border-[#ebded2] p-7 sm:p-10 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-[#FFF0EB] rounded-2xl border-2 border-[#FFD3C4]">
                <Map className="text-[#F06543]" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] font-serif">Iconic Dive Sites</h2>
            </div>
            
            <div className="space-y-4">
              {DIVE_SITES.map((site, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-5 group p-4.5 rounded-2xl hover:bg-[#FAF4EE] transition-all border-2 border-slate-100 hover:border-[#ebded2]">
                  <div className="mt-1 shrink-0 p-2 bg-[#FFF0EB] rounded-xl border border-[#FFD3C4]">
                    <Fish className="text-[#F06543]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-[#0B2545] group-hover:text-[#F06543] transition-colors mb-1.5">{site.name}</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-xs mb-2.5">
                      <span className="text-slate-800 font-bold bg-[#FAF4EE] px-3 py-1 rounded-lg border border-[#ebded2]">Depth: {site.depth}</span>
                      <span className="text-slate-800 font-bold bg-[#FAF4EE] px-3 py-1 rounded-lg border border-[#ebded2]">Level: {site.level}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">{site.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Rental */}
          <div className="bg-[#ffffff] border-2 border-[#ebded2] p-7 sm:p-10 rounded-3xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 bg-[#FFF0EB] rounded-2xl border-2 border-[#FFD3C4]">
                  <Info className="text-[#F06543]" size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] font-serif">Equipment Rental</h2>
              </div>
              
              <p className="text-slate-700 text-xs sm:text-sm mb-8 leading-relaxed font-medium">
                We provide high-quality, well-maintained Scubapro and Aqualung gear. Full equipment rental is included in all DSD and Open Water courses.
              </p>
              
              <div className="space-y-3.5">
                {[
                  { name: "Full Scuba Set (BCD, Reg, Wetsuit, Fins, Mask)", price: "₹1,500 / day" },
                  { name: "Dive Computer", price: "₹500 / day" },
                  { name: "Underwater Camera (GoPro Hero 11)", price: "₹1,500 / dive" },
                  { name: "Enriched Air Nitrox Fill", price: "₹400 / tank" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-[#FAF4EE] p-4 rounded-2xl border-2 border-[#ebded2]">
                    <span className="text-slate-800 font-bold text-xs sm:text-sm pr-4">{item.name}</span>
                    <span className="font-mono font-black text-[#0B2545] text-xs sm:text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 space-y-5">
              <p className="text-xs text-slate-500 italic font-medium">
                * All certified divers must present their certification card and logbook before renting gear.
              </p>
              <button className="w-full bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white hover:scale-[1.02] font-black text-xs sm:text-sm uppercase tracking-wider py-4 rounded-2xl transition-all cursor-pointer shadow-lg hover:shadow-xl">
                Contact Dive Center
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
