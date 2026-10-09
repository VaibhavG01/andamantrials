import{r as e}from"./rolldown-runtime-hePW80VL.js";import{C as t,Gn as n,O as r,Tn as i,Xn as a,Zn as o,Zt as s,a as c,j as l,ln as u,mn as d,pt as f,wn as p,xt as m}from"./lucide-vendor-CBhgx3NO.js";import{v as h}from"./three-vendor-Md08yeGZ.js";import{t as g}from"./apiClient-BBDRQO3K.js";import{n as _}from"./gsap-vendor-Cgjl6ODA.js";import{c as v,l as y}from"./index-CLpzZzGy.js";var b=e(o(),1),x=h();function S({experience:e,onClose:t,onAddToTrip:n}){let r=(0,b.useRef)(null),i=(0,b.useRef)(null),a=e=>e.slug?e.slug.startsWith(`/`)?e.slug:`/activity-details?id=${e.slug}`:`/activities`;(0,b.useEffect)(()=>{e&&r.current&&i.current&&(document.body.style.overflow=`hidden`,_.to(i.current,{opacity:1,duration:.3,ease:`power2.out`}),_.fromTo(r.current,{opacity:0,y:30,scale:.95},{opacity:1,y:0,scale:1,duration:.35,ease:`power3.out`,delay:.05}))},[e]);let o=()=>{if(!r.current||!i.current){t();return}_.to(r.current,{opacity:0,y:20,scale:.96,duration:.2,ease:`power2.in`}),_.to(i.current,{opacity:0,duration:.25,ease:`power2.in`,onComplete:()=>{document.body.style.overflow=``,t()}})};return e?(0,x.jsx)(`div`,{ref:i,style:{position:`fixed`,inset:0,zIndex:9998,background:`rgba(2, 8, 20, 0.85)`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:20,opacity:0},onClick:e=>e.target===i.current&&o(),children:(0,x.jsxs)(`div`,{ref:r,className:`glass`,style:{background:`rgba(5, 18, 40, 0.94)`,border:`1px solid rgba(0, 201, 212, 0.28)`,borderRadius:24,maxWidth:640,width:`100%`,maxHeight:`90vh`,overflowY:`auto`,boxShadow:`0 24px 80px rgba(0,0,0,0.8), 0 0 40px rgba(0,201,212,0.15)`,position:`relative`,opacity:0,color:`#c8dff0`},children:[(0,x.jsx)(`button`,{onClick:o,style:{position:`absolute`,top:16,right:16,zIndex:10,width:34,height:34,borderRadius:`50%`,background:`rgba(5,18,40,0.7)`,border:`1px solid #e2e8f0`,color:`#c8dff0`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(y,{size:16})}),(0,x.jsxs)(`div`,{style:{position:`relative`,height:240,overflow:`hidden`},children:[(0,x.jsx)(`img`,{src:e.image,alt:e.name,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,x.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(to top, rgba(5,18,40,0.95) 0%, transparent 60%)`}}),(0,x.jsxs)(`div`,{style:{position:`absolute`,bottom:16,left:20,right:20},children:[(0,x.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,color:`#00b4d8`,fontWeight:700,letterSpacing:`0.15em`},children:[`📍 `,e.location]}),(0,x.jsx)(`h3`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:28,fontWeight:600,color:`#0B2545`,marginTop:2},children:e.name})]})]}),(0,x.jsxs)(`div`,{style:{padding:`24px`},children:[(0,x.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#c8dff0`,lineHeight:1.6,marginBottom:20},children:e.description}),(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:10,marginBottom:20},children:[(0,x.jsxs)(`div`,{style:{background:`#e2e8f0`,border:`1px solid rgba(0,201,212,0.15)`,borderRadius:12,padding:10,textAlign:`center`},children:[(0,x.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,color:`#64748b`,letterSpacing:`0.1em`},children:`DURATION`}),(0,x.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,color:`#334155`,fontWeight:700,marginTop:2},children:e.duration})]}),(0,x.jsxs)(`div`,{style:{background:`#e2e8f0`,border:`1px solid rgba(0,201,212,0.15)`,borderRadius:12,padding:10,textAlign:`center`},children:[(0,x.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,color:`#64748b`,letterSpacing:`0.1em`},children:`DIFFICULTY`}),(0,x.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,color:`#00b4d8`,fontWeight:700,marginTop:2},children:e.difficulty})]}),(0,x.jsxs)(`div`,{style:{background:`#e2e8f0`,border:`1px solid rgba(0,201,212,0.15)`,borderRadius:12,padding:10,textAlign:`center`},children:[(0,x.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,color:`#64748b`,letterSpacing:`0.1em`},children:`PRICE`}),(0,x.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,color:`#F06543`,fontWeight:900,marginTop:2},children:[`₹`,e.price]})]})]}),(0,x.jsxs)(`div`,{style:{marginBottom:24},children:[(0,x.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:700,color:`#F06543`,letterSpacing:`0.12em`,marginBottom:8},children:`WHAT IS INCLUDED:`}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:6},children:e.included?.map((e,t)=>(0,x.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11.5,color:`#a0c0d8`,display:`flex`,alignItems:`center`,gap:6},children:[(0,x.jsx)(`span`,{style:{color:`#00b4d8`},children:`✓`}),` `,e]},t))})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,x.jsx)(`button`,{onClick:()=>{o(),n?.(e)},style:{flex:1,background:`#e2e8f0`,border:`1px solid rgba(0, 201, 212, 0.3)`,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11.5,fontWeight:700,padding:12,borderRadius:12,cursor:`pointer`,letterSpacing:`0.06em`},children:`ADD TO MY TRIP +`}),(0,x.jsxs)(`a`,{href:a(e),onClick:t=>{t.preventDefault(),o(),window.history.pushState({},``,a(e)),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},style:{flex:1,background:`linear-gradient(135deg, #F06543, #00b4d8)`,border:`none`,color:`#050d1a`,textDecoration:`none`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11.5,fontWeight:800,padding:12,borderRadius:12,cursor:`pointer`,letterSpacing:`0.06em`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:6},children:[(0,x.jsx)(`span`,{children:`EXPLORE EXPERIENCE`}),(0,x.jsx)(v,{size:14})]})]})]})]})}):null}var C={"Underwater Adventure":c,"Coral Reef Walking":u,"Shallow Water Snorkeling":s,"Night Sea Adventure":f,"Marine Park Cruise":a,"Extreme Sport Fishing":t};function w(){let[e,t]=(0,b.useState)(null),[a,o]=(0,b.useState)([]),[s,u]=(0,b.useState)(!0),f=(0,b.useRef)(null);(0,b.useEffect)(()=>{(async()=>{u(!0);try{let e=await g(`/activities`);if(e&&e.data&&Array.isArray(e.data)){let t=e.data.map(e=>{let t=[];try{t=Array.isArray(e.inclusions)?e.inclusions:typeof e.inclusions==`string`?JSON.parse(e.inclusions):[]}catch{t=[]}let n=e.locations&&e.locations.length>0?e.locations.map(e=>e.locationName.replace(/ Island/gi,``).replace(/ Beach/gi,``)).join(` • `).toUpperCase():e.location?e.location.toUpperCase().replace(/\s*&\s*/g,` • `):`PORT BLAIR • HAVELOCK`;return{...e,location:n,description:e.overview||e.tagline||``,included:t.length>0?t:[`Certified Instructor Guidance`,`Safety vests & gear`,`Port permit included`],difficulty:e.category?.includes(`Extreme`)?`Challenging`:e.category?.includes(`Night`)?`Moderate`:`Easy`,slug:`/activity-details?id=${e.slug||e.id}`,badge:e.featured?`MUST TRY`:e.category?.toUpperCase()||`ADVENTURE`}});o(t)}}catch(e){console.error(`Failed to load activities from DB:`,e)}finally{u(!1)}})()},[]);let h=e=>{if(e==null)return``;let t=Number(typeof e==`string`?e.replace(/,/g,``):e);return isNaN(t)?e:t.toLocaleString(`en-IN`)};return(0,x.jsxs)(`section`,{id:`experiences-section`,className:`exp-explorer-section`,children:[(0,x.jsx)(`style`,{children:`
        .exp-explorer-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #1e293b;
          padding: 60px 0 80px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .exp-ambient-glow {
          position: absolute;
          top: 40%;
          left: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, rgba(248, 250, 252, 0) 70%);
          pointer-events: none;
        }

        .exp-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header styling */
        .exp-header-wrapper {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 32px;
        }

        .exp-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #f06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .exp-header-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 900;
          color: #0b2545;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        /* Header Actions & Arrows */
        .exp-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .exp-slider-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #ebded2;
          color: #0b2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.06);
        }

        .exp-slider-arrow:hover {
          background: #0b2545;
          color: #ffffff;
          border-color: #0b2545;
          box-shadow: 0 6px 18px rgba(11, 37, 69, 0.25);
          transform: scale(1.05);
        }

        .exp-viewall-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          background: #0b2545;
          border: none;
          padding: 9px 18px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.2);
        }

        .exp-viewall-btn:hover {
          background: #f06543;
        }

        /* Horizontal Carousel Slider Track */
        .exp-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .exp-cards-slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 8px 4px 20px 4px;
        }

        .exp-cards-slider::-webkit-scrollbar {
          display: none;
        }

        .exp-card-item {
          flex: 0 0 calc(33.333% - 14px);
          min-width: 280px;
          scroll-snap-align: start;
        }

        @media (max-width: 1024px) {
          .exp-card-item {
            flex: 0 0 calc(50% - 10px);
            min-width: 270px;
          }
        }

        @media (max-width: 640px) {
          .exp-card-item {
            flex: 0 0 88%;
            min-width: 250px;
          }
        }

        /* Activity Glass Card */
        .exp-card {
          height: 100%;
          background: #ffffff;
          border: 1.5px solid #ebded2;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.06);
        }

        .exp-card:hover {
          transform: translateY(-6px);
          border-color: #f06543;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.12), 0 0 16px rgba(240, 101, 67, 0.2);
        }

        .exp-img-box {
          position: relative;
          height: 170px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 14px;
          background: #f1f5f9;
        }

        .exp-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .exp-card:hover .exp-img-box img {
          transform: scale(1.08);
        }

        .exp-badge-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b4a, #f06543);
          padding: 4px 10px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
          text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        }

        .exp-duration-pill {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #0b2545;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid #ebded2;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        .exp-location-line {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #f06543;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
        }

        .exp-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16.5px;
          font-weight: 900;
          color: #0b2545;
          line-height: 1.3;
          margin-bottom: 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 43px;
        }

        .exp-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #2d3e50;
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 38px;
        }

        .exp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .exp-price-curr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0b2545;
          line-height: 1;
        }

        .exp-price-old {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-left: 6px;
          font-weight: 600;
        }

        .exp-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          background: #0b2545;
          border: none;
          padding: 8px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.2);
        }

        .exp-card:hover .exp-action-btn {
          background: #f06543;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.4);
        }
      `}),(0,x.jsx)(`div`,{className:`exp-ambient-glow`}),(0,x.jsxs)(`div`,{className:`exp-container`,children:[(0,x.jsxs)(`div`,{className:`exp-header-wrapper`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`exp-header-sub`,children:[(0,x.jsx)(l,{size:13,color:`#f06543`}),(0,x.jsx)(`span`,{children:`ACTIVITIES & EXPERIENCES`})]}),(0,x.jsx)(`h2`,{className:`exp-header-title`,children:`Unforgettable Island Adventures`})]}),(0,x.jsxs)(`div`,{className:`exp-header-actions`,children:[(0,x.jsx)(`button`,{onClick:()=>{f.current&&f.current.scrollBy({left:-320,behavior:`smooth`})},className:`exp-slider-arrow`,"aria-label":`Previous Activity`,children:(0,x.jsx)(i,{size:20})}),(0,x.jsx)(`button`,{onClick:()=>{f.current&&f.current.scrollBy({left:320,behavior:`smooth`})},className:`exp-slider-arrow`,"aria-label":`Next Activity`,children:(0,x.jsx)(p,{size:20})}),(0,x.jsxs)(`a`,{href:`/activities`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/activities`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},className:`exp-viewall-btn`,style:{marginLeft:8},children:[(0,x.jsx)(`span`,{children:`VIEW ALL`}),(0,x.jsx)(n,{size:13})]})]})]}),(0,x.jsx)(`div`,{className:`exp-slider-container`,children:(0,x.jsx)(`div`,{ref:f,className:`exp-cards-slider`,children:s?[1,2,3,4].map(e=>(0,x.jsx)(`div`,{className:`exp-card-item`,children:(0,x.jsxs)(`div`,{className:`exp-card animate-pulse`,style:{minHeight:380,background:`#ffffff`},children:[(0,x.jsx)(`div`,{style:{height:170,background:`#e2e8f0`,borderRadius:16,marginBottom:14}}),(0,x.jsx)(`div`,{style:{height:16,background:`#e2e8f0`,borderRadius:6,width:`40%`,marginBottom:10}}),(0,x.jsx)(`div`,{style:{height:20,background:`#cbd5e1`,borderRadius:6,width:`85%`,marginBottom:10}}),(0,x.jsx)(`div`,{style:{height:14,background:`#f1f5f9`,borderRadius:6,width:`95%`,marginBottom:6}}),(0,x.jsx)(`div`,{style:{height:14,background:`#f1f5f9`,borderRadius:6,width:`70%`,marginBottom:20}}),(0,x.jsx)(`div`,{style:{height:40,background:`#e2e8f0`,borderRadius:12,marginTop:`auto`}})]})},e)):a.map((e,i)=>{let a=e.icon||C[e.category]||c;return(0,x.jsx)(`div`,{className:`exp-card-item`,children:(0,x.jsxs)(`div`,{className:`exp-card`,onClick:()=>t(e),children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`exp-img-box`,children:[(0,x.jsx)(`img`,{src:e.image||e.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,alt:e.name,loading:`lazy`}),(0,x.jsx)(`span`,{className:`exp-badge-tag`,style:{background:`linear-gradient(135deg, #FF6B4A, #F06543)`},children:e.badge||`ADVENTURE`}),(0,x.jsxs)(`span`,{className:`exp-duration-pill`,children:[(0,x.jsx)(d,{size:11,color:`#F06543`}),(0,x.jsx)(`span`,{children:e.duration||`45 Mins / 1 Hr`})]})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:4},children:[(0,x.jsxs)(`div`,{className:`exp-location-line`,children:[(0,x.jsx)(m,{size:11,color:`#F06543`}),(0,x.jsx)(`span`,{children:e.location})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:3,fontSize:12.5,fontWeight:800,color:`#f0c060`,fontFamily:`'Space Grotesk', sans-serif`},children:[(0,x.jsx)(r,{size:10,fill:`#f0c060`,stroke:`#f0c060`}),(0,x.jsx)(`span`,{children:Number(e.rating||5).toFixed(2)})]})]}),(0,x.jsx)(`h4`,{className:`exp-title`,children:e.name}),(0,x.jsx)(`p`,{className:`exp-tagline`,children:e.tagline||e.overview||e.description})]}),(0,x.jsxs)(`div`,{className:`exp-footer`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,color:`#64748b`,display:`block`,textTransform:`uppercase`,letterSpacing:`0.05em`,fontWeight:800},children:`STARTING FROM`}),(0,x.jsx)(`div`,{children:(0,x.jsxs)(`span`,{className:`exp-price-curr`,children:[`₹`,h(e.price)]})})]}),(0,x.jsxs)(`div`,{className:`exp-action-btn`,children:[(0,x.jsx)(a,{size:12}),(0,x.jsx)(`span`,{children:`EXPLORE`}),(0,x.jsx)(n,{size:10})]})]})]})},`${e.id||`act`}-${i}`)})})})]}),e&&(0,x.jsx)(S,{experience:e,onClose:()=>t(null)})]})}export{w as default};