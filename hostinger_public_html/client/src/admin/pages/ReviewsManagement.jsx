import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';

const MOCK_REVIEWS = [
  { id: '1', user: 'Rahul Sharma', product: 'Makruzz Gold Ferry Pass', rating: 5, review: 'Smooth catamaran ride from Port Blair to Havelock. Premium seating was great!', date: '2026-08-15', status: 'APPROVED' },
  { id: '2', name: 'Priya Patel', product: 'Taj Exotica Resort & Spa', rating: 5, review: 'Unforgettable luxury villa experience. Highly recommended!', date: '2026-08-14', status: 'PENDING' },
  { id: '3', name: 'Vikram Singh', product: 'Scuba Diving Havelock', rating: 1, review: 'Spam review text for testing moderation filters.', date: '2026-08-12', status: 'REJECTED' },
];

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    adminService.getReviews()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((r) => {
            const userName = typeof r.user === 'object' && r.user !== null
              ? (r.user.name || r.user.email || 'Traveler')
              : (typeof r.user === 'string' ? r.user : (r.User?.name || 'Traveler'));

            return {
              id: String(r.id),
              user: userName,
              product: r.productName || r.entityType || 'Andaman Experience',
              rating: r.rating || 5,
              review: r.comment || r.review || 'Great experience!',
              date: r.createdAt ? r.createdAt.substring(0, 10) : '2026-08-15',
              status: (r.status || 'APPROVED').toUpperCase(),
            };
          });
          setReviews(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    adminService.updateReviewStatus(id, newStatus)
      .catch(() => {})
      .finally(() => {
        setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
      });
  };

  const columns = [
    {
      header: 'Traveler',
      accessor: 'user',
      render: (row) => <span style={{ color: '#334155', fontWeight: 700 }}>{row.user}</span>,
    },
    { header: 'Product / Experience', accessor: 'product' },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (row) => <span style={{ color: '#ffab00', fontWeight: 900 }}>★ {row.rating}</span>,
    },
    {
      header: 'Review Comment',
      accessor: 'review',
      render: (row) => <div style={{ color: '#64748b', fontSize: 12, maxWidth: 280 }}>"{row.review}"</div>,
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Moderation Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => handleUpdateStatus(row.id, 'APPROVED')} style={{ background: 'rgba(33, 230, 193, 0.15)', border: '1px solid #F06543', color: '#F06543', padding: '4px 8px', borderRadius: 8, fontSize: 12.5, fontWeight: 900, cursor: 'pointer' }}>
            APPROVE
          </button>
          <button onClick={() => handleUpdateStatus(row.id, 'REJECTED')} style={{ background: 'rgba(255, 79, 123, 0.15)', border: '1px solid #ff4f7b', color: '#ff4f7b', padding: '4px 8px', borderRadius: 8, fontSize: 12.5, fontWeight: 900, cursor: 'pointer' }}>
            REJECT
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DataTable
        title="Customer Reviews & Ratings"
        subtitle="CONTENT MODERATION DESK"
        columns={columns}
        data={reviews}
        loading={loading}
        filterTabs={['ALL', 'PENDING', 'APPROVED', 'REJECTED']}
        searchPlaceholder="Search reviewer or product..."
      />
    </div>
  );
}
