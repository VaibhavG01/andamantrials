import{r as e}from"./rolldown-runtime-hePW80VL.js";import{An as t,E as n,G as r,Gn as i,Tn as a,Zn as o,a as s,bt as c,j as l,jn as u,ln as d,mn as f,mt as p,w as m,wn as h,yn as g}from"./lucide-vendor-CBhgx3NO.js";import{v as _}from"./three-vendor-Md08yeGZ.js";import{t as v}from"./blogService-BEve97oj.js";var y=e(o(),1),b=_(),x=e=>e?e.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,``).replace(/<script[^>]*>[\s\S]*?<\/script>/gi,``).replace(/<[^>]+>/g,` `).replace(/&amp;/g,`&`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&nbsp;/g,` `).replace(/\s+/g,` `).trim():``,S=(e,t)=>{t&&t.preventDefault(),window.history.pushState({},``,e),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},C=[{id:`best-time-visit-andaman`,title:`Best Time to Visit Andaman: Month-by-Month Weather & Season Guide`,excerpt:`Planning your dream Andaman holiday? Explore our comprehensive weather guide covering peak sunny months, water visibility for scuba diving, and pleasant tropical seasons.`,category:`Planning & Weather`,categoryColor:`#F06543`,categoryBg:`rgba(240,101,67,0.1)`,readTime:`5 min read`,date:`04 Oct 2026`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85`,featured:!0,icon:u,tags:[`Weather Guide`,`Best Season`,`Island Tips`]},{id:`ultimate-andaman-guide`,title:`The Ultimate Andaman Travel Guide 2026: Island Hopping & Hidden Gems`,excerpt:`Everything you need to know before visiting Andaman — best time to go, private speed ferries, secluded beaches in Havelock, and insider tips from local experts.`,category:`Travel Guide`,categoryColor:`#002D62`,categoryBg:`rgba(0,45,98,0.08)`,readTime:`12 min read`,date:`28 Sep 2026`,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85`,featured:!1,icon:c,tags:[`Island Guide`,`Ferries`,`Havelock`]},{id:`scuba-beginners-guide`,title:`Scuba Diving in Andaman: A Complete Beginner's & Non-Swimmer's Guide`,excerpt:`Never dived before or cannot swim? No worries. Our PADI-certified divemasters guide you through breathing basics, equipment, and the most vibrant coral reefs.`,category:`Adventure`,categoryColor:`#0D9488`,categoryBg:`rgba(13,148,136,0.1)`,readTime:`8 min read`,date:`18 Sep 2026`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85`,featured:!1,icon:s,tags:[`Scuba Diving`,`Beginners`,`Marine Life`]},{id:`honeymoon-andaman`,title:`7 Most Romantic Things to Do in Andaman for Honeymooners & Couples`,excerpt:`Private candlelit beach dinners on Radhanagar Beach, midnight bioluminescent kayaking, and luxury beachfront villas for an unforgettable romantic escape.`,category:`Honeymoon`,categoryColor:`#E11D48`,categoryBg:`rgba(225,29,72,0.08)`,readTime:`6 min read`,date:`10 Sep 2026`,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85`,featured:!1,icon:n,tags:[`Honeymoon`,`Romance`,`Beach Villas`]},{id:`budget-andaman`,title:`How to Visit Andaman on a Budget: 5-Day Smart Backpacker Guide`,excerpt:`Clear breakdown of ferry costs, budget beachfront stays, public buses, and free pristine beaches so you can enjoy the islands without overspending.`,category:`Budget Travel`,categoryColor:`#D97706`,categoryBg:`rgba(217,119,6,0.1)`,readTime:`10 min read`,date:`02 Sep 2026`,image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85`,featured:!1,icon:d,tags:[`Budget`,`Tips`,`Backpacker`]},{id:`baratang-caves`,title:`Baratang Island Expedition: Limestone Caves & Mangrove Boat Safaris`,excerpt:`A scenic dense jungle convoy, speedboat through mangrove creeks, and a trek to natural limestone caves — Andaman’s most thrilling day trip.`,category:`Adventure`,categoryColor:`#0D9488`,categoryBg:`rgba(13,148,136,0.1)`,readTime:`9 min read`,date:`24 Aug 2026`,image:`https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=900&q=85`,featured:!1,icon:p,tags:[`Baratang`,`Limestone Caves`,`Mangroves`]},{id:`photography-spots`,title:`Top 15 Instagram & Drone Photography Locations in Andaman`,excerpt:`From the iconic Radhanagar sunsets to the crystal sandbar of Ross & Smith Islands — a photographer’s ultimate guide to capturing the Andaman magic.`,category:`Photography`,categoryColor:`#7C3AED`,categoryBg:`rgba(124,58,237,0.1)`,readTime:`11 min read`,date:`15 Aug 2026`,image:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=85`,featured:!1,icon:t,tags:[`Photography`,`Sunsets`,`Aerial Views`]}],w=[`All`,`Travel Guide`,`Adventure`,`Honeymoon`,`Budget Travel`,`Planning & Weather`,`Photography`];function T(){let[e,o]=(0,y.useState)(`All`),p=(0,y.useRef)(null),[_,T]=(0,y.useState)(C),[E,D]=(0,y.useState)(!0),[O,k]=(0,y.useState)(``),[A,j]=(0,y.useState)(!1);(0,y.useEffect)(()=>{v.getBlogs().then(e=>{if(e&&e.data&&Array.isArray(e.data)&&e.data.length>0){let r=[...e.data.map(e=>{let r=e.category?.name||`Travel Guide`,i=`#F06543`,a=`rgba(240,101,67,0.1)`,o=c,l=r.toLowerCase();l.includes(`adventure`)||l.includes(`scuba`)?(i=`#0D9488`,a=`rgba(13,148,136,0.1)`,o=s):l.includes(`honeymoon`)||l.includes(`romantic`)?(i=`#E11D48`,a=`rgba(225,29,72,0.08)`,o=n):l.includes(`budget`)?(i=`#D97706`,a=`rgba(217,119,6,0.1)`,o=d):l.includes(`weather`)||l.includes(`tips`)||l.includes(`time`)?(i=`#F06543`,a=`rgba(240,101,67,0.1)`,o=u):l.includes(`photography`)&&(i=`#7C3AED`,a=`rgba(124,58,237,0.1)`,o=t);let f=``;if(e.excerpt&&e.excerpt.trim())f=x(e.excerpt);else if(e.content){let t=x(e.content);f=t.length>170?t.substring(0,170)+`...`:t}else f=`Explore expert insights, detailed island itineraries, and travel recommendations for your Andaman trip.`;return{id:e.slug||e.id,title:e.title,excerpt:f,category:r,categoryColor:i,categoryBg:a,readTime:e.readTime||`6 min read`,date:new Date(e.createdAt||Date.now()).toLocaleDateString(`en-GB`,{day:`2-digit`,month:`short`,year:`numeric`}),image:e.coverImage||e.image||`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85`,featured:!!e.isFeatured,icon:o,tags:Array.isArray(e.tags)&&e.tags.length>0?e.tags:[`Andaman`,r]}})].sort((e,t)=>!!t.featured-+!!e.featured);T(r)}else T(C)}).catch(()=>{T(C)}).finally(()=>D(!1))},[]);let M=_[0]||C[0],N=_.slice(1),P=e===`All`?N:N.filter(t=>t.category?.toLowerCase()===e.toLowerCase());return(0,b.jsxs)(`section`,{id:`blogs-section`,className:`blog-section`,children:[(0,b.jsx)(`style`,{children:`
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
      `}),(0,b.jsx)(`div`,{className:`blog-glow-l`}),(0,b.jsx)(`div`,{className:`blog-glow-r`}),(0,b.jsxs)(`div`,{className:`blog-container`,children:[(0,b.jsxs)(`div`,{className:`blog-header-row`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`blog-header-sub`,children:[(0,b.jsx)(l,{size:14,color:`#F06543`}),(0,b.jsx)(`span`,{children:`POPULAR STORIES & GUIDES`})]}),(0,b.jsx)(`h2`,{className:`blog-header-title`,children:`Stories, Tips & Island Insights`}),(0,b.jsx)(`p`,{className:`blog-header-desc`,children:`Expert travel guides, hidden gems, and real stories from those who know the Andaman Islands best.`})]}),(0,b.jsxs)(`div`,{className:`blog-nav-row`,children:[(0,b.jsx)(`button`,{onClick:()=>p.current?.scrollBy({left:-360,behavior:`smooth`}),className:`blog-arrow`,"aria-label":`Scroll Left`,children:(0,b.jsx)(a,{size:22})}),(0,b.jsx)(`button`,{onClick:()=>p.current?.scrollBy({left:360,behavior:`smooth`}),className:`blog-arrow`,"aria-label":`Scroll Right`,children:(0,b.jsx)(h,{size:22})}),(0,b.jsxs)(`a`,{href:`/blog`,onClick:e=>S(`/blog`,e),className:`blog-viewall`,children:[(0,b.jsx)(`span`,{children:`ALL BLOGS`}),(0,b.jsx)(i,{size:14})]})]})]}),(0,b.jsxs)(`a`,{href:`/blog/${M.id}`,onClick:e=>S(`/blog/${M.id}`,e),className:`blog-featured`,children:[(0,b.jsxs)(`div`,{className:`blog-featured-img-wrap`,children:[(0,b.jsx)(`img`,{src:M.image,alt:M.title,className:`blog-featured-img`,loading:`lazy`}),(0,b.jsx)(`div`,{className:`blog-featured-overlay`}),(0,b.jsxs)(`div`,{className:`blog-featured-badge`,children:[(0,b.jsx)(l,{size:12,color:`#d97706`}),(0,b.jsx)(`span`,{children:`FEATURED ARTICLE`})]})]}),(0,b.jsxs)(`div`,{className:`blog-featured-body`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:10},children:[(0,b.jsxs)(`div`,{className:`blog-cat-pill`,style:{color:M.categoryColor,background:M.categoryBg,borderColor:`${M.categoryColor}40`},children:[(0,b.jsx)(m,{size:12}),(0,b.jsx)(`span`,{children:M.category})]}),(0,b.jsxs)(`div`,{className:`blog-meta-chip`,children:[(0,b.jsx)(f,{size:13,color:`#F06543`}),(0,b.jsx)(`span`,{children:M.readTime})]})]}),(0,b.jsx)(`h3`,{className:`blog-featured-title`,children:M.title}),(0,b.jsx)(`p`,{className:`blog-featured-excerpt`,children:M.excerpt}),(0,b.jsx)(`div`,{className:`blog-tags-row`,children:(M.tags||[`Guide`,`Andaman`]).map((e,t)=>(0,b.jsxs)(`span`,{className:`blog-tag-pill`,children:[`#`,e.replace(/^#/,``)]},t))})]}),(0,b.jsxs)(`div`,{className:`blog-featured-footer`,children:[(0,b.jsxs)(`div`,{className:`blog-meta-chip`,children:[(0,b.jsx)(u,{size:14,color:`#F06543`}),(0,b.jsxs)(`span`,{children:[`Published: `,M.date]})]}),(0,b.jsxs)(`div`,{className:`blog-readnow-btn`,children:[(0,b.jsx)(`span`,{children:`READ MORE`}),(0,b.jsx)(i,{size:13})]})]})]})]}),(0,b.jsx)(`div`,{className:`blog-filters`,children:w.map(t=>(0,b.jsx)(`button`,{className:`blog-filter-btn${e===t?` active`:``}`,onClick:()=>o(t),children:t},t))}),(0,b.jsx)(`div`,{ref:p,className:`blog-slider`,children:P.map((e,t)=>{let n=e.icon||c;return(0,b.jsx)(`div`,{className:`blog-card-wrap`,children:(0,b.jsxs)(`a`,{href:`/blog/${e.id}`,onClick:t=>S(`/blog/${e.id}`,t),className:`blog-card`,children:[(0,b.jsxs)(`div`,{className:`blog-card-img-wrap`,children:[(0,b.jsx)(`img`,{src:e.image,alt:e.title,className:`blog-card-img`,loading:`lazy`}),(0,b.jsx)(`div`,{className:`blog-card-img-overlay`}),(0,b.jsxs)(`span`,{className:`blog-card-cat-badge`,style:{color:e.categoryColor,background:`rgba(255, 255, 255, 0.94)`,border:`1px solid ${e.categoryColor}30`},children:[(0,b.jsx)(n,{size:11,color:e.categoryColor}),(0,b.jsx)(`span`,{children:e.category})]}),(0,b.jsxs)(`span`,{className:`blog-card-read-chip`,children:[(0,b.jsx)(f,{size:11,color:`#F06543`}),(0,b.jsx)(`span`,{children:e.readTime})]})]}),(0,b.jsxs)(`div`,{className:`blog-card-body`,children:[(0,b.jsx)(`div`,{className:`blog-card-title`,children:e.title}),(0,b.jsx)(`p`,{className:`blog-card-excerpt`,children:e.excerpt})]}),(0,b.jsxs)(`div`,{className:`blog-card-footer`,children:[(0,b.jsxs)(`div`,{className:`blog-card-date`,children:[(0,b.jsx)(u,{size:12,color:`#F06543`}),(0,b.jsx)(`span`,{children:e.date})]}),(0,b.jsxs)(`div`,{className:`blog-card-action-btn`,children:[(0,b.jsx)(`span`,{children:`READ MORE`}),(0,b.jsx)(i,{size:11})]})]})]})},`${e.id||`blog`}-${t}`)})}),(0,b.jsxs)(`div`,{className:`blog-newsletter`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`blog-newsletter-title`,children:[(0,b.jsx)(l,{size:18,color:`#F06543`}),(0,b.jsx)(`span`,{children:`Get Andaman Travel Tips in Your Inbox`})]}),(0,b.jsx)(`div`,{className:`blog-newsletter-sub`,children:`Weekly curated guides, hidden island spots & seasonal discounts — straight from Port Blair.`})]}),A?(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`#0D9488`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800},children:[(0,b.jsx)(g,{size:18,color:`#0D9488`}),(0,b.jsx)(`span`,{children:`Thank you! You are subscribed to Andaman insights.`})]}):(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),!(!O||!O.includes(`@`))&&(j(!0),setTimeout(()=>{k(``)},3e3))},className:`blog-newsletter-form`,children:[(0,b.jsx)(`input`,{type:`email`,value:O,onChange:e=>k(e.target.value),placeholder:`Enter your email address...`,className:`blog-newsletter-input`,required:!0}),(0,b.jsxs)(`button`,{type:`submit`,className:`blog-newsletter-btn`,children:[(0,b.jsx)(r,{size:14}),(0,b.jsx)(`span`,{children:`SUBSCRIBE`})]})]})]})]})]})}export{T as default};