import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { 
  ArrowLeft, ShieldAlert, Star, Calendar, DollarSign, Clock, MapPin, 
  CheckCircle, RefreshCw, Printer, AlertTriangle, XCircle, Send
} from 'lucide-react';

export default function ReceptionBookingDetails({ bookingId, onNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadDetails = async () => {
    setLoading(true);
    try {
      const res = await apiClient(`/reception/bookings/${bookingId}`);
      setData(res.data);
    } catch (err) {
      setError(err.message || 'Failed to load booking details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bookingId) loadDetails();
  }, [bookingId]);

  const handleCheckIn = async () => {
    if (!window.confirm('Verify passenger details & confirm guest check-in?')) return;
    try {
      await apiClient(`/reception/bookings/${bookingId}/check-in`, { method: 'POST' });
      alert('Guest checked in successfully.');
      loadDetails();
    } catch (err) {
      alert('Check-in failed: ' + err.message);
    }
  };

  const handleCheckOut = async () => {
    if (!window.confirm('Record payment check and confirm check-out?')) return;
    try {
      await apiClient(`/reception/bookings/${bookingId}/check-out`, { method: 'POST' });
      alert('Guest checked out successfully. Room inventory released.');
      loadDetails();
    } catch (err) {
      alert('Check-out failed: ' + err.message);
    }
  };

  const handleCollectPayment = async () => {
    const amount = prompt('Enter collected payment amount (INR):', data.booking.totalAmount);
    if (!amount) return;
    try {
      await apiClient(`/reception/bookings/${bookingId}/payment`, {
        method: 'POST',
        body: JSON.stringify({ amount: Number(amount), method: 'CASH' })
      });
      alert('Payment recorded successfully.');
      loadDetails();
    } catch (err) {
      alert('Failed to record payment: ' + err.message);
    }
  };

  const handleCancelBooking = async () => {
    if (!window.confirm('Are you sure you want to cancel this booking and release seats/room?')) return;
    try {
      await apiClient(`/reception/bookings/${bookingId}/cancel`, { method: 'POST' });
      alert('Booking cancelled successfully.');
      loadDetails();
    } catch (err) {
      alert('Cancellation failed: ' + err.message);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-6 animate-pulse">
        <div className="h-10 bg-slate-100/40 rounded-xl w-60" />
        <div className="h-80 bg-slate-100/40 rounded-2xl" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-8 text-center bg-[#ffffff] border border-red-500/20 rounded-2xl">
        <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold">Booking Details Error</h3>
        <p className="text-xs text-slate-500 mt-2">{error || 'Booking ID not specified.'}</p>
        <button onClick={() => onNavigate('/reception/bookings')} className="mt-4 px-4 py-2 bg-[#F06543] text-white hover:bg-[#0b7c71] font-bold rounded-xl text-xs">
          Return to Ledger
        </button>
      </div>
    );
  }

  const { booking, scheduleDetails } = data;

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header buttons */}
      <div className="flex justify-between items-center">
        <button 
          onClick={() => onNavigate('/reception/bookings')}
          className="flex items-center gap-1 text-xs text-slate-500 hover: text-[#0B2545]  font-bold uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Ledger</span>
        </button>

        <div className="flex gap-2">
          <button 
            onClick={handlePrint}
            className="px-4 py-2 bg-slate-100  text-[#0B2545]  font-bold text-xs uppercase rounded-xl flex items-center gap-1.5 hover:bg-slate-700"
          >
            <Printer className="w-4 h-4" />
            <span>Print Details</span>
          </button>
        </div>
      </div>

      {/* Main Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Columns - Booking specs */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4.5 gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#F06543] uppercase block tracking-wider">BOOKING ID</span>
                <h2 className="text-xl font-black  text-slate-800 ">{booking.bookingNumber}</h2>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                  booking.paymentStatus === 'PAID' ? 'bg-[rgba(33,230,193,0.1)] text-[#F06543]' : 'bg-red-950/20 text-red-400'
                }`}>
                  {booking.paymentStatus}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                  booking.bookingStatus === 'CHECKED_IN' ? 'bg-blue-950/25 text-[#F06543]' : booking.bookingStatus === 'COMPLETED' ? 'bg-[rgba(33,230,193,0.15)] text-[#F06543]' : booking.bookingStatus === 'CANCELLED' ? 'bg-red-950/20 text-red-400' : 'bg-slate-100 text-slate-300'
                }`}>
                  {booking.bookingStatus}
                </span>
              </div>
            </div>

            {/* Grid specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Guest Account</h4>
                <div className="space-y-1.5 font-medium  text-slate-800 ">
                  <div>Name: <span className="font-bold">{booking.customerName}</span></div>
                  <div>Phone: <span>{booking.customerPhone}</span></div>
                  <div>Email: <span>{booking.customerEmail}</span></div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Service Details</h4>
                <div className="space-y-1.5 font-medium  text-slate-800 ">
                  <div>Type: <span className="font-bold text-[#F06543]">{booking.bookingType}</span></div>
                  {booking.bookingType === 'STAY' && (
                    <>
                      <div>Hotel: <span>{booking.stay?.name || 'Stay'}</span></div>
                      <div>Check-in: <span>{booking.checkInDate}</span></div>
                      <div>Check-out: <span>{booking.checkOutDate}</span></div>
                    </>
                  )}
                  {booking.bookingType === 'FERRY' && (
                    <>
                      <div>Ferry: <span>{booking.ferry?.name || 'Ferry Line'}</span></div>
                      <div>Departure: <span>{scheduleDetails?.departureTime || 'N/A'}</span></div>
                    </>
                  )}
                  {booking.bookingType === 'CRUISE' && (
                    <>
                      <div>Cruise: <span>{booking.cruise?.name || 'Cruise Ship'}</span></div>
                      <div>Date: <span>{booking.bookingDate}</span></div>
                    </>
                  )}
                  <div>Total Guests: <span>{booking.totalGuests} Guests</span></div>
                </div>
              </div>
            </div>

            {/* Notes */}
            {booking.notes && (
              <div className="p-4 bg-slate-50/40 rounded-2xl border border-slate-800 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Notes / Instructions</span>
                <p className="text-slate-300 leading-relaxed">{booking.notes}</p>
              </div>
            )}
          </div>

          {/* Passenger manifest list */}
          {booking.guests && booking.guests.length > 0 && (
            <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl">
              <h3 className="text-sm font-extrabold uppercase tracking-wider  text-[#0B2545]  mb-4.5">Passenger Manifest List</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500">
                      <th className="py-2.5 font-bold uppercase">Full Name</th>
                      <th className="py-2.5 font-bold uppercase">Guest Type</th>
                      <th className="py-2.5 font-bold uppercase">Gender</th>
                      <th className="py-2.5 font-bold uppercase">ID Type</th>
                      <th className="py-2.5 font-bold uppercase text-right">ID Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.guests.map((g, idx) => (
                      <tr key={idx} className="border-b border-slate-900">
                        <td className="py-3  text-slate-800  font-medium">{g.fullName}</td>
                        <td className="py-3 text-slate-500 font-medium">{g.guestType}</td>
                        <td className="py-3 text-slate-500 font-medium">{g.gender}</td>
                        <td className="py-3 text-slate-500 font-medium">{g.idType}</td>
                        <td className="py-3 text-right  text-slate-800  font-semibold">{g.idNumber || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Right side - Billing summary & Actions */}
        <div className="space-y-6">
          
          {/* Billing card */}
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543]">Invoice Balance</h3>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Total Amount:</span>
                <span className="font-bold  text-[#0B2545] ">₹{Number(booking.totalAmount).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Paid Amount:</span>
                <span className="font-bold text-[#F06543]">
                  ₹{booking.paymentStatus === 'PAID' ? Number(booking.totalAmount).toLocaleString('en-IN') : '0'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-sm font-black  text-slate-800 ">
                <span>Outstanding:</span>
                <span className={booking.paymentStatus === 'PAID' ? 'text-[#F06543]' : 'text-red-400'}>
                  ₹{booking.paymentStatus === 'PAID' ? '0' : Number(booking.totalAmount).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Collect Payment Action */}
            {booking.paymentStatus === 'PENDING' && (
              <button 
                onClick={handleCollectPayment}
                className="w-full py-3 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Collect payment (₹{Number(booking.totalAmount).toLocaleString('en-IN')})
              </button>
            )}
          </div>

          {/* Operational actions */}
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543]">Desk Status Controls</h3>

            {booking.bookingStatus === 'CONFIRMED' && (
              <button 
                onClick={handleCheckIn}
                className="w-full py-3 bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-black text-xs uppercase rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Check-in Guest
              </button>
            )}

            {booking.bookingStatus === 'CHECKED_IN' && (
              <button 
                onClick={handleCheckOut}
                className="w-full py-3 bg-red-500  text-slate-800  font-black text-xs uppercase rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Verify & Check-out Guest
              </button>
            )}

            {booking.bookingStatus !== 'CANCELLED' && booking.bookingStatus !== 'COMPLETED' && (
              <button 
                onClick={handleCancelBooking}
                className="w-full py-3 bg-white border border-slate-800 text-red-400 hover:text-red-300 font-bold text-xs uppercase rounded-xl transition-all"
              >
                Cancel Booking
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
