import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw, DollarSign } from 'lucide-react';

export default function ReceptionPayments({ onNavigate }) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadPayments = async () => {
    setLoading(true);
    try {
      const res = await apiClient('/reception/bookings');
      setPayments(res.data || []);
    } catch (e) {
      console.error('Failed to load payments ledger:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const handleRecordPayment = async (id, totalAmount) => {
    const amt = prompt('Enter collected payment amount (INR):', totalAmount);
    if (!amt) return;
    try {
      await apiClient(`/reception/bookings/${id}/payment`, {
        method: 'POST',
        body: JSON.stringify({ amount: Number(amt), method: 'CASH' })
      });
      alert('Payment recorded successfully.');
      loadPayments();
    } catch (err) {
      alert('Failed to record payment: ' + err.message);
    }
  };

  const filtered = payments.filter(b => 
    b.bookingNumber.toLowerCase().includes(search.toLowerCase()) ||
    b.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight flex items-center gap-1">
          <DollarSign className="w-6 h-6 text-[#F06543]" />
          Payments Ledger Logs
        </h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Verify manual CASH/UPI/CARD collection transactions and print invoice receipts.</p>
      </div>

      {/* Search Input bar */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search payments by name or booking ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2.5 pl-9 pr-4 text-xs  text-slate-800  placeholder-slate-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-4 h-4" />
        </div>
      </div>

      {/* Table list */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Updating transaction entries...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO TRANSACTION ENTRIES FOUND
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Booking ID</th>
                  <th className="py-3 font-bold uppercase">Customer</th>
                  <th className="py-3 font-bold uppercase">Service</th>
                  <th className="py-3 font-bold uppercase">Total Bill</th>
                  <th className="py-3 font-bold uppercase">Payment Status</th>
                  <th className="py-3 font-bold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(b => (
                  <tr key={b.id} className="border-b border-[#e2e8f0] hover:bg-white/35">
                    <td className="py-3.5 font-bold text-sm text-[#F06543]">{b.bookingNumber}</td>
                    <td className="py-3.5  text-slate-800  font-medium">{b.customerName}</td>
                    <td className="py-3.5 text-slate-300 uppercase font-semibold">{b.bookingType}</td>
                    <td className="py-3.5  text-[#0B2545]  font-bold">₹{Number(b.totalAmount).toLocaleString('en-IN')}</td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                        b.paymentStatus === 'PAID' ? 'bg-[rgba(33,230,193,0.15)] text-[#F06543]' : 'bg-red-950/20 text-red-400'
                      }`}>
                        {b.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      {b.paymentStatus === 'PENDING' ? (
                        <button 
                          onClick={() => handleRecordPayment(b.id, b.totalAmount)}
                          className="px-3.5 py-1.5 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-[10px] uppercase rounded-lg hover:scale-105 transition-transform"
                        >
                          Collect Cash
                        </button>
                      ) : (
                        <button 
                          onClick={() => onNavigate(`/reception/booking-details?id=${b.id}`)}
                          className="px-3.5 py-1.5 bg-[#e2e8f0] hover:bg-[#e2e8f0] text-[#F06543] font-bold text-[10px] uppercase rounded-lg"
                        >
                          View Receipt
                        </button>
                      )}
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
