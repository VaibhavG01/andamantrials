import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Gn as n,O as r,R as i,Tn as a,Xn as o,Zn as s,a as c,j as l,l as u,ln as d,mn as f,un as p,wn as m,xt as h,zt as g}from"./lucide-vendor-CBhgx3NO.js";import{v as _}from"./three-vendor-Md08yeGZ.js";import{p as v}from"./index-Bm-jsIiM.js";var y=e(s(),1),b=_(),x=(e,t)=>{t&&t.preventDefault(),window.history.pushState({},``,e),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},S=e=>{if(!e)return[`Scenic Ocean Views`,`Safety Certified`,`Onboard Refreshments`];if(Array.isArray(e)&&e.length>0)return e.slice(0,3);if(typeof e==`string`)try{let t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.slice(0,3)}catch{let t=e.split(/[\n,]+/).map(e=>e.trim().replace(/^[-*•]\s*/,``)).filter(Boolean);if(t.length>0)return t.slice(0,3)}return[`Scenic Ocean Views`,`Safety Certified`,`Onboard Refreshments`]},C=[{id:`andaman-sunset-sail`,slug:`andaman-sunset-sail`,name:`Andaman Sunset Dinner Sail`,subtitle:`Romantic Twilight Harbour & Open Ocean Dining`,category:`Sunset Sail`,type:`SUNSET_SAIL`,duration:`3 Hours`,departure:`Port Blair Harbour`,route:`Port Blair → Open Sea`,rating:4.95,reviews:1420,price:3500,originalPrice:4500,discount:`22% OFF`,badge:`POPULAR`,badgeBg:`linear-gradient(135deg, #FF6B4A, #F06543)`,capacity:`40 Guests`,image:`https://images.unsplash.com/photo-1548690596-f1722c190938?auto=format&fit=crop&w=900&q=85`,highlights:[`Buffet Coastal Dinner`,`Live Acoustic Music`,`Golden Hour Deck`],icon:i},{id:`couple-escape-cruise`,slug:`couple-escape-cruise`,name:`Couple Escape Luxury Cruise`,subtitle:`Private Ocean Deck with Sunset Champagne for Two`,category:`Couple Romance`,type:`COUPLE_ESCAPE`,duration:`2.5 Hours`,departure:`Port Blair / Havelock`,route:`Port Blair → Scenic Waters`,rating:4.98,reviews:860,price:4500,originalPrice:5800,discount:`22% OFF`,badge:`ROMANTIC`,badgeBg:`linear-gradient(135deg, #E11D48, #BE123C)`,capacity:`12 Guests`,image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85`,highlights:[`Couple-Focused Romance`,`Golden Hour Sunset Deck`,`Sparkling Drinks & Snacks`],icon:g},{id:`havelock-island-sightseeing`,slug:`havelock-island-sightseeing`,name:`Havelock Island Sightseeing Cruise`,subtitle:`Panoramic Coastal Reefs, Cliffs & Marine Horizons`,category:`Sightseeing`,type:`SIGHTSEEING`,duration:`3.5 Hours`,departure:`Havelock Island Jetty`,route:`Havelock → Coral Reefs`,rating:4.88,reviews:1150,price:2400,originalPrice:3200,discount:`25% OFF`,badge:`BESTSELLER`,badgeBg:`linear-gradient(135deg, #0D9488, #0F766E)`,capacity:`50 Guests`,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85`,highlights:[`Coastal Views`,`Coral Reef Spotting`,`Upper Observation Deck`],icon:c},{id:`private-ocean-charter`,slug:`private-ocean-charter`,name:`Private VIP Ocean Yacht Charter`,subtitle:`Bespoke Island Hopping & Custom Snorkeling Anchoring`,category:`Private Charter`,type:`PRIVATE_OCEAN_CHARTER`,duration:`4–6 Hours`,departure:`Chatham Wharf / Havelock`,route:`Custom Island Route`,rating:5,reviews:320,price:15e3,originalPrice:19500,discount:`23% OFF`,badge:`VIP CHARTER`,badgeBg:`linear-gradient(135deg, #7C3AED, #6D28D9)`,capacity:`10 Guests`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85`,highlights:[`Private Catamaran Yacht`,`Captain & Service Staff`,`Snorkeling Gear Included`],icon:o},{id:`neil-island-day-cruise`,slug:`neil-island-day-cruise`,name:`Neil Island Scenic Day Cruise`,subtitle:`Tranquil Lagoon Exploration & Natural Coral Bridge`,category:`Island Hopping`,type:`ISLAND_HOPPING`,duration:`2.5 Hours`,departure:`Phoenix Bay Jetty`,route:`Port Blair → Neil Island`,rating:4.86,reviews:940,price:1800,originalPrice:2400,discount:`25% OFF`,badge:`SCENIC PICK`,badgeBg:`linear-gradient(135deg, #0284C7, #0369A1)`,capacity:`80 Guests`,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85`,highlights:[`Lagoon Views`,`Natural Bridge Stop`,`Air-Conditioned Saloon`],icon:d}],w=[`All`,`Sunset Sail`,`Couple Romance`,`Sightseeing`,`Private Charter`,`Island Hopping`];function T(){let e=(0,y.useRef)(null),[s,_]=(0,y.useState)(`All`),[T,E]=(0,y.useState)(C),[D,O]=(0,y.useState)(!0);(0,y.useEffect)(()=>{v.getCruises().then(e=>{if(e&&e.data&&Array.isArray(e.data)&&e.data.length>0){let t=e.data.map((e,t)=>{let n=`Sightseeing`,r=`POPULAR`,a=`linear-gradient(135deg, #FF6B4A, #F06543)`,s=i,l=(e.name||``).toLowerCase(),u=(e.type||``).toLowerCase();l.includes(`sunset`)||u.includes(`sunset`)?(n=`Sunset Sail`,r=`ROMANTIC`,a=`linear-gradient(135deg, #FF6B4A, #F06543)`,s=i):l.includes(`couple`)||u.includes(`couple`)?(n=`Couple Romance`,r=`COUPLE`,a=`linear-gradient(135deg, #E11D48, #BE123C)`,s=g):l.includes(`charter`)||l.includes(`vip`)||u.includes(`charter`)?(n=`Private Charter`,r=`VIP CHARTER`,a=`linear-gradient(135deg, #7C3AED, #6D28D9)`,s=o):l.includes(`neil`)||l.includes(`hop`)||u.includes(`hop`)?(n=`Island Hopping`,r=`SCENIC`,a=`linear-gradient(135deg, #0284C7, #0369A1)`,s=d):(l.includes(`sightseeing`)||u.includes(`sightseeing`))&&(n=`Sightseeing`,r=`SIGHTSEEING`,a=`linear-gradient(135deg, #0D9488, #0F766E)`,s=c);let f=`Port Blair → Open Sea`;e.routes&&Array.isArray(e.routes)&&e.routes.length>0?f=`${e.routes[0].from||`Port Blair`} → ${e.routes[0].to||`Open Sea`}`:l.includes(`havelock`)?f=`Havelock → Coral Reefs`:l.includes(`neil`)?f=`Port Blair → Neil Island`:e.departurePoint&&(f=`${e.departurePoint} → Open Waters`);let p=Number(e.price||e.basePrice||e.startingPrice||3500),m=Math.round(p*1.25),h=Math.round((m-p)/m*100),_=S(e.features||e.inclusions),v=e.heroImage||e.image;return!v&&Array.isArray(e.gallery)&&e.gallery.length>0&&(v=e.gallery[0]),v||=C[t%C.length]?.image||C[0].image,{id:e.slug||e.id,slug:e.slug||`cruise-${e.id}`,name:e.name,subtitle:e.shortDescription||(e.type?e.type.replace(/_/g,` `):`Scenic Andaman Cruise Experience`),category:n,type:e.type||`CRUISE`,duration:e.duration||`3 Hours`,departure:e.departurePoint||`Port Blair Harbour`,route:f,rating:Number(e.rating||4.9).toFixed(1),reviews:e.reviewsCount||e.reviews||110+t*35,price:p,originalPrice:m,discount:`${h}% OFF`,badge:r,badgeBg:a,capacity:`${e.capacity||40} Guests`,image:v,highlights:_,icon:s}});E(t)}else E(C)}).catch(()=>{E(C)}).finally(()=>O(!1))},[]);let k=s===`All`?T:T.filter(e=>e.category?.toLowerCase()===s.toLowerCase());return(0,b.jsxs)(`section`,{id:`cruise-section`,className:`cruise-section`,children:[(0,b.jsx)(`style`,{children:`
        .cruise-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #1e293b;
          padding: 76px 0 92px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .cruise-glow-l {
          position: absolute; top: 10%; left: -6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .cruise-glow-r {
          position: absolute; bottom: 10%; right: -6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .cruise-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .cruise-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 32px;
        }
        .cruise-header-sub {
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
        .cruise-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          color: #0B2545;
          line-height: 1.15;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .cruise-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          max-width: 560px;
          margin: 0;
        }

        /* Nav arrows + CTA */
        .cruise-nav-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cruise-arrow {
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
        .cruise-arrow:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }
        .cruise-viewall {
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
        .cruise-viewall:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        /* Category Filter Tabs */
        .cruise-filters {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .cruise-filter-btn {
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
        .cruise-filter-btn:hover {
          border-color: #F06543;
          color: #F06543;
          background: #FFF0EB;
        }
        .cruise-filter-btn.active {
          background: linear-gradient(135deg, #0B2545 0%, #173b6c 100%);
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.25);
        }

        /* Slider Track */
        .cruise-slider-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 8px 4px 28px;
        }
        .cruise-slider-track::-webkit-scrollbar { display: none; }

        .cruise-card-wrap {
          flex: 0 0 calc(33.333% - 16px);
          min-width: 320px;
          scroll-snap-align: start;
        }
        @media (max-width: 1100px) {
          .cruise-card-wrap { flex: 0 0 calc(50% - 12px); min-width: 290px; }
        }
        @media (max-width: 680px) {
          .cruise-card-wrap { flex: 0 0 90%; min-width: 280px; }
        }

        /* Card */
        .cruise-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
        }
        .cruise-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 18px 36px rgba(11, 37, 69, 0.12);
        }

        /* Image area */
        .cruise-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          flex-shrink: 0;
          background: #0B2545;
        }
        .cruise-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cruise-card:hover .cruise-img-box img { transform: scale(1.08); }
        .cruise-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 37, 69, 0.5) 0%, transparent 60%);
        }

        .cruise-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #fff;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          backdrop-filter: blur(6px);
        }
        .cruise-duration-pill {
          position: absolute;
          top: 14px;
          right: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 5px 11px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        /* Card body */
        .cruise-body {
          padding: 22px 22px 14px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cruise-route-line {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #F06543;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 8px;
        }
        .cruise-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17.5px;
          font-weight: 800;
          color: #0B2545;
          line-height: 1.35;
          margin-bottom: 6px;
          transition: color 0.25s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cruise-card:hover .cruise-title {
          color: #F06543;
        }
        .cruise-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Highlights */
        .cruise-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .cruise-highlight-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Meta row */
        .cruise-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px dashed #e2e8f0;
        }
        .cruise-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #d97706;
        }
        .cruise-reviews {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }
        .cruise-capacity {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Footer */
        .cruise-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 22px 20px;
          border-top: 1px solid #f1f5f9;
          background: #ffffff;
        }
        .cruise-price-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
          font-weight: 800;
        }
        .cruise-price-curr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
        }
        .cruise-price-old {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-left: 6px;
          font-weight: 600;
        }
        .cruise-book-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          padding: 9px 18px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.28s ease;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.3);
        }
        .cruise-card:hover .cruise-book-btn {
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }

        /* Stats strip */
        .cruise-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 52px;
        }
        .cruise-stat-item {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
          transition: transform 0.3s ease;
        }
        .cruise-stat-item:hover {
          transform: translateY(-3px);
          border-color: #cbd5e1;
        }
        .cruise-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #FFF0EB;
          color: #F06543;
        }
        .cruise-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
        }
        .cruise-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .cruise-stats-strip { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .cruise-stats-strip { grid-template-columns: 1fr; }
        }
      `}),(0,b.jsx)(`div`,{className:`cruise-glow-l`}),(0,b.jsx)(`div`,{className:`cruise-glow-r`}),(0,b.jsxs)(`div`,{className:`cruise-container`,children:[(0,b.jsxs)(`div`,{className:`cruise-header-row`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`cruise-header-sub`,children:[(0,b.jsx)(l,{size:14,color:`#F06543`}),(0,b.jsx)(`span`,{children:`POPULAR CRUISE`})]}),(0,b.jsx)(`h2`,{className:`cruise-header-title`,children:`Sail the Andaman Waters`}),(0,b.jsx)(`p`,{className:`cruise-header-desc`,children:`From romantic sunset dinners at sea to thrilling island-hop ferries — hand-picked cruise experiences for every traveler.`})]}),(0,b.jsxs)(`div`,{className:`cruise-nav-row`,children:[(0,b.jsx)(`button`,{onClick:()=>e.current?.scrollBy({left:-360,behavior:`smooth`}),className:`cruise-arrow`,"aria-label":`Scroll Left`,children:(0,b.jsx)(a,{size:22})}),(0,b.jsx)(`button`,{onClick:()=>e.current?.scrollBy({left:360,behavior:`smooth`}),className:`cruise-arrow`,"aria-label":`Scroll Right`,children:(0,b.jsx)(m,{size:22})}),(0,b.jsxs)(`a`,{href:`/cruises`,onClick:e=>x(`/cruises`,e),className:`cruise-viewall`,children:[(0,b.jsx)(`span`,{children:`VIEW ALL`}),(0,b.jsx)(n,{size:14})]})]})]}),(0,b.jsx)(`div`,{className:`cruise-filters`,children:w.map(e=>(0,b.jsx)(`button`,{className:`cruise-filter-btn${s===e?` active`:``}`,onClick:()=>_(e),children:e},e))}),(0,b.jsx)(`div`,{ref:e,className:`cruise-slider-track`,children:k.map((e,i)=>{e.icon;let a=`/cruises/${e.slug||e.id}`;return(0,b.jsx)(`div`,{className:`cruise-card-wrap`,children:(0,b.jsxs)(`a`,{href:a,onClick:e=>x(a,e),className:`cruise-card`,children:[(0,b.jsxs)(`div`,{className:`cruise-img-box`,children:[(0,b.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`}),(0,b.jsx)(`div`,{className:`cruise-img-overlay`}),(0,b.jsx)(`span`,{className:`cruise-badge`,style:{background:e.badgeBg},children:e.badge}),(0,b.jsxs)(`span`,{className:`cruise-duration-pill`,children:[(0,b.jsx)(f,{size:11,color:`#F06543`}),(0,b.jsx)(`span`,{children:e.duration})]})]}),(0,b.jsxs)(`div`,{className:`cruise-body`,children:[(0,b.jsxs)(`div`,{className:`cruise-route-line`,children:[(0,b.jsx)(h,{size:12,color:`#F06543`}),(0,b.jsx)(`span`,{children:e.route})]}),(0,b.jsx)(`div`,{className:`cruise-title`,children:e.name}),(0,b.jsx)(`div`,{className:`cruise-subtitle`,children:e.subtitle}),(0,b.jsx)(`div`,{className:`cruise-highlights`,children:e.highlights.map((e,n)=>(0,b.jsxs)(`span`,{className:`cruise-highlight-tag`,children:[(0,b.jsx)(t,{size:11,color:`#0D9488`}),(0,b.jsx)(`span`,{children:e})]},n))}),(0,b.jsxs)(`div`,{className:`cruise-meta-row`,children:[(0,b.jsxs)(`div`,{className:`cruise-rating`,children:[(0,b.jsx)(r,{size:13,fill:`#d97706`,stroke:`#d97706`}),(0,b.jsx)(`span`,{children:e.rating}),(0,b.jsxs)(`span`,{className:`cruise-reviews`,children:[`(`,e.reviews,` reviews)`]})]}),(0,b.jsxs)(`div`,{className:`cruise-capacity`,children:[(0,b.jsx)(u,{size:12,color:`#64748b`}),(0,b.jsx)(`span`,{children:e.capacity})]})]})]}),(0,b.jsxs)(`div`,{className:`cruise-footer`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`cruise-price-label`,children:`PER PERSON`}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`},children:[(0,b.jsxs)(`span`,{className:`cruise-price-curr`,children:[`₹`,Number(e.price).toLocaleString(`en-IN`)]}),(0,b.jsxs)(`span`,{className:`cruise-price-old`,children:[`₹`,Number(e.originalPrice).toLocaleString(`en-IN`)]})]})]}),(0,b.jsxs)(`div`,{className:`cruise-book-btn`,children:[(0,b.jsx)(`span`,{children:`BOOK NOW`}),(0,b.jsx)(n,{size:12})]})]})]})},`${e.id||`cruise`}-${i}`)})}),(0,b.jsx)(`div`,{className:`cruise-stats-strip`,children:[{icon:i,color:`#F06543`,bg:`#FFF0EB`,num:`15+`,label:`Cruise Routes Available`},{icon:u,color:`#0D9488`,bg:`rgba(13,148,136,0.1)`,num:`50K+`,label:`Happy Cruisers Yearly`},{icon:t,color:`#d97706`,bg:`rgba(217,119,6,0.1)`,num:`100%`,label:`Safety Certified Vessels`},{icon:p,color:`#7C3AED`,bg:`rgba(124,58,237,0.1)`,num:`365`,label:`Days of Island Sailings`}].map((e,t)=>{let n=e.icon;return(0,b.jsxs)(`div`,{className:`cruise-stat-item`,children:[(0,b.jsx)(`div`,{className:`cruise-stat-icon-box`,style:{background:e.bg,color:e.color},children:(0,b.jsx)(n,{size:22,color:e.color})}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`cruise-stat-num`,children:e.num}),(0,b.jsx)(`div`,{className:`cruise-stat-label`,children:e.label})]})]},t)})})]})]})}export{T as default};