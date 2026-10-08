import {
  LayoutDashboard, Map, Ship, Calendar, Anchor, Home, Layers,
  CreditCard, FileText, Star, Image, Users, MessageSquare,
  Mail, Settings, User, X, Compass, ChevronRight, ShieldAlert, Film, Camera
} from 'lucide-react';

const NAV_GROUPS = [
  {
    title: 'DASHBOARD',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    ],
  },
  {
    title: 'TRAVEL',
    items: [
      { id: 'destinations', label: 'Destinations', icon: Map, path: '/admin/destinations' },
      { id: 'ferries', label: 'Ferries & Cruises', icon: Ship, path: '/admin/ferries', aliases: ['/admin/cruises'] },
      { id: 'stays', label: 'Stays & Rooms', icon: Home, path: '/admin/stays' },
      { id: 'activities', label: 'Activities', icon: Compass, path: '/admin/activities' },
      { id: 'activity-slots', label: 'Activity Slots & Schedule', icon: Calendar, path: '/admin/activity-slots' },
      { id: 'packages', label: 'Packages', icon: Layers, path: '/admin/packages' },
    ],
  },
  {
    title: 'BOOKINGS',
    items: [
      { id: 'bookings', label: 'All Bookings', icon: CreditCard, path: '/admin/bookings' },
      { id: 'ferry-cruise-bookings', label: 'Ferry & Cruise Bookings', icon: Ship, path: '/admin/bookings?type=FERRY' },
      { id: 'stay-bookings', label: 'Stay Bookings', icon: Home, path: '/admin/bookings?type=STAY' },
      { id: 'activity-bookings', label: 'Activity Bookings', icon: Compass, path: '/admin/bookings?type=ACTIVITY' },
      { id: 'package-bookings', label: 'Package Bookings', icon: Layers, path: '/admin/bookings?type=PACKAGE' },
    ],
  },
  {
    title: 'CONTENT',
    items: [
      { id: 'gallery', label: 'Photo Gallery', icon: Camera, path: '/admin/gallery' },
      { id: 'blogs', label: 'Blogs & Articles', icon: FileText, path: '/admin/blogs' },
      { id: 'reviews', label: 'Reviews', icon: Star, path: '/admin/reviews' },
      { id: 'media', label: 'Media Library', icon: Image, path: '/admin/media' },
      { id: 'film-showcase', label: 'Cinematic Chapters', icon: Film, path: '/admin/film-chapters' },
      { id: 'testimonials', label: 'Traveler Stories', icon: MessageSquare, path: '/admin/testimonials' },
    ],
  },
  {
    title: 'CUSTOMERS',
    items: [
      { id: 'users', label: 'Users', icon: Users, path: '/admin/users', adminOnly: true },
      { id: 'inquiries', label: 'Inquiries', icon: MessageSquare, path: '/admin/inquiries' },
      { id: 'contact', label: 'Contact Messages', icon: Mail, path: '/admin/contact' },
    ],
  },
  {
    title: 'SYSTEM',
    items: [
      { id: 'masters', label: 'Category & Location Masters', icon: Layers, path: '/admin/masters' },
      { id: 'settings', label: 'Platform Settings', icon: Settings, path: '/admin/settings', superAdminOnly: true },
      { id: 'profile', label: 'Profile', icon: User, path: '/admin/profile' },
    ],
  },
];

