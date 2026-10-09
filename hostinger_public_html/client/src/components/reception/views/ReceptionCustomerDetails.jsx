import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { ArrowLeft, ShieldAlert, Calendar, DollarSign, Clock, MessageSquare } from 'lucide-react';

export default function ReceptionCustomerDetails({ customerId, onNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [note, setNote] = useState('');

  const loadDetails = async () => {
    setLoading(true);
    try {
      const res = await apiClient(`/reception/customers/${customerId}`);
      setData(res.data);
    } catch (err) {
      setError(err.message || 'Failed to load customer details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (customerId) loadDetails();
  }, [customerId]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    alert('Note added: ' + note); // Frontend local note mock support
    setNote('');
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-6 animate-pulse">
        <div className="h-10 bg-slate-100/40 rounded-xl w-60" />
        <div className="h-64 bg-slate-100/40 rounded-2xl" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-8 text-center bg-[#ffffff] border border-red-500/20 rounded-2xl">
        <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold">Customer Profile Error</h3>
        <p className="text-xs text-slate-500 mt-2">{error || 'Customer ID not specified.'}</p>
        <button onClick={() => onNavigate('/reception/customers')} className="mt-4 px-4 py-2 bg-[#F06543] text-white hover:bg-[#0b7c71] font-bold rounded-xl text-xs">
          Return to Database
        </button>
      </div>
    );
  }

  const { customer, bookings } = data;

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <button 
          onClick={() => onNavigate('/reception/customers')}
          className="flex items-center gap-1 text-xs text-slate-500 hover: text-[#0B2545]  font-bold uppercase mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Database</span>
        </button>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Guest Profile Details</h1>
      </div>

      {/* Grid panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card & Notes */}
        <div className="space-y-6">
          
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543]">Contact Profile</h3>
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Guest Name</span>
                <span className="font-extrabold  text-[#0B2545]  text-base">{customer.name}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Phone Number</span>
                <span className="font-semibold  text-slate-800 ">{customer.phone || 'N/A'}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Email Address</span>
                <span className="font-semibold  text-slate-800 ">{customer.email}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Membership Status</span>
                <span className="px-2 py-0.5 rounded bg-[rgba(33,230,193,0.1)] text-[#F06543] font-bold uppercase text-[9px]">
                  {customer.status || 'ACTIVE'}
                </span>
              </div>
            </div>
          </div>

          {/* Add Front Desk Comment notes */}
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543] flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" />
              Front Desk Comments
            </h3>
            <form onSubmit={handleAddNote} className="space-y-3">
              <textarea
                placeholder="Enter internal comment notes for this guest..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="3"
                className="w-full bg-[#f8fafc] border border-slate-800 rounded-xl p-3 text-xs  text-slate-800  placeholder-slate-500 focus:outline-none"
              />
              <button type="submit" className="w-full py-2 bg-[#e2e8f0] hover:bg-[#e2e8f0] text-[#F06543] font-bold text-xs uppercase rounded-xl">
                Add Desk Comment
              </button>
            </form>
          </div>

        </div>

        {/* Bookings History */}
        <div className="lg:col-span-2 bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl">
          <h3 className="text-sm font-extrabold uppercase tracking-wider  text-[#0B2545]  mb-5 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#F06543]" />
            Booking History Record ({bookings?.length || 0} entries)
          </h3>

          {bookings?.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
              GUEST HAS NO RECORDED RESERVATION BOOKINGS
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500">
                    <th className="py-2.5 font-bold uppercase">Booking ID</th>
                    <th className="py-2.5 font-bold uppercase">Type</th>
                    <th className="py-2.5 font-bold uppercase">Date</th>
                    <th className="py-2.5 font-bold uppercase">Amount</th>
                    <th className="py-2.5 font-bold uppercase text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr 
                      key={b.id} 
                      className="border-b border-slate-900 hover:bg-white/35 cursor-pointer"
                      onClick={() => onNavigate(`/reception/booking-details?id=${b.id}`)}
                    >
                      <td className="py-3 font-bold text-[#F06543]">{b.bookingNumber}</td>
                      <td className="py-3">
                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded  text-slate-800  uppercase font-semibold">
                          {b.bookingType}
                        </span>
                      </td>
                      <td className="py-3 text-slate-300">
                        {new Date(b.createdAt).toLocaleDateString('en-IN')}
                      </td>
                      <td className="py-3  text-[#0B2545]  font-bold">₹{Number(b.totalAmount).toLocaleString('en-IN')}</td>
                      <td className="py-3 text-right">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                          b.bookingStatus === 'CHECKED_IN' ? 'bg-blue-950/25 text-[#F06543]' : b.bookingStatus === 'COMPLETED' ? 'bg-[rgba(33,230,193,0.15)] text-[#F06543]' : b.bookingStatus === 'CANCELLED' ? 'bg-red-950/20 text-red-400' : 'bg-slate-100 text-slate-300'
                        }`}>
                          {b.bookingStatus}
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

    </div>
  );
}
