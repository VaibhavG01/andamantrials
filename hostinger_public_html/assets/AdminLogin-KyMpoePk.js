import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Gn as n,Qt as r,St as i,Tt as a,Zn as o,Zt as s,a as c,bn as l,j as u,qn as d,vn as f}from"./lucide-vendor-CBhgx3NO.js";import{v as p}from"./three-vendor-Md08yeGZ.js";import{t as m}from"./authService-ClMQMHAP.js";var h=e(o(),1),g=p();function _({onLoginSuccess:e}){let[o,p]=(0,h.useState)(!1),[_,v]=(0,h.useState)(!1),[y,b]=(0,h.useState)(``),[x,S]=(0,h.useState)(!1),[C,w]=(0,h.useState)({email:``,password:``});(0,h.useEffect)(()=>{let e=localStorage.getItem(`andaman_token`),t=localStorage.getItem(`andaman_user`);try{let n=t?JSON.parse(t):null;e&&n&&(n.role===`SUPER_ADMIN`||n.role===`ADMIN`||n.role===`EDITOR`)&&(window.history.pushState({},``,`/admin/dashboard`),window.dispatchEvent(new PopStateEvent(`popstate`)))}catch{}},[]);let T=e=>{w({...C,[e.target.name]:e.target.value}),b(``)};return(0,g.jsxs)(`div`,{className:`adm-login-page`,children:[(0,g.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700;800;900&display=swap');

        .adm-login-page {
          min-height: 100vh;
          width: 100%;
          background: #061527;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        /* Ambient Glow & Grid Background */
        .adm-bg-glow-1 {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.22) 0%, transparent 65%);
          filter: blur(40px);
          pointer-events: none;
        }
        .adm-bg-glow-2 {
          position: absolute;
          bottom: -10%;
          left: -5%;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 65%);
          filter: blur(40px);
          pointer-events: none;
        }
        .adm-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          pointer-events: none;
        }

        /* Main Double-Wing Shell */
        .adm-auth-container {
          width: 100%;
          max-width: 1040px;
          background: rgba(11, 37, 69, 0.75);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 32px;
          box-shadow: 
            0 30px 80px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(240, 101, 67, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 900px) {
          .adm-auth-container {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
          .adm-left-hero {
            display: none !important;
          }
        }

        /* Left Hero Showcase */
        .adm-left-hero {
          position: relative;
          background: linear-gradient(145deg, #07192C 0%, #0B2545 60%, #0D2C50 100%);
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .adm-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(240, 101, 67, 0.12);
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 6px 14px;
          border-radius: 30px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #FF8A65;
          text-transform: uppercase;
        }

        .adm-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Right Form Side */
        .adm-right-form {
          padding: 48px 42px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 600px) {
          .adm-right-form {
            padding: 36px 24px;
          }
        }

        /* Inputs */
        .adm-input-field {
          width: 100%;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 14px;
          padding: 14px 14px 14px 44px;
          color: #0B2545;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          outline: none;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }
        .adm-input-field:focus {
          background: #ffffff;
          border-color: #F06543;
          box-shadow: 0 0 0 4px rgba(240, 101, 67, 0.12);
        }

        /* Submit Button */
        .adm-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          border-radius: 16px;
          padding: 16px 24px;
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.38);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .adm-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(240, 101, 67, 0.48);
        }
        .adm-submit-btn:active {
          transform: translateY(0);
        }
      `}),(0,g.jsx)(`div`,{className:`adm-bg-glow-1`}),(0,g.jsx)(`div`,{className:`adm-bg-glow-2`}),(0,g.jsx)(`div`,{className:`adm-bg-grid`}),(0,g.jsxs)(`div`,{className:`adm-auth-container`,children:[(0,g.jsxs)(`div`,{className:`adm-left-hero`,children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,g.jsxs)(`div`,{className:`adm-hero-badge`,children:[(0,g.jsx)(u,{size:13,color:`#FF6B4A`}),(0,g.jsx)(`span`,{children:`COMMAND CONTROL CENTER`})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,background:`rgba(255, 255, 255, 0.06)`,padding:`5px 12px`,borderRadius:20,border:`1px solid rgba(255, 255, 255, 0.1)`},children:[(0,g.jsx)(`div`,{className:`adm-status-dot`}),(0,g.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:`#E2E8F0`,letterSpacing:`0.04em`},children:`All Nodes Live • 2026`})]})]}),(0,g.jsxs)(`div`,{style:{margin:`36px 0`},children:[(0,g.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:10,marginBottom:18},children:[(0,g.jsx)(`div`,{style:{width:44,height:44,borderRadius:12,background:`#ffffff`,padding:3,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 20px rgba(240, 101, 67, 0.4)`,border:`1.5px solid rgba(240, 101, 67, 0.6)`},children:(0,g.jsx)(`img`,{src:`/logo.png`,alt:`Logo`,style:{width:`100%`,height:`100%`,objectFit:`contain`,borderRadius:8}})}),(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#ffffff`,letterSpacing:`0.14em`},children:[`ANDAMAN `,(0,g.jsx)(`span`,{style:{color:`#FF6B4A`},children:`TRAILS`})]}),(0,g.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:10.5,fontWeight:800,color:`#94A3B8`,letterSpacing:`0.12em`,textTransform:`uppercase`},children:`EXECUTIVE SUITE & DISPATCH`})]})]}),(0,g.jsx)(`h1`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:38,fontWeight:600,color:`#ffffff`,lineHeight:1.15,margin:`0 0 16px`,letterSpacing:`-0.01em`},children:`Direct Control Over All Island Transit & Resorts.`}),(0,g.jsx)(`p`,{style:{fontSize:13.5,color:`#94A3B8`,lineHeight:1.6,margin:0,fontWeight:500},children:`Orchestrate high-speed catamaran ferries, 5-star ocean villas, scuba expeditions, and live traveler manifests with unified role-based authorization.`}),(0,g.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:12,marginTop:28},children:[(0,g.jsxs)(`div`,{style:{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.08)`,borderRadius:16,padding:`14px 16px`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`#FF6B4A`,marginBottom:4},children:[(0,g.jsx)(c,{size:16}),(0,g.jsx)(`span`,{style:{fontSize:11,fontWeight:800,fontFamily:`'Space Grotesk', sans-serif`},children:`FLEET & SLOTS`})]}),(0,g.jsx)(`div`,{style:{fontSize:12.5,color:`#E2E8F0`,fontWeight:700},children:`Realtime Ferry & Catamaran Sync`})]}),(0,g.jsxs)(`div`,{style:{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.08)`,borderRadius:16,padding:`14px 16px`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`#38BDF8`,marginBottom:4},children:[(0,g.jsx)(t,{size:16}),(0,g.jsx)(`span`,{style:{fontSize:11,fontWeight:800,fontFamily:`'Space Grotesk', sans-serif`},children:`ENTERPRISE RBAC`})]}),(0,g.jsx)(`div`,{style:{fontSize:12.5,color:`#E2E8F0`,fontWeight:700},children:`Strict Separation of Privileges`})]})]})]}),(0,g.jsxs)(`div`,{style:{borderTop:`1px solid rgba(255, 255, 255, 0.08)`,paddingTop:18,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,color:`#64748B`,fontSize:12,fontWeight:600},children:[(0,g.jsx)(a,{size:14,color:`#10B981`}),(0,g.jsx)(`span`,{children:`TLS 1.3 256-bit Encrypted Session`})]}),(0,g.jsx)(`span`,{style:{fontSize:11,color:`#94A3B8`,fontFamily:`'Space Grotesk', sans-serif`,fontWeight:700},children:`PORT BLAIR HQ`})]})]}),(0,g.jsxs)(`div`,{className:`adm-right-form`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{style:{marginBottom:28},children:[(0,g.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`4px 12px`,borderRadius:20,marginBottom:10},children:[(0,g.jsx)(u,{size:12,color:`#F06543`}),(0,g.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:10.5,fontWeight:800,letterSpacing:`0.14em`,color:`#F06543`,textTransform:`uppercase`},children:`AUTHORIZED PERSONNEL ONLY`})]}),(0,g.jsx)(`h2`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:28,fontWeight:900,color:`#0B2545`,margin:`2px 0 8px`,letterSpacing:`-0.02em`},children:`Admin Sign In`}),(0,g.jsx)(`p`,{style:{fontSize:13.5,color:`#64748B`,margin:0,fontWeight:500},children:`Enter your registered administrator credentials to access the management center.`})]}),y&&(0,g.jsxs)(`div`,{style:{background:`#FEF2F2`,border:`1.5px solid #FCA5A5`,borderRadius:14,padding:`12px 16px`,marginBottom:20,display:`flex`,alignItems:`center`,gap:10,color:`#B91C1C`,fontSize:12.5,fontWeight:700},children:[(0,g.jsx)(l,{size:17,color:`#DC2626`,style:{flexShrink:0}}),(0,g.jsx)(`span`,{children:y})]}),x&&(0,g.jsxs)(`div`,{style:{background:`#F0FDF4`,border:`1.5px solid #86EFAC`,borderRadius:14,padding:`12px 16px`,marginBottom:20,display:`flex`,alignItems:`center`,gap:10,color:`#15803D`,fontSize:12.5,fontWeight:700},children:[(0,g.jsx)(f,{size:17,color:`#16A34A`,style:{flexShrink:0}}),(0,g.jsx)(`span`,{children:`Authentication successful! Launching Admin Suite...`})]}),(0,g.jsxs)(`form`,{onSubmit:async t=>{if(t.preventDefault(),b(``),!C.email||!C.password){b(`Please provide both administrator email and password.`);return}v(!0);try{let t=(await m.login({email:C.email,password:C.password})).data?.user;if(!t)throw Error(`Authentication succeeded but user profile was not returned.`);if(t.role!==`SUPER_ADMIN`&&t.role!==`ADMIN`&&t.role!==`EDITOR`){m.logout(),b(`Access denied. Administrator privileges required.`);return}S(!0),e&&e(t),setTimeout(()=>{window.history.pushState({},``,`/admin/dashboard`),window.dispatchEvent(new PopStateEvent(`popstate`))},500)}catch(e){console.error(`Admin Login Error:`,e),b(e.message||`Invalid administrator email or password. Please verify credentials.`)}finally{v(!1)}},style:{display:`flex`,flexDirection:`column`,gap:18},children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#0B2545`,marginBottom:6,letterSpacing:`0.06em`,textTransform:`uppercase`},children:`Official Email Address *`}),(0,g.jsxs)(`div`,{style:{position:`relative`},children:[(0,g.jsx)(i,{size:17,color:`#94A3B8`,style:{position:`absolute`,left:14,top:`50%`,transform:`translateY(-50%)`}}),(0,g.jsx)(`input`,{type:`email`,name:`email`,value:C.email,onChange:T,required:!0,placeholder:`name@andaman-trails.com`,className:`adm-input-field`})]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`label`,{style:{display:`block`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#0B2545`,marginBottom:6,letterSpacing:`0.06em`,textTransform:`uppercase`},children:`Security Access Key *`}),(0,g.jsxs)(`div`,{style:{position:`relative`},children:[(0,g.jsx)(a,{size:17,color:`#94A3B8`,style:{position:`absolute`,left:14,top:`50%`,transform:`translateY(-50%)`}}),(0,g.jsx)(`input`,{type:o?`text`:`password`,name:`password`,value:C.password,onChange:T,required:!0,placeholder:`••••••••••••`,className:`adm-input-field`,style:{paddingRight:44}}),(0,g.jsx)(`button`,{type:`button`,onClick:()=>p(!o),style:{position:`absolute`,right:14,top:`50%`,transform:`translateY(-50%)`,background:`none`,border:`none`,color:`#94A3B8`,cursor:`pointer`,display:`flex`,alignItems:`center`,padding:0},children:o?(0,g.jsx)(r,{size:17}):(0,g.jsx)(s,{size:17})})]})]}),(0,g.jsx)(`button`,{type:`submit`,disabled:_,className:`adm-submit-btn`,style:{opacity:_?.75:1,marginTop:4},children:_?(0,g.jsx)(`span`,{children:`AUTHENTICATING SECURE SESSION...`}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{children:`ENTER MANAGEMENT CENTER`}),(0,g.jsx)(n,{size:18})]})})]})]}),(0,g.jsx)(`div`,{style:{marginTop:28,paddingTop:18,borderTop:`1px solid #E2E8F0`,textAlign:`center`},children:(0,g.jsxs)(`a`,{href:`/`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/`),window.dispatchEvent(new PopStateEvent(`popstate`))},style:{display:`inline-flex`,alignItems:`center`,gap:6,color:`#64748B`,fontSize:12.5,fontFamily:`'Space Grotesk', sans-serif`,fontWeight:700,textDecoration:`none`,transition:`color 0.2s`},onMouseEnter:e=>e.currentTarget.style.color=`#F06543`,onMouseLeave:e=>e.currentTarget.style.color=`#64748B`,children:[(0,g.jsx)(d,{size:14}),(0,g.jsx)(`span`,{children:`Return to Andaman Trails Public Portal`})]})})]})]})]})}export{_ as default};