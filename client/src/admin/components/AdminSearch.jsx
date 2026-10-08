import React, { useState, useEffect, useRef } from 'react';
import { Search, X, CreditCard, Users, Home, Ship, Anchor, FileText } from 'lucide-react';

const MOCK_GLOBAL_DATA = [
  { id: '1', category: 'BOOKINGS', title: 'AT-FRY-2026-000123 (Rahul Sharma)', type: 'FERRY', path: '/admin/bookings' },
  { id: '2', category: 'BOOKINGS', title: 'AT-STY-2026-000124 (Priya Patel)', type: 'STAY', path: '/admin/bookings' },
  { id: '3', category: 'USERS', title: 'rahul.sharma@example.com (Traveler)', type: 'USER', path: '/admin/users' },
  { id: '4', category: 'FERRIES', title: 'Makruzz Gold - High Speed Catamaran', type: 'FERRY', path: '/admin/ferries' },
  { id: '5', category: 'STAYS', title: 'Taj Exotica Resort & Spa Havelock', type: 'STAY', path: '/admin/stays' },
  { id: '6', category: 'CRUISES', title: 'Nautika Ocean Sunset Cruise', type: 'CRUISE', path: '/admin/cruises' },
  { id: '7', category: 'BLOGS', title: 'Top 10 Scuba Diving Spots in Havelock', type: 'BLOG', path: '/admin/blogs' },
];

export default function AdminSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const results = query.trim()
    ? MOCK_GLOBAL_DATA.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectResult = (path) => {
    setQuery('');
    setOpen(false);
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'BOOKINGS': return CreditCard;
      case 'USERS': return Users;
      case 'STAYS': return Home;
      case 'FERRIES': return Ship;
      case 'CRUISES': return Anchor;
      case 'BLOGS': default: return FileText;
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 360 }} ref={searchRef}>
      <div style={{ position: 'relative' }}>
        <Search
          size={16}
          color="#527588"
          style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          placeholder="Global Search (Bookings, Users, Ferries...)"
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          style={{
            width: '100%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 20,
            padding: '8px 36px 8px 38px',
            color: '#334155',
            fontFamily: "'Inter', sans-serif",
            fontSize: 12.5,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && query.trim() !== '' && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          right: 0,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 16,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          zIndex: 1100,
          padding: 8,
          maxHeight: 320,
          overflowY: 'auto',
        }}>
          {results.length === 0 ? (
            <div style={{ padding: '16px', textAlign: 'center', color: '#64748b', fontSize: 12 }}>
              No search results matching "{query}"
            </div>
          ) : (
            results.map((res) => {
              const Icon = getCategoryIcon(res.category);
              return (
                <button
                  key={res.id}
                  onClick={() => handleSelectResult(res.path)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '9px 12px',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: 10,
                    color: '#334155',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: 12.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(22, 217, 255, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <Icon size={15} color="#F06543" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: '#334155' }}>{res.title}</div>
                    <div style={{ fontSize: 12.5, color: '#F06543', fontWeight: 700 }}>{res.category}</div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
