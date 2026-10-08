import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { 
  ArrowRight, Calendar, CheckSquare, Hotel, DollarSign, Clock, Users,
  CheckCircle, ShieldAlert, Sparkles, UserCheck, UserMinus, PlusCircle
} from 'lucide-react';

export default function ReceptionDashboard({ onNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadData = async () => {
    try {
      const res = await apiClient('/reception/dashboard');
      setData(res.data);
    } catch (err) {
      setError(err.message || 'Failed to load dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCheckIn = async (id) => {
    if (!window.confirm('Confirm Guest Check-In?')) return;
    try {
      await apiClient(`/reception/bookings/${id}/check-in`, { method: 'POST' });
      alert('Guest checked in successfully.');
      loadData();
    } catch (err) {
      alert('Check-in failed: ' + err.message);
    }
  };

  const handleCheckOut = async (id) => {
    if (!window.confirm('Confirm Guest Check-Out?')) return;
    try {
      await apiClient(`/reception/bookings/${id}/check-out`, { method: 'POST' });
      alert('Guest checked out successfully.');
      loadData();
    } catch (err) {
      alert('Check-out failed: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-6 animate-pulse">
        <div className="h-10 bg-slate-100/40 rounded-xl w-60" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 bg-slate-100/40 rounded-2xl" />
          ))}
        </div>
        <div className="h-64 bg-slate-100/40 rounded-2xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center bg-[#ffffff] border border-red-500/20 rounded-2xl">
        <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold">Dashboard Load Error</h3>
        <p className="text-xs text-slate-500 mt-2">{error}</p>
        <button onClick={loadData} className="mt-4 px-4 py-2 bg-[#F06543] text-white hover:bg-[#0b7c71] font-bold rounded-xl text-xs">
          Retry Loading
        </button>
      </div>
    );
  }

  const kpis = [
    { label: "TODAY'S ARRIVALS", count: data.todayArrivalsCount, desc: 'Guests due to check-in today', icon: UserCheck, color: 'text-[#F06543] bg-[rgba(33,230,193,0.08)]', path: '/reception/check-in' },
    { label: "TODAY'S DEPARTURES", count: data.todayDeparturesCount, desc: 'Rooms due for check-out', icon: UserMinus, color: 'text-[#F06543] bg-[rgba(22,217,255,0.08)]', path: '/reception/check-out' },
    { label: "PENDING PAYMENTS", count: data.pendingPaymentsCount, desc: 'Outstanding balances due', icon: DollarSign, color: 'text-red-400 bg-red-950/15', path: '/reception/payments' },
    { label: "VACANT HOTEL ROOMS", count: data.availableRoomsCount, desc: 'Real-time room availability', icon: Hotel, color: 'text-yellow-400 bg-yellow-950/15', path: '/reception/stays' },
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Welcome Banner */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold  text-[#0B2545]  tracking-tight uppercase">
          GOOD MORNING, FRONT DESK
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 uppercase font-semibold tracking-wider">
          Manage today's arrivals, room releases, and guest check-ins. Daily Operations Dashboard.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl flex flex-col justify-between hover:border-[#F06543]/40 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</span>
                  <div className="text-3xl font-black  text-slate-800  mt-1.5">{kpi.count}</div>
                </div>
                <div className={`p-3 rounded-xl ${kpi.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#e2e8f0]">
                <span className="text-[10px] text-slate-500 font-medium">{kpi.desc}</span>
                <button onClick={() => onNavigate(kpi.path)} className="text-[10px] font-bold text-[#F06543] hover:underline flex items-center gap-1">
                  VIEW →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Operations Actions Section */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-2xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543] mb-4">Quick Desk Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button onClick={() => onNavigate('/reception/bookings/create')} className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-black text-xs uppercase rounded-xl shadow-[0_0_15px_rgba(33,230,193,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
            <PlusCircle className="w-4 h-4" />
            <span>New Booking</span>
          </button>
          <button onClick={() => onNavigate('/reception/customers')} className="flex items-center justify-center gap-2 p-3 bg-[#f8fafc] border border-[#e2e8f0]  text-[#0B2545]  hover:border-[#F06543]/40 font-bold text-xs uppercase rounded-xl transition-all">
            <span>New Customer</span>
          </button>
          <button onClick={() => onNavigate('/reception/check-in')} className="flex items-center justify-center gap-2 p-3 bg-[#f8fafc] border border-[#e2e8f0]  text-[#0B2545]  hover:border-[#F06543]/40 font-bold text-xs uppercase rounded-xl transition-all">
            <span>Check-in Guest</span>
          </button>
          <button onClick={() => onNavigate('/reception/check-out')} className="flex items-center justify-center gap-2 p-3 bg-[#f8fafc] border border-[#e2e8f0]  text-[#0B2545]  hover:border-[#F06543]/40 font-bold text-xs uppercase rounded-xl transition-all">
            <span>Check-out Guest</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Arrivals / Departures & Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Arrivals & Departures Panel */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Today's Arrivals Section */}
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider  text-[#0B2545]  flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F06543]" />
                Today's Arrivals
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(33,230,193,0.1)] text-[#F06543] font-bold">
                {data.todayArrivals?.length || 0} ARRIVALS DUE
              </span>
            </div>
            
            {data.todayArrivals?.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-[#e2e8f0] rounded-xl text-xs text-slate-500">
                NO ARRIVALS EXPECTED TODAY
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#e2e8f0] text-slate-500">
                      <th className="py-2.5 font-bold uppercase">Booking ID</th>
                      <th className="py-2.5 font-bold uppercase">Guest</th>
                      <th className="py-2.5 font-bold uppercase">Resort / Stay</th>
                      <th className="py-2.5 font-bold uppercase">Payment</th>
                      <th className="py-2.5 font-bold uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.todayArrivals.map(b => (
                      <tr key={b.id} className="border-b border-[#e2e8f0] hover:bg-white/30">
                        <td className="py-3 font-bold text-[#F06543]">{b.bookingNumber}</td>
                        <td className="py-3  text-slate-800  font-medium">{b.customerName}</td>
                        <td className="py-3 text-slate-500">{b.stay?.name || 'Hotel Stay'}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                            b.paymentStatus === 'PAID' ? 'bg-[rgba(33,230,193,0.1)] text-[#F06543]' : 'bg-yellow-950/20 text-yellow-400'
                          }`}>
                            {b.paymentStatus}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => handleCheckIn(b.id)}
                            className="px-3 py-1 bg-[#F06543] text-white hover:bg-[#0b7c71] font-extrabold text-[10px] uppercase rounded-lg shadow-md hover:scale-105 transition-transform"
                          >
                            Check-In
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Today's Departures Section */}
          <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider  text-[#0B2545]  flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F06543]" />
                Today's Departures
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(22,217,255,0.1)] text-[#F06543] font-bold">
                {data.todayDepartures?.length || 0} DEPARTURES DUE
              </span>
            </div>
            
            {data.todayDepartures?.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-[#e2e8f0] rounded-xl text-xs text-slate-500">
                NO GUEST CHECK-OUTS EXPECTED TODAY
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#e2e8f0] text-slate-500">
                      <th className="py-2.5 font-bold uppercase">Booking ID</th>
                      <th className="py-2.5 font-bold uppercase">Guest</th>
                      <th className="py-2.5 font-bold uppercase">Resort / Stay</th>
                      <th className="py-2.5 font-bold uppercase">Status</th>
                      <th className="py-2.5 font-bold uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.todayDepartures.map(b => (
                      <tr key={b.id} className="border-b border-[#e2e8f0] hover:bg-white/30">
                        <td className="py-3 font-bold text-[#F06543]">{b.bookingNumber}</td>
                        <td className="py-3  text-slate-800  font-medium">{b.customerName}</td>
                        <td className="py-3 text-slate-500">{b.stay?.name || 'Hotel Stay'}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-[rgba(33,230,193,0.1)] text-[#F06543]">
                            Checked-In
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => handleCheckOut(b.id)}
                            className="px-3 py-1 bg-red-500  text-[#0B2545]  font-extrabold text-[10px] uppercase rounded-lg shadow-md hover:scale-105 transition-transform"
                          >
                            Check-Out
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

        {/* Today's Schedule & Timeline */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-2xl">
          <h3 className="text-sm font-extrabold uppercase tracking-wider  text-[#0B2545]  mb-5 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#F06543]" />
            Today's Operational Timeline
          </h3>
          
          <div className="relative border-l border-slate-700 ml-2.5 pl-6.5 space-y-6">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Bullet */}
                <div className={`absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-md ${
                  item.type === 'FERRY' ? 'bg-[#F06543]' : item.type === 'CRUISE' ? 'bg-[#F06543]' : 'bg-yellow-400'
                }`} />
                
                <span className="text-[10px] font-extrabold text-[#F06543] tracking-wider bg-[rgba(33,230,193,0.06)] px-2 py-0.5 rounded-md border border-[#F06543]/20">
                  {item.time}
                </span>
                <h4 className="text-xs font-bold  text-[#0B2545]  mt-1.5">{item.title}</h4>
                <p className="text-[10.5px] text-slate-500 mt-1 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
