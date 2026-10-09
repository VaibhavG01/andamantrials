import React, { useState, useEffect, useRef } from 'react';
import { authService } from '../../api/authService';
import { apiClient } from '../../api/apiClient';
import { 
  Menu, X, Bell, Search, Compass, Calendar, CheckSquare, LogOut, User,
  Waves, Ship, Hotel, DollarSign, HelpCircle, FileText, CheckCircle, ShieldAlert
} from 'lucide-react';

// Lazy loaded subviews
import ReceptionDashboard from './views/ReceptionDashboard';
import ReceptionBookings from './views/ReceptionBookings';
import ReceptionBookingsCreate from './views/ReceptionBookingsCreate';
import ReceptionBookingDetails from './views/ReceptionBookingDetails';
import ReceptionCustomers from './views/ReceptionCustomers';
import ReceptionCustomerDetails from './views/ReceptionCustomerDetails';
import ReceptionCheckIn from './views/ReceptionCheckIn';
import ReceptionCheckOut from './views/ReceptionCheckOut';
import ReceptionFerries from './views/ReceptionFerries';
import ReceptionCruises from './views/ReceptionCruises';
import ReceptionStays from './views/ReceptionStays';
import ReceptionInquiries from './views/ReceptionInquiries';
import ReceptionContact from './views/ReceptionContact';
import ReceptionPayments from './views/ReceptionPayments';
import ReceptionProfile from './views/ReceptionProfile';

