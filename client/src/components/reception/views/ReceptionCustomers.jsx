import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw } from 'lucide-react';

export default function ReceptionCustomers({ onNavigate }) {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const loadCustomers = async () => {
    setLoading(true);
    try {
      const res = await apiClient(`/reception/customers?search=${search}`);
      setCustomers(res.data || []);
    } catch (e) {
      console.error('Failed to load customers:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadCustomers();
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Customer Database</h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Search registered guest history accounts and contact cards.</p>
      </div>

      {/* Search Filter bar */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        <form onSubmit={handleSearchSubmit} className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by name, phone or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2.5 pl-9 pr-4 text-xs  text-slate-800  placeholder-slate-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-4 h-4" />
          </div>
          <button type="submit" className="px-6 py-2.5 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl shadow-md">
            Find Guest
          </button>
        </form>
      </div>

      {/* Customers List table */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Searching records database...</span>
          </div>
        ) : customers.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO REGISTERED CUSTOMER ACCOUNTS FOUND
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Customer</th>
                  <th className="py-3 font-bold uppercase">Phone</th>
                  <th className="py-3 font-bold uppercase">Email</th>
                  <th className="py-3 font-bold uppercase">Total Bookings</th>
                  <th className="py-3 font-bold uppercase">Last Active</th>
                  <th className="py-3 font-bold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(c => (
                  <tr 
                    key={c.id} 
                    className="border-b border-[#e2e8f0] hover:bg-white/35 cursor-pointer"
                    onClick={() => onNavigate(`/reception/customer-details?id=${c.id}`)}
                  >
                    <td className="py-3.5  text-[#0B2545]  font-extrabold text-sm">{c.name}</td>
                    <td className="py-3.5 text-slate-300 font-medium">{c.phone}</td>
                    <td className="py-3.5 text-slate-500 font-medium">{c.email}</td>
                    <td className="py-3.5 font-bold  text-[#0B2545] ">{c.bookingsCount} bookings</td>
                    <td className="py-3.5 text-slate-500">
                      {c.lastBookingDate ? new Date(c.lastBookingDate).toLocaleDateString('en-IN') : 'N/A'}
                    </td>
                    <td className="py-3.5 text-right">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate(`/reception/customer-details?id=${c.id}`);
                        }}
                        className="px-2.5 py-1 bg-[#e2e8f0] hover:bg-[#e2e8f0] text-[#F06543] rounded-lg text-[10px] font-bold"
                      >
                        VIEW PROFILE
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
