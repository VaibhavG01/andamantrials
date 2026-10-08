import React, { useState, useEffect } from 'react';
import {
  FileText, FolderPlus, Tag, Plus, Edit2, Trash2,
  Search, ExternalLink, BookOpen, Layers, CheckCircle2, AlertCircle
} from 'lucide-react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import ConfirmDialog from '../components/ConfirmDialog';

export default function BlogsManagement() {
  const [activeTab, setActiveTab] = useState(() => {
    return window.location.pathname.includes('categories') ? 'CATEGORIES' : 'POSTS';
  });

  // Blogs state
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [deleteBlogId, setDeleteBlogId] = useState(null);

  // Categories state
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [catSearch, setCatSearch] = useState('');
  const [catModalOpen, setCatModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteCatTarget, setDeleteCatTarget] = useState(null);
  const [catForm, setCatForm] = useState({ name: '', slug: '' });
  const [catSubmitting, setCatSubmitting] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const fetchBlogs = () => {
    setLoadingBlogs(true);
    adminService.getBlogs()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((b) => {
            const authorName = typeof b.author === 'object' && b.author !== null
              ? (b.author.name || b.author.email || 'Andaman Editor')
              : (typeof b.author === 'string' ? b.author : 'Andaman Editor');

            const categoryName = typeof b.category === 'object' && b.category !== null
              ? (b.category.name || 'Travel Guide')
              : (typeof b.category === 'string' ? b.category : 'Travel Guide');

            return {
              id: String(b.id),
              title: b.title,
              category: categoryName,
              author: authorName,
              status: (b.status || 'PUBLISHED').toUpperCase(),
              published: b.publishedAt ? b.publishedAt.substring(0, 10) : '2026-08-12',
              views: '1,250',
              image: b.coverImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
            };
          });
          setBlogs(mapped);
        }
      })
      .catch((err) => console.error('Error loading blogs:', err))
      .finally(() => setLoadingBlogs(false));
  };

  const fetchCategories = () => {
    setLoadingCategories(true);
    adminService.getBlogCategories()
      .then((res) => {
        const list = res.data || res || [];
        setCategories(Array.isArray(list) ? list : []);
      })
      .catch(() => {
        adminService.getMasterCategories('BLOG')
          .then((r) => setCategories(r.data || r || []))
          .catch(() => {});
      })
      .finally(() => setLoadingCategories(false));
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const newPath = tab === 'CATEGORIES' ? '/admin/blogs/categories' : '/admin/blogs';
    window.history.replaceState({}, '', newPath);
  };

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // Blog Deletion
  const handleDeleteBlog = () => {
    if (!deleteBlogId) return;
    adminService.deleteBlog(deleteBlogId)
      .then(() => {
        setBlogs((prev) => prev.filter((b) => b.id !== deleteBlogId));
        setFeedbackMsg('Blog post deleted successfully.');
        setTimeout(() => setFeedbackMsg(''), 3000);
      })
      .catch((err) => console.error('Delete error:', err))
      .finally(() => setDeleteBlogId(null));
  };

  // Category Modal Handlers
  const handleOpenCreateCategory = () => {
    setEditingCategory(null);
    setCatForm({ name: '', slug: '' });
    setCatModalOpen(true);
  };

  const handleOpenEditCategory = (cat) => {
    setEditingCategory(cat);
    setCatForm({ name: cat.name || '', slug: cat.slug || '' });
    setCatModalOpen(true);
  };

  const handleCategoryNameChange = (e) => {
    const val = e.target.value;
    const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setCatForm((prev) => ({
      ...prev,
      name: val,
      slug: !editingCategory || prev.slug === autoSlug.substring(0, autoSlug.length - 1) ? autoSlug : prev.slug,
    }));
  };

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    if (!catForm.name.trim()) return;

    setCatSubmitting(true);
    try {
      const payload = {
        name: catForm.name.trim(),
        slug: catForm.slug.trim() || catForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      };

      if (editingCategory) {
        await adminService.updateBlogCategory(editingCategory.id, payload);
        setFeedbackMsg(`Category "${payload.name}" updated successfully!`);
      } else {
        await adminService.createBlogCategory(payload);
        setFeedbackMsg(`Category "${payload.name}" created successfully!`);
      }
      setCatModalOpen(false);
      fetchCategories();
      setTimeout(() => setFeedbackMsg(''), 3000);
    } catch (err) {
      console.error('Category save error:', err);
      alert(err.response?.data?.message || 'Failed to save blog category.');
    } finally {
      setCatSubmitting(false);
    }
  };

  const handleDeleteCategory = async () => {
    if (!deleteCatTarget) return;
    try {
      await adminService.deleteBlogCategory(deleteCatTarget.id);
      setCategories((prev) => prev.filter((c) => c.id !== deleteCatTarget.id));
      setFeedbackMsg(`Category "${deleteCatTarget.name}" deleted.`);
      setTimeout(() => setFeedbackMsg(''), 3000);
    } catch (err) {
      console.error('Delete category error:', err);
      alert(err.response?.data?.message || 'Failed to delete blog category.');
    } finally {
      setDeleteCatTarget(null);
    }
  };

  const blogColumns = [
    {
      header: 'Article Title',
      accessor: 'title',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={row.image} alt={row.title} style={{ width: 44, height: 36, borderRadius: 8, objectFit: 'cover' }} />
          <div>
            <div style={{ color: '#334155', fontWeight: 700 }}>{row.title}</div>
            <div style={{ color: '#64748b', fontSize: 11 }}>
              Author: {typeof row.author === 'string' ? row.author : (row.author?.name || 'Andaman Editor')}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (row) => (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          background: '#FFF0EB',
          color: '#F06543',
          padding: '4px 10px',
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 800,
        }}>
          <Tag size={11} />
          {row.category}
        </span>
      ),
    },
    { header: 'Views', accessor: 'views' },
    { header: 'Published Date', accessor: 'published' },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => handleNavigate(`/admin/blogs/${row.id}/edit`)}
            style={{ background: 'rgba(240, 101, 67, 0.1)', border: '1px solid rgba(240, 101, 67, 0.3)', color: '#F06543', padding: '5px 12px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            EDIT
          </button>
          <button
            onClick={() => setDeleteBlogId(row.id)}
            style={{ background: 'rgba(255, 79, 123, 0.1)', border: '1px solid rgba(255, 79, 123, 0.3)', color: '#ff4f7b', padding: '5px 12px', borderRadius: 10, fontSize: 11, fontWeight: 800, cursor: 'pointer' }}
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  const filteredCategories = categories.filter((cat) =>
    (cat.name || '').toLowerCase().includes(catSearch.toLowerCase()) ||
    (cat.slug || '').toLowerCase().includes(catSearch.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Page Header with Tabs */}
      <div style={{
        background: '#ffffff',
        borderRadius: 20,
        padding: '24px 28px',
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}>
              <BookOpen size={20} />
            </div>
            <div>
              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                Editorial & Blog Management
              </h1>
              <p style={{ color: '#64748b', fontSize: 13, margin: '2px 0 0' }}>
                Manage destination articles, travel guides, insights, and editorial taxonomy categories.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Switcher Pills */}
        <div style={{
          display: 'flex',
          background: '#f1f5f9',
          padding: 4,
          borderRadius: 14,
          border: '1px solid #e2e8f0',
          gap: 4,
        }}>
          <button
            onClick={() => handleTabChange('POSTS')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              borderRadius: 10,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: activeTab === 'POSTS' ? '#ffffff' : 'transparent',
              color: activeTab === 'POSTS' ? '#F06543' : '#64748b',
              boxShadow: activeTab === 'POSTS' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            <FileText size={15} />
            <span>Articles & Guides</span>
            <span style={{
              background: activeTab === 'POSTS' ? '#FFF0EB' : '#e2e8f0',
              color: activeTab === 'POSTS' ? '#F06543' : '#64748b',
              padding: '2px 7px',
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 900,
            }}>
              {blogs.length}
            </span>
          </button>

          <button
            onClick={() => handleTabChange('CATEGORIES')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              borderRadius: 10,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: activeTab === 'CATEGORIES' ? '#ffffff' : 'transparent',
              color: activeTab === 'CATEGORIES' ? '#F06543' : '#64748b',
              boxShadow: activeTab === 'CATEGORIES' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            <Tag size={15} />
            <span>Blog Categories</span>
            <span style={{
              background: activeTab === 'CATEGORIES' ? '#FFF0EB' : '#e2e8f0',
              color: activeTab === 'CATEGORIES' ? '#F06543' : '#64748b',
              padding: '2px 7px',
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 900,
            }}>
              {categories.length}
            </span>
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid #22c55e',
          color: '#15803d',
          padding: '10px 16px',
          borderRadius: 12,
          fontSize: 13,
          fontWeight: 700,
        }}>
          <CheckCircle2 size={16} />
          {feedbackMsg}
        </div>
      )}

      {/* TAB 1: BLOG POSTS */}
      {activeTab === 'POSTS' && (
        <DataTable
          title="Travel Guides & Editorial Blogs"
          subtitle="BLOG CMS PUBLISHING"
          columns={blogColumns}
          data={blogs}
          loading={loadingBlogs}
          searchPlaceholder="Search blog title or category..."
          actions={
            <button
              onClick={() => handleNavigate('/admin/blogs/create')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '9px 18px',
                borderRadius: 14,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(240, 101, 67, 0.3)',
              }}
            >
              <Plus size={15} />
              CREATE BLOG POST
            </button>
          }
        />
      )}

      {/* TAB 2: BLOG CATEGORIES */}
      {activeTab === 'CATEGORIES' && (
        <div style={{
          background: '#ffffff',
          borderRadius: 20,
          border: '1px solid #e2e8f0',
          padding: 24,
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        }}>
          {/* Categories Subheader */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            marginBottom: 20,
          }}>
            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                Blog Categories Registry
              </h2>
              <div style={{ color: '#64748b', fontSize: 12, marginTop: 3 }}>
                Categories are used to filter and classify travel editorial blogs on the frontend.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: '6px 14px',
              }}>
                <Search size={14} color="#94a3b8" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={catSearch}
                  onChange={(e) => setCatSearch(e.target.value)}
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: 12.5, color: '#334155', width: 160 }}
                />
              </div>

              <button
                onClick={handleOpenCreateCategory}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '9px 18px',
                  borderRadius: 14,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(240, 101, 67, 0.3)',
                }}
              >
                <Plus size={15} />
                + ADD CATEGORY
              </button>
            </div>
          </div>

          {/* Categories Grid Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f1f5f9', background: '#fafbfc' }}>
                  <th style={{ padding: '12px 16px', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif" }}>CATEGORY NAME</th>
                  <th style={{ padding: '12px 16px', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif" }}>URL SLUG</th>
                  <th style={{ padding: '12px 16px', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif" }}>POSTS COUNT</th>
                  <th style={{ padding: '12px 16px', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {loadingCategories ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: 40, color: '#64748b', fontSize: 13 }}>
                      Loading categories from database...
                    </td>
                  </tr>
                ) : filteredCategories.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: 40, color: '#94a3b8', fontSize: 13 }}>
                      No blog categories found. Click "+ ADD CATEGORY" to create one.
                    </td>
                  </tr>
                ) : (
                  filteredCategories.map((cat) => (
                    <tr key={cat.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.15s' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: '#FFF0EB',
                            color: '#F06543',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                            <Tag size={16} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, color: '#1e293b', fontSize: 14 }}>
                              {cat.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <code style={{ background: '#f1f5f9', color: '#0B2545', padding: '3px 8px', borderRadius: 6, fontSize: 12 }}>
                          {cat.slug}
                        </code>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          color: '#475569',
                          padding: '3px 10px',
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: 700,
                        }}>
                          {cat.articleCount ?? (blogs.filter(b => b.category?.toLowerCase() === cat.name?.toLowerCase()).length)} articles
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                          <button
                            onClick={() => handleOpenEditCategory(cat)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 4,
                              background: 'rgba(240, 101, 67, 0.1)',
                              border: '1px solid rgba(240, 101, 67, 0.3)',
                              color: '#F06543',
                              padding: '5px 10px',
                              borderRadius: 8,
                              fontSize: 11,
                              fontWeight: 800,
                              cursor: 'pointer',
                            }}
                          >
                            <Edit2 size={12} />
                            EDIT
                          </button>
                          <button
                            onClick={() => setDeleteCatTarget(cat)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 4,
                              background: 'rgba(255, 79, 123, 0.1)',
                              border: '1px solid rgba(255, 79, 123, 0.3)',
                              color: '#ff4f7b',
                              padding: '5px 10px',
                              borderRadius: 8,
                              fontSize: 11,
                              fontWeight: 800,
                              cursor: 'pointer',
                            }}
                          >
                            <Trash2 size={12} />
                            DELETE
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE / EDIT CATEGORY MODAL */}
      {catModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: 20,
          boxSizing: 'border-box',
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            width: '100%',
            maxWidth: 480,
            padding: 28,
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            border: '1px solid #e2e8f0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Tag size={18} color="#F06543" />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                  {editingCategory ? 'Edit Blog Category' : 'Add Blog Category'}
                </h3>
              </div>
              <button
                onClick={() => setCatModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: 20, color: '#94a3b8', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveCategory} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                  CATEGORY NAME *
                </label>
                <input
                  type="text"
                  required
                  value={catForm.name}
                  onChange={handleCategoryNameChange}
                  placeholder="e.g. Scuba & Watersports"
                  style={{
                    width: '100%',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: 10,
                    padding: '10px 14px',
                    fontSize: 13.5,
                    color: '#1e293b',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                  URL SLUG (AUTO-GENERATED)
                </label>
                <input
                  type="text"
                  value={catForm.slug}
                  onChange={(e) => setCatForm((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="e.g. scuba-watersports"
                  style={{
                    width: '100%',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: 10,
                    padding: '10px 14px',
                    fontSize: 13.5,
                    color: '#1e293b',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 12 }}>
                <button
                  type="button"
                  onClick={() => setCatModalOpen(false)}
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    color: '#475569',
                    padding: '9px 18px',
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
                  disabled={catSubmitting}
                  style={{
                    background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '9px 22px',
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(240, 101, 67, 0.3)',
                  }}
                >
                  {catSubmitting ? 'SAVING...' : (editingCategory ? 'UPDATE CATEGORY' : 'CREATE CATEGORY')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DIALOG FOR BLOG DELETION */}
      <ConfirmDialog
        isOpen={Boolean(deleteBlogId)}
        title="Delete Editorial Article?"
        message="Are you sure you want to delete this blog post from the publication registry?"
        onConfirm={handleDeleteBlog}
        onCancel={() => setDeleteBlogId(null)}
      />

      {/* CONFIRM DIALOG FOR CATEGORY DELETION */}
      <ConfirmDialog
        isOpen={Boolean(deleteCatTarget)}
        title={`Delete Category "${deleteCatTarget?.name}"?`}
        message="Are you sure you want to delete this blog category? Articles linked to this category may need reassigning."
        onConfirm={handleDeleteCategory}
        onCancel={() => setDeleteCatTarget(null)}
      />
    </div>
  );
}
