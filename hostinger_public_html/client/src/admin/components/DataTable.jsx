import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import EmptyState from './EmptyState';
import LoadingState from './LoadingState';

export default function DataTable({
  columns = [],
  data = [],
  loading = false,
  isLoading = false,
  searchPlaceholder = 'Search records...',
  title,
  subtitle,
  actions,
  onAdd,
  addLabel = 'ADD NEW RECORD',
  filterTabs = [],
  activeTab,
  onTabChange,
  itemsPerPage = 10,
}) {
  const isTableLoading = loading || isLoading;
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by search
  const filteredData = data.filter((row) => {
    if (!search.trim()) return true;
    const term = search.toLowerCase();
    return columns.some((col) => {
      const val = col.accessor ? row[col.accessor] : col.render ? col.render(row) : null;
      return val && String(val).toLowerCase().includes(term);
    });
  });

  // Sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage) || 1;
  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSort = (accessor) => {
    if (!accessor) return;
    if (sortColumn === accessor) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(accessor);
      setSortDirection('asc');
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      backdropFilter: 'blur(20px)',
      border: '1.5px solid #e2e8f0',
      borderRadius: 24,
      padding: '24px 28px',
      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
      marginBottom: 28,
    }}>
      {/* HEADER ROW */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <div>
          {subtitle && (
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {subtitle}
            </div>
          )}
          {title && (
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 800, color: '#0B2545', margin: 0 }}>
              {title}
            </h3>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {/* SEARCH INPUT */}
          <div style={{ position: 'relative', width: 240 }}>
            <Search size={14} color="#527588" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: '100%',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 18,
                padding: '7px 12px 7px 32px',
                color: '#334155',
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {actions}
          {!actions && onAdd && (
            <button
              type="button"
              onClick={onAdd}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 18px',
                borderRadius: 14,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5,
                fontWeight: 900,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 14px rgba(240, 101, 67, 0.3)',
                letterSpacing: '0.04em'
              }}
            >
              <span>+ {addLabel.replace(/^\+\s*/, '')}</span>
            </button>
          )}
        </div>
      </div>

      {/* FILTER TABS */}
      {filterTabs.length > 0 && (
        <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (onTabChange) onTabChange(tab);
                setCurrentPage(1);
              }}
              style={{
                background: activeTab === tab ? 'rgba(22, 217, 255, 0.15)' : 'transparent',
                border: `1px solid ${activeTab === tab ? '#F06543' : '#e2e8f0'}`,
                color: activeTab === tab ? '#F06543' : '#9cb3bd',
                padding: '6px 14px',
                borderRadius: 16,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* TABLE DATA */}
      {isTableLoading ? (
        <LoadingState />
      ) : paginatedData.length === 0 ? (
        <EmptyState
          message="No matching database records found."
          action={onAdd ? { label: addLabel, onClick: onAdd } : null}
        />
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                {columns.map((col, idx) => {
                  const accessorKey = col.accessor || col.key;
                  return (
                    <th
                      key={idx}
                      onClick={() => accessorKey && handleSort(accessorKey)}
                      style={{
                        padding: '12px 14px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: '#627d8a',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: accessorKey ? 'pointer' : 'default',
                        userSelect: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span>{col.header || col.label || col.title}</span>
                        {accessorKey && <ArrowUpDown size={12} color="#527588" />}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  style={{
                    borderBottom: '1px solid #e2e8f0',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(22, 217, 255, 0.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  {columns.map((col, cIdx) => {
                    const accessorKey = col.accessor || col.key;
                    const cellVal = accessorKey ? row?.[accessorKey] : undefined;
                    return (
                      <td key={cIdx} style={{ padding: '14px', verticalAlign: 'middle', fontSize: 13 }}>
                        {col.render
                          ? (col.render.length > 1 ? col.render(cellVal, row) : col.render(row))
                          : (cellVal ?? '')}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION FOOTER */}
      {!loading && sortedData.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b' }}>
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, sortedData.length)} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} records
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: currentPage === 1 ? '#527588' : '#fff',
                padding: '6px 12px',
                borderRadius: 12,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 11,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
              }}
            >
              <ChevronLeft size={14} /> PREV
            </button>

            <span style={{ fontSize: 12, fontWeight: 700, color: '#F06543', padding: '0 8px' }}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: currentPage === totalPages ? '#527588' : '#fff',
                padding: '6px 12px',
                borderRadius: 12,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 11,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
              }}
            >
              NEXT <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
