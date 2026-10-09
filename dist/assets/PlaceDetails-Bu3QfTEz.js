import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Dn as n,Gn as r,O as i,Zn as a,j as o,ln as s,wn as c}from"./lucide-vendor-CBhgx3NO.js";import{v as l}from"./three-vendor-Md08yeGZ.js";import{t as u}from"./apiClient-RFZz5CW9.js";import{t as d}from"./FooterBottom-uRtAk0HF.js";var f=e(a(),1),p=l(),m={"radhanagar-beach":{id:`radhanagar-beach`,name:`Radhanagar Beach`,tagline:`Asia's Finest Sunset Beach`,category:`Beaches`,island:`Havelock Island`,travelTime:`2.5 hrs from Port Blair`,rating:4.97,reviews:`8.4K`,mustSee:!0,description:`Ranked Asia's best beach by Time Magazine. Pristine white sand stretching 2km, turquoise waters, and legendary crimson sunsets.`,image:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85`,badge:`#7 ASIA`,badgeBg:`linear-gradient(135deg, #f5af02, #e41d24)`,tags:[`Beach`,`Sunset`,`Swimming`]},"cellular-jail":{id:`cellular-jail`,name:`Cellular Jail`,tagline:`The Colonial Dark History`,category:`Historical`,island:`Port Blair`,travelTime:`In Port Blair`,rating:4.9,reviews:`12.1K`,mustSee:!0,description:`A haunting colonial prison turned national monument. The Light & Sound show every evening brings India's struggle for independence alive.`,image:`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85`,badge:`MUST VISIT`,badgeBg:`linear-gradient(135deg, #F06543, #0070f3)`,tags:[`Heritage`,`History`,`Light Show`]},"elephant-beach":{id:`elephant-beach`,name:`Elephant Beach`,tagline:`Vibrant Coral Reef Paradise`,category:`Beaches`,island:`Havelock Island`,travelTime:`3 hrs from Port Blair`,rating:4.88,reviews:`5.6K`,mustSee:!1,description:`A boat-only accessible beach famous for shallow coral reefs. Perfect for first-time snorkelers with calm, crystal-clear waters.`,image:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85`,badge:`SNORKEL HUB`,badgeBg:`linear-gradient(135deg, #F06543, #059669)`,tags:[`Snorkeling`,`Coral`,`Boat Access`]},"ross-island":{id:`ross-island`,name:`Ross Island`,tagline:`Ruins of the Colonial Capital`,category:`Historical`,island:`Near Port Blair`,travelTime:`20 mins boat ride`,rating:4.85,reviews:`4.2K`,mustSee:!0,description:`Once the British administrative headquarters, now overgrown by jungle roots. Deer roam freely through crumbling colonial structures.`,image:`https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=85`,badge:`HERITAGE ISLE`,badgeBg:`linear-gradient(135deg, #8b5cf6, #6366f1)`,tags:[`Ruins`,`History`,`Deer`]},"neil-island":{id:`neil-island`,name:`Neil Island`,tagline:`The Peaceful Green Gem`,category:`Islands`,island:`Neil Island`,travelTime:`2 hrs from Port Blair`,rating:4.91,reviews:`3.8K`,mustSee:!0,description:`Smaller and quieter than Havelock, Neil Island offers lush paddy fields, natural bridge formations, and uncrowded pristine beaches.`,image:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85`,badge:`HIDDEN GEM`,badgeBg:`linear-gradient(135deg, #FF6B4A, #F06543)`,tags:[`Quiet`,`Nature`,`Beaches`]},"baratang-island":{id:`baratang-island`,name:`Baratang Island`,tagline:`Limestone Caves & Mudvolcanoes`,category:`Nature`,island:`Baratang Island`,travelTime:`3.5 hrs from Port Blair`,rating:4.82,reviews:`2.9K`,mustSee:!1,description:`A dramatic landscape of limestone sea caves, active mud volcanoes, and dense mangrove creeks. Reached via a thrilling jungle convoy.`,image:`https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1200&q=85`,badge:`ADVENTURE`,badgeBg:`linear-gradient(135deg, #ff4f7b, #dc2743)`,tags:[`Caves`,`Mud Volcano`,`Jungle`]},"north-bay-island":{id:`north-bay-island`,name:`North Bay Island`,tagline:`The Water Sports Capital`,category:`Water Sports`,island:`Near Port Blair`,travelTime:`30 mins from Port Blair`,rating:4.87,reviews:`6.1K`,mustSee:!1,description:`The go-to island for sea walking, glass bottom boat rides, and scuba diving. Crystal clear lagoons with the richest coral in South Andaman.`,image:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85`,badge:`WATER SPORTS`,badgeBg:`linear-gradient(135deg, #FF6B4A, #F06543)`,tags:[`Sea Walk`,`Scuba`,`Coral`]},"jolly-buoy":{id:`jolly-buoy`,name:`Jolly Buoy Island`,tagline:`Pristine National Park Beach`,category:`Islands`,island:`Mahatma Gandhi Marine Park`,travelTime:`1.5 hrs from Port Blair`,rating:4.93,reviews:`4.7K`,mustSee:!0,description:`Part of a protected national marine park, accessible only in season. Untouched beaches, vibrant coral gardens, and sea turtles nesting.`,image:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85`,badge:`PROTECTED ISLE`,badgeBg:`linear-gradient(135deg, #0B2545, #F06543)`,tags:[`National Park`,`Turtles`,`Coral`]}};function h(){let[e,a]=(0,f.useState)(null),[l,h]=(0,f.useState)(!0),g=new URLSearchParams(window.location.search).get(`id`)||`radhanagar-beach`;return(0,f.useEffect)(()=>{document.title=`Attraction Details | Andaman Trails`,window.scrollTo(0,0),(async()=>{try{let e=await u(`/places/${g}`);e&&e.data?a(e.data):a(m[g]||m[`radhanagar-beach`])}catch(e){console.warn(`API fetch failed, falling back to static place data:`,e),a(m[g]||m[`radhanagar-beach`])}finally{h(!1)}})()},[g]),l?(0,p.jsxs)(`div`,{className:`w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF4EE] text-[#F06543]`,children:[(0,p.jsx)(`div`,{className:`w-11 h-11 rounded-full border-3 border-[#FFD3C4] border-t-[#F06543] animate-spin mb-4`}),(0,p.jsx)(`span`,{className:`font-mono text-xs font-black tracking-widest text-slate-700`,children:`LOADING PLACE DETAILS...`})]}):e?(0,p.jsxs)(`div`,{className:`place-details-page`,children:[(0,p.jsx)(`style`,{children:`
        .place-details-page {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* ── HERO BANNER COVER ── */
        .place-hero {
          position: relative;
          width: 100%;
          min-height: 55vh;
          max-height: 560px;
          display: flex;
          align-items: flex-end;
          padding: 140px 24px 70px;
          box-sizing: border-box;
          background-size: cover;
          background-position: center;
        }

        .place-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(11, 37, 69, 0.75) 0%,
            rgba(11, 37, 69, 0.4) 60%,
            rgba(11, 37, 69, 0.98) 100%
          );
        }

        .place-hero-content {
          position: relative; z-index: 4; max-width: 1340px;
          width: 100%; margin: 0 auto;
        }

        .place-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.15em;
          color: #F06543; background: #ffffff;
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border: 1px solid #ebded2;
          padding: 6px 16px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(11, 37, 69, 0.15);
        }

        .place-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.2vw, 64px);
          font-weight: 600; color: #ffffff;
          line-height: 1.1; margin: 0 0 10px;
          text-shadow: 0 4px 24px rgba(0,0,0,0.8);
          text-transform: uppercase;
        }

        .place-tagline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          color: #FFD3C4;
          font-style: italic;
          margin-bottom: 24px;
        }

        /* ── RESERVATION WIDGET CARD ── */
        .quote-card-luxury {
          background: #ffffff;
          border: 1.5px solid #ebded2;
          border-radius: 28px;
          padding: 32px;
          box-shadow: 0 25px 60px rgba(11, 37, 69, 0.08);
          position: relative;
        }

        /* ── METADATA STRIP TILES ── */
        .info-strip-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 16px;
          margin-bottom: 36px;
        }

        .info-strip-tile {
          background: #FAF4EE;
          border: 1.5px solid #ebded2;
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-tile-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.1em;
          color: #64748b; text-transform: uppercase;
        }

        .info-tile-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700; color: #0B2545;
        }
      `}),(0,p.jsxs)(`section`,{className:`place-hero animate-fadeIn`,style:{backgroundImage:`url(${e.image})`},children:[(0,p.jsx)(`div`,{className:`place-hero-overlay`}),(0,p.jsxs)(`div`,{className:`place-hero-content`,children:[(0,p.jsxs)(`div`,{className:`place-breadcrumb`,children:[(0,p.jsx)(`span`,{onClick:()=>{window.history.pushState({},``,`/`),window.dispatchEvent(new Event(`popstate`))},className:`cursor-pointer hover:underline text-slate-700`,children:`Home`}),(0,p.jsx)(c,{className:`w-3 h-3 text-[#F06543]`}),(0,p.jsx)(`span`,{className:`text-[#F06543]`,children:e.name})]}),e.badge&&(0,p.jsx)(`div`,{className:`mb-4`,children:(0,p.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:950,letterSpacing:`0.08em`,color:`#ffffff`,background:e.badgeBg||`linear-gradient(135deg, #FF6B4A, #F06543)`,padding:`5px 14px`,borderRadius:20,boxShadow:`0 4px 14px rgba(0,0,0,0.4)`},children:e.badge})}),(0,p.jsx)(`h1`,{className:`place-title`,children:e.name}),(0,p.jsx)(`div`,{className:`place-tagline`,children:e.tagline})]})]}),(0,p.jsx)(`section`,{className:`max-w-[1340px] mx-auto px-6 py-16`,children:(0,p.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start`,children:[(0,p.jsxs)(`div`,{className:`lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#ffffff] border border-[#ebded2] backdrop-blur-xl shadow-xl flex flex-col justify-between min-h-[460px]`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`info-strip-card`,children:[(0,p.jsxs)(`div`,{className:`info-strip-tile`,children:[(0,p.jsx)(`span`,{className:`info-tile-label`,children:`Category`}),(0,p.jsx)(`span`,{className:`info-tile-val text-[#F06543] uppercase`,children:e.category})]}),(0,p.jsxs)(`div`,{className:`info-strip-tile`,children:[(0,p.jsx)(`span`,{className:`info-tile-label`,children:`Island`}),(0,p.jsx)(`span`,{className:`info-tile-val`,children:e.island})]}),(0,p.jsxs)(`div`,{className:`info-strip-tile`,children:[(0,p.jsx)(`span`,{className:`info-tile-label`,children:`Travel Time`}),(0,p.jsx)(`span`,{className:`info-tile-val`,children:e.travelTime})]}),(0,p.jsxs)(`div`,{className:`info-strip-tile`,children:[(0,p.jsx)(`span`,{className:`info-tile-label`,children:`Reviews`}),(0,p.jsxs)(`span`,{className:`info-tile-val flex items-center gap-1`,children:[(0,p.jsx)(i,{size:13,className:`fill-[#ffd700] text-[#ffd700]`}),e.rating,` `,(0,p.jsxs)(`span`,{className:`text-slate-700 font-normal text-[10px]`,children:[`(`,e.reviews,`)`]})]})]})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-bold text-[#0B2545] font-mono uppercase mb-4`,children:[(0,p.jsx)(s,{size:18,className:`text-[#F06543]`}),(0,p.jsx)(`span`,{children:`About the Attraction`})]}),(0,p.jsx)(`p`,{className:`text-sm sm:text-base text-slate-600 leading-relaxed mb-8`,children:e.description}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-bold text-[#0B2545] font-mono uppercase mb-4`,children:[(0,p.jsx)(o,{size:18,className:`text-[#F06543]`}),(0,p.jsx)(`span`,{children:`Tags & Highlights`})]}),(0,p.jsx)(`div`,{className:`flex flex-wrap gap-2.5`,children:(e=>{if(!e)return[];if(Array.isArray(e))return e;try{if(typeof e==`string`){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Failed to parse tags:`,e)}return[]})(e.tags).map((e,t)=>(0,p.jsxs)(`span`,{className:`font-mono text-[10px] font-bold text-[#F06543] bg-[#FFF0EB] border border-[#FFD3C4] px-3 py-1 rounded-xl`,children:[`✦ `,e]},t))})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-3.5 bg-[#FFF0EB] border border-[#FFD3C4] rounded-2xl p-5 mt-10`,children:[(0,p.jsx)(t,{size:20,className:`text-[#F06543] flex-shrink-0`}),(0,p.jsx)(`p`,{className:`text-xs text-slate-700 leading-relaxed`,children:`This attraction is part of our customized Andaman hopping packages. Includes entry passes, boat tickets & local transfers.`})]})]}),(0,p.jsxs)(`div`,{className:`lg:col-span-4 quote-card-luxury flex flex-col justify-between min-h-[400px]`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{className:`text-xl font-bold text-[#0B2545] font-serif uppercase tracking-tight mb-3`,children:`Plan Your Visit`}),(0,p.jsxs)(`p`,{className:`text-xs text-slate-700 leading-relaxed mb-6 font-sans`,children:[`Want to visit `,(0,p.jsx)(`strong`,{children:e.name}),` during your Andaman holiday? Let our local travel experts coordinate your itinerary, ferry logistics, and guide booking.`]}),(0,p.jsxs)(`div`,{className:`space-y-3.5 mb-8`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2.5 text-xs text-slate-800`,children:[(0,p.jsx)(n,{size:14,className:`text-[#F06543] flex-shrink-0`}),(0,p.jsx)(`span`,{children:`Hassle-Free Ferry Tickets`})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2.5 text-xs text-slate-800`,children:[(0,p.jsx)(n,{size:14,className:`text-[#F06543] flex-shrink-0`}),(0,p.jsx)(`span`,{children:`Verified Local Tour Cab`})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2.5 text-xs text-slate-800`,children:[(0,p.jsx)(n,{size:14,className:`text-[#F06543] flex-shrink-0`}),(0,p.jsx)(`span`,{children:`No Hidden Service Fee`})]})]})]}),(0,p.jsxs)(`button`,{onClick:t=>{t.preventDefault(),window.history.pushState({},``,`/plan-trip?subject=Plan custom trip to ${e.name}`),window.dispatchEvent(new Event(`popstate`))},className:`w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white font-mono text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 cursor-pointer`,children:[(0,p.jsx)(`span`,{children:`REQUEST CUSTOM QUOTE`}),(0,p.jsx)(r,{size:13})]})]})]})}),(0,p.jsx)(d,{})]}):(0,p.jsx)(`div`,{className:`w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF4EE] text-slate-800 p-6 text-center`,children:(0,p.jsx)(`h2`,{className:`text-3xl font-bold font-serif text-[#F06543] uppercase`,children:`Place Not Found`})})}export{h as default};