import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw, MessageSquare, PhoneCall } from 'lucide-react';

export default function ReceptionInquiries({ onNavigate }) {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const res = await apiClient('/reception/inquiries');
      setInquiries(res.data || []);
    } catch (e) {
      console.error('Failed to load inquiries:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleMarkStatus = async (id, status) => {
    try {
      await apiClient(`/reception/inquiries/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ status })
      });
      alert('Inquiry status updated.');
      loadInquiries();
    } catch (err) {
      alert('Update failed: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Trip Planning Inquiries</h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Track traveler custom requests and coordinate WhatsApp followups.</p>
      </div>

      {/* List */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Updating inquiries list...</span>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO OPEN TRIP INQUIRIES REGISTERED TODAY
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Customer</th>
                  <th className="py-3 font-bold uppercase">Contact Info</th>
                  <th className="py-3 font-bold uppercase">Planning Type</th>
                  <th className="py-3 font-bold uppercase">Message Details</th>
                  <th className="py-3 font-bold uppercase">Status</th>
                  <th className="py-3 font-bold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map(inq => (
                  <tr key={inq.id} className="border-b border-[#e2e8f0] hover:bg-white/35">
                    <td className="py-3.5  text-[#0B2545]  font-extrabold text-sm">{inq.name}</td>
                    <td className="py-3.5 space-y-1">
                      <div className="text-slate-300 font-medium">{inq.phone}</div>
                      <div className="text-slate-500/70">{inq.email}</div>
                    </td>
                    <td className="py-3.5  text-slate-800  font-semibold">{inq.type || 'Custom Package'}</td>
                    <td className="py-3.5 text-slate-500 max-w-xs truncate">{inq.message}</td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                        inq.status === 'RESOLVED' ? 'bg-[rgba(33,230,193,0.1)] text-[#F06543]' : inq.status === 'CONTACTED' ? 'bg-blue-950/20 text-[#F06543]' : 'bg-yellow-950/20 text-yellow-400'
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-right space-x-1 whitespace-nowrap">
                      {inq.status !== 'RESOLVED' && (
                        <>
                          <button 
                            onClick={() => handleMarkStatus(inq.id, 'CONTACTED')}
                            className="px-2 py-1 bg-[rgba(22,217,255,0.1)] text-[#F06543] font-bold rounded text-[10px]"
                          >
                            Mark Contacted
                          </button>
                          <button 
                            onClick={() => handleMarkStatus(inq.id, 'RESOLVED')}
                            className="px-2 py-1 bg-[rgba(33,230,193,0.1)] text-[#F06543] font-bold rounded text-[10px]"
                          >
                            Mark Resolved
                          </button>
                        </>
                      )}
                      
                      {/* WhatsApp trigger using configured API coordinates */}
                      <a
                        href={`https://wa.me/${inq.phone?.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center p-1 bg-green-950/20 text-green-400 border border-green-500/20 rounded hover:bg-green-900/30"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
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
