import{r as e}from"./rolldown-runtime-hePW80VL.js";import{E as t,Gn as n,O as r,Tn as i,Xn as a,Zn as o,a as s,j as c,ln as l,mn as u,mt as d,pt as f,wn as p,xt as m,y as h}from"./lucide-vendor-CBhgx3NO.js";import{v as g}from"./three-vendor-Md08yeGZ.js";import{t as _}from"./apiClient-C7CEV0nz.js";var v=e(o(),1),y=g(),b=[{id:`radhanagar-beach`,name:`Radhanagar Beach`,tagline:`Asia's Finest Sunset Beach`,category:`beaches`,island:`Havelock Island`,travelTime:`2.5 hrs from Port Blair`,rating:4.97,reviews:`8.4K`,mustSee:!0,description:`Ranked Asia's best beach by Time Magazine. Pristine white sand stretching 2km, turquoise waters, and legendary crimson sunsets.`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85`,badge:`#7 ASIA`,badgeBg:`linear-gradient(135deg, #f5af02, #e41d24)`,icon:t,tags:[`Beach`,`Sunset`,`Swimming`]},{id:`cellular-jail`,name:`Cellular Jail`,tagline:`The Colonial Dark History`,category:`historical`,island:`Port Blair`,travelTime:`In Port Blair`,rating:4.9,reviews:`12.1K`,mustSee:!0,description:`A haunting colonial prison turned national monument. The Light & Sound show every evening brings India's struggle for independence alive.`,image:`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85`,badge:`MUST VISIT`,badgeBg:`linear-gradient(135deg, #F06543, #0070f3)`,icon:a,tags:[`Heritage`,`History`,`Light Show`]},{id:`elephant-beach`,name:`Elephant Beach`,tagline:`Vibrant Coral Reef Paradise`,category:`beaches`,island:`Havelock Island`,travelTime:`3 hrs from Port Blair`,rating:4.88,reviews:`5.6K`,mustSee:!1,description:`A boat-only accessible beach famous for shallow coral reefs. Perfect for first-time snorkelers with calm, crystal-clear waters.`,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85`,badge:`SNORKEL HUB`,badgeBg:`linear-gradient(135deg, #F06543, #059669)`,icon:s,tags:[`Snorkeling`,`Coral`,`Boat Access`]},{id:`ross-island`,name:`Ross Island`,tagline:`Ruins of the Colonial Capital`,category:`historical`,island:`Near Port Blair`,travelTime:`20 mins boat ride`,rating:4.85,reviews:`4.2K`,mustSee:!0,description:`Once the British administrative headquarters, now overgrown by jungle roots. Deer roam freely through crumbling colonial structures.`,image:`https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1000&q=85`,badge:`HERITAGE ISLE`,badgeBg:`linear-gradient(135deg, #8b5cf6, #6366f1)`,icon:l,tags:[`Ruins`,`History`,`Deer`]},{id:`neil-island`,name:`Neil Island`,tagline:`The Peaceful Green Gem`,category:`islands`,island:`Neil Island`,travelTime:`2 hrs from Port Blair`,rating:4.91,reviews:`3.8K`,mustSee:!0,description:`Smaller and quieter than Havelock, Neil Island offers lush paddy fields, natural bridge formations, and uncrowded pristine beaches.`,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=85`,badge:`HIDDEN GEM`,badgeBg:`linear-gradient(135deg, #FF6B4A, #F06543)`,icon:h,tags:[`Quiet`,`Nature`,`Beaches`]},{id:`baratang-island`,name:`Baratang Island`,tagline:`Limestone Caves & Mudvolcanoes`,category:`nature`,island:`Baratang Island`,travelTime:`3.5 hrs from Port Blair`,rating:4.82,reviews:`2.9K`,mustSee:!1,description:`A dramatic landscape of limestone sea caves, active mud volcanoes, and dense mangrove creeks. Reached via a thrilling jungle convoy.`,image:`https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1000&q=85`,badge:`ADVENTURE`,badgeBg:`linear-gradient(135deg, #ff4f7b, #dc2743)`,icon:d,tags:[`Caves`,`Mud Volcano`,`Jungle`]},{id:`north-bay-island`,name:`North Bay Island`,tagline:`The Water Sports Capital`,category:`water-sports`,island:`Near Port Blair`,travelTime:`30 mins from Port Blair`,rating:4.87,reviews:`6.1K`,mustSee:!1,description:`The go-to island for sea walking, glass bottom boat rides, and scuba diving. Crystal clear lagoons with the richest coral in South Andaman.`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85`,badge:`WATER SPORTS`,badgeBg:`linear-gradient(135deg, #FF6B4A, #F06543)`,icon:s,tags:[`Sea Walk`,`Scuba`,`Coral`]},{id:`jolly-buoy`,name:`Jolly Buoy Island`,tagline:`Pristine National Park Beach`,category:`islands`,island:`Mahatma Gandhi Marine Park`,travelTime:`1.5 hrs from Port Blair`,rating:4.93,reviews:`4.7K`,mustSee:!0,description:`Part of a protected national marine park, accessible only in season. Untouched beaches, vibrant coral gardens, and sea turtles nesting.`,image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85`,badge:`PROTECTED ISLE`,badgeBg:`linear-gradient(135deg, #F06543, #059669)`,icon:h,tags:[`National Park`,`Turtles`,`Coral`]}],x=[{id:`all`,label:`All Places`,icon:l},{id:`beaches`,label:`Beaches`,icon:t},{id:`islands`,label:`Islands`,icon:a},{id:`historical`,label:`Historical`,icon:f},{id:`nature`,label:`Nature`,icon:h},{id:`water-sports`,label:`Water Sports`,icon:s}],S={beaches:t,historical:a,islands:a,nature:d,"water-sports":s};function C(){let[e,t]=(0,v.useState)(`all`),[a,o]=(0,v.useState)([]),s=(0,v.useRef)(null);(0,v.useEffect)(()=>{(async()=>{try{let e=await _(`/places`);e&&e.data&&o(e.data)}catch(e){console.error(`Failed to load places:`,e)}})()},[]);let d=a.length>0?a:b,f=e===`all`?d:d.filter(t=>t.category===e),h=()=>s.current?.scrollBy({left:-380,behavior:`smooth`}),g=()=>s.current?.scrollBy({left:380,behavior:`smooth`}),C=e=>e?e.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,``).replace(/\s+/g,`-`):``,w=(e,t)=>{e.preventDefault();let n=t;if(!isNaN(t)){let e=a.find(e=>e.id===Number(t));e&&e.name&&(n=C(e.name))}window.history.pushState({},``,`/place-details?id=${n}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},T=e=>{if(!e)return[];if(Array.isArray(e))return e;try{if(typeof e==`string`){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Failed to parse tags:`,e)}return[]};return(0,y.jsxs)(`section`,{id:`places-section`,className:`ptv-section`,children:[(0,y.jsx)(`style`,{children:`
        .ptv-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #1e293b;
          padding: 60px 0 80px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .ptv-glow-tl {
          position: absolute; top: -5%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ptv-glow-br {
          position: absolute; bottom: -5%; right: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 45, 98, 0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ptv-container {
          max-width: 1380px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* Header */
        .ptv-header-row {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
          margin-bottom: 30px;
        }
        .ptv-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 7px;
          margin-bottom: 7px;
        }
        .ptv-header-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 900;
          color: #0B2545; line-height: 1.15; margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .ptv-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #475569;
          line-height: 1.6; max-width: 540px; margin: 0;
        }

        /* Nav */
        .ptv-nav-row {
          display: flex; align-items: center; gap: 10px;
        }
        .ptv-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0B2545;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 45, 98, 0.06);
        }
        .ptv-arrow:hover {
          background: #0B2545; color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 18px rgba(0, 45, 98, 0.25);
          transform: scale(1.05);
        }
        .ptv-viewall {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #ffffff;
          background: #0B2545;
          border: none;
          padding: 9px 18px; border-radius: 12px;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.25s ease; margin-left: 8px;
          box-shadow: 0 4px 12px rgba(0, 45, 98, 0.2);
        }
        .ptv-viewall:hover {
          background: #F06543;
        }

        /* Filter Tabs */
        .ptv-filters {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-bottom: 32px;
        }
        .ptv-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.04em;
          padding: 8px 18px; border-radius: 30px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          color: #475569;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .ptv-filter-btn:hover {
          border-color: #F06543;
          color: #0B2545; background: #FFF0EB;
        }
        .ptv-filter-btn.active {
          background: #0B2545;
          border-color: #0B2545; color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        /* Slider */
        .ptv-slider {
          display: flex; gap: 20px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; padding: 8px 4px 24px;
        }
        .ptv-slider::-webkit-scrollbar { display: none; }

        .ptv-card-wrap {
          flex: 0 0 calc(33.333% - 14px);
          min-width: 300px; scroll-snap-align: start;
        }
        @media (max-width: 1100px) {
          .ptv-card-wrap { flex: 0 0 calc(50% - 10px); min-width: 280px; }
        }
        @media (max-width: 640px) {
          .ptv-card-wrap { flex: 0 0 88%; min-width: 260px; }
        }

        /* Card */
        .ptv-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px; overflow: hidden;
          cursor: pointer; height: 100%;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.06);
        }
        .ptv-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(0, 45, 98, 0.12), 0 0 16px rgba(13, 148, 136, 0.12);
        }

        /* Card image */
        .ptv-img-box {
          position: relative; height: 210px; overflow: hidden; flex-shrink: 0;
          background: #f1f5f9;
        }
        .ptv-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .ptv-card:hover .ptv-img-box img { transform: scale(1.08); }

        .ptv-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.06em;
          color: #ffffff; padding: 4px 12px; border-radius: 20px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
          text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        }
        .ptv-must-see {
          position: absolute; top: 12px; right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.08em;
          color: #0B2545;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          backdrop-filter: blur(8px);
          padding: 4px 10px; border-radius: 12px;
          display: flex; align-items: center; gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .ptv-travel-pill {
          position: absolute; bottom: 12px; right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px; font-weight: 800; color: #0B2545;
          background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px);
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        /* Card body */
        .ptv-body {
          padding: 18px 18px 0; flex: 1; display: flex; flex-direction: column;
        }
        .ptv-location-row {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543;
          text-transform: uppercase; letter-spacing: 0.05em;
          display: flex; align-items: center; gap: 5px;
          margin-bottom: 6px;
        }
        .ptv-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 900; color: #0B2545;
          line-height: 1.25; margin-bottom: 4px;
        }
        .ptv-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #F06543; font-weight: 600; font-style: italic;
          margin-bottom: 10px;
        }
        .ptv-description {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #334155;
          line-height: 1.55; margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          min-height: 40px;
        }

        /* Tags */
        .ptv-tags {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;
        }
        .ptv-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 700; color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 9px; border-radius: 12px;
        }

        /* Footer */
        .ptv-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 18px 18px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }
        .ptv-rating {
          display: flex; align-items: center; gap: 5px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #f59e0b;
        }
        .ptv-reviews {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #64748b; margin-left: 2px;
          font-weight: 600;
        }
        .ptv-explore-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #ffffff;
          background: #0B2545;
          border: none;
          padding: 8px 16px; border-radius: 12px;
          display: flex; align-items: center; gap: 5px;
          cursor: pointer; transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 45, 98, 0.2);
        }
        .ptv-card:hover .ptv-explore-btn {
          background: #F06543;
          box-shadow: 0 4px 16px rgba(13, 148, 136, 0.4);
        }

        /* Featured full-width card at top */
        .ptv-featured-wrap {
          margin-bottom: 24px;
          border-radius: 24px; overflow: hidden;
          position: relative; height: 340px; cursor: pointer;
          border: 1.5px solid #e2e8f0;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.08);
        }
        .ptv-featured-wrap:hover {
          border-color: #F06543;
          box-shadow: 0 20px 40px rgba(0, 45, 98, 0.2);
          transform: translateY(-4px);
        }
        .ptv-featured-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .ptv-featured-wrap:hover img { transform: scale(1.05); }
        .ptv-featured-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(4, 19, 34, 0.92) 0%, rgba(4, 19, 34, 0.75) 50%, transparent 100%);
          display: flex; flex-direction: column; justify-content: center;
          padding: 40px;
        }
        @media (max-width: 640px) {
          .ptv-featured-wrap { height: 280px; }
          .ptv-featured-overlay { padding: 24px; }
        }
      `}),(0,y.jsx)(`div`,{className:`ptv-glow-tl`}),(0,y.jsx)(`div`,{className:`ptv-glow-br`}),(0,y.jsxs)(`div`,{className:`ptv-container`,children:[(0,y.jsxs)(`div`,{className:`ptv-header-row`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`ptv-header-sub`,children:[(0,y.jsx)(c,{size:13,color:`#F06543`}),(0,y.jsx)(`span`,{children:`PLACES TO VISIT`})]}),(0,y.jsx)(`h2`,{className:`ptv-header-title`,children:`Discover the Andaman Islands`}),(0,y.jsx)(`p`,{className:`ptv-header-desc`,children:`From legendary beaches and colonial ruins to hidden island gems — every corner of Andaman tells a story worth exploring.`})]}),(0,y.jsxs)(`div`,{className:`ptv-nav-row`,children:[(0,y.jsx)(`button`,{onClick:h,className:`ptv-arrow`,"aria-label":`Scroll Left`,children:(0,y.jsx)(i,{size:20})}),(0,y.jsx)(`button`,{onClick:g,className:`ptv-arrow`,"aria-label":`Scroll Right`,children:(0,y.jsx)(p,{size:20})}),(0,y.jsxs)(`a`,{href:`/destinations`,className:`ptv-viewall`,children:[(0,y.jsx)(`span`,{children:`VIEW ALL`}),(0,y.jsx)(n,{size:13})]})]})]}),(()=>{let e=d.find(e=>e.mustSee);if(!e)return null;let t=e.icon||S[e.category]||l;return(0,y.jsxs)(`div`,{className:`ptv-featured-wrap`,children:[(0,y.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`}),(0,y.jsxs)(`div`,{className:`ptv-featured-overlay`,children:[(0,y.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11.5,fontWeight:900,letterSpacing:`0.08em`,color:`#ffffff`,background:e.badgeBg,padding:`5px 14px`,borderRadius:20,width:`fit-content`,marginBottom:12,boxShadow:`0 4px 14px rgba(0,0,0,0.4)`,textShadow:`0 1px 2px rgba(0,0,0,0.4)`},children:[(0,y.jsx)(t,{size:13}),e.badge]}),(0,y.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:`clamp(26px, 3.5vw, 38px)`,fontWeight:900,color:`#ffffff`,lineHeight:1.15,marginBottom:6,textShadow:`0 2px 10px rgba(0,0,0,0.6)`},children:e.name}),(0,y.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#2dd4bf`,fontWeight:600,fontStyle:`italic`,marginBottom:12},children:e.tagline}),(0,y.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#e2e8f0`,lineHeight:1.6,maxWidth:520,margin:`0 0 20px`},children:e.description}),(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,flexWrap:`wrap`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:5,fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#f59e0b`},children:[(0,y.jsx)(r,{size:14,fill:`#f59e0b`,stroke:`#f59e0b`}),(0,y.jsx)(`span`,{children:e.rating}),(0,y.jsxs)(`span`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#cbd5e1`,fontWeight:500},children:[`(`,e.reviews,` reviews)`]})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:5,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#e2e8f0`},children:[(0,y.jsx)(u,{size:13,color:`#2dd4bf`}),(0,y.jsx)(`span`,{children:e.travelTime})]}),(0,y.jsxs)(`a`,{href:`/place-details?id=${isNaN(e.id)?e.id:C(e.name)}`,onClick:t=>w(t,e.id),style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#ffffff`,background:`#F06543`,border:`none`,padding:`9px 20px`,borderRadius:12,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:6,transition:`all 0.25s ease`,boxShadow:`0 4px 14px rgba(13, 148, 136, 0.4)`},children:[(0,y.jsx)(`span`,{children:`EXPLORE NOW`}),(0,y.jsx)(n,{size:13})]})]})]})]})})(),(0,y.jsx)(`div`,{className:`ptv-filters`,children:x.map(n=>{let r=n.icon;return(0,y.jsxs)(`button`,{className:`ptv-filter-btn${e===n.id?` active`:``}`,onClick:()=>t(n.id),children:[(0,y.jsx)(r,{size:13}),(0,y.jsx)(`span`,{children:n.label})]},n.id)})}),(0,y.jsx)(`div`,{ref:s,className:`ptv-slider`,children:f.map((e,t)=>{let i=e.icon||S[e.category]||l;return(0,y.jsx)(`div`,{className:`ptv-card-wrap`,children:(0,y.jsxs)(`div`,{className:`ptv-card`,onClick:t=>w(t,e.id),children:[(0,y.jsxs)(`div`,{className:`ptv-img-box`,children:[(0,y.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`}),(0,y.jsx)(`div`,{className:`ptv-img-gradient`}),(0,y.jsx)(`span`,{className:`ptv-badge`,style:{background:e.badgeBg},children:e.badge}),e.mustSee&&(0,y.jsxs)(`span`,{className:`ptv-must-see`,children:[(0,y.jsx)(r,{size:9,fill:`#f0c060`,stroke:`#f0c060`}),`MUST SEE`]}),(0,y.jsxs)(`span`,{className:`ptv-travel-pill`,children:[(0,y.jsx)(u,{size:10,color:`#F06543`}),(0,y.jsx)(`span`,{children:e.travelTime})]})]}),(0,y.jsxs)(`div`,{className:`ptv-body`,children:[(0,y.jsxs)(`div`,{className:`ptv-location-row`,children:[(0,y.jsx)(m,{size:11,color:`#F06543`}),(0,y.jsx)(`span`,{children:e.island})]}),(0,y.jsx)(`div`,{className:`ptv-name`,children:e.name}),(0,y.jsx)(`div`,{className:`ptv-tagline`,children:e.tagline}),(0,y.jsx)(`p`,{className:`ptv-description`,children:e.description}),(0,y.jsx)(`div`,{className:`ptv-tags`,children:T(e.tags).map((e,t)=>(0,y.jsx)(`span`,{className:`ptv-tag`,children:e},t))})]}),(0,y.jsxs)(`div`,{className:`ptv-footer`,children:[(0,y.jsxs)(`div`,{className:`ptv-rating`,children:[(0,y.jsx)(r,{size:13,fill:`#f0c060`,stroke:`#f0c060`}),(0,y.jsx)(`span`,{children:e.rating}),(0,y.jsxs)(`span`,{className:`ptv-reviews`,children:[`(`,e.reviews,`)`]})]}),(0,y.jsxs)(`button`,{className:`ptv-explore-btn`,children:[(0,y.jsx)(i,{size:12}),(0,y.jsx)(`span`,{children:`EXPLORE`}),(0,y.jsx)(n,{size:11})]})]})]})},`${e.id||`place`}-${t}`)})})]})]})}export{C as default};