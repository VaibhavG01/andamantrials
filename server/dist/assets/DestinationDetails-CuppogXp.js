import{r as e}from"./rolldown-runtime-hePW80VL.js";import{An as t,B as n,Bn as r,Cn as ee,Ct as te,E as i,En as ne,Gn as a,H as re,Ln as o,Mt as ie,O as s,On as ae,R as c,Tn as oe,Un as l,Ut as se,Zn as u,Zt as ce,bn as d,gn as f,j as p,jn as m,ln as h,n as g,ot as _,r as v,tn as y,v as b,vn as x,wn as S,zt as le}from"./lucide-vendor-CBhgx3NO.js";import{v as C}from"./three-vendor-Md08yeGZ.js";import{a as ue,h as w}from"./index-Bm-jsIiM.js";import{t as de}from"./FooterBottom-DsWKMEou.js";var T=e(u(),1),E=C();function D(){let{requireAuth:e}=ue(),[u,C]=(0,T.useState)(null),[D,O]=(0,T.useState)(!0),[k,A]=(0,T.useState)(null),[j,M]=(0,T.useState)(0),[N,P]=(0,T.useState)(!1),[fe,F]=(0,T.useState)(!1),[I,L]=(0,T.useState)(0),[R,z]=(0,T.useState)(`sec-overview`),[B,V]=(0,T.useState)(!1),[H,U]=(0,T.useState)(!1),[pe,me]=(0,T.useState)(`5 Days`),[he,ge]=(0,T.useState)(2),W=()=>{let e=window.location.pathname,t=new URLSearchParams(window.location.search),n=window.location.hash,r=t.get(`slug`)||t.get(`id`);if(!r&&n){let e=n.match(/(?:id|slug)=([a-z0-9-]+)/i);if(e&&e[1])r=e[1];else{let e=n.replace(/^#\/?/,``).split(`?`)[0].split(`/`);e[0]===`destinations`&&e[1]&&(r=e[1])}}if(!r){let t=e.split(`/`).filter(Boolean);t.length>1&&(t[0]===`destinations`||t[0]===`destination-details`)&&(r=t[1])}return r||`great-nicobar`},G=async e=>{O(!0),A(null);try{let t=await w.getDestinationBySlug(e);if(t&&t.data)C(t.data);else throw Error(`Destination details not found.`)}catch(t){console.error(`Failed to load destination details:`,t);try{let t=await w.getDestinations();if(t&&t.data&&t.data.length>0){let n=t.data.find(t=>t.slug.includes(e)||e.includes(t.slug))||t.data[0],r=await w.getDestinationBySlug(n.slug);r&&r.data?C(r.data):C(n)}else A(`Could not retrieve destination details.`)}catch{A(`Failed to connect to the database. Please try again.`)}}finally{O(!1)}};(0,T.useEffect)(()=>{let e=W();G(e)},[]),(0,T.useEffect)(()=>{let e=()=>{let e=W();G(e)};return window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[]),(0,T.useEffect)(()=>{let e=()=>{let e=window.scrollY;F(e>450);for(let e of[`sec-overview`,`sec-highlights`,`sec-biosphere`,`sec-stays`,`sec-packages`,`sec-activities`,`sec-transit`,`sec-weather`,`sec-faq`,`sec-customizer`]){let t=document.getElementById(e);if(t){let n=t.getBoundingClientRect();if(n.top<=140&&n.bottom>=140){z(e);break}}}};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]);let K=()=>{u&&e(()=>{window.history.pushState({},``,`/plan-trip?destination=${encodeURIComponent(u.name)}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},`Please sign in or create an account to customize your trip to ${u.name}.`)},q=()=>{window.history.pushState({},``,`/ferries`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},J=e=>{window.history.pushState({},``,e),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},Y=e=>{z(e);let t=document.getElementById(e);if(t){let e=t.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:e,behavior:`smooth`})}},_e=()=>{navigator.clipboard&&(navigator.clipboard.writeText(window.location.href),U(!0),setTimeout(()=>U(!1),2500))};if(D)return(0,E.jsxs)(`div`,{className:`dest-loading-screen`,children:[(0,E.jsx)(`style`,{children:`
          .dest-loading-screen {
            min-height: 85vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FAF4EE;
            padding: 40px 20px;
            font-family: 'Space Grotesk', sans-serif;
          }
          .dest-spinner {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            border: 4px solid #E5D5C5;
            border-top-color: #F06543;
            animation: destSpin 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
            margin-bottom: 22px;
          }
          @keyframes destSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}),(0,E.jsx)(`div`,{className:`dest-spinner`}),(0,E.jsx)(`h3`,{style:{fontSize:19,fontWeight:900,color:`#0B2545`,letterSpacing:`0.08em`,margin:`0 0 8px`,textTransform:`uppercase`},children:`Loading Island Guide...`}),(0,E.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:14,color:`#64748B`,margin:0},children:`Fetching real-time stays, marine safaris, ferries and seasonal weather`})]});if(k||!u)return(0,E.jsxs)(`div`,{className:`dest-error-screen`,children:[(0,E.jsx)(`style`,{children:`
          .dest-error-screen {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FAF4EE;
            padding: 60px 24px;
            text-align: center;
            font-family: 'Inter', sans-serif;
          }
        `}),(0,E.jsx)(`div`,{style:{width:64,height:64,borderRadius:`50%`,background:`#FEE2E2`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:16},children:(0,E.jsx)(d,{size:32,color:`#DC2626`})}),(0,E.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:36,color:`#0B2545`,margin:`0 0 12px`},children:`Destination Not Found`}),(0,E.jsx)(`p`,{style:{fontSize:15,color:`#64748B`,maxWidth:480,margin:`0 0 24px`,lineHeight:1.6},children:k||`We could not retrieve information for this destination. Please check the URL or explore all islands.`}),(0,E.jsxs)(`button`,{onClick:()=>J(`/destinations`),style:{background:`#0B2545`,color:`#ffffff`,border:`none`,padding:`14px 28px`,borderRadius:14,fontWeight:800,fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:8,boxShadow:`0 4px 14px rgba(11,37,69,0.2)`},children:[(0,E.jsx)(a,{size:16}),(0,E.jsx)(`span`,{children:`VIEW ALL DESTINATIONS`})]})]});let X=u.slug===`great-nicobar`||u.name?.toLowerCase().includes(`nicobar`),Z=[u.heroImage||(X?`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=90`:`https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1920&q=90`),...Array.isArray(u.gallery)&&u.gallery.length>0?u.gallery:[],...u.highlights&&u.highlights.length>0?u.highlights.map(e=>e.image):[]].filter(Boolean),Q=Z[j]||Z[0],$=Array.isArray(u.packages)&&u.packages.length>0?u.packages:[{id:`gn-pkg-1`,name:`Great Nicobar & Indira Point Southern Expedition`,duration:`5N / 6D`,price:34999,image:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80`,bestFor:`Indira Point 6°45’N, Campbell Bay Harbor & Galathea National Park`,inclusions:[`Helicopter / Ship Passage`,`Eco-Lodge Stay`,`Permit Clearance`,`River Safari`],rating:4.9},{id:`gn-pkg-2`,name:`UNESCO Biosphere Wildlife & River Safari Tour`,duration:`6N / 7D`,price:42500,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80`,bestFor:`Galathea River Boat Safari, Megapode Bird Sanctuary & Rainforest Trekking`,inclusions:[`Guided Jungle Treks`,`All Meals Included`,`Private Escort`,`Boat Transfers`],rating:5},{id:`gn-pkg-3`,name:`Grand Andaman & Nicobar Archipelago Explorer`,duration:`7N / 8D`,price:54999,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,bestFor:`Port Blair + Havelock Radhanagar Beach + Great Nicobar Southern Border`,inclusions:[`Fast Catamarans`,`Luxury Beach Resorts`,`Scuba Session`,`Inter-Island Flights`],rating:4.9},{id:`gn-pkg-4`,name:`Untouched Nicobar Eco-Escape & Stargazing`,duration:`4N / 5D`,price:28999,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,bestFor:`Leatherback Turtle Coast, Stargazing Over Great Channel & Lagoon Cruises`,inclusions:[`Beachfront Stay`,`Night Turtle Walk`,`Local Transport`,`VIP Assistance`],rating:4.8}],ve=X?[{q:`How do travelers reach Great Nicobar from Port Blair?`,a:`Inter-island passenger vessels operated by the Directorate of Shipping Services run scheduled voyages between Port Blair Haddo Wharf and Campbell Bay (taking approx 14 to 20 hours). In addition, Pawan Hans helicopter services operate passenger sorties from Port Blair to Campbell Bay with advance booking.`},{q:`Can tourists visit Indira Point (India’s Southernmost Tip)?`,a:`Yes, authorized local boat excursions and guided coastal expeditions from Campbell Bay take visitors to the historic Indira Point Lighthouse overlooking the Great Channel and Indonesian waters. Local maritime permissions are arranged by registered operators.`},{q:`What makes Great Nicobar a UNESCO Biosphere Reserve?`,a:`Great Nicobar spans over 1,000 sq km of pristine tropical rainforest comprising Galathea National Park and Campbell Bay National Park. It is home to rare endemic species such as the Nicobar Megapode bird, giant coconut robber crab, reticulated python, and nesting giant Leatherback sea turtles.`},{q:`Are permits required for Indian and International travelers?`,a:`Indian citizens require standard local administration reporting at Campbell Bay. Foreign nationals must confirm current Ministry of Home Affairs / A&N Administration guidelines prior to booking travel to the Nicobar district.`}]:[{q:`How do I reach ${u.name} from Port Blair?`,a:`High-speed luxury catamarans (Makruzz, Nautika, Green Ocean) operate daily scheduled sailings from Haddo Jetty / Phoenix Bay in Port Blair. The crossing takes approximately ${u.ferryTime||`90 to 120 minutes`}. Booking tickets at least 1-2 weeks in advance is recommended.`},{q:`What is the best time of year to visit ${u.name}?`,a:`The ideal season is ${u.bestTime||`October through May`}, when skies are crystal clear, humidity is pleasant, and underwater visibility reaches up to 25 meters—ideal for scuba diving, snorkeling, and boat safaris.`},{q:`Are permits required to visit ${u.name}?`,a:`Indian nationals do not require Restricted Area Permits (RAP). Foreign tourists receive a standard free permit upon arrival at Veer Savarkar International Airport in Port Blair, valid for all standard tourist islands including ${u.name}.`},{q:`What is mobile network and ATM connectivity like?`,a:`Airtel and BSNL provide robust 4G/5G mobile connectivity across the island. Major resorts and boutique cafes provide high-speed Wi-Fi. Multiple ATMs are available, though carrying some physical cash for beach shacks and boat guides is advisable.`}];return(0,E.jsxs)(`div`,{className:`dest-page-wrapper`,children:[(0,E.jsx)(`style`,{children:`
        .dest-page-wrapper {
          min-height: 100vh;
          background: #FAF4EE;
          color: #1E293B;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }

        /* ── HERO BANNER & GALLERY ── */
        .dest-hero-section {
          background: #0B2545;
          padding: 100px 20px 48px;
          color: #ffffff;
          position: relative;
        }

        .dest-hero-container {
          max-width: 1340px;
          margin: 0 auto;
        }

        .dest-breadcrumb-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .dest-breadcrumb-trail {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #94A3B8;
        }
        .dest-breadcrumb-trail span.clickable {
          cursor: pointer;
          color: #E2E8F0;
          transition: color 0.2s ease;
        }
        .dest-breadcrumb-trail span.clickable:hover {
          color: #F06543;
        }
        .dest-breadcrumb-trail span.current {
          color: #F06543;
        }

        .dest-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dest-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
        }
        .dest-action-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #F06543;
          color: #F06543;
        }

        .dest-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          align-items: stretch;
        }
        @media (max-width: 960px) {
          .dest-hero-grid {
            grid-template-columns: 1fr;
          }
        }

        .dest-hero-main-photo {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          height: 440px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.12);
        }
        .dest-hero-main-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dest-hero-main-photo:hover img {
          transform: scale(1.03);
        }

        .dest-hero-photo-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .dest-hero-photo-badge:hover {
          background: #F06543;
        }

        .dest-hero-info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dest-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #F06543;
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .dest-rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 215, 0, 0.15);
          border: 1px solid rgba(255, 215, 0, 0.3);
          color: #FFD700;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 20px;
        }

        .dest-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.08;
          margin: 12px 0 6px;
          color: #ffffff;
        }

        .dest-hero-subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .dest-hero-desc {
          font-size: 14px;
          color: #CBD5E1;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        /* Hero Quick Vitals Grid */
        .dest-vitals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 18px;
        }
        .dest-vital-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 12px 14px;
        }
        .dest-vital-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          color: #94A3B8;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .dest-vital-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── STICKY NAV SUB-BAR ── */
        .dest-sticky-nav {
          background: #ffffff;
          border-bottom: 1.5px solid #E2E8F0;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }
        .dest-sticky-nav-inner {
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .dest-nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 8px 0;
        }
        .dest-nav-links::-webkit-scrollbar { display: none; }

        .dest-nav-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #64748B;
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dest-nav-pill:hover {
          color: #F06543;
          background: #FFF5F1;
        }
        .dest-nav-pill.active {
          color: #ffffff;
          background: #F06543;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.3);
        }

        .dest-nav-cta-btn {
          background: #0B2545;
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .dest-nav-cta-btn:hover {
          background: #F06543;
        }

        /* ── EXPANSIVE FULL-WIDTH MAIN CONTAINER ── */
        .dest-full-container {
          max-width: 1340px;
          margin: 36px auto;
          padding: 0 20px 80px;
        }

        /* ── FULL-WIDTH CARD SECTION ── */
        .dest-full-card {
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 26px;
          padding: 38px 40px;
          box-shadow: 0 10px 32px rgba(11, 37, 69, 0.04);
          margin-bottom: 36px;
        }
        @media (max-width: 640px) {
          .dest-full-card {
            padding: 22px 18px;
            border-radius: 20px;
          }
        }

        .dest-section-header {
          margin-bottom: 26px;
        }
        .dest-section-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .dest-section-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.2vw, 38px);
          font-weight: 700;
          color: #0B2545;
          margin: 0;
          line-height: 1.15;
        }

        /* ── ATTRACTION CARD (GRID) ── */
        .dest-attr-card {
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .dest-attr-card:hover {
          transform: translateY(-5px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(240, 101, 67, 0.12);
        }
        .dest-attr-img {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .dest-attr-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dest-attr-card:hover .dest-attr-img img {
          transform: scale(1.06);
        }
        .dest-attr-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(11, 37, 69, 0.9);
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 8px;
          text-transform: uppercase;
          backdrop-filter: blur(6px);
        }

        /* ── GREAT NICOBAR SPOTLIGHT BANNER ── */
        .dest-nicobar-spotlight {
          background: linear-gradient(135deg, #0B2545 0%, #173B66 100%);
          border-radius: 26px;
          padding: 40px;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 18px 40px rgba(11, 37, 69, 0.18);
          margin-bottom: 36px;
        }
        @media (max-width: 640px) {
          .dest-nicobar-spotlight {
            padding: 24px 20px;
          }
        }
        .dest-spotlight-feature-box {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 20px;
          transition: background 0.2s ease;
        }
        .dest-spotlight-feature-box:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* ── ITEM CARD (STAYS / PACKAGES / ACTIVITIES) ── */
        .dest-card-item {
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .dest-card-item:hover {
          border-color: #F06543;
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(11, 37, 69, 0.08);
        }

        /* ── FAQ ACCORDION ── */
        .dest-faq-item {
          border: 1.5px solid #EBDED2;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 12px;
          background: #ffffff;
          transition: all 0.2s ease;
        }
        .dest-faq-item.active {
          background: #FFF9F5;
          border-color: #F06543;
        }
        .dest-faq-btn {
          width: 100%;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
          cursor: pointer;
          text-align: left;
        }

        /* ── PRIMARY & SECONDARY BUTTONS ── */
        .dest-primary-btn {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          color: #ffffff;
          border: none;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 900;
          padding: 14px 26px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.3);
          text-decoration: none;
        }
        .dest-primary-btn:hover {
          background: #0B2545;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(11, 37, 69, 0.25);
        }

        /* ── LIGHTBOX MODAL ── */
        .dest-lightbox-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.94);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .dest-lightbox-content {
          max-width: 1000px;
          width: 100%;
          max-height: 85vh;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dest-lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 16px;
        }

        /* ── FLOATING MOBILE ACTION BAR ── */
        .dest-mobile-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-top: 1.5px solid #E2E8F0;
          padding: 12px 20px;
          display: none;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.08);
        }
        @media (max-width: 768px) {
          .dest-mobile-bar {
            display: flex;
          }
        }
      `}),(0,E.jsx)(`section`,{className:`dest-hero-section`,children:(0,E.jsxs)(`div`,{className:`dest-hero-container`,children:[(0,E.jsxs)(`div`,{className:`dest-breadcrumb-row`,children:[(0,E.jsxs)(`div`,{className:`dest-breadcrumb-trail`,children:[(0,E.jsx)(`span`,{className:`clickable`,onClick:()=>J(`/`),children:`Home`}),(0,E.jsx)(S,{size:13,color:`#F06543`}),(0,E.jsx)(`span`,{className:`clickable`,onClick:()=>J(`/destinations`),children:`Destinations`}),(0,E.jsx)(S,{size:13,color:`#F06543`}),(0,E.jsx)(`span`,{className:`current`,children:u.name})]}),(0,E.jsxs)(`div`,{className:`dest-header-actions`,children:[(0,E.jsxs)(`button`,{onClick:_e,className:`dest-action-btn`,title:`Share link`,children:[H?(0,E.jsx)(ae,{size:14,color:`#10B981`}):(0,E.jsx)(re,{size:14}),(0,E.jsx)(`span`,{children:H?`Link Copied!`:`Share`})]}),(0,E.jsxs)(`button`,{onClick:()=>V(!B),className:`dest-action-btn`,title:`Save to wishlist`,children:[(0,E.jsx)(le,{size:14,fill:B?`#F06543`:`none`,color:B?`#F06543`:`#ffffff`}),(0,E.jsx)(`span`,{children:B?`Saved`:`Save`})]})]})]}),(0,E.jsxs)(`div`,{className:`dest-hero-grid`,children:[(0,E.jsxs)(`div`,{className:`dest-hero-main-photo`,children:[(0,E.jsx)(`img`,{src:Q,alt:u.name}),(0,E.jsxs)(`button`,{className:`dest-hero-photo-badge`,onClick:()=>P(!0),children:[(0,E.jsx)(t,{size:14}),(0,E.jsxs)(`span`,{children:[`View All `,Z.length,` Photos`]})]}),Z.length>1&&(0,E.jsx)(`div`,{style:{position:`absolute`,bottom:16,left:16,display:`flex`,gap:6,zIndex:10},children:Z.slice(0,4).map((e,t)=>(0,E.jsx)(`button`,{onClick:()=>M(t),style:{width:46,height:34,borderRadius:8,overflow:`hidden`,border:j===t?`2px solid #F06543`:`1px solid rgba(255,255,255,0.4)`,padding:0,cursor:`pointer`,opacity:j===t?1:.7,transition:`all 0.2s ease`},children:(0,E.jsx)(`img`,{src:e,alt:`Thumbnail`,style:{width:`100%`,height:`100%`,objectFit:`cover`}})},t))})]}),(0,E.jsxs)(`div`,{className:`dest-hero-info-card`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`,marginBottom:12},children:[(0,E.jsx)(`span`,{className:`dest-badge-pill`,children:X?`🌿 UNESCO Biosphere & Frontier`:u.region||`Andaman Archipelago`}),(0,E.jsxs)(`span`,{className:`dest-rating-pill`,children:[(0,E.jsx)(s,{size:13,fill:`#FFD700`,color:`#FFD700`}),(0,E.jsx)(`span`,{children:Number(u.rating||4.9).toFixed(1)}),(0,E.jsxs)(`span`,{style:{color:`rgba(255,255,255,0.7)`,fontWeight:500},children:[`(`,u.reviewsCount||110,`+ Reviews)`]})]})]}),(0,E.jsx)(`h1`,{className:`dest-hero-title`,children:u.name}),(0,E.jsx)(`div`,{className:`dest-hero-subtitle`,children:u.subtitle||`Pristine Island Sanctuary`}),(0,E.jsx)(`p`,{className:`dest-hero-desc`,children:u.tagline||u.shortDescription||`Discover crystalline coral atolls, lush rainforest canopies, and serene coastal beauty.`})]}),(0,E.jsxs)(`div`,{className:`dest-vitals-grid`,children:[(0,E.jsxs)(`div`,{className:`dest-vital-item`,children:[(0,E.jsx)(`div`,{className:`dest-vital-label`,children:`Best Season`}),(0,E.jsxs)(`div`,{className:`dest-vital-val`,children:[(0,E.jsx)(m,{size:14,color:`#F06543`}),(0,E.jsx)(`span`,{children:u.bestTime||`Oct – May`})]})]}),(0,E.jsxs)(`div`,{className:`dest-vital-item`,children:[(0,E.jsx)(`div`,{className:`dest-vital-label`,children:`Live Weather`}),(0,E.jsxs)(`div`,{className:`dest-vital-val`,children:[(0,E.jsx)(i,{size:14,color:`#FFD700`}),(0,E.jsxs)(`span`,{children:[u.temp||`28°C`,` • `,u.weather||`Sunny`]})]})]}),(0,E.jsxs)(`div`,{className:`dest-vital-item`,children:[(0,E.jsx)(`div`,{className:`dest-vital-label`,children:`Transit From Port Blair`}),(0,E.jsxs)(`div`,{className:`dest-vital-val`,children:[(0,E.jsx)(c,{size:14,color:`#38BDF8`}),(0,E.jsx)(`span`,{style:{fontSize:12},children:u.ferryTime?u.ferryTime.split(`from`)[0]:`Fast Ferry`})]})]}),(0,E.jsxs)(`div`,{className:`dest-vital-item`,children:[(0,E.jsx)(`div`,{className:`dest-vital-label`,children:`Water Clarity`}),(0,E.jsxs)(`div`,{className:`dest-vital-val`,children:[(0,E.jsx)(ce,{size:14,color:`#10B981`}),(0,E.jsx)(`span`,{children:u.clarity||`25m+ Visibility`})]})]})]})]})]})]})}),(0,E.jsx)(`div`,{className:`dest-sticky-nav`,children:(0,E.jsxs)(`div`,{className:`dest-sticky-nav-inner`,children:[(0,E.jsxs)(`div`,{className:`dest-nav-links`,children:[(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-overview`),className:`dest-nav-pill ${R===`sec-overview`?`active`:``}`,children:[(0,E.jsx)(o,{size:13}),(0,E.jsx)(`span`,{children:`Overview`})]}),(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-highlights`),className:`dest-nav-pill ${R===`sec-highlights`?`active`:``}`,children:[(0,E.jsx)(p,{size:13}),(0,E.jsx)(`span`,{children:`Key Highlights`})]}),X&&(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-biosphere`),className:`dest-nav-pill ${R===`sec-biosphere`?`active`:``}`,children:[(0,E.jsx)(b,{size:13}),(0,E.jsx)(`span`,{children:`UNESCO & Indira Point`})]}),(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-stays`),className:`dest-nav-pill ${R===`sec-stays`?`active`:``}`,children:[(0,E.jsx)(r,{size:13}),(0,E.jsx)(`span`,{children:`Where to Stay`})]}),(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-packages`),className:`dest-nav-pill ${R===`sec-packages`?`active`:``}`,children:[(0,E.jsx)(h,{size:13}),(0,E.jsxs)(`span`,{children:[`Packages (`,$.length,`)`]})]}),(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-transit`),className:`dest-nav-pill ${R===`sec-transit`?`active`:``}`,children:[(0,E.jsx)(c,{size:13}),(0,E.jsx)(`span`,{children:`How to Reach`})]}),(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-weather`),className:`dest-nav-pill ${R===`sec-weather`?`active`:``}`,children:[(0,E.jsx)(i,{size:13}),(0,E.jsx)(`span`,{children:`Best Time`})]}),(0,E.jsxs)(`button`,{onClick:()=>Y(`sec-faq`),className:`dest-nav-pill ${R===`sec-faq`?`active`:``}`,children:[(0,E.jsx)(f,{size:13}),(0,E.jsx)(`span`,{children:`Permits & FAQs`})]})]}),(0,E.jsxs)(`button`,{onClick:K,className:`dest-nav-cta-btn`,children:[(0,E.jsx)(`span`,{children:`Plan My Trip`}),(0,E.jsx)(a,{size:14})]})]})}),(0,E.jsxs)(`div`,{className:`dest-full-container`,children:[(0,E.jsxs)(`div`,{id:`sec-overview`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{className:`dest-section-header`,children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`Island Profile & Ecosystem`}),(0,E.jsxs)(`h2`,{className:`dest-section-title`,children:[`Discover `,u.name]})]}),(0,E.jsx)(`p`,{style:{fontSize:15.5,color:`#475569`,lineHeight:1.8,margin:`0 0 28px`},children:u.description||u.shortDescription||`${u.name} is one of the most stunning geographic treasures of the Andaman & Nicobar archipelago. Surrounded by pristine turquoise waters, living coral reefs, and tranquil evergreen forest reserves, it offers an authentic escape for honeymooners, adventure seekers, and nature lovers.`}),(0,E.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:16,borderTop:`1.5px dashed #EBDED2`,paddingTop:24},children:[(0,E.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#FAF4EE`,borderRadius:16,textAlign:`center`,border:`1px solid #EBDED2`},children:[(0,E.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:28,fontWeight:900,color:`#F06543`},children:[u.stayCount||u.stays?.length||12,`+`]}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#64748B`,textTransform:`uppercase`,marginTop:4},children:`Hotels & Eco-Lodges`})]}),(0,E.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#FAF4EE`,borderRadius:16,textAlign:`center`,border:`1px solid #EBDED2`},children:[(0,E.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:28,fontWeight:900,color:`#0B2545`},children:[u.activityCount||u.activities?.length||8,`+`]}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#64748B`,textTransform:`uppercase`,marginTop:4},children:`Marine & River Safaris`})]}),(0,E.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#FAF4EE`,borderRadius:16,textAlign:`center`,border:`1px solid #EBDED2`},children:[(0,E.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:28,fontWeight:900,color:`#F06543`},children:[$.length,`+`]}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#64748B`,textTransform:`uppercase`,marginTop:4},children:`Curated Packages`})]}),(0,E.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#FAF4EE`,borderRadius:16,textAlign:`center`,border:`1px solid #EBDED2`},children:[(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:28,fontWeight:900,color:`#0B2545`},children:u.scubaScore||`96%`}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#64748B`,textTransform:`uppercase`,marginTop:4},children:`Eco & Marine Score`})]})]})]}),X&&(0,E.jsxs)(`div`,{id:`sec-biosphere`,className:`dest-nicobar-spotlight`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#FF8A5B`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:8},children:[(0,E.jsx)(se,{size:18,color:`#FF8A5B`}),(0,E.jsx)(`span`,{children:`Southernmost Milestone & UNESCO Biosphere`})]}),(0,E.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(28px, 3.6vw, 42px)`,fontWeight:700,margin:`0 0 16px`,lineHeight:1.2},children:`Indira Point, Galathea National Park & Campbell Bay`}),(0,E.jsxs)(`p`,{style:{fontSize:15.5,color:`#E2E8F0`,lineHeight:1.8,margin:`0 0 28px`,maxWidth:1e3},children:[`Great Nicobar is India’s southernmost geographic territory, positioned barely 150 km from northern Sumatra across the Great Channel. Designated as a global `,(0,E.jsx)(`strong`,{children:`UNESCO Biosphere Reserve`}),`, it protects over 100,000 hectares of virgin tropical rainforest, pristine river systems, and nesting grounds of the world’s largest marine turtles.`]}),(0,E.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:20},children:[(0,E.jsxs)(`div`,{className:`dest-spotlight-feature-box`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:800,color:`#FF8A5B`,marginBottom:6},children:[(0,E.jsx)(ie,{size:18}),(0,E.jsx)(`span`,{children:`Indira Point Lighthouse (6°45'N)`})]}),(0,E.jsx)(`div`,{style:{fontSize:13,color:`#CBD5E1`,lineHeight:1.6},children:`The historic landmark representing India's southernmost geographical territory overlooking the international Malacca shipping gateway.`})]}),(0,E.jsxs)(`div`,{className:`dest-spotlight-feature-box`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:800,color:`#38BDF8`,marginBottom:6},children:[(0,E.jsx)(b,{size:18}),(0,E.jsx)(`span`,{children:`Galathea River & Rainforest Trek`})]}),(0,E.jsx)(`div`,{style:{fontSize:13,color:`#CBD5E1`,lineHeight:1.6},children:`Freshwater river excursions amidst ancient evergreen jungle canopies populated by rare Nicobar Megapodes and saltwater crocodiles.`})]}),(0,E.jsxs)(`div`,{className:`dest-spotlight-feature-box`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:800,color:`#34D399`,marginBottom:6},children:[(0,E.jsx)(n,{size:18}),(0,E.jsx)(`span`,{children:`Protected Wildlife Sanctuary`})]}),(0,E.jsx)(`div`,{style:{fontSize:13,color:`#CBD5E1`,lineHeight:1.6},children:`Strict eco-conservation protocols preserve designated indigenous tribal reserves, mangrove lagoons, and coral reefs.`})]})]})]}),u.highlights&&u.highlights.length>0&&(0,E.jsxs)(`div`,{id:`sec-highlights`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{className:`dest-section-header`,children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`Natural Wonders & Places to Visit`}),(0,E.jsxs)(`h2`,{className:`dest-section-title`,children:[`Key Highlights in `,u.name]})]}),(0,E.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:24},children:u.highlights.map((e,t)=>(0,E.jsxs)(`div`,{className:`dest-attr-card`,children:[(0,E.jsxs)(`div`,{className:`dest-attr-img`,children:[(0,E.jsx)(`img`,{src:e.image,alt:e.title}),(0,E.jsx)(`span`,{className:`dest-attr-tag`,children:e.category})]}),(0,E.jsx)(`div`,{style:{padding:22,flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-between`},children:(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:800,color:`#0B2545`,margin:`0 0 8px`,lineHeight:1.3},children:e.title}),(0,E.jsx)(`p`,{style:{fontSize:13.5,color:`#64748B`,lineHeight:1.6,margin:0},children:e.desc})]})})]},t))})]}),(0,E.jsxs)(`div`,{id:`sec-stays`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:12,marginBottom:26},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`Handpicked Resorts & Villas`}),(0,E.jsxs)(`h2`,{className:`dest-section-title`,children:[`Where to Stay in `,u.name]})]}),(0,E.jsxs)(`button`,{onClick:()=>J(`/stays`),style:{background:`#FFF5F1`,border:`1.5px solid #F06543`,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,padding:`8px 18px`,borderRadius:14,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:6},children:[(0,E.jsx)(`span`,{children:`EXPLORE ALL STAYS`}),(0,E.jsx)(l,{size:15})]})]}),(0,E.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(290px, 1fr))`,gap:24},children:(u.stays&&u.stays.length>0?u.stays:[{id:`gn-stay-1`,name:`Great Nicobar Eco Wilderness Lodge`,type:`ECO_LODGE`,heroImage:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80`,rating:4.7,reviewCount:42,shortDescription:`Exclusive biosphere reserve eco-lodge near Campbell Bay and Galathea National Park with organic dining and guided treks.`,pricePerNight:5500},{id:`gn-stay-2`,name:`Campbell Bay Coastal Haven`,type:`BEACH_VILLA`,heroImage:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,rating:4.8,reviewCount:38,shortDescription:`Charming seaside cottages facing calm turquoise ocean tides with direct harbor access and fresh seafood dining.`,pricePerNight:6800},{id:`gn-stay-3`,name:`Galathea Rainforest Retreat`,type:`RESORT`,heroImage:`https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80`,rating:4.9,reviewCount:56,shortDescription:`Private jungle villas surrounded by towering tropical Mahua trees, private verandahs, and birdwatching trails.`,pricePerNight:8500}]).map(e=>(0,E.jsxs)(`div`,{className:`dest-card-item`,onClick:()=>J(`/stay-details?id=${e.id||e.slug}`),children:[(0,E.jsxs)(`div`,{style:{position:`relative`,height:180,overflow:`hidden`},children:[(0,E.jsx)(`img`,{src:e.heroImage||e.image||`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80`,alt:e.name,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,E.jsx)(`span`,{style:{position:`absolute`,top:12,left:12,background:`#0B2545`,color:`#ffffff`,fontSize:10.5,fontWeight:900,fontFamily:`'Space Grotesk', sans-serif`,padding:`4px 10px`,borderRadius:8,textTransform:`uppercase`},children:e.type?.replace(/_/g,` `)||`BEACH RESORT`})]}),(0,E.jsxs)(`div`,{style:{padding:20,flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-between`},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4,marginBottom:6},children:[(0,E.jsx)(s,{size:13,className:`fill-[#FFD700] text-[#FFD700]`}),(0,E.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#0B2545`},children:[Number(e.rating||4.8).toFixed(1),` (`,e.reviewCount||40,`)`]})]}),(0,E.jsx)(`h4`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:800,color:`#0B2545`,margin:`0 0 6px`},children:e.name}),(0,E.jsx)(`p`,{style:{fontSize:12.5,color:`#64748B`,lineClamp:2,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`,margin:`0 0 14px`,lineHeight:1.5},children:e.shortDescription||e.description})]}),(0,E.jsxs)(`div`,{style:{borderTop:`1px solid #F1F5F9`,paddingTop:12,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{style:{fontSize:10.5,color:`#94A3B8`,textTransform:`uppercase`,fontWeight:700},children:`Starting from`}),(0,E.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:900,color:`#F06543`},children:[`₹`,Number(e.pricePerNight||5500).toLocaleString(),(0,E.jsx)(`span`,{style:{fontSize:11.5,fontWeight:600,color:`#64748B`},children:`/nt`})]})]}),(0,E.jsxs)(`span`,{style:{fontSize:13,fontWeight:800,color:`#0B2545`,display:`flex`,alignItems:`center`,gap:4},children:[`Details `,(0,E.jsx)(S,{size:15})]})]})]})]},e.id))})]}),(0,E.jsxs)(`div`,{id:`sec-packages`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:12,marginBottom:26},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`All-Inclusive Tour Packages`}),(0,E.jsxs)(`h2`,{className:`dest-section-title`,children:[`Curated Holiday Packages Visiting `,u.name]})]}),(0,E.jsxs)(`button`,{onClick:()=>J(`/packages`),style:{background:`#FFF5F1`,border:`1.5px solid #F06543`,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,padding:`8px 18px`,borderRadius:14,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:6},children:[(0,E.jsx)(`span`,{children:`ALL PACKAGES`}),(0,E.jsx)(l,{size:15})]})]}),(0,E.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(290px, 1fr))`,gap:24},children:$.map((e,t)=>(0,E.jsxs)(`div`,{className:`dest-card-item`,onClick:()=>J(`/package-details?id=${e.id||e.slug||`great-nicobar-expedition`}`),children:[(0,E.jsxs)(`div`,{style:{position:`relative`,height:180,overflow:`hidden`},children:[(0,E.jsx)(`img`,{src:e.image||`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80`,alt:e.name,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,E.jsx)(`span`,{style:{position:`absolute`,top:12,left:12,background:`#0B2545`,color:`#ffffff`,fontSize:11,fontWeight:900,fontFamily:`'Space Grotesk', sans-serif`,padding:`4px 10px`,borderRadius:8},children:e.duration||`5N / 6D`}),(0,E.jsxs)(`span`,{style:{position:`absolute`,top:12,right:12,background:`rgba(255,255,255,0.9)`,color:`#0B2545`,fontSize:11,fontWeight:900,fontFamily:`'Space Grotesk', sans-serif`,padding:`4px 8px`,borderRadius:8,display:`flex`,alignItems:`center`,gap:3},children:[(0,E.jsx)(s,{size:11,className:`fill-[#FFD700] text-[#FFD700]`}),` `,Number(e.rating||4.9).toFixed(1)]})]}),(0,E.jsxs)(`div`,{style:{padding:22,flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-between`},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h4`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:800,color:`#0B2545`,margin:`0 0 8px`,lineHeight:1.3},children:e.name}),(0,E.jsx)(`p`,{style:{fontSize:13,color:`#64748B`,margin:`0 0 14px`,lineHeight:1.5},children:e.bestFor||e.destinations}),Array.isArray(e.inclusions)&&e.inclusions.length>0&&(0,E.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:14},children:e.inclusions.slice(0,3).map((e,t)=>(0,E.jsxs)(`span`,{style:{fontSize:11,color:`#0B2545`,background:`#F8FAFC`,border:`1px solid #E2E8F0`,padding:`3px 8px`,borderRadius:6,fontWeight:600},children:[`✓ `,e]},t))})]}),(0,E.jsxs)(`div`,{style:{borderTop:`1.5px solid #F1F5F9`,paddingTop:14,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{style:{fontSize:10.5,color:`#94A3B8`,textTransform:`uppercase`,fontWeight:700},children:`Package Starting`}),(0,E.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#F06543`},children:[`₹`,Number(e.price||28999).toLocaleString(),(0,E.jsx)(`span`,{style:{fontSize:12,fontWeight:600,color:`#64748B`},children:`/person`})]})]}),(0,E.jsx)(`span`,{style:{background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,fontSize:12,fontWeight:900,padding:`8px 16px`,borderRadius:10,fontFamily:`'Space Grotesk', sans-serif`},children:`VIEW PLAN`})]})]})]},e.id||t))})]}),(0,E.jsxs)(`div`,{id:`sec-transit`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:12,marginBottom:26},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`Island Logistics & Connectivity`}),(0,E.jsxs)(`h2`,{className:`dest-section-title`,children:[`How to Reach `,u.name]})]}),(0,E.jsxs)(`button`,{onClick:q,style:{background:`#0B2545`,color:`#ffffff`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,padding:`10px 20px`,borderRadius:14,border:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:8},children:[(0,E.jsx)(c,{size:16}),(0,E.jsx)(`span`,{children:`CHECK VESSEL SCHEDULES`})]})]}),(0,E.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:20,marginBottom:28},children:[(0,E.jsxs)(`div`,{style:{padding:24,background:`#FAF4EE`,borderRadius:20,border:`1.5px solid #EBDED2`},children:[(0,E.jsx)(`div`,{style:{width:44,height:44,borderRadius:12,background:`#0B2545`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:14},children:(0,E.jsx)(_,{size:22})}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,color:`#F06543`,letterSpacing:`0.1em`,textTransform:`uppercase`,marginBottom:4},children:`STEP 01: ARRIVE IN ANDAMAN`}),(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:800,color:`#0B2545`,margin:`0 0 8px`},children:`Fly to Port Blair Airport (IXZ)`}),(0,E.jsx)(`p`,{style:{fontSize:13,color:`#64748B`,lineHeight:1.6,margin:0},children:`Direct commercial domestic flights operate daily from Delhi, Mumbai, Chennai, Kolkata, and Bengaluru to Veer Savarkar International Airport in Port Blair.`})]}),(0,E.jsxs)(`div`,{style:{padding:24,background:`#FFF9F5`,borderRadius:20,border:`1.5px solid #F06543`},children:[(0,E.jsx)(`div`,{style:{width:44,height:44,borderRadius:12,background:`#F06543`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:14},children:(0,E.jsx)(c,{size:22})}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,color:`#F06543`,letterSpacing:`0.1em`,textTransform:`uppercase`,marginBottom:4},children:`STEP 02: SEA / HELICOPTER TRANSIT`}),(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:800,color:`#0B2545`,margin:`0 0 8px`},children:`Port Blair ↔ Campbell Bay`}),(0,E.jsx)(`p`,{style:{fontSize:13,color:`#64748B`,lineHeight:1.6,margin:0},children:X?`Scheduled passenger ships (14–18 hours voyage) or Pawan Hans civilian helicopter passenger sorties operate regularly with advance ticketing.`:`High-speed luxury catamarans (Makruzz, Nautika) run daily scheduled sailings taking approx ${u.ferryTime||`90–120 minutes`}.`})]}),(0,E.jsxs)(`div`,{style:{padding:24,background:`#FAF4EE`,borderRadius:20,border:`1.5px solid #EBDED2`},children:[(0,E.jsx)(`div`,{style:{width:44,height:44,borderRadius:12,background:`#0B2545`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:14},children:(0,E.jsx)(h,{size:22})}),(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,color:`#F06543`,letterSpacing:`0.1em`,textTransform:`uppercase`,marginBottom:4},children:`STEP 03: LOCAL EXPEDITION`}),(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:800,color:`#0B2545`,margin:`0 0 8px`},children:`Harbor Boats & 4x4 Jeeps`}),(0,E.jsx)(`p`,{style:{fontSize:13,color:`#64748B`,lineHeight:1.6,margin:0},children:`From Campbell Bay Jetty, registered eco-tourism boats and four-wheel-drive escort jeeps transfer you to Indira Point and Galathea National Park trails.`})]})]}),(0,E.jsxs)(`div`,{style:{padding:22,background:`#F8FAFC`,borderRadius:18,border:`1px solid #E2E8F0`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:16},children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14},children:[(0,E.jsx)(`div`,{style:{width:48,height:48,borderRadius:14,background:`rgba(240, 101, 67, 0.12)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#F06543`},children:(0,E.jsx)(c,{size:24})}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:800,color:`#0B2545`},children:`Port Blair (Haddo Wharf) ↔ Campbell Bay (Great Nicobar)`}),(0,E.jsx)(`div`,{style:{fontSize:13,color:`#64748B`,marginTop:2},children:`Directorate of Shipping Services Passenger Ships & Helicopter Connector`})]})]}),(0,E.jsx)(`button`,{onClick:q,style:{background:`#0B2545`,color:`#ffffff`,border:`none`,padding:`10px 22px`,borderRadius:12,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,cursor:`pointer`},children:`VIEW FARES & DATES`})]})]}),(0,E.jsxs)(`div`,{id:`sec-weather`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{className:`dest-section-header`,children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`Climate & Seasonal Guide`}),(0,E.jsxs)(`h2`,{className:`dest-section-title`,children:[`Best Time to Visit `,u.name]})]}),(0,E.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:24,marginBottom:28},children:[(0,E.jsxs)(`div`,{style:{padding:26,background:`#FFF9F5`,borderRadius:20,border:`2px solid #F06543`},children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,E.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#F06543`,textTransform:`uppercase`,letterSpacing:`0.08em`},children:`⭐ BEST & PEAK SEASON`}),(0,E.jsx)(i,{size:22,color:`#F06543`})]}),(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:20,fontWeight:800,color:`#0B2545`,margin:`0 0 6px`},children:`October – April`}),(0,E.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:`#F06543`,marginBottom:10},children:`Temp: 26°C – 30°C • Water Clarity: 25m+`}),(0,E.jsx)(`p`,{style:{fontSize:13.5,color:`#64748B`,lineHeight:1.6,margin:0},children:`Crystal clear blue skies, calm ocean swells, and peak underwater visibility. The perfect window for Indira Point visits, river safaris, and marine turtle nesting observation.`})]}),(0,E.jsxs)(`div`,{style:{padding:26,background:`#FAF4EE`,borderRadius:20,border:`1.5px solid #EBDED2`},children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,E.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#0B2545`,textTransform:`uppercase`,letterSpacing:`0.08em`},children:`🌤️ SHOULDER SEASON`}),(0,E.jsx)(v,{size:22,color:`#0B2545`})]}),(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:20,fontWeight:800,color:`#0B2545`,margin:`0 0 6px`},children:`May & September`}),(0,E.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:`#0B2545`,marginBottom:10},children:`Temp: 28°C – 32°C • Low Crowd Density`}),(0,E.jsx)(`p`,{style:{fontSize:13.5,color:`#64748B`,lineHeight:1.6,margin:0},children:`Warm tropical breezes, fewer tourists, lush green jungle canopies, and attractive seasonal discounts across boutique eco-resorts.`})]}),(0,E.jsxs)(`div`,{style:{padding:26,background:`#FAF4EE`,borderRadius:20,border:`1.5px solid #EBDED2`},children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,E.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#64748B`,textTransform:`uppercase`,letterSpacing:`0.08em`},children:`🌧️ MONSOON SEASON`}),(0,E.jsx)(y,{size:22,color:`#38BDF8`})]}),(0,E.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:20,fontWeight:800,color:`#0B2545`,margin:`0 0 6px`},children:`June – August`}),(0,E.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:`#64748B`,marginBottom:10},children:`Temp: 24°C – 28°C • Heavy Rainforest Showers`}),(0,E.jsx)(`p`,{style:{fontSize:13.5,color:`#64748B`,lineHeight:1.6,margin:0},children:`Vibrant green rainforest foliage and roaring waterfalls. Open ocean excursions and sea transits may experience weather delays.`})]})]}),(0,E.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:16},children:[(0,E.jsxs)(`div`,{style:{padding:18,background:`#F8FAFC`,borderRadius:14,border:`1px solid #E2E8F0`,display:`flex`,alignItems:`center`,gap:12},children:[(0,E.jsx)(i,{size:20,color:`#F06543`}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`strong`,{style:{fontSize:13,color:`#0B2545`},children:`Sun & Tropical Care`}),(0,E.jsx)(`div`,{style:{fontSize:12,color:`#64748B`},children:`Carry reef-safe sunscreen, sunglasses, and cotton apparel.`})]})]}),(0,E.jsxs)(`div`,{style:{padding:18,background:`#F8FAFC`,borderRadius:14,border:`1px solid #E2E8F0`,display:`flex`,alignItems:`center`,gap:12},children:[(0,E.jsx)(te,{size:20,color:`#0B2545`}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`strong`,{style:{fontSize:13,color:`#0B2545`},children:`Trekking Essentials`}),(0,E.jsx)(`div`,{style:{fontSize:12,color:`#64748B`},children:`Comfortable hiking shoes and waterproof dry bags for boat rides.`})]})]}),(0,E.jsxs)(`div`,{style:{padding:18,background:`#F8FAFC`,borderRadius:14,border:`1px solid #E2E8F0`,display:`flex`,alignItems:`center`,gap:12},children:[(0,E.jsx)(n,{size:20,color:`#10B981`}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`strong`,{style:{fontSize:13,color:`#0B2545`},children:`Government ID Proof`}),(0,E.jsx)(`div`,{style:{fontSize:12,color:`#64748B`},children:`Original Aadhaar/Passport required for Campbell Bay clearance.`})]})]})]})]}),(0,E.jsxs)(`div`,{id:`sec-faq`,className:`dest-full-card`,children:[(0,E.jsxs)(`div`,{className:`dest-section-header`,children:[(0,E.jsx)(`div`,{className:`dest-section-eyebrow`,children:`Permits, Guidelines & FAQs`}),(0,E.jsx)(`h2`,{className:`dest-section-title`,children:`Frequently Asked Questions`})]}),(0,E.jsx)(`div`,{style:{maxWidth:1e3,margin:`0 auto`},children:ve.map((e,t)=>(0,E.jsxs)(`div`,{className:`dest-faq-item ${I===t?`active`:``}`,children:[(0,E.jsxs)(`button`,{onClick:()=>L(I===t?-1:t),className:`dest-faq-btn`,children:[(0,E.jsx)(`span`,{children:e.q}),I===t?(0,E.jsx)(ee,{size:20,color:`#F06543`}):(0,E.jsx)(ne,{size:20,color:`#64748B`})]}),I===t&&(0,E.jsx)(`div`,{style:{padding:`0 22px 22px`,fontSize:14,color:`#475569`,lineHeight:1.75},children:e.a})]},t))})]}),(0,E.jsx)(`div`,{id:`sec-customizer`,style:{background:`#0B2545`,borderRadius:28,padding:`48px 40px`,color:`#ffffff`,border:`2px solid #F06543`,boxShadow:`0 20px 48px rgba(11,37,69,0.2)`},children:(0,E.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1.2fr 0.8fr`,gap:36,alignItems:`center`},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`span`,{style:{background:`#F06543`,color:`#ffffff`,fontSize:11,fontWeight:900,padding:`5px 12px`,borderRadius:20,letterSpacing:`0.08em`,textTransform:`uppercase`},children:[`READY TO EXPERIENCE `,u.name.toUpperCase(),`?`]}),(0,E.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(30px, 4vw, 44px)`,fontWeight:700,margin:`14px 0 10px`,color:`#ffffff`,lineHeight:1.15},children:`Plan Your Customized Island Vacation`}),(0,E.jsx)(`p`,{style:{fontSize:15,color:`#CBD5E1`,lineHeight:1.6,margin:`0 0 24px`},children:`Speak with our registered Andaman & Nicobar travel specialists. We arrange confirmed passenger passes, beachfront resort stays, private 4x4 transfers, and local permits with zero hassle.`}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,flexWrap:`wrap`},children:[(0,E.jsxs)(`button`,{onClick:K,className:`dest-primary-btn`,style:{padding:`16px 32px`,fontSize:14},children:[(0,E.jsx)(`span`,{children:`START CUSTOMIZING MY TRIP`}),(0,E.jsx)(a,{size:16})]}),(0,E.jsx)(`button`,{onClick:q,style:{background:`rgba(255,255,255,0.1)`,border:`1.5px solid rgba(255,255,255,0.3)`,color:`#ffffff`,padding:`14px 24px`,borderRadius:14,fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,cursor:`pointer`},children:`CHECK FERRY PASSES`})]})]}),(0,E.jsxs)(`div`,{style:{background:`rgba(255,255,255,0.06)`,borderRadius:20,border:`1px solid rgba(255,255,255,0.14)`,padding:28,display:`flex`,flexDirection:`column`,gap:14},children:[(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontSize:14,color:`#E2E8F0`,fontWeight:600},children:[(0,E.jsx)(x,{size:18,color:`#10B981`}),(0,E.jsx)(`span`,{children:`Confirmed catamaran & passenger vessel tickets`})]}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontSize:14,color:`#E2E8F0`,fontWeight:600},children:[(0,E.jsx)(x,{size:18,color:`#10B981`}),(0,E.jsx)(`span`,{children:`Eco-lodge & luxury beachfront accommodation`})]}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontSize:14,color:`#E2E8F0`,fontWeight:600},children:[(0,E.jsx)(x,{size:18,color:`#10B981`}),(0,E.jsx)(`span`,{children:`Local administration & permit assistance`})]}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,fontSize:14,color:`#E2E8F0`,fontWeight:600},children:[(0,E.jsx)(x,{size:18,color:`#10B981`}),(0,E.jsx)(`span`,{children:`24/7 dedicated on-ground island coordinator`})]})]})]})})]}),N&&(0,E.jsx)(`div`,{className:`dest-lightbox-modal`,onClick:()=>P(!1),children:(0,E.jsxs)(`div`,{className:`dest-lightbox-content`,onClick:e=>e.stopPropagation(),children:[(0,E.jsxs)(`button`,{onClick:()=>P(!1),style:{position:`absolute`,top:-40,right:0,background:`none`,border:`none`,color:`#ffffff`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:700},children:[(0,E.jsx)(`span`,{children:`Close`}),(0,E.jsx)(g,{size:22})]}),(0,E.jsx)(`img`,{src:Z[j],alt:`Gallery image ${j+1}`,className:`dest-lightbox-img`}),(0,E.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14,marginTop:20},children:[(0,E.jsx)(`button`,{onClick:()=>M((j-1+Z.length)%Z.length),style:{background:`rgba(255,255,255,0.2)`,color:`#fff`,border:`none`,width:40,height:40,borderRadius:`50%`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,E.jsx)(oe,{size:20})}),(0,E.jsxs)(`span`,{style:{color:`#fff`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:700},children:[j+1,` / `,Z.length]}),(0,E.jsx)(`button`,{onClick:()=>M((j+1)%Z.length),style:{background:`rgba(255,255,255,0.2)`,color:`#fff`,border:`none`,width:40,height:40,borderRadius:`50%`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,E.jsx)(S,{size:20})})]})]})}),(0,E.jsxs)(`div`,{className:`dest-mobile-bar`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:900,color:`#0B2545`},children:u.name}),(0,E.jsxs)(`div`,{style:{fontSize:11.5,color:`#F06543`,fontWeight:700},children:[u.stayCount||12,` Stays • `,$.length,` Packages`]})]}),(0,E.jsxs)(`button`,{onClick:K,style:{background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,border:`none`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,padding:`10px 18px`,borderRadius:12,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:6},children:[(0,E.jsx)(`span`,{children:`PLAN TRIP`}),(0,E.jsx)(a,{size:14})]})]}),(0,E.jsx)(de,{})]})}export{D as default};