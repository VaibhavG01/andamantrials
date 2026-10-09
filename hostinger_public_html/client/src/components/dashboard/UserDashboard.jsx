// src/components/dashboard/UserDashboard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Interactive User Dashboard Overlay for Andaman Trails.

import React, { useState, useEffect } from 'react';
import { User, Compass, Calendar, Bookmark, Anchor, CreditCard, Award, Download, LogOut, X, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { bookingService } from '../../api/bookingService';
import { authService } from '../../api/authService';

export default function UserDashboard({ isOpen, onClose, user, onLogout }) {
  const [activeTab, setActiveTab] = useState('trips'); // 'trips' | 'saved' | 'ferries' | 'profile'
  const [liveBookings, setLiveBookings] = useState([]);

  useEffect(() => {
    if (isOpen && user) {
      bookingService.getMyBookings()
        .then(res => {
          if (res.data && Array.isArray(res.data)) {
            setLiveBookings(res.data);
          } else {
            setLiveBookings([]);
          }
        })
        .catch(() => setLiveBookings([]));
    }
  }, [isOpen, user]);

  if (!isOpen || !user) return null;

  const sampleBookings = liveBookings.map(b => {
    const title = b.activity?.name 
      || b.package?.name 
      || b.ferry?.name 
      || b.cruise?.name 
      || b.stay?.name 
      || `${b.bookingType || 'Adventure'} Pass`;

    const image = b.activity?.heroImage 
      || b.stay?.heroImage 
      || b.cruise?.heroImage 
      || b.heroImage 
      || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80';

    const guests = b.totalGuests || ((b.adultCount || 1) + (b.childCount || 0));

    return {
      id: b.bookingNumber,
      title,
      dates: b.activityDate || b.bookingDate,
      slot: b.slotStartTime,
      status: b.bookingStatus || (b.paymentStatus === 'PAID' ? 'CONFIRMED' : 'PENDING'),
      paymentStatus: b.paymentStatus || 'PENDING',
      guests: `${guests} Guest(s)`,
      price: `₹${parseFloat(b.totalAmount || 0).toLocaleString('en-IN')}`,
      image,
      rawBooking: b
    };
  });

  const sampleFerries = liveBookings
    .filter(b => b.bookingType === 'FERRY')
    .map(b => ({
      id: b.id,
      operator: b.ferry?.operator || 'Nautika Trans',
      route: `${b.ferry?.name || 'High-speed Catamaran'}`,
      departure: `${b.bookingDate}`,
      seat: 'Assigned on Boarding',
      pnr: b.bookingNumber,
      status: b.bookingStatus || (b.paymentStatus === 'PAID' ? 'CONFIRMED' : 'PENDING'),
      paymentStatus: b.paymentStatus || 'PENDING',
    }));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(2, 11, 20, 0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 960,
          background: '#ffffff',
          border: '1px solid rgba(22, 217, 255, 0.35)',
          borderRadius: 24,
          padding: '28px',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 35px rgba(22, 217, 255, 0.15)',
          position: 'relative',
          color: '#f5fafc',
          maxHeight: '92vh',
          overflowY: 'auto',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: '#e2e8f0',
            border: '1px solid #e2e8f0',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* User Header Profile Card */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            paddingBottom: 24,
            borderBottom: '1px solid #e2e8f0',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {(() => {
              const uObj = typeof user === 'object' && user ? (user.user || user) : {};
              const safeName = typeof uObj.name === 'string' ? uObj.name : (typeof uObj.fullName === 'string' ? uObj.fullName : 'Traveler Guest');
              const safeEmail = typeof uObj.email === 'string' ? uObj.email : 'traveler@example.com';
              const safePhone = typeof uObj.phone === 'string' ? uObj.phone : '';
              const safeTier = uObj.tier || (liveBookings.length >= 5 ? 'VIP PLATINUM' : (liveBookings.length > 0 ? 'EXPLORER' : 'MEMBER'));
              const rewardPoints = Number(uObj.rewardPoints || (liveBookings.length * 250));
              const getInitials = (fullName) => {
                if (!fullName) return 'TR';
                const parts = fullName.trim().split(/\s+/);
                if (parts.length >= 2) {
                  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                }
                return fullName.substring(0, 2).toUpperCase();
              };

              return (
                <>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: 22,
                      fontWeight: 950,
                      boxShadow: '0 0 20px rgba(240, 101, 67, 0.4)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      border: '2px solid #FFD3C4',
                    }}
                  >
                    {getInitials(safeName)}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 800, color: '#0B2545', margin: 0 }}>
                        {safeName}
                      </h3>
                      <span
                        style={{
                          background: '#FFF0EB',
                          border: '1px solid #FFD3C4',
                          color: '#F06543',
                          fontSize: 12.5,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: 10,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {safeTier}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#5C6F84', marginTop: 2 }}>
                      {safeEmail}{safePhone ? ` • ${safePhone}` : ''}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ background: '#FAF4EE', border: '1px solid #EBDED2', borderRadius: 12, padding: '10px 16px', textAlign: 'right' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#5C6F84', textTransform: 'uppercase' }}>REWARDS POINTS</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>
                {((typeof user === 'object' && user ? (user.user || user)?.rewardPoints : null) || (liveBookings.length * 250)).toLocaleString('en-IN')} PTS
              </div>
            </div>

            <button
              onClick={() => {
                authService.logout();
                if (onLogout) onLogout();
                onClose();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              style={{
                background: 'rgba(255, 80, 80, 0.1)',
                border: '1px solid rgba(255, 80, 80, 0.3)',
                color: '#ff6b6b',
                padding: '10px 14px',
                borderRadius: 12,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              <LogOut size={14} /> LOGOUT
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24, borderBottom: '1px solid #e2e8f0', paddingBottom: 12, overflowX: 'auto' }}>
          {[
            { id: 'trips', label: 'MY BOOKED TRIPS', icon: Calendar },
            { id: 'saved', label: 'SAVED ITINERARIES', icon: Bookmark },
            { id: 'ferries', label: 'FERRY TICKETS', icon: Anchor },
            { id: 'payments', label: 'PAYMENT DETAILS', icon: CreditCard },
            { id: 'profile', label: 'PROFILE SETTINGS', icon: User },
          ].map((tab) => {
            const IconComp = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: active ? '#FFF0EB' : 'transparent',
                  border: active ? '1px solid #FFD3C4' : '1px solid transparent',
                  color: active ? '#F06543' : '#5C6F84',
                  padding: '9px 16px',
                  borderRadius: 12,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
              >
                <IconComp size={14} color={active ? '#F06543' : '#5C6F84'} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content 1: MY BOOKED TRIPS */}
        {activeTab === 'trips' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sampleBookings.length === 0 ? (
              <div style={{ padding: '48px 20px', textAlign: 'center', color: '#5C6F84', fontFamily: "'Inter', sans-serif" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', background: '#FFF0EB',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                  color: '#F06543'
                }}>
                  <Calendar size={28} />
                </div>
                <h4 style={{ color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, margin: '0 0 6px', fontWeight: 800 }}>
                  No Bookings Yet
                </h4>
                <p style={{ fontSize: 13, margin: '0 0 20px', color: '#5C6F84' }}>
                  You haven't reserved any catamaran ferries, cruises, or stays yet.
                </p>
                <button
                  onClick={() => {
                    if (onClose) onClose();
                    window.history.pushState({}, '', '/packages');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: 20,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(240, 101, 67, 0.3)',
                  }}
                >
                  Explore Luxury Packages →
                </button>
              </div>
            ) : (
              sampleBookings.map((b) => (
                <div
                  key={b.id}
                  style={{
                    background: '#FAF4EE',
                    border: '1px solid #EBDED2',
                    borderRadius: 16,
                    padding: 16,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <img src={b.image} alt={b.title} style={{ width: 70, height: 70, borderRadius: 12, objectFit: 'cover' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', background: '#FFF0EB', padding: '2px 8px', borderRadius: 6 }}>
                          {b.status}
                        </span>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84' }}>
                          ID: {b.id}
                        </span>
                      </div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', margin: 0 }}>
                        {b.title}
                      </h4>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#5C6F84', marginTop: 2 }}>
                        📅 {b.dates} • 👤 {b.guests}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84' }}>TOTAL AMOUNT</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>{b.price}</div>
                    </div>
                    {!(b.status === 'PENDING' || b.paymentStatus === 'PENDING' || b.status === 'PAYMENT_PENDING' || b.paymentStatus === 'FAILED') ? (
                      <button
                        onClick={() => {
                          window.history.pushState({}, '', `/booking-confirmation/${b.id}`);
                          window.dispatchEvent(new Event('popstate'));
                          if (onClose) onClose();
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
                          border: 'none',
                          color: '#ffffff',
                          padding: '10px 14px',
                          borderRadius: 10,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12.5,
                          fontWeight: 800,
                          boxShadow: '0 4px 12px rgba(240, 101, 67, 0.3)'
                        }}
                      >
                        <Download size={13} /> VOUCHER 📄
                      </button>
                    ) : (
                      <span style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#D97706',
                        background: '#FEF3C7',
                        padding: '6px 12px',
                        borderRadius: 8,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4
                      }}>
                        ⏳ Payment Pending
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab Content 2: SAVED ITINERARIES */}
        {activeTab === 'saved' && (
          <div style={{ padding: '20px 0', textAlign: 'center', color: '#5C6F84', fontFamily: "'Inter', sans-serif" }}>
            <Bookmark size={32} color="#F06543" style={{ margin: '0 auto 12px' }} />
            <h4 style={{ color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, margin: '0 0 6px' }}>Saved 3D Map Itineraries</h4>
            <p style={{ fontSize: 12, margin: 0 }}>You have 1 saved 3D itinerary draft from the Andaman Trails AI Planner.</p>
          </div>
        )}

        {/* Tab Content 3: FERRY TICKETS */}
        {activeTab === 'ferries' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {sampleFerries.length === 0 ? (
              <div style={{ padding: '40px 0', textAlign: 'center', color: '#5C6F84', fontFamily: "'Inter', sans-serif" }}>
                <Anchor size={32} color="#F06543" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, margin: '0 0 6px', fontWeight: 800 }}>No Ferry Tickets Found</h4>
                <p style={{ fontSize: 12, margin: 0 }}>You haven't booked any high-speed catamaran ferries yet.</p>
              </div>
            ) : (
              sampleFerries.map((f) => (
                <div key={f.id} style={{ background: '#FAF4EE', border: '1px solid #EBDED2', borderRadius: 16, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>{f.operator} • PNR: {f.pnr}</div>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545', margin: '4px 0' }}>{f.route}</h4>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#5C6F84' }}>⏰ {f.departure} • 🪑 Seats: {f.seat}</div>
                  </div>
                  {!(f.status === 'PENDING' || f.paymentStatus === 'PENDING' || f.status === 'PAYMENT_PENDING' || f.paymentStatus === 'FAILED') ? (
                    <button
                      onClick={() => {
                        window.history.pushState({}, '', `/booking-confirmation/${f.pnr}`);
                        window.dispatchEvent(new Event('popstate'));
                        if (onClose) onClose();
                      }}
                      style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 14px', borderRadius: 10, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 12px rgba(240, 101, 67, 0.3)' }}
                    >
                      SHOW BOARDING PASS
                    </button>
                  ) : (
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#D97706',
                      background: '#FEF3C7',
                      padding: '6px 10px',
                      borderRadius: 8
                    }}>
                      ⏳ Payment Pending
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab Content 4: PAYMENT DETAILS */}
        {activeTab === 'payments' && (
          <UserPaymentsTab />
        )}

        {/* Tab Content 5: DYNAMIC PROFILE SETTINGS & EDIT */}
        {activeTab === 'profile' && (
          <UserProfileSection user={user} />
        )}
      </div>
    </div>
  );
}

function UserProfileSection({ user }) {
  const [name, setName] = useState(user.name || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profileMsg, setProfileMsg] = useState({ text: '', type: '' });
  const [passMsg, setPassMsg] = useState({ text: '', type: '' });
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [changingPass, setChangingPass] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdatingProfile(true);
    setProfileMsg({ text: '', type: '' });
    try {
      const res = await authService.updateProfile({ name, phone });
      if (res.error || res.status === 'fail' || res.status === 'error') {
        setProfileMsg({ text: res.message || 'Failed to update profile', type: 'error' });
      } else {
        setProfileMsg({ text: 'Profile updated successfully!', type: 'success' });
      }
    } catch (err) {
      setProfileMsg({ text: err.message || 'Error updating profile', type: 'error' });
    } finally {
      setUpdatingProfile(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setChangingPass(true);
    setPassMsg({ text: '', type: '' });
    try {
      const res = await authService.changePassword({ currentPassword, newPassword });
      if (res.error || res.status === 'fail' || res.status === 'error') {
        setPassMsg({ text: res.message || 'Failed to change password', type: 'error' });
      } else {
        setPassMsg({ text: 'Password changed successfully!', type: 'success' });
        setCurrentPassword('');
        setNewPassword('');
      }
    } catch (err) {
      setPassMsg({ text: err.message || 'Error changing password', type: 'error' });
    } finally {
      setChangingPass(false);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
      {/* Profile Info & Edit Form */}
      <div style={{ background: '#ffffff', border: '1px solid #EBDED2', borderRadius: 18, padding: 20, boxShadow: '0 4px 14px rgba(11, 37, 69, 0.04)' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#F06543', fontWeight: 800, letterSpacing: '0.08em', marginBottom: 14 }}>
          ✏️ EDIT PERSONAL INFORMATION
        </div>

        {profileMsg.text && (
          <div style={{ padding: '8px 12px', borderRadius: 8, fontSize: 11.5, marginBottom: 12, background: profileMsg.type === 'success' ? '#FFF0EB' : 'rgba(239, 68, 68, 0.1)', color: profileMsg.type === 'success' ? '#F06543' : '#ef4444', border: `1px solid ${profileMsg.type === 'success' ? '#FFD3C4' : 'rgba(239, 68, 68, 0.3)'}` }}>
            {profileMsg.text}
          </div>
        )}

        <form onSubmit={handleUpdateProfile} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84', marginBottom: 4 }}>FULL NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '9px 12px', borderRadius: 10, background: '#FAF4EE', border: '1px solid #EBDED2', color: '#0B2545', outline: 'none', fontSize: 13, boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84', marginBottom: 4 }}>EMAIL ADDRESS (READ-ONLY)</label>
            <input
              type="email"
              value={user.email || ''}
              disabled
              style={{ width: '100%', padding: '9px 12px', borderRadius: 10, background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#64748b', cursor: 'not-allowed', fontSize: 13, boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84', marginBottom: 4 }}>PHONE NUMBER</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              style={{ width: '100%', padding: '9px 12px', borderRadius: 10, background: '#FAF4EE', border: '1px solid #EBDED2', color: '#0B2545', outline: 'none', fontSize: 13, boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={updatingProfile}
            style={{ marginTop: 6, background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, padding: '10px 18px', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 12px rgba(240, 101, 67, 0.3)' }}
          >
            {updatingProfile ? 'SAVING CHANGES...' : 'SAVE PROFILE CHANGES'}
          </button>
        </form>
      </div>

      {/* Change Password Form */}
      <div style={{ background: '#ffffff', border: '1px solid #EBDED2', borderRadius: 18, padding: 20, boxShadow: '0 4px 14px rgba(11, 37, 69, 0.04)' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#F06543', fontWeight: 800, letterSpacing: '0.08em', marginBottom: 14 }}>
          🔒 CHANGE PASSWORD
        </div>

        {passMsg.text && (
          <div style={{ padding: '8px 12px', borderRadius: 8, fontSize: 11.5, marginBottom: 12, background: passMsg.type === 'success' ? '#FFF0EB' : 'rgba(239, 68, 68, 0.1)', color: passMsg.type === 'success' ? '#F06543' : '#ef4444', border: `1px solid ${passMsg.type === 'success' ? '#FFD3C4' : 'rgba(239, 68, 68, 0.3)'}` }}>
            {passMsg.text}
          </div>
        )}

        <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84', marginBottom: 4 }}>CURRENT PASSWORD</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{ width: '100%', padding: '9px 12px', borderRadius: 10, background: '#FAF4EE', border: '1px solid #EBDED2', color: '#0B2545', outline: 'none', fontSize: 13, boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#5C6F84', marginBottom: 4 }}>NEW PASSWORD</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{ width: '100%', padding: '9px 12px', borderRadius: 10, background: '#FAF4EE', border: '1px solid #EBDED2', color: '#0B2545', outline: 'none', fontSize: 13, boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={changingPass}
            style={{ marginTop: 6, background: '#FFF0EB', border: '1px solid #FFD3C4', color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, padding: '10px 18px', borderRadius: 10, cursor: 'pointer' }}
          >
            {changingPass ? 'UPDATING PASSWORD...' : 'UPDATE PASSWORD'}
          </button>
        </form>
      </div>
    </div>
  );
}

function UserPaymentsTab() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map(bk => ({
            id: `TXN-${bk.bookingNumber}`,
            name: `${bk.bookingType} Reserve Confirmed`,
            amount: `₹${parseFloat(bk.totalAmount).toLocaleString('en-IN')}`,
            date: bk.bookingDate,
            method: bk.razorpayPaymentId ? `Razorpay: ${bk.razorpayPaymentId}` : (bk.paymentStatus === 'PAID' ? 'Razorpay Verified' : 'Standard Payment'),
            status: bk.paymentStatus || 'PAID',
            razorpayPaymentId: bk.razorpayPaymentId,
            razorpayOrderId: bk.razorpayOrderId,
            razorpaySignature: bk.razorpaySignature,
          }));
          setPayments(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const downloadReceipt = (payment) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt - ${payment.id}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; }
            .receipt-container { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 30px; border-radius: 12px; }
            .logo { font-size: 24px; font-weight: bold; color: #F06543; margin-bottom: 20px; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; }
            .title { font-size: 20px; font-weight: bold; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
            .details-label { color: #666; font-size: 12px; text-transform: uppercase; }
            .details-value { font-weight: bold; font-size: 14px; margin-top: 2px; }
            .total-box { background: #FAF4EE; padding: 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-top: 30px; border: 1px solid #EBDED2; }
            .total-label { font-size: 16px; font-weight: bold; }
            .total-amount { font-size: 22px; font-weight: bold; color: #F06543; }
            .footer { text-align: center; font-size: 13px; color: #999; margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="logo">ANDAMAN TRAILS</div>
            <div class="header">
              <span class="title">BOOKING RECEIPT</span>
              <span>Ref: ${payment.id}</span>
            </div>
            <div class="details">
              <div>
                <div class="details-label">SERVICE</div>
                <div class="details-value">${payment.name}</div>
              </div>
              <div>
                <div class="details-label">DATE</div>
                <div class="details-value">${payment.date}</div>
              </div>
              <div>
                <div class="details-label">PAYMENT METHOD</div>
                <div class="details-value">${payment.method}</div>
              </div>
              <div>
                <div class="details-label">STATUS</div>
                <div class="details-value" style="color: #16a34a;">${payment.status}</div>
              </div>
              ${payment.razorpayPaymentId ? `
              <div>
                <div class="details-label">RAZORPAY PAYMENT ID</div>
                <div class="details-value">${payment.razorpayPaymentId}</div>
              </div>
              ` : ''}
              ${payment.razorpayOrderId ? `
              <div>
                <div class="details-label">RAZORPAY ORDER ID</div>
                <div class="details-value">${payment.razorpayOrderId}</div>
              </div>
              ` : ''}
            </div>
            <div class="total-box">
              <span class="total-label">TOTAL AMOUNT PAID</span>
              <span class="total-amount">${payment.amount}</span>
            </div>
            <div class="footer">
              Thank you for choosing Andaman Trails. This is an electronically generated receipt verified via Razorpay Secure Gateway. No physical signature is required.
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (loading) {
    return (
      <div style={{ color: '#F06543', padding: 20, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13 }}>
        Querying transactions...
      </div>
    );
  }

  if (payments.length === 0) {
    return (
      <div style={{ color: '#5C6F84', padding: 20, textAlign: 'center', fontFamily: "'Inter', sans-serif", fontSize: 13 }}>
        No payment history found. Bookings paid via Razorpay will be listed here.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {payments.map(p => (
        <div key={p.id} style={{ background: '#FAF4EE', border: '1px solid #EBDED2', borderRadius: 16, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545' }}>{p.name}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#5C6F84', marginTop: 2 }}>
              Ref: {p.id} • {p.method} • {p.date}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>{p.amount}</div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#16a34a', background: 'rgba(22, 163, 74, 0.1)', padding: '2px 8px', borderRadius: 6, display: 'inline-block', marginTop: 4 }}>
                {p.status}
              </span>
            </div>
            <button
              onClick={() => downloadReceipt(p)}
              title="Download Receipt"
              style={{
                background: '#FFF0EB',
                border: '1px solid #FFD3C4',
                color: '#F06543',
                width: 32,
                height: 32,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Download size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
