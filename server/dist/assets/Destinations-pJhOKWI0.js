import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Cn as n,D as r,Dn as i,En as a,Gn as o,Ht as s,K as c,Kt as l,N as u,Nn as d,O as f,R as p,S as m,Vt as h,Wt as g,X as _,Xn as v,Zn as y,Zt as b,a as x,bt as S,gn as C,j as w,jn as T,l as ee,ln as E,mn as D,n as te,o as ne,t as O,v as k,vn as A,wn as re,xt as j,zt as ie}from"./lucide-vendor-CBhgx3NO.js";import{v as ae}from"./three-vendor-Md08yeGZ.js";import{n as M,t as N}from"./gsap-vendor-Cgjl6ODA.js";import{h as oe}from"./index-CLpzZzGy.js";import{t as se}from"./FooterBottom-yxqnPQVe.js";import{a as ce,i as P,n as F,r as I,t as L}from"./map-vendor-B-JprLPb.js";var R=e(y(),1),z=ae();function B({onExploreDestinations:e,onPlanTrip:n}){let r=(0,R.useRef)(null);return(0,R.useEffect)(()=>{r.current&&M.fromTo(r.current,{opacity:0,y:30,scale:.97},{opacity:1,y:0,scale:1,duration:.9,ease:`power2.out`,delay:.2})},[]),(0,z.jsxs)(`section`,{className:`dest-hero-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-hero-root {
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

        .dest-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .dest-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.3);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .dest-hero-root:hover .dest-hero-bg img {
          transform: scale(1.08);
        }

        .dest-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 12, 22, 0.88) 0%,
            rgba(2, 14, 22, 0.48) 50%,
            rgba(2, 12, 22, 0.96) 100%
          );
        }

        .dest-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 820px; height: 440px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.22) 0%, rgba(13, 148, 136, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        /* Floating ocean particles */
        .dest-particle {
          position: absolute; width: 3.5px; height: 3.5px;
          background: rgba(45, 212, 191, 0.7); border-radius: 50%;
          z-index: 3; pointer-events: none;
          animation: floatDestParticle 8s infinite ease-in-out;
        }
        @keyframes floatDestParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.85; }
        }

        .dest-hero-content {
          position: relative; z-index: 4; max-width: 900px;
          text-align: center; margin: 0 auto;
        }

        .dest-breadcrumb {
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

        .dest-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 74px);
          font-weight: 700; color: #ffffff;
          line-height: 1.06; margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .dest-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 720px;
          font-weight: 400;
        }

        .dest-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 30px;
        }

        .dest-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .dest-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .dest-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .dest-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .dest-stats-pill-row {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #cbd5e1;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .dest-stat-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(0, 0, 0, 0.35); padding: 5px 14px;
          border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}),(0,z.jsx)(`div`,{className:`dest-hero-bg`,children:(0,z.jsx)(`img`,{src:`https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Tropical Islands Archipelago`})}),(0,z.jsx)(`div`,{className:`dest-hero-overlay`}),(0,z.jsx)(`div`,{className:`dest-hero-glow`}),(0,z.jsx)(`div`,{className:`dest-particle`,style:{top:`25%`,left:`15%`,animationDelay:`0s`}}),(0,z.jsx)(`div`,{className:`dest-particle`,style:{top:`65%`,left:`22%`,animationDelay:`2s`}}),(0,z.jsx)(`div`,{className:`dest-particle`,style:{top:`35%`,right:`18%`,animationDelay:`4s`}}),(0,z.jsx)(`div`,{className:`dest-particle`,style:{top:`75%`,right:`28%`,animationDelay:`1.5s`}}),(0,z.jsxs)(`div`,{ref:r,className:`dest-hero-content`,children:[(0,z.jsxs)(`div`,{className:`dest-breadcrumb`,children:[(0,z.jsx)(`a`,{href:`/`,style:{color:`#cbd5e1`,textDecoration:`none`},children:`Home`}),(0,z.jsx)(re,{size:13,color:`#2dd4bf`}),(0,z.jsx)(`span`,{children:`ISLAND DESTINATIONS`})]}),(0,z.jsxs)(`h1`,{className:`dest-hero-title`,children:[`EXPLORE THE `,(0,z.jsx)(`br`,{}),(0,z.jsx)(`span`,{style:{color:`#2dd4bf`},children:`ANDAMAN ISLANDS`})]}),(0,z.jsx)(`p`,{className:`dest-hero-desc`,children:`From the white-sand turquoise lagoons of Swaraj Dweep (Havelock) to Shaheed Dweep (Neil), mangrove safaris in Baratang & twin sandbars in Diglipur — curate your bespoke island escape.`}),(0,z.jsxs)(`div`,{className:`dest-hero-btns`,children:[(0,z.jsxs)(`button`,{onClick:e,className:`dest-btn-primary`,children:[(0,z.jsx)(`span`,{children:`EXPLORE ALL ISLANDS`}),(0,z.jsx)(o,{size:15})]}),(0,z.jsxs)(`button`,{onClick:n,className:`dest-btn-sec`,children:[(0,z.jsx)(E,{size:15}),(0,z.jsx)(`span`,{children:`CUSTOM TRIP PLANNER`})]})]}),(0,z.jsxs)(`div`,{className:`dest-stats-pill-row`,children:[(0,z.jsxs)(`div`,{className:`dest-stat-pill`,children:[(0,z.jsx)(j,{size:13,color:`#2dd4bf`}),(0,z.jsx)(`span`,{children:`572+ Tropical Islands`})]}),(0,z.jsxs)(`div`,{className:`dest-stat-pill`,children:[(0,z.jsx)(v,{size:13,color:`#ffd700`}),(0,z.jsx)(`span`,{children:`100% Confirmed Catamaran Ferries`})]}),(0,z.jsxs)(`div`,{className:`dest-stat-pill`,children:[(0,z.jsx)(t,{size:13,color:`#2dd4bf`}),(0,z.jsx)(`span`,{children:`Official Forest & Tribal Permits`})]})]})]})]})}function V({onSearch:e}){let[t,n]=(0,R.useState)(``),[r,i]=(0,R.useState)(`All Regions`),[a,o]=(0,R.useState)(`All Island Vibes`),[s,l]=(0,R.useState)(``),[u,d]=(0,R.useState)(2),[f,p]=(0,R.useState)(0);return(0,z.jsxs)(`div`,{className:`dest-search-wrapper`,children:[(0,z.jsx)(`style`,{children:`
        .dest-search-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1180px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .dest-search-card {
          background: #ffffff;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 2px solid #e2e8f0;
          border-radius: 26px;
          padding: 32px 36px;
          box-shadow: 0 24px 60px rgba(0, 45, 98, 0.14), 0 0 30px rgba(13, 148, 136, 0.08);
        }
        @media (max-width: 768px) {
          .dest-search-card { padding: 22px; }
        }

        .dest-search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .dest-search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 16px; margin-bottom: 24px;
        }
        @media (max-width: 1024px) {
          .dest-search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .dest-search-grid { grid-template-columns: 1fr; }
        }

        .dest-search-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .dest-field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .dest-field-input-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0B2545;
          outline: none; transition: all 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .dest-field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
        }

        .dest-field-select {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none; cursor: pointer;
        }
        .dest-field-select option {
          background: #ffffff; color: #0B2545;
        }

        .dest-counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(13, 148, 136, 0.12); border: 1.5px solid rgba(13, 148, 136, 0.3);
          color: #F06543; font-weight: 900; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .dest-counter-btn:hover { background: #F06543; color: #ffffff; }

        .dest-search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(0, 45, 98, 0.28);
        }
        .dest-search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}),(0,z.jsxs)(`form`,{className:`dest-search-card`,onSubmit:n=>{n.preventDefault(),e&&e({searchQuery:t,region:r,vibe:a,date:s,adults:u,childrenCount:f})},children:[(0,z.jsxs)(`div`,{className:`dest-search-title`,children:[(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,z.jsx)(c,{size:15,color:`#F06543`}),(0,z.jsx)(`span`,{children:`FIND YOUR ANDAMAN ISLAND ESCAPE`})]}),(0,z.jsx)(`span`,{style:{fontSize:11,color:`#64748b`,fontWeight:700,fontFamily:`'Inter', sans-serif`},children:`Real-Time Island Explorer`})]}),(0,z.jsxs)(`div`,{className:`dest-search-grid`,children:[(0,z.jsxs)(`div`,{className:`dest-search-field`,children:[(0,z.jsx)(`label`,{className:`dest-field-label`,children:`ISLAND REGION`}),(0,z.jsxs)(`div`,{className:`dest-field-input-box`,children:[(0,z.jsx)(j,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,z.jsxs)(`select`,{value:r,onChange:e=>i(e.target.value),className:`dest-field-select`,children:[(0,z.jsx)(`option`,{value:`All Regions`,children:`All Regions (572 Isles)`}),(0,z.jsx)(`option`,{value:`South Andaman`,children:`South Andaman (Havelock, Neil, PB)`}),(0,z.jsx)(`option`,{value:`Middle Andaman`,children:`Middle Andaman (Baratang, Rangat)`}),(0,z.jsx)(`option`,{value:`North Andaman`,children:`North Andaman (Diglipur, Mayabunder)`}),(0,z.jsx)(`option`,{value:`Nicobar`,children:`Nicobar Archipelago`})]})]})]}),(0,z.jsxs)(`div`,{className:`dest-search-field`,children:[(0,z.jsx)(`label`,{className:`dest-field-label`,children:`ISLAND VIBE`}),(0,z.jsxs)(`div`,{className:`dest-field-input-box`,children:[(0,z.jsx)(E,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,z.jsxs)(`select`,{value:a,onChange:e=>o(e.target.value),className:`dest-field-select`,children:[(0,z.jsx)(`option`,{value:`All Island Vibes`,children:`All Island Vibes`}),(0,z.jsx)(`option`,{value:`Beaches & Scuba`,children:`Beaches & Scuba Diving`}),(0,z.jsx)(`option`,{value:`Heritage & Capital`,children:`Heritage & Capital Gateway`}),(0,z.jsx)(`option`,{value:`Eco Mangrove Safari`,children:`Eco Mangrove Safaris`}),(0,z.jsx)(`option`,{value:`Peaks & Sandbars`,children:`Peaks & Twin Sandbars`})]})]})]}),(0,z.jsxs)(`div`,{className:`dest-search-field`,children:[(0,z.jsx)(`label`,{className:`dest-field-label`,children:`TRAVEL DATE / MONTH`}),(0,z.jsxs)(`div`,{className:`dest-field-input-box`,children:[(0,z.jsx)(T,{size:16,color:`#F06543`,style:{flexShrink:0}}),(0,z.jsx)(`input`,{type:`date`,value:s,onChange:e=>l(e.target.value),style:{background:`transparent`,border:`none`,color:`#0B2545`,outline:`none`,fontFamily:`'Inter', sans-serif`,fontSize:13,fontWeight:600,width:`100%`}})]})]}),(0,z.jsxs)(`div`,{className:`dest-search-field`,children:[(0,z.jsx)(`label`,{className:`dest-field-label`,children:`GUEST TRAVELERS`}),(0,z.jsxs)(`div`,{className:`dest-field-input-box`,style:{justifyContent:`space-between`},children:[(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,z.jsx)(ee,{size:16,color:`#F06543`}),(0,z.jsxs)(`span`,{style:{fontSize:13,fontWeight:700,color:`#0B2545`},children:[u,` Ad`,f>0?`, ${f} Ch`:``]})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,z.jsx)(`button`,{type:`button`,className:`dest-counter-btn`,onClick:()=>d(Math.max(1,u-1)),title:`Decrease Adults`,children:`-`}),(0,z.jsx)(`button`,{type:`button`,className:`dest-counter-btn`,onClick:()=>d(u+1),title:`Increase Adults`,children:`+`})]})]})]})]}),(0,z.jsxs)(`button`,{type:`submit`,className:`dest-search-submit-btn`,children:[(0,z.jsx)(`span`,{children:`SEARCH ISLAND DESTINATIONS`}),(0,z.jsx)(c,{size:15})]})]})]})}function H({destination:e,onViewDetails:t,onPlanTrip:n}){if(!e)return null;let r=e.name||`HAVELOCK ISLAND`,a=e.alias||`Swaraj Dweep`,s=e.region||`South Andaman`,c=Number(e.rating||4.9).toFixed(1),u=e.reviews||420,d=e.ferryText||`90 min Catamaran from Port Blair`,p=e.image||`https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=85`,h=e.tags||[`Radhanagar Beach No. 7`,`Elephant Reef Scuba Diving`,`Bioluminescence Night Kayaking`,`Vijaynagar Sunrise Coast`];return(0,z.jsxs)(`section`,{className:`featured-dest-root`,children:[(0,z.jsx)(`style`,{children:`
        .featured-dest-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .featured-dest-card {
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
        .featured-dest-card:hover {
          border-color: #F06543;
          box-shadow: 0 25px 60px rgba(0, 45, 98, 0.14);
        }
        @media (max-width: 960px) {
          .featured-dest-card { grid-template-columns: 1fr; padding: 24px; }
        }

        .featured-dest-img-box {
          position: relative;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
        }
        .featured-dest-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.65s ease;
        }
        .featured-dest-card:hover .featured-dest-img-box img {
          transform: scale(1.06);
        }

        .featured-dest-badges {
          position: absolute; top: 16px; left: 16px;
          display: flex; align-items: center; gap: 8px; z-index: 2;
        }

        .dest-fire-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
          text-transform: uppercase;
        }

        .dest-sub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 6px 12px; border-radius: 20px;
          border: 1px solid #e2e8f0;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dest-img-footer {
          position: absolute; bottom: 16px; left: 16px; right: 16px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          padding: 12px 18px; border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          display: flex; align-items: center; justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .dest-metrics-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; margin: 18px 0;
        }

        .dest-metric-box {
          background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 16px; padding: 12px; text-align: center;
        }

        .dest-spotlight-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 15px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; width: 100%;
          box-shadow: 0 8px 28px rgba(0, 45, 98, 0.25);
        }
        .dest-spotlight-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,z.jsxs)(`div`,{className:`featured-dest-card`,children:[(0,z.jsxs)(`div`,{className:`featured-dest-img-box`,children:[(0,z.jsx)(`img`,{src:p,alt:r}),(0,z.jsxs)(`div`,{className:`featured-dest-badges`,children:[(0,z.jsxs)(`div`,{className:`dest-fire-badge`,children:[(0,z.jsx)(l,{size:13,className:`fill-white`}),(0,z.jsx)(`span`,{children:`MOST POPULAR ISLE`})]}),(0,z.jsx)(`div`,{className:`dest-sub-badge`,children:`ASIA'S TOP BEACH #7`})]}),(0,z.jsxs)(`div`,{className:`dest-img-footer`,children:[(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,z.jsx)(D,{size:14,color:`#F06543`}),(0,z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#0B2545`},children:d})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,z.jsx)(f,{size:14,className:`fill-[#ffd700] text-[#ffd700]`}),(0,z.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#0B2545`},children:[c,` (`,u,` reviews)`]})]})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2 shadow-sm`,children:[(0,z.jsx)(w,{size:12,className:`text-[#ffd700]`}),(0,z.jsx)(`span`,{children:`DESTINATION SPOTLIGHT`})]}),(0,z.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(28px, 4vw, 44px)`,fontWeight:700,color:`#0B2545`,margin:`4px 0 8px`,lineHeight:1.15},children:r}),(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#F06543`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:12},children:[(0,z.jsx)(j,{size:13,color:`#F06543`}),(0,z.jsxs)(`span`,{children:[a,` • `,s]})]}),(0,z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#64748b`,lineHeight:1.6,marginBottom:16},children:e.description||`Home to world-famous Radhanagar Beach (Asia’s Top Beach No. 7), turquoise coral lagoons, Dixon’s Pinnacle deep scuba diving & bioluminescent night kayak expeditions.`}),(0,z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:16},children:h.map((e,t)=>(0,z.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:4,background:`#FFF0EB`,border:`1px solid rgba(13,148,136,0.3)`,color:`#F06543`,fontSize:11.5,fontWeight:700,padding:`4px 10px`,borderRadius:10},children:[(0,z.jsx)(i,{size:12}),(0,z.jsx)(`span`,{children:e})]},t))}),(0,z.jsxs)(`div`,{className:`dest-metrics-grid`,children:[(0,z.jsxs)(`div`,{className:`dest-metric-box`,children:[(0,z.jsxs)(`div`,{style:{fontSize:10,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,marginBottom:4},children:[(0,z.jsx)(O,{size:12,color:`#F06543`}),` Scuba Score`]}),(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:900,color:`#0B2545`},children:e.scubaScore||`98% Top`})]}),(0,z.jsxs)(`div`,{className:`dest-metric-box`,children:[(0,z.jsxs)(`div`,{style:{fontSize:10,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,marginBottom:4},children:[(0,z.jsx)(m,{size:12,color:`#F06543`}),` Water Temp`]}),(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:900,color:`#0B2545`},children:e.waterTemp||`28°C Warm`})]}),(0,z.jsxs)(`div`,{className:`dest-metric-box`,children:[(0,z.jsxs)(`div`,{style:{fontSize:10,fontWeight:800,color:`#64748b`,textTransform:`uppercase`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,marginBottom:4},children:[(0,z.jsx)(b,{size:12,color:`#F06543`}),` Water Clarity`]}),(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#F06543`},children:e.clarity||`Crystal (25m+)`})]})]}),(0,z.jsxs)(`button`,{onClick:()=>{t&&t(e.id||`havelock`)},className:`dest-spotlight-btn`,children:[(0,z.jsxs)(`span`,{children:[`EXPLORE `,r,` GUIDE & TOURS`]}),(0,z.jsx)(o,{size:15})]})]})]})]})}M.registerPlugin(N);var U=[{id:`beaches-scuba`,filterValue:`Beaches & Scuba`,title:`Beaches & Scuba Lagoons`,desc:`World-famous Radhanagar white sands, turquoise coral lagoons, and Asia’s premier PADI dive centers in Havelock & Neil.`,badge:`TOP CHOICE`,icon:x,image:`https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80`,islandsCount:`2 Major Isles`},{id:`heritage-capital`,filterValue:`Heritage & Capital`,title:`Heritage & Capital Hub`,desc:`National Cellular Jail memorial, Netaji Subhash Chandra Bose Island ruins, vibrant marine museums and harbor walks in Port Blair.`,badge:`HISTORIC GATEWAY`,icon:d,image:`https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80`,islandsCount:`Capital Port`},{id:`eco-mangroves`,filterValue:`Eco Mangrove Safari`,title:`Eco Mangroves & Caves`,desc:`Offbeat high-speed mangrove boat rides through dense creeks, stalactite caves, mud volcanoes & parrot island sanctuaries.`,badge:`ECO ADVENTURE`,icon:E,image:`https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=800&q=80`,islandsCount:`Middle Andaman`},{id:`peaks-sandbars`,filterValue:`Peaks & Sandbars`,title:`Twin Sandbars & Peaks`,desc:`The natural white sandbar linking Ross & Smith twin islands, Saddle Peak summit rainforest treks & turtle nesting beaches.`,badge:`HIGHEST PEAK`,icon:k,image:`https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=800&q=80`,islandsCount:`North Andaman`},{id:`biosphere-frontier`,filterValue:`Biosphere`,title:`Biosphere & Indira Point`,desc:`India’s southernmost frontier hosting the UNESCO Great Nicobar Biosphere Reserve and giant leatherback sea turtle nesting.`,badge:`FRONTIER ISLE`,icon:v,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80`,islandsCount:`Nicobar Archipelago`},{id:`volcanic-jewels`,filterValue:`Adventure`,title:`Volcanoes & Remote Atolls`,desc:`Live active Barren Island volcano charters, uninhabited Cinque Island reef systems & untouched Long Island Lalaji Bay.`,badge:`EXCLUSIVE ATROLLS`,icon:l,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80`,islandsCount:`Outer Atolls`}];function W({onSelectCategory:e}){let t=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!t.current)return;let e=t.current.querySelectorAll(`.cat-dest-card`);M.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.7,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 85%`}})},[]),(0,z.jsxs)(`section`,{className:`dest-categories-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-categories-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .dest-cat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-cat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .dest-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 1024px) {
          .dest-cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .dest-cat-grid { grid-template-columns: 1fr; }
        }

        .cat-dest-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-dest-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .cat-dest-img-box {
          position: relative; height: 200px; overflow: hidden; background: #f1f5f9;
        }
        .cat-dest-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-dest-card:hover .cat-dest-img-box img {
          transform: scale(1.1);
        }

        .cat-dest-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .cat-dest-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1.5px solid #e2e8f0;
          padding: 4px 12px; border-radius: 14px;
        }

        .cat-dest-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-dest-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 900; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-dest-card:hover .cat-dest-card-title { color: #F06543; }

        .cat-dest-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px; font-weight: 500;
        }

        .cat-dest-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          letter-spacing: 0.05em;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-cat-eyebrow`,children:[(0,z.jsx)(E,{size:14,color:`#F06543`}),(0,z.jsx)(`span`,{children:`ISLAND EXPERIENCES & VIBES`})]}),(0,z.jsx)(`h2`,{className:`dest-cat-title`,children:`CHOOSE YOUR ISLAND ATMOSPHERE`}),(0,z.jsx)(`div`,{ref:t,className:`dest-cat-grid`,children:U.map(t=>{let n=t.icon;return(0,z.jsxs)(`div`,{className:`cat-dest-card`,onClick:()=>e&&e(t.filterValue),children:[(0,z.jsxs)(`div`,{className:`cat-dest-img-box`,children:[(0,z.jsx)(`img`,{src:t.image,alt:t.title}),(0,z.jsx)(`div`,{className:`cat-dest-icon-badge`,children:(0,z.jsx)(n,{size:18})}),(0,z.jsx)(`div`,{className:`cat-dest-duration-badge`,children:t.islandsCount})]}),(0,z.jsxs)(`div`,{className:`cat-dest-body`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`cat-dest-card-title`,children:t.title}),(0,z.jsx)(`p`,{className:`cat-dest-card-desc`,children:t.desc})]}),(0,z.jsxs)(`div`,{className:`cat-dest-card-footer`,children:[(0,z.jsx)(`span`,{children:`EXPLORE ISLANDS`}),(0,z.jsx)(o,{size:14})]})]})]},t.id)})})]})}M.registerPlugin(N);var G=[{id:`havelock`,name:`HAVELOCK ISLAND`,alias:`Swaraj Dweep`,filterValue:`South Andaman`,ferryTime:`90 min Catamaran`,badge:`MUST VISIT #1`,rating:`4.9`,desc:`Asia’s premier white-sand lagoon, home to Radhanagar Beach No. 7, Elephant Beach coral walks and deep PADI scuba diving.`,topSpots:[`Radhanagar Beach No. 7`,`Elephant Beach Reef`,`Dixon’s Pinnacle Scuba`],startingPrice:`₹1,499`},{id:`neil`,name:`NEIL ISLAND`,alias:`Shaheed Dweep`,filterValue:`South Andaman`,ferryTime:`60 min from Havelock`,badge:`TRANQUIL HAVEN`,rating:`4.8`,desc:`The tranquil vegetable bowl of the Andamans, boasting the 3D biological Howrah Rock Bridge and breathtaking Laxmanpur sunsets.`,topSpots:[`Natural Rock Bridge`,`Laxmanpur Sunset Point`,`Bharatpur Snorkel Bay`],startingPrice:`₹1,299`},{id:`port-blair`,name:`PORT BLAIR`,alias:`Capital Gateway`,filterValue:`South Andaman`,ferryTime:`Airport Hub (0 min)`,badge:`HISTORIC HUB`,rating:`4.7`,desc:`The historic capital gateway hosting the Cellular Jail National Memorial, colonial Ross Island ruins and harbor promenades.`,topSpots:[`Cellular Jail Memorial`,`Netaji Subhash Bose Island`,`Corbyn’s Cove Beach`],startingPrice:`₹899`},{id:`baratang`,name:`BARATANG ISLAND`,alias:`Middle Andaman`,filterValue:`Middle Andaman`,ferryTime:`3 hrs Road & Boat`,badge:`ECO MANGROVES`,rating:`4.6`,desc:`Thrilling high-speed boat safaris through dense tropical mangrove creeks, million-year-old limestone stalactite caves & mud volcanoes.`,topSpots:[`Limestone Caves Safari`,`Mud Volcano Formations`,`Parrot Island Sunset`],startingPrice:`₹1,850`}];function le({onSelectIsland:e}){let[t,n]=(0,R.useState)(G[0].id),r=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!r.current)return;let e=r.current.querySelectorAll(`.dest-hub-card`);M.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`,scrollTrigger:{trigger:r.current,start:`top 85%`}})},[]),(0,z.jsxs)(`section`,{className:`dest-islands-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-islands-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .dest-islands-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-islands-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .dest-islands-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .dest-islands-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .dest-islands-grid { grid-template-columns: 1fr; }
        }

        .dest-hub-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .dest-hub-card:hover, .dest-hub-card.active {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.14);
        }
        .dest-hub-card.active {
          background: #FFF0EB;
        }

        .dest-hub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.08em;
          color: #F06543; background: #FFF0EB;
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid rgba(13, 148, 136, 0.3);
          display: inline-block; margin-bottom: 12px; text-transform: uppercase;
        }

        .dest-hub-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          line-height: 1.3; margin: 0 0 4px;
        }

        .dest-hub-spot {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #F06543;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 12px; text-transform: uppercase;
        }

        .dest-hub-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin-bottom: 16px; font-weight: 500;
        }

        .dest-top-spots-list {
          display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
          padding-top: 12px; border-top: 1.5px solid #f1f5f9;
        }
        .dest-top-spot-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #334155; font-weight: 600;
        }

        .dest-hub-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 900;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-islands-eyebrow`,children:[(0,z.jsx)(E,{size:14,color:`#F06543`}),(0,z.jsx)(`span`,{children:`ISLAND HUBS & TRANSIT PORTS`})]}),(0,z.jsx)(`h2`,{className:`dest-islands-title`,children:`EXPLORE THE ARCHIPELAGO BY ISLAND`}),(0,z.jsx)(`div`,{ref:r,className:`dest-islands-grid`,children:G.map(r=>{let a=t===r.id;return(0,z.jsxs)(`div`,{className:`dest-hub-card${a?` active`:``}`,onClick:()=>{n(r.id),e&&e(r.filterValue)},children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,z.jsx)(`span`,{className:`dest-hub-badge`,children:r.badge}),(0,z.jsxs)(`div`,{className:`flex items-center gap-1 text-[#ffd700] text-xs font-mono font-bold`,children:[(0,z.jsx)(f,{size:11,className:`fill-[#ffd700]`}),(0,z.jsx)(`span`,{children:r.rating})]})]}),(0,z.jsx)(`div`,{className:`dest-hub-title`,children:r.name}),(0,z.jsxs)(`div`,{className:`dest-hub-spot`,children:[(0,z.jsx)(j,{size:11}),(0,z.jsx)(`span`,{children:r.alias})]}),(0,z.jsx)(`p`,{className:`dest-hub-desc`,children:r.desc}),(0,z.jsx)(`div`,{className:`dest-top-spots-list`,children:r.topSpots.map((e,t)=>(0,z.jsxs)(`div`,{className:`dest-top-spot-item`,children:[(0,z.jsx)(i,{size:12,color:`#F06543`}),(0,z.jsx)(`span`,{children:e})]},t))})]}),(0,z.jsxs)(`div`,{className:`dest-hub-footer`,children:[(0,z.jsxs)(`span`,{style:{color:`#F06543`,display:`flex`,alignItems:`center`,gap:4,fontFamily:`'Inter', sans-serif`,fontSize:11.5,fontWeight:700},children:[(0,z.jsx)(D,{size:12}),r.ferryTime]}),(0,z.jsxs)(`span`,{style:{color:`#0B2545`,display:`flex`,alignItems:`center`,gap:4},children:[(0,z.jsx)(`span`,{children:`FILTER`}),(0,z.jsx)(o,{size:13})]})]})]},r.id)})})]})}function ue({destination:e,isWishlisted:t,onToggleWishlist:n,onViewDetails:r}){if(!e)return null;let a=()=>{r?r(e.id||e.slug):(window.history.pushState({},``,`/destination-details?id=${e.id||e.slug}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`}))},s=e.name||`HAVELOCK ISLAND`,c=e.alias||`Swaraj Dweep`,l=e.region||`South Andaman`,u=Number(e.rating||4.8).toFixed(1),d=e.reviews||350,p=e.ferryTime||`90 min`,m=e.startingPrice||`1,499`,h=e.image||e.heroImage||`https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80`,g=e.tags||[`Turquoise Lagoons`,`PADI Scuba Reefs`];return(0,z.jsxs)(`div`,{className:`dest-card-root`,onClick:a,children:[(0,z.jsx)(`style`,{children:`
        .dest-card-root {
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

        .dest-card-root:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .dest-card-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .dest-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dest-card-root:hover .dest-card-img-box img {
          transform: scale(1.08);
        }

        .dest-card-badge {
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

        .dest-card-wishlist {
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
        .dest-card-wishlist:hover {
          color: #ff4f7b;
          background: #ffffff;
          border-color: #ff4f7b;
          transform: scale(1.1);
        }

        .dest-card-body {
          padding: 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dest-card-location {
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

        .dest-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .dest-card-root:hover .dest-card-title {
          color: #F06543;
        }

        .dest-card-desc {
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

        .dest-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .dest-chip {
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

        .dest-card-meta {
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

        .dest-card-btn {
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

        .dest-card-root:hover .dest-card-btn {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(0, 45, 98, 0.28);
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-card-img-box`,children:[(0,z.jsx)(`img`,{src:h,alt:s}),(0,z.jsx)(`span`,{className:`dest-card-badge`,children:e.category||l}),(0,z.jsx)(`button`,{onClick:t=>{t.stopPropagation(),n&&n(e.id,t)},className:`dest-card-wishlist`,title:`Save to Wishlist`,children:(0,z.jsx)(ie,{className:`w-3.5 h-3.5 ${t?`fill-[#ff4f7b] text-[#ff4f7b]`:``}`})})]}),(0,z.jsxs)(`div`,{className:`dest-card-body`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`dest-card-location`,children:[(0,z.jsx)(j,{size:11,color:`#F06543`}),(0,z.jsxs)(`span`,{children:[c,` • `,l]})]}),(0,z.jsx)(`div`,{className:`dest-card-title`,children:s}),(0,z.jsx)(`p`,{className:`dest-card-desc`,children:e.description||e.shortDescription}),(0,z.jsx)(`div`,{className:`dest-card-chips`,children:g.slice(0,2).map((e,t)=>(0,z.jsxs)(`span`,{className:`dest-chip`,children:[(0,z.jsx)(i,{size:11,color:`#F06543`}),(0,z.jsx)(`span`,{children:e})]},t))}),(0,z.jsxs)(`div`,{className:`dest-card-meta`,children:[(0,z.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,z.jsx)(D,{size:12,color:`#F06543`}),p]}),(0,z.jsx)(`span`,{style:{color:`#94a3b8`},children:`•`}),(0,z.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,z.jsx)(f,{size:12,className:`fill-[#ffd700] text-[#ffd700]`}),u,` (`,d,`)`]}),(0,z.jsx)(`span`,{style:{color:`#94a3b8`},children:`•`}),(0,z.jsxs)(`span`,{className:`font-mono text-sm font-black text-[#0B2545]`,children:[`Starts ₹`,m]})]})]}),(0,z.jsxs)(`button`,{className:`dest-card-btn`,onClick:e=>{e.stopPropagation(),a()},children:[(0,z.jsx)(`span`,{children:`EXPLORE ISLAND GUIDE`}),(0,z.jsx)(o,{size:13})]})]})]})}var K=[92.9,11.7],q={satellite:{id:`satellite`,label:`Satellite`,icon:`🛰`,style:{version:8,sources:{esri_sat:{type:`raster`,tiles:[`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`],tileSize:256,attribution:`© Esri, Maxar, Earthstar Geographics`,maxzoom:19},osm_labels:{type:`raster`,tiles:[`https://stamen-tiles-a.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png`],tileSize:256,attribution:`Map tiles by Stamen Design`,maxzoom:18}},layers:[{id:`satellite-layer`,type:`raster`,source:`esri_sat`,minzoom:0,maxzoom:22,paint:{"raster-saturation":.1,"raster-brightness-min":.06}}]}},dark:{id:`dark`,label:`Dark Ocean`,icon:`🌊`,style:`https://tiles.openfreemap.org/styles/dark`},terrain:{id:`terrain`,label:`Terrain`,icon:`🏔`,style:{version:8,sources:{osm:{type:`raster`,tiles:[`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`],tileSize:256,attribution:`© OpenStreetMap contributors`}},layers:[{id:`osm`,type:`raster`,source:`osm`,paint:{"raster-saturation":-.5,"raster-brightness-min":.04,"raster-brightness-max":.7}}]}}},J=[{id:`port-blair`,name:`Port Blair`,subtitle:`The Capital Gateway`,lngLat:[92.7265,11.6234],zoom:11,badge:`CAPITAL`,color:`#F06543`,description:`The capital and main entry point to the Andaman Islands, home to the historic Cellular Jail.`,activities:[`Historical Tour`,`Scuba Diving`,`Boat Tours`,`Museums`],distance:`1,255 km from Chennai`},{id:`havelock`,name:`Havelock Island`,subtitle:`Radhanagar Beach Paradise`,lngLat:[93.0167,12.0297],zoom:12,badge:`MOST POPULAR`,color:`#00b4d8`,description:`Home to Asia's best beach — Radhanagar. Crystal-clear water and world-class diving.`,activities:[`Scuba Diving`,`Snorkelling`,`Beach Walks`,`Kayaking`],distance:`57 km from Port Blair`},{id:`neil`,name:`Neil Island`,subtitle:`Vegetable Bowl of Andamans`,lngLat:[93.0487,11.8297],zoom:12.5,badge:`SERENE`,color:`#80d4a0`,description:`A quiet paradise with lush farms, natural rock formations, and pristine beaches.`,activities:[`Snorkelling`,`Beach Walks`,`Cycling`,`Photography`],distance:`37 km from Port Blair`},{id:`baratang`,name:`Baratang Island`,subtitle:`Limestone Caves & Mangroves`,lngLat:[92.7581,12.2128],zoom:11.5,badge:`ADVENTURE`,color:`#f0c060`,description:`Famous for limestone caves, mud volcanoes, and dense mangrove forests.`,activities:[`Cave Exploration`,`Mangrove Safari`,`Boat Tours`],distance:`100 km from Port Blair`},{id:`diglipur`,name:`Diglipur`,subtitle:`North Andaman Adventure Hub`,lngLat:[92.9731,13.2706],zoom:11,badge:`REMOTE`,color:`#c060f0`,description:`Andaman's northernmost hub with the famous Saddle Peak and Ross & Smith Islands.`,activities:[`Trekking`,`Turtle Watching`,`Beach Camping`,`Fishing`],distance:`320 km from Port Blair`},{id:`little-andaman`,name:`Little Andaman`,subtitle:`Surfer's Paradise`,lngLat:[92.5781,10.7297],zoom:11.5,badge:`SURF`,color:`#60c0f0`,description:`Renowned for its surf breaks, waterfalls, and the pristine Butler Bay beach.`,activities:[`Surfing`,`Waterfall Trek`,`Fishing`,`Eco Tourism`],distance:`120 km from Port Blair`},{id:`rangat`,name:`Rangat`,subtitle:`Turtle Nesting Sanctuary`,lngLat:[92.8831,12.5228],zoom:11,badge:`WILDLIFE`,color:`#60f0a0`,description:`A haven for olive ridley turtles with pristine forests and secluded beaches.`,activities:[`Turtle Watching`,`Nature Walks`,`Bird Watching`,`Creek Boating`],distance:`160 km from Port Blair`},{id:`ross-island`,name:`Ross Island`,subtitle:`Colonial-Era Ruins`,lngLat:[92.7481,11.6714],zoom:13,badge:`HERITAGE`,color:`#f09060`,description:`The former British HQ — now a nature reserve with deer, peacocks, and haunting ruins.`,activities:[`Historical Tour`,`Wildlife Safari`,`Photography`,`Beach Walks`],distance:`3 km from Port Blair`}],Y=[{from:`port-blair`,to:`havelock`,type:`ferry`,label:`Govt Ferry 2.5h`},{from:`port-blair`,to:`neil`,type:`ferry`,label:`Ferry 1.5h`},{from:`havelock`,to:`neil`,type:`ferry`,label:`Makruzz 30min`},{from:`port-blair`,to:`baratang`,type:`road`,label:`Road+Boat 2.5h`},{from:`port-blair`,to:`ross-island`,type:`ferry`,label:`Speedboat 15min`},{from:`port-blair`,to:`rangat`,type:`ferry`,label:`Ferry 5h`},{from:`rangat`,to:`diglipur`,type:`road`,label:`Road 3h`},{from:`port-blair`,to:`little-andaman`,type:`ferry`,label:`Ferry 6h`}];function de(e,t){let n=document.createElement(`div`);return n.className=`andaman-marker`,n.innerHTML=`
    <div style="
      display:flex; flex-direction:column; align-items:center;
      font-family:'Space Grotesk',sans-serif;
    ">
      <!-- Dot -->
      <div style="position:relative; width:16px; height:16px; margin-bottom:5px;">
        <div style="
          position:absolute; inset:-5px; border-radius:50%;
          border:1.5px solid ${e.color};
          animation:ringPulse 2.2s ease-out infinite;
        "></div>
        <div style="
          position:absolute; inset:-10px; border-radius:50%;
          border:1.5px solid ${e.color};
          animation:ringPulse 2.2s ease-out 0.8s infinite;
        "></div>
        <div style="
          width:16px; height:16px; border-radius:50%;
          background:radial-gradient(circle at 35% 35%, ${e.color}, ${e.color}99);
          box-shadow: 0 0 ${t?20:12}px ${e.color}90;
          animation:markerPulse 2.2s ease-in-out infinite;
        "></div>
      </div>
      <!-- Label -->
      <div style="
        background:rgba(4,10,28,0.85);
        backdrop-filter:blur(16px);
        -webkit-backdrop-filter:blur(16px);
        border:1px solid ${e.color}44;
        border-radius:10px;
        padding:4px 10px;
        white-space:nowrap;
        box-shadow: 0 4px 16px rgba(0,0,0,0.5);
      ">
        <div style="font-size: 12.5px; font-weight:600; color:#fff; letter-spacing:0.04em;">${e.name}</div>
        <div style="font-size: 12px; color:${e.color}; letter-spacing:0.06em; margin-top:1px;">${e.badge}</div>
      </div>
      <!-- Connector line -->
      <div style="
        width:1px; height:14px;
        background:linear-gradient(to bottom, ${e.color}80, transparent);
        margin-top:-2px;
      "></div>
    </div>
  `,n}function fe(e){let t=e.activities.map(e=>`<span style="
      background:rgba(0,201,212,0.08);
      border:1px solid rgba(0,201,212,0.18);
      color:#c8dff0;
      font-size:9.5px;
      padding:3px 10px;
      border-radius:20px;
      font-family:'Space Grotesk',sans-serif;
      white-space:nowrap;
    ">${e}</span>`).join(``);return`
    <div style="padding:0; border-radius:16px; overflow:hidden; min-width:230px;">
      <!-- Header gradient -->
      <div style="
        height:70px;
        background:linear-gradient(135deg, #0a2a50, #0d4060, #1a6050);
        position:relative; display:flex; align-items:flex-end; padding:12px 14px 10px;
      ">
        <div style="
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 40%, rgba(4,10,28,0.85));
        "></div>
        <div style="position:relative; z-index:1;">
          <div style="
            display:inline-block;
            background:rgba(0,201,212,0.15);
            border:1px solid ${e.color}55;
            border-radius:20px; padding:3px 9px;
            font-family:'Space Grotesk',sans-serif;
            font-size: 12px; font-weight:700; letter-spacing:0.14em;
            color:${e.color}; margin-bottom:4px;
          ">${e.badge}</div>
          <div style="
            font-family:'Cormorant Garamond','Georgia',serif;
            font-size:19px; font-weight:600; color:#fff; line-height:1.1;
          ">${e.name}</div>
        </div>
      </div>

      <!-- Body -->
      <div style="padding:14px 14px 16px; background:rgba(4,10,28,0.95);">
        <!-- Meta -->
        <div style="display:flex; gap:14px; margin-bottom:10px;">
          <span style="font-family:'Space Grotesk',sans-serif; font-size: 12px; color: #64748b;">
            📍 ${e.distance}
          </span>
        </div>

        <!-- Subtitle -->
        <div style="
          font-family:'Space Grotesk',sans-serif;
          font-size: 12px; letter-spacing:0.15em; font-weight:600;
          color:${e.color}; text-transform:uppercase; margin-bottom:8px;
        ">${e.subtitle}</div>

        <!-- Description -->
        <p style="
          font-family:'Inter',sans-serif;
          font-size: 13px; color:#c8dff0; line-height:1.65; font-weight:300;
          margin-bottom:12px;
        ">${e.description}</p>

        <!-- Activities -->
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px;">
          ${t}
        </div>

        <!-- CTA -->
        <button
          onclick="window.__mapDestClick && window.__mapDestClick('${e.id}')"
          style="
            width:100%;
            background:linear-gradient(135deg, #F06543, #00b4d8);
            border:none; color:#050d1a;
            font-family:'Space Grotesk',sans-serif;
            font-size: 13px; font-weight:700;
            padding:11px; border-radius:10px; cursor:pointer;
            letter-spacing:0.07em; transition:all 0.2s;
          "
          onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 20px rgba(0,201,212,0.4)'"
          onmouseout="this.style.transform=''; this.style.boxShadow=''"
        >
          EXPLORE ${e.name.toUpperCase()} →
        </button>
      </div>
    </div>
  `}function pe({currentStyle:e,onSwitch:t,isNight:n}){let r=Object.values(q);return(0,z.jsx)(`div`,{style:{position:`absolute`,top:18,right:18,zIndex:200,display:`flex`,gap:6},children:r.map(r=>(0,z.jsxs)(`button`,{onClick:()=>t(r.id),style:{background:e===r.id?`linear-gradient(135deg, #F06543, #00b4d8)`:n?`rgba(4,8,24,0.82)`:`rgba(5,18,40,0.72)`,backdropFilter:`blur(20px)`,border:e===r.id?`1px solid rgba(0,201,212,0.5)`:`1px solid rgba(0,201,212,0.16)`,color:e===r.id?`#050d1a`:`#c8dff0`,fontFamily:`'Space Grotesk',sans-serif`,fontSize:12.5,fontWeight:e===r.id?700:500,padding:`7px 14px`,borderRadius:30,cursor:`pointer`,letterSpacing:`0.06em`,transition:`all 0.25s`,display:`flex`,alignItems:`center`,gap:6,boxShadow:e===r.id?`0 4px 20px rgba(0,201,212,0.35)`:`0 4px 16px rgba(0,0,0,0.4)`},children:[(0,z.jsx)(`span`,{style:{fontSize:13},children:r.icon}),r.label.toUpperCase()]},r.id))})}function me({isNight:e}){let t=[{label:`ISLANDS`,value:`572`},{label:`AREA`,value:`8,249 km²`},{label:`CORAL REEFS`,value:`96%`},{label:`FOREST COVER`,value:`86%`}];return(0,z.jsx)(`div`,{style:{position:`absolute`,bottom:16,left:`50%`,transform:`translateX(-50%)`,zIndex:200,pointerEvents:`none`},children:(0,z.jsx)(`div`,{style:{background:e?`rgba(4,8,24,0.85)`:`rgba(5,18,40,0.75)`,backdropFilter:`blur(20px)`,border:`1px solid rgba(0,201,212,0.14)`,borderRadius:50,padding:`10px 24px`,display:`flex`,alignItems:`center`,gap:22,boxShadow:`0 8px 40px rgba(0,0,0,0.5)`,whiteSpace:`nowrap`},children:t.map((e,n)=>(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:22},children:[(0,z.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk',sans-serif`,fontSize:14,fontWeight:700,color:`#334155`,lineHeight:1.2},children:e.value}),(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk',sans-serif`,fontSize:12.5,color:`#64748b`,letterSpacing:`0.12em`},children:e.label})]}),n<t.length-1&&(0,z.jsx)(`div`,{style:{width:1,height:26,background:`#e2e8f0`}})]},e.label))})})}function he({isNight:e}){return(0,z.jsx)(`div`,{style:{position:`absolute`,bottom:70,left:16,zIndex:200},children:(0,z.jsxs)(`div`,{style:{background:e?`rgba(4,8,24,0.85)`:`rgba(5,18,40,0.75)`,backdropFilter:`blur(16px)`,border:`1px solid rgba(0,201,212,0.14)`,borderRadius:14,padding:`12px 14px`,boxShadow:`0 4px 20px rgba(0,0,0,0.5)`},children:[(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk',sans-serif`,fontSize:12,letterSpacing:`0.2em`,color:`#64748b`,marginBottom:8,textTransform:`uppercase`},children:`Routes`}),[{color:`#F06543`,dash:!1,label:`Ferry Route`},{color:`#f0c060`,dash:!0,label:`Road + Boat`}].map(e=>(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:5},children:[(0,z.jsx)(`svg`,{width:`24`,height:`8`,children:e.dash?(0,z.jsx)(`line`,{x1:`0`,y1:`4`,x2:`24`,y2:`4`,stroke:e.color,strokeWidth:`1.5`,strokeDasharray:`4 3`}):(0,z.jsx)(`line`,{x1:`0`,y1:`4`,x2:`24`,y2:`4`,stroke:e.color,strokeWidth:`1.5`})}),(0,z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk',sans-serif`,fontSize:12.5,color:`#c8dff0`},children:e.label})]},e.label))]})})}function ge({isNight:e,visible:t}){let n=(0,R.useRef)(null),r=(0,R.useRef)(null),i=(0,R.useRef)([]),a=(0,R.useRef)(null),[o,s]=(0,R.useState)(`satellite`),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(!n.current||r.current)return;let e=q[o],t=new ce({container:n.current,style:e.style,center:K,zoom:8.2,pitch:20,bearing:0,minZoom:5,maxZoom:18,antialias:!0});return r.current=t,t.addControl(new P({visualizePitch:!0}),`bottom-right`),t.addControl(new F({unit:`metric`}),`bottom-left`),t.on(`load`,()=>{d(!0),f(t),p(t)}),()=>{i.current.forEach(e=>e.remove()),t.remove(),r.current=null}},[]);let f=(0,R.useCallback)(e=>{let t=e=>{let t=J.find(t=>t.id===e);return t?t.lngLat:null},n=Y.filter(e=>e.type===`ferry`).map(e=>({type:`Feature`,geometry:{type:`LineString`,coordinates:[t(e.from),t(e.to)].filter(Boolean)},properties:{label:e.label}})),r=Y.filter(e=>e.type===`road`).map(e=>({type:`Feature`,geometry:{type:`LineString`,coordinates:[t(e.from),t(e.to)].filter(Boolean)},properties:{label:e.label}}));e.addSource(`routes-ferry`,{type:`geojson`,data:{type:`FeatureCollection`,features:n}}),e.addLayer({id:`routes-ferry-glow`,type:`line`,source:`routes-ferry`,paint:{"line-color":`#F06543`,"line-width":5,"line-opacity":.08,"line-blur":6}}),e.addLayer({id:`routes-ferry`,type:`line`,source:`routes-ferry`,paint:{"line-color":`#F06543`,"line-width":1.5,"line-opacity":.65,"line-dasharray":[4,3]}}),e.addSource(`routes-road`,{type:`geojson`,data:{type:`FeatureCollection`,features:r}}),e.addLayer({id:`routes-road`,type:`line`,source:`routes-road`,paint:{"line-color":`#f0c060`,"line-width":1.5,"line-opacity":.55,"line-dasharray":[3,4]}})},[]),p=(0,R.useCallback)(e=>{i.current.forEach(e=>e.remove()),i.current=[],J.forEach(t=>{let n=de(t,!1),r=new I({element:n,anchor:`bottom`}).setLngLat(t.lngLat).addTo(e);n.addEventListener(`click`,()=>{l(t),a.current&&a.current.remove();let n=new L({offset:30,closeButton:!0,maxWidth:`280px`}).setLngLat(t.lngLat).setHTML(fe(t)).addTo(e);a.current=n,e.flyTo({center:t.lngLat,zoom:t.zoom,pitch:45,bearing:Math.random()*20-10,duration:2200,easing:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2})}),i.current.push(r)}),window.__mapDestClick=e=>{let t=J.find(t=>t.id===e);t&&(l(t),a.current&&a.current.remove())}},[]),m=(0,R.useCallback)(e=>{if(!r.current||e===o)return;s(e),d(!1);let t=q[e];r.current.setStyle(t.style),r.current.once(`styledata`,()=>{setTimeout(()=>{f(r.current),p(r.current),d(!0)},300)})},[o,f,p]),h=(0,R.useCallback)(()=>{r.current&&(l(null),a.current&&=(a.current.remove(),null),r.current.flyTo({center:K,zoom:8.2,pitch:20,bearing:0,duration:1800}))},[]);return(0,R.useEffect)(()=>{n.current&&M.fromTo(n.current.parentElement,{opacity:0},{opacity:1,duration:.8,ease:`power2.out`})},[t]),(0,z.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:10},children:[(0,z.jsx)(`div`,{ref:n,style:{position:`absolute`,inset:0}}),(0,z.jsx)(`style`,{children:`
        @keyframes ringPulse { 0%{transform:scale(0.6);opacity:0.7} 100%{transform:scale(2.4);opacity:0} }
        @keyframes markerPulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,201,212,0.4)} 50%{box-shadow:0 0 0 8px rgba(0,201,212,0)} }
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400&display=swap');
      `}),(0,z.jsx)(pe,{currentStyle:o,onSwitch:m,isNight:e}),(0,z.jsxs)(`div`,{style:{position:`absolute`,top:18,left:18,zIndex:200,display:`flex`,gap:8},children:[(0,z.jsxs)(`button`,{onClick:h,style:{background:e?`rgba(4,8,24,0.85)`:`rgba(5,18,40,0.75)`,backdropFilter:`blur(20px)`,border:`1px solid rgba(0,201,212,0.16)`,borderRadius:30,padding:`7px 16px`,color:`#c8dff0`,fontFamily:`'Space Grotesk',sans-serif`,fontSize:12.5,fontWeight:600,letterSpacing:`0.06em`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:7,transition:`all 0.2s`,boxShadow:`0 4px 16px rgba(0,0,0,0.4)`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`rgba(0,201,212,0.4)`,e.currentTarget.style.color=`#F06543`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`rgba(0,201,212,0.16)`,e.currentTarget.style.color=`#c8dff0`},children:[(0,z.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,z.jsx)(`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}),(0,z.jsx)(`path`,{d:`M3 3v5h5`})]}),`OVERVIEW`]}),(0,z.jsxs)(`div`,{style:{background:e?`rgba(4,8,24,0.85)`:`rgba(5,18,40,0.75)`,backdropFilter:`blur(20px)`,border:`1px solid rgba(0,201,212,0.14)`,borderRadius:30,padding:`7px 14px`,fontFamily:`'Space Grotesk',sans-serif`,fontSize:12.5,color:`#64748b`,letterSpacing:`0.06em`,display:`flex`,alignItems:`center`,gap:7,boxShadow:`0 4px 16px rgba(0,0,0,0.4)`},children:[(0,z.jsx)(`div`,{style:{width:6,height:6,borderRadius:`50%`,background:`#00b4d8`,boxShadow:`0 0 6px #00b4d8`,animation:`markerPulse 1.5s ease-in-out infinite`}}),J.length,` DESTINATIONS MAPPED`]})]}),(0,z.jsx)(he,{isNight:e}),(0,z.jsx)(me,{isNight:e}),!u&&(0,z.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:300,background:e?`rgba(1,8,18,0.9)`:`rgba(1,13,31,0.9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexDirection:`column`,gap:14,backdropFilter:`blur(8px)`},children:[(0,z.jsx)(`div`,{style:{width:48,height:48,borderRadius:`50%`,border:`2px solid rgba(0,201,212,0.15)`,borderTop:`2px solid #F06543`,animation:`spin 1s linear infinite`}}),(0,z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk',sans-serif`,fontSize:12.5,color:`#64748b`,letterSpacing:`0.15em`},children:`LOADING MAP…`}),(0,z.jsx)(`style`,{children:`@keyframes spin{to{transform:rotate(360deg)}}`})]})]})}var _e=[`ALL`,`SOUTH ANDAMAN`,`MIDDLE ANDAMAN`,`NORTH ANDAMAN`,`NICOBAR`];function ve({destinations:e=[],loading:t=!1,error:n=``,selectedRegion:r=`ALL`,onSelectRegion:i,searchQuery:a=``,onSearchChange:o,sortBy:l=`popular`,onChangeSortBy:u,onResetFilters:d,savedWishlist:f={},onToggleWishlist:p,onViewDetails:m,onRetry:h}){let[v,y]=(0,R.useState)(`grid`);return(0,z.jsxs)(`section`,{className:`dest-grid-section-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-grid-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 20px 24px 80px;
        }

        .dest-grid-filter-bar {
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
          margin-bottom: 36px;
        }

        .dest-filter-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .dest-tab-btn {
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
        .dest-tab-btn:hover {
          color: #0B2545;
          border-color: #F06543;
          background: #FFF0EB;
        }
        .dest-tab-btn.active {
          color: #ffffff;
          background: #0B2545;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.25);
        }

        .dest-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dest-grid-search-input {
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
        .dest-grid-search-input:focus {
          border-color: #F06543;
          background: #ffffff;
          width: 260px;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .dest-sort-select {
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
        .dest-sort-select:focus {
          border-color: #F06543;
        }

        .dest-results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .dest-results-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 820px) {
          .dest-results-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .dest-results-grid { grid-template-columns: 1fr; }
        }

        .dest-section-title-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-grid-filter-bar`,children:[(0,z.jsxs)(`div`,{className:`dest-filter-tabs`,children:[(0,z.jsxs)(`span`,{className:`text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mr-1 font-mono flex items-center gap-1`,children:[(0,z.jsx)(g,{size:12,color:`#F06543`}),` REGION:`]}),_e.map(e=>(0,z.jsx)(`button`,{type:`button`,onClick:()=>i&&i(e),className:`dest-tab-btn ${r===e?`active`:``}`,children:e},e))]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-3 w-full sm:w-auto`,children:[(0,z.jsxs)(`div`,{className:`dest-search-box flex-1 sm:flex-none`,children:[(0,z.jsx)(`input`,{type:`text`,placeholder:`Search islands or spots...`,value:a,onChange:e=>o&&o(e.target.value),className:`dest-grid-search-input`}),(0,z.jsx)(c,{className:`absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-3.5 h-3.5`}),a&&(0,z.jsx)(`button`,{type:`button`,onClick:()=>o&&o(``),className:`absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700`,children:(0,z.jsx)(te,{size:14})})]}),(0,z.jsxs)(`select`,{value:l,onChange:e=>u&&u(e.target.value),className:`dest-sort-select`,children:[(0,z.jsx)(`option`,{value:`popular`,children:`Most Popular`}),(0,z.jsx)(`option`,{value:`rating`,children:`Highest Rated`}),(0,z.jsx)(`option`,{value:`reviews`,children:`Most Reviews`}),(0,z.jsx)(`option`,{value:`priceAsc`,children:`Price: Low to High`})]}),(0,z.jsxs)(`button`,{type:`button`,onClick:()=>y(v===`grid`?`map`:`grid`),className:`dest-tab-btn flex items-center gap-1.5 ${v===`map`?`active`:``}`,children:[v===`grid`?(0,z.jsx)(S,{size:13}):(0,z.jsx)(s,{size:13}),(0,z.jsx)(`span`,{className:`hidden sm:inline`,children:v===`grid`?`MAP VIEW`:`GRID VIEW`})]})]})]}),(0,z.jsxs)(`div`,{className:`dest-section-title-wrap`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{className:`text-[11px] font-black uppercase tracking-widest text-[#F06543] font-mono block mb-1`,children:`VERIFIED ISLAND DIRECTORY`}),(0,z.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(26px, 3.5vw, 38px)`,fontWeight:700,color:`#0B2545`,margin:0},children:r===`ALL`?`ALL ANDAMAN ISLAND DESTINATIONS`:`${r} ISLES`})]}),(0,z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#64748b`},children:[`Showing `,(0,z.jsx)(`strong`,{style:{color:`#0B2545`},children:e.length}),` Islands`]})]}),v===`map`&&(0,z.jsx)(`div`,{className:`w-full h-[540px] rounded-3xl overflow-hidden border-2 border-[#e2e8f0] relative shadow-xl mb-12`,children:(0,z.jsx)(ge,{visible:!0,isNight:!0})}),t&&(0,z.jsxs)(`div`,{className:`py-20 text-center`,children:[(0,z.jsx)(`div`,{className:`w-10 h-10 border-4 border-[#F06543] border-t-transparent rounded-full animate-spin mx-auto mb-4`}),(0,z.jsx)(`p`,{className:`font-mono text-xs font-bold text-[#0B2545] uppercase tracking-wider`,children:`Loading Island Destinations...`})]}),!t&&n&&(0,z.jsxs)(`div`,{className:`p-8 rounded-3xl bg-red-50 border-2 border-red-200 text-center max-w-lg mx-auto my-12`,children:[(0,z.jsx)(`p`,{className:`text-sm font-bold text-red-700 mb-4`,children:n}),h&&(0,z.jsx)(`button`,{onClick:h,className:`px-6 py-2.5 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors`,children:`Retry`})]}),!t&&!n&&e.length===0&&(0,z.jsxs)(`div`,{className:`text-center py-20 bg-white rounded-3xl border-2 border-[#e2e8f0] p-8 shadow-sm`,children:[(0,z.jsx)(`div`,{className:`w-16 h-16 rounded-full bg-[#FFF0EB] border-2 border-[#F06543] flex items-center justify-center mx-auto mb-4 text-[#F06543]`,children:(0,z.jsx)(c,{size:28})}),(0,z.jsx)(`h3`,{className:`text-xl font-bold text-[#0B2545] mb-2 font-serif`,children:`No Islands Found`}),(0,z.jsx)(`p`,{className:`text-xs text-slate-500 max-w-md mx-auto mb-6`,children:`We couldn't find any destinations matching your current filters. Try changing your region or search keywords.`}),(0,z.jsxs)(`button`,{onClick:d,className:`px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-mono text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer`,children:[(0,z.jsx)(_,{size:14}),(0,z.jsx)(`span`,{children:`Reset All Filters`})]})]}),!t&&!n&&v===`grid`&&e.length>0&&(0,z.jsx)(`div`,{className:`dest-results-grid`,children:e.map((e,t)=>(0,z.jsx)(ue,{destination:e,isWishlisted:!!f[e.id],onToggleWishlist:p,onViewDetails:m},`${e.id||e.slug||`dest`}-${t}`))})]})}M.registerPlugin(N);var ye=[{icon:v,title:`CONFIRMED CATAMARAN FERRIES`,desc:`Guaranteed seat reservations on luxury private catamarans (Makruzz, Nautika, Green Ocean) with instant e-tickets.`},{icon:d,title:`VERIFIED BEACHFRONT RESORTS`,desc:`Handpicked beachfront cottages, boutique dive resorts & 5-star private island villas inspected directly by our local team.`},{icon:t,title:`FOREST & TRIBAL PERMITS`,desc:`Authorized permit clearances for Baratang mangrove convoys, Saddle Peak National Park & indigenous biosphere zones.`},{icon:w,title:`CURATED ISLAND TRAILS`,desc:`Bespoke multi-island day-by-day itineraries tailored for honeymooners, scuba divers, families and luxury wanderers.`},{icon:h,title:`24/7 PORT BLAIR CONCIERGE`,desc:`Dedicated on-ground harbour assistance, private jetty transfers, luggage handling and real-time weather monitoring.`}];function be(){let e=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!e.current)return;let t=e.current.querySelectorAll(`.why-dest-card`);M.fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:e.current,start:`top 85%`}})},[]),(0,z.jsxs)(`section`,{className:`why-dest-root`,children:[(0,z.jsx)(`style`,{children:`
        .why-dest-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-dest-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-dest-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-dest-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-dest-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-dest-grid { grid-template-columns: 1fr; }
        }

        .why-dest-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .why-dest-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .why-dest-icon-box {
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-dest-card:hover .why-dest-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .why-dest-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .why-dest-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}),(0,z.jsxs)(`div`,{className:`why-dest-eyebrow`,children:[(0,z.jsx)(w,{size:14,color:`#F06543`}),(0,z.jsx)(`span`,{children:`WHY ISLAND HOP WITH US`})]}),(0,z.jsx)(`h2`,{className:`why-dest-title`,children:`WHY EXPLORE ANDAMAN ISLANDS WITH OUR LOCAL CONCIERGE?`}),(0,z.jsx)(`div`,{ref:e,className:`reasons-dest-grid`,children:ye.map((e,t)=>{let n=e.icon;return(0,z.jsxs)(`div`,{className:`why-dest-card`,children:[(0,z.jsx)(`div`,{className:`why-dest-icon-box`,children:(0,z.jsx)(n,{size:24})}),(0,z.jsx)(`div`,{className:`why-dest-card-title`,children:e.title}),(0,z.jsx)(`p`,{className:`why-dest-card-desc`,children:e.desc})]},t)})})]})}function xe({onDiscoverHavelock:e}){return(0,z.jsxs)(`section`,{className:`havelock-exp-root`,children:[(0,z.jsx)(`style`,{children:`
        .havelock-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .havelock-card {
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
          .havelock-card { grid-template-columns: 1fr; }
        }

        .havelock-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .havelock-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .havelock-card:hover .havelock-img-box img {
          transform: scale(1.06);
        }

        .havelock-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .havelock-content-box { padding: 26px; }
        }

        .havelock-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .havelock-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .havelock-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .havelock-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .havelock-checklist { grid-template-columns: 1fr; }
        }

        .havelock-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .havelock-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .havelock-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,z.jsxs)(`div`,{className:`havelock-card`,children:[(0,z.jsxs)(`div`,{className:`havelock-img-box`,children:[(0,z.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85`,alt:`Radhanagar Beach Havelock Island`}),(0,z.jsx)(`div`,{className:`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm`,children:`👑 Crown Jewel of Andaman`}),(0,z.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs`,children:[(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[#2dd4bf] font-bold`,children:[(0,z.jsx)(j,{size:13}),` Swaraj Dweep`]}),(0,z.jsxs)(`span`,{className:`text-[#ffd700] font-bold flex items-center gap-1`,children:[(0,z.jsx)(f,{size:12,className:`fill-[#ffd700]`}),` 4.9 (420+ Reviews)`]})]})]}),(0,z.jsxs)(`div`,{className:`havelock-content-box`,children:[(0,z.jsxs)(`div`,{className:`havelock-tag`,children:[(0,z.jsx)(x,{size:13}),(0,z.jsx)(`span`,{children:`ASIA’S TOP RATED BEACH DESTINATION`})]}),(0,z.jsx)(`h2`,{className:`havelock-title`,children:`Swaraj Dweep (Havelock Island)`}),(0,z.jsx)(`p`,{className:`havelock-desc`,children:`Renowned across the globe for Asia’s 7th best beach (Radhanagar), crystal turquoise lagoons and vibrant coral walls at Elephant Beach. Havelock is the undisputed capital of Andaman scuba diving and barefoot tropical luxury.`}),(0,z.jsxs)(`div`,{className:`havelock-checklist`,children:[(0,z.jsxs)(`div`,{className:`havelock-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Radhanagar Sunset Coast`})]}),(0,z.jsxs)(`div`,{className:`havelock-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Elephant Beach Coral Walk`})]}),(0,z.jsxs)(`div`,{className:`havelock-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`PADI 5-Star Dive Centers`})]}),(0,z.jsxs)(`div`,{className:`havelock-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Bioluminescence Night Kayak`})]})]}),(0,z.jsxs)(`button`,{onClick:e,className:`havelock-cta-btn`,children:[(0,z.jsx)(`span`,{children:`VIEW HAVELOCK ISLAND EXPERIENCES`}),(0,z.jsx)(o,{size:15})]})]})]})]})}function Se({onDiscoverNeil:e}){return(0,z.jsxs)(`section`,{className:`neil-exp-root`,children:[(0,z.jsx)(`style`,{children:`
        .neil-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .neil-card {
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
          .neil-card { grid-template-columns: 1fr; }
        }

        .neil-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .neil-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .neil-card:hover .neil-img-box img {
          transform: scale(1.06);
        }

        .neil-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .neil-content-box { padding: 26px; }
        }

        .neil-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .neil-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .neil-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .neil-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .neil-checklist { grid-template-columns: 1fr; }
        }

        .neil-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .neil-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .neil-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,z.jsxs)(`div`,{className:`neil-card`,children:[(0,z.jsxs)(`div`,{className:`neil-content-box order-2 lg:order-1`,children:[(0,z.jsxs)(`div`,{className:`neil-tag`,children:[(0,z.jsx)(E,{size:13}),(0,z.jsx)(`span`,{children:`TRANQUIL ORGANIC ISLAND RETREAT`})]}),(0,z.jsx)(`h2`,{className:`neil-title`,children:`Shaheed Dweep (Neil Island)`}),(0,z.jsx)(`p`,{className:`neil-desc`,children:`Known as the rustic vegetable bowl of the Andamans, Neil Island charms with its laid-back slow-island pace, bicycle trails, natural coral arches at Howrah Bridge and crimson sunsets at Laxmanpur Beach.`}),(0,z.jsxs)(`div`,{className:`neil-checklist`,children:[(0,z.jsxs)(`div`,{className:`neil-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Howrah Natural Rock Bridge`})]}),(0,z.jsxs)(`div`,{className:`neil-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Laxmanpur Sunset Horizon`})]}),(0,z.jsxs)(`div`,{className:`neil-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Bharatpur Coral Snorkeling`})]}),(0,z.jsxs)(`div`,{className:`neil-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Organic Island Cycle Rides`})]})]}),(0,z.jsxs)(`button`,{onClick:e,className:`neil-cta-btn`,children:[(0,z.jsx)(`span`,{children:`VIEW NEIL ISLAND EXPERIENCES`}),(0,z.jsx)(o,{size:15})]})]}),(0,z.jsxs)(`div`,{className:`neil-img-box order-1 lg:order-2`,children:[(0,z.jsx)(`img`,{src:`https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85`,alt:`Natural Rock Bridge Neil Island`}),(0,z.jsx)(`div`,{className:`absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm`,children:`🌿 Serene & Slow-Paced`}),(0,z.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs`,children:[(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[#2dd4bf] font-bold`,children:[(0,z.jsx)(j,{size:13}),` Shaheed Dweep`]}),(0,z.jsxs)(`span`,{className:`text-[#ffd700] font-bold flex items-center gap-1`,children:[(0,z.jsx)(f,{size:12,className:`fill-[#ffd700]`}),` 4.8 (310+ Reviews)`]})]})]})]})]})}function Ce({onDiscoverBaratang:e}){return(0,z.jsxs)(`section`,{className:`baratang-exp-root`,children:[(0,z.jsx)(`style`,{children:`
        .baratang-exp-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .baratang-card {
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
          .baratang-card { grid-template-columns: 1fr; }
        }

        .baratang-img-box {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: #020c16;
          overflow: hidden;
        }
        .baratang-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .baratang-card:hover .baratang-img-box img {
          transform: scale(1.06);
        }

        .baratang-content-box {
          padding: 48px;
        }
        @media (max-width: 640px) {
          .baratang-content-box { padding: 26px; }
        }

        .baratang-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        .baratang-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .baratang-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.65;
          margin-bottom: 24px; font-weight: 500;
        }

        .baratang-checklist {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 30px;
        }
        @media (max-width: 540px) {
          .baratang-checklist { grid-template-columns: 1fr; }
        }

        .baratang-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 12.5px;
          color: #1e293b; font-weight: 600;
        }

        .baratang-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }
        .baratang-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}),(0,z.jsxs)(`div`,{className:`baratang-card`,children:[(0,z.jsxs)(`div`,{className:`baratang-img-box`,children:[(0,z.jsx)(`img`,{src:`https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=1200&q=85`,alt:`Baratang Mangrove Safari Andaman`}),(0,z.jsx)(`div`,{className:`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[#0B2545] font-mono font-black text-xs uppercase shadow-sm`,children:`🛶 Untamed Jungle Creeks`}),(0,z.jsxs)(`div`,{className:`absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between font-mono text-xs`,children:[(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[#2dd4bf] font-bold`,children:[(0,z.jsx)(j,{size:13}),` Middle Andaman`]}),(0,z.jsxs)(`span`,{className:`text-[#ffd700] font-bold flex items-center gap-1`,children:[(0,z.jsx)(f,{size:12,className:`fill-[#ffd700]`}),` 4.6 (180+ Reviews)`]})]})]}),(0,z.jsxs)(`div`,{className:`baratang-content-box`,children:[(0,z.jsxs)(`div`,{className:`baratang-tag`,children:[(0,z.jsx)(k,{size:13}),(0,z.jsx)(`span`,{children:`WILD TROPICAL MANGROVE EXPEDITIONS`})]}),(0,z.jsx)(`h2`,{className:`baratang-title`,children:`Baratang Island Mangrove Safari`}),(0,z.jsx)(`p`,{className:`baratang-desc`,children:`An adrenaline-pumping nature expedition featuring authorized vehicular convoys through the indigenous Jarawa forest reserve, high-speed fiber boat creek rides through dense mangrove canopies, and prehistoric stalactite limestone caves.`}),(0,z.jsxs)(`div`,{className:`baratang-checklist`,children:[(0,z.jsxs)(`div`,{className:`baratang-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Speedboat Mangrove Creek Ride`})]}),(0,z.jsxs)(`div`,{className:`baratang-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Stalactite Limestone Caves`})]}),(0,z.jsxs)(`div`,{className:`baratang-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Mud Volcano Formations`})]}),(0,z.jsxs)(`div`,{className:`baratang-item`,children:[(0,z.jsx)(i,{size:14,color:`#F06543`,className:`stroke-[3]`}),(0,z.jsx)(`span`,{children:`Parrot Island Sunset Boat`})]})]}),(0,z.jsxs)(`button`,{onClick:e,className:`baratang-cta-btn`,children:[(0,z.jsx)(`span`,{children:`VIEW BARATANG ISLAND EXPERIENCES`}),(0,z.jsx)(o,{size:15})]})]})]})]})}function X(){return(0,z.jsxs)(`section`,{className:`dest-inclusions-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-inclusions-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .dest-inclusions-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .dest-inc-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-inc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 860px) {
          .dest-inclusions-grid { grid-template-columns: 1fr; }
        }

        .dest-inc-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.05);
        }

        .dest-inc-card-header {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px; padding-bottom: 18px;
          border-bottom: 1.5px solid #f1f5f9;
        }

        .dest-inc-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .dest-inc-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; line-height: 1.55;
          color: #334155; font-weight: 500;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-inclusions-header`,children:[(0,z.jsx)(`div`,{className:`dest-inc-eyebrow`,children:`TRANSPARENT ISLAND LOGISTICS`}),(0,z.jsx)(`h2`,{className:`dest-inc-title`,children:`WHAT'S INCLUDED IN YOUR ISLAND ESCAPE`})]}),(0,z.jsxs)(`div`,{className:`dest-inclusions-grid`,children:[(0,z.jsxs)(`div`,{className:`dest-inc-card`,children:[(0,z.jsxs)(`div`,{className:`dest-inc-card-header`,children:[(0,z.jsx)(`div`,{className:`w-10 h-10 rounded-2xl bg-[#FFF0EB] border-2 border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0`,children:(0,z.jsx)(t,{size:20,className:`stroke-[2.5]`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,margin:0},children:`STANDARD ISLAND INCLUSIONS`}),(0,z.jsx)(`span`,{style:{fontSize:12,color:`#F06543`,fontWeight:700,fontFamily:`'Inter', sans-serif`},children:`100% Guaranteed & Seamless`})]})]}),(0,z.jsx)(`div`,{className:`dest-inc-list`,children:[`Confirmed Luxury Private Catamaran Ferry Tickets (Makruzz / Nautika / Green Ocean)`,`On-Ground Jetty Assistance & Dedicated Port Blair Harbour Escort`,`Official Forest Department & Restricted Area Permits (RAP) Clearances`,`Private AC Vehicle Transfers between Hotel, Jetty & Island Sightseeing Points`,`Certified Local Island Guides for Baratang Caves & Heritage Sites`,`24/7 Island Concierge with Instant Weather Monitoring & Schedule Rebooking`].map((e,t)=>(0,z.jsxs)(`div`,{className:`dest-inc-item`,children:[(0,z.jsx)(`div`,{className:`w-5 h-5 rounded-full bg-[#FFF0EB] border border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs`,children:`✓`}),(0,z.jsx)(`span`,{children:e})]},t))})]}),(0,z.jsxs)(`div`,{className:`dest-inc-card`,children:[(0,z.jsxs)(`div`,{className:`dest-inc-card-header`,children:[(0,z.jsx)(`div`,{className:`w-10 h-10 rounded-2xl bg-slate-100 border-2 border-slate-300 text-slate-500 flex items-center justify-center flex-shrink-0`,children:(0,z.jsx)(C,{size:20,className:`stroke-[2.5]`})}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,margin:0},children:`EXCLUSIONS & OPTIONAL ADD-ONS`}),(0,z.jsx)(`span`,{style:{fontSize:12,color:`#64748b`,fontWeight:700,fontFamily:`'Inter', sans-serif`},children:`Customized Upon Request`})]})]}),(0,z.jsx)(`div`,{className:`dest-inc-list`,children:[`Personal Scuba Diving / Water Sports Activity Fees (Optional add-ons available)`,`Camera / Video Permits at Specific Historic Monument Zones (where applicable)`,`Personal Meals & Beverages not specifically stated in your itinerary`,`Peak Season Hotel Surcharge on select Christmas / New Year dates`].map((e,t)=>(0,z.jsxs)(`div`,{className:`dest-inc-item`,children:[(0,z.jsx)(`div`,{className:`w-5 h-5 rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs`,children:`✕`}),(0,z.jsx)(`span`,{style:{color:`#64748b`},children:e})]},t))})]})]})]})}var we=[{step:`01`,icon:E,title:`SELECT DESIRED ISLANDS`,desc:`Choose your preferred island combination from Havelock, Neil, Port Blair, Baratang or Diglipur.`},{step:`02`,icon:v,title:`RESERVE CATAMARAN FERRIES`,desc:`Select preferred sailing schedules on Makruzz or Nautika with real-time seat inventory.`},{step:`03`,icon:d,title:`ADD RESORTS & ACTIVITIES`,desc:`Pick verified beachfront resorts, PADI scuba diving slots, kayak trips and private cabs.`},{step:`04`,icon:A,title:`RECEIVE DIGITAL PASS`,desc:`Instant booking confirmation, automated forest permits and barcode voucher sent to your phone.`}];function Te({onStartPlanning:e}){return(0,z.jsxs)(`section`,{className:`dest-flow-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-flow-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-flow-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .dest-flow-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-flow-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }
        @media (max-width: 1024px) {
          .dest-flow-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .dest-flow-grid { grid-template-columns: 1fr; }
        }

        .dest-flow-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .dest-flow-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .dest-step-num {
          position: absolute; top: 20px; right: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px; font-weight: 900;
          color: #e2e8f0; line-height: 1;
        }

        .dest-step-icon {
          width: 50px; height: 50px; border-radius: 16px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-flow-header`,children:[(0,z.jsx)(`div`,{className:`dest-flow-eyebrow`,children:`SEAMLESS 4-STEP RESERVATION`}),(0,z.jsx)(`h2`,{className:`dest-flow-title`,children:`HOW ISLAND HOPPING WORKS`})]}),(0,z.jsx)(`div`,{className:`dest-flow-grid`,children:we.map((e,t)=>{let n=e.icon;return(0,z.jsxs)(`div`,{className:`dest-flow-card`,children:[(0,z.jsx)(`span`,{className:`dest-step-num`,children:e.step}),(0,z.jsx)(`div`,{className:`dest-step-icon`,children:(0,z.jsx)(n,{size:22,className:`stroke-[2.5]`})}),(0,z.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13.5,fontWeight:900,color:`#0B2545`,letterSpacing:`0.04em`,margin:`0 0 8px`},children:e.title}),(0,z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6,margin:0,fontWeight:500},children:e.desc})]},t)})})]})}var Z=[{id:`pb-havelock`,route:`Port Blair ⇄ Swaraj Dweep (Havelock)`,duration:`90 Mins`,vessel:`Makruzz / Nautika Luxury Catamaran`,timings:[`06:00 AM`,`08:30 AM`,`11:30 AM`,`02:00 PM`],price:`₹1,499`,status:`AVAILABLE`,statusText:`🟢 High Frequency Daily Sailings`},{id:`havelock-neil`,route:`Swaraj Dweep (Havelock) ⇄ Shaheed Dweep (Neil)`,duration:`60 Mins`,vessel:`Nautika / Green Ocean Catamaran`,timings:[`09:00 AM`,`10:30 AM`,`02:30 PM`,`04:00 PM`],price:`₹1,299`,status:`AVAILABLE`,statusText:`🟢 Smooth Lagoon Crossing`},{id:`neil-pb`,route:`Shaheed Dweep (Neil) ⇄ Port Blair`,duration:`75 Mins`,vessel:`Makruzz Pearl / Nautika Lite`,timings:[`11:00 AM`,`02:15 PM`,`04:00 PM`],price:`₹1,399`,status:`AVAILABLE`,statusText:`🟢 Evening Sunset Sailing`},{id:`pb-baratang`,route:`Port Blair ⇄ Baratang (Mangroves & Caves)`,duration:`3.0 Hours`,vessel:`Private AC Cab + Forest Convoy & Speedboat`,timings:[`06:00 AM (Early Convoy)`,`09:00 AM (Mid Convoy)`],price:`₹1,850`,status:`AVAILABLE`,statusText:`🟢 Authorized Jarawa Convoy Pass`}];function Ee({onBookFerry:e}){let[n,r]=(0,R.useState)(Z[0].id);return(0,z.jsxs)(`section`,{className:`dest-avail-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-avail-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-avail-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
        }
        @media (max-width: 768px) {
          .dest-avail-card { padding: 24px; }
        }

        .dest-avail-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
          padding-bottom: 24px; border-bottom: 2px solid #f1f5f9;
        }

        .dest-routes-list {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .dest-routes-list { grid-template-columns: 1fr; }
        }

        .dest-route-item {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 22px;
          padding: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dest-route-item:hover, .dest-route-item.active {
          border-color: #F06543;
          background: #FFF0EB;
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.12);
        }

        .timing-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 800;
          color: #0B2545; background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 10px; border-radius: 10px;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-avail-card`,children:[(0,z.jsxs)(`div`,{className:`dest-avail-header`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2`,children:[(0,z.jsx)(w,{size:12}),(0,z.jsx)(`span`,{children:`REAL-TIME CONNECTIVITY MATRIX`})]}),(0,z.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(28px, 4vw, 42px)`,fontWeight:700,color:`#0B2545`,margin:0},children:`INTER-ISLAND CATAMARAN & TRANSIT TIMINGS`})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#F06543`},children:[(0,z.jsx)(t,{size:16}),(0,z.jsx)(`span`,{children:`Official Makruzz & Nautika Booking Desk`})]})]}),(0,z.jsx)(`div`,{className:`dest-routes-list`,children:Z.map(e=>{let t=n===e.id;return(0,z.jsxs)(`div`,{className:`dest-route-item${t?` active`:``}`,onClick:()=>r(e.id),children:[(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifySelf:`space-between`,justifyContent:`space-between`,marginBottom:12},children:[(0,z.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`},children:e.statusText}),(0,z.jsxs)(`span`,{style:{fontSize:12,fontWeight:800,color:`#64748b`,fontFamily:`'Space Grotesk', sans-serif`,display:`flex`,alignItems:`center`,gap:4},children:[(0,z.jsx)(D,{size:13,color:`#F06543`}),` `,e.duration]})]}),(0,z.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,margin:`0 0 6px`},children:e.route}),(0,z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,margin:`0 0 16px`,fontWeight:500},children:e.vessel}),(0,z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:20},children:e.timings.map((e,t)=>(0,z.jsxs)(`span`,{className:`timing-pill`,children:[`⏰ `,e]},t))})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:16,borderTop:`1.5px solid #e2e8f0`},children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{style:{fontSize:10,color:`#64748b`,fontWeight:800,textTransform:`uppercase`,display:`block`,fontFamily:`'Space Grotesk', sans-serif`},children:`Fare From`}),(0,z.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`},children:[e.price,` `,(0,z.jsx)(`span`,{style:{fontSize:11,color:`#64748b`,fontWeight:600},children:`/ person`})]})]}),(0,z.jsxs)(`button`,{onClick:e=>{e.stopPropagation(),window.history.pushState({},``,`/ferries`),window.dispatchEvent(new Event(`popstate`))},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,border:`none`,padding:`10px 20px`,borderRadius:12,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 4px 14px rgba(0, 45, 98, 0.25)`},children:[(0,z.jsx)(`span`,{children:`CHECK SEATS`}),(0,z.jsx)(o,{size:13})]})]})]},e.id)})})]})]})}var De=[{icon:u,title:`MOBILE SIM & DATA COVERAGE`,desc:`Airtel and BSNL have the strongest 4G networks in Port Blair, Havelock & Neil. Jio/Vi coverage is limited in remote beach zones.`},{icon:ne,title:`CASH & ATM BACKUP`,desc:`While resorts and major cafes accept UPI and cards, island beach shacks & auto-rickshaws require cash. Withdraw sufficient cash in Port Blair.`},{icon:p,title:`FERRY CHECK-IN TIMINGS`,desc:`Arrive at the jetty 45 minutes prior to scheduled catamaran departure. Carry physical or digital copies of government photo IDs.`},{icon:r,title:`SUNSET & SUNRISE HOURS`,desc:`The tropical sun rises early around 05:15 AM (best at Kalapathar & Vijaynagar) and sets around 05:10 PM (best at Radhanagar & Laxmanpur).`}];function Oe(){return(0,z.jsxs)(`section`,{className:`dest-tips-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-tips-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-tips-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .dest-tips-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-tips-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .dest-tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .dest-tips-grid { grid-template-columns: 1fr; }
        }

        .dest-tip-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .dest-tip-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .dest-tip-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-tips-header`,children:[(0,z.jsx)(`div`,{className:`dest-tips-eyebrow`,children:`ESSENTIAL TRAVELER ADVISORY`}),(0,z.jsx)(`h2`,{className:`dest-tips-title`,children:`LOCAL ISLAND TRAVEL TIPS`})]}),(0,z.jsx)(`div`,{className:`dest-tips-grid`,children:De.map((e,t)=>{let n=e.icon;return(0,z.jsxs)(`div`,{className:`dest-tip-card`,children:[(0,z.jsx)(`div`,{className:`dest-tip-icon`,children:(0,z.jsx)(n,{size:22,className:`stroke-[2.5]`})}),(0,z.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#0B2545`,letterSpacing:`0.04em`,margin:`0 0 8px`},children:e.title}),(0,z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6,margin:0,fontWeight:500},children:e.desc})]},t)})})]})}var ke=[{q:`Which island is best for first-time visitors to the Andamans?`,a:`Swaraj Dweep (Havelock Island) is the top recommendation. It is home to Asia’s top-ranked Radhanagar Beach (No. 7), vibrant coral gardens at Elephant Beach, bioluminescent night kayaking, and Asia’s premier PADI scuba diving hubs.`},{q:`How do I travel between Port Blair, Havelock, and Neil Island?`,a:`High-speed luxury private catamarans (Makruzz, Nautika, Green Ocean) operate multiple daily sailings between Port Blair, Havelock, and Neil Island. Journey times are 90 mins between Port Blair & Havelock, and 60 mins between Havelock & Neil.`},{q:`Are special permits required for Indian and Foreign tourists?`,a:`Indian citizens require standard government photo ID (Aadhaar/Passport/Driving License). Restricted Area Permits (RAP) are now issued automatically upon arrival at Port Blair Veer Savarkar International Airport for most foreign nationals.`},{q:`When is the best season to explore the Andaman Islands?`,a:`October to May is the prime season featuring calm turquoise seas, sunny blue skies, and high underwater visibility (up to 25 meters) ideal for scuba diving, snorkeling, and inter-island cruising.`},{q:`Can I do a day trip to Baratang Island from Port Blair?`,a:`Yes, Baratang is a popular full-day tour starting from Port Blair at 05:30 AM or 08:30 AM via the authorized Jarawa tribal forest convoy and speedboat mangrove creeks, returning by 05:00 PM.`},{q:`How do I commute locally on Havelock and Neil Island?`,a:`Self-drive automatic scooters/bikes are available for rent at ₹500–₹600/day. Private AC taxis, auto-rickshaws, and eco-friendly island buses are also readily available at all jetties and hotel reception desks.`}];function Ae(){let[e,t]=(0,R.useState)(0);return(0,z.jsxs)(`section`,{className:`dest-faq-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-faq-root {
          max-width: 980px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-faq-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .dest-faq-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-faq-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          margin-bottom: 14px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.04);
          transition: all 0.25s ease;
        }
        .dest-faq-card:hover {
          border-color: #F06543;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.08);
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-faq-header`,children:[(0,z.jsx)(`div`,{className:`dest-faq-eyebrow`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,z.jsx)(`h2`,{className:`dest-faq-title`,children:`ANDAMAN ISLAND TRAVEL FAQ`})]}),(0,z.jsx)(`div`,{children:ke.map((r,i)=>{let o=e===i;return(0,z.jsxs)(`div`,{className:`dest-faq-card`,children:[(0,z.jsxs)(`button`,{onClick:()=>t(o?null:i),style:{width:`100%`,padding:`22px 26px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,textAlign:`left`,background:`transparent`,border:`none`,cursor:`pointer`,outline:`none`},children:[(0,z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14.5,fontWeight:900,color:`#0B2545`,paddingRight:16},children:r.q}),(0,z.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:o?`#0B2545`:`#FFF0EB`,border:`1.5px solid #F06543`,color:o?`#ffffff`:`#F06543`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,transition:`all 0.25s ease`},children:o?(0,z.jsx)(n,{size:16}):(0,z.jsx)(a,{size:16})})]}),o&&(0,z.jsx)(`div`,{style:{padding:`0 26px 24px`,borderTop:`1.5px solid #f1f5f9`,paddingTop:16},children:(0,z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#64748b`,lineHeight:1.65,margin:0,fontWeight:500},children:r.a})})]},i)})})]})}function je({onPlanTrip:e,onExploreFerries:t}){return(0,z.jsxs)(`section`,{className:`dest-cta-root`,children:[(0,z.jsx)(`style`,{children:`
        .dest-cta-root {
          max-width: 1340px;
          margin: 0 auto 90px;
          padding: 0 24px;
        }

        .dest-cta-box {
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
          .dest-cta-box { padding: 36px 20px; }
        }

        .dest-cta-glow-1 {
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          filter: blur(50px); pointer-events: none;
        }
        .dest-cta-glow-2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(0, 45, 98, 0.08);
          filter: blur(50px); pointer-events: none;
        }

        .dest-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 16px 34px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.35);
        }
        .dest-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(13, 148, 136, 0.5);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }

        .dest-cta-btn-secondary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #0B2545; background: #FFF0EB;
          border: 2px solid #F06543; padding: 16px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
        }
        .dest-cta-btn-secondary:hover {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.25);
        }
      `}),(0,z.jsxs)(`div`,{className:`dest-cta-box`,children:[(0,z.jsx)(`div`,{className:`dest-cta-glow-1`}),(0,z.jsx)(`div`,{className:`dest-cta-glow-2`}),(0,z.jsxs)(`div`,{style:{position:`relative`,zIndex:2,maxWidth:740,margin:`0 auto`},children:[(0,z.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-4`,children:[(0,z.jsx)(w,{size:14,className:`text-[#ffd700]`}),(0,z.jsx)(`span`,{children:`24/7 ISLAND CONCIERGE DESK`})]}),(0,z.jsx)(`h2`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(30px, 4.5vw, 50px)`,fontWeight:700,color:`#0B2545`,margin:`0 0 16px`,lineHeight:1.15},children:`Ready to Experience the Emerald Andaman Islands?`}),(0,z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:14,color:`#64748b`,lineHeight:1.65,margin:`0 auto 34px`,maxWidth:640},children:`Connect with our Port Blair travel specialists for customized multi-island itineraries, confirmed catamaran ferry passes, verified beachfront resort bookings, and private jetty transfers.`}),(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:16,flexWrap:`wrap`},children:[(0,z.jsxs)(`button`,{onClick:()=>{e?e():(window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`)))},className:`dest-cta-btn-primary`,children:[(0,z.jsx)(`span`,{children:`BUILD CUSTOM ISLAND TRIP`}),(0,z.jsx)(o,{size:15})]}),(0,z.jsxs)(`button`,{onClick:()=>{t?t():(window.history.pushState({},``,`/ferries`),window.dispatchEvent(new Event(`popstate`)))},className:`dest-cta-btn-secondary`,children:[(0,z.jsx)(p,{size:15}),(0,z.jsx)(`span`,{children:`CHECK FERRY SCHEDULES`})]})]})]})]})]})}var Q={havelock:`https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80`,neil:`https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80`,"port-blair":`https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80`,baratang:`https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=800&q=80`,diglipur:`https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=800&q=80`,"great-nicobar":`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80`,"little-andaman":`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,"long-island":`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80`},$=[{id:`havelock`,name:`HAVELOCK ISLAND`,alias:`Swaraj Dweep`,region:`South Andaman`,vibe:`Beaches & Scuba`,category:`TOP PICK`,image:Q.havelock,tags:[`Radhanagar Beach No. 7`,`Elephant Reef Scuba`,`Bioluminescence Kayak`],description:`Home to world-famous Radhanagar Beach (Asia’s Top Beach No. 7), turquoise coral lagoons & Dixon’s Pinnacle deep scuba diving.`,rating:4.9,reviews:420,ferryTime:`90 min Catamaran`,startingPrice:`1,499`,badge:`MOST POPULAR`,scubaScore:`98%`,waterTemp:`28°C`,clarity:`Crystal (25m+)`},{id:`neil`,name:`NEIL ISLAND`,alias:`Shaheed Dweep`,region:`South Andaman`,vibe:`Beaches & Scuba`,category:`RELAXATION`,image:Q.neil,tags:[`Natural Rock Bridge`,`Organic Reefs`,`Sunsets`],description:`A serene island of organic farmlands, biological Howrah Natural Rock Bridge coral arches & Laxmanpur sunsets.`,rating:4.8,reviews:310,ferryTime:`60 min from Havelock`,startingPrice:`1,299`,badge:`TRANQUIL HAVEN`,scubaScore:`92%`,waterTemp:`29°C`,clarity:`Clear (18m+)`},{id:`port-blair`,name:`PORT BLAIR`,alias:`Capital Gateway`,region:`South Andaman`,vibe:`Heritage & Capital`,category:`HERITAGE`,image:Q[`port-blair`],tags:[`Cellular Jail`,`Ross Island`,`Museums`],description:`Historical capital gateway hosting Cellular Jail National Memorial, Netaji Subhash Bose Island ruins & harbor promenades.`,rating:4.7,reviews:540,ferryTime:`Airport Hub (0 min)`,startingPrice:`899`,badge:`CAPITAL HUB`,scubaScore:`85%`,waterTemp:`30°C`,clarity:`Good (15m+)`},{id:`baratang`,name:`BARATANG ISLAND`,alias:`Middle Andaman`,region:`Middle Andaman`,vibe:`Eco Mangrove Safari`,category:`ADVENTURE`,image:Q.baratang,tags:[`Limestone Caves`,`Mangrove Safari`,`Mud Volcano`],description:`Offbeat nature sanctuary featuring high-speed mangrove boat safaris, stalactite caves & mud volcano trails.`,rating:4.6,reviews:180,ferryTime:`3 hrs Road & Boat`,startingPrice:`1,850`,badge:`ECO EXPLORER`,scubaScore:`N/A`,waterTemp:`27°C`,clarity:`Estuary Creeks`},{id:`diglipur`,name:`DIGLIPUR`,alias:`North Andaman Peak`,region:`North Andaman`,vibe:`Peaks & Sandbars`,category:`ECO SANCTUARY`,image:Q.diglipur,tags:[`Ross & Smith Sandbar`,`Saddle Peak`,`Turtles`],description:`The peak of North Andaman boasting the natural white sandbar of Ross & Smith twin islands and Saddle Peak summit trails.`,rating:4.9,reviews:145,ferryTime:`Overnight Ship / Road`,startingPrice:`2,499`,badge:`HIGHEST PEAK`,scubaScore:`90%`,waterTemp:`26°C`,clarity:`Pristine (22m+)`},{id:`great-nicobar`,name:`GREAT NICOBAR`,alias:`Indira Point Frontier`,region:`Nicobar`,vibe:`Biosphere`,category:`BIOSPHERE`,image:Q[`great-nicobar`],tags:[`Southernmost Tip`,`UNESCO Reserve`,`Endemic Fauna`],description:`India’s southernmost frontier harboring the UNESCO Great Nicobar Biosphere Reserve and giant sea turtle nesting grounds.`,rating:4.9,reviews:85,ferryTime:`Inter-Island Passenger Ship`,startingPrice:`3,200`,badge:`FRONTIER ISLE`,scubaScore:`95%`,waterTemp:`28°C`,clarity:`Unexplored Ocean`},{id:`long-island`,name:`LONG ISLAND`,alias:`Middle Andaman Jewel`,region:`Middle Andaman`,vibe:`Eco Mangrove Safari`,category:`HIDDEN GEM`,image:Q[`long-island`],tags:[`Lalaji Bay`,`Guitar Island`,`Snorkeling`],description:`A secluded sanctuary with white Lalaji Bay sands, dense forest canopies and pristine uninhabited atolls.`,rating:4.7,reviews:95,ferryTime:`Boat from Rangat`,startingPrice:`1,650`,badge:`SECRET ISLE`,scubaScore:`90%`,waterTemp:`28°C`,clarity:`Crystal (20m+)`},{id:`little-andaman`,name:`LITTLE ANDAMAN`,alias:`Hut Bay Surfing Haven`,region:`South Andaman`,vibe:`Adventure`,category:`SURFING`,image:Q[`little-andaman`],tags:[`White Surf Waves`,`Whisper Wave Waterfall`,`Lighthouse`],description:`India’s surfing hotspot featuring Butler Bay waves, pristine waterfalls and endless coconut plantations.`,rating:4.8,reviews:110,ferryTime:`6 hrs Passenger Ship`,startingPrice:`1,999`,badge:`SURF PARADISE`,scubaScore:`88%`,waterTemp:`29°C`,clarity:`Open Ocean (18m+)`}];function Me(){let[e,t]=(0,R.useState)($),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(``),[o,s]=(0,R.useState)(()=>{try{let e=localStorage.getItem(`andaman_destination_wishlist`);return e?JSON.parse(e):{}}catch{return{}}}),c=(e,t)=>{t&&t.stopPropagation(),s(t=>{let n={...t,[e]:!t[e]};try{localStorage.setItem(`andaman_destination_wishlist`,JSON.stringify(n))}catch{}return n})},[l,u]=(0,R.useState)(``),[d,f]=(0,R.useState)(`ALL`),[p,m]=(0,R.useState)(`All Island Vibes`),[h,g]=(0,R.useState)(``),[_,v]=(0,R.useState)(`popular`);(0,R.useRef)(null),(0,R.useRef)(null);let y=async()=>{r(!0),a(``);try{let e=await oe.getDestinations();if(e.data&&Array.isArray(e.data)&&e.data.length>0){let n=e.data.map((e,t)=>{let n=(e.slug||e.name||``).toLowerCase(),r=`havelock`;r=n.includes(`neil`)||n.includes(`shaheed`)?`neil`:n.includes(`baratang`)?`baratang`:n.includes(`diglipur`)?`diglipur`:n.includes(`nicobar`)?`great-nicobar`:n.includes(`port-blair`)||n.includes(`blair`)?`port-blair`:n.includes(`long`)?`long-island`:n.includes(`little`)?`little-andaman`:n.includes(`havelock`)||n.includes(`swaraj`)?`havelock`:e.slug||`dest-${e.id||t}`;let i=$.find(e=>e.id===r)||$[0],a=(e.name||i.name).split(` (`)[0].trim().toUpperCase();return{...i,id:e.slug||(e.id?`dest-${e.id}`:`${r}-${t}`),destKey:r,name:a,alias:i.alias||e.alias,description:e.shortDescription||e.description||i.description,image:e.heroImage||e.image||Q[r]||i.image,rating:Number(e.rating||i.rating),reviews:e.reviewsCount||i.reviews}});t(n)}else t($)}catch(e){console.error(`Failed to load destinations:`,e),t($)}finally{r(!1)}};(0,R.useEffect)(()=>{y()},[]);let b=(0,R.useMemo)(()=>{let t=(e||[]).filter(e=>{let t=d===`ALL`||e.region.toUpperCase().includes(d.toUpperCase().replace(`ISLANDS`,``).trim()),n=p===`All Island Vibes`||e.vibe&&e.vibe.toLowerCase().includes(p.toLowerCase())||e.category&&e.category.toLowerCase().includes(p.toLowerCase()),r=!l||e.name.toLowerCase().includes(l.toLowerCase())||e.alias&&e.alias.toLowerCase().includes(l.toLowerCase())||e.region.toLowerCase().includes(l.toLowerCase());return t&&n&&r});return _===`rating`?t.sort((e,t)=>Number(t.rating||0)-Number(e.rating||0)):_===`reviews`?t.sort((e,t)=>Number(t.reviews||0)-Number(e.reviews||0)):_===`priceAsc`&&t.sort((e,t)=>Number(e.startingPrice?.replace(/,/g,``)||0)-Number(t.startingPrice?.replace(/,/g,``)||0)),t},[e,d,p,l,_]),x=(0,R.useMemo)(()=>!e||e.length===0?$[0]:e.find(e=>e.id===`havelock`||e.id===`havelock-island`||e.destKey===`havelock`)||e[0],[e]),S=e=>{window.history.pushState({},``,`/destination-details?id=${e}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},C=()=>{u(``),f(`ALL`),m(`All Island Vibes`),g(``),v(`popular`)},w=()=>{let e=document.getElementById(`destination-grid-section`);e&&e.scrollIntoView({behavior:`smooth`})};return(0,z.jsxs)(`div`,{className:`destinations-page-root`,children:[(0,z.jsx)(`style`,{children:`
        .destinations-page-root {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }
      `}),(0,z.jsx)(B,{onExploreDestinations:w,onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,z.jsx)(V,{onSearch:({searchQuery:e,region:t,vibe:n,date:r})=>{e!==void 0&&u(e),t&&t!==`All Regions`?t.includes(`South`)?f(`SOUTH ANDAMAN`):t.includes(`Middle`)?f(`MIDDLE ANDAMAN`):t.includes(`North`)?f(`NORTH ANDAMAN`):t.includes(`Nicobar`)?f(`NICOBAR`):f(`ALL`):t===`All Regions`&&f(`ALL`),n&&m(n),r&&g(r),w()}}),(0,z.jsx)(H,{destination:x,onViewDetails:e=>S(e||`havelock`),onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,z.jsx)(W,{onSelectCategory:e=>{m(e),w()}}),(0,z.jsx)(le,{onSelectIsland:e=>{f(e.toUpperCase()),w()}}),(0,z.jsx)(`div`,{id:`destination-grid-section`,children:(0,z.jsx)(ve,{destinations:b,loading:n,error:i,selectedRegion:d,onSelectRegion:f,searchQuery:l,onSearchChange:u,sortBy:_,onChangeSortBy:v,onResetFilters:C,savedWishlist:o,onToggleWishlist:c,onViewDetails:S,onRetry:y})}),(0,z.jsx)(be,{}),(0,z.jsx)(xe,{onDiscoverHavelock:()=>S(`havelock`)}),(0,z.jsx)(Se,{onDiscoverNeil:()=>S(`neil`)}),(0,z.jsx)(Ce,{onDiscoverBaratang:()=>S(`baratang`)}),(0,z.jsx)(X,{}),(0,z.jsx)(Te,{onStartPlanning:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,z.jsx)(`div`,{id:`destination-availability-section`,children:(0,z.jsx)(Ee,{onBookFerry:()=>{window.history.pushState({},``,`/ferries`),window.dispatchEvent(new Event(`popstate`))}})}),(0,z.jsx)(Oe,{}),(0,z.jsx)(Ae,{}),(0,z.jsx)(je,{onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))},onExploreFerries:()=>{window.history.pushState({},``,`/ferries`),window.dispatchEvent(new Event(`popstate`))}}),(0,z.jsx)(se,{})]})}export{Me as default};