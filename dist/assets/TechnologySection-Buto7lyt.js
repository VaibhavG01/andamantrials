import{r as e}from"./rolldown-runtime-hePW80VL.js";import{Fn as t,Q as n,Tt as r,Ut as i,W as a,Xn as o,Yn as s,Z as c,Zn as l,dn as u,dt as d,fn as f,in as p,j as m,jt as h,ln as g,sn as _,t as v,u as y}from"./lucide-vendor-CBhgx3NO.js";import{_ as b,c as x,d as S,i as C,o as w,s as T,t as E,v as D}from"./three-vendor-Md08yeGZ.js";import{n as O,t as k}from"./gsap-vendor-Cgjl6ODA.js";var A=e(l(),1),j=D(),M=[`3D MAP`,`AI TRIP PLANNER`,`BOOKING SYSTEM`,`DESTINATIONS`,`FERRY DATA`,`360° EXPERIENCES`],N=({start:e,end:t})=>{let n=(0,A.useMemo)(()=>[new b(...e),new b(...t)],[e,t]),r=(0,A.useMemo)(()=>new S().setFromPoints(n),[n]);return(0,j.jsx)(`line`,{geometry:r,children:(0,j.jsx)(`lineBasicMaterial`,{color:`#F06543`,transparent:!0,opacity:.4})})},P=()=>{let e=(0,A.useRef)();return x(t=>{let n=t.clock.getElapsedTime();e.current&&(e.current.rotation.y+=.003,e.current.position.y=Math.sin(n*1.5)*.08)}),(0,j.jsxs)(`group`,{ref:e,children:[(0,j.jsxs)(`mesh`,{position:[0,0,0],castShadow:!0,receiveShadow:!0,children:[(0,j.jsx)(`cylinderGeometry`,{args:[2,1.8,.5,32]}),(0,j.jsx)(`meshStandardMaterial`,{color:`#0a2540`,roughness:.7,metalness:.2})]}),(0,j.jsxs)(`mesh`,{position:[.5,.3,.5],children:[(0,j.jsx)(`coneGeometry`,{args:[.5,.8,16]}),(0,j.jsx)(`meshStandardMaterial`,{color:`#0a2a3b`,roughness:.8})]}),(0,j.jsxs)(`mesh`,{position:[-.6,.2,-.4],children:[(0,j.jsx)(`coneGeometry`,{args:[.4,.6,16]}),(0,j.jsx)(`meshStandardMaterial`,{color:`#0a2a3b`,roughness:.8})]}),M.map((e,t)=>{let n=t/M.length*Math.PI*2,r=3.8,i=Math.cos(n)*r,a=Math.sin(n)*r;return(0,j.jsxs)(`group`,{children:[(0,j.jsx)(N,{start:[0,0,0],end:[i,0,a]}),(0,j.jsx)(w,{position:[i,0,a],center:!0,style:{pointerEvents:`none`},children:(0,j.jsx)(`div`,{style:{background:`#ffffff`,border:`1px solid #e2e8f0`,backdropFilter:`blur(20px)`,padding:`8px 12px`,borderRadius:`8px`,color:`#F06543`,fontSize:`12px`,fontWeight:`600`,whiteSpace:`nowrap`,textShadow:`0 0 10px rgba(33, 230, 193, 0.5)`,boxShadow:`0 0 15px rgba(22, 217, 255, 0.1)`,textTransform:`uppercase`,letterSpacing:`1px`},children:e})})]},t)})]})},F=()=>{let e=(0,A.useMemo)(()=>{let e=new Float32Array(900);for(let t=0;t<300;t++)e[t*3]=(Math.random()-.5)*12,e[t*3+1]=(Math.random()-.5)*8,e[t*3+2]=(Math.random()-.5)*12;return e},[]),t=(0,A.useRef)();return x(e=>{let n=e.clock.getElapsedTime();t.current&&(t.current.rotation.y=n*.05,t.current.rotation.x=Math.sin(n*.1)*.1)}),(0,j.jsx)(E,{ref:t,positions:e,stride:3,children:(0,j.jsx)(C,{transparent:!0,color:`#F06543`,size:.05,sizeAttenuation:!0,depthWrite:!1,opacity:.6})})},I=()=>(0,j.jsx)(`div`,{style:{width:`100%`,height:`500px`,position:`relative`,overflow:`hidden`},children:(0,j.jsxs)(T,{camera:{position:[0,4,9],fov:45},style:{background:`transparent`},children:[(0,j.jsx)(`ambientLight`,{intensity:.4}),(0,j.jsx)(`pointLight`,{position:[5,5,5],intensity:1,color:`#f5fafc`}),(0,j.jsx)(`spotLight`,{position:[-5,5,-5],intensity:2.5,color:`#F06543`,angle:.6,penumbra:1}),(0,j.jsx)(P,{}),(0,j.jsx)(F,{}),(0,j.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,-2,0],children:[(0,j.jsx)(`planeGeometry`,{args:[40,40]}),(0,j.jsx)(`meshBasicMaterial`,{color:`#0B2545`,opacity:.8,transparent:!0})]})]})});function L(e,l=`#F06543`){let y={size:20,color:l,strokeWidth:2};switch(e){case`react`:return(0,j.jsx)(u,{...y});case`cube`:return(0,j.jsx)(t,{...y});case`zap`:return(0,j.jsx)(v,{...y});case`sparkles`:return(0,j.jsx)(m,{...y});case`palette`:return(0,j.jsx)(d,{...y});case`server`:return(0,j.jsx)(a,{...y});case`rocket`:return(0,j.jsx)(c,{...y});case`database`:return(0,j.jsx)(p,{...y});case`refresh`:return(0,j.jsx)(n,{...y});case`cloud`:return(0,j.jsx)(f,{...y});case`archive`:return(0,j.jsx)(s,{...y});case`lock`:return(0,j.jsx)(r,{...y});case`cpu`:return(0,j.jsx)(_,{...y});case`globe`:return(0,j.jsx)(i,{...y});case`compass`:return(0,j.jsx)(g,{...y});case`anchor`:return(0,j.jsx)(o,{...y});default:return(0,j.jsx)(h,{...y})}}function R({item:e}){let{name:t,purpose:n,iconType:r,accent:i}=e;return(0,j.jsxs)(`div`,{className:`tech-card transition-all duration-300`,style:{background:`#ffffff`,border:`1.5px solid #e2e8f0`,borderRadius:`16px`,padding:`14px 16px`,display:`flex`,alignItems:`center`,gap:`14px`,cursor:`default`,position:`relative`,overflow:`hidden`,boxShadow:`0 2px 8px rgba(0, 45, 98, 0.04)`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-3px)`,e.currentTarget.style.borderColor=`#F06543`,e.currentTarget.style.boxShadow=`0 10px 24px rgba(0, 45, 98, 0.08)`},onMouseLeave:e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.borderColor=`#e2e8f0`,e.currentTarget.style.boxShadow=`0 2px 8px rgba(0, 45, 98, 0.04)`},children:[(0,j.jsx)(`div`,{style:{width:`42px`,height:`42px`,borderRadius:`12px`,background:`#FFF0EB`,border:`1px solid rgba(13, 148, 136, 0.25)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,transition:`all 0.3s ease`,color:`#F06543`},children:L(r,`#F06543`)}),(0,j.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,j.jsx)(`h4`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:`14px`,fontWeight:800,color:`#0B2545`,letterSpacing:`0.02em`,marginBottom:`2px`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t}),(0,j.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:`12.5px`,fontWeight:400,color:`#64748b`,lineHeight:1.2,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:n})]}),(0,j.jsx)(`div`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,backgroundColor:`#F06543`,opacity:.8}})]})}function z({category:e}){let{title:t,subtitle:n,items:r}=e;return(0,j.jsxs)(`div`,{className:`tech-category-group`,style:{background:`#f8fafc`,border:`1px solid #e2e8f0`,borderRadius:`20px`,padding:`20px`,backdropFilter:`blur(12px)`,WebkitBackdropFilter:`blur(12px)`},children:[(0,j.jsxs)(`div`,{style:{marginBottom:`14px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:`13.5px`,fontWeight:800,color:`#0B2545`,letterSpacing:`0.15em`,textTransform:`uppercase`},children:t}),(0,j.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:`13px`,color:`#64748b`,marginTop:`2px`},children:n})]}),(0,j.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:`12px`,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,padding:`4px 10px`,borderRadius:`12px`,border:`1px solid rgba(13, 148, 136, 0.25)`},children:[r.length,` MODULES`]})]}),(0,j.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3`,children:r.map(e=>(0,j.jsx)(R,{item:e},e.id))})]})}function B(e){let n={size:18,color:`#F06543`,strokeWidth:2};switch(e){case`user`:return(0,j.jsx)(y,{...n});case`react`:return(0,j.jsx)(u,{...n});case`cube`:return(0,j.jsx)(t,{...n});case`rocket`:return(0,j.jsx)(c,{...n});case`database`:return(0,j.jsx)(p,{...n});case`sparkles`:return(0,j.jsx)(m,{...n});default:return(0,j.jsx)(m,{...n})}}var V=()=>{let e=FLOW_STEPS||[{id:`user`,label:`USER`,iconType:`user`,desc:`Traveler Request`},{id:`react`,label:`REACT UI`,iconType:`react`,desc:`Interactive Interface`},{id:`three`,label:`3D EXPERIENCE`,iconType:`cube`,desc:`WebGL Island Scene`},{id:`api`,label:`NODE.JS API`,iconType:`rocket`,desc:`Secure Middleware`},{id:`db`,label:`MYSQL`,iconType:`database`,desc:`Travel Database`},{id:`data`,label:`TRAVEL DATA`,iconType:`sparkles`,desc:`Realtime Itinerary`}];return(0,j.jsxs)(`div`,{className:`w-full bg-[#ffffff] border border-[#e2e8f0] rounded-[20px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,45,98,0.06)]`,children:[(0,j.jsxs)(`div`,{className:`text-center mb-6`,children:[(0,j.jsx)(`span`,{className:`font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#F06543] uppercase`,children:`DATA PIPELINE FLOW`}),(0,j.jsx)(`h3`,{className:`font-['Space_Grotesk'] text-lg sm:text-xl font-extrabold text-[#0B2545] mt-1`,children:`How Andaman Trails Delivers Real-Time Experiences`})]}),(0,j.jsx)(`style`,{children:`
          .flow-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            gap: 8px;
            width: 100%;
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .flow-node {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 12px 14px;
            min-width: 130px;
            flex-shrink: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            box-shadow: 0 2px 8px rgba(0, 45, 98, 0.04);
          }

          .flow-node:hover {
            transform: translateY(-3px);
            border-color: #F06543;
            background: #ffffff;
            box-shadow: 0 8px 20px rgba(0, 45, 98, 0.08);
          }

          .node-icon {
            margin-bottom: 6px;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: #FFF0EB;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(13, 148, 136, 0.25);
          }

          .node-label {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 0.05em;
            color: #0B2545;
            text-transform: uppercase;
          }

          .node-desc {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 11px;
            color: #64748b;
            margin-top: 2px;
          }

          .flow-connector {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            min-width: 24px;
            position: relative;
          }

          .connector-line {
            width: 100%;
            height: 2px;
            background: #cbd5e1;
          }

          .connector-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #F06543;
            box-shadow: 0 0 6px #F06543;
            animation: moveDot 2s linear infinite;
          }

          @keyframes moveDot {
            0% { left: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }

          @media (max-width: 768px) {
            .flow-container {
              flex-direction: column;
              align-items: stretch;
              gap: 12px;
            }

            .flow-node {
              width: 100%;
              flex-direction: row;
              text-align: left;
              gap: 12px;
              padding: 10px 14px;
            }

            .node-icon {
              margin-bottom: 0;
            }

            .flow-connector {
              height: 16px;
              width: 2px;
              margin: 0 auto;
            }

            .connector-line {
              width: 2px;
              height: 100%;
              background: repeating-linear-gradient(
                180deg,
                rgba(22, 217, 255, 0.6),
                rgba(22, 217, 255, 0.6) 4px,
                transparent 4px,
                transparent 8px
              );
            }

            .connector-dot {
              animation: moveDotVertical 2s linear infinite;
            }
          }

          @keyframes moveDotVertical {
            0% { top: 0; left: -2px; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; left: -2px; opacity: 0; }
          }
        `}),(0,j.jsx)(`div`,{className:`flow-container`,children:e.map((t,n)=>(0,j.jsxs)(A.Fragment,{children:[(0,j.jsxs)(`div`,{className:`flow-node`,children:[(0,j.jsx)(`div`,{className:`node-icon`,children:B(t.iconType)}),(0,j.jsxs)(`div`,{className:`node-content`,children:[(0,j.jsx)(`span`,{className:`node-label`,children:t.label}),(0,j.jsx)(`span`,{className:`node-desc`,children:t.desc})]})]}),n<e.length-1&&(0,j.jsxs)(`div`,{className:`flow-connector`,children:[(0,j.jsx)(`div`,{className:`connector-line`}),(0,j.jsx)(`div`,{className:`connector-dot`,style:{animationDelay:`${n*.3}s`}})]})]},t.id||n))})]})},H=()=>(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`60px 20px`},children:[(0,j.jsx)(`style`,{children:`
          .tech-highlight-card {
            background: #ffffff;
            border: 1.5px solid #e2e8f0;
            border-radius: 20px;
            padding: 40px;
            max-width: 650px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0, 45, 98, 0.06);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .tech-highlight-card:hover {
             transform: translateY(-4px);
             box-shadow: 0 16px 36px rgba(0, 45, 98, 0.1);
             border-color: #F06543;
          }

          .tech-highlight-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #0B2545, #F06543);
          }

          .tech-badge {
            display: inline-block;
            color: #F06543;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 6px 14px;
            border: 1px solid rgba(13, 148, 136, 0.3);
            border-radius: 20px;
            margin-bottom: 20px;
            background: #FFF0EB;
          }

          .tech-title {
            color: #0B2545;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 26px;
            font-weight: 800;
            margin-bottom: 16px;
            line-height: 1.3;
          }

          .tech-text {
            color: #475569;
            font-family: 'Inter', sans-serif;
            font-size: 14.5px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .tech-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 13px 30px;
            border-radius: 30px;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 1px;
            border: none;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
          }

          .tech-cta:hover {
            box-shadow: 0 8px 24px rgba(0, 45, 98, 0.35);
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .tech-highlight-card {
                padding: 30px 20px;
            }
            .tech-title {
                font-size: 22px;
            }
          }
        `}),(0,j.jsxs)(`div`,{className:`tech-highlight-card`,children:[(0,j.jsx)(`div`,{className:`tech-badge`,children:`BUILT FOR THE NEXT GENERATION OF TRAVEL`}),(0,j.jsx)(`h3`,{className:`tech-title`,children:`Where Travel Expertise Meets Digital Innovation`}),(0,j.jsx)(`p`,{className:`tech-text`,children:`From interactive 3D destinations to smart trip planning, Andaman Trails combines travel expertise with modern digital experiences.`}),(0,j.jsxs)(`button`,{className:`tech-cta`,onClick:e=>{e.preventDefault();let t=document.getElementById(`hero-section`);t&&t.scrollIntoView({behavior:`smooth`})},children:[(0,j.jsx)(`span`,{children:`EXPLORE THE EXPERIENCE`}),(0,j.jsx)(`span`,{children:`→`})]})]})]}),U=[{id:`frontend`,title:`FRONTEND`,subtitle:`Interactive UI & 3D Web Graphics`,items:[{id:`react`,name:`React.js`,purpose:`Interactive UI`,iconType:`react`,accent:`#61dafb`},{id:`three`,name:`Three.js`,purpose:`3D Experiences`,iconType:`cube`,accent:`#F06543`},{id:`r3f`,name:`React Three Fiber`,purpose:`Declarative 3D`,iconType:`zap`,accent:`#00b4d8`},{id:`gsap`,name:`GSAP`,purpose:`Cinematic Animations`,iconType:`sparkles`,accent:`#88ce02`},{id:`tailwind`,name:`Tailwind CSS`,purpose:`Glassmorphic Styling`,iconType:`palette`,accent:`#38bdf8`}]},{id:`backend`,title:`BACKEND`,subtitle:`Core Engine & Data Pipelines`,items:[{id:`node`,name:`Node.js`,purpose:`Backend Infrastructure`,iconType:`server`,accent:`#68a063`},{id:`express`,name:`Express.js`,purpose:`RESTful Routing`,iconType:`layers`,accent:`#a8b2d1`},{id:`mysql`,name:`MySQL & Sequelize`,purpose:`Relational Database`,iconType:`database`,accent:`#00758f`},{id:`jwt`,name:`JWT Auth`,purpose:`Secure Access Tokens`,iconType:`lock`,accent:`#e63946`}]},{id:`infra`,title:`INFRASTRUCTURE`,subtitle:`Real-Time APIs & Payments`,items:[{id:`razorpay`,name:`Razorpay Gateway`,purpose:`Instant Payment Escrow`,iconType:`credit-card`,accent:`#3395ff`},{id:`vite`,name:`Vite Build Engine`,purpose:`Ultra-Fast HMR`,iconType:`zap`,accent:`#bd34fe`}]}];O.registerPlugin(k);var W=({categories:e=U})=>{let t=(0,A.useRef)(null),n=(0,A.useRef)(null),r=(0,A.useRef)(null),i=(0,A.useRef)(null),a=(0,A.useRef)(null);return(0,A.useEffect)(()=>{let e=O.context(()=>{O.from(n.current,{y:40,opacity:0,duration:.9,ease:`power3.out`,scrollTrigger:{trigger:n.current,start:`top 85%`}}),r.current&&O.from(r.current.children,{y:40,opacity:0,duration:.8,stagger:.18,ease:`power3.out`,scrollTrigger:{trigger:r.current,start:`top 80%`}}),i.current&&O.from(i.current,{y:30,opacity:0,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:i.current,start:`top 85%`}}),a.current&&O.from(a.current,{y:30,opacity:0,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:a.current,start:`top 90%`}})},t);return()=>e.revert()},[]),(0,j.jsxs)(`section`,{id:`technology-section`,ref:t,className:`relative w-full py-20 bg-[#f8fafc] text-[#334155] overflow-hidden border-t border-[#e2e8f0]`,children:[(0,j.jsx)(`div`,{className:`absolute top-1/4 left-1/4 w-96 h-96 bg-[#F06543]/5 rounded-full blur-3xl pointer-events-none`}),(0,j.jsx)(`div`,{className:`absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0B2545]/5 rounded-full blur-3xl pointer-events-none`}),(0,j.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`,children:[(0,j.jsxs)(`div`,{ref:n,className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,j.jsx)(`span`,{className:`font-['Space_Grotesk'] text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#F06543] uppercase block mb-3`,children:`POWERING THE EXPERIENCE`}),(0,j.jsx)(`h2`,{className:`font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2545] mb-4`,children:`TECHNOLOGY WE USE`}),(0,j.jsx)(`p`,{className:`font-['Inter'] text-sm sm:text-base text-[#475569] font-normal leading-relaxed`,children:`Built with modern technology to make your Andaman journey smarter, faster and more immersive.`})]}),(0,j.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16`,children:[(0,j.jsx)(`div`,{className:`lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[560px] sticky top-24`,children:(0,j.jsx)(I,{})}),(0,j.jsx)(`div`,{ref:r,className:`lg:col-span-7 space-y-6`,children:e.map(e=>(0,j.jsx)(z,{category:e},e.id))})]}),(0,j.jsx)(`div`,{ref:i,className:`mb-16`,children:(0,j.jsx)(V,{})}),(0,j.jsx)(`div`,{ref:a,children:(0,j.jsx)(H,{})})]})]})};export{W as default};