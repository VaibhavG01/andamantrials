import React, { useState, useEffect } from 'react';
import {
  CreditCard, DollarSign, Users, Home, Ship, Anchor, MapPin, MessageSquare,
  Plus, ArrowRight, CheckCircle2, Clock, Calendar, Sparkles, RefreshCw, PenLine, Compass
} from 'lucide-react';
import StatCard from '../components/StatCard';
import { RevenueChartCard, BookingDonutChartCard } from '../components/ChartCard';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';

const MOCK_RECENT_BOOKINGS = [
  { id: 'AT-FRY-2026-000123', customer: 'Rahul Sharma', type: 'FERRY', route: 'Port Blair → Havelock', date: '17 Aug 2026', amount: '₹4,500', status: 'CONFIRMED', created: '10 mins ago' },
  { id: 'AT-STY-2026-000124', customer: 'Priya Patel', type: 'STAY', route: 'Taj Exotica Havelock (3 Nights)', date: '20 Aug 2026', amount: '₹42,000', status: 'CONFIRMED', created: '32 mins ago' },
  { id: 'AT-CRS-2026-000125', customer: 'Vikram Malhotra', type: 'CRUISE', route: 'Sunset Luxury Sail', date: '18 Aug 2026', amount: '₹12,500', status: 'PENDING', created: '1 hour ago' },
  { id: 'AT-FRY-2026-000126', customer: 'Ananya Roy', type: 'FERRY', route: 'Havelock → Neil Island', date: '19 Aug 2026', amount: '₹3,200', status: 'CONFIRMED', created: '2 hours ago' },
  { id: 'AT-STY-2026-000127', customer: 'Amit Verma', type: 'STAY', route: 'Barefoot at Havelock', date: '22 Aug 2026', amount: '₹28,500', status: 'CANCELLED', created: '4 hours ago' },
];

const MOCK_INQUIRIES = [
  { id: '1', name: 'Siddharth Rao', type: 'TRIP PLANNING', phone: '+91 98765 43210', email: 'siddharth@gmail.com', date: 'Today', status: 'NEW' },
  { id: '2', name: 'Meera Deshmukh', type: 'FERRY', phone: '+91 98123 45678', email: 'meera@gmail.com', date: 'Today', status: 'CONTACTED' },
  { id: '3', name: 'Arjun Kapoor', type: 'CRUISE', phone: '+91 97890 12345', email: 'arjun@gmail.com', date: 'Yesterday', status: 'RESOLVED' },
];

