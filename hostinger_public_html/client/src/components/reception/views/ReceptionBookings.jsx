import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, Filter, Calendar, Info, RefreshCw } from 'lucide-react';

export default function ReceptionBookings({ onNavigate }) {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [payment, setPayment] = useState('');
  const [status, setStatus] = useState('');
  const [filter, setFilter] = useState(''); // today, tomorrow, all
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    setLoading(true);
    try {
      let query = `?search=${search}&type=${type}&payment=${payment}&status=${status}`;
      if (filter) query += `&filter=${filter}`;
      
      const res = await apiClient(`/reception/bookings${query}`);
      setBookings(res.data || []);
    } catch (e) {
      console.error('Failed to load bookings list:', e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, [type, payment, status, filter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadBookings();
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Booking Management Ledger</h1>
          <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Verify passenger manifests and hotel stay bookings ledger logs.</p>
        </div>
        <button 
          onClick={() => onNavigate('/reception/bookings/create')}
          className="px-5 py-2.5 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          + Create New Booking
        </button>
      </div>

      {/* Filters Panel */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl space-y-4">
        
        {/* Quick Date Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {['', 'today', 'tomorrow'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                filter === tab 
                  ? 'bg-[#F06543] text-white hover:bg-[#0b7c71]' 
                  : 'bg-[#f8fafc] border border-[#e2e8f0] text-slate-500 hover:text-white'
              }`}
            >
              {tab === '' ? 'All Bookings' : tab === 'today' ? "Today's Ledger" : "Tomorrow's Ledger"}
            </button>
          ))}
        </div>

        {/* Search & Selector fields */}
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          <div className="relative sm:col-span-2">
            <input
              type="text"
              placeholder="Search Booking Number, Name or Phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 pl-9 pr-4 text-xs  text-slate-800  placeholder-slate-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-4 h-4" />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs text-[#0B2545] focus:outline-none"
          >
            <option value="">All Services</option>
            <option value="STAY">Hotels & Stays</option>
            <option value="FERRY">Island Ferries</option>
            <option value="CRUISE">Luxury Cruises</option>
          </select>

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs text-[#0B2545] focus:outline-none"
          >
            <option value="">All Payments</option>
            <option value="PAID">Paid</option>
            <option value="PENDING">Pending</option>
            <option value="REFUNDED">Refunded</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs text-[#0B2545] focus:outline-none"
          >
            <option value="">All Statuses</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="CHECKED_IN">Checked-In</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </form>

      </div>

      {/* Bookings Table list */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Updating operational ledger logs...</span>
          </div>
        ) : bookings.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO BOOKING ENTRIES RECORDED MATCHING FILTERS
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Booking ID</th>
                  <th className="py-3 font-bold uppercase">Service</th>
                  <th className="py-3 font-bold uppercase">Guest / Name</th>
                  <th className="py-3 font-bold uppercase">Phone</th>
                  <th className="py-3 font-bold uppercase">Total Price</th>
                  <th className="py-3 font-bold uppercase">Payment</th>
                  <th className="py-3 font-bold uppercase">Booking Status</th>
                  <th className="py-3 font-bold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr 
                    key={b.id} 
                    className="border-b border-[#e2e8f0] hover:bg-white/35 cursor-pointer"
                    onClick={() => onNavigate(`/reception/booking-details?id=${b.id}`)}
                  >
                    <td className="py-3.5 font-extrabold text-sm text-[#F06543]">{b.bookingNumber}</td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                        b.bookingType === 'STAY' ? 'bg-yellow-950/20 text-yellow-400' : b.bookingType === 'FERRY' ? 'bg-blue-950/20 text-blue-400' : 'bg-purple-950/20 text-purple-400'
                      }`}>
                        {b.bookingType}
                      </span>
                    </td>
                    <td className="py-3.5  text-slate-800  font-medium">{b.customerName}</td>
                    <td className="py-3.5 text-slate-500 font-medium">{b.customerPhone}</td>
                    <td className="py-3.5 font-bold  text-[#0B2545] ">₹{Number(b.totalAmount).toLocaleString('en-IN')}</td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                        b.paymentStatus === 'PAID' ? 'bg-[rgba(33,230,193,0.1)] text-[#F06543]' : 'bg-red-950/20 text-red-400'
                      }`}>
                        {b.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase ${
                        b.bookingStatus === 'CHECKED_IN' ? 'bg-blue-950/25 text-[#F06543]' : b.bookingStatus === 'COMPLETED' ? 'bg-[rgba(33,230,193,0.15)] text-[#F06543]' : b.bookingStatus === 'CANCELLED' ? 'bg-red-950/20 text-red-400' : 'bg-slate-100 text-slate-300'
                      }`}>
                        {b.bookingStatus}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate(`/reception/booking-details?id=${b.id}`);
                        }}
                        className="px-2.5 py-1 bg-[#e2e8f0] hover:bg-[#e2e8f0] text-[#F06543] rounded-lg text-[10px] font-bold"
                      >
                        MANAGE
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
