// src/components/blogs/PopularBlogs.jsx
// ─────────────────────────────────────────────────────────────────────────────
// POPULAR BLOGS SECTION — Luxury Featured Article Card + Horizontal Slider Cards
// Strips raw HTML in excerpts, removes author avatars & admin labels, displays clean Read More buttons.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles, ChevronLeft, ChevronRight, ArrowRight,
  Clock, Calendar, BookOpen, Tag,
  Waves, Compass, Sun, Mountain, Camera, Map,
  CheckCircle, Send
} from 'lucide-react';
import { blogService } from '../../api/blogService';

// ─── UTILITIES ────────────────────────────────────────────────────────────────
const stripHtml = (html) => {
  if (!html) return '';
  let text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  return text.replace(/\s+/g, ' ').trim();
};

const navigateTo = (url, e) => {
  if (e) e.preventDefault();
  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ─── CURATED FALLBACK BLOG DATA ───────────────────────────────────────────────
const DEFAULT_BLOGS = [
  {
    id: 'best-time-visit-andaman',
    title: 'Best Time to Visit Andaman: Month-by-Month Weather & Season Guide',
    excerpt: 'Planning your dream Andaman holiday? Explore our comprehensive weather guide covering peak sunny months, water visibility for scuba diving, and pleasant tropical seasons.',
    category: 'Planning & Weather',
    categoryColor: '#F06543',
    categoryBg: 'rgba(240,101,67,0.1)',
    readTime: '5 min read',
    date: '04 Oct 2026',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    icon: Calendar,
    tags: ['Weather Guide', 'Best Season', 'Island Tips'],
  },
  {
    id: 'ultimate-andaman-guide',
    title: 'The Ultimate Andaman Travel Guide 2026: Island Hopping & Hidden Gems',
    excerpt: 'Everything you need to know before visiting Andaman — best time to go, private speed ferries, secluded beaches in Havelock, and insider tips from local experts.',
    category: 'Travel Guide',
    categoryColor: '#002D62',
    categoryBg: 'rgba(0,45,98,0.08)',
    readTime: '12 min read',
    date: '28 Sep 2026',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85',
    featured: false,
    icon: Map,
    tags: ['Island Guide', 'Ferries', 'Havelock'],
  },
  {
    id: 'scuba-beginners-guide',
    title: "Scuba Diving in Andaman: A Complete Beginner's & Non-Swimmer's Guide",
    excerpt: 'Never dived before or cannot swim? No worries. Our PADI-certified divemasters guide you through breathing basics, equipment, and the most vibrant coral reefs.',
    category: 'Adventure',
    categoryColor: '#0D9488',
    categoryBg: 'rgba(13,148,136,0.1)',
    readTime: '8 min read',
    date: '18 Sep 2026',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85',
    featured: false,
    icon: Waves,
    tags: ['Scuba Diving', 'Beginners', 'Marine Life'],
  },
  {
    id: 'honeymoon-andaman',
    title: '7 Most Romantic Things to Do in Andaman for Honeymooners & Couples',
    excerpt: 'Private candlelit beach dinners on Radhanagar Beach, midnight bioluminescent kayaking, and luxury beachfront villas for an unforgettable romantic escape.',
    category: 'Honeymoon',
    categoryColor: '#E11D48',
    categoryBg: 'rgba(225,29,72,0.08)',
    readTime: '6 min read',
    date: '10 Sep 2026',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
    featured: false,
    icon: Sun,
    tags: ['Honeymoon', 'Romance', 'Beach Villas'],
  },
  {
    id: 'budget-andaman',
    title: 'How to Visit Andaman on a Budget: 5-Day Smart Backpacker Guide',
    excerpt: 'Clear breakdown of ferry costs, budget beachfront stays, public buses, and free pristine beaches so you can enjoy the islands without overspending.',
    category: 'Budget Travel',
    categoryColor: '#D97706',
    categoryBg: 'rgba(217,119,6,0.1)',
    readTime: '10 min read',
    date: '02 Sep 2026',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85',
    featured: false,
    icon: Compass,
    tags: ['Budget', 'Tips', 'Backpacker'],
  },
  {
    id: 'baratang-caves',
    title: 'Baratang Island Expedition: Limestone Caves & Mangrove Boat Safaris',
    excerpt: 'A scenic dense jungle convoy, speedboat through mangrove creeks, and a trek to natural limestone caves — Andaman’s most thrilling day trip.',
    category: 'Adventure',
    categoryColor: '#0D9488',
    categoryBg: 'rgba(13,148,136,0.1)',
    readTime: '9 min read',
    date: '24 Aug 2026',
    image: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=900&q=85',
    featured: false,
    icon: Mountain,
    tags: ['Baratang', 'Limestone Caves', 'Mangroves'],
  },
  {
    id: 'photography-spots',
    title: 'Top 15 Instagram & Drone Photography Locations in Andaman',
    excerpt: 'From the iconic Radhanagar sunsets to the crystal sandbar of Ross & Smith Islands — a photographer’s ultimate guide to capturing the Andaman magic.',
    category: 'Photography',
    categoryColor: '#7C3AED',
    categoryBg: 'rgba(124,58,237,0.1)',
    readTime: '11 min read',
    date: '15 Aug 2026',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=85',
    featured: false,
    icon: Camera,
    tags: ['Photography', 'Sunsets', 'Aerial Views'],
  },
];

const CATEGORIES = ['All', 'Travel Guide', 'Adventure', 'Honeymoon', 'Budget Travel', 'Planning & Weather', 'Photography'];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PopularBlogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sliderRef = useRef(null);
  const [blogsList, setBlogsList] = useState(DEFAULT_BLOGS);
  const [loading, setLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    blogService.getBlogs()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map((b) => {
            let category = b.category?.name || 'Travel Guide';
            let categoryColor = '#F06543';
            let categoryBg = 'rgba(240,101,67,0.1)';
            let icon = Map;

            const catLower = category.toLowerCase();
            if (catLower.includes('adventure') || catLower.includes('scuba')) {
              categoryColor = '#0D9488';
              categoryBg = 'rgba(13,148,136,0.1)';
              icon = Waves;
            } else if (catLower.includes('honeymoon') || catLower.includes('romantic')) {
              categoryColor = '#E11D48';
              categoryBg = 'rgba(225,29,72,0.08)';
              icon = Sun;
            } else if (catLower.includes('budget')) {
              categoryColor = '#D97706';
              categoryBg = 'rgba(217,119,6,0.1)';
              icon = Compass;
            } else if (catLower.includes('weather') || catLower.includes('tips') || catLower.includes('time')) {
              categoryColor = '#F06543';
              categoryBg = 'rgba(240,101,67,0.1)';
              icon = Calendar;
            } else if (catLower.includes('photography')) {
              categoryColor = '#7C3AED';
              categoryBg = 'rgba(124,58,237,0.1)';
              icon = Camera;
            }

            // Clean plain-text excerpt without HTML tags
            let cleanExcerpt = '';
            if (b.excerpt && b.excerpt.trim()) {
              cleanExcerpt = stripHtml(b.excerpt);
            } else if (b.content) {
              const stripped = stripHtml(b.content);
              cleanExcerpt = stripped.length > 170 ? stripped.substring(0, 170) + '...' : stripped;
            } else {
              cleanExcerpt = 'Explore expert insights, detailed island itineraries, and travel recommendations for your Andaman trip.';
            }

            return {
              id: b.slug || b.id,
              title: b.title,
              excerpt: cleanExcerpt,
              category,
              categoryColor,
              categoryBg,
              readTime: b.readTime || '6 min read',
              date: new Date(b.createdAt || Date.now()).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
              image: b.coverImage || b.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
              featured: !!b.isFeatured,
              icon,
              tags: Array.isArray(b.tags) && b.tags.length > 0 ? b.tags : ['Andaman', category],
            };
          });

          // Sort so featured comes first if any
          const sorted = [...mapped].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          setBlogsList(sorted);
        } else {
          setBlogsList(DEFAULT_BLOGS);
        }
      })
      .catch(() => {
        setBlogsList(DEFAULT_BLOGS);
      })
      .finally(() => setLoading(false));
  }, []);

  const featured = blogsList[0] || DEFAULT_BLOGS[0];
  const rest = blogsList.slice(1);
  const filtered = activeCategory === 'All'
    ? rest
    : rest.filter(b => b.category?.toLowerCase() === activeCategory.toLowerCase());

  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: 360, behavior: 'smooth' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <section id="blogs-section" className="blog-section">
      <style>{`
        .blog-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #334155;
          padding: 80px 0 96px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .blog-glow-l {
          position: absolute; top: 5%; left: -6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .blog-glow-r {
          position: absolute; bottom: 5%; right: -6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .blog-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .blog-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 36px;
        }
        .blog-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .blog-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          color: #0B2545;
          line-height: 1.15;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .blog-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          max-width: 560px;
          margin: 0;
        }
        .blog-nav-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .blog-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .blog-arrow:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }
        .blog-viewall {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 10px 22px;
          border-radius: 30px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(240, 101, 67, 0.12);
        }
        .blog-viewall:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        /* ── FEATURED FLAGSHIP CARD ── */
        .blog-featured {
          display: grid;
          grid-template-columns: 1.08fr 1fr;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 40px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 6px 24px rgba(11, 37, 69, 0.05);
        }
        .blog-featured:hover {
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(11, 37, 69, 0.12);
          transform: translateY(-4px);
        }
        @media (max-width: 960px) {
          .blog-featured {
            grid-template-columns: 1fr;
          }
        }

        .blog-featured-img-wrap {
          position: relative;
          overflow: hidden;
          min-height: 380px;
          background: #0B2545;
        }
        @media (max-width: 960px) {
          .blog-featured-img-wrap {
            min-height: 260px;
          }
        }
        .blog-featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .blog-featured:hover .blog-featured-img {
          transform: scale(1.06);
        }
        .blog-featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 37, 69, 0.5) 0%, transparent 60%);
        }
        .blog-featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #d97706;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(217, 119, 6, 0.3);
          padding: 6px 14px;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .blog-featured-body {
          padding: 38px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        @media (max-width: 640px) {
          .blog-featured-body {
            padding: 24px 20px;
          }
        }

        .blog-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 20px;
          width: fit-content;
          border: 1.5px solid currentColor;
        }
        .blog-featured-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(20px, 2.4vw, 27px);
          font-weight: 800;
          color: #0B2545;
          line-height: 1.32;
          margin: 14px 0 12px;
          transition: color 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-featured:hover .blog-featured-title {
          color: #F06543;
        }
        .blog-featured-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 18px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-tags-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .blog-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #64748b;
          background: #f1f5f9;
          padding: 4px 10px;
          border-radius: 8px;
        }

        .blog-featured-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 22px;
          border-top: 1px solid #f1f5f9;
        }
        .blog-featured-meta-info {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .blog-meta-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
        }
        .blog-readnow-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          padding: 10px 24px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.3);
          transition: all 0.3s ease;
        }
        .blog-featured:hover .blog-readnow-btn {
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }

        /* ── FILTER TABS ── */
        .blog-filters {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .blog-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          color: #475569;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }
        .blog-filter-btn:hover {
          border-color: #F06543;
          color: #F06543;
          background: #FFF0EB;
        }
        .blog-filter-btn.active {
          background: linear-gradient(135deg, #0B2545 0%, #173b6c 100%);
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.25);
        }

        /* ── HORIZONTAL SLIDER ── */
        .blog-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 8px 4px 28px;
        }
        .blog-slider::-webkit-scrollbar {
          display: none;
        }
        .blog-card-wrap {
          flex: 0 0 calc(33.333% - 16px);
          min-width: 320px;
          scroll-snap-align: start;
        }
        @media (max-width: 1150px) {
          .blog-card-wrap {
            flex: 0 0 calc(50% - 12px);
            min-width: 290px;
          }
        }
        @media (max-width: 680px) {
          .blog-card-wrap {
            flex: 0 0 90%;
            min-width: 280px;
          }
        }

        /* Card */
        .blog-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
        }
        .blog-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 18px 36px rgba(11, 37, 69, 0.10);
        }
        .blog-card-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
          flex-shrink: 0;
          background: #0B2545;
        }
        .blog-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s ease;
        }
        .blog-card:hover .blog-card-img {
          transform: scale(1.08);
        }
        .blog-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 37, 69, 0.45) 0%, transparent 60%);
        }
        .blog-card-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 5px 12px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .blog-card-read-chip {
          position: absolute;
          bottom: 12px;
          right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }

        .blog-card-body {
          padding: 22px 22px 14px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16.5px;
          font-weight: 800;
          color: #0B2545;
          line-height: 1.38;
          margin-bottom: 8px;
          transition: color 0.25s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-card:hover .blog-card-title {
          color: #F06543;
        }
        .blog-card-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 22px 18px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }
        .blog-card-date {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .blog-card-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #F06543;
          background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 7px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.28s ease;
          flex-shrink: 0;
        }
        .blog-card:hover .blog-card-action-btn {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }

        /* Newsletter strip */
        .blog-newsletter {
          margin-top: 56px;
          background: linear-gradient(135deg, #f8fafc 0%, #fff6f3 100%);
          border: 1.5px solid #fed7aa;
          border-radius: 24px;
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
          box-shadow: 0 6px 24px rgba(240, 101, 67, 0.05);
        }
        .blog-newsletter-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .blog-newsletter-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.5;
        }
        .blog-newsletter-form {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .blog-newsletter-input {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #0B2545;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          padding: 12px 20px;
          border-radius: 14px;
          outline: none;
          width: 270px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .blog-newsletter-input:focus {
          border-color: #F06543;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.15);
        }
        .blog-newsletter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          padding: 12px 26px;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.3);
        }
        .blog-newsletter-btn:hover {
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .blog-newsletter {
            padding: 26px 20px;
          }
          .blog-newsletter-input {
            width: 100%;
          }
          .blog-newsletter-form {
            width: 100%;
          }
          .blog-newsletter-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Subtle Background Glows */}
      <div className="blog-glow-l" />
      <div className="blog-glow-r" />

      <div className="blog-container">

        {/* ── SECTION HEADER ── */}
        <div className="blog-header-row">
          <div>
            <div className="blog-header-sub">
              <Sparkles size={14} color="#F06543" />
              <span>POPULAR STORIES & GUIDES</span>
            </div>
            <h2 className="blog-header-title">
              Stories, Tips & Island Insights
            </h2>
            <p className="blog-header-desc">
              Expert travel guides, hidden gems, and real stories from those who know the Andaman Islands best.
            </p>
          </div>

          <div className="blog-nav-row">
            <button onClick={scrollLeft} className="blog-arrow" aria-label="Scroll Left">
              <ChevronLeft size={22} />
            </button>
            <button onClick={scrollRight} className="blog-arrow" aria-label="Scroll Right">
              <ChevronRight size={22} />
            </button>
            <a
              href="/blog"
              onClick={(e) => navigateTo('/blog', e)}
              className="blog-viewall"
            >
              <span>ALL BLOGS</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* ── FEATURED BLOG FLAGSHIP CARD ── */}
        <a
          href={`/blog/${featured.id}`}
          onClick={(e) => navigateTo(`/blog/${featured.id}`, e)}
          className="blog-featured"
        >
          {/* Left: Image Container */}
          <div className="blog-featured-img-wrap">
            <img
              src={featured.image}
              alt={featured.title}
              className="blog-featured-img"
              loading="lazy"
            />
            <div className="blog-featured-overlay" />
            
            {/* Featured Badge */}
            <div className="blog-featured-badge">
              <Sparkles size={12} color="#d97706" />
              <span>FEATURED ARTICLE</span>
            </div>
          </div>

          {/* Right: Content Body */}
          <div className="blog-featured-body">
            <div>
              {/* Top Meta: Category Pill + Read Time */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                <div
                  className="blog-cat-pill"
                  style={{
                    color: featured.categoryColor,
                    background: featured.categoryBg,
                    borderColor: `${featured.categoryColor}40`
                  }}
                >
                  <Tag size={12} />
                  <span>{featured.category}</span>
                </div>

                <div className="blog-meta-chip">
                  <Clock size={13} color="#F06543" />
                  <span>{featured.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="blog-featured-title">
                {featured.title}
              </h3>

              {/* Clean Excerpt (Stripped HTML) */}
              <p className="blog-featured-excerpt">
                {featured.excerpt}
              </p>

              {/* Tags */}
              <div className="blog-tags-row">
                {(featured.tags || ['Guide', 'Andaman']).map((tag, idx) => (
                  <span key={idx} className="blog-tag-pill">
                    #{tag.replace(/^#/, '')}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: Date & Read More CTA */}
            <div className="blog-featured-footer">
              <div className="blog-meta-chip">
                <Calendar size={14} color="#F06543" />
                <span>Published: {featured.date}</span>
              </div>

              <div className="blog-readnow-btn">
                <span>READ MORE</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        </a>

        {/* ── FILTER TABS ── */}
        <div className="blog-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── HORIZONTAL SLIDER CARDS ── */}
        <div ref={sliderRef} className="blog-slider">
          {filtered.map((blog, idx) => {
            const Icon = blog.icon || Map;
            return (
              <div key={`${blog.id || 'blog'}-${idx}`} className="blog-card-wrap">
                <a
                  href={`/blog/${blog.id}`}
                  onClick={(e) => navigateTo(`/blog/${blog.id}`, e)}
                  className="blog-card"
                >
                  {/* Card Image */}
                  <div className="blog-card-img-wrap">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-card-img"
                      loading="lazy"
                    />
                    <div className="blog-card-img-overlay" />
                    
                    {/* Category pill on image */}
                    <span
                      className="blog-card-cat-badge"
                      style={{
                        color: blog.categoryColor,
                        background: 'rgba(255, 255, 255, 0.94)',
                        border: `1px solid ${blog.categoryColor}30`,
                      }}
                    >
                      <Icon size={11} color={blog.categoryColor} />
                      <span>{blog.category}</span>
                    </span>

                    {/* Read time pill */}
                    <span className="blog-card-read-chip">
                      <Clock size={11} color="#F06543" />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="blog-card-body">
                    <div className="blog-card-title">{blog.title}</div>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="blog-card-footer">
                    <div className="blog-card-date">
                      <Calendar size={12} color="#F06543" />
                      <span>{blog.date}</span>
                    </div>
                    
                    <div className="blog-card-action-btn">
                      <span>READ MORE</span>
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── NEWSLETTER STRIP ── */}
        <div className="blog-newsletter">
          <div>
            <div className="blog-newsletter-title">
              <Sparkles size={18} color="#F06543" />
              <span>Get Andaman Travel Tips in Your Inbox</span>
            </div>
            <div className="blog-newsletter-sub">
              Weekly curated guides, hidden island spots & seasonal discounts — straight from Port Blair.
            </div>
          </div>

          {newsletterSubscribed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0D9488', fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800 }}>
              <CheckCircle size={18} color="#0D9488" />
              <span>Thank you! You are subscribed to Andaman insights.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="blog-newsletter-form">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="blog-newsletter-input"
                required
              />
              <button type="submit" className="blog-newsletter-btn">
                <Send size={14} />
                <span>SUBSCRIBE</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
