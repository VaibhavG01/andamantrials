import{r as e}from"./rolldown-runtime-hePW80VL.js";import{Lt as t,R as n,Zn as r,bn as i,jn as a,mn as o,un as s,wn as c}from"./lucide-vendor-CBhgx3NO.js";import{v as l}from"./three-vendor-Md08yeGZ.js";import{t as u}from"./apiClient-BBDRQO3K.js";import{n as d,t as f}from"./gsap-vendor-Cgjl6ODA.js";import{t as p}from"./FooterBottom-yxqnPQVe.js";var m=e(r(),1),h=l();d.registerPlugin(f);function g(){let[e,r]=(0,m.useState)(null),[l,f]=(0,m.useState)(!0),[g,_]=(0,m.useState)(null),v=(0,m.useRef)(null);return(0,m.useEffect)(()=>{(async()=>{f(!0);try{let e=new URLSearchParams(window.location.search),t=e.get(`id`)||e.get(`slug`)||`andaman-explorer`,n=await u(`/itineraries/${t}`);if(n&&n.data)r(n.data);else throw Error(`No itinerary details returned`)}catch(e){console.error(`Failed to load itinerary:`,e),_(`Unable to load travel schedule. Please verify the URL or try again.`)}finally{f(!1)}})()},[]),(0,m.useEffect)(()=>{if(!e||!v.current)return;let t=d.context(()=>{v.current.querySelectorAll(`.itin-day-card`).forEach(e=>{d.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 85%`,toggleActions:`play none none reverse`}})})},v);return()=>t.revert()},[e]),l?(0,h.jsxs)(`div`,{className:`w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc] text-[#F06543]`,children:[(0,h.jsx)(`div`,{className:`w-11 h-11 rounded-full border-3 border-[rgba(22,217,255,0.2)] border-t-[#F06543] animate-spin mb-4`}),(0,h.jsx)(`span`,{className:`font-mono text-xs font-black tracking-widest text-slate-500`,children:`LOADING TRAVEL ITINERARY...`})]}):g||!e?(0,h.jsxs)(`div`,{className:`w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc]  text-slate-800  p-6 text-center space-y-4`,children:[(0,h.jsx)(i,{className:`w-12 h-12 text-[#ff4f7b] animate-pulse`}),(0,h.jsx)(`h3`,{className:`text-2xl font-bold font-serif text-[#F06543] uppercase`,children:`Itinerary Not Found`}),(0,h.jsx)(`p`,{className:`text-xs text-slate-500 max-w-sm`,children:g||`This travel package schedule is currently unavailable.`}),(0,h.jsx)(`button`,{onClick:()=>window.history.back(),className:`px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer`,children:`Go Back`})]}):(0,h.jsxs)(`div`,{className:`itinerary-details-page`,children:[(0,h.jsx)(`style`,{children:`
        .itinerary-details-page {
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
          padding-top: 100px;
        }

        /* ── BLUEPRINT HERO HEADER ── */
        .itin-hero {
          max-width: 1340px; margin: 0 auto 40px; padding: 40px 24px; text-align: center;
          position: relative;
        }

        .itin-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.15em;
          color: #F06543; background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 16px; border-radius: 30px; margin-bottom: 24px;
        }

        .itin-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.2vw, 60px);
          font-weight: 600; color: #0B2545;
          line-height: 1.15; margin: 0 auto 16px;
          text-transform: uppercase;
        }

        /* ── TIMELINE GLASS BLOCK ── */
        .itin-day-card {
          background: #ffffff;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          transition: border-color 0.3s ease;
        }
        .itin-day-card:hover {
          border-color: rgba(33, 230, 193, 0.4);
        }

        /* Specs outline chips */
        .spec-glass-chip {
          display: flex; align-items: center; gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 10px 16px; border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #334155;
        }
      `}),(0,h.jsxs)(`section`,{className:`itin-hero`,children:[(0,h.jsxs)(`div`,{className:`itin-breadcrumb`,children:[(0,h.jsx)(`span`,{onClick:()=>{window.history.pushState({},``,`/`),window.dispatchEvent(new Event(`popstate`))},className:`cursor-pointer hover:underline text-slate-500`,children:`Home`}),(0,h.jsx)(c,{className:`w-3 h-3 text-[#F06543]`}),(0,h.jsx)(`span`,{className:`text-[#F06543]`,children:`Travel Blueprint`})]}),(0,h.jsx)(`h1`,{className:`itin-title max-w-4xl`,children:e.title}),(0,h.jsxs)(`div`,{className:`flex justify-center items-center gap-6 mt-4 font-mono text-xs font-bold uppercase tracking-widest text-[#F06543]`,children:[(0,h.jsx)(`span`,{children:e.duration}),(0,h.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-slate-700`}),(0,h.jsx)(`span`,{className:`text-slate-500`,children:`100% Customized Route`})]}),(0,h.jsx)(`p`,{className:`text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed mt-6`,children:e.description||`Follow our dynamic day-by-day luxury travel plan covering island highlights, transport, meals, and PADI scuba certifications.`})]}),(0,h.jsx)(`section`,{ref:v,className:`max-w-[1340px] mx-auto px-6 pb-24 space-y-12`,children:e.days.map((e,r)=>(0,h.jsxs)(`div`,{className:`itin-day-block itin-day-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative`,children:[(0,h.jsxs)(`div`,{className:`itin-day-visual lg:col-span-5 space-y-5`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap items-baseline gap-3`,children:[(0,h.jsxs)(`span`,{className:`text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-[#9cb3bd] leading-none font-mono`,children:[`DAY `,String(e.day).padStart(2,`0`)]}),(0,h.jsx)(`span`,{className:`px-3.5 py-1 rounded bg-[#F06543]/10 border border-[#F06543]/30 text-[#F06543] text-[10px] font-black uppercase font-mono`,children:e.location})]}),e.date&&(0,h.jsxs)(`div`,{className:`text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-1.5 font-mono`,children:[(0,h.jsx)(a,{className:`w-3.5 h-3.5 text-[#F06543]`}),(0,h.jsxs)(`span`,{children:[`Scheduled Date: `,e.date]})]}),e.image&&(0,h.jsxs)(`div`,{className:`relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#e2e8f0] shadow-xl group`,children:[(0,h.jsx)(`img`,{src:e.image,alt:e.title,className:`w-full h-full object-cover group-hover:scale-103 transition-transform duration-500`}),(0,h.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#020b11]/80 via-transparent to-transparent pointer-events-none`})]})]}),(0,h.jsxs)(`div`,{className:`itin-day-details lg:col-span-7 space-y-6`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold  text-[#0B2545]  font-serif uppercase tracking-tight`,children:e.title}),(0,h.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-600 leading-relaxed mt-3.5 font-normal`,children:e.description})]}),(0,h.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-[#e2e8f0] py-4`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`span`,{className:`block text-[9px] uppercase font-bold text-slate-500 tracking-widest font-mono mb-1.5`,children:`STAY`}),(0,h.jsxs)(`div`,{className:`spec-glass-chip`,children:[(0,h.jsx)(t,{className:`w-4 h-4 text-[#F06543] flex-shrink-0`}),(0,h.jsx)(`span`,{className:`truncate`,children:e.accommodation||`Not Included`})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`span`,{className:`block text-[9px] uppercase font-bold text-slate-500 tracking-widest font-mono mb-1.5`,children:`TRANSPORT`}),(0,h.jsxs)(`div`,{className:`spec-glass-chip`,children:[(0,h.jsx)(n,{className:`w-4 h-4 text-[#F06543] flex-shrink-0`}),(0,h.jsx)(`span`,{className:`truncate`,children:e.transport||`Not Included`})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`span`,{className:`block text-[9px] uppercase font-bold text-slate-500 tracking-widest font-mono mb-1.5`,children:`MEALS`}),(0,h.jsxs)(`div`,{className:`spec-glass-chip`,children:[(0,h.jsx)(s,{className:`w-4 h-4 text-[orange] flex-shrink-0`}),(0,h.jsx)(`span`,{className:`truncate`,children:e.meals&&e.meals.length>0?e.meals.join(` + `):`None`})]})]})]}),e.activities&&e.activities.length>0&&(0,h.jsxs)(`div`,{className:`space-y-3 font-mono`,children:[(0,h.jsx)(`span`,{className:`block text-[10px] uppercase font-black text-[#F06543] tracking-widest`,children:`ACTIVITIES HIGHLIGHTS`}),(0,h.jsx)(`div`,{className:`space-y-2.5 font-sans`,children:e.activities.map((e,t)=>(0,h.jsxs)(`div`,{className:`bg-[#e2e8f0] border border-[#e2e8f0] rounded-xl p-4 flex items-start gap-3 hover:border-[#e2e8f0] transition-colors`,children:[(0,h.jsx)(`div`,{className:`w-5 h-5 rounded-full bg-[#F06543]/10 border border-[#F06543]/35 flex items-center justify-center text-[#F06543] text-[10px] font-black flex-shrink-0 mt-0.5`,children:`✓`}),(0,h.jsxs)(`div`,{className:`flex-1`,children:[(0,h.jsxs)(`div`,{className:`flex justify-between items-start gap-4`,children:[(0,h.jsx)(`span`,{className:`text-xs font-bold  text-[#0B2545]  font-mono uppercase tracking-wide`,children:e.activity}),e.time&&(0,h.jsxs)(`span`,{className:`text-[9px] font-bold text-slate-500 bg-[#f8fafc] px-2.5 py-1 rounded flex items-center gap-1 font-mono border border-[#e2e8f0]`,children:[(0,h.jsx)(o,{className:`w-3 h-3 text-[#F06543]`}),e.time,` `,e.duration&&`(${e.duration})`]})]}),e.description&&(0,h.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-1.5 leading-relaxed`,children:e.description})]})]},e.id||t))})]})]})]},e.id||r))}),(0,h.jsx)(p,{})]})}export{g as default};