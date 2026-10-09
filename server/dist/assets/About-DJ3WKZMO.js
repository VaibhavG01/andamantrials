import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,C as n,Gn as r,Ut as i,Vn as a,Zn as o,a as s,bt as c,et as l,g as u,j as d,jn as f,l as p,ln as m,t as h,tt as g,v as _,vn as v,wn as y,xt as b,zt as x}from"./lucide-vendor-CBhgx3NO.js";import{v as S}from"./three-vendor-Md08yeGZ.js";import{n as C}from"./gsap-vendor-Cgjl6ODA.js";import{h as w,s as T}from"./index-DfAxGq-6.js";import{i as E,t as D}from"./FooterBottom-DJ7vHFTo.js";var O=e(o(),1),k=S(),A={headline:`MORE THAN A JOURNEY.
IT'S AN EXPERIENCE.`,subtitle:`We help travelers discover the Andaman Islands through meaningful experiences, thoughtfully planned journeys and unforgettable moments.`,primaryCta:`DISCOVER OUR STORY →`,secondaryCta:`EXPLORE ANDAMAN →`};function j({onDiscoverStory:e,hero:t=A}){let n=(0,O.useRef)(null);return(0,O.useEffect)(()=>{n.current&&C.fromTo(n.current,{opacity:0,y:35,scale:.96},{opacity:1,y:0,scale:1,duration:1,ease:`power2.out`,delay:.2})},[]),(0,k.jsxs)(`section`,{className:`about-hero-root`,children:[(0,k.jsx)(`style`,{children:`
        .about-hero-root {
          position: relative;
          width: 100%;
          min-height: 68vh;
          max-height: 740px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 110px 24px 70px;
          box-sizing: border-box;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .about-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.55) saturate(1.2);
          transform: scale(1.05);
          transition: transform 12s ease;
        }
        .about-hero-root:hover .about-hero-bg img {
          transform: scale(1.09);
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .about-hero-glow {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 750px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(33, 230, 193, 0.16) 0%, rgba(22, 217, 255, 0.08) 45%, transparent 70%);
          z-index: 3;
          pointer-events: none;
        }

        .about-hero-content {
          position: relative;
          z-index: 4;
          max-width: 860px;
          text-align: center;
          margin: 0 auto;
        }

        .about-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 22px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .about-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.8vw, 72px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.05;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
          white-space: pre-line;
        }

        .about-hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #475569;
          line-height: 1.65;
          margin: 0 auto 34px;
          max-width: 680px;
        }

        .about-hero-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 14px 30px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .about-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .about-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0B2545;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(12px);
        }
        .about-btn-sec:hover {
          border-color: #F06543;
          color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          transform: translateY(-3px);
        }
      `}),(0,k.jsx)(`div`,{className:`about-hero-bg`,children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Coastal Sunset Visual`})}),(0,k.jsx)(`div`,{className:`about-hero-overlay`}),(0,k.jsx)(`div`,{className:`about-hero-glow`}),(0,k.jsxs)(`div`,{ref:n,className:`about-hero-content`,children:[(0,k.jsxs)(`div`,{className:`about-breadcrumb`,children:[(0,k.jsx)(`a`,{href:`/home`,style:{color:`#64748b`,textDecoration:`none`},children:`HOME`}),(0,k.jsx)(y,{size:12,color:`#F06543`}),(0,k.jsx)(`span`,{children:`ABOUT US`})]}),(0,k.jsx)(`h1`,{className:`about-hero-title`,children:t.headline}),(0,k.jsx)(`p`,{className:`about-hero-subtitle`,children:t.subtitle}),(0,k.jsxs)(`div`,{className:`about-hero-btns`,children:[(0,k.jsx)(`button`,{onClick:e,className:`about-btn-primary`,children:(0,k.jsx)(`span`,{children:t.primaryCta})}),(0,k.jsxs)(`a`,{href:`/destinations`,className:`about-btn-sec`,children:[(0,k.jsx)(m,{size:15}),(0,k.jsx)(`span`,{children:t.secondaryCta})]})]})]})]})}var M={headline:`WE DON'T JUST PLAN TRIPS.
WE CREATE MEMORIES.`,body:`Andaman Trails was created with a simple idea — exploring the Andaman Islands should feel as extraordinary as the destination itself.

From the first idea of a trip to the final moment of your journey, we bring destinations, experiences and travel planning together in one seamless experience.`};function N({intro:e=M}){return(0,k.jsxs)(`section`,{id:`brand-intro-section`,className:`brand-intro-root`,children:[(0,k.jsx)(`style`,{children:`
        .brand-intro-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .brand-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .brand-intro-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        .brand-intro-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .brand-intro-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.08;
          margin: 0;
          white-space: pre-line;
        }

        .brand-intro-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
          position: relative;
        }
        @media (max-width: 640px) {
          .brand-intro-card { padding: 24px; }
        }

        .brand-intro-body {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          white-space: pre-line;
          margin: 0;
        }
      `}),(0,k.jsxs)(`div`,{className:`brand-intro-grid`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`brand-intro-sub`,children:[(0,k.jsx)(d,{size:13,color:`#F06543`}),(0,k.jsx)(`span`,{children:`WHO WE ARE`})]}),(0,k.jsx)(`h2`,{className:`brand-intro-headline`,children:e.headline})]}),(0,k.jsxs)(`div`,{className:`brand-intro-card`,children:[(0,k.jsx)(g,{size:28,color:`#F06543`,style:{marginBottom:16,opacity:.8}}),(0,k.jsx)(`p`,{className:`brand-intro-body`,children:e.body})]})]})]})}var P=[{id:`idea`,phase:`THE IDEA`,title:`A Vision for Immersive Travel`,desc:`A vision to make discovering the Andaman archipelago simpler, more personal and more immersive for travelers around the world.`,icon:`Compass`},{id:`beginning`,phase:`THE BEGINNING`,title:`Connecting Travelers to Islands`,desc:`Andaman Trails begins connecting travelers with handpicked island experiences, private catamarans, and local marine specialists.`,icon:`Sparkles`},{id:`growth`,phase:`THE JOURNEY`,title:`Expanding Island Coverage`,desc:`The platform evolves around personalized day-wise planning, hidden reef discoveries, and luxury beachfront resort partnerships.`,icon:`Map`},{id:`experience`,phase:`THE EXPERIENCE`,title:`Tech & Travel Fusion`,desc:`Technology and local island expertise come together into one seamless real-time booking and interactive 3D route planning experience.`,icon:`Globe`},{id:`future`,phase:`THE FUTURE`,title:`Smarter Island Exploration`,desc:`Building a smarter, eco-responsible, and deeply personal way to explore every corner of the Andaman and Nicobar Islands.`,icon:`Target`}],F={Compass:m,Sparkles:d,Map:c,Globe:i,Target:n};function I({timeline:e=P}){let t=(0,O.useRef)(null);return(0,O.useEffect)(()=>{t.current&&C.fromTo(t.current.children,{opacity:0,y:25},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`})},[]),(0,k.jsxs)(`section`,{className:`timeline-section-root`,children:[(0,k.jsx)(`style`,{children:`
        .timeline-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .timeline-hdr {
          text-align: center;
          margin-bottom: 48px;
        }

        .timeline-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .timeline-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        /* Desktop Horizontal Timeline Track */
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .timeline-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 20px;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .timeline-phase-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #F06543;
          background: rgba(33, 230, 193, 0.12);
          border: 1px solid rgba(33, 230, 193, 0.3);
          padding: 4px 10px;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .timeline-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 8px;
        }

        .timeline-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
      `}),(0,k.jsxs)(`div`,{className:`timeline-hdr`,children:[(0,k.jsx)(`div`,{className:`timeline-sub`,children:`EVOLUTION & MILESTONES`}),(0,k.jsx)(`h2`,{className:`timeline-title`,children:`OUR JOURNEY`})]}),(0,k.jsx)(`div`,{ref:t,className:`timeline-grid`,children:e.map(e=>{let t=F[e.icon]||m;return(0,k.jsx)(`div`,{className:`timeline-card`,children:(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,k.jsx)(`span`,{className:`timeline-phase-tag`,children:e.phase}),(0,k.jsx)(t,{size:18,color:`#F06543`})]}),(0,k.jsx)(`div`,{className:`timeline-card-title`,children:e.title}),(0,k.jsx)(`p`,{className:`timeline-card-desc`,children:e.desc})]})},e.id)})})]})}var L={title:`OUR MISSION`,headline:`MAKE EVERY ANDAMAN JOURNEY FEEL PERSONAL.`,subtitle:`We believe travel should not be about following a template. It should be about discovering the places, experiences and moments that matter to you.`};function R({mission:e=L}){return(0,k.jsxs)(`section`,{className:`about-mission-root`,children:[(0,k.jsx)(`style`,{children:`
        .about-mission-root {
          position: relative;
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .about-mission-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 80px 48px;
          text-align: center;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(33, 230, 193, 0.08);
        }
        @media (max-width: 640px) {
          .about-mission-card { padding: 48px 24px; }
        }

        .about-mission-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .about-mission-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .about-mission-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.8) 0%, #f8fafc 100%);
        }

        .about-mission-content {
          position: relative; z-index: 3; max-width: 780px; margin: 0 auto;
        }

        .about-mission-sub {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase; margin-bottom: 14px;
        }

        .about-mission-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 60px);
          font-weight: 600; color: #0B2545;
          line-height: 1.06; margin: 0 0 18px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .about-mission-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: #475569;
          line-height: 1.7; margin: 0;
        }
      `}),(0,k.jsxs)(`div`,{className:`about-mission-card`,children:[(0,k.jsx)(`div`,{className:`about-mission-bg`,children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90`,alt:`Scuba Coral Reef Mission Visual`})}),(0,k.jsx)(`div`,{className:`about-mission-overlay`}),(0,k.jsxs)(`div`,{className:`about-mission-content`,children:[(0,k.jsxs)(`div`,{className:`about-mission-sub`,children:[(0,k.jsx)(n,{size:13,color:`#F06543`}),(0,k.jsx)(`span`,{children:e.title})]}),(0,k.jsx)(`h2`,{className:`about-mission-headline`,children:e.headline}),(0,k.jsx)(`p`,{className:`about-mission-desc`,children:e.subtitle})]})]})]})}var ee={title:`OUR VISION`,headline:`TO BUILD THE MOST IMMERSIVE WAY TO EXPERIENCE ANDAMAN.`,subtitle:`Bringing together travel expertise, technology, personalization, local experiences, and interactive discovery into one seamless platform.`,cards:[{id:`explore`,label:`EXPLORE`,desc:`Interactive 3D maps and deep island guides`,icon:`Compass`},{id:`plan`,label:`PLAN`,desc:`Custom day-by-day itineraries tailored to your pace`,icon:`Calendar`},{id:`discover`,label:`DISCOVER`,desc:`Uncover secret reefs, quiet beaches, and local food`,icon:`Sparkles`},{id:`experience`,label:`EXPERIENCE`,desc:`PADI dive sessions, private ferries, and beachfront stays`,icon:`Waves`},{id:`remember`,label:`REMEMBER`,desc:`Moments that stay with you long after returning home`,icon:`Heart`}]},z={Compass:m,Calendar:f,Sparkles:d,Waves:s,Heart:x};function B({vision:e=ee}){let t=(0,O.useRef)(null);return(0,O.useEffect)(()=>{t.current&&C.fromTo(t.current.children,{opacity:0,y:20},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`})},[]),(0,k.jsxs)(`section`,{className:`about-vision-root`,children:[(0,k.jsx)(`style`,{children:`
        .about-vision-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .vision-hdr {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }

        .vision-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .vision-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 12px;
        }

        .vision-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .vision-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .vision-grid { grid-template-columns: 1fr; }
        }

        .vision-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 18px;
          text-align: center;
          transition: all 0.35s ease;
        }

        .vision-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .vision-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(22, 217, 255, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .vision-card:hover .vision-icon-box {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
        }
      `}),(0,k.jsxs)(`div`,{className:`vision-hdr`,children:[(0,k.jsx)(`div`,{className:`vision-sub`,children:e.title}),(0,k.jsx)(`h2`,{className:`vision-title`,children:e.headline}),(0,k.jsx)(`p`,{className:`vision-desc`,children:e.subtitle})]}),(0,k.jsx)(`div`,{ref:t,className:`vision-grid`,children:e.cards.map(e=>{let t=z[e.icon]||m;return(0,k.jsxs)(`div`,{className:`vision-card`,children:[(0,k.jsx)(`div`,{className:`vision-icon-box`,children:(0,k.jsx)(t,{size:22})}),(0,k.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#334155`,letterSpacing:`0.08em`,marginBottom:6},children:e.label}),(0,k.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11.5,color:`#64748b`,lineHeight:1.5},children:e.desc})]},e.id)})})]})}var V=[{id:`local`,title:`LOCAL EXPERTS ON GROUND`,desc:`Stationed in Port Blair, Havelock & Neil with 24/7 dedicated on-island concierge assistance.`,icon:`MapPin`},{id:`curated`,title:`HANDPICKED EXPERIENCES`,desc:`Every scuba reef, beach villa, and private sunset boat is personally vetted by our curators.`,icon:`Sparkles`},{id:`booking`,title:`GUARANTEED FERRY SEATS`,desc:`Seamless high-speed catamaran booking (Nautika & Makruzz) with zero standby ticket stress.`,icon:`CheckCircle2`},{id:`custom`,title:`TAILORED TRIP PLANNING`,desc:`Every couple and family itinerary is customized to your preferred pace, style, and budget.`,icon:`Compass`},{id:`transparent`,title:`NO HIDDEN COSTS`,desc:`All-inclusive packages with government entry fees, water permits, and transfers built in.`,icon:`ShieldCheck`},{id:`support`,title:`REALTIME TRAVEL TECH`,desc:`Interactive 3D digital itinerary explorer, instant WhatsApp updates, and seamless support.`,icon:`Zap`}],H={MapPin:b,Sparkles:d,CheckCircle2:v,Compass:m,ShieldCheck:t,Zap:h};function U({whyUs:e=V}){let t=(0,O.useRef)(null);return(0,O.useEffect)(()=>{t.current&&C.fromTo(t.current.children,{opacity:0,y:20},{opacity:1,y:0,duration:.7,stagger:.1,ease:`power2.out`})},[]),(0,k.jsxs)(`section`,{className:`why-at-root`,children:[(0,k.jsx)(`style`,{children:`
        .why-at-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .why-at-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .why-at-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .why-at-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .why-at-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .why-at-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .why-at-grid { grid-template-columns: 1fr; }
        }

        .why-at-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .why-at-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .why-at-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(33, 230, 193, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
      `}),(0,k.jsxs)(`div`,{className:`why-at-hdr`,children:[(0,k.jsx)(`div`,{className:`why-at-sub`,children:`THE ANDAMAN TRAILS DIFFERENCE`}),(0,k.jsx)(`h2`,{className:`why-at-title`,children:`WHY TRAVEL WITH ANDAMAN TRAILS?`})]}),(0,k.jsx)(`div`,{ref:t,className:`why-at-grid`,children:e.map(e=>{let t=H[e.icon]||m;return(0,k.jsxs)(`div`,{className:`why-at-card`,children:[(0,k.jsx)(`div`,{className:`why-at-icon-box`,children:(0,k.jsx)(t,{size:24})}),(0,k.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#334155`,letterSpacing:`0.04em`,marginBottom:8},children:e.title}),(0,k.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6},children:e.desc})]},e.id)})})]})}var W=[{number:`01`,title:`AUTHENTICITY`,desc:`Real island recommendations rooted in deep local knowledge and firsthand experiences.`,icon:`Compass`},{number:`02`,title:`TRANSPARENCY`,desc:`Clear honest pricing with no hidden ferry markups or surprise tour restrictions.`,icon:`CheckCircle2`},{number:`03`,title:`SUSTAINABILITY`,desc:`Dedicated to reef protection, eco-certified stays, and zero plastic coastal tourism.`,icon:`ShieldCheck`},{number:`04`,title:`PASSION`,desc:`Crafting every itinerary with genuine care, attention to detail, and island love.`,icon:`Heart`},{number:`05`,title:`EXCELLENCE`,desc:`Uncompromising 5-star service standards from airport arrival to island departure.`,icon:`Sparkles`}],G={Sparkles:d,CheckCircle2:v,Compass:m,Heart:x,ShieldCheck:t};function K({values:e=W}){let t=(0,O.useRef)(null);return(0,O.useEffect)(()=>{t.current&&C.fromTo(t.current.children,{opacity:0,y:20},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`})},[]),(0,k.jsxs)(`section`,{className:`about-values-root`,children:[(0,k.jsx)(`style`,{children:`
        .about-values-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .values-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .values-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .values-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr; }
        }

        .values-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 18px;
          transition: all 0.35s ease;
          position: relative;
        }
        .values-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .values-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: rgba(22, 217, 255, 0.3);
          line-height: 1;
          margin-bottom: 8px;
        }

        .values-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 900;
          color: #0B2545;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .values-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }
      `}),(0,k.jsxs)(`div`,{className:`values-hdr`,children:[(0,k.jsx)(`div`,{className:`values-sub`,children:`OUR CORE GUIDING PRINCIPLES`}),(0,k.jsx)(`h2`,{className:`values-title`,children:`WHAT WE BELIEVE IN`})]}),(0,k.jsx)(`div`,{ref:t,className:`values-grid`,children:e.map(e=>{let t=G[e.icon]||d;return(0,k.jsxs)(`div`,{className:`values-card`,children:[(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:10},children:[(0,k.jsx)(`div`,{className:`values-number`,children:e.number}),(0,k.jsx)(t,{size:20,color:`#F06543`})]}),(0,k.jsx)(`div`,{className:`values-card-title`,children:e.title}),(0,k.jsx)(`p`,{className:`values-card-desc`,children:e.desc})]},e.number)})})]})}var q=[{id:`t1`,label:`ISLAND LIFE`,color:`#F06543`},{id:`t2`,label:`MARINE ADVENTURES`,color:`#F06543`},{id:`t3`,label:`LOCAL CULTURE`,color:`#f0c060`},{id:`t4`,label:`TROPICAL ESCAPES`,color:`#ff4f7b`},{id:`t5`,label:`HIDDEN GEMS`,color:`#F06543`}];function J(){return(0,k.jsxs)(`section`,{className:`local-exp-root`,children:[(0,k.jsx)(`style`,{children:`
        .local-exp-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .local-exp-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .local-exp-grid { grid-template-columns: 1fr; }
        }

        .local-exp-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .local-exp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 16px;
        }

        .local-exp-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 24px;
        }

        .local-tag-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .local-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 7px 16px;
          border-radius: 20px;
          background: #ffffff;
          backdrop-filter: blur(12px);
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        /* Collage Grid */
        .collage-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          position: relative;
        }
        .collage-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
          height: 180px;
        }
        .collage-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .collage-img-wrap:hover img {
          transform: scale(1.08);
        }
      `}),(0,k.jsxs)(`div`,{className:`local-exp-grid`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`local-exp-sub`,children:[(0,k.jsx)(m,{size:13,color:`#F06543`}),(0,k.jsx)(`span`,{children:`AUTHENTIC ISLAND CONNECTIONS`})]}),(0,k.jsx)(`h2`,{className:`local-exp-title`,children:`ROOTED IN ANDAMAN`}),(0,k.jsx)(`p`,{className:`local-exp-desc`,children:`The best way to experience a destination is to truly understand it. We connect you directly with local island culture, native dive masters, coastal seafood traditions, and untouched tropical wilderness.`}),(0,k.jsx)(`div`,{className:`local-tag-pills-row`,children:q.map(e=>(0,k.jsx)(`span`,{className:`local-tag-pill`,style:{color:e.color,borderColor:`${e.color}44`},children:e.label},e.id))})]}),(0,k.jsxs)(`div`,{className:`collage-grid`,children:[(0,k.jsx)(`div`,{className:`collage-img-wrap`,style:{height:210},children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80`,alt:`Scuba Diving`})}),(0,k.jsx)(`div`,{className:`collage-img-wrap`,style:{height:170,marginTop:40},children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80`,alt:`Honeymoon Beach`})}),(0,k.jsx)(`div`,{className:`collage-img-wrap`,style:{height:170},children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80`,alt:`Island Boats`})}),(0,k.jsx)(`div`,{className:`collage-img-wrap`,style:{height:210,marginTop:-40},children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80`,alt:`Hidden Gem`})})]})]})]})}function Y(){return(0,k.jsxs)(`section`,{className:`philosophy-root`,children:[(0,k.jsx)(`style`,{children:`
        .philosophy-root {
          position: relative;
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .philosophy-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 80px 48px;
          text-align: center;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 217, 255, 0.08);
        }
        @media (max-width: 640px) {
          .philosophy-card { padding: 48px 24px; }
        }

        .philosophy-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .philosophy-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .philosophy-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.82) 0%, #f8fafc 100%);
        }

        .philosophy-content {
          position: relative; z-index: 3; max-width: 820px; margin: 0 auto;
        }

        .philosophy-sub {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase; margin-bottom: 16px;
        }

        .philosophy-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 62px);
          font-weight: 600; color: #0B2545;
          line-height: 1.06; margin: 0 0 20px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0,0,0,0.85);
        }

        .philosophy-quote {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(20px, 2.5vw, 28px);
          font-style: italic; color: #F06543;
          line-height: 1.4; margin: 0 auto; max-width: 720px;
        }
      `}),(0,k.jsxs)(`div`,{className:`philosophy-card`,children:[(0,k.jsx)(`div`,{className:`philosophy-bg`,children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=90`,alt:`Cinematic Ocean Sunset Visual`})}),(0,k.jsx)(`div`,{className:`philosophy-overlay`}),(0,k.jsxs)(`div`,{className:`philosophy-content`,children:[(0,k.jsxs)(`div`,{className:`philosophy-sub`,children:[(0,k.jsx)(d,{size:13,color:`#F06543`}),(0,k.jsx)(`span`,{children:`OUR TRAVEL PHILOSOPHY`})]}),(0,k.jsxs)(`h2`,{className:`philosophy-title`,children:[`TRAVEL SHOULD NEVER `,(0,k.jsx)(`br`,{}),(0,k.jsx)(`span`,{style:{color:`#F06543`},children:`FEEL LIKE A CHECKLIST.`})]}),(0,k.jsx)(g,{size:32,color:`#F06543`,style:{opacity:.8,marginBottom:12}}),(0,k.jsx)(`p`,{className:`philosophy-quote`,children:`"It should feel like a collection of meaningful moments you will remember long after you return home."`})]})]})]})}var X=[{id:`vikram`,name:`Vikram Seth`,role:`Founder & Senior Island Guide`,desc:`Island born and raised in Port Blair with over 15 years navigating inter-island catamaran routes and rainforest trekking paths.`,photo:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80`},{id:`anita`,name:`Anita Roy`,role:`Head of Romance & Luxury Experiences`,desc:`Curator of bespoke honeymoon escapes, private candlelight dinners on Radhanagar Beach, and five-star resort bookings.`,photo:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80`},{id:`mike`,name:`Mike Ross`,role:`Lead PADI Master Instructor & Marine Biologist`,desc:`With 4,500+ logged dives, Mike oversees our scuba diving training safety protocols and coral reef conservation initiatives.`,photo:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80`}];function Z({team:e=X}){let t=(0,O.useRef)(null);return(0,O.useEffect)(()=>{t.current&&C.fromTo(t.current.children,{opacity:0,y:25},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`})},[]),(0,k.jsxs)(`section`,{className:`team-section-root`,children:[(0,k.jsx)(`style`,{children:`
        .team-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .team-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .team-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .team-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr; }
        }

        .team-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          overflow: hidden;
          padding: 28px 24px;
          text-align: center;
          transition: all 0.35s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45), 0 0 24px rgba(33, 230, 193, 0.15);
        }

        .team-photo {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #F06543;
          margin: 0 auto 16px;
          box-shadow: 0 0 20px rgba(33, 230, 193, 0.3);
          transition: transform 0.4s ease;
        }
        .team-card:hover .team-photo {
          transform: scale(1.06);
        }
      `}),(0,k.jsxs)(`div`,{className:`team-hdr`,children:[(0,k.jsx)(`div`,{className:`team-sub`,children:`OUR LEADERSHIP & CONCIERGES`}),(0,k.jsx)(`h2`,{className:`team-title`,children:`THE PEOPLE BEHIND THE JOURNEY`})]}),(0,k.jsx)(`div`,{ref:t,className:`team-grid`,children:e.map(e=>(0,k.jsxs)(`div`,{className:`team-card`,children:[(0,k.jsx)(`img`,{src:e.photo,alt:e.name,className:`team-photo`}),(0,k.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:900,color:`#334155`,marginBottom:3},children:e.name}),(0,k.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11.5,fontWeight:700,color:`#F06543`,marginBottom:10},children:e.role}),(0,k.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6,margin:`0 0 16px`},children:e.desc})]},e.id))})]})}var Q={Users:p,MapPin:b,Sparkles:d,Award:a,Compass:m,TrendingUp:u},$=[{id:`stat-travelers`,label:`HAPPY TRAVELERS`,value:`50,000+`,icon:`Users`,sub:`Hosted across 40+ countries`},{id:`stat-destinations`,label:`ISLAND DESTINATIONS`,value:`6+`,icon:`MapPin`,sub:`Port Blair to Diglipur`},{id:`stat-experiences`,label:`CURATED TRAILS`,value:`7+`,icon:`Sparkles`,sub:`Scuba, ferries & resorts`},{id:`stat-years`,label:`YEARS OF EXCELLENCE`,value:`12+`,icon:`Award`,sub:`Native island leadership`}];function te(){let[e,t]=(0,O.useState)($);return(0,O.useEffect)(()=>{Promise.allSettled([E.getSettings().catch(()=>null),w.getDestinations().catch(()=>null),T.getPackages().catch(()=>null)]).then(([e,n,r])=>{let i=e.status===`fulfilled`&&e.value?.data?e.value.data.data||e.value.data:null,a=n.status===`fulfilled`&&Array.isArray(n.value?.data)&&n.value.data.length>0?n.value.data.length:6,o=r.status===`fulfilled`&&Array.isArray(r.value?.data)&&r.value.data.length>0?r.value.data.length:7;t([{id:`stat-travelers`,label:i?.statTravelersLabel||`HAPPY TRAVELERS`,value:i?.statTravelersValue||`50,000+`,icon:`Users`,sub:i?.statTravelersSub||`Hosted across 40+ countries`},{id:`stat-destinations`,label:i?.statDestinationsLabel||`ISLAND DESTINATIONS`,value:i?.statDestinationsValue||`${a}+`,icon:`MapPin`,sub:i?.statDestinationsSub||`Port Blair to Diglipur`},{id:`stat-experiences`,label:i?.statTrailsLabel||`CURATED TRAILS`,value:i?.statTrailsValue||`${o}+`,icon:`Sparkles`,sub:i?.statTrailsSub||`Scuba, ferries & resorts`},{id:`stat-years`,label:i?.statYearsLabel||`YEARS OF EXCELLENCE`,value:i?.statYearsValue||`12+`,icon:`Award`,sub:i?.statYearsSub||`Native island leadership`}])}).catch(()=>{})},[]),(0,k.jsxs)(`section`,{className:`about-stats-root`,"aria-label":`Platform Impact Statistics`,children:[(0,k.jsx)(`style`,{children:`
        .about-stats-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .about-stats-grid { grid-template-columns: 1fr; }
        }

        .about-stat-card {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 22px;
          padding: 32px 26px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .about-stat-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 20px 40px rgba(11, 37, 69, 0.1), 0 0 20px rgba(240, 101, 67, 0.1);
        }

        .about-stat-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: #FFF0EB;
          color: #F06543;
          border: 1px solid #FFD3C4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.15);
        }

        .about-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(34px, 3.5vw, 42px);
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .about-stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .about-stat-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748B;
          line-height: 1.5;
          font-weight: 500;
        }
      `}),(0,k.jsx)(`div`,{className:`about-stats-grid`,children:e.map(e=>{let t=Q[e.icon]||a;return(0,k.jsxs)(`div`,{className:`about-stat-card`,children:[(0,k.jsx)(`div`,{className:`about-stat-icon-wrap`,children:(0,k.jsx)(t,{size:24})}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{className:`about-stat-value`,children:e.value}),(0,k.jsx)(`div`,{className:`about-stat-label`,children:e.label}),(0,k.jsx)(`div`,{className:`about-stat-sub`,children:e.sub})]})]},e.id)})})]})}var ne=[{id:`reef`,title:`CORAL REEF PROTECTION`,desc:`Promoting reef-safe sunscreens, anchor-free mooring zones, and eco-certified dive operations.`,icon:`Waves`},{id:`community`,title:`SUPPORTING LOCAL COMMUNITIES`,desc:`Partnering with local boat captains, island guides, and family-owned seafood kitchens.`,icon:`Users`},{id:`waste`,title:`ZERO PLASTIC INITIATIVE`,desc:`Supplying reusable stainless steel bottles and organizing beach cleanups across remote sandbars.`,icon:`Recycle`},{id:`forest`,title:`RAINFOREST CONSERVATION`,desc:`Respecting indigenous tribal reserves and protected mangrove biospheres across all journeys.`,icon:`Trees`}],re={Trees:_,Users:p,Recycle:l,Waves:s};function ie({sustainable:e=ne}){return(0,k.jsxs)(`section`,{className:`sustainable-root`,children:[(0,k.jsx)(`style`,{children:`
        .sustainable-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .sustainable-hdr {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 44px;
        }

        .sustainable-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .sustainable-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 12px;
        }

        .sustainable-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .sustainable-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .sustainable-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .sustainable-grid { grid-template-columns: 1fr; }
        }

        .sustainable-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .sustainable-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .sustainable-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(33, 230, 193, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
      `}),(0,k.jsxs)(`div`,{className:`sustainable-hdr`,children:[(0,k.jsx)(`div`,{className:`sustainable-sub`,children:`RESPONSIBLE TOURISM`}),(0,k.jsx)(`h2`,{className:`sustainable-title`,children:`TRAVEL WITH PURPOSE`}),(0,k.jsx)(`p`,{className:`sustainable-desc`,children:`The Andaman Islands are more than a destination. They are a fragile ecosystem that deserves to be explored responsibly and preserved for future generations.`})]}),(0,k.jsx)(`div`,{className:`sustainable-grid`,children:e.map(e=>{let n=re[e.icon]||t;return(0,k.jsxs)(`div`,{className:`sustainable-card`,children:[(0,k.jsx)(`div`,{className:`sustainable-icon`,children:(0,k.jsx)(n,{size:24})}),(0,k.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#334155`,letterSpacing:`0.04em`,marginBottom:8},children:e.title}),(0,k.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6},children:e.desc})]},e.id)})})]})}function ae({onStartJourney:e}){return(0,k.jsxs)(`section`,{className:`about-final-cta-root`,children:[(0,k.jsx)(`style`,{children:`
        .about-final-cta-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .about-final-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 70px 48px;
          text-align: center;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(33, 230, 193, 0.1);
        }
        @media (max-width: 640px) {
          .about-final-card { padding: 48px 24px; }
        }

        .about-final-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .about-final-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .about-final-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.75) 0%, #f8fafc 100%);
        }

        .about-final-content {
          position: relative; z-index: 3; max-width: 760px; margin: 0 auto;
        }

        .about-final-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 60px);
          font-weight: 600; color: #0B2545;
          line-height: 1.06; margin: 0 0 16px;
        }

        .about-final-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: #475569;
          line-height: 1.65; margin: 0 auto 32px;
        }

        .about-final-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .about-final-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .about-final-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .about-final-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; text-decoration: none; backdrop-filter: blur(12px);
        }
        .about-final-btn-sec:hover {
          border-color: #F06543; color: #F06543; background: rgba(33, 230, 193, 0.1);
          transform: translateY(-3px);
        }
      `}),(0,k.jsxs)(`div`,{className:`about-final-card`,children:[(0,k.jsx)(`div`,{className:`about-final-bg`,children:(0,k.jsx)(`img`,{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90`,alt:`Tropical Andaman Sunset`})}),(0,k.jsx)(`div`,{className:`about-final-overlay`}),(0,k.jsxs)(`div`,{className:`about-final-content`,children:[(0,k.jsxs)(`h2`,{className:`about-final-title`,children:[`ANDAMAN ISN'T JUST A PLACE YOU VISIT. `,(0,k.jsx)(`br`,{}),(0,k.jsx)(`span`,{style:{color:`#F06543`},children:`IT'S A PLACE YOU EXPERIENCE.`})]}),(0,k.jsx)(`p`,{className:`about-final-desc`,children:`Andaman Trails is here to help you discover it your way. Let's create your perfect island story together.`}),(0,k.jsxs)(`div`,{className:`about-final-btns`,children:[(0,k.jsxs)(`a`,{href:`/plan-trip`,className:`about-final-btn-primary`,children:[(0,k.jsx)(`span`,{children:`START YOUR JOURNEY`}),(0,k.jsx)(r,{size:15})]}),(0,k.jsxs)(`a`,{href:`/destinations`,className:`about-final-btn-sec`,children:[(0,k.jsx)(m,{size:15}),(0,k.jsx)(`span`,{children:`EXPLORE DESTINATIONS`})]})]})]})]})]})}function oe(){return(0,O.useEffect)(()=>{document.title=`About Andaman Trails | Discover Our Story`;let e=document.querySelector(`meta[name="description"]`);e&&e.setAttribute(`content`,`Learn about Andaman Trails, our travel philosophy, personalized experiences and vision for creating unforgettable journeys across the Andaman Islands.`)},[]),(0,k.jsxs)(`div`,{className:`about-master-page`,children:[(0,k.jsx)(`style`,{children:`
        .about-master-page {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
      `}),(0,k.jsx)(j,{onDiscoverStory:()=>{let e=document.getElementById(`brand-intro-section`);e&&e.scrollIntoView({behavior:`smooth`})}}),(0,k.jsx)(N,{}),(0,k.jsx)(I,{}),(0,k.jsx)(R,{}),(0,k.jsx)(B,{}),(0,k.jsx)(U,{}),(0,k.jsx)(K,{}),(0,k.jsx)(J,{}),(0,k.jsx)(Y,{}),(0,k.jsx)(Z,{}),(0,k.jsx)(te,{}),(0,k.jsx)(ie,{}),(0,k.jsx)(ae,{}),(0,k.jsx)(D,{})]})}export{oe as default};