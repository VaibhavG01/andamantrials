import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw, Hotel } from 'lucide-react';

export default function ReceptionStays({ onNavigate }) {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadStays = async () => {
    setLoading(true);
    try {
      const res = await apiClient('/reception/stays/availability');
      setStays(res.data || []);
    } catch (e) {
      console.error('Failed to load stays:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStays();
  }, []);

  const filtered = stays.filter(s => 
    s.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.type?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight flex items-center gap-2">
          <Hotel className="w-6 h-6 text-[#F06543]" />
          Stay Room Availability
        </h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Monitor real-time room occupancies, reservations and checkouts.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search hotels or stays by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2.5 pl-9 pr-4 text-xs  text-slate-800  placeholder-slate-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-4 h-4" />
        </div>
      </div>

      {/* Stays List */}
      <div className="space-y-6">
        {loading ? (
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-20 text-center flex flex-col items-center justify-center gap-3 rounded-2xl">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Syncing hotel vacancy rates...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-20 text-center text-xs text-slate-500 border-dashed rounded-2xl">
            NO RESORT PROPERTY STAYS FOUND IN DATABASE
          </div>
        ) : (
          filtered.map(stay => (
            <div key={stay.id} className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-4">
              
              <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-extrabold  text-[#0B2545] ">{stay.name}</h3>
                  <span className="text-[10px] text-[#F06543] font-bold uppercase tracking-wider">{stay.type}</span>
                </div>
                <span className="text-xs text-slate-500">Rating: <span className="font-bold  text-[#0B2545] ">⭐ {stay.rating}</span></span>
              </div>

              {/* Rooms list */}
              <div className="space-y-2">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Room Types Inventory</div>
                {stay.rooms && stay.rooms.map(room => (
                  <div key={room.id} className="bg-white/35 border border-slate-850 p-4 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold  text-[#0B2545]  block text-sm">{room.name}</span>
                      <span className="text-slate-500 mt-1 block">Capacity: {room.capacity} Guests | Amenities: {room.amenities?.join(', ') || 'N/A'}</span>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full font-black uppercase text-[10px] ${
                        room.availableRooms > 3 ? 'bg-[rgba(33,230,193,0.15)] text-[#F06543]' : room.availableRooms > 0 ? 'bg-yellow-950/20 text-yellow-400' : 'bg-red-950/20 text-red-400'
                      }`}>
                        {room.availableRooms} Available
                      </span>
                      <div className="text-[10px] text-slate-500 mt-2 font-medium">₹{Number(room.price).toLocaleString('en-IN')}/night</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}
