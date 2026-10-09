import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';
import { ArrowLeft, Calendar, MapPin, CreditCard, CheckCircle2, Clock, AlertTriangle, Mail, Phone, User, Tag, Check, RefreshCw } from 'lucide-react';

export default function BookingsManagement() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cancelModal, setCancelModal] = useState(false);

  // Read URL query type filter (e.g. ?type=FERRY)
  const [urlType, setUrlType] = useState('ALL');

  useEffect(() => {
    const handleUrlChange = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const type = queryParams.get('type');
      setUrlType(type ? type.toUpperCase() : 'ALL');
    };

    handleUrlChange(); // Initial check

    // Listen to route pushState changes
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Whenever URL filter changes, reset active status tab to 'ALL'
  useEffect(() => {
    setActiveTab('ALL');
  }, [urlType]);

  const loadBookings = () => {
    setLoading(true);
    adminService.getAllBookings()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((b) => {
            // Resolve dynamic products name and route info
            let productName = 'Unknown Booking';
            let routeName = 'Andaman Islands';

            if (b.bookingType === 'FERRY') {
              productName = b.ferry?.name || 'Ferry Pass';
              routeName = b.ferry?.operator || 'Ferry Line';
            } else if (b.bookingType === 'CRUISE') {
              productName = b.cruise?.name || 'Cruise Ticket';
              routeName = b.cruise?.departurePoint || 'Harbor Point';
            } else if (b.bookingType === 'STAY') {
              productName = b.stay?.name || 'Resort Stay';
              routeName = b.stay?.location || 'Stay Point';
            } else if (b.bookingType === 'ACTIVITY') {
              productName = b.activity?.title || 'Activity Ticket';
              routeName = b.activity?.location || 'Adventure Spot';
            } else if (b.bookingType === 'PACKAGE') {
              productName = b.package?.title || 'Tour Package';
              routeName = b.package?.destinations || 'Island Package';
            }

            return {
              id: b.id, // Database ID for status update API calls
              bookingNumber: b.bookingNumber || `AT-BK-${b.id}`,
              customerName: b.customerName || 'Traveler Guest',
              email: b.customerEmail || 'N/A',
              phone: b.customerPhone || 'N/A',
              type: b.bookingType || 'FERRY',
              product: productName,
              route: routeName,
              date: b.bookingDate || 'N/A',
              amount: parseFloat(b.totalAmount || 0),
              payment: b.paymentStatus || 'PENDING',
              status: b.bookingStatus || 'CONFIRMED',
              created: b.createdAt ? b.createdAt.substring(0, 10) : 'N/A',
            };
          });
          setBookings(mapped);
        }
      })
      .catch((e) => console.error('Failed to load bookings:', e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleUpdateStatus = (bookingId, newStatus) => {
    adminService.updateBookingStatus(bookingId, newStatus)
      .then(() => {
        setBookings((prev) => prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b)));
        if (selectedBooking && selectedBooking.id === bookingId) {
          setSelectedBooking((prev) => ({ ...prev, status: newStatus }));
        }
      })
      .catch((err) => {
        alert(`Failed to update booking status: ${err.message || err}`);
      });
  };

  // Filter first by URL bookingType parameter, then by the table's status selector tab
  const filteredBookings = bookings.filter((b) => {
    if (urlType !== 'ALL' && b.type !== urlType) return false;
    if (activeTab !== 'ALL') {
      return b.status === activeTab;
    }
    return true;
  });

  // Dynamic titles based on the active URL filter
  let pageTitle = 'All Platform Bookings';
  if (urlType === 'FERRY') pageTitle = 'Ferry Ticket Bookings';
  if (urlType === 'CRUISE') pageTitle = 'Cruise Charter Bookings';
  if (urlType === 'STAY') pageTitle = 'Resort Stay Bookings';
  if (urlType === 'ACTIVITY') pageTitle = 'Activity Slot Bookings';
  if (urlType === 'PACKAGE') pageTitle = 'Tour Package Bookings';

  const columns = [
    {
      header: 'Booking Number',
      accessor: 'bookingNumber',
      render: (row) => (
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: '#F06543' }}>
          {row.bookingNumber}
        </span>
      ),
    },
    {
      header: 'Customer',
      accessor: 'customerName',
      render: (row) => (
        <div>
          <div style={{ color: '#0B2545', fontWeight: 600 }}>{row.customerName}</div>
          <div style={{ color: '#64748b', fontSize: 11 }}>{row.email}</div>
        </div>
      ),
    },
    {
      header: 'Type',
      accessor: 'type',
      render: (row) => (
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#ffab00' }}>
          {row.type}
        </span>
      ),
    },
    {
      header: 'Service / Details',
      accessor: 'product',
      render: (row) => (
        <div>
          <div style={{ color: '#334155', fontWeight: 700, fontSize: 12 }}>{row.product}</div>
          <div style={{ color: '#64748b', fontSize: 11 }}>{row.route}</div>
        </div>
      )
    },
    { header: 'Travel Date', accessor: 'date' },
    {
      header: 'Amount',
      accessor: 'amount',
      render: (row) => (
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: '#F06543' }}>
          ₹{row.amount.toLocaleString('en-IN')}
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
          onClick={() => setSelectedBooking(row)}
          style={{
            background: 'rgba(22, 217, 255, 0.1)',
            border: '1px solid rgba(22, 217, 255, 0.3)',
            color: '#F06543',
            padding: '5px 12px',
            borderRadius: 12,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          MANAGE →
        </button>
      ),
    },
  ];

  if (selectedBooking) {
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
              onClick={() => setSelectedBooking(null)}
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
              <ArrowLeft size={16} />
              Back to Bookings
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Reservation {selectedBooking.bookingNumber}
                </h2>
                <StatusBadge status={selectedBooking.status} />
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                {selectedBooking.type} • Booked on {selectedBooking.created} • Travel Date: {selectedBooking.date}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => setSelectedBooking(null)}
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
              Done / Close
            </button>
          </div>
        </div>

        {/* Studio Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
          {/* Column 1: Customer Profile & Service Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Customer Info Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 24,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                PRIMARY TRAVELER CONTACT
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 900
                }}>
                  {selectedBooking.customerName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selectedBooking.customerName}
                  </h3>
                  <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>{selectedBooking.email}</div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>{selectedBooking.phone}</div>
                </div>
              </div>
            </div>

            {/* Service & Itinerary Details Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 24,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                SERVICE & TRIP SPECIFICATIONS
              </span>
              <div style={{ background: '#F8FAFC', borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#64748B' }}>Category:</span>
                  <span style={{ fontSize: 12, fontWeight: 900, color: '#F06543', background: '#FFF1EE', padding: '2px 8px', borderRadius: 6 }}>
                    {selectedBooking.type}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#64748B' }}>Service Item:</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{selectedBooking.product}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#64748B' }}>Route / Sector:</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#334155' }}>{selectedBooking.route}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#64748B' }}>Travel Date:</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{selectedBooking.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Payment Breakdown & Status Operations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Payment & Invoice Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 24,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                PAYMENT & BILLING SUMMARY
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>Total Amount Paid</div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginTop: 2 }}>
                    ₹{selectedBooking.amount.toLocaleString('en-IN')}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: '#64748B' }}>Payment Gateway</div>
                  <div style={{ marginTop: 4 }}>
                    <StatusBadge status={selectedBooking.payment} />
                  </div>
                </div>
              </div>
            </div>

            {/* Lifecycle Status Management Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              border: '1.5px solid #E2E8F0',
              padding: 24,
              boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                LIFECYCLE STATUS CONTROLS
              </span>
              <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                Update booking confirmation status or process cancellations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => handleUpdateStatus(selectedBooking.id, 'CONFIRMED')}
                  style={{
                    padding: '12px',
                    borderRadius: 12,
                    border: selectedBooking.status === 'CONFIRMED' ? '2px solid #F06543' : '1.5px solid #E2E8F0',
                    background: selectedBooking.status === 'CONFIRMED' ? '#FFF1EE' : '#F8FAFC',
                    color: selectedBooking.status === 'CONFIRMED' ? '#F06543' : '#334155',
                    fontWeight: 900,
                    fontSize: 12,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6
                  }}
                >
                  <CheckCircle2 size={14} /> CONFIRM
                </button>

                <button
                  type="button"
                  onClick={() => handleUpdateStatus(selectedBooking.id, 'COMPLETED')}
                  style={{
                    padding: '12px',
                    borderRadius: 12,
                    border: selectedBooking.status === 'COMPLETED' ? '2px solid #16A34A' : '1.5px solid #E2E8F0',
                    background: selectedBooking.status === 'COMPLETED' ? '#F0FDF4' : '#F8FAFC',
                    color: selectedBooking.status === 'COMPLETED' ? '#16A34A' : '#334155',
                    fontWeight: 900,
                    fontSize: 12,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6
                  }}
                >
                  <Check size={14} /> COMPLETED
                </button>
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 14 }}>
                <button
                  type="button"
                  onClick={() => setCancelModal(true)}
                  style={{
                    width: '100%',
                    background: '#FEF2F2',
                    border: '1.5px solid #FCA5A5',
                    color: '#DC2626',
                    padding: '12px',
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                  }}
                >
                  <AlertTriangle size={15} />
                  Initiate Booking Cancellation & Refund
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CANCEL CONFIRM DIALOG */}
        <ConfirmDialog
          isOpen={cancelModal}
          title={`Cancel Booking ${selectedBooking.bookingNumber}?`}
          message="Are you sure you want to cancel this booking and initiate a refund workflow? This action will notify the user via email & WhatsApp."
          onConfirm={() => {
            handleUpdateStatus(selectedBooking.id, 'CANCELLED');
            setCancelModal(false);
          }}
          onCancel={() => setCancelModal(false)}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title={pageTitle}
        subtitle="BOOKINGS OPERATIONS HUB"
        columns={columns}
        data={filteredBookings}
        loading={loading}
        filterTabs={['ALL', 'CONFIRMED', 'PENDING', 'CANCELLED', 'CHECKED_IN', 'COMPLETED']}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        searchPlaceholder="Search booking ID, customer or details..."
      />

      {/* CANCEL CONFIRM DIALOG */}
      <ConfirmDialog
        isOpen={cancelModal}
        title={`Cancel Booking ${selectedBooking?.bookingNumber}?`}
        message="Are you sure you want to cancel this booking and initiate a refund workflow? This action will notify the user via email & WhatsApp."
        onConfirm={() => {
          if (selectedBooking) handleUpdateStatus(selectedBooking.id, 'CANCELLED');
          setCancelModal(false);
        }}
        onCancel={() => setCancelModal(false)}
      />
    </div>
  );
}
