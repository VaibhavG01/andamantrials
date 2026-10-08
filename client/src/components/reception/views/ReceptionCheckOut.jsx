import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw } from 'lucide-react';

export default function ReceptionCheckOut({ onNavigate }) {
  const [departures, setDepartures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadDepartures = async () => {
    setLoading(true);
    try {
      const res = await apiClient(`/reception/bookings?type=STAY&status=CHECKED_IN&filter=today`);
      setDepartures(res.data || []);
    } catch (e) {
      console.error('Failed to load departures:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDepartures();
  }, []);

  const handleCheckOut = async (id) => {
    if (!window.confirm('Confirm check-out, verify key returns and release room back to inventory?')) return;
    try {
      await apiClient(`/reception/bookings/${id}/check-out`, { method: 'POST' });
      alert('Guest checked out successfully.');
      loadDepartures();
    } catch (err) {
      alert('Check-out failed: ' + err.message);
    }
  };

  const filtered = departures.filter(b => 
    b.bookingNumber.toLowerCase().includes(search.toLowerCase()) ||
    b.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Today's Check-Out Departures</h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Coordinate room checkout surveys and inventory releases.</p>
      </div>

      {/* Search Input bar */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search departures by name or booking ID..."
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
            <span className="text-xs text-slate-500">Updating check-out records...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO OUTSTANDING GUEST CHECK-OUTS REMAINING TODAY
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Booking ID</th>
                  <th className="py-3 font-bold uppercase">Guest</th>
                  <th className="py-3 font-bold uppercase">Property Stay</th>
                  <th className="py-3 font-bold uppercase">Status</th>
                  <th className="py-3 font-bold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(b => (
                  <tr key={b.id} className="border-b border-[#e2e8f0] hover:bg-white/35">
                    <td className="py-3.5 font-bold text-sm text-[#F06543]">{b.bookingNumber}</td>
                    <td className="py-3.5  text-slate-800  font-medium">{b.customerName}</td>
                    <td className="py-3.5 text-slate-500">{b.stay?.name || 'Hotel Stay'}</td>
                    <td className="py-3.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-[rgba(33,230,193,0.1)] text-[#F06543]">
                        Checked-In
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button 
                        onClick={() => handleCheckOut(b.id)}
                        className="px-4 py-1.5 bg-red-500  text-slate-800  font-black text-[10px] uppercase rounded-lg hover:scale-105 transition-transform"
                      >
                        Release & Checkout
                      </button>
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
