import{r as e}from"./rolldown-runtime-hePW80VL.js";import{Gn as t,K as n,Ln as r,Zn as i,j as a,jn as o,mn as s}from"./lucide-vendor-CBhgx3NO.js";import{v as c}from"./three-vendor-Md08yeGZ.js";import{t as l}from"./FooterBottom-DsWKMEou.js";import{t as u}from"./blogService-BdX6QAlu.js";var d=e(i(),1),f=c(),p=[{id:`all`,label:`All Articles`},{id:`diving`,label:`Scuba & Diving`},{id:`honeymoon`,label:`Honeymoon`},{id:`budget`,label:`Budget Travel`},{id:`guides`,label:`Island Guides`},{id:`food`,label:`Food & Dining`},{id:`photography`,label:`Photography`}];function m(){let[e,i]=(0,d.useState)(`all`),[c,m]=(0,d.useState)(``),[h,g]=(0,d.useState)([]);(0,d.useEffect)(()=>{u.getBlogs().then(e=>{e.data&&Array.isArray(e.data)&&e.data.length>0&&g(e.data.map(e=>({id:e.slug||e.id,title:e.title,category:e.category?.name||`Travel Guides`,categoryCode:`guides`,excerpt:e.excerpt||`Discover the perfect week-long island hopping plan featuring coral reefs and sunset sails.`,author:e.author?.name||`Andaman Editor`,authorAvatar:e.author?.avatar||`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,date:new Date(e.createdAt||Date.now()).toLocaleDateString(`en-GB`,{day:`2-digit`,month:`short`,year:`numeric`}),readTime:`6 min read`,image:e.coverImage||`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,views:`12.4K`})))}).catch(()=>{})},[]);let _={id:`featured-handbook-2026`,title:`The Ultimate Andaman Travel Handbook 2026: Flights, Ferries & Hidden Gems`,category:`Island Guides`,categoryCode:`guides`,excerpt:`Everything you need to know before visiting the Andaman & Nicobar Archipelago. From navigating RAP permit exemptions and booking Nautika speed ferries to uncovering hidden white sand beaches in Neil Island.`,author:`Sarah Jenkins`,authorAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,date:`12 Aug 2026`,readTime:`8 min read`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90`,views:`42.5K`},v=(h.length>0?h:[{id:`scuba-beginners-guide`,title:`Scuba Diving for Beginners: PADI Certification & Top Dive Reefs in Havelock`,category:`Scuba & Diving`,categoryCode:`diving`,excerpt:`Thinking of taking your first underwater plunge? Here is a complete beginner guide to Nemo Reef, Aquarium, and Tribe Gate dive spots in Swaraj Dweep.`,author:`Mike Ross`,authorAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80`,date:`08 Aug 2026`,readTime:`6 min read`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,views:`28.1K`},{id:`honeymoon-andaman`,title:`7 Romantic Experiences for Couples & Honeymooners in Swaraj Dweep`,category:`Honeymoon`,categoryCode:`honeymoon`,excerpt:`Candlelight dinners on Radhanagar Beach, private luxury pool villas, and bioluminescent night kayaking under starry skies.`,author:`Anita Roy`,authorAvatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80`,date:`04 Aug 2026`,readTime:`5 min read`,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80`,views:`35.4K`},{id:`andaman-budget-travel-under-15k`,title:`Andaman Budget Travel: How to Explore Port Blair & Havelock Under ₹15,000`,category:`Budget Travel`,categoryCode:`budget`,excerpt:`Proven tips on saving money on government ferries, scooty rentals, budget beachfront homestays, and local seafood joints.`,author:`Vikram Seth`,authorAvatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80`,date:`28 Jul 2026`,readTime:`7 min read`,image:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80`,views:`51.2K`},{id:`best-time-to-visit-month-by-month`,title:`Best Time to Visit Andaman: Month-by-Month Weather & Water Visibility Guide`,category:`Island Guides`,categoryCode:`guides`,excerpt:`Planning your dates? Learn when the sea is calmest for scuba diving, peak festive season discounts, and monsoon travel warnings.`,author:`Sarah Jenkins`,authorAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,date:`22 Jul 2026`,readTime:`6 min read`,image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80`,views:`64.0K`},{id:`baratang-jungle-caves-guide`,title:`Baratang Island Expedition: Ancient Limestone Caves & Mangrove Boat Safaris`,category:`Island Guides`,categoryCode:`guides`,excerpt:`Journey through Jarawa tribal reserve forests and speedboat through dense mangrove creeks to witness stalactite cave formations.`,author:`Mike Ross`,authorAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80`,date:`15 Jul 2026`,readTime:`5 min read`,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80`,views:`19.8K`},{id:`top-15-photography-spots`,title:`Top 15 Instagram & Drone Photography Locations Across Andaman`,category:`Photography`,categoryCode:`photography`,excerpt:`The exact coordinates for breathtaking aerial reef shots, Ross & Smith twin sandbar panoramas, and Chidiya Tapu sunset vistas.`,author:`Anita Roy`,authorAvatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80`,date:`10 Jul 2026`,readTime:`4 min read`,image:`https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80`,views:`41.3K`},{id:`local-cuisine-food-guide`,title:`Local Cuisine Guide: Top 10 Must-Try Seafood & Island Delicacies in Port Blair`,category:`Food & Dining`,categoryCode:`food`,excerpt:`From butter garlic grilled lobsters and Andaman fish curry to coconut crabs — explore the best culinary spots in Aberdeen Bazaar.`,author:`Vikram Seth`,authorAvatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80`,date:`02 Jul 2026`,readTime:`5 min read`,image:`https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80`,views:`23.7K`},{id:`ferry-booking-guide-makruzz-nautika`,title:`Government vs Private Ferries: Makruzz, Nautika & Booking Schedules Explained`,category:`Island Guides`,categoryCode:`guides`,excerpt:`How to avoid ferry delay hassles during island hopping. Comparison of luggage limits, seat classes, and cancellation policies.`,author:`Sarah Jenkins`,authorAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,date:`25 Jun 2026`,readTime:`6 min read`,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,views:`38.9K`}]).filter(t=>{let n=e===`all`||t.categoryCode===e,r=t.title.toLowerCase().includes(c.toLowerCase())||t.excerpt.toLowerCase().includes(c.toLowerCase());return n&&r});return(0,f.jsxs)(`div`,{className:`blog-page-root`,children:[(0,f.jsx)(`style`,{children:`
        .blog-page-root {
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          padding-top: 100px;
          padding-bottom: 80px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .blog-glow-top {
          position: absolute;
          top: -10%; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 500px;
          background: radial-gradient(ellipse at center, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .blog-container {
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Hero Header */
        .blog-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 44px;
        }
        .blog-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(13, 148, 136, 0.25);
          padding: 6px 16px;
          border-radius: 30px;
          text-transform: uppercase;
          margin-bottom: 14px;
          backdrop-filter: blur(8px);
        }
        .blog-main-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .blog-main-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 28px;
        }

        /* Search Bar & Filters */
        .blog-search-bar {
          position: relative;
          max-width: 520px;
          margin: 0 auto 36px;
        }
        .blog-search-input {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #0f172a;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          padding: 14px 20px 14px 44px;
          border-radius: 30px;
          outline: none; width: 100%;
          box-sizing: border-box;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.04);
        }
        .blog-search-input::placeholder { color: #94a3b8; }
        .blog-search-input:focus {
          border-color: #F06543;
          box-shadow: 0 0 16px rgba(13, 148, 136, 0.2);
        }

        /* Category Filter Tabs */
        .blog-categories-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .blog-cat-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .blog-cat-btn:hover {
          color: #0B2545;
          border-color: #F06543;
          background: #FFF0EB;
        }
        .blog-cat-btn.active {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(13, 148, 136, 0.35);
        }

        /* Featured Post Card */
        .blog-featured-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          overflow: hidden;
          margin-bottom: 56px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          box-shadow: 0 4px 24px rgba(0, 45, 98, 0.06);
          transition: transform 0.4s ease, border-color 0.4s ease;
        }
        .blog-featured-card:hover {
          transform: translateY(-4px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }
        @media (max-width: 900px) {
          .blog-featured-card { grid-template-columns: 1fr; }
        }

        .blog-featured-img-box {
          position: relative;
          min-height: 360px;
          overflow: hidden;
        }
        .blog-featured-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s ease;
        }
        .blog-featured-card:hover .blog-featured-img-box img {
          transform: scale(1.05);
        }
        .blog-featured-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent 50%, rgba(255,255,255,0.05) 100%);
        }
        @media (max-width: 900px) {
          .blog-featured-overlay {
            background: linear-gradient(to top, rgba(255,255,255,0.05) 0%, transparent 60%);
          }
        }

        .blog-featured-body {
          padding: 36px 40px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .blog-featured-body { padding: 24px; }
        }

        .blog-featured-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 600; color: #0B2545;
          line-height: 1.15; margin-bottom: 12px;
        }
        .blog-featured-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #475569;
          line-height: 1.65; margin-bottom: 24px;
        }

        .blog-author-row {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 18px; border-top: 1px solid #e2e8f0;
          flex-wrap: wrap; gap: 12px;
        }
        .blog-author-info {
          display: flex; align-items: center; gap: 10px;
        }
        .blog-author-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          object-fit: cover; border: 1.5px solid #F06543;
        }

        .blog-read-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.05em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none; padding: 11px 22px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.3s ease; text-decoration: none;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
        }
        .blog-read-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.35);
        }

        /* Regular Posts Grid */
        .blog-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }
        @media (max-width: 1024px) {
          .blog-posts-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .blog-posts-grid { grid-template-columns: 1fr; }
        }

        .blog-post-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 45, 98, 0.04);
        }
        .blog-post-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(0, 45, 98, 0.10);
        }

        .blog-card-img-box {
          position: relative; height: 200px; overflow: hidden;
        }
        .blog-card-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-post-card:hover .blog-card-img-box img {
          transform: scale(1.08);
        }

        .blog-card-cat-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1); padding: 4px 12px; border-radius: 14px;
          border: 1px solid #e2e8f0; text-transform: uppercase;
        }

        .blog-card-body {
          padding: 22px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .blog-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 800; color: #0B2545;
          line-height: 1.35; margin-bottom: 8px;
          transition: color 0.25s ease;
        }
        .blog-post-card:hover .blog-card-title { color: #F06543; }

        .blog-card-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 18px; display: -webkit-box;
          -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }

        .blog-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid #e2e8f0;
          margin-top: auto;
        }

        /* Bottom Newsletter Strip */
        .blog-newsletter-strip {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px; padding: 36px 40px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 24px; box-shadow: 0 4px 20px rgba(0, 45, 98, 0.06);
        }
        @media (max-width: 768px) {
          .blog-newsletter-strip { padding: 24px; }
        }
      `}),(0,f.jsx)(`div`,{className:`blog-glow-top`}),(0,f.jsxs)(`div`,{className:`blog-container`,children:[(0,f.jsxs)(`div`,{className:`blog-header`,children:[(0,f.jsxs)(`div`,{className:`blog-badge`,children:[(0,f.jsx)(r,{size:13,color:`#F06543`}),(0,f.jsx)(`span`,{children:`ISLAND JOURNAL & TRAVEL GUIDES`})]}),(0,f.jsx)(`h1`,{className:`blog-main-title`,children:`Stories, Insider Guides & Island Secrets`}),(0,f.jsx)(`p`,{className:`blog-main-desc`,children:`Explore expert travel itineraries, scuba diving tips, ferry schedules, and culinary discoveries written by locals who live in the Andaman Islands.`}),(0,f.jsxs)(`div`,{className:`blog-search-bar`,children:[(0,f.jsx)(n,{size:16,color:`#5a7788`,style:{position:`absolute`,left:16,top:`50%`,transform:`translateY(-50%)`}}),(0,f.jsx)(`input`,{type:`text`,placeholder:`Search scuba, ferries, honeymoon, beaches...`,value:c,onChange:e=>m(e.target.value),className:`blog-search-input`})]}),(0,f.jsx)(`div`,{className:`blog-categories-row`,children:p.map(t=>(0,f.jsx)(`button`,{className:`blog-cat-btn${e===t.id?` active`:``}`,onClick:()=>i(t.id),children:t.label},t.id))})]}),e===`all`&&!c&&(0,f.jsxs)(`div`,{className:`blog-featured-card`,children:[(0,f.jsxs)(`div`,{className:`blog-featured-img-box`,children:[(0,f.jsx)(`img`,{src:_.image,alt:_.title}),(0,f.jsx)(`div`,{className:`blog-featured-overlay`}),(0,f.jsx)(`span`,{style:{position:`absolute`,top:18,left:18,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:900,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,padding:`5px 14px`,borderRadius:20,letterSpacing:`0.08em`},children:`FEATURED HANDBOOK`})]}),(0,f.jsxs)(`div`,{className:`blog-featured-body`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:700,color:`#F06543`,marginBottom:8},children:[(0,f.jsx)(`span`,{children:_.category}),(0,f.jsx)(`span`,{style:{color:`#4a6678`},children:`•`}),(0,f.jsx)(`span`,{children:_.readTime}),(0,f.jsx)(`span`,{style:{color:`#4a6678`},children:`•`}),(0,f.jsxs)(`span`,{style:{color:`#F06543`},children:[_.views,` Reads`]})]}),(0,f.jsx)(`h2`,{className:`blog-featured-title`,children:_.title}),(0,f.jsx)(`p`,{className:`blog-featured-excerpt`,children:_.excerpt})]}),(0,f.jsxs)(`div`,{className:`blog-author-row`,children:[(0,f.jsx)(`div`,{className:`blog-author-info`,children:(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#334155`},children:_.author}),(0,f.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`},children:_.date})]})}),(0,f.jsxs)(`a`,{href:`/blog-details?id=${_.id}`,className:`blog-read-btn`,children:[(0,f.jsx)(`span`,{children:`READ FULL STORY`}),(0,f.jsx)(t,{size:13})]})]})]})]}),(0,f.jsx)(`div`,{className:`blog-posts-grid`,children:v.map(e=>(0,f.jsxs)(`div`,{className:`blog-post-card`,children:[(0,f.jsxs)(`div`,{className:`blog-card-img-box`,children:[(0,f.jsx)(`img`,{src:e.image,alt:e.title,loading:`lazy`}),(0,f.jsx)(`span`,{className:`blog-card-cat-badge`,children:e.category})]}),(0,f.jsxs)(`div`,{className:`blog-card-body`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:700,color:`#64748b`,marginBottom:6},children:[(0,f.jsx)(o,{size:11,color:`#F06543`}),(0,f.jsx)(`span`,{children:e.date}),(0,f.jsx)(`span`,{style:{color:`#4a6678`},children:`•`}),(0,f.jsx)(s,{size:11,color:`#F06543`}),(0,f.jsx)(`span`,{children:e.readTime})]}),(0,f.jsx)(`h3`,{className:`blog-card-title`,children:e.title}),(0,f.jsx)(`p`,{className:`blog-card-excerpt`,children:e.excerpt})]}),(0,f.jsx)(`div`,{children:(0,f.jsxs)(`div`,{className:`blog-card-footer`,children:[(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:(0,f.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:700,color:`#64748b`},children:e.author})}),(0,f.jsxs)(`a`,{href:`/blog-details?id=${e.id}`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#0B2545`,background:`#FFF0EB`,border:`1px solid #F06543`,padding:`6px 14px`,borderRadius:12,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:5,transition:`all 0.25s ease`},children:[(0,f.jsx)(`span`,{children:`READ`}),(0,f.jsx)(t,{size:11})]})]})})]})]},e.id))}),(0,f.jsxs)(`div`,{className:`blog-newsletter-strip`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:4},children:[(0,f.jsx)(a,{size:13,color:`#F06543`}),`NEVER MISS AN ISLAND GUIDE`]}),(0,f.jsx)(`div`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:28,fontWeight:600,color:`#0B2545`,marginBottom:4},children:`Subscribe to Andaman Trails Journal`}),(0,f.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#64748b`},children:`Get secret island itineraries, ferry alert updates & dive condition reports delivered bi-weekly.`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:[(0,f.jsx)(`input`,{type:`email`,placeholder:`Enter your email address`,style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#0f172a`,background:`#f8fafc`,border:`1px solid #e2e8f0`,padding:`12px 18px`,borderRadius:14,outline:`none`,minWidth:260}}),(0,f.jsx)(`button`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)`,border:`none`,padding:`12px 24px`,borderRadius:14,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 4px 16px rgba(0, 45, 98, 0.25)`},children:`SUBSCRIBE NOW`})]})]})]}),(0,f.jsx)(l,{})]})}export{m as default};