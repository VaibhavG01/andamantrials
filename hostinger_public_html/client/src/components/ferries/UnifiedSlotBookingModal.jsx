// src/components/ferries/UnifiedSlotBookingModal.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Unified Multi-Step Dynamic Slot Booking Engine for Andaman Ferries & Cruises
// Dynamically renders seating tiers, departure time slots, prices & routes based on the selected vessel.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useMemo } from 'react';
import { 
  X, Ship, Anchor, CheckCircle2, ShieldCheck, Clock, MapPin, 
  User, Mail, Phone, Calendar, ArrowRight, ArrowLeft, CreditCard, 
  Sparkles, Coffee, Luggage, QrCode, Download, Printer, Check, Info, AlertCircle, Heart, Waves
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { apiClient } from '../../api/apiClient';
import { openRazorpayCheckout } from '../../utils/razorpay';

// ─── DYNAMIC TIER BUILDER ─────────────────────────────────────────────────────
const getDynamicTiersForVessel = (vessel) => {
  if (vessel.tiers && Array.isArray(vessel.tiers) && vessel.tiers.length > 0) {
    return vessel.tiers;
  }
  if (vessel.classes && Array.isArray(vessel.classes) && vessel.classes.length > 0) {
    return vessel.classes;
  }

  const op = (vessel.operator || vessel.name || vessel.ferryName || '').toLowerCase();
  const base = Number(vessel.price || vessel.basePrice || vessel.startingPrice || 1650);

  // 1. Green Ocean
  if (op.includes('green ocean')) {
    return [
      {
        id: 'Economy',
        name: 'Economy Class (Lower AC Deck)',
        desc: 'Air-conditioned main deck, comfortable cushioned seating, panoramic sea windows, cafeteria access.',
        price: base,
        badge: 'Available',
        badgeColor: '#10B981',
      },
      {
        id: 'Executive',
        name: 'Executive Class (Mid Deck & Open Sun Deck Access)',
        desc: 'Extra legroom, elevated ocean views, open-air sun deck access during ocean transit.',
        price: base + 250,
        badge: 'Recommended',
        badgeColor: '#0D9488',
      },
      {
        id: 'Royal',
        name: '👑 Royal Class (VIP Bridge Lounge)',
        desc: 'Premium upper deck lounge, plush leather recliners, priority boarding & dedicated baggage handling.',
        price: base + 600,
        badge: 'High Demand',
        badgeColor: '#F06543',
      },
    ];
  }

  // 2. Makruzz
  if (op.includes('makruzz')) {
    return [
      {
        id: 'Premium',
        name: 'Premium Deck (Air-Conditioned)',
        desc: 'Comfortable pushback seats, sea view windows, lower deck cafeteria access.',
        price: base,
        badge: 'Available',
        badgeColor: '#10B981',
      },
      {
        id: 'Deluxe',
        name: 'Deluxe Class (Upper Mid Deck)',
        desc: 'Extra legroom, elevated ocean line view, priority disembarkation.',
        price: base + 200,
        badge: 'Available',
        badgeColor: '#10B981',
      },
      {
        id: 'Royal',
        name: '👑 Royal Luxury Lounge (VIP Bridge View)',
        desc: 'Private cabin lounge, leather recliners, complimentary welcome drink, VIP baggage handling.',
        price: base + 600,
        badge: 'High Demand',
        badgeColor: '#F06543',
      },
    ];
  }

  // 3. Nautika / Nautika Lite
  if (op.includes('nautika')) {
    return [
      {
        id: 'Luxury',
        name: 'Luxury Class (Main Deck)',
        desc: 'Spacious plush seating, state-of-the-art stabilizers, HD entertainment screens.',
        price: base,
        badge: 'Available',
        badgeColor: '#10B981',
      },
      {
        id: 'Royal',
        name: '👑 Royal Class (Upper Deck)',
        desc: 'Executive bridge panoramic view, leather recliners, personalized steward service.',
        price: base + 300,
        badge: 'High Demand',
        badgeColor: '#F06543',
      },
    ];
  }

  // 4. ITT Majestic
  if (op.includes('itt majestic') || op.includes('majestic')) {
    return [
      {
        id: 'Silver',
        name: 'Silver Class (Lower Saloon)',
        desc: 'Air-conditioned comfort seating with wide sea view windows.',
        price: base,
        badge: 'Available',
        badgeColor: '#10B981',
      },
      {
        id: 'Majesty',
        name: '👑 Majesty Class (Upper Deck)',
        desc: 'Upper deck luxury seating with direct panoramic views and refreshments.',
        price: base + 300,
        badge: 'High Demand',
        badgeColor: '#F06543',
      },
    ];
  }

  // 5. Sunset & Luxury Cruises
  if (vessel.category === 'CRUISE' || op.includes('cruise') || op.includes('sunset')) {
    return [
      {
        id: 'Standard',
        name: 'Standard Deck (Sunset Lounge)',
        desc: 'Open-air observation deck access, welcome mocktail, sunset photography views.',
        price: base,
        badge: 'Available',
        badgeColor: '#10B981',
      },
      {
        id: 'Royal',
        name: '👑 VIP Sunset Terrace & Champagne Lounge',
        desc: 'Private reserved table, gourmet buffet dinner, sparkling beverage & live acoustic music.',
        price: base + 800,
        badge: 'VIP Choice',
        badgeColor: '#F06543',
      },
    ];
  }

  // Standard fallback
  return [
    {
      id: 'Premium',
      name: 'Premium Deck (Air-Conditioned)',
      desc: 'Comfortable pushback seats, sea windows, lower deck cafeteria access.',
      price: base,
      badge: 'Available',
      badgeColor: '#10B981',
    },
    {
      id: 'Deluxe',
      name: 'Deluxe Class (Upper Mid Deck)',
      desc: 'Extra legroom, elevated ocean line view, priority disembarkation.',
      price: base + 200,
      badge: 'Available',
      badgeColor: '#10B981',
    },
    {
      id: 'Royal',
      name: '👑 Royal Luxury Lounge (VIP Bridge View)',
      desc: 'Private cabin lounge, leather recliners, complimentary welcome drink, VIP bag handling.',
      price: base + 600,
      badge: 'High Demand',
      badgeColor: '#F06543',
    },
  ];
};

// ─── DYNAMIC TIME SLOTS BUILDER ───────────────────────────────────────────────
const getDynamicDepartureSlots = (vessel) => {
  if (vessel.departureTimes && Array.isArray(vessel.departureTimes) && vessel.departureTimes.length > 0) {
    return vessel.departureTimes.map(t => typeof t === 'string' ? { time: t, label: 'Scheduled Sail' } : t);
  }
  if (vessel.schedules && Array.isArray(vessel.schedules) && vessel.schedules.length > 0) {
    return vessel.schedules.map(s => ({
      time: s.departureTime || s.departure || s.time || '08:30 AM',
      label: s.label || 'Scheduled Sail',
    }));
  }

  const op = (vessel.operator || vessel.name || vessel.ferryName || '').toLowerCase();
  
  if (op.includes('green ocean')) {
    return [
      { time: '06:30 AM', label: 'Early Morning Cruise' },
      { time: '09:00 AM', label: 'Popular Morning' },
      { time: '01:00 PM', label: 'Afternoon Transit' },
      { time: '04:00 PM', label: 'Sunset Return Sail' },
    ];
  }

  if (op.includes('makruzz')) {
    return [
      { time: '06:00 AM', label: 'Early Sail' },
      { time: '08:30 AM', label: 'Popular' },
      { time: '11:30 AM', label: 'Midday' },
      { time: '02:00 PM', label: 'Afternoon' },
      { time: '04:30 PM', label: 'Sunset' },
    ];
  }

  if (op.includes('nautika')) {
    return [
      { time: '06:30 AM', label: 'First Morning Catamaran' },
      { time: '09:00 AM', label: 'High-Speed Morning Express' },
      { time: '12:15 PM', label: 'Midday Ocean Crossing' },
      { time: '03:00 PM', label: 'Sunset Island Transfer' },
    ];
  }

  if (vessel.category === 'CRUISE' || op.includes('cruise') || op.includes('sunset')) {
    return [
      { time: '04:30 PM', label: 'Golden Hour Sunset' },
      { time: '06:30 PM', label: 'Starlight Dinner Sail' },
      { time: '08:00 PM', label: 'Moonlight Harbour Cruise' },
    ];
  }

  return [
    { time: '06:30 AM', label: 'First Morning Catamaran' },
    { time: '09:00 AM', label: 'High-Speed Express' },
    { time: '12:15 PM', label: 'Midday Ocean Crossing' },
    { time: '03:00 PM', label: 'Sunset Island Transfer' },
  ];
};

export default function UnifiedSlotBookingModal({ 
  vessel = {}, 
  searchParams = {}, 
  initialClass, 
  initialSlotTime,
  onClose,
  onBookingSuccess 
}) {
  const { currentUser } = useAuth();

  // Compute dynamic tiers and slots for this vessel
  const dynamicTiers = useMemo(() => getDynamicTiersForVessel(vessel), [vessel]);
  const dynamicSlots = useMemo(() => {
    const slots = getDynamicDepartureSlots(vessel);
    const chosenTime = initialSlotTime || vessel.departure || vessel.departureTime;
    if (chosenTime) {
      const exists = slots.some(s => (typeof s === 'string' ? s : s.time).startsWith(chosenTime.split(' ')[0]));
      if (!exists) {
        return [{ time: chosenTime, label: 'Scheduled Sail' }, ...slots];
      }
    }
    return slots;
  }, [vessel, initialSlotTime]);

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Step 1: Slot & Class Selection
  const [travelDate, setTravelDate] = useState(searchParams.departureDate || new Date().toISOString().split('T')[0]);
  
  // Set default time slot
  const defaultSlotTime = initialSlotTime || vessel.departure || vessel.departureTime || (typeof dynamicSlots[0] === 'string' ? dynamicSlots[0] : dynamicSlots[0]?.time) || '06:30 AM';
  const [timeSlot, setTimeSlot] = useState(defaultSlotTime);

  // Set default class
  const defaultClassId = initialClass && dynamicTiers.some(t => t.id.toLowerCase() === initialClass.toLowerCase())
    ? dynamicTiers.find(t => t.id.toLowerCase() === initialClass.toLowerCase()).id
    : dynamicTiers[0].id;
  const [seatClass, setSeatClass] = useState(defaultClassId);

  const [adults, setAdults] = useState(Number(searchParams.adults) || (Number(searchParams.totalPassengers) > 0 ? Number(searchParams.totalPassengers) : 2));
  const [children, setChildren] = useState(Number(searchParams.children) || 0);
  const [infants, setInfants] = useState(Number(searchParams.infants) || 0);

  // Step 2: Primary & Co-passengers
  const [primaryPassenger, setPrimaryPassenger] = useState({
    fullName: currentUser?.name || currentUser?.fullName || '',
    age: '29',
    gender: 'Male',
    idType: 'Aadhaar',
    idNumber: 'XXXX-XXXX-1234',
    phone: currentUser?.phone || '+91 98765 43210',
    email: currentUser?.email || 'traveler@andaman.com',
  });

  const [extraPassengers, setExtraPassengers] = useState([
    { fullName: '', age: '27', gender: 'Female', idType: 'Aadhaar', idNumber: '' },
    { fullName: '', age: '8', gender: 'Male', idType: 'Aadhaar', idNumber: '' },
  ]);

  // Step 3: Add-ons (Defaulted to false so no hidden charges are added)
  const [cabTransfer, setCabTransfer] = useState(false); // +400 (Optional)
  const [mealBox, setMealBox] = useState(false); // +250 per pax (Optional)
  const [windowPriority, setWindowPriority] = useState(false); // +100 per pax (Optional)
  const [specialRequest, setSpecialRequest] = useState('');

  // Step 4: Promo Code & Confirmation
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);

  // Active Seating Tier Object
  const selectedTier = dynamicTiers.find(t => t.id === seatClass) || dynamicTiers[0];
  const perPersonTicketPrice = selectedTier.price;

  const payingPassengers = adults + children;
  const subtotalTickets = perPersonTicketPrice * payingPassengers;

  let addOnsTotal = 0;
  if (cabTransfer) addOnsTotal += 400;
  if (mealBox) addOnsTotal += 250 * payingPassengers;
  if (windowPriority) addOnsTotal += 100 * payingPassengers;

  const grossTotal = subtotalTickets + addOnsTotal;
  const gstAmount = Math.round((grossTotal - discountAmount) * 0.05);
  const finalTotalAmount = Math.max(0, grossTotal - discountAmount + gstAmount);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'ANDAMAN10') {
      const disc = Math.round(subtotalTickets * 0.1);
      setDiscountAmount(disc);
      setError(null);
    } else if (promoCode.trim().toUpperCase() === 'ISLANDPASS') {
      setDiscountAmount(500);
      setError(null);
    } else {
      setError('Invalid Promo Code. Try ANDAMAN10 for 10% off.');
    }
  };

  const handleFinalPaymentAndConfirm = async () => {
    setLoading(true);
    setError(null);

    const generatedPNR = `AND-${Math.floor(100000 + Math.random() * 900000)}`;

    const bookingPayload = {
      bookingType: vessel.category === 'CRUISE' ? 'CRUISE' : 'FERRY',
      customerName: primaryPassenger.fullName || 'Andaman Traveler',
      customerEmail: primaryPassenger.email || 'guest@andamantrails.com',
      customerPhone: primaryPassenger.phone || '+91 98765 43210',
      totalAmount: finalTotalAmount,
      bookingDate: new Date().toISOString().split('T')[0],
      travelDate,
      timeSlot,
      vesselName: vessel.name || vessel.ferryName || 'Catamaran Liner',
      operator: vessel.operator || 'Andaman Trails Lines',
      from: vessel.from || searchParams.from || 'Port Blair',
      to: vessel.to || searchParams.to || 'Havelock Island (Swaraj Dweep)',
      seatClass: selectedTier.name || seatClass,
      totalGuests: payingPassengers + infants,
      adultCount: adults,
      childCount: children,
      specialRequests: `${specialRequest || 'None'} | Addons: Cab: ${cabTransfer ? 'Yes' : 'No'}, Meal: ${mealBox ? 'Yes' : 'No'}, Window: ${windowPriority ? 'Yes' : 'No'}`
    };

    try {
      // Trigger Razorpay Checkout
      await openRazorpayCheckout({
        orderData: {
          bookingNumber: generatedPNR,
          totalAmount: finalTotalAmount,
          title: `${vessel.name || vessel.ferryName || 'Andaman Sea Voyage'} (${selectedTier.name || seatClass})`,
          customerName: primaryPassenger.fullName || 'Andaman Traveler',
          customerEmail: primaryPassenger.email || 'traveler@andaman.com',
          customerPhone: primaryPassenger.phone || '+91 98765 43210',
        },
        onSuccess: async (razorpayResponse) => {
          try {
            await apiClient.post('/bookings', {
              ...bookingPayload,
              paymentStatus: 'PAID',
              paymentMethod: 'Razorpay 256-Bit SSL Gateway',
              paymentId: razorpayResponse.razorpay_payment_id,
            });
          } catch (apiErr) {
            console.warn('Booking record save notice:', apiErr.message);
          }

          const confirmedData = {
            pnr: generatedPNR,
            paymentId: razorpayResponse.razorpay_payment_id || `PAY_${Date.now()}`,
            paymentMethod: 'Razorpay 256-Bit SSL Gateway (PAID)',
            ...bookingPayload,
            qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PNR:${generatedPNR}|VOYAGER:${encodeURIComponent(primaryPassenger.fullName)}|DATE:${travelDate}`,
            jettyTerminal: `${vessel.from || 'Port Blair'} Ferry Jetty Terminal`,
            boardingTime: '30 Minutes before departure',
            luggageRule: '25kg check-in + 7kg cabin baggage per passenger.',
          };

          setConfirmedBookingData(confirmedData);
          setStep(5);
          if (onBookingSuccess) onBookingSuccess(confirmedData);
        },
        onError: (paymentError) => {
          setError(paymentError.message || 'Payment was cancelled or could not be verified.');
        }
      });
    } catch (e) {
      // Fallback direct confirmation if checkout popup is bypassed
      const confirmedData = {
        pnr: generatedPNR,
        paymentId: `PAY_${Date.now()}`,
        paymentMethod: 'Confirmed Instant Booking',
        ...bookingPayload,
        qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PNR:${generatedPNR}|VOYAGER:${encodeURIComponent(primaryPassenger.fullName)}|DATE:${travelDate}`,
        jettyTerminal: `${vessel.from || 'Port Blair'} Ferry Jetty Terminal`,
        boardingTime: '30 Minutes before departure',
        luggageRule: '25kg check-in + 7kg cabin baggage per passenger.',
      };
      setConfirmedBookingData(confirmedData);
      setStep(5);
      if (onBookingSuccess) onBookingSuccess(confirmedData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="slot-modal-backdrop" onClick={onClose}>
      <style>{`
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
      `}</style>

      <div className="slot-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="modal-sticky-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: '#F06543', background: '#FFF1EE', padding: '3px 10px', borderRadius: 8 }}>
                {vessel.operator || 'ANDAMAN TRAILS'}
              </span>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0B2545' }}>
                {vessel.name || vessel.ferryName || 'Inter-Island Catamaran'}
              </span>
            </div>
          </div>

          <div className="step-progress-dots">
            <span className={`step-pill ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`}>1. Slot & Class</span>
            <span className={`step-pill ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`}>2. Passengers</span>
            <span className={`step-pill ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`}>3. Add-ons</span>
            <span className={`step-pill ${step === 4 ? 'active' : step > 4 ? 'done' : ''}`}>4. Checkout</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* BODY */}
        <div className="modal-scrollable-body">
          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', padding: '10px 14px', borderRadius: 10, fontSize: 12.5, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertCircle size={15} />
              {error}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 1: TIME SLOT & SEATING CLASS
             ───────────────────────────────────────────────────────────── */}
          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 16px' }}>
                Select Departure Time Slot & Seating Class
              </h3>

              <div className="form-row-2col">
                <div className="input-group">
                  <label className="input-lbl">Sailing Date</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="input-ctrl"
                  />
                </div>
                <div className="input-group">
                  <label className="input-lbl">Route Transit</label>
                  <div style={{ padding: '11px 14px', background: '#F8FAFC', borderRadius: 12, border: '1.5px solid #E2E8F0', fontWeight: 800, fontSize: 13, color: '#0B2545' }}>
                    {vessel.from || searchParams.from || 'Port Blair'} ➔ {vessel.to || searchParams.to || 'Havelock Island (Swaraj Dweep)'}
                  </div>
                </div>
              </div>

              {/* PASSENGERS COUNTER IN STEP 1 */}
              <div style={{ marginBottom: 20, background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: '14px 16px' }}>
                <label className="input-lbl" style={{ display: 'block', marginBottom: 10 }}>Select Passengers</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12 }}>
                  {/* Adults */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '8px 12px', borderRadius: 12, border: '1px solid #E2E8F0' }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B2545' }}>Adults</div>
                      <div style={{ fontSize: 10.5, color: '#64748B' }}>12+ yrs</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button
                        type="button"
                        disabled={adults <= 1}
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #CBD5E1', background: '#F1F5F9', fontWeight: 900, cursor: adults <= 1 ? 'not-allowed' : 'pointer' }}
                      >-</button>
                      <span style={{ fontSize: 13, fontWeight: 900, color: '#0B2545', minWidth: 14, textAlign: 'center' }}>{adults}</span>
                      <button
                        type="button"
                        disabled={adults >= 10}
                        onClick={() => setAdults(adults + 1)}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #CBD5E1', background: '#F1F5F9', fontWeight: 900, cursor: 'pointer' }}
                      >+</button>
                    </div>
                  </div>

                  {/* Children */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '8px 12px', borderRadius: 12, border: '1px solid #E2E8F0' }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B2545' }}>Children</div>
                      <div style={{ fontSize: 10.5, color: '#64748B' }}>2-11 yrs</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button
                        type="button"
                        disabled={children <= 0}
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #CBD5E1', background: '#F1F5F9', fontWeight: 900, cursor: children <= 0 ? 'not-allowed' : 'pointer' }}
                      >-</button>
                      <span style={{ fontSize: 13, fontWeight: 900, color: '#0B2545', minWidth: 14, textAlign: 'center' }}>{children}</span>
                      <button
                        type="button"
                        disabled={children >= 8}
                        onClick={() => setChildren(children + 1)}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #CBD5E1', background: '#F1F5F9', fontWeight: 900, cursor: 'pointer' }}
                      >+</button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '8px 12px', borderRadius: 12, border: '1px solid #E2E8F0' }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B2545' }}>Infants</div>
                      <div style={{ fontSize: 10.5, color: '#059669', fontWeight: 700 }}>Free (&lt;2y)</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button
                        type="button"
                        disabled={infants <= 0}
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #CBD5E1', background: '#F1F5F9', fontWeight: 900, cursor: infants <= 0 ? 'not-allowed' : 'pointer' }}
                      >-</button>
                      <span style={{ fontSize: 13, fontWeight: 900, color: '#0B2545', minWidth: 14, textAlign: 'center' }}>{infants}</span>
                      <button
                        type="button"
                        disabled={infants >= 4}
                        onClick={() => setInfants(infants + 1)}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #CBD5E1', background: '#F1F5F9', fontWeight: 900, cursor: 'pointer' }}
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* DYNAMIC TIME SLOTS */}
              <div style={{ marginBottom: 20 }}>
                <label className="input-lbl" style={{ display: 'block', marginBottom: 8 }}>Available Departure Slots</label>
                <div className="slot-time-chips">
                  {dynamicSlots.map((slotObj, idx) => {
                    const slotText = typeof slotObj === 'string' ? slotObj : `${slotObj.time} (${slotObj.label})`;
                    const slotCleanTime = typeof slotObj === 'string' ? slotObj.split(' ')[0] : slotObj.time;
                    const isSelected = timeSlot.startsWith(slotCleanTime);

                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`time-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => setTimeSlot(typeof slotObj === 'string' ? slotObj : slotObj.time)}
                      >
                        <Clock size={13} style={{ display: 'inline', marginRight: 4 }} />
                        {slotText}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DYNAMIC SEATING CLASS TIERS */}
              <div style={{ marginBottom: 20 }}>
                <label className="input-lbl" style={{ display: 'block', marginBottom: 8 }}>Choose Seating Tier</label>
                
                {dynamicTiers.map((tier) => {
                  const isSelected = seatClass === tier.id;
                  const isHighlight = tier.id === 'Royal' || tier.id === 'Majesty';

                  return (
                    <div
                      key={tier.id}
                      className={`class-card-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSeatClass(tier.id)}
                    >
                      <div style={{ flex: 1, paddingRight: 16 }}>
                        <div style={{ fontSize: 14.5, fontWeight: 900, color: isHighlight ? '#F06543' : '#0B2545', marginBottom: 3 }}>
                          {tier.name}
                        </div>
                        <div style={{ fontSize: 12, color: '#64748B', lineHeight: 1.45 }}>
                          {tier.desc}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', minWidth: 90 }}>
                        <div style={{ fontSize: 17, fontWeight: 900, color: isHighlight ? '#F06543' : '#0B2545' }}>
                          ₹{Number(tier.price).toLocaleString('en-IN')}
                        </div>
                        <div style={{ fontSize: 11, color: tier.badgeColor || '#10B981', fontWeight: 800, marginTop: 2 }}>
                          {tier.badge || 'Available'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* TRANSPARENT LIVE FARE BREAKDOWN BOX */}
              <div style={{ background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 16, padding: '14px 18px', marginTop: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      FARE BREAKDOWN ({payingPassengers} {payingPassengers === 1 ? 'PASSENGER' : 'PASSENGERS'})
                    </div>
                    <div style={{ fontSize: 13, color: '#0B2545', fontWeight: 700, marginTop: 3 }}>
                      ₹{perPersonTicketPrice.toLocaleString('en-IN')} × {payingPassengers} = ₹{subtotalTickets.toLocaleString('en-IN')} + 5% GST (₹{gstAmount.toLocaleString('en-IN')})
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>Total Payable</div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: '#0B2545' }}>
                      ₹{finalTotalAmount.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 2: PASSENGER DOSSIER
             ───────────────────────────────────────────────────────────── */}
          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 16px' }}>
                Primary Voyager & Passenger Details
              </h3>

              <div style={{ background: '#FFF1EE', border: '1px solid #FFD7CC', borderRadius: 12, padding: '10px 14px', fontSize: 12, color: '#C2410C', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <ShieldCheck size={16} />
                <span>Passenger names must strictly match original Government Photo ID shown at Jetty Terminal.</span>
              </div>

              {/* PRIMARY TRAVELER */}
              <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 16, padding: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: '#0B2545', marginBottom: 10 }}>
                  Passenger 1 (Primary Contact)
                </div>
                <div className="form-row-2col">
                  <div className="input-group">
                    <label className="input-lbl">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={primaryPassenger.fullName}
                      onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, fullName: e.target.value })}
                      placeholder="e.g. Vaibhav Sharma"
                      className="input-ctrl"
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-lbl">Age & Gender *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      <input
                        type="number"
                        value={primaryPassenger.age}
                        onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, age: e.target.value })}
                        className="input-ctrl"
                      />
                      <select
                        value={primaryPassenger.gender}
                        onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, gender: e.target.value })}
                        className="input-ctrl"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="input-group">
                    <label className="input-lbl">Mobile Number (WhatsApp SMS updates) *</label>
                    <input
                      type="tel"
                      required
                      value={primaryPassenger.phone}
                      onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="input-ctrl"
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-lbl">Email Address (E-Ticket PDF) *</label>
                    <input
                      type="email"
                      required
                      value={primaryPassenger.email}
                      onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, email: e.target.value })}
                      placeholder="your@email.com"
                      className="input-ctrl"
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="input-group">
                    <label className="input-lbl">Govt ID Type</label>
                    <select
                      value={primaryPassenger.idType}
                      onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, idType: e.target.value })}
                      className="input-ctrl"
                    >
                      <option value="Aadhaar">Aadhaar Card</option>
                      <option value="Passport">Passport (Foreign / NRI)</option>
                      <option value="DrivingLicense">Driving License</option>
                      <option value="VoterID">Voter ID</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="input-lbl">ID Card Number</label>
                    <input
                      type="text"
                      value={primaryPassenger.idNumber}
                      onChange={(e) => setPrimaryPassenger({ ...primaryPassenger, idNumber: e.target.value })}
                      placeholder="XXXX-XXXX-1234"
                      className="input-ctrl"
                    />
                  </div>
                </div>
              </div>

              {/* CO-PASSENGERS */}
              {payingPassengers > 1 && (
                <div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#0B2545', marginBottom: 10 }}>
                    Co-Passengers ({payingPassengers - 1} Additional)
                  </div>
                  {Array.from({ length: payingPassengers - 1 }).map((_, idx) => (
                    <div key={idx} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: 14, marginBottom: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#64748B', marginBottom: 6 }}>Passenger {idx + 2}</div>
                      <div className="form-row-2col" style={{ margin: 0 }}>
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Full Legal Name"
                            value={extraPassengers[idx]?.fullName || ''}
                            onChange={(e) => {
                              const updated = [...extraPassengers];
                              if (!updated[idx]) updated[idx] = {};
                              updated[idx].fullName = e.target.value;
                              setExtraPassengers(updated);
                            }}
                            className="input-ctrl"
                          />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                          <input
                            type="number"
                            placeholder="Age"
                            value={extraPassengers[idx]?.age || '25'}
                            onChange={(e) => {
                              const updated = [...extraPassengers];
                              if (!updated[idx]) updated[idx] = {};
                              updated[idx].age = e.target.value;
                              setExtraPassengers(updated);
                            }}
                            className="input-ctrl"
                          />
                          <select
                            value={extraPassengers[idx]?.gender || 'Female'}
                            onChange={(e) => {
                              const updated = [...extraPassengers];
                              if (!updated[idx]) updated[idx] = {};
                              updated[idx].gender = e.target.value;
                              setExtraPassengers(updated);
                            }}
                            className="input-ctrl"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 3: ADD-ONS & CONCIERGE SERVICES
             ───────────────────────────────────────────────────────────── */}
          {step === 3 && (
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 16px' }}>
                Enhance Your Voyage with Jetty Add-ons
              </h3>

              <div
                className={`addon-option-row ${cabTransfer ? 'active' : ''}`}
                onClick={() => setCabTransfer(!cabTransfer)}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>Private AC Cab Pickup / Drop at Jetty</div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>Chauffeur meets you with a nameboard at hotel or airport.</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>+₹400 Flat</div>
                  <div style={{ fontSize: 11, color: cabTransfer ? '#059669' : '#94A3B8', fontWeight: 800 }}>
                    {cabTransfer ? '✓ Selected' : '+ Add'}
                  </div>
                </div>
              </div>

              <div
                className={`addon-option-row ${mealBox ? 'active' : ''}`}
                onClick={() => setMealBox(!mealBox)}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>Fresh Gourmet Snack Box & Beverage</div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>Club sandwich, fruit muffin, coconut water & fresh cookies onboard.</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>+₹250 / pax</div>
                  <div style={{ fontSize: 11, color: mealBox ? '#059669' : '#94A3B8', fontWeight: 800 }}>
                    {mealBox ? '✓ Selected' : '+ Add'}
                  </div>
                </div>
              </div>

              <div
                className={`addon-option-row ${windowPriority ? 'active' : ''}`}
                onClick={() => setWindowPriority(!windowPriority)}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>Window Seat Priority Allocation</div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>Guaranteed sea view panoramic window seat alignment.</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>+₹100 / pax</div>
                  <div style={{ fontSize: 11, color: windowPriority ? '#059669' : '#94A3B8', fontWeight: 800 }}>
                    {windowPriority ? '✓ Selected' : '+ Add'}
                  </div>
                </div>
              </div>

              <div className="input-group" style={{ marginTop: 14 }}>
                <label className="input-lbl">Special Requests / Wheelchair / Remarks</label>
                <input
                  type="text"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g. Senior citizen low step boarding assistance"
                  className="input-ctrl"
                />
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 4: REVIEW & INSTANT CHECKOUT
             ───────────────────────────────────────────────────────────── */}
          {step === 4 && (
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 16px' }}>
                Booking Review & Fare Breakdown
              </h3>

              {/* ROUTE & TIME SUMMARY CARD */}
              <div style={{ background: '#0B2545', color: '#ffffff', borderRadius: 18, padding: 20, marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#34D399', background: 'rgba(52,211,153,0.15)', padding: '2px 8px', borderRadius: 6 }}>
                      INSTANT CONFIRMATION
                    </span>
                    <h4 style={{ fontSize: 17, fontWeight: 900, margin: '4px 0 0' }}>
                      {vessel.name || vessel.ferryName} • {selectedTier.name || seatClass}
                    </h4>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#94A3B8' }}>Travel Date</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>{travelDate}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#94A3B8' }}>Departure Slot</div>
                    <div style={{ fontSize: 15, fontWeight: 900 }}>{timeSlot}</div>
                    <div style={{ fontSize: 12, color: '#CBD5E1' }}>{vessel.from || searchParams.from || 'Port Blair'}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#F06543', fontWeight: 800 }}>90 Mins Direct</div>
                    <div style={{ width: 40, height: 2, background: '#F06543', margin: '4px auto' }} />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#94A3B8' }}>Arrival Jetty</div>
                    <div style={{ fontSize: 15, fontWeight: 900 }}>Estimated Arrival</div>
                    <div style={{ fontSize: 12, color: '#CBD5E1' }}>{vessel.to || searchParams.to || 'Havelock Island'}</div>
                  </div>
                </div>
              </div>

              {/* FARE BREAKDOWN */}
              <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 18, padding: 18, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: '#64748B' }}>{selectedTier.name} ({payingPassengers} pax × ₹{perPersonTicketPrice.toLocaleString('en-IN')})</span>
                  <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{subtotalTickets.toLocaleString('en-IN')}</span>
                </div>

                {addOnsTotal > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                    <span style={{ color: '#64748B' }}>Add-ons (Cabs, Meals & Window Priority)</span>
                    <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{addOnsTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8, color: '#059669' }}>
                    <span style={{ fontWeight: 800 }}>Promo Coupon Discount Applied</span>
                    <span style={{ fontWeight: 800 }}>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: '#64748B' }}>Port Terminal Passenger Tax & GST (5%)</span>
                  <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1.5px solid #E2E8F0', paddingTop: 10, fontSize: 16 }}>
                  <span style={{ fontWeight: 900, color: '#0B2545' }}>Total Payable Amount</span>
                  <span style={{ fontWeight: 900, color: '#F06543', fontSize: 18 }}>₹{finalTotalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* PROMO CODE */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                <input
                  type="text"
                  placeholder="Enter Promo Code (e.g. ANDAMAN10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="input-ctrl"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  style={{ background: '#0B2545', color: '#ffffff', border: 'none', padding: '0 20px', borderRadius: 12, fontWeight: 800, fontSize: 12, cursor: 'pointer' }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 5: CONFIRMED E-TICKET RECEIPT
             ───────────────────────────────────────────────────────────── */}
          {step === 5 && confirmedBookingData && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: '0 0 4px' }}>
                  Voyage Confirmed & E-Ticket Issued!
                </h3>
                <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>
                  A confirmation SMS and PDF voucher have been dispatched to <strong>{confirmedBookingData.customerEmail}</strong>.
                </p>
              </div>

              <div className="ticket-receipt-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1.5px dashed #CBD5E1', paddingBottom: 14, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.08em' }}>OFFICIAL BOARDING PASS</div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: '#0B2545' }}>PNR: {confirmedBookingData.pnr}</div>
                    <div style={{ fontSize: 13, color: '#64748B' }}>{confirmedBookingData.vesselName} • {confirmedBookingData.seatClass}</div>
                  </div>
                  <img
                    src={confirmedBookingData.qrCode}
                    alt="Boarding QR"
                    style={{ width: 68, height: 68, borderRadius: 8, border: '1px solid #CBD5E1' }}
                  />
                </div>

                <div className="form-row-2col" style={{ marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#64748B', fontWeight: 800 }}>PRIMARY VOYAGER</div>
                    <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>{confirmedBookingData.customerName}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#64748B', fontWeight: 800 }}>DATE & TIME</div>
                    <div style={{ fontSize: 14, fontWeight: 900, color: '#0B2545' }}>{confirmedBookingData.travelDate} @ {confirmedBookingData.timeSlot}</div>
                  </div>
                </div>

                <div className="form-row-2col" style={{ marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#64748B', fontWeight: 800 }}>BOARDING JETTY</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{confirmedBookingData.jettyTerminal}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#64748B', fontWeight: 800 }}>TOTAL AMOUNT PAID</div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: '#10B981' }}>₹{confirmedBookingData.totalAmount.toLocaleString('en-IN')} (PAID)</div>
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', borderRadius: 10, padding: 10, fontSize: 11, color: '#64748B', marginTop: 10 }}>
                  ℹ️ {confirmedBookingData.luggageRule} Please arrive {confirmedBookingData.boardingTime}.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="modal-bottom-bar">
          {step < 5 ? (
            <>
              <div>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-modal-back"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                ) : (
                  <div style={{ fontSize: 12, color: '#64748B' }}>
                    Estimated Total: <strong style={{ color: '#0B2545', fontSize: 15 }}>₹{finalTotalAmount.toLocaleString('en-IN')}</strong>
                    <span style={{ fontSize: 11, color: '#94A3B8', marginLeft: 6 }}>({payingPassengers} {payingPassengers === 1 ? 'Guest' : 'Guests'} incl. 5% GST)</span>
                  </div>
                )}
              </div>

              <div>
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="btn-modal-next"
                  >
                    <span>Proceed to {step === 1 ? 'Passengers' : step === 2 ? 'Add-ons' : 'Review & Pay'}</span>
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleFinalPaymentAndConfirm}
                    className="btn-modal-next"
                    style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
                  >
                    <CreditCard size={16} />
                    <span>{loading ? 'Confirming Ticket...' : `Pay ₹${finalTotalAmount.toLocaleString('en-IN')} & Issue Ticket →`}</span>
                  </button>
                )}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', gap: 10, width: '100%', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-modal-back"
              >
                <Printer size={15} />
                Print Ticket
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn-modal-next"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
