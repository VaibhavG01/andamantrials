import{r as e}from"./rolldown-runtime-hePW80VL.js";import{Gn as t,K as n,Lt as r,Ot as i,R as a,Zn as o,ft as s,j as c,ln as l,vt as u,xt as d}from"./lucide-vendor-CBhgx3NO.js";import{v as f}from"./three-vendor-Md08yeGZ.js";import{u as p}from"./index-SH5YgE5J.js";import{t as m}from"./FooterBottom-uRtAk0HF.js";var h=e(o(),1),g=f();function _(){let[e,o]=(0,h.useState)(``);return(0,g.jsxs)(`div`,{className:`not-found-page-root`,children:[(0,g.jsx)(`style`,{children:`
        .not-found-page-root {
          min-height: 100vh;
          background: #06182E;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }

        .not-found-hero {
          position: relative;
          padding: 140px 24px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 2;
        }

        .ambient-glow-1 {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(240, 101, 67, 0.2) 0%, rgba(11, 37, 69, 0.05) 60%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .ambient-glow-2 {
          position: absolute;
          bottom: 20%;
          right: 15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(22, 217, 255, 0.12) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .grid-pattern-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* 3D Animated Compass */
        .compass-box-3d {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 24px;
        }

        .compass-ring-outer {
          position: absolute;
          inset: 0;
          border: 2px dashed rgba(240, 101, 67, 0.4);
          border-radius: 50%;
          animation: spinSlow 20s linear infinite;
        }

        .compass-ring-inner {
          position: absolute;
          inset: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: spinReverse 14s linear infinite;
        }

        .compass-center-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F06543;
          animation: floatNeedle 3s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes floatNeedle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.08) rotate(15deg); }
        }

        .status-badge-lost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(240, 101, 67, 0.12);
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 6px 16px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #FF8A65;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .glitch-404-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(80px, 14vw, 150px);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          background: linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 10px;
          text-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        }

        .title-lost {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 14px;
        }

        .title-lost span {
          color: #F06543;
        }

        .desc-lost {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 17px);
          color: #94A3B8;
          max-width: 620px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        /* 404 In-Page Search Engine */
        .not-found-search-wrap {
          max-width: 580px;
          width: 100%;
          margin: 0 auto 40px;
          position: relative;
        }

        .search-box-form {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(16px);
          border-radius: 18px;
          padding: 6px 8px 6px 18px;
          transition: all 0.3s ease;
        }

        .search-box-form:focus-within {
          background: rgba(255, 255, 255, 0.14);
          border-color: #F06543;
          box-shadow: 0 0 0 4px rgba(240, 101, 67, 0.2);
        }

        .search-input-field {
          flex: 1;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #ffffff;
          outline: none;
        }

        .search-input-field::placeholder {
          color: #64748B;
        }

        .btn-search-404 {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-search-404:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.4);
        }

        /* Primary Action Buttons */
        .action-btns-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 50px;
        }

        .btn-primary-home {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 900;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.35);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .btn-primary-home:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(240, 101, 67, 0.5);
        }

        .btn-secondary-action {
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
          padding: 13px 24px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .btn-secondary-action:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.35);
          transform: translateY(-2px);
        }

        .btn-whatsapp-sos {
          background: rgba(37, 211, 102, 0.15);
          border: 1.5px solid rgba(37, 211, 102, 0.4);
          color: #25D366;
          padding: 13px 24px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .btn-whatsapp-sos:hover {
          background: rgba(37, 211, 102, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
        }

        /* Popular Portals Grid */
        .portals-card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1080px;
          width: 100%;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .portals-card-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 500px) {
          .portals-card-grid { grid-template-columns: 1fr; }
        }

        .portal-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 22px 18px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-decoration: none;
        }

        .portal-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #F06543;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .portal-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(240, 101, 67, 0.15);
          color: #FF8A65;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portal-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .portal-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #94A3B8;
          line-height: 1.4;
          margin: 0;
        }
      `}),(0,g.jsx)(`div`,{className:`ambient-glow-1`}),(0,g.jsx)(`div`,{className:`ambient-glow-2`}),(0,g.jsx)(`div`,{className:`grid-pattern-overlay`}),(0,g.jsxs)(`div`,{className:`not-found-hero`,children:[(0,g.jsxs)(`div`,{className:`compass-box-3d`,children:[(0,g.jsx)(`div`,{className:`compass-ring-outer`}),(0,g.jsx)(`div`,{className:`compass-ring-inner`}),(0,g.jsx)(`div`,{className:`compass-center-icon`,children:(0,g.jsx)(l,{size:56})})]}),(0,g.jsxs)(`div`,{className:`status-badge-lost`,children:[(0,g.jsx)(i,{size:14}),(0,g.jsx)(`span`,{children:`404 • NAVIGATION ERROR`})]}),(0,g.jsx)(`div`,{className:`glitch-404-text`,children:`404`}),(0,g.jsxs)(`h1`,{className:`title-lost`,children:[`Lost in the `,(0,g.jsx)(`span`,{children:`Andaman Sea`})]}),(0,g.jsx)(`p`,{className:`desc-lost`,children:`The tropical island or coordinate you're searching for seems to have drifted beyond our charts. Let our island navigation guide you back to safe shores.`}),(0,g.jsx)(`div`,{className:`not-found-search-wrap`,children:(0,g.jsxs)(`form`,{onSubmit:t=>{if(t.preventDefault(),!e.trim())return;let n=encodeURIComponent(e.trim());window.history.pushState({},``,`/packages?search=${n}`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},className:`search-box-form`,children:[(0,g.jsx)(n,{size:18,color:`#64748B`,style:{marginRight:10,flexShrink:0}}),(0,g.jsx)(`input`,{type:`text`,value:e,onChange:e=>o(e.target.value),placeholder:`Search for Havelock, Ferries, Scuba, Packages...`,className:`search-input-field`}),(0,g.jsxs)(`button`,{type:`submit`,className:`btn-search-404`,children:[(0,g.jsx)(`span`,{children:`Search`}),(0,g.jsx)(t,{size:14})]})]})}),(0,g.jsxs)(`div`,{className:`action-btns-row`,children:[(0,g.jsxs)(p,{to:`/`,className:`btn-primary-home`,children:[(0,g.jsx)(r,{size:16}),(0,g.jsx)(`span`,{children:`Return to Island Home`})]}),(0,g.jsxs)(p,{to:`/ferries`,className:`btn-secondary-action`,children:[(0,g.jsx)(a,{size:16,color:`#FF8A65`}),(0,g.jsx)(`span`,{children:`Ferries & Cruises`})]}),(0,g.jsxs)(`a`,{href:`https://wa.me/919137835433?text=Hi%20Andaman%20Trails,%20I%20got%20lost%20on%20the%20website%20and%20need%20help%20planning%20my%20trip.`,target:`_blank`,rel:`noopener noreferrer`,className:`btn-whatsapp-sos`,children:[(0,g.jsx)(u,{size:16}),(0,g.jsx)(`span`,{children:`24/7 Island SOS Desk`})]})]}),(0,g.jsxs)(`div`,{className:`portals-card-grid`,children:[(0,g.jsxs)(p,{to:`/packages`,className:`portal-item`,children:[(0,g.jsx)(`div`,{className:`portal-icon-wrap`,children:(0,g.jsx)(s,{size:20})}),(0,g.jsx)(`h3`,{className:`portal-name`,children:`Holiday Packages`}),(0,g.jsx)(`p`,{className:`portal-desc`,children:`Curated honeymoon, family & adventure itineraries.`})]}),(0,g.jsxs)(p,{to:`/destinations`,className:`portal-item`,children:[(0,g.jsx)(`div`,{className:`portal-icon-wrap`,style:{background:`rgba(2, 132, 199, 0.15)`,color:`#38BDF8`},children:(0,g.jsx)(d,{size:20})}),(0,g.jsx)(`h3`,{className:`portal-name`,children:`Island Destinations`}),(0,g.jsx)(`p`,{className:`portal-desc`,children:`Havelock, Neil, Port Blair, Baratang & Diglipur.`})]}),(0,g.jsxs)(p,{to:`/ferries`,className:`portal-item`,children:[(0,g.jsx)(`div`,{className:`portal-icon-wrap`,style:{background:`rgba(16, 185, 129, 0.15)`,color:`#34D399`},children:(0,g.jsx)(a,{size:20})}),(0,g.jsx)(`h3`,{className:`portal-name`,children:`Ferries & Catamarans`}),(0,g.jsx)(`p`,{className:`portal-desc`,children:`Makruzz, Nautika & Green Ocean live slots.`})]}),(0,g.jsxs)(p,{to:`/activities`,className:`portal-item`,children:[(0,g.jsx)(`div`,{className:`portal-icon-wrap`,style:{background:`rgba(168, 85, 247, 0.15)`,color:`#C084FC`},children:(0,g.jsx)(c,{size:20})}),(0,g.jsx)(`h3`,{className:`portal-name`,children:`Scuba & Water Sports`}),(0,g.jsx)(`p`,{className:`portal-desc`,children:`PADI diving, sea walking & night kayaking.`})]})]})]}),(0,g.jsx)(m,{})]})}export{_ as default};