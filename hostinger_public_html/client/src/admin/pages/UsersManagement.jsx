import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import { ArrowLeft, User, Shield, Lock, CheckCircle2, AlertTriangle, Mail, Phone, Calendar, Briefcase, ShieldCheck } from 'lucide-react';

const MOCK_USERS_DATA = [
  { id: '1', name: 'Rahul Sharma', email: 'rahul@gmail.com', phone: '+91 98765 43210', role: 'USER', bookings: 3, status: 'ACTIVE', created: '2026-05-10' },
  { id: '2', name: 'Admin Operations', email: 'admin@andaman-trails.com', phone: '+91 98123 45678', role: 'ADMIN', bookings: 14, status: 'ACTIVE', created: '2026-01-01' },
  { id: '3', name: 'Editor Staff', email: 'editor@andaman-trails.com', phone: '+91 97890 12345', role: 'EDITOR', bookings: 2, status: 'ACTIVE', created: '2026-02-15' },
  { id: '4', name: 'Priya Patel', email: 'priya@gmail.com', phone: '+91 99887 76655', role: 'USER', bookings: 5, status: 'ACTIVE', created: '2026-06-20' },
  { id: '5', name: 'Karan Malhotra', email: 'karan@gmail.com', phone: '+91 91234 56789', role: 'USER', bookings: 0, status: 'BLOCKED', created: '2026-07-04' },
];

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedUser, setSelectedUser] = useState(null);

  const loggedInUser = (() => {
    try {
      const u = localStorage.getItem('andaman_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();
  const isCurrentSuperAdmin = loggedInUser?.role === 'SUPER_ADMIN';

  useEffect(() => {
    setLoading(true);
    adminService.getAllUsers()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((u) => ({
            id: String(u.id),
            name: u.name || 'Traveler',
            email: u.email,
            phone: u.phone || '+91 98000 00000',
            role: (u.role || 'USER').toUpperCase(),
            bookings: 1,
            status: u.status || 'ACTIVE',
            created: u.createdAt ? u.createdAt.substring(0, 10) : '2026-08-17',
          }));
          setUsers(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleUpdateRole = (id, newRole) => {
    adminService.updateUserRole(id, newRole)
      .catch(() => {})
      .finally(() => {
        setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
        if (selectedUser) setSelectedUser((prev) => ({ ...prev, role: newRole }));
      });
  };

  const handleToggleStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE';
    adminService.updateUserStatus(id, nextStatus)
      .catch(() => {})
      .finally(() => {
        setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status: nextStatus } : u)));
        if (selectedUser) setSelectedUser((prev) => ({ ...prev, status: nextStatus }));
      });
  };

  const rawFilteredUsers = activeTab === 'ALL'
    ? users
    : users.filter((u) => u.role === activeTab || u.status === activeTab);

  // If not Super Admin, never show Super Admin accounts in the list
  const filteredUsers = isCurrentSuperAdmin
    ? rawFilteredUsers
    : rawFilteredUsers.filter((u) => u.role !== 'SUPER_ADMIN');

  const filterTabs = isCurrentSuperAdmin
    ? ['ALL', 'SUPER_ADMIN', 'ADMIN', 'EDITOR', 'RECEPTIONIST', 'USER', 'ACTIVE', 'BLOCKED']
    : ['ALL', 'ADMIN', 'EDITOR', 'RECEPTIONIST', 'USER', 'ACTIVE', 'BLOCKED'];

  const getRoleBadgeStyle = (role) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return { bg: 'linear-gradient(135deg, #7C3AED, #9333EA)', color: '#ffffff', border: 'none', label: '👑 SUPER ADMIN' };
      case 'ADMIN':
        return { bg: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', label: '🛡️ ADMIN' };
      case 'EDITOR':
        return { bg: '#FEF3C7', color: '#D97706', border: '1px solid #FDE68A', label: '✍️ EDITOR' };
      case 'RECEPTIONIST':
        return { bg: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0', label: '🛎️ RECEPTION' };
      case 'USER':
      default:
        return { bg: '#F1F5F9', color: '#64748B', border: '1px solid #CBD5E1', label: '👤 TRAVELER' };
    }
  };

  const columns = [
    {
      header: 'User',
      accessor: 'name',
      render: (row) => (
        <div>
          <div style={{ color: '#0B2545', fontWeight: 700 }}>{row.name}</div>
          <div style={{ color: '#64748b', fontSize: 11 }}>{row.email}</div>
        </div>
      ),
    },
    { header: 'Phone', accessor: 'phone' },
    {
      header: 'Role',
      accessor: 'role',
      render: (row) => {
        const badge = getRoleBadgeStyle(row.role);
        return (
          <span style={{
            padding: '3px 8px',
            borderRadius: 8,
            background: badge.bg,
            color: badge.color,
            border: badge.border,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 800,
            display: 'inline-block'
          }}>
            {badge.label}
          </span>
        );
      },
    },
    { header: 'Bookings', accessor: 'bookings' },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    { header: 'Registered', accessor: 'created' },
    {
      header: 'Actions',
      render: (row) => (
        <button
          onClick={() => setSelectedUser(row)}
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

  if (selectedUser) {
    const isTargetSuperAdmin = selectedUser.role === 'SUPER_ADMIN';
    const canEditTarget = isCurrentSuperAdmin || !isTargetSuperAdmin;

    const availableRoles = isCurrentSuperAdmin
      ? [
          { role: 'SUPER_ADMIN', label: 'Super Admin', desc: 'Master platform owner with full access' },
          { role: 'ADMIN', label: 'Client Admin', desc: 'Business operations & bookings control' },
          { role: 'EDITOR', label: 'Editor Staff', desc: 'Can manage blogs & media content' },
          { role: 'RECEPTIONIST', label: 'Receptionist', desc: 'Front-desk & passenger check-in' },
          { role: 'USER', label: 'Traveler', desc: 'Standard customer portal access' },
        ]
      : [
          { role: 'ADMIN', label: 'Client Admin', desc: 'Business operations & bookings control' },
          { role: 'EDITOR', label: 'Editor Staff', desc: 'Can manage blogs & media content' },
          { role: 'RECEPTIONIST', label: 'Receptionist', desc: 'Front-desk & passenger check-in' },
          { role: 'USER', label: 'Traveler', desc: 'Standard customer portal access' },
        ];

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
              onClick={() => setSelectedUser(null)}
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
              Back to Users Directory
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {selectedUser.name}
                </h2>
                <StatusBadge status={selectedUser.status} />
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                User ID #{selectedUser.id} • Registered on {selectedUser.created}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => setSelectedUser(null)}
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

        {/* User Dossier Studio Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
          {/* Card 1: Account Profile & Contact Info */}
          <div style={{
            background: '#ffffff',
            borderRadius: 24,
            border: '1.5px solid #E2E8F0',
            padding: 28,
            boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: selectedUser.role === 'SUPER_ADMIN' ? 'linear-gradient(135deg, #7C3AED, #9333EA)' : 'linear-gradient(135deg, #FF6B4A, #F06543)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 22,
                fontWeight: 900,
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                {selectedUser.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {selectedUser.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  {(() => {
                    const b = getRoleBadgeStyle(selectedUser.role);
                    return (
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: 6,
                        background: b.bg,
                        color: b.color,
                        border: b.border,
                        fontSize: 11,
                        fontWeight: 800
                      }}>
                        {b.label}
                      </span>
                    );
                  })()}
                  <span style={{ fontSize: 12, color: '#94A3B8' }}>•</span>
                  <span style={{ fontSize: 12, color: '#64748B' }}>{selectedUser.bookings || 0} Bookings</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, background: '#F8FAFC', borderRadius: 16, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={16} color="#F06543" />
                <div style={{ fontSize: 13, color: '#0B2545', fontWeight: 600 }}>{selectedUser.email}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} color="#F06543" />
                <div style={{ fontSize: 13, color: '#0B2545', fontWeight: 600 }}>{selectedUser.phone}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Calendar size={16} color="#F06543" />
                <div style={{ fontSize: 13, color: '#0B2545', fontWeight: 600 }}>Registered: {selectedUser.created}</div>
              </div>
            </div>
          </div>

          {/* Card 2: Role & Security Permissions */}
          <div style={{
            background: '#ffffff',
            borderRadius: 24,
            border: '1.5px solid #E2E8F0',
            padding: 28,
            boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ACCESS LEVEL & ROLE
              </span>
              <h4 style={{ margin: '4px 0 12px', fontSize: 15, fontWeight: 900, color: '#0B2545' }}>
                Assign Platform Permission Tier
              </h4>
            </div>

            {!canEditTarget ? (
              <div style={{
                background: '#F5F3FF',
                border: '1.5px solid #DDD6FE',
                borderRadius: 14,
                padding: '16px',
                color: '#5B21B6',
                fontSize: 12.5,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <Shield size={20} color="#7C3AED" style={{ flexShrink: 0 }} />
                <span>Super Administrator accounts are protected and can only be managed by the Master Super Admin.</span>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                {availableRoles.map(item => (
                  <button
                    key={item.role}
                    type="button"
                    onClick={() => handleUpdateRole(selectedUser.id, item.role)}
                    style={{
                      padding: '14px 10px',
                      borderRadius: 14,
                      border: selectedUser.role === item.role ? '2px solid #F06543' : '1.5px solid #E2E8F0',
                      background: selectedUser.role === item.role ? '#FFF1EE' : '#F8FAFC',
                      color: selectedUser.role === item.role ? '#F06543' : '#334155',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 6,
                      textAlign: 'center'
                    }}
                  >
                    <ShieldCheck size={18} color={selectedUser.role === item.role ? '#F06543' : '#94A3B8'} />
                    <span style={{ fontSize: 12, fontWeight: 900 }}>{item.role}</span>
                    <span style={{ fontSize: 10.5, color: '#64748B', lineHeight: 1.2 }}>{item.label}</span>
                  </button>
                ))}
              </div>
            )}

            {canEditTarget && (
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 16, marginTop: 'auto' }}>
                <button
                  type="button"
                  onClick={() => handleToggleStatus(selectedUser.id, selectedUser.status)}
                  style={{
                    width: '100%',
                    background: selectedUser.status === 'ACTIVE' ? '#FEF2F2' : '#F0FDF4',
                    border: `1.5px solid ${selectedUser.status === 'ACTIVE' ? '#FCA5A5' : '#86EFAC'}`,
                    color: selectedUser.status === 'ACTIVE' ? '#DC2626' : '#16A34A',
                    padding: '12px',
                    borderRadius: 14,
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
                  {selectedUser.status === 'ACTIVE' ? 'Block / Suspend Account Access' : 'Reactivate Account Access'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Registered Platform Users"
        subtitle="USER ACCOUNTS MANAGEMENT"
        columns={columns}
        data={filteredUsers}
        loading={loading}
        filterTabs={filterTabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        searchPlaceholder="Search user name, email, or phone..."
      />
    </div>
  );
}