export default function DashboardHome() {
  const [dateRange, setDateRange] = useState('30 Days');
  const [chartPeriod, setChartPeriod] = useState('30d');
  const [stats, setStats] = useState({
    totalBookings: '0',
    totalRevenue: '₹0',
    totalUsers: '0',
    activeStays: '0',
    activeFerries: '0',
    activeCruises: '0',
    destinations: '0',
    pendingInquiries: '0',
    recentBookings: [],
    recentInquiries: [],
    revenueHistory: [],
    bookingStatistics: { FERRY: 0, STAY: 0, CRUISE: 0 }
  });

  useEffect(() => {
    adminService.getDashboardStats({ range: dateRange, period: chartPeriod })
      .then((res) => {
        if (res.data) {
          const d = res.data;
          setStats({
            totalBookings: String(d.totalBookings || 0),
            totalRevenue: d.revenue ? `₹${parseFloat(d.revenue).toLocaleString('en-IN')}` : '₹0',
            totalUsers: String(d.totalUsers || 0),
            activeStays: String(d.totalStays || 0),
            activeFerries: String(d.totalFerries || 0),
            activeCruises: String(d.totalCruises || 0),
            destinations: String(d.totalDestinations || 0),
            pendingInquiries: String(d.totalInquiries || 0),
            recentBookings: d.recentBookings || [],
            recentInquiries: d.recentInquiries || [],
            revenueHistory: d.revenueHistory || [],
            bookingStatistics: d.bookingStatistics || { FERRY: 0, STAY: 0, CRUISE: 0 }
          });
        }
      })
      .catch(() => {});
  }, [dateRange, chartPeriod]);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const currentUser = (() => {
    try {
      const u = localStorage.getItem('andaman_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();

  const displayName = currentUser?.name || (currentUser?.role === 'SUPER_ADMIN' ? 'Super Admin' : 'Admin');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* 1. DASHBOARD HEADER & DATE RANGE FILTER */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            EXECUTIVE OPERATIONAL DASHBOARD
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 900, color: '#0B2545', margin: '4px 0 0' }}>
            Dashboard Overview
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: '2px 0 0' }}>
            Welcome back, <strong style={{ color: '#0B2545' }}>{displayName}</strong>. Here is your platform operations summary.
          </p>
        </div>

        {/* Global Date Range Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#ffffff', border: '1px solid #e2e8f0', padding: 6, borderRadius: 20 }}>
          <Calendar size={15} color="#F06543" style={{ marginLeft: 8 }} />
          {['Today', '7 Days', '30 Days', 'This Year'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              style={{
                background: dateRange === range ? 'linear-gradient(135deg, #FF6B4A, #F06543)' : 'transparent',
                color: dateRange === range ? '#ffffff' : '#9cb3bd',
                border: 'none',
                padding: '6px 14px',
                borderRadius: 14,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: dateRange === range ? 900 : 700,
                cursor: 'pointer',
              }}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* 2. 7 KPI METRIC CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
        <StatCard title="Total Bookings" value={stats.totalBookings} change="+12.4%" icon={CreditCard} color="#F06543" onClick={() => handleNavigate('/admin/bookings')} />
        <StatCard title="Total Revenue" value={stats.totalRevenue} change="+18.2%" icon={DollarSign} color="#F06543" onClick={() => handleNavigate('/admin/bookings')} />
        <StatCard title="Total Users" value={stats.totalUsers} change="+8.6%" icon={Users} color="#ffab00" onClick={() => handleNavigate('/admin/users')} />
        <StatCard title="Active Stays" value={stats.activeStays} change="+2" icon={Home} color="#F06543" onClick={() => handleNavigate('/admin/stays')} />
        <StatCard title="Active Ferries & Cruises" value={(Number(stats.activeFerries) || 0) + (Number(stats.activeCruises) || 0) || '12'} change="100% Operational" icon={Ship} color="#F06543" onClick={() => handleNavigate('/admin/ferries')} />
        <StatCard title="Destinations" value={stats.destinations} change="4 Main Islands" icon={MapPin} color="#F06543" onClick={() => handleNavigate('/admin/destinations')} />
        <StatCard title="Pending Inquiries" value={stats.pendingInquiries} change="Needs Attention" icon={MessageSquare} color="#ff4f7b" onClick={() => handleNavigate('/admin/inquiries')} />
      </div>

      {/* 3. REVENUE CHART & BOOKING DONUT BREAKDOWN */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }} className="dash-home-charts">
        <style>{`
          @media (max-width: 1024px) {
            .dash-home-charts { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <RevenueChartCard data={stats.revenueHistory} onPeriodChange={(p) => setChartPeriod(p)} />
        <BookingDonutChartCard
          data={[
            { name: 'Ferry & Cruise', value: (stats.bookingStatistics.FERRY || 0) + (stats.bookingStatistics.CRUISE || 0), color: '#F06543' },
            { name: 'Stay', value: stats.bookingStatistics.STAY || 0, color: '#F06543' },
            { name: 'Activity', value: stats.bookingStatistics.ACTIVITY || 0, color: '#ffab00' },
          ]}
        />
      </div>

      {/* 4. QUICK ACTIONS BAR */}
      <div className="adm-quick-actions-card">
        <div className="adm-qa-header">
          <div className="adm-qa-icon-wrap">
            <Sparkles size={18} color="#F06543" />
          </div>
          <div>
            <div className="adm-qa-title">QUICK ACTIONS</div>
            <div className="adm-qa-sub">Platform Management Shortcuts</div>
          </div>
        </div>

        <div className="adm-qa-buttons-wrap">
          <button onClick={() => handleNavigate('/admin/destinations')} className="adm-qa-action-btn qa-btn-dest">
            <span className="qa-btn-icon-pill"><MapPin size={14} /></span>
            <span>+ ADD DESTINATION</span>
          </button>

          <button onClick={() => handleNavigate('/admin/ferries')} className="adm-qa-action-btn qa-btn-ferry">
            <span className="qa-btn-icon-pill"><Ship size={14} /></span>
            <span>+ ADD FERRY / CRUISE</span>
          </button>

          <button onClick={() => handleNavigate('/admin/stays')} className="adm-qa-action-btn qa-btn-stay">
            <span className="qa-btn-icon-pill"><Home size={14} /></span>
            <span>+ ADD STAY</span>
          </button>

          <button onClick={() => handleNavigate('/admin/blogs/create')} className="adm-qa-action-btn qa-btn-blog">
            <span className="qa-btn-icon-pill"><PenLine size={14} /></span>
            <span>+ CREATE BLOG</span>
          </button>

          <button onClick={() => handleNavigate('/admin/bookings')} className="adm-qa-action-btn qa-btn-bookings-primary">
            <span>VIEW BOOKINGS</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <style>{`
          .adm-quick-actions-card {
            background: #ffffff;
            border: 1.5px solid #e2e8f0;
            border-radius: 20px;
            padding: 16px 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04);
          }
          .adm-qa-header {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .adm-qa-icon-wrap {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: rgba(240, 101, 67, 0.1);
            border: 1px solid rgba(240, 101, 67, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .adm-qa-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 13.5px;
            font-weight: 800;
            color: #0B2545;
            letter-spacing: 0.08em;
          }
          .adm-qa-sub {
            font-family: 'Inter', sans-serif;
            font-size: 11.5px;
            color: #64748b;
            margin-top: 1px;
          }
          .adm-qa-buttons-wrap {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }
          .adm-qa-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #f8fafc;
            border: 1.5px solid #e2e8f0;
            color: #1e293b;
            padding: 9px 15px;
            border-radius: 13px;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.03em;
            cursor: pointer;
            transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
            white-space: nowrap;
          }
          .adm-qa-action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
          }
          .qa-btn-icon-pill {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;
          }
          .adm-qa-action-btn:hover .qa-btn-icon-pill {
            transform: scale(1.1);
          }
          .qa-btn-dest:hover {
            border-color: #10b981;
            color: #059669;
            background: rgba(16, 185, 129, 0.08);
          }
          .qa-btn-ferry:hover {
            border-color: #0284c7;
            color: #0284c7;
            background: rgba(2, 132, 199, 0.08);
          }
          .qa-btn-stay:hover {
            border-color: #f59e0b;
            color: #d97706;
            background: rgba(245, 158, 11, 0.08);
          }
          .qa-btn-blog:hover {
            border-color: #8b5cf6;
            color: #7c3aed;
            background: rgba(139, 92, 246, 0.08);
          }
          .qa-btn-bookings-primary {
            background: linear-gradient(135deg, #0B2545 0%, #1e3a8a 60%, #F06543 100%);
            color: #ffffff !important;
            border: 1.5px solid transparent;
            box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
          }
          .qa-btn-bookings-primary:hover {
            box-shadow: 0 8px 22px rgba(240, 101, 67, 0.35);
            transform: translateY(-2px) scale(1.02);
            color: #ffffff !important;
          }
          @media (max-width: 900px) {
            .adm-quick-actions-card {
              flex-direction: column;
              align-items: flex-start;
            }
            .adm-qa-buttons-wrap {
              width: 100%;
            }
            .adm-qa-action-btn {
              flex: 1 1 calc(50% - 10px);
              justify-content: center;
            }
          }
          @media (max-width: 480px) {
            .adm-qa-action-btn {
              flex: 1 1 100%;
            }
          }
        `}</style>
      </div>

      {/* 5. RECENT BOOKINGS & INQUIRIES 2-COLUMN SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr', gap: 24 }} className="dash-home-bottom">
        <style>{`
          @media (max-width: 1024px) {
            .dash-home-bottom { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* RECENT BOOKINGS TABLE */}
        <div style={{
          background: '#ffffff',
          backdropFilter: 'blur(20px)',
          border: '1.5px solid #e2e8f0',
          borderRadius: 24,
          padding: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                LIVE RESERVATIONS
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '2px 0 0' }}>
                Recent Bookings
              </h3>
            </div>
            <button onClick={() => handleNavigate('/admin/bookings')} style={{ background: 'none', border: 'none', color: '#F06543', fontSize: 12, fontWeight: 800, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif" }}>
              VIEW ALL →
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 12.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#527588', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5 }}>
                  <th style={{ padding: '10px' }}>BOOKING ID</th>
                  <th style={{ padding: '10px' }}>CUSTOMER</th>
                  <th style={{ padding: '10px' }}>TYPE</th>
                  <th style={{ padding: '10px' }}>ROUTE / STAY</th>
                  <th style={{ padding: '10px' }}>AMOUNT</th>
                  <th style={{ padding: '10px' }}>STATUS</th>
                  <th style={{ padding: '10px', textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {(stats.recentBookings || []).map((bk) => (
                  <tr key={bk.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 10px', fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif" }}>{bk.bookingNumber}</td>
                    <td style={{ padding: '12px 10px', color: '#334155', fontWeight: 600 }}>{bk.customerName}</td>
                    <td style={{ padding: '12px 10px', color: '#64748b', fontSize: 11, fontWeight: 700 }}>{bk.bookingType}</td>
                    <td style={{ padding: '12px 10px', color: '#64748b' }}>{bk.bookingDate}</td>
                    <td style={{ padding: '12px 10px', color: '#F06543', fontWeight: 800 }}>₹{parseFloat(bk.totalAmount || 0).toLocaleString('en-IN')}</td>
                    <td style={{ padding: '12px 10px' }}><StatusBadge status={bk.bookingStatus} /></td>
                    <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                      <button onClick={() => handleNavigate('/admin/bookings')} style={{ background: 'rgba(22, 217, 255, 0.1)', border: '1px solid rgba(22, 217, 255, 0.3)', color: '#F06543', padding: '4px 10px', borderRadius: 10, fontSize: 12.5, fontWeight: 800, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif" }}>
                        VIEW →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TODAY'S OPERATIONS & RECENT INQUIRIES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* TODAY'S OPERATIONS CARD */}
          <div style={{
            background: '#ffffff',
            backdropFilter: 'blur(20px)',
            border: '1.5px solid #e2e8f0',
            borderRadius: 24,
            padding: '20px 24px',
          }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#ffab00', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
              LIVE STATUS
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#0B2545', margin: '0 0 14px' }}>
              Today's Operations
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: '#f8fafc', padding: 12, borderRadius: 14, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#334155' }}>Port Blair → Havelock Catamaran</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>09:00 AM Departure</div>
                </div>
                <StatusBadge status="ON TIME" />
              </div>

              <div style={{ background: '#f8fafc', padding: 12, borderRadius: 14, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#334155' }}>Sunset Cruise Charter</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>05:30 PM Schedule</div>
                </div>
                <StatusBadge status="SCHEDULED" />
              </div>
            </div>
          </div>

          {/* RECENT INQUIRIES CARD */}
          <div style={{
            background: '#ffffff',
            backdropFilter: 'blur(20px)',
            border: '1.5px solid #e2e8f0',
            borderRadius: 24,
            padding: '20px 24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#0B2545', margin: 0 }}>
                Recent Inquiries
              </h3>
              <button onClick={() => handleNavigate('/admin/inquiries')} style={{ background: 'none', border: 'none', color: '#F06543', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}>
                VIEW ALL →
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {(stats.recentInquiries || []).map((inq) => (
                <div key={inq.id} style={{ background: '#f8fafc', padding: 12, borderRadius: 14, border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 12.5, fontWeight: 800, color: '#334155' }}>{inq.name}</span>
                    <StatusBadge status={inq.status} />
                  </div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>{inq.inquiryType || 'PLANNING'} • {inq.phone || 'N/A'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
