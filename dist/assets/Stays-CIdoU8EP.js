import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Dn as n,E as r,En as i,Ft as a,Gn as o,K as s,Lt as c,Mn as l,O as u,T as d,Wn as f,Wt as p,X as m,Xn as h,Zn as g,a as _,an as v,bn as ee,bt as te,c as y,gn as b,i as x,j as S,jn as C,kn as w,kt as T,l as E,ln as D,mn as O,on as k,r as A,v as j,wn as ne,wt as re,xt as M,zt as N}from"./lucide-vendor-CBhgx3NO.js";import{c as P,s as F,v as I}from"./three-vendor-Md08yeGZ.js";import{t as L}from"./apiClient-RFZz5CW9.js";import{n as R,t as z}from"./gsap-vendor-Cgjl6ODA.js";import{a as B,f as V,h as H}from"./index-SH5YgE5J.js";import{t as U}from"./FooterBottom-uRtAk0HF.js";var W=e(g(),1),G=I();function K({onFindStay:e,onExploreDestinations:t}){let n=(0,W.useRef)(null);return(0,W.useEffect)(()=>{n.current&&R.fromTo(n.current,{opacity:0,y:30,scale:.97},{opacity:1,y:0,scale:1,duration:.9,ease:`power2.out`,delay:.2})},[]),(0,G.jsxs)(`section`,{className:`stay-hero-root`,children:[(0,G.jsx)(`style`,{children:`
        .stay-hero-root {
          position: relative; width: 100%; min-height: 72vh; max-height: 760px;
          display: flex; align-items: center; justify-content: center;
          background: #f8fafc; overflow: hidden;
          padding: 140px 24px 90px; box-sizing: border-box;
        }

        .stay-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .stay-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.55) saturate(1.25);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .stay-hero-root:hover .stay-hero-bg img { transform: scale(1.08); }

        .stay-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.97) 100%
          );
        }

        .stay-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 420px;
          background: radial-gradient(ellipse at center, rgba(240, 101, 67, 0.18) 0%, rgba(11, 37, 69, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .stay-hero-content {
          position: relative; z-index: 4; max-width: 860px;
          text-align: center; margin: 0 auto;
        }

        .stay-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.15em;
          color: #F06543; background: #ffffff;
          border: 1px solid #ebded2;
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.08);
        }

        .stay-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(40px, 6.2vw, 76px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px; letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.6);
        }

        .stay-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #ebded2; line-height: 1.65;
          margin: 0 auto 34px; max-width: 680px;
        }

        .stay-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(240, 101, 67, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 32px rgba(240, 101, 67, 0.45);
        }

        .btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #ffffff;
          border: 1.5px solid #ebded2;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 14px rgba(11, 37, 69, 0.06);
        }
        .btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: #FFF0EB; transform: translateY(-3px);
        }
      `}),(0,G.jsx)(`div`,{className:`stay-hero-bg`,children:(0,G.jsx)(`img`,{src:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Beachfront Luxury Resort`})}),(0,G.jsx)(`div`,{className:`stay-hero-overlay`}),(0,G.jsx)(`div`,{className:`stay-hero-glow`}),(0,G.jsxs)(`div`,{ref:n,className:`stay-hero-content`,children:[(0,G.jsxs)(`div`,{className:`stay-breadcrumb`,children:[(0,G.jsx)(`a`,{href:`/home`,style:{color:`#64748b`,textDecoration:`none`},children:`HOME`}),(0,G.jsx)(ne,{size:12,color:`#F06543`}),(0,G.jsx)(`span`,{children:`STAYS`})]}),(0,G.jsxs)(`h1`,{className:`stay-hero-title`,children:[`STAY WHERE `,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`#F06543`},children:`ANDAMAN BEGINS`})]}),(0,G.jsx)(`p`,{className:`stay-hero-desc`,children:`Discover handpicked stays, beachfront resorts, eco villas and unforgettable places to stay across the Andaman Islands.`}),(0,G.jsxs)(`div`,{className:`stay-hero-btns`,children:[(0,G.jsxs)(`button`,{onClick:e,className:`btn-primary`,children:[(0,G.jsx)(`span`,{children:`FIND YOUR STAY`}),(0,G.jsx)(o,{size:15})]}),(0,G.jsxs)(`button`,{onClick:t,className:`btn-sec`,children:[(0,G.jsx)(D,{size:15}),(0,G.jsx)(`span`,{children:`EXPLORE DESTINATIONS`})]})]})]})]})}function q({onSearch:e}){let[t,n]=(0,W.useState)(`All`),[r,i]=(0,W.useState)(``),[a,o]=(0,W.useState)(``),[c,l]=(0,W.useState)(2),[u,d]=(0,W.useState)(1);return(0,G.jsxs)(`div`,{className:`stay-search-wrapper`,children:[(0,G.jsx)(`style`,{children:`
        .stay-search-wrapper {
          position: relative; z-index: 10;
          max-width: 1100px; margin: -60px auto 70px; padding: 0 24px;
        }

        .stay-search-card {
          background: #f8fafc;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px; padding: 32px 36px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(22, 217, 255, 0.08);
        }
        @media (max-width: 768px) {
          .stay-search-card { padding: 24px; }
        }

        .search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px; margin-bottom: 20px;
        }

        .search-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;
        }
        @media (max-width: 960px) {
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
          font-size: 12.5px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .field-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0f172a;
          outline: none; transition: border-color 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box;
        }
        .field-box:focus-within {
          border-color: #F06543; box-shadow: 0 0 16px rgba(33, 230, 193, 0.2);
        }

        .field-select {
          background: transparent; color: #0f172a; border: none; color: #0f172a;
          font-family: 'Inter', sans-serif; font-size: 13px;
          width: 100%; outline: none; cursor: pointer;
        }
        .field-select option { background: #ffffff; color: #ffffff; }

        .search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .search-submit-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}),(0,G.jsxs)(`form`,{className:`stay-search-card`,onSubmit:n=>{n.preventDefault(),e&&e({destination:t,checkIn:r,checkOut:a,adults:c,rooms:u})},children:[(0,G.jsxs)(`div`,{className:`search-title`,children:[(0,G.jsx)(s,{size:15,color:`#F06543`}),(0,G.jsx)(`span`,{children:`FIND YOUR PERFECT STAY`})]}),(0,G.jsxs)(`div`,{className:`search-grid`,children:[(0,G.jsxs)(`div`,{className:`search-field`,children:[(0,G.jsx)(`label`,{className:`field-label`,children:`DESTINATION`}),(0,G.jsxs)(`div`,{className:`field-box`,children:[(0,G.jsx)(M,{size:15,color:`#F06543`}),(0,G.jsxs)(`select`,{value:t,onChange:e=>n(e.target.value),className:`field-select`,children:[(0,G.jsx)(`option`,{value:`All`,children:`All Destinations`}),(0,G.jsx)(`option`,{value:`Port Blair`,children:`Port Blair`}),(0,G.jsx)(`option`,{value:`Havelock Island`,children:`Havelock Island`}),(0,G.jsx)(`option`,{value:`Neil Island`,children:`Neil Island`}),(0,G.jsx)(`option`,{value:`Baratang`,children:`Baratang`}),(0,G.jsx)(`option`,{value:`Rangat`,children:`Rangat`}),(0,G.jsx)(`option`,{value:`Diglipur`,children:`Diglipur`})]})]})]}),(0,G.jsxs)(`div`,{className:`search-field`,children:[(0,G.jsx)(`label`,{className:`field-label`,children:`CHECK-IN`}),(0,G.jsxs)(`div`,{className:`field-box`,children:[(0,G.jsx)(C,{size:15,color:`#F06543`}),(0,G.jsx)(`input`,{type:`date`,value:r,onChange:e=>i(e.target.value),style:{background:`transparent`,border:`none`,color:`#0f172a`,outline:`none`,width:`100%`,fontSize:12.5}})]})]}),(0,G.jsxs)(`div`,{className:`search-field`,children:[(0,G.jsx)(`label`,{className:`field-label`,children:`CHECK-OUT`}),(0,G.jsxs)(`div`,{className:`field-box`,children:[(0,G.jsx)(C,{size:15,color:`#F06543`}),(0,G.jsx)(`input`,{type:`date`,value:a,onChange:e=>o(e.target.value),style:{background:`transparent`,border:`none`,color:`#0f172a`,outline:`none`,width:`100%`,fontSize:12.5}})]})]}),(0,G.jsxs)(`div`,{className:`search-field`,children:[(0,G.jsx)(`label`,{className:`field-label`,children:`GUESTS & ROOMS`}),(0,G.jsxs)(`div`,{className:`field-box`,children:[(0,G.jsx)(E,{size:15,color:`#F06543`}),(0,G.jsxs)(`select`,{value:`${c}-${u}`,onChange:e=>{let[t,n]=e.target.value.split(`-`);l(Number(t)),d(Number(n))},className:`field-select`,children:[(0,G.jsx)(`option`,{value:`1-1`,children:`1 Guest, 1 Room`}),(0,G.jsx)(`option`,{value:`2-1`,children:`2 Guests, 1 Room`}),(0,G.jsx)(`option`,{value:`4-2`,children:`4 Guests, 2 Rooms`}),(0,G.jsx)(`option`,{value:`6-3`,children:`6+ Family Stay`})]})]})]})]}),(0,G.jsxs)(`button`,{type:`submit`,className:`search-submit-btn`,children:[(0,G.jsx)(`span`,{children:`SEARCH STAYS`}),(0,G.jsx)(s,{size:14})]})]})]})}R.registerPlugin(z);var J=[{id:`havelock`,name:`Havelock Island (Swaraj Dweep)`,subtitle:`Radhanagar Beach No. 7 & Scuba Haven`,tag:`👑 5★ Beachfront Villas`,startingPrice:4500,staysCount:`24+ Luxury Resorts`,topResorts:[`Taj Exotica`,`Barefoot`,`Symphony Palms`,`SeaShell`],highlights:[`Direct Beach Access`,`Private Plunge Pools`,`PADI Dive Desks`],image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,description:`Home to Asia’s top-rated Radhanagar Beach, turquoise lagoons, and world-class PADI dive centers with oceanfront private villas.`},{id:`port-blair`,name:`Port Blair (Sri Vijaya Puram)`,subtitle:`Capital Gateway & Historical Heritage`,tag:`🏛️ Heritage & Bay View Stays`,startingPrice:3200,staysCount:`38+ Premium Hotels`,topResorts:[`Symphony Samudra`,`Welcomhotel ITC`,`Fortune Bay Island`],highlights:[`Harbor Ocean View`,`Airport Transfers`,`Infinity Pools`],image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,description:`The historic capital gateway hosting Cellular Memorial, scenic harbor promenades, and luxury hilltop bayview resorts.`},{id:`neil`,name:`Neil Island (Shaheed Dweep)`,subtitle:`Turquoise Bays & Natural Rock Bridge`,tag:`🌿 Boutique Lagoon Retreats`,startingPrice:3800,staysCount:`16+ Boutique Stays`,topResorts:[`SeaShell Samssara`,`Summer Sands`,`Silver Sand Neil`],highlights:[`Lagoon Pool Access`,`Laxmanpur Sunset Path`,`Organic Dining`],image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80`,description:`A tranquil tropical haven of organic farmlands, biological Howrah Rock Bridge arches, and calm turquoise coral beaches.`},{id:`baratang`,name:`Baratang Island`,subtitle:`Dense Mangrove Creeks & Limestone Caves`,tag:`🛶 Rainforest Wilderness Eco-Lodges`,startingPrice:3500,staysCount:`6+ Eco Lodges`,topResorts:[`Dew Dale Wilderness Resort`,`Coral Creek Eco Lodge`],highlights:[`Forest Canopy`,`Speedboat Jetty Access`,`Guided Cave Treks`],image:`https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80`,description:`Thrill-filled tropical wilderness with mangrove creek speedboat expeditions, active mud volcanoes, and limestone caves.`},{id:`diglipur`,name:`Diglipur & North Andaman`,subtitle:`Ross & Smith Sandbar & Saddle Peak`,tag:`⛰️ Twin Island Sandbar Retreats`,startingPrice:2900,staysCount:`8+ Eco Stays`,topResorts:[`Pristine Beach Resort`,`Turtle Resort Kalipur`,`Saddle Peak Lodge`],highlights:[`Turtle Nesting Beach`,`Twin Island Boats`,`Saddle Peak View`],image:`https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80`,description:`Climb Saddle Peak, witness nocturnal turtle nesting at Kalipur Beach, or cross the emerald Ross & Smith sandbar.`},{id:`great-nicobar`,name:`Great Nicobar & Indira Point`,subtitle:`UNESCO Biosphere & India’s Southernmost Tip`,tag:`🌏 Biosphere Eco Frontier Villas`,startingPrice:6500,staysCount:`4+ Frontier Lodges`,topResorts:[`Campbell Bay Eco Frontier Lodge`,`Biosphere Eco Cabins`],highlights:[`Indira Point Safari`,`Galathea River Boats`,`Full Board Dining`],image:`https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80`,description:`India’s southernmost geographical frontier, home to Galathea Biosphere Reserve, pristine virgin rainforests, and Indira Point.`}];function Y({onSelectDestination:e}){let[t,n]=(0,W.useState)(J),[r,i]=(0,W.useState)(`ALL`),a=(0,W.useRef)(null);(0,W.useEffect)(()=>{H.getDestinations().then(e=>{if(e&&e.data&&Array.isArray(e.data)&&e.data.length>0){let t=J.map(t=>{let n=e.data.find(e=>e.slug===t.id||e.name?.toLowerCase().includes(t.id));return n?{...t,name:n.name||t.name,image:n.heroImage||n.image||t.image,description:n.shortDescription||n.description||t.description}:t});n(t)}}).catch(()=>{})},[]),(0,W.useEffect)(()=>{if(!a.current)return;let e=a.current.querySelectorAll(`.stay-dest-card`);e.length>0&&R.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:a.current,start:`top 85%`}})},[t,r]);let s=r===`ALL`?t:t.filter(e=>e.id===r||e.name.toLowerCase().includes(r.toLowerCase())),c=t=>{if(e)e(t.name);else{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})}};return(0,G.jsxs)(`section`,{className:`dest-root`,id:`stay-destinations-section`,children:[(0,G.jsx)(`style`,{children:`
        .dest-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 50px 24px 80px;
          font-family: 'Inter', sans-serif;
        }

        .dest-eyebrow {
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

        .dest-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          color: #0B2545;
          text-align: center;
          margin: 0 0 10px;
          line-height: 1.15;
        }

        .dest-subtitle {
          font-size: clamp(14px, 1.8vw, 16px);
          color: #64748b;
          text-align: center;
          max-width: 680px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .dest-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .dest-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 20px;
          border: 1.5px solid #EBDED2;
          background: #ffffff;
          color: #0B2545;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .dest-tab-btn.active {
          background: #0B2545;
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }
        .dest-tab-btn:hover:not(.active) {
          border-color: #F06543;
          color: #F06543;
        }

        .dest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1040px) {
          .dest-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .dest-grid { grid-template-columns: 1fr; }
        }

        .stay-dest-card {
          position: relative;
          height: 380px;
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid #EBDED2;
          background: #0B2545;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .stay-dest-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 50px rgba(240, 101, 67, 0.25), 0 0 20px rgba(240, 101, 67, 0.15);
        }

        .stay-dest-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stay-dest-card:hover .stay-dest-bg {
          transform: scale(1.08);
        }

        .stay-dest-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 37, 69, 0.2) 0%, rgba(11, 37, 69, 0.6) 45%, rgba(6, 24, 46, 0.96) 100%);
          transition: opacity 0.3s ease;
        }

        .stay-dest-top {
          position: relative;
          z-index: 3;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .stay-vibe-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          color: #ffffff;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          letter-spacing: 0.03em;
        }

        .stay-price-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.4);
        }

        .stay-dest-bottom {
          position: relative;
          z-index: 3;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stay-dest-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .stay-resorts-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 800;
          color: #38bdf8;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }

        .stay-dest-desc {
          font-size: 12.5px;
          color: #e2e8f0;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .stay-highlights-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 2px;
        }

        .stay-highlight-pill {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #f8fafc;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .stay-dest-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          margin-top: 4px;
        }

        .stay-count-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #FF8A5B;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .stay-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #ffffff;
          background: #F06543;
          border: none;
          padding: 7px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.4);
          transition: all 0.2s ease;
        }
        .stay-dest-card:hover .stay-action-btn {
          background: #ffffff;
          color: #0B2545;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.4);
        }
      `}),(0,G.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,G.jsxs)(`div`,{className:`dest-eyebrow`,children:[(0,G.jsx)(D,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`HANDPICKED LUXURY STAYS`})]}),(0,G.jsx)(`h2`,{className:`dest-title`,children:`CHOOSE YOUR ISLAND DESTINATION`}),(0,G.jsx)(`p`,{className:`dest-subtitle`,children:`From Radhanagar 5-star private pool villas in Havelock to peaceful lagoon retreats in Neil and colonial bayview suites in Port Blair.`})]}),(0,G.jsx)(`div`,{className:`dest-filter-tabs`,children:[{id:`ALL`,label:`All Island Stays`},{id:`havelock`,label:`Havelock (Swaraj Dweep)`},{id:`port-blair`,label:`Port Blair`},{id:`neil`,label:`Neil Island (Shaheed Dweep)`},{id:`baratang`,label:`Baratang Island`},{id:`diglipur`,label:`Diglipur`},{id:`great-nicobar`,label:`Great Nicobar`}].map(e=>(0,G.jsx)(`button`,{onClick:()=>i(e.id),className:`dest-tab-btn ${r===e.id?`active`:``}`,children:e.label},e.id))}),(0,G.jsx)(`div`,{ref:a,className:`dest-grid`,children:s.map(e=>(0,G.jsxs)(`div`,{className:`stay-dest-card`,onClick:()=>c(e),children:[(0,G.jsx)(`img`,{src:e.image,alt:e.name,className:`stay-dest-bg`}),(0,G.jsx)(`div`,{className:`stay-dest-overlay`}),(0,G.jsxs)(`div`,{className:`stay-dest-top`,children:[(0,G.jsx)(`span`,{className:`stay-vibe-tag`,children:e.tag}),(0,G.jsxs)(`span`,{className:`stay-price-tag`,children:[`From ₹`,e.startingPrice.toLocaleString(),`/nt`]})]}),(0,G.jsxs)(`div`,{className:`stay-dest-bottom`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h3`,{className:`stay-dest-name`,children:e.name}),(0,G.jsxs)(`div`,{className:`stay-resorts-chip`,children:[(0,G.jsx)(u,{size:12,className:`fill-[#38bdf8] text-[#38bdf8]`}),(0,G.jsx)(`span`,{children:e.topResorts.slice(0,3).join(` • `)})]})]}),(0,G.jsx)(`p`,{className:`stay-dest-desc`,children:e.description}),(0,G.jsx)(`div`,{className:`stay-highlights-row`,children:e.highlights.map((e,t)=>(0,G.jsxs)(`span`,{className:`stay-highlight-pill`,children:[`✓ `,e]},t))}),(0,G.jsxs)(`div`,{className:`stay-dest-footer-bar`,children:[(0,G.jsx)(`span`,{className:`stay-count-lbl`,children:e.staysCount}),(0,G.jsxs)(`button`,{type:`button`,className:`stay-action-btn`,children:[(0,G.jsx)(`span`,{children:`EXPLORE STAYS`}),(0,G.jsx)(o,{size:13})]})]})]})]},e.id))})]})}R.registerPlugin(z);function X({stay:e,onViewStay:t}){let[r,i]=(0,W.useState)(e||null),a=(0,W.useRef)(null);(0,W.useEffect)(()=>{V.getStays().then(e=>{let t=e.data||[];if(Array.isArray(t)&&t.length>0){let e=t.find(e=>e.isFeatured||e.featured)||t[0];e&&i({id:e.id,name:e.name,slug:e.slug,type:e.type||e.category||`Luxury Resort`,destination:typeof e.destination==`object`&&e.destination!==null?e.destination.name||`Havelock Island`:e.destination||e.location||`Havelock Island`,location:e.location||`Radhanagar Beach, Havelock`,heroImage:e.heroImage||`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85`,rating:parseFloat(e.rating||4.9),reviewCount:e.reviewCount||128,pricePerNight:parseFloat(e.pricePerNight||32e3),shortDescription:e.shortDescription||`Occupying lush rainforest along Radhanagar Beach, offering eco-luxury villas.`,amenities:[`Beach Access`,`Swimming Pool`,`Spa`,`Restaurant`,`Wi-Fi`]})}}).catch(()=>{})},[]);let s=r||{name:`Taj Exotica Resort & Spa`,slug:`taj-exotica-resort-spa`,type:`Eco Luxury Resort`,destination:`Havelock Island`,location:`Radhanagar Beach, Havelock`,heroImage:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85`,rating:4.9,reviewCount:128,pricePerNight:32e3,shortDescription:`Occupying lush rainforest along Radhanagar Beach, offering eco-luxury villas with private plunge pools.`,amenities:[`Beach Access`,`Swimming Pool`,`Spa`,`Restaurant`,`Wi-Fi`]};return(0,W.useEffect)(()=>{a.current&&R.fromTo(a.current,{opacity:0,y:40},{opacity:1,y:0,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:a.current,start:`top 85%`}})},[s]),(0,G.jsxs)(`section`,{className:`feat-stay-root`,children:[(0,G.jsx)(`style`,{children:`
        .feat-stay-root {
          max-width: 1340px; margin: 0 auto; padding: 40px 24px 80px;
        }

        .feat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .feat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 40px; line-height: 1.1;
        }

        .feat-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1.25fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 900px) {
          .feat-card { grid-template-columns: 1fr; }
        }

        .feat-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .feat-img-box img {
          width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease;
        }
        .feat-card:hover .feat-img-box img { transform: scale(1.05); }

        .feat-badge {
          position: absolute; top: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 6px 16px; border-radius: 20px; text-transform: uppercase;
        }

        .feat-body {
          padding: 40px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .feat-body { padding: 24px; }
        }

        .feat-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;
        }

        .feat-stay-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 600; color: #0B2545; line-height: 1.15; margin: 0 0 14px;
        }

        .feat-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .amenities-list {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;
        }
        .amenity-chip {
          font-family: 'Inter', sans-serif; font-size: 12px; color: #475569;
          background: #ffffff; border: 1px solid #e2e8f0;
          padding: 5px 12px; border-radius: 12px; display: flex; align-items: center; gap: 6px;
        }

        .feat-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .feat-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}),(0,G.jsxs)(`div`,{className:`feat-eyebrow`,children:[(0,G.jsx)(S,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`HANDPICKED FOR YOU`})]}),(0,G.jsx)(`h2`,{className:`feat-title`,children:`STAYS WE LOVE`}),(0,G.jsxs)(`div`,{ref:a,className:`feat-card`,children:[(0,G.jsxs)(`div`,{className:`feat-img-box`,children:[(0,G.jsx)(`img`,{src:s.heroImage,alt:s.name}),(0,G.jsx)(`span`,{className:`feat-badge`,children:`FEATURED RESORT`})]}),(0,G.jsxs)(`div`,{className:`feat-body`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`div`,{className:`feat-type`,children:s.type}),(0,G.jsx)(`h3`,{className:`feat-stay-title`,children:s.name}),(0,G.jsx)(`p`,{className:`feat-desc`,children:s.shortDescription}),(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:20,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,color:`#64748b`},children:[(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:4,color:`#F06543`},children:[(0,G.jsx)(M,{size:13,color:`#F06543`}),` `,typeof s.destination==`string`?s.destination:s.destination?.name||s.location||`Havelock Island`]}),(0,G.jsx)(`span`,{children:`•`}),(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:4,color:`#ffd700`},children:[(0,G.jsx)(u,{size:13,fill:`#ffd700`,color:`#ffd700`}),` `,s.rating,` (`,s.reviewCount,` reviews)`]})]}),(0,G.jsx)(`div`,{className:`amenities-list`,children:s.amenities.map((e,t)=>(0,G.jsxs)(`span`,{className:`amenity-chip`,children:[(0,G.jsx)(n,{size:12,color:`#F06543`}),` `,e]},t))})]}),(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyBetween:`space-between`},children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,color:`#64748b`},children:`STARTING FROM`}),(0,G.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:20,fontWeight:900,color:`#F06543`},children:[`₹`,s.pricePerNight.toLocaleString(),` `,(0,G.jsx)(`span`,{style:{fontSize:11,fontWeight:600,color:`#64748b`},children:`/ night`})]})]}),(0,G.jsxs)(`button`,{onClick:()=>t&&t(s),className:`feat-btn`,children:[(0,G.jsx)(`span`,{children:`VIEW STAY`}),(0,G.jsx)(o,{size:14})]})]})]})]})]})}R.registerPlugin(z);var ie={Sun:r,Sparkles:S,Compass:D,Home:c,ShieldCheck:t,Heart:N};function ae({onSelectCategory:e}){let[t,n]=(0,W.useState)([]),[r,i]=(0,W.useState)(!0),a=(0,W.useRef)(null);return(0,W.useEffect)(()=>{L(`/master/categories?type=STAY`).then(e=>{e&&e.data&&Array.isArray(e.data)&&e.data.length>0?n(e.data):n([{id:`cat-1`,title:`Luxury Beachfront Resorts`,description:`Private beach access, world-class spas, and sunset views.`,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,icon:`Sparkles`},{id:`cat-2`,title:`Eco Villas & Cottages`,description:`Sustainable timber villas immersed in rainforest canopy.`,image:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80`,icon:`Home`},{id:`cat-3`,title:`Boutique Island Hotels`,description:`Handcrafted stays offering authentic Andaman hospitality.`,image:`https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80`,icon:`Sun`}])}).catch(()=>{n([{id:`cat-1`,title:`Luxury Beachfront Resorts`,description:`Private beach access, world-class spas, and sunset views.`,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,icon:`Sparkles`},{id:`cat-2`,title:`Eco Villas & Cottages`,description:`Sustainable timber villas immersed in rainforest canopy.`,image:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80`,icon:`Home`},{id:`cat-3`,title:`Boutique Island Hotels`,description:`Handcrafted stays offering authentic Andaman hospitality.`,image:`https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80`,icon:`Sun`}])}).finally(()=>i(!1))},[]),(0,W.useEffect)(()=>{if(!a.current||r)return;let e=a.current.querySelectorAll(`.cat-card`);e.length>0&&R.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.7,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:a.current,start:`top 85%`}})},[t,r]),(0,G.jsxs)(`section`,{className:`stay-cat-root`,children:[(0,G.jsx)(`style`,{children:`
        .stay-cat-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px 80px;
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
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .cat-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr; }
        }

        .cat-card {
          background: #ffffff; backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0; border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column; cursor: pointer; transition: all 0.35s ease;
        }
        .cat-card:hover {
          transform: translateY(-8px); border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 18px 45px rgba(0,0,0,0.5), 0 0 25px rgba(33,230,193,0.12);
        }

        .cat-img-box {
          position: relative; height: 180px; overflow: hidden;
        }
        .cat-img-box img {
          width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;
        }
        .cat-card:hover .cat-img-box img { transform: scale(1.1); }

        .cat-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.9), rgba(33, 230, 193, 0.9));
          display: flex; align-items: center; justify-content: center; color: #ffffff;
        }

        .cat-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 800; color: #0B2545; margin: 0 0 8px;
        }

        .cat-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin-bottom: 20px;
        }

        .cat-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid #e2e8f0;
          font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 800; color: #F06543;
        }
      `}),(0,G.jsxs)(`div`,{className:`cat-eyebrow`,children:[(0,G.jsx)(D,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`STAY CATEGORIES`})]}),(0,G.jsx)(`h2`,{className:`cat-title`,children:`CHOOSE YOUR STAY`}),(0,G.jsx)(`div`,{ref:a,className:`cat-grid`,children:t.map(t=>{let n=ie[t.icon]||D;return(0,G.jsxs)(`div`,{className:`cat-card`,onClick:()=>e&&e(t.title||t.name),children:[(0,G.jsxs)(`div`,{className:`cat-img-box`,children:[(0,G.jsx)(`img`,{src:t.image||`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,alt:t.title||t.name}),(0,G.jsx)(`div`,{className:`cat-icon-badge`,children:(0,G.jsx)(n,{size:18})})]}),(0,G.jsxs)(`div`,{className:`cat-body`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h3`,{className:`cat-card-title`,children:t.title||t.name}),(0,G.jsx)(`p`,{className:`cat-card-desc`,children:t.description})]}),(0,G.jsxs)(`div`,{className:`cat-card-footer`,children:[(0,G.jsx)(`span`,{children:`EXPLORE STAYS`}),(0,G.jsx)(o,{size:13})]})]})]},t.id||t.title)})})]})}var oe=e=>{switch(String(e||``).toUpperCase()){case`LUXURY_VILLA`:case`LUXURY VILLA`:case`LUXURY STAYS`:return{label:`Luxury Villa`,bg:`#FAF5FF`,color:`#7C3AED`,border:`#E9D5FF`,icon:`👑`};case`BEACH_RESORT`:case`BEACH RESORT`:case`BEACHFRONT RESORTS`:return{label:`Beach Resort`,bg:`#F0F9FF`,color:`#0284C7`,border:`#BAE6FD`,icon:`🏖️`};case`BOUTIQUE_RESORT`:case`BOUTIQUE RESORT`:case`BOUTIQUE HOTELS`:return{label:`Boutique Resort`,bg:`#ECFDF5`,color:`#059669`,border:`#A7F3D0`,icon:`✨`};case`ECO_LODGE`:case`ECO LODGE`:case`ECO WILDERNESS LODGE`:return{label:`Eco Lodge`,bg:`#F0FDF4`,color:`#16A34A`,border:`#BBF7D0`,icon:`🌿`};case`HERITAGE_HOTEL`:case`HERITAGE HOTEL`:return{label:`Heritage Hotel`,bg:`#FFFBEB`,color:`#D97706`,border:`#FDE68A`,icon:`🏛️`};default:return{label:(e||`Island Stay`).replace(/_/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),bg:`#F8FAFC`,color:`#475569`,border:`#E2E8F0`,icon:`🏨`}}};function se({stay:e,onViewStay:t}){let{requireAuth:n}=B(),[r,i]=(0,W.useState)(!1);if(!e)return null;let a=oe(e.type||e.category),s=()=>typeof e.destination==`string`?e.destination:e.destination?.name||e.location||`Havelock Island`,c=Array.isArray(e.amenities)&&e.amenities.length>0?e.amenities.slice(0,3):[`Beach Access`,`Ocean View`,`Free Wi-Fi`];return(0,G.jsxs)(`div`,{className:`stay-card-root`,onClick:()=>t&&t(e),children:[(0,G.jsx)(`style`,{children:`
        .stay-card-root {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.05);
          position: relative;
        }

        .stay-card-root:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 20px 40px rgba(11, 37, 69, 0.12), 0 0 20px rgba(240, 101, 67, 0.12);
        }

        .stay-card-img-box {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #0f172a;
        }
        .stay-card-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stay-card-root:hover .stay-card-img-box img {
          transform: scale(1.08);
        }

        .stay-card-gradient-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(11, 37, 69, 0.25) 0%, rgba(11, 37, 69, 0) 40%, rgba(11, 37, 69, 0.65) 100%);
          pointer-events: none;
        }

        .stay-type-badge {
          position: absolute; top: 14px; left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em;
          padding: 6px 14px; border-radius: 30px;
          display: inline-flex; align-items: center; gap: 5px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }

        .wishlist-btn {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          display: flex; align-items: center; justify-content: center;
          color: #64748b; cursor: pointer; transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 2;
        }
        .wishlist-btn:hover {
          color: #ef4444; background: #ffffff; transform: scale(1.1);
        }

        .rating-chip {
          position: absolute; bottom: 12px; right: 14px;
          background: rgba(11, 37, 69, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 4px 10px; border-radius: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800;
          display: flex; align-items: center; gap: 4px;
          z-index: 2;
        }

        .stay-card-body {
          padding: 22px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
          background: #ffffff;
        }

        .stay-card-route {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543;
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;
          display: flex; align-items: center; gap: 5px;
        }

        .stay-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18.5px; font-weight: 900; color: #0B2545;
          margin-bottom: 8px; line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 1;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        .stay-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #475569; line-height: 1.55;
          margin-bottom: 14px; display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        .amenities-row {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;
        }
        .amenity-chip {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 700; color: #334155;
          background: #F1F5F9; border: 1px solid #E2E8F0;
          padding: 3px 10px; border-radius: 8px;
        }

        .stay-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #F1F5F9;
          margin-top: auto; gap: 12px;
        }

        .price-label {
          font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: #64748b;
          text-transform: uppercase; letter-spacing: 0.05em; display: block;
        }
        .price-value {
          font-family: 'Space Grotesk', sans-serif; font-size: 19px; font-weight: 900; color: #0B2545;
        }
        .price-period {
          font-size: 12px; font-weight: 600; color: #64748b;
        }

        .stay-card-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #ffffff;
          background: #0B2545;
          border: none;
          padding: 10px 18px; border-radius: 12px; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          letter-spacing: 0.04em;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.15);
          white-space: nowrap;
        }

        .stay-card-root:hover .stay-card-btn {
          background: #F06543; color: #ffffff;
          box-shadow: 0 6px 18px rgba(240, 101, 67, 0.35);
          transform: translateY(-1px);
        }
      `}),(0,G.jsxs)(`div`,{className:`stay-card-img-box`,children:[(0,G.jsx)(`img`,{src:e.heroImage||e.image,alt:e.name,loading:`lazy`}),(0,G.jsx)(`div`,{className:`stay-card-gradient-overlay`}),(0,G.jsxs)(`span`,{className:`stay-type-badge`,style:{background:a.bg,color:a.color,border:`1px solid ${a.border}`},children:[(0,G.jsx)(`span`,{children:a.icon}),(0,G.jsx)(`span`,{children:a.label})]}),(0,G.jsx)(`button`,{className:`wishlist-btn`,"aria-label":`Wishlist resort`,onClick:e=>{e.stopPropagation(),i(!r)},children:(0,G.jsx)(N,{size:16,fill:r?`#ef4444`:`none`,color:r?`#ef4444`:`#64748b`})}),(0,G.jsxs)(`div`,{className:`rating-chip`,children:[(0,G.jsx)(u,{size:12,className:`fill-[#F59E0B] text-[#F59E0B]`}),(0,G.jsx)(`span`,{children:e.rating||`4.8`}),(0,G.jsxs)(`span`,{style:{opacity:.6,fontSize:10},children:[`(`,e.reviewCount||e.reviewsCount||85,`)`]})]})]}),(0,G.jsxs)(`div`,{className:`stay-card-body`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{className:`stay-card-route`,children:[(0,G.jsx)(M,{size:13,color:`#F06543`}),(0,G.jsx)(`span`,{children:s()})]}),(0,G.jsx)(`h3`,{className:`stay-card-title`,title:e.name,children:e.name}),(0,G.jsx)(`p`,{className:`stay-card-desc`,children:e.shortDescription||e.tagline||e.description||`Experience serene tropical luxury, world-class island hospitality, and breathtaking coastal vistas.`}),(0,G.jsx)(`div`,{className:`amenities-row`,children:c.map((e,t)=>(0,G.jsx)(`span`,{className:`amenity-chip`,children:e},t))})]}),(0,G.jsxs)(`div`,{className:`stay-card-footer`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`span`,{className:`price-label`,children:`Per Night`}),(0,G.jsxs)(`div`,{className:`price-value`,children:[`₹`,(e.pricePerNight||8500).toLocaleString(),(0,G.jsx)(`span`,{className:`price-period`,children:` /night`})]})]}),(0,G.jsxs)(`button`,{className:`stay-card-btn`,onClick:n=>{n.stopPropagation(),t&&t(e)},children:[(0,G.jsx)(`span`,{children:`EXPLORE RESORT`}),(0,G.jsx)(o,{size:14})]})]})]})]})}var ce=[{id:`beachfront`,label:`Beachfront`},{id:`pool`,label:`Swimming Pool`},{id:`spa`,label:`Spa & Wellness`},{id:`restaurant`,label:`In-house Restaurant`},{id:`wifi`,label:`Free High-Speed Wi-Fi`},{id:`ac`,label:`Full Air Conditioning`},{id:`scuba`,label:`PADI Scuba Desk`},{id:`bar`,label:`Cocktail Bar`}];function le({destination:e,setDestination:t,category:n,setCategory:r,maxPrice:i,setMaxPrice:o,selectedAmenities:s,setSelectedAmenities:c,onReset:u}){let d=e=>{s.includes(e)?c(s.filter(t=>t!==e)):c([...s,e])},f=(e===`All`?0:1)+(n===`All`?0:1)+ +(i<4e4)+s.length;return(0,G.jsxs)(`aside`,{className:`filters-sidebar`,children:[(0,G.jsx)(`style`,{children:`
        .filters-sidebar {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px 20px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
          position: sticky;
          top: 90px;
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1.5px solid #F1F5F9;
          margin-bottom: 22px;
        }

        .filter-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #0B2545;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .active-pill {
          background: #FFF0EB;
          color: #F06543;
          font-size: 11px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 20px;
        }

        .reset-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #64748B;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 5px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s ease;
        }
        .reset-btn:hover {
          color: #F06543;
          border-color: #F06543;
          background: #FFF5F2;
        }

        .filter-group {
          margin-bottom: 22px;
        }

        .group-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #334155;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-select {
          width: 100%;
          padding: 11px 14px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          color: #0F172A;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-select:hover, .filter-select:focus {
          border-color: #F06543;
          background: #ffffff;
        }
        .filter-select option {
          background: #ffffff;
          color: #0F172A;
          padding: 8px;
        }

        .price-slider-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 14px;
          border-radius: 14px;
        }

        .amenity-checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          user-select: none;
          padding: 4px 6px;
          border-radius: 8px;
          transition: background 0.15s ease;
        }
        .checkbox-item:hover {
          background: #F8FAFC;
          color: #0F172A;
        }

        .checkbox-item input {
          accent-color: #F06543;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
      `}),(0,G.jsxs)(`div`,{className:`filter-header`,children:[(0,G.jsxs)(`div`,{className:`filter-title`,children:[(0,G.jsx)(p,{size:16,color:`#F06543`}),(0,G.jsx)(`span`,{children:`FILTER STAYS`}),f>0&&(0,G.jsx)(`span`,{className:`active-pill`,children:f})]}),f>0&&(0,G.jsxs)(`button`,{className:`reset-btn`,onClick:u,children:[(0,G.jsx)(m,{size:12}),(0,G.jsx)(`span`,{children:`RESET`})]})]}),(0,G.jsxs)(`div`,{className:`filter-group`,children:[(0,G.jsxs)(`label`,{className:`group-lbl`,children:[(0,G.jsx)(M,{size:13,color:`#F06543`}),(0,G.jsx)(`span`,{children:`ISLAND LOCATION`})]}),(0,G.jsxs)(`select`,{value:e,onChange:e=>t(e.target.value),className:`filter-select`,"aria-label":`Filter by destination`,children:[(0,G.jsx)(`option`,{value:`All`,children:`All Islands (Every Location)`}),(0,G.jsx)(`option`,{value:`Havelock`,children:`Havelock Island (Swaraj Dweep)`}),(0,G.jsx)(`option`,{value:`Neil`,children:`Neil Island (Shaheed Dweep)`}),(0,G.jsx)(`option`,{value:`Port Blair`,children:`Port Blair`}),(0,G.jsx)(`option`,{value:`Baratang`,children:`Baratang Island`}),(0,G.jsx)(`option`,{value:`Diglipur`,children:`Diglipur (North Andaman)`}),(0,G.jsx)(`option`,{value:`Great Nicobar`,children:`Great Nicobar`})]})]}),(0,G.jsxs)(`div`,{className:`filter-group`,children:[(0,G.jsxs)(`label`,{className:`group-lbl`,children:[(0,G.jsx)(l,{size:13,color:`#F06543`}),(0,G.jsx)(`span`,{children:`STAY CATEGORY`})]}),(0,G.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),className:`filter-select`,"aria-label":`Filter by stay category`,children:[(0,G.jsx)(`option`,{value:`All`,children:`All Stay Categories`}),(0,G.jsx)(`option`,{value:`LUXURY_VILLA`,children:`👑 Luxury Villas & Suites`}),(0,G.jsx)(`option`,{value:`BEACH_RESORT`,children:`🏖️ Beachfront Resorts`}),(0,G.jsx)(`option`,{value:`BOUTIQUE_RESORT`,children:`✨ Boutique Resorts`}),(0,G.jsx)(`option`,{value:`ECO_LODGE`,children:`🌿 Eco Wilderness Lodges`}),(0,G.jsx)(`option`,{value:`HERITAGE_HOTEL`,children:`🏛️ Heritage Hotels`})]})]}),(0,G.jsx)(`div`,{className:`filter-group`,children:(0,G.jsxs)(`div`,{className:`price-slider-box`,children:[(0,G.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:10},children:[(0,G.jsxs)(`span`,{className:`group-lbl`,style:{marginBottom:0},children:[(0,G.jsx)(a,{size:12,color:`#F06543`}),(0,G.jsx)(`span`,{children:`MAX PRICE`})]}),(0,G.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#0B2545`},children:[`₹`,i.toLocaleString()]})]}),(0,G.jsx)(`input`,{type:`range`,min:3e3,max:4e4,step:1e3,value:i,onChange:e=>o(Number(e.target.value)),style:{width:`100%`,accentColor:`#F06543`,cursor:`pointer`}}),(0,G.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:11,color:`#94A3B8`,marginTop:4,fontFamily:`'Space Grotesk', sans-serif`,fontWeight:700},children:[(0,G.jsx)(`span`,{children:`₹3,000`}),(0,G.jsx)(`span`,{children:`₹40,000+`})]})]})}),(0,G.jsxs)(`div`,{className:`filter-group`,children:[(0,G.jsxs)(`label`,{className:`group-lbl`,children:[(0,G.jsx)(S,{size:13,color:`#F06543`}),(0,G.jsx)(`span`,{children:`AMENITIES`})]}),(0,G.jsx)(`div`,{className:`amenity-checkbox-list`,children:ce.map(e=>(0,G.jsxs)(`label`,{className:`checkbox-item`,children:[(0,G.jsx)(`input`,{type:`checkbox`,checked:s.includes(e.label),onChange:()=>d(e.label)}),(0,G.jsx)(`span`,{children:e.label})]},e.id))})]})]})}function ue({sortBy:e,setSortBy:t,resultCount:n,isMapView:r,setIsMapView:i}){return(0,G.jsxs)(`div`,{className:`stay-sort-bar`,children:[(0,G.jsx)(`style`,{children:`
        .stay-sort-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 16px;
          background: #ffffff;
          padding: 16px 20px;
          border-radius: 20px;
          border: 2px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.03);
        }

        .results-count-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #0B2545;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 8px 16px;
          border-radius: 12px;
        }

        .count-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #F06543;
          display: inline-block;
          box-shadow: 0 0 10px rgba(240, 101, 67, 0.6);
        }

        .sort-controls-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .view-segmented-switch {
          display: flex;
          gap: 4px;
          background: #F1F5F9;
          padding: 4px;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
        }

        .view-toggle-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 7px 16px;
          border-radius: 10px;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #64748B;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.05em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .view-toggle-btn:hover {
          color: #0B2545;
        }

        .view-toggle-btn.active {
          background: #0B2545;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
        }

        .sort-dropdown-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .sort-select-input {
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          border-radius: 12px;
          padding: 9px 36px 9px 14px;
          color: #0B2545;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          transition: all 0.2s ease;
        }

        .sort-select-input:hover, .sort-select-input:focus {
          border-color: #F06543;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.1);
        }

        .sort-select-input option {
          background: #ffffff;
          color: #0F172A;
          font-size: 13px;
          padding: 6px;
        }

        .sort-select-icon {
          position: absolute;
          right: 12px;
          pointer-events: none;
          color: #64748B;
        }
      `}),(0,G.jsxs)(`div`,{className:`results-count-badge`,children:[(0,G.jsx)(`span`,{className:`count-dot`}),(0,G.jsxs)(`span`,{children:[n,` STAYS FOUND`]})]}),(0,G.jsxs)(`div`,{className:`sort-controls-wrapper`,children:[(0,G.jsxs)(`div`,{className:`view-segmented-switch`,children:[(0,G.jsxs)(`button`,{type:`button`,className:`view-toggle-btn${r?``:` active`}`,onClick:()=>i(!1),children:[(0,G.jsx)(T,{size:14}),(0,G.jsx)(`span`,{children:`LIST VIEW`})]}),(0,G.jsxs)(`button`,{type:`button`,className:`view-toggle-btn${r?` active`:``}`,onClick:()=>i(!0),children:[(0,G.jsx)(te,{size:14}),(0,G.jsx)(`span`,{children:`MAP VIEW`})]})]}),(0,G.jsxs)(`div`,{className:`sort-dropdown-container`,children:[(0,G.jsxs)(`select`,{value:e,onChange:e=>t(e.target.value),className:`sort-select-input`,"aria-label":`Sort stays`,children:[(0,G.jsx)(`option`,{value:`RECOMMENDED`,children:`SORT: Recommended`}),(0,G.jsx)(`option`,{value:`LOW_TO_HIGH`,children:`Price: Low to High`}),(0,G.jsx)(`option`,{value:`HIGH_TO_LOW`,children:`Price: High to Low`}),(0,G.jsx)(`option`,{value:`RATING`,children:`Highest Rating`})]}),(0,G.jsx)(f,{size:13,className:`sort-select-icon`})]})]})]})}var Z=[{id:`havelock`,name:`HAVELOCK ISLAND`,pos:[.6,0,-.6],key:`Havelock`},{id:`neil`,name:`NEIL ISLAND`,pos:[.4,0,.4],key:`Neil`},{id:`port-blair`,name:`PORT BLAIR`,pos:[-.6,0,.5],key:`Port Blair`},{id:`baratang`,name:`BARATANG`,pos:[-.1,0,-.2],key:`Baratang`},{id:`diglipur`,name:`DIGLIPUR`,pos:[.2,0,-1.2],key:`Diglipur`},{id:`great-nicobar`,name:`GREAT NICOBAR`,pos:[-.4,0,1.4],key:`Great Nicobar`}];function de({selectedKey:e,onSelectKey:t}){let n=(0,W.useRef)();return P((e,t)=>{n.current&&(n.current.rotation.y+=t*.02)}),(0,G.jsxs)(`group`,{ref:n,children:[(0,G.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],children:[(0,G.jsx)(`planeGeometry`,{args:[12,12]}),(0,G.jsx)(`meshStandardMaterial`,{color:`#0A2540`,roughness:.4,metalness:.6})]}),Z.map(n=>{let r=e.toLowerCase().includes(n.key.toLowerCase());return(0,G.jsxs)(`group`,{position:n.pos,onClick:()=>t(n.key),children:[(0,G.jsxs)(`mesh`,{children:[(0,G.jsx)(`cylinderGeometry`,{args:[.35,.45,.16,24]}),(0,G.jsx)(`meshStandardMaterial`,{color:r?`#F06543`:`#14B8A6`,roughness:.2,metalness:.4})]}),(0,G.jsxs)(`mesh`,{position:[0,.22,0],children:[(0,G.jsx)(`sphereGeometry`,{args:[.08,16,16]}),(0,G.jsx)(`meshBasicMaterial`,{color:r?`#FFFFFF`:`#FF6B4A`})]})]},n.id)})]})}function fe({stays:e,onViewStay:t}){let[n,r]=(0,W.useState)(`Havelock`),i=e.filter(e=>(e.destination||``).toLowerCase().includes(n.toLowerCase()));return(0,G.jsxs)(`div`,{className:`stay-map-container`,children:[(0,G.jsx)(`style`,{children:`
        .stay-map-container {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }
        @media (max-width: 900px) {
          .stay-map-container {
            grid-template-columns: 1fr;
          }
        }

        .canvas-box {
          height: 420px;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #0B192C;
          border: 2px solid #1E293B;
          position: relative;
        }

        .canvas-instruction {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #94A3B8;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }

        .island-pills-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .island-pill-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .island-pill-btn:hover {
          border-color: #F06543;
          color: #0B2545;
        }
        .island-pill-btn.active {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
        }

        .map-stay-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 360px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .map-stay-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          padding: 12px;
          display: flex;
          gap: 14px;
          align-items: center;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .map-stay-card:hover {
          border-color: #F06543;
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.08);
        }
      `}),(0,G.jsxs)(`div`,{className:`canvas-box`,children:[(0,G.jsxs)(F,{camera:{position:[0,3.8,3.8],fov:45},children:[(0,G.jsx)(`ambientLight`,{intensity:.9}),(0,G.jsx)(`directionalLight`,{position:[5,8,5],intensity:1.4}),(0,G.jsx)(`pointLight`,{position:[-3,4,-2],intensity:2,color:`#F06543`}),(0,G.jsx)(de,{selectedKey:n,onSelectKey:r})]}),(0,G.jsx)(`div`,{className:`canvas-instruction`,children:`💡 Click 3D island beacons to inspect resorts`})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`div`,{className:`island-pills-bar`,children:Z.map(e=>(0,G.jsx)(`button`,{type:`button`,className:`island-pill-btn${n===e.key?` active`:``}`,onClick:()=>r(e.key),children:e.name},e.id))}),(0,G.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#0B2545`,marginBottom:12,display:`flex`,alignItems:`center`,gap:6},children:[(0,G.jsx)(M,{size:14,color:`#F06543`}),(0,G.jsxs)(`span`,{children:[`PROPERTIES IN `,n.toUpperCase(),` (`,i.length,`)`]})]}),(0,G.jsx)(`div`,{className:`map-stay-list`,children:i.length===0?(0,G.jsxs)(`div`,{style:{color:`#64748b`,fontFamily:`'Inter', sans-serif`,fontSize:13,padding:`40px 20px`,textAlign:`center`,background:`#F8FAFC`,borderRadius:14},children:[`No stays found matching filters in `,n,`.`]}):i.map(e=>(0,G.jsxs)(`div`,{className:`map-stay-card`,onClick:()=>t&&t(e),children:[(0,G.jsx)(`img`,{src:e.heroImage||e.image,alt:e.name,style:{width:72,height:72,borderRadius:12,objectFit:`cover`,flexShrink:0}}),(0,G.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,G.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#0B2545`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.name}),(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,margin:`2px 0 4px`},children:[(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:2,fontSize:11,fontWeight:800,color:`#D97706`},children:[(0,G.jsx)(u,{size:11,className:`fill-[#F59E0B] text-[#F59E0B]`}),e.rating||4.8]}),(0,G.jsx)(`span`,{style:{color:`#CBD5E1`},children:`•`}),(0,G.jsx)(`span`,{style:{fontSize:11,color:`#64748B`,fontWeight:600},children:e.type?.replace(/_/g,` `)})]}),(0,G.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,color:`#F06543`,fontWeight:900},children:[`₹`,(e.pricePerNight||8500).toLocaleString(),` `,(0,G.jsx)(`span`,{style:{fontSize:11,color:`#64748B`,fontWeight:600},children:`/night`})]})]}),(0,G.jsx)(`button`,{type:`button`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,color:`#ffffff`,background:`#0B2545`,border:`none`,padding:`8px 14px`,borderRadius:10,cursor:`pointer`,flexShrink:0},children:`VIEW`})]},e.id))})]})]})}R.registerPlugin(z);var Q=[{id:`stay-taj-exotica`,slug:`taj-exotica-resort-spa`,name:`Taj Exotica Resort & Spa`,destination:`Havelock Island (Swaraj Dweep)`,type:`LUXURY_VILLA`,category:`LUXURY_VILLA`,rating:4.9,reviewCount:128,pricePerNight:32e3,originalPrice:38e3,heroImage:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85`,tagline:`5-Star Rainforest & Private Beach Plunge Pool Villas`,shortDescription:`Occupying 46 acres of lush rainforest along Radhanagar Beach, Taj Exotica offers eco-luxury villas with private pools and world-class spa.`,amenities:[`Private Pool`,`Beachfront`,`Spa & Wellness`,`In-house Restaurant`,`Free High-Speed Wi-Fi`]},{id:`stay-barefoot`,slug:`barefoot-at-havelock`,name:`Barefoot at Havelock`,destination:`Havelock Island (Swaraj Dweep)`,type:`BOUTIQUE_RESORT`,category:`BOUTIQUE_RESORT`,rating:4.8,reviewCount:94,pricePerNight:18500,originalPrice:22e3,heroImage:`https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85`,tagline:`Eco-chic Luxury Wooden Cottages at Radhanagar Beach`,shortDescription:`Eco-chic luxury wooden cottages nestled beside Radhanagar Beach with pristine jungle paths and private beach walkway.`,amenities:[`Beachfront`,`Spa & Wellness`,`In-house Restaurant`,`Free High-Speed Wi-Fi`,`Full Air Conditioning`]},{id:`stay-munjoh`,slug:`munjoh-ocean-resort`,name:`Munjoh Ocean Resort`,destination:`Havelock Island (Swaraj Dweep)`,type:`LUXURY_VILLA`,category:`LUXURY_VILLA`,rating:4.8,reviewCount:88,pricePerNight:16500,originalPrice:19500,heroImage:`https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85`,tagline:`Bespoke Ocean Suites & Coconut Grove Pool Villas`,shortDescription:`Bespoke luxury ocean suites and coconut grove pool villas at Beach No. 5 with PADI dive school and curated beach dining.`,amenities:[`Swimming Pool`,`Beachfront`,`PADI Scuba Desk`,`Cocktail Bar`,`Free High-Speed Wi-Fi`]},{id:`stay-welcomhotel`,slug:`welcomhotel-bay-island-port-blair`,name:`Welcomhotel by ITC Hotels, Bay Island`,destination:`Port Blair`,type:`HERITAGE_HOTEL`,category:`HERITAGE_HOTEL`,rating:4.8,reviewCount:112,pricePerNight:14500,originalPrice:17e3,heroImage:`https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85`,tagline:`Padauk Wood Architecture Overlooking the Bay`,shortDescription:`Overlooking the tranquil waters of Bay of Bengal, built with native Padauk wood architecture and cliffside sea views.`,amenities:[`Swimming Pool`,`In-house Restaurant`,`Spa & Wellness`,`Cocktail Bar`,`Free High-Speed Wi-Fi`]},{id:`stay-symphony-samudra`,slug:`symphony-samudra-beachside-jungle-resort`,name:`Symphony Samudra Beachside Jungle Resort`,destination:`Port Blair`,type:`LUXURY_VILLA`,category:`LUXURY_VILLA`,rating:4.9,reviewCount:106,pricePerNight:12800,originalPrice:15500,heroImage:`https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85`,tagline:`Eco-Luxury Haven next to Chidiya Tapu Sunset Point`,shortDescription:`A luxurious eco-resort nestled next to Chidiya Tapu Biological Park and Sunset Point with an infinity pool and wellness spa.`,amenities:[`Swimming Pool`,`Spa & Wellness`,`In-house Restaurant`,`Cocktail Bar`,`Full Air Conditioning`]},{id:`stay-seashell`,slug:`seashell-havelock`,name:`SeaShell Havelock`,destination:`Havelock Island (Swaraj Dweep)`,type:`BEACH_RESORT`,category:`BEACH_RESORT`,rating:4.8,reviewCount:145,pricePerNight:11200,originalPrice:13500,heroImage:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85`,tagline:`Beachside Timber Cottages with Direct Beach Access`,shortDescription:`Timber beach cottages amidst towering coconut trees with direct access to Govind Nagar beach and the popular Fluidz bar.`,amenities:[`Beachfront`,`Swimming Pool`,`PADI Scuba Desk`,`Cocktail Bar`,`Free High-Speed Wi-Fi`]},{id:`stay-summer-sands`,slug:`summer-sands-beach-resort`,name:`Summer Sands Beach Resort`,destination:`Neil Island (Shaheed Dweep)`,type:`BOUTIQUE_RESORT`,category:`BOUTIQUE_RESORT`,rating:4.7,reviewCount:76,pricePerNight:9500,originalPrice:11500,heroImage:`https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85`,tagline:`Lagoon Pool Luxury Resort in Ramnagar`,shortDescription:`Modern luxury resort with lagoon pool, private plunge rooms, and courtyard gardens at Ramnagar Beach.`,amenities:[`Swimming Pool`,`Spa & Wellness`,`In-house Restaurant`,`Cocktail Bar`,`Free High-Speed Wi-Fi`]},{id:`stay-symphony-palms`,slug:`symphony-palms-beach-resort`,name:`Symphony Palms Beach Resort`,destination:`Havelock Island (Swaraj Dweep)`,type:`ECO_LODGE`,category:`ECO_LODGE`,rating:4.6,reviewCount:98,pricePerNight:8900,originalPrice:10500,heroImage:`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85`,tagline:`Lagoon Cottages & Beach Dining on Beach No. 5`,shortDescription:`Charming lagoon cottages and seaside suites on Beach No. 5 with soothing ocean breezes and beach dining.`,amenities:[`Beachfront`,`In-house Restaurant`,`Spa & Wellness`,`Free High-Speed Wi-Fi`,`Full Air Conditioning`]},{id:`stay-great-nicobar`,slug:`great-nicobar-eco-wilderness-lodge`,name:`Great Nicobar Eco Wilderness Lodge`,destination:`Great Nicobar`,type:`ECO_LODGE`,category:`ECO_LODGE`,rating:4.7,reviewCount:42,pricePerNight:5500,originalPrice:7e3,heroImage:`https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=85`,tagline:`Wilderness Sanctuary along Campbell Bay`,shortDescription:`Authentic wilderness sanctuary overlooking pristine Campbell Bay and Galathea biosphere with guided nature safaris.`,amenities:[`In-house Restaurant`,`Free High-Speed Wi-Fi`,`Full Air Conditioning`]},{id:`stay-dew-dale`,slug:`dew-dale-eco-resort`,name:`Dew Dale Eco Resort`,destination:`Baratang Island`,type:`ECO_LODGE`,category:`ECO_LODGE`,rating:4.5,reviewCount:53,pricePerNight:4500,originalPrice:5500,heroImage:`https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85`,tagline:`Rural Eco Retreat near Baratang Limestone Caves`,shortDescription:`Serene rural retreat surrounded by lush tropical greenery, perfectly located for visiting limestone caves & mud volcano.`,amenities:[`In-house Restaurant`,`Full Air Conditioning`,`Free High-Speed Wi-Fi`]},{id:`stay-pristine`,slug:`pristine-beach-resort`,name:`Pristine Beach Resort`,destination:`Diglipur`,type:`ECO_LODGE`,category:`ECO_LODGE`,rating:4.6,reviewCount:61,pricePerNight:3800,originalPrice:4800,heroImage:`https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85`,image:`https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85`,tagline:`Beachfront Eco Cottages near Kalipur Turtle Nesting`,shortDescription:`Rustic beachfront timber huts in Kalipur Beach with turtle nesting sights, views of Saddle Peak, and coral reef tours.`,amenities:[`Beachfront`,`In-house Restaurant`,`Free High-Speed Wi-Fi`]}];function pe({onViewStay:e,searchFilter:t}){let[n,r]=(0,W.useState)(`All`),[i,a]=(0,W.useState)(`All`),[o,s]=(0,W.useState)(4e4),[c,l]=(0,W.useState)([]),[u,d]=(0,W.useState)(`RECOMMENDED`),[f,p]=(0,W.useState)(!1),[m,h]=(0,W.useState)(Q),g=(0,W.useRef)(null);(0,W.useEffect)(()=>{t?.destination&&r(t.destination)},[t]),(0,W.useEffect)(()=>{V.getStays().then(e=>{if(e.data&&Array.isArray(e.data)&&e.data.length>0){let t=e.data.map(e=>{let t=typeof e.destination==`object`&&e.destination!==null?e.destination.name||`Havelock Island (Swaraj Dweep)`:typeof e.destination==`string`?e.destination:e.location||`Havelock Island (Swaraj Dweep)`,n=Q.find(t=>t.slug===e.slug||t.name.toLowerCase()===e.name.toLowerCase());return{id:`db-stay-${e.id}`,name:e.name,slug:e.slug||`stay-${e.id}`,tagline:e.tagline||n?.tagline||`Experience pristine island luxury and beachfront serenity.`,destination:t,type:e.type||n?.type||`LUXURY_VILLA`,category:e.type||n?.category||`LUXURY_VILLA`,rating:parseFloat(e.rating||n?.rating||4.8),reviewCount:e.reviewCount||n?.reviewCount||95,reviewsCount:e.reviewCount||n?.reviewCount||95,heroImage:e.heroImage||n?.heroImage||`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,image:e.heroImage||n?.image||`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`,gallery:e.gallery||n?.gallery||[e.heroImage||`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80`],pricePerNight:parseFloat(e.pricePerNight||n?.pricePerNight||12e3),originalPrice:parseFloat(e.pricePerNight||n?.pricePerNight||12e3)*1.2,shortDescription:e.shortDescription||n?.shortDescription||e.description,description:e.description||n?.description,amenities:Array.isArray(e.amenities)&&e.amenities.length>0?e.amenities:n?.amenities||[`Beachfront`,`In-house Restaurant`,`Free High-Speed Wi-Fi`]}});if(t.length>=8)h(t);else{let e=Q.map(e=>{let n=t.find(t=>t.slug===e.slug||t.name.toLowerCase()===e.name.toLowerCase());return n?{...e,...n}:e});h(e)}}}).catch(()=>{h(Q)})},[]);let _=()=>{r(`All`),a(`All`),s(4e4),l([]),d(`RECOMMENDED`)},v=m.filter(e=>{if(n!==`All`){let t=n.toLowerCase();if(!(e.destination||``).toLowerCase().includes(t))return!1}if(i!==`All`){let t=i.toUpperCase().replace(/\s+/g,`_`),n=(e.type||e.category||``).toUpperCase();if(n!==t&&!n.includes(t))return!1}if(e.pricePerNight>o)return!1;if(c.length>0){let t=(e.amenities||[]).map(e=>e.toLowerCase());if(!c.every(e=>t.some(t=>t.includes(e.toLowerCase()))))return!1}return!0}).sort((e,t)=>u===`LOW_TO_HIGH`?e.pricePerNight-t.pricePerNight:u===`HIGH_TO_LOW`?t.pricePerNight-e.pricePerNight:u===`RATING`?(t.rating||0)-(e.rating||0):0);return(0,W.useEffect)(()=>{if(!g.current||f)return;let e=g.current.querySelectorAll(`.stay-card-root`);e.length>0&&R.fromTo(e,{opacity:0,y:20},{opacity:1,y:0,duration:.45,stagger:.05,ease:`power2.out`})},[n,i,o,c,u,f]),(0,G.jsxs)(`section`,{className:`stay-grid-root`,id:`stays-listing-section`,children:[(0,G.jsx)(`style`,{children:`
        .stay-grid-root {
          max-width: 1380px;
          margin: 0 auto;
          padding: 60px 24px 100px;
        }

        .grid-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .grid-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #FFF0EB;
          border: 1px solid #FFE0D6;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 12px;
        }

        .grid-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 700;
          color: #0B2545;
          margin: 0 0 10px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .grid-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #64748B;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .main-layout {
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .main-layout {
            grid-template-columns: 1fr;
          }
        }

        .cards-sub-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 26px;
        }
        @media (max-width: 680px) {
          .cards-sub-grid {
            grid-template-columns: 1fr;
          }
        }

        .no-results-box {
          background: #ffffff;
          border: 2px dashed #CBD5E1;
          border-radius: 24px;
          padding: 60px 24px;
          text-align: center;
          color: #64748B;
        }
      `}),(0,G.jsxs)(`div`,{className:`grid-header`,children:[(0,G.jsxs)(`div`,{className:`grid-eyebrow`,children:[(0,G.jsx)(D,{size:15,color:`#F06543`}),(0,G.jsx)(`span`,{children:`HANDPICKED LUXURY STAYS`})]}),(0,G.jsx)(`h2`,{className:`grid-title`,children:`EXPLORE ALL ISLAND RETREATS`}),(0,G.jsx)(`p`,{className:`grid-subtitle`,children:`Discover handpicked luxury villas, beachfront resorts, eco-wilderness retreats, and boutique hotels across Andaman & Nicobar.`})]}),(0,G.jsxs)(`div`,{className:`main-layout`,children:[(0,G.jsx)(le,{destination:n,setDestination:r,category:i,setCategory:a,maxPrice:o,setMaxPrice:s,selectedAmenities:c,setSelectedAmenities:l,onReset:_}),(0,G.jsxs)(`div`,{style:{minWidth:0},children:[(0,G.jsx)(ue,{sortBy:u,setSortBy:d,resultCount:v.length,isMapView:f,setIsMapView:p}),f?(0,G.jsx)(fe,{stays:v,onViewStay:e}):(0,G.jsx)(`div`,{children:v.length===0?(0,G.jsxs)(`div`,{className:`no-results-box`,children:[(0,G.jsx)(ee,{size:40,color:`#F06543`,style:{margin:`0 auto 16px`}}),(0,G.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:22,fontWeight:800,color:`#0B2545`,margin:`0 0 8px`},children:`NO STAYS FOUND MATCHING YOUR FILTERS`}),(0,G.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:14,color:`#64748b`,marginBottom:24,maxWidth:460,margin:`0 auto 24px`},children:`We couldn't find any properties for the selected island or price range. Try expanding your filters.`}),(0,G.jsx)(`button`,{onClick:_,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#ffffff`,background:`#0B2545`,border:`none`,padding:`12px 28px`,borderRadius:12,cursor:`pointer`,boxShadow:`0 4px 14px rgba(11, 37, 69, 0.2)`},children:`RESET ALL FILTERS`})]}):(0,G.jsx)(`div`,{ref:g,className:`cards-sub-grid`,children:v.map((t,n)=>(0,G.jsx)(se,{stay:t,onViewStay:e},`${t.id||`stay`}-${t.slug||n}`))})})]})]})]})}R.registerPlugin(z);var me=[{id:`beachfront-living`,title:`BEACHFRONT LIVING`,tag:`DIRECT OCEAN ACCESS`,desc:`Wake up to the ocean breeze and private white sand access.`,highlights:[`Private Beach Deck`,`Wave Views`,`Barefoot Access`],image:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85`,icon:_,accentColor:`#0284C7`,badgeBg:`rgba(2, 132, 199, 0.9)`},{id:`jungle-escapes`,title:`JUNGLE ESCAPES`,tag:`RAINFOREST CANOPY`,desc:`Stay surrounded by lush rainforest, birds and indigenous flora.`,highlights:[`Canopy Cottages`,`Nature Trails`,`Serene Flora`],image:`https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=85`,icon:j,accentColor:`#16A34A`,badgeBg:`rgba(22, 163, 74, 0.9)`},{id:`private-villas`,title:`PRIVATE VILLAS`,tag:`VIP PLUNGE POOLS`,desc:`Enjoy maximum space, private pools, and dedicated butler service.`,highlights:[`Private Plunge Pool`,`Butler Service`,`King Suites`],image:`https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=85`,icon:v,accentColor:`#7C3AED`,badgeBg:`rgba(124, 58, 237, 0.9)`},{id:`sunset-stays`,title:`SUNSET STAYS`,tag:`GOLDEN HORIZON`,desc:`Watch golden sunsets over the Andaman Sea right from your balcony.`,highlights:[`West Coast Vistas`,`Sunset Cocktail Bar`,`Infinity Decks`],image:`https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85`,icon:d,accentColor:`#F06543`,badgeBg:`rgba(240, 101, 67, 0.9)`}];function he({onExploreExperiences:e}){let t=(0,W.useRef)(null);(0,W.useEffect)(()=>{if(!t.current)return;let e=t.current.querySelectorAll(`.exp-stay-card`);R.fromTo(e,{opacity:0,y:35},{opacity:1,y:0,duration:.65,stagger:.1,ease:`power2.out`,scrollTrigger:{trigger:t.current,start:`top 85%`}})},[]);let n=t=>{if(e)e(t);else{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})}};return(0,G.jsxs)(`section`,{className:`stay-exp-root`,id:`stay-experiences-section`,children:[(0,G.jsx)(`style`,{children:`
        .stay-exp-root {
          max-width: 1380px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }

        .exp-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .exp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #FFF0EB;
          border: 1px solid #FFE0D6;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 14px;
        }

        .exp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 700;
          color: #0B2545;
          margin: 0 0 12px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .exp-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #64748B;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .exp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        @media (max-width: 1120px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }

        .exp-stay-card {
          position: relative;
          height: 440px;
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 24px rgba(11, 37, 69, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #0B2545;
        }

        .exp-stay-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 24px 48px rgba(11, 37, 69, 0.2), 0 0 24px rgba(240, 101, 67, 0.2);
        }

        .exp-card-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .exp-stay-card:hover .exp-card-bg-img {
          transform: scale(1.1);
        }

        .exp-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 37, 69, 0.2) 0%,
            rgba(11, 37, 69, 0.4) 35%,
            rgba(7, 25, 46, 0.95) 80%,
            rgba(5, 18, 33, 0.98) 100%
          );
          pointer-events: none;
        }

        .exp-card-top {
          position: relative;
          z-index: 2;
          padding: 20px 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .exp-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 30px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .exp-card-body {
          position: relative;
          z-index: 2;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 21px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .exp-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #E2E8F0;
          line-height: 1.55;
          margin: 0;
          font-weight: 400;
        }

        .exp-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 2px;
        }

        .exp-chip {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          color: #F8FAFC;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: 8px;
        }

        .exp-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          padding: 11px 18px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 6px;
        }

        .exp-stay-card:hover .exp-cta-btn {
          background: #F06543;
          border-color: #F06543;
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.4);
          transform: translateY(-2px);
        }

        .exp-cta-btn svg {
          transition: transform 0.25s ease;
        }
        .exp-stay-card:hover .exp-cta-btn svg {
          transform: translateX(4px);
        }
      `}),(0,G.jsxs)(`div`,{className:`exp-header`,children:[(0,G.jsxs)(`div`,{className:`exp-eyebrow`,children:[(0,G.jsx)(D,{size:15,color:`#F06543`}),(0,G.jsx)(`span`,{children:`CURATED RESORT ATMOSPHERES`})]}),(0,G.jsx)(`h2`,{className:`exp-title`,children:`STAY FOR THE EXPERIENCE`}),(0,G.jsx)(`p`,{className:`exp-subtitle`,children:`Whether you desire uninterrupted private beach access, secluded rainforest tranquility, or opulent luxury villas — choose your ideal holiday mood.`})]}),(0,G.jsx)(`div`,{ref:t,className:`exp-grid`,children:me.map(e=>{let t=e.icon;return(0,G.jsxs)(`div`,{className:`exp-stay-card`,onClick:()=>n(e),role:`button`,tabIndex:0,"aria-label":`Explore ${e.title}`,onKeyDown:t=>{t.key===`Enter`&&n(e)},children:[(0,G.jsx)(`img`,{src:e.image,alt:e.title,className:`exp-card-bg-img`,loading:`lazy`}),(0,G.jsx)(`div`,{className:`exp-card-gradient`}),(0,G.jsx)(`div`,{className:`exp-card-top`,children:(0,G.jsxs)(`span`,{className:`exp-tag-badge`,style:{background:e.badgeBg},children:[(0,G.jsx)(t,{size:13}),(0,G.jsx)(`span`,{children:e.tag})]})}),(0,G.jsxs)(`div`,{className:`exp-card-body`,children:[(0,G.jsx)(`h3`,{className:`exp-card-title`,children:e.title}),(0,G.jsx)(`p`,{className:`exp-card-desc`,children:e.desc}),(0,G.jsx)(`div`,{className:`exp-chips-row`,children:e.highlights.map((e,t)=>(0,G.jsx)(`span`,{className:`exp-chip`,children:e},t))}),(0,G.jsxs)(`div`,{className:`exp-cta-btn`,children:[(0,G.jsx)(`span`,{children:`EXPLORE STAYS`}),(0,G.jsx)(o,{size:14})]})]})]},e.id)})})]})}function ge({onExploreCouple:e}){return(0,G.jsxs)(`section`,{className:`couple-stays-root`,children:[(0,G.jsx)(`style`,{children:`
        .couple-stays-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px;
        }

        .couple-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid rgba(244, 114, 182, 0.3);
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1.1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(244, 114, 182, 0.1);
        }
        @media (max-width: 900px) {
          .couple-card { grid-template-columns: 1fr; }
        }

        .couple-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .couple-img-box img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .couple-body {
          padding: 44px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .couple-body { padding: 24px; }
        }

        .couple-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #f472b6;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .couple-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600; color: #0B2545; line-height: 1.1; margin: 0 0 14px;
        }

        .couple-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .couple-pill-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px;
        }
        .couple-pill {
          font-family: 'Space Grotesk', sans-serif; fontSize: 12; color: #334155; font-weight: 700;
          background: #ffffff; border: 1px solid rgba(244, 114, 182, 0.2);
          padding: 10px 14px; border-radius: 14px; display: flex; align-items: center; gap: 8px;
        }

        .couple-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #334155; background: rgba(244, 114, 182, 0.15);
          border: 1px solid rgba(244, 114, 182, 0.4);
          padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
        }
        .couple-btn:hover {
          background: #fdf2f8; color: #db2777;
          box-shadow: 0 8px 24px rgba(244, 114, 182, 0.4);
        }
      `}),(0,G.jsxs)(`div`,{className:`couple-card`,children:[(0,G.jsx)(`div`,{className:`couple-img-box`,children:(0,G.jsx)(`img`,{src:`https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=900&q=85`,alt:`Couple Honeymoon Stay Andaman`})}),(0,G.jsxs)(`div`,{className:`couple-body`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{className:`couple-eyebrow`,children:[(0,G.jsx)(N,{size:14,color:`#f472b6`}),(0,G.jsx)(`span`,{children:`HONEYMOON & ROMANCE`})]}),(0,G.jsx)(`h2`,{className:`couple-title`,children:`MADE FOR TWO`}),(0,G.jsx)(`p`,{className:`couple-desc`,children:`Discover stays designed for slow mornings, ocean views, private candlelit beach dining, and unforgettable moments together.`}),(0,G.jsxs)(`div`,{className:`couple-pill-grid`,children:[(0,G.jsxs)(`div`,{className:`couple-pill`,children:[(0,G.jsx)(r,{size:14,color:`#f472b6`}),` Private Beach Access`]}),(0,G.jsxs)(`div`,{className:`couple-pill`,children:[(0,G.jsx)(S,{size:14,color:`#f472b6`}),` Private Pool Villas`]}),(0,G.jsxs)(`div`,{className:`couple-pill`,children:[(0,G.jsx)(N,{size:14,color:`#f472b6`}),` Honeymoon Setup`]}),(0,G.jsxs)(`div`,{className:`couple-pill`,children:[(0,G.jsx)(h,{size:14,color:`#f472b6`}),` Candlelit Dining`]})]})]}),(0,G.jsxs)(`button`,{onClick:e,className:`couple-btn`,children:[(0,G.jsx)(`span`,{children:`EXPLORE COUPLE STAYS`}),(0,G.jsx)(o,{size:14})]})]})]})]})}function _e({onExploreFamily:e}){return(0,G.jsxs)(`section`,{className:`family-stays-root`,children:[(0,G.jsx)(`style`,{children:`
        .family-stays-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px;
        }

        .family-card {
          background: #ffffff; backdrop-filter: blur(25px);
          border: 1.5px solid rgba(33, 230, 193, 0.3); border-radius: 28px;
          overflow: hidden; display: grid; grid-template-columns: 1.1fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 900px) {
          .family-card { grid-template-columns: 1fr; }
        }

        .family-body {
          padding: 44px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .family-body { padding: 24px; }
        }

        .family-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .family-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600; color: #0B2545; line-height: 1.1; margin: 0 0 14px;
        }

        .family-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .family-pill-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px;
        }
        .family-pill {
          font-family: 'Space Grotesk', sans-serif; fontSize: 12; color: #334155; font-weight: 700;
          background: #ffffff; border: 1px solid rgba(33, 230, 193, 0.2);
          padding: 10px 14px; border-radius: 14px; display: flex; align-items: center; gap: 8px;
        }

        .family-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .family-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }

        .family-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .family-img-box img {
          width: 100%; height: 100%; object-fit: cover;
        }
      `}),(0,G.jsxs)(`div`,{className:`family-card`,children:[(0,G.jsxs)(`div`,{className:`family-body`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{className:`family-eyebrow`,children:[(0,G.jsx)(E,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`FAMILY VACATIONS`})]}),(0,G.jsx)(`h2`,{className:`family-title`,children:`ROOM FOR EVERYONE`}),(0,G.jsx)(`p`,{className:`family-desc`,children:`Spacious multi-room suites, child-friendly swimming pools, connected family villas, and multi-cuisine dining options.`}),(0,G.jsxs)(`div`,{className:`family-pill-grid`,children:[(0,G.jsxs)(`div`,{className:`family-pill`,children:[(0,G.jsx)(E,{size:14,color:`#F06543`}),` Interconnecting Rooms`]}),(0,G.jsxs)(`div`,{className:`family-pill`,children:[(0,G.jsx)(_,{size:14,color:`#F06543`}),` Kids Pool Circuit`]}),(0,G.jsxs)(`div`,{className:`family-pill`,children:[(0,G.jsx)(y,{size:14,color:`#F06543`}),` Multi-Cuisine Dining`]}),(0,G.jsxs)(`div`,{className:`family-pill`,children:[(0,G.jsx)(t,{size:14,color:`#F06543`}),` Safe Beach Access`]})]})]}),(0,G.jsxs)(`button`,{onClick:e,className:`family-btn`,children:[(0,G.jsx)(`span`,{children:`FIND FAMILY STAYS`}),(0,G.jsx)(o,{size:14})]})]}),(0,G.jsx)(`div`,{className:`family-img-box`,children:(0,G.jsx)(`img`,{src:`https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85`,alt:`Family Island Resort Stay`})})]})]})}var ve=[{id:`luxury-villas`,title:`5★ LUXURY STAYS`,badge:`👑 ROYAL VIP TIER`,bestFor:`Couples, Honeymooners & VIP Travelers`,icon:v,features:[`5-Star Hospitality & Concierge`,`Private Plunge Pools & Jacuzzis`,`Gourmet Fine Dining & Butler Service`,`Direct Private Beach & Spa Trails`],topStays:`Taj Exotica • Symphony Samudra`,price:`₹25,000`,priceSuffix:`/ night`,color:`#7C3AED`,bgBadge:`#F5F3FF`,borderColor:`#DDD6FE`},{id:`beachfront-resorts`,title:`BEACHFRONT RESORTS`,badge:`⭐ 4★ PREMIUM OCEAN`,bestFor:`Ocean & Sun Lovers, Families`,icon:_,features:[`Direct White Sand Beach Access`,`Ocean-View Balconies & Chalets`,`Sunset Deck Bar & Fresh Seafood`,`On-Site Water Sports & Scuba Desks`],topStays:`SeaShell • Summer Sands • Silver Sand`,price:`₹12,000`,priceSuffix:`/ night`,color:`#0284C7`,bgBadge:`#F0F9FF`,borderColor:`#BAE6FD`},{id:`boutique-villas`,title:`BOUTIQUE & ECO VILLAS`,badge:`🌿 TRANQUIL NATURE`,bestFor:`Unique, Peaceful & Wellness Stays`,icon:j,features:[`Nicobari Teak & Eco-Cottages`,`Ayurvedic Spa & Daily Yoga Decks`,`Organic Farm-to-Table Dining`,`Intimate Tropical Forest Setting`],topStays:`Barefoot • Dew Dale • Flying Elephant`,price:`₹9,000`,priceSuffix:`/ night`,color:`#059669`,bgBadge:`#ECFDF5`,borderColor:`#A7F3D0`},{id:`budget-friendly`,title:`COMFORT & VALUE STAYS`,badge:`🏨 3★ DELUXE COMFORT`,bestFor:`Smart, Solo & Group Travelers`,icon:l,features:[`Spacious AC Rooms & Plush Beds`,`Close to Ferry Jetties & Markets`,`Complimentary Morning Breakfast`,`High Value Comfort & Tour Desk`],topStays:`TSG Grand • Dolphin • Tango Beach`,price:`₹4,500`,priceSuffix:`/ night`,color:`#D97706`,bgBadge:`#FFFBEB`,borderColor:`#FDE68A`}];function ye({onExplore:e}){let t=t=>{if(e)e(t);else{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})}};return(0,G.jsxs)(`section`,{className:`comp-root`,id:`stay-comparison-section`,children:[(0,G.jsx)(`style`,{children:`
        .comp-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
          font-family: 'Inter', sans-serif;
        }

        .comp-eyebrow {
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

        .comp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          color: #0B2545;
          text-align: center;
          margin: 0 0 10px;
          line-height: 1.15;
        }

        .comp-subtitle {
          font-size: clamp(14px, 1.8vw, 16px);
          color: #64748b;
          text-align: center;
          max-width: 680px;
          margin: 0 auto 44px;
          line-height: 1.6;
        }

        .comp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .comp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .comp-grid { grid-template-columns: 1fr; }
        }

        .comp-card {
          background: #ffffff;
          border: 2px solid #EBDED2;
          border-radius: 26px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .comp-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.12);
        }

        .comp-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 8px;
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .comp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 4px;
          line-height: 1.25;
        }

        .comp-best-for {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .comp-feat-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 22px;
          padding-top: 14px;
          border-top: 1.5px solid #F5ECE5;
        }

        .comp-feat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #1E293B;
          font-weight: 600;
          line-height: 1.4;
        }

        .comp-bottom-area {
          padding-top: 18px;
          border-top: 1.5px solid #F5ECE5;
          margin-top: 6px;
        }

        .comp-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 14px;
        }

        .comp-price-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #0B2545;
        }

        .comp-price-sfx {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }

        .comp-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.05em;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1.5px solid;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
        }
      `}),(0,G.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,G.jsxs)(`div`,{className:`comp-eyebrow`,children:[(0,G.jsx)(S,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`STAY CATEGORIES & TIERS`})]}),(0,G.jsx)(`h2`,{className:`comp-title`,children:`WHICH STAY IS RIGHT FOR YOU?`}),(0,G.jsx)(`p`,{className:`comp-subtitle`,children:`Whether you crave 5-star oceanfront seclusion, family beachside chalets, or smart transit comfort — explore verified Andaman accommodations.`})]}),(0,G.jsx)(`div`,{className:`comp-grid`,children:ve.map(e=>{let r=e.icon||D;return(0,G.jsxs)(`div`,{className:`comp-card`,style:{borderColor:`#EBDED2`},onMouseEnter:t=>{t.currentTarget.style.borderColor=e.color},onMouseLeave:e=>{e.currentTarget.style.borderColor=`#EBDED2`},children:[(0,G.jsxs)(`div`,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,G.jsx)(`span`,{className:`comp-top-badge`,style:{background:e.bgBadge,color:e.color,border:`1px solid ${e.borderColor}`},children:e.badge}),(0,G.jsx)(`div`,{style:{width:34,height:34,borderRadius:10,background:e.bgBadge,color:e.color,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,G.jsx)(r,{size:18})})]}),(0,G.jsx)(`h3`,{className:`comp-card-title`,children:e.title}),(0,G.jsxs)(`div`,{className:`comp-best-for`,children:[(0,G.jsx)(`strong`,{style:{color:`#0B2545`},children:`Best for:`}),` `,e.bestFor]}),(0,G.jsx)(`div`,{className:`comp-feat-list`,children:e.features.map((t,r)=>(0,G.jsxs)(`div`,{className:`comp-feat-item`,children:[(0,G.jsx)(`div`,{style:{width:18,height:18,borderRadius:6,background:e.bgBadge,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,marginTop:2},children:(0,G.jsx)(n,{size:12,color:e.color,strokeWidth:3})}),(0,G.jsx)(`span`,{children:t})]},r))}),(0,G.jsxs)(`div`,{style:{fontSize:11,color:`#64748b`,marginBottom:12},children:[(0,G.jsx)(`strong`,{style:{color:`#0B2545`},children:`Featured:`}),` `,e.topStays]})]}),(0,G.jsxs)(`div`,{className:`comp-bottom-area`,children:[(0,G.jsxs)(`div`,{className:`comp-price-row`,children:[(0,G.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:`#64748b`,textTransform:`uppercase`},children:`From`}),(0,G.jsx)(`span`,{className:`comp-price-val`,style:{color:e.color},children:e.price}),(0,G.jsx)(`span`,{className:`comp-price-sfx`,children:e.priceSuffix})]}),(0,G.jsxs)(`button`,{type:`button`,className:`comp-btn`,onClick:()=>t(e.title),style:{background:e.bgBadge,color:e.color,borderColor:e.borderColor},onMouseEnter:t=>{t.currentTarget.style.background=e.color,t.currentTarget.style.color=`#ffffff`,t.currentTarget.style.borderColor=e.color,t.currentTarget.style.boxShadow=`0 6px 18px ${e.color}40`},onMouseLeave:t=>{t.currentTarget.style.background=e.bgBadge,t.currentTarget.style.color=e.color,t.currentTarget.style.borderColor=e.borderColor,t.currentTarget.style.boxShadow=`none`},children:[(0,G.jsxs)(`span`,{children:[`EXPLORE `,e.title.replace(`5★ `,``).replace(` & VALUE`,``)]}),(0,G.jsx)(o,{size:13})]})]})]},e.id)})})]})}var be=[{id:`beachfront`,label:`Beachfront`,icon:`Waves`},{id:`pool`,label:`Infinity Pool`,icon:`Sun`},{id:`spa`,label:`Luxury Spa`,icon:`Sparkles`},{id:`restaurant`,label:`Fine Dining`,icon:`Utensils`},{id:`wifi`,label:`High-Speed Wi-Fi`,icon:`Wifi`},{id:`ac`,label:`Ocean View AC`,icon:`Wind`},{id:`transfer`,label:`Jetty Transfers`,icon:`Car`},{id:`scuba`,label:`Dive Center`,icon:`Anchor`}],$={Sun:r,Waves:_,Utensils:y,Wifi:x,Wind:A,Sparkles:S,Car:w,Anchor:h};function xe({activeAmenity:e,onSelectAmenity:t}){return(0,G.jsxs)(`section`,{className:`amenity-explorer-root`,children:[(0,G.jsx)(`style`,{children:`
        .amenity-explorer-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .amenity-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .amenity-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .amenity-chips-wrap {
          display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
        }

        .amenity-chip-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.04em;
          color: #475569;
          background: #ffffff;
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid #e2e8f0;
          padding: 12px 22px; border-radius: 18px;
          cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .amenity-chip-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(33, 230, 193, 0.5);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        .amenity-chip-btn.active {
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border-color: #F06543;
          color: #F06543;
          box-shadow: 0 0 20px rgba(33, 230, 193, 0.2);
        }

        .amenity-icon-circle {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(22, 217, 255, 0.12);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s ease;
        }
        .amenity-chip-btn.active .amenity-icon-circle {
          background: rgba(33, 230, 193, 0.25);
        }
      `}),(0,G.jsxs)(`div`,{className:`amenity-eyebrow`,children:[(0,G.jsx)(S,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`AMENITY FILTERS`})]}),(0,G.jsx)(`h2`,{className:`amenity-title`,children:`SEARCH BY WHAT MATTERS`}),(0,G.jsx)(`div`,{className:`amenity-chips-wrap`,children:be.map(n=>{let i=$[n.icon]||r,a=e===n.label;return(0,G.jsxs)(`button`,{className:`amenity-chip-btn${a?` active`:``}`,onClick:()=>t(a?null:n.label),"aria-label":`Filter stays by ${n.label}`,children:[(0,G.jsx)(`div`,{className:`amenity-icon-circle`,children:(0,G.jsx)(i,{size:15,color:`#F06543`})}),(0,G.jsx)(`span`,{children:n.label.toUpperCase()})]},n.id)})})]})}var Se=[{icon:O,title:`CHECK-IN`,description:`Standard check-in is between 10:00 AM – 12:00 PM. Early check-in subject to availability and prior request.`,color:`#F06543`},{icon:re,title:`CHECK-OUT`,description:`Standard check-out is between 08:00 AM – 10:00 AM, aligned with inter-island ferry departures.`,color:`#F06543`},{icon:m,title:`CANCELLATION`,description:`Cancellation policies vary by property. Free cancellation is typically available 48–72 hours before check-in.`,color:`#a78bfa`},{icon:k,title:`PAYMENT`,description:`UPI, credit/debit cards, and net banking accepted. Partial advance payment may be required for peak-season bookings.`,color:`#ffd700`}];function Ce(){return(0,G.jsxs)(`section`,{className:`booking-info-root`,children:[(0,G.jsx)(`style`,{children:`
        .booking-info-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .info-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .info-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .info-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 1024px) {
          .info-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .info-grid { grid-template-columns: 1fr; }
        }

        .info-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 24px; padding: 28px 22px;
          transition: all 0.35s ease;
        }
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        }

        .info-icon-circle {
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }

        .info-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 900; letter-spacing: 0.08em;
          margin: 0 0 8px;
        }

        .info-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
        }
      `}),(0,G.jsxs)(`div`,{className:`info-eyebrow`,children:[(0,G.jsx)(t,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`BOOKING ESSENTIALS`})]}),(0,G.jsx)(`h2`,{className:`info-title`,children:`BOOK YOUR STAY WITH CONFIDENCE`}),(0,G.jsx)(`div`,{className:`info-grid`,children:Se.map((e,t)=>{let n=e.icon;return(0,G.jsxs)(`div`,{className:`info-card`,style:{borderColor:`${e.color}30`},children:[(0,G.jsx)(`div`,{className:`info-icon-circle`,style:{background:`${e.color}18`},children:(0,G.jsx)(n,{size:22,color:e.color})}),(0,G.jsx)(`h3`,{className:`info-card-title`,style:{color:e.color},children:e.title}),(0,G.jsx)(`p`,{className:`info-card-desc`,children:e.description})]},t)})})]})}var we=[{id:`checkin-checkout`,question:`What are standard check-in and check-out timings for resorts?`,answer:`Standard check-in is typically 12:00 PM or 2:00 PM, and check-out is 10:00 AM or 11:00 AM. Early check-in and late check-out can be requested depending on room availability.`},{id:`ferry-transfer-sync`,question:`Are resort transfers coordinated with inter-island ferry arrivals?`,answer:`Yes, all our luxury resorts and partner hotels provide direct jetty pickup and drop-off services synchronized with your ferry schedule.`},{id:`wifi-connectivity`,question:`How is internet and cellular connectivity at island resorts?`,answer:`Most luxury resorts in Havelock, Neil, and Port Blair offer complimentary Wi-Fi and have Airtel/Jio 4G/5G mobile tower coverage.`},{id:`cancellation-policy`,question:`What is the resort booking cancellation policy?`,answer:`Cancellations made 15 days prior to arrival are eligible for full refunds minus minimal payment processing charges.`}];function Te(){let[e,t]=(0,W.useState)(null),n=n=>{t(e===n?null:n)};return(0,G.jsxs)(`section`,{className:`stay-faq-root`,children:[(0,G.jsx)(`style`,{children:`
        .stay-faq-root {
          max-width: 860px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .faq-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .faq-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .faq-item {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 20px; overflow: hidden;
          transition: border-color 0.25s ease;
        }
        .faq-item.open {
          border-color: rgba(33, 230, 193, 0.4);
        }

        .faq-question {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; cursor: pointer; gap: 16px;
          transition: background 0.2s ease;
        }
        .faq-question:hover {
          background: rgba(22, 217, 255, 0.04);
        }

        .faq-q-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 800; color: #334155;
          flex: 1; line-height: 1.4;
        }

        .faq-chevron {
          color: #F06543; transition: transform 0.3s ease; flex-shrink: 0;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s ease;
          padding: 0 24px;
        }
        .faq-item.open .faq-answer {
          max-height: 300px; padding: 0 24px 20px;
        }

        .faq-a-text {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #64748b; line-height: 1.7;
        }
      `}),(0,G.jsxs)(`div`,{className:`faq-eyebrow`,children:[(0,G.jsx)(b,{size:14,color:`#F06543`}),(0,G.jsx)(`span`,{children:`FREQUENTLY ASKED`})]}),(0,G.jsx)(`h2`,{className:`faq-title`,children:`STAYS FAQ`}),(0,G.jsx)(`div`,{className:`faq-list`,children:we.map(t=>(0,G.jsxs)(`div`,{className:`faq-item${e===t.id?` open`:``}`,children:[(0,G.jsxs)(`div`,{className:`faq-question`,onClick:()=>n(t.id),role:`button`,tabIndex:0,"aria-expanded":e===t.id,onKeyDown:e=>e.key===`Enter`&&n(t.id),children:[(0,G.jsx)(`span`,{className:`faq-q-text`,children:t.question}),(0,G.jsx)(i,{size:18,className:`faq-chevron`})]}),(0,G.jsx)(`div`,{className:`faq-answer`,children:(0,G.jsx)(`p`,{className:`faq-a-text`,children:t.answer})})]},t.id))})]})}R.registerPlugin(z);function Ee({onFindStay:e,onExploreDestinations:t}){let n=(0,W.useRef)(null);return(0,W.useEffect)(()=>{n.current&&R.fromTo(n.current,{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:`power2.out`,scrollTrigger:{trigger:n.current,start:`top 85%`}})},[]),(0,G.jsxs)(`section`,{ref:n,className:`stay-cta-root`,children:[(0,G.jsx)(`style`,{children:`
        .stay-cta-root {
          position: relative; width: 100%; min-height: 480px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 80px 24px; box-sizing: border-box;
        }

        .cta-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .cta-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.45) saturate(1.3);
        }

        .cta-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.92) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .cta-glow {
          position: absolute; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse at center, rgba(33, 230, 193, 0.15) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .cta-content {
          position: relative; z-index: 4; max-width: 720px;
          text-align: center; margin: 0 auto;
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 68px);
          font-weight: 600; color: #0B2545; line-height: 1.08;
          margin: 0 0 16px;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.6vw, 16px);
          color: #475569; line-height: 1.65;
          margin: 0 auto 34px; max-width: 600px;
        }

        .cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
        }
        .cta-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .cta-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .cta-btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: rgba(33, 230, 193, 0.1); transform: translateY(-3px);
        }
      `}),(0,G.jsx)(`div`,{className:`cta-bg`,children:(0,G.jsx)(`img`,{src:`https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman beachfront resort sunset`})}),(0,G.jsx)(`div`,{className:`cta-overlay`}),(0,G.jsx)(`div`,{className:`cta-glow`}),(0,G.jsxs)(`div`,{className:`cta-content`,children:[(0,G.jsxs)(`h2`,{className:`cta-heading`,children:[`FIND YOUR PLACE `,(0,G.jsx)(`br`,{}),(0,G.jsx)(`span`,{style:{color:`#F06543`},children:`IN PARADISE`})]}),(0,G.jsx)(`p`,{className:`cta-desc`,children:`From beachfront resorts to quiet island escapes, find a stay that becomes part of your Andaman story.`}),(0,G.jsxs)(`div`,{className:`cta-btns`,children:[(0,G.jsxs)(`button`,{onClick:e,className:`cta-btn-primary`,children:[(0,G.jsx)(`span`,{children:`FIND MY STAY`}),(0,G.jsx)(o,{size:15})]}),(0,G.jsxs)(`button`,{onClick:t,className:`cta-btn-sec`,children:[(0,G.jsx)(D,{size:15}),(0,G.jsx)(`span`,{children:`EXPLORE DESTINATIONS`})]})]})]})]})}function De(){let[e,t]=(0,W.useState)(null),[n,r]=(0,W.useState)(null);(0,W.useEffect)(()=>{document.title=`Andaman Hotels & Resorts | Places to Stay | Andaman Trails`;let e=document.querySelector(`meta[name="description"]`);e&&e.setAttribute(`content`,`Discover hotels, beachfront resorts, villas and unique stays across Port Blair, Havelock, Neil Island and the Andaman Islands.`),window.scrollTo(0,0)},[]);let i=()=>{let e=document.querySelector(`.stay-search-wrapper`);e&&e.scrollIntoView({behavior:`smooth`})},a=()=>{let e=document.querySelector(`.dest-root`);e&&e.scrollIntoView({behavior:`smooth`})},o=()=>{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})},s=e=>{t(e),setTimeout(()=>{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})},100)},c=e=>{t({destination:e}),setTimeout(()=>{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})},100)},l=e=>{t({category:e}),setTimeout(()=>{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})},100)},u=e=>{window.location.href=`/stays/${e.slug||e.id}`};return(0,G.jsxs)(`div`,{className:`stays-master-page`,children:[(0,G.jsx)(`style`,{children:`
        .stays-master-page {
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
      `}),(0,G.jsx)(K,{onFindStay:i,onExploreDestinations:a}),(0,G.jsx)(q,{onSearch:s}),(0,G.jsx)(Y,{onSelectDestination:c}),(0,G.jsx)(X,{onViewStay:u}),(0,G.jsx)(ae,{onSelectCategory:l}),(0,G.jsx)(pe,{onViewStay:u,searchFilter:e}),(0,G.jsx)(he,{onExploreExperiences:o}),(0,G.jsx)(ge,{onExploreCouple:()=>l(`Couple Escapes`)}),(0,G.jsx)(_e,{onExploreFamily:()=>l(`Family Stays`)}),(0,G.jsx)(ye,{onExplore:o}),(0,G.jsx)(xe,{activeAmenity:n,onSelectAmenity:e=>{r(e),setTimeout(()=>{let e=document.getElementById(`stays-listing-section`);e&&e.scrollIntoView({behavior:`smooth`})},100)}}),(0,G.jsx)(Ce,{}),(0,G.jsx)(Te,{}),(0,G.jsx)(Ee,{onFindStay:i,onExploreDestinations:a}),(0,G.jsx)(U,{})]})}export{De as default};