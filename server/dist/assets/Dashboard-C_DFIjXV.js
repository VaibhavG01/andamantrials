import{r as e}from"./rolldown-runtime-hePW80VL.js";import{An as t,At as n,B as r,E as i,En as a,Et as o,Gn as s,I as c,J as l,K as u,Lt as d,R as f,Rn as p,St as m,Vn as h,Vt as g,Yt as _,Zn as ee,Zt as v,a as y,g as te,gn as ne,j as b,jn as x,ln as S,mn as C,n as w,nn as T,o as re,on as ie,ot as E,pt as D,qn as O,st as k,u as A,ut as j,vn as M,vt as N,wt as P,xt as F,yt as I,zt as L}from"./lucide-vendor-CBhgx3NO.js";import{c as R,s as z,v as B}from"./three-vendor-Md08yeGZ.js";import{t as V}from"./apiClient-CRw3-6FB.js";import{t as H}from"./authService-yQfQgtuM.js";import{n as U}from"./gsap-vendor-Cgjl6ODA.js";import{a as W,d as G,o as K}from"./index-Bm-jsIiM.js";import{i as q,r as J,t as Y}from"./FooterBottom-DsWKMEou.js";var X=e(ee(),1),Z=B(),ae=[{id:`dashboard`,label:`Overview`,icon:n,path:`/dashboard`},{id:`bookings`,label:`My Bookings`,icon:h,path:`/dashboard/bookings`},{id:`payments`,label:`Payment History`,icon:re,path:`/dashboard/payments`},{id:`trips`,label:`My Trips`,icon:S,path:`/dashboard/trips`},{id:`itinerary`,label:`Trip Itinerary`,icon:x,path:`/dashboard/itinerary`}],oe=[{id:`profile`,label:`Profile Settings`,icon:A,path:`/dashboard/profile`},{id:`support`,label:`Support & Help`,icon:ne,path:`/dashboard/support`}];function se({activeTab:e=`dashboard`,onSelectTab:t,isOpen:n,onClose:r}){let i=(e,n)=>{t&&t(e,n),r&&r()};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(`aside`,{className:`dash-sidebar${n?` open`:``}`,children:[(0,Z.jsx)(`style`,{children:`
          .dash-sidebar {
            width: 260px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(4, 16, 26, 0.95);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-right: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            z-index: 1000;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            overflow-y: auto;
            scrollbar-width: none;
          }
          .dash-sidebar::-webkit-scrollbar { display: none; }

          @media (max-width: 1024px) {
            .dash-sidebar {
              position: fixed;
              transform: translateX(-100%);
              box-shadow: 12px 0 40px rgba(0,0,0,0.8);
            }
            .dash-sidebar.open {
              transform: translateX(0);
            }
          }

          /* Logo */
          .dash-sidebar-logo {
            padding: 24px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e2e8f0;
          }

          /* Section Header */
          .dash-nav-section-hdr {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 9.5px;
            font-weight: 800;
            letter-spacing: 0.18em;
            color: #627d8a;
            text-transform: uppercase;
            padding: 18px 20px 8px;
          }

          /* Nav List */
          .dash-nav-list {
            list-style: none;
            padding: 0 10px;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          /* Nav Item */
          .dash-nav-btn {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 14px;
            border-radius: 12px;
            border: none;
            background: transparent;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12.5px;
            font-weight: 600;
            color: #64748b;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.25s ease;
            position: relative;
            box-sizing: border-box;
          }
          .dash-nav-btn:hover {
            color: #0b2545;
            background: rgba(240, 101, 67, 0.08);
          }
          .dash-nav-btn.active {
            color: #0b2545;
            background: rgba(240, 101, 67, 0.12);
            border: 1px solid rgba(240, 101, 67, 0.35);
            box-shadow: 0 4px 16px rgba(240, 101, 67, 0.15);
          }
          .dash-nav-btn.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 20%;
            bottom: 20%;
            width: 3.5px;
            border-radius: 0 4px 4px 0;
            background: linear-gradient(180deg, #ff6b4a, #f06543);
            box-shadow: 0 0 10px #f06543;
          }

          .dash-nav-badge {
            margin-left: auto;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 9.5px;
            font-weight: 800;
            color: #ffffff;
            background: #f06543;
            padding: 2px 7px;
            border-radius: 10px;
          }

          /* Bottom Actions */
          .dash-sidebar-footer {
            margin-top: auto;
            padding: 16px 10px 24px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
        `}),(0,Z.jsxs)(`div`,{className:`dash-sidebar-logo`,children:[(0,Z.jsxs)(`a`,{href:`/`,style:{display:`flex`,alignItems:`center`,gap:10,textDecoration:`none`},children:[(0,Z.jsx)(`div`,{style:{width:36,height:36,borderRadius:12,background:`linear-gradient(135deg, #ff6b4a, #f06543)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#ffffff`,boxShadow:`0 0 16px rgba(240,101,67,0.4)`},children:(0,Z.jsx)(S,{size:20,strokeWidth:2.2})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:900,color:`#0b2545`,letterSpacing:`0.08em`},children:`ANDAMAN TRAILS`}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:12.5,fontStyle:`italic`,color:`#f06543`},children:`Traveler Command Center`})]})]}),r&&(0,Z.jsx)(`button`,{onClick:r,style:{background:`none`,border:`none`,color:`#64748b`,cursor:`pointer`},children:(0,Z.jsx)(w,{size:20})})]}),(0,Z.jsxs)(`div`,{style:{flex:1},children:[(0,Z.jsx)(`div`,{className:`dash-nav-section-hdr`,children:`MAIN`}),(0,Z.jsx)(`ul`,{className:`dash-nav-list`,children:ae.map(t=>{let n=t.icon,r=e===t.id;return(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{className:`dash-nav-btn${r?` active`:``}`,onClick:()=>i(t.id,t.path),children:[(0,Z.jsx)(n,{size:16,color:r?`#F06543`:`#9cb3bd`}),(0,Z.jsx)(`span`,{children:t.label})]})},t.id)})}),(0,Z.jsx)(`div`,{className:`dash-nav-section-hdr`,children:`ACCOUNT`}),(0,Z.jsx)(`ul`,{className:`dash-nav-list`,children:oe.map(t=>{let n=t.icon,r=e===t.id;return(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{className:`dash-nav-btn${r?` active`:``}`,onClick:()=>i(t.id,t.path),children:[(0,Z.jsx)(n,{size:16,color:r?`#F06543`:`#9cb3bd`}),(0,Z.jsx)(`span`,{children:t.label}),t.badge&&(0,Z.jsx)(`span`,{className:`dash-nav-badge`,children:t.badge})]})},t.id)})})]}),(0,Z.jsx)(`div`,{className:`dash-sidebar-footer`,children:(0,Z.jsxs)(`button`,{onClick:()=>{H.logout(),window.history.pushState({},``,`/`),window.dispatchEvent(new PopStateEvent(`popstate`))},className:`dash-nav-btn`,style:{color:`#ff6060`,cursor:`pointer`,background:`transparent`,border:`none`,width:`100%`,textAlign:`left`},children:[(0,Z.jsx)(P,{size:16,color:`#ff6060`}),(0,Z.jsx)(`span`,{children:`Logout`})]})})]})})}function ce({activeTab:e=`dashboard`,onSelectTab:t,onToggleSidebar:n,onToggleNotifications:r,unreadCount:i=2}){let[o,s]=(0,X.useState)(!1),[c,l]=(0,X.useState)(``),d=(0,X.useRef)(null);return(0,X.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,Z.jsxs)(`header`,{className:`dash-navbar`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-navbar {
          height: 72px;
          position: sticky;
          top: 0;
          z-index: 990;
          background: #f8fafc;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .dash-navbar { padding: 0 16px; height: 64px; }
        }

        /* Left Breadcrumb */
        .dash-breadcrumb-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dash-menu-toggle {
          display: none;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          color: #F06543;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .dash-menu-toggle { display: flex; }
        }

        .dash-crumb-root {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #627d8a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .dash-crumb-sep {
          color: #4a6678;
          font-size: 12px;
        }
        .dash-crumb-active {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        /* Center Search */
        .dash-search-box {
          position: relative;
          max-width: 320px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .dash-search-box { display: none; }
        }

        .dash-search-input {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #334155;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          padding: 8px 14px 8px 36px;
          border-radius: 20px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }
        .dash-search-input::placeholder { color: #64748b; }
        .dash-search-input:focus {
          border-color: #F06543;
          background: rgba(22, 217, 255, 0.06);
          box-shadow: 0 0 16px rgba(22, 217, 255, 0.15);
        }

        /* Right Actions */
        .dash-actions-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dash-icon-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .dash-icon-btn:hover {
          color: #F06543;
          border-color: rgba(22, 217, 255, 0.5);
          background: rgba(22, 217, 255, 0.08);
          transform: translateY(-2px);
        }

        .dash-notif-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff4f7b;
          box-shadow: 0 0 8px #ff4f7b;
        }

        /* Profile Dropdown Button */
        .dash-profile-trigger {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 5px 12px 5px 6px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .dash-profile-trigger:hover {
          border-color: #F06543;
          box-shadow: 0 4px 18px rgba(33, 230, 193, 0.2);
        }
        .dash-avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #F06543;
        }

        /* Profile Dropdown Menu */
        .dash-dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 28px;
          width: 230px;
          background: #ffffff;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 8px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          animation: dropFade 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dash-dropdown-header {
          padding: 12px 14px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 4px;
        }
        .dash-dropdown-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #0B2545;
        }
        .dash-dropdown-email {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
        }

        .dash-dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }
        .dash-dropdown-item:hover {
          color: #ffffff;
          background: rgba(33, 230, 193, 0.1);
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-breadcrumb-row`,children:[(0,Z.jsx)(`button`,{className:`dash-menu-toggle`,onClick:n,"aria-label":`Toggle Sidebar`,children:(0,Z.jsx)(I,{size:20})}),(0,Z.jsx)(`span`,{className:`dash-crumb-root`,children:`DASHBOARD`}),(0,Z.jsx)(`span`,{className:`dash-crumb-sep`,children:`/`}),(0,Z.jsx)(`span`,{className:`dash-crumb-active`,children:(()=>{switch(e){case`trips`:return`My Trips`;case`bookings`:return`My Bookings`;case`itinerary`:return`Trip Itinerary`;case`wishlist`:return`Saved Wishlist`;case`payments`:return`Payment History`;case`documents`:return`Travel Documents`;case`profile`:return`My Profile`;case`support`:return`Support & Help`;default:return`Overview`}})()})]}),(0,Z.jsxs)(`div`,{className:`dash-search-box`,children:[(0,Z.jsx)(u,{size:15,color:`#5a7a9a`,style:{position:`absolute`,left:12,top:`50%`,transform:`translateY(-50%)`}}),(0,Z.jsx)(`input`,{type:`text`,placeholder:`Search destinations, packages, tickets...`,value:c,onChange:e=>l(e.target.value),className:`dash-search-input`})]}),(0,Z.jsxs)(`div`,{className:`dash-actions-row`,ref:d,children:[(0,Z.jsxs)(`button`,{className:`dash-icon-btn`,onClick:r,title:`Notifications`,children:[(0,Z.jsx)(p,{size:18}),i>0&&(0,Z.jsx)(`span`,{className:`dash-notif-dot`})]}),(0,Z.jsx)(`div`,{className:`dash-profile-trigger`,onClick:()=>s(!o),children:(()=>{let e=(()=>{try{let e=localStorage.getItem(`andaman_user`);return e?JSON.parse(e):null}catch{return null}})(),n=typeof e?.name==`string`?e.name:typeof e?.user?.name==`string`?e.user.name:`Traveler`,r=typeof e?.email==`string`?e.email:typeof e?.user?.email==`string`?e.user.email:`traveler@andamantrails.com`,i=typeof e?.role==`string`?e.role:typeof e?.user?.role==`string`?e.user.role:`Member`,c=n,l=n,u=r,d=i;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:950,border:`1.5px solid #F06543`,boxShadow:`0 0 10px rgba(240, 101, 67, 0.35)`,flexShrink:0},children:(e=>{if(!e)return`TR`;let t=e.trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t.length===1&&t[0].length>=2?t[0].substring(0,2).toUpperCase():e.substring(0,2).toUpperCase()})(l)}),(0,Z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,Z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#0B2545`,lineHeight:1},children:c}),(0,Z.jsx)(`span`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#F06543`,marginTop:2,fontWeight:600},children:d})]}),(0,Z.jsx)(a,{size:14,color:`#9cb3bd`}),o&&(0,Z.jsxs)(`div`,{className:`dash-dropdown-menu`,children:[(0,Z.jsxs)(`div`,{className:`dash-dropdown-header`,children:[(0,Z.jsx)(`div`,{className:`dash-dropdown-name`,children:l}),(0,Z.jsx)(`div`,{className:`dash-dropdown-email`,children:u})]}),(0,Z.jsxs)(`button`,{className:`dash-dropdown-item`,onClick:()=>{t&&t(`profile`,`/dashboard/profile`),s(!1)},children:[(0,Z.jsx)(A,{size:14}),(0,Z.jsx)(`span`,{children:`My Profile`})]}),(0,Z.jsxs)(`button`,{className:`dash-dropdown-item`,style:{color:`#ff6b6b`},onClick:()=>{H.logout(),window.history.pushState({},``,`/`),window.dispatchEvent(new PopStateEvent(`popstate`))},children:[(0,Z.jsx)(P,{size:14}),(0,Z.jsx)(`span`,{children:`Logout Account`})]})]})]})})()})]})]})}var le={Ship:f,FileText:_,Calendar:x,Sparkles:b,CheckCircle2:M};function ue({isOpen:e,onClose:t}){let[n,r]=(0,X.useState)([]),[i,a]=(0,X.useState)(!0);return(0,X.useEffect)(()=>{e&&(a(!0),G.getMyBookings().then(e=>{let t=(e&&e.data&&Array.isArray(e.data)?e.data:[]).map((e,t)=>{let n=e.bookingStatus===`CONFIRMED`||e.paymentStatus===`PAID`,r=e.activity?.name||e.package?.name||e.ferry?.name||e.cruise?.name||e.stay?.name||`${e.bookingType||`Adventure`} Experience`;return{id:`notif-bk-${e.id||e.bookingNumber}`,title:n?`Booking Confirmed ✓`:`Payment Pending ⚠`,message:n?`Your reservation for "${r}" (Ref: ${e.bookingNumber}) is confirmed for ${e.activityDate||e.bookingDate}.`:`Order placed for "${r}" (${e.bookingNumber}). Total: ₹${Number(e.totalAmount||0).toLocaleString(`en-IN`)}.`,icon:n?`CheckCircle2`:`Calendar`,time:t===0?`Just Now`:`Recent`,read:!1}});t.push({id:`notif-welcome`,title:`Welcome to Andaman Trails!`,message:`Explore and book premium ferries, luxury cruises, scuba diving and beach stay getaways.`,icon:`Sparkles`,time:`System`,read:!0}),r(t),a(!1)}).catch(e=>{console.error(`Error fetching dynamic notifications:`,e),r([{id:`notif-welcome`,title:`Welcome to Andaman Trails!`,message:`Explore and book premium ferries, luxury cruises, scuba diving and beach stay getaways.`,icon:`Sparkles`,time:`System`,read:!1}]),a(!1)}))},[e]),e?(0,Z.jsxs)(`div`,{className:`dash-notif-backdrop`,onClick:t,children:[(0,Z.jsx)(`style`,{children:`
        .dash-notif-backdrop {
          position: fixed; inset: 0; z-index: 99999;
          background: #ffffff;
          backdrop-filter: blur(8px);
          display: flex; justify-content: flex-end;
          animation: notifFadeIn 0.25s ease;
        }
        @keyframes notifFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .dash-notif-drawer {
          width: 380px; max-width: 90vw; height: 100vh;
          background: #ffffff;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-left: 1.5px solid #e2e8f0;
          box-shadow: -16px 0 50px rgba(0,0,0,0.7);
          padding: 24px;
          display: flex; flex-direction: column;
          animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .dash-notif-hdr {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;
          margin-bottom: 16px;
        }

        .dash-notif-list {
          flex: 1; overflow-y: auto; scrollbar-width: none;
          display: flex; flex-direction: column; gap: 10px;
        }
        .dash-notif-list::-webkit-scrollbar { display: none; }

        .dash-notif-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px; padding: 14px 16px;
          transition: all 0.25s ease;
        }
        .dash-notif-item.unread {
          border-color: rgba(22, 217, 255, 0.4);
          background: rgba(22, 217, 255, 0.06);
        }

        .dash-notif-icon-box {
          width: 34px; height: 34px; border-radius: 10px;
          background: rgba(22, 217, 255, 0.12); color: #F06543;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-notif-drawer`,onClick:e=>e.stopPropagation(),children:[(0,Z.jsxs)(`div`,{className:`dash-notif-hdr`,children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,Z.jsx)(p,{size:20,color:`#F06543`}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:800,color:`#334155`},children:`Notifications`}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11,color:`#64748b`},children:[n.filter(e=>!e.read).length,` unread alerts`]})]})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,Z.jsx)(`button`,{onClick:()=>{r(e=>e.map(e=>({...e,read:!0})))},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#F06543`,background:`none`,border:`none`,cursor:`pointer`},children:`Mark all read`}),(0,Z.jsx)(`button`,{onClick:t,style:{width:32,height:32,borderRadius:`50%`,background:`#e2e8f0`,border:`1px solid #e2e8f0`,color:`#64748b`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`},children:(0,Z.jsx)(w,{size:16})})]})]}),(0,Z.jsx)(`div`,{className:`dash-notif-list`,children:i?(0,Z.jsx)(`div`,{style:{color:`#627d8a`,fontSize:12,textAlign:`center`,padding:`40px 20px`,fontFamily:`'Space Grotesk', sans-serif`},children:`LOADING NOTIFICATIONS...`}):n.length===0?(0,Z.jsx)(`div`,{style:{color:`#627d8a`,fontSize:12,textAlign:`center`,padding:`40px 20px`,fontFamily:`'Space Grotesk', sans-serif`},children:`No notifications yet.`}):n.map(e=>{let t=le[e.icon]||p;return(0,Z.jsx)(`div`,{className:`dash-notif-item${e.read?``:` unread`}`,children:(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,Z.jsx)(`div`,{className:`dash-notif-icon-box`,children:(0,Z.jsx)(t,{size:16})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:`#334155`,marginBottom:2},children:e.title}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11.5,color:`#64748b`,lineHeight:1.4,marginBottom:6},children:e.message}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,color:`#627d8a`,fontWeight:700},children:e.time})]})]})},e.id)})})]})]}):null}function de({children:e,activeTab:t=`dashboard`,onSelectTab:n}){let[r,i]=(0,X.useState)(!1),[a,o]=(0,X.useState)(!1),s=(0,X.useRef)(null);return(0,X.useEffect)(()=>{s.current&&U.fromTo(s.current,{opacity:0,y:20},{opacity:1,y:0,duration:.5,ease:`power2.out`})},[t]),(0,Z.jsxs)(`div`,{className:`dash-layout-root`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-layout-root {
          width: 100%;
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          display: flex;
          position: relative;
          overflow-x: hidden;
        }

        .dash-main-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          position: relative;
        }
        @media (min-width: 1025px) {
          .dash-main-area {
            margin-left: 260px;
          }
        }

        .dash-content-container {
          flex: 1;
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          padding: 28px 28px 60px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .dash-content-container { padding: 16px 16px 40px; }
        }
      `}),(0,Z.jsx)(se,{activeTab:t,onSelectTab:n,isOpen:r,onClose:()=>i(!1)}),(0,Z.jsxs)(`div`,{className:`dash-main-area`,children:[(0,Z.jsx)(ce,{activeTab:t,onSelectTab:n,onToggleSidebar:()=>i(!r),onToggleNotifications:()=>o(!a)}),(0,Z.jsx)(`main`,{ref:s,className:`dash-content-container`,children:e}),(0,Z.jsx)(Y,{})]}),(0,Z.jsx)(ue,{isOpen:a,onClose:()=>o(!1)})]})}function fe(){let[e,t]=(0,X.useState)(null),[n,r]=(0,X.useState)(0);(0,X.useEffect)(()=>{G.getMyBookings().then(e=>{e.data&&Array.isArray(e.data)&&(r(e.data.length),e.data.length>0&&t(e.data[0]))}).catch(()=>{})},[]);let i=(()=>{try{let e=localStorage.getItem(`andaman_user`);return e?JSON.parse(e):null}catch{return null}})(),a=typeof i?.name==`string`?i.name:typeof i?.user?.name==`string`?i.user.name:USER_PROFILE.name||`VALUED TRAVELER`,o=String(a).toUpperCase(),s=e?`${e.bookingType} Reserve`:`No Active Bookings`,c=e?e.bookingDate:`Ready to book a new trip`;return(0,Z.jsxs)(`div`,{className:`dash-welcome-card`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-welcome-card {
          position: relative;
          width: 100%;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          margin-bottom: 24px;
        }

        .dash-welcome-glow {
          position: absolute;
          top: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(22, 217, 255, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .dash-welcome-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dash-welcome-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dash-next-adventure-pill {
          background: #ffffff;
          border: 1px solid rgba(33, 230, 193, 0.35);
          border-radius: 18px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .dash-adv-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(33, 230, 193, 0.15);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dash-adv-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #F06543;
          margin-bottom: 2px;
        }
        .dash-adv-main {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
        }
        .dash-adv-dates {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
        }
      `}),(0,Z.jsx)(`div`,{className:`dash-welcome-glow`}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#F06543`,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:6},children:[(0,Z.jsx)(b,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`TRAVELER COMMAND CENTER`})]}),(0,Z.jsxs)(`h1`,{className:`dash-welcome-title`,children:[`WELCOME BACK, `,o,` 👋`]}),(0,Z.jsxs)(`p`,{className:`dash-welcome-sub`,children:[(0,Z.jsx)(`span`,{children:`Ready for your next Andaman adventure?`}),(0,Z.jsxs)(`span`,{style:{color:`#F06543`,fontWeight:600},children:[`• `,n,` `,n===1?`Trip`:`Trips`,` Active`]})]})]}),(0,Z.jsxs)(`div`,{className:`dash-next-adventure-pill`,children:[(0,Z.jsx)(`div`,{className:`dash-adv-icon-box`,children:(0,Z.jsx)(S,{size:22,color:`#F06543`})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dash-adv-label`,children:`YOUR NEXT ADVENTURE`}),(0,Z.jsx)(`div`,{className:`dash-adv-main`,children:s}),(0,Z.jsxs)(`div`,{className:`dash-adv-dates`,children:[(0,Z.jsx)(x,{size:11,color:`#F06543`,style:{display:`inline`,marginRight:4,verticalAlign:`middle`}}),c]})]})]})]})}function pe({onViewTrip:e,onViewItinerary:t}){let[n,r]=(0,X.useState)(null);(0,X.useEffect)(()=>{G.getMyBookings().then(e=>{e.data&&Array.isArray(e.data)&&e.data.length>0&&r(e.data[0])}).catch(()=>{})},[]);let i=n?{title:n.activity?.name||n.package?.name||n.ferry?.name||n.cruise?.name||n.stay?.name||`${n.bookingType||`Adventure`} Passage`,subtitle:`Confirmed Travel for ${n.totalGuests||(n.adultCount||1)+(n.childCount||0)} Guest(s) • Andaman Trails`,dates:n.activityDate||n.bookingDate||`25 Sep 2026`,timeSlot:n.slotStartTime||n.timeSlot||`09:00 AM`,location:n.activityLocation?.locationName||n.activity?.location||n.location||`Corbyn's Cove Beach, Port Blair`,bookingId:n.bookingNumber,status:n.bookingStatus||`CONFIRMED`,coverImage:n.activity?.heroImage||n.stay?.heroImage||n.cruise?.heroImage||n.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80`,route:[n.activityLocation?.locationName||n.activity?.location||`Port Blair`,n.activityLocation?.meetingPoint||`Marina Pier`,`Ocean Coordinates`],progress:100}:null;return i?(0,Z.jsxs)(`div`,{className:`upcoming-trip-card`,children:[(0,Z.jsx)(`style`,{children:`
        .upcoming-trip-card {
          position: relative;
          width: 100%;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.08);
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
        }
        @media (max-width: 900px) {
          .upcoming-trip-card { grid-template-columns: 1fr; }
        }

        /* Image Box */
        .upcoming-img-box {
          position: relative;
          min-height: 280px;
          overflow: hidden;
        }
        .upcoming-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .upcoming-trip-card:hover .upcoming-img-box img {
          transform: scale(1.05);
        }
        .upcoming-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #ffffff 0%, #ffffff 60%, transparent 100%);
        }
        @media (max-width: 900px) {
          .upcoming-img-overlay {
            background: linear-gradient(to top, #ffffff 0%, transparent 60%);
          }
        }

        .upcoming-badge-top {
          position: absolute; top: 18px; left: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 6px 14px; border-radius: 20px;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.3);
        }
        .upcoming-status-top {
          position: absolute; top: 18px; right: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          background: #FFF0EB; backdrop-filter: blur(8px);
          padding: 5px 12px; border-radius: 14px;
          border: 1px solid #FFD3C4;
          display: flex; align-items: center; gap: 5px;
        }

        /* Body Box */
        .upcoming-body {
          padding: 32px 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 640px) {
          .upcoming-body { padding: 24px; }
        }

        .upcoming-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 600; color: #0B2545;
          line-height: 1.1; margin-bottom: 4px;
        }
        .upcoming-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #F06543;
          margin-bottom: 18px;
        }

        /* Route Strip */
        .upcoming-route-box {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 16px;
          padding: 14px 16px;
          margin-bottom: 20px;
        }
        .upcoming-route-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #627d8a;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 8px;
          display: flex; align-items: center; gap: 5px;
        }
        .upcoming-route-cities {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #0B2545;
          flex-wrap: wrap;
        }

        /* Preparation Progress Bar */
        .upcoming-prep-box {
          margin-bottom: 24px;
        }
        .upcoming-prep-header {
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #64748b;
          margin-bottom: 6px;
        }
        .upcoming-progress-track {
          width: 100%; height: 6px;
          background: #ebded2;
          border-radius: 6px; overflow: hidden;
        }
        .upcoming-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #FF6B4A, #F06543);
          border-radius: 6px;
          box-shadow: 0 0 12px rgba(240, 101, 67, 0.4);
          transition: width 0.6s ease;
        }

        /* Actions */
        .upcoming-actions {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .upcoming-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.06em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 11px 22px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(240, 101, 67, 0.35);
        }
        .upcoming-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(240, 101, 67, 0.5);
        }
        .upcoming-btn-secondary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.04em;
          color: #F06543; background: #FFF0EB;
          border: 1px solid #FFD3C4;
          padding: 11px 20px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.3s ease;
        }
        .upcoming-btn-secondary:hover {
          background: #FFE5DC;
          border-color: #F06543;
        }
      `}),(0,Z.jsxs)(`div`,{className:`upcoming-img-box`,children:[(0,Z.jsx)(`img`,{src:i.coverImage,alt:i.title}),(0,Z.jsx)(`div`,{className:`upcoming-img-overlay`}),(0,Z.jsx)(`span`,{className:`upcoming-badge-top`,children:`UPCOMING TRIP`}),(0,Z.jsxs)(`span`,{className:`upcoming-status-top`,children:[(0,Z.jsx)(M,{size:12,color:`#F06543`}),i.status]})]}),(0,Z.jsxs)(`div`,{className:`upcoming-body`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:700,color:`#64748b`,marginBottom:6},children:[(0,Z.jsx)(x,{size:13,color:`#F06543`}),(0,Z.jsx)(`span`,{children:i.dates}),(0,Z.jsx)(`span`,{style:{color:`#ebded2`},children:`•`}),(0,Z.jsxs)(`span`,{style:{color:`#F06543`},children:[`Booking ID: `,i.bookingId]})]}),(0,Z.jsx)(`h2`,{className:`upcoming-title`,children:i.title}),(0,Z.jsx)(`p`,{className:`upcoming-subtitle`,children:i.subtitle}),(0,Z.jsxs)(`div`,{className:`upcoming-route-box`,children:[(0,Z.jsxs)(`div`,{className:`upcoming-route-title`,children:[(0,Z.jsx)(D,{size:11,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`ISLAND ROUTE`})]}),(0,Z.jsx)(`div`,{className:`upcoming-route-cities`,children:i.route.map((e,t)=>(0,Z.jsxs)(X.Fragment,{children:[(0,Z.jsx)(`span`,{children:e}),t<i.route.length-1&&(0,Z.jsx)(s,{size:12,color:`#F06543`,style:{opacity:.6}})]},t))})]}),(0,Z.jsxs)(`div`,{className:`upcoming-prep-box`,children:[(0,Z.jsxs)(`div`,{className:`upcoming-prep-header`,children:[(0,Z.jsx)(`span`,{children:`TRIP PREPARATION`}),(0,Z.jsxs)(`span`,{style:{color:`#F06543`},children:[i.progress,`% COMPLETE`]})]}),(0,Z.jsx)(`div`,{className:`upcoming-progress-track`,children:(0,Z.jsx)(`div`,{className:`upcoming-progress-fill`,style:{width:`${i.progress}%`}})})]})]}),(0,Z.jsxs)(`div`,{className:`upcoming-actions`,children:[(0,Z.jsxs)(`button`,{className:`upcoming-btn-primary`,onClick:e,children:[(0,Z.jsx)(`span`,{children:`VIEW TRIP DETAILS`}),(0,Z.jsx)(s,{size:13})]}),(0,Z.jsxs)(`button`,{className:`upcoming-btn-secondary`,onClick:t,children:[(0,Z.jsx)(_,{size:13}),(0,Z.jsx)(`span`,{children:`VIEW ITINERARY`})]})]})]})]}):(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,backdropFilter:`blur(20px)`,border:`1.5px solid #ebded2`,borderRadius:24,padding:`32px`,marginBottom:24,boxShadow:`0 16px 40px rgba(11, 37, 69, 0.08)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:20},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#F06543`,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:6},children:[(0,Z.jsx)(S,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`ACTIVE TRIP STATUS`})]}),(0,Z.jsx)(`h2`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:22,fontWeight:800,color:`#0B2545`,margin:`0 0 6px`},children:`No Active Bookings in Database`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#64748b`,margin:0},children:`You haven't reserved an Andaman trip yet. Explore luxury catamaran ferries, beachfront resorts, and scuba diving tours to begin!`})]}),(0,Z.jsx)(`a`,{href:`/plan-trip`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/plan-trip`),window.dispatchEvent(new PopStateEvent(`popstate`))},style:{background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,padding:`12px 24px`,borderRadius:24,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,textDecoration:`none`,textTransform:`uppercase`,letterSpacing:`0.05em`,whiteSpace:`nowrap`,boxShadow:`0 6px 20px rgba(240, 101, 67, 0.3)`},children:`PLAN MY TRIP NOW →`})]})}var me={Compass:S,Calendar:x,Heart:L,Award:h};function he({onStatClick:e}){let[t,n]=(0,X.useState)([{id:`trips`,label:`Total Bookings`,value:`0 Bookings`,trend:`Live Bookings`,icon:`Compass`,color:`#F06543`},{id:`upcoming`,label:`Active Trips`,value:`0 Upcoming`,trend:`Verified Itinerary`,icon:`Calendar`,color:`#20b490`},{id:`wishlist`,label:`Saved Wishlist`,value:`3 Experiences`,trend:`Custom Trails`,icon:`Heart`,color:`#f06080`}]);return(0,X.useEffect)(()=>{G.getMyBookings().then(e=>{let t=e.data||[];if(Array.isArray(t)){let e=t.length,r=t.filter(e=>e.status===`CONFIRMED`||e.status===`PAID`||e.status===`PENDING`).length;n([{id:`trips`,label:`Total Bookings`,value:`${e} ${e===1?`Booking`:`Bookings`}`,trend:`Confirmed on DB`,icon:`Compass`,color:`#F06543`},{id:`upcoming`,label:`Active Trips`,value:`${r} Active`,trend:`Verified Itinerary`,icon:`Calendar`,color:`#20b490`},{id:`wishlist`,label:`Saved Wishlist`,value:`Ready to Book`,trend:`Custom Trails`,icon:`Heart`,color:`#f06080`}])}}).catch(()=>{})},[]),(0,Z.jsxs)(`div`,{className:`dash-stats-grid`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }
        @media (max-width: 1024px) {
          .dash-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .dash-stats-grid { grid-template-columns: 1fr; }
        }

        .dash-stat-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid #ebded2;
          border-radius: 20px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dash-stat-card:hover {
          transform: translateY(-4px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.1);
          background: #FAF4EE;
        }

        .dash-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dash-stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #627d8a;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .dash-stat-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
          margin-bottom: 4px;
        }
        .dash-stat-trend {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}),t.map(t=>{let n=me[t.icon]||S;return(0,Z.jsxs)(`div`,{className:`dash-stat-card`,onClick:()=>e&&e(t.id),children:[(0,Z.jsx)(`div`,{className:`dash-stat-icon-box`,style:{background:`${t.color}15`,border:`1px solid ${t.color}35`},children:(0,Z.jsx)(n,{size:22,color:t.color})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dash-stat-label`,children:t.label}),(0,Z.jsx)(`div`,{className:`dash-stat-val`,children:t.value}),(0,Z.jsxs)(`div`,{className:`dash-stat-trend`,children:[(0,Z.jsx)(te,{size:11,color:t.color}),(0,Z.jsx)(`span`,{children:t.trend})]})]})]},t.id)})]})}var ge=[{day:`DAY 01`,date:`13 Aug 2026`,title:`ARRIVE AT PORT BLAIR & CELLULAR JAIL`,location:`Port Blair`,status:`UPCOMING`,events:[{time:`10:30 AM`,title:`Arrival at Veer Savarkar Airport`,desc:`Private AC Cab transfer to Hotel Sea Shell.`,type:`Transfer`,icon:`Plane`},{time:`02:00 PM`,title:`Cellular Jail & Freedom Memorial Tour`,desc:`Guided tour of historical colonial prison.`,type:`Sightseeing`,icon:`Compass`},{time:`06:30 PM`,title:`Cellular Jail Light & Sound Show`,desc:`Son-et-Lumière show narrated in Hindi & English.`,type:`Show`,icon:`Sparkles`}],hotel:`Sea Shell Port Blair`},{day:`DAY 02`,date:`14 Aug 2026`,title:`HIGH-SPEED FERRY TO HAVELOCK ISLAND`,location:`Havelock Island`,status:`UPCOMING`,events:[{time:`08:30 AM`,title:`Ferry — Port Blair → Havelock`,desc:`Board Nautika Cruise at Phoenix Bay Jetty (Seats 14A/B).`,type:`Ferry`,icon:`Ship`},{time:`11:00 AM`,title:`Hotel Check-in at Taj Exotica`,desc:`Welcome drink & room orientation.`,type:`Hotel`,icon:`Home`},{time:`03:30 PM`,title:`Radhanagar Beach Sunset Experience`,desc:`Relax at Asia’s top beach & watch crimson sunset.`,type:`Beach`,icon:`Sun`}],hotel:`Taj Exotica Resort & Spa`},{day:`DAY 03`,date:`15 Aug 2026`,title:`ELEPHANT BEACH WATER SPORTS & DIVING`,location:`Havelock Island`,status:`UPCOMING`,events:[{time:`07:30 AM`,title:`Speedboat Transfer to Elephant Beach`,desc:`Shallow coral reef zone.`,type:`Transfer`,icon:`Ship`},{time:`09:00 AM`,title:`Discover Scuba Diving Session`,desc:`PADI Instructor guided dive with underwater photos.`,type:`Activity`,icon:`Waves`},{time:`04:00 PM`,title:`Kalapathar Beach Drive & Evening Snacks`,desc:`Black rock coastline exploration.`,type:`Sightseeing`,icon:`Camera`}],hotel:`Taj Exotica Resort & Spa`},{day:`DAY 04`,date:`16 Aug 2026`,title:`FERRY TO NEIL ISLAND & NATURAL ROCK BRIDGE`,location:`Neil Island`,status:`UPCOMING`,events:[{time:`10:00 AM`,title:`Ferry — Havelock → Neil Island`,desc:`Green Ocean 1.5-hour sailing.`,type:`Ferry`,icon:`Ship`},{time:`01:30 PM`,title:`Natural Rock Bridge Walk`,desc:`Geological coral formation at low tide.`,type:`Sightseeing`,icon:`Compass`},{time:`05:00 PM`,title:`Laxmanpur Beach Sunset`,desc:`Famous for sunset views & seashell shores.`,type:`Beach`,icon:`Sun`}],hotel:`Symphony Summer Sands Resort`},{day:`DAY 05`,date:`17 Aug 2026`,title:`NEIL SNORKELING & RETURN TO PORT BLAIR`,location:`Neil / Port Blair`,status:`UPCOMING`,events:[{time:`08:00 AM`,title:`Bharatpur Beach Glass Bottom Boat`,desc:`Observe living coral reefs & marine life.`,type:`Activity`,icon:`Waves`},{time:`03:00 PM`,title:`Return Ferry — Neil → Port Blair`,desc:`Makruzz Speed Cruise to Phoenix Bay.`,type:`Ferry`,icon:`Ship`}],hotel:`Fortune Resort Bay Island`},{day:`DAY 06`,date:`18 Aug 2026`,title:`ROSS ISLAND & CHIDIYA TAPU TREK`,location:`Port Blair`,status:`UPCOMING`,events:[{time:`09:30 AM`,title:`Speedboat to Ross Island (Netaji Subhash)`,desc:`Deer roaming colonial ruins.`,type:`Sightseeing`,icon:`Camera`},{time:`03:30 PM`,title:`Chidiya Tapu Bird Watching & Sunset Point`,desc:`Munda Pahar beach trek.`,type:`Trek`,icon:`Compass`}],hotel:`Fortune Resort Bay Island`},{day:`DAY 07`,date:`19 Aug 2026`,title:`DEPARTURE WITH UNFORGETTABLE MEMORIES`,location:`Port Blair Airport`,status:`UPCOMING`,events:[{time:`08:30 AM`,title:`Souvenir Shopping at Aberdeen Bazaar`,desc:`Pick up pearls & shell handicrafts.`,type:`Shopping`,icon:`ShoppingBag`},{time:`11:30 AM`,title:`Airport Departure Transfer`,desc:`Cab drop at Veer Savarkar International Airport.`,type:`Transfer`,icon:`Plane`}],hotel:`Checkout`}],_e={Ship:f,Plane:E,Home:d,Sun:i,Waves:y,Sparkles:b,Camera:t,Compass:S,ShoppingBag:c};function ve(){let[e,t]=(0,X.useState)([]),[n,r]=(0,X.useState)(``),[i,a]=(0,X.useState)(`13-19 Aug`),[o,s]=(0,X.useState)(!0);return(0,X.useEffect)(()=>{async function e(){s(!0);try{let e=((await G.getMyBookings())?.data||[]).filter(e=>e.bookingStatus===`CONFIRMED`||e.paymentStatus===`PAID`),n=[];try{let e=await V(`/itineraries`);e&&e.data&&Array.isArray(e.data)&&e.data.length>0&&(n=e.data)}catch{}let i=[];if(i=n.length>0&&n[0]?.days?.length>0?n[0].days.map((e,t)=>({day:`DAY ${String(e.dayNumber||t+1).padStart(2,`0`)}`,date:e.title||`Day ${t+1} Island Adventure`,location:e.location||(t===0||t>=4?`Port Blair`:`Havelock Island`),tagline:e.description||`Pristine beaches, transfers and curated excursions`,hotel:e.accommodation||(t===0?`Sea Shell Port Blair`:t<=3?`Taj Exotica Havelock`:`Fortune Resort Bay Island`),events:e.activities&&e.activities.length>0?e.activities.map(t=>({id:t.id||`act-${Math.random()}`,time:t.timeSlot||t.time||`10:00 AM`,title:t.title||t.name||`Island Activity`,category:t.category||`ACTIVITY`,icon:t.icon||`Waves`,desc:t.description||`Curated guided experience.`,location:t.location||e.location||`Andaman Islands`,confirmed:!0})):[{id:`ev-${t}-1`,time:`09:30 AM`,title:`Private AC SUV Transfer`,category:`TRANSFER`,icon:`Plane`,desc:`Air-conditioned vehicle with dedicated driver.`,confirmed:!0},{id:`ev-${t}-2`,time:`03:30 PM`,title:e.title||`Beach & Sunset Sightseeing`,category:`ACTIVITY`,icon:`Sun`,desc:e.description||`Guided island tour.`,confirmed:!0}]})):ge.map((e,t)=>({day:e.day||`DAY ${String(t+1).padStart(2,`0`)}`,date:e.title||`Island Discovery`,location:e.location||`Port Blair`,tagline:e.events?.[0]?.desc||`Tropical beaches and private transfers`,hotel:e.hotel||`Luxury Beachside Resort`,events:(e.events||[]).map((n,r)=>({id:`ev-${t}-${r}`,time:n.time||`10:00 AM`,title:n.title,category:(n.type||`ACTIVITY`).toUpperCase(),icon:n.icon||`Compass`,desc:n.desc||`Scheduled island excursion.`,location:e.location,confirmed:!0}))})),e.length>0){e.forEach((e,t)=>{let n=Math.min(t,i.length-1);if(i[n]){let r=e.activity?.name||e.serviceName||e.package?.name||e.ferry?.name||`${e.bookingType} Pass`,a=e.slotStartTime||`09:30 AM`;i[n].events.unshift({id:`real-${e.bookingNumber||t}`,time:a,title:`${r} (Ref: ${e.bookingNumber})`,category:e.bookingType||`CONFIRMED PASS`,icon:e.bookingType===`FERRY`?`Ship`:e.bookingType===`STAY`?`Home`:`Waves`,desc:`Live confirmed booking for ${e.totalGuests||1} guest(s). Status: PAID & ISSUED.`,location:e.activityLocation?.locationName||i[n].location,confirmed:!0,isRealBooking:!0})}});let t=e[0]?.activityDate||e[0]?.bookingDate;if(t)try{let e=new Date(t),n=new Date(e);n.setDate(e.getDate()+(i.length-1));let r=e.toLocaleDateString(`en-US`,{month:`short`}),o=n.toLocaleDateString(`en-US`,{month:`short`});a(r===o?`${e.getDate()}-${n.getDate()} ${r}`:`${e.getDate()} ${r} - ${n.getDate()} ${o}`)}catch{a(`13-19 Aug`)}}t(i),r(i[0]?.day||`DAY 01`)}catch(e){console.error(`Failed to load dynamic timeline:`,e)}finally{s(!1)}}e()},[]),(0,Z.jsxs)(`div`,{className:`dash-timeline-card`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-timeline-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 32px 32px;
          margin-bottom: 28px;
          box-shadow: 0 10px 30px -5px rgba(11, 37, 69, 0.05);
        }
        @media (max-width: 640px) {
          .dash-timeline-card { padding: 20px 16px; border-radius: 20px; }
        }

        .dash-tl-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 14px;
        }
        .dash-tl-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 900; letter-spacing: 0.15em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 4px;
        }
        .dash-tl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.2vw, 34px); font-weight: 700;
          color: #0B2545; margin: 0; line-height: 1.1;
        }

        /* Day Selector Tabs */
        .dash-tl-day-tabs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 12px;
          margin-bottom: 24px;
          border-bottom: 1.5px solid #f1f5f9;
        }
        .dash-tl-day-tabs::-webkit-scrollbar { display: none; }

        .dash-tl-day-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 10px 18px; border-radius: 16px;
          cursor: pointer; flex-shrink: 0;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b; transition: all 0.25s ease;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
        }
        .dash-tl-day-btn:hover {
          color: #F06543; border-color: #fdba74; background: #fff7ed;
        }
        .dash-tl-day-btn.active {
          background: #FFF1EE;
          border-color: #F06543; color: #F06543;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.25);
        }

        /* Day Main Box */
        .dash-tl-day-content {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px; padding: 26px 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        @media (max-width: 640px) {
          .dash-tl-day-content { padding: 18px 16px; }
        }

        .dash-tl-day-hdr {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px; margin-bottom: 22px;
          padding-bottom: 18px; border-bottom: 1.5px solid #f1f5f9;
        }

        /* Timeline Items List */
        .dash-tl-events-list {
          position: relative;
          display: flex; flex-direction: column; gap: 16px;
          padding-left: 28px;
        }
        .dash-tl-events-list::before {
          content: '';
          position: absolute; left: 8px; top: 12px; bottom: 12px;
          width: 2px;
          background: linear-gradient(180deg, #FF6B4A, #F06543);
          border-radius: 2px;
        }

        .dash-tl-event-item {
          position: relative;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px; padding: 16px 20px;
          transition: all 0.25s ease;
        }
        .dash-tl-event-item:hover {
          border-color: #fdba74;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          transform: translateX(4px);
        }

        .dash-tl-node-dot {
          position: absolute; left: -28px; top: 20px;
          width: 14px; height: 14px; border-radius: 50%;
          background: #ffffff; border: 2.5px solid #F06543;
          box-shadow: 0 0 10px rgba(240, 101, 67, 0.4);
          transform: translateX(-50%);
        }

        .dash-tl-time-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #F06543;
          display: inline-flex; align-items: center; gap: 6px;
          margin-bottom: 4px;
        }
        .dash-tl-event-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 800; color: #0B2545;
          margin-bottom: 4px;
        }
        .dash-tl-event-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-tl-header`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`dash-tl-sub`,children:[(0,Z.jsx)(b,{size:13,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`DAY-BY-DAY ITINERARY`})]}),(0,Z.jsx)(`h3`,{className:`dash-tl-title`,children:`Your Island Journey`})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#334155`,background:`#f8fafc`,padding:`8px 16px`,borderRadius:20,border:`1.5px solid #e2e8f0`},children:[(0,Z.jsx)(x,{size:14,color:`#F06543`}),(0,Z.jsxs)(`span`,{children:[e.length,` Days Total • `,i]})]})]}),(0,Z.jsx)(`div`,{className:`dash-tl-day-tabs`,children:e.map(e=>{let t=(e.location||`Port`).split(` `)[0].replace(/[^a-zA-Z]/g,``);return(0,Z.jsxs)(`button`,{className:`dash-tl-day-btn${n===e.day?` active`:``}`,onClick:()=>r(e.day),children:[(0,Z.jsx)(`span`,{children:e.day}),(0,Z.jsx)(`span`,{style:{fontSize:11,opacity:.85,fontWeight:700},children:t||`Port`})]},e.day)})}),(()=>{let t=e.find(e=>e.day===n)||e[0];return t?(0,Z.jsxs)(`div`,{className:`dash-tl-day-content`,children:[(0,Z.jsxs)(`div`,{className:`dash-tl-day-hdr`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:900,color:`#F06543`,letterSpacing:`0.04em`},children:[t.day,` • `,t.date]}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13.5,color:`#64748b`,marginTop:4,lineHeight:1.5,maxWidth:620},children:t.tagline||t.date})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,flexWrap:`wrap`},children:[(0,Z.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11.5,fontWeight:800,color:`#0B2545`,background:`#f1f5f9`,padding:`6px 12px`,borderRadius:12,border:`1px solid #e2e8f0`},children:[(0,Z.jsx)(F,{size:13,color:`#F06543`}),(0,Z.jsx)(`span`,{children:t.location})]}),t.hotel&&(0,Z.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11.5,fontWeight:800,color:`#059669`,background:`#ecfdf5`,padding:`6px 12px`,borderRadius:12,border:`1px solid #a7f3d0`},children:[(0,Z.jsx)(d,{size:13,color:`#059669`}),(0,Z.jsx)(`span`,{children:t.hotel})]})]})]}),(0,Z.jsx)(`div`,{className:`dash-tl-events-list`,children:(t.events||[]).map((e,t)=>(_e[e.icon],(0,Z.jsxs)(`div`,{className:`dash-tl-event-item`,style:{borderLeftColor:e.isRealBooking?`#10b981`:void 0,borderLeftWidth:e.isRealBooking?`3px`:void 0},children:[(0,Z.jsx)(`div`,{className:`dash-tl-node-dot`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:6},children:[(0,Z.jsxs)(`div`,{className:`dash-tl-time-badge`,children:[(0,Z.jsx)(C,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:e.time}),(0,Z.jsx)(`span`,{style:{color:`#cbd5e1`,margin:`0 4px`},children:`•`}),(0,Z.jsx)(`span`,{style:{background:e.category===`FERRY`?`#e0f2fe`:e.category===`TRANSFER`?`#f1f5f9`:`#fff1ee`,color:e.category===`FERRY`?`#0284c7`:e.category===`TRANSFER`?`#475569`:`#F06543`,fontSize:10.5,fontWeight:900,padding:`2px 8px`,borderRadius:6,letterSpacing:`0.04em`},children:e.category||`ACTIVITY`})]}),e.isRealBooking&&(0,Z.jsxs)(`span`,{style:{fontSize:11,fontWeight:800,color:`#059669`,background:`#ecfdf5`,padding:`2px 8px`,borderRadius:6,display:`inline-flex`,alignItems:`center`,gap:4},children:[(0,Z.jsx)(M,{size:11}),` Confirmed Voucher`]})]}),(0,Z.jsx)(`div`,{className:`dash-tl-event-title`,children:e.title}),(0,Z.jsx)(`div`,{className:`dash-tl-event-desc`,children:e.desc})]},t)))})]}):(0,Z.jsx)(`div`,{style:{padding:30,textAlign:`center`,color:`#64748b`,fontSize:13},children:`Loading daily island itinerary...`})})()]})}var ye=[`ALL`,`UPCOMING`,`COMPLETED`,`CANCELLED`];function Q({onViewBookingDetails:e}){let[t,n]=(0,X.useState)(`ALL`),[i,a]=(0,X.useState)([]);(0,X.useEffect)(()=>{G.getMyBookings().then(e=>{if(e.data&&Array.isArray(e.data)&&e.data.length>0){let t=e.data.map(e=>{let t=e.bookingStatus===`CONFIRMED`||e.paymentStatus===`PAID`,n=e.bookingStatus===`PENDING`&&e.paymentStatus!==`PAID`,r=e.bookingStatus||`CONFIRMED`;t&&(r=`UPCOMING`),n&&(r=`PENDING PAYMENT`);let i=`rgba(255, 171, 0, 0.15)`,a=`#ffab00`;t?(i=`#FFF0EB`,a=`#F06543`):n&&(i=`rgba(239, 68, 68, 0.15)`,a=`#ef4444`);let o=e.activity?.name||e.package?.name||e.ferry?.name||e.cruise?.name||e.stay?.name||(e.bookingType?`${e.bookingType} Reserve Pass`:`Andaman Experience`),s=e.totalGuests||(e.adultCount||1)+(e.childCount||0),c=e.activity?.heroImage||e.stay?.heroImage||e.cruise?.heroImage||e.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80`,l=e.activityLocation?.locationName||e.activity?.location||e.location||`Andaman & Nicobar`;return{id:e.bookingNumber,bookingType:e.bookingType||`ACTIVITY`,packageName:o,location:l,image:c,details:`Date: ${e.activityDate||e.bookingDate} ${e.slotStartTime?`• ⏰ ${e.slotStartTime}`:``} • ${s} Guest(s)`,price:`₹${parseFloat(e.totalAmount||0).toLocaleString(`en-IN`)}`,date:e.activityDate||e.bookingDate,status:r,statusBg:i,statusColor:a,rawBooking:e}});a(t)}}).catch(()=>{})},[]);let o=i,s=(t===`ALL`?o:o.filter(e=>e.status===t)).slice(0,5);return(0,Z.jsxs)(`div`,{className:`dash-bookings-card`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-bookings-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
        }
        @media (max-width: 640px) {
          .dash-bookings-card { padding: 20px; }
        }

        .dash-bk-hdr {
          display: flex; align-items: flex-end;
          justify-content: space-between; flex-wrap: wrap;
          gap: 16px; margin-bottom: 24px;
        }
        .dash-bk-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase; margin-bottom: 4px;
        }
        .dash-bk-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        /* Filter Tabs */
        .dash-bk-tabs {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .dash-bk-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 7px 16px; border-radius: 20px; cursor: pointer;
          border: 1px solid #ebded2;
          background: #FAF4EE;
          color: #64748b; transition: all 0.25s ease;
        }
        .dash-bk-tab-btn:hover {
          color: #F06543; border-color: #FFD3C4;
        }
        .dash-bk-tab-btn.active {
          background: #FFF0EB;
          border-color: #F06543; color: #F06543;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.2);
        }

        /* Grid */
        .dash-bk-grid {
          display: flex; flex-direction: column; gap: 14px;
        }

        .dash-bk-item {
          background: #ffffff;
          border: 1px solid #ebded2;
          border-radius: 18px; padding: 20px;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
          transition: all 0.3s ease;
        }
        .dash-bk-item:hover {
          border-color: #FFD3C4;
          background: #FAF4EE;
          transform: translateY(-2px);
        }

        .dash-bk-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 900; letter-spacing: 0.06em;
          padding: 4px 10px; border-radius: 12px;
          display: inline-flex; align-items: center; gap: 4px;
        }

        .dash-bk-btn-sm {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 8px 14px; border-radius: 12px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 5px;
          transition: all 0.25s ease;
        }
        .dash-bk-btn-primary {
          background: #FFF0EB;
          border: 1px solid #FFD3C4;
          color: #F06543;
        }
        .dash-bk-btn-primary:hover {
          background: linear-gradient(135deg, #FF6B4A, #F06543); color: #ffffff;
        }
        .dash-bk-btn-sec {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          color: #64748b;
        }
        .dash-bk-btn-sec:hover {
          color: #0B2545; border-color: #F06543;
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-bk-hdr`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dash-bk-sub`,children:`RESERVATIONS & CONFIRMATIONS`}),(0,Z.jsx)(`h3`,{className:`dash-bk-title`,children:`My Bookings`})]}),(0,Z.jsx)(`div`,{className:`dash-bk-tabs`,children:ye.map(e=>(0,Z.jsx)(`button`,{className:`dash-bk-tab-btn${t===e?` active`:``}`,onClick:()=>n(e),children:e},e))})]}),(0,Z.jsx)(`div`,{className:`dash-bk-grid`,children:s.length===0?(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1px dashed #ebded2`,borderRadius:18,padding:`36px 24px`,textAlign:`center`},children:[(0,Z.jsx)(ie,{size:32,color:`#F06543`,style:{margin:`0 auto 12px`,opacity:.8}}),(0,Z.jsx)(`h4`,{style:{color:`#0B2545`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,margin:`0 0 6px`,fontWeight:800},children:`No Active Bookings Found in Database`}),(0,Z.jsx)(`p`,{style:{color:`#64748b`,fontFamily:`'Inter', sans-serif`,fontSize:12,margin:`0 0 18px`},children:`You haven't reserved any catamaran ferries, ocean cruises, or beach resorts yet.`}),(0,Z.jsx)(`a`,{href:`/ferries`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/ferries`),window.dispatchEvent(new PopStateEvent(`popstate`))},style:{display:`inline-flex`,alignItems:`center`,gap:6,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,padding:`9px 20px`,borderRadius:20,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,textDecoration:`none`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`BOOK HIGH-SPEED FERRY →`})]}):s.map(t=>(0,Z.jsxs)(`div`,{className:`dash-bk-item`,style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,Z.jsx)(`img`,{src:t.image,alt:t.packageName,style:{width:72,height:72,borderRadius:14,objectFit:`cover`,border:`1px solid #EBDED2`,flexShrink:0}}),(0,Z.jsxs)(`div`,{style:{flex:1,minWidth:220},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4,flexWrap:`wrap`},children:[(0,Z.jsxs)(`span`,{className:`dash-bk-badge`,style:{background:t.statusBg,color:t.statusColor,border:`1px solid ${t.statusColor}44`},children:[(0,Z.jsx)(r,{size:11}),t.status]}),(0,Z.jsx)(`span`,{style:{background:`#FAF4EE`,color:`#0B2545`,fontSize:10,fontWeight:800,padding:`2px 8px`,borderRadius:6,border:`1px solid #EBDED2`,textTransform:`uppercase`},children:t.bookingType===`ACTIVITY`?`🌊 OCEAN ACTIVITY`:t.bookingType===`STAY`?`🏨 STAY`:t.bookingType===`FERRY`?`🚢 FERRY`:t.bookingType}),(0,Z.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:700,color:`#627d8a`},children:[`ID: `,t.id]})]}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15.5,fontWeight:800,color:`#0B2545`,marginBottom:2},children:t.packageName}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#64748b`},children:t.details})]}),(0,Z.jsxs)(`div`,{style:{textAlign:`right`,minWidth:110},children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:17,fontWeight:900,color:`#F06543`},children:t.price}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11,color:`#64748b`,marginTop:2},children:t.date})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,Z.jsxs)(`button`,{className:`dash-bk-btn-sm dash-bk-btn-primary`,onClick:()=>{e?e(t):(window.history.pushState({},``,`/booking-confirmation/${t.id}`),window.dispatchEvent(new Event(`popstate`)))},children:[(0,Z.jsx)(v,{size:12}),(0,Z.jsx)(`span`,{children:`DETAILS`})]}),(t.status===`UPCOMING`||t.status===`CONFIRMED`||t.rawBooking?.bookingStatus===`CONFIRMED`||t.rawBooking?.paymentStatus===`PAID`)&&t.status!==`PENDING PAYMENT`&&t.rawBooking?.paymentStatus!==`PENDING`&&(0,Z.jsxs)(`button`,{className:`dash-bk-btn-sm dash-bk-btn-sec`,onClick:()=>{window.history.pushState({},``,`/booking-confirmation/${t.id}`),window.dispatchEvent(new Event(`popstate`))},children:[(0,Z.jsx)(T,{size:12}),(0,Z.jsx)(`span`,{children:`PASS / VOUCHER`})]})]})]},t.id))})]})}function be(){let[e,t]=(0,X.useState)(null);if((0,X.useEffect)(()=>{G.getMyBookings().then(e=>{if(e.data&&Array.isArray(e.data)){let n=e.data.find(e=>e.bookingType===`FERRY`);n&&t(n)}}).catch(()=>{})},[]),!e)return(0,Z.jsxs)(`div`,{className:`dash-ferry-card`,children:[(0,Z.jsx)(`style`,{children:`
          .dash-ferry-card {
            position: relative;
            background: #ffffff;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1.5px solid #ebded2;
            border-radius: 24px;
            padding: 24px 28px;
            margin-bottom: 28px;
            box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
            overflow: hidden;
          }
          .dash-ferry-hdr {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 18px; flex-wrap: wrap; gap: 10px;
          }
          .dash-ferry-sub {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12.5px; font-weight: 800; letter-spacing: 0.18em;
            color: #F06543; text-transform: uppercase;
            display: flex; align-items: center; gap: 6px;
          }
          .dash-ferry-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 18px; font-weight: 800; color: #0B2545;
          }
        `}),(0,Z.jsx)(`div`,{className:`dash-ferry-hdr`,children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`dash-ferry-sub`,children:[(0,Z.jsx)(f,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`LIVE INTER-ISLAND FERRY`})]}),(0,Z.jsx)(`div`,{className:`dash-ferry-title`,children:`No Active Ferry Tickets`})]})}),(0,Z.jsxs)(`div`,{style:{background:`#FAF4EE`,border:`1px dashed #ebded2`,borderRadius:18,padding:`24px 20px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:16},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#0B2545`,marginBottom:4},children:`Reserve High-Speed Catamarans`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#64748b`,margin:0},children:`Sail between Port Blair, Havelock (Swaraj Dweep), and Neil (Shaheed Dweep) aboard Nautika, Makruzz, & Green Ocean.`})]}),(0,Z.jsxs)(`a`,{href:`/ferries`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/ferries`),window.dispatchEvent(new PopStateEvent(`popstate`))},style:{background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,padding:`10px 20px`,borderRadius:14,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,textDecoration:`none`,textTransform:`uppercase`,letterSpacing:`0.05em`,boxShadow:`0 4px 14px rgba(240, 101, 67, 0.25)`,display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,Z.jsx)(`span`,{children:`BOOK FERRIES`}),(0,Z.jsx)(s,{size:12})]})]})]});let n=e.ferry?.operator||e.ferry?.name||`Catamaran Ferry`,i=e.bookingStatus||`CONFIRMED`,a=e.ferry?.fromPort||`PORT BLAIR`,o=e.ferry?.toPort||`HAVELOCK ISLAND`,c=e.slotStartTime||e.ferry?.departureTime||`08:30 AM`,l=e.activityDate||e.bookingDate||`Scheduled on Route`,u=e.seatNumber||`Assigned at Jetty`;return(0,Z.jsxs)(`div`,{className:`dash-ferry-card`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-ferry-card {
          position: relative;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
          overflow: hidden;
        }

        .dash-ferry-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 18px; flex-wrap: wrap; gap: 10px;
        }
        .dash-ferry-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
        }
        .dash-ferry-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 800; color: #0B2545;
        }

        .dash-ferry-status-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          background: #FFF0EB;
          border: 1px solid #FFD3C4;
          padding: 5px 12px; border-radius: 14px;
          display: flex; align-items: center; gap: 5px;
        }

        .dash-ferry-route-box {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 18px; padding: 18px;
          margin-bottom: 16px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }

        .dash-ferry-meta-row {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          margin-top: 16px;
        }
        @media (max-width: 540px) {
          .dash-ferry-meta-row { grid-template-columns: 1fr; }
        }
        .dash-ferry-meta-item {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 14px; padding: 10px 14px;
        }
        .dash-ferry-meta-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; color: #627d8a;
          text-transform: uppercase; margin-bottom: 2px;
        }
        .dash-ferry-meta-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #0B2545;
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-ferry-hdr`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`dash-ferry-sub`,children:[(0,Z.jsx)(f,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`LIVE INTER-ISLAND FERRY`})]}),(0,Z.jsx)(`div`,{className:`dash-ferry-title`,children:n})]}),(0,Z.jsxs)(`div`,{className:`dash-ferry-status-badge`,children:[(0,Z.jsx)(r,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:i})]})]}),(0,Z.jsxs)(`div`,{className:`dash-ferry-route-box`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:700,color:`#F06543`},children:`ROUTE`}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,display:`flex`,alignItems:`center`,gap:8,marginTop:2},children:[(0,Z.jsx)(`span`,{children:a}),(0,Z.jsx)(s,{size:14,color:`#F06543`}),(0,Z.jsx)(`span`,{children:o})]})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:700,color:`#64748b`},children:`DEPARTURE`}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#F06543`,marginTop:2},children:[c,` • `,l]})]}),(0,Z.jsxs)(`a`,{href:`/ferries`,onClick:e=>{e.preventDefault(),window.history.pushState({},``,`/ferries`),window.dispatchEvent(new PopStateEvent(`popstate`))},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`8px 16px`,borderRadius:14,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:5,transition:`all 0.25s ease`},children:[(0,Z.jsx)(`span`,{children:`LIVE TRACKING`}),(0,Z.jsx)(s,{size:11})]})]}),(0,Z.jsxs)(`div`,{className:`dash-ferry-meta-row`,children:[(0,Z.jsxs)(`div`,{className:`dash-ferry-meta-item`,children:[(0,Z.jsx)(`div`,{className:`dash-ferry-meta-lbl`,children:`Assigned Seats`}),(0,Z.jsx)(`div`,{className:`dash-ferry-meta-val`,style:{color:`#F06543`},children:u})]}),(0,Z.jsxs)(`div`,{className:`dash-ferry-meta-item`,children:[(0,Z.jsx)(`div`,{className:`dash-ferry-meta-lbl`,children:`Booking Ref`}),(0,Z.jsx)(`div`,{className:`dash-ferry-meta-val`,children:e.bookingNumber})]}),(0,Z.jsxs)(`div`,{className:`dash-ferry-meta-item`,children:[(0,Z.jsx)(`div`,{className:`dash-ferry-meta-lbl`,children:`Sea Condition`}),(0,Z.jsxs)(`div`,{className:`dash-ferry-meta-val`,style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,Z.jsx)(y,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:`Calm Waves • Verified`})]})]})]})]})}function xe(){let[e,t]=(0,X.useState)([]);(0,X.useEffect)(()=>{K.getActivities().then(e=>{let n=Array.isArray(e)?e:e?.data||[];if(n.length>0){let e=n.slice(0,4).map(e=>({id:e.id,title:e.name,location:e.location||`Havelock Island`,rating:Number(e.rating||4.9),reviews:e.reviewsCount||85,price:`₹${parseFloat(e.price||3500).toLocaleString(`en-IN`)}`,image:e.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80`,badge:e.badge||`TOP RATED`,liked:!0}));t(e)}}).catch(()=>{})},[]);let n=e=>{t(t=>t.map(t=>t.id===e?{...t,liked:!t.liked}:t))};return(0,Z.jsxs)(`div`,{className:`dash-wishlist-card`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-wishlist-card {
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }
        @media (max-width: 640px) {
          .dash-wishlist-card { padding: 20px; }
        }

        .dash-wl-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px; flex-wrap: wrap; gap: 12px;
        }
        .dash-wl-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 4px;
        }
        .dash-wl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        /* Grid */
        .dash-wl-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        @media (max-width: 768px) {
          .dash-wl-grid { grid-template-columns: 1fr; }
        }

        .dash-wl-item {
          background: #FAF4EE;
          border: 1px solid #EBDED2;
          border-radius: 20px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dash-wl-item:hover {
          transform: translateY(-4px);
          border-color: #FFD3C4;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.12);
        }

        .dash-wl-img-box {
          position: relative; height: 160px; overflow: hidden;
        }
        .dash-wl-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dash-wl-item:hover .dash-wl-img-box img {
          transform: scale(1.08);
        }

        .dash-wl-heart-btn {
          position: absolute; top: 12px; right: 12px;
          width: 34px; height: 34px; border-radius: 50%;
          background: #ffffff; backdrop-filter: blur(8px);
          border: 1px solid #EBDED2;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.25s ease;
        }
        .dash-wl-heart-btn:hover {
          transform: scale(1.1);
        }

        .dash-wl-body {
          padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-wl-hdr`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`dash-wl-sub`,children:[(0,Z.jsx)(L,{size:12,color:`#F06543`,fill:`#F06543`}),(0,Z.jsx)(`span`,{children:`SAVED DESTINATIONS`})]}),(0,Z.jsx)(`h3`,{className:`dash-wl-title`,children:`Your Wishlist`})]}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20},children:[e.filter(e=>e.liked).length,` SAVED ITEMS`]})]}),(0,Z.jsx)(`div`,{className:`dash-wl-grid`,children:e.map(e=>(0,Z.jsxs)(`div`,{className:`dash-wl-item`,children:[(0,Z.jsxs)(`div`,{className:`dash-wl-img-box`,children:[(0,Z.jsx)(`img`,{src:e.image,alt:e.title}),(0,Z.jsx)(`button`,{className:`dash-wl-heart-btn`,onClick:()=>n(e.id),title:e.liked?`Remove from wishlist`:`Add to wishlist`,children:(0,Z.jsx)(L,{size:16,fill:e.liked?`#F06543`:`none`,color:`#F06543`})}),(0,Z.jsx)(`span`,{style:{position:`absolute`,bottom:10,left:10,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,color:`#0B2545`,background:`#ffffff`,padding:`3px 9px`,borderRadius:12,border:`1px solid #EBDED2`},children:e.badge||`FEATURED`})]}),(0,Z.jsxs)(`div`,{className:`dash-wl-body`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:5,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:700,color:`#F06543`,marginBottom:2},children:[(0,Z.jsx)(F,{size:10}),(0,Z.jsx)(`span`,{children:e.location})]}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:800,color:`#0B2545`,marginBottom:6},children:e.title})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginTop:12,paddingTop:12,borderTop:`1px solid #EBDED2`},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#F06543`},children:e.price}),(0,Z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,color:`#5C6F84`,textDecoration:`line-through`,marginLeft:6},children:e.originalPrice})]}),(0,Z.jsxs)(`a`,{href:`/destinations`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`7px 14px`,borderRadius:12,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,gap:4,transition:`all 0.25s ease`},children:[(0,Z.jsx)(`span`,{children:`EXPLORE`}),(0,Z.jsx)(s,{size:10})]})]})]})]},e.id))})]})}function Se({onEditProfile:e}){let t=(()=>{try{let e=localStorage.getItem(`andaman_user`);return e?JSON.parse(e):null}catch{return null}})(),n=t?.user||t,r=n?.name||`${n?.firstName||``} ${n?.lastName||``}`.trim()||n?.email?.split(`@`)[0]||`Traveler`,i=n?.email||`traveler@andamantrails.com`,a=n?.phone||`+91 98765 43210`,o=n?.role||`Traveler VIP`;return(0,Z.jsxs)(`div`,{className:`dash-profile-card`,children:[(0,Z.jsx)(`style`,{children:`
        .dash-profile-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
        }

        .dash-prof-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
        }

        .dash-prof-avatar-row {
          display: flex; align-items: center; gap: 16px;
        }

        .dash-prof-info-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
          margin-top: 16px; padding-top: 16px;
          border-top: 1px solid #ebded2;
        }
        @media (max-width: 540px) {
          .dash-prof-info-grid { grid-template-columns: 1fr; }
        }

        .dash-prof-info-item {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 14px; padding: 10px 14px;
        }
        .dash-prof-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; color: #627d8a;
          text-transform: uppercase; margin-bottom: 2px;
        }
        .dash-prof-val {
          font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 600; color: #0B2545;
        }
      `}),(0,Z.jsxs)(`div`,{className:`dash-prof-hdr`,children:[(0,Z.jsxs)(`div`,{className:`dash-prof-avatar-row`,children:[(0,Z.jsx)(`div`,{style:{width:64,height:64,borderRadius:`50%`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:22,fontWeight:950,boxShadow:`0 4px 18px rgba(240, 101, 67, 0.35)`,border:`2.5px solid #FFD3C4`,flexShrink:0},children:(e=>{if(!e)return`TR`;let t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()})(r)}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#0B2545`},children:r}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,marginTop:2,display:`flex`,alignItems:`center`,gap:5},children:[(0,Z.jsx)(h,{size:12,color:`#F06543`}),(0,Z.jsx)(`span`,{children:o===`ADMIN`?`Executive Admin`:`Platinum Explorer`})]})]})]}),(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`8px 16px`,borderRadius:14,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,transition:`all 0.25s ease`},children:[(0,Z.jsx)(j,{size:13}),(0,Z.jsx)(`span`,{children:`EDIT PROFILE`})]})]}),(0,Z.jsxs)(`div`,{className:`dash-prof-info-grid`,children:[(0,Z.jsxs)(`div`,{className:`dash-prof-info-item`,children:[(0,Z.jsx)(`div`,{className:`dash-prof-lbl`,children:`Email Address`}),(0,Z.jsx)(`div`,{className:`dash-prof-val`,children:i})]}),(0,Z.jsxs)(`div`,{className:`dash-prof-info-item`,children:[(0,Z.jsx)(`div`,{className:`dash-prof-lbl`,children:`Phone Number`}),(0,Z.jsx)(`div`,{className:`dash-prof-val`,children:a})]}),(0,Z.jsxs)(`div`,{className:`dash-prof-info-item`,children:[(0,Z.jsx)(`div`,{className:`dash-prof-lbl`,children:`Account Tier`}),(0,Z.jsx)(`div`,{className:`dash-prof-val`,style:{color:`#F06543`},children:`VIP Platinum`})]}),(0,Z.jsxs)(`div`,{className:`dash-prof-info-item`,children:[(0,Z.jsx)(`div`,{className:`dash-prof-lbl`,children:`Member Status`}),(0,Z.jsx)(`div`,{className:`dash-prof-val`,children:`Active & Verified`})]})]})]})}function Ce(){let e=(0,X.useRef)(),t=(0,X.useRef)();return R((t,n)=>{e.current&&(e.current.rotation.y+=n*.15,e.current.position.y=Math.sin(t.clock.elapsedTime*1.5)*.08)}),(0,Z.jsxs)(`group`,{ref:e,children:[(0,Z.jsxs)(`mesh`,{position:[-.8,0,.4],children:[(0,Z.jsx)(`cylinderGeometry`,{args:[.5,.7,.18,16]}),(0,Z.jsx)(`meshStandardMaterial`,{color:`#F06543`,roughness:.3,metalness:.2})]}),(0,Z.jsxs)(`mesh`,{position:[.6,0,-.5],children:[(0,Z.jsx)(`cylinderGeometry`,{args:[.45,.6,.2,16]}),(0,Z.jsx)(`meshStandardMaterial`,{color:`#F06543`,roughness:.2,metalness:.3})]}),(0,Z.jsxs)(`mesh`,{position:[.4,0,.6],children:[(0,Z.jsx)(`cylinderGeometry`,{args:[.3,.4,.15,16]}),(0,Z.jsx)(`meshStandardMaterial`,{color:`#40c4a0`,roughness:.3,metalness:.2})]}),(0,Z.jsxs)(`line`,{ref:t,children:[(0,Z.jsx)(`bufferGeometry`,{children:(0,Z.jsx)(`bufferAttribute`,{attach:`attributes-position`,count:3,array:new Float32Array([-.8,.15,.4,.6,.15,-.5,.4,.15,.6]),itemSize:3})}),(0,Z.jsx)(`lineBasicMaterial`,{color:`#F06543`,linewidth:2})]}),(0,Z.jsxs)(`mesh`,{position:[-.8,.25,.4],children:[(0,Z.jsx)(`sphereGeometry`,{args:[.08,12,12]}),(0,Z.jsx)(`meshBasicMaterial`,{color:`#F06543`})]}),(0,Z.jsxs)(`mesh`,{position:[.6,.25,-.5],children:[(0,Z.jsx)(`sphereGeometry`,{args:[.09,12,12]}),(0,Z.jsx)(`meshBasicMaterial`,{color:`#F06543`})]}),(0,Z.jsxs)(`mesh`,{position:[.4,.2,.6],children:[(0,Z.jsx)(`sphereGeometry`,{args:[.07,12,12]}),(0,Z.jsx)(`meshBasicMaterial`,{color:`#f0c060`})]})]})}function $(){return(0,Z.jsxs)(`div`,{style:{width:`100%`,height:180,position:`relative`,borderRadius:20,overflow:`hidden`},children:[(0,Z.jsxs)(z,{camera:{position:[0,2.5,3],fov:45},children:[(0,Z.jsx)(`ambientLight`,{intensity:.8}),(0,Z.jsx)(`directionalLight`,{position:[5,8,5],intensity:1.2}),(0,Z.jsx)(`pointLight`,{position:[-3,4,-2],intensity:1.5,color:`#F06543`}),(0,Z.jsx)(Ce,{})]}),(0,Z.jsx)(`div`,{style:{position:`absolute`,bottom:10,left:14,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#F06543`,background:`#f8fafc`,backdropFilter:`blur(6px)`,padding:`4px 10px`,borderRadius:12,border:`1px solid rgba(22, 217, 255, 0.3)`},children:`3D ROUTE: PORT BLAIR → HAVELOCK → NEIL`})]})}function we({onBack:e}){let[t,n]=(0,X.useState)([]),[r,i]=(0,X.useState)(!0),[a,o]=(0,X.useState)(null);(0,X.useEffect)(()=>{G.getMyBookings().then(e=>{e.data&&Array.isArray(e.data)&&n(e.data)}).catch(()=>{}).finally(()=>i(!1))},[]);let c=t.filter(e=>e.bookingStatus===`CONFIRMED`||e.paymentStatus===`PAID`),l=t.filter(e=>e.bookingStatus===`COMPLETED`||e.bookingStatus===`CANCELLED`);return(0,Z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,Z.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:10},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]}),(0,Z.jsx)(`h1`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:36,fontWeight:600,color:`#0B2545`,margin:0},children:`My Andaman Trips`})]})}),r?(0,Z.jsx)(`div`,{style:{color:`#F06543`,padding:24,textAlign:`center`,fontFamily:`'Space Grotesk', sans-serif`},children:`Loading your travel database...`}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1.5px solid #EBDED2`,borderRadius:24,padding:28,boxShadow:`0 4px 20px rgba(11, 37, 69, 0.04)`},children:[(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:12},children:[`UPCOMING TRIPS (`,c.length,`)`]}),c.length===0?(0,Z.jsx)(`div`,{style:{color:`#64748b`,fontFamily:`'Inter', sans-serif`,fontSize:13,padding:`20px 0`},children:`No upcoming trips reserved. Book a Stay or Ferry to begin your trip!`}):(0,Z.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:c.map(e=>{let t=e.activity?.name||e.package?.name||e.ferry?.name||e.cruise?.name||e.stay?.name||`${e.bookingType} Reserve Pass`,n=e.activity?.heroImage||e.stay?.heroImage||e.cruise?.heroImage||e.heroImage||`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80`,r=e.activityDate||e.bookingDate,i=e.totalGuests||(e.adultCount||1)+(e.childCount||0);return(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 2fr`,gap:24,alignItems:`center`,background:`#FAF4EE`,padding:20,borderRadius:18,border:`1px solid #EBDED2`},children:[(0,Z.jsx)(`img`,{src:n,alt:e.bookingNumber,style:{width:`100%`,height:140,borderRadius:18,objectFit:`cover`}}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:24,fontWeight:600,color:`#0B2545`},children:t}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#F06543`,marginBottom:8,fontWeight:600},children:[`Booking ID: `,e.bookingNumber,` • Travel Date: `,r,` `,e.slotStartTime?`• ⏰ ${e.slotStartTime}`:``]}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#5C6F84`,marginBottom:16},children:[`Guests: `,i,` • Status: `,(0,Z.jsx)(`span`,{style:{color:`#F06543`,fontWeight:700},children:e.bookingStatus||`CONFIRMED`}),` • Paid: `,(0,Z.jsxs)(`strong`,{style:{color:`#0B2545`},children:[`₹`,Number(e.totalAmount||0).toLocaleString()]})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`},children:[(0,Z.jsxs)(`button`,{onClick:()=>o(e),style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,border:`none`,padding:`10px 20px`,borderRadius:12,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 4px 14px rgba(240, 101, 67, 0.35)`},children:[`VIEW COMPLETE DETAILS `,(0,Z.jsx)(s,{size:13})]}),(e.bookingStatus===`CONFIRMED`||e.paymentStatus===`PAID`)&&e.paymentStatus!==`PENDING`&&(0,Z.jsx)(`button`,{onClick:()=>{window.history.pushState({},``,`/booking-confirmation/${e.bookingNumber}`),window.dispatchEvent(new Event(`popstate`))},style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#0B2545`,background:`#ffffff`,border:`1.5px solid #EBDED2`,padding:`10px 18px`,borderRadius:12,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6},children:`OPEN VOUCHER 📄`})]})]})]},e.id||e.bookingNumber)})})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1.5px solid #EBDED2`,borderRadius:24,padding:28,boxShadow:`0 4px 20px rgba(11, 37, 69, 0.04)`},children:[(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#0B2545`,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:16},children:[`PAST TRIPS (`,l.length,`)`]}),l.length===0?(0,Z.jsx)(`div`,{style:{color:`#5C6F84`,fontFamily:`'Inter', sans-serif`,fontSize:12,padding:`10px 0`},children:`No completed trips recorded in past history.`}):(0,Z.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:16},children:l.map(e=>(0,Z.jsxs)(`div`,{style:{background:`#FAF4EE`,border:`1px solid #EBDED2`,borderRadius:18,padding:18,display:`flex`,gap:14},children:[(0,Z.jsx)(`img`,{src:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=200&q=80`,alt:e.bookingNumber,style:{width:100,height:80,borderRadius:12,objectFit:`cover`}}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#0B2545`},children:[e.bookingType,` Tour`]}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11,color:`#5C6F84`},children:e.bookingDate}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#F06543`,marginTop:6},children:[`₹`,parseFloat(e.totalAmount).toLocaleString(),` • `,e.bookingStatus]})]})]},e.id))})]})]}),a&&(0,Z.jsx)(`div`,{style:{position:`fixed`,inset:0,zIndex:1e4,background:`rgba(11, 37, 69, 0.82)`,backdropFilter:`blur(16px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:20},children:(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1.5px solid #e2e8f0`,borderRadius:28,padding:`32px 28px`,maxWidth:720,width:`100%`,position:`relative`,maxHeight:`90vh`,overflowY:`auto`,boxShadow:`0 25px 70px rgba(11, 37, 69, 0.25)`},className:`trip-modal`,children:[(0,Z.jsx)(`style`,{children:`
              .trip-modal::-webkit-scrollbar { width: 6px; }
              .trip-modal::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
            `}),(0,Z.jsx)(`button`,{onClick:()=>o(null),style:{position:`absolute`,top:22,right:22,background:`#f1f5f9`,border:`none`,borderRadius:`50%`,width:34,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#64748b`,cursor:`pointer`,transition:`all 0.2s ease`},children:(0,Z.jsx)(w,{size:18})}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:12},children:[(0,Z.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,padding:`5px 14px`,borderRadius:14,letterSpacing:`0.06em`},children:[a.bookingType,` PASS`]}),(0,Z.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:5,background:a.paymentStatus===`PAID`?`#ecfdf5`:`#fff7ed`,color:a.paymentStatus===`PAID`?`#059669`:`#ea580c`,border:`1px solid ${a.paymentStatus===`PAID`?`#a7f3d0`:`#fed7aa`}`,fontSize:11.5,fontWeight:800,padding:`4px 12px`,borderRadius:20,fontFamily:`'Space Grotesk', sans-serif`},children:[(0,Z.jsx)(M,{size:13}),a.paymentStatus===`PAID`?`CONFIRMED & PAID`:a.paymentStatus]})]}),(0,Z.jsx)(`h3`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(24px, 3.5vw, 32px)`,fontWeight:700,color:`#0B2545`,margin:`0 0 6px`,lineHeight:1.15},children:a.bookingType===`PACKAGE`?a.package?.name||`Tour Package`:a.bookingType===`STAY`?a.stay?.name||`Hotel Stay`:a.bookingType===`FERRY`?a.ferry?.name||`Ferry Catamaran`:a.bookingType===`CRUISE`?a.cruise?.name||`Island Cruise`:a.activity?.title||a.activity?.name||a.serviceName||`Adventure Activity`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:12,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,color:`#64748b`,marginBottom:24,paddingBottom:16,borderBottom:`1px solid #e2e8f0`},children:[(0,Z.jsxs)(`span`,{style:{color:`#F06543`,fontWeight:800},children:[`Ref Number: `,a.bookingNumber]}),(0,Z.jsx)(`span`,{children:`•`}),(0,Z.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:4},children:[(0,Z.jsx)(x,{size:13,color:`#F06543`}),`Date: `,a.activityDate||a.bookingDate||`Scheduled`]}),a.slotStartTime&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`span`,{children:`•`}),(0,Z.jsxs)(`span`,{children:[`⏰ Slot: `,a.slotStartTime]})]})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:18},children:[(0,Z.jsxs)(`div`,{style:{background:`#f8fafc`,border:`1.5px solid #e2e8f0`,borderRadius:20,padding:`20px 22px`},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:11,fontWeight:900,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:14},children:[(0,Z.jsx)(S,{size:15}),`BOOKING DETAILS`]}),(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:14,fontSize:13,fontFamily:`'Inter', sans-serif`},children:[(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#64748b`,fontSize:11,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.04em`,display:`block`,marginBottom:2},children:`PRIMARY CUSTOMER`}),(0,Z.jsx)(`strong`,{style:{color:`#0B2545`,fontSize:14},children:a.customerName||`Guest Traveler`})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#64748b`,fontSize:11,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.04em`,display:`block`,marginBottom:2},children:`CONTACT`}),(0,Z.jsxs)(`strong`,{style:{color:`#0B2545`,fontSize:13},children:[a.customerPhone||`N/A`,` `,a.customerEmail?`(${a.customerEmail})`:``]})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#64748b`,fontSize:11,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.04em`,display:`block`,marginBottom:2},children:`TOTAL GUESTS`}),(0,Z.jsxs)(`strong`,{style:{color:`#0B2545`,fontSize:14},children:[a.totalGuests||a.guests?.length||1,` Guests`]})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#64748b`,fontSize:11,fontWeight:800,textTransform:`uppercase`,letterSpacing:`0.04em`,display:`block`,marginBottom:2},children:`AMOUNT PAID`}),(0,Z.jsxs)(`strong`,{style:{color:`#F06543`,fontSize:17,fontFamily:`'Space Grotesk', sans-serif`},children:[`₹`,Number(a.totalAmount||0).toLocaleString(`en-IN`)]})]})]})]}),(0,Z.jsxs)(`div`,{style:{background:`#f8fafc`,border:`1.5px solid #e2e8f0`,borderRadius:20,padding:`20px 22px`},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:14},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:11,fontWeight:900,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,letterSpacing:`0.12em`,textTransform:`uppercase`},children:[(0,Z.jsx)(M,{size:15}),`TRAVELERS MANIFEST & ID DOCUMENTS`]}),(0,Z.jsxs)(`span`,{style:{fontSize:11.5,color:`#64748b`,fontWeight:700},children:[a.guests?.length||1,` Verified Travelers`]})]}),!a.guests||a.guests.length===0?(0,Z.jsxs)(`div`,{style:{padding:14,background:`#ffffff`,borderRadius:14,border:`1px solid #edf2f7`,fontSize:12.5,color:`#64748b`},children:[`Lead traveler manifest registered under `,a.customerName,`.`]}):(0,Z.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:a.guests.map((e,t)=>{let n=e.guestType?e.guestType.toUpperCase():`ADULT`,r=e.gender?e.gender.charAt(0).toUpperCase()+e.gender.slice(1).toLowerCase():`Male`;return e.idType&&e.idType.trim()&&e.idType,(0,Z.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:14,padding:`16px 18px`,background:`#ffffff`,borderRadius:16,border:`1.5px solid #e2e8f0`,boxShadow:`0 2px 8px rgba(0,0,0,0.02)`},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,minWidth:160},children:[(0,Z.jsxs)(`div`,{style:{width:38,height:38,borderRadius:12,background:`rgba(240, 101, 67, 0.12)`,color:`#F06543`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:900,flexShrink:0},children:[`G`,t+1]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{fontSize:11,fontWeight:800,color:`#F06543`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:[`GUEST `,t+1]}),(0,Z.jsx)(`div`,{style:{fontSize:14,fontWeight:800,color:`#0B2545`,marginTop:1},children:e.fullName||`Guest ${t+1}`})]})]}),(0,Z.jsxs)(`div`,{style:{minWidth:110},children:[(0,Z.jsx)(`div`,{style:{fontSize:10.5,fontWeight:800,color:`#94a3b8`,textTransform:`uppercase`,letterSpacing:`0.04em`},children:`TYPE / GENDER`}),(0,Z.jsxs)(`span`,{style:{display:`inline-block`,background:n===`CHILD`?`#fef3c7`:`#f1f5f9`,color:n===`CHILD`?`#b45309`:`#334155`,fontSize:11.5,fontWeight:800,padding:`2px 8px`,borderRadius:8,marginTop:3},children:[n,` • `,r]})]}),(0,Z.jsxs)(`div`,{style:{minWidth:150},children:[(0,Z.jsxs)(`div`,{style:{fontSize:10.5,fontWeight:800,color:`#94a3b8`,textTransform:`uppercase`,letterSpacing:`0.04em`},children:[`DOCUMENT ID `,e.idType?`(${e.idType})`:``]}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:13,fontWeight:800,color:e.idNumber?`#F06543`:`#64748b`,marginTop:2},children:e.idNumber||`Verified on Check-in`})]}),(0,Z.jsxs)(`div`,{style:{minWidth:100},children:[(0,Z.jsx)(`div`,{style:{fontSize:10.5,fontWeight:800,color:`#94a3b8`,textTransform:`uppercase`,letterSpacing:`0.04em`,marginBottom:2},children:`ID PHOTO`}),e.documentImage?(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,Z.jsx)(`img`,{src:`https://darkslategray-ant-815032.hostingersite.com${e.documentImage}`,alt:`ID`,style:{width:38,height:28,objectFit:`cover`,borderRadius:6,border:`1px solid #cbd5e1`,cursor:`pointer`},onClick:()=>window.open(`https://darkslategray-ant-815032.hostingersite.com${e.documentImage}`,`_blank`),onError:e=>{e.target.style.display=`none`}}),(0,Z.jsx)(`button`,{onClick:()=>window.open(`https://darkslategray-ant-815032.hostingersite.com${e.documentImage}`,`_blank`),style:{background:`#FFF0EB`,border:`1px solid #FFD3C4`,borderRadius:6,width:26,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#F06543`,cursor:`pointer`,padding:0},title:`View Document`,children:(0,Z.jsx)(v,{size:13})})]}):(0,Z.jsx)(`span`,{style:{fontSize:11,color:`#94a3b8`,background:`#f8fafc`,border:`1px solid #e2e8f0`,padding:`2px 8px`,borderRadius:6,display:`inline-block`},children:`Physical ID Check`})]})]},e.id||t)})})]}),(0,Z.jsxs)(`div`,{style:{background:`#f8fafc`,border:`1.5px solid #e2e8f0`,borderRadius:20,padding:`20px 22px`},children:[(0,Z.jsx)(`div`,{style:{fontSize:11,fontWeight:900,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:14},children:`TRANSACTION SPECIFICATIONS`}),(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:14,fontSize:12.5,color:`#334155`,fontFamily:`'Inter', sans-serif`},children:[(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#94a3b8`,fontSize:11,fontWeight:800,textTransform:`uppercase`,display:`block`,marginBottom:2},children:`GATEWAY / SOURCE`}),(0,Z.jsx)(`strong`,{style:{color:`#0B2545`,fontSize:13},children:`Razorpay Secure Checkout`})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#94a3b8`,fontSize:11,fontWeight:800,textTransform:`uppercase`,display:`block`,marginBottom:2},children:`ORDER ID`}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,color:`#0B2545`,fontSize:12,fontWeight:700},children:a.razorpayOrderId||a.bookingNumber||`N/A`})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#94a3b8`,fontSize:11,fontWeight:800,textTransform:`uppercase`,display:`block`,marginBottom:2},children:`TRANSACTION ID`}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,color:`#0B2545`,fontSize:12,fontWeight:700},children:a.razorpayPaymentId||`Settled`})]}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,padding:`12px 14px`,borderRadius:14,border:`1px solid #edf2f7`},children:[(0,Z.jsx)(`span`,{style:{color:`#94a3b8`,fontSize:11,fontWeight:800,textTransform:`uppercase`,display:`block`,marginBottom:2},children:`SETTLEMENT STATUS`}),(0,Z.jsxs)(`div`,{style:{color:`#059669`,fontWeight:900,display:`flex`,alignItems:`center`,gap:4,marginTop:2},children:[(0,Z.jsx)(M,{size:13}),`SUCCESSFUL (PAID)`]})]})]})]})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:24,flexWrap:`wrap`},children:[(a.bookingStatus===`CONFIRMED`||a.paymentStatus===`PAID`)&&a.paymentStatus!==`PENDING`?(0,Z.jsxs)(`button`,{onClick:()=>{window.history.pushState({},``,`/booking-confirmation/${a.bookingNumber}`),window.dispatchEvent(new Event(`popstate`))},style:{flex:1,minWidth:220,padding:`14px 24px`,borderRadius:14,border:`none`,background:`linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)`,color:`#ffffff`,fontWeight:900,fontSize:13,cursor:`pointer`,fontFamily:`'Space Grotesk', sans-serif`,boxShadow:`0 4px 16px rgba(240, 101, 67, 0.35)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,letterSpacing:`0.04em`},children:[(0,Z.jsx)(`span`,{children:`OPEN DIGITAL VOUCHER 📄`}),(0,Z.jsx)(s,{size:15})]}):(0,Z.jsx)(`div`,{style:{flex:1,padding:`12px 20px`,borderRadius:14,background:`#FFF0EB`,border:`1px solid #FFD3C4`,color:`#F06543`,fontWeight:800,fontSize:12,fontFamily:`'Space Grotesk', sans-serif`,textAlign:`center`},children:`⏳ Payment Pending — Voucher Unlocks After Payment`}),(0,Z.jsx)(`button`,{onClick:()=>o(null),style:{padding:`14px 24px`,borderRadius:14,border:`1.5px solid #e2e8f0`,background:`#f8fafc`,color:`#334155`,fontWeight:800,fontSize:13,cursor:`pointer`,fontFamily:`'Space Grotesk', sans-serif`,transition:`all 0.2s ease`},children:`CLOSE`})]})]})})]})}function Te({onBack:e}){return(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`rgba(22, 217, 255, 0.1)`,border:`1px solid rgba(22, 217, 255, 0.3)`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:16},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]}),(0,Z.jsx)(Q,{})]})}function Ee({onBack:e}){return(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:16},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]}),(0,Z.jsx)(ve,{})]})}function De({onBack:e}){return(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:16},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]}),(0,Z.jsx)(xe,{})]})}function Oe({onBack:e}){let[t,n]=(0,X.useState)([]),[r,i]=(0,X.useState)(!0);(0,X.useEffect)(()=>{G.getMyBookings().then(e=>{if(e.data&&Array.isArray(e.data)){let t=e.data.map(e=>({id:`TXN-${e.bookingNumber}`,name:e.activity?.name||e.package?.name||e.ferry?.name||e.cruise?.name||e.stay?.name||`${e.bookingType||`Adventure`} Confirmation`,amount:`₹${parseFloat(e.totalAmount||0).toLocaleString(`en-IN`)}`,date:e.activityDate||e.bookingDate,method:e.razorpayPaymentId?`Razorpay: ${e.razorpayPaymentId}`:e.paymentStatus===`PAID`?`Razorpay 256-bit SSL Gateway`:`Standard Payment`,status:e.paymentStatus||`PAID`,razorpayPaymentId:e.razorpayPaymentId,razorpayOrderId:e.razorpayOrderId,razorpaySignature:e.razorpaySignature}));n(t)}}).catch(()=>{}).finally(()=>i(!1))},[]);let a=e=>{let t=window.open(``,`_blank`);t.document.write(`
      <html>
        <head>
          <title>Receipt - ${e.id}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; }
            .receipt-container { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 30px; border-radius: 12px; }
            .logo { font-size: 24px; font-weight: bold; color: #F06543; margin-bottom: 20px; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; }
            .title { font-size: 20px; font-weight: bold; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
            .details-label { color: #666; font-size: 12px; text-transform: uppercase; }
            .details-value { font-weight: bold; font-size: 14px; margin-top: 2px; }
            .total-box { background: #f9f9f9; padding: 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-top: 30px; }
            .total-label { font-size: 16px; font-weight: bold; }
            .total-amount { font-size: 22px; font-weight: bold; color: #F06543; }
            .footer { text-align: center; font-size: 13px; color: #999; margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="logo">ANDAMAN TRAILS</div>
            <div class="header">
              <span class="title">BOOKING RECEIPT</span>
              <span>Ref: ${e.id}</span>
            </div>
            <div class="details">
              <div>
                <div class="details-label">SERVICE</div>
                <div class="details-value">${e.name}</div>
              </div>
              <div>
                <div class="details-label">DATE</div>
                <div class="details-value">${e.date}</div>
              </div>
              <div>
                <div class="details-label">PAYMENT METHOD</div>
                <div class="details-value">${e.method}</div>
              </div>
              <div>
                <div class="details-label">STATUS</div>
                <div class="details-value" style="color: #F06543;">${e.status}</div>
              </div>
              ${e.razorpayPaymentId?`
              <div>
                <div class="details-label">RAZORPAY PAYMENT ID</div>
                <div class="details-value">${e.razorpayPaymentId}</div>
              </div>
              `:``}
              ${e.razorpayOrderId?`
              <div>
                <div class="details-label">RAZORPAY ORDER ID</div>
                <div class="details-value">${e.razorpayOrderId}</div>
              </div>
              `:``}
            </div>
            <div class="total-box">
              <span class="total-label">TOTAL AMOUNT PAID</span>
              <span class="total-amount">${e.amount}</span>
            </div>
            <div class="footer">
              Thank you for choosing Andaman Trails. This is an electronically generated receipt verified via Razorpay Secure Gateway. No physical signature is required.
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }
          <\/script>
        </body>
      </html>
    `),t.document.close()};return(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1.5px solid #EBDED2`,borderRadius:24,padding:32,boxShadow:`0 4px 20px rgba(11, 37, 69, 0.04)`},children:[(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:16},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]}),(0,Z.jsx)(`h1`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:32,fontWeight:600,color:`#0B2545`,marginBottom:6},children:`Payment History & Invoices`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#5C6F84`,marginBottom:24},children:`View transactions, GST invoices, and manage saved payment methods.`}),r?(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,color:`#F06543`,padding:`24px 0`},children:[(0,Z.jsx)(o,{size:16,className:`animate-spin`}),(0,Z.jsx)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`},children:`Querying Transactions...`})]}):t.length===0?(0,Z.jsx)(`div`,{style:{color:`#5C6F84`,fontFamily:`'Inter', sans-serif`,fontSize:13,padding:`20px 0`,textAlign:`center`},children:`No transactions found. Bookings paid via Razorpay will appear here.`}):(0,Z.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:t.map(e=>(0,Z.jsxs)(`div`,{style:{background:`#FAF4EE`,border:`1px solid #EBDED2`,borderRadius:16,padding:18,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:12},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,fontWeight:800,color:`#0B2545`},children:e.name}),(0,Z.jsxs)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:11.5,color:`#5C6F84`},children:[`Ref: `,e.id,` • `,e.method,` • `,e.date]})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,marginLeft:`auto`},children:[(0,Z.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#F06543`},children:e.amount}),(0,Z.jsxs)(`span`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:900,color:`#16a34a`,background:`rgba(22, 163, 74, 0.1)`,padding:`2px 8px`,borderRadius:10,display:`inline-flex`,alignItems:`center`,gap:4,marginTop:4},children:[(0,Z.jsx)(M,{size:10}),` `,e.status]})]}),(0,Z.jsx)(`button`,{onClick:()=>a(e),title:`Download Receipt as PDF`,style:{background:`#FFF0EB`,border:`1px solid #FFD3C4`,color:`#F06543`,width:38,height:38,borderRadius:10,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,transition:`all 0.2s`},onMouseEnter:e=>{e.currentTarget.style.background=`#F06543`,e.currentTarget.style.color=`#ffffff`},onMouseLeave:e=>{e.currentTarget.style.background=`#FFF0EB`,e.currentTarget.style.color=`#F06543`},children:(0,Z.jsx)(T,{size:16})})]})]},e.id))})]})}function ke({onBack:e}){let t=null;try{t=W()}catch{console.warn(`[ProfilePage] useAuth not inside AuthProvider, falling back to localStorage/events.`)}let n=t?.currentUser||(()=>{try{let e=localStorage.getItem(`andaman_user`);return e?JSON.parse(e):null}catch{return null}})(),[r,i]=(0,X.useState)({fullName:n?.name||`Valued Traveler`,email:n?.email||`traveler@andaman-trails.com`,phone:n?.phone||`+91 98765 43210`,membershipTier:`Platinum Explorer`}),[a,s]=(0,X.useState)(!1),[c,u]=(0,X.useState)(!1),[d,f]=(0,X.useState)(``);return(0,X.useEffect)(()=>{n&&i({fullName:n.name||`Valued Traveler`,email:n.email||`traveler@andaman-trails.com`,phone:n.phone||`+91 98765 43210`,membershipTier:n.role===`ADMIN`?`Executive Admin`:`Platinum Explorer`})},[n]),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1.5px solid #EBDED2`,borderRadius:24,padding:32,boxShadow:`0 4px 20px rgba(11, 37, 69, 0.04)`},children:[(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:16},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]}),(0,Z.jsx)(`h1`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:32,fontWeight:600,color:`#0B2545`,marginBottom:6},children:`Traveler Profile`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:13,color:`#5C6F84`,marginBottom:24},children:`Update your personal details, contact number, and travel preferences.`}),a&&(0,Z.jsx)(`div`,{style:{padding:`12px 18px`,borderRadius:14,background:`#FFF0EB`,border:`1px solid #FFD3C4`,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,marginBottom:20},children:`PROFILE UPDATED SUCCESSFULLY IN DATABASE!`}),d&&(0,Z.jsx)(`div`,{style:{padding:`12px 18px`,borderRadius:14,background:`rgba(239, 68, 68, 0.1)`,border:`1px solid rgba(239, 68, 68, 0.3)`,color:`#ef4444`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,marginBottom:20},children:d}),(0,Z.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),u(!0),f(``);try{let e=await H.updateProfile({name:r.fullName,phone:r.phone});if(e.error||e.status===`fail`||e.status===`error`)f(e.message||`Failed to update profile details.`);else{let e={...n,name:r.fullName,phone:r.phone};localStorage.setItem(`andaman_user`,JSON.stringify(e)),t&&typeof t.login==`function`&&t.login(e),window.dispatchEvent(new CustomEvent(`auth-change`)),s(!0),setTimeout(()=>s(!1),3e3)}}catch(e){f(e.message||`Error updating profile in database.`)}finally{u(!1)}},style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`label`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#5C6F84`,textTransform:`uppercase`},children:`Full Name`}),(0,Z.jsx)(`input`,{type:`text`,value:r.fullName,onChange:e=>i({...r,fullName:e.target.value}),required:!0,style:{width:`100%`,boxSizing:`border-box`,background:`#FAF4EE`,border:`1px solid #EBDED2`,padding:`12px 14px`,borderRadius:12,color:`#0B2545`,outline:`none`,marginTop:4}})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`label`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#5C6F84`,textTransform:`uppercase`},children:`Email Address (Read-Only)`}),(0,Z.jsx)(`input`,{type:`email`,value:r.email,disabled:!0,style:{width:`100%`,boxSizing:`border-box`,background:`#f1f5f9`,border:`1px solid #e2e8f0`,padding:`12px 14px`,borderRadius:12,color:`#64748b`,cursor:`not-allowed`,outline:`none`,marginTop:4}})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`label`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#5C6F84`,textTransform:`uppercase`},children:`Phone Number`}),(0,Z.jsx)(`input`,{type:`tel`,value:r.phone,onChange:e=>i({...r,phone:e.target.value}),placeholder:`+91 98765 43210`,style:{width:`100%`,boxSizing:`border-box`,background:`#FAF4EE`,border:`1px solid #EBDED2`,padding:`12px 14px`,borderRadius:12,color:`#0B2545`,outline:`none`,marginTop:4}})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`label`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12.5,fontWeight:800,color:`#5C6F84`,textTransform:`uppercase`},children:`Membership Tier`}),(0,Z.jsx)(`input`,{type:`text`,disabled:!0,value:r.membershipTier,style:{width:`100%`,boxSizing:`border-box`,background:`#FAF4EE`,border:`1px solid #EBDED2`,padding:`12px 14px`,borderRadius:12,color:`#F06543`,outline:`none`,marginTop:4,fontWeight:700}})]}),(0,Z.jsx)(`div`,{style:{gridColumn:`1 / -1`,marginTop:10},children:(0,Z.jsxs)(`button`,{type:`submit`,disabled:c,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,color:`#ffffff`,background:`linear-gradient(135deg, #FF6B4A, #F06543)`,border:`none`,padding:`12px 24px`,borderRadius:12,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 4px 14px rgba(240, 101, 67, 0.35)`},children:[c?(0,Z.jsx)(o,{size:14,className:`animate-spin`}):(0,Z.jsx)(l,{size:14}),` `,c?`SAVING...`:`SAVE CHANGES`]})})]})]})}function Ae({onBack:e}){let[t,n]=(0,X.useState)(J),[i,a]=(0,X.useState)(``),[o,s]=(0,X.useState)(``),[c,l]=(0,X.useState)(!1);(0,X.useEffect)(()=>{q.getSettings().then(e=>{e&&n(e)}).catch(()=>{})},[]);let u=t.sitePhone||`+91 91378 35433`,d=(t.sitePhone||`+91 91378 35433`).replace(/[^0-9]/g,``),f=t.siteEmail||`info@andamantrails.com`,p=t.whatsappRaw||d||`919137835433`;return(0,Z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,Z.jsx)(`div`,{children:(0,Z.jsxs)(`button`,{onClick:e,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:800,color:`#F06543`,background:`#FFF0EB`,border:`1px solid #FFD3C4`,padding:`6px 14px`,borderRadius:20,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:6,marginBottom:14,transition:`all 0.2s ease`},children:[(0,Z.jsx)(O,{size:12}),` Back to Dashboard`]})}),(0,Z.jsxs)(`div`,{style:{background:`#ffffff`,border:`1.5px solid #e2e8f0`,borderRadius:28,padding:`36px 32px`,boxShadow:`0 10px 30px -5px rgba(11, 37, 69, 0.05)`},children:[(0,Z.jsxs)(`div`,{style:{marginBottom:28},children:[(0,Z.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,fontFamily:`'Space Grotesk', sans-serif`,fontSize:11,fontWeight:900,color:`#F06543`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:6},children:[(0,Z.jsx)(g,{size:13}),`24/7 DEDICATED TRAVEL CONCIERGE`]}),(0,Z.jsx)(`h1`,{style:{fontFamily:`'Cormorant Garamond', Georgia, serif`,fontSize:`clamp(28px, 3.5vw, 36px)`,fontWeight:700,color:`#0B2545`,margin:`0 0 6px`,lineHeight:1.15},children:`Traveler Support Desk`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:14,color:`#64748b`,margin:0,maxWidth:640,lineHeight:1.5},children:`Our Andaman-based support team is active 24/7 to assist you during your trip with ferries, resort concierges, permits, and activities.`})]}),(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:20,marginBottom:32},children:[(0,Z.jsxs)(`div`,{style:{background:`#f8fafc`,border:`1.5px solid #e2e8f0`,borderRadius:22,padding:`24px 20px`,textAlign:`center`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,transition:`all 0.25s ease`},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{width:48,height:48,borderRadius:14,background:`rgba(240, 101, 67, 0.1)`,color:`#F06543`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 14px`,border:`1px solid rgba(240, 101, 67, 0.2)`},children:(0,Z.jsx)(k,{size:22})}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,marginBottom:4},children:`Call Support`}),(0,Z.jsx)(`a`,{href:`tel:${d}`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,color:`#F06543`,fontWeight:800,textDecoration:`none`,display:`block`,margin:`4px 0`},children:u}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#64748b`,marginTop:2},children:`24/7 Toll-Free`})]}),(0,Z.jsxs)(`a`,{href:`tel:${d}`,style:{marginTop:18,background:`#ffffff`,border:`1.5px solid #F06543`,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,padding:`9px 16px`,borderRadius:12,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:6,transition:`all 0.2s ease`},children:[(0,Z.jsx)(k,{size:13}),(0,Z.jsx)(`span`,{children:`Call Helpline`})]})]}),(0,Z.jsxs)(`div`,{style:{background:`linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)`,border:`1.5px solid #bbf7d0`,borderRadius:22,padding:`24px 20px`,textAlign:`center`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,transition:`all 0.25s ease`},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{width:48,height:48,borderRadius:14,background:`rgba(37, 211, 102, 0.15)`,color:`#16a34a`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 14px`,border:`1px solid rgba(37, 211, 102, 0.3)`},children:(0,Z.jsx)(N,{size:22})}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,marginBottom:4},children:`WhatsApp Desk`}),(0,Z.jsx)(`a`,{href:`https://wa.me/${p}`,target:`_blank`,rel:`noopener noreferrer`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:15,color:`#16a34a`,fontWeight:800,textDecoration:`none`,display:`block`,margin:`4px 0`},children:u}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#64748b`,marginTop:2},children:`Instant reply (avg 5 mins)`})]}),(0,Z.jsxs)(`a`,{href:`https://wa.me/${p}?text=Hello%20Andaman%20Trails%20Concierge!%20I%20have%20a%20question%20regarding%20my%20trip.`,target:`_blank`,rel:`noopener noreferrer`,style:{marginTop:18,background:`#16a34a`,border:`none`,color:`#ffffff`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,padding:`9px 16px`,borderRadius:12,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:6,boxShadow:`0 4px 12px rgba(22, 163, 74, 0.25)`,transition:`all 0.2s ease`},children:[(0,Z.jsx)(N,{size:13}),(0,Z.jsx)(`span`,{children:`Chat on WhatsApp`})]})]}),(0,Z.jsxs)(`div`,{style:{background:`#f8fafc`,border:`1.5px solid #e2e8f0`,borderRadius:22,padding:`24px 20px`,textAlign:`center`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,transition:`all 0.25s ease`},children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{width:48,height:48,borderRadius:14,background:`rgba(240, 101, 67, 0.1)`,color:`#F06543`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 14px`,border:`1px solid rgba(240, 101, 67, 0.2)`},children:(0,Z.jsx)(m,{size:22})}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:16,fontWeight:900,color:`#0B2545`,marginBottom:4},children:`Email Desk`}),(0,Z.jsx)(`a`,{href:`mailto:${f}`,style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,color:`#F06543`,fontWeight:800,textDecoration:`none`,display:`block`,margin:`4px 0`,wordBreak:`break-all`},children:f}),(0,Z.jsx)(`div`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12,color:`#64748b`,marginTop:2},children:`Reply within 2 hours`})]}),(0,Z.jsxs)(`a`,{href:`mailto:${f}?subject=Traveler%20Support%20Request%20-%20Andaman%20Trails`,style:{marginTop:18,background:`#ffffff`,border:`1.5px solid #F06543`,color:`#F06543`,fontFamily:`'Space Grotesk', sans-serif`,fontSize:12,fontWeight:800,padding:`9px 16px`,borderRadius:12,textDecoration:`none`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:6,transition:`all 0.2s ease`},children:[(0,Z.jsx)(m,{size:13}),(0,Z.jsx)(`span`,{children:`Send Official Email`})]})]})]}),(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:18},children:[(0,Z.jsxs)(`div`,{style:{padding:`20px 22px`,background:`#f8fafc`,borderRadius:18,border:`1px solid #e2e8f0`,display:`flex`,gap:14},children:[(0,Z.jsx)(`div`,{style:{width:40,height:40,borderRadius:12,background:`#fee2e2`,color:`#dc2626`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,Z.jsx)(F,{size:20})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#0B2545`},children:`Island Jetty Coordinators`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,margin:`4px 0 0`,lineHeight:1.5},children:`Our on-ground coordinators are stationed at Phoenix Bay Jetty (Port Blair), Havelock Jetty No. 2, and Neil Jetty to assist with luggage tagging and boarding gates.`})]})]}),(0,Z.jsxs)(`div`,{style:{padding:`20px 22px`,background:`#f8fafc`,borderRadius:18,border:`1px solid #e2e8f0`,display:`flex`,gap:14},children:[(0,Z.jsx)(`div`,{style:{width:40,height:40,borderRadius:12,background:`#dcfce7`,color:`#15803d`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,Z.jsx)(r,{size:20})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:14,fontWeight:800,color:`#0B2545`},children:`Port Blair HQ & Office`}),(0,Z.jsx)(`p`,{style:{fontFamily:`'Inter', sans-serif`,fontSize:12.5,color:`#64748b`,margin:`4px 0 0`,lineHeight:1.5},children:t.headOfficeAddress||`Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101`})]})]})]})]})]})}function je(){let[e,t]=(0,X.useState)(()=>{let e=window.location.pathname;return e.includes(`/dashboard/trips`)||e===`/my-trips`?`trips`:e.includes(`/dashboard/bookings`)||e===`/bookings`||e===`/my-bookings`?`bookings`:e.includes(`/dashboard/itinerary`)?`itinerary`:e.includes(`/dashboard/wishlist`)?`wishlist`:e.includes(`/dashboard/payments`)?`payments`:e.includes(`/dashboard/profile`)||e.includes(`/dashboard/settings`)?`profile`:e.includes(`/dashboard/support`)?`support`:`dashboard`}),[n,r]=(0,X.useState)(null);return(0,Z.jsx)(de,{activeTab:e,onSelectTab:(e,n)=>{t(e),n&&n.startsWith(`/dashboard/`)&&window.history.pushState(null,``,n)},children:(()=>{switch(e){case`trips`:return(0,Z.jsx)(we,{onBack:()=>t(`dashboard`)});case`bookings`:return(0,Z.jsx)(Te,{onBack:()=>t(`dashboard`)});case`itinerary`:return(0,Z.jsx)(Ee,{onBack:()=>t(`dashboard`)});case`wishlist`:return(0,Z.jsx)(De,{onBack:()=>t(`dashboard`)});case`payments`:return(0,Z.jsx)(Oe,{onBack:()=>t(`dashboard`)});case`profile`:return(0,Z.jsx)(ke,{onBack:()=>t(`dashboard`)});case`support`:return(0,Z.jsx)(Ae,{onBack:()=>t(`dashboard`)});default:return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(fe,{}),(0,Z.jsx)(pe,{onViewTrip:()=>t(`trips`),onViewItinerary:()=>t(`itinerary`)}),(0,Z.jsx)(he,{onStatClick:e=>t(e)}),(0,Z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1.4fr 1fr`,gap:24,alignItems:`start`},className:`dash-grid-responsive`,children:[(0,Z.jsx)(`style`,{children:`
                @media (max-width: 1024px) {
                  .dash-grid-responsive { grid-template-columns: 1fr !important; }
                }
              `}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Q,{onViewBookingDetails:e=>{r(e),t(`bookings`)}}),(0,Z.jsx)(be,{})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{background:`#ffffff`,backdropFilter:`blur(20px)`,border:`1.5px solid #e2e8f0`,borderRadius:24,padding:16,marginBottom:28,boxShadow:`0 16px 40px rgba(0, 0, 0, 0.4)`},children:(0,Z.jsx)($,{})}),(0,Z.jsx)(Se,{onEditProfile:()=>t(`profile`)})]})]})]})}})()})}export{je as default};