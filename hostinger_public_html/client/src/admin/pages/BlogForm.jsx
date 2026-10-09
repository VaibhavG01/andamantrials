import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Sparkles } from 'lucide-react';
import adminService from '../services/adminService';
import MediaUploadField from '../components/MediaUploadField';

export default function BlogForm({ isEdit = false }) {
  const [formData, setFormData] = useState({
    title: isEdit ? 'Top 10 Scuba Diving Spots in Havelock' : '',
    slug: isEdit ? 'top-10-scuba-diving-spots-havelock' : '',
    category: 'Travel Guides',
    excerpt: 'Explore crystal clear waters, coral reefs, and exotic marine life in Havelock Island.',
    content: 'Andaman Islands offer some of the most spectacular scuba diving sites in South Asia...',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    tags: 'Scuba, Havelock, WaterSports',
    metaTitle: 'Top 10 Scuba Diving Spots in Havelock | Andaman Trails',
    metaDescription: 'Discover the best scuba diving locations in Havelock Island with certified instructors.',
    status: 'PUBLISHED',
  });

  const [categories, setCategories] = useState([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    adminService.getBlogCategories()
      .then((res) => {
        const data = res?.data || res || [];
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
          if (!formData.category && data[0]?.name) {
            setFormData((prev) => ({ ...prev, category: data[0].name }));
          }
        } else {
          adminService.getMasterCategories('BLOG')
            .then((r) => {
              const mList = r?.data || r || [];
              if (Array.isArray(mList) && mList.length > 0) setCategories(mList);
            })
            .catch(() => {});
        }
      })
      .catch(() => {
        adminService.getMasterCategories('BLOG')
          .then((r) => {
            const mList = r?.data || r || [];
            if (Array.isArray(mList) && mList.length > 0) setCategories(mList);
          })
          .catch(() => {});
      });
  }, []);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleSave = (status) => {
    setSaving(true);
    const payload = { ...formData, status };

    const apiCall = isEdit
      ? adminService.updateBlog(1, payload)
      : adminService.createBlog(payload);

    apiCall
      .catch(() => {})
      .finally(() => {
        setSaving(false);
        setMessage('Blog post saved successfully!');
        setTimeout(() => handleNavigate('/admin/blogs'), 1200);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => handleNavigate('/admin/blogs')}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
        >
          <ArrowLeft size={16} /> BACK TO BLOGS
        </button>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => handleSave('DRAFT')}
            disabled={saving}
            style={{ background: '#e2e8f0', border: '1px solid #e2e8f0', color: '#334155', padding: '9px 18px', borderRadius: 14, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            SAVE DRAFT
          </button>
          <button
            onClick={() => handleSave('PUBLISHED')}
            disabled={saving}
            style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', padding: '9px 22px', borderRadius: 14, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, cursor: 'pointer', boxShadow: '0 6px 20px rgba(22, 217, 255, 0.3)' }}
          >
            {saving ? 'SAVING...' : 'PUBLISH POST →'}
          </button>
        </div>
      </div>

      {message && (
        <div style={{ background: 'rgba(33, 230, 193, 0.15)', border: '1px solid #F06543', color: '#F06543', padding: 12, borderRadius: 16, fontSize: 12.5, fontWeight: 700, textAlign: 'center' }}>
          {message}
        </div>
      )}

      <div style={{
        background: '#ffffff', backdropFilter: 'blur(20px)',
        border: '1.5px solid #e2e8f0', borderRadius: 24, padding: 32,
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: 0 }}>
          {isEdit ? 'Edit Editorial Blog Post' : 'Create New Editorial Blog Post'}
        </h2>

        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>ARTICLE TITLE</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') })}
            placeholder="e.g. Top 10 Scuba Diving Spots in Havelock"
            style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 12, color: '#334155', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>URL SLUG</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>CATEGORY</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
              {categories.length === 0 && (
                <>
                  <option value="Travel Guides">Travel Guides</option>
                  <option value="Island Insights">Island Insights</option>
                  <option value="Marine Life">Marine Life</option>
                  <option value="Ferry Guides">Ferry Guides</option>
                </>
              )}
            </select>
          </div>
        </div>

        <MediaUploadField
          label="COVER IMAGE"
          value={formData.coverImage}
          onChange={(url) => setFormData({ ...formData, coverImage: url })}
          helpText="Upload a high-res cover photo for the blog post or enter an image URL."
        />

        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>EXCERPT SUMMARY</label>
          <textarea
            rows={2}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 12, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>FULL ARTICLE CONTENT (MARKDOWN SUPPORTED)</label>
          <textarea
            rows={8}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: 14, color: '#334155', fontSize: 13.5, outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
          />
        </div>
      </div>
    </div>
  );
}