export default function ReceptionLayout({ currentRoute }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [onDuty, setOnDuty] = useState(false);
  const [loadingShift, setLoadingShift] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New stay arrival expected today at 2 PM', read: false },
    { id: 2, message: 'Pending payment due for Amit Verma', read: false },
    { id: 3, message: 'New inquiry received for trip planning', read: true }
  ]);

  const searchRef = useRef(null);

  useEffect(() => {
    // 1. Fetch logged-in user profile
    const savedUser = localStorage.getItem('andaman_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setCurrentUser(parsed);
        if (parsed.role !== 'RECEPTIONIST' && parsed.role !== 'ADMIN' && parsed.role !== 'SUPER_ADMIN') {
          // Direct user redirect
          window.location.href = '/';
        }
      } catch (err) {
        window.location.href = '/reception/login';
      }
    } else {
      window.location.href = '/reception/login';
    }

    // 2. Fetch shift status
    const fetchShift = async () => {
      try {
        const res = await apiClient('/reception/shift/status');
        setOnDuty(res.data?.onDuty || false);
      } catch (e) {
        console.warn('Failed to load shift status:', e.message);
      }
    };
    fetchShift();
  }, []);

  // Handle outside click for search dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleLogout = () => {
    authService.logout();
    window.location.href = '/reception/login';
  };

  const toggleShift = async () => {
    setLoadingShift(true);
    try {
      const res = await apiClient('/reception/shift/toggle', { method: 'POST' });
      setOnDuty(res.data?.onDuty || false);
    } catch (err) {
      alert('Error updating shift status: ' + err.message);
    } finally {
      setLoadingShift(false);
    }
  };

  // Perform search query
  const performSearch = async (val) => {
    setSearchQuery(val);
    if (!val.trim()) {
      setSearchResult(null);
      setShowSearchDropdown(false);
      return;
    }
    try {
      const res = await apiClient(`/reception/search?query=${val}`);
      setSearchResult(res.data);
      setShowSearchDropdown(true);
    } catch (e) {
      console.error('Search failed:', e);
    }
  };

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setSidebarOpen(false);
    setShowSearchDropdown(false);
  };

  // Extract ID from pathname or search string (e.g. /reception/bookings/10 or /reception/booking-details?id=10)
  const getRouteParamId = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const qId = queryParams.get('id');
    if (qId) return qId;

    // Check path regex
    const bookingMatch = currentRoute.match(/\/reception\/bookings\/(\d+)/);
    if (bookingMatch) return bookingMatch[1];

    const customerMatch = currentRoute.match(/\/reception\/customers\/(\d+)/);
    if (customerMatch) return customerMatch[1];

    return null;
  };

  // Switch view component rendering
  const renderSubview = () => {
    const paramId = getRouteParamId();

    if (currentRoute === '/reception' || currentRoute === '/reception/dashboard') {
      return <ReceptionDashboard onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/bookings') {
      return <ReceptionBookings onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/bookings/create') {
      return <ReceptionBookingsCreate onNavigate={handleNavigate} />;
    }
    if (currentRoute.startsWith('/reception/bookings/') || currentRoute === '/reception/booking-details') {
      return <ReceptionBookingDetails bookingId={paramId} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/customers') {
      return <ReceptionCustomers onNavigate={handleNavigate} />;
    }
    if (currentRoute.startsWith('/reception/customers/') || currentRoute === '/reception/customer-details') {
      return <ReceptionCustomerDetails customerId={paramId} onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/check-in') {
      return <ReceptionCheckIn onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/check-out') {
      return <ReceptionCheckOut onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/ferries') {
      return <ReceptionFerries onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/cruises') {
      return <ReceptionCruises onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/stays') {
      return <ReceptionStays onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/inquiries') {
      return <ReceptionInquiries onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/contact') {
      return <ReceptionContact onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/payments') {
      return <ReceptionPayments onNavigate={handleNavigate} />;
    }
    if (currentRoute === '/reception/profile') {
      return <ReceptionProfile onNavigate={handleNavigate} currentUser={currentUser} onDuty={onDuty} toggleShift={toggleShift} />;
    }

    return (
      <div className="p-8 text-center bg-[#ffffff] border border-red-500/20 rounded-2xl">
        <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold">Unknown Subview Route</h3>
        <p className="text-xs text-slate-500 mt-2">The route {currentRoute} does not map to a frontend receptionist component.</p>
        <button onClick={() => handleNavigate('/reception/dashboard')} className="mt-4 px-4 py-2 bg-[#F06543] text-white hover:bg-[#0b7c71] font-bold rounded-xl text-xs">
          Return to Dashboard
        </button>
      </div>
    );
  };

  const navItems = [
    { label: 'Dashboard', icon: Compass, path: '/reception/dashboard' },
    { label: 'Bookings', icon: Calendar, path: '/reception/bookings' },
    { label: 'Check-In', icon: CheckSquare, path: '/reception/check-in' },
    { label: 'Check-Out', icon: CheckSquare, path: '/reception/check-out' },
    { label: 'Customers', icon: User, path: '/reception/customers' },
    { label: 'Ferries', icon: Waves, path: '/reception/ferries' },
    { label: 'Cruises', icon: Ship, path: '/reception/cruises' },
    { label: 'Stays', icon: Hotel, path: '/reception/stays' },
    { label: 'Inquiries', icon: HelpCircle, path: '/reception/inquiries' },
    { label: 'Contact Msgs', icon: FileText, path: '/reception/contact' },
    { label: 'Payments', icon: DollarSign, path: '/reception/payments' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0B2545] flex flex-col font-sans select-none overflow-x-hidden">
      
      {/* ── TOP HEADER ── */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#ffffff]/95 border-b border-[#e2e8f0] flex items-center justify-between px-4 z-40 backdrop-blur-md">
        
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 text-[#FF6B4A] hover:bg-slate-100/40 rounded-lg md:hidden">
            <Menu className="w-5.5 h-5.5" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('/reception/dashboard')}>
            <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center border border-[rgba(0,194,184,0.4)] shadow-md">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded" />
            </div>
            <span className="font-black text-xs sm:text-sm tracking-wider text-[#FF6B4A]">
              ANDAMAN TRAILS <span className=" text-[#0B2545] /80 text-[10px] font-bold px-1.5 py-0.5 rounded bg-[rgba(0,194,184,0.15)] border border-[rgba(0,194,184,0.3)]">RECEPTION</span>
            </span>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden sm:block relative w-96" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Booking, Guest name, Phone..."
              value={searchQuery}
              onChange={(e) => performSearch(e.target.value)}
              onFocus={() => setShowSearchDropdown(true)}
              className="w-full bg-[#f8fafc]/90 border border-[#e2e8f0] rounded-xl py-1.5 pl-9 pr-4 text-xs  text-slate-800  placeholder-slate-500 focus:outline-none focus:border-[#F06543] transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-4 h-4" />
          </div>

          {/* Search Dropdown Panel */}
          {showSearchDropdown && searchResult && (
            <div className="absolute top-11 left-0 right-0 bg-[#ffffff] border border-[#e2e8f0] rounded-2xl p-4 shadow-2xl z-50 max-h-96 overflow-y-auto">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Search Results</div>
              
              {/* Bookings Match */}
              {searchResult.bookings?.length > 0 && (
                <div className="mb-3">
                  <div className="text-[10px] text-[#F06543] font-extrabold uppercase mb-1">Bookings</div>
                  {searchResult.bookings.map(b => (
                    <div key={b.id} onClick={() => handleNavigate(`/reception/booking-details?id=${b.id}`)} className="p-2 rounded-lg hover:bg-slate-100/40 cursor-pointer text-xs flex justify-between items-center">
                      <span className="font-bold  text-[#0B2545] ">{b.bookingNumber}</span>
                      <span className="text-slate-500">{b.customerName}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Customers Match */}
              {searchResult.customers?.length > 0 && (
                <div className="mb-3">
                  <div className="text-[10px] text-[#F06543] font-extrabold uppercase mb-1">Customers</div>
                  {searchResult.customers.map(c => (
                    <div key={c.id} onClick={() => handleNavigate(`/reception/customer-details?id=${c.id}`)} className="p-2 rounded-lg hover:bg-slate-100/40 cursor-pointer text-xs flex justify-between items-center">
                      <span className="font-bold  text-[#0B2545] ">{c.name}</span>
                      <span className="text-slate-500">{c.phone}</span>
                    </div>
                  ))}
                </div>
              )}

              {(!searchResult.bookings?.length && !searchResult.customers?.length) && (
                <div className="text-xs text-slate-500 py-2 text-center">No matching records found.</div>
              )}
            </div>
          )}
        </div>

        {/* Right Info Controls */}
        <div className="flex items-center gap-3">
          {/* Active Shift status */}
          <button
            onClick={toggleShift}
            disabled={loadingShift}
            className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${
              onDuty 
                ? 'bg-[rgba(33,230,193,0.1)] border border-[#F06543]/40 text-[#F06543]' 
                : 'bg-red-950/20 border border-red-500/30 text-red-400'
            }`}
          >
            {loadingShift ? '● SHIFT...' : onDuty ? '● ON DUTY' : '● OFF DUTY'}
          </button>

          {/* Notifications Trigger */}
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className="p-1.5 text-slate-400 hover: text-slate-800  rounded-lg relative">
              <Bell className="w-4.5 h-4.5" />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F06543] rounded-full" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-10 w-72 bg-[#ffffff] border border-[#e2e8f0] rounded-2xl p-4 shadow-2xl z-50">
                <div className="text-[10px] text-slate-500 font-bold uppercase mb-3">Live Front Desk Alerts</div>
                <div className="space-y-2">
                  {notifications.map(n => (
                    <div key={n.id} className={`p-2 rounded-xl text-xs ${n.read ? 'bg-white/40 text-slate-400' : 'bg-slate-100/40 text-white font-medium'}`}>
                      {n.message}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile link */}
          <button onClick={() => handleNavigate('/reception/profile')} className="p-1.5 text-slate-400 hover: text-slate-800  rounded-lg flex items-center gap-1 text-xs">
            <User className="w-4.5 h-4.5" />
            <span className="hidden md:inline font-bold uppercase">{currentUser?.name?.split(' ')[0] || 'Receptionist'}</span>
          </button>

          {/* LogOut */}
          <button onClick={handleLogout} className="p-1.5 text-red-400 hover:text-red-300 rounded-lg">
            <LogOut className="w-4.5 h-4.5" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        
        {/* ── SIDEBAR NAVIGATION ── */}
        <aside className={`fixed top-16 bottom-0 left-0 w-60 bg-[#ffffff]/95 border-r border-[#e2e8f0] z-30 transition-transform duration-300 transform md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <nav className="p-4 space-y-1.5 h-full overflow-y-auto">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentRoute === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4.5 py-3 rounded-xl font-bold text-xs transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[rgba(33,230,193,0.15)] to-[rgba(22,217,255,0.08)] border-l-4 border-[#F06543] text-white' 
                      : 'text-slate-500 hover:bg-slate-100/40 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#F06543]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-6 mt-6 border-t border-[#e2e8f0] text-[10px] text-slate-500/60 px-4">
              Andaman Trails Portal v2.0
            </div>
          </nav>
        </aside>

        {/* ── MAIN CONTENT WORKSPACE ── */}
        <main className="flex-1 min-w-0 md:pl-60 p-4 sm:p-6 lg:p-8 bg-[#f8fafc]">
          {renderSubview()}
        </main>

      </div>
    </div>
  );
}
