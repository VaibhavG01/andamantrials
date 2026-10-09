import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, Calendar, Users, MapPin, Package, Clock,
  Building, Utensils, Compass, MessageSquare, CheckCircle2,
  ExternalLink, MessageCircle, X, ChevronRight, Sparkles, Tag, ShieldCheck
} from 'lucide-react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';

// Parser function to extract structured fields from inquiry messages
function parseInquiryDetails(message = '') {
  if (!message) {
    return { isStructured: false, rawText: '' };
  }

  const lines = message.split('\n').map(l => l.trim()).filter(Boolean);
  const data = {
    destination: '',
    packageName: '',
    travelDate: '',
    duration: '',
    guests: '',
    hotelCategory: '',
    mealPlan: '',
    travelType: '',
    notes: '',
  };

  let hasStructuredTags = false;
  const remainingLines = [];

  for (const line of lines) {
    if (line.includes('📌 Destination:') || line.includes('Destination:')) {
      data.destination = line.replace(/.*Destination:\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('📦 Package:') || line.includes('Package:')) {
      data.packageName = line.replace(/.*Package:\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('🗓️ Travel Month/Date:') || line.includes('Travel Month/Date:') || line.includes('Travel Date:')) {
      data.travelDate = line.replace(/.*(Travel Month\/Date:|Travel Date:)\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('⏳ Duration:') || line.includes('Duration:')) {
      data.duration = line.replace(/.*Duration:\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('👥 Guests & Rooms:') || line.includes('Guests & Rooms:') || line.includes('Travelers:')) {
      data.guests = line.replace(/.*(Guests & Rooms:|Travelers:)\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('🏨 Hotel Category:') || line.includes('Hotel Category:')) {
      data.hotelCategory = line.replace(/.*Hotel Category:\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('🍽️ Meal Plan:') || line.includes('Meal Plan:')) {
      data.mealPlan = line.replace(/.*Meal Plan:\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('⛵ Travel Type:') || line.includes('Travel Type:') || line.includes('Trip Type:')) {
      data.travelType = line.replace(/.*(Travel Type:|Trip Type:)\s*/i, '').trim();
      hasStructuredTags = true;
    } else if (line.includes('💬 Notes:') || line.includes('💬 Special Requests / Notes:') || line.includes('Special Requests:')) {
      const noteText = line.replace(/.*(Special Requests \/ Notes:|Special Requests:|Notes:)\s*/i, '').trim();
      if (noteText) remainingLines.push(noteText);
      hasStructuredTags = true;
    } else {
      remainingLines.push(line);
    }
  }

  data.notes = remainingLines.join('\n').trim();
  data.isStructured = hasStructuredTags;
  data.rawText = message;

  return data;
}

export default function InquiriesManagement() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [statusUpdating, setStatusUpdating] = useState(false);

  const fetchInquiries = () => {
    setLoading(true);
    adminService.getInquiries()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((i) => {
            const parsed = parseInquiryDetails(i.message);
            return {
              id: String(i.id),
              name: i.name || 'Guest Traveler',
              email: i.email || 'N/A',
              phone: i.phone || 'N/A',
              type: i.inquiryType || 'HOLIDAY PLAN',
              message: i.message,
              parsed,
              date: i.createdAt ? new Date(i.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recent',
              rawDate: i.createdAt,
              status: i.status || 'NEW',
            };
          });
          setInquiries(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleUpdateStatus = async (id, newStatus) => {
    setStatusUpdating(true);
    try {
      await adminService.updateInquiryStatus(id, newStatus);
      setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error('Failed to update inquiry status:', err);
    } finally {
      setStatusUpdating(false);
    }
  };

  const getInitials = (name = '') => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase() || 'GT';
  };

  const cleanPhoneForWa = (phone = '') => {
    return phone.replace(/[^0-9]/g, '');
  };

  const columns = [
    {
      header: 'Customer',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif",
            boxShadow: '0 4px 12px rgba(240, 101, 67, 0.25)', flexShrink: 0
          }}>
            {getInitials(row.name)}
          </div>
          <div>
            <div style={{ color: '#0B2545', fontWeight: 800, fontSize: 13.5 }}>{row.name}</div>
            <div style={{ color: '#64748b', fontSize: 11.5, marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>{row.phone}</span>
              <span>•</span>
              <span>{row.email}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      header: 'Trip Summary',
      accessor: 'message',
      render: (row) => {
        const p = row.parsed;
        if (p && p.isStructured) {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 320 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                {p.destination && (
                  <span style={{ background: '#FFF0EB', border: '1px solid #FFD3C4', color: '#F06543', fontSize: 11, fontWeight: 800, padding: '2px 8px', borderRadius: 6 }}>
                    🏝️ {p.destination}
                  </span>
                )}
                {p.duration && (
                  <span style={{ background: '#f1f5f9', color: '#475569', fontSize: 11, fontWeight: 700, padding: '2px 6px', borderRadius: 6 }}>
                    ⏳ {p.duration}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 11.5, color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {p.packageName ? `📦 ${p.packageName}` : ''} {p.guests ? `• 👥 ${p.guests}` : ''}
              </div>
            </div>
          );
        }
        return (
          <div style={{ color: '#475569', fontSize: 12, maxWidth: 280, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {row.message}
          </div>
        );
      },
    },
    {
      header: 'Category',
      accessor: 'type',
      render: (row) => (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 800,
          color: '#F06543',
          background: '#FFF0EB',
          padding: '4px 8px',
          borderRadius: 8,
          border: '1px solid #FFD3C4',
        }}>
          {row.type}
        </span>
      ),
    },
    {
      header: 'Date',
      accessor: 'date',
      render: (row) => (
        <span style={{ color: '#64748b', fontSize: 12, fontWeight: 600 }}>
          {row.date}
        </span>
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
          onClick={() => setSelectedInquiry(row)}
          style={{
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            border: 'none',
            color: '#ffffff',
            padding: '7px 16px',
            borderRadius: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11.5,
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(240, 101, 67, 0.25)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            transition: 'all 0.2s',
          }}
        >
          <span>VIEW</span>
          <ChevronRight size={13} />
        </button>
      ),
    },
  ];

  const parsed = selectedInquiry?.parsed || (selectedInquiry ? parseInquiryDetails(selectedInquiry.message) : null);

  if (selectedInquiry) {
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
              onClick={() => setSelectedInquiry(null)}
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
              ← Back to Inquiries
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Lead: {selectedInquiry.name}
                </h2>
                <StatusBadge status={selectedInquiry.status} />
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Inquiry #{selectedInquiry.id} • Type: {selectedInquiry.type} • Received on {selectedInquiry.date}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            {selectedInquiry.phone && selectedInquiry.phone !== 'N/A' && (
              <a
                href={`https://wa.me/${cleanPhoneForWa(selectedInquiry.phone)}?text=${encodeURIComponent(`Hi ${selectedInquiry.name}, thank you for reaching out to Andaman Trails regarding your holiday inquiry!`)}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '9px 16px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            )}

            {selectedInquiry.phone && selectedInquiry.phone !== 'N/A' && (
              <a
                href={`tel:${selectedInquiry.phone}`}
                style={{
                  background: '#F8FAFC',
                  border: '1.5px solid #E2E8F0',
                  color: '#0B2545',
                  padding: '9px 16px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Phone size={14} color="#F06543" />
                <span>Call</span>
              </a>
            )}

            {selectedInquiry.email && selectedInquiry.email !== 'N/A' && (
              <a
                href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(`Your Andaman Trails Holiday Enquiry - #${selectedInquiry.id}`)}`}
                style={{
                  background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                  color: '#ffffff',
                  padding: '9px 18px',
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
                <span>Email Reply</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => setSelectedInquiry(null)}
              style={{
                background: '#F1F5F9',
                border: '1.5px solid #E2E8F0',
                color: '#64748B',
                padding: '9px 16px',
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

        {/* Lead Dossier Studio Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
          {/* Left Column: Traveler Profile & Requirements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Traveler Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 28,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 18
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                PRIMARY TRAVELER CONTACT
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
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
                  {getInitials(selectedInquiry.name)}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selectedInquiry.name}
                  </h3>
                  <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>{selectedInquiry.email}</div>
                  <div style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>{selectedInquiry.phone}</div>
                </div>
              </div>
            </div>

            {/* Requirements Card */}
            {parsed && parsed.isStructured ? (
              <div style={{
                background: '#ffffff',
                borderRadius: 24,
                border: '1.5px solid #E2E8F0',
                padding: 28,
                boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16
              }}>
                <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  STRUCTURED TRIP SPECIFICATIONS
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {parsed.destination && (
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B' }}>DESTINATION</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>{parsed.destination}</div>
                    </div>
                  )}
                  {parsed.packageName && (
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B' }}>PACKAGE</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>{parsed.packageName}</div>
                    </div>
                  )}
                  {parsed.travelDate && (
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B' }}>TRAVEL DATE</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>{parsed.travelDate}</div>
                    </div>
                  )}
                  {parsed.duration && (
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B' }}>DURATION</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>{parsed.duration}</div>
                    </div>
                  )}
                  {parsed.guests && (
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B' }}>TRAVELERS & ROOMS</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>{parsed.guests}</div>
                    </div>
                  )}
                  {parsed.hotelCategory && (
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 12, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B' }}>HOTEL CATEGORY</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>{parsed.hotelCategory}</div>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Column: Message Notes & Lead Workflow Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Message Notes Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 28,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                SPECIAL REQUESTS & NOTES
              </span>
              <div style={{
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderLeft: '4px solid #F06543',
                borderRadius: 16,
                padding: '18px 20px',
                fontSize: 13.5,
                color: '#0B2545',
                lineHeight: 1.7,
                whiteSpace: 'pre-line'
              }}>
                {parsed?.notes || selectedInquiry.message || 'No additional notes provided.'}
              </div>
            </div>

            {/* Lead Status Workflow Controls */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 28,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                UPDATE LEAD WORKFLOW STATUS
              </span>
              <p style={{ margin: 0, fontSize: 12, color: '#64748B' }}>
                Track the progression of this customer lead through your sales pipeline:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                {[
                  { id: 'NEW', label: 'NEW LEAD' },
                  { id: 'CONTACTED', label: 'CONTACTED' },
                  { id: 'IN_PROGRESS', label: 'IN PROGRESS' },
                  { id: 'RESOLVED', label: 'RESOLVED' },
                  { id: 'CANCELLED', label: 'CANCELLED' },
                ].map((st) => {
                  const isActive = selectedInquiry.status === st.id;
                  return (
                    <button
                      key={st.id}
                      disabled={statusUpdating}
                      onClick={() => handleUpdateStatus(selectedInquiry.id, st.id)}
                      style={{
                        background: isActive ? 'linear-gradient(135deg, #FF6B4A, #F06543)' : '#F8FAFC',
                        color: isActive ? '#ffffff' : '#334155',
                        border: isActive ? '1.5px solid #F06543' : '1.5px solid #E2E8F0',
                        padding: '12px 10px',
                        borderRadius: 12,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12,
                        fontWeight: 900,
                        cursor: statusUpdating ? 'not-allowed' : 'pointer',
                        boxShadow: isActive ? '0 4px 14px rgba(240, 101, 67, 0.35)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                      }}
                    >
                      {isActive && <CheckCircle2 size={14} />}
                      <span>{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Customer Trip Inquiries"
        subtitle="INQUIRY CRM & HOLIDAY LEADS"
        columns={columns}
        data={inquiries}
        loading={loading}
        filterTabs={['ALL', 'NEW', 'CONTACTED', 'IN_PROGRESS', 'RESOLVED']}
        searchPlaceholder="Search customer name, email or phone..."
      />








    </div>
  );
}
