import{r as e}from"./rolldown-runtime-hePW80VL.js";import{An as t,Dn as n,E as r,H as i,O as a,Tn as o,Xn as s,Zn as c,a as l,cn as u,en as d,j as f,l as p,mt as m,n as h,wn as g,zt as _}from"./lucide-vendor-CBhgx3NO.js";import{v}from"./three-vendor-Md08yeGZ.js";import{t as y}from"./apiClient-CtyYBnF-.js";var b=e(c(),1),x={getPhotos:async(e={})=>{let t=new URLSearchParams(e).toString(),n=t?`/gallery?${t}`:`/gallery`;return y(n)},getCategories:async()=>y(`/gallery/categories`),getPhotoById:async e=>y(`/gallery/${e}`),likePhoto:async e=>y(`/gallery/${e}/like`,{method:`POST`}),createPhoto:async e=>y(`/gallery`,{method:`POST`,body:JSON.stringify(e)}),updatePhoto:async(e,t)=>y(`/gallery/${e}`,{method:`PUT`,body:JSON.stringify(t)}),deletePhoto:async e=>y(`/gallery/${e}`,{method:`DELETE`})},S=v(),C=[{id:1,category:`beaches`,src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85`,thumb:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75`,title:`Radhanagar Beach Sunset`,location:`Havelock Island (Swaraj Dweep)`,span:`wide`,likesCount:142,isFeatured:!0},{id:2,category:`beaches`,src:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=75`,title:`Neil Island Shoreline`,location:`Neil Island (Shaheed Dweep)`,span:`normal`,likesCount:98,isFeatured:!1},{id:3,category:`beaches`,src:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=75`,title:`Elephant Beach Turquoise Lagoon`,location:`Havelock Island`,span:`normal`,likesCount:124,isFeatured:!0},{id:4,category:`underwater`,src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85`,thumb:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=75`,title:`PADI Nemo Reef Coral Dive`,location:`Havelock Island`,span:`tall`,likesCount:289,isFeatured:!0},{id:5,category:`underwater`,src:`https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=75`,title:`Sea Turtle & Marine Life Exploration`,location:`North Bay Island Reef`,span:`normal`,likesCount:195,isFeatured:!0},{id:6,category:`underwater`,src:`https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=85`,thumb:`https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=75`,title:`Jolly Buoy Reef Snorkeling`,location:`Jolly Buoy Island, Wandoor`,span:`wide`,likesCount:162,isFeatured:!1},{id:7,category:`sunsets`,src:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85`,thumb:`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=75`,title:`Chidiya Tapu Sunset Point`,location:`South Andaman, Port Blair`,span:`wide`,likesCount:310,isFeatured:!0},{id:8,category:`sunsets`,src:`https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=75`,title:`Sunset Catamaran Cruise`,location:`Port Blair Harbor`,span:`normal`,likesCount:147,isFeatured:!1},{id:9,category:`adventures`,src:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=75`,title:`Bioluminescent Kayaking`,location:`Havelock Mangroves`,span:`normal`,likesCount:220,isFeatured:!0},{id:10,category:`adventures`,src:`https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=75`,title:`Deep Sea Game Fishing Safari`,location:`Cinque Island Oceanic Waters`,span:`tall`,likesCount:115,isFeatured:!1},{id:11,category:`adventures`,src:`https://images.unsplash.com/photo-1540202404-d0c7fe46a087?auto=format&fit=crop&w=1400&q=85`,thumb:`https://images.unsplash.com/photo-1540202404-d0c7fe46a087?auto=format&fit=crop&w=600&q=75`,title:`Limestone Caves Canopy Trek`,location:`Baratang Island`,span:`wide`,likesCount:180,isFeatured:!0},{id:12,category:`nature`,src:`https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=85`,thumb:`https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=600&q=75`,title:`Natural Coral Rock Bridge`,location:`Laxmanpur Beach, Neil Island`,span:`normal`,likesCount:168,isFeatured:!1},{id:13,category:`nature`,src:`https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1400&q=85`,thumb:`https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=600&q=75`,title:`Dense Tropical Mangrove Creek Safari`,location:`Middle & North Andaman`,span:`wide`,likesCount:205,isFeatured:!0}],w={all:t,beaches:s,underwater:l,sunsets:r,adventures:m,nature:a,stays:t,resorts:t,cruises:s,ferries:s};function T({photos:e,activeIndex:r,onClose:a,onNext:s,onPrev:c,onLike:l,isLiked:d}){let f=e[r],[p,m]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let e=e=>{e.key===`Escape`&&a(),e.key===`ArrowRight`&&s(),e.key===`ArrowLeft`&&c()};return window.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`,()=>{window.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[a,s,c]),f?(0,S.jsxs)(`div`,{onClick:a,style:{position:`fixed`,inset:0,zIndex:999999,background:`rgba(4, 19, 34, 0.95)`,backdropFilter:`blur(22px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,animation:`lbFadeIn 0.25s ease`},children:[(0,S.jsx)(`style`,{children:`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbImgIn { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
      `}),(0,S.jsx)(`button`,{onClick:a,style:{position:`absolute`,top:20,right:20,width:44,height:44,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.15)`,border:`1px solid rgba(255, 255, 255, 0.3)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,zIndex:10,transition:`all 0.25s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`#F06543`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.15)`},children:(0,S.jsx)(h,{size:20})}),(0,S.jsx)(`button`,{onClick:e=>{e.stopPropagation(),c()},style:{position:`absolute`,left:20,top:`50%`,transform:`translateY(-50%)`,width:48,height:48,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.15)`,border:`1px solid rgba(255, 255, 255, 0.3)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,zIndex:10,transition:`all 0.25s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`#F06543`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.15)`},children:(0,S.jsx)(o,{size:22})}),(0,S.jsx)(`button`,{onClick:e=>{e.stopPropagation(),s()},style:{position:`absolute`,right:20,top:`50%`,transform:`translateY(-50%)`,width:48,height:48,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.15)`,border:`1px solid rgba(255, 255, 255, 0.3)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,zIndex:10,transition:`all 0.25s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`#F06543`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.15)`},children:(0,S.jsx)(g,{size:22})}),(0,S.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`relative`,maxWidth:`88vw`,maxHeight:`88vh`,borderRadius:22,overflow:`hidden`,border:`1.5px solid rgba(255, 255, 255, 0.2)`,boxShadow:`0 32px 80px rgba(0, 0, 0, 0.9)`,animation:`lbImgIn 0.3s ease`,background:`#0B2545`},children:[(0,S.jsx)(`img`,{src:f.src,alt:f.title,style:{display:`block`,maxWidth:`88vw`,maxHeight:`78vh`,width:`auto`,height:`auto`,objectFit:`contain`}},f.id),(0,S.jsxs)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`linear-gradient(to top, rgba(6, 24, 46, 0.96) 0%, rgba(6, 24, 46, 0.7) 60%, transparent 100%)`,padding:`28px 24px 20px`,display:`flex`,flexWrap:`wrap`,alignItems:`flex-end`,justifyContent:`space-between`,gap:14},children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:19,fontWeight:800,color:`#ffffff`,marginBottom:4},children:f.title}),(0,S.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#2dd4bf`,display:`flex`,alignItems:`center`,gap:6},children:[(0,S.jsx)(t,{size:13,color:`#2dd4bf`}),(0,S.jsx)(`span`,{children:f.location}),(0,S.jsxs)(`span`,{style:{color:`#94a3b8`,marginLeft:8},children:[r+1,` of `,e.length]})]})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,S.jsxs)(`button`,{onClick:()=>l(f.id),style:{background:d(f.id)?`#F06543`:`rgba(255, 255, 255, 0.15)`,border:`1px solid rgba(255, 255, 255, 0.3)`,color:`#ffffff`,padding:`7px 14px`,borderRadius:20,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,transition:`all 0.2s`},children:[(0,S.jsx)(_,{size:14,fill:d(f.id)?`#ffffff`:`none`}),(0,S.jsx)(`span`,{children:f.likesCount||0})]}),(0,S.jsxs)(`button`,{onClick:()=>{let e=encodeURIComponent(`🏝️ Andaman Photo: "${f.title}" at ${f.location}\n\nExplore Andaman Trails Gallery: ${window.location.origin}/gallery`);window.open(`https://api.whatsapp.com/send?text=${e}`,`_blank`)},style:{background:`#25D366`,border:`none`,color:`#ffffff`,padding:`7px 14px`,borderRadius:20,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800},children:[(0,S.jsx)(i,{size:13}),(0,S.jsx)(`span`,{children:`Share`})]}),(0,S.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(f.src),m(!0),setTimeout(()=>m(!1),2e3)},title:`Copy Image URL`,style:{background:`rgba(255, 255, 255, 0.15)`,border:`1px solid rgba(255, 255, 255, 0.3)`,color:`#ffffff`,padding:`7px 10px`,borderRadius:20,cursor:`pointer`},children:p?(0,S.jsx)(n,{size:14,color:`#2dd4bf`}):(0,S.jsx)(u,{size:14})})]})]})]})]}):null}function E({isHomePage:e=!1}){let[n,r]=(0,b.useState)(C),[i,a]=(0,b.useState)(!0),[o,s]=(0,b.useState)(`all`),[c,l]=(0,b.useState)(null),[u,m]=(0,b.useState)({}),h=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=!0;return x.getPhotos().then(t=>{if(!e)return;let n=t?.data||t?.data?.data||t;if(Array.isArray(n)&&n.length>0){let e=n.map(e=>({id:e.id,title:e.title,location:e.location||`Andaman Islands`,category:(e.category||`beaches`).toLowerCase(),src:e.src,thumb:e.thumb||e.src,span:e.span||`normal`,likesCount:Number(e.likesCount||0),isFeatured:!!e.isFeatured,status:e.status||`ACTIVE`}));r(e)}}).catch(e=>{console.warn(`Live gallery fetch failed, showing fallback portfolio:`,e)}).finally(()=>{e&&a(!1)}),()=>{e=!1}},[]),(0,b.useEffect)(()=>{let e={};n.forEach(t=>{localStorage.getItem(`liked_photo_${t.id}`)===`true`&&(e[t.id]=!0)}),m(e)},[n]);let g=(0,b.useCallback)(async e=>{let t=u[e];if(r(n=>n.map(n=>n.id===e?{...n,likesCount:t?Math.max(0,n.likesCount-1):n.likesCount+1}:n)),m(n=>{let r={...n,[e]:!t};return t?localStorage.removeItem(`liked_photo_${e}`):localStorage.setItem(`liked_photo_${e}`,`true`),r}),!t)try{await x.likePhoto(e)}catch(e){console.warn(`Like photo sync failed:`,e)}},[u]),v=(0,b.useCallback)(e=>!!u[e],[u]),y=(0,b.useMemo)(()=>{let e={all:n.length};return n.forEach(t=>{let n=t.category?t.category.toLowerCase():`other`;e[n]=(e[n]||0)+1}),Object.keys(e).map(n=>{let r=w[n]||t;return{id:n,label:n===`all`?`All Photos`:n.charAt(0).toUpperCase()+n.slice(1),count:e[n],icon:r}})},[n]),E=(0,b.useMemo)(()=>{if(e){let e=n.filter(e=>e.isFeatured);return(e.length>=6?e:n).slice(0,6)}return o===`all`?n:n.filter(e=>e.category===o)},[n,o,e]),D=(0,b.useCallback)(e=>l(e),[]),O=(0,b.useCallback)(()=>l(null),[]),k=(0,b.useCallback)(()=>l(e=>(e+1)%E.length),[E.length]),A=(0,b.useCallback)(()=>l(e=>(e-1+E.length)%E.length),[E.length]);return(0,S.jsxs)(`section`,{id:`gallery-section`,className:`glr-section`,children:[(0,S.jsx)(`style`,{children:`
        .glr-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #334155;
          padding: 72px 0 88px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .glr-ambient-l {
          position: absolute; top: 20%; left: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .glr-ambient-r {
          position: absolute; bottom: 20%; right: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .glr-container {
          max-width: 1380px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* Header */
        .glr-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.22em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 6px;
        }
        .glr-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 600;
          color: #0B2545; line-height: 1.1; margin-bottom: 6px;
        }
        .glr-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.55; max-width: 560px;
        }

        /* Filter Tabs */
        .glr-filters {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-top: 28px; margin-bottom: 36px;
        }
        .glr-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.04em;
          padding: 8px 18px; border-radius: 30px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .glr-filter-btn:hover {
          border-color: #F06543;
          color: #0B2545;
          background: #FFF0EB;
        }
        .glr-filter-btn.active {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.35);
        }

        /* ── DESKTOP MASONRY GRID ── */
        .glr-masonry {
          columns: 3;
          column-gap: 20px;
          display: block;
        }
        @media (max-width: 1024px) {
          .glr-masonry { columns: 2; }
        }
        @media (max-width: 640px) {
          .glr-masonry { display: none; }
          .glr-mobile-slider { display: flex !important; }
        }

        .glr-masonry-item {
          break-inside: avoid;
          margin-bottom: 20px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          border: 1.5px solid #e2e8f0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: #0B2545;
        }
        .glr-masonry-item:hover {
          transform: translateY(-5px) scale(1.01);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }
        .glr-masonry-item img {
          display: block; width: 100%; height: auto;
          transition: transform 0.6s ease;
        }
        .glr-masonry-item:hover img { transform: scale(1.06); }

        /* Hover overlay */
        .glr-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6, 24, 46, 0.95) 0%, rgba(6, 24, 46, 0.4) 55%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 20px;
        }
        .glr-masonry-item:hover .glr-img-overlay { opacity: 1; }

        .glr-expand-icon {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #e2e8f0;
          color: #0B2545;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .glr-masonry-item:hover .glr-expand-icon { opacity: 1; }

        .glr-photo-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14.5px; font-weight: 800; color: #ffffff; margin-bottom: 3px;
        }
        .glr-photo-loc {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #2dd4bf;
          display: flex; align-items: center; gap: 5px;
        }

        /* ── MOBILE SLIDER ── */
        .glr-mobile-slider {
          display: none;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 4px 4px 16px;
        }
        .glr-mobile-slider::-webkit-scrollbar { display: none; }
        .glr-mobile-slide {
          flex: 0 0 84%;
          scroll-snap-align: start;
          position: relative;
          border-radius: 20px; overflow: hidden; cursor: pointer;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.08);
          background: #0B2545;
        }
        .glr-mobile-slide img {
          width: 100%; height: 260px; object-fit: cover; display: block;
        }
        .glr-mobile-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(6, 24, 46, 0.92) 0%, transparent 100%);
          padding: 24px 16px 14px;
        }

        /* Count badge */
        .glr-count-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #0B2545;
          background: #FFF0EB; border: 1px solid rgba(240, 101, 67, 0.25);
          padding: 6px 14px; borderRadius: 20px;
          margin-top: 6px;
        }

        .glr-item-heart-btn {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          padding: 5px 9px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: "'Space Grotesk', sans-serif";
          font-size: 11px;
          font-weight: 800;
          opacity: 0.9;
          transition: transform 0.2s, background 0.2s;
        }
        .glr-item-heart-btn:hover {
          transform: scale(1.08);
          background: #F06543;
        }
      `}),(0,S.jsx)(`div`,{className:`glr-ambient-l`}),(0,S.jsx)(`div`,{className:`glr-ambient-r`}),(0,S.jsxs)(`div`,{className:`glr-container`,children:[(0,S.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,justifyContent:`space-between`,gap:16},children:[(0,S.jsxs)(`div`,{children:[(0,S.jsxs)(`div`,{className:`glr-header-sub`,children:[(0,S.jsx)(f,{size:13,color:`#F06543`}),(0,S.jsx)(`span`,{children:`PHOTO GALLERY`})]}),(0,S.jsx)(`h2`,{className:`glr-header-title`,children:`Andaman Through Our Lens`}),(0,S.jsx)(`p`,{className:`glr-header-desc`,children:`Breathtaking moments captured across the Andaman archipelago — beaches, coral reefs, island sunsets, and wild adventures.`})]}),(0,S.jsxs)(`div`,{className:`glr-count-badge`,children:[(0,S.jsx)(t,{size:13,color:`#F06543`}),(0,S.jsxs)(`span`,{children:[E.length,` PHOTOS`]})]})]}),!e&&(0,S.jsx)(`div`,{className:`glr-filters`,children:y.map(e=>{let t=e.icon,n=o===e.id;return(0,S.jsxs)(`button`,{className:`glr-filter-btn${n?` active`:``}`,onClick:()=>{s(e.id),l(null)},children:[(0,S.jsx)(t,{size:13}),(0,S.jsxs)(`span`,{children:[e.label,` (`,e.count,`)`]})]},e.id)})}),(0,S.jsx)(`div`,{className:`glr-masonry`,children:E.map((e,n)=>(0,S.jsxs)(`div`,{className:`glr-masonry-item`,onClick:()=>D(n),children:[(0,S.jsx)(`img`,{src:e.thumb||e.src,alt:e.title,loading:`lazy`}),(0,S.jsxs)(`div`,{className:`glr-item-heart-btn`,onClick:t=>{t.stopPropagation(),g(e.id)},children:[(0,S.jsx)(_,{size:12,fill:v(e.id)?`#F06543`:`none`,color:v(e.id)?`#F06543`:`#ffffff`}),(0,S.jsx)(`span`,{children:e.likesCount||0})]}),(0,S.jsxs)(`div`,{className:`glr-img-overlay`,children:[(0,S.jsx)(`div`,{className:`glr-expand-icon`,children:(0,S.jsx)(d,{size:16})}),(0,S.jsx)(`div`,{className:`glr-photo-title`,children:e.title}),(0,S.jsxs)(`div`,{className:`glr-photo-loc`,children:[(0,S.jsx)(t,{size:11}),(0,S.jsx)(`span`,{children:e.location})]})]})]},e.id))}),(0,S.jsx)(`div`,{ref:h,className:`glr-mobile-slider`,children:E.map((e,n)=>(0,S.jsxs)(`div`,{className:`glr-mobile-slide`,onClick:()=>D(n),children:[(0,S.jsx)(`img`,{src:e.thumb||e.src,alt:e.title,loading:`lazy`}),(0,S.jsxs)(`div`,{className:`glr-item-heart-btn`,onClick:t=>{t.stopPropagation(),g(e.id)},children:[(0,S.jsx)(_,{size:12,fill:v(e.id)?`#F06543`:`none`,color:v(e.id)?`#F06543`:`#ffffff`}),(0,S.jsx)(`span`,{children:e.likesCount||0})]}),(0,S.jsxs)(`div`,{className:`glr-mobile-caption`,children:[(0,S.jsx)(`div`,{className:`glr-photo-title`,style:{fontSize:15},children:e.title}),(0,S.jsxs)(`div`,{className:`glr-photo-loc`,children:[(0,S.jsx)(t,{size:11}),(0,S.jsx)(`span`,{children:e.location})]})]})]},e.id))}),(0,S.jsxs)(`div`,{style:{marginTop:40,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:16,flexWrap:`wrap`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,background:`#ffffff`,backdropFilter:`blur(16px)`,border:`1px solid #e2e8f0`,borderRadius:24,padding:`14px 28px`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,S.jsx)(t,{size:20,color:`#F06543`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#0B2545`},children:`@andamantrails`}),(0,S.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11,color:`#64748b`},children:`120K+ Explorers on Instagram`})]})]}),(0,S.jsx)(`div`,{style:{width:1,height:36,background:`#e2e8f0`,margin:`0 8px`}}),(0,S.jsxs)(`a`,{href:`https://instagram.com/andamantrails`,target:`_blank`,rel:`noopener noreferrer`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#0B2545`,textDecoration:`none`,background:`#FFF0EB`,border:`1px solid #F06543`,padding:`8px 18px`,borderRadius:20,display:`inline-flex`,alignItems:`center`,gap:6,transition:`all 0.3s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`#0B2545`,e.currentTarget.style.color=`#ffffff`,e.currentTarget.style.borderColor=`#0B2545`},onMouseLeave:e=>{e.currentTarget.style.background=`#FFF0EB`,e.currentTarget.style.color=`#0B2545`,e.currentTarget.style.borderColor=`#F06543`},children:[(0,S.jsx)(p,{size:13}),(0,S.jsx)(`span`,{children:`FOLLOW US`})]})]}),e&&(0,S.jsxs)(`a`,{href:`/gallery`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/gallery`),window.dispatchEvent(new Event(`popstate`)),window.scrollTo({top:0,behavior:`smooth`})},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#ffffff`,textDecoration:`none`,background:`linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)`,border:`none`,padding:`16px 32px`,borderRadius:24,display:`inline-flex`,alignItems:`center`,gap:8,boxShadow:`0 4px 18px rgba(0, 45, 98, 0.25)`,transition:`all 0.3s ease`,cursor:`pointer`},onMouseEnter:e=>{e.currentTarget.style.transform=`scale(1.03)`,e.currentTarget.style.boxShadow=`0 8px 26px rgba(0, 45, 98, 0.35)`},onMouseLeave:e=>{e.currentTarget.style.transform=`scale(1.0)`,e.currentTarget.style.boxShadow=`0 4px 18px rgba(0, 45, 98, 0.25)`},children:[(0,S.jsx)(d,{size:14,color:`#ffffff`}),(0,S.jsx)(`span`,{children:`EXPLORE FULL GALLERY`})]})]})]}),c!==null&&(0,S.jsx)(T,{photos:E,activeIndex:c,onClose:O,onNext:k,onPrev:A,onLike:g,isLiked:v})]})}export{E as default};