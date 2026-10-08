import React, { useState, useEffect } from 'react';
import AdminLayout from '../../admin/layouts/AdminLayout';
import DashboardHome from '../../admin/pages/DashboardHome';
import BookingsManagement from '../../admin/pages/BookingsManagement';
import UsersManagement from '../../admin/pages/UsersManagement';
import DestinationsManagement from '../../admin/pages/DestinationsManagement';
import FerriesManagement from '../../admin/pages/FerriesManagement';
import CruisesManagement from '../../admin/pages/CruisesManagement';
import StaysManagement from '../../admin/pages/StaysManagement';
import BlogsManagement from '../../admin/pages/BlogsManagement';
import BlogForm from '../../admin/pages/BlogForm';
import InquiriesManagement from '../../admin/pages/InquiriesManagement';
import ContactMessagesManagement from '../../admin/pages/ContactMessagesManagement';
import ReviewsManagement from '../../admin/pages/ReviewsManagement';
import MediaManagement from '../../admin/pages/MediaManagement';
import SettingsManagement from '../../admin/pages/SettingsManagement';
import ProfileManagement from '../../admin/pages/ProfileManagement';
import FilmChaptersManagement from '../../admin/pages/FilmChaptersManagement';
import ActivitiesManagement from '../../admin/pages/ActivitiesManagement';
import ActivitySlotsManagement from '../../admin/pages/ActivitySlotsManagement';
import TestimonialsManagement from '../../admin/pages/TestimonialsManagement';
import PackagesManagement from '../../admin/pages/PackagesManagement';
import MasterDataManagement from '../../admin/pages/MasterDataManagement';
import GalleryManagement from '../../admin/pages/GalleryManagement';

export default function AdminDashboard() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const renderAdminSubpage = () => {
    const clean = currentPath.replace(/\/+$/, '');

    if (clean.includes('/admin/blogs/create')) {
      return <BlogForm isEdit={false} />;
    }
    if (clean.includes('/admin/blogs/') && clean.endsWith('/edit')) {
      return <BlogForm isEdit={true} />;
    }

    switch (clean) {
      case '/admin/bookings':
        return <BookingsManagement />;
      case '/admin/users':
        return <UsersManagement />;
      case '/admin/destinations':
        return <DestinationsManagement />;
      case '/admin/ferries':
        return <FerriesManagement />;
      case '/admin/cruises':
        return <CruisesManagement />;
      case '/admin/stays':
        return <StaysManagement />;
      case '/admin/blogs':
      case '/admin/blogs/categories':
        return <BlogsManagement />;
      case '/admin/inquiries':
        return <InquiriesManagement />;
      case '/admin/contact':
        return <ContactMessagesManagement />;
      case '/admin/reviews':
        return <ReviewsManagement />;
      case '/admin/gallery':
        return <GalleryManagement />;
      case '/admin/media':
        return <MediaManagement />;
      case '/admin/film-chapters':
        return <FilmChaptersManagement />;
      case '/admin/activities':
        return <ActivitiesManagement />;
      case '/admin/activity-slots':
        return <ActivitySlotsManagement />;
      case '/admin/testimonials':
        return <TestimonialsManagement />;
      case '/admin/itineraries':
      case '/admin/packages':
        return <PackagesManagement />;
      case '/admin/masters':
      case '/admin/categories-locations':
        return <MasterDataManagement />;
      case '/admin/settings':
        return (() => {
          try {
            const u = localStorage.getItem('andaman_user');
            const parsed = u ? JSON.parse(u) : null;
            return parsed?.role === 'SUPER_ADMIN' ? <SettingsManagement /> : <DashboardHome />;
          } catch {
            return <DashboardHome />;
          }
        })();
      case '/admin/profile':
        return <ProfileManagement />;
      case '/admin':
      case '/admin/dashboard':
      default:
        return <DashboardHome />;
    }
  };

  return (
    <AdminLayout activeRoute={currentPath}>
      {renderAdminSubpage()}
    </AdminLayout>
  );
}
