import{r as e}from"./rolldown-runtime-hePW80VL.js";import{B as t,Gn as n,Zn as r,bn as i,mn as a,n as ee,on as te,qn as ne,rt as re,vn as o}from"./lucide-vendor-CBhgx3NO.js";import{v as s}from"./three-vendor-Md08yeGZ.js";import{t as c}from"./apiClient-CtyYBnF-.js";import{a as l}from"./index-Cq-P1kYg.js";import{n as ie}from"./razorpay-CJYXrWR1.js";var u=e(r(),1),d=s(),ae=e=>{if(e.tiers&&Array.isArray(e.tiers)&&e.tiers.length>0)return e.tiers;if(e.classes&&Array.isArray(e.classes)&&e.classes.length>0)return e.classes;let t=(e.operator||e.name||e.ferryName||``).toLowerCase(),n=Number(e.price||e.basePrice||e.startingPrice||1650);return t.includes(`green ocean`)?[{id:`Economy`,name:`Economy Class (Lower AC Deck)`,desc:`Air-conditioned main deck, comfortable cushioned seating, panoramic sea windows, cafeteria access.`,price:n,badge:`Available`,badgeColor:`#10B981`},{id:`Executive`,name:`Executive Class (Mid Deck & Open Sun Deck Access)`,desc:`Extra legroom, elevated ocean views, open-air sun deck access during ocean transit.`,price:n+250,badge:`Recommended`,badgeColor:`#0D9488`},{id:`Royal`,name:`👑 Royal Class (VIP Bridge Lounge)`,desc:`Premium upper deck lounge, plush leather recliners, priority boarding & dedicated baggage handling.`,price:n+600,badge:`High Demand`,badgeColor:`#F06543`}]:t.includes(`makruzz`)?[{id:`Premium`,name:`Premium Deck (Air-Conditioned)`,desc:`Comfortable pushback seats, sea view windows, lower deck cafeteria access.`,price:n,badge:`Available`,badgeColor:`#10B981`},{id:`Deluxe`,name:`Deluxe Class (Upper Mid Deck)`,desc:`Extra legroom, elevated ocean line view, priority disembarkation.`,price:n+200,badge:`Available`,badgeColor:`#10B981`},{id:`Royal`,name:`👑 Royal Luxury Lounge (VIP Bridge View)`,desc:`Private cabin lounge, leather recliners, complimentary welcome drink, VIP baggage handling.`,price:n+600,badge:`High Demand`,badgeColor:`#F06543`}]:t.includes(`nautika`)?[{id:`Luxury`,name:`Luxury Class (Main Deck)`,desc:`Spacious plush seating, state-of-the-art stabilizers, HD entertainment screens.`,price:n,badge:`Available`,badgeColor:`#10B981`},{id:`Royal`,name:`👑 Royal Class (Upper Deck)`,desc:`Executive bridge panoramic view, leather recliners, personalized steward service.`,price:n+300,badge:`High Demand`,badgeColor:`#F06543`}]:t.includes(`itt majestic`)||t.includes(`majestic`)?[{id:`Silver`,name:`Silver Class (Lower Saloon)`,desc:`Air-conditioned comfort seating with wide sea view windows.`,price:n,badge:`Available`,badgeColor:`#10B981`},{id:`Majesty`,name:`👑 Majesty Class (Upper Deck)`,desc:`Upper deck luxury seating with direct panoramic views and refreshments.`,price:n+300,badge:`High Demand`,badgeColor:`#F06543`}]:e.category===`CRUISE`||t.includes(`cruise`)||t.includes(`sunset`)?[{id:`Standard`,name:`Standard Deck (Sunset Lounge)`,desc:`Open-air observation deck access, welcome mocktail, sunset photography views.`,price:n,badge:`Available`,badgeColor:`#10B981`},{id:`Royal`,name:`👑 VIP Sunset Terrace & Champagne Lounge`,desc:`Private reserved table, gourmet buffet dinner, sparkling beverage & live acoustic music.`,price:n+800,badge:`VIP Choice`,badgeColor:`#F06543`}]:[{id:`Premium`,name:`Premium Deck (Air-Conditioned)`,desc:`Comfortable pushback seats, sea windows, lower deck cafeteria access.`,price:n,badge:`Available`,badgeColor:`#10B981`},{id:`Deluxe`,name:`Deluxe Class (Upper Mid Deck)`,desc:`Extra legroom, elevated ocean line view, priority disembarkation.`,price:n+200,badge:`Available`,badgeColor:`#10B981`},{id:`Royal`,name:`👑 Royal Luxury Lounge (VIP Bridge View)`,desc:`Private cabin lounge, leather recliners, complimentary welcome drink, VIP bag handling.`,price:n+600,badge:`High Demand`,badgeColor:`#F06543`}]},oe=e=>{if(e.departureTimes&&Array.isArray(e.departureTimes)&&e.departureTimes.length>0)return e.departureTimes.map(e=>typeof e==`string`?{time:e,label:`Scheduled Sail`}:e);if(e.schedules&&Array.isArray(e.schedules)&&e.schedules.length>0)return e.schedules.map(e=>({time:e.departureTime||e.departure||e.time||`08:30 AM`,label:e.label||`Scheduled Sail`}));let t=(e.operator||e.name||e.ferryName||``).toLowerCase();return t.includes(`green ocean`)?[{time:`06:30 AM`,label:`Early Morning Cruise`},{time:`09:00 AM`,label:`Popular Morning`},{time:`01:00 PM`,label:`Afternoon Transit`},{time:`04:00 PM`,label:`Sunset Return Sail`}]:t.includes(`makruzz`)?[{time:`06:00 AM`,label:`Early Sail`},{time:`08:30 AM`,label:`Popular`},{time:`11:30 AM`,label:`Midday`},{time:`02:00 PM`,label:`Afternoon`},{time:`04:30 PM`,label:`Sunset`}]:t.includes(`nautika`)?[{time:`06:30 AM`,label:`First Morning Catamaran`},{time:`09:00 AM`,label:`High-Speed Morning Express`},{time:`12:15 PM`,label:`Midday Ocean Crossing`},{time:`03:00 PM`,label:`Sunset Island Transfer`}]:e.category===`CRUISE`||t.includes(`cruise`)||t.includes(`sunset`)?[{time:`04:30 PM`,label:`Golden Hour Sunset`},{time:`06:30 PM`,label:`Starlight Dinner Sail`},{time:`08:00 PM`,label:`Moonlight Harbour Cruise`}]:[{time:`06:30 AM`,label:`First Morning Catamaran`},{time:`09:00 AM`,label:`High-Speed Express`},{time:`12:15 PM`,label:`Midday Ocean Crossing`},{time:`03:00 PM`,label:`Sunset Island Transfer`}]};function f({vessel:e={},searchParams:r={},initialClass:s,initialSlotTime:f,onClose:p,onBookingSuccess:m}){let{currentUser:h}=l(),g=(0,u.useMemo)(()=>ae(e),[e]),_=(0,u.useMemo)(()=>{let t=oe(e),n=f||e.departure||e.departureTime;return n&&!t.some(e=>(typeof e==`string`?e:e.time).startsWith(n.split(` `)[0]))?[{time:n,label:`Scheduled Sail`},...t]:t},[e,f]),[v,y]=(0,u.useState)(1),[b,x]=(0,u.useState)(!1),[S,C]=(0,u.useState)(null),[w,se]=(0,u.useState)(r.departureDate||new Date().toISOString().split(`T`)[0]),ce=f||e.departure||e.departureTime||(typeof _[0]==`string`?_[0]:_[0]?.time)||`06:30 AM`,[T,le]=(0,u.useState)(ce),ue=s&&g.some(e=>e.id.toLowerCase()===s.toLowerCase())?g.find(e=>e.id.toLowerCase()===s.toLowerCase()).id:g[0].id,[E,de]=(0,u.useState)(ue),[D,O]=(0,u.useState)(Number(r.adults)||(Number(r.totalPassengers)>0?Number(r.totalPassengers):2)),[k,A]=(0,u.useState)(Number(r.children)||0),[j,M]=(0,u.useState)(Number(r.infants)||0),[N,P]=(0,u.useState)({fullName:h?.name||h?.fullName||``,age:`29`,gender:`Male`,idType:`Aadhaar`,idNumber:`XXXX-XXXX-1234`,phone:h?.phone||`+91 98765 43210`,email:h?.email||`traveler@andaman.com`}),[F,I]=(0,u.useState)([{fullName:``,age:`27`,gender:`Female`,idType:`Aadhaar`,idNumber:``},{fullName:``,age:`8`,gender:`Male`,idType:`Aadhaar`,idNumber:``}]),[L,fe]=(0,u.useState)(!1),[R,pe]=(0,u.useState)(!1),[z,me]=(0,u.useState)(!1),[B,he]=(0,u.useState)(``),[V,ge]=(0,u.useState)(``),[H,U]=(0,u.useState)(0),[W,G]=(0,u.useState)(null),K=g.find(e=>e.id===E)||g[0],q=K.price,J=D+k,Y=q*J,X=0;L&&(X+=400),R&&(X+=250*J),z&&(X+=100*J);let Z=Y+X,Q=Math.round((Z-H)*.05),$=Math.max(0,Z-H+Q);return(0,d.jsxs)(`div`,{className:`slot-modal-backdrop`,onClick:p,children:[(0,d.jsx)(`style`,{children:`
        .slot-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2500;
          background: rgba(11, 37, 69, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: modalFadeIn 0.25s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .slot-modal-container {
          background: #ffffff;
          border-radius: 24px;
          width: 100%;
          max-width: 760px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          position: relative;
        }

        .modal-sticky-header {
          padding: 18px 24px;
          border-bottom: 1.5px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .step-progress-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .step-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          background: #F1F5F9;
          color: #64748B;
          transition: all 0.2s ease;
        }

        .step-pill.active {
          background: #0B2545;
          color: #ffffff;
        }

        .step-pill.done {
          background: #ECFDF5;
          color: #059669;
        }

        .modal-scrollable-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }

        .modal-bottom-bar {
          padding: 16px 24px;
          border-top: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .btn-modal-next {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          padding: 12px 24px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.3);
        }

        .btn-modal-next:hover {
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }

        .btn-modal-back {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #475569;
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          padding: 11px 20px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-modal-back:hover {
          background: #F1F5F9;
          color: #0B2545;
        }

        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        @media (max-width: 600px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #475569;
        }

        .input-ctrl {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #0B2545;
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          padding: 10px 14px;
          border-radius: 12px;
          outline: none;
          transition: all 0.2s ease;
        }

        .input-ctrl:focus {
          border-color: #F06543;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.15);
        }

        .slot-time-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }

        .time-chip {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 12px;
          border: 1.5px solid #CBD5E1;
          background: #ffffff;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .time-chip:hover {
          border-color: #F06543;
          color: #F06543;
          background: #FFF0EB;
        }

        .time-chip.active {
          border-color: #0B2545;
          background: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.2);
        }

        .class-card-option {
          border: 2px solid #E2E8F0;
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
        }

        .class-card-option:hover {
          border-color: #F06543;
          background: #FFFDFC;
        }

        .class-card-option.selected {
          border-color: #F06543;
          background: #FFF8F6;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.12);
        }

        .addon-option-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 14px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .addon-option-row.active {
          border-color: #0D9488;
          background: #F0FDF4;
        }

        .ticket-receipt-card {
          background: #ffffff;
          border: 2px dashed #0B2545;
          border-radius: 20px;
          padding: 24px;
          position: relative;
        }
      `}),(0,d.jsxs)(`div`,{className:`slot-modal-container`,onClick:e=>e.stopPropagation(),children:[(0,d.jsxs)(`div`,{className:`modal-sticky-header`,children:[(0,d.jsx)(`div`,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(`span`,{style:{fontSize:11,fontWeight:900,color:`#F06543`,background:`#FFF1EE`,padding:`3px 10px`,borderRadius:8},children:e.operator||`ANDAMAN TRAILS`}),(0,d.jsx)(`span`,{style:{fontSize:14,fontWeight:800,color:`#0B2545`},children:e.name||e.ferryName||`Inter-Island Catamaran`})]})}),(0,d.jsxs)(`div`,{className:`step-progress-dots`,children:[(0,d.jsx)(`span`,{className:`step-pill ${v===1?`active`:v>1?`done`:``}`,children:`1. Slot & Class`}),(0,d.jsx)(`span`,{className:`step-pill ${v===2?`active`:v>2?`done`:``}`,children:`2. Passengers`}),(0,d.jsx)(`span`,{className:`step-pill ${v===3?`active`:v>3?`done`:``}`,children:`3. Add-ons`}),(0,d.jsx)(`span`,{className:`step-pill ${v===4?`active`:v>4?`done`:``}`,children:`4. Checkout`})]}),(0,d.jsx)(`button`,{type:`button`,onClick:p,style:{background:`none`,border:`none`,cursor:`pointer`,color:`#64748B`},children:(0,d.jsx)(ee,{size:22})})]}),(0,d.jsxs)(`div`,{className:`modal-scrollable-body`,children:[S&&(0,d.jsxs)(`div`,{style:{background:`#FEF2F2`,border:`1px solid #FECACA`,color:`#DC2626`,padding:`10px 14px`,borderRadius:10,fontSize:12.5,marginBottom:16,display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(i,{size:15}),S]}),v===1&&(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#0B2545`,margin:`0 0 16px`},children:`Select Departure Time Slot & Seating Class`}),(0,d.jsxs)(`div`,{className:`form-row-2col`,children:[(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Sailing Date`}),(0,d.jsx)(`input`,{type:`date`,value:w,onChange:e=>se(e.target.value),className:`input-ctrl`})]}),(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Route Transit`}),(0,d.jsxs)(`div`,{style:{padding:`11px 14px`,background:`#F8FAFC`,borderRadius:12,border:`1.5px solid #E2E8F0`,fontWeight:800,fontSize:13,color:`#0B2545`},children:[e.from||r.from||`Port Blair`,` ➔ `,e.to||r.to||`Havelock Island (Swaraj Dweep)`]})]})]}),(0,d.jsxs)(`div`,{style:{marginBottom:20,background:`#F8FAFC`,border:`1.5px solid #E2E8F0`,borderRadius:16,padding:`14px 16px`},children:[(0,d.jsx)(`label`,{className:`input-lbl`,style:{display:`block`,marginBottom:10},children:`Select Passengers`}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(130px, 1fr))`,gap:12},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:`#ffffff`,padding:`8px 12px`,borderRadius:12,border:`1px solid #E2E8F0`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:12.5,fontWeight:800,color:`#0B2545`},children:`Adults`}),(0,d.jsx)(`div`,{style:{fontSize:10.5,color:`#64748B`},children:`12+ yrs`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(`button`,{type:`button`,disabled:D<=1,onClick:()=>O(Math.max(1,D-1)),style:{width:26,height:26,borderRadius:6,border:`1px solid #CBD5E1`,background:`#F1F5F9`,fontWeight:900,cursor:D<=1?`not-allowed`:`pointer`},children:`-`}),(0,d.jsx)(`span`,{style:{fontSize:13,fontWeight:900,color:`#0B2545`,minWidth:14,textAlign:`center`},children:D}),(0,d.jsx)(`button`,{type:`button`,disabled:D>=10,onClick:()=>O(D+1),style:{width:26,height:26,borderRadius:6,border:`1px solid #CBD5E1`,background:`#F1F5F9`,fontWeight:900,cursor:`pointer`},children:`+`})]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:`#ffffff`,padding:`8px 12px`,borderRadius:12,border:`1px solid #E2E8F0`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:12.5,fontWeight:800,color:`#0B2545`},children:`Children`}),(0,d.jsx)(`div`,{style:{fontSize:10.5,color:`#64748B`},children:`2-11 yrs`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(`button`,{type:`button`,disabled:k<=0,onClick:()=>A(Math.max(0,k-1)),style:{width:26,height:26,borderRadius:6,border:`1px solid #CBD5E1`,background:`#F1F5F9`,fontWeight:900,cursor:k<=0?`not-allowed`:`pointer`},children:`-`}),(0,d.jsx)(`span`,{style:{fontSize:13,fontWeight:900,color:`#0B2545`,minWidth:14,textAlign:`center`},children:k}),(0,d.jsx)(`button`,{type:`button`,disabled:k>=8,onClick:()=>A(k+1),style:{width:26,height:26,borderRadius:6,border:`1px solid #CBD5E1`,background:`#F1F5F9`,fontWeight:900,cursor:`pointer`},children:`+`})]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:`#ffffff`,padding:`8px 12px`,borderRadius:12,border:`1px solid #E2E8F0`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:12.5,fontWeight:800,color:`#0B2545`},children:`Infants`}),(0,d.jsx)(`div`,{style:{fontSize:10.5,color:`#059669`,fontWeight:700},children:`Free (<2y)`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(`button`,{type:`button`,disabled:j<=0,onClick:()=>M(Math.max(0,j-1)),style:{width:26,height:26,borderRadius:6,border:`1px solid #CBD5E1`,background:`#F1F5F9`,fontWeight:900,cursor:j<=0?`not-allowed`:`pointer`},children:`-`}),(0,d.jsx)(`span`,{style:{fontSize:13,fontWeight:900,color:`#0B2545`,minWidth:14,textAlign:`center`},children:j}),(0,d.jsx)(`button`,{type:`button`,disabled:j>=4,onClick:()=>M(j+1),style:{width:26,height:26,borderRadius:6,border:`1px solid #CBD5E1`,background:`#F1F5F9`,fontWeight:900,cursor:`pointer`},children:`+`})]})]})]})]}),(0,d.jsxs)(`div`,{style:{marginBottom:20},children:[(0,d.jsx)(`label`,{className:`input-lbl`,style:{display:`block`,marginBottom:8},children:`Available Departure Slots`}),(0,d.jsx)(`div`,{className:`slot-time-chips`,children:_.map((e,t)=>{let n=typeof e==`string`?e:`${e.time} (${e.label})`,r=typeof e==`string`?e.split(` `)[0]:e.time,i=T.startsWith(r);return(0,d.jsxs)(`button`,{type:`button`,className:`time-chip ${i?`active`:``}`,onClick:()=>le(typeof e==`string`?e:e.time),children:[(0,d.jsx)(a,{size:13,style:{display:`inline`,marginRight:4}}),n]},t)})})]}),(0,d.jsxs)(`div`,{style:{marginBottom:20},children:[(0,d.jsx)(`label`,{className:`input-lbl`,style:{display:`block`,marginBottom:8},children:`Choose Seating Tier`}),g.map(e=>{let t=E===e.id,n=e.id===`Royal`||e.id===`Majesty`;return(0,d.jsxs)(`div`,{className:`class-card-option ${t?`selected`:``}`,onClick:()=>de(e.id),children:[(0,d.jsxs)(`div`,{style:{flex:1,paddingRight:16},children:[(0,d.jsx)(`div`,{style:{fontSize:14.5,fontWeight:900,color:n?`#F06543`:`#0B2545`,marginBottom:3},children:e.name}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#64748B`,lineHeight:1.45},children:e.desc})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`,minWidth:90},children:[(0,d.jsxs)(`div`,{style:{fontSize:17,fontWeight:900,color:n?`#F06543`:`#0B2545`},children:[`₹`,Number(e.price).toLocaleString(`en-IN`)]}),(0,d.jsx)(`div`,{style:{fontSize:11,color:e.badgeColor||`#10B981`,fontWeight:800,marginTop:2},children:e.badge||`Available`})]})]},e.id)})]}),(0,d.jsx)(`div`,{style:{background:`#FAF4EE`,border:`1.5px solid #EBDED2`,borderRadius:16,padding:`14px 18px`,marginTop:16},children:(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:10},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{style:{fontSize:11,fontWeight:800,color:`#F06543`,textTransform:`uppercase`,letterSpacing:`0.08em`},children:[`FARE BREAKDOWN (`,J,` `,J===1?`PASSENGER`:`PASSENGERS`,`)`]}),(0,d.jsxs)(`div`,{style:{fontSize:13,color:`#0B2545`,fontWeight:700,marginTop:3},children:[`₹`,q.toLocaleString(`en-IN`),` × `,J,` = ₹`,Y.toLocaleString(`en-IN`),` + 5% GST (₹`,Q.toLocaleString(`en-IN`),`)`]})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#64748B`,fontWeight:600},children:`Total Payable`}),(0,d.jsxs)(`div`,{style:{fontSize:20,fontWeight:900,color:`#0B2545`},children:[`₹`,$.toLocaleString(`en-IN`)]})]})]})})]}),v===2&&(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#0B2545`,margin:`0 0 16px`},children:`Primary Voyager & Passenger Details`}),(0,d.jsxs)(`div`,{style:{background:`#FFF1EE`,border:`1px solid #FFD7CC`,borderRadius:12,padding:`10px 14px`,fontSize:12,color:`#C2410C`,marginBottom:16,display:`flex`,alignItems:`center`,gap:8},children:[(0,d.jsx)(t,{size:16}),(0,d.jsx)(`span`,{children:`Passenger names must strictly match original Government Photo ID shown at Jetty Terminal.`})]}),(0,d.jsxs)(`div`,{style:{background:`#F8FAFC`,border:`1.5px solid #E2E8F0`,borderRadius:16,padding:16,marginBottom:16},children:[(0,d.jsx)(`div`,{style:{fontSize:13,fontWeight:900,color:`#0B2545`,marginBottom:10},children:`Passenger 1 (Primary Contact)`}),(0,d.jsxs)(`div`,{className:`form-row-2col`,children:[(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Full Name *`}),(0,d.jsx)(`input`,{type:`text`,required:!0,value:N.fullName,onChange:e=>P({...N,fullName:e.target.value}),placeholder:`e.g. Vaibhav Sharma`,className:`input-ctrl`})]}),(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Age & Gender *`}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8},children:[(0,d.jsx)(`input`,{type:`number`,value:N.age,onChange:e=>P({...N,age:e.target.value}),className:`input-ctrl`}),(0,d.jsxs)(`select`,{value:N.gender,onChange:e=>P({...N,gender:e.target.value}),className:`input-ctrl`,children:[(0,d.jsx)(`option`,{value:`Male`,children:`Male`}),(0,d.jsx)(`option`,{value:`Female`,children:`Female`}),(0,d.jsx)(`option`,{value:`Other`,children:`Other`})]})]})]})]}),(0,d.jsxs)(`div`,{className:`form-row-2col`,children:[(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Mobile Number (WhatsApp SMS updates) *`}),(0,d.jsx)(`input`,{type:`tel`,required:!0,value:N.phone,onChange:e=>P({...N,phone:e.target.value}),placeholder:`+91 98765 43210`,className:`input-ctrl`})]}),(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Email Address (E-Ticket PDF) *`}),(0,d.jsx)(`input`,{type:`email`,required:!0,value:N.email,onChange:e=>P({...N,email:e.target.value}),placeholder:`your@email.com`,className:`input-ctrl`})]})]}),(0,d.jsxs)(`div`,{className:`form-row-2col`,children:[(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Govt ID Type`}),(0,d.jsxs)(`select`,{value:N.idType,onChange:e=>P({...N,idType:e.target.value}),className:`input-ctrl`,children:[(0,d.jsx)(`option`,{value:`Aadhaar`,children:`Aadhaar Card`}),(0,d.jsx)(`option`,{value:`Passport`,children:`Passport (Foreign / NRI)`}),(0,d.jsx)(`option`,{value:`DrivingLicense`,children:`Driving License`}),(0,d.jsx)(`option`,{value:`VoterID`,children:`Voter ID`})]})]}),(0,d.jsxs)(`div`,{className:`input-group`,children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`ID Card Number`}),(0,d.jsx)(`input`,{type:`text`,value:N.idNumber,onChange:e=>P({...N,idNumber:e.target.value}),placeholder:`XXXX-XXXX-1234`,className:`input-ctrl`})]})]})]}),J>1&&(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{style:{fontSize:13,fontWeight:900,color:`#0B2545`,marginBottom:10},children:[`Co-Passengers (`,J-1,` Additional)`]}),Array.from({length:J-1}).map((e,t)=>(0,d.jsxs)(`div`,{style:{background:`#F8FAFC`,border:`1px solid #E2E8F0`,borderRadius:14,padding:14,marginBottom:10},children:[(0,d.jsxs)(`div`,{style:{fontSize:12,fontWeight:800,color:`#64748B`,marginBottom:6},children:[`Passenger `,t+2]}),(0,d.jsxs)(`div`,{className:`form-row-2col`,style:{margin:0},children:[(0,d.jsx)(`div`,{className:`input-group`,children:(0,d.jsx)(`input`,{type:`text`,placeholder:`Full Legal Name`,value:F[t]?.fullName||``,onChange:e=>{let n=[...F];n[t]||(n[t]={}),n[t].fullName=e.target.value,I(n)},className:`input-ctrl`})}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8},children:[(0,d.jsx)(`input`,{type:`number`,placeholder:`Age`,value:F[t]?.age||`25`,onChange:e=>{let n=[...F];n[t]||(n[t]={}),n[t].age=e.target.value,I(n)},className:`input-ctrl`}),(0,d.jsxs)(`select`,{value:F[t]?.gender||`Female`,onChange:e=>{let n=[...F];n[t]||(n[t]={}),n[t].gender=e.target.value,I(n)},className:`input-ctrl`,children:[(0,d.jsx)(`option`,{value:`Male`,children:`Male`}),(0,d.jsx)(`option`,{value:`Female`,children:`Female`}),(0,d.jsx)(`option`,{value:`Other`,children:`Other`})]})]})]})]},t))]})]}),v===3&&(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#0B2545`,margin:`0 0 16px`},children:`Enhance Your Voyage with Jetty Add-ons`}),(0,d.jsxs)(`div`,{className:`addon-option-row ${L?`active`:``}`,onClick:()=>fe(!L),children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:`Private AC Cab Pickup / Drop at Jetty`}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#64748B`},children:`Chauffeur meets you with a nameboard at hotel or airport.`})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:`+₹400 Flat`}),(0,d.jsx)(`div`,{style:{fontSize:11,color:L?`#059669`:`#94A3B8`,fontWeight:800},children:L?`✓ Selected`:`+ Add`})]})]}),(0,d.jsxs)(`div`,{className:`addon-option-row ${R?`active`:``}`,onClick:()=>pe(!R),children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:`Fresh Gourmet Snack Box & Beverage`}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#64748B`},children:`Club sandwich, fruit muffin, coconut water & fresh cookies onboard.`})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:`+₹250 / pax`}),(0,d.jsx)(`div`,{style:{fontSize:11,color:R?`#059669`:`#94A3B8`,fontWeight:800},children:R?`✓ Selected`:`+ Add`})]})]}),(0,d.jsxs)(`div`,{className:`addon-option-row ${z?`active`:``}`,onClick:()=>me(!z),children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:`Window Seat Priority Allocation`}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#64748B`},children:`Guaranteed sea view panoramic window seat alignment.`})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:`+₹100 / pax`}),(0,d.jsx)(`div`,{style:{fontSize:11,color:z?`#059669`:`#94A3B8`,fontWeight:800},children:z?`✓ Selected`:`+ Add`})]})]}),(0,d.jsxs)(`div`,{className:`input-group`,style:{marginTop:14},children:[(0,d.jsx)(`label`,{className:`input-lbl`,children:`Special Requests / Wheelchair / Remarks`}),(0,d.jsx)(`input`,{type:`text`,value:B,onChange:e=>he(e.target.value),placeholder:`e.g. Senior citizen low step boarding assistance`,className:`input-ctrl`})]})]}),v===4&&(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:18,fontWeight:900,color:`#0B2545`,margin:`0 0 16px`},children:`Booking Review & Fare Breakdown`}),(0,d.jsxs)(`div`,{style:{background:`#0B2545`,color:`#ffffff`,borderRadius:18,padding:20,marginBottom:20},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:12},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:`#34D399`,background:`rgba(52,211,153,0.15)`,padding:`2px 8px`,borderRadius:6},children:`INSTANT CONFIRMATION`}),(0,d.jsxs)(`h4`,{style:{fontSize:17,fontWeight:900,margin:`4px 0 0`},children:[e.name||e.ferryName,` • `,K.name||E]})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#94A3B8`},children:`Travel Date`}),(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:800},children:w})]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,borderTop:`1px solid rgba(255,255,255,0.1)`,paddingTop:12},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#94A3B8`},children:`Departure Slot`}),(0,d.jsx)(`div`,{style:{fontSize:15,fontWeight:900},children:T}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#CBD5E1`},children:e.from||r.from||`Port Blair`})]}),(0,d.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#F06543`,fontWeight:800},children:`90 Mins Direct`}),(0,d.jsx)(`div`,{style:{width:40,height:2,background:`#F06543`,margin:`4px auto`}})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#94A3B8`},children:`Arrival Jetty`}),(0,d.jsx)(`div`,{style:{fontSize:15,fontWeight:900},children:`Estimated Arrival`}),(0,d.jsx)(`div`,{style:{fontSize:12,color:`#CBD5E1`},children:e.to||r.to||`Havelock Island`})]})]})]}),(0,d.jsxs)(`div`,{style:{background:`#F8FAFC`,border:`1.5px solid #E2E8F0`,borderRadius:18,padding:18,marginBottom:16},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:8},children:[(0,d.jsxs)(`span`,{style:{color:`#64748B`},children:[K.name,` (`,J,` pax × ₹`,q.toLocaleString(`en-IN`),`)`]}),(0,d.jsxs)(`span`,{style:{fontWeight:800,color:`#0B2545`},children:[`₹`,Y.toLocaleString(`en-IN`)]})]}),X>0&&(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:8},children:[(0,d.jsx)(`span`,{style:{color:`#64748B`},children:`Add-ons (Cabs, Meals & Window Priority)`}),(0,d.jsxs)(`span`,{style:{fontWeight:800,color:`#0B2545`},children:[`₹`,X.toLocaleString(`en-IN`)]})]}),H>0&&(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:8,color:`#059669`},children:[(0,d.jsx)(`span`,{style:{fontWeight:800},children:`Promo Coupon Discount Applied`}),(0,d.jsxs)(`span`,{style:{fontWeight:800},children:[`-₹`,H.toLocaleString(`en-IN`)]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:8},children:[(0,d.jsx)(`span`,{style:{color:`#64748B`},children:`Port Terminal Passenger Tax & GST (5%)`}),(0,d.jsxs)(`span`,{style:{fontWeight:800,color:`#0B2545`},children:[`₹`,Q.toLocaleString(`en-IN`)]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,borderTop:`1.5px solid #E2E8F0`,paddingTop:10,fontSize:16},children:[(0,d.jsx)(`span`,{style:{fontWeight:900,color:`#0B2545`},children:`Total Payable Amount`}),(0,d.jsxs)(`span`,{style:{fontWeight:900,color:`#F06543`,fontSize:18},children:[`₹`,$.toLocaleString(`en-IN`)]})]})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:10,marginBottom:16},children:[(0,d.jsx)(`input`,{type:`text`,placeholder:`Enter Promo Code (e.g. ANDAMAN10)`,value:V,onChange:e=>ge(e.target.value),className:`input-ctrl`,style:{textTransform:`uppercase`,letterSpacing:`0.05em`}}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>{if(V.trim().toUpperCase()===`ANDAMAN10`){let e=Math.round(Y*.1);U(e),C(null)}else V.trim().toUpperCase()===`ISLANDPASS`?(U(500),C(null)):C(`Invalid Promo Code. Try ANDAMAN10 for 10% off.`)},style:{background:`#0B2545`,color:`#ffffff`,border:`none`,padding:`0 20px`,borderRadius:12,fontWeight:800,fontSize:12,cursor:`pointer`},children:`Apply`})]})]}),v===5&&W&&(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:20},children:[(0,d.jsx)(`div`,{style:{width:56,height:56,borderRadius:`50%`,background:`#ECFDF5`,color:`#059669`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 10px`},children:(0,d.jsx)(o,{size:32})}),(0,d.jsx)(`h3`,{style:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:22,fontWeight:900,color:`#0B2545`,margin:`0 0 4px`},children:`Voyage Confirmed & E-Ticket Issued!`}),(0,d.jsxs)(`p`,{style:{fontSize:13,color:`#64748B`,margin:0},children:[`A confirmation SMS and PDF voucher have been dispatched to `,(0,d.jsx)(`strong`,{children:W.customerEmail}),`.`]})]}),(0,d.jsxs)(`div`,{className:`ticket-receipt-card`,children:[(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,borderBottom:`1.5px dashed #CBD5E1`,paddingBottom:14,marginBottom:14},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:11,fontWeight:800,color:`#F06543`,letterSpacing:`0.08em`},children:`OFFICIAL BOARDING PASS`}),(0,d.jsxs)(`div`,{style:{fontSize:20,fontWeight:900,color:`#0B2545`},children:[`PNR: `,W.pnr]}),(0,d.jsxs)(`div`,{style:{fontSize:13,color:`#64748B`},children:[W.vesselName,` • `,W.seatClass]})]}),(0,d.jsx)(`img`,{src:W.qrCode,alt:`Boarding QR`,style:{width:68,height:68,borderRadius:8,border:`1px solid #CBD5E1`}})]}),(0,d.jsxs)(`div`,{className:`form-row-2col`,style:{marginBottom:10},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#64748B`,fontWeight:800},children:`PRIMARY VOYAGER`}),(0,d.jsx)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:W.customerName})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#64748B`,fontWeight:800},children:`DATE & TIME`}),(0,d.jsxs)(`div`,{style:{fontSize:14,fontWeight:900,color:`#0B2545`},children:[W.travelDate,` @ `,W.timeSlot]})]})]}),(0,d.jsxs)(`div`,{className:`form-row-2col`,style:{marginBottom:10},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#64748B`,fontWeight:800},children:`BOARDING JETTY`}),(0,d.jsx)(`div`,{style:{fontSize:13,fontWeight:800,color:`#0B2545`},children:W.jettyTerminal})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{fontSize:11,color:`#64748B`,fontWeight:800},children:`TOTAL AMOUNT PAID`}),(0,d.jsxs)(`div`,{style:{fontSize:16,fontWeight:900,color:`#10B981`},children:[`₹`,W.totalAmount.toLocaleString(`en-IN`),` (PAID)`]})]})]}),(0,d.jsxs)(`div`,{style:{background:`#F8FAFC`,borderRadius:10,padding:10,fontSize:11,color:`#64748B`,marginTop:10},children:[`ℹ️ `,W.luggageRule,` Please arrive `,W.boardingTime,`.`]})]})]})]}),(0,d.jsx)(`div`,{className:`modal-bottom-bar`,children:v<5?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{children:v>1?(0,d.jsxs)(`button`,{type:`button`,onClick:()=>y(v-1),className:`btn-modal-back`,children:[(0,d.jsx)(ne,{size:14}),`Back`]}):(0,d.jsxs)(`div`,{style:{fontSize:12,color:`#64748B`},children:[`Estimated Total: `,(0,d.jsxs)(`strong`,{style:{color:`#0B2545`,fontSize:15},children:[`₹`,$.toLocaleString(`en-IN`)]}),(0,d.jsxs)(`span`,{style:{fontSize:11,color:`#94A3B8`,marginLeft:6},children:[`(`,J,` `,J===1?`Guest`:`Guests`,` incl. 5% GST)`]})]})}),(0,d.jsx)(`div`,{children:v<4?(0,d.jsxs)(`button`,{type:`button`,onClick:()=>y(v+1),className:`btn-modal-next`,children:[(0,d.jsxs)(`span`,{children:[`Proceed to `,v===1?`Passengers`:v===2?`Add-ons`:`Review & Pay`]}),(0,d.jsx)(n,{size:15})]}):(0,d.jsxs)(`button`,{type:`button`,disabled:b,onClick:async()=>{x(!0),C(null);let t=`AND-${Math.floor(1e5+Math.random()*9e5)}`,n={bookingType:e.category===`CRUISE`?`CRUISE`:`FERRY`,customerName:N.fullName||`Andaman Traveler`,customerEmail:N.email||`guest@andamantrails.com`,customerPhone:N.phone||`+91 98765 43210`,totalAmount:$,bookingDate:new Date().toISOString().split(`T`)[0],travelDate:w,timeSlot:T,vesselName:e.name||e.ferryName||`Catamaran Liner`,operator:e.operator||`Andaman Trails Lines`,from:e.from||r.from||`Port Blair`,to:e.to||r.to||`Havelock Island (Swaraj Dweep)`,seatClass:K.name||E,totalGuests:J+j,adultCount:D,childCount:k,specialRequests:`${B||`None`} | Addons: Cab: ${L?`Yes`:`No`}, Meal: ${R?`Yes`:`No`}, Window: ${z?`Yes`:`No`}`};try{await ie({orderData:{bookingNumber:t,totalAmount:$,title:`${e.name||e.ferryName||`Andaman Sea Voyage`} (${K.name||E})`,customerName:N.fullName||`Andaman Traveler`,customerEmail:N.email||`traveler@andaman.com`,customerPhone:N.phone||`+91 98765 43210`},onSuccess:async r=>{try{await c.post(`/bookings`,{...n,paymentStatus:`PAID`,paymentMethod:`Razorpay 256-Bit SSL Gateway`,paymentId:r.razorpay_payment_id})}catch(e){console.warn(`Booking record save notice:`,e.message)}let i={pnr:t,paymentId:r.razorpay_payment_id||`PAY_${Date.now()}`,paymentMethod:`Razorpay 256-Bit SSL Gateway (PAID)`,...n,qrCode:`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PNR:${t}|VOYAGER:${encodeURIComponent(N.fullName)}|DATE:${w}`,jettyTerminal:`${e.from||`Port Blair`} Ferry Jetty Terminal`,boardingTime:`30 Minutes before departure`,luggageRule:`25kg check-in + 7kg cabin baggage per passenger.`};G(i),y(5),m&&m(i)},onError:e=>{C(e.message||`Payment was cancelled or could not be verified.`)}})}catch{let r={pnr:t,paymentId:`PAY_${Date.now()}`,paymentMethod:`Confirmed Instant Booking`,...n,qrCode:`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PNR:${t}|VOYAGER:${encodeURIComponent(N.fullName)}|DATE:${w}`,jettyTerminal:`${e.from||`Port Blair`} Ferry Jetty Terminal`,boardingTime:`30 Minutes before departure`,luggageRule:`25kg check-in + 7kg cabin baggage per passenger.`};G(r),y(5),m&&m(r)}finally{x(!1)}},className:`btn-modal-next`,style:{background:`linear-gradient(135deg, #10B981, #059669)`},children:[(0,d.jsx)(te,{size:16}),(0,d.jsx)(`span`,{children:b?`Confirming Ticket...`:`Pay ₹${$.toLocaleString(`en-IN`)} & Issue Ticket →`})]})})]}):(0,d.jsxs)(`div`,{style:{display:`flex`,gap:10,width:`100%`,justifyContent:`flex-end`},children:[(0,d.jsxs)(`button`,{type:`button`,onClick:()=>window.print(),className:`btn-modal-back`,children:[(0,d.jsx)(re,{size:15}),`Print Ticket`]}),(0,d.jsx)(`button`,{type:`button`,onClick:p,className:`btn-modal-next`,children:`Done`})]})})]})]})}var p=[{id:`ferry-01`,slug:`port-blair-to-havelock`,ferryName:`Nautika Lite catamaran`,operator:`Nautika`,from:`Port Blair`,to:`Havelock Island (Swaraj Dweep)`,departure:`06:00 AM`,arrival:`07:30 AM`,duration:`1h 30m`,date:`Daily Departures`,heroImage:`https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85`,vesselClass:`Royal / Luxury`,seatsAvailable:42,capacity:220,price:1650,status:`ON TIME`,statusType:`success`,boardingPoint:`Phoenix Bay Jetty, Port Blair`,destinationPoint:`Havelock Jetty (Swaraj Dweep)`,baggageAllowance:`25kg Check-in + 7kg Hand Bag`,cancellationPolicy:`100% refund prior to 48 hours. 50% refund prior to 24 hours. Non-refundable within 24 hours of sailing.`,features:[`Fully Air Conditioned`,`Plush Reclining Seats`,`Onboard Snack Counter`,`Clean Restrooms`,`Panaromic Sea Windows`,`Safety Life Jackets`],inclusions:[`Ferry Transit Ticket`,`Port & Jetty Passenger Fees`,`Onboard Safety Briefing`],exclusions:[`Hotel Pick-up & Drop`,`Private Catering`,`Extra Excess Baggage Charges`],route:[{step:`01`,title:`Phoenix Bay Jetty, Port Blair`,time:`05:30 AM`,desc:`Report to terminal for ticket verification & security check`},{step:`02`,title:`Boarding & Safety Briefing`,time:`05:50 AM`,desc:`Board Nautika Lite Catamaran and locate assigned seat`},{step:`03`,title:`Andaman Sea Cruise`,time:`06:00 AM`,desc:`High-speed catamaran transit across open ocean`},{step:`04`,title:`Havelock Island Arrival`,time:`07:30 AM`,desc:`Disembark at Swaraj Dweep Jetty`}],faqs:[{question:`How early should I reach Phoenix Bay Jetty?`,answer:`Please reach the terminal at least 30 to 45 minutes prior to departure for luggage check and security clearance.`},{question:`What documents are required during boarding?`,answer:`All passengers must carry a valid original Government Photo ID (Aadhaar, Passport, Driving License, or Voter ID).`},{question:`Is seating pre-allocated on Nautika?`,answer:`Yes, seat numbers are automatically allocated on your confirmed e-ticket.`}]},{id:`ferry-02`,slug:`port-blair-to-havelock-makruzz`,ferryName:`Makruzz Gold Catamaran`,operator:`Makruzz`,from:`Port Blair`,to:`Havelock Island (Swaraj Dweep)`,departure:`08:30 AM`,arrival:`10:45 AM`,duration:`2h 15m`,date:`Daily Departures`,heroImage:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85`,vesselClass:`Premium / Deluxe`,seatsAvailable:18,capacity:250,price:1850,status:`BOARDING`,statusType:`info`,boardingPoint:`Phoenix Bay Jetty, Port Blair`,destinationPoint:`Havelock Jetty (Swaraj Dweep)`,baggageAllowance:`25kg Check-in + 7kg Hand Bag`,cancellationPolicy:`Standard operator cancellation policy applies. 48-hour advance notice required for full refund.`,features:[`Fully Air Conditioned`,`Premium Leather Seating`,`Live Entertainment Screen`,`Snack Bar`,`Clean Restrooms`],inclusions:[`Ferry Ticket`,`Jetty Passenger Fees`],exclusions:[`Hotel Transfers`,`Personal Food Purchases`],route:[{step:`01`,title:`Phoenix Bay Jetty`,time:`08:00 AM`,desc:`Terminal arrival & check-in`},{step:`02`,title:`Departure`,time:`08:30 AM`,desc:`Sailing begins toward Swaraj Dweep`},{step:`03`,title:`Havelock Arrival`,time:`10:45 AM`,desc:`Arrival at Havelock Jetty`}],faqs:[{question:`Does Makruzz have a snack bar onboard?`,answer:`Yes, Makruzz features an onboard snack counter serving hot tea, coffee, sandwiches, and snacks.`}]},{id:`ferry-03`,slug:`port-blair-to-neil`,ferryName:`Green Ocean 1`,operator:`Green Ocean`,from:`Port Blair`,to:`Neil Island (Shaheed Dweep)`,departure:`09:00 AM`,arrival:`10:30 AM`,duration:`1h 30m`,date:`Daily Departures`,heroImage:`https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85`,vesselClass:`Open Deck / Executive`,seatsAvailable:28,capacity:200,price:1400,status:`ON TIME`,statusType:`success`,boardingPoint:`Phoenix Bay Jetty, Port Blair`,destinationPoint:`Neil Island Jetty (Shaheed Dweep)`,baggageAllowance:`20kg Check-in + 7kg Hand Bag`,cancellationPolicy:`Refundable up to 24 hours before sailing.`,features:[`Open Sun Deck Access`,`Air Conditioned Lower Deck`,`Music & Dance Floor`,`Snack Bar`],inclusions:[`Ferry Transit Ticket`,`Terminal Entry Fee`],exclusions:[`Hotel Pick-up`],route:[{step:`01`,title:`Phoenix Bay Jetty`,time:`08:30 AM`,desc:`Boarding starts`},{step:`02`,title:`Departure`,time:`09:00 AM`,desc:`Sailing toward Shaheed Dweep`},{step:`03`,title:`Neil Island Arrival`,time:`10:30 AM`,desc:`Disembarkation at Neil Jetty`}],faqs:[{question:`Can guests go out on the open deck?`,answer:`Yes, Green Ocean 1 is unique in offering open deck access for open-air ocean views.`}]},{id:`ferry-04`,slug:`havelock-to-neil`,ferryName:`Nautika Peak High-Speed`,operator:`Nautika`,from:`Havelock Island (Swaraj Dweep)`,to:`Neil Island (Shaheed Dweep)`,departure:`10:00 AM`,arrival:`11:00 AM`,duration:`1h 00m`,date:`Daily Departures`,heroImage:`https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1600&q=85`,vesselClass:`Luxury High Speed`,seatsAvailable:35,capacity:210,price:1550,status:`ON TIME`,statusType:`success`,boardingPoint:`Havelock Island Jetty (Swaraj Dweep)`,destinationPoint:`Neil Island Jetty (Shaheed Dweep)`,baggageAllowance:`25kg Check-in + 7kg Hand Bag`,cancellationPolicy:`Full refund 48 hours prior to sailing.`,features:[`Ultra Fast 60m Transit`,`Air Conditioned`,`Reclining Ergonomic Seats`],inclusions:[`Inter-Island Ticket`,`Jetty Fees`],exclusions:[`Hotel Transfers`],route:[{step:`01`,title:`Havelock Jetty`,time:`09:30 AM`,desc:`Report for boarding`},{step:`02`,title:`Express Transit`,time:`10:00 AM`,desc:`Direct 1-hour sea crossing`},{step:`03`,title:`Neil Island Arrival`,time:`11:00 AM`,desc:`Arrival at Shaheed Dweep`}],faqs:[]},{id:`ferry-05`,slug:`havelock-to-port-blair`,ferryName:`Makruzz Ocean Catamaran`,operator:`Makruzz`,from:`Havelock Island (Swaraj Dweep)`,to:`Port Blair`,departure:`02:00 PM`,arrival:`03:30 PM`,duration:`1h 30m`,date:`Daily Departures`,heroImage:`https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85`,vesselClass:`Royal Class`,seatsAvailable:12,capacity:250,price:1750,status:`ON TIME`,statusType:`success`,boardingPoint:`Havelock Island Jetty`,destinationPoint:`Phoenix Bay Jetty, Port Blair`,baggageAllowance:`25kg Check-in + 7kg Hand Bag`,cancellationPolicy:`Standard cancellation terms.`,features:[`High-speed Air Conditioned Cabin`,`Royal Class Lounge`],inclusions:[`Return Ticket`,`Jetty Fees`],exclusions:[`Port Blair Hotel Drop`],route:[{step:`01`,title:`Havelock Jetty`,time:`01:30 PM`,desc:`Boarding`},{step:`02`,title:`Return Transit`,time:`02:00 PM`,desc:`Crossing to Port Blair`},{step:`03`,title:`Port Blair Arrival`,time:`03:30 PM`,desc:`Arrival`}],faqs:[]},{id:`ferry-06`,slug:`neil-to-port-blair`,ferryName:`ITT Majestic`,operator:`ITT Majestic`,from:`Neil Island (Shaheed Dweep)`,to:`Port Blair`,departure:`04:00 PM`,arrival:`05:30 PM`,duration:`1h 30m`,date:`Daily Departures`,heroImage:`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85`,vesselClass:`Executive Premium`,seatsAvailable:22,capacity:200,price:1500,status:`ON TIME`,statusType:`success`,boardingPoint:`Neil Island Jetty`,destinationPoint:`Phoenix Bay Jetty, Port Blair`,baggageAllowance:`20kg Check-in + 7kg Hand Bag`,cancellationPolicy:`Refundable up to 24 hours prior.`,features:[`Air Conditioned`,`Plush Seating`],inclusions:[`Ticket`,`Jetty Fees`],exclusions:[`Hotel Drop`],route:[],faqs:[]}];p[0];export{f as n,p as t};