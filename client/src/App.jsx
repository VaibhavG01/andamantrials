// src/App.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Andaman Trails Frontend App — Clean URL HTML5 PushState Router.

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import { MapProvider } from './context/MapContext';
import { TripProvider } from './context/TripContext';
import { AuthProvider } from './context/AuthContext';

import Home from './components/pages/Home';
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));

const Destinations = lazy(() => import('./components/pages/Destinations'));
const DestinationDetails = lazy(() => import('./components/pages/DestinationDetails'));
const Packages = lazy(() => import('./components/pages/Packages'));
const PackageDetails = lazy(() => import('./components/pages/PackageDetails'));
const Activities = lazy(() => import('./components/pages/Activities'));
const ActivityDetails = lazy(() => import('./components/pages/ActivityDetails'));
const ActivityBookingPage = lazy(() => import('./components/pages/ActivityBookingPage'));
const ItineraryDetails = lazy(() => import('./components/pages/ItineraryDetails'));
const Ferries = lazy(() => import('./pages/Ferries'));
const FerryDetails = lazy(() => import('./components/pages/FerryDetails'));
const Cruise = lazy(() => import('./components/pages/Cruise'));
const CruiseDetails = lazy(() => import('./components/pages/CruiseDetails'));
const Stays = lazy(() => import('./components/pages/Stays'));
const StayDetails = lazy(() => import('./components/pages/StayDetails'));
const PlaceDetails = lazy(() => import('./components/pages/PlaceDetails'));
const ScubaDiving = lazy(() => import('./components/pages/ScubaDiving'));
const WaterSports = lazy(() => import('./components/pages/WaterSports'));
const Blog = lazy(() => import('./components/pages/Blog'));
const BlogDetails = lazy(() => import('./components/pages/BlogDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PlanTrip = lazy(() => import('./components/pages/PlanTrip'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const FAQPage = lazy(() => import('./components/pages/FAQPage'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/pages/TermsOfService'));
const RefundPolicy = lazy(() => import('./components/pages/RefundPolicy'));
const SitemapPage = lazy(() => import('./components/pages/SitemapPage'));
const NotFound = lazy(() => import('./components/pages/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const ReceptionLogin = lazy(() => import('./components/reception/ReceptionLogin'));
const ReceptionLayout = lazy(() => import('./components/reception/ReceptionLayout'));
const BookingConfirmation = lazy(() => import('./components/pages/BookingConfirmation'));

import FloatingContactButtons from './components/ui/FloatingContactButtons';
import MobileBottomNav from './components/ui/MobileBottomNav';

// Page Loading Spinner
const PageLoader = () => (
  <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FAF4EE', color: '#0B2545' }}>
    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '4px solid #ebdcd0', borderTopColor: '#F06543', animation: 'spin 0.8s linear infinite', marginBottom: 16 }} />
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: '0.2em', color: '#0B2545' }}>
      LOADING ANDAMAN TRAILS...
    </span>
  </div>
);

