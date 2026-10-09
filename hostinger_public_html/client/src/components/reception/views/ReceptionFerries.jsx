import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw, Waves } from 'lucide-react';

export default function ReceptionFerries({ onNavigate }) {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadSchedules = async () => {
    setLoading(true);
    try {
      const res = await apiClient('/reception/ferries/availability');
      setSchedules(res.data || []);
    } catch (e) {
      console.error('Failed to load ferries:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSchedules();
  }, []);

  const filtered = schedules.filter(s => 
    s.ferry?.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.departureTime?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight flex items-center gap-2">
          <Waves className="w-6 h-6 text-[#F06543]" />
          Today's Ferry Schedules
        </h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Monitor island transit vessel lines timing and available seats inventory.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search ferries or times..."
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
            <span className="text-xs text-slate-500">Updating ferry inventory schedules...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO ACTIVE FERRY SCHEDULES ON TODAY'S MANIFEST
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Travel Date</th>
                  <th className="py-3 font-bold uppercase">Ferry Vessel</th>
                  <th className="py-3 font-bold uppercase">Departure Time</th>
                  <th className="py-3 font-bold uppercase">Seat Rate Price</th>
                  <th className="py-3 font-bold uppercase">Available Seats</th>
                  <th className="py-3 font-bold uppercase text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => (
                  <tr key={s.id} className="border-b border-[#e2e8f0] hover:bg-white/35">
                    <td className="py-3.5  text-slate-800  font-medium">{s.travelDate}</td>
                    <td className="py-3.5  text-[#0B2545]  font-extrabold text-sm">{s.ferry?.name || 'Ferry Vessel'}</td>
                    <td className="py-3.5 text-slate-300 font-semibold">{s.departureTime}</td>
                    <td className="py-3.5  text-[#0B2545]  font-bold">₹{s.price}</td>
                    <td className="py-3.5">
                      <span className={`font-bold ${s.availableSeats < 20 ? 'text-red-400' : 'text-[#F06543]'}`}>
                        {s.availableSeats} seats left
                      </span>
                    </td>
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
