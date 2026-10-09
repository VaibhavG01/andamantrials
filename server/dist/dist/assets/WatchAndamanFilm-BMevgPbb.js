import{r as e}from"./rolldown-runtime-hePW80VL.js";import{An as t,Jt as n,Tn as r,Vn as i,Zn as a,Zt as o,at as s,j as c,ln as l,m as u,mn as d,n as f,wn as p}from"./lucide-vendor-CBhgx3NO.js";import{v as m}from"./three-vendor-Md08yeGZ.js";import{t as h}from"./apiClient-CRw3-6FB.js";var g=e(a(),1),_=m(),v=[{id:`ch1`,time:`0:15`,title:`Aerial Over Havelock`,location:`Radhanagar Beach`,thumb:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75`,videoId:`dQw4w9WgXcQ`},{id:`ch2`,time:`1:02`,title:`Coral Reef Scuba Dive`,location:`Elephant Beach Reef`,thumb:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=75`,videoId:`dQw4w9WgXcQ`},{id:`ch3`,time:`2:15`,title:`Bioluminescent Kayaking`,location:`Havelock Mangrove Creek`,thumb:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=500&q=75`,videoId:`dQw4w9WgXcQ`},{id:`ch4`,time:`3:10`,title:`Sunset Cruise Horizons`,location:`Port Blair Bay`,thumb:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=75`,videoId:`dQw4w9WgXcQ`}];function y(){let[e,a]=(0,g.useState)(!1),[m,y]=(0,g.useState)(0),[b,x]=(0,g.useState)([]),S=g.useRef(null),C=e=>{let t=S.current;t&&(e===`left`?t.scrollBy({left:-300,behavior:`smooth`}):t.scrollBy({left:300,behavior:`smooth`}))};(0,g.useEffect)(()=>{(async()=>{try{let e=await h(`/film-chapters`);e&&e.data&&e.data.length>0&&x(e.data)}catch(e){console.warn(`Failed to load dynamic film chapters:`,e)}})()},[]);let w=(b.length>0?b:v).map((e,t)=>({id:e.id,chapterId:e.chapterId||`ch${t+1}`,time:e.time||`Scene ${t+1}`,title:e.title||`Andaman Highlight ${t+1}`,location:e.location||`Tropical Bay of Bengal`,thumb:e.thumb,type:e.type||`4K ULTRA HD`,description:e.description||`Immerse yourself in crystal turquoise waters, untouched white sand beaches, coral marine life, and golden sunsets captured in breathtaking high-definition film.`,videoId:e.videoId||(e=>{if(!e)return`dQw4w9WgXcQ`;let t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&t[2].length===11?t[2]:e})(e.videoUrl)}));return(0,g.useEffect)(()=>{let t=e=>{e.key===`Escape`&&a(!1)};return e?(window.addEventListener(`keydown`,t),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{window.removeEventListener(`keydown`,t),document.body.style.overflow=``}},[e]),(0,_.jsxs)(`section`,{id:`watch-film-section`,className:`film-section`,children:[(0,_.jsx)(`style`,{children:`
        .film-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #334155;
          padding: 80px 0 96px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        /* Ambient Glow & Waves */
        .film-glow-center {
          position: absolute;
          top: 30%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 500px;
          background: radial-gradient(ellipse at center, rgba(13, 148, 136, 0.06) 0%, rgba(0, 45, 98, 0.03) 45%, transparent 70%);
          pointer-events: none;
        }

        .film-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .film-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 44px;
        }
        .film-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(13, 148, 136, 0.25);
          padding: 6px 16px;
          border-radius: 30px;
          text-transform: uppercase;
          margin-bottom: 14px;
          backdrop-filter: blur(8px);
        }
        .film-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .film-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Hero Video Showcase Card */
        .film-hero-card {
          position: relative;
          width: 100%;
          height: clamp(360px, 50vw, 580px);
          border-radius: 28px;
          overflow: hidden;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65), 0 0 40px rgba(22, 217, 255, 0.08);
          background: #f8fafc;
          cursor: pointer;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .film-hero-card:hover {
          transform: translateY(-4px);
          border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.75), 0 0 50px rgba(22, 217, 255, 0.15);
        }

        .film-poster {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-hero-card:hover .film-poster {
          transform: scale(1.04);
        }

        .film-poster-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 45, 98, 0.4) 0%, rgba(0, 45, 98, 0.2) 50%, rgba(0, 45, 98, 0.8) 100%);
        }

        /* Floating Spec Pills Top Left */
        .film-top-tags {
          position: absolute;
          top: 24px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
        }
        .film-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: rgba(8, 27, 51, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .film-tag-pill.cyan {
          color: #2dd4bf;
          border-color: rgba(45, 212, 191, 0.5);
          background: rgba(8, 27, 51, 0.85);
        }
        .film-tag-pill.gold {
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.5);
          background: rgba(8, 27, 51, 0.85);
        }

        /* Center Play Button with Ripple Animation */
        .film-play-trigger {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .film-play-btn-circle {
          position: relative;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 40px rgba(240, 101, 67, 0.5), 0 0 0 12px rgba(240, 101, 67, 0.2);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-hero-card:hover .film-play-btn-circle {
          transform: scale(1.12);
          box-shadow: 0 16px 50px rgba(240, 101, 67, 0.7), 0 0 0 18px rgba(240, 101, 67, 0.3);
        }
        .film-play-btn-circle::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1.5px solid rgba(45, 212, 191, 0.5);
          animation: pulseRing 2.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        @keyframes pulseRing {
          0% { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .film-play-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          background: rgba(8, 27, 51, 0.85);
          backdrop-filter: blur(8px);
          padding: 6px 18px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* Bottom Info Overlay inside Hero Card */
        .film-hero-bottom-info {
          position: absolute;
          bottom: 28px;
          left: 28px;
          right: 28px;
          z-index: 3;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .film-film-title-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
          margin-bottom: 6px;
          line-height: 1.1;
        }
        .film-film-location-row {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #2dd4bf;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          gap: 6px;
        }



        /* Chapter Navigation Header */
        .film-chapters-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .film-chapters-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #0B2545;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Chapter Cards Grid replaced with slider */
        .film-chapters-scroll-container {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 10px 4px;
        }
        .film-chapters-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .film-slider-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .film-slider-arrow-btn:hover {
          background: #002d62;
          border-color: #002d62;
          color: #ffffff;
        }

        .film-chapter-card {
          flex: 0 0 280px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.05);
        }
        .film-chapter-card:hover, .film-chapter-card.active {
          border-color: #F06543;
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0, 45, 98, 0.12);
          background: #ffffff;
        }
        .film-chapter-thumb-box {
          position: relative;
          height: 140px;
          overflow: hidden;
        }
        .film-chapter-thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .film-chapter-card:hover .film-chapter-thumb-box img {
          transform: scale(1.08);
        }
        .film-chapter-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 45, 98, 0.4) 0%, transparent 60%);
        }
        .film-time-pill {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .film-chapter-play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #F06543;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.4);
        }
        .film-chapter-card:hover .film-chapter-play-icon {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.08);
        }

        .film-chapter-body {
          padding: 14px 16px;
        }
        .film-chapter-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 4px;
        }
        .film-chapter-loc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #F06543;
          display: flex;
          align-items: center;
          gap: 4px;
        }  color: #0B2545;
          margin-bottom: 4px;
        }
        .film-chapter-loc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #F06543;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Fullscreen Video Modal */
        .film-modal {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background: #ffffff;
          backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.3s ease;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .film-modal-content {
          position: relative;
          width: 90vw;
          max-width: 1100px;
          aspect-ratio: 16/9;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 32px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(22, 217, 255, 0.15);
          background: #000;
        }
        .film-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(22, 217, 255, 0.15);
          border: 1px solid rgba(22, 217, 255, 0.35);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.25s ease;
        }
        .film-close-btn:hover {
          background: #F06543;
          color: #ffffff;
          transform: rotate(90deg);
        }
      `}),(0,_.jsx)(`div`,{className:`film-glow-center`}),(0,_.jsxs)(`div`,{className:`film-container`,children:[(0,_.jsxs)(`div`,{className:`film-header`,children:[(0,_.jsxs)(`div`,{className:`film-badge`,children:[(0,_.jsx)(n,{size:13,color:`#F06543`}),(0,_.jsx)(`span`,{children:`CINEMATIC SHOWCASE`})]}),(0,_.jsx)(`h2`,{className:`film-title`,children:`Experience Andaman in 4K`}),(0,_.jsx)(`p`,{className:`film-desc`,children:w[m]?.description})]}),(0,_.jsxs)(`div`,{className:`film-hero-card`,onClick:()=>a(!0),role:`button`,"aria-label":`Play Andaman Film`,children:[(0,_.jsx)(`img`,{src:w[m]?.thumb||`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90`,alt:`Andaman Film Cinematic Cover`,className:`film-poster`}),(0,_.jsx)(`div`,{className:`film-poster-overlay`}),(0,_.jsxs)(`div`,{className:`film-top-tags`,children:[(0,_.jsxs)(`span`,{className:`film-tag-pill cyan`,children:[(0,_.jsx)(u,{size:12}),w[m]?.type]}),(0,_.jsxs)(`span`,{className:`film-tag-pill gold`,children:[(0,_.jsx)(i,{size:12}),`OFFICIAL FILM`]}),(0,_.jsxs)(`span`,{className:`film-tag-pill`,children:[(0,_.jsx)(d,{size:12}),w[m]?.time]})]}),(0,_.jsxs)(`div`,{className:`film-play-trigger`,children:[(0,_.jsx)(`div`,{className:`film-play-btn-circle`,children:(0,_.jsx)(s,{size:36,style:{marginLeft:`4px`},fill:`#0B2545`})}),(0,_.jsx)(`span`,{className:`film-play-text`,children:`WATCH FULL FILM`})]}),(0,_.jsxs)(`div`,{className:`film-hero-bottom-info`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`film-film-title-sub`,children:w[m]?.title}),(0,_.jsxs)(`div`,{className:`film-film-location-row`,children:[(0,_.jsx)(l,{size:13,color:`#F06543`}),(0,_.jsx)(`span`,{children:`Havelock • Neil • Port Blair • Baratang`})]})]}),(0,_.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:700,color:`#64748b`,background:`#f8fafc`,padding:`6px 14px`,borderRadius:20,border:`1px solid #e2e8f0`,backdropFilter:`blur(8px)`},children:[(0,_.jsx)(o,{size:12,color:`#F06543`}),(0,_.jsx)(`span`,{children:`250K+ Views`})]})})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`film-chapters-header`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`film-chapters-title`,children:[(0,_.jsx)(c,{size:14,color:`#F06543`}),(0,_.jsx)(`span`,{children:`CHAPTER HIGHLIGHTS`})]}),(0,_.jsx)(`span`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#64748b`,marginTop:4,display:`block`},children:`Select a chapter to jump to scene`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,_.jsx)(`button`,{onClick:()=>C(`left`),className:`film-slider-arrow-btn`,"aria-label":`Scroll Left`,children:(0,_.jsx)(r,{size:16})}),(0,_.jsx)(`button`,{onClick:()=>C(`right`),className:`film-slider-arrow-btn`,"aria-label":`Scroll Right`,children:(0,_.jsx)(p,{size:16})})]})]}),(0,_.jsx)(`div`,{className:`film-chapters-slider-wrapper`,children:(0,_.jsx)(`div`,{className:`film-chapters-scroll-container`,ref:S,children:w.map((e,n)=>(0,_.jsxs)(`div`,{className:`film-chapter-card${m===n?` active`:``}`,onClick:()=>{y(n),a(!0)},children:[(0,_.jsxs)(`div`,{className:`film-chapter-thumb-box`,children:[(0,_.jsx)(`img`,{src:e.thumb,alt:e.title,loading:`lazy`}),(0,_.jsx)(`div`,{className:`film-chapter-overlay`}),(0,_.jsxs)(`span`,{className:`film-time-pill`,children:[(0,_.jsx)(d,{size:10,color:`#F06543`}),e.time]}),(0,_.jsx)(`div`,{className:`film-chapter-play-icon`,children:(0,_.jsx)(s,{size:16,fill:`#0B2545`,style:{marginLeft:`2px`}})})]}),(0,_.jsxs)(`div`,{className:`film-chapter-body`,children:[(0,_.jsx)(`div`,{className:`film-chapter-title`,children:e.title}),(0,_.jsxs)(`div`,{className:`film-chapter-loc`,children:[(0,_.jsx)(t,{size:11}),(0,_.jsx)(`span`,{children:e.location})]})]})]},e.chapterId||e.id))})})]})]}),e&&(0,_.jsxs)(`div`,{className:`film-modal`,onClick:()=>a(!1),children:[(0,_.jsx)(`button`,{className:`film-close-btn`,onClick:()=>a(!1),"aria-label":`Close video`,children:(0,_.jsx)(f,{size:22})}),(0,_.jsx)(`div`,{className:`film-modal-content`,onClick:e=>e.stopPropagation(),children:(0,_.jsx)(`iframe`,{width:`100%`,height:`100%`,src:`https://www.youtube-nocookie.com/embed/${w[m]?.videoId||`dQw4w9WgXcQ`}?autoplay=1&rel=0&modestbranding=1`,title:`Andaman Islands Official Cinematic Film`,frameBorder:`0`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,style:{display:`block`,borderRadius:24}})})]})]})}export{y as default};