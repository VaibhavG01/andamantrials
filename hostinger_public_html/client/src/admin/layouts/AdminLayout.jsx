import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import AdminProtectedRoute from '../components/AdminProtectedRoute';

export default function AdminLayout({ children, activeRoute = '/admin/dashboard' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminProtectedRoute>
      <div className="admin-layout-root">
        <style>{`
          .admin-layout-root {
            width: 100%;
            min-height: 100vh;
            background: #f8fafc;
            color: #334155;
            display: flex;
            position: relative;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
          }

          .admin-main-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-width: 0;
            position: relative;
          }
          @media (min-width: 1025px) {
            .admin-main-area {
              margin-left: 270px;
            }
          }

          .admin-content-container {
            flex: 1;
            max-width: 1440px;
            width: 100%;
            margin: 0 auto;
            padding: 28px;
            box-sizing: border-box;
          }
          @media (max-width: 768px) {
            .admin-content-container { padding: 16px 16px 40px; }
          }
        `}</style>

        {/* SIDEBAR */}
        <Sidebar
          activeRoute={activeRoute}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* MAIN BODY AREA */}
        <div className="admin-main-area">
          {/* FIXED TOP HEADER */}
          <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          {/* MAIN SCROLLABLE CONTENT */}
          <main className="admin-content-container">
            {children}
          </main>
        </div>
      </div>
    </AdminProtectedRoute>
  );
}
