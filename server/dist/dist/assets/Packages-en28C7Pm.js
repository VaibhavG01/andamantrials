import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Cn as n,Dn as r,En as i,F as a,Gn as o,K as s,Kt as c,Nn as l,O as u,R as d,Vt as f,Wt as p,X as m,Zn as h,c as g,gn as _,j as v,jn as y,l as b,ln as x,mn as S,n as C,o as w,on as T,ot as E,st as D,v as O,vn as ee,wn as k,xt as A,zt as j}from"./lucide-vendor-CBhgx3NO.js";import{v as M}from"./three-vendor-Md08yeGZ.js";import{n as N,t as P}from"./gsap-vendor-Cgjl6ODA.js";import{s as F}from"./index-CLpzZzGy.js";import{t as I}from"./FooterBottom-yxqnPQVe.js";var L=e(h(),1),R=M();function z({onExplorePackages:e,onPlanTrip:n}){let r=(0,L.useRef)(null);return(0,L.useEffect)(()=>{r.current&&N.fromTo(r.current,{opacity:0,y:30,scale:.97},{opacity:1,y:0,scale:1,duration:.9,ease:`power2.out`,delay:.2})},[]),(0,R.jsxs)(`section`,{className:`pkg-hero-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-hero-root {
          position: relative;
          width: 100%;
          min-height: 75vh;
          max-height: 780px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #020c16;
          overflow: hidden;
          padding: 110px 24px 90px;
          box-sizing: border-box;
        }

        .pkg-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .pkg-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.3);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .pkg-hero-root:hover .pkg-hero-bg img {
          transform: scale(1.08);
        }

        .pkg-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 12, 22, 0.88) 0%,
            rgba(2, 14, 22, 0.48) 50%,
            rgba(2, 12, 22, 0.96) 100%
          );
        }

        .pkg-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 820px; height: 440px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.22) 0%, rgba(13, 148, 136, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        /* Floating ocean particles */
        .pkg-particle {
          position: absolute; width: 3.5px; height: 3.5px;
          background: rgba(45, 212, 191, 0.7); border-radius: 50%;
          z-index: 3; pointer-events: none;
          animation: floatPkgParticle 8s infinite ease-in-out;
        }
        @keyframes floatPkgParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.85; }
        }

        .pkg-hero-content {
          position: relative; z-index: 4; max-width: 900px;
          text-align: center; margin: 0 auto;
        }

        .pkg-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #2dd4bf; background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
        }

        .pkg-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 74px);
          font-weight: 700; color: #ffffff;
          line-height: 1.06; margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .pkg-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 720px;
          font-weight: 400;
        }

        .pkg-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 30px;
        }

        .pkg-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .pkg-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .pkg-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .pkg-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .pkg-stats-pill-row {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #cbd5e1;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .pkg-stat-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(0, 0, 0, 0.35); padding: 5px 14px;
          border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}),(0,R.jsx)(`div`,{className:`pkg-hero-bg`,children:(0,R.jsx)(`img`,{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Luxury Holiday Packages`})}),(0,R.jsx)(`div`,{className:`pkg-hero-overlay`}),(0,R.jsx)(`div`,{className:`pkg-hero-glow`}),(0,R.jsx)(`div`,{className:`pkg-particle`,style:{top:`25%`,left:`15%`,animationDelay:`0s`}}),(0,R.jsx)(`div`,{className:`pkg-particle`,style:{top:`65%`,left:`22%`,animationDelay:`2s`}}),(0,R.jsx)(`div`,{className:`pkg-particle`,style:{top:`35%`,right:`18%`,animationDelay:`4s`}}),(0,R.jsx)(`div`,{className:`pkg-particle`,style:{top:`75%`,right:`28%`,animationDelay:`1.5s`}}),(0,R.jsxs)(`div`,{ref:r,className:`pkg-hero-content`,children:[(0,R.jsxs)(`div`,{className:`pkg-breadcrumb`,children:[(0,R.jsx)(`a`,{href:`/`,style:{color:`#cbd5e1`,textDecoration:`none`},children:`Home`}),(0,R.jsx)(k,{size:13,color:`#2dd4bf`}),(0,R.jsx)(`span`,{children:`HOLIDAY PACKAGES`})]}),(0,R.jsxs)(`h1`,{className:`pkg-hero-title`,children:[`HANDCRAFTED `,(0,R.jsx)(`br`,{}),(0,R.jsx)(`span`,{style:{color:`#2dd4bf`},children:`ANDAMAN TOUR PACKAGES`})]}),(0,R.jsx)(`p`,{className:`pkg-hero-desc`,children:`All-inclusive tropical holiday itineraries with confirmed luxury catamaran ferry passes, beachfront resort stays, PADI scuba diving permits & private island transfers.`}),(0,R.jsxs)(`div`,{className:`pkg-hero-btns`,children:[(0,R.jsxs)(`button`,{onClick:e,className:`pkg-btn-primary`,children:[(0,R.jsx)(`span`,{children:`EXPLORE ALL PACKAGES`}),(0,R.jsx)(o,{size:15})]}),(0,R.jsxs)(`button`,{onClick:n,className:`pkg-btn-sec`,children:[(0,R.jsx)(x,{size:15}),(0,R.jsx)(`span`,{children:`CUSTOM TRIP BUILDER`})]})]}),(0,R.jsxs)(`div`,{className:`pkg-stats-pill-row`,children:[(0,R.jsxs)(`div`,{className:`pkg-stat-pill`,children:[(0,R.jsx)(d,{size:13,color:`#2dd4bf`}),(0,R.jsx)(`span`,{children:`100% Confirmed Catamarans`})]}),(0,R.jsxs)(`div`,{className:`pkg-stat-pill`,children:[(0,R.jsx)(l,{size:13,color:`#ffd700`}),(0,R.jsx)(`span`,{children:`Verified 4★ & 5★ Beach Resorts`})]}),(0,R.jsxs)(`div`,{className:`pkg-stat-pill`,children:[(0,R.jsx)(t,{size:13,color:`#2dd4bf`}),(0,R.jsx)(`span`,{children:`Zero Hidden Fees Guaranteed`})]})]})]})]})}function B({onSearch:e}){let[t,n]=(0,L.useState)(`ALL`),[r,i]=(0,L.useState)(`ALL`),[a,o]=(0,L.useState)(`ALL`),[c,l]=(0,L.useState)(``),[u,d]=(0,L.useState)(2),[f,p]=(0,L.useState)(0);return(0,R.jsxs)(`div`,{className:`pkg-search-wrapper`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-search-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1240px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .pkg-search-card {
          background: #ffffff;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 2px solid #e2e8f0;
          border-radius: 26px;
          padding: 32px 36px;
          box-shadow: 0 24px 60px rgba(0, 45, 98, 0.14), 0 0 30px rgba(240, 101, 67, 0.08);
        }
        @media (max-width: 768px) {
          .pkg-search-card { padding: 22px; }
        }

        .pkg-search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .pkg-search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr;
          gap: 14px; margin-bottom: 24px;
        }
        @media (max-width: 1100px) {
          .pkg-search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pkg-search-grid { grid-template-columns: 1fr; }
        }

        .pkg-search-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .pkg-field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .pkg-field-input-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0B2545;
          outline: none; transition: all 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .pkg-field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.12);
        }

        .pkg-field-select {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none; cursor: pointer;
        }
        .pkg-field-select option {
          background: #ffffff; color: #0B2545;
        }

        .pkg-counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(240, 101, 67, 0.12); border: 1.5px solid rgba(240, 101, 67, 0.3);
          color: #F06543; font-weight: 900; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .pkg-counter-btn:hover { background: #F06543; color: #ffffff; }

        .pkg-search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(240, 101, 67, 0.28);
        }
        .pkg-search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(240, 101, 67, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}),(0,R.jsxs)(`form`,{className:`pkg-search-card`,onSubmit:n=>{n.preventDefault(),e&&e({destination:t,category:r,duration:a,date:c,adults:u,childrenCount:f})},children:[(0,R.jsxs)(`div`,{className:`pkg-search-title`,children:[(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,R.jsx)(s,{size:15,color:`#F06543`}),(0,R.jsx)(`span`,{children:`FIND YOUR DREAM ANDAMAN PACKAGE`})]}),(0,R.jsx)(`span`,{style:{fontSize:11,color:`#64748b`,fontWeight:700,fontFamily:`'Inter', sans-serif`},children:`Real-Time Tour Itineraries`})]}),(0,R.jsxs)(`div`,{className:`pkg-search-grid`,children:[(0,R.jsxs)(`div`,{className:`pkg-search-field`,children:[(0,R.jsx)(`label`,{className:`pkg-field-label`,children:`DESTINATION / ISLAND`}),(0,R.jsxs)(`div`,{className:`pkg-field-input-box`,children:[(0,R.jsx)(A,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,R.jsxs)(`select`,{value:t,onChange:e=>n(e.target.value),className:`pkg-field-select`,children:[(0,R.jsx)(`option`,{value:`ALL`,children:`All Destinations & Islands`}),(0,R.jsx)(`option`,{value:`Port Blair`,children:`Port Blair`}),(0,R.jsx)(`option`,{value:`Havelock`,children:`Havelock Island (Swaraj Dweep)`}),(0,R.jsx)(`option`,{value:`Neil`,children:`Neil Island (Shaheed Dweep)`}),(0,R.jsx)(`option`,{value:`Baratang`,children:`Baratang Island`}),(0,R.jsx)(`option`,{value:`Diglipur`,children:`Diglipur & North Andaman`}),(0,R.jsx)(`option`,{value:`Ross`,children:`Ross Island (Netaji Dweep)`})]})]})]}),(0,R.jsxs)(`div`,{className:`pkg-search-field`,children:[(0,R.jsx)(`label`,{className:`pkg-field-label`,children:`HOLIDAY THEME`}),(0,R.jsxs)(`div`,{className:`pkg-field-input-box`,children:[(0,R.jsx)(j,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,R.jsxs)(`select`,{value:r,onChange:e=>i(e.target.value),className:`pkg-field-select`,children:[(0,R.jsx)(`option`,{value:`ALL`,children:`All Themes & Packages`}),(0,R.jsx)(`option`,{value:`HONEYMOON`,children:`Honeymoon & Romantic (Beachfront Villa)`}),(0,R.jsx)(`option`,{value:`FAMILY`,children:`Family & Relaxed Island Vacation`}),(0,R.jsx)(`option`,{value:`ADVENTURE`,children:`Adventure & Scuba Diving Tours`}),(0,R.jsx)(`option`,{value:`LUXURY`,children:`Luxury Private Island Charters`}),(0,R.jsx)(`option`,{value:`BUDGET`,children:`Budget & Backpackers Escapes`})]})]})]}),(0,R.jsxs)(`div`,{className:`pkg-search-field`,children:[(0,R.jsx)(`label`,{className:`pkg-field-label`,children:`TRIP DURATION`}),(0,R.jsxs)(`div`,{className:`pkg-field-input-box`,children:[(0,R.jsx)(S,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,R.jsxs)(`select`,{value:a,onChange:e=>o(e.target.value),className:`pkg-field-select`,children:[(0,R.jsx)(`option`,{value:`ALL`,children:`All Durations`}),(0,R.jsx)(`option`,{value:`SHORT`,children:`Short Break (3–4 Days)`}),(0,R.jsx)(`option`,{value:`MEDIUM`,children:`Standard Vacation (5–6 Days)`}),(0,R.jsx)(`option`,{value:`LONG`,children:`Grand Island Hop (7+ Days)`})]})]})]}),(0,R.jsxs)(`div`,{className:`pkg-search-field`,children:[(0,R.jsx)(`label`,{className:`pkg-field-label`,children:`TRAVEL DATE / MONTH`}),(0,R.jsxs)(`div`,{className:`pkg-field-input-box`,children:[(0,R.jsx)(y,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,R.jsx)(`input`,{type:`date`,value:c,onChange:e=>l(e.target.value),style:{background:`transparent`,border:`none`,color:`#0B2545`,outline:`none`,fontFamily:`'Inter', sans-serif`,fontSize:13,fontWeight:600,width:`100%`}})]})]}),(0,R.jsxs)(`div`,{className:`pkg-search-field`,children:[(0,R.jsx)(`label`,{className:`pkg-field-label`,children:`GUEST TRAVELERS`}),(0,R.jsxs)(`div`,{className:`pkg-field-input-box`,style:{justifyContent:`space-between`},children:[(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,R.jsx)(b,{size:16,color:`#F06543`}),(0,R.jsxs)(`span`,{style:{fontSize:13,fontWeight:700,color:`#0B2545`},children:[u,` Ad`,f>0?`, ${f} Ch`:``]})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,R.jsx)(`button`,{type:`button`,className:`pkg-counter-btn`,onClick:()=>d(Math.max(1,u-1)),title:`Decrease Adults`,children:`-`}),(0,R.jsx)(`button`,{type:`button`,className:`pkg-counter-btn`,onClick:()=>d(u+1),title:`Increase Adults`,children:`+`})]})]})]})]}),(0,R.jsxs)(`button`,{type:`submit`,className:`pkg-search-submit-btn`,children:[(0,R.jsx)(`span`,{children:`SEARCH HOLIDAY PACKAGES`}),(0,R.jsx)(s,{size:15})]})]})]})}function V({pkg:e,onViewDetails:t,onPlanTrip:n}){if(!e)return null;let i=e.name||`6D/5N Classic Havelock & Neil Luxury Escape`,a=e.duration||`6 Days / 5 Nights`,s=Number(e.rating||4.9).toFixed(1),f=e.reviewsCount||380,p=e.heroImage||e.image||`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85`,m=typeof e.price==`number`?e.price:parseInt(String(e.price||`28500`).replace(/,/g,``)),h=e.originalPrice?Number(e.originalPrice):Math.round(m*1.25),_=Array.isArray(e.tags)?e.tags:[`Private Catamaran Transfers`,`4★ Beachfront Luxury Resort`,`Radhanagar Sunset Tour`,`Complimentary Scuba Dive Trial`];return(0,R.jsxs)(`section`,{className:`featured-pkg-root`,children:[(0,R.jsx)(`style`,{children:`
        .featured-pkg-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .featured-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0, 45, 98, 0.08);
          transition: all 0.35s ease;
        }
        .featured-pkg-card:hover {
          border-color: #F06543;
          box-shadow: 0 25px 60px rgba(0, 45, 98, 0.14);
        }
        @media (max-width: 960px) {
          .featured-pkg-card { grid-template-columns: 1fr; padding: 24px; }
        }

        .featured-pkg-img-box {
          position: relative;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
        }
        .featured-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.65s ease;
        }
        .featured-pkg-card:hover .featured-pkg-img-box img {
          transform: scale(1.06);
        }

        .featured-pkg-badges {
          position: absolute; top: 16px; left: 16px;
          display: flex; align-items: center; gap: 8px; z-index: 2;
        }

        .pkg-fire-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
          text-transform: uppercase;
        }

        .pkg-sub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 6px 12px; border-radius: 20px;
          border: 1px solid #e2e8f0;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .pkg-img-footer {
          position: absolute; bottom: 16px; left: 16px; right: 16px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          padding: 12px 18px; border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          display: flex; align-items: center; justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .pkg-metrics-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; margin: 18px 0;
        }

        .pkg-metric-box {
          background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 16px; padding: 12px; text-align: center;
        }

        .pkg-spotlight-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 15px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; width: 100%;
          box-shadow: 0 8px 28px rgba(0, 45, 98, 0.25);
        }
        .pkg-spotlight-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,R.jsxs)(`div`,{className:`featured-pkg-card`,children:[(0,R.jsxs)(`div`,{className:`featured-pkg-img-box`,children:[(0,R.jsx)(`img`,{src:p,alt:i}),(0,R.jsxs)(`div`,{className:`featured-pkg-badges`,children:[(0,R.jsxs)(`div`,{className:`pkg-fire-badge`,children:[(0,R.jsx)(c,{size:13,className:`fill-white`}),(0,R.jsx)(`span`,{children:`BESTSELLER ITINERARY`})]}),(0,R.jsx)(`div`,{className:`pkg-sub-badge`,children:`100% CUSTOMIZABLE`})]}),(0,R.jsxs)(`div`,{className:`pkg-img-footer`,children:[(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,R.jsx)(S,{size:14,color:`#F06543`}),(0,R.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#0B2545`},children:a})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,R.jsx)(u,{size:14,className:`fill-[#ffd700] text-[#ffd700]`}),(0,R.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#0B2545`},children:[s,` (`,f,` reviews)`]})]})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2 shadow-sm`,children:[(0,R.jsx)(v,{size:12,className:`text-[#ffd700]`}),(0,R.jsx)(`span`,{children:`ITINERARY SPOTLIGHT`})]}),(0,R.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(28px, 4vw, 42px)`,fontWeight:700,color:`#0B2545`,margin:`4px 0 8px`,lineHeight:1.15},children:i}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#F06543`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:12},children:[(0,R.jsx)(A,{size:13,color:`#F06543`}),(0,R.jsx)(`span`,{children:e.destinations||`Port Blair • Havelock • Neil Island`})]}),(0,R.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#64748b`,lineHeight:1.6,marginBottom:16},children:e.description||`Explore Asia’s top-rated Radhanagar Beach, witness Howrah Natural Rock Bridge arches, take high-speed catamaran ferries & relax in luxury oceanfront resorts.`}),(0,R.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:16},children:_.slice(0,4).map((e,t)=>(0,R.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:4,background:`#FFF0EB`,border:`1px solid rgba(13,148,136,0.3)`,color:`#F06543`,fontSize:11.5,fontWeight:700,padding:`4px 10px`,borderRadius:10},children:[(0,R.jsx)(r,{size:12}),(0,R.jsx)(`span`,{children:e})]},t))}),(0,R.jsxs)(`div`,{className:`pkg-metrics-grid`,children:[(0,R.jsxs)(`div`,{className:`pkg-metric-box`,children:[(0,R.jsxs)(`div`,{style:{fontSize:10,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,marginBottom:4},children:[(0,R.jsx)(d,{size:12,color:`#F06543`}),` Catamaran`]}),(0,R.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:900,color:`#0B2545`},children:`Makruzz / Nautika`})]}),(0,R.jsxs)(`div`,{className:`pkg-metric-box`,children:[(0,R.jsxs)(`div`,{style:{fontSize:10,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,marginBottom:4},children:[(0,R.jsx)(l,{size:12,color:`#F06543`}),` Stay Tier`]}),(0,R.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:900,color:`#0B2545`},children:`4★ & 5★ Resorts`})]}),(0,R.jsxs)(`div`,{className:`pkg-metric-box`,children:[(0,R.jsxs)(`div`,{style:{fontSize:10,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,marginBottom:4},children:[(0,R.jsx)(g,{size:12,color:`#F06543`}),` Meal Plan`]}),(0,R.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:900,color:`#F06543`},children:`Daily Breakfast`})]})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:16,paddingTop:10,borderTop:`1.5px solid #f1f5f9`},children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`span`,{style:{fontSize:11,color:`#94a3b8`,textDecoration:`line-through`,display:`block`,fontWeight:700,fontFamily:`'Space Grotesk', sans-serif`},children:[`₹`,h.toLocaleString()]}),(0,R.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:24,fontWeight:900,color:`#0B2545`},children:[`₹`,m.toLocaleString(),` `,(0,R.jsx)(`span`,{style:{fontSize:12,color:`#64748b`,fontWeight:600},children:`/ adult`})]})]}),(0,R.jsx)(`span`,{style:{background:`#FFF0EB`,border:`1.5px solid #F06543`,color:`#F06543`,fontSize:11,fontWeight:900,padding:`5px 12px`,borderRadius:12,fontFamily:`'Space Grotesk', sans-serif`},children:`SAVE 20% TODAY`})]}),(0,R.jsxs)(`button`,{onClick:()=>{t&&t(e)},className:`pkg-spotlight-btn`,children:[(0,R.jsx)(`span`,{children:`VIEW FULL DAY-BY-DAY ITINERARY`}),(0,R.jsx)(o,{size:15})]})]})]})]})}N.registerPlugin(P);var H=[{id:`honeymoon`,filterValue:`HONEYMOON`,title:`Honeymoon & Romantic Escapes`,desc:`Private pool villas, candlelit beach dinners by the turquoise surf, flower bed decor and sunset cruises in Havelock & Neil.`,badge:`COUPLES CHOICE`,icon:j,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,itemCount:`12 Curated Packages`},{id:`family`,filterValue:`FAMILY`,title:`Family Island Vacations`,desc:`Relaxed island hops with kid-friendly shallow beaches, glass-bottom coral boats, Cellular Jail sound & light show, and spacious family suites.`,badge:`ALL AGES`,icon:b,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,itemCount:`16 Family Itineraries`},{id:`adventure`,filterValue:`ADVENTURE`,title:`Adventure & Scuba Diving`,desc:`Adrenaline-packed dive tours, deep sea Dixon’s Pinnacle expeditions, Seakart self-drive, bioluminescent night kayaking and jungle hikes.`,badge:`HIGH ADRENALINE`,icon:x,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,itemCount:`10 Action Tours`},{id:`luxury`,filterValue:`LUXURY`,title:`5★ Luxury Private Charters`,desc:`Bespoke Taj Exotica & Barefoot luxury retreats, Makruzz Royal Class catamaran cabins, private helicopter transfers & champagne sunset yachts.`,badge:`ULTRA LUXURY`,icon:v,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80`,itemCount:`8 Exclusive Packages`},{id:`budget`,filterValue:`BUDGET`,title:`Value & Backpacker Escapes`,desc:`Cost-effective island hopping with verified boutique eco-resorts, scheduled catamaran seats, rented scooters and self-guided beach trails.`,badge:`BEST VALUE`,icon:w,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80`,itemCount:`6 Pocket-Friendly Trips`},{id:`eco-nature`,filterValue:`EXPLORER`,title:`Wild Eco & Mangrove Safaris`,desc:`Offbeat expeditions through Baratang stalactite caves, Ross & Smith twin sandbars in Diglipur, and Cuthbert Bay sea turtle nesting.`,badge:`NATURE TRAILS`,icon:O,image:`https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=800&q=80`,itemCount:`7 Offbeat Safaris`}];function U({onSelectCategory:e}){let t=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(!t.current)return;let e=t.current.querySelectorAll(`.cat-pkg-card`);N.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.7,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 85%`}})},[]),(0,R.jsxs)(`section`,{className:`pkg-categories-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-categories-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .pkg-cat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-cat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .pkg-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 1024px) {
          .pkg-cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .pkg-cat-grid { grid-template-columns: 1fr; }
        }

        .cat-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-pkg-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .cat-pkg-img-box {
          position: relative; height: 200px; overflow: hidden; background: #f1f5f9;
        }
        .cat-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-pkg-card:hover .cat-pkg-img-box img {
          transform: scale(1.1);
        }

        .cat-pkg-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .cat-pkg-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1.5px solid #e2e8f0;
          padding: 4px 12px; border-radius: 14px;
        }

        .cat-pkg-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-pkg-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 900; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-pkg-card:hover .cat-pkg-card-title { color: #F06543; }

        .cat-pkg-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px; font-weight: 500;
        }

        .cat-pkg-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          letter-spacing: 0.05em;
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-cat-eyebrow`,children:[(0,R.jsx)(x,{size:14,color:`#F06543`}),(0,R.jsx)(`span`,{children:`HOLIDAY EXPERIENCES & THEMES`})]}),(0,R.jsx)(`h2`,{className:`pkg-cat-title`,children:`CHOOSE YOUR TRAVEL STYLE`}),(0,R.jsx)(`div`,{ref:t,className:`pkg-cat-grid`,children:H.map(t=>{let n=t.icon;return(0,R.jsxs)(`div`,{className:`cat-pkg-card`,onClick:()=>e&&e(t.filterValue),children:[(0,R.jsxs)(`div`,{className:`cat-pkg-img-box`,children:[(0,R.jsx)(`img`,{src:t.image,alt:t.title}),(0,R.jsx)(`div`,{className:`cat-pkg-icon-badge`,children:(0,R.jsx)(n,{size:18})}),(0,R.jsx)(`div`,{className:`cat-pkg-duration-badge`,children:t.itemCount})]}),(0,R.jsxs)(`div`,{className:`cat-pkg-body`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`div`,{className:`cat-pkg-card-title`,children:t.title}),(0,R.jsx)(`p`,{className:`cat-pkg-card-desc`,children:t.desc})]}),(0,R.jsxs)(`div`,{className:`cat-pkg-card-footer`,children:[(0,R.jsx)(`span`,{children:`EXPLORE PACKAGES`}),(0,R.jsx)(o,{size:14})]})]})]},t.id)})})]})}N.registerPlugin(P);var W=[{id:`short`,filterValue:`SHORT`,duration:`3D / 2N Express`,name:`SHORT ISLAND BREAK`,badge:`QUICK GETAWAY`,rating:`4.8`,desc:`Perfect weekend escape covering Cellular Jail, Ross Island ruins, and a day trip to world-famous Radhanagar Beach in Havelock.`,highlights:[`Port Blair & Havelock Ferry`,`Radhanagar Sunset`,`Cellular Jail Memorial`],startingPrice:`₹12,999`},{id:`medium`,filterValue:`MEDIUM`,duration:`5D / 4N Highlights`,name:`CLASSIC ISLAND TRIO`,badge:`MOST POPULAR`,rating:`4.9`,desc:`The essential Andaman holiday covering Port Blair, 2 nights in Havelock & 1 night in tranquil Neil Island with private catamarans.`,highlights:[`Havelock Beach Resort`,`Neil Howrah Rock Bridge`,`Elephant Reef Snorkel`],startingPrice:`₹21,500`},{id:`bestseller`,filterValue:`MEDIUM`,duration:`6D / 5N Bestseller`,name:`LUXURY ISLAND HOP`,badge:`BESTSELLER #1`,rating:`4.9`,desc:`Our flagship luxury holiday: 2N Havelock, 1N Neil & 2N Port Blair with complimentary scuba trial, candlelit dinner & sunrise cruises.`,highlights:[`Makruzz Luxury Catamarans`,`4★ Beachfront Resorts`,`Complimentary Scuba Dive`],startingPrice:`₹28,500`},{id:`long`,filterValue:`LONG`,duration:`7D / 6N Grand Hop`,name:`GRAND ARCHIPELAGO`,badge:`COMPLETE EXPEDITION`,rating:`4.9`,desc:`Complete expedition including Port Blair, Havelock, Neil and a wild jungle day safari to Baratang limestone caves & mud volcanoes.`,highlights:[`Baratang Mangrove Safari`,`Limestone Caves Trek`,`Deep Reef Scuba Dives`],startingPrice:`₹36,999`}];function G({onSelectDuration:e}){let[t,n]=(0,L.useState)(W[2].id),i=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(!i.current)return;let e=i.current.querySelectorAll(`.pkg-hub-card`);N.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`,scrollTrigger:{trigger:i.current,start:`top 85%`}})},[]),(0,R.jsxs)(`section`,{className:`pkg-duration-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-duration-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .pkg-duration-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-duration-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .pkg-duration-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .pkg-duration-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .pkg-duration-grid { grid-template-columns: 1fr; }
        }

        .pkg-hub-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .pkg-hub-card:hover, .pkg-hub-card.active {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.14);
        }
        .pkg-hub-card.active {
          background: #FFF0EB;
        }

        .pkg-hub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.08em;
          color: #F06543; background: #FFF0EB;
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid rgba(13, 148, 136, 0.3);
          display: inline-block; margin-bottom: 12px; text-transform: uppercase;
        }

        .pkg-hub-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          line-height: 1.3; margin: 0 0 4px;
        }

        .pkg-hub-spot {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #F06543;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 12px; text-transform: uppercase;
        }

        .pkg-hub-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin-bottom: 16px; font-weight: 500;
        }

        .pkg-highlights-list {
          display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
          padding-top: 12px; border-top: 1.5px solid #f1f5f9;
        }
        .pkg-highlight-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #334155; font-weight: 600;
        }

        .pkg-hub-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 900;
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-duration-eyebrow`,children:[(0,R.jsx)(S,{size:14,color:`#F06543`}),(0,R.jsx)(`span`,{children:`CURATED TRIP DURATIONS`})]}),(0,R.jsx)(`h2`,{className:`pkg-duration-title`,children:`EXPLORE PACKAGES BY DURATION`}),(0,R.jsx)(`div`,{ref:i,className:`pkg-duration-grid`,children:W.map(i=>{let a=t===i.id;return(0,R.jsxs)(`div`,{className:`pkg-hub-card${a?` active`:``}`,onClick:()=>{n(i.id),e&&e(i.filterValue)},children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,R.jsx)(`span`,{className:`pkg-hub-badge`,children:i.badge}),(0,R.jsxs)(`div`,{className:`flex items-center gap-1 text-[#ffd700] text-xs font-mono font-bold`,children:[(0,R.jsx)(u,{size:11,className:`fill-[#ffd700]`}),(0,R.jsx)(`span`,{children:i.rating})]})]}),(0,R.jsx)(`div`,{className:`pkg-hub-title`,children:i.name}),(0,R.jsxs)(`div`,{className:`pkg-hub-spot`,children:[(0,R.jsx)(S,{size:11}),(0,R.jsx)(`span`,{children:i.duration})]}),(0,R.jsx)(`p`,{className:`pkg-hub-desc`,children:i.desc}),(0,R.jsx)(`div`,{className:`pkg-highlights-list`,children:i.highlights.map((e,t)=>(0,R.jsxs)(`div`,{className:`pkg-highlight-item`,children:[(0,R.jsx)(r,{size:12,color:`#F06543`}),(0,R.jsx)(`span`,{children:e})]},t))})]}),(0,R.jsxs)(`div`,{className:`pkg-hub-footer`,children:[(0,R.jsxs)(`span`,{style:{color:`#F06543`,display:`flex`,alignItems:`center`,gap:4,fontFamily:`'Inter', sans-serif`,fontSize:11.5,fontWeight:700},children:[`Starts `,i.startingPrice]}),(0,R.jsxs)(`span`,{style:{color:`#0B2545`,display:`flex`,alignItems:`center`,gap:4},children:[(0,R.jsx)(`span`,{children:`FILTER`}),(0,R.jsx)(o,{size:13})]})]})]},i.id)})})]})}function K({pkg:e,isWishlisted:t,onToggleWishlist:n,onViewDetails:i}){if(!e)return null;let a=()=>{i?i(e):(window.history.pushState({},``,`/package-details?id=${e.id||e._id}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`}))},s=e.name||`Classic Andaman Island Hop`,c=e.duration||`6D / 5N`,l=(e.category||`BESTSELLER`).toUpperCase(),d=Number(e.rating||4.9).toFixed(1),f=e.reviewsCount||120,p=e.destinations||`Port Blair • Havelock • Neil`,m=typeof e.price==`number`?e.price:parseInt(String(e.price||`28500`).replace(/,/g,``));e.originalPrice?Number(e.originalPrice):Math.round(m*1.25);let h=e.image||e.heroImage||`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,g=[`Catamaran Ferry`,`4★ Beach Resort`];if(Array.isArray(e.tags)&&e.tags.length>0)g=e.tags;else if(typeof e.tags==`string`&&e.tags.trim())try{let t=JSON.parse(e.tags);Array.isArray(t)&&(g=t)}catch{g=e.tags.split(`,`).map(e=>e.trim())}return(0,R.jsxs)(`div`,{className:`pkg-card-root`,onClick:a,children:[(0,R.jsx)(`style`,{children:`
        .pkg-card-root {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .pkg-card-root:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .pkg-card-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .pkg-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pkg-card-root:hover .pkg-card-img-box img {
          transform: scale(1.08);
        }

        .pkg-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          padding: 5px 14px;
          border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          text-transform: uppercase;
        }

        .pkg-card-wishlist {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          z-index: 5;
        }
        .pkg-card-wishlist:hover {
          color: #ff4f7b;
          background: #ffffff;
          border-color: #ff4f7b;
          transform: scale(1.1);
        }

        .pkg-card-body {
          padding: 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pkg-card-location {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pkg-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .pkg-card-root:hover .pkg-card-title {
          color: #F06543;
        }

        .pkg-card-desc {
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pkg-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .pkg-chip {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 9px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pkg-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #475569;
          padding-top: 14px;
          border-top: 1.5px solid #f1f5f9;
        }

        .pkg-card-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 900;
          color: #0B2545;
          background: #FFF0EB;
          border: 2px solid #F06543;
          padding: 12px 16px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s ease;
          width: 100%;
          margin-top: 14px;
          letter-spacing: 0.04em;
        }

        .pkg-card-root:hover .pkg-card-btn {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(0, 45, 98, 0.28);
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-card-img-box`,children:[(0,R.jsx)(`img`,{src:h,alt:s}),(0,R.jsx)(`span`,{className:`pkg-card-badge`,children:l}),(0,R.jsx)(`button`,{onClick:t=>{t.stopPropagation(),n&&n(e.id||e._id,t)},className:`pkg-card-wishlist`,title:`Save to Wishlist`,children:(0,R.jsx)(j,{className:`w-3.5 h-3.5 ${t?`fill-[#ff4f7b] text-[#ff4f7b]`:``}`})})]}),(0,R.jsxs)(`div`,{className:`pkg-card-body`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`pkg-card-location`,children:[(0,R.jsx)(A,{size:11,color:`#F06543`}),(0,R.jsx)(`span`,{children:p})]}),(0,R.jsx)(`div`,{className:`pkg-card-title`,children:s}),(0,R.jsx)(`p`,{className:`pkg-card-desc`,children:e.description||`All-inclusive Andaman itinerary featuring confirmed private catamarans, luxury resort stays & guided beach excursions.`}),(0,R.jsx)(`div`,{className:`pkg-card-chips`,children:g.slice(0,2).map((e,t)=>(0,R.jsxs)(`span`,{className:`pkg-chip`,children:[(0,R.jsx)(r,{size:11,color:`#F06543`}),(0,R.jsx)(`span`,{children:e})]},t))}),(0,R.jsxs)(`div`,{className:`pkg-card-meta`,children:[(0,R.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,R.jsx)(S,{size:12,color:`#F06543`}),c]}),(0,R.jsx)(`span`,{style:{color:`#94a3b8`},children:`•`}),(0,R.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,R.jsx)(u,{size:12,className:`fill-[#ffd700] text-[#ffd700]`}),d,` (`,f,`)`]}),(0,R.jsx)(`span`,{style:{color:`#94a3b8`},children:`•`}),(0,R.jsxs)(`span`,{className:`font-mono text-sm font-black text-[#0B2545]`,children:[`₹`,m>0?m.toLocaleString():`Enquire`]})]})]}),(0,R.jsxs)(`button`,{className:`pkg-card-btn`,onClick:e=>{e.stopPropagation(),a()},children:[(0,R.jsx)(`span`,{children:`EXPLORE ITINERARY`}),(0,R.jsx)(o,{size:13})]})]})]})}var q=[{id:`ALL`,label:`ALL PACKAGES`},{id:`HONEYMOON`,label:`HONEYMOON`},{id:`FAMILY`,label:`FAMILY & LEISURE`},{id:`ADVENTURE`,label:`ADVENTURE & SCUBA`},{id:`LUXURY`,label:`5★ LUXURY`},{id:`BUDGET`,label:`BUDGET`}],J=[{id:`ALL`,label:`All Durations`},{id:`SHORT`,label:`3–4 Days`},{id:`MEDIUM`,label:`5–6 Days`},{id:`LONG`,label:`7+ Days`}],Y=[{id:`ALL`,label:`All Islands`},{id:`Port Blair`,label:`Port Blair`},{id:`Havelock`,label:`Havelock Island`},{id:`Neil`,label:`Neil Island`},{id:`Baratang`,label:`Baratang`},{id:`Diglipur`,label:`Diglipur`}];function X({packages:e=[],loading:t=!1,error:n=``,selectedCategory:r=`ALL`,onSelectCategory:i,selectedDuration:a=`ALL`,onSelectDuration:o,selectedDestination:c=`ALL`,onSelectDestination:l,searchQuery:u=``,onSearchChange:d,sortBy:f=`RECOMMENDED`,onChangeSortBy:h,onResetFilters:g,savedWishlist:_={},onToggleWishlist:v,onViewDetails:y,onRetry:b}){return(0,R.jsxs)(`section`,{className:`pkg-grid-section-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-grid-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 20px 24px 80px;
        }

        .pkg-grid-filter-bar {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.05);
          margin-bottom: 24px;
        }

        .pkg-filter-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .pkg-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748b;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          padding: 8px 16px;
          border-radius: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s ease;
          outline: none;
        }
        .pkg-tab-btn:hover {
          color: #0B2545;
          border-color: #F06543;
          background: #FFF0EB;
        }
        .pkg-tab-btn.active {
          color: #ffffff;
          background: #0B2545;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.25);
        }

        .pkg-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .pkg-grid-search-input {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #0B2545;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 9px 14px 9px 36px;
          outline: none;
          width: 220px;
          transition: all 0.25s ease;
        }
        .pkg-grid-search-input:focus {
          border-color: #F06543;
          background: #ffffff;
          width: 260px;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .pkg-sort-select {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #0B2545;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 9px 14px;
          outline: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .pkg-sort-select:focus {
          border-color: #F06543;
        }

        .pkg-duration-sub-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .pkg-dur-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #64748b;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          padding: 6px 14px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pkg-dur-pill:hover {
          border-color: #F06543;
          color: #0B2545;
        }
        .pkg-dur-pill.active {
          background: #F06543;
          color: #ffffff;
          border-color: #F06543;
          box-shadow: 0 2px 8px rgba(13, 148, 136, 0.25);
        }

        .pkg-results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .pkg-results-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 820px) {
          .pkg-results-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .pkg-results-grid { grid-template-columns: 1fr; }
        }

        .pkg-section-title-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-grid-filter-bar`,children:[(0,R.jsxs)(`div`,{className:`pkg-filter-tabs`,children:[(0,R.jsxs)(`span`,{className:`text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mr-1 font-mono flex items-center gap-1`,children:[(0,R.jsx)(p,{size:12,color:`#F06543`}),` THEME:`]}),q.map(e=>(0,R.jsx)(`button`,{type:`button`,onClick:()=>i&&i(e.id),className:`pkg-tab-btn ${r===e.id?`active`:``}`,children:e.label},e.id))]}),(0,R.jsxs)(`div`,{className:`flex items-center gap-3 w-full sm:w-auto`,children:[(0,R.jsxs)(`div`,{className:`pkg-search-box flex-1 sm:flex-none`,children:[(0,R.jsx)(`input`,{type:`text`,placeholder:`Search packages, islands...`,value:u,onChange:e=>d&&d(e.target.value),className:`pkg-grid-search-input`}),(0,R.jsx)(s,{className:`absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-3.5 h-3.5`}),u&&(0,R.jsx)(`button`,{type:`button`,onClick:()=>d&&d(``),className:`absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700`,children:(0,R.jsx)(C,{size:14})})]}),(0,R.jsxs)(`select`,{value:f,onChange:e=>h&&h(e.target.value),className:`pkg-sort-select`,children:[(0,R.jsx)(`option`,{value:`RECOMMENDED`,children:`Recommended`}),(0,R.jsx)(`option`,{value:`RATING`,children:`Highest Rated`}),(0,R.jsx)(`option`,{value:`PRICE_LOW`,children:`Price: Low to High`}),(0,R.jsx)(`option`,{value:`PRICE_HIGH`,children:`Price: High to Low`})]})]})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,marginBottom:28},children:[(0,R.jsxs)(`div`,{className:`pkg-duration-sub-bar`,style:{marginBottom:0},children:[(0,R.jsxs)(`span`,{style:{fontSize:11,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,gap:4,marginRight:6},children:[(0,R.jsx)(`span`,{style:{color:`#F06543`},children:`📍`}),` Island:`]}),Y.map(e=>(0,R.jsx)(`button`,{type:`button`,onClick:()=>l&&l(e.id),className:`pkg-dur-pill ${c===e.id?`active`:``}`,children:e.label},e.id))]}),(0,R.jsxs)(`div`,{className:`pkg-duration-sub-bar`,style:{marginBottom:0},children:[(0,R.jsxs)(`span`,{style:{fontSize:11,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,gap:4,marginRight:6},children:[(0,R.jsx)(S,{size:13,color:`#F06543`}),` Duration:`]}),J.map(e=>(0,R.jsx)(`button`,{type:`button`,onClick:()=>o&&o(e.id),className:`pkg-dur-pill ${a===e.id?`active`:``}`,children:e.label},e.id))]})]}),(0,R.jsxs)(`div`,{className:`pkg-section-title-wrap`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`span`,{className:`text-[11px] font-black uppercase tracking-widest text-[#F06543] font-mono block mb-1`,children:`CONFIRMED ISLAND ITINERARIES`}),(0,R.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(26px, 3.5vw, 38px)`,fontWeight:700,color:`#0B2545`,margin:0},children:r===`ALL`?`ALL ANDAMAN HOLIDAY PACKAGES`:`${r} TOUR PACKAGES`})]}),(0,R.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#64748b`},children:[`Showing `,(0,R.jsx)(`strong`,{style:{color:`#0B2545`},children:e.length}),` Packages`]})]}),t&&(0,R.jsxs)(`div`,{className:`py-20 text-center`,children:[(0,R.jsx)(`div`,{className:`w-10 h-10 border-4 border-[#F06543] border-t-transparent rounded-full animate-spin mx-auto mb-4`}),(0,R.jsx)(`p`,{className:`font-mono text-xs font-bold text-[#0B2545] uppercase tracking-wider`,children:`Loading Holiday Packages...`})]}),!t&&n&&(0,R.jsxs)(`div`,{className:`p-8 rounded-3xl bg-red-50 border-2 border-red-200 text-center max-w-lg mx-auto my-12`,children:[(0,R.jsx)(`p`,{className:`text-sm font-bold text-red-700 mb-4`,children:n}),b&&(0,R.jsx)(`button`,{onClick:b,className:`px-6 py-2.5 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors`,children:`Retry`})]}),!t&&!n&&e.length===0&&(0,R.jsxs)(`div`,{className:`text-center py-20 bg-white rounded-3xl border-2 border-[#e2e8f0] p-8 shadow-sm`,children:[(0,R.jsx)(`div`,{className:`w-16 h-16 rounded-full bg-[#FFF0EB] border-2 border-[#F06543] flex items-center justify-center mx-auto mb-4 text-[#F06543]`,children:(0,R.jsx)(s,{size:28})}),(0,R.jsx)(`h3`,{className:`text-xl font-bold text-[#0B2545] mb-2 font-serif`,children:`No Packages Found`}),(0,R.jsx)(`p`,{className:`text-xs text-slate-500 max-w-md mx-auto mb-6`,children:`We couldn't find any tour packages matching your current filters. Try resetting your theme or duration filters.`}),(0,R.jsxs)(`button`,{onClick:g,className:`px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-mono text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer`,children:[(0,R.jsx)(m,{size:14}),(0,R.jsx)(`span`,{children:`Reset All Filters`})]})]}),!t&&!n&&e.length>0&&(0,R.jsx)(`div`,{className:`pkg-results-grid`,children:e.map(e=>(0,R.jsx)(K,{pkg:e,isWishlisted:!!_[e.id||e._id],onToggleWishlist:v,onViewDetails:y},e.id||e._id))})]})}N.registerPlugin(P);var Z=[{icon:d,title:`CONFIRMED LUXURY CATAMARANS`,desc:`Instant confirmed seat reservations on Makruzz & Nautika luxury catamarans with hassle-free jetty baggage handling.`},{icon:l,title:`HANDPICKED 4★ & 5★ RESORTS`,desc:`Strictly vetted beachfront cottages, private pool villas and luxury heritage retreats with daily complimentary breakfast.`},{icon:t,title:`TRANSPARENT ZERO HIDDEN COST`,desc:`All inter-island ferry passes, port entrance permits, private AC transfers and monument entries are 100% included upfront.`},{icon:v,title:`100% TAILOR-MADE FLEXIBILITY`,desc:`Customize any day-by-day plan: add scuba diving, private candlelit beach dinners, night kayaking or extra nights seamlessly.`},{icon:f,title:`24/7 GROUND ISLAND DESK`,desc:`Dedicated Port Blair local concierge desk providing private airport receptions, jetty coordination and live weather monitoring.`}];function Q(){let e=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(!e.current)return;let t=e.current.querySelectorAll(`.why-pkg-card`);N.fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:e.current,start:`top 85%`}})},[]),(0,R.jsxs)(`section`,{className:`why-pkg-root`,children:[(0,R.jsx)(`style`,{children:`
        .why-pkg-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-pkg-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-pkg-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-pkg-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-pkg-grid { grid-template-columns: 1fr; }
        }

        .why-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .why-pkg-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .why-pkg-icon-box {
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-pkg-card:hover .why-pkg-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .why-pkg-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .why-pkg-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}),(0,R.jsxs)(`div`,{className:`why-pkg-eyebrow`,children:[(0,R.jsx)(v,{size:14,color:`#F06543`}),(0,R.jsx)(`span`,{children:`WHY TRAVEL WITH US`})]}),(0,R.jsx)(`h2`,{className:`why-pkg-title`,children:`WHY BOOK HOLIDAY PACKAGES WITH ANDAMAN TRAILS?`}),(0,R.jsx)(`div`,{ref:e,className:`reasons-pkg-grid`,children:Z.map((e,t)=>{let n=e.icon;return(0,R.jsxs)(`div`,{className:`why-pkg-card`,children:[(0,R.jsx)(`div`,{className:`why-pkg-icon-box`,children:(0,R.jsx)(n,{size:24})}),(0,R.jsx)(`div`,{className:`why-pkg-card-title`,children:e.title}),(0,R.jsx)(`p`,{className:`why-pkg-card-desc`,children:e.desc})]},t)})})]})}function te({onDiscoverHoneymoon:e}){return(0,R.jsxs)(`section`,{className:`hm-pkg-exp-root`,children:[(0,R.jsx)(`style`,{children:`
        .hm-pkg-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .hm-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
        @media (max-width: 960px) {
          .hm-pkg-card { grid-template-columns: 1fr; }
        }

        .hm-pkg-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .hm-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .hm-pkg-card:hover .hm-pkg-img-box img {
          transform: scale(1.06);
        }

        .hm-pkg-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .hm-pkg-content-box { padding: 26px; }
        }

        .hm-pkg-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .hm-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .hm-pkg-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .hm-pkg-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .hm-pkg-checklist { grid-template-columns: 1fr; }
        }

        .hm-pkg-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .hm-pkg-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .hm-pkg-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,R.jsxs)(`div`,{className:`hm-pkg-card`,children:[(0,R.jsxs)(`div`,{className:`hm-pkg-img-box`,children:[(0,R.jsx)(`img`,{src:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85`,alt:`Andaman Luxury Honeymoon Package`}),(0,R.jsx)(`div`,{className:`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm`,children:`💍 Curated for Couples`}),(0,R.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs`,children:[(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[#2dd4bf] font-bold`,children:[(0,R.jsx)(A,{size:13}),` 6D / 5N Luxury Escape`]}),(0,R.jsxs)(`span`,{className:`text-[#ffd700] font-bold flex items-center gap-1`,children:[(0,R.jsx)(u,{size:12,className:`fill-[#ffd700]`}),` 5.0 (240+ Couples)`]})]})]}),(0,R.jsxs)(`div`,{className:`hm-pkg-content-box`,children:[(0,R.jsxs)(`div`,{className:`hm-pkg-tag`,children:[(0,R.jsx)(j,{size:13,className:`fill-[#F06543]`}),(0,R.jsx)(`span`,{children:`EXCLUSIVE ROMANCE SPOTLIGHT`})]}),(0,R.jsx)(`h2`,{className:`hm-pkg-title`,children:`6D/5N Romantic Island Haven (Havelock & Neil)`}),(0,R.jsx)(`p`,{className:`hm-pkg-desc`,children:`A bespoke romantic journey designed for newlyweds and couples. Includes luxury beachfront villa stays in Havelock & Neil, private candlelit dinner under the stars by the surf, flower bed decor, champagne sunset cruise and premium catamaran passes.`}),(0,R.jsxs)(`div`,{className:`hm-pkg-checklist`,children:[(0,R.jsxs)(`div`,{className:`hm-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Private Beach Candlelight Dinner`})]}),(0,R.jsxs)(`div`,{className:`hm-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Beachfront Private Villa`})]}),(0,R.jsxs)(`div`,{className:`hm-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Honeymoon Cake & Floral Bed`})]}),(0,R.jsxs)(`div`,{className:`hm-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Makruzz Luxury Catamaran`})]})]}),(0,R.jsxs)(`button`,{onClick:e,className:`hm-pkg-cta-btn`,children:[(0,R.jsx)(`span`,{children:`EXPLORE HONEYMOON PACKAGES`}),(0,R.jsx)(o,{size:15})]})]})]})]})}function ne({onDiscoverAdventure:e}){return(0,R.jsxs)(`section`,{className:`adv-pkg-exp-root`,children:[(0,R.jsx)(`style`,{children:`
        .adv-pkg-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .adv-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
        @media (max-width: 960px) {
          .adv-pkg-card { grid-template-columns: 1fr; }
        }

        .adv-pkg-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .adv-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .adv-pkg-card:hover .adv-pkg-img-box img {
          transform: scale(1.06);
        }

        .adv-pkg-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .adv-pkg-content-box { padding: 26px; }
        }

        .adv-pkg-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .adv-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .adv-pkg-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .adv-pkg-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .adv-pkg-checklist { grid-template-columns: 1fr; }
        }

        .adv-pkg-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .adv-pkg-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .adv-pkg-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,R.jsxs)(`div`,{className:`adv-pkg-card`,children:[(0,R.jsxs)(`div`,{className:`adv-pkg-content-box order-2 lg:order-1`,children:[(0,R.jsxs)(`div`,{className:`adv-pkg-tag`,children:[(0,R.jsx)(x,{size:13}),(0,R.jsx)(`span`,{children:`ADVENTURE & SCUBA SPOTLIGHT`})]}),(0,R.jsx)(`h2`,{className:`adv-pkg-title`,children:`7D/6N Ultimate Scuba & Watersports Expedition`}),(0,R.jsx)(`p`,{className:`adv-pkg-desc`,children:`Engineered for thrill-seekers and marine enthusiasts. Features 2 certified PADI boat scuba dives at Dixon’s Pinnacle, Seakart self-drive adventure in Port Blair, bioluminescent night kayaking and elephant beach snorkeling.`}),(0,R.jsxs)(`div`,{className:`adv-pkg-checklist`,children:[(0,R.jsxs)(`div`,{className:`adv-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`PADI 1:1 Boat Scuba Diving`})]}),(0,R.jsxs)(`div`,{className:`adv-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Bioluminescence Night Kayak`})]}),(0,R.jsxs)(`div`,{className:`adv-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Seakart Self-Drive Thrill`})]}),(0,R.jsxs)(`div`,{className:`adv-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Free 4K Underwater GoPro Video`})]})]}),(0,R.jsxs)(`button`,{onClick:e,className:`adv-pkg-cta-btn`,children:[(0,R.jsx)(`span`,{children:`EXPLORE ADVENTURE PACKAGES`}),(0,R.jsx)(o,{size:15})]})]}),(0,R.jsxs)(`div`,{className:`adv-pkg-img-box order-1 lg:order-2`,children:[(0,R.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85`,alt:`Andaman Scuba Diving Adventure Package`}),(0,R.jsx)(`div`,{className:`absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm`,children:`🤿 100% PADI Certified`}),(0,R.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs`,children:[(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[#2dd4bf] font-bold`,children:[(0,R.jsx)(A,{size:13}),` 7D / 6N Scuba Special`]}),(0,R.jsxs)(`span`,{className:`text-[#ffd700] font-bold flex items-center gap-1`,children:[(0,R.jsx)(u,{size:12,className:`fill-[#ffd700]`}),` 4.9 (180+ Adventurers)`]})]})]})]})]})}function re({onDiscoverFamily:e}){return(0,R.jsxs)(`section`,{className:`fam-pkg-exp-root`,children:[(0,R.jsx)(`style`,{children:`
        .fam-pkg-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .fam-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
        @media (max-width: 960px) {
          .fam-pkg-card { grid-template-columns: 1fr; }
        }

        .fam-pkg-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .fam-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .fam-pkg-card:hover .fam-pkg-img-box img {
          transform: scale(1.06);
        }

        .fam-pkg-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .fam-pkg-content-box { padding: 26px; }
        }

        .fam-pkg-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .fam-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .fam-pkg-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .fam-pkg-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .fam-pkg-checklist { grid-template-columns: 1fr; }
        }

        .fam-pkg-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .fam-pkg-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .fam-pkg-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,R.jsxs)(`div`,{className:`fam-pkg-card`,children:[(0,R.jsxs)(`div`,{className:`fam-pkg-img-box`,children:[(0,R.jsx)(`img`,{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85`,alt:`Andaman Family Vacation Holiday Package`}),(0,R.jsx)(`div`,{className:`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm`,children:`👨‍👩‍👧‍👦 Kid & Senior Friendly`}),(0,R.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs`,children:[(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[#2dd4bf] font-bold`,children:[(0,R.jsx)(A,{size:13}),` 5D / 4N Family Classic`]}),(0,R.jsxs)(`span`,{className:`text-[#ffd700] font-bold flex items-center gap-1`,children:[(0,R.jsx)(u,{size:12,className:`fill-[#ffd700]`}),` 4.9 (320+ Families)`]})]})]}),(0,R.jsxs)(`div`,{className:`fam-pkg-content-box`,children:[(0,R.jsxs)(`div`,{className:`fam-pkg-tag`,children:[(0,R.jsx)(b,{size:13}),(0,R.jsx)(`span`,{children:`RELAXED FAMILY LEISURE VACATION`})]}),(0,R.jsx)(`h2`,{className:`fam-pkg-title`,children:`5D/4N Relaxed Island Family Escape`}),(0,R.jsx)(`p`,{className:`fam-pkg-desc`,children:`Carefully paced for kids and elders with zero rushed transits. Features private AC vehicles at all ports, glass-bottom coral boat rides, Cellular Jail light & sound VIP seats, and shallow white-sand lagoon swimming in Havelock.`}),(0,R.jsxs)(`div`,{className:`fam-pkg-checklist`,children:[(0,R.jsxs)(`div`,{className:`fam-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Glass-Bottom Coral Safari Boat`})]}),(0,R.jsxs)(`div`,{className:`fam-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Spacious Family Resort Cottages`})]}),(0,R.jsxs)(`div`,{className:`fam-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Cellular Jail Light & Sound Show`})]}),(0,R.jsxs)(`div`,{className:`fam-pkg-item`,children:[(0,R.jsx)(r,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,R.jsx)(`span`,{children:`Private Dedicated Driver & AC Cab`})]})]}),(0,R.jsxs)(`button`,{onClick:e,className:`fam-pkg-cta-btn`,children:[(0,R.jsx)(`span`,{children:`VIEW FAMILY HOLIDAY PACKAGES`}),(0,R.jsx)(o,{size:15})]})]})]})]})}function $(){return(0,R.jsxs)(`section`,{className:`pkg-inclusions-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-inclusions-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .pkg-inclusions-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .pkg-inc-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-inc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 860px) {
          .pkg-inclusions-grid { grid-template-columns: 1fr; }
        }

        .pkg-inc-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.05);
        }

        .pkg-inc-card-header {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px; padding-bottom: 18px;
          border-bottom: 1.5px solid #f1f5f9;
        }

        .pkg-inc-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .pkg-inc-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; line-height: 1.55;
          color: #334155; font-weight: 500;
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-inclusions-header`,children:[(0,R.jsx)(`div`,{className:`pkg-inc-eyebrow`,children:`TRANSPARENT PACKAGE INCLUSIONS`}),(0,R.jsx)(`h2`,{className:`pkg-inc-title`,children:`WHAT'S INCLUDED IN YOUR ALL-INCLUSIVE PACKAGE`})]}),(0,R.jsxs)(`div`,{className:`pkg-inclusions-grid`,children:[(0,R.jsxs)(`div`,{className:`pkg-inc-card`,children:[(0,R.jsxs)(`div`,{className:`pkg-inc-card-header`,children:[(0,R.jsx)(`div`,{className:`w-10 h-10 rounded-2xl bg-[#FFF0EB] border-2 border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0`,children:(0,R.jsx)(t,{size:20,className:`stroke-[2.5]`})}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,margin:0},children:`STANDARD PACKAGE INCLUSIONS`}),(0,R.jsx)(`span`,{style:{fontSize:12,color:`#F06543`,fontWeight:700,fontFamily:`'Inter', sans-serif`},children:`100% Confirmed & Zero Hidden Fees`})]})]}),(0,R.jsx)(`div`,{className:`pkg-inc-list`,children:[`Confirmed Luxury Private Catamaran Tickets (Makruzz / Nautika / Green Ocean)`,`Handpicked 4★ & 5★ Beachfront Resort Stays with Daily Buffet Breakfast`,`Dedicated Private AC Vehicles for all Airport, Jetty & Island Sightseeing Transfers`,`Complimentary Snorkeling / Scuba Diving Introductory Session (Select Packages)`,`All Port Clearances, Vehicle Convoy Passes & Forest Department Entry Permits`,`24/7 On-Ground Island Concierge Desk with Airport Reception & Jetty Coordination`].map((e,t)=>(0,R.jsxs)(`div`,{className:`pkg-inc-item`,children:[(0,R.jsx)(`div`,{className:`w-5 h-5 rounded-full bg-[#FFF0EB] border border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs`,children:`✓`}),(0,R.jsx)(`span`,{children:e})]},t))})]}),(0,R.jsxs)(`div`,{className:`pkg-inc-card`,children:[(0,R.jsxs)(`div`,{className:`pkg-inc-card-header`,children:[(0,R.jsx)(`div`,{className:`w-10 h-10 rounded-2xl bg-slate-100 border-2 border-slate-300 text-slate-500 flex items-center justify-center flex-shrink-0`,children:(0,R.jsx)(_,{size:20,className:`stroke-[2.5]`})}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,margin:0},children:`EXCLUSIONS & OPTIONAL UPGRADES`}),(0,R.jsx)(`span`,{style:{fontSize:12,color:`#64748b`,fontWeight:700,fontFamily:`'Inter', sans-serif`},children:`Add-Ons Available on Demand`})]})]}),(0,R.jsx)(`div`,{className:`pkg-inc-list`,children:[`Domestic / International Flight Tickets to & from Port Blair (Veer Savarkar Airport)`,`Personal Scuba Diving / Water Sports Activity Upgrades beyond package inclusions`,`Personal Lunches, Dinners & Beverages not specifically stated in your meal plan`,`Peak Season Gala Dinner Surcharges (Christmas Eve / New Year Eve where applicable)`].map((e,t)=>(0,R.jsxs)(`div`,{className:`pkg-inc-item`,children:[(0,R.jsx)(`div`,{className:`w-5 h-5 rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs`,children:`✕`}),(0,R.jsx)(`span`,{style:{color:`#64748b`},children:e})]},t))})]})]})]})}var ie=[{step:`01`,icon:x,title:`CHOOSE YOUR PACKAGE`,desc:`Browse our collection of 25+ curated holiday packages by theme, duration, and island destinations.`},{step:`02`,icon:a,title:`CUSTOMIZE YOUR TRIP`,desc:`Add scuba diving, upgrade resort room tiers, include romantic candlelight dinners, or tweak dates.`},{step:`03`,icon:T,title:`SECURE TOKEN PAYMENT`,desc:`Pay a minimal token advance via Razorpay 256-bit encrypted checkout to confirm all ferry and hotel vouchers.`},{step:`04`,icon:ee,title:`INSTANT DIGITAL PASS`,desc:`Receive verified digital hotel confirmation vouchers, Makruzz ferry tickets and private driver contacts instantly.`}];function ae({onStartPlanning:e}){return(0,R.jsxs)(`section`,{className:`pkg-flow-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-flow-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-flow-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-flow-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-flow-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }
        @media (max-width: 1024px) {
          .pkg-flow-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pkg-flow-grid { grid-template-columns: 1fr; }
        }

        .pkg-flow-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .pkg-flow-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .pkg-step-num {
          position: absolute; top: 20px; right: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px; font-weight: 900;
          color: #e2e8f0; line-height: 1;
        }

        .pkg-step-icon {
          width: 50px; height: 50px; border-radius: 16px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-flow-header`,children:[(0,R.jsx)(`div`,{className:`pkg-flow-eyebrow`,children:`SEAMLESS 4-STEP RESERVATION`}),(0,R.jsx)(`h2`,{className:`pkg-flow-title`,children:`HOW PACKAGE BOOKING WORKS`})]}),(0,R.jsx)(`div`,{className:`pkg-flow-grid`,children:ie.map((e,t)=>{let n=e.icon;return(0,R.jsxs)(`div`,{className:`pkg-flow-card`,children:[(0,R.jsx)(`span`,{className:`pkg-step-num`,children:e.step}),(0,R.jsx)(`div`,{className:`pkg-step-icon`,children:(0,R.jsx)(n,{size:22,className:`stroke-[2.5]`})}),(0,R.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13.5,fontWeight:900,color:`#0B2545`,letterSpacing:`0.04em`,margin:`0 0 8px`},children:e.title}),(0,R.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6,margin:0,fontWeight:500},children:e.desc})]},t)})})]})}var oe=[{season:`PEAK SEASON (OCT – MAY)`,statusText:`🟢 High Demand • Daily Departures Open`,highlight:`Crystal Clear Lagoons & 25m Underwater Scuba Visibility`,startingFare:`₹18,500 / adult`,slots:[`Immediate Confirmed Dates`,`Flexible Weekend Sailings`,`Custom Holiday Dates`],badge:`BEST TRAVEL WINDOW`},{season:`MONSOON TROPICAL ESCAPES (JUN – SEP)`,statusText:`🟢 Green Lush Forests • Special 30% Off`,highlight:`Serene Rainforest Atmosphere, Empty Beaches & Luxury Pool Villas`,startingFare:`₹13,999 / adult`,slots:[`Daily Flights Available`,`Monsoon Special Discounts`,`Zero Crowd Experience`],badge:`OFF-SEASON VALUE`}];function se({onOpenCustomizer:e}){return(0,R.jsxs)(`section`,{className:`pkg-avail-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-avail-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-avail-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
        }
        @media (max-width: 768px) {
          .pkg-avail-card { padding: 24px; }
        }

        .pkg-avail-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
          padding-bottom: 24px; border-bottom: 2px solid #f1f5f9;
        }

        .pkg-slots-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .pkg-slots-grid { grid-template-columns: 1fr; }
        }

        .pkg-slot-item {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.3s ease;
        }
        .pkg-slot-item:hover {
          border-color: #F06543;
          background: #FFF0EB;
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.12);
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-avail-card`,children:[(0,R.jsxs)(`div`,{className:`pkg-avail-header`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2`,children:[(0,R.jsx)(v,{size:12}),(0,R.jsx)(`span`,{children:`SEASONAL AVAILABILITY & SLOTS`})]}),(0,R.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(28px, 4vw, 42px)`,fontWeight:700,color:`#0B2545`,margin:0},children:`ALL-YEAR-ROUND DEPARTURE CALENDAR`})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#F06543`},children:[(0,R.jsx)(t,{size:16}),(0,R.jsx)(`span`,{children:`100% Instant Catamaran & Hotel Confirmation`})]})]}),(0,R.jsx)(`div`,{className:`pkg-slots-grid`,children:oe.map((t,n)=>(0,R.jsxs)(`div`,{className:`pkg-slot-item`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,R.jsx)(`span`,{style:{fontSize:10.5,fontWeight:900,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,background:`#ffffff`,border:`1px solid #e2e8f0`,padding:`4px 10px`,borderRadius:12},children:t.badge}),(0,R.jsx)(`span`,{style:{fontSize:12,fontWeight:800,color:`#0B2545`,fontFamily:`'Space Grotesk', sans-serif`},children:t.statusText})]}),(0,R.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:900,color:`#0B2545`,margin:`0 0 8px`},children:t.season}),(0,R.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#64748b`,margin:`0 0 18px`,lineHeight:1.55,fontWeight:500},children:t.highlight}),(0,R.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:20},children:t.slots.map((e,t)=>(0,R.jsxs)(`span`,{style:{background:`#ffffff`,border:`1px solid #e2e8f0`,color:`#0B2545`,fontSize:11.5,fontWeight:700,padding:`4px 10px`,borderRadius:10,fontFamily:`'Inter', sans-serif`},children:[`✓ `,e]},t))})]}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:18,borderTop:`1.5px solid #e2e8f0`},children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`span`,{style:{fontSize:10,color:`#64748b`,fontWeight:800,textTransform:`uppercase`,display:`block`,fontFamily:`'Space Grotesk', sans-serif`},children:`Starting From`}),(0,R.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:900,color:`#0B2545`},children:t.startingFare})]}),(0,R.jsxs)(`button`,{onClick:()=>{e?e():(window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`)))},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,border:`none`,padding:`11px 22px`,borderRadius:14,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 4px 14px rgba(0, 45, 98, 0.25)`},children:[(0,R.jsx)(`span`,{children:`CHECK DEPARTURES`}),(0,R.jsx)(o,{size:13})]})]})]},n))})]})]})}var ce=[{icon:y,title:`IDEAL ADVANCE BOOKING WINDOW`,desc:`Book your package 30 to 60 days in advance for peak season (Oct–May) to secure premium beachfront villas & preferred catamaran timings.`},{icon:E,title:`FLIGHT & FERRY COORDINATION`,desc:`Book flights arriving at Port Blair before 11:30 AM to catch same-day afternoon private catamarans directly to Havelock Island without staying overnight.`},{icon:g,title:`MEAL PLAN RECOMMENDATIONS`,desc:`Our CP plan (Resort Room with Daily Buffet Breakfast) gives you maximum freedom to explore Havelock & Neil’s fresh seafood beach shacks and beachfront cafes.`},{icon:t,title:`GOVERNMENT ID & PERMIT RULES`,desc:`Carry original government photo IDs (Aadhaar / Passport / Voter ID) for all travelers. Our team handles all automated internal forest convoy clearances.`}];function le(){return(0,R.jsxs)(`section`,{className:`pkg-tips-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-tips-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-tips-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-tips-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-tips-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .pkg-tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pkg-tips-grid { grid-template-columns: 1fr; }
        }

        .pkg-tip-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .pkg-tip-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .pkg-tip-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-tips-header`,children:[(0,R.jsx)(`div`,{className:`pkg-tips-eyebrow`,children:`ESSENTIAL TRAVELER ADVISORY`}),(0,R.jsx)(`h2`,{className:`pkg-tips-title`,children:`PACKAGE PLANNING TIPS & GUIDELINES`})]}),(0,R.jsx)(`div`,{className:`pkg-tips-grid`,children:ce.map((e,t)=>{let n=e.icon;return(0,R.jsxs)(`div`,{className:`pkg-tip-card`,children:[(0,R.jsx)(`div`,{className:`pkg-tip-icon`,children:(0,R.jsx)(n,{size:22,className:`stroke-[2.5]`})}),(0,R.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#0B2545`,letterSpacing:`0.04em`,margin:`0 0 8px`},children:e.title}),(0,R.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6,margin:0,fontWeight:500},children:e.desc})]},t)})})]})}var ue=[{q:`Are ferry tickets and hotel stays included in these packages?`,a:`Yes! All our tour packages include confirmed inter-island catamaran ferry passes (Makruzz, Nautika, or Green Ocean), handpicked 4★ & 5★ beachfront resort stays with daily buffet breakfast, private AC cab transfers, and port permits.`},{q:`Can I customize the day-by-day itinerary?`,a:`Absolutely. Every package is 100% tailor-made. You can add extra nights in Havelock or Neil Island, upgrade to private pool villas, add deep-sea scuba diving, candlelight beach dinners, or include Baratang mangrove safaris.`},{q:`What is your cancellation and weather rescheduling policy?`,a:`We provide flexible payment terms with minimal token advances. In case of government ferry cancellations due to sea weather, our on-ground team handles instant rescheduling and alternative routing with zero convenience charges.`},{q:`How do airport and inter-island jetty pickups work?`,a:`A dedicated representative meets you with your name placard at Port Blair Veer Savarkar International Airport and escorts you to your private AC vehicle. Similar private coordination is provided at every island jetty.`},{q:`What is the best season to book an Andaman tour package?`,a:`October to May is the peak season featuring pleasant tropical sunshine, calm turquoise seas, and crystal-clear underwater scuba diving visibility across all islands.`},{q:`Are introductory scuba diving & water sports safe for non-swimmers?`,a:`Yes! All discovery scuba programs included in our packages are specifically designed for non-swimmers and beginners, accompanied 1:1 by PADI-certified divemasters in shallow lagoons.`}];function de(){let[e,t]=(0,L.useState)(0);return(0,R.jsxs)(`section`,{className:`pkg-faq-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-faq-root {
          max-width: 980px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-faq-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .pkg-faq-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-faq-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.04);
          transition: all 0.25s ease;
        }
        .pkg-faq-card:hover {
          border-color: #F06543;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.08);
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-faq-header`,children:[(0,R.jsx)(`div`,{className:`pkg-faq-eyebrow`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,R.jsx)(`h2`,{className:`pkg-faq-title`,children:`ANDAMAN TOUR PACKAGE FAQ`})]}),(0,R.jsx)(`div`,{children:ue.map((r,a)=>{let o=e===a;return(0,R.jsxs)(`div`,{className:`pkg-faq-card`,children:[(0,R.jsxs)(`button`,{onClick:()=>t(o?null:a),style:{width:`100%`,padding:`22px 26px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,textAlign:`left`,background:`transparent`,border:`none`,cursor:`pointer`,outline:`none`},children:[(0,R.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14.5,fontWeight:900,color:`#0B2545`,paddingRight:16},children:r.q}),(0,R.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:o?`#0B2545`:`#FFF0EB`,border:`1.5px solid #F06543`,color:o?`#ffffff`:`#F06543`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,transition:`all 0.25s ease`},children:o?(0,R.jsx)(n,{size:16}):(0,R.jsx)(i,{size:16})})]}),o&&(0,R.jsx)(`div`,{style:{padding:`0 26px 24px`,borderTop:`1.5px solid #f1f5f9`,paddingTop:16},children:(0,R.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#64748b`,lineHeight:1.65,margin:0,fontWeight:500},children:r.a})})]},a)})})]})}function fe({onPlanTrip:e,onContactExpert:t}){return(0,R.jsxs)(`section`,{className:`pkg-cta-root`,children:[(0,R.jsx)(`style`,{children:`
        .pkg-cta-root {
          max-width: 1340px;
          margin: 0 auto 90px;
          padding: 0 24px;
        }

        .pkg-cta-box {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          padding: 54px 36px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
          text-align: center;
        }
        @media (max-width: 640px) {
          .pkg-cta-box { padding: 36px 20px; }
        }

        .pkg-cta-glow-1 {
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          filter: blur(50px); pointer-events: none;
        }
        .pkg-cta-glow-2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(0, 45, 98, 0.08);
          filter: blur(50px); pointer-events: none;
        }

        .pkg-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 16px 34px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.35);
        }
        .pkg-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(13, 148, 136, 0.5);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }

        .pkg-cta-btn-secondary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #0B2545; background: #FFF0EB;
          border: 2px solid #F06543; padding: 16px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
        }
        .pkg-cta-btn-secondary:hover {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.25);
        }
      `}),(0,R.jsxs)(`div`,{className:`pkg-cta-box`,children:[(0,R.jsx)(`div`,{className:`pkg-cta-glow-1`}),(0,R.jsx)(`div`,{className:`pkg-cta-glow-2`}),(0,R.jsxs)(`div`,{style:{position:`relative`,zIndex:2,maxWidth:740,margin:`0 auto`},children:[(0,R.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-4`,children:[(0,R.jsx)(v,{size:14,className:`text-[#ffd700]`}),(0,R.jsx)(`span`,{children:`24/7 ISLAND VACATION CONCIERGE`})]}),(0,R.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(30px, 4.5vw, 50px)`,fontWeight:700,color:`#0B2545`,margin:`0 0 16px`,lineHeight:1.15},children:`Need a Customized Andaman Island Package?`}),(0,R.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:14,color:`#64748b`,lineHeight:1.65,margin:`0 auto 34px`,maxWidth:640},children:`Tell our local island specialists about your dream travel dates, budget, and preferences. We'll craft a customized day-by-day plan with confirmed luxury catamarans and beachfront resorts in under 2 hours.`}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:16,flexWrap:`wrap`},children:[(0,R.jsxs)(`button`,{onClick:()=>{e?e():(window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`)))},className:`pkg-cta-btn-primary`,children:[(0,R.jsx)(`span`,{children:`BUILD CUSTOM HOLIDAY TRIP`}),(0,R.jsx)(o,{size:15})]}),(0,R.jsxs)(`button`,{onClick:()=>{t?t():(window.history.pushState({},``,`/contact`),window.dispatchEvent(new Event(`popstate`)))},className:`pkg-cta-btn-secondary`,children:[(0,R.jsx)(D,{size:15}),(0,R.jsx)(`span`,{children:`TALK TO LOCAL SPECIALIST`})]})]})]})]})]})}function pe(){let[e,t]=(0,L.useState)([]),[n,r]=(0,L.useState)(!0),[i,a]=(0,L.useState)(``),[o,s]=(0,L.useState)(()=>{try{let e=localStorage.getItem(`andaman_package_wishlist`);return e?JSON.parse(e):{}}catch{return{}}}),c=(e,t)=>{t&&t.stopPropagation(),s(t=>{let n={...t,[e]:!t[e]};try{localStorage.setItem(`andaman_package_wishlist`,JSON.stringify(n))}catch{}return n})},[l,u]=(0,L.useState)(``),[d,f]=(0,L.useState)(`ALL`),[p,m]=(0,L.useState)(`ALL`),[h,g]=(0,L.useState)(`ALL`),[_,v]=(0,L.useState)(``),[y,b]=(0,L.useState)(`RECOMMENDED`),x=async()=>{r(!0),a(``);try{let e=await F.getPackages();e&&e.data&&Array.isArray(e.data)&&t(e.data)}catch(e){console.error(`Failed to load packages from DB:`,e),a(`Unable to load packages from server.`)}finally{r(!1)}};(0,L.useEffect)(()=>{x()},[]);let S=(0,L.useMemo)(()=>{let t=(e||[]).filter(e=>{let t=d===`ALL`||e.destinations&&e.destinations.toLowerCase().includes(d.toLowerCase())||e.itinerary&&Array.isArray(e.itinerary)&&e.itinerary.some(e=>(e.location||``).toLowerCase().includes(d.toLowerCase())),n=p===`ALL`||e.category&&e.category.toUpperCase().includes(p.toUpperCase())||e.theme&&e.theme.toUpperCase().includes(p.toUpperCase()),r=l.toLowerCase().trim(),i=Array.isArray(e.tags)?e.tags:typeof e.tags==`string`?e.tags.split(`,`).map(e=>e.trim()):[],a=!r||e.name&&e.name.toLowerCase().includes(r)||e.destinations&&e.destinations.toLowerCase().includes(r)||e.description&&e.description.toLowerCase().includes(r)||i.some(e=>String(e).toLowerCase().includes(r)),o=!0,s=parseInt(e.duration)||5;return h===`SHORT`?o=s<=4:h===`MEDIUM`?o=s===5||s===6:h===`LONG`&&(o=s>=7),t&&n&&a&&o});return t.sort((e,t)=>{let n=typeof e.price==`number`?e.price:parseInt(String(e.price||0).replace(/,/g,``))||0,r=typeof t.price==`number`?t.price:parseInt(String(t.price||0).replace(/,/g,``))||0;return y===`PRICE_LOW`?n-r:y===`PRICE_HIGH`?r-n:y===`RATING`?(Number(t.rating)||0)-(Number(e.rating)||0):0}),t},[e,d,p,h,l,y]),C=(0,L.useMemo)(()=>!e||e.length===0?null:e.find(e=>e.featured)||e[0],[e]),w=e=>{let t=e?.id||e?._id||e;window.history.pushState({},``,`/package-details?id=${t}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},T=()=>{u(``),f(`ALL`),m(`ALL`),g(`ALL`),v(``),b(`RECOMMENDED`)},E=()=>{let e=document.getElementById(`packages-grid-section`);e&&e.scrollIntoView({behavior:`smooth`})},D=({searchQuery:e,destination:t,category:n,duration:r,date:i})=>{e!==void 0&&u(e),t&&f(t),n&&m(n),r&&g(r),i&&v(i),E()},O=e=>{m(e),E()};return(0,R.jsxs)(`div`,{className:`packages-page-root`,children:[(0,R.jsx)(`style`,{children:`
        .packages-page-root {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }
      `}),(0,R.jsx)(z,{onExplorePackages:E,onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,R.jsx)(B,{onSearch:D}),(0,R.jsx)(V,{pkg:C,onViewDetails:w,onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,R.jsx)(U,{onSelectCategory:O}),(0,R.jsx)(G,{onSelectDuration:e=>{g(e),E()}}),(0,R.jsx)(`div`,{id:`packages-grid-section`,children:(0,R.jsx)(X,{packages:S,loading:n,error:i,selectedDestination:d,onSelectDestination:f,selectedCategory:p,onSelectCategory:m,selectedDuration:h,onSelectDuration:g,searchQuery:l,onSearchChange:u,sortBy:y,onChangeSortBy:b,onResetFilters:T,savedWishlist:o,onToggleWishlist:c,onViewDetails:w,onRetry:x})}),(0,R.jsx)(Q,{}),(0,R.jsx)(te,{onDiscoverHoneymoon:()=>O(`HONEYMOON`)}),(0,R.jsx)(ne,{onDiscoverAdventure:()=>O(`ADVENTURE`)}),(0,R.jsx)(re,{onDiscoverFamily:()=>O(`FAMILY`)}),(0,R.jsx)($,{}),(0,R.jsx)(ae,{onStartPlanning:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,R.jsx)(se,{onOpenCustomizer:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,R.jsx)(le,{}),(0,R.jsx)(de,{}),(0,R.jsx)(fe,{onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))},onContactExpert:()=>{window.history.pushState({},``,`/contact`),window.dispatchEvent(new Event(`popstate`))}}),(0,R.jsx)(I,{})]})}export{pe as default};