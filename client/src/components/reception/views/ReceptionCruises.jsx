import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw, Ship } from 'lucide-react';

export default function ReceptionCruises({ onNavigate }) {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadSchedules = async () => {
    setLoading(true);
    try {
      const res = await apiClient('/reception/cruises/availability');
      setSchedules(res.data || []);
    } catch (e) {
      console.error('Failed to load cruises:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSchedules();
  }, []);

  const filtered = schedules.filter(s => 
    s.cruise?.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.departureTime?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight flex items-center gap-2">
          <Ship className="w-6 h-6 text-[#F06543]" />
          Cruise Tour Schedules
        </h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Monitor sunset sail and catamaran charter schedules availability.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cruises or times..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2.5 pl-9 pr-4 text-xs  text-slate-800  placeholder-slate-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-4 h-4" />
        </div>
      </div>

      {/* List */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Updating cruise manifest details...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO ACTIVE CRUISE CHARTERS SCHEDULED ON TODAY'S MANIFEST
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Date</th>
                  <th className="py-3 font-bold uppercase">Cruise Liner</th>
                  <th className="py-3 font-bold uppercase">Departure Time</th>
                  <th className="py-3 font-bold uppercase">Charter Price</th>
                  <th className="py-3 font-bold uppercase">Available Seats</th>
                  <th className="py-3 font-bold uppercase text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => (
                  <tr key={s.id} className="border-b border-[#e2e8f0] hover:bg-white/35">
                    <td className="py-3.5  text-slate-800  font-medium">{s.date}</td>
                    <td className="py-3.5  text-[#0B2545]  font-extrabold text-sm">{s.cruise?.name || 'Cruise Liner'}</td>
                    <td className="py-3.5 text-slate-300 font-semibold">{s.departureTime}</td>
                    <td className="py-3.5  text-[#0B2545]  font-bold">₹{Number(s.price).toLocaleString('en-IN')}</td>
                    <td className="py-3.5 font-bold text-[#F06543]">{s.availableSeats} seats left</td>
                    <td className="py-3.5 text-right">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-[rgba(33,230,193,0.1)] text-[#F06543]">
                        {s.status || 'SCHEDULED'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