export default function Sidebar({ activeRoute = '/admin/dashboard', isOpen, onClose }) {
  const currentUser = (() => {
    try {
      const u = localStorage.getItem('andaman_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();

  const userRole = (currentUser?.role || 'ADMIN').toUpperCase();
  const isSuperAdmin = userRole === 'SUPER_ADMIN';
  const isAdmin = userRole === 'ADMIN' || userRole === 'SUPER_ADMIN';
  const isEditor = userRole === 'EDITOR';

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (onClose) onClose();
  };

  return (
    <aside className={`admin-sidebar${isOpen ? ' open' : ''}`}>
      <style>{`
        .admin-sidebar {
          width: 270px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          scrollbar-width: none;
        }
        .admin-sidebar::-webkit-scrollbar { display: none; }

        @media (max-width: 1024px) {
          .admin-sidebar {
            transform: translateX(-100%);
            box-shadow: 16px 0 50px rgba(0,0,0,0.9);
          }
          .admin-sidebar.open {
            transform: translateX(0);
          }
        }

        .adm-sb-logo {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .adm-sb-nav-section {
          padding: 16px 14px 4px;
        }
        .adm-sb-sec-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #527588;
          letter-spacing: 0.14em;
          padding: 0 10px 8px;
          text-transform: uppercase;
        }

        .adm-sb-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 12px;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: #64748b;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          text-align: left;
        }
        .adm-sb-btn:hover {
          color: #ffffff;
          background: rgba(22, 217, 255, 0.06);
        }

        .adm-sb-btn.active {
          color: #F06543;
          background: rgba(22, 217, 255, 0.12);
          box-shadow: inset 0 0 12px rgba(22, 217, 255, 0.15);
          font-weight: 700;
        }

        .adm-sb-btn.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 18%;
          bottom: 18%;
          width: 3.5px;
          border-radius: 0 4px 4px 0;
          background: linear-gradient(180deg, #F06543, #F06543);
          box-shadow: 0 0 10px #F06543;
        }
      `}</style>

      {/* BRANDING & ROLE BADGE */}
      <div className="adm-sb-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => handleNavigate('/admin/dashboard')}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: '#ffffff', padding: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(0, 194, 184, 0.4)',
            border: '1px solid rgba(0, 194, 184, 0.5)'
          }}>
            <img src="/logo.png" alt="Andaman Trails Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 900, color: '#334155', letterSpacing: '0.04em', lineHeight: 1.2 }}>
              ANDAMAN <span style={{ color: '#FF6B4A' }}>TRAILS</span>
            </div>
            <div style={{ marginTop: 3 }}>
              {isSuperAdmin ? (
                <span style={{
                  fontSize: 10,
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #7C3AED, #9333EA)',
                  color: '#ffffff',
                  padding: '2px 7px',
                  borderRadius: 6,
                  letterSpacing: '0.06em',
                  display: 'inline-block'
                }}>
                  👑 SUPER ADMIN
                </span>
              ) : isEditor ? (
                <span style={{
                  fontSize: 10,
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: '#FEF3C7',
                  color: '#D97706',
                  border: '1px solid #FDE68A',
                  padding: '2px 7px',
                  borderRadius: 6,
                  letterSpacing: '0.06em',
                  display: 'inline-block'
                }}>
                  ✍️ CONTENT EDITOR
                </span>
              ) : (
                <span style={{
                  fontSize: 10,
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: '#EFF6FF',
                  color: '#2563EB',
                  border: '1px solid #BFDBFE',
                  padding: '2px 7px',
                  borderRadius: 6,
                  letterSpacing: '0.06em',
                  display: 'inline-block'
                }}>
                  🛡️ ADMINISTRATOR
                </span>
              )}
            </div>
          </div>
        </div>

        {onClose && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        )}
      </div>

      {/* NAV GROUPS */}
      <div style={{ flex: 1, paddingBottom: 24 }}>
        {NAV_GROUPS.map((group) => {
          // Filter items based on superAdmin & editor permissions
          const filteredItems = group.items.filter((item) => {
            if (item.superAdminOnly && !isSuperAdmin) return false;
            if (item.adminOnly && isEditor) return false;
            return true;
          });
          if (filteredItems.length === 0) return null;

          return (
            <div key={group.title} className="adm-sb-nav-section">
              <div className="adm-sb-sec-title">{group.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {filteredItems.map((item) => {
                  const Icon = item.icon;
                  const currentFullPath = window.location.pathname + window.location.search;
                  const isActive = item.path.includes('?')
                    ? currentFullPath === item.path
                    : (activeRoute === item.path ||
                       (item.aliases && item.aliases.includes(activeRoute)) ||
                       (item.path !== '/admin/dashboard' && activeRoute.startsWith(item.path + '/')));

                  return (
                    <button
                      key={item.id}
                      className={`adm-sb-btn${isActive ? ' active' : ''}`}
                      onClick={() => handleNavigate(item.path)}
                    >
                      <Icon size={17} color={isActive ? '#F06543' : '#9cb3bd'} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
