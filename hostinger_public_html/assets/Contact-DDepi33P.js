import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,En as n,Et as r,G as i,Gn as a,Lt as o,R as s,St as c,Vn as l,Zn as u,_t as d,a as f,ct as p,gn as m,j as h,ln as g,mn as _,vn as v,wn as y,xt as b}from"./lucide-vendor-CBhgx3NO.js";import{s as x,v as S}from"./three-vendor-Md08yeGZ.js";import{t as C}from"./apiClient-CtyYBnF-.js";import{n as w}from"./gsap-vendor-Cgjl6ODA.js";import{h as T,n as E,t as D}from"./index-Cq-P1kYg.js";import{i as O,r as k,t as A}from"./FooterBottom-BRi21ULf.js";var j=e(u(),1),M=S(),N={number:`919137835433`,defaultMessage:`Hello Andaman Trails! I would like to plan a trip to the Andaman Islands.`};function P({onStartPlanning:e,whatsapp:t=N}){let n=(0,j.useRef)(null),r=(0,j.useRef)(null);return(0,j.useEffect)(()=>{r.current&&w.fromTo(r.current,{opacity:0,y:30,scale:.97},{opacity:1,y:0,scale:1,duration:.9,ease:`power2.out`,delay:.2})},[]),(0,M.jsxs)(`section`,{ref:n,className:`contact-hero-root`,children:[(0,M.jsx)(`style`,{children:`
        .contact-hero-root {
          position: relative;
          width: 100%;
          min-height: 62vh;
          max-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 100px 24px 60px;
          box-sizing: border-box;
        }

        .contact-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .contact-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.65) saturate(1.15);
          transform: scale(1.04);
          transition: transform 10s ease;
        }
        .contact-hero-root:hover .contact-hero-bg img {
          transform: scale(1.08);
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(0, 45, 98, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%);
        }

        .contact-hero-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 380px;
          background: radial-gradient(ellipse at center, rgba(22, 217, 255, 0.16) 0%, rgba(33, 230, 193, 0.08) 45%, transparent 70%);
          z-index: 3;
          pointer-events: none;
        }

        .contact-hero-content {
          position: relative;
          z-index: 4;
          max-width: 820px;
          text-align: center;
          margin: 0 auto;
        }

        .contact-breadcrumb {
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
          margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .contact-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.06;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.8);
        }

        .contact-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #e2e8f0;
          line-height: 1.65;
          margin: 0 auto 32px;
          max-width: 680px;
        }

        .contact-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .contact-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #0B2545, #F06543);
          border: none;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .contact-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .contact-btn-whatsapp {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #25d366;
          background: rgba(37, 211, 102, 0.12);
          border: 1px solid rgba(37, 211, 102, 0.35);
          padding: 14px 26px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(12px);
        }
        .contact-btn-whatsapp:hover {
          background: #25d366;
          color: #ffffff;
          border-color: #25d366;
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.4);
          transform: translateY(-3px);
        }
      `}),(0,M.jsx)(`div`,{className:`contact-hero-bg`,children:(0,M.jsx)(`img`,{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90`,alt:`Andaman Ocean Hero Visual`})}),(0,M.jsx)(`div`,{className:`contact-hero-overlay`}),(0,M.jsx)(`div`,{className:`contact-hero-glow`}),(0,M.jsxs)(`div`,{ref:r,className:`contact-hero-content`,children:[(0,M.jsxs)(`div`,{className:`contact-breadcrumb`,children:[(0,M.jsx)(`a`,{href:`/home`,style:{color:`#64748b`,textDecoration:`none`},children:`HOME`}),(0,M.jsx)(y,{size:12,color:`#F06543`}),(0,M.jsx)(`span`,{children:`CONTACT`})]}),(0,M.jsxs)(`h1`,{className:`contact-hero-title`,children:[`LET'S PLAN YOUR `,(0,M.jsx)(`br`,{}),(0,M.jsx)(`span`,{style:{color:`#F06543`},children:`ANDAMAN JOURNEY`})]}),(0,M.jsx)(`p`,{className:`contact-hero-desc`,children:`Have a question, need help choosing the right package, or want a completely customized trip? Our travel experts are here to help turn your island vision into reality.`}),(0,M.jsxs)(`div`,{className:`contact-hero-actions`,children:[(0,M.jsxs)(`button`,{onClick:e,className:`contact-btn-primary`,children:[(0,M.jsx)(`span`,{children:`START PLANNING`}),(0,M.jsx)(a,{size:15})]}),(0,M.jsxs)(`a`,{href:`https://wa.me/${t.number}?text=${encodeURIComponent(t.defaultMessage)}`,target:`_blank`,rel:`noopener noreferrer`,className:`contact-btn-whatsapp`,children:[(0,M.jsx)(d,{size:15}),(0,M.jsx)(`span`,{children:`WHATSAPP US`})]})]})]})]})}var F={PhoneCall:p,Mail:c,MessageSquare:d,MapPin:b};function I({item:e,onAction:t}){let n=F[e.icon]||p;return(0,M.jsxs)(`div`,{className:`contact-info-card`,children:[(0,M.jsx)(`style`,{children:`
        .contact-info-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.08);
          position: relative;
          overflow: hidden;
        }

        .contact-info-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(33, 230, 193, 0.15);
          background: #ffffff;
        }

        .contact-card-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(22, 217, 255, 0.12);
          border: 1px solid rgba(22, 217, 255, 0.3);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .contact-card-icon-box {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
        }

        .contact-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0B2545;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .contact-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 20px;
          flex: 1;
        }

        .contact-card-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #F06543;
          margin-bottom: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .contact-card-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          border: 1px solid rgba(33, 230, 193, 0.3);
          padding: 10px 18px;
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
          width: 100%;
          text-decoration: none;
          box-sizing: border-box;
        }

        .contact-info-card:hover .contact-card-btn {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
        }
      `}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{className:`contact-card-icon-box`,children:(0,M.jsx)(n,{size:24})}),(0,M.jsx)(`div`,{className:`contact-card-title`,children:e.title}),(0,M.jsx)(`div`,{className:`contact-card-desc`,children:e.desc}),(0,M.jsx)(`div`,{className:`contact-card-value`,children:e.value})]}),(0,M.jsxs)(`button`,{className:`contact-card-btn`,onClick:()=>t&&t(e),children:[(0,M.jsx)(`span`,{children:e.actionText}),(0,M.jsx)(a,{size:13})]})]})}var L=[{id:`call-us`,title:`CALL US`,desc:`Get direct travel assistance from our island experts.`,actionText:`CALL NOW`,actionType:`phone`,value:`+91 91378 35433`,icon:`PhoneCall`},{id:`email-us`,title:`EMAIL US`,desc:`Send us your custom itinerary & travel requirements.`,actionText:`SEND EMAIL`,actionType:`email`,value:`info@andamantrails.com`,icon:`Mail`},{id:`whatsapp-us`,title:`WHATSAPP`,desc:`Chat directly with our island vacation concierges.`,actionText:`CHAT NOW`,actionType:`whatsapp`,value:`+91 91378 35433`,icon:`MessageSquare`},{id:`visit-office`,title:`VISIT US`,desc:`Meet our trip designers at our island booking lounge.`,actionText:`GET DIRECTIONS`,actionType:`maps`,value:`Aberdeen Bazaar, Opposite Jetty Gate, Port Blair`,icon:`MapPin`}];function R({cards:e=L}){let t=(0,j.useRef)(null);(0,j.useEffect)(()=>{if(!t.current)return;let e=t.current.children;w.fromTo(e,{opacity:0,y:25},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`})},[]);let n=e=>{e.actionType===`phone`?window.location.href=`tel:${e.value.replace(/\s+/g,``)}`:e.actionType===`email`?window.location.href=`mailto:${e.value}`:e.actionType===`whatsapp`?window.open(`https://wa.me/919137835433?text=Hello%20Andaman%20Trails!%20I%20would%20like%20to%20plan%20a%20trip%20to%20the%20Andaman%20Islands.`,`_blank`):e.actionType===`maps`&&window.open(`https://maps.google.com/?q=Raghuleela+Mega+Mall+Kandivali+West+Mumbai`,`_blank`)};return(0,M.jsxs)(`section`,{className:`contact-info-section`,children:[(0,M.jsx)(`style`,{children:`
        .contact-info-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .contact-info-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 44px;
        }

        .contact-sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .contact-sec-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 12px;
        }

        .contact-sec-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),(0,M.jsxs)(`div`,{className:`contact-info-header`,children:[(0,M.jsxs)(`div`,{className:`contact-sub-badge`,children:[(0,M.jsx)(h,{size:12,color:`#F06543`}),(0,M.jsx)(`span`,{children:`REACH OUT ANYTIME`})]}),(0,M.jsx)(`h2`,{className:`contact-sec-title`,children:`WE'RE HERE TO HELP`}),(0,M.jsx)(`p`,{className:`contact-sec-desc`,children:`Reach out to us and let's turn your Andaman travel idea into an unforgettable real journey.`})]}),(0,M.jsx)(`div`,{ref:t,className:`contact-cards-grid`,children:e.map(e=>(0,M.jsx)(I,{item:e,onAction:n},e.id))})]})}function z({label:e,required:t,error:n,children:r}){return(0,M.jsxs)(`div`,{className:`form-field-wrapper`,children:[(0,M.jsx)(`style`,{children:`
        .form-field-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          position: relative;
        }

        .form-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #b0c9d6;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .form-required-star {
          color: #F06543;
          margin-left: 3px;
        }

        .form-field-wrapper input,
        .form-field-wrapper select,
        .form-field-wrapper textarea {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #ffffff;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 16px;
          outline: none;
          transition: all 0.25s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .form-field-wrapper input::placeholder,
        .form-field-wrapper textarea::placeholder {
          color: #4a6678;
        }

        .form-field-wrapper input:focus,
        .form-field-wrapper select:focus,
        .form-field-wrapper textarea:focus {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 16px rgba(22, 217, 255, 0.25);
        }

        .form-error-msg {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #ff4f7b;
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 4px;
          animation: formErrFade 0.25s ease;
        }
        @keyframes formErrFade {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),e&&(0,M.jsx)(`label`,{className:`form-label`,children:(0,M.jsxs)(`span`,{children:[e,t&&(0,M.jsx)(`span`,{className:`form-required-star`,children:`*`})]})}),r,n&&(0,M.jsxs)(`div`,{className:`form-error-msg`,children:[`⚠️ `,n]})]})}async function B(e){if(e.inquiryType===`General Inquiry`||!e.travelDate){let t={name:e.fullName,email:e.email,phone:e.phone,subject:e.inquiryType||`General Inquiry`,message:e.message};return await C(`/contact`,{method:`POST`,body:JSON.stringify(t)})}{let t=`
Travelers: ${e.travelers||`N/A`}
Duration: ${e.duration||`N/A`}
Interests: ${Array.isArray(e.interests)?e.interests.join(`, `):`None`}
Custom Trip Options Requested: ${e.customTrip?`Yes`:`No`}

User Message:
${e.message||`No additional message provided.`}
    `.trim(),n={name:e.fullName,email:e.email,phone:e.phone,type:(e.inquiryType||`PLAN_A_TRIP`).toUpperCase().replace(/\s+/g,`_`),message:t,preferredDate:e.travelDate};return await C(`/inquiries`,{method:`POST`,body:JSON.stringify(n)})}}function V({selectedInquiryCategory:e}){let[t,n]=(0,j.useState)({fullName:``,email:``,phone:``,travelDate:``,travelers:`2 (Couple)`,inquiryType:`Honeymoon Package`,message:``}),[a,o]=(0,j.useState)({}),[s,c]=(0,j.useState)(!1),[l,u]=(0,j.useState)(!1);(0,j.useEffect)(()=>{e&&n(t=>({...t,inquiryType:e,customTrip:e===`Custom Package`}))},[e]);let d=()=>{let e={};return t.fullName.trim()||(e.fullName=`Please enter your name.`),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email.trim())||(e.email=`Please enter a valid email address.`):e.email=`Please enter your email.`,t.phone.trim()||(e.phone=`Please enter your phone number.`),t.travelDate||(e.travelDate=`Please select your travel date.`),t.travelers||(e.travelers=`Please select number of travelers.`),e};return(0,M.jsxs)(`div`,{id:`contact-form-container`,className:`contact-form-card`,children:[(0,M.jsx)(`style`,{children:`
        .contact-form-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(22, 217, 255, 0.05);
          position: relative;
        }

        @media (max-width: 640px) {
          .contact-form-card {
            padding: 24px 20px;
          }
        }

        .contact-form-hdr {
          margin-bottom: 28px;
        }

        .contact-form-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .contact-form-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 8px;
        }

        .contact-form-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 18px;
        }

        @media (max-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Interest Pill Selector */
        .interest-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .interest-pill-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b;
          transition: all 0.25s ease;
        }

        .interest-pill-btn:hover {
          color: #F06543;
          border-color: rgba(22, 217, 255, 0.4);
        }

        .interest-pill-btn.active {
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border-color: #F06543;
          color: #F06543;
          box-shadow: 0 2px 10px rgba(33, 230, 193, 0.2);
        }

        /* Custom Checkbox */
        .custom-trip-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 24px;
          padding: 12px 16px;
          background: rgba(22, 217, 255, 0.05);
          border: 1px solid rgba(22, 217, 255, 0.18);
          border-radius: 12px;
          cursor: pointer;
        }

        .custom-trip-row input[type='checkbox'] {
          width: 16px;
          height: 16px;
          accent-color: #F06543;
          cursor: pointer;
        }

        .contact-submit-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 14px 28px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 0 6px 20px rgba(22, 217, 255, 0.3);
        }
        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(22, 217, 255, 0.5);
        }
        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Success Card */
        .contact-success-card {
          text-align: center;
          padding: 40px 24px;
          animation: succFadeIn 0.4s ease;
        }
        @keyframes succFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}),l?(0,M.jsxs)(`div`,{className:`contact-success-card`,children:[(0,M.jsx)(`div`,{style:{width:64,height:64,borderRadius:`50%`,background:`rgba(33, 230, 193, 0.15)`,border:`2px solid #F06543`,color:`#F06543`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 16px`,boxShadow:`0 0 30px rgba(33, 230, 193, 0.4)`},children:(0,M.jsx)(v,{size:32})}),(0,M.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:22,fontWeight:900,color:`#334155`,letterSpacing:`0.05em`,marginBottom:8},children:`INQUIRY SENT ✓`}),(0,M.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:14,color:`#64748b`,maxWidth:420,margin:`0 auto 24px`,lineHeight:1.6},children:`Thank you! Our Andaman travel expert will get back to you shortly on email & WhatsApp.`}),(0,M.jsx)(`button`,{onClick:()=>{u(!1),n({fullName:``,email:``,phone:``,travelDate:``,travelers:`2 (Couple)`,inquiryType:`Honeymoon Package`,message:``})},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`rgba(22, 217, 255, 0.1)`,border:`1px solid rgba(22, 217, 255, 0.3)`,padding:`10px 20px`,borderRadius:12,cursor:`pointer`},children:`SEND ANOTHER INQUIRY`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`contact-form-hdr`,children:[(0,M.jsxs)(`div`,{className:`contact-form-sub`,children:[(0,M.jsx)(h,{size:12,color:`#F06543`}),(0,M.jsx)(`span`,{children:`CUSTOM TRIP ASSISTANT`})]}),(0,M.jsx)(`h3`,{className:`contact-form-title`,children:`TELL US ABOUT YOUR TRIP`}),(0,M.jsx)(`p`,{className:`contact-form-desc`,children:`Share a few details and we'll help you plan the perfect Andaman experience.`})]}),(0,M.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault();let n=d();if(Object.keys(n).length>0){o(n);return}o({}),c(!0);try{(await B(t)).success&&u(!0)}catch{o({form:`Unable to submit inquiry. Please try again or WhatsApp us directly.`})}finally{c(!1)}},noValidate:!0,children:[(0,M.jsxs)(`div`,{className:`contact-form-grid`,children:[(0,M.jsx)(z,{label:`FULL NAME *`,required:!0,error:a.fullName,children:(0,M.jsx)(`input`,{type:`text`,placeholder:`Enter your full name`,value:t.fullName,onChange:e=>n({...t,fullName:e.target.value})})}),(0,M.jsx)(z,{label:`PHONE NUMBER *`,required:!0,error:a.phone,children:(0,M.jsx)(`input`,{type:`tel`,placeholder:`Enter your phone number`,value:t.phone,onChange:e=>n({...t,phone:e.target.value})})})]}),(0,M.jsxs)(`div`,{className:`contact-form-grid`,children:[(0,M.jsx)(z,{label:`EMAIL ADDRESS *`,required:!0,error:a.email,children:(0,M.jsx)(`input`,{type:`email`,placeholder:`Enter your email address`,value:t.email,onChange:e=>n({...t,email:e.target.value})})}),(0,M.jsx)(z,{label:`TRAVEL DATE`,required:!0,error:a.travelDate,children:(0,M.jsx)(`input`,{type:`date`,value:t.travelDate,onChange:e=>n({...t,travelDate:e.target.value})})})]}),(0,M.jsxs)(`div`,{className:`contact-form-grid`,children:[(0,M.jsx)(z,{label:`TRIP TYPE`,children:(0,M.jsxs)(`select`,{value:t.inquiryType,onChange:e=>n({...t,inquiryType:e.target.value}),children:[(0,M.jsx)(`option`,{value:`Honeymoon Package`,children:`Honeymoon Package`}),(0,M.jsx)(`option`,{value:`Family Holiday`,children:`Family Holiday`}),(0,M.jsx)(`option`,{value:`Adventure Trip`,children:`Adventure Trip`}),(0,M.jsx)(`option`,{value:`Solo Travel`,children:`Solo Travel`}),(0,M.jsx)(`option`,{value:`Corporate Group`,children:`Corporate Group`}),(0,M.jsx)(`option`,{value:`Budget Backpacking`,children:`Budget Backpacking`}),(0,M.jsx)(`option`,{value:`Custom Itinerary`,children:`Custom Itinerary`})]})}),(0,M.jsx)(z,{label:`NO. OF TRAVELERS`,required:!0,error:a.travelers,children:(0,M.jsxs)(`select`,{value:t.travelers,onChange:e=>n({...t,travelers:e.target.value}),children:[(0,M.jsx)(`option`,{value:`1 (Solo)`,children:`1 (Solo)`}),(0,M.jsx)(`option`,{value:`2 (Couple)`,children:`2 (Couple)`}),(0,M.jsx)(`option`,{value:`3-5 (Small Group)`,children:`3–5 (Small Group)`}),(0,M.jsx)(`option`,{value:`6-10 (Group)`,children:`6–10 (Group)`}),(0,M.jsx)(`option`,{value:`10+ (Large Group)`,children:`10+ (Large Group)`})]})})]}),(0,M.jsx)(z,{label:`YOUR MESSAGE / SPECIAL REQUESTS`,children:(0,M.jsx)(`textarea`,{rows:3,placeholder:`Tell us what you're looking for, destinations you want to cover...`,value:t.message,onChange:e=>n({...t,message:e.target.value})})}),(0,M.jsx)(`button`,{type:`submit`,disabled:s,className:`contact-submit-btn`,children:s?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r,{size:16,className:`animate-spin`}),(0,M.jsx)(`span`,{children:`SENDING ENQUIRY...`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`span`,{children:`SEND MY ENQUIRY`}),(0,M.jsx)(i,{size:14})]})})]})]})]})}function H({office:e}){let[t,n]=(0,j.useState)(k);(0,j.useEffect)(()=>{O.getSettings().then(e=>{e&&n(e)}).catch(()=>{})},[]);let r={label:e?.label||t.headOfficeLabel||`PORT BLAIR HEADQUARTERS`,address:e?.address||t.headOfficeAddress||`Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101`,googleMapsUrl:e?.googleMapsUrl||`https://maps.google.com/?q=${encodeURIComponent(t.headOfficeAddress||`Aberdeen Bazaar Port Blair`)}`,hours:e?.hours||t.supportHours||`Mon - Sat: 9:00 AM - 7:00 PM IST`};return(0,M.jsxs)(`div`,{className:`office-loc-card`,children:[(0,M.jsx)(`style`,{children:`
        .office-loc-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .office-loc-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 4px;
        }

        .office-loc-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 2px;
        }

        .office-loc-addr {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          line-height: 1.4;
          max-width: 340px;
        }

        .office-dir-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          background: rgba(240, 101, 67, 0.12);
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 10px 18px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .office-dir-btn:hover {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 45, 98, 0.25);
        }
      `}),(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{className:`office-loc-lbl`,children:[(0,M.jsx)(b,{size:12,color:`#F06543`}),(0,M.jsx)(`span`,{children:r.label})]}),(0,M.jsx)(`div`,{className:`office-loc-title`,children:`VISIT US`}),(0,M.jsx)(`div`,{className:`office-loc-addr`,children:r.address}),(0,M.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11,color:`#627d8a`,marginTop:4,display:`flex`,alignItems:`center`,gap:4},children:[(0,M.jsx)(_,{size:11,color:`#627d8a`}),(0,M.jsx)(`span`,{children:r.hours})]})]}),(0,M.jsxs)(`a`,{href:r.googleMapsUrl,target:`_blank`,rel:`noopener noreferrer`,className:`office-dir-btn`,children:[(0,M.jsx)(`span`,{children:`GET DIRECTIONS`}),(0,M.jsx)(a,{size:12})]})]})}function U(){let[e,t]=(0,j.useState)(E),[n,r]=(0,j.useState)(()=>E.find(e=>e.id===`havelock`||e.id===`havelock-island`)||E[0]),[i,a]=(0,j.useState)(null);return(0,j.useEffect)(()=>{T.getDestinations().then(e=>{if(e&&e.data&&Array.isArray(e.data)&&e.data.length>0){let n=e.data.map(e=>{let t=E.find(t=>t.id===e.slug||t.name.toLowerCase()===e.name.toLowerCase())||E[0];return{...t,id:e.slug||t.id,name:e.name||t.name,subtitle:e.subtitle||t.subtitle,description:e.description||t.description,shortDescription:e.shortDescription||t.shortDescription,famousFor:e.famousFor||t.famousFor,attractions:e.attractions||t.attractions,activities:e.activities||t.activities,badge:e.badge||t.badge}});t(n)}}).catch(()=>{})},[]),(0,M.jsxs)(`div`,{className:`contact-map-card`,children:[(0,M.jsx)(`style`,{children:`
        .contact-map-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 560px;
          background: #010d1f;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .map-canvas-container {
          position: relative;
          width: 100%;
          height: 380px;
          background: #010d1f;
        }

        .map-badge-hdr {
          position: absolute;
          top: 18px;
          left: 20px;
          z-index: 10;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #F06543;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(240, 101, 67, 0.35);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .map-tooltip-box {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          z-index: 10;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(240, 101, 67, 0.35);
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          animation: tooltipFade 0.3s ease;
        }
        @keyframes tooltipFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .map-tooltip-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          color: #0B2545;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .map-tooltip-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .map-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #F06543;
          background: #FFF0EB;
          padding: 3px 9px;
          border-radius: 10px;
          border: 1px solid rgba(240, 101, 67, 0.25);
        }
      `}),(0,M.jsxs)(`div`,{className:`map-canvas-container`,children:[(0,M.jsxs)(`div`,{className:`map-badge-hdr`,children:[(0,M.jsx)(g,{size:13,color:`#F06543`}),(0,M.jsx)(`span`,{children:`INTERACTIVE 3D ISLAND ROUTE`})]}),(0,M.jsx)(x,{style:{position:`absolute`,inset:0},shadows:{type:1},gl:{antialias:!0,alpha:!1,powerPreference:`high-performance`},camera:{fov:50,near:.1,far:200,position:[0,14,16]},onCreated:({gl:e})=>{e.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.toneMapping=4,e.toneMappingExposure=1.1,e.shadowMap.enabled=!0,e.shadowMap.type=1},dpr:[1,1.5],children:(0,M.jsx)(j.Suspense,{fallback:null,children:(0,M.jsx)(D,{destinations:e,selectedId:n?.id,hoveredId:i,onIslandClick:e=>r(e),onIslandHover:e=>a(e?.id||e),isNight:!1})})}),n&&(0,M.jsxs)(`div`,{className:`map-tooltip-box`,children:[(0,M.jsxs)(`div`,{className:`map-tooltip-title`,children:[(0,M.jsx)(b,{size:14,color:`#F06543`}),(0,M.jsxs)(`span`,{children:[n.name.toUpperCase(),` `,n.subtitle?`(${n.subtitle.toUpperCase()})`:``]})]}),(0,M.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11.5,color:`#64748b`,marginBottom:6},children:[`Popular for: `,(0,M.jsx)(`strong`,{style:{color:`#0B2545`},children:n.famousFor||`Coral Reefs & Pristine Beaches`})]}),(0,M.jsx)(`div`,{className:`map-tooltip-tags`,children:(n.attractions||n.activities||[`Radhanagar Beach`,`Scuba Diving`,`Snorkeling`,`Elephant Beach`]).slice(0,4).map((e,t)=>(0,M.jsx)(`span`,{className:`map-tag-pill`,children:e},t))})]})]}),(0,M.jsx)(`div`,{style:{padding:18,background:`#ffffff`},children:(0,M.jsx)(H,{})})]})}var W=[{id:`plan-a-trip`,label:`Plan a New Trip`,formValue:`Custom Itinerary`},{id:`custom-package`,label:`Custom Tour Package`,formValue:`Tour Package`},{id:`hotel-and-stay`,label:`Hotel & Resort Stays`,formValue:`Resort & Stays`},{id:`ferry-info`,label:`High-Speed Ferry Tickets`,formValue:`Ferry Booking`},{id:`activities`,label:`Scuba & Watersports`,formValue:`Scuba Diving & Watersports`},{id:`general-enquiry`,label:`General Questions`,formValue:`General Inquiry`}],G={"plan-a-trip":g,"custom-package":h,"hotel-and-stay":o,"ferry-info":s,activities:f,"general-enquiry":m};function K({onSelectCategory:e,categories:t=W}){let n=(0,j.useRef)(null);(0,j.useEffect)(()=>{n.current&&w.fromTo(n.current.children,{opacity:0,y:20},{opacity:1,y:0,duration:.6,stagger:.1,ease:`power2.out`})},[]);let r=t=>{e&&e(t.formValue);let n=document.getElementById(`contact-form-container`);n&&n.scrollIntoView({behavior:`smooth`})};return(0,M.jsxs)(`section`,{className:`inquiry-options-section`,children:[(0,M.jsx)(`style`,{children:`
        .inquiry-options-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .inquiry-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .inquiry-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .inquiry-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .inquiry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .inquiry-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .inquiry-grid { grid-template-columns: 1fr; }
        }

        .inquiry-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .inquiry-card:hover {
          transform: translateY(-4px);
          border-color: rgba(33, 230, 193, 0.5);
          background: #ffffff;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .inquiry-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(22, 217, 255, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .inquiry-card:hover .inquiry-icon-box {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
        }
      `}),(0,M.jsxs)(`div`,{className:`inquiry-hdr`,children:[(0,M.jsx)(`div`,{className:`inquiry-sub`,children:`SELECT AN INQUIRY TYPE`}),(0,M.jsx)(`h2`,{className:`inquiry-title`,children:`WHAT CAN WE HELP YOU WITH?`})]}),(0,M.jsx)(`div`,{ref:n,className:`inquiry-grid`,children:t.map(e=>{let t=G[e.id]||g;return(0,M.jsxs)(`div`,{className:`inquiry-card`,onClick:()=>r(e),children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14},children:[(0,M.jsx)(`div`,{className:`inquiry-icon-box`,children:(0,M.jsx)(t,{size:22})}),(0,M.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13.5,fontWeight:800,color:`#334155`,letterSpacing:`0.04em`},children:e.label})]}),(0,M.jsx)(a,{size:16,color:`#F06543`})]},e.id)})})]})}var q=[{id:`local-intel`,title:`REAL LOCAL INTELLIGENCE`,desc:`Stationed on the islands, providing up-to-the-minute weather, ferry schedule, and water visibility advice.`,icon:`Compass`},{id:`fast-response`,title:`1-ON-1 DEDICATED EXPERT`,desc:`No robotic call centers. Speak directly with a dedicated Andaman holiday planner for your entire journey.`,icon:`Sparkles`},{id:`transparent`,title:`CLEAR & HONEST PRICING`,desc:`Itemized transparent quotes with zero hidden jetty fees, permit charges, or surprise tourist markups.`,icon:`ShieldCheck`},{id:`custom-craft`,title:`100% CUSTOMIZABLE PLANS`,desc:`Tailor-made itineraries configured around your specific dates, budget, flight timing, and pace.`,icon:`Award`}],J={Compass:g,Sparkles:h,Award:l,ShieldCheck:t};function Y({trustPoints:e=q}){let t=(0,j.useRef)(null);return(0,j.useEffect)(()=>{t.current&&w.fromTo(t.current.children,{opacity:0,y:20},{opacity:1,y:0,duration:.7,stagger:.12,ease:`power2.out`})},[]),(0,M.jsxs)(`section`,{className:`contact-trust-section`,children:[(0,M.jsx)(`style`,{children:`
        .contact-trust-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .trust-hdr {
          text-align: center;
          margin-bottom: 40px;
        }

        .trust-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .trust-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .trust-grid { grid-template-columns: 1fr; }
        }

        .trust-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .trust-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .trust-icon-box {
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
      `}),(0,M.jsxs)(`div`,{className:`trust-hdr`,children:[(0,M.jsx)(`div`,{className:`trust-sub`,children:`THE ANDAMAN TRAILS ADVANTAGE`}),(0,M.jsx)(`h2`,{className:`trust-title`,children:`WHY TALK TO US?`})]}),(0,M.jsx)(`div`,{ref:t,className:`trust-grid`,children:e.map(e=>{let t=J[e.icon]||g;return(0,M.jsxs)(`div`,{className:`trust-card`,children:[(0,M.jsx)(`div`,{className:`trust-icon-box`,children:(0,M.jsx)(t,{size:24})}),(0,M.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#334155`,letterSpacing:`0.04em`,marginBottom:8},children:e.title}),(0,M.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,lineHeight:1.6},children:e.desc})]},e.id)})})]})}var X=[{q:`How far in advance should I book my Andaman trip?`,a:`We recommend booking 3 to 6 weeks in advance for regular season and 2 to 3 months in advance for peak season (December to February) to secure private catamaran ferry seats and beachfront villas.`},{q:`Do Indian citizens require a passport or special permit for Andaman?`,a:`No, Indian national passport holders and citizens do not require any special permits to visit Port Blair, Havelock (Swaraj Dweep), Neil (Shaheed Dweep), and Baratang. Only a valid government photo ID (Aadhaar, Voter ID, Driving License) is needed.`},{q:`Can non-swimmers participate in Scuba Diving?`,a:`Yes, absolutely! Our PADI Discover Scuba Diving (DSD) program is specifically designed for non-swimmers and beginners. A personal certified divemaster stays with you one-on-one throughout the entire shallow dive.`},{q:`What happens if a ferry gets cancelled due to weather?`,a:`Andaman Trails provides 100% weather disruption support with priority rescheduling on the next available catamaran or immediate alternative stay arrangements in Port Blair.`}];function Z({faqs:e=X}){let[t,r]=(0,j.useState)(0),i=e=>{r(t===e?null:e)};return(0,M.jsxs)(`section`,{className:`contact-faq-section`,children:[(0,M.jsx)(`style`,{children:`
        .contact-faq-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .faq-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .faq-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .faq-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.active {
          border-color: rgba(33, 230, 193, 0.45);
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.1);
        }

        .faq-btn {
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }

        .faq-question {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0B2545;
        }
        .faq-item.active .faq-question {
          color: #F06543;
        }

        .faq-[#icon] {
          transition: transform 0.3s ease;
          color: #F06543;
          flex-shrink: 0;
        }
        .faq-item.active .faq-[#icon] {
          transform: rotate(180deg);
          color: #F06543;
        }

        .faq-ans-box {
          padding: 0 24px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.65;
          animation: faqOpen 0.3s ease;
        }
        @keyframes faqOpen {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),(0,M.jsxs)(`div`,{className:`faq-hdr`,children:[(0,M.jsx)(`div`,{className:`faq-sub`,children:`GOT QUESTIONS?`}),(0,M.jsx)(`h2`,{className:`faq-title`,children:`QUICK ANSWERS`})]}),(0,M.jsx)(`div`,{className:`faq-list`,children:e.map((e,r)=>{let a=t===r;return(0,M.jsxs)(`div`,{className:`faq-item${a?` active`:``}`,children:[(0,M.jsxs)(`button`,{className:`faq-btn`,onClick:()=>i(r),children:[(0,M.jsx)(`span`,{className:`faq-question`,children:e.q}),(0,M.jsx)(n,{size:18,className:`faq-[#icon]`})]}),a&&(0,M.jsx)(`div`,{className:`faq-ans-box`,children:e.a})]},r)})})]})}function Q({onStartPlanning:e}){return(0,M.jsxs)(`section`,{className:`contact-cta-section`,children:[(0,M.jsx)(`style`,{children:`
        .contact-cta-section {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .contact-cta-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 60px 48px;
          text-align: center;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 217, 255, 0.1);
        }
        @media (max-width: 640px) {
          .contact-cta-card { padding: 40px 24px; }
        }

        .contact-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .contact-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .contact-cta-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.75) 0%, #f8fafc 100%);
        }

        .contact-cta-content {
          position: relative;
          z-index: 3;
          max-width: 720px;
          margin: 0 auto;
        }

        .contact-cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.8vw, 54px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 14px;
        }

        .contact-cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #475569;
          line-height: 1.65;
          margin: 0 auto 32px;
        }

        .contact-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .contact-cta-btn-primary {
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
          box-shadow: 0 8px 24px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .contact-cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .contact-cta-btn-sec {
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
        .contact-cta-btn-sec:hover {
          border-color: #F06543;
          color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          transform: translateY(-3px);
        }
      `}),(0,M.jsxs)(`div`,{className:`contact-cta-card`,children:[(0,M.jsx)(`div`,{className:`contact-cta-bg`,children:(0,M.jsx)(`img`,{src:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90`,alt:`Scuba & Ocean CTA`})}),(0,M.jsx)(`div`,{className:`contact-cta-overlay`}),(0,M.jsxs)(`div`,{className:`contact-cta-content`,children:[(0,M.jsxs)(`h2`,{className:`contact-cta-title`,children:[`READY TO START YOUR `,(0,M.jsx)(`br`,{}),(0,M.jsx)(`span`,{style:{color:`#F06543`},children:`ANDAMAN ADVENTURE?`})]}),(0,M.jsx)(`p`,{className:`contact-cta-desc`,children:`Tell us what you're dreaming of. We'll help you turn it into an unforgettable tropical island journey.`}),(0,M.jsxs)(`div`,{className:`contact-cta-btns`,children:[(0,M.jsxs)(`button`,{onClick:e,className:`contact-cta-btn-primary`,children:[(0,M.jsx)(`span`,{children:`START PLANNING`}),(0,M.jsx)(a,{size:15})]}),(0,M.jsxs)(`a`,{href:`/destinations`,className:`contact-cta-btn-sec`,children:[(0,M.jsx)(g,{size:15}),(0,M.jsx)(`span`,{children:`EXPLORE DESTINATIONS`})]})]})]})]})]})}function $({number:e=`919137835433`,defaultMessage:t=`Hello Andaman Trails! I would like to plan a trip to the Andaman Islands.`}){let n=`https://wa.me/${e}?text=${encodeURIComponent(t)}`;return(0,M.jsxs)(`a`,{href:n,target:`_blank`,rel:`noopener noreferrer`,className:`wa-float-button`,title:`Chat with Andaman Trails on WhatsApp`,children:[(0,M.jsx)(`style`,{children:`
        .wa-float-button {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .wa-float-button:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 16px 40px rgba(37, 211, 102, 0.65);
        }

        @media (max-width: 640px) {
          .wa-float-button {
            bottom: 80px; /* Above mobile bottom nav */
            right: 16px;
            padding: 10px 16px;
          }
          .wa-float-text {
            display: none;
          }
        }
      `}),(0,M.jsx)(d,{size:20,fill:`#ffffff`,color:`#25d366`}),(0,M.jsxs)(`div`,{className:`wa-float-text`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,letterSpacing:`0.05em`},children:[(0,M.jsx)(`span`,{children:`NEED QUICK HELP?`}),(0,M.jsx)(`span`,{style:{color:`#dcf8c6`,marginLeft:4},children:`CHAT WITH US →`})]})]})}function ee(){let[e,t]=(0,j.useState)(null);(0,j.useEffect)(()=>{document.title=`Contact Andaman Trails | Plan Your Andaman Trip`;let e=document.querySelector(`meta[name="description"]`);e&&e.setAttribute(`content`,`Contact Andaman Trails to plan customized Andaman trips, explore packages, ask about travel experiences and get expert assistance.`)},[]);let n=()=>{let e=document.getElementById(`contact-form-container`);e&&e.scrollIntoView({behavior:`smooth`})};return(0,M.jsxs)(`div`,{className:`contact-page-root`,children:[(0,M.jsx)(`style`,{children:`
        .contact-page-root {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .contact-main-grid-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 60px;
        }

        .contact-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .contact-two-col {
            grid-template-columns: 1fr;
          }
        }
      `}),(0,M.jsx)(P,{onStartPlanning:n}),(0,M.jsx)(R,{}),(0,M.jsx)(`section`,{className:`contact-main-grid-section`,children:(0,M.jsxs)(`div`,{className:`contact-two-col`,children:[(0,M.jsx)(V,{selectedInquiryCategory:e}),(0,M.jsx)(U,{})]})}),(0,M.jsx)(K,{onSelectCategory:e=>t(e)}),(0,M.jsx)(Y,{}),(0,M.jsx)(Z,{}),(0,M.jsx)(Q,{onStartPlanning:n}),(0,M.jsx)(A,{}),(0,M.jsx)($,{})]})}export{ee as default};