export default function App() {
  const [locationState, setLocationState] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
    search: window.location.search,
  }));
  const select3DIslandRef = useRef(null);

  useEffect(() => {
    const handleUrlChange = () => {
      setLocationState({
        pathname: window.location.pathname,
        hash: window.location.hash,
        search: window.location.search,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleRegister3DListener = (listener) => {
    select3DIslandRef.current = listener;
  };

  const renderCurrentPage = () => {
    // Resolve route from hash or clean pathname
    let rawRoute = locationState.hash ? locationState.hash.replace('#', '/') : locationState.pathname;
    if (rawRoute === '' || rawRoute === '/') rawRoute = '/home';

    const cleanRoute = rawRoute.split('?')[0].replace(/\/+$/, '');

    const getAuthSession = () => {
      try {
        const token = localStorage.getItem('andaman_token');
        const userStr = localStorage.getItem('andaman_user');
        const user = userStr ? JSON.parse(userStr) : null;
        return { token, user, isAuthenticated: !!(token && user) };
      } catch {
        return { token: null, user: null, isAuthenticated: false };
      }
    };

    const auth = getAuthSession();

    // Login & Register Pages
    if (cleanRoute === '/login' || cleanRoute === '/signin' || cleanRoute === '/register' || cleanRoute === '/signup') {
      return <Login />;
    }

    if (cleanRoute.startsWith('/cruises/') || (cleanRoute.startsWith('/cruise/') && cleanRoute !== '/cruise') || cleanRoute === '/cruise-details') {
      return <CruiseDetails />;
    }
    if ((cleanRoute.startsWith('/ferries/') && cleanRoute !== '/ferries') || cleanRoute === '/ferry-details') {
      return <FerryDetails />;
    }
    if ((cleanRoute.startsWith('/stays/') && cleanRoute !== '/stays') || cleanRoute === '/stay-details') {
      return <StayDetails />;
    }
    if ((cleanRoute.startsWith('/destinations/') && cleanRoute !== '/destinations') || cleanRoute === '/destination-details') {
      return <DestinationDetails />;
    }
    if ((cleanRoute.startsWith('/packages/') && cleanRoute !== '/packages') || (cleanRoute.startsWith('/package/') && cleanRoute !== '/package') || cleanRoute === '/package-details') {
      return <PackageDetails />;
    }
    if (cleanRoute.startsWith('/activity-booking') || cleanRoute === '/book-activity' || cleanRoute.endsWith('/book') || cleanRoute.startsWith('/activities/book')) {
      return <ActivityBookingPage />;
    }
    if ((cleanRoute.startsWith('/activities/') && cleanRoute !== '/activities') || cleanRoute === '/activity-details') {
      return <ActivityDetails />;
    }
    if (cleanRoute === '/place-details') {
      return <PlaceDetails />;
    }
    if (cleanRoute.startsWith('/booking-confirmation') || cleanRoute.startsWith('/booking-confirmed')) {
      return <BookingConfirmation />;
    }
    if ((cleanRoute.startsWith('/blog/') && cleanRoute !== '/blog') || cleanRoute === '/blog-details') {
      return <BlogDetails />;
    }

    // Admin Route Protection
    if (cleanRoute.startsWith('/admin')) {
      if (cleanRoute === '/admin/login' || cleanRoute === '/admin') {
        return <AdminLogin />;
      }
      if (!auth.isAuthenticated || (auth.user?.role !== 'SUPER_ADMIN' && auth.user?.role !== 'ADMIN' && auth.user?.role !== 'EDITOR')) {
        return <AdminLogin />;
      }
      return <AdminDashboard />;
    }

    // Reception Route Protection
    if (cleanRoute.startsWith('/reception')) {
      if (cleanRoute === '/reception/login') {
        return <ReceptionLogin />;
      }
      if (!auth.isAuthenticated || (auth.user?.role !== 'RECEPTIONIST' && auth.user?.role !== 'ADMIN' && auth.user?.role !== 'SUPER_ADMIN')) {
        return <ReceptionLogin />;
      }
      return <ReceptionLayout currentRoute={cleanRoute} />;
    }

    // Traveler Dashboard Route Protection
    if (
      cleanRoute === '/dashboard' ||
      cleanRoute.startsWith('/dashboard/') ||
      cleanRoute === '/my-trips' ||
      cleanRoute === '/bookings' ||
      cleanRoute === '/my-bookings'
    ) {
      if (!auth.isAuthenticated) {
        return <Login />;
      }
      return <Dashboard />;
    }

    switch (cleanRoute) {
      case '/admin':
      case '/admin/login':
        return <AdminLogin />;
      case '/admin/dashboard':
        if (!auth.isAuthenticated || (auth.user?.role !== 'SUPER_ADMIN' && auth.user?.role !== 'ADMIN' && auth.user?.role !== 'EDITOR')) {
          return <AdminLogin />;
        }
        return <AdminDashboard />;
      case '/login':
      case '/signin':
      case '/register':
      case '/signup':
        return <Login />;
      case '/dashboard':
      case '/dashboard/trips':
      case '/dashboard/bookings':
      case '/dashboard/itinerary':
      case '/dashboard/wishlist':
      case '/dashboard/documents':
      case '/dashboard/payments':
      case '/dashboard/profile':
      case '/dashboard/support':
      case '/my-trips':
      case '/bookings':
        if (!auth.isAuthenticated) {
          return <Login />;
        }
        return <Dashboard />;
      case '/destinations':
        return <Destinations />;
      case '/destination-details':
        return <DestinationDetails />;
      case '/packages':
        return <Packages />;
      case '/package-details':
        return <PackageDetails />;
      case '/itinerary':
      case '/itinerary-details':
        return <ItineraryDetails />;
      case '/activities':
        return <Activities />;
      case '/activity-details':
        return <ActivityDetails />;
      case '/activity-booking':
      case '/book-activity':
      case '/activities/book':
        return <ActivityBookingPage />;
      case '/ferries':
      case '/ferry-booking':
      case '/cruises':
      case '/cruise':
      case '/cruise-booking':
        return <Ferries />;
      case '/ferry-details':
        return <FerryDetails />;
      case '/stays':
      case '/resorts':
        return <Stays />;
      case '/stay-details':
        return <StayDetails />;
      case '/scuba':
        return <ScubaDiving />;
      case '/water-sports':
        return <WaterSports />;
      case '/blog':
        return <Blog />;
      case '/blog-details':
        return <BlogDetails />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/gallery':
        return <GalleryPage />;
      case '/plan-trip':
      case '/plan-your-trip':
      case '/plan-holiday':
      case '/customize-package':
      case '/custom-package':
      case '/trip-planner':
        return <PlanTrip />;
      case '/faq-page':
      case '/faq':
        return <FAQPage />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <TermsOfService />;
      case '/refund':
        return <RefundPolicy />;
      case '/sitemap':
        return <SitemapPage />;
      case '/404':
        return <NotFound />;
      case '/':
      case '/home':
        return <Home onDestinationSelect={handleRegister3DListener} />;
      default:
        return <NotFound />;
    }
  };

  const isDashboardOrAdmin = 
    locationState.pathname.startsWith('/dashboard') || 
    locationState.pathname.startsWith('/admin') || 
    locationState.pathname.startsWith('/reception') || 
    locationState.pathname.startsWith('/login') || 
    locationState.pathname.startsWith('/register') || 
    locationState.pathname.startsWith('/signin') || 
    locationState.pathname.startsWith('/signup') || 
    (locationState.hash && (
      locationState.hash.startsWith('#/dashboard') || 
      locationState.hash.startsWith('#/admin') || 
      locationState.hash.startsWith('#/reception') || 
      locationState.hash.startsWith('#/login') || 
      locationState.hash.startsWith('#/register')
    ));

  return (
    <AuthProvider>
      <MapProvider>
        <TripProvider>
          <div style={{ width: '100%', minHeight: '100vh', background: '#f8fafc', color: '#334155', overflowX: 'hidden' }}>
            {/* Master Navigation Bar (Hidden on Dashboard & Admin to prevent double navbars) */}
            {!isDashboardOrAdmin && <Navbar />}

            {/* Dynamic Page Router Body */}
            <Suspense fallback={<PageLoader />}>
              {renderCurrentPage()}
            </Suspense>

            {/* Global Floating Action Buttons (WhatsApp & Call) */}
            <FloatingContactButtons />

            {/* Native App-Style Mobile Bottom Navigation Bar */}
            <MobileBottomNav />
          </div>
        </TripProvider>
      </MapProvider>
    </AuthProvider>
  );
}

