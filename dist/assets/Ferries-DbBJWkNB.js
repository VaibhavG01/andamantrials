import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Ct as n,Dn as r,En as i,Gn as a,K as o,Kn as s,O as c,R as l,Xn as u,Zn as d,bn as f,gt as p,it as m,j as h,jn as g,l as _,mn as v,xt as y}from"./lucide-vendor-CBhgx3NO.js";import{v as b}from"./three-vendor-Md08yeGZ.js";import{m as x,p as S}from"./index-Cq-P1kYg.js";import{t as C}from"./FooterBottom-BRi21ULf.js";import{t as w}from"./cruiseData-33QuMDJP.js";import{n as T,t as E}from"./ferryData-Hff9CDNF.js";var D=e(d(),1),O=b();function k({onBookFerry:e,onExploreCruises:t,onViewSchedule:n}){return(0,O.jsxs)(`section`,{className:`unified-sea-hero-root`,children:[(0,O.jsx)(`style`,{children:`
        .unified-sea-hero-root {
          position: relative;
          min-height: 78vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #07182C 0%, #0B2545 50%, #0D3B66 100%);
          color: #ffffff;
          overflow: hidden;
          padding: 130px 24px 100px;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(240, 101, 67, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(22, 217, 255, 0.12) 0%, transparent 45%),
            url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
          opacity: 0.28;
          mix-blend-mode: luminosity;
          pointer-events: none;
        }

        .hero-mesh-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .hero-inner-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .live-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          backdrop-filter: blur(12px);
          padding: 6px 16px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34D399;
          margin-bottom: 22px;
          animation: pulseGreen 2.5s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2); }
          50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        }

        .hero-title-main {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 16px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .hero-title-main span {
          background: linear-gradient(135deg, #FF8A65 0%, #F06543 50%, #FFB088 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(15px, 1.8vw, 19px);
          font-weight: 400;
          line-height: 1.6;
          color: #CBD5E1;
          max-width: 820px;
          margin: 0 0 32px;
        }

        .hero-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }

        .btn-hero-primary {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.4);
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(240, 101, 67, 0.6);
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          padding: 14px 28px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .hero-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 960px;
          background: rgba(11, 37, 69, 0.65);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 20px 28px;
        }

        @media (max-width: 768px) {
          .hero-stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 16px;
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
      `}),(0,O.jsx)(`div`,{className:`hero-bg-overlay`}),(0,O.jsx)(`div`,{className:`hero-mesh-grid`}),(0,O.jsxs)(`div`,{className:`hero-inner-container`,children:[(0,O.jsxs)(`div`,{className:`live-status-pill`,children:[(0,O.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,background:`#34D399`,display:`inline-block`}}),(0,O.jsx)(`span`,{children:`LIVE SAILINGS OPERATING • PORT BLAIR • HAVELOCK • NEIL ISLAND • BARATANG`})]}),(0,O.jsxs)(`h1`,{className:`hero-title-main`,children:[`Andaman Inter-Island `,(0,O.jsx)(`span`,{children:`Ferries & Luxury Cruises`})]}),(0,O.jsxs)(`p`,{className:`hero-subtitle-text`,children:[`Book verified live seats across premier catamaran fleets — `,(0,O.jsx)(`strong`,{children:`Makruzz, Nautika, Green Ocean & ITT Majestic`}),` — alongside sunset yacht sails, harbor dinner cruises and private island charters with instant PNR confirmation.`]}),(0,O.jsxs)(`div`,{className:`hero-action-buttons`,children:[(0,O.jsxs)(`button`,{type:`button`,onClick:e,className:`btn-hero-primary`,children:[(0,O.jsx)(l,{size:18}),`Book Island Ferry Slot`,(0,O.jsx)(a,{size:16})]}),(0,O.jsxs)(`button`,{type:`button`,onClick:t,className:`btn-hero-secondary`,children:[(0,O.jsx)(u,{size:18}),`Sunset & Luxury Cruises`]}),(0,O.jsxs)(`button`,{type:`button`,onClick:n,className:`btn-hero-secondary`,children:[(0,O.jsx)(v,{size:18}),`Live Daily Timetable`]})]}),(0,O.jsxs)(`div`,{className:`hero-stats-strip`,children:[(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{className:`stat-number`,children:`100%`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Confirmed E-Tickets`})]}),(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsxs)(`div`,{className:`stat-number`,children:[`4.9 `,(0,O.jsx)(c,{size:16,fill:`#F06543`,color:`#F06543`})]}),(0,O.jsx)(`div`,{className:`stat-label`,children:`50,000+ Happy Voyagers`})]}),(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{className:`stat-number`,children:`90 Min`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Fast Catamaran Transit`})]}),(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{className:`stat-number`,children:`24/7`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Jetty Concierge Desk`})]})]})]})]})}var A=[`Port Blair`,`Havelock Island (Swaraj Dweep)`,`Neil Island (Shaheed Dweep)`,`Baratang Island`,`Rangat / Middle Andaman`,`Diglipur / North Andaman`],j=[`All Sunset & Scenic Cruises`,`Andaman Sunset Sail (Port Blair Harbour)`,`Private Ocean Yacht Charter`,`Havelock Island Coastal Sightseeing`,`Romantic Couple Escape Cruise`,`Coral Safari Semi-Submarine Reef Cruise`,`Evening Dinner & Starlight Cruise`];function M({onSearch:e,activeCategory:t=`FERRY`,onCategoryChange:n}){let[r,a]=(0,D.useState)(t),[c,d]=(0,D.useState)(`ONE_WAY`),[f,v]=(0,D.useState)(`Port Blair`),[b,x]=(0,D.useState)(`Havelock Island (Swaraj Dweep)`),[S,C]=(0,D.useState)(()=>{let e=new Date;return e.setDate(e.getDate()+1),e.toISOString().split(`T`)[0]}),[w,T]=(0,D.useState)(()=>{let e=new Date;return e.setDate(e.getDate()+3),e.toISOString().split(`T`)[0]}),[E,k]=(0,D.useState)(`Port Blair Harbour`),[M,N]=(0,D.useState)(`All Sunset & Scenic Cruises`),[P,F]=(0,D.useState)(2),[I,L]=(0,D.useState)(0),[R,z]=(0,D.useState)(0),[B,V]=(0,D.useState)(!1),H=P+I+R,U=()=>{let e=f;v(b),x(e)},W=e=>{a(e),n&&n(e)},G=t=>{t&&t.preventDefault(),V(!1),e(r===`FERRY`?{category:`FERRY`,tripType:c,from:f,to:b,departureDate:S,returnDate:c===`ROUND_TRIP`?w:null,adults:P,children:I,infants:R,totalPassengers:H}:{category:`CRUISE`,port:E,experience:M,date:S,adults:P,children:I,infants:R,totalPassengers:H})},K=(t,n,r=`FERRY`)=>{a(r),v(t),x(n),e({category:r,tripType:`ONE_WAY`,from:t,to:n,departureDate:S,adults:P,children:I,infants:R,totalPassengers:H})};return(0,O.jsxs)(`div`,{id:`unified-sea-search-panel`,className:`unified-search-root`,children:[(0,O.jsx)(`style`,{children:`
        .unified-search-root {
          max-width: 1240px;
          margin: -50px auto 40px;
          padding: 0 24px;
          position: relative;
          z-index: 20;
        }

        .search-main-card {
          background: #ffffff;
          border-radius: 28px;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(11, 37, 69, 0.12), 0 0 40px rgba(240, 101, 67, 0.05);
          overflow: hidden;
        }

        .search-tab-bar {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border-bottom: 1.5px solid #E2E8F0;
          padding: 8px 16px;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .tab-btn.active {
          background: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }

        .tab-btn.inactive {
          background: transparent;
          color: #64748B;
        }

        .tab-btn.inactive:hover {
          background: #EEF2F6;
          color: #0B2545;
        }

        .trip-type-toggle {
          margin-left: auto;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          padding: 3px;
          gap: 4px;
        }

        .toggle-btn {
          border: none;
          background: transparent;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 8px;
          cursor: pointer;
          color: #64748B;
          transition: all 0.2s ease;
        }

        .toggle-btn.active {
          background: #F06543;
          color: #ffffff;
        }

        .search-form-body {
          padding: 24px 28px;
        }

        .search-fields-grid {
          display: grid;
          grid-template-columns: 1.3fr 1.3fr 1fr 1fr auto;
          gap: 14px;
          align-items: flex-end;
        }

        @media (max-width: 1080px) {
          .search-fields-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .search-fields-grid {
            grid-template-columns: 1fr;
          }
        }

        .field-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748B;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .field-input-box {
          position: relative;
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 14px;
          padding: 0 14px;
          min-height: 52px;
          transition: all 0.2s ease;
        }

        .field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.12);
        }

        .field-select, .field-input {
          width: 100%;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          cursor: pointer;
        }

        .swap-loc-btn {
          position: absolute;
          right: -12px;
          top: 36px;
          z-index: 5;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748B;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.2s ease;
        }

        .swap-loc-btn:hover {
          background: #F06543;
          color: #ffffff;
          border-color: #F06543;
          transform: rotate(180deg);
        }

        @media (max-width: 1080px) {
          .swap-loc-btn { display: none; }
        }

        .btn-search-trigger {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 0 28px;
          min-height: 52px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.35);
          transition: all 0.25s ease;
          width: 100%;
        }

        .btn-search-trigger:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(240, 101, 67, 0.5);
        }

        .passengers-popover {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 290px;
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.18);
          padding: 18px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pax-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pax-counter {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .counter-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          border: 1.5px solid #CBD5E1;
          background: #F8FAFC;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .counter-btn:hover:not(:disabled) {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .counter-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .quick-routes-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px dashed #E2E8F0;
          flex-wrap: wrap;
        }

        .quick-route-pill {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 5px 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0B2545;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-route-pill:hover {
          background: #FFF1EE;
          border-color: #FFB088;
          color: #F06543;
          transform: translateY(-1px);
        }
      `}),(0,O.jsxs)(`div`,{className:`search-main-card`,children:[(0,O.jsxs)(`div`,{className:`search-tab-bar`,children:[(0,O.jsxs)(`button`,{type:`button`,className:`tab-btn ${r===`FERRY`?`active`:`inactive`}`,onClick:()=>W(`FERRY`),children:[(0,O.jsx)(l,{size:16}),`Inter-Island Ferry Transfers`]}),(0,O.jsxs)(`button`,{type:`button`,className:`tab-btn ${r===`CRUISE`?`active`:`inactive`}`,onClick:()=>W(`CRUISE`),children:[(0,O.jsx)(u,{size:16}),`Sunset, Dinner & Luxury Cruises`]}),r===`FERRY`&&(0,O.jsxs)(`div`,{className:`trip-type-toggle`,children:[(0,O.jsx)(`button`,{type:`button`,className:`toggle-btn ${c===`ONE_WAY`?`active`:``}`,onClick:()=>d(`ONE_WAY`),children:`One Way`}),(0,O.jsx)(`button`,{type:`button`,className:`toggle-btn ${c===`ROUND_TRIP`?`active`:``}`,onClick:()=>d(`ROUND_TRIP`),children:`Round Trip`})]})]}),(0,O.jsxs)(`form`,{onSubmit:G,className:`search-form-body`,children:[r===`FERRY`?(0,O.jsxs)(`div`,{className:`search-fields-grid`,children:[(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(y,{size:13,color:`#F06543`}),`Departure Island (From)`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsx)(`select`,{value:f,onChange:e=>v(e.target.value),className:`field-select`,children:A.map(e=>(0,O.jsx)(`option`,{value:e,children:e},e))})}),(0,O.jsx)(`button`,{type:`button`,title:`Swap Origin and Destination`,onClick:U,className:`swap-loc-btn`,children:(0,O.jsx)(s,{size:13})})]}),(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(y,{size:13,color:`#F06543`}),`Arrival Island (To)`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsx)(`select`,{value:b,onChange:e=>x(e.target.value),className:`field-select`,children:A.filter(e=>e!==f).map(e=>(0,O.jsx)(`option`,{value:e,children:e},e))})})]}),(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(g,{size:13,color:`#0B2545`}),c===`ROUND_TRIP`?`Depart Date`:`Travel Date`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsx)(`input`,{type:`date`,required:!0,value:S,onChange:e=>C(e.target.value),className:`field-input`})})]}),(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(_,{size:13,color:`#0B2545`}),`Voyagers / Class`]}),(0,O.jsxs)(`div`,{className:`field-input-box`,onClick:()=>V(!B),style:{cursor:`pointer`,justifyContent:`space-between`},children:[(0,O.jsxs)(`span`,{style:{fontSize:13,fontWeight:800,color:`#0B2545`},children:[H,` Traveler`,H>1?`s`:``]}),(0,O.jsx)(i,{size:15,color:`#64748B`})]}),B&&(0,O.jsxs)(`div`,{className:`passengers-popover`,children:[(0,O.jsxs)(`div`,{className:`pax-row`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#0B2545`},children:`Adults`}),(0,O.jsx)(`div`,{style:{fontSize:11,color:`#64748B`},children:`Age 12+ years`})]}),(0,O.jsxs)(`div`,{className:`pax-counter`,children:[(0,O.jsx)(`button`,{type:`button`,className:`counter-btn`,disabled:P<=1,onClick:()=>F(P-1),children:(0,O.jsx)(p,{size:13})}),(0,O.jsx)(`span`,{style:{fontWeight:800,minWidth:16,textAlign:`center`},children:P}),(0,O.jsx)(`button`,{type:`button`,className:`counter-btn`,onClick:()=>F(P+1),children:(0,O.jsx)(m,{size:13})})]})]}),(0,O.jsxs)(`div`,{className:`pax-row`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#0B2545`},children:`Children`}),(0,O.jsx)(`div`,{style:{fontSize:11,color:`#64748B`},children:`Age 2–12 years`})]}),(0,O.jsxs)(`div`,{className:`pax-counter`,children:[(0,O.jsx)(`button`,{type:`button`,className:`counter-btn`,disabled:I<=0,onClick:()=>L(I-1),children:(0,O.jsx)(p,{size:13})}),(0,O.jsx)(`span`,{style:{fontWeight:800,minWidth:16,textAlign:`center`},children:I}),(0,O.jsx)(`button`,{type:`button`,className:`counter-btn`,onClick:()=>L(I+1),children:(0,O.jsx)(m,{size:13})})]})]}),(0,O.jsxs)(`div`,{className:`pax-row`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#0B2545`},children:`Infants`}),(0,O.jsx)(`div`,{style:{fontSize:11,color:`#64748B`},children:`Below 2 years (Free)`})]}),(0,O.jsxs)(`div`,{className:`pax-counter`,children:[(0,O.jsx)(`button`,{type:`button`,className:`counter-btn`,disabled:R<=0,onClick:()=>z(R-1),children:(0,O.jsx)(p,{size:13})}),(0,O.jsx)(`span`,{style:{fontWeight:800,minWidth:16,textAlign:`center`},children:R}),(0,O.jsx)(`button`,{type:`button`,className:`counter-btn`,onClick:()=>z(R+1),children:(0,O.jsx)(m,{size:13})})]})]}),(0,O.jsx)(`button`,{type:`button`,onClick:()=>V(!1),style:{background:`#0B2545`,color:`#ffffff`,border:`none`,padding:`8px 14px`,borderRadius:10,fontSize:12,fontWeight:800,cursor:`pointer`},children:`Done`})]})]}),(0,O.jsx)(`div`,{children:(0,O.jsxs)(`button`,{type:`submit`,className:`btn-search-trigger`,children:[(0,O.jsx)(o,{size:16}),`Find Live Sailings`]})})]}):(0,O.jsxs)(`div`,{className:`search-fields-grid`,children:[(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(u,{size:13,color:`#F06543`}),`Departure Port / Harbour`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsxs)(`select`,{value:E,onChange:e=>k(e.target.value),className:`field-select`,children:[(0,O.jsx)(`option`,{value:`Port Blair Harbour`,children:`Port Blair Harbour (Phoenix Bay / Haddo)`}),(0,O.jsx)(`option`,{value:`Havelock Island`,children:`Havelock Island (Radhanagar & Coastline)`}),(0,O.jsx)(`option`,{value:`Neil Island`,children:`Neil Island (Bharatpur Sunset)`})]})})]}),(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(h,{size:13,color:`#F06543`}),`Cruise Experience`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsx)(`select`,{value:M,onChange:e=>N(e.target.value),className:`field-select`,children:j.map(e=>(0,O.jsx)(`option`,{value:e,children:e},e))})})]}),(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(g,{size:13,color:`#0B2545`}),`Sailing Date`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsx)(`input`,{type:`date`,required:!0,value:S,onChange:e=>C(e.target.value),className:`field-input`})})]}),(0,O.jsxs)(`div`,{className:`field-group`,children:[(0,O.jsxs)(`label`,{className:`field-label`,children:[(0,O.jsx)(_,{size:13,color:`#0B2545`}),`Guests`]}),(0,O.jsx)(`div`,{className:`field-input-box`,children:(0,O.jsx)(`select`,{value:P,onChange:e=>F(Number(e.target.value)),className:`field-select`,children:[1,2,3,4,5,6,8,10,15,20].map(e=>(0,O.jsxs)(`option`,{value:e,children:[e,` Guest`,e>1?`s`:``]},e))})})]}),(0,O.jsx)(`div`,{children:(0,O.jsxs)(`button`,{type:`submit`,className:`btn-search-trigger`,children:[(0,O.jsx)(o,{size:16}),`Find Cruise Slots`]})})]}),(0,O.jsxs)(`div`,{className:`quick-routes-bar`,children:[(0,O.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:`#64748B`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`Popular Routes:`}),(0,O.jsx)(`button`,{type:`button`,className:`quick-route-pill`,onClick:()=>K(`Port Blair`,`Havelock Island (Swaraj Dweep)`),children:`Port Blair ➔ Havelock (90m)`}),(0,O.jsx)(`button`,{type:`button`,className:`quick-route-pill`,onClick:()=>K(`Havelock Island (Swaraj Dweep)`,`Neil Island (Shaheed Dweep)`),children:`Havelock ➔ Neil Island (45m)`}),(0,O.jsx)(`button`,{type:`button`,className:`quick-route-pill`,onClick:()=>K(`Neil Island (Shaheed Dweep)`,`Port Blair`),children:`Neil Island ➔ Port Blair (60m)`}),(0,O.jsx)(`button`,{type:`button`,className:`quick-route-pill`,onClick:()=>{a(`CRUISE`),e({category:`CRUISE`,experience:`Andaman Sunset Sail (Port Blair Harbour)`,date:S,totalPassengers:H})},children:`🌅 Sunset Catamaran Sail`})]})]})]})]})}var N=[{id:`pb-havelock`,title:`Port Blair ➔ Havelock (Swaraj Dweep)`,subtitle:`The Most Popular Tourist Route in Andaman`,duration:`90 Minutes`,distance:`38 Nautical Miles`,frequency:`8+ Sailings Daily (06:00 AM - 02:00 PM)`,startingPrice:`₹1,650`,operators:[`Makruzz`,`Nautika`,`Green Ocean`,`ITT Majestic`],image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,from:`Port Blair`,to:`Havelock Island (Swaraj Dweep)`,highlights:[`Radhanagar Beach`,`Elephant Beach Scuba`,`Bioluminescent Kayaking`]},{id:`havelock-neil`,title:`Havelock ➔ Neil Island (Shaheed Dweep)`,subtitle:`Short Scenic Ocean Crossing`,duration:`45 Minutes`,distance:`18 Nautical Miles`,frequency:`6+ Sailings Daily (09:00 AM - 03:30 PM)`,startingPrice:`₹1,450`,operators:[`Nautika`,`Makruzz`,`Green Ocean`],image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,from:`Havelock Island (Swaraj Dweep)`,to:`Neil Island (Shaheed Dweep)`,highlights:[`Natural Coral Bridge`,`Laxmanpur Sunset Beach`,`Bharatpur Water Sports`]},{id:`neil-pb`,title:`Neil Island ➔ Port Blair`,subtitle:`Direct Return to Capital Terminal`,duration:`60 Minutes`,distance:`24 Nautical Miles`,frequency:`5+ Sailings Daily (10:30 AM - 04:30 PM)`,startingPrice:`₹1,500`,operators:[`Makruzz`,`Green Ocean`,`ITT Majestic`],image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80`,from:`Neil Island (Shaheed Dweep)`,to:`Port Blair`,highlights:[`Cellular Jail Light & Sound`,`Corbyn’s Cove`,`Airport Transfers`]},{id:`pb-baratang`,title:`Port Blair ➔ Baratang & Middle Andaman`,subtitle:`Mangrove Creeks & Limestone Caves Gateway`,duration:`2h 15m`,distance:`55 Nautical Miles`,frequency:`Daily Express Service`,startingPrice:`₹1,800`,operators:[`Green Ocean`,`Govt DSS Express`],image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80`,from:`Port Blair`,to:`Baratang Island`,highlights:[`Limestone Caves`,`Mud Volcano`,`Tribal Reserve Buffer Zone`]}];function P({onSelectRoute:e}){return(0,O.jsxs)(`section`,{className:`popular-routes-root`,children:[(0,O.jsx)(`style`,{children:`
        .popular-routes-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .routes-hdr-center {
          text-align: center;
          margin-bottom: 36px;
        }

        .routes-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .routes-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .routes-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 860px) {
          .routes-grid-2col { grid-template-columns: 1fr; }
        }

        .route-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(11, 37, 69, 0.04);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .route-card:hover {
          transform: translateY(-4px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.1);
        }

        .route-card-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .route-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .route-card:hover .route-card-img {
          transform: scale(1.05);
        }

        .route-pill-duration {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(10px);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .route-pill-price {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: #F06543;
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
        }

        .route-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .route-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 4px;
        }

        .route-card-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #64748B;
          margin-bottom: 16px;
        }

        .route-specs-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F8FAFC;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 16px;
          font-size: 12px;
        }

        .btn-book-route {
          margin-top: auto;
          background: #F1F5F9;
          border: 1.5px solid #CBD5E1;
          color: #0B2545;
          padding: 10px 18px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .btn-book-route:hover {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          color: #ffffff;
          border-color: #F06543;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.35);
        }
      `}),(0,O.jsxs)(`div`,{className:`routes-hdr-center`,children:[(0,O.jsx)(`div`,{className:`routes-sub`,children:`INTER-ISLAND MARITIME CONNECTIONS`}),(0,O.jsx)(`h2`,{className:`routes-title`,children:`Popular Sea Routes in Andaman`})]}),(0,O.jsx)(`div`,{className:`routes-grid-2col`,children:N.map(t=>(0,O.jsxs)(`div`,{className:`route-card`,children:[(0,O.jsxs)(`div`,{className:`route-card-img-wrap`,children:[(0,O.jsx)(`img`,{src:t.image,alt:t.title,className:`route-card-img`}),(0,O.jsxs)(`div`,{className:`route-pill-duration`,children:[(0,O.jsx)(v,{size:12}),(0,O.jsx)(`span`,{children:t.duration})]}),(0,O.jsxs)(`div`,{className:`route-pill-price`,children:[`From `,t.startingPrice]})]}),(0,O.jsxs)(`div`,{className:`route-card-body`,children:[(0,O.jsx)(`h3`,{className:`route-card-title`,children:t.title}),(0,O.jsx)(`div`,{className:`route-card-sub`,children:t.subtitle}),(0,O.jsxs)(`div`,{className:`route-specs-row`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{style:{color:`#64748B`},children:`Daily Frequency: `}),(0,O.jsxs)(`strong`,{style:{color:`#0B2545`},children:[t.frequency.split(` `)[0],` Sailings`]})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{style:{color:`#64748B`},children:`Operators: `}),(0,O.jsx)(`strong`,{style:{color:`#0B2545`},children:t.operators.join(`, `)})]})]}),(0,O.jsxs)(`button`,{type:`button`,onClick:()=>e(t),className:`btn-book-route`,children:[(0,O.jsx)(`span`,{children:`View Live Departure Slots`}),(0,O.jsx)(a,{size:14})]})]})]},t.id))})]})}function F({items:e=[],searchParams:n={},onSelectSlot:r,onViewDetails:i}){let[o,s]=(0,D.useState)(`ALL`),[c,d]=(0,D.useState)(`ALL`),[p,m]=(0,D.useState)(`ALL`),[h,g]=(0,D.useState)(`EARLIEST`),_=e.filter(e=>{if(o!==`ALL`&&!(e.operator||e.name||``).toLowerCase().includes(o.toLowerCase()))return!1;if(c!==`ALL`){let t=e.departure||e.departureTime||`08:00`,n=parseInt(t.split(`:`)[0],10)||8,r=t.toLowerCase().includes(`pm`),i=r&&n<12?n+12:!r&&n===12?0:n;if(c===`MORNING`&&(i<5||i>=11)||c===`MIDDAY`&&(i<11||i>=14)||c===`AFTERNOON`&&i<14)return!1}return!0}).sort((e,t)=>h===`PRICE_LOW`?(Number(e.price)||0)-(Number(t.price)||0):h===`FASTEST`?(e.duration||``).localeCompare(t.duration||``):(e.departure||e.departureTime||``).localeCompare(t.departure||t.departureTime||``));return(0,O.jsxs)(`section`,{id:`sailing-slots-matrix`,className:`slot-matrix-root`,children:[(0,O.jsx)(`style`,{children:`
        .slot-matrix-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 10px 24px 70px;
        }

        .matrix-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .matrix-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .matrix-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .filters-container {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }

        .filter-group-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-btn-pill {
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 6px 14px;
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn-pill.active {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
        }

        .sort-select {
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          padding: 6px 12px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          cursor: pointer;
        }

        .slot-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 22px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 6px 24px rgba(11, 37, 69, 0.04);
          transition: all 0.25s ease;
          display: grid;
          grid-template-columns: 2fr 2.5fr 2fr 1.6fr;
          align-items: center;
          gap: 24px;
        }

        .slot-card:hover {
          border-color: #F06543;
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.05);
        }

        @media (max-width: 1080px) {
          .slot-card {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 680px) {
          .slot-card {
            grid-template-columns: 1fr;
            padding: 18px;
            gap: 16px;
          }
        }

        .vessel-info-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vessel-operator-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: 8px;
          width: fit-content;
        }

        .badge-makruzz { background: #FFF1EE; color: #F06543; }
        .badge-nautika { background: #E0F2FE; color: #0284C7; }
        .badge-green-ocean { background: #ECFDF5; color: #059669; }
        .badge-cruise { background: #FAF5FF; color: #9333EA; }

        .vessel-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin: 0;
        }

        .vessel-feature-tags {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .feature-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #64748B;
          background: #F1F5F9;
          padding: 2px 8px;
          border-radius: 6px;
        }

        .timing-route-col {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 14px 18px;
        }

        .time-block {
          display: flex;
          flex-direction: column;
        }

        .time-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #0B2545;
        }

        .time-loc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #64748B;
          max-width: 110px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .route-arrow-mid {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .duration-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #F06543;
        }

        .arrow-line {
          width: 55px;
          height: 2px;
          background: linear-gradient(90deg, #F06543, #FF8A65);
          position: relative;
        }

        .arrow-line::after {
          content: '▶';
          position: absolute;
          right: -4px;
          top: -6px;
          font-size: 8px;
          color: #FF8A65;
        }

        .classes-pricing-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .seat-tier-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 6px 10px;
        }

        .tier-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #334155;
        }

        .tier-price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          color: #0B2545;
        }

        .action-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: stretch;
        }

        .btn-select-slot {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 12px 18px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.35);
          transition: all 0.2s ease;
        }

        .btn-select-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(240, 101, 67, 0.5);
        }

        .btn-view-spec {
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 8px 14px;
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .btn-view-spec:hover {
          background: #EEF2F6;
          color: #0B2545;
        }
      `}),(0,O.jsxs)(`div`,{className:`matrix-header`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{className:`matrix-sub`,children:`REAL-TIME ISLAND DEPARTURES & SLOTS`}),(0,O.jsx)(`h2`,{className:`matrix-title`,children:`Available Sailings & Cruise Slots`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:13,color:`#64748B`},children:[(0,O.jsx)(t,{size:16,color:`#10B981`}),(0,O.jsxs)(`span`,{children:[`Showing `,(0,O.jsxs)(`strong`,{children:[_.length,` verified sailings`]})]})]})]}),(0,O.jsxs)(`div`,{className:`filters-container`,children:[(0,O.jsxs)(`div`,{className:`filter-group-row`,children:[(0,O.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:`#64748B`,textTransform:`uppercase`},children:`Fleet:`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${o===`ALL`?`active`:``}`,onClick:()=>s(`ALL`),children:`All Fleets`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${o===`Makruzz`?`active`:``}`,onClick:()=>s(`Makruzz`),children:`Makruzz`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${o===`Nautika`?`active`:``}`,onClick:()=>s(`Nautika`),children:`Nautika`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${o===`Green Ocean`?`active`:``}`,onClick:()=>s(`Green Ocean`),children:`Green Ocean`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${o===`ITT Majestic`?`active`:``}`,onClick:()=>s(`ITT Majestic`),children:`ITT Majestic`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${o===`Cruise`?`active`:``}`,onClick:()=>s(`Cruise`),children:`Sunset & Yachts`})]}),(0,O.jsxs)(`div`,{className:`filter-group-row`,children:[(0,O.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:`#64748B`,textTransform:`uppercase`},children:`Slot:`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${c===`ALL`?`active`:``}`,onClick:()=>d(`ALL`),children:`All Day`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${c===`MORNING`?`active`:``}`,onClick:()=>d(`MORNING`),children:`Morning (06:00 - 11:00)`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${c===`MIDDAY`?`active`:``}`,onClick:()=>d(`MIDDAY`),children:`Midday (11:00 - 14:00)`}),(0,O.jsx)(`button`,{type:`button`,className:`filter-btn-pill ${c===`AFTERNOON`?`active`:``}`,onClick:()=>d(`AFTERNOON`),children:`Sunset (14:00+)`}),(0,O.jsxs)(`select`,{value:h,onChange:e=>g(e.target.value),className:`sort-select`,children:[(0,O.jsx)(`option`,{value:`EARLIEST`,children:`Earliest Departure`}),(0,O.jsx)(`option`,{value:`PRICE_LOW`,children:`Lowest Price`}),(0,O.jsx)(`option`,{value:`FASTEST`,children:`Fastest Transit`})]})]})]}),_.length>0?(0,O.jsx)(`div`,{children:_.map(e=>{let t=e.operator||`Catamaran Liner`;t.toLowerCase().includes(`makruzz`);let o=t.toLowerCase().includes(`nautika`),s=t.toLowerCase().includes(`green ocean`),c=e.category===`CRUISE`||e.type?.toLowerCase().includes(`sunset`)||e.type?.toLowerCase().includes(`private`),d=`badge-makruzz`;o&&(d=`badge-nautika`),s&&(d=`badge-green-ocean`),c&&(d=`badge-cruise`);let f=Number(e.price)||1650,p=e.departure||e.departureTime||`08:30 AM`,m=e.arrival||e.arrivalTime||`10:00 AM`,h=e.from||n.from||`Port Blair`,g=e.to||n.to||`Havelock Island`,_=e.duration||`90 mins`,v=Number(e.availableSeats||e.seatsAvailable||42);return(0,O.jsxs)(`div`,{className:`slot-card`,children:[(0,O.jsxs)(`div`,{className:`vessel-info-col`,children:[(0,O.jsxs)(`div`,{className:`vessel-operator-badge ${d}`,children:[c?(0,O.jsx)(u,{size:12}):(0,O.jsx)(l,{size:12}),(0,O.jsx)(`span`,{children:t})]}),(0,O.jsx)(`h3`,{className:`vessel-title`,children:e.name||e.ferryName||`High-Speed Luxury Liner`}),(0,O.jsxs)(`div`,{className:`vessel-feature-tags`,children:[(0,O.jsx)(`span`,{className:`feature-tag`,children:`AC Deck`}),(0,O.jsx)(`span`,{className:`feature-tag`,children:`Cafeteria`}),(0,O.jsx)(`span`,{className:`feature-tag`,children:`Panoramic Sea Windows`}),v<=25&&(0,O.jsxs)(`span`,{style:{fontSize:10.5,fontWeight:800,color:`#EF4444`,background:`#FEF2F2`,padding:`2px 6px`,borderRadius:4},children:[`⚡ Only `,v,` seats left`]})]})]}),(0,O.jsxs)(`div`,{className:`timing-route-col`,children:[(0,O.jsxs)(`div`,{className:`time-block`,children:[(0,O.jsx)(`span`,{className:`time-val`,children:p}),(0,O.jsx)(`span`,{className:`time-loc`,title:h,children:h})]}),(0,O.jsxs)(`div`,{className:`route-arrow-mid`,children:[(0,O.jsx)(`span`,{className:`duration-text`,children:_}),(0,O.jsx)(`div`,{className:`arrow-line`}),(0,O.jsx)(`span`,{style:{fontSize:10,color:`#94A3B8`,fontWeight:600},children:`Non-Stop`})]}),(0,O.jsxs)(`div`,{className:`time-block`,style:{textAlign:`right`},children:[(0,O.jsx)(`span`,{className:`time-val`,children:m}),(0,O.jsx)(`span`,{className:`time-loc`,title:g,children:g})]})]}),(0,O.jsxs)(`div`,{className:`classes-pricing-col`,children:[(0,O.jsxs)(`div`,{className:`seat-tier-box`,children:[(0,O.jsx)(`span`,{className:`tier-name`,children:t.toLowerCase().includes(`green ocean`)?`Economy / Executive`:t.toLowerCase().includes(`nautika`)?`Luxury Class`:t.toLowerCase().includes(`majestic`)?`Silver Class`:`Premium / Deluxe`}),(0,O.jsxs)(`span`,{className:`tier-price`,children:[`₹`,f.toLocaleString(`en-IN`)]})]}),(0,O.jsxs)(`div`,{className:`seat-tier-box`,style:{background:`#FFF1EE`,borderColor:`#FFD7CC`},children:[(0,O.jsx)(`span`,{className:`tier-name`,style:{color:`#F06543`},children:t.toLowerCase().includes(`majestic`)?`👑 Majesty Deck`:`👑 Royal VIP Lounge`}),(0,O.jsxs)(`span`,{className:`tier-price`,style:{color:`#F06543`},children:[`₹`,(f+(t.toLowerCase().includes(`nautika`)||t.toLowerCase().includes(`majestic`)?300:600)).toLocaleString(`en-IN`)]})]})]}),(0,O.jsxs)(`div`,{className:`action-col`,children:[(0,O.jsxs)(`button`,{type:`button`,onClick:()=>r(e,t.toLowerCase().includes(`green ocean`)?`Economy`:t.toLowerCase().includes(`nautika`)?`Luxury`:`Premium`),className:`btn-select-slot`,children:[(0,O.jsx)(`span`,{children:`Book Slot`}),(0,O.jsx)(a,{size:15})]}),(0,O.jsx)(`button`,{type:`button`,onClick:()=>i(e),className:`btn-view-spec`,children:`Vessel Specs & Deck`})]})]},e.id)})}):(0,O.jsxs)(`div`,{style:{background:`#ffffff`,borderRadius:20,border:`1.5px dashed #CBD5E1`,padding:`48px 24px`,textAlign:`center`},children:[(0,O.jsx)(f,{size:36,color:`#F06543`,style:{margin:`0 auto 12px`}}),(0,O.jsx)(`h3`,{style:{fontSize:18,fontWeight:900,color:`#0B2545`,margin:`0 0 6px`},children:`No Matching Sailings Found`}),(0,O.jsx)(`p`,{style:{fontSize:13,color:`#64748B`,maxWidth:460,margin:`0 auto 18px`},children:`Try selecting an alternate date, removing filters, or choosing one of our popular inter-island routes above.`}),(0,O.jsx)(`button`,{type:`button`,onClick:()=>{s(`ALL`),d(`ALL`)},style:{background:`#0B2545`,color:`#ffffff`,border:`none`,padding:`10px 20px`,borderRadius:12,fontSize:12,fontWeight:800,cursor:`pointer`},children:`Reset All Filters`})]})]})}function I({onBookCruise:e,onViewCruiseDetails:t}){return(0,O.jsxs)(`section`,{className:`luxury-cruise-showcase-root`,children:[(0,O.jsx)(`style`,{children:`
        .luxury-cruise-showcase-root {
          background: linear-gradient(180deg, #07182C 0%, #0B2545 100%);
          color: #ffffff;
          padding: 80px 24px;
        }

        .cruise-inner-wrap {
          max-width: 1240px;
          margin: 0 auto;
        }

        .cruise-hdr-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .cruise-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #FF8A65;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .cruise-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .cruises-grid-3col {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .cruise-exp-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .cruise-exp-card:hover {
          transform: translateY(-4px);
          border-color: rgba(240, 101, 67, 0.6);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(240, 101, 67, 0.2);
        }

        .cruise-card-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .cruise-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cruise-exp-card:hover .cruise-card-img {
          transform: scale(1.06);
        }

        .cruise-type-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #FFB088;
        }

        .cruise-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .cruise-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 6px;
        }

        .cruise-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #CBD5E1;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .cruise-meta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 20px;
          font-size: 12px;
          color: #94A3B8;
        }

        .btn-book-cruise-slot {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.4);
          transition: all 0.2s ease;
          width: 100%;
        }

        .btn-book-cruise-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.6);
        }
      `}),(0,O.jsxs)(`div`,{className:`cruise-inner-wrap`,children:[(0,O.jsxs)(`div`,{className:`cruise-hdr-row`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{className:`cruise-sub`,children:`GOLDEN HOUR & EXCLUSIVE VOYAGES`}),(0,O.jsx)(`h2`,{className:`cruise-title`,children:`Sunset, Starlight & Private Yacht Cruises`})]}),(0,O.jsx)(`p`,{style:{maxWidth:420,color:`#CBD5E1`,fontSize:13,margin:0},children:`Indulge in harbor sunsets, candlelight yacht charters, and coral exploration sails across the Andaman Sea.`})]}),(0,O.jsx)(`div`,{className:`cruises-grid-3col`,children:w.map(t=>(0,O.jsxs)(`div`,{className:`cruise-exp-card`,children:[(0,O.jsxs)(`div`,{className:`cruise-card-img-wrap`,children:[(0,O.jsx)(`img`,{src:t.coverImage||t.image,alt:t.name,className:`cruise-card-img`}),(0,O.jsx)(`div`,{className:`cruise-type-badge`,children:t.type})]}),(0,O.jsxs)(`div`,{className:`cruise-card-body`,children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:4},children:[(0,O.jsx)(`div`,{style:{fontSize:11,fontWeight:800,color:`#FF8A65`,textTransform:`uppercase`},children:t.location}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4,fontSize:12,color:`#FCD34D`,fontWeight:800},children:[(0,O.jsx)(c,{size:13,fill:`#FCD34D`}),(0,O.jsx)(`span`,{children:t.rating||4.9})]})]}),(0,O.jsx)(`h3`,{className:`cruise-card-title`,children:t.name}),(0,O.jsx)(`p`,{className:`cruise-card-desc`,children:t.excerpt||t.description}),(0,O.jsxs)(`div`,{className:`cruise-meta-strip`,children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:5},children:[(0,O.jsx)(v,{size:13,color:`#FF8A65`}),(0,O.jsx)(`span`,{children:t.duration})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{children:`Starting `}),(0,O.jsxs)(`strong`,{style:{color:`#ffffff`,fontSize:14},children:[`₹`,t.startingPrice.toLocaleString(`en-IN`)]})]})]}),(0,O.jsxs)(`button`,{type:`button`,onClick:()=>e({...t,price:t.startingPrice,category:`CRUISE`}),className:`btn-book-cruise-slot`,children:[(0,O.jsx)(u,{size:15}),(0,O.jsx)(`span`,{children:`Book Cruise Slot`}),(0,O.jsx)(a,{size:14})]})]})]},t.id))})]})]})}var L=[{id:`makruzz`,name:`Makruzz Catamarans`,tagline:`Pioneer of Private Luxury Passenger Catamarans in Andaman`,speed:`28–30 Knots`,capacity:`250–330 Passengers`,tiers:[`Premium Class`,`Deluxe Class`,`Royal Luxury Bridge`],description:`Twin-hull high-speed hydrofoil catamarans built to international safety standards, featuring plush pushback seats, panoramic ocean windows, and air-conditioned passenger decks.`,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80`,features:[`100% Fully Air-Conditioned`,`Onboard Hot Snack Bar`,`Live Entertainment Screens`,`VIP Bridge Lounge`,`Luggage Check-in Hold`]},{id:`nautika`,name:`Nautika & Nautika Lite`,tagline:`State-of-the-Art Modern Catamaran Vessels`,speed:`30 Knots Express`,capacity:`210–280 Passengers`,tiers:[`Luxury Class`,`Royal Class`],description:`Built by Damen Shipyards Netherlands, Nautika delivers smooth ocean stabilization with reduced seasickness, whisper-quiet cabin acoustics, and high-speed transit.`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80`,features:[`Active Motion Ride Control`,`Plush Ergonomic Recliners`,`Cafeteria & Juice Bar`,`Panoramic Viewports`,`Priority Baggage Tagging`]},{id:`green-ocean`,name:`Green Ocean 1 & 2`,tagline:`The Only Catamaran with Open Sun Deck & Ocean Music`,speed:`24 Knots`,capacity:`200–290 Passengers`,tiers:[`Executive Class`,`Premium Class`,`Open Deck`],description:`For voyagers who love open-air sea breezes, photography, and open ocean music decks, Green Ocean offers both air-conditioned lower cabins and breezy upper open decks.`,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80`,features:[`Open-Air Ocean View Deck`,`Live Music & Dancing`,`AC Lower Cabins`,`Snack Counter`,`Family Group Seating`]},{id:`itt-majestic`,name:`ITT Majestic`,tagline:`Australian-Designed Sleek High-Speed Express Liner`,speed:`32 Knots High-Speed`,capacity:`200 Passengers`,tiers:[`Silver Class`,`Majestic Gold`],description:`Fastest transit times across Port Blair and Swaraj Dweep with aircraft-style interiors, wide aisles, and panoramic sea views throughout.`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80`,features:[`Fastest Crossing Speeds`,`Aviation Style Seating`,`Refreshment Kiosk`,`Clean Restrooms`,`Express Terminal Boarding`]}];function R({onSelectFleet:e}){let[t,n]=(0,D.useState)(`makruzz`),i=L.find(e=>e.id===t)||L[0];return(0,O.jsxs)(`section`,{className:`fleet-showcase-root`,children:[(0,O.jsx)(`style`,{children:`
        .fleet-showcase-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .fleet-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .fleet-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .fleet-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .fleet-nav-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .fleet-nav-btn {
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          color: #475569;
          padding: 10px 22px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fleet-nav-btn.active {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }

        .fleet-detail-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(11, 37, 69, 0.06);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .fleet-detail-card { grid-template-columns: 1fr; }
        }

        .fleet-img-col {
          position: relative;
          min-height: 340px;
        }

        .fleet-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fleet-content-col {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fleet-name-main {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 6px;
        }

        .fleet-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #F06543;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .fleet-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
          background: #F8FAFC;
          border-radius: 16px;
          padding: 14px 18px;
        }

        .fleet-spec-item {
          font-size: 12.5px;
        }

        .fleet-features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 24px;
        }

        .feature-bullet {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: #334155;
          font-weight: 600;
        }
      `}),(0,O.jsxs)(`div`,{className:`fleet-hdr`,children:[(0,O.jsx)(`div`,{className:`fleet-sub`,children:`THE ANDAMAN MARITIME FLEET`}),(0,O.jsx)(`h2`,{className:`fleet-title`,children:`World-Class Catamarans & Luxury Liners`})]}),(0,O.jsx)(`div`,{className:`fleet-nav-tabs`,children:L.map(e=>(0,O.jsx)(`button`,{type:`button`,className:`fleet-nav-btn ${t===e.id?`active`:``}`,onClick:()=>n(e.id),children:e.name},e.id))}),(0,O.jsxs)(`div`,{className:`fleet-detail-card`,children:[(0,O.jsx)(`div`,{className:`fleet-img-col`,children:(0,O.jsx)(`img`,{src:i.image,alt:i.name,className:`fleet-img`})}),(0,O.jsxs)(`div`,{className:`fleet-content-col`,children:[(0,O.jsx)(`h3`,{className:`fleet-name-main`,children:i.name}),(0,O.jsx)(`div`,{className:`fleet-tagline`,children:i.tagline}),(0,O.jsx)(`p`,{style:{fontSize:13.5,color:`#64748B`,lineHeight:1.6,margin:`0 0 20px`},children:i.description}),(0,O.jsxs)(`div`,{className:`fleet-specs-grid`,children:[(0,O.jsxs)(`div`,{className:`fleet-spec-item`,children:[(0,O.jsx)(`span`,{style:{color:`#64748B`},children:`Cruising Speed: `}),(0,O.jsx)(`strong`,{style:{color:`#0B2545`},children:i.speed})]}),(0,O.jsxs)(`div`,{className:`fleet-spec-item`,children:[(0,O.jsx)(`span`,{style:{color:`#64748B`},children:`Deck Capacity: `}),(0,O.jsx)(`strong`,{style:{color:`#0B2545`},children:i.capacity})]})]}),(0,O.jsx)(`div`,{className:`fleet-features-list`,children:i.features.map(e=>(0,O.jsxs)(`div`,{className:`feature-bullet`,children:[(0,O.jsx)(r,{size:14,color:`#10B981`}),(0,O.jsx)(`span`,{children:e})]},e))}),(0,O.jsxs)(`button`,{type:`button`,onClick:()=>e(i.name.split(` `)[0]),style:{background:`#0B2545`,color:`#ffffff`,border:`none`,padding:`12px 24px`,borderRadius:12,fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,cursor:`pointer`,width:`fit-content`},children:[`Find `,i.name,` Sailings →`]})]})]})]})}var z=[{name:`Phoenix Bay Jetty Terminal`,island:`Port Blair (South Andaman)`,type:`Primary Passenger Hub`,desc:`Main passenger terminal for Makruzz, Nautika, and Green Ocean morning sailings to Havelock and Neil Island.`,reportingTime:`45 mins prior to departure`,facilities:[`Air-Conditioned Waiting Hall`,`Security Screen Gates`,`Luggage Check-in Hold`,`Taxi Stand & Snack Cafes`]},{name:`Haddo Wharf Passenger Terminal`,island:`Port Blair (Deep Sea Pier)`,type:`Express Catamaran & Sunset Pier`,desc:`Deep water harbor pier for sunset cruises, yacht charters, and select high-speed catamaran sailings.`,reportingTime:`45 mins prior to departure`,facilities:[`Harbor View Deck`,`VIP Passenger Lounge`,`Private Cab Drop Zone`,`Direct Ship Gangway`]},{name:`Swaraj Dweep Marine Jetty (Havelock)`,island:`Havelock Island (Govind Nagar)`,type:`Island Gateway Terminal`,desc:`Primary entry pier for all visitors arriving at Havelock Island. Scuba dive boats and speedboats dock adjacent.`,reportingTime:`30 mins prior to departure`,facilities:[`Tourist Information Counter`,`Auto & Rental Bike Stalls`,`Porter Baggage Assistance`,`Shaded Waiting Area`]},{name:`Shaheed Dweep Jetty (Neil Island)`,island:`Neil Island (Bharatpur Pier)`,type:`Serene Island Jetty`,desc:`Gateway to Neil Island beaches and natural rock formation. Crystal clear turquoise water right at the pier.`,reportingTime:`30 mins prior to departure`,facilities:[`Glass Bottom Boat Desk`,`E-Rickshaw & Cab Pickups`,`Local Island Guides`,`Baggage Tagging`]}];function B(){return(0,O.jsxs)(`section`,{className:`terminal-guide-root`,children:[(0,O.jsx)(`style`,{children:`
        .terminal-guide-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .guide-hdr-center {
          text-align: center;
          margin-bottom: 36px;
        }

        .guide-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .guide-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .advisory-strip-banner {
          background: #FFF1EE;
          border: 1.5px solid #FFD7CC;
          border-radius: 18px;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .terminals-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 800px) {
          .terminals-grid-2col { grid-template-columns: 1fr; }
        }

        .terminal-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }

        .term-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #0284C7;
          background: #E0F2FE;
          padding: 2px 8px;
          border-radius: 6px;
          width: fit-content;
          margin-bottom: 8px;
        }

        .term-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 4px;
        }

        .term-island {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #F06543;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .term-facilities-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px dashed #E2E8F0;
        }
      `}),(0,O.jsxs)(`div`,{className:`guide-hdr-center`,children:[(0,O.jsx)(`div`,{className:`guide-sub`,children:`BOARDING & HARBOUR INFORMATION`}),(0,O.jsx)(`h2`,{className:`guide-title`,children:`Andaman Passenger Jetty Terminal Guide`})]}),(0,O.jsxs)(`div`,{className:`advisory-strip-banner`,children:[(0,O.jsx)(n,{size:24,color:`#F06543`}),(0,O.jsxs)(`div`,{style:{flex:1},children:[(0,O.jsx)(`div`,{style:{fontSize:13,fontWeight:900,color:`#0B2545`},children:`Boarding Guidelines & Baggage Allowance Advisory`}),(0,O.jsxs)(`div`,{style:{fontSize:12,color:`#64748B`},children:[`All catamaran operators permit `,(0,O.jsx)(`strong`,{children:`25kg check-in baggage + 7kg cabin luggage`}),` free per passenger. Mandatory original Government Photo ID required for terminal gate security entry.`]})]})]}),(0,O.jsx)(`div`,{className:`terminals-grid-2col`,children:z.map(e=>(0,O.jsxs)(`div`,{className:`terminal-card`,children:[(0,O.jsx)(`div`,{className:`term-tag`,children:e.type}),(0,O.jsx)(`h3`,{className:`term-title`,children:e.name}),(0,O.jsxs)(`div`,{className:`term-island`,children:[`📍 `,e.island]}),(0,O.jsx)(`p`,{style:{fontSize:13,color:`#64748B`,lineHeight:1.5,margin:0},children:e.desc}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontSize:12,fontWeight:800,color:`#0B2545`,marginTop:12},children:[(0,O.jsx)(v,{size:13,color:`#F06543`}),(0,O.jsxs)(`span`,{children:[`Reporting: `,e.reportingTime]})]}),(0,O.jsx)(`div`,{className:`term-facilities-list`,children:e.facilities.map(e=>(0,O.jsxs)(`div`,{style:{fontSize:11.5,color:`#475569`,display:`flex`,alignItems:`center`,gap:4},children:[(0,O.jsx)(`span`,{style:{color:`#10B981`,fontWeight:900},children:`✓`}),(0,O.jsx)(`span`,{children:e})]},e))})]},e.name))})]})}var V=[{q:`What is the difference between private catamaran ferries and government ferries?`,a:`Private catamarans (Makruzz, Nautika, Green Ocean, ITT Majestic) offer high-speed transit (90 mins to Havelock), 100% confirmed online advance seat allocation, fully air-conditioned cabins, and luxury pushback seats. Government DSS ferries operate on open unreserved schedules primarily for local island residents and cannot be booked with guaranteed advance tourist confirmation.`},{q:`How early should I reach the Jetty Terminal before sailing?`,a:`All passengers are required to report at the passenger jetty terminal at least 45 minutes prior to departure for luggage tagging and security screening. Gate closing occurs 15 minutes before departure.`},{q:`Are seat numbers pre-allocated on Andaman catamaran ferries?`,a:`Yes, your seat class (Premium, Deluxe, or Royal) and designated seat number are pre-allocated and printed directly on your confirmed E-Ticket voucher.`},{q:`What happens if a sailing is delayed or cancelled due to bad weather?`,a:`Safety is paramount in the Andaman Sea. If the Port Management Board / Directorate of Shipping Services suspends sailings due to squally weather or cyclone alerts, you receive a 100% full refund or priority auto-rescheduling onto the next safe sailing.`},{q:`Is food and beverage available on board the ferries and sunset cruises?`,a:`Yes, all premier catamarans feature an onboard cafeteria serving hot tea, coffee, packaged juices, fresh sandwiches, snacks, and cookies. Sunset & dinner cruises include complimentary welcome mocktails and gourmet snacks.`},{q:`Do children need separate tickets for ferry sailings?`,a:`Infants under 2 years of age travel free (without a separate seat). Children aged 2 years and above require a standard passenger seat ticket.`}];function H(){let[e,t]=(0,D.useState)(0);return(0,O.jsxs)(`section`,{className:`sea-faq-root`,children:[(0,O.jsx)(`style`,{children:`
        .sea-faq-root {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .faq-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .faq-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .faq-item.active {
          border-color: #F06543;
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.08);
        }

        .faq-question-btn {
          width: 100%;
          padding: 18px 22px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
          gap: 16px;
        }

        .faq-answer-body {
          padding: 0 22px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.6;
          color: #64748B;
        }
      `}),(0,O.jsxs)(`div`,{className:`faq-hdr`,children:[(0,O.jsx)(`div`,{className:`faq-sub`,children:`ANSWERS & MARITIME ADVISORY`}),(0,O.jsx)(`h2`,{className:`faq-title`,children:`Frequently Asked Questions`})]}),(0,O.jsx)(`div`,{className:`faq-accordion-list`,children:V.map((n,r)=>{let a=e===r;return(0,O.jsxs)(`div`,{className:`faq-item ${a?`active`:``}`,children:[(0,O.jsxs)(`button`,{type:`button`,className:`faq-question-btn`,onClick:()=>t(a?-1:r),children:[(0,O.jsx)(`span`,{children:n.q}),(0,O.jsx)(i,{size:18,color:a?`#F06543`:`#64748B`,style:{transform:a?`rotate(180deg)`:`none`,transition:`transform 0.25s ease`,flexShrink:0}})]}),a&&(0,O.jsx)(`div`,{className:`faq-answer-body`,children:n.a})]},r)})})]})}function U(){let[e,t]=(0,D.useState)([]),[n,r]=(0,D.useState)([]),[i,a]=(0,D.useState)(!1),[o,s]=(0,D.useState)(`FERRY`),[c,l]=(0,D.useState)({category:`FERRY`,tripType:`ONE_WAY`,from:`Port Blair`,to:`Havelock Island (Swaraj Dweep)`,departureDate:new Date().toISOString().split(`T`)[0],adults:2,children:0,infants:0,totalPassengers:2}),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(`Premium`),[m,h]=(0,D.useState)(null),g=()=>{a(!0),x.getFerries().then(e=>{if(e.data&&Array.isArray(e.data)&&e.data.length>0){let n=e.data.map((e,t)=>({id:String(e.id||`ferry-${t}`),slug:e.slug||`ferry`,name:e.name||`Catamaran Liner`,operator:e.operator||`Makruzz`,from:e.routes?.[0]?.fromDestination?.name||`Port Blair`,to:e.routes?.[0]?.toDestination?.name||`Havelock Island (Swaraj Dweep)`,departure:t%2==0?`08:30 AM`:`11:30 AM`,arrival:t%2==0?`10:00 AM`:`01:00 PM`,duration:e.routes?.[0]?.duration||`90 mins`,price:Number(e.price||1650),availableSeats:Number(e.capacity||220),category:`FERRY`,status:e.status||`ACTIVE`}));t(n)}else t(E)}).catch(e=>{console.warn(`API sailings fallback:`,e.message),t(E)}).finally(()=>a(!1)),S.getCruises().then(e=>{e.data&&Array.isArray(e.data)&&e.data.length>0?r(e.data):r(w)}).catch(e=>{console.warn(`API cruise fallback:`,e.message),r(w)})};(0,D.useEffect)(()=>{g(),document.title=`Andaman Ferries & Luxury Cruises | Book Live Slots & Schedules`},[]);let _=e=>{l(e),s(e.category||`FERRY`);let t=document.getElementById(`sailing-slots-matrix`);t&&t.scrollIntoView({behavior:`smooth`})},v=(e,t=`Premium`)=>{d(e),p(t)},y=e=>{e.category===`CRUISE`||e.type?.toLowerCase().includes(`sunset`)?window.history.pushState({},``,`/cruises/${e.slug||`andaman-sunset-sail`}`):window.history.pushState({},``,`/ferries/${e.slug||`port-blair-to-havelock`}`),window.dispatchEvent(new PopStateEvent(`popstate`))},b=()=>{let e=document.getElementById(`unified-sea-search-panel`);e&&e.scrollIntoView({behavior:`smooth`})},A=()=>{s(`CRUISE`);let e=document.getElementById(`unified-sea-search-panel`);e&&e.scrollIntoView({behavior:`smooth`})},j=()=>{let e=document.getElementById(`sailing-slots-matrix`);e&&e.scrollIntoView({behavior:`smooth`})},N=o===`CRUISE`?n.map(e=>({...e,category:`CRUISE`,departure:e.departureTimes?.[0]||`17:00 (Sunset)`,arrival:`19:00`,from:e.location||`Port Blair Harbour`,to:`Harbour / Coastal Cruise`,price:e.startingPrice||e.price||2500,operator:`Sunset Cruise Lines`})):e;return(0,O.jsxs)(`div`,{className:`unified-ferries-cruises-page`,children:[(0,O.jsx)(`style`,{children:`
        .unified-ferries-cruises-page {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .booking-toast-box {
          position: fixed;
          top: 90px;
          right: 24px;
          z-index: 3000;
          background: linear-gradient(135deg, #10B981, #059669);
          color: #ffffff;
          padding: 14px 22px;
          border-radius: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
          animation: slideInToast 0.3s ease;
        }

        @keyframes slideInToast {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}),m&&(0,O.jsxs)(`div`,{className:`booking-toast-box`,children:[`✓ `,m]}),(0,O.jsx)(k,{onBookFerry:b,onExploreCruises:A,onViewSchedule:j}),(0,O.jsx)(M,{onSearch:_,activeCategory:o,onCategoryChange:e=>s(e)}),(0,O.jsx)(P,{onSelectRoute:e=>{_({category:`FERRY`,tripType:`ONE_WAY`,from:e.from,to:e.to,departureDate:c.departureDate,adults:c.adults,children:c.children,infants:c.infants,totalPassengers:c.totalPassengers})}}),(0,O.jsx)(F,{items:N,searchParams:c,onSelectSlot:v,onViewDetails:y}),(0,O.jsx)(I,{onBookCruise:e=>v(e,`Royal`),onViewCruiseDetails:y}),(0,O.jsx)(R,{onSelectFleet:e=>{j()}}),(0,O.jsx)(B,{}),(0,O.jsx)(H,{}),(0,O.jsx)(C,{}),u&&(0,O.jsx)(T,{vessel:u,searchParams:c,initialClass:f,onClose:()=>d(null),onBookingSuccess:e=>{h(`Booking confirmed! PNR: ${e.pnr}`),setTimeout(()=>h(null),6e3)}})]})}export{U as default};