import{r as e}from"./rolldown-runtime-hePW80VL.js";import{An as t,B as n,Bt as r,Dn as i,En as a,F as o,Gn as s,K as c,Kt as l,L as u,O as d,Pt as f,Vn as p,Vt as m,Xn as h,Zn as g,Zt as _,_t as v,a as y,gn as b,h as x,j as S,jn as C,l as w,ln as T,mn as E,n as D,ot as O,r as k,vn as A,vt as j,wn as M,xt as N,z as P,zt as ee}from"./lucide-vendor-CBhgx3NO.js";import{v as te}from"./three-vendor-Md08yeGZ.js";import{t as F}from"./apiClient-BBDRQO3K.js";import{n as I,t as L}from"./gsap-vendor-Cgjl6ODA.js";import{h as R,o as ne}from"./index-CLpzZzGy.js";import{t as re}from"./FooterBottom-yxqnPQVe.js";import{t as z}from"./axiosClient-DstUaATc.js";import{t as ie}from"./testimonialService-Bx-xCX5M.js";import{t as ae}from"./ActivityBookingModal-KkrAC_4T.js";var B=e(g(),1),V=te();function H({onExploreActivities:e,onPlanExperience:t}){let r=(0,B.useRef)(null);return(0,B.useEffect)(()=>{r.current&&I.fromTo(r.current,{opacity:0,y:30,scale:.97},{opacity:1,y:0,scale:1,duration:.9,ease:`power2.out`,delay:.2})},[]),(0,V.jsxs)(`section`,{className:`act-hero-root`,children:[(0,V.jsx)(`style`,{children:`
        .act-hero-root {
          position: relative;
          width: 100%;
          min-height: 75vh;
          max-height: 780px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          overflow: hidden;
          padding: 110px 24px 90px;
          box-sizing: border-box;
        }

        .act-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .act-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.52) saturate(1.25);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .act-hero-root:hover .act-hero-bg img {
          transform: scale(1.08);
        }

        .act-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            rgba(2, 14, 22, 0.45) 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .act-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 820px; height: 440px;
          background: radial-gradient(ellipse at center, rgba(13, 148, 136, 0.22) 0%, rgba(2, 132, 199, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        /* Floating ocean particles */
        .ocean-particle {
          position: absolute; width: 3.5px; height: 3.5px;
          background: rgba(45, 212, 191, 0.7); border-radius: 50%;
          z-index: 3; pointer-events: none;
          animation: floatParticle 8s infinite ease-in-out;
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.85; }
        }

        .act-hero-content {
          position: relative; z-index: 4; max-width: 900px;
          text-align: center; margin: 0 auto;
        }

        .act-breadcrumb {
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

        .act-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 74px);
          font-weight: 700; color: #ffffff;
          line-height: 1.06; margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .act-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 720px;
          font-weight: 400;
        }

        .act-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 30px;
        }

        .act-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .act-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .act-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .act-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .act-stats-pill-row {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #cbd5e1;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .act-stat-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(0, 0, 0, 0.35); padding: 5px 14px;
          border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}),(0,V.jsx)(`div`,{className:`act-hero-bg`,children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Ocean Adventures & Certified Scuba Diving`})}),(0,V.jsx)(`div`,{className:`act-hero-overlay`}),(0,V.jsx)(`div`,{className:`act-hero-glow`}),(0,V.jsx)(`div`,{className:`ocean-particle`,style:{top:`25%`,left:`18%`,animationDelay:`0s`}}),(0,V.jsx)(`div`,{className:`ocean-particle`,style:{top:`60%`,left:`12%`,animationDelay:`2s`}}),(0,V.jsx)(`div`,{className:`ocean-particle`,style:{top:`35%`,left:`82%`,animationDelay:`4s`}}),(0,V.jsx)(`div`,{className:`ocean-particle`,style:{top:`72%`,left:`78%`,animationDelay:`1s`}}),(0,V.jsx)(`div`,{className:`ocean-particle`,style:{top:`28%`,left:`58%`,animationDelay:`3s`}}),(0,V.jsxs)(`div`,{ref:r,className:`act-hero-content`,children:[(0,V.jsxs)(`div`,{className:`act-breadcrumb`,children:[(0,V.jsx)(`a`,{href:`/home`,style:{color:`#cbd5e1`,textDecoration:`none`},children:`HOME`}),(0,V.jsx)(M,{size:12,color:`#2dd4bf`}),(0,V.jsx)(`span`,{children:`OCEAN ACTIVITIES`})]}),(0,V.jsxs)(`h1`,{className:`act-hero-title`,children:[`DIVE INTO `,(0,V.jsx)(`br`,{}),(0,V.jsx)(`span`,{style:{color:`#2dd4bf`,textShadow:`0 0 35px rgba(45,212,191,0.45)`},children:`UNFORGETTABLE ADVENTURE`})]}),(0,V.jsx)(`p`,{className:`act-hero-desc`,children:`Experience the Andaman Sea with certified PADI divemasters, crystal coral reefs, deep sea walks, glowing bioluminescent kayaking, and high-speed water sports.`}),(0,V.jsxs)(`div`,{className:`act-hero-btns`,children:[(0,V.jsxs)(`button`,{onClick:e,className:`act-btn-primary`,children:[(0,V.jsx)(`span`,{children:`EXPLORE ACTIVITIES`}),(0,V.jsx)(s,{size:15})]}),(0,V.jsxs)(`button`,{onClick:t,className:`act-btn-sec`,children:[(0,V.jsx)(T,{size:15}),(0,V.jsx)(`span`,{children:`CHECK REAL-TIME SLOTS`})]})]}),(0,V.jsxs)(`div`,{className:`act-stats-pill-row`,children:[(0,V.jsxs)(`div`,{className:`act-stat-pill`,children:[(0,V.jsx)(n,{size:13,color:`#2dd4bf`}),(0,V.jsx)(`span`,{children:`1:1 PADI CERTIFIED DIVE MASTERS`})]}),(0,V.jsxs)(`div`,{className:`act-stat-pill`,children:[(0,V.jsx)(S,{size:13,color:`#2dd4bf`}),(0,V.jsx)(`span`,{children:`FREE 4K HD VIDEO & PHOTOS`})]}),(0,V.jsxs)(`div`,{className:`act-stat-pill`,children:[(0,V.jsx)(y,{size:13,color:`#2dd4bf`}),(0,V.jsx)(`span`,{children:`ZERO SWIMMING SKILLS REQUIRED`})]})]})]})]})}function U({onSearch:e}){let[t,n]=(0,B.useState)(``),[r,i]=(0,B.useState)(`All Locations`),[a,o]=(0,B.useState)(`All`),[s,l]=(0,B.useState)(``),[u,d]=(0,B.useState)(2),[f,p]=(0,B.useState)(0),[m,h]=(0,B.useState)(1e4);return(0,V.jsxs)(`div`,{className:`act-search-wrapper`,children:[(0,V.jsx)(`style`,{children:`
        .act-search-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1180px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .act-search-card {
          background: #ffffff;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 2px solid #e2e8f0;
          border-radius: 26px;
          padding: 32px 36px;
          box-shadow: 0 24px 60px rgba(0, 45, 98, 0.14), 0 0 30px rgba(13, 148, 136, 0.08);
        }
        @media (max-width: 768px) {
          .act-search-card { padding: 22px; }
        }

        .search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 16px; margin-bottom: 24px;
        }
        @media (max-width: 1024px) {
          .search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .search-grid { grid-template-columns: 1fr; }
        }

        .search-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .field-input-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0B2545;
          outline: none; transition: all 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
        }

        .field-input {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none;
        }

        .field-select {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none; cursor: pointer;
        }
        .field-select option {
          background: #ffffff; color: #0B2545;
        }

        .counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(13, 148, 136, 0.12); border: 1.5px solid rgba(13, 148, 136, 0.3);
          color: #F06543; font-weight: 900; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .counter-btn:hover { background: #F06543; color: #ffffff; }

        .search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(0, 45, 98, 0.28);
        }
        .search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}),(0,V.jsxs)(`form`,{className:`act-search-card`,onSubmit:n=>{n.preventDefault(),e&&e({searchQuery:t,island:r,category:a,date:s,adults:u,childrenCount:f,maxPrice:m})},children:[(0,V.jsxs)(`div`,{className:`search-title`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(c,{size:16,color:`#F06543`}),(0,V.jsx)(`span`,{children:`FIND YOUR ISLAND ADVENTURE`})]}),(0,V.jsx)(`span`,{className:`text-[11px] font-mono text-slate-400 font-bold hidden sm:inline`,children:`LIVE AVAILABILITY`})]}),(0,V.jsxs)(`div`,{className:`search-grid`,children:[(0,V.jsxs)(`div`,{className:`search-field`,children:[(0,V.jsx)(`label`,{className:`field-label`,children:`EXPERIENCE / KEYWORD`}),(0,V.jsxs)(`div`,{className:`field-input-box`,children:[(0,V.jsx)(c,{size:15,className:`text-[#F06543] shrink-0`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`Scuba, Kayak, Sea Walk...`,value:t,onChange:e=>n(e.target.value),className:`field-input`})]})]}),(0,V.jsxs)(`div`,{className:`search-field`,children:[(0,V.jsx)(`label`,{className:`field-label`,children:`SELECT ISLAND`}),(0,V.jsxs)(`div`,{className:`field-input-box`,children:[(0,V.jsx)(N,{size:15,className:`text-[#F06543] shrink-0`}),(0,V.jsxs)(`select`,{value:r,onChange:e=>i(e.target.value),className:`field-select`,children:[(0,V.jsx)(`option`,{value:`All Locations`,children:`All Islands`}),(0,V.jsx)(`option`,{value:`Havelock`,children:`Havelock Island (Swaraj Dweep)`}),(0,V.jsx)(`option`,{value:`Port Blair`,children:`Port Blair & Corbyn's Cove`}),(0,V.jsx)(`option`,{value:`Neil Island`,children:`Neil Island (Shaheed Dweep)`}),(0,V.jsx)(`option`,{value:`North Bay`,children:`North Bay Lighthouse`})]})]})]}),(0,V.jsxs)(`div`,{className:`search-field`,children:[(0,V.jsx)(`label`,{className:`field-label`,children:`PREFERRED DATE`}),(0,V.jsxs)(`div`,{className:`field-input-box`,children:[(0,V.jsx)(C,{size:15,className:`text-[#F06543] shrink-0`}),(0,V.jsx)(`input`,{type:`date`,min:new Date().toISOString().split(`T`)[0],value:s,onChange:e=>l(e.target.value),className:`field-input`})]})]}),(0,V.jsxs)(`div`,{className:`search-field`,children:[(0,V.jsx)(`label`,{className:`field-label`,children:`PARTICIPANTS`}),(0,V.jsxs)(`div`,{className:`field-input-box`,style:{justifyContent:`space-between`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(w,{size:15,className:`text-[#F06543]`}),(0,V.jsxs)(`span`,{style:{fontSize:13,fontWeight:700,color:`#0B2545`},children:[u,` Adults`,f>0?`, ${f} Ch`:``]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,V.jsx)(`button`,{type:`button`,className:`counter-btn`,onClick:()=>d(Math.max(1,u-1)),children:`-`}),(0,V.jsx)(`button`,{type:`button`,className:`counter-btn`,onClick:()=>d(u+1),children:`+`})]})]})]})]}),(0,V.jsxs)(`button`,{type:`submit`,className:`search-submit-btn`,children:[(0,V.jsx)(`span`,{children:`FIND ADVENTURE SLOTS`}),(0,V.jsx)(c,{size:15})]})]})]})}I.registerPlugin(L);function W({activity:e,onViewDetails:t,onBookNow:n}){let r=(0,B.useRef)(null);(0,B.useEffect)(()=>{r.current&&I.fromTo(r.current,{opacity:0,y:40},{opacity:1,y:0,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:r.current,start:`top 85%`}})},[]);let a=e||{name:`PADI Discover Scuba Diving with Photos & Videos`,category:`Scuba & Snorkeling`,location:`Elephant Beach, Havelock Island`,duration:`2 Hours (45 Mins Underwater)`,price:3500,rating:4.95,reviewsCount:1420,overview:`Dive into world-famous Nemo Reef with 1:1 certified PADI divemasters. Experience crystal clear coral gardens, vibrant clownfish, sea turtles, and receive free 4K underwater GoPro video.`,bestFor:`Non-Swimmers, Beginners & Couples`,features:[`1:1 Dedicated Certified PADI Instructor`,`Free 4K GoPro Underwater Photos & Video`,`Full Mares & Scubapro Equipment Included`,`Zero Swimming Skills Required`],image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85`},o=Number(a.price||3500),c=Number(a.originalPrice)||(o>0?Math.round(o*1.2):4500),u=c>o?Math.round((c-o)/c*100):0,d=`₹${o.toLocaleString(`en-IN`)}`,f=`₹${c.toLocaleString(`en-IN`)}`;return(0,V.jsxs)(`section`,{className:`featured-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .featured-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .featured-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .featured-main-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 40px; line-height: 1.1;
        }

        .featured-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1.25fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 45, 98, 0.12), 0 0 40px rgba(13, 148, 136, 0.06);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-card:hover {
          border-color: #F06543;
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(0, 45, 98, 0.18);
        }
        @media (max-width: 960px) {
          .featured-card { grid-template-columns: 1fr; }
        }

        .featured-img-box {
          position: relative; min-height: 380px; overflow: hidden; background: #f1f5f9;
        }
        .featured-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .featured-card:hover .featured-img-box img {
          transform: scale(1.06);
        }

        .featured-badge {
          position: absolute; top: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 16px; border-radius: 20px; text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .featured-body {
          padding: 40px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .featured-body { padding: 24px; }
        }

        .featured-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;
        }

        .featured-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700; color: #0B2545;
          line-height: 1.15; margin: 0 0 14px;
        }

        .featured-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b;
          line-height: 1.65; margin-bottom: 24px;
        }

        .info-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 24px; padding: 16px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
        }

        .info-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; color: #334155; font-weight: 800;
        }

        .features-list {
          display: flex; flex-direction: column; gap: 9px; margin-bottom: 28px;
        }
        .feature-check-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 13.5px; color: #475569; font-weight: 500;
        }

        .featured-action-row {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; padding-top: 20px; border-top: 1.5px solid #f1f5f9;
        }

        .featured-btns-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .featured-btn-view {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.05em;
          color: #0B2545; background: #f8fafc;
          border: 1.5px solid #cbd5e1; padding: 13px 22px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s ease; text-transform: uppercase;
        }
        .featured-btn-view:hover {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 45, 98, 0.2);
        }

        .featured-btn-book {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.05em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: 1.5px solid transparent; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s ease; text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(0, 45, 98, 0.25);
        }
        .featured-btn-book:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }

        .featured-price-box {
          display: flex; flex-direction: column;
        }
        .price-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 800; color: #64748b; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .price-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px; font-weight: 900; color: #0B2545;
        }
      `}),(0,V.jsxs)(`div`,{className:`featured-eyebrow`,children:[(0,V.jsx)(l,{size:15,color:`#F06543`}),(0,V.jsx)(`span`,{children:`MUST-EXPERIENCE IN ANDAMAN`})]}),(0,V.jsx)(`h2`,{className:`featured-main-title`,children:`THE ANDAMAN OCEAN SPOTLIGHT`}),(0,V.jsxs)(`div`,{ref:r,className:`featured-card`,children:[(0,V.jsxs)(`div`,{className:`featured-img-box`,children:[(0,V.jsx)(`img`,{src:a.image||a.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85`,alt:a.name}),(0,V.jsx)(`span`,{className:`featured-badge`,children:`SPOTLIGHT EXPERIENCE`})]}),(0,V.jsxs)(`div`,{className:`featured-body`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`featured-type`,children:a.category||`SCUBA & SNORKELING`}),(0,V.jsx)(`h3`,{className:`featured-title`,children:a.name}),(0,V.jsx)(`p`,{className:`featured-excerpt`,children:a.overview||a.description||a.excerpt}),(0,V.jsxs)(`div`,{className:`info-grid`,children:[(0,V.jsxs)(`div`,{className:`info-item`,children:[(0,V.jsx)(E,{size:15,color:`#F06543`}),(0,V.jsx)(`span`,{children:a.duration||`2 Hours`})]}),(0,V.jsxs)(`div`,{className:`info-item`,children:[(0,V.jsx)(N,{size:15,color:`#F06543`}),(0,V.jsx)(`span`,{children:a.location||`Havelock Island`})]}),(0,V.jsxs)(`div`,{className:`info-item`,style:{gridColumn:`span 2`},children:[(0,V.jsx)(w,{size:15,color:`#F06543`}),(0,V.jsxs)(`span`,{children:[`Best For: `,a.bestFor||`Beginners, Non-Swimmers & Families`]})]})]}),(0,V.jsx)(`div`,{className:`features-list`,children:(a.features||[`1:1 Dedicated Certified PADI Instructor`,`Free 4K GoPro Underwater Photos & Video`,`Full Mares & Scubapro Equipment Included`,`Zero Swimming Skills Required`]).map((e,t)=>(0,V.jsxs)(`div`,{className:`feature-check-item`,children:[(0,V.jsx)(i,{size:15,color:`#F06543`,className:`shrink-0`}),(0,V.jsx)(`span`,{children:e})]},t))})]}),(0,V.jsxs)(`div`,{className:`featured-action-row`,children:[(0,V.jsxs)(`div`,{className:`featured-price-box`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(`span`,{className:`price-sub`,children:`ALL-INCLUSIVE FROM`}),u>0&&(0,V.jsxs)(`span`,{style:{fontSize:10,fontWeight:900,color:`#16a34a`,background:`#dcfce7`,padding:`1px 6px`,borderRadius:6},children:[u,`% OFF`]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:8},children:[(0,V.jsxs)(`span`,{className:`price-val`,children:[d,` `,(0,V.jsx)(`span`,{className:`text-xs font-normal text-slate-500`,children:`/ person`})]}),c>o&&(0,V.jsx)(`span`,{style:{fontSize:13,color:`#94a3b8`,textDecoration:`line-through`,fontWeight:600},children:f})]})]}),(0,V.jsxs)(`div`,{className:`featured-btns-group`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>{if(t)t(a);else{let e=a.slug||a.id||`scuba-diving`;window.history.pushState({},``,`/activities/${e}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})}},className:`featured-btn-view`,children:(0,V.jsx)(`span`,{children:`View Details`})}),(0,V.jsxs)(`button`,{type:`button`,onClick:()=>{if(n)n(a);else{let e=a.slug||a.id||`scuba-diving`;window.history.pushState({},``,`/activity-booking?id=${e}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})}},className:`featured-btn-book`,children:[(0,V.jsx)(`span`,{children:`Book Now`}),(0,V.jsx)(s,{size:15})]})]})]})]})]})]})}var G={async getCategories(e=``){let t=e?`?type=${e}`:``;return(await F(`/master/categories${t}`)).data||[]},async createCategory(e){return z.post(`/master/categories`,e)},async updateCategory(e,t){return z.put(`/master/categories/${e}`,t)},async deleteCategory(e){return z.delete(`/master/categories/${e}`)},async getLocations(e=``){let t=e?`?island=${encodeURIComponent(e)}`:``;return(await F(`/master/locations${t}`)).data||[]},async createLocation(e){return z.post(`/master/locations`,e)},async updateLocation(e,t){return z.put(`/master/locations/${e}`,t)},async deleteLocation(e){return z.delete(`/master/locations/${e}`)},async uploadSingleImage(e){let t=new FormData;t.append(`image`,e);let n=await z.post(`/upload/single`,t,{headers:{"Content-Type":`multipart/form-data`}});return n?.data?.url||n?.url||``},async uploadMultipleImages(e){let t=new FormData;Array.from(e).forEach(e=>{t.append(`images`,e)});let n=await z.post(`/upload/multiple`,t,{headers:{"Content-Type":`multipart/form-data`}}),r=n?.data||n||[];return Array.isArray(r)?r.map(e=>e.url):[]}};I.registerPlugin(L);var K={Waves:y,Flame:l,Compass:T,Anchor:h,Wind:k,Eye:_},q=[{id:`scuba-diving`,title:`Scuba & Reef Diving`,categoryKey:`SCUBA_DIVING`,description:`PADI certified dive programs across Havelock, Neil & Barren Island reefs.`,icon:`Anchor`,duration:`2-4 Hours`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`},{id:`water-sports`,title:`Water Sports & Parasailing`,categoryKey:`WATER_SPORTS`,description:`High-speed jet skiing, banana rides, speedboats, and parasailing over coral bays.`,icon:`Waves`,duration:`1-2 Hours`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`},{id:`kayaking`,title:`Mangrove & Night Kayaking`,categoryKey:`KAYAKING`,description:`Paddle through dense mangrove lagoons and experience glowing bioluminescence.`,icon:`Compass`,duration:`2 Hours`,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80`},{id:`sea-walk`,title:`Underwater Sea Walk`,categoryKey:`SEA_WALK`,description:`Walk on the ocean bed surrounded by vibrant tropical clownfish and parrotfish.`,icon:`Eye`,duration:`45 Mins`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`},{id:`snorkeling`,title:`Coral Reef Snorkeling`,categoryKey:`SNORKELING`,description:`Shallow crystal waters filled with intact coral formations at Elephant & Bharatpur beaches.`,icon:`Wind`,duration:`1 Hour`,image:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80`},{id:`game-fishing`,title:`Deep Sea Game Fishing`,categoryKey:`FISHING`,description:`Sport fishing expeditions for Giant Trevally, Tuna, and Marlin in deep oceanic trenches.`,icon:`Flame`,duration:`Half / Full Day`,image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80`}];function J({onSelectCategory:e}){let[t,n]=B.useState(q),r=(0,B.useRef)(null);return(0,B.useEffect)(()=>{G.getCategories(`ACTIVITY`).then(e=>{if(Array.isArray(e)&&e.length>0){let t=e.map((e,t)=>({id:e.slug||`cat-${e.id}`,title:e.name,categoryKey:e.slug?e.slug.toUpperCase().replace(/-/g,`_`):e.name,description:e.description||`Experience extraordinary island adventure in the Andaman Sea.`,icon:e.icon||(t%2==0?`Waves`:`Compass`),duration:`1-3 Hours`,image:q[t%q.length].image}));n(t)}}).catch(()=>{})},[]),(0,B.useEffect)(()=>{if(!r.current)return;let e=r.current.querySelectorAll(`.cat-card`);I.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.7,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:r.current,start:`top 85%`}})},[t]),(0,V.jsxs)(`section`,{className:`categories-root`,children:[(0,V.jsx)(`style`,{children:`
        .categories-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .cat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .cat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr; }
        }

        .cat-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .cat-img-box {
          position: relative; height: 200px; overflow: hidden; background: #f1f5f9;
        }
        .cat-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-card:hover .cat-img-box img {
          transform: scale(1.1);
        }

        .cat-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .cat-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1.5px solid #e2e8f0;
          padding: 4px 12px; border-radius: 14px;
          display: flex; align-items: center; gap: 4px;
        }

        .cat-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-card:hover .cat-card-title { color: #F06543; }

        .cat-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px; font-weight: 500;
        }

        .cat-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          letter-spacing: 0.05em;
        }

        .cat-arrow {
          transition: transform 0.3s ease;
        }
        .cat-card:hover .cat-arrow {
          transform: translateX(5px);
        }
      `}),(0,V.jsxs)(`div`,{className:`cat-eyebrow`,children:[(0,V.jsx)(T,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`CHOOSE YOUR EXPERIENCE`})]}),(0,V.jsx)(`h2`,{className:`cat-title`,children:`SELECT AN ACTIVITY STYLE`}),(0,V.jsx)(`div`,{ref:r,className:`cat-grid`,children:t.map(t=>{let n=K[t.icon]||T;return(0,V.jsxs)(`div`,{className:`cat-card`,onClick:()=>e&&e(t.categoryKey||t.title),children:[(0,V.jsxs)(`div`,{className:`cat-img-box`,children:[(0,V.jsx)(`img`,{src:t.image,alt:t.title}),(0,V.jsx)(`div`,{className:`cat-icon-badge`,children:(0,V.jsx)(n,{size:18})}),(0,V.jsxs)(`div`,{className:`cat-duration-badge`,children:[(0,V.jsx)(E,{size:11,color:`#F06543`}),(0,V.jsx)(`span`,{children:t.duration})]})]}),(0,V.jsxs)(`div`,{className:`cat-body`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`cat-card-title`,children:t.title}),(0,V.jsx)(`p`,{className:`cat-card-desc`,children:t.description})]}),(0,V.jsxs)(`div`,{className:`cat-card-footer`,children:[(0,V.jsx)(`span`,{children:`EXPLORE ACTIVITIES`}),(0,V.jsx)(s,{size:13,className:`cat-arrow`})]})]})]},t.id)})})]})}I.registerPlugin(L);var Y=[{id:`havelock`,name:`Havelock (Swaraj Dweep)`,badge:`SCUBA CAPITAL`,heroSpot:`Elephant Beach & Nemo Reef`,filterValue:`havelock`,description:`Premier scuba diving reefs, bioluminescent night kayaking, and calm crystal lagoon waters.`,topActivities:[`PADI Discover Scuba Diving`,`Night Mangrove Kayaking`,`Elephant Beach Sea Walk`]},{id:`neil`,name:`Neil Island (Shaheed Dweep)`,badge:`CORAL REEF SANCTUARY`,heroSpot:`Bharatpur & Laxmanpur Beach`,filterValue:`neil`,description:`Vibrant live coral garden snorkeling, glass bottom boating, and scenic sunset reef walks.`,topActivities:[`Live Coral Snorkeling`,`Glass Bottom Boat Safari`,`Natural Rock Bridge Walk`]},{id:`port-blair`,name:`Port Blair & Surrounds`,badge:`COASTAL WATERSPORTS`,heroSpot:`Corbyn’s Cove & North Bay`,filterValue:`port-blair`,description:`High adrenaline jet skiing, speedboating, sea karts, parasailing, and light & sound tours.`,topActivities:[`Parasailing over Bay`,`Jet Skiing & Speedboats`,`Semi-Submarine Coral Safari`]},{id:`baratang`,name:`Baratang & Middle Andaman`,badge:`ECO EXPEDITIONS`,heroSpot:`Limestone Caves & Mangroves`,filterValue:`baratang`,description:`High-speed fiber boat safari through dense mangrove tunnels and ancient stalactite caves.`,topActivities:[`Mangrove Creek Speedboat`,`Limestone Cave Trek`,`Parrot Island Sunset Cruise`]}];function oe({onSelectIsland:e}){let[t,n]=(0,B.useState)(Y),[r,a]=(0,B.useState)(Y[0].id),o=(0,B.useRef)(null);return(0,B.useEffect)(()=>{R.getDestinations().then(e=>{let t=e.data||[];if(Array.isArray(t)&&t.length>0){let e=t.slice(0,4).map((e,t)=>({id:e.slug||`dest-${e.id}`,name:e.name,badge:e.isFeatured?`TOP RATED HUB`:`ISLAND ADVENTURE`,heroSpot:e.name,filterValue:e.slug||e.name.toLowerCase().replace(/\s+/g,`-`),description:e.shortDescription||e.description||`Pristine coastal waters and verified excursion points.`,topActivities:[`Scuba & Snorkeling`,`Guided Island Safari`,`Beach Watersports`]}));n(e),e.length>0&&a(e[0].id)}}).catch(()=>{})},[]),(0,B.useEffect)(()=>{if(!o.current)return;let e=o.current.querySelectorAll(`.island-hub-card`);I.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`,scrollTrigger:{trigger:o.current,start:`top 85%`}})},[]),(0,V.jsxs)(`section`,{className:`islands-root`,children:[(0,V.jsx)(`style`,{children:`
        .islands-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .islands-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .islands-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .islands-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .islands-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .islands-grid { grid-template-columns: 1fr; }
        }

        .island-hub-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .island-hub-card:hover, .island-hub-card.active {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.14);
        }
        .island-hub-card.active {
          background: #FFF0EB;
        }

        .hub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.08em;
          color: #F06543; background: #FFF0EB;
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid rgba(13, 148, 136, 0.3);
          display: inline-block; margin-bottom: 12px; text-transform: uppercase;
        }

        .hub-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          line-height: 1.3; margin: 0 0 6px;
        }

        .hub-spot {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px;
        }

        .hub-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin-bottom: 18px;
        }

        .top-acts-list {
          display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
          padding-top: 12px; border-top: 1.5px solid #f1f5f9;
        }
        .top-act-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #334155; font-weight: 600;
        }

        .hub-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 900;
        }
      `}),(0,V.jsxs)(`div`,{className:`islands-eyebrow`,children:[(0,V.jsx)(T,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`ISLAND ADVENTURE HUBS`})]}),(0,V.jsx)(`h2`,{className:`islands-title`,children:`EXPLORE ACTIVITIES BY ISLAND`}),(0,V.jsx)(`div`,{ref:o,className:`islands-grid`,children:t.map(t=>{let n=r===t.id;return(0,V.jsxs)(`div`,{className:`island-hub-card${n?` active`:``}`,onClick:()=>{a(t.id),e&&e(t.filterValue)},children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{className:`hub-badge`,children:t.badge}),(0,V.jsx)(`h3`,{className:`hub-title`,children:t.name}),(0,V.jsxs)(`div`,{className:`hub-spot`,children:[(0,V.jsx)(N,{size:12,color:`#F06543`}),(0,V.jsx)(`span`,{children:t.heroSpot})]}),(0,V.jsx)(`p`,{className:`hub-desc`,children:t.description}),(0,V.jsx)(`div`,{className:`top-acts-list`,children:t.topActivities.map((e,t)=>(0,V.jsxs)(`div`,{className:`top-act-item`,children:[(0,V.jsx)(i,{size:12,color:`#F06543`,className:`shrink-0`}),(0,V.jsx)(`span`,{children:e})]},t))})]}),(0,V.jsxs)(`div`,{className:`hub-footer`,children:[(0,V.jsx)(`span`,{style:{color:`#64748b`},children:`VIEW ISLAND SLOTS`}),(0,V.jsxs)(`span`,{style:{color:`#F06543`,display:`flex`,alignItems:`center`,gap:4},children:[n?`SELECTED`:`FILTER`,(0,V.jsx)(s,{size:12})]})]})]},t.id)})})]})}function se({activity:e,isWishlisted:t,onToggleWishlist:n,onOpenBooking:r,onViewDetails:a}){if(!e)return null;let o=()=>{a?a(e.slug):(window.history.pushState({},``,`/activities/${e.slug}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`}))},c=t=>{if(t&&t.stopPropagation(),r)r(e);else{let t=e.slug||e.id;window.history.pushState({},``,`/activity-booking?id=${t}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})}},l=()=>e.locations&&e.locations.length>0?e.locations.map(e=>e.locationName.replace(/ Island/gi,``).replace(/ Beach/gi,``)).join(` • `).toUpperCase():e.location?e.location.toUpperCase().replace(/\s*&\s*/g,` • `).replace(/,\s*/g,` • `):`HAVELOCK • PORT BLAIR`,u=()=>e.overview?e.overview:e.tagline?e.tagline:e.description?e.description:`Explore pristine underwater corals and crystal ocean waters with certified safety gear included.`,f=Number(e.rating||5).toFixed(2),p=e.reviewsCount||e.reviewCount||98,m=Number(e.price||0),h=Number(e.originalPrice)||(m>0?Math.round(m*1.2):0),g=h>m&&h>0?Math.round((h-m)/h*100):0,v=[`Certified Instructor`,`Free 4K HD Video`];if(Array.isArray(e.features)&&e.features.length>0)v=e.features;else if(typeof e.features==`string`&&e.features.trim())try{let t=JSON.parse(e.features);Array.isArray(t)&&(v=t)}catch{v=e.features.split(`,`).map(e=>e.trim())}return(0,V.jsxs)(`div`,{className:`act-card-root`,onClick:o,children:[(0,V.jsx)(`style`,{children:`
        .act-card-root {
          background: #ffffff;
          border: 2px solid #ebded2;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .act-card-root:hover {
          transform: translateY(-8px);
          border-color: #f06543;
          box-shadow: 0 20px 45px rgba(11, 37, 69, 0.14);
        }

        .act-card-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .act-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .act-card-root:hover .act-card-img-box img {
          transform: scale(1.08);
        }

        .act-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #0b2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          padding: 5px 14px;
          border-radius: 16px;
          border: 1.5px solid #ebded2;
          text-transform: uppercase;
        }

        .act-card-wishlist {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          background: #ffffff;
          border: 1.5px solid #ebded2;
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
        .act-card-wishlist:hover {
          color: #f06543;
          background: #ffffff;
          border-color: #f06543;
          transform: scale(1.1);
        }

        .act-card-body {
          padding: 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .act-card-location {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #f06543;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0b2545;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .act-card-root:hover .act-card-title {
          color: #f06543;
        }

        .act-card-desc {
          font-size: 13px;
          font-weight: 500;
          color: #5c6f84;
          line-height: 1.55;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .act-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .act-chip {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #2d3e50;
          background: #fff8f0;
          border: 1px solid #ebded2;
          padding: 3px 9px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .act-card-meta {
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

        .act-card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 16px;
        }

        .act-btn-view {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #0b2545;
          background: #faf4ee;
          border: 1.5px solid #ebded2;
          padding: 11px 10px;
          border-radius: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .act-btn-view:hover {
          background: #0b2545;
          color: #ffffff;
          border-color: #0b2545;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.2);
        }

        .act-btn-book {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b4a 0%, #f06543 100%);
          border: 1.5px solid transparent;
          padding: 11px 10px;
          border-radius: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.35);
        }

        .act-btn-book:hover {
          background: linear-gradient(135deg, #f06543 0%, #d64525 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(240, 101, 67, 0.5);
        }
      `}),(0,V.jsxs)(`div`,{className:`act-card-img-box`,children:[(0,V.jsx)(`img`,{src:e.image||e.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,alt:e.name}),(0,V.jsxs)(`div`,{style:{position:`absolute`,top:14,left:14,display:`flex`,gap:6,alignItems:`center`,zIndex:2},children:[(0,V.jsx)(`span`,{className:`act-card-badge`,style:{position:`static`},children:e.category||`ADVENTURE`}),g>0&&(0,V.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:10,fontWeight:900,color:`#ffffff`,background:`#16a34a`,boxShadow:`0 2px 8px rgba(22, 163, 74, 0.4)`,padding:`4px 8px`,borderRadius:12,letterSpacing:`0.04em`},children:[g,`% OFF`]})]}),(0,V.jsx)(`button`,{onClick:t=>{t.stopPropagation(),n&&n(e.id,t)},className:`act-card-wishlist`,title:`Save to Wishlist`,children:(0,V.jsx)(ee,{className:`w-3.5 h-3.5 ${t?`fill-[#ff4f7b] text-[#ff4f7b]`:``}`})})]}),(0,V.jsxs)(`div`,{className:`act-card-body`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`act-card-location`,children:[(0,V.jsx)(N,{size:11,color:`#F06543`}),(0,V.jsx)(`span`,{children:l()})]}),(0,V.jsx)(`div`,{className:`act-card-title`,children:e.name}),(0,V.jsx)(`p`,{className:`act-card-desc`,children:u()}),(0,V.jsx)(`div`,{className:`act-card-chips`,children:v.slice(0,2).map((e,t)=>(0,V.jsxs)(`span`,{className:`act-chip`,children:[(0,V.jsx)(i,{size:11,color:`#F06543`}),(0,V.jsx)(`span`,{children:e})]},t))}),(0,V.jsxs)(`div`,{className:`act-card-meta`,children:[(0,V.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,V.jsx)(E,{size:12,color:`#F06543`}),e.duration||`45 Mins / 1 Hr`]}),(0,V.jsx)(`span`,{style:{color:`#94a3b8`},children:`•`}),(0,V.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,V.jsx)(d,{size:12,className:`fill-[#ffd700] text-[#ffd700]`}),f,` (`,p,`)`]}),(0,V.jsx)(`span`,{style:{color:`#94a3b8`},children:`•`}),(0,V.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:5,flexWrap:`wrap`},children:[(0,V.jsxs)(`span`,{className:`font-mono text-sm font-black text-[#0B2545]`,children:[`₹`,m>0?m.toLocaleString(`en-IN`):`Enquire`]}),h>m&&(0,V.jsxs)(`span`,{style:{fontSize:11,color:`#94a3b8`,textDecoration:`line-through`,fontWeight:600},children:[`₹`,h.toLocaleString(`en-IN`)]})]})]})]}),(0,V.jsxs)(`div`,{className:`act-card-actions`,children:[(0,V.jsxs)(`button`,{type:`button`,className:`act-btn-view`,onClick:e=>{e.stopPropagation(),o()},title:`View details of ${e.name}`,children:[(0,V.jsx)(_,{size:13}),(0,V.jsx)(`span`,{children:`View Details`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`act-btn-book`,onClick:c,title:`Book ${e.name} now`,children:[(0,V.jsx)(`span`,{children:`Book Now`}),(0,V.jsx)(s,{size:13})]})]})]})]})}I.registerPlugin(L);var ce=[`All`,`Water Sports`,`Adventure`,`Scuba & Snorkeling`,`Marine Life`,`Boat Activities`];function le({activities:e=[],loading:t=!1,error:n=``,selectedCategory:r=`All`,onSelectCategory:i,selectedLocation:a=`All Locations`,onSelectLocation:s,priceRange:c=1e4,onChangePriceRange:l,sortBy:u=`popular`,onChangeSortBy:d,onResetFilters:f,savedWishlist:p={},onToggleWishlist:m,onOpenBooking:h,onViewDetails:g,onRetry:_}){let v=(0,B.useRef)(null);(0,B.useEffect)(()=>{if(!v.current||t)return;let e=v.current.querySelectorAll(`.act-card-root`);I.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.08,ease:`power2.out`,scrollTrigger:{trigger:v.current,start:`top 85%`}})},[e,t,r,a]);let y=r!==`All`||a!==`All Locations`||c<1e4||u!==`popular`;return(0,V.jsxs)(`section`,{className:`grid-section-root`,id:`activity-grid-section`,children:[(0,V.jsx)(`style`,{children:`
        .grid-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 90px;
        }

        .act-grid-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .act-grid-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 14px; line-height: 1.1;
        }

        .act-grid-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; text-align: center;
          margin: 0 auto 36px; max-width: 620px; font-weight: 500;
        }

        .filter-capsules-wrap {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          margin-bottom: 44px;
        }

        .cat-pills-row {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; width: 100%;
        }

        .cat-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.04em;
          text-transform: uppercase; padding: 10px 22px; border-radius: 30px;
          cursor: pointer; transition: all 0.25s ease; border: 2px solid #e2e8f0;
          background: #ffffff; color: #334155; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .cat-filter-btn:hover {
          color: #0B2545; border-color: #cbd5e1; background: #f8fafc;
        }
        .cat-filter-btn.active {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          box-shadow: 0 6px 18px rgba(0, 45, 98, 0.22);
        }

        .controls-sub-row {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; flex-wrap: wrap; width: 100%;
        }

        .control-capsule {
          background: #ffffff; border: 2px solid #e2e8f0;
          border-radius: 16px; padding: 8px 16px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease;
        }
        .control-capsule:hover {
          border-color: #F06543;
        }

        .act-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1080px) {
          .act-cards-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .act-cards-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}),(0,V.jsxs)(`div`,{className:`act-grid-eyebrow`,children:[(0,V.jsx)(S,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`CURATED ACTIVITY CATALOG`})]}),(0,V.jsx)(`h2`,{className:`act-grid-title`,children:`ALL ANDAMAN EXPERIENCES`}),(0,V.jsxs)(`p`,{className:`act-grid-desc`,children:[`Showing `,(0,V.jsxs)(`span`,{style:{fontWeight:800,color:`#0B2545`},children:[e.length,` verified activities`]}),` with live slot booking, certified equipment, and instant confirmation.`]}),(0,V.jsxs)(`div`,{className:`filter-capsules-wrap`,children:[(0,V.jsx)(`div`,{className:`cat-pills-row`,children:ce.map(e=>(0,V.jsx)(`button`,{onClick:()=>i(e),className:`cat-filter-btn${r===e?` active`:``}`,children:e},e))}),(0,V.jsxs)(`div`,{className:`controls-sub-row`,children:[(0,V.jsxs)(`div`,{className:`control-capsule`,children:[(0,V.jsx)(N,{size:14,className:`text-[#F06543]`}),(0,V.jsxs)(`select`,{value:a,onChange:e=>s(e.target.value),className:`bg-transparent text-xs font-black text-[#0B2545] focus:outline-none cursor-pointer`,children:[(0,V.jsx)(`option`,{value:`All Locations`,children:`All Islands`}),(0,V.jsx)(`option`,{value:`Havelock`,children:`Havelock Island`}),(0,V.jsx)(`option`,{value:`Port Blair`,children:`Port Blair`}),(0,V.jsx)(`option`,{value:`Neil Island`,children:`Neil Island`}),(0,V.jsx)(`option`,{value:`North Bay`,children:`North Bay`})]})]}),(0,V.jsxs)(`div`,{className:`control-capsule`,children:[(0,V.jsx)(`span`,{className:`text-slate-400 uppercase text-[10px] font-black tracking-wider`,children:`Max:`}),(0,V.jsxs)(`span`,{className:`text-[#0B2545] font-mono font-black text-xs min-w-[65px]`,children:[`₹`,c.toLocaleString()]}),(0,V.jsx)(`input`,{type:`range`,min:`500`,max:`10000`,step:`500`,value:c,onChange:e=>l(Number(e.target.value)),className:`w-24 sm:w-32 h-1.5 accent-[#F06543] bg-slate-200 rounded-lg cursor-pointer`})]}),(0,V.jsxs)(`div`,{className:`control-capsule`,children:[(0,V.jsx)(o,{size:14,className:`text-[#F06543]`}),(0,V.jsxs)(`select`,{value:u,onChange:e=>d(e.target.value),className:`bg-transparent text-xs font-black text-[#0B2545] focus:outline-none cursor-pointer`,children:[(0,V.jsx)(`option`,{value:`popular`,children:`Most Popular`}),(0,V.jsx)(`option`,{value:`rating`,children:`Highest Rated`}),(0,V.jsx)(`option`,{value:`price_asc`,children:`Price: Low to High`}),(0,V.jsx)(`option`,{value:`price_desc`,children:`Price: High to Low`})]})]}),y&&(0,V.jsxs)(`button`,{onClick:f,className:`text-xs font-black text-red-600 hover:text-red-700 flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-red-50 hover:bg-red-100 border-2 border-red-200 transition-all cursor-pointer shadow-sm`,children:[(0,V.jsx)(D,{size:13}),(0,V.jsx)(`span`,{children:`Reset`})]})]})]}),t&&(0,V.jsx)(`div`,{className:`act-cards-grid`,children:[1,2,3,4,5,6].map(e=>(0,V.jsxs)(`div`,{className:`bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm animate-pulse`,children:[(0,V.jsx)(`div`,{className:`h-48 bg-slate-200`}),(0,V.jsxs)(`div`,{className:`p-6 space-y-4`,children:[(0,V.jsx)(`div`,{className:`h-6 bg-slate-200 rounded-lg w-3/4`}),(0,V.jsx)(`div`,{className:`h-3.5 bg-slate-100 rounded w-full`}),(0,V.jsx)(`div`,{className:`h-3.5 bg-slate-100 rounded w-5/6`}),(0,V.jsxs)(`div`,{className:`pt-4 flex justify-between items-center border-t border-slate-100`,children:[(0,V.jsx)(`div`,{className:`h-7 bg-slate-200 rounded w-1/3`}),(0,V.jsx)(`div`,{className:`h-10 bg-slate-200 rounded-xl w-1/3`})]})]})]},e))}),!t&&n&&(0,V.jsxs)(`div`,{className:`py-16 text-center bg-white border-2 border-slate-200 rounded-3xl p-8 max-w-lg mx-auto shadow-md`,children:[(0,V.jsx)(`p`,{className:`text-slate-600 text-sm mb-5 font-semibold`,children:n}),(0,V.jsx)(`button`,{onClick:_,className:`px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer`,children:`Try Again`})]}),!t&&!n&&e.length===0&&(0,V.jsxs)(`div`,{className:`py-16 text-center bg-white border-2 border-slate-200 rounded-3xl p-8 max-w-md mx-auto shadow-md space-y-4`,children:[(0,V.jsx)(T,{className:`w-14 h-14 text-slate-300 mx-auto`}),(0,V.jsx)(`h3`,{className:`text-2xl font-black text-[#0B2545] font-serif`,children:`No Activities Found`}),(0,V.jsx)(`p`,{className:`text-xs text-slate-500 font-medium leading-relaxed`,children:`We couldn't find any activities matching your selected filters. Try broadening your location or price range.`}),(0,V.jsx)(`button`,{onClick:f,className:`px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border-2 border-slate-200 text-[#0B2545] font-black text-xs uppercase tracking-wider transition-all cursor-pointer`,children:`Clear All Filters`})]}),!t&&!n&&e.length>0&&(0,V.jsx)(`div`,{ref:v,className:`act-cards-grid`,children:e.map((e,t)=>(0,V.jsx)(se,{activity:e,isWishlisted:p[e.id],onToggleWishlist:m,onOpenBooking:h,onViewDetails:g},`${e.id||`act`}-${t}`))})]})}I.registerPlugin(L);var ue=[{icon:n,title:`PADI & SSI CERTIFIED`,desc:`Dedicated 1:1 certified divemasters guide you every second underwater for unmatched personal safety.`},{icon:S,title:`FREE 4K HD MEDIA`,desc:`Complimentary high-definition underwater GoPro photos and videos captured and transferred instantly.`},{icon:y,title:`ZERO SWIMMING NEEDED`,desc:`Specially engineered shallow-to-deep programs designed specifically for non-swimmers and first-timers.`},{icon:p,title:`TOP-TIER EQUIPMENT`,desc:`World-class Mares and Scubapro diving gear sanitized before every session to global standards.`},{icon:m,title:`24/7 HARBOUR SUPPORT`,desc:`On-ground island concierge desks with instant rescheduling in case of adverse ocean weather.`}];function de(){let e=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(!e.current)return;let t=e.current.querySelectorAll(`.why-act-card`);I.fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:e.current,start:`top 85%`}})},[]),(0,V.jsxs)(`section`,{className:`why-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .why-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-act-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-act-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-act-grid { grid-template-columns: 1fr; }
        }

        .why-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .why-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .why-act-icon-box {
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-act-card:hover .why-act-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .why-act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .why-act-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}),(0,V.jsxs)(`div`,{className:`why-act-eyebrow`,children:[(0,V.jsx)(S,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`WHY DIVE WITH US`})]}),(0,V.jsx)(`h2`,{className:`why-act-title`,children:`WHY BOOK ACTIVITIES WITH ANDAMAN TRAILS?`}),(0,V.jsx)(`div`,{ref:e,className:`reasons-act-grid`,children:ue.map((e,t)=>{let n=e.icon;return(0,V.jsxs)(`div`,{className:`why-act-card`,children:[(0,V.jsx)(`div`,{className:`why-act-icon-box`,children:(0,V.jsx)(n,{size:22})}),(0,V.jsx)(`h3`,{className:`why-act-card-title`,children:e.title}),(0,V.jsx)(`p`,{className:`why-act-card-desc`,children:e.desc})]},t)})})]})}I.registerPlugin(L);function fe({onDiscoverScuba:e}){let t=(0,B.useRef)(null);return(0,B.useEffect)(()=>{t.current&&I.fromTo(t.current,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 80%`}})},[]),(0,V.jsxs)(`section`,{ref:t,className:`scuba-exp-root`,children:[(0,V.jsx)(`style`,{children:`
        .scuba-exp-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #0f172a;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .scuba-exp-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .scuba-exp-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.48) saturate(1.3);
        }

        .scuba-exp-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(2, 14, 22, 0.92) 0%,
            rgba(13, 148, 136, 0.35) 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .scuba-exp-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 750px; height: 360px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.22) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .scuba-exp-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .scuba-exp-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #2dd4bf;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(45, 212, 191, 0.4);
          padding: 6px 18px; border-radius: 20px; margin-bottom: 20px;
        }

        .scuba-exp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .scuba-exp-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #e2e8f0; opacity: 0.95;
          margin: 0 auto 28px; max-width: 660px; line-height: 1.55;
        }

        .scuba-exp-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .scuba-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #2dd4bf;
          background: rgba(0, 0, 0, 0.45);
          border: 1.5px solid rgba(45, 212, 191, 0.35);
          padding: 6px 16px; border-radius: 16px; text-transform: uppercase;
        }

        .scuba-exp-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.5); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .scuba-exp-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }
      `}),(0,V.jsx)(`div`,{className:`scuba-exp-bg`,children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Scuba Diving Coral Sanctuary`})}),(0,V.jsx)(`div`,{className:`scuba-exp-overlay`}),(0,V.jsx)(`div`,{className:`scuba-exp-glow`}),(0,V.jsxs)(`div`,{className:`scuba-exp-content`,children:[(0,V.jsxs)(`div`,{className:`scuba-exp-eyebrow`,children:[(0,V.jsx)(y,{size:14,color:`#2dd4bf`}),(0,V.jsx)(`span`,{children:`DEEP SEA SCUBA EXPEDITIONS`})]}),(0,V.jsx)(`h2`,{className:`scuba-exp-title`,children:`ENTER THE SILENT BLUE WORLD`}),(0,V.jsx)(`p`,{className:`scuba-exp-quote`,children:`"The best moments in the Andaman Sea aren't seen from the shore — they are discovered 12 meters under crystal water."`}),(0,V.jsxs)(`div`,{className:`scuba-exp-tags`,children:[(0,V.jsx)(`span`,{className:`scuba-tag-pill`,children:`PADI & SSI CERTIFIED`}),(0,V.jsx)(`span`,{className:`scuba-tag-pill`,children:`FREE 4K GOPRO FOOTAGE`}),(0,V.jsx)(`span`,{className:`scuba-tag-pill`,children:`NON-SWIMMERS WELCOME`}),(0,V.jsx)(`span`,{className:`scuba-tag-pill`,children:`SHORE & BOAT DIVING`})]}),(0,V.jsxs)(`button`,{onClick:e,className:`scuba-exp-btn`,children:[(0,V.jsx)(`span`,{children:`DISCOVER SCUBA PACKAGES`}),(0,V.jsx)(s,{size:15})]})]})]})}I.registerPlugin(L);function pe({onDiscoverNightKayak:e}){let t=(0,B.useRef)(null);return(0,B.useEffect)(()=>{t.current&&I.fromTo(t.current,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 80%`}})},[]),(0,V.jsxs)(`section`,{ref:t,className:`night-kayak-root`,children:[(0,V.jsx)(`style`,{children:`
        .night-kayak-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #020b14;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .night-kayak-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .night-kayak-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.42) saturate(1.4);
        }

        .night-kayak-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(2, 11, 20, 0.94) 0%,
            rgba(2, 44, 80, 0.45) 50%,
            rgba(2, 11, 20, 0.96) 100%
          );
        }

        .night-kayak-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 720px; height: 360px;
          background: radial-gradient(ellipse at center, rgba(34, 211, 238, 0.25) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .night-kayak-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .night-kayak-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #22d3ee;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(34, 211, 238, 0.4);
          padding: 6px 18px; border-radius: 20px; margin-bottom: 20px;
        }

        .night-kayak-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .night-kayak-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #e0f2fe; opacity: 0.95;
          margin: 0 auto 28px; max-width: 660px; line-height: 1.55;
        }

        .night-kayak-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .night-kayak-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #38bdf8;
          background: rgba(0, 0, 0, 0.55);
          border: 1.5px solid rgba(56, 189, 248, 0.35);
          padding: 6px 16px; border-radius: 16px; text-transform: uppercase;
        }

        .night-kayak-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0284c7, #0B2545);
          border: 1.5px solid rgba(56, 189, 248, 0.5); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(2, 132, 199, 0.4);
        }
        .night-kayak-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(2, 132, 199, 0.6);
          border-color: #38bdf8;
        }
      `}),(0,V.jsx)(`div`,{className:`night-kayak-bg`,children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1920&q=90`,alt:`Bioluminescence Night Kayaking in Havelock Mangroves`})}),(0,V.jsx)(`div`,{className:`night-kayak-overlay`}),(0,V.jsx)(`div`,{className:`night-kayak-glow`}),(0,V.jsxs)(`div`,{className:`night-kayak-content`,children:[(0,V.jsxs)(`div`,{className:`night-kayak-eyebrow`,children:[(0,V.jsx)(S,{size:14,color:`#22d3ee`}),(0,V.jsx)(`span`,{children:`MAGICAL NIGHT EXPEDITION`})]}),(0,V.jsx)(`h2`,{className:`night-kayak-title`,children:`BIOLUMINESCENT NIGHT KAYAKING`}),(0,V.jsx)(`p`,{className:`night-kayak-quote`,children:`"Paddle through star-lit mangrove creeks where every dip of your paddle sparks an ethereal blue neon ocean glow."`}),(0,V.jsxs)(`div`,{className:`night-kayak-tags`,children:[(0,V.jsx)(`span`,{className:`night-kayak-tag-pill`,children:`NEON GLOWING PLANKTON`}),(0,V.jsx)(`span`,{className:`night-kayak-tag-pill`,children:`STARGAZING LAGOONS`}),(0,V.jsx)(`span`,{className:`night-kayak-tag-pill`,children:`CERTIFIED NIGHT GUIDES`}),(0,V.jsx)(`span`,{className:`night-kayak-tag-pill`,children:`HAVELOCK & PORT BLAIR`})]}),(0,V.jsxs)(`button`,{onClick:e,className:`night-kayak-btn`,children:[(0,V.jsx)(`span`,{children:`EXPLORE NIGHT KAYAKING`}),(0,V.jsx)(s,{size:15})]})]})]})}I.registerPlugin(L);function me({onDiscoverSeaKart:e}){let t=(0,B.useRef)(null);return(0,B.useEffect)(()=>{t.current&&I.fromTo(t.current,{opacity:0,scale:.97},{opacity:1,scale:1,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 80%`}})},[]),(0,V.jsxs)(`section`,{ref:t,className:`seakart-root`,children:[(0,V.jsx)(`style`,{children:`
        .seakart-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #0B2545;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .seakart-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .seakart-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.48) saturate(1.3);
        }

        .seakart-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(0, 45, 98, 0.92) 0%,
            rgba(13, 148, 136, 0.4) 50%,
            rgba(0, 45, 98, 0.96) 100%
          );
        }

        .seakart-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 720px; height: 360px;
          background: radial-gradient(ellipse at center, rgba(255, 180, 50, 0.22) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .seakart-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .seakart-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #ffd700;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 215, 0, 0.4);
          padding: 6px 18px; border-radius: 20px; margin-bottom: 20px;
        }

        .seakart-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .seakart-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #f8fafc; opacity: 0.95;
          margin: 0 auto 28px; max-width: 660px; line-height: 1.55;
        }

        .seakart-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .seakart-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #ffd700;
          background: rgba(0, 0, 0, 0.5);
          border: 1.5px solid rgba(255, 215, 0, 0.35);
          padding: 6px 16px; border-radius: 16px; text-transform: uppercase;
        }

        .seakart-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(255, 215, 0, 0.5); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(255, 215, 0, 0.3);
        }
        .seakart-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(255, 215, 0, 0.5);
          border-color: #ffd700;
        }
      `}),(0,V.jsx)(`div`,{className:`seakart-bg`,children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90`,alt:`Self-drive SeaKart Adventure at Corbyn's Cove Beach`})}),(0,V.jsx)(`div`,{className:`seakart-overlay`}),(0,V.jsx)(`div`,{className:`seakart-glow`}),(0,V.jsxs)(`div`,{className:`seakart-content`,children:[(0,V.jsxs)(`div`,{className:`seakart-eyebrow`,children:[(0,V.jsx)(l,{size:14,color:`#ffd700`}),(0,V.jsx)(`span`,{children:`EXCLUSIVE WATER SPORTS ADVENTURE`})]}),(0,V.jsx)(`h2`,{className:`seakart-title`,children:`SELF-DRIVE SEAKART AT CORBYN'S COVE`}),(0,V.jsx)(`p`,{className:`seakart-quote`,children:`"Take the wheel of a hybrid jet-boat in the open sea. Complete control, high thrill, and 100% unsinkable safety."`}),(0,V.jsxs)(`div`,{className:`seakart-tags`,children:[(0,V.jsx)(`span`,{className:`seakart-tag-pill`,children:`YOU DRIVE THE SEAKART`}),(0,V.jsx)(`span`,{className:`seakart-tag-pill`,children:`UNSINKABLE DESIGN`}),(0,V.jsx)(`span`,{className:`seakart-tag-pill`,children:`CORBYN'S COVE, PORT BLAIR`}),(0,V.jsx)(`span`,{className:`seakart-tag-pill`,children:`FREE HD VIDEO`})]}),(0,V.jsxs)(`button`,{onClick:e,className:`seakart-btn`,children:[(0,V.jsx)(`span`,{children:`BOOK SEAKART EXPERIENCE`}),(0,V.jsx)(s,{size:15})]})]})]})}I.registerPlugin(L);var he=[{icon:p,title:`CERTIFIED DIVE GEAR`,desc:`Sanitized Mares/Scubapro regulator, BCD, mask, fins, and safety flotation life jackets included.`},{icon:w,title:`1:1 PADI DIVE MASTER`,desc:`A dedicated certified instructor holds you underwater throughout the entire dive duration.`},{icon:t,title:`FREE 4K HD GOPRO MEDIA`,desc:`Underwater high-resolution photos and video recordings transferred to your phone at no extra charge.`},{icon:T,title:`SHORE / BOAT TRANSFERS`,desc:`Speed boat transfer to pristine outer reefs (Nemo Reef / Elephant Beach / North Bay).`},{icon:P,title:`SAFETY & FIRST AID`,desc:`Comprehensive briefing, medical oxygen on standby, and full marine activity insurance coverage.`},{icon:r,title:`CHANGING ROOMS & LOCKERS`,desc:`Access to clean freshwater showers, changing cabins, and secure equipment lockers at dive stations.`}];function ge(){let e=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(!e.current)return;let t=e.current.querySelectorAll(`.inc-act-card`);I.fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:e.current,start:`top 85%`}})},[]),(0,V.jsxs)(`section`,{className:`inclusions-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .inclusions-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .inc-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .inc-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 10px; line-height: 1.1;
        }

        .inc-act-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; font-style: italic; text-align: center;
          margin-bottom: 44px;
        }

        .inc-act-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 960px) {
          .inc-act-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .inc-act-grid { grid-template-columns: 1fr; }
        }

        .inc-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 32px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .inc-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .inc-act-icon-box {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px; transition: transform 0.3s ease;
        }
        .inc-act-card:hover .inc-act-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .inc-act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .inc-act-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}),(0,V.jsxs)(`div`,{className:`inc-act-eyebrow`,children:[(0,V.jsx)(T,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`WHAT TO EXPECT`})]}),(0,V.jsx)(`h2`,{className:`inc-act-title`,children:`ACTIVITY INCLUSIONS & SAFETY ASSURANCE`}),(0,V.jsx)(`p`,{className:`inc-act-note`,children:`All activity bookings include certified gear, safety briefings, and complimentary 4K media.`}),(0,V.jsx)(`div`,{ref:e,className:`inc-act-grid`,children:he.map((e,t)=>{let n=e.icon;return(0,V.jsxs)(`div`,{className:`inc-act-card`,children:[(0,V.jsx)(`div`,{className:`inc-act-icon-box`,children:(0,V.jsx)(n,{size:24})}),(0,V.jsx)(`h3`,{className:`inc-act-card-title`,children:e.title}),(0,V.jsx)(`p`,{className:`inc-act-card-desc`,children:e.desc})]},t)})})]})}I.registerPlugin(L);var _e=[{num:`01`,title:`CHOOSE ADVENTURE`,desc:`Select your preferred scuba, sea walk, kayak, or water sports activity.`},{num:`02`,title:`SELECT ISLAND & DATE`,desc:`Pick Havelock, Port Blair, or Neil Island with preferred morning/afternoon slot.`},{num:`03`,title:`INSTANT CONFIRMATION`,desc:`Secure your slot with online booking voucher & instant instructor allocation.`},{num:`04`,title:`MEET & DIVE!`,desc:`Arrive at dive jetty, suit up with sanitized gear, and explore the Andaman sea!`}];function ve({onStartBooking:e}){let t=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(!t.current)return;let e=t.current.querySelectorAll(`.step-act-card`);I.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.15,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 85%`}})},[]),(0,V.jsxs)(`section`,{className:`flow-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .flow-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .flow-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .flow-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 54px; line-height: 1.1;
        }

        .steps-act-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px; position: relative;
        }
        @media (max-width: 960px) {
          .steps-act-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .steps-act-grid { grid-template-columns: 1fr; }
        }

        .step-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 36px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          transition: all 0.35s ease; position: relative; z-index: 2;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .step-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .step-num-circle {
          width: 66px; height: 66px; border-radius: 50%;
          background: #FFF0EB;
          border: 2.5px solid #F06543;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px; font-weight: 700; color: #0B2545;
          margin-bottom: 20px; box-shadow: 0 0 20px rgba(13, 148, 136, 0.15);
        }

        .step-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px;
        }

        .step-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }

        .flow-act-cta-wrap {
          text-align: center; margin-top: 48px;
        }

        .flow-act-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 6px 22px rgba(0, 45, 98, 0.28);
        }
        .flow-act-cta-btn:hover {
          transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}),(0,V.jsxs)(`div`,{className:`flow-act-eyebrow`,children:[(0,V.jsx)(T,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`EASY 4-STEP BOOKING PROCESS`})]}),(0,V.jsx)(`h2`,{className:`flow-act-title`,children:`YOUR ADVENTURE, MADE SIMPLE`}),(0,V.jsx)(`div`,{ref:t,className:`steps-act-grid`,children:_e.map((e,t)=>(0,V.jsxs)(`div`,{className:`step-act-card`,children:[(0,V.jsx)(`div`,{className:`step-num-circle`,children:e.num}),(0,V.jsx)(`h3`,{className:`step-card-title`,children:e.title}),(0,V.jsx)(`p`,{className:`step-card-desc`,children:e.desc})]},t))}),(0,V.jsx)(`div`,{className:`flow-act-cta-wrap`,children:(0,V.jsxs)(`button`,{onClick:e,className:`flow-act-cta-btn`,children:[(0,V.jsx)(`span`,{children:`FIND LIVE SLOTS NOW`}),(0,V.jsx)(s,{size:15})]})})]})}var X=[{id:`havelock`,name:`Havelock Island (Swaraj Dweep)`,tag:`Scuba & Kayak Hub`},{id:`neil`,name:`Neil Island (Shaheed Dweep)`,tag:`Natural Bridge & Shallow Reef`},{id:`port-blair`,name:`Port Blair & Corbyn’s Cove`,tag:`Capital & Heritage Waters`},{id:`north-bay`,name:`North Bay Coral Island`,tag:`Glass Boat & Snorkeling`},{id:`baratang`,name:`Baratang Island Mangroves`,tag:`Speedboat Creek Expedition`},{id:`diglipur`,name:`Diglipur (Ross & Smith)`,tag:`Twin Island Safari`}],Z=[{id:`boat-scuba-diving`,name:`Boat Scuba Diving (Certified Divemaster)`,price:5500,duration:`2.5 hrs`,popularTime:`06:00 AM - 08:30 AM`},{id:`shore-scuba-diving`,name:`Shore Scuba Diving (Beginners Nemo Reef)`,price:3500,duration:`1.5 hrs`,popularTime:`08:30 AM - 11:00 AM`},{id:`night-bioluminescence-kayak`,name:`Bioluminescent Night Mangrove Kayaking`,price:2800,duration:`2.0 hrs`,popularTime:`06:30 PM - 08:30 PM`},{id:`undersea-helmet-sea-walk`,name:`Undersea Helmet Sea Walk with Live Corals`,price:3500,duration:`1.5 hrs`,popularTime:`08:30 AM - 11:00 AM`},{id:`ocean-parasailing`,name:`Ocean Parasailing with Speedboat Dip`,price:3200,duration:`1.0 hr`,popularTime:`01:00 PM - 03:30 PM`},{id:`deep-water-snorkeling`,name:`Deep Sea Snorkeling Safari with Equipment`,price:1800,duration:`2.0 hrs`,popularTime:`08:30 AM - 11:00 AM`},{id:`glass-bottom-boat-ride`,name:`Glass Bottom Coral Safari & Semi-Submarine`,price:1500,duration:`1.0 hr`,popularTime:`08:30 AM - 11:00 AM`}],ye=[{id:`early`,label:`Early Morning (06:00 AM - 08:30 AM)`,desc:`Calm water & highest underwater visibility`},{id:`mid-morning`,label:`Mid Morning (08:30 AM - 11:00 AM)`,desc:`Peak sunlight illumination on corals`},{id:`afternoon`,label:`Afternoon (01:00 PM - 03:30 PM)`,desc:`Warm island breezes & speedboat rides`},{id:`night`,label:`Night Kayak Slot (06:30 PM - 08:30 PM)`,desc:`Stargazing & glowing bioluminescent plankton`}];function be({onBookDirect:e}){let[t,n]=(0,B.useState)(`neil`),[r,i]=(0,B.useState)(`boat-scuba-diving`),[a,o]=(0,B.useState)(()=>{let e=new Date;return e.setDate(e.getDate()+1),e.toISOString().split(`T`)[0]}),[l,u]=(0,B.useState)(`Early Morning (06:00 AM - 08:30 AM)`),[d,p]=(0,B.useState)(2),[m,h]=(0,B.useState)(!1),[g,_]=(0,B.useState)(null),y=Z.find(e=>e.id===r)||Z[0],b=X.find(e=>e.id===t)||X[0];return(0,V.jsxs)(`section`,{className:`avail-act-root`,id:`activity-availability-section`,children:[(0,V.jsx)(`style`,{children:`
        .avail-act-root {
          max-width: 1140px;
          margin: 0 auto;
          padding: 70px 24px 80px;
          font-family: 'Inter', sans-serif;
        }

        .avail-act-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 6px 16px;
          border-radius: 30px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .avail-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          color: #0B2545;
          text-align: center;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .avail-act-notice {
          background: #FFF5F0;
          border: 1.5px solid #FFD3C4;
          border-radius: 16px;
          padding: 12px 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 13px;
          color: #9A3412;
          margin: 0 auto 36px;
          max-width: 740px;
          text-align: center;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.06);
        }

        .avail-act-card {
          background: #ffffff;
          border: 2px solid #EBDED2;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 20px 60px rgba(11, 37, 69, 0.08);
        }
        @media (max-width: 768px) {
          .avail-act-card { padding: 22px; }
        }

        .avail-act-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-bottom: 26px;
        }
        @media (max-width: 768px) {
          .avail-act-grid { grid-template-columns: 1fr; }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #0B2545;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .input-box {
          background: #FAF4EE;
          border: 1.5px solid #EBDED2;
          border-radius: 14px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
        }
        .input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.12);
        }

        .check-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 16px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.35);
        }
        .check-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(240, 101, 67, 0.45);
        }

        .result-box-thick {
          margin-top: 28px;
          padding: 24px 26px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          border: 2px solid;
          animation: resultSlideUp 0.3s ease;
        }
        @keyframes resultSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .result-avail-thick {
          background: #F0FDF4;
          border-color: #86EFAC;
          color: #166534;
        }
        .result-limit-thick {
          background: #FFFBEB;
          border-color: #FDE68A;
          color: #92400E;
        }
      `}),(0,V.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:20},children:[(0,V.jsxs)(`div`,{className:`avail-act-eyebrow`,children:[(0,V.jsx)(C,{size:13,color:`#F06543`}),(0,V.jsx)(`span`,{children:`REAL-TIME INSTRUCTOR SCHEDULER`})]}),(0,V.jsx)(`h2`,{className:`avail-act-title`,children:`CHECK ACTIVITY SLOT AVAILABILITY`})]}),(0,V.jsxs)(`div`,{className:`avail-act-notice`,children:[(0,V.jsx)(f,{size:16,className:`shrink-0 text-[#F06543]`}),(0,V.jsx)(`span`,{children:`Pre-booking is highly recommended for morning Scuba Diving & Bioluminescence Kayaking due to limited daily slots.`})]}),(0,V.jsxs)(`form`,{className:`avail-act-card`,onSubmit:e=>{e.preventDefault(),h(!0),_(null),setTimeout(()=>{h(!1);let e=l.includes(`Night`)||l.includes(`06:30 PM`),t=y.id.includes(`kayak`),n=!(e&&!t),r=y.price*d;_(n?{status:`available`,title:`SLOT STATUS: CONFIRMED AVAILABLE`,message:`Confirmed Slots Available for ${d} guest(s) on ${a} in ${b.name} (${l}). Certified PADI/SSI divemasters & safety crew allocated.`,pricePerPerson:y.price,totalPrice:r,instructors:`Allocated (Max 1:2 instructor ratio)`,activity:y,island:b,date:a,timeSlot:l,guestsCount:d}:{status:`limited`,title:`SLOT STATUS: HIGH DEMAND / LIMITED SLOTS`,message:`Slots filling rapidly for ${y.name} on ${a}. Only 2 instructor slots remaining for this timing. Early lock advised.`,pricePerPerson:y.price,totalPrice:r,instructors:`Limited allocation`,activity:y,island:b,date:a,timeSlot:l,guestsCount:d})},450)},children:[(0,V.jsxs)(`div`,{className:`avail-act-grid`,children:[(0,V.jsxs)(`div`,{className:`field-group`,children:[(0,V.jsx)(`label`,{className:`field-lbl`,children:`ISLAND LOCATION`}),(0,V.jsxs)(`div`,{className:`input-box`,children:[(0,V.jsx)(N,{size:16,color:`#F06543`}),(0,V.jsx)(`select`,{value:t,onChange:e=>n(e.target.value),style:{background:`transparent`,border:`none`,color:`#0B2545`,outline:`none`,width:`100%`,fontWeight:700,cursor:`pointer`,fontSize:13.5},children:X.map(e=>(0,V.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})]}),(0,V.jsxs)(`div`,{className:`field-group`,children:[(0,V.jsx)(`label`,{className:`field-lbl`,children:`ACTIVITY TYPE`}),(0,V.jsxs)(`div`,{className:`input-box`,children:[(0,V.jsx)(S,{size:16,color:`#F06543`}),(0,V.jsx)(`select`,{value:r,onChange:e=>i(e.target.value),style:{background:`transparent`,border:`none`,color:`#0B2545`,outline:`none`,width:`100%`,fontWeight:700,cursor:`pointer`,fontSize:13.5},children:Z.map(e=>(0,V.jsxs)(`option`,{value:e.id,children:[e.name,` — ₹`,e.price]},e.id))})]})]}),(0,V.jsxs)(`div`,{className:`field-group`,children:[(0,V.jsx)(`label`,{className:`field-lbl`,children:`ACTIVITY DATE`}),(0,V.jsxs)(`div`,{className:`input-box`,children:[(0,V.jsx)(C,{size:16,color:`#F06543`}),(0,V.jsx)(`input`,{type:`date`,min:new Date().toISOString().split(`T`)[0],value:a,onChange:e=>o(e.target.value),style:{background:`transparent`,border:`none`,color:`#0B2545`,outline:`none`,width:`100%`,fontWeight:700,cursor:`pointer`,fontSize:13.5}})]})]}),(0,V.jsxs)(`div`,{className:`field-group`,children:[(0,V.jsx)(`label`,{className:`field-lbl`,children:`PREFERRED TIMING SLOT`}),(0,V.jsxs)(`div`,{className:`input-box`,children:[(0,V.jsx)(E,{size:16,color:`#F06543`}),(0,V.jsx)(`select`,{value:l,onChange:e=>u(e.target.value),style:{background:`transparent`,border:`none`,color:`#0B2545`,outline:`none`,width:`100%`,fontWeight:700,cursor:`pointer`,fontSize:13.5},children:ye.map(e=>(0,V.jsx)(`option`,{value:e.label,children:e.label},e.id))})]})]}),(0,V.jsxs)(`div`,{className:`field-group`,style:{gridColumn:`1 / -1`},children:[(0,V.jsx)(`label`,{className:`field-lbl`,children:`NUMBER OF TRAVELERS / GUESTS`}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:`#FAF4EE`,border:`1.5px solid #EBDED2`,borderRadius:14,padding:`10px 18px`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,V.jsx)(w,{size:18,color:`#F06543`}),(0,V.jsxs)(`span`,{style:{fontSize:13.5,fontWeight:800,color:`#0B2545`},children:[d,` `,d===1?`Guest`:`Guests`,` Participating`]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>p(Math.max(1,d-1)),style:{width:34,height:34,borderRadius:10,background:`#ffffff`,border:`1.5px solid #EBDED2`,fontWeight:900,fontSize:16,cursor:d<=1?`not-allowed`:`pointer`,color:`#0B2545`},children:`-`}),(0,V.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:900,color:`#F06543`,minWidth:24,textAlign:`center`},children:d}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>p(Math.min(20,d+1)),style:{width:34,height:34,borderRadius:10,background:`#ffffff`,border:`1.5px solid #EBDED2`,fontWeight:900,fontSize:16,cursor:`pointer`,color:`#0B2545`},children:`+`})]})]})]})]}),(0,V.jsx)(`button`,{type:`submit`,className:`check-btn`,disabled:m,children:m?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{style:{display:`inline-block`,width:16,height:16,border:`2px solid #ffffff`,borderTopColor:`transparent`,borderRadius:`50%`,animation:`spin 0.6s linear infinite`}}),(0,V.jsx)(`span`,{children:`CHECKING LIVE INSTRUCTOR MATRIX...`})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(c,{size:16}),(0,V.jsx)(`span`,{children:`CHECK REAL-TIME AVAILABILITY`})]})}),g&&(0,V.jsxs)(`div`,{className:`result-box-thick ${g.status===`available`?`result-avail-thick`:`result-limit-thick`}`,children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:14,flex:1,minWidth:280},children:[(0,V.jsx)(`div`,{style:{width:42,height:42,borderRadius:12,background:g.status===`available`?`#DCFCE7`:`#FEF3C7`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,marginTop:2},children:g.status===`available`?(0,V.jsx)(A,{size:22,color:`#16A34A`}):(0,V.jsx)(x,{size:22,color:`#D97706`})}),(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`,marginBottom:4},children:[(0,V.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,letterSpacing:`0.04em`,textTransform:`uppercase`},children:g.title}),(0,V.jsx)(`span`,{style:{background:g.status===`available`?`#BBF7D0`:`#FDE68A`,color:g.status===`available`?`#14532D`:`#78350F`,fontSize:10.5,fontWeight:900,padding:`2px 8px`,borderRadius:6},children:`✓ PADI CERTIFIED CREW ALLOCATED`})]}),(0,V.jsx)(`div`,{style:{fontSize:13,lineHeight:1.5,color:g.status===`available`?`#166534`:`#92400E`},children:g.message}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginTop:8,fontSize:12,fontWeight:700},children:[(0,V.jsxs)(`span`,{children:[`Price: ₹`,g.pricePerPerson.toLocaleString(),` / person`]}),(0,V.jsx)(`span`,{children:`•`}),(0,V.jsxs)(`span`,{children:[`Total for `,g.guestsCount,` Guests: `,(0,V.jsxs)(`strong`,{style:{color:`#0B2545`,fontSize:14},children:[`₹`,g.totalPrice.toLocaleString()]})]})]})]})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,flexWrap:`wrap`},children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>{if(e&&g)e({id:g.activity.id,slug:g.activity.id,name:g.activity.name,location:g.island.name,price:g.pricePerPerson,bookingDate:g.date,timeSlot:g.timeSlot,guests:g.guestsCount});else{let e=y.id;window.history.pushState({},``,`/activity-booking?id=${e}&date=${a}&island=${b.id}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})}},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:900,color:`#ffffff`,background:`#0B2545`,padding:`12px 24px`,borderRadius:14,border:`none`,cursor:`pointer`,letterSpacing:`0.04em`,display:`flex`,alignItems:`center`,gap:6,boxShadow:`0 4px 16px rgba(11, 37, 69, 0.25)`,transition:`all 0.2s ease`},children:[(0,V.jsx)(`span`,{children:`BOOK & LOCK THIS SLOT`}),(0,V.jsx)(s,{size:14})]}),(0,V.jsxs)(`a`,{href:`https://wa.me/919137835433?text=${encodeURIComponent(`Hello! I would like to lock the activity slot: ${g.activity.name} in ${g.island.name} on ${g.date} (${g.timeSlot}) for ${g.guestsCount} guests.`)}`,target:`_blank`,rel:`noopener noreferrer`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#15803D`,background:`#DCFCE7`,border:`1.5px solid #86EFAC`,padding:`10px 16px`,borderRadius:14,textDecoration:`none`,display:`flex`,alignItems:`center`,gap:6},children:[(0,V.jsx)(v,{size:13}),(0,V.jsx)(`span`,{children:`WHATSAPP CONCIERGE`})]})]})]})]})]})}I.registerPlugin(L);var xe=[{icon:E,title:`EARLY MORNING WATER CLARITY`,desc:`Morning 06:30 AM to 09:00 AM offers the highest underwater visibility, calmest swells, and most active marine life.`},{icon:O,title:`NO-FLY DIVING WINDOW`,desc:`Always keep an 18 to 24-hour gap between your last scuba dive and your return flight to prevent decompression issues.`},{icon:u,title:`COMFORTABLE SWIM ATTIRE`,desc:`Wear quick-dry beachwear or synthetic t-shirts. Towels and changing locker rooms are available at all partner dive hubs.`},{icon:n,title:`NON-SWIMMER REASSURANCE`,desc:`Over 85% of our scuba divers and sea walkers are complete non-swimmers. Dedicated 1:1 divemasters hold you the entire time.`}];function Se(){let e=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(!e.current)return;let t=e.current.querySelectorAll(`.tip-act-card`);I.fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:e.current,start:`top 85%`}})},[]),(0,V.jsxs)(`section`,{className:`tips-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .tips-act-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .tips-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .tips-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .tips-act-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .tips-act-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .tips-act-grid { grid-template-columns: 1fr; }
        }

        .tip-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px; padding: 28px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease; position: relative;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .tip-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .tip-act-num {
          position: absolute; top: 14px; right: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #F06543; opacity: 0.8;
        }

        .tip-act-icon-box {
          width: 50px; height: 50px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 16px;
        }

        .tip-act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 8px;
        }

        .tip-act-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}),(0,V.jsxs)(`div`,{className:`tips-act-eyebrow`,children:[(0,V.jsx)(E,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`ESSENTIAL TRAVEL ADVICE`})]}),(0,V.jsx)(`h2`,{className:`tips-act-title`,children:`BEFORE YOU DIVE & EXPLORE`}),(0,V.jsx)(`div`,{ref:e,className:`tips-act-grid`,children:xe.map((e,t)=>{let n=e.icon;return(0,V.jsxs)(`div`,{className:`tip-act-card`,children:[(0,V.jsxs)(`span`,{className:`tip-act-num`,children:[`0`,t+1]}),(0,V.jsx)(`div`,{className:`tip-act-icon-box`,children:(0,V.jsx)(n,{size:20})}),(0,V.jsx)(`h3`,{className:`tip-act-card-title`,children:e.title}),(0,V.jsx)(`p`,{className:`tip-act-card-desc`,children:e.desc})]},t)})})]})}I.registerPlugin(L);var Q=[{id:`non-swimmers-scuba`,question:`Can non-swimmers do PADI Discover Scuba Diving in Andaman?`,answer:`Yes, absolutely! Discover Scuba Diving (DSD) is specially designed for beginners and non-swimmers. A dedicated PADI certified dive master accompanies you 1-on-1 underwater the entire time.`},{id:`best-season-diving`,question:`What is the best season for diving and water sports in Andaman?`,answer:`The best season is from October through May when sea conditions are calm, underwater visibility reaches 20–30 meters, and tropical reef life is at its peak.`},{id:`bioluminescence-season`,question:`When can I see bioluminescence night kayaking in Havelock?`,answer:`Bioluminescence is best witnessed during new moon and low moon nights when the sea is darkest and disturbance causes the phytoplankton to glow electric blue.`},{id:`safety-medical-fitness`,question:`Are there any medical restrictions for scuba diving?`,answer:`Guests with severe asthma, cardiac conditions, or pregnancy cannot dive. A standard PADI medical disclaimer questionnaire is filled out before entering the water.`}];function Ce(){let[e,t]=(0,B.useState)(Q[0].id),n=(0,B.useRef)(null);(0,B.useEffect)(()=>{n.current&&I.fromTo(n.current,{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:`power2.out`,scrollTrigger:{trigger:n.current,start:`top 85%`}})},[]);let r=n=>{t(e===n?null:n)};return(0,V.jsxs)(`section`,{ref:n,className:`faq-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .faq-act-root {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .faq-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .faq-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .faq-act-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .faq-act-item {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px; overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 45, 98, 0.04);
        }
        .faq-act-item.open {
          border-color: #F06543;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.1);
        }

        .faq-act-header {
          padding: 22px 26px; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; user-select: none;
        }

        .faq-act-question {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 800; color: #0B2545;
          margin: 0; line-height: 1.4;
        }
        .faq-act-item.open .faq-act-question { color: #F06543; }

        .faq-act-icon {
          color: #F06543; transition: transform 0.3s ease; shrink: 0;
        }
        .faq-act-item.open .faq-act-icon {
          transform: rotate(180deg);
        }

        .faq-act-answer-wrap {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .faq-act-item.open .faq-act-answer-wrap {
          max-height: 400px;
        }

        .faq-act-answer {
          padding: 0 26px 22px;
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.7; margin: 0;
          border-top: 1.5px solid #f1f5f9;
          padding-top: 16px; font-weight: 500;
        }
      `}),(0,V.jsxs)(`div`,{className:`faq-act-eyebrow`,children:[(0,V.jsx)(b,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`FREQUENTLY ASKED QUESTIONS`})]}),(0,V.jsx)(`h2`,{className:`faq-act-title`,children:`ACTIVITY & DIVING FAQ`}),(0,V.jsx)(`div`,{className:`faq-act-list`,children:Q.map(t=>{let n=e===t.id;return(0,V.jsxs)(`div`,{className:`faq-act-item${n?` open`:``}`,children:[(0,V.jsxs)(`div`,{className:`faq-act-header`,onClick:()=>r(t.id),children:[(0,V.jsx)(`h3`,{className:`faq-act-question`,children:t.question}),(0,V.jsx)(a,{size:19,className:`faq-act-icon`})]}),(0,V.jsx)(`div`,{className:`faq-act-answer-wrap`,children:(0,V.jsx)(`p`,{className:`faq-act-answer`,children:t.answer})})]},t.id)})})]})}I.registerPlugin(L);var $=[{id:`rev-1`,name:`Ananya & Rohan Sharma`,activityType:`PADI Scuba Diving`,location:`Nemo Reef, Havelock Island`,rating:5,quote:`As complete non-swimmers, we were nervous at first. The dive master made us feel so safe and calm underwater. Seeing live clownfish and sea turtles was breathtaking!`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`},{id:`rev-2`,name:`Vikram Malhotra`,activityType:`Night Mangrove Kayaking`,location:`Havelock Island`,rating:5,quote:`Paddling in total pitch darkness while the water sparkled electric blue with every stroke was like stepping into Avatar. An unforgettable memory!`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80`},{id:`rev-3`,name:`Pooja & Sameer Deshmukh`,activityType:`Underwater Sea Walk`,location:`Elephant Beach, Havelock`,rating:5,quote:`Walking 7 meters under the ocean bed with a breathing helmet while hundreds of zebra fish swam right in front of our masks was magical.`,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80`}];function we(){let[e,t]=B.useState($),n=(0,B.useRef)(null);return(0,B.useEffect)(()=>{ie.getTestimonials(`ACTIVITY`).then(e=>{let n=e.data||[];if(Array.isArray(n)&&n.length>0){let e=n.map((e,t)=>({id:e.id||`rev-${t}`,name:e.name||e.author||`Verified Traveler`,activityType:e.activityType||e.category||`Island Adventure`,location:e.location||`Andaman Sea`,rating:e.rating||5,quote:e.content||e.comment||e.quote||`An unforgettable experience with crystal clear waters and amazing guides.`,avatar:e.avatar||$[t%$.length].avatar}));t(e)}}).catch(()=>{})},[]),(0,B.useEffect)(()=>{if(!n.current)return;let e=n.current.querySelectorAll(`.review-act-card`);I.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`,scrollTrigger:{trigger:n.current,start:`top 85%`}})},[e]),(0,V.jsxs)(`section`,{className:`reviews-act-root`,children:[(0,V.jsx)(`style`,{children:`
        .reviews-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .reviews-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .reviews-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 10px; line-height: 1.1;
        }

        .reviews-act-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; font-style: italic; text-align: center;
          margin-bottom: 44px;
        }

        .reviews-act-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 960px) {
          .reviews-act-grid { grid-template-columns: 1fr; }
        }

        .review-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 34px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; position: relative;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .review-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 18px 45px rgba(0, 45, 98, 0.12);
        }

        .quote-symbol {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 76px; line-height: 1; color: #F06543; opacity: 0.2;
          position: absolute; top: 14px; right: 24px; pointer-events: none;
        }

        .review-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic; font-size: 14px; color: #334155;
          line-height: 1.7; margin-bottom: 24px; position: relative; z-index: 2;
          font-weight: 500;
        }

        .review-stars {
          display: flex; gap: 3px; margin-bottom: 16px;
        }

        .review-author-row {
          display: flex; align-items: center; gap: 14px;
          padding-top: 18px; border-top: 1.5px solid #f1f5f9;
        }

        .review-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          object-fit: cover; border: 2px solid #F06543;
        }

        .review-author-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 900; color: #0B2545;
        }

        .review-act-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543; margin-top: 2px;
        }

        .review-location {
          display: flex; align-items: center; gap: 4px;
          font-family: 'Inter', sans-serif; font-size: 11.5px; color: #64748b; margin-top: 2px;
          font-weight: 500;
        }
      `}),(0,V.jsxs)(`div`,{className:`reviews-act-eyebrow`,children:[(0,V.jsx)(j,{size:14,color:`#F06543`}),(0,V.jsx)(`span`,{children:`TRAVELER STORIES`})]}),(0,V.jsx)(`h2`,{className:`reviews-act-title`,children:`THE OCEAN, THROUGH THEIR EYES`}),(0,V.jsx)(`p`,{className:`reviews-act-note`,children:`Real stories from travelers who conquered their fears and explored Andaman with us.`}),(0,V.jsx)(`div`,{ref:n,className:`reviews-act-grid`,children:e.map(e=>(0,V.jsxs)(`div`,{className:`review-act-card`,children:[(0,V.jsx)(`span`,{className:`quote-symbol`,children:`“`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`review-stars`,children:[...Array(e.rating||5)].map((e,t)=>(0,V.jsx)(d,{size:14,className:`fill-[#ffd700] text-[#ffd700]`},t))}),(0,V.jsxs)(`p`,{className:`review-quote`,children:[`"`,e.quote,`"`]})]}),(0,V.jsxs)(`div`,{className:`review-author-row`,children:[(0,V.jsx)(`img`,{src:e.avatar,alt:e.name,className:`review-avatar`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`review-author-name`,children:e.name}),(0,V.jsx)(`div`,{className:`review-act-type`,children:e.activityType}),(0,V.jsxs)(`div`,{className:`review-location`,children:[(0,V.jsx)(N,{size:11,color:`#F06543`}),(0,V.jsx)(`span`,{children:e.location})]})]})]})]},e.id))})]})}I.registerPlugin(L);function Te({onExploreActivities:e,onPlanTrip:t}){let n=(0,B.useRef)(null);return(0,B.useEffect)(()=>{n.current&&I.fromTo(n.current,{opacity:0,scale:.96},{opacity:1,scale:1,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:n.current,start:`top 85%`}})},[]),(0,V.jsxs)(`section`,{ref:n,className:`act-cta-root`,children:[(0,V.jsx)(`style`,{children:`
        .act-cta-root {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex; align-items: center; justify-content: center;
          background: #0f172a;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
        }

        .act-cta-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .act-cta-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.48) saturate(1.3);
        }

        .act-cta-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.88) 0%,
            rgba(2, 14, 22, 0.5) 50%,
            rgba(2, 14, 22, 0.96) 100%
          );
        }

        .act-cta-glow {
          position: absolute; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 780px; height: 380px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.2) 0%, rgba(13, 148, 136, 0.1) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .act-cta-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .act-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #2dd4bf;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(45, 212, 191, 0.35);
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
        }

        .act-cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .act-cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 640px; font-weight: 400;
        }

        .act-cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 32px;
        }

        .act-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
          text-decoration: none;
        }
        .act-cta-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .act-cta-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 15px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
          text-decoration: none;
        }
        .act-cta-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .act-cta-stats-row {
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #94a3b8;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
      `}),(0,V.jsx)(`div`,{className:`act-cta-bg`,children:(0,V.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Ocean Adventures Ready`})}),(0,V.jsx)(`div`,{className:`act-cta-overlay`}),(0,V.jsx)(`div`,{className:`act-cta-glow`}),(0,V.jsxs)(`div`,{className:`act-cta-content`,children:[(0,V.jsxs)(`div`,{className:`act-cta-eyebrow`,children:[(0,V.jsx)(y,{size:14,color:`#2dd4bf`}),(0,V.jsx)(`span`,{children:`START YOUR EXPEDITION`})]}),(0,V.jsxs)(`h2`,{className:`act-cta-title`,children:[`READY TO DIVE INTO `,(0,V.jsx)(`br`,{}),(0,V.jsx)(`span`,{style:{color:`#2dd4bf`},children:`THE ANDAMAN SEA?`})]}),(0,V.jsx)(`p`,{className:`act-cta-desc`,children:`Your next unforgettable underwater adventure awaits. Book certified scuba, night kayaking, or custom multi-activity passes today.`}),(0,V.jsxs)(`div`,{className:`act-cta-btns`,children:[(0,V.jsxs)(`button`,{onClick:e,className:`act-cta-btn-primary`,children:[(0,V.jsx)(`span`,{children:`EXPLORE ALL ACTIVITIES`}),(0,V.jsx)(s,{size:15})]}),(0,V.jsx)(`a`,{href:`/plan-trip`,className:`act-cta-btn-sec`,children:(0,V.jsx)(`span`,{children:`PLAN CUSTOM TRIP`})})]}),(0,V.jsxs)(`div`,{className:`act-cta-stats-row`,children:[(0,V.jsx)(`span`,{children:`1:1 PADI DIVE MASTERS`}),(0,V.jsx)(`span`,{children:`•`}),(0,V.jsx)(`span`,{children:`FREE 4K GOPRO HD VIDEO`}),(0,V.jsx)(`span`,{children:`•`}),(0,V.jsx)(`span`,{children:`100% BAD WEATHER REFUND`})]})]})]})}function Ee(){let[e,t]=(0,B.useState)([]),[n,r]=(0,B.useState)(!0),[i,a]=(0,B.useState)(``),[o,s]=(0,B.useState)(()=>{try{let e=localStorage.getItem(`andaman_activity_wishlist`);return e?JSON.parse(e):{}}catch{return{}}}),c=(e,t)=>{t&&t.stopPropagation(),s(t=>{let n={...t,[e]:!t[e]};try{localStorage.setItem(`andaman_activity_wishlist`,JSON.stringify(n))}catch{}return n})},[l,u]=(0,B.useState)(``),[d,f]=(0,B.useState)(`All`),[p,m]=(0,B.useState)(`All Locations`),[h,g]=(0,B.useState)(``),[_,v]=(0,B.useState)(1e4),[y,b]=(0,B.useState)(`popular`),[x,S]=(0,B.useState)(null),[C,w]=(0,B.useState)(!1),T=async()=>{r(!0),a(``);try{let e=await ne.getActivities({category:d,location:p,maxPrice:_,date:h,search:l,sort:y});t(e||[])}catch(e){console.error(`Failed to load activities:`,e),a(`Unable to load activities. Please check your network connection.`)}finally{r(!1)}};(0,B.useEffect)(()=>{T()},[d,p,_,h,y]),(0,B.useEffect)(()=>{let e=setTimeout(()=>{T()},350);return()=>clearTimeout(e)},[l]);let E=(0,B.useMemo)(()=>!e||e.length===0?null:e.find(e=>e.featured||Number(e.rating)>=4.8)||e[0],[e]),D=e=>{if(!e)return;let t=e.slug||e.id;window.history.pushState({},``,`/activity-booking?id=${t}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},O=e=>{window.history.pushState({},``,`/activities/${e}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},k=()=>{u(``),f(`All`),m(`All Locations`),g(``),v(1e4),b(`popular`)},A=()=>{let e=document.getElementById(`activity-grid-section`);e&&e.scrollIntoView({behavior:`smooth`})},j=()=>{let e=document.getElementById(`activity-availability-section`);e&&e.scrollIntoView({behavior:`smooth`})},M=({searchQuery:e,island:t,category:n,date:r,maxPrice:i})=>{e!==void 0&&u(e),t&&m(t),n&&f(n),r&&g(r),i&&v(i),A()},N=e=>{f(e),A()};return(0,V.jsxs)(`div`,{className:`activities-page-root`,children:[(0,V.jsx)(`style`,{children:`
        .activities-page-root {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }
      `}),(0,V.jsx)(H,{onExploreActivities:A,onPlanExperience:j}),(0,V.jsx)(U,{onSearch:M}),(0,V.jsx)(W,{activity:E,onViewDetails:e=>O(e.slug||`padi-discover-scuba-diving`),onBookNow:D}),(0,V.jsx)(J,{onSelectCategory:N}),(0,V.jsx)(oe,{onSelectIsland:e=>{m(e),A()}}),(0,V.jsx)(`div`,{id:`activity-grid-section`,children:(0,V.jsx)(le,{activities:e,loading:n,error:i,selectedCategory:d,onSelectCategory:f,selectedLocation:p,onSelectLocation:m,priceRange:_,onChangePriceRange:v,sortBy:y,onChangeSortBy:b,onResetFilters:k,savedWishlist:o,onToggleWishlist:c,onOpenBooking:D,onViewDetails:O,onRetry:T})}),(0,V.jsx)(de,{}),(0,V.jsx)(fe,{onDiscoverScuba:()=>N(`Scuba & Snorkeling`)}),(0,V.jsx)(pe,{onDiscoverNightKayak:()=>N(`Adventure`)}),(0,V.jsx)(me,{onDiscoverSeaKart:()=>N(`Water Sports`)}),(0,V.jsx)(ge,{}),(0,V.jsx)(ve,{onStartBooking:j}),(0,V.jsx)(`div`,{id:`activity-availability-section`,children:(0,V.jsx)(be,{onBookDirect:D})}),(0,V.jsx)(Se,{}),(0,V.jsx)(Ce,{}),(0,V.jsx)(we,{}),(0,V.jsx)(Te,{onExploreActivities:A,onPlanTrip:()=>{window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new Event(`popstate`))}}),(0,V.jsx)(ae,{activity:x,isOpen:C,onClose:()=>{w(!1),S(null)}}),(0,V.jsx)(re,{})]})}export{Ee as default};