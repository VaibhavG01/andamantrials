import React, { useState, useEffect } from 'react';
import { Waves, Anchor, Ship, Info, ArrowRight, ShieldCheck, Clock, Navigation, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { activityService } from '../../api/activityService';

const WaterSports = () => {
  const [activeTab, setActiveTab] = useState('activities');
  const [activitiesList, setActivitiesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activityService.getActivities()
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setActivitiesList(data);
        }
      })
      .catch(err => console.error('Failed to load activities from DB:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleBook = (slug) => {
    window.history.pushState({}, '', `/activities/${slug}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#0B2545] p-4 sm:p-6 lg:p-12 pt-24 lg:pt-32 font-sans selection:bg-[#F06543] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B2545]">
            Lagoon & Sea Adventures
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Dive into the crystal-clear waters of the Andamans. Experience world-class marine life, pristine coral reefs, and thrilling adventures.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
          {['activities', 'packages', 'safety', 'booking'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 capitalize cursor-pointer border-2 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-slate-700 border-[#ebded2] hover:border-[#F06543] hover:bg-[#FAF4EE]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-8 animate-in fade-in duration-500">
          
          {activeTab === 'activities' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {loading ? (
                [1, 2, 3, 4, 5, 6].map(n => (
                  <div key={n} className="p-7 rounded-3xl bg-white border-2 border-[#ebded2] animate-pulse h-80" />
                ))
              ) : activitiesList.map((activity) => (
                <div
                  key={activity.id}
                  onClick={() => handleBook(activity.slug)}
                  className="p-7 sm:p-8 rounded-3xl bg-[#ffffff] border-2 border-[#ebded2] shadow-md hover:shadow-2xl hover:border-[#F06543] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer justify-between"
                >
                  <div>
                    {activity.image && (
                      <div className="h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 relative">
                        <img src={activity.image} alt={activity.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#0B2545] shadow-sm">
                          {activity.category || 'WATER SPORTS'}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-black mb-2 text-[#0B2545] leading-tight group-hover:text-[#F06543] transition-colors">
                      {activity.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed font-medium line-clamp-2">
                      {activity.overview || activity.tagline || 'Experience adrenaline thrills across turquoise Andaman waters.'}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-[#ebded2]">
                    <div className="flex items-center space-x-2 text-slate-700 bg-[#FAF4EE] px-3 py-1.5 rounded-xl border border-[#ebded2] font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#F06543]" />
                      <span className="text-xs font-bold">{activity.duration || '45 Mins'}</span>
                    </div>
                    <span className="text-xl font-mono font-black text-[#F06543]">₹{Number(activity.price).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'packages' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-10 max-w-5xl mx-auto">
              {[
                { title: "Ultimate Adrenaline", price: "₹6,999", items: ["Scuba Diving", "Jet Ski", "Banana Boat", "Parasailing"] },
                { title: "Family Explorer", price: "₹3,499", items: ["Glass Bottom Boat", "Snorkeling", "Sea Walk", "Light Refreshments"] }
              ].map((pkg, idx) => (
                <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ebded2] shadow-lg relative overflow-hidden group hover:border-[#F06543] transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2 text-[#0B2545] font-serif">{pkg.title}</h3>
                    <div className="text-3xl sm:text-4xl font-mono font-black text-[#F06543] mb-8">{pkg.price}</div>
                    
                    <ul className="space-y-4 mb-10">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-slate-700 text-sm sm:text-base font-bold">
                          <CheckCircle2 className="w-5 h-5 text-[#F06543] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white font-black text-sm uppercase tracking-wider hover:shadow-xl hover:scale-[1.02] transition-all shadow-lg cursor-pointer">
                    Book Package
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="p-7 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ebded2] max-w-4xl mx-auto shadow-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <div className="p-4 bg-[#FFF0EB] rounded-2xl border-2 border-[#FFD3C4]">
                  <ShieldCheck className="w-8 h-8 text-[#F06543]" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2545] font-serif">Safety & Eligibility</h2>
              </div>
              
              <div className="space-y-8 text-slate-700">
                <p className="text-sm sm:text-base leading-relaxed font-medium">
                  Your safety is our top priority. All our activities are conducted under the strict supervision of PADI/SSI certified instructors with top-of-the-line equipment.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="p-6 bg-[#FAF4EE] rounded-2xl border-2 border-[#ebded2]">
                    <h4 className="text-lg font-black text-[#0B2545] mb-4 uppercase tracking-wider">Age Restrictions</h4>
                    <ul className="space-y-3 text-xs sm:text-sm font-semibold">
                      <li className="flex justify-between border-b border-[#ebded2] pb-2"><span className="text-slate-600">Scuba Diving:</span> <span className="font-black text-[#0B2545]">10+ years</span></li>
                      <li className="flex justify-between border-b border-[#ebded2] pb-2"><span className="text-slate-600">Sea Walk:</span> <span className="font-black text-[#0B2545]">7 - 60 years</span></li>
                      <li className="flex justify-between border-b border-[#ebded2] pb-2"><span className="text-slate-600">Jet Ski:</span> <span className="font-black text-[#0B2545]">10+ yrs (w/ adult)</span></li>
                      <li className="flex justify-between pb-2"><span className="text-slate-600">Glass Bottom:</span> <span className="font-black text-[#0B2545]">All ages</span></li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-[#FAF4EE] rounded-2xl border-2 border-[#ebded2]">
                    <h4 className="text-lg font-black text-[#0B2545] mb-4 uppercase tracking-wider">Medical Conditions</h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                      Activities like Scuba and Sea Walk are not recommended for pregnant women, asthma patients, or those with severe heart conditions. A basic medical declaration form must be signed prior to underwater activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'booking' && (
            <div className="p-7 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ebded2] max-w-3xl mx-auto shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center mb-8 text-[#0B2545] font-serif">Secure Your Spot</h2>
              
              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-[#0B2545]">Full Name</label>
                    <input type="text" className="w-full bg-[#FAF4EE] border-2 border-[#ebded2] rounded-2xl p-4 text-[#0B2545] font-semibold text-xs focus:outline-none focus:border-[#F06543] focus:bg-white transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-[#0B2545]">Email Address</label>
                    <input type="email" className="w-full bg-[#FAF4EE] border-2 border-[#ebded2] rounded-2xl p-4 text-[#0B2545] font-semibold text-xs focus:outline-none focus:border-[#F06543] focus:bg-white transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#0B2545]">Select Adventure</label>
                  <select className="w-full bg-[#FAF4EE] border-2 border-[#ebded2] rounded-2xl p-4 text-[#0B2545] font-bold text-xs focus:outline-none focus:border-[#F06543] focus:bg-white transition-all">
                    <option>Scuba Diving</option>
                    <option>Bioluminescent Kayaking</option>
                    <option>Combo Package - Ultimate</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-[#0B2545]">Date</label>
                    <input type="date" className="w-full bg-[#FAF4EE] border-2 border-[#ebded2] rounded-2xl p-4 text-[#0B2545] font-bold text-xs focus:outline-none focus:border-[#F06543] focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-[#0B2545]">Guests</label>
                    <input type="number" min="1" className="w-full bg-[#FAF4EE] border-2 border-[#ebded2] rounded-2xl p-4 text-[#0B2545] font-bold text-xs focus:outline-none focus:border-[#F06543] focus:bg-white transition-all" defaultValue="2" />
                  </div>
                </div>
                
                <button type="button" className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white font-black text-xs uppercase tracking-wider hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 mt-4 cursor-pointer shadow-lg">
                  <span>Confirm Booking</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaterSports;
