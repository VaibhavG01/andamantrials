import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, RefreshCw, Check } from 'lucide-react';

export default function ReceptionContact({ onNavigate }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const res = await apiClient('/reception/contact');
      setMessages(res.data || []);
    } catch (e) {
      console.error('Failed to load contact requests:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleResolve = async (id) => {
    try {
      await apiClient(`/reception/contact/${id}`, { method: 'PUT' });
      alert('Support contact marked resolved.');
      loadMessages();
    } catch (err) {
      alert('Update failed: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase tracking-tight">Support Contact Requests</h1>
        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-semibold">Address direct help center tickets and email queries from guests.</p>
      </div>

      {/* List */}
      <div className="bg-[#ffffff] border border-[#e2e8f0] p-5 rounded-2xl">
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-[#F06543] animate-spin" />
            <span className="text-xs text-slate-500">Updating tickets list...</span>
          </div>
        ) : messages.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-500 border border-dashed border-[#e2e8f0] rounded-xl">
            NO OUTSTANDING SUPPORT CONTACT MESSAGES ACTIVE
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-slate-500">
                  <th className="py-3 font-bold uppercase">Sender Name</th>
                  <th className="py-3 font-bold uppercase">Subject</th>
                  <th className="py-3 font-bold uppercase">Contact Email / Phone</th>
                  <th className="py-3 font-bold uppercase">Message Text</th>
                  <th className="py-3 font-bold uppercase">Status</th>
                  <th className="py-3 font-bold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(msg => (
                  <tr key={msg.id} className="border-b border-[#e2e8f0] hover:bg-white/35">
                    <td className="py-3.5  text-[#0B2545]  font-extrabold text-sm">{msg.name}</td>
                    <td className="py-3.5  text-slate-800  font-semibold">{msg.subject || 'Help Support'}</td>
                    <td className="py-3.5 space-y-1">
                      <div className="text-slate-300 font-medium">{msg.email}</div>
                      <div className="text-slate-500/70">{msg.phone || 'N/A'}</div>
                    </td>
                    <td className="py-3.5 text-slate-500 max-w-xs truncate">{msg.message}</td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                        msg.status === 'RESOLVED' ? 'bg-[rgba(33,230,193,0.1)] text-[#F06543]' : 'bg-yellow-950/20 text-yellow-400'
                      }`}>
                        {msg.status || 'PENDING'}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      {msg.status !== 'RESOLVED' && (
                        <button 
                          onClick={() => handleResolve(msg.id)}
                          className="px-3 py-1 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-[10px] uppercase rounded-lg hover:scale-105 transition-transform"
                        >
                          Resolve
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
