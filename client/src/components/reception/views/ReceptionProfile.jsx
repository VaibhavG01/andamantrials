import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { User, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ReceptionProfile({ currentUser, onDuty, toggleShift }) {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Generate simple mock shift details matching current session
    setShifts([
      { id: 1, start: 'Today, 09:00 AM', end: 'Active Shift Session', status: 'ON DUTY' },
      { id: 2, start: 'Yesterday, 09:00 AM', end: 'Yesterday, 06:00 PM', status: 'OFF DUTY' },
      { id: 3, start: 'Aug 24, 2026, 09:00 AM', end: 'Aug 24, 2026, 06:00 PM', status: 'OFF DUTY' }
    ]);
  }, [onDuty]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Frontdesk User Profile</h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Track login credentials, shift history ledger and current session status.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* User profile info */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543] flex items-center gap-1.5">
            <User className="w-4 h-4" />
            Operational Profile Details
          </h3>
          
          <div className="space-y-3.5 text-xs">
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Full Name</span>
              <span className="font-extrabold  text-[#0B2545]  text-base">{currentUser?.name || 'Receptionist Name'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Email Address</span>
              <span className="font-semibold  text-slate-800 ">{currentUser?.email || 'N/A'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">Phone Number</span>
              <span className="font-semibold  text-slate-800 ">{currentUser?.phone || '+91 99887 76633'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase block">System Access Role</span>
              <span className="px-2.5 py-0.5 rounded bg-[rgba(33,230,193,0.1)] text-[#F06543] font-black uppercase text-[9px] tracking-wider">
                {currentUser?.role || 'RECEPTIONIST'}
              </span>
            </div>
          </div>
        </div>

        {/* Shift status card */}
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543] flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Active Shift Control Session
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              When ON DUTY, your active shift checks are enabled. Be sure to end shift when completing duties to release terminals check logs.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={toggleShift}
              disabled={loading}
              className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                onDuty 
                  ? 'bg-red-500 text-white hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.25)]' 
                  : 'bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-black shadow-[0_0_15px_rgba(33,230,193,0.25)]'
              }`}
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : onDuty ? (
                'End Shift Duty'
              ) : (
                'Start Shift Duty'
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Shift session list table */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#F06543] mb-4.5">Your Shift Session Logs</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500">
                <th className="py-2.5 font-bold uppercase">Shift ID</th>
                <th className="py-2.5 font-bold uppercase">Duty Started</th>
                <th className="py-2.5 font-bold uppercase">Duty Ended</th>
                <th className="py-2.5 font-bold uppercase text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map(sh => (
                <tr key={sh.id} className="border-b border-slate-900">
                  <td className="py-3 font-bold  text-[#0B2545] ">#SF-{sh.id}091</td>
                  <td className="py-3 text-slate-300 font-medium">{sh.start}</td>
                  <td className="py-3 text-slate-300 font-medium">{sh.end}</td>
                  <td className="py-3 text-right">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                      sh.status === 'ON DUTY' ? 'bg-[rgba(33,230,193,0.15)] text-[#F06543]' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {sh.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
