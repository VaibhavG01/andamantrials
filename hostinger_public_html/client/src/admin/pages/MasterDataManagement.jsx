import React, { useState, useEffect } from 'react';
import {
  Layers, MapPin, Plus, Edit2, Trash2, CheckCircle,
  XCircle, Filter, Search, Tag, RefreshCw, ChevronRight, Compass,
  ArrowLeft, CheckCircle2
} from 'lucide-react';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';

export default function MasterDataManagement() {
  const [activeTab, setActiveTab] = useState('CATEGORIES'); // 'CATEGORIES' | 'LOCATIONS'

  // Category State
  const [categories, setCategories] = useState([]);
  const [selectedCatType, setSelectedCatType] = useState('ALL');
  const [catSearch, setCatSearch] = useState('');
  const [catModalOpen, setCatModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [catForm, setCatForm] = useState({
    name: '',
    slug: '',
    type: 'ACTIVITY',
    icon: 'Compass',
    description: '',
    status: 'ACTIVE',
    sortOrder: 0,
  });

  // Location State
  const [locations, setLocations] = useState([]);
  const [selectedIsland, setSelectedIsland] = useState('ALL');
  const [locSearch, setLocSearch] = useState('');
  const [locModalOpen, setLocModalOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState(null);
  const [locForm, setLocForm] = useState({
    name: '',
    island: 'Havelock Island',
    meetingPoint: '',
    description: '',
    latitude: '',
    longitude: '',
    status: 'ACTIVE',
    sortOrder: 0,
  });

  const [loading, setLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null); // { type: 'CAT' | 'LOC', id: number, name: string }

  // Load Data
  const loadData = async () => {
    setLoading(true);
    try {
      const [catRes, locRes] = await Promise.all([
        adminService.getMasterCategories(selectedCatType === 'ALL' ? '' : selectedCatType),
        adminService.getMasterLocations(selectedIsland === 'ALL' ? '' : selectedIsland),
      ]);
      setCategories(catRes?.data || catRes || []);
      setLocations(locRes?.data || locRes || []);
    } catch (err) {
      console.error('Failed to load master data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedCatType, selectedIsland]);

  // ── CATEGORY HANDLERS ──
  const handleOpenCatCreate = () => {
    setEditingCategory(null);
    setCatForm({
      name: '',
      slug: '',
      type: selectedCatType === 'ALL' ? 'ACTIVITY' : selectedCatType,
      icon: 'Compass',
      description: '',
      status: 'ACTIVE',
      sortOrder: 0,
    });
    setCatModalOpen(true);
  };

  const handleOpenCatEdit = (cat) => {
    setEditingCategory(cat);
    setCatForm({
      name: cat.name,
      slug: cat.slug,
      type: cat.type,
      icon: cat.icon || 'Compass',
      description: cat.description || '',
      status: cat.status || 'ACTIVE',
      sortOrder: cat.sortOrder || 0,
    });
    setCatModalOpen(true);
  };

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    if (!catForm.name) return;

    const payload = {
      name: catForm.name,
      slug: catForm.slug || catForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      type: catForm.type,
      icon: catForm.icon,
      description: catForm.description,
      status: catForm.status,
      sortOrder: Number(catForm.sortOrder) || 0,
    };

    try {
      if (editingCategory) {
        await adminService.updateMasterCategory(editingCategory.id, payload);
      } else {
        await adminService.createMasterCategory(payload);
      }
      setCatModalOpen(false);
      loadData();
    } catch (err) {
      alert('Error saving category: ' + (err.message || 'Server error'));
    }
  };

  // ── LOCATION HANDLERS ──
  const handleOpenLocCreate = () => {
    setEditingLocation(null);
    setLocForm({
      name: '',
      island: selectedIsland === 'ALL' ? 'Havelock Island' : selectedIsland,
      meetingPoint: '',
      description: '',
      latitude: '',
      longitude: '',
      status: 'ACTIVE',
      sortOrder: 0,
    });
    setLocModalOpen(true);
  };

  const handleOpenLocEdit = (loc) => {
    setEditingLocation(loc);
    setLocForm({
      name: loc.name,
      island: loc.island,
      meetingPoint: loc.meetingPoint || '',
      description: loc.description || '',
      latitude: loc.latitude || '',
      longitude: loc.longitude || '',
      status: loc.status || 'ACTIVE',
      sortOrder: loc.sortOrder || 0,
    });
    setLocModalOpen(true);
  };

  const handleSaveLocation = async (e) => {
    e.preventDefault();
    if (!locForm.name || !locForm.island) return;

    const payload = {
      name: locForm.name,
      island: locForm.island,
      meetingPoint: locForm.meetingPoint,
      description: locForm.description,
      latitude: locForm.latitude ? parseFloat(locForm.latitude) : null,
      longitude: locForm.longitude ? parseFloat(locForm.longitude) : null,
      status: locForm.status,
      sortOrder: Number(locForm.sortOrder) || 0,
    };

    try {
      if (editingLocation) {
        await adminService.updateMasterLocation(editingLocation.id, payload);
      } else {
        await adminService.createMasterLocation(payload);
      }
      setLocModalOpen(false);
      loadData();
    } catch (err) {
      alert('Error saving location: ' + (err.message || 'Server error'));
    }
  };

  // ── DELETE HANDLER ──
  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      if (deleteTarget.type === 'CAT') {
        await adminService.deleteMasterCategory(deleteTarget.id);
      } else {
        await adminService.deleteMasterLocation(deleteTarget.id);
      }
      setDeleteTarget(null);
      loadData();
    } catch (err) {
      alert('Error deleting item: ' + (err.message || 'Failed'));
    }
  };

  // Filtered lists
  const filteredCategories = categories.filter((c) => {
    if (selectedCatType !== 'ALL' && c.type !== selectedCatType) return false;
    if (catSearch && !c.name.toLowerCase().includes(catSearch.toLowerCase())) return false;
    return true;
  });

  const filteredLocations = locations.filter((l) => {
    if (selectedIsland !== 'ALL' && l.island !== selectedIsland) return false;
    if (locSearch && !(l.name.toLowerCase().includes(locSearch.toLowerCase()) || (l.meetingPoint && l.meetingPoint.toLowerCase().includes(locSearch.toLowerCase())))) return false;
    return true;
  });

  const ISLAND_OPTIONS = [
    'Havelock Island',
    'Neil Island',
    'Port Blair',
    'Baratang Island',
    'Diglipur',
    'Ross Island',
    'North Bay Island',
    'Little Andaman',
    'Mayabunder',
    'Rangat',
  ];

  const TYPE_OPTIONS = ['ACTIVITY', 'PACKAGE', 'BLOG', 'DESTINATION', 'STAY'];

  if (catModalOpen) {
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
              onClick={() => setCatModalOpen(false)}
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
              Back to Master Data
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingCategory ? `Edit Category: ${catForm.name || 'Master'}` : 'Add New Category Master'}
                </h2>
                {catForm.type && (
                  <span style={{ background: '#FFF1EE', color: '#F06543', padding: '2px 8px', borderRadius: 8, fontSize: 11, fontWeight: 800 }}>
                    {catForm.type}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Manage taxonomies, slug identifiers, and category groupings across the portal
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => setCatModalOpen(false)}
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
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveCategory}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 22px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(240,101,67,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <CheckCircle2 size={15} />
              {editingCategory ? 'Save Category Changes' : 'Create Category Master →'}
            </button>
          </div>
        </div>

        {/* Studio Content Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 24,
          border: '1.5px solid #E2E8F0',
          padding: 32,
          boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 800
        }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              CATEGORY NAME *
            </label>
            <input
              type="text"
              required
              value={catForm.name}
              onChange={(e) => setCatForm({ ...catForm, name: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') })}
              placeholder="e.g. Scuba & Snorkeling, Luxury Cruises"
              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                URL SLUG
              </label>
              <input
                type="text"
                value={catForm.slug}
                onChange={(e) => setCatForm({ ...catForm, slug: e.target.value })}
                placeholder="e.g. scuba-snorkeling"
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                SECTION / SERVICE TYPE
              </label>
              <select
                value={catForm.type}
                onChange={(e) => setCatForm({ ...catForm, type: e.target.value })}
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              >
                {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                STATUS
              </label>
              <select
                value={catForm.status}
                onChange={(e) => setCatForm({ ...catForm, status: e.target.value })}
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                SORT ORDER
              </label>
              <input
                type="number"
                value={catForm.sortOrder}
                onChange={(e) => setCatForm({ ...catForm, sortOrder: parseInt(e.target.value) || 0 })}
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              DESCRIPTION
            </label>
            <textarea
              rows={3}
              value={catForm.description}
              onChange={(e) => setCatForm({ ...catForm, description: e.target.value })}
              placeholder="Brief summary of activities or packages under this category..."
              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (locModalOpen) {
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
              onClick={() => setLocModalOpen(false)}
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
              Back to Master Data
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingLocation ? `Edit Location: ${locForm.name || 'Master'}` : 'Add New Location Master'}
                </h2>
                {locForm.island && (
                  <span style={{ background: '#FFF1EE', color: '#F06543', padding: '2px 8px', borderRadius: 8, fontSize: 11, fontWeight: 800 }}>
                    {locForm.island}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Define island activity spots, meeting points, jetties, and GPS coordinates
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => setLocModalOpen(false)}
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
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveLocation}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 22px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(240,101,67,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <CheckCircle2 size={15} />
              {editingLocation ? 'Save Location Changes' : 'Create Location Master →'}
            </button>
          </div>
        </div>

        {/* Studio Content Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 24,
          border: '1.5px solid #E2E8F0',
          padding: 32,
          boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 800
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                SPOT / LOCATION NAME *
              </label>
              <input
                type="text"
                required
                value={locForm.name}
                onChange={(e) => setLocForm({ ...locForm, name: e.target.value })}
                placeholder="e.g. Elephant Beach, North Bay"
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                ISLAND GROUP
              </label>
              <select
                value={locForm.island}
                onChange={(e) => setLocForm({ ...locForm, island: e.target.value })}
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              >
                {ISLAND_OPTIONS.map((isl) => <option key={isl} value={isl}>{isl}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              MEETING POINT / ARRIVAL JETTY DIRECTIONS
            </label>
            <input
              type="text"
              value={locForm.meetingPoint}
              onChange={(e) => setLocForm({ ...locForm, meetingPoint: e.target.value })}
              placeholder="e.g. Elephant Beach Speedboat Jetty, Havelock"
              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                STATUS
              </label>
              <select
                value={locForm.status}
                onChange={(e) => setLocForm({ ...locForm, status: e.target.value })}
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                SORT ORDER
              </label>
              <input
                type="number"
                value={locForm.sortOrder}
                onChange={(e) => setLocForm({ ...locForm, sortOrder: parseInt(e.target.value) || 0 })}
                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              DESCRIPTION
            </label>
            <textarea
              rows={3}
              value={locForm.description}
              onChange={(e) => setLocForm({ ...locForm, description: e.target.value })}
              placeholder="Activity highlights or directions for this island spot..."
              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#0B2545', fontSize: 14, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>
            SYSTEM MASTER REGISTRIES
          </span>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: '#0B2545', margin: '4px 0 0', fontFamily: "'Space Grotesk', sans-serif" }}>
            Category & Location Masters
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            onClick={loadData}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569',
              padding: '10px 16px', borderRadius: 12, fontSize: 12, fontWeight: 800,
              cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            <RefreshCw size={14} /> Refresh
          </button>
          <button
            onClick={activeTab === 'CATEGORIES' ? handleOpenCatCreate : handleOpenLocCreate}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff',
              padding: '10px 20px', borderRadius: 12, fontSize: 12, fontWeight: 900,
              cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 4px 14px rgba(0, 150, 136, 0.25)'
            }}
          >
            <Plus size={16} /> + Add {activeTab === 'CATEGORIES' ? 'Category Master' : 'Location Master'}
          </button>
        </div>
      </div>

      {/* Main Tabs (Categories vs Locations) */}
      <div style={{ display: 'flex', gap: 8, borderBottom: '2px solid #e2e8f0', paddingBottom: 2 }}>
        <button
          onClick={() => setActiveTab('CATEGORIES')}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: '12px 12px 0 0', border: 'none',
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, cursor: 'pointer',
            background: activeTab === 'CATEGORIES' ? '#0B2545' : 'transparent',
            color: activeTab === 'CATEGORIES' ? '#ffffff' : '#64748b',
          }}
        >
          <Layers size={16} /> Category Masters ({categories.length})
        </button>

        <button
          onClick={() => setActiveTab('LOCATIONS')}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: '12px 12px 0 0', border: 'none',
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, cursor: 'pointer',
            background: activeTab === 'LOCATIONS' ? '#0B2545' : 'transparent',
            color: activeTab === 'LOCATIONS' ? '#ffffff' : '#64748b',
          }}
        >
          <MapPin size={16} /> Location & Spot Masters ({locations.length})
        </button>
      </div>

      {/* CATEGORIES VIEW */}
      {activeTab === 'CATEGORIES' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Filters Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['ALL', ...TYPE_OPTIONS].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedCatType(type)}
                  style={{
                    padding: '6px 14px', borderRadius: 10, fontSize: 11, fontWeight: 800,
                    border: 'none', cursor: 'pointer',
                    background: selectedCatType === type ? '#F06543' : '#ffffff',
                    color: selectedCatType === type ? '#ffffff' : '#64748b',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: 260 }}>
              <Search size={14} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={catSearch}
                onChange={(e) => setCatSearch(e.target.value)}
                placeholder="Search category name..."
                style={{ width: '100%', padding: '7px 12px 7px 34px', borderRadius: 10, border: '1px solid #cbd5e1', background: '#ffffff', fontSize: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Table */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: 11, textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px 18px' }}>Category Name</th>
                  <th style={{ padding: '12px 18px' }}>Section / Type</th>
                  <th style={{ padding: '12px 18px' }}>URL Slug</th>
                  <th style={{ padding: '12px 18px' }}>Description</th>
                  <th style={{ padding: '12px 18px' }}>Status</th>
                  <th style={{ padding: '12px 18px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((cat) => (
                  <tr key={cat.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 18px', fontWeight: 800, color: '#0B2545' }}>
                      {cat.name}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#F06543', background: '#ecfdf5', padding: '3px 8px', borderRadius: 6 }}>
                        {cat.type}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', color: '#64748b', fontFamily: 'monospace', fontSize: 12 }}>
                      {cat.slug}
                    </td>
                    <td style={{ padding: '14px 18px', color: '#64748b', maxWidth: 280, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {cat.description || '—'}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        padding: '2px 8px', borderRadius: 12, fontSize: 11, fontWeight: 800,
                        background: cat.status === 'ACTIVE' ? '#ecfdf5' : '#f1f5f9',
                        color: cat.status === 'ACTIVE' ? '#059669' : '#64748b'
                      }}>
                        {cat.status === 'ACTIVE' ? <CheckCircle size={11} /> : <XCircle size={11} />}
                        {cat.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                        <button
                          onClick={() => handleOpenCatEdit(cat)}
                          style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteTarget({ type: 'CAT', id: cat.id, name: cat.name })}
                          style={{ background: '#fff1f2', border: '1px solid #fecdd3', color: '#e11d48', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* LOCATIONS VIEW */}
      {activeTab === 'LOCATIONS' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Filters Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['ALL', ...ISLAND_OPTIONS.slice(0, 5)].map((island) => (
                <button
                  key={island}
                  onClick={() => setSelectedIsland(island)}
                  style={{
                    padding: '6px 14px', borderRadius: 10, fontSize: 11, fontWeight: 800,
                    border: 'none', cursor: 'pointer',
                    background: selectedIsland === island ? '#0B2545' : '#ffffff',
                    color: selectedIsland === island ? '#ffffff' : '#64748b',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                  }}
                >
                  {island}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: 260 }}>
              <Search size={14} color="#94a3b8" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={locSearch}
                onChange={(e) => setLocSearch(e.target.value)}
                placeholder="Search location or meeting point..."
                style={{ width: '100%', padding: '7px 12px 7px 34px', borderRadius: 10, border: '1px solid #cbd5e1', background: '#ffffff', fontSize: 12, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Table */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: 11, textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px 18px' }}>Location / Spot Name</th>
                  <th style={{ padding: '12px 18px' }}>Island Group</th>
                  <th style={{ padding: '12px 18px' }}>Meeting Point / Directions</th>
                  <th style={{ padding: '12px 18px' }}>Status</th>
                  <th style={{ padding: '12px 18px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLocations.map((loc) => (
                  <tr key={loc.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 18px', fontWeight: 800, color: '#0B2545' }}>
                      {loc.name}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: '#0B2545', background: '#e0f2fe', padding: '3px 8px', borderRadius: 6 }}>
                        {loc.island}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', color: '#64748b' }}>
                      {loc.meetingPoint || '—'}
                    </td>
                    <td style={{ padding: '14px 18px' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        padding: '2px 8px', borderRadius: 12, fontSize: 11, fontWeight: 800,
                        background: loc.status === 'ACTIVE' ? '#ecfdf5' : '#f1f5f9',
                        color: loc.status === 'ACTIVE' ? '#059669' : '#64748b'
                      }}>
                        {loc.status === 'ACTIVE' ? <CheckCircle size={11} /> : <XCircle size={11} />}
                        {loc.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                        <button
                          onClick={() => handleOpenLocEdit(loc)}
                          style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteTarget({ type: 'LOC', id: loc.id, name: loc.name })}
                          style={{ background: '#fff1f2', border: '1px solid #fecdd3', color: '#e11d48', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE DIALOG */}
      {deleteTarget && (
        <ConfirmDialog
          isOpen={true}
          title={`Delete ${deleteTarget.type === 'CAT' ? 'Category' : 'Location'}?`}
          message={`Are you sure you want to delete "${deleteTarget.name}"? Existing bookings and records referencing this will remain intact.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
