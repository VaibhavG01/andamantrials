import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import MultiMediaUploadField from '../components/MultiMediaUploadField';
import {
  Plus,
  X,
  Edit3,
  Trash2,
  MapPin,
  Sparkles,
  Image as ImageIcon,
  Compass,
  Star,
  Layers,
  Calendar,
  Clock,
  Navigation,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Info,
  Thermometer,
  Waves,
  Eye,
  Check,
  Hotel,
  Package as PackageIcon,
  ChevronUp,
  ChevronDown,
  Building,
  Bed,
  Tag,
  DollarSign,
  Shield,
  ArrowRight,
} from 'lucide-react';

const ISLAND_PRESETS = [
  { name: 'Port Blair', lat: 11.6234, lng: 92.7265, region: 'South Andaman' },
  { name: 'Havelock (Swaraj Dweep)', lat: 12.0296, lng: 92.9818, region: "Ritchie's Archipelago" },
  { name: 'Neil (Shaheed Dweep)', lat: 11.8340, lng: 93.0489, region: "Ritchie's Archipelago" },
  { name: 'Baratang Island', lat: 12.1620, lng: 92.7937, region: 'Middle Andaman' },
  { name: 'Diglipur', lat: 13.2678, lng: 92.9806, region: 'North Andaman' },
  { name: 'Ross Island', lat: 11.6738, lng: 92.7636, region: 'South Andaman' },
  { name: 'Little Andaman', lat: 10.7420, lng: 92.5186, region: 'South Andaman' },
];

const DEFAULT_FORM_DATA = {
  name: '',
  slug: '',
  subtitle: '',
  region: 'South Andaman',
  tagline: '',
  shortDescription: '',
  description: '',
  heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  gallery: [],
  latitude: 11.6234,
  longitude: 92.7265,
  bestTimeToVisit: 'October to May (Pleasant weather & calm seas)',
  howToReach: 'Regular high-speed catamarans (Makruzz, Nautika, Green Ocean) and government ferries from Phoenix Bay Jetty, Port Blair.',
  idealDuration: '3 - 4 Days',
  weatherInfo: 'Tropical Warm & Sunny (26°C - 31°C)',
  temp: '29°C',
  humidity: '74%',
  scubaScore: '9.8 / 10',
  waterTemp: '28°C',
  clarity: '25 - 30 Meters',
  rating: 4.9,
  startingPrice: '₹4,999',
  highlights: [
    'Radhanagar Beach (Asia’s Best Beach)',
    'Elephant Beach Coral Reef & Water Sports',
    'Bioluminescence Night Kayaking',
    'Scuba Diving at Lighthouse & Dixon’s Pinnacle'
  ],
  stays: [],
  packages: [],
  faq: [
    { question: 'What is the best way to reach this island?', answer: 'Daily private high-speed catamarans take 90 minutes from Port Blair.' },
    { question: 'Is scuba diving recommended here?', answer: 'Yes, Havelock and Neil islands boast the highest coral density and visibility in India.' }
  ],
  isFeatured: true,
  status: 'ACTIVE',
};

