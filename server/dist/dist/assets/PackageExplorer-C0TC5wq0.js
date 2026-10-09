import{r as e}from"./rolldown-runtime-hePW80VL.js";import{Gn as t,Kt as n,O as r,Tn as i,Zn as a,a as o,j as s,jt as c,l,mn as u,vn as d,wn as f,xt as p,zt as m}from"./lucide-vendor-CBhgx3NO.js";import{v as h}from"./three-vendor-Md08yeGZ.js";import{t as g}from"./apiClient-CRw3-6FB.js";var _=e(a(),1),v=h(),y=(e,t)=>{t&&t.preventDefault(),window.history.pushState({},``,e),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},b=[{id:`all`,label:`All Packages`,icon:c},{id:`bestseller`,label:`Bestsellers`,icon:n},{id:`honeymoon`,label:`Honeymoon`,icon:m},{id:`family`,label:`Family & Group`,icon:l},{id:`adventure`,label:`Scuba & Adventure`,icon:o}],x=e=>{if(e.highlights&&Array.isArray(e.highlights)&&e.highlights.length>0)return e.highlights.slice(0,3);let t=e.inclusions,n=[];if(Array.isArray(t))n=t;else if(typeof t==`string`)try{let e=JSON.parse(t);Array.isArray(e)&&(n=e)}catch{n=t.split(/[\n,]+/).map(e=>e.trim().replace(/^[-*•]\s*/,``)).filter(Boolean)}if(!n||n.length===0)return[`4★ Beach Resort`,`Speed Catamaran Ferries`,`Private AC Transfers`];let r=[];for(let e of n){let t=String(e).replace(/<[^>]*>/g,``).trim(),n=t.toLowerCase();if(n.includes(`hotel`)||n.includes(`resort`)||n.includes(`stay`)?r.includes(`Beach Resort Stays`)||r.push(`Beach Resort Stays`):n.includes(`catamaran`)||n.includes(`ferry`)||n.includes(`makruzz`)||n.includes(`nautika`)?r.includes(`High-Speed Ferries`)||r.push(`High-Speed Ferries`):n.includes(`snorkeling`)||n.includes(`scuba`)||n.includes(`dive`)?r.includes(`Snorkeling Included`)||r.push(`Snorkeling Included`):n.includes(`vehicle`)||n.includes(`transfers`)||n.includes(`cab`)?r.includes(`Private AC Transfers`)||r.push(`Private AC Transfers`):n.includes(`breakfast`)||n.includes(`buffet`)||n.includes(`dinner`)?r.includes(`Daily Buffet Breakfast`)||r.push(`Daily Buffet Breakfast`):n.includes(`ticket`)||n.includes(`pass`)||n.includes(`entry`)?r.includes(`Entry Passes Included`)||r.push(`Entry Passes Included`):n.includes(`concierge`)||n.includes(`meet`)||n.includes(`greet`)?r.includes(`24/7 Island Concierge`)||r.push(`24/7 Island Concierge`):t.length>0&&r.length<3&&r.push(t.length>26?t.slice(0,24)+`...`:t),r.length>=3)break}return r.length>0?r:[`Beach Resort Stays`,`High-Speed Ferries`,`Private AC Transfers`]},S=[{id:`andaman-escape`,slug:`andaman-escape`,category:`bestseller`,name:`Andaman Escape Luxury Tour`,duration:`5 Nights / 6 Days`,destinations:`Port Blair • Havelock • Neil Island`,price:24999,originalPrice:29999,discount:`17% OFF`,rating:4.9,reviewsCount:142,badge:`BESTSELLER`,badgeBg:`linear-gradient(135deg, #FF6B4A, #F06543)`,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,highlights:[`Beach Resort Stays`,`High-Speed Ferries`,`Snorkeling Included`]},{id:`island-romance`,slug:`island-romance`,category:`honeymoon`,name:`Island Romance Honeymoon Special`,duration:`4 Nights / 5 Days`,destinations:`Port Blair • Havelock • Neil`,price:29999,originalPrice:34999,discount:`15% OFF`,rating:5,reviewsCount:198,badge:`HONEYMOON SPECIAL`,badgeBg:`linear-gradient(135deg, #E11D48, #BE123C)`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,highlights:[`Candlelight Dinner`,`Private Beach Villa`,`Sunset Cruise Deck`]},{id:`andaman-family-escape`,slug:`andaman-family-escape`,category:`family`,name:`Andaman Family Holiday Escape`,duration:`5 Nights / 6 Days`,destinations:`Port Blair • Havelock`,price:22499,originalPrice:26999,discount:`17% OFF`,rating:4.8,reviewsCount:116,badge:`FAMILY FAVORITE`,badgeBg:`linear-gradient(135deg, #0D9488, #0F766E)`,image:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80`,highlights:[`Beach Resort Stays`,`Glass Bottom Boat`,`Private AC Cab`]},{id:`andaman-adventure`,slug:`andaman-adventure`,category:`adventure`,name:`Andaman Scuba & Cave Adventure`,duration:`6 Nights / 7 Days`,destinations:`Port Blair • Havelock • Neil • Baratang`,price:27999,originalPrice:34999,discount:`20% OFF`,rating:4.9,reviewsCount:135,badge:`ADVENTURE DIVE`,badgeBg:`linear-gradient(135deg, #7C3AED, #6D28D9)`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,highlights:[`PADI Scuba Included`,`Baratang Cave Trek`,`Speedboat Safaris`]}];function C(){let[e,n]=(0,_.useState)(`all`),[a,o]=(0,_.useState)(S),c=(0,_.useRef)(null);(0,_.useEffect)(()=>{(async()=>{try{let e=await g(`/packages`);if(e&&e.data&&Array.isArray(e.data)&&e.data.length>0){let t=e.data.map((e,t)=>{let n=Number(e.price||24999),r=Number(e.originalPrice||Math.round(n*1.22)),i=Math.round((r-n)/r*100),a=`bestseller`,o=`POPULAR`,s=`linear-gradient(135deg, #FF6B4A, #F06543)`,c=(e.category||``).toLowerCase(),l=(e.name||``).toLowerCase();c.includes(`honeymoon`)||l.includes(`romance`)||l.includes(`couple`)?(a=`honeymoon`,o=`HONEYMOON SPECIAL`,s=`linear-gradient(135deg, #E11D48, #BE123C)`):c.includes(`family`)||l.includes(`family`)||l.includes(`group`)?(a=`family`,o=`FAMILY FAVORITE`,s=`linear-gradient(135deg, #0D9488, #0F766E)`):c.includes(`adventure`)||c.includes(`scuba`)||l.includes(`dive`)||l.includes(`adventure`)?(a=`adventure`,o=`ADVENTURE DIVE`,s=`linear-gradient(135deg, #7C3AED, #6D28D9)`):(a=`bestseller`,o=`BESTSELLER`,s=`linear-gradient(135deg, #FF6B4A, #F06543)`);let u=e.heroImage||e.image;return!u&&Array.isArray(e.gallery)&&e.gallery.length>0&&(u=e.gallery[0]),u||=S[t%S.length]?.image||S[0].image,{id:e.slug||e.id,slug:e.slug||`package-${e.id}`,name:e.name,category:a,duration:e.duration||`5 Nights / 6 Days`,destinations:e.destinations||e.route||`Port Blair • Havelock • Neil Island`,price:n,originalPrice:r,discount:`${i>0?i:20}% OFF`,rating:Number(e.rating||4.9).toFixed(1),reviewsCount:e.reviewsCount||120+t*25,badge:e.badge||o,badgeBg:e.badgeBg||s,image:u,highlights:x(e)}});o(t)}else o(S)}catch(e){console.error(`Failed to load packages:`,e),o(S)}})()},[]);let l=e===`all`?a:a.filter(t=>{let n=(t.category||``).toLowerCase(),r=e.toLowerCase();return n===r||r===`bestseller`&&(t.badge||``).includes(`BEST`)});return(0,v.jsxs)(`section`,{id:`packages-section`,className:`pkg-explorer-section`,children:[(0,v.jsx)(`style`,{children:`
        .pkg-explorer-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #1e293b;
          padding: 76px 0 92px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .pkg-ambient-glow {
          position: absolute;
          top: 20%;
          right: -6%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .pkg-ambient-glow-l {
          position: absolute;
          bottom: 10%;
          left: -6%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .pkg-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header styling */
        .pkg-header-wrapper {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 32px;
        }

        .pkg-header-sub {
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

        .pkg-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          color: #0B2545;
          line-height: 1.15;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .pkg-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          max-width: 560px;
          margin: 0;
        }

        /* Header Actions & Slider Arrows */
        .pkg-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pkg-slider-arrow {
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

        .pkg-slider-arrow:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        .pkg-view-all-btn {
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

        .pkg-view-all-btn:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        /* Filter Tabs */
        .pkg-tabs-row {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
          margin-bottom: 30px;
        }
        .pkg-tabs-row::-webkit-scrollbar { display: none; }

        .pkg-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #475569;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }

        .pkg-tab-btn:hover {
          border-color: #F06543;
          color: #F06543;
          background: #FFF0EB;
        }

        .pkg-tab-btn.active {
          background: linear-gradient(135deg, #0B2545 0%, #173b6c 100%);
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.25);
        }

        /* Slider Track */
        .pkg-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .pkg-cards-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 8px 4px 28px 4px;
        }

        .pkg-cards-slider::-webkit-scrollbar {
          display: none;
        }

        .pkg-card-item {
          flex: 0 0 calc(33.333% - 16px);
          min-width: 320px;
          scroll-snap-align: start;
        }

        @media (max-width: 1150px) {
          .pkg-card-item {
            flex: 0 0 calc(50% - 12px);
            min-width: 290px;
          }
        }

        @media (max-width: 680px) {
          .pkg-card-item {
            flex: 0 0 90%;
            min-width: 280px;
          }
        }

        /* Individual Package Card */
        .pkg-card {
          height: 100%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
          cursor: pointer;
        }

        .pkg-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 18px 36px rgba(11, 37, 69, 0.12);
        }

        .pkg-img-box {
          position: relative;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 16px;
          background: #0B2545;
        }

        .pkg-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pkg-card:hover .pkg-img-box img {
          transform: scale(1.08);
        }

        .pkg-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 37, 69, 0.5) 0%, transparent 60%);
        }

        .pkg-badge-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(6px);
        }

        .pkg-discount-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          color: #ffffff;
          background: #F06543;
          padding: 4px 9px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(240, 101, 67, 0.35);
        }

        .pkg-duration-pill {
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        .pkg-route-line {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #F06543;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
        }

        .pkg-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17.5px;
          font-weight: 800;
          color: #0B2545;
          line-height: 1.35;
          margin: 0 0 12px;
          transition: color 0.25s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 46px;
        }

        .pkg-card:hover .pkg-title {
          color: #F06543;
        }

        .pkg-inclusions-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .pkg-inc-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 9px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .pkg-price-curr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
        }

        .pkg-price-old {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-left: 6px;
          font-weight: 600;
        }

        .pkg-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          padding: 9px 18px;
          border-radius: 12px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.28s ease;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.3);
        }

        .pkg-card:hover .pkg-action-btn {
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }
      `}),(0,v.jsx)(`div`,{className:`pkg-ambient-glow`}),(0,v.jsx)(`div`,{className:`pkg-ambient-glow-l`}),(0,v.jsxs)(`div`,{className:`pkg-container`,children:[(0,v.jsxs)(`div`,{className:`pkg-header-wrapper`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`div`,{className:`pkg-header-sub`,children:[(0,v.jsx)(s,{size:14,color:`#F06543`}),(0,v.jsx)(`span`,{children:`HANDCRAFTED TOUR ITINERARIES`})]}),(0,v.jsx)(`h2`,{className:`pkg-header-title`,children:`Popular Andaman Packages`}),(0,v.jsx)(`p`,{className:`pkg-header-desc`,children:`All-inclusive island holiday packages curated by local Andaman travel experts with ferries, beach stays & guided tours.`})]}),(0,v.jsxs)(`div`,{className:`pkg-header-actions`,children:[(0,v.jsx)(`button`,{onClick:()=>{c.current&&c.current.scrollBy({left:-360,behavior:`smooth`})},className:`pkg-slider-arrow`,"aria-label":`Previous Package`,children:(0,v.jsx)(i,{size:22})}),(0,v.jsx)(`button`,{onClick:()=>{c.current&&c.current.scrollBy({left:360,behavior:`smooth`})},className:`pkg-slider-arrow`,"aria-label":`Next Package`,children:(0,v.jsx)(f,{size:22})}),(0,v.jsxs)(`a`,{href:`/packages`,onClick:e=>y(`/packages`,e),className:`pkg-view-all-btn`,children:[(0,v.jsx)(`span`,{children:`VIEW ALL`}),(0,v.jsx)(t,{size:14})]})]})]}),(0,v.jsx)(`div`,{className:`pkg-tabs-row`,children:b.map(t=>{let r=t.icon;return(0,v.jsxs)(`button`,{onClick:()=>n(t.id),className:`pkg-tab-btn ${e===t.id?`active`:``}`,children:[(0,v.jsx)(r,{size:14,color:e===t.id?`#ffffff`:`#F06543`}),(0,v.jsx)(`span`,{children:t.label})]},t.id)})}),(0,v.jsx)(`div`,{className:`pkg-slider-container`,children:(0,v.jsx)(`div`,{ref:c,className:`pkg-cards-slider`,children:l.map((e,n)=>{let i=`/package-details?id=${e.slug||e.id}`;return(0,v.jsx)(`div`,{className:`pkg-card-item`,children:(0,v.jsxs)(`a`,{href:i,onClick:e=>y(i,e),className:`pkg-card`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`div`,{className:`pkg-img-box`,children:[(0,v.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`}),(0,v.jsx)(`div`,{className:`pkg-img-overlay`}),(0,v.jsx)(`span`,{className:`pkg-badge-tag`,style:{background:e.badgeBg},children:e.badge}),(0,v.jsx)(`span`,{className:`pkg-discount-tag`,children:e.discount}),(0,v.jsxs)(`span`,{className:`pkg-duration-pill`,children:[(0,v.jsx)(u,{size:11,color:`#F06543`}),(0,v.jsx)(`span`,{children:e.duration})]})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:6},children:[(0,v.jsxs)(`div`,{className:`pkg-route-line`,children:[(0,v.jsx)(p,{size:12,color:`#F06543`}),(0,v.jsx)(`span`,{style:{textOverflow:`ellipsis`,overflow:`hidden`,whiteSpace:`nowrap`},children:e.destinations})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:3,fontSize:13,fontWeight:800,color:`#d97706`,fontFamily:`'Space Grotesk', sans-serif`},children:[(0,v.jsx)(r,{size:12,fill:`#d97706`,stroke:`#d97706`}),(0,v.jsx)(`span`,{children:e.rating})]})]}),(0,v.jsx)(`h3`,{className:`pkg-title`,children:e.name}),(0,v.jsx)(`div`,{className:`pkg-inclusions-list`,children:(e.highlights||[]).map((e,t)=>(0,v.jsxs)(`span`,{className:`pkg-inc-tag`,children:[(0,v.jsx)(d,{size:11,color:`#0D9488`}),(0,v.jsx)(`span`,{children:e})]},t))})]}),(0,v.jsxs)(`div`,{className:`pkg-footer`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#64748b`,display:`block`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:2},children:`STARTING FROM`}),(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`},children:[(0,v.jsxs)(`span`,{className:`pkg-price-curr`,children:[`₹`,Number(e.price).toLocaleString(`en-IN`)]}),(0,v.jsxs)(`span`,{className:`pkg-price-old`,children:[`₹`,Number(e.originalPrice).toLocaleString(`en-IN`)]})]})]}),(0,v.jsxs)(`div`,{className:`pkg-action-btn`,children:[(0,v.jsx)(`span`,{children:`EXPLORE`}),(0,v.jsx)(t,{size:12})]})]})]})},`${e.id||`pkg`}-${n}`)})})})]})]})}export{C as default};