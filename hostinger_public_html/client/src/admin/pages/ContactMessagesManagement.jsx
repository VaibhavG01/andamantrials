import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, User, MessageSquare, CheckCircle2, X, ChevronRight } from 'lucide-react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';

export default function ContactMessagesManagement() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const fetchMessages = () => {
    setLoading(true);
    adminService.getContactMessages()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((m) => ({
            id: String(m.id),
            name: m.name,
            email: m.email,
            phone: m.phone || 'N/A',
            subject: m.subject || 'General Inquiry',
            message: m.message,
            date: m.createdAt ? new Date(m.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recent',
            status: m.status || 'UNREAD',
          }));
          setMessages(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const getInitials = (name = '') => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase() || 'TR';
  };

  const columns = [
    {
      header: 'Sender',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif",
            boxShadow: '0 4px 12px rgba(240, 101, 67, 0.25)', flexShrink: 0
          }}>
            {getInitials(row.name)}
          </div>
          <div>
            <div style={{ color: '#0B2545', fontWeight: 800, fontSize: 13 }}>{row.name}</div>
            <div style={{ color: '#64748b', fontSize: 11 }}>{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Subject',
      accessor: 'subject',
      render: (row) => (
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#0B2545' }}>
          {row.subject}
        </span>
      ),
    },
    {
      header: 'Message',
      accessor: 'message',
      render: (row) => (
        <div style={{ color: '#64748b', fontSize: 12, maxWidth: 300, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {row.message}
        </div>
      ),
    },
    {
      header: 'Date',
      accessor: 'date',
      render: (row) => (
        <span style={{ color: '#64748b', fontSize: 12, fontWeight: 600 }}>{row.date}</span>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Action',
      render: (row) => (
        <button
          onClick={() => setSelectedMsg(row)}
          style={{
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            border: 'none',
            color: '#ffffff',
            padding: '7px 14px',
            borderRadius: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11.5,
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(240, 101, 67, 0.25)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span>VIEW</span>
          <ChevronRight size={13} />
        </button>
      ),
    },
  ];

  if (selectedMsg) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Sticky Action Header */}
        <div style={{
          position: 'sticky',
          top: 10,
          zIndex: 100,
          background: '#ffffff',
          borderRadius: 20,
          padding: '16px 24px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 8px 30px rgba(11,37,69,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              type="button"
              onClick={() => setSelectedMsg(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                padding: '8px 14px',
                borderRadius: 12,
                color: '#64748B',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              ← Back to Messages
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Message from {selectedMsg.name}
                </h2>
                <StatusBadge status={selectedMsg.status} />
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Subject: "{selectedMsg.subject}" • Received on {selectedMsg.date}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href={`mailto:${selectedMsg.email}?subject=${encodeURIComponent(`Re: ${selectedMsg.subject}`)}`}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                color: '#ffffff',
                padding: '9px 20px',
                borderRadius: 12,
                textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 14px rgba(240, 101, 67, 0.3)',
              }}
            >
              <Mail size={14} />
              <span>Reply via Email</span>
            </a>
            <button
              type="button"
              onClick={() => setSelectedMsg(null)}
              style={{
                background: '#F1F5F9',
                border: '1.5px solid #E2E8F0',
                color: '#64748B',
                padding: '9px 18px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>

        {/* Message Dossier Content Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 24,
          border: '1.5px solid #E2E8F0',
          padding: 32,
          boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 900
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 20, borderBottom: '1.5px solid #E2E8F0' }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 900,
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              {getInitials(selectedMsg.name)}
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                {selectedMsg.name}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4, color: '#64748B', fontSize: 13 }}>
                <span>Email: <b style={{ color: '#0B2545' }}>{selectedMsg.email}</b></span>
                {selectedMsg.phone && selectedMsg.phone !== 'N/A' && (
                  <span>• Phone: <b style={{ color: '#0B2545' }}>{selectedMsg.phone}</b></span>
                )}
              </div>
            </div>
          </div>

          <div style={{ background: '#FAF4EE', border: '1px solid #EBDED2', borderRadius: 16, padding: '16px 20px' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', marginBottom: 4 }}>
              SUBJECT LINE
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#0B2545' }}>
              {selectedMsg.subject}
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1.5px solid #E2E8F0',
            borderLeft: '4px solid #F06543',
            borderRadius: 16,
            padding: '24px',
          }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: 10 }}>
              MESSAGE CONTENT
            </div>
            <div style={{ fontSize: 14.5, color: '#0B2545', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              {selectedMsg.message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Website Contact Messages"
        subtitle="COMMUNICATIONS & DIRECT MESSAGES"
        columns={columns}
        data={messages}
        loading={loading}
        filterTabs={['ALL', 'UNREAD', 'READ', 'RESPONDED']}
        searchPlaceholder="Search message sender or subject..."
      />
    </div>
  );
}
