import React, { useState, useEffect } from 'react';
import { Compass, Calendar, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, X, Eye } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

export default function MyTrips({ onBack }) {
  const [liveBookings, setLiveBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setLiveBookings(res.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const upcomingBookings = liveBookings.filter(b => b.bookingStatus === 'CONFIRMED' || b.paymentStatus === 'PAID');
  const pastBookings = liveBookings.filter(b => b.bookingStatus === 'COMPLETED' || b.bookingStatus === 'CANCELLED');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <button
            onClick={onBack}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
              color: '#F06543', background: '#FFF0EB',
              border: '1px solid #FFD3C4', padding: '6px 14px',
              borderRadius: 20, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
              marginBottom: 10,
            }}
          >
            <ArrowLeft size={12} /> Back to Dashboard
          </button>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, fontWeight: 600, color: '#0B2545', margin: 0 }}>
            My Andaman Trips
          </h1>
        </div>
      </div>

      {loading ? (
        <div style={{ color: '#F06543', padding: 24, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif" }}>
          Loading your travel database...
        </div>
      ) : (
        <>
          {/* UPCOMING */}
          <div style={{ background: '#ffffff', border: '1.5px solid #EBDED2', borderRadius: 24, padding: 28, boxShadow: '0 4px 20px rgba(11, 37, 69, 0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
              UPCOMING TRIPS ({upcomingBookings.length})
            </div>
            {upcomingBookings.length === 0 ? (
              <div style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: 13, padding: '20px 0' }}>
                No upcoming trips reserved. Book a Stay or Ferry to begin your trip!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {upcomingBookings.map(bk => {
                  const title = bk.activity?.name 
                    || bk.package?.name 
                    || bk.ferry?.name 
                    || bk.cruise?.name 
                    || bk.stay?.name 
                    || `${bk.bookingType} Reserve Pass`;
                  const image = bk.activity?.heroImage 
                    || bk.stay?.heroImage 
                    || bk.cruise?.heroImage 
                    || bk.heroImage 
                    || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80';
                  const travelDate = bk.activityDate || bk.bookingDate;
                  const guests = bk.totalGuests || ((bk.adultCount || 1) + (bk.childCount || 0));

                  return (
                    <div key={bk.id || bk.bookingNumber} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, alignItems: 'center', background: '#FAF4EE', padding: 20, borderRadius: 18, border: '1px solid #EBDED2' }}>
                      <img src={image} alt={bk.bookingNumber} style={{ width: '100%', height: 140, borderRadius: 18, objectFit: 'cover' }} />
                      <div>
                        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, fontWeight: 600, color: '#0B2545' }}>
                          {title}
                        </div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#F06543', marginBottom: 8, fontWeight: 600 }}>
                          Booking ID: {bk.bookingNumber} • Travel Date: {travelDate} {bk.slotStartTime ? `• ⏰ ${bk.slotStartTime}` : ''}
                        </div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#5C6F84', marginBottom: 16 }}>
                          Guests: {guests} • Status: <span style={{ color: '#F06543', fontWeight: 700 }}>{bk.bookingStatus || 'CONFIRMED'}</span> • Paid: <strong style={{ color: '#0B2545' }}>₹{Number(bk.totalAmount || 0).toLocaleString()}</strong>
                        </div>
                        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                          <button
                            onClick={() => setSelectedTrip(bk)}
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
                              color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                              border: 'none', padding: '10px 20px', borderRadius: 12,
                              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
                              boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)'
                            }}
                          >
                            VIEW COMPLETE DETAILS <ArrowRight size={13} />
                          </button>
                          
                          {(bk.bookingStatus === 'CONFIRMED' || bk.paymentStatus === 'PAID') && bk.paymentStatus !== 'PENDING' && (
                            <button
                              onClick={() => {
                                window.history.pushState({}, '', `/booking-confirmation/${bk.bookingNumber}`);
                                window.dispatchEvent(new Event('popstate'));
                              }}
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
                                color: '#0B2545', background: '#ffffff',
                                border: '1.5px solid #EBDED2', padding: '10px 18px', borderRadius: 12,
                                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6
                              }}
                            >
                              OPEN VOUCHER 📄
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* PAST TRIPS */}
          <div style={{ background: '#ffffff', border: '1.5px solid #EBDED2', borderRadius: 24, padding: 28, boxShadow: '0 4px 20px rgba(11, 37, 69, 0.04)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#0B2545', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
              PAST TRIPS ({pastBookings.length})
            </div>
            {pastBookings.length === 0 ? (
              <div style={{ color: '#5C6F84', fontFamily: "'Inter', sans-serif", fontSize: 12, padding: '10px 0' }}>
                No completed trips recorded in past history.
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {pastBookings.map(trip => (
                  <div key={trip.id} style={{ background: '#FAF4EE', border: '1px solid #EBDED2', borderRadius: 18, padding: 18, display: 'flex', gap: 14 }}>
                    <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=200&q=80" alt={trip.bookingNumber} style={{ width: 100, height: 80, borderRadius: 12, objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545' }}>{trip.bookingType} Tour</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#5C6F84' }}>{trip.bookingDate}</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543', marginTop: 6 }}>₹{parseFloat(trip.totalAmount).toLocaleString()} • {trip.bookingStatus}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* ── DETAIL MODAL ── */}
      {selectedTrip && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(11, 37, 69, 0.82)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div 
            style={{ 
              background: '#ffffff', 
              border: '1.5px solid #e2e8f0', 
              borderRadius: 28, 
              padding: '32px 28px', 
              maxWidth: 720, 
              width: '100%', 
              position: 'relative', 
              maxHeight: '90vh', 
              overflowY: 'auto', 
              boxShadow: '0 25px 70px rgba(11, 37, 69, 0.25)' 
            }} 
            className="trip-modal"
          >
            <style>{`
              .trip-modal::-webkit-scrollbar { width: 6px; }
              .trip-modal::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
            `}</style>
            
            <button 
              onClick={() => setSelectedTrip(null)} 
              style={{ 
                position: 'absolute', 
                top: 22, 
                right: 22, 
                background: '#f1f5f9', 
                border: 'none', 
                borderRadius: '50%',
                width: 34,
                height: 34,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b', 
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '5px 14px', borderRadius: 14, letterSpacing: '0.06em' }}>
                {selectedTrip.bookingType} PASS
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: selectedTrip.paymentStatus === 'PAID' ? '#ecfdf5' : '#fff7ed', color: selectedTrip.paymentStatus === 'PAID' ? '#059669' : '#ea580c', border: `1px solid ${selectedTrip.paymentStatus === 'PAID' ? '#a7f3d0' : '#fed7aa'}`, fontSize: 11.5, fontWeight: 800, padding: '4px 12px', borderRadius: 20, fontFamily: "'Space Grotesk', sans-serif" }}>
                <CheckCircle2 size={13} />
                {selectedTrip.paymentStatus === 'PAID' ? 'CONFIRMED & PAID' : selectedTrip.paymentStatus}
              </span>
            </div>

            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 700, color: '#0B2545', margin: '0 0 6px', lineHeight: 1.15 }}>
              {selectedTrip.bookingType === 'PACKAGE' ? (selectedTrip.package?.name || 'Tour Package') :
               selectedTrip.bookingType === 'STAY' ? (selectedTrip.stay?.name || 'Hotel Stay') :
               selectedTrip.bookingType === 'FERRY' ? (selectedTrip.ferry?.name || 'Ferry Catamaran') :
               selectedTrip.bookingType === 'CRUISE' ? (selectedTrip.cruise?.name || 'Island Cruise') :
               selectedTrip.activity?.title || selectedTrip.activity?.name || selectedTrip.serviceName || 'Adventure Activity'}
            </h3>

            {/* Reference info line */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ color: '#F06543', fontWeight: 800 }}>
                Ref Number: {selectedTrip.bookingNumber}
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={13} color="#F06543" />
                Date: {selectedTrip.activityDate || selectedTrip.bookingDate || 'Scheduled'}
              </span>
              {selectedTrip.slotStartTime && (
                <>
                  <span>•</span>
                  <span>⏰ Slot: {selectedTrip.slotStartTime}</span>
                </>
              )}
            </div>

            {/* DETAILS ACCORDION GRID */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              
              {/* 1. PRIMARY BOOKING DETAILS */}
              <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: '20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 900, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                  <Compass size={15} />
                  BOOKING DETAILS
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#64748b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: 2 }}>PRIMARY CUSTOMER</span>
                    <strong style={{ color: '#0B2545', fontSize: 14 }}>{selectedTrip.customerName || 'Guest Traveler'}</strong>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#64748b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: 2 }}>CONTACT</span>
                    <strong style={{ color: '#0B2545', fontSize: 13 }}>
                      {selectedTrip.customerPhone || 'N/A'} {selectedTrip.customerEmail ? `(${selectedTrip.customerEmail})` : ''}
                    </strong>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#64748b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: 2 }}>TOTAL GUESTS</span>
                    <strong style={{ color: '#0B2545', fontSize: 14 }}>{selectedTrip.totalGuests || selectedTrip.guests?.length || 1} Guests</strong>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#64748b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: 2 }}>AMOUNT PAID</span>
                    <strong style={{ color: '#F06543', fontSize: 17, fontFamily: "'Space Grotesk', sans-serif" }}>
                      ₹{Number(selectedTrip.totalAmount || 0).toLocaleString('en-IN')}
                    </strong>
                  </div>
                </div>
              </div>

              {/* 2. TRAVELERS MANIFEST & ID DOCUMENTS */}
              <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: '20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 900, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    <CheckCircle2 size={15} />
                    TRAVELERS MANIFEST & ID DOCUMENTS
                  </div>
                  <span style={{ fontSize: 11.5, color: '#64748b', fontWeight: 700 }}>
                    {selectedTrip.guests?.length || 1} Verified Travelers
                  </span>
                </div>

                {(!selectedTrip.guests || selectedTrip.guests.length === 0) ? (
                  <div style={{ padding: 14, background: '#ffffff', borderRadius: 14, border: '1px solid #edf2f7', fontSize: 12.5, color: '#64748b' }}>
                    Lead traveler manifest registered under {selectedTrip.customerName}.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {selectedTrip.guests.map((gst, gIdx) => {
                      const guestTypeLabel = gst.guestType ? gst.guestType.toUpperCase() : 'ADULT';
                      const genderLabel = gst.gender ? (gst.gender.charAt(0).toUpperCase() + gst.gender.slice(1).toLowerCase()) : 'Male';
                      const idTypeLabel = gst.idType && gst.idType.trim() ? gst.idType : 'Govt ID Proof';

                      return (
                        <div 
                          key={gst.id || gIdx} 
                          style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            gap: 14, 
                            padding: '16px 18px', 
                            background: '#ffffff', 
                            borderRadius: 16, 
                            border: '1.5px solid #e2e8f0', 
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                          }}
                        >
                          {/* Guest identity */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 160 }}>
                            <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(240, 101, 67, 0.12)', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>
                              G{gIdx + 1}
                            </div>
                            <div>
                              <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                GUEST {gIdx + 1}
                              </div>
                              <div style={{ fontSize: 14, fontWeight: 800, color: '#0B2545', marginTop: 1 }}>
                                {gst.fullName || `Guest ${gIdx + 1}`}
                              </div>
                            </div>
                          </div>

                          {/* Guest Category & Gender */}
                          <div style={{ minWidth: 110 }}>
                            <div style={{ fontSize: 10.5, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                              TYPE / GENDER
                            </div>
                            <span style={{ display: 'inline-block', background: guestTypeLabel === 'CHILD' ? '#fef3c7' : '#f1f5f9', color: guestTypeLabel === 'CHILD' ? '#b45309' : '#334155', fontSize: 11.5, fontWeight: 800, padding: '2px 8px', borderRadius: 8, marginTop: 3 }}>
                              {guestTypeLabel} • {genderLabel}
                            </span>
                          </div>

                          {/* ID Document Details */}
                          <div style={{ minWidth: 150 }}>
                            <div style={{ fontSize: 10.5, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                              DOCUMENT ID {gst.idType ? `(${gst.idType})` : ''}
                            </div>
                            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: gst.idNumber ? '#F06543' : '#64748b', marginTop: 2 }}>
                              {gst.idNumber || 'Verified on Check-in'}
                            </div>
                          </div>

                          {/* ID Photo Preview */}
                          <div style={{ minWidth: 100 }}>
                            <div style={{ fontSize: 10.5, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>
                              ID PHOTO
                            </div>
                            {gst.documentImage ? (
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <img
                                  src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/v1', '') : 'http://localhost:5000'}${gst.documentImage}`}
                                  alt="ID"
                                  style={{ width: 38, height: 28, objectFit: 'cover', borderRadius: 6, border: '1px solid #cbd5e1', cursor: 'pointer' }}
                                  onClick={() => window.open(`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/v1', '') : 'http://localhost:5000'}${gst.documentImage}`, '_blank')}
                                  onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <button
                                  onClick={() => window.open(`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/v1', '') : 'http://localhost:5000'}${gst.documentImage}`, '_blank')}
                                  style={{
                                    background: '#FFF0EB', border: '1px solid #FFD3C4',
                                    borderRadius: 6, width: 26, height: 26, display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: '#F06543', cursor: 'pointer', padding: 0
                                  }}
                                  title="View Document"
                                >
                                  <Eye size={13} />
                                </button>
                              </div>
                            ) : (
                              <span style={{ fontSize: 11, color: '#94a3b8', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 8px', borderRadius: 6, display: 'inline-block' }}>
                                Physical ID Check
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. TRANSACTION SPECIFICATIONS */}
              <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: '20px 22px' }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                  TRANSACTION SPECIFICATIONS
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, fontSize: 12.5, color: '#334155', fontFamily: "'Inter', sans-serif" }}>
                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>GATEWAY / SOURCE</span>
                    <strong style={{ color: '#0B2545', fontSize: 13 }}>Razorpay Secure Checkout</strong>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>ORDER ID</span>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#0B2545', fontSize: 12, fontWeight: 700 }}>
                      {selectedTrip.razorpayOrderId || selectedTrip.bookingNumber || 'N/A'}
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>TRANSACTION ID</span>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#0B2545', fontSize: 12, fontWeight: 700 }}>
                      {selectedTrip.razorpayPaymentId || 'Settled'}
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '12px 14px', borderRadius: 14, border: '1px solid #edf2f7' }}>
                    <span style={{ color: '#94a3b8', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>SETTLEMENT STATUS</span>
                    <div style={{ color: '#059669', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                      <CheckCircle2 size={13} />
                      SUCCESSFUL (PAID)
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              {(selectedTrip.bookingStatus === 'CONFIRMED' || selectedTrip.paymentStatus === 'PAID') && selectedTrip.paymentStatus !== 'PENDING' ? (
                <button
                  onClick={() => {
                    window.history.pushState({}, '', `/booking-confirmation/${selectedTrip.bookingNumber}`);
                    window.dispatchEvent(new Event('popstate'));
                  }}
                  style={{
                    flex: 1, 
                    minWidth: 220,
                    padding: '14px 24px', 
                    borderRadius: 14, 
                    border: 'none',
                    background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
                    color: '#ffffff', 
                    fontWeight: 900, 
                    fontSize: 13, 
                    cursor: 'pointer',
                    fontFamily: "'Space Grotesk', sans-serif",
                    boxShadow: '0 4px 16px rgba(240, 101, 67, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    letterSpacing: '0.04em'
                  }}
                >
                  <span>OPEN DIGITAL VOUCHER 📄</span>
                  <ArrowRight size={15} />
                </button>
              ) : (
                <div style={{
                  flex: 1, padding: '12px 20px', borderRadius: 14,
                  background: '#FFF0EB', border: '1px solid #FFD3C4',
                  color: '#F06543', fontWeight: 800, fontSize: 12,
                  fontFamily: "'Space Grotesk', sans-serif", textAlign: 'center'
                }}>
                  ⏳ Payment Pending — Voucher Unlocks After Payment
                </div>
              )}

              <button
                onClick={() => setSelectedTrip(null)}
                style={{
                  padding: '14px 24px', 
                  borderRadius: 14, 
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc',
                  color: '#334155', 
                  fontWeight: 800, 
                  fontSize: 13, 
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'all 0.2s ease'
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