export default function DestinationsManagement() {
  const [destinations, setDestinations] = useState([]);
  const [dbStays, setDbStays] = useState([]);
  const [dbPackages, setDbPackages] = useState([]);
  const [selectedDbStayId, setSelectedDbStayId] = useState('');
  const [selectedDbPackageId, setSelectedDbPackageId] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' | 'guide' | 'gallery' | 'geo' | 'highlights' | 'stays' | 'packages' | 'faq'
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  // Temporary Inputs for dynamic lists
  const [newHighlight, setNewHighlight] = useState('');
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');

  // Stays Form sub-state
  const [showStayForm, setShowStayForm] = useState(false);
  const [editingStayIndex, setEditingStayIndex] = useState(null);
  const [stayForm, setStayForm] = useState({
    name: '',
    type: 'BEACH_RESORT',
    pricePerNight: 5500,
    rating: 4.8,
    reviewCount: 42,
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    shortDescription: '',
  });

  // Packages Form sub-state
  const [showPkgForm, setShowPkgForm] = useState(false);
  const [editingPkgIndex, setEditingPkgIndex] = useState(null);
  const [pkgForm, setPkgForm] = useState({
    name: '',
    duration: '5N / 6D',
    price: 34999,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    bestFor: '',
    inclusions: ['Helicopter / Ship Passage', 'Eco-Lodge Stay', 'Permit Clearance', 'River Safari'],
  });
  const [newInclusion, setNewInclusion] = useState('');

  const fetchAuxData = () => {
    adminService.getStays()
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
        setDbStays(raw);
      })
      .catch((err) => console.error('Error fetching stays:', err));

    adminService.getPackages()
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
        setDbPackages(raw);
      })
      .catch((err) => console.error('Error fetching packages:', err));
  };

  const fetchDestinations = () => {
    setLoading(true);
    adminService.getDestinations()
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
        const mapped = raw.map((d) => ({
          id: String(d.id),
          name: d.name,
          slug: d.slug,
          subtitle: d.subtitle || '',
          region: d.region || 'Andaman Islands',
          tagline: d.tagline || '',
          shortDescription: d.shortDescription || '',
          description: d.description || '',
          heroImage: d.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
          gallery: Array.isArray(d.gallery) ? d.gallery : (typeof d.gallery === 'string' ? JSON.parse(d.gallery || '[]') : []),
          latitude: parseFloat(d.latitude || 11.6234),
          longitude: parseFloat(d.longitude || 92.7265),
          bestTimeToVisit: d.bestTimeToVisit || 'October to May',
          howToReach: d.howToReach || '',
          idealDuration: d.idealDuration || '3 - 4 Days',
          weatherInfo: d.weatherInfo || 'Tropical',
          temp: d.temp || '28°C',
          humidity: d.humidity || '75%',
          scubaScore: d.scubaScore || '9.5/10',
          waterTemp: d.waterTemp || '28°C',
          clarity: d.clarity || '25m',
          rating: parseFloat(d.rating || 4.8),
          startingPrice: d.startingPrice || '₹4,999',
          highlights: Array.isArray(d.highlights) ? d.highlights : (typeof d.highlights === 'string' ? JSON.parse(d.highlights || '[]') : []),
          stays: Array.isArray(d.stays) ? d.stays : (typeof d.stays === 'string' ? JSON.parse(d.stays || '[]') : []),
          packages: Array.isArray(d.packages) ? d.packages : (typeof d.packages === 'string' ? JSON.parse(d.packages || '[]') : []),
          faq: Array.isArray(d.faq) ? d.faq : (typeof d.faq === 'string' ? JSON.parse(d.faq || '[]') : []),
          status: d.status || 'ACTIVE',
          featured: Boolean(d.isFeatured),
          bookings: d.bookingCount || Math.floor(Math.random() * 200) + 50,
          created: d.createdAt ? d.createdAt.substring(0, 10) : '2026-01-10',
        }));
        setDestinations(mapped);
      })
      .catch((err) => {
        console.error('Error loading destinations:', err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDestinations();
    fetchAuxData();
  }, []);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setActiveTab('basic');
    setFormData(DEFAULT_FORM_DATA);
    setNewHighlight('');
    setNewFaqQuestion('');
    setNewFaqAnswer('');
    setShowStayForm(false);
    setShowPkgForm(false);
    setEditingStayIndex(null);
    setEditingPkgIndex(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setActiveTab('basic');
    setFormData({
      name: item.name || '',
      slug: item.slug || '',
      subtitle: item.subtitle || '',
      region: item.region || 'South Andaman',
      tagline: item.tagline || '',
      shortDescription: item.shortDescription || '',
      description: item.description || '',
      heroImage: item.heroImage || item.image || DEFAULT_FORM_DATA.heroImage,
      gallery: Array.isArray(item.gallery) ? item.gallery : [],
      latitude: item.latitude || 11.6234,
      longitude: item.longitude || 92.7265,
      bestTimeToVisit: item.bestTimeToVisit || DEFAULT_FORM_DATA.bestTimeToVisit,
      howToReach: item.howToReach || DEFAULT_FORM_DATA.howToReach,
      idealDuration: item.idealDuration || DEFAULT_FORM_DATA.idealDuration,
      weatherInfo: item.weatherInfo || DEFAULT_FORM_DATA.weatherInfo,
      temp: item.temp || '29°C',
      humidity: item.humidity || '74%',
      scubaScore: item.scubaScore || '9.8 / 10',
      waterTemp: item.waterTemp || '28°C',
      clarity: item.clarity || '25 - 30 Meters',
      rating: item.rating || 4.9,
      startingPrice: item.startingPrice || '₹4,999',
      highlights: Array.isArray(item.highlights) && item.highlights.length > 0 ? item.highlights : DEFAULT_FORM_DATA.highlights,
      stays: Array.isArray(item.stays) ? item.stays : [],
      packages: Array.isArray(item.packages) ? item.packages : [],
      faq: Array.isArray(item.faq) && item.faq.length > 0 ? item.faq : DEFAULT_FORM_DATA.faq,
      isFeatured: Boolean(item.featured),
      status: item.status || 'ACTIVE',
    });
    setNewHighlight('');
    setNewFaqQuestion('');
    setNewFaqAnswer('');
    setShowStayForm(false);
    setShowPkgForm(false);
    setEditingStayIndex(null);
    setEditingPkgIndex(null);
    setModalOpen(true);
  };

  const handleNameChange = (val) => {
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    setFormData((prev) => ({
      ...prev,
      name: val,
      slug: prev.slug === '' || !editingItem ? autoSlug : prev.slug,
    }));
  };

  const handleApplyPreset = (preset) => {
    setFormData((prev) => ({
      ...prev,
      latitude: preset.lat,
      longitude: preset.lng,
      region: preset.region || prev.region,
    }));
  };

  const handleAddHighlight = () => {
    if (!newHighlight.trim()) return;
    setFormData((prev) => ({
      ...prev,
      highlights: [...(prev.highlights || []), newHighlight.trim()],
    }));
    setNewHighlight('');
  };

  const handleRemoveHighlight = (index) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  // ── Stay Management Handlers
  const handleAttachDbStay = () => {
    if (!selectedDbStayId) return;
    const stay = dbStays.find((s) => String(s.id) === String(selectedDbStayId));
    if (!stay) return;

    const newStayItem = {
      id: stay.id,
      slug: stay.slug || '',
      name: stay.name,
      type: stay.type || 'BEACH_RESORT',
      pricePerNight: Number(stay.pricePerNight || 5500),
      rating: Number(stay.rating || 4.8),
      reviewCount: Number(stay.reviewCount || 40),
      heroImage: stay.heroImage || stay.image || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      shortDescription: stay.shortDescription || stay.description || '',
    };

    setFormData((prev) => ({
      ...prev,
      stays: [...(prev.stays || []), newStayItem],
    }));
    setSelectedDbStayId('');
  };

  const handleSaveCustomStay = () => {
    if (!stayForm.name.trim()) {
      alert('Stay / Resort name is required.');
      return;
    }

    const itemToSave = {
      id: editingStayIndex !== null && formData.stays[editingStayIndex]?.id ? formData.stays[editingStayIndex].id : `stay-${Date.now()}`,
      name: stayForm.name.trim(),
      type: stayForm.type || 'BEACH_RESORT',
      pricePerNight: Number(stayForm.pricePerNight) || 5500,
      rating: Number(stayForm.rating) || 4.8,
      reviewCount: Number(stayForm.reviewCount) || 30,
      heroImage: stayForm.heroImage || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      shortDescription: stayForm.shortDescription || '',
    };

    if (editingStayIndex !== null) {
      setFormData((prev) => ({
        ...prev,
        stays: prev.stays.map((s, idx) => (idx === editingStayIndex ? itemToSave : s)),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        stays: [...(prev.stays || []), itemToSave],
      }));
    }

    setShowStayForm(false);
    setEditingStayIndex(null);
    setStayForm({
      name: '',
      type: 'BEACH_RESORT',
      pricePerNight: 5500,
      rating: 4.8,
      reviewCount: 42,
      heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      shortDescription: '',
    });
  };

  const handleEditStay = (index) => {
    const s = formData.stays[index];
    if (!s) return;
    setStayForm({
      name: s.name || '',
      type: s.type || 'BEACH_RESORT',
      pricePerNight: s.pricePerNight || 5500,
      rating: s.rating || 4.8,
      reviewCount: s.reviewCount || 40,
      heroImage: s.heroImage || s.image || '',
      shortDescription: s.shortDescription || s.description || '',
    });
    setEditingStayIndex(index);
    setShowStayForm(true);
  };

  const handleDeleteStay = (index) => {
    setFormData((prev) => ({
      ...prev,
      stays: prev.stays.filter((_, i) => i !== index),
    }));
  };

  const handleMoveStay = (index, direction) => {
    const list = [...(formData.stays || [])];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= list.length) return;
    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;
    setFormData((prev) => ({ ...prev, stays: list }));
  };

  // ── Package Management Handlers
  const handleAttachDbPackage = () => {
    if (!selectedDbPackageId) return;
    const pkg = dbPackages.find((p) => String(p.id) === String(selectedDbPackageId));
    if (!pkg) return;

    let parsedInclusions = ['Fast Catamarans', 'Beach Resort Stay', 'Island Transfers'];
    if (Array.isArray(pkg.inclusions) && pkg.inclusions.length > 0) {
      parsedInclusions = pkg.inclusions;
    } else if (typeof pkg.inclusions === 'string') {
      try {
        parsedInclusions = JSON.parse(pkg.inclusions);
      } catch {
        parsedInclusions = pkg.inclusions.split(',').map((s) => s.trim()).filter(Boolean);
      }
    }

    const newPkgItem = {
      id: pkg.id,
      slug: pkg.slug || '',
      name: pkg.name,
      duration: pkg.duration || '5N / 6D',
      price: Number(pkg.price || 28999),
      rating: Number(pkg.rating || 4.9),
      image: pkg.image || pkg.heroImage || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      bestFor: pkg.bestFor || pkg.destinations || 'Island Exploration & Sightseeing',
      inclusions: parsedInclusions,
    };

    setFormData((prev) => ({
      ...prev,
      packages: [...(prev.packages || []), newPkgItem],
    }));
    setSelectedDbPackageId('');
  };

  const handleAddInclusion = () => {
    if (!newInclusion.trim()) return;
    setPkgForm((prev) => ({
      ...prev,
      inclusions: [...(prev.inclusions || []), newInclusion.trim()],
    }));
    setNewInclusion('');
  };

  const handleRemoveInclusion = (idx) => {
    setPkgForm((prev) => ({
      ...prev,
      inclusions: prev.inclusions.filter((_, i) => i !== idx),
    }));
  };

  const handleSaveCustomPackage = () => {
    if (!pkgForm.name.trim()) {
      alert('Package title is required.');
      return;
    }

    const itemToSave = {
      id: editingPkgIndex !== null && formData.packages[editingPkgIndex]?.id ? formData.packages[editingPkgIndex].id : `pkg-${Date.now()}`,
      name: pkgForm.name.trim(),
      duration: pkgForm.duration || '5N / 6D',
      price: Number(pkgForm.price) || 29999,
      rating: Number(pkgForm.rating) || 4.9,
      image: pkgForm.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      bestFor: pkgForm.bestFor || 'Exclusive Island Exploration',
      inclusions: pkgForm.inclusions || ['Speed Ferry', 'Beach Resort', 'VIP Support'],
    };

    if (editingPkgIndex !== null) {
      setFormData((prev) => ({
        ...prev,
        packages: prev.packages.map((p, idx) => (idx === editingPkgIndex ? itemToSave : p)),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        packages: [...(prev.packages || []), itemToSave],
      }));
    }

    setShowPkgForm(false);
    setEditingPkgIndex(null);
    setPkgForm({
      name: '',
      duration: '5N / 6D',
      price: 34999,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      bestFor: '',
      inclusions: ['Fast Catamarans', 'Luxury Resort Stay', 'Scuba Session', 'Island Transfers'],
    });
  };

  const handleEditPackage = (index) => {
    const p = formData.packages[index];
    if (!p) return;
    setPkgForm({
      name: p.name || '',
      duration: p.duration || '5N / 6D',
      price: p.price || 29999,
      rating: p.rating || 4.9,
      image: p.image || p.heroImage || '',
      bestFor: p.bestFor || '',
      inclusions: Array.isArray(p.inclusions) ? p.inclusions : ['Speed Ferry', 'Beach Resort'],
    });
    setEditingPkgIndex(index);
    setShowPkgForm(true);
  };

  const handleDeletePackage = (index) => {
    setFormData((prev) => ({
      ...prev,
      packages: prev.packages.filter((_, i) => i !== index),
    }));
  };

  const handleMovePackage = (index, direction) => {
    const list = [...(formData.packages || [])];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= list.length) return;
    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;
    setFormData((prev) => ({ ...prev, packages: list }));
  };

  const handleAddFaq = () => {
    if (!newFaqQuestion.trim() || !newFaqAnswer.trim()) return;
    setFormData((prev) => ({
      ...prev,
      faq: [...(prev.faq || []), { question: newFaqQuestion.trim(), answer: newFaqAnswer.trim() }],
    }));
    setNewFaqQuestion('');
    setNewFaqAnswer('');
  };

  const handleRemoveFaq = (index) => {
    setFormData((prev) => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Island destination name is required.');
      return;
    }

    const payload = {
      name: formData.name.trim(),
      slug: (formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).trim(),
      subtitle: formData.subtitle || '',
      region: formData.region || 'South Andaman',
      tagline: formData.tagline || '',
      shortDescription: formData.shortDescription || '',
      description: formData.description || '',
      heroImage: formData.heroImage || DEFAULT_FORM_DATA.heroImage,
      gallery: Array.isArray(formData.gallery) ? formData.gallery : [],
      latitude: parseFloat(formData.latitude) || 11.6234,
      longitude: parseFloat(formData.longitude) || 92.7265,
      bestTimeToVisit: formData.bestTimeToVisit || '',
      howToReach: formData.howToReach || '',
      idealDuration: formData.idealDuration || '',
      weatherInfo: formData.weatherInfo || '',
      temp: formData.temp || '',
      humidity: formData.humidity || '',
      scubaScore: formData.scubaScore || '',
      waterTemp: formData.waterTemp || '',
      clarity: formData.clarity || '',
      rating: parseFloat(formData.rating) || 4.9,
      startingPrice: formData.startingPrice || '₹4,999',
      highlights: formData.highlights || [],
      stays: formData.stays || [],
      packages: formData.packages || [],
      faq: formData.faq || [],
      isFeatured: Boolean(formData.isFeatured),
      status: formData.status || 'ACTIVE',
    };

    setIsSaving(true);
    try {
      if (editingItem) {
        await adminService.updateDestination(editingItem.id, payload);
      } else {
        await adminService.createDestination(payload);
      }
      setModalOpen(false);
      fetchDestinations();
    } catch (err) {
      alert(`Failed to save destination: ${err?.response?.data?.message || err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await adminService.deleteDestination(deleteId);
      setDestinations((prev) => prev.filter((d) => d.id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      alert(`Failed to delete destination: ${err?.response?.data?.message || err.message}`);
      setDeleteId(null);
    }
  };

  const columns = [
    {
      header: 'Island Destination',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative' }}>
            <img
              src={row.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'}
              alt={row.name}
              style={{ width: 56, height: 44, borderRadius: 10, objectFit: 'cover', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            />
            {row.featured && (
              <span style={{ position: 'absolute', top: -5, right: -5, background: '#F06543', color: '#fff', borderRadius: '50%', width: 18, height: 18, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                ★
              </span>
            )}
          </div>
          <div>
            <div style={{ color: '#0B2545', fontWeight: 800, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}>
              {row.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2, flexWrap: 'wrap' }}>
              <span style={{ color: '#F06543', fontSize: 11, fontWeight: 700 }}>/{row.slug}</span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ color: '#64748B', fontSize: 11, background: '#F1F5F9', padding: '1px 6px', borderRadius: 6 }}>
                {row.region || 'Andaman'}
              </span>
              {row.stays?.length > 0 && (
                <span style={{ color: '#0369A1', fontSize: 10, background: '#E0F2FE', padding: '1px 6px', borderRadius: 6, fontWeight: 700 }}>
                  🏨 {row.stays.length} Stays
                </span>
              )}
              {row.packages?.length > 0 && (
                <span style={{ color: '#7C3AED', fontSize: 10, background: '#EDE9FE', padding: '1px 6px', borderRadius: 6, fontWeight: 700 }}>
                  🎒 {row.packages.length} Packages
                </span>
              )}
              {row.gallery?.length > 0 && (
                <span style={{ color: '#0B2545', fontSize: 10, background: '#F1F5F9', padding: '1px 6px', borderRadius: 6, fontWeight: 700 }}>
                  📸 {row.gallery.length} Photos
                </span>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: 'Region & Highlights',
      accessor: 'region',
      render: (row) => (
        <div>
          <div style={{ color: '#334155', fontWeight: 700, fontSize: 12.5 }}>{row.region || 'South Andaman'}</div>
          <div style={{ color: '#64748B', fontSize: 11, marginTop: 2, maxWidth: 220, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {row.highlights?.length > 0 ? row.highlights.slice(0, 2).join(', ') : 'Pristine Beaches & Corals'}
          </div>
        </div>
      ),
    },
    {
      header: 'Starting From',
      accessor: 'startingPrice',
      render: (row) => (
        <span style={{ color: '#0B2545', fontWeight: 800, fontSize: 13, fontFamily: "'Space Grotesk', sans-serif" }}>
          {row.startingPrice || '₹4,999'}
        </span>
      ),
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Star size={13} fill="#F59E0B" color="#F59E0B" />
          <span style={{ fontWeight: 800, fontSize: 12.5, color: '#1E293B' }}>{row.rating || 4.8}</span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a
            href={`/destinations/${row.slug}`}
            target="_blank"
            rel="noreferrer"
            title="Preview Live Page"
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#64748b',
              padding: '6px 8px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Eye size={13} />
          </a>
          <button
            onClick={() => handleOpenEdit(row)}
            style={{
              background: 'rgba(240, 101, 67, 0.08)',
              border: '1px solid rgba(240, 101, 67, 0.25)',
              color: '#F06543',
              padding: '6px 12px',
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Edit3 size={12} /> EDIT
          </button>
          <button
            onClick={() => setDeleteId(row.id)}
            style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#ef4444',
              padding: '6px 10px',
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Trash2 size={12} />
          </button>
        </div>
      ),
    },
  ];

  if (modalOpen) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Sticky Top Action Bar */}
        <div
          style={{
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
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                color: '#0B2545',
                padding: '9px 16px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ← Back to Destinations
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {editingItem ? `Edit Destination: ${formData.name || editingItem.name}` : 'Create New Island Destination'}
                </h2>
                {formData.slug && (
                  <span style={{ fontSize: 11, background: 'rgba(240, 101, 67, 0.1)', color: '#F06543', padding: '3px 8px', borderRadius: 6, fontWeight: 700 }}>
                    /{formData.slug}
                  </span>
                )}
              </div>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#64748B' }}>
                Configure island travel guide, hero images, coordinates, highlights & FAQs
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {formData.slug && (
              <a
                href={`/destinations/${formData.slug}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  color: '#475569',
                  padding: '9px 14px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Eye size={13} /> Preview Live Page
              </a>
            )}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#ffffff',
                border: '1.5px solid #CBD5E1',
                color: '#475569',
                padding: '9px 16px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 24px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 900,
                cursor: isSaving ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {isSaving ? 'Saving...' : editingItem ? 'Update Destination →' : 'Publish Destination →'}
            </button>
          </div>
        </div>

        {/* Main Studio Container */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 24,
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 10px 40px rgba(11,37,69,0.04)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Studio Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              background: '#F8FAFC',
              borderBottom: '1.5px solid #E2E8F0',
              padding: '6px 24px 0 24px',
              gap: 8,
              overflowX: 'auto',
            }}
          >
            {[
              { id: 'basic', label: '1. Overview & Basics', icon: Compass },
              { id: 'guide', label: '2. Travel Guide', icon: Info },
              { id: 'gallery', label: '3. Multi-Image Gallery', icon: ImageIcon, badge: formData.gallery?.length || 0 },
              { id: 'geo', label: '4. Geo & Island Metrics', icon: MapPin },
              { id: 'highlights', label: '5. Sights & Highlights', icon: Star, badge: formData.highlights?.length || 0 },
              { id: 'stays', label: '6. Stays & Resorts', icon: Hotel, badge: formData.stays?.length || 0 },
              { id: 'packages', label: '7. Tour Packages', icon: PackageIcon, badge: formData.packages?.length || 0 },
              { id: 'faq', label: '8. Island FAQs', icon: HelpCircle, badge: formData.faq?.length || 0 },
            ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '10px 14px',
                      background: 'none',
                      border: 'none',
                      borderBottom: isActive ? '2.5px solid #F06543' : '2.5px solid transparent',
                      color: isActive ? '#F06543' : '#64748B',
                      fontSize: 12.5,
                      fontWeight: isActive ? 800 : 600,
                      cursor: 'pointer',
                      fontFamily: "'Space Grotesk', sans-serif",
                      whiteSpace: 'nowrap',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <IconComponent size={14} color={isActive ? '#F06543' : '#64748B'} />
                    {tab.label}
                    {tab.badge > 0 && (
                      <span
                        style={{
                          background: isActive ? '#F06543' : '#E2E8F0',
                          color: isActive ? '#ffffff' : '#64748B',
                          borderRadius: 10,
                          padding: '1px 6px',
                          fontSize: 10,
                          fontWeight: 900,
                        }}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Modal Body - Scrollable Form */}
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                
                {/* TAB 1: BASIC INFORMATION */}
                {activeTab === 'basic' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          ISLAND DESTINATION NAME <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          placeholder="e.g. Havelock Island (Swaraj Dweep)"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          URL SLUG (AUTO-GENERATED) <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <div style={{ position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 12, top: 10, color: '#94A3B8', fontSize: 12 }}>/</span>
                          <input
                            type="text"
                            required
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') })}
                            placeholder="havelock-island"
                            style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px 10px 24px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          SUBTITLE / TAGLINE
                        </label>
                        <input
                          type="text"
                          value={formData.subtitle}
                          onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                          placeholder="e.g. The Scuba Capital of India"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          REGION / ARCHIPELAGO
                        </label>
                        <select
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box', height: 42 }}
                        >
                          <option value="South Andaman">South Andaman (Port Blair, Ross)</option>
                          <option value="Ritchie's Archipelago">Ritchie's Archipelago (Havelock, Neil)</option>
                          <option value="Middle Andaman">Middle Andaman (Baratang, Rangat)</option>
                          <option value="North Andaman">North Andaman (Diglipur, Ross & Smith)</option>
                          <option value="Little Andaman">Little Andaman & Hut Bay</option>
                          <option value="Nicobar Islands">Great Nicobar & Archipelago</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          STARTING PACKAGE PRICE
                        </label>
                        <input
                          type="text"
                          value={formData.startingPrice}
                          onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                          placeholder="e.g. ₹4,999 / Person"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, background: '#F8FAFC', padding: 16, borderRadius: 14, border: '1px solid #E2E8F0' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          CMS PUBLISHING STATUS
                        </label>
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          style={{ width: '100%', background: '#ffffff', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', color: '#1E293B', fontSize: 13, fontWeight: 700, outline: 'none' }}
                        >
                          <option value="ACTIVE">🟢 ACTIVE (Visible on Website)</option>
                          <option value="INACTIVE">🔴 INACTIVE (Draft / Hidden)</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <label style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={formData.isFeatured}
                            onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                            style={{ width: 18, height: 18, accentColor: '#F06543' }}
                          />
                          <span>⭐ Mark as Featured Destination (Home Spotlight)</span>
                        </label>
                        <p style={{ margin: '4px 0 0 28px', fontSize: 11, color: '#64748B' }}>
                          Featured destinations appear in hero carousels and top recommendation grids.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: TRAVEL GUIDE & DESCRIPTIONS */}
                {activeTab === 'guide' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                        SHORT DESCRIPTION (HERO CARD TEASER)
                      </label>
                      <input
                        type="text"
                        value={formData.shortDescription}
                        onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                        placeholder="World-renowned for turquoise lagoons, Radhanagar Beach, and deep-sea coral diving..."
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                        DETAILED DESTINATION OVERVIEW & SIGHTS
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Provide detailed traveler guidance about culture, beaches, ferry connections, night kayaking..."
                        rows={4}
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box', resize: 'vertical', lineHeight: 1.5 }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          BEST TIME TO VISIT
                        </label>
                        <input
                          type="text"
                          value={formData.bestTimeToVisit}
                          onChange={(e) => setFormData({ ...formData, bestTimeToVisit: e.target.value })}
                          placeholder="e.g. October to May (Pleasant weather)"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          IDEAL TRIP DURATION
                        </label>
                        <input
                          type="text"
                          value={formData.idealDuration}
                          onChange={(e) => setFormData({ ...formData, idealDuration: e.target.value })}
                          placeholder="e.g. 3 Days / 2 Nights"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                        HOW TO REACH (FERRIES / TRANSIT GUIDELINES)
                      </label>
                      <textarea
                        value={formData.howToReach}
                        onChange={(e) => setFormData({ ...formData, howToReach: e.target.value })}
                        placeholder="e.g. Regular luxury catamarans (Makruzz, Nautika) from Port Blair Jetty take 90 minutes. Advance ferry booking recommended."
                        rows={2}
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>
                )}

                {/* TAB 3: VISUALS & MULTI-IMAGE GALLERY */}
                {activeTab === 'gallery' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Hero Cover Image */}
                    <div style={{ background: '#F8FAFC', padding: 18, borderRadius: 16, border: '1.5px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 16 }}>🌟</span>
                        <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                          PRIMARY HERO COVER IMAGE
                        </h4>
                      </div>
                      <MediaUploadField
                        label="HERO COVER PHOTO"
                        value={formData.heroImage}
                        onChange={(url) => setFormData({ ...formData, heroImage: url })}
                        helpText="Displayed prominently on the destination banner and search cards."
                      />
                    </div>

                    {/* Multi-Image Gallery */}
                    <div style={{ background: '#F8FAFC', padding: 18, borderRadius: 16, border: '1.5px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 16 }}>📸</span>
                        <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                          MULTI-IMAGE PHOTO GALLERY ({formData.gallery?.length || 0} Photos)
                        </h4>
                      </div>
                      <MultiMediaUploadField
                        label="ISLAND PHOTO GALLERY"
                        value={formData.gallery}
                        returnString={false}
                        onChange={(newGallery) => setFormData({ ...formData, gallery: Array.isArray(newGallery) ? newGallery : (newGallery ? newGallery.split('\n') : []) })}
                        helpText="Upload multiple high-res island photos at once or enter direct URLs. Travelers will see these in the interactive image carousel."
                      />
                    </div>
                  </div>
                )}

                {/* TAB 4: GEO & ISLAND INTELLIGENCE */}
                {activeTab === 'geo' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {/* Quick Presets */}
                    <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', padding: 14, borderRadius: 14 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 800, color: '#0369A1', marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                        ⚡ QUICK-FILL COORDINATES FROM ISLAND PRESETS:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {ISLAND_PRESETS.map((preset) => (
                          <button
                            key={preset.name}
                            type="button"
                            onClick={() => handleApplyPreset(preset)}
                            style={{
                              background: '#ffffff',
                              border: '1px solid #7DD3FC',
                              color: '#0284C7',
                              padding: '5px 12px',
                              borderRadius: 8,
                              fontSize: 11.5,
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4,
                            }}
                          >
                            <MapPin size={11} /> {preset.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          LATITUDE (DECIMAL) <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="number"
                          step="any"
                          required
                          value={formData.latitude}
                          onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          LONGITUDE (DECIMAL) <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="number"
                          step="any"
                          required
                          value={formData.longitude}
                          onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    {/* Meteorological & Marine Metrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          AVERAGE TEMP
                        </label>
                        <input
                          type="text"
                          value={formData.temp}
                          onChange={(e) => setFormData({ ...formData, temp: e.target.value })}
                          placeholder="e.g. 29°C"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          SCUBA DIVING SCORE
                        </label>
                        <input
                          type="text"
                          value={formData.scubaScore}
                          onChange={(e) => setFormData({ ...formData, scubaScore: e.target.value })}
                          placeholder="e.g. 9.8 / 10"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          UNDERWATER CLARITY
                        </label>
                        <input
                          type="text"
                          value={formData.clarity}
                          onChange={(e) => setFormData({ ...formData, clarity: e.target.value })}
                          placeholder="e.g. 25 - 30 Meters"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          WEATHER SUMMARY
                        </label>
                        <input
                          type="text"
                          value={formData.weatherInfo}
                          onChange={(e) => setFormData({ ...formData, weatherInfo: e.target.value })}
                          placeholder="e.g. Tropical Sunny, Gentle Ocean Breeze"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          STAR RATING (OUT OF 5)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          min="1"
                          max="5"
                          value={formData.rating}
                          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: SIGHTS & HIGHLIGHTS */}
                {activeTab === 'highlights' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <input
                        type="text"
                        value={newHighlight}
                        onChange={(e) => setNewHighlight(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddHighlight(); } }}
                        placeholder="e.g. Kalapathar Sunrise Beach Viewpoint"
                        style={{ flex: 1, background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none' }}
                      />
                      <button
                        type="button"
                        onClick={handleAddHighlight}
                        style={{
                          background: '#0B2545',
                          border: 'none',
                          color: '#ffffff',
                          padding: '10px 20px',
                          borderRadius: 12,
                          fontSize: 12,
                          fontWeight: 800,
                          cursor: 'pointer',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        + ADD HIGHLIGHT
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {(formData.highlights || []).map((highlight, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            borderRadius: 12,
                            padding: '10px 16px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{ color: '#F06543', fontWeight: 900 }}>✦</span>
                            <span style={{ fontSize: 13.5, color: '#1E293B', fontWeight: 600 }}>{highlight}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveHighlight(idx)}
                            style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 14 }}
                          >
                            ✕
                          </button>
                        </div>
                      ))}

                      {(!formData.highlights || formData.highlights.length === 0) && (
                        <div style={{ textAlign: 'center', padding: 24, color: '#94A3B8', fontSize: 13 }}>
                          No highlights added yet. Type an attraction above and click "+ Add Highlight".
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* TAB 6: STAYS & RESORTS */}
                {activeTab === 'stays' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Top Action Header */}
                    <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em' }}>
                            DESTINATION ACCOMMODATION
                          </div>
                          <div style={{ fontSize: 16, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            Handpicked Resorts, Villas & Eco-Lodges
                          </div>
                          <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>
                            These stays will be featured on the Destination Details page under "Where to Stay".
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setEditingStayIndex(null);
                            setStayForm({
                              name: '',
                              type: 'BEACH_RESORT',
                              pricePerNight: 5500,
                              rating: 4.8,
                              reviewCount: 42,
                              heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
                              shortDescription: '',
                            });
                            setShowStayForm(!showStayForm);
                          }}
                          style={{
                            background: showStayForm ? '#E2E8F0' : '#0B2545',
                            border: 'none',
                            color: showStayForm ? '#0B2545' : '#ffffff',
                            padding: '9px 18px',
                            borderRadius: 12,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 12,
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                          }}
                        >
                          {showStayForm ? '✕ Close Form' : '+ Add Custom Stay / Resort'}
                        </button>
                      </div>

                      {/* Attach from DB dropdown */}
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', background: '#ffffff', padding: '12px 14px', borderRadius: 12, border: '1px solid #CBD5E1' }}>
                        <Hotel size={16} color="#0B2545" />
                        <span style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                          Quick Attach from Database:
                        </span>
                        <select
                          value={selectedDbStayId}
                          onChange={(e) => setSelectedDbStayId(e.target.value)}
                          style={{
                            flex: 1,
                            minWidth: 220,
                            background: '#F8FAFC',
                            border: '1px solid #CBD5E1',
                            borderRadius: 8,
                            padding: '7px 10px',
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: '#1E293B',
                            outline: 'none',
                          }}
                        >
                          <option value="">-- Select a registered stay from CMS --</option>
                          {dbStays.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name} ({s.type?.replace(/_/g, ' ') || 'Resort'}) — ₹{Number(s.pricePerNight || 5500).toLocaleString()}/nt
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={handleAttachDbStay}
                          disabled={!selectedDbStayId}
                          style={{
                            background: selectedDbStayId ? 'linear-gradient(135deg, #FF6B4A, #F06543)' : '#CBD5E1',
                            border: 'none',
                            color: '#ffffff',
                            padding: '8px 16px',
                            borderRadius: 10,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 11.5,
                            fontWeight: 800,
                            cursor: selectedDbStayId ? 'pointer' : 'not-allowed',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          + ATTACH RESORT
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Custom Stay Editor Form */}
                    {showStayForm && (
                      <div style={{ background: '#ffffff', border: '2px solid #F06543', borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 8px 24px rgba(240,101,67,0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: 10 }}>
                          <span style={{ fontSize: 14, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {editingStayIndex !== null ? `Edit Stay #${editingStayIndex + 1}` : 'Create New Custom Stay for this Island'}
                          </span>
                          <button
                            type="button"
                            onClick={() => { setShowStayForm(false); setEditingStayIndex(null); }}
                            style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer', fontSize: 13, fontWeight: 700 }}
                          >
                            ✕ Cancel
                          </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              RESORT / STAY NAME <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <input
                              type="text"
                              value={stayForm.name}
                              onChange={(e) => setStayForm({ ...stayForm, name: e.target.value })}
                              placeholder="e.g. Great Nicobar Eco Wilderness Lodge"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              STAY TYPE
                            </label>
                            <select
                              value={stayForm.type}
                              onChange={(e) => setStayForm({ ...stayForm, type: e.target.value })}
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                            >
                              <option value="BEACH_RESORT">BEACH RESORT</option>
                              <option value="LUXURY_VILLA">LUXURY VILLA</option>
                              <option value="ECO_LODGE">ECO LODGE</option>
                              <option value="HERITAGE_HOTEL">HERITAGE HOTEL</option>
                              <option value="BOUTIQUE_RESORT">BOUTIQUE RESORT</option>
                            </select>
                          </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              PRICE PER NIGHT (₹)
                            </label>
                            <input
                              type="number"
                              value={stayForm.pricePerNight}
                              onChange={(e) => setStayForm({ ...stayForm, pricePerNight: e.target.value })}
                              placeholder="5500"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, fontWeight: 700, color: '#F06543', outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              RATING (OUT OF 5)
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              min="1"
                              max="5"
                              value={stayForm.rating}
                              onChange={(e) => setStayForm({ ...stayForm, rating: e.target.value })}
                              placeholder="4.8"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              REVIEW COUNT
                            </label>
                            <input
                              type="number"
                              value={stayForm.reviewCount}
                              onChange={(e) => setStayForm({ ...stayForm, reviewCount: e.target.value })}
                              placeholder="42"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>
                        </div>

                        <div>
                          <MediaUploadField
                            label="STAY COVER PHOTO"
                            value={stayForm.heroImage}
                            onChange={(url) => setStayForm({ ...stayForm, heroImage: url })}
                            helperText="High-resolution exterior or room image (16:9 ratio recommended)"
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                            SHORT DESCRIPTION & HIGHLIGHTS
                          </label>
                          <textarea
                            rows={2}
                            value={stayForm.shortDescription}
                            onChange={(e) => setStayForm({ ...stayForm, shortDescription: e.target.value })}
                            placeholder="e.g. Exclusive biosphere reserve eco-lodge near Campbell Bay and Galathea National Park with organic dining and guided treks."
                            style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 6 }}>
                          <button
                            type="button"
                            onClick={() => { setShowStayForm(false); setEditingStayIndex(null); }}
                            style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#475569', padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={handleSaveCustomStay}
                            style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '8px 20px', borderRadius: 10, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 12px rgba(240,101,67,0.3)' }}
                          >
                            {editingStayIndex !== null ? '✓ Update Stay' : '✓ Add Stay to Destination'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Attached Stays List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>ATTACHED STAYS & RESORTS ({formData.stays?.length || 0})</span>
                        <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>Drag or sort order controls display position</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
                        {(formData.stays || []).map((stay, idx) => (
                          <div
                            key={stay.id || idx}
                            style={{
                              background: '#ffffff',
                              border: '1.5px solid #E2E8F0',
                              borderRadius: 14,
                              overflow: 'hidden',
                              display: 'flex',
                              flexDirection: 'column',
                              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                            }}
                          >
                            <div style={{ position: 'relative', height: 140 }}>
                              <img
                                src={stay.heroImage || stay.image || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'}
                                alt={stay.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                              <span style={{ position: 'absolute', top: 10, left: 10, background: '#0B2545', color: '#ffffff', fontSize: 10, fontWeight: 900, padding: '3px 8px', borderRadius: 6, textTransform: 'uppercase' }}>
                                {stay.type?.replace(/_/g, ' ') || 'RESORT'}
                              </span>
                              <span style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(255,255,255,0.95)', color: '#0B2545', fontSize: 11, fontWeight: 900, padding: '3px 7px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 3 }}>
                                <Star size={11} fill="#F59E0B" color="#F59E0B" /> {Number(stay.rating || 4.8).toFixed(1)}
                              </span>
                            </div>

                            <div style={{ padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, gap: 10 }}>
                              <div>
                                <h4 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                                  {stay.name}
                                </h4>
                                <p style={{ margin: 0, fontSize: 12, color: '#64748B', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.4 }}>
                                  {stay.shortDescription || stay.description || 'Pristine island accommodation with sea views.'}
                                </p>
                              </div>

                              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                  <span style={{ fontSize: 10, color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Starting</span>
                                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#F06543' }}>
                                    ₹{Number(stay.pricePerNight || 5500).toLocaleString()}<span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>/nt</span>
                                  </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                  <button
                                    type="button"
                                    onClick={() => handleMoveStay(idx, -1)}
                                    disabled={idx === 0}
                                    title="Move Up"
                                    style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: 6, padding: 4, cursor: idx === 0 ? 'not-allowed' : 'pointer', color: '#475569' }}
                                  >
                                    <ChevronUp size={13} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleMoveStay(idx, 1)}
                                    disabled={idx === formData.stays.length - 1}
                                    title="Move Down"
                                    style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: 6, padding: 4, cursor: idx === formData.stays.length - 1 ? 'not-allowed' : 'pointer', color: '#475569' }}
                                  >
                                    <ChevronDown size={13} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleEditStay(idx)}
                                    title="Edit Stay"
                                    style={{ background: 'rgba(240,101,67,0.1)', border: '1px solid rgba(240,101,67,0.3)', borderRadius: 6, padding: '4px 8px', color: '#F06543', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
                                  >
                                    <Edit3 size={12} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteStay(idx)}
                                    title="Remove Stay"
                                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 6, padding: '4px 8px', color: '#ef4444', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
                                  >
                                    <Trash2 size={12} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {(!formData.stays || formData.stays.length === 0) && (
                        <div style={{ textAlign: 'center', padding: '36px 20px', background: '#F8FAFC', borderRadius: 16, border: '1.5px dashed #CBD5E1' }}>
                          <Hotel size={36} color="#94A3B8" style={{ marginBottom: 8 }} />
                          <div style={{ fontSize: 14, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            No handpicked stays attached yet
                          </div>
                          <div style={{ fontSize: 12, color: '#64748B', maxWidth: 420, margin: '4px auto 14px' }}>
                            Select a registered resort from the database above or click "+ Add Custom Stay" to display where travelers can stay on the destination details page.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* TAB 7: TOUR PACKAGES */}
                {activeTab === 'packages' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Top Action Header */}
                    <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#7C3AED', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em' }}>
                            CURATED HOLIDAY TOURS
                          </div>
                          <div style={{ fontSize: 16, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            Tour Packages Visiting {formData.name || 'this Destination'}
                          </div>
                          <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>
                            These packages will be displayed in Section 5 on the Destination Details page.
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setEditingPkgIndex(null);
                            setPkgForm({
                              name: '',
                              duration: '5N / 6D',
                              price: 34999,
                              rating: 4.9,
                              image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
                              bestFor: '',
                              inclusions: ['Fast Catamarans', 'Luxury Resort Stay', 'Scuba Session', 'Island Transfers'],
                            });
                            setShowPkgForm(!showPkgForm);
                          }}
                          style={{
                            background: showPkgForm ? '#E2E8F0' : '#0B2545',
                            border: 'none',
                            color: showPkgForm ? '#0B2545' : '#ffffff',
                            padding: '9px 18px',
                            borderRadius: 12,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 12,
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                          }}
                        >
                          {showPkgForm ? '✕ Close Form' : '+ Add Custom Tour Package'}
                        </button>
                      </div>

                      {/* Attach from DB dropdown */}
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', background: '#ffffff', padding: '12px 14px', borderRadius: 12, border: '1px solid #CBD5E1' }}>
                        <PackageIcon size={16} color="#7C3AED" />
                        <span style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                          Quick Attach from Database:
                        </span>
                        <select
                          value={selectedDbPackageId}
                          onChange={(e) => setSelectedDbPackageId(e.target.value)}
                          style={{
                            flex: 1,
                            minWidth: 220,
                            background: '#F8FAFC',
                            border: '1px solid #CBD5E1',
                            borderRadius: 8,
                            padding: '7px 10px',
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: '#1E293B',
                            outline: 'none',
                          }}
                        >
                          <option value="">-- Select a registered package from CMS --</option>
                          {dbPackages.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} ({p.duration || '5N/6D'}) — ₹{Number(p.price || 28999).toLocaleString()}/person
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={handleAttachDbPackage}
                          disabled={!selectedDbPackageId}
                          style={{
                            background: selectedDbPackageId ? 'linear-gradient(135deg, #7C3AED, #6D28D9)' : '#CBD5E1',
                            border: 'none',
                            color: '#ffffff',
                            padding: '8px 16px',
                            borderRadius: 10,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 11.5,
                            fontWeight: 800,
                            cursor: selectedDbPackageId ? 'pointer' : 'not-allowed',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          + ATTACH PACKAGE
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Custom Package Editor Form */}
                    {showPkgForm && (
                      <div style={{ background: '#ffffff', border: '2px solid #7C3AED', borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 8px 24px rgba(124,58,237,0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: 10 }}>
                          <span style={{ fontSize: 14, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {editingPkgIndex !== null ? `Edit Package #${editingPkgIndex + 1}` : 'Create New Tour Package for this Destination'}
                          </span>
                          <button
                            type="button"
                            onClick={() => { setShowPkgForm(false); setEditingPkgIndex(null); }}
                            style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer', fontSize: 13, fontWeight: 700 }}
                          >
                            ✕ Cancel
                          </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              PACKAGE TITLE <span style={{ color: '#ef4444' }}>*</span>
                            </label>
                            <input
                              type="text"
                              value={pkgForm.name}
                              onChange={(e) => setPkgForm({ ...pkgForm, name: e.target.value })}
                              placeholder="e.g. Great Nicobar & Indira Point Southern Expedition"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                            <div>
                              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                                DURATION
                              </label>
                              <input
                                type="text"
                                value={pkgForm.duration}
                                onChange={(e) => setPkgForm({ ...pkgForm, duration: e.target.value })}
                                placeholder="5N / 6D"
                                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                              />
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                                PRICE (₹)
                              </label>
                              <input
                                type="number"
                                value={pkgForm.price}
                                onChange={(e) => setPkgForm({ ...pkgForm, price: e.target.value })}
                                placeholder="34999"
                                style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, fontWeight: 800, color: '#7C3AED', outline: 'none', boxSizing: 'border-box' }}
                              />
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              BEST FOR / ITINERARY HIGHLIGHTS
                            </label>
                            <input
                              type="text"
                              value={pkgForm.bestFor}
                              onChange={(e) => setPkgForm({ ...pkgForm, bestFor: e.target.value })}
                              placeholder="e.g. Indira Point 6°45’N, Campbell Bay Harbor & Galathea National Park"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>
                              RATING (OUT OF 5)
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              min="1"
                              max="5"
                              value={pkgForm.rating}
                              onChange={(e) => setPkgForm({ ...pkgForm, rating: e.target.value })}
                              placeholder="4.9"
                              style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                            />
                          </div>
                        </div>

                        <div>
                          <MediaUploadField
                            label="PACKAGE HERO IMAGE"
                            value={pkgForm.image}
                            onChange={(url) => setPkgForm({ ...pkgForm, image: url })}
                            helperText="High-quality cover image showing island tour landscape"
                          />
                        </div>

                        {/* Inclusions Tag Builder */}
                        <div>
                          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>
                            PACKAGE INCLUSIONS (FEATURES)
                          </label>
                          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                            <input
                              type="text"
                              value={newInclusion}
                              onChange={(e) => setNewInclusion(e.target.value)}
                              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddInclusion(); } }}
                              placeholder="e.g. Helicopter / Ship Passage, Eco-Lodge Stay..."
                              style={{ flex: 1, background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: 8, padding: '7px 12px', fontSize: 12.5, outline: 'none' }}
                            />
                            <button
                              type="button"
                              onClick={handleAddInclusion}
                              style={{ background: '#0B2545', color: '#ffffff', border: 'none', padding: '7px 16px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
                            >
                              + ADD
                            </button>
                          </div>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {(pkgForm.inclusions || []).map((inc, iIdx) => (
                              <span
                                key={iIdx}
                                style={{
                                  background: '#EDE9FE',
                                  color: '#6D28D9',
                                  border: '1px solid #DDD6FE',
                                  borderRadius: 8,
                                  padding: '4px 10px',
                                  fontSize: 11.5,
                                  fontWeight: 700,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 6,
                                }}
                              >
                                ✓ {inc}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveInclusion(iIdx)}
                                  style={{ background: 'none', border: 'none', color: '#6D28D9', cursor: 'pointer', padding: 0, fontSize: 11, fontWeight: 900 }}
                                >
                                  ✕
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 6 }}>
                          <button
                            type="button"
                            onClick={() => { setShowPkgForm(false); setEditingPkgIndex(null); }}
                            style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#475569', padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={handleSaveCustomPackage}
                            style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', border: 'none', color: '#ffffff', padding: '8px 20px', borderRadius: 10, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 12px rgba(124,58,237,0.3)' }}
                          >
                            {editingPkgIndex !== null ? '✓ Update Package' : '✓ Add Package to Destination'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Attached Packages List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>ATTACHED TOUR PACKAGES ({formData.packages?.length || 0})</span>
                        <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>Drag or sort order controls display position</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
                        {(formData.packages || []).map((pkg, idx) => (
                          <div
                            key={pkg.id || idx}
                            style={{
                              background: '#ffffff',
                              border: '1.5px solid #E2E8F0',
                              borderRadius: 14,
                              overflow: 'hidden',
                              display: 'flex',
                              flexDirection: 'column',
                              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                            }}
                          >
                            <div style={{ position: 'relative', height: 140 }}>
                              <img
                                src={pkg.image || pkg.heroImage || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'}
                                alt={pkg.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                              <span style={{ position: 'absolute', top: 10, left: 10, background: '#0B2545', color: '#ffffff', fontSize: 10.5, fontWeight: 900, padding: '3px 8px', borderRadius: 6 }}>
                                {pkg.duration || '5N / 6D'}
                              </span>
                              <span style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(255,255,255,0.95)', color: '#0B2545', fontSize: 11, fontWeight: 900, padding: '3px 7px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 3 }}>
                                <Star size={11} fill="#F59E0B" color="#F59E0B" /> {Number(pkg.rating || 4.9).toFixed(1)}
                              </span>
                            </div>

                            <div style={{ padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, gap: 10 }}>
                              <div>
                                <h4 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                                  {pkg.name}
                                </h4>
                                <p style={{ margin: '0 0 8px', fontSize: 12, color: '#64748B', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.4 }}>
                                  {pkg.bestFor || pkg.destinations || 'Comprehensive guided island holiday tour.'}
                                </p>

                                {Array.isArray(pkg.inclusions) && pkg.inclusions.length > 0 && (
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                                      <span key={i} style={{ fontSize: 10, color: '#475569', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>
                                        ✓ {inc}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                  <span style={{ fontSize: 10, color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Starting</span>
                                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#7C3AED' }}>
                                    ₹{Number(pkg.price || 28999).toLocaleString()}<span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>/person</span>
                                  </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                  <button
                                    type="button"
                                    onClick={() => handleMovePackage(idx, -1)}
                                    disabled={idx === 0}
                                    title="Move Up"
                                    style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: 6, padding: 4, cursor: idx === 0 ? 'not-allowed' : 'pointer', color: '#475569' }}
                                  >
                                    <ChevronUp size={13} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleMovePackage(idx, 1)}
                                    disabled={idx === formData.packages.length - 1}
                                    title="Move Down"
                                    style={{ background: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: 6, padding: 4, cursor: idx === formData.packages.length - 1 ? 'not-allowed' : 'pointer', color: '#475569' }}
                                  >
                                    <ChevronDown size={13} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleEditPackage(idx)}
                                    title="Edit Package"
                                    style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 6, padding: '4px 8px', color: '#7C3AED', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
                                  >
                                    <Edit3 size={12} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeletePackage(idx)}
                                    title="Remove Package"
                                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 6, padding: '4px 8px', color: '#ef4444', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
                                  >
                                    <Trash2 size={12} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {(!formData.packages || formData.packages.length === 0) && (
                        <div style={{ textAlign: 'center', padding: '36px 20px', background: '#F8FAFC', borderRadius: 16, border: '1.5px dashed #CBD5E1' }}>
                          <PackageIcon size={36} color="#94A3B8" style={{ marginBottom: 8 }} />
                          <div style={{ fontSize: 14, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            No curated packages attached yet
                          </div>
                          <div style={{ fontSize: 12, color: '#64748B', maxWidth: 420, margin: '4px auto 14px' }}>
                            Select an existing tour package from the database above or click "+ Add Custom Tour Package" to display recommended itineraries visiting this island.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* TAB 8: ISLAND FAQS */}
                {activeTab === 'faq' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ background: '#F8FAFC', padding: 16, borderRadius: 14, border: '1.5px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                        ADD NEW QUESTION & ANSWER PAIR:
                      </div>
                      <input
                        type="text"
                        value={newFaqQuestion}
                        onChange={(e) => setNewFaqQuestion(e.target.value)}
                        placeholder="Question: e.g. Are permits required for foreign travelers?"
                        style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                      <textarea
                        value={newFaqAnswer}
                        onChange={(e) => setNewFaqAnswer(e.target.value)}
                        placeholder="Answer: e.g. Most inhabited islands like Havelock and Neil do not require a Restricted Area Permit (RAP)."
                        rows={2}
                        style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                      <div style={{ textAlign: 'right' }}>
                        <button
                          type="button"
                          onClick={handleAddFaq}
                          style={{
                            background: '#0B2545',
                            border: 'none',
                            color: '#ffffff',
                            padding: '8px 18px',
                            borderRadius: 10,
                            fontSize: 12,
                            fontWeight: 800,
                            cursor: 'pointer',
                          }}
                        >
                          + ADD FAQ ITEM
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {(formData.faq || []).map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            borderRadius: 12,
                            padding: '12px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            position: 'relative',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontWeight: 800, color: '#0B2545', fontSize: 13.5 }}>
                              Q{idx + 1}: {item.question}
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFaq(idx)}
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 14 }}
                            >
                              ✕
                            </button>
                          </div>
                          <div style={{ color: '#475569', fontSize: 13, lineHeight: 1.4 }}>
                            {item.answer}
                          </div>
                        </div>
                      ))}

                      {(!formData.faq || formData.faq.length === 0) && (
                        <div style={{ textAlign: 'center', padding: 24, color: '#94A3B8', fontSize: 13 }}>
                          No FAQs configured for this island yet.
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: '16px 28px',
                  background: '#F8FAFC',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: 12, color: '#64748B' }}>
                  {editingItem ? `Editing ID: #${editingItem.id}` : 'Drafting new island destination'}
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #CBD5E1',
                      color: '#475569',
                      padding: '10px 20px',
                      borderRadius: 12,
                      fontSize: 12,
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    CANCEL
                  </button>

                  <button
                    type="submit"
                    disabled={isSaving}
                    style={{
                      background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                      border: 'none',
                      color: '#ffffff',
                      padding: '10px 26px',
                      borderRadius: 12,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 900,
                      cursor: isSaving ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {isSaving ? 'SAVING...' : editingItem ? 'UPDATE DESTINATION →' : 'PUBLISH DESTINATION →'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <DataTable
          title="Island Destinations & Guides"
          subtitle="MANAGE ISLAND PORTFOLIO, GEO COORDINATES, PHOTO GALLERIES & ATTRACTIONS"
          columns={columns}
          data={destinations}
          loading={loading}
          searchPlaceholder="Search destination by island name, slug, region..."
          actions={
            <button
              onClick={handleOpenCreate}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: 14,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
              }}
            >
              <Plus size={16} /> ADD NEW DESTINATION
            </button>
          }
        />

        <ConfirmDialog
          isOpen={Boolean(deleteId)}
          title="Delete Island Destination?"
          message="Are you sure you want to delete this island destination from the CMS? Linked packages, ferries, and stays may need re-association."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      </div>
    );
  }
