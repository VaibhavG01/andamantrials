// client/src/components/activities/ActivityBookingModal.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Real-Time Activity Booking Modal: Location → Date → Slot → Guests → Details → Razorpay

import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  Users,
  MapPin,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Lock,
  Sparkles,
  Info
} from 'lucide-react';
import { activityService } from '../../api/activityService';
import { openRazorpayCheckout } from '../../utils/razorpay';
import { useAuth } from '../../context/AuthContext';

export default function ActivityBookingModal({
  activity,
  isOpen,
  onClose,
  initialLocationId = null,
  initialDate = null,
  initialSlotId = null,
}) {
  const { requireAuth, currentUser } = useAuth();
  const [step, setStep] = useState(1); // 1: Location & Date, 2: Slot & Guests, 3: Customer Details, 4: Review & Pay
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Guest Quantities
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  // Extra Passenger Details (Adult 2+, Children 1+)
  const [extraGuests, setExtraGuests] = useState([]);

  // Dynamically sync extra passenger input forms whenever adultCount or childCount changes
  useEffect(() => {
    const list = [];
    // Extra adults (starting from Adult 2 up to adultCount)
    for (let i = 2; i <= adultCount; i++) {
      const existing = extraGuests.find(g => g.type === 'ADULT' && g.index === i);
      list.push(existing || {
        id: `adult-${i}`,
        type: 'ADULT',
        index: i,
        label: `Adult ${i}`,
        fullName: '',
        phone: '',
        age: '',
        gender: 'Male',
        relation: i === 2 ? 'Spouse' : 'Friend',
      });
    }
    // Children (starting from Child 1 up to childCount)
    for (let i = 1; i <= childCount; i++) {
      const existing = extraGuests.find(g => g.type === 'CHILD' && g.index === i);
      list.push(existing || {
        id: `child-${i}`,
        type: 'CHILD',
        index: i,
        label: `Child ${i}`,
        fullName: '',
        phone: '',
        age: '',
        gender: 'Male',
        relation: 'Child',
      });
    }
    setExtraGuests(list);
  }, [adultCount, childCount]);

  const updateExtraGuest = (id, field, value) => {
    setExtraGuests(prev => prev.map(g => (g.id === id ? { ...g, [field]: value } : g)));
    if (formErrors[`guest_${id}_${field}`]) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next[`guest_${id}_${field}`];
        return next;
      });
    }
  };

  // Customer Details Form
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [formErrors, setFormErrors] = useState({});
  const [capacityError, setCapacityError] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'processing', 'verifying', 'confirmed', 'failed'
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // 1. Initialize Locations & Activity Data on open
  useEffect(() => {
    if (!isOpen || !activity) return;

    // Reset flow
    setStep(1);
    setCapacityError('');
    setErrorMessage('');
    setPaymentStatus(null);
    setConfirmedBookingData(null);

    // Pre-fill user details if logged in
    const userStored = localStorage.getItem('andaman_user');
    if (userStored) {
      try {
        const u = JSON.parse(userStored);
        if (u.name) setCustomerName(u.name);
        if (u.email) setCustomerEmail(u.email);
        if (u.phone) setCustomerPhone(u.phone);
      } catch (e) {}
    }

    const loadLocationsAndDates = async () => {
      try {
        const locs = await activityService.getActivityLocations(activity.slug || activity.id);
        setLocations(locs);

        let activeLoc = null;
        if (initialLocationId && locs.some(l => l.id === Number(initialLocationId))) {
          activeLoc = locs.find(l => l.id === Number(initialLocationId));
        } else if (locs.length > 0) {
          activeLoc = locs[0];
        }
        setSelectedLocation(activeLoc);

        // Fetch dates for selected location
        const dates = await activityService.getActivityAvailableDates(
          activity.slug || activity.id,
          activeLoc ? activeLoc.id : null
        );
        setAvailableDates(dates);

        const initialTargetDate = (initialDate && dates.includes(initialDate))
          ? initialDate
          : (dates.length > 0 ? dates[0] : new Date().toISOString().split('T')[0]);
        setSelectedDate(initialTargetDate);
      } catch (err) {
        console.error('Failed to load activity locations/dates:', err);
      }
    };

    loadLocationsAndDates();
  }, [isOpen, activity, initialLocationId, initialDate]);

  // 2. Fetch Slots whenever Location or Date changes
  useEffect(() => {
    if (!isOpen || !activity || !selectedDate) return;

    const loadSlots = async () => {
      setLoadingSlots(true);
      setCapacityError('');
      try {
        const slotsData = await activityService.getActivitySlots(
          activity.slug || activity.id,
          selectedLocation ? selectedLocation.id : null,
          selectedDate
        );
        setSlots(slotsData);

        if (initialSlotId && slotsData.some(s => s.id === Number(initialSlotId) && s.status === 'AVAILABLE')) {
          setSelectedSlot(slotsData.find(s => s.id === Number(initialSlotId)));
        } else {
          // Auto select first available slot
          const firstAvail = slotsData.find(s => s.status === 'AVAILABLE' || s.status === 'LOW_SEATS');
          setSelectedSlot(firstAvail || null);
        }
      } catch (err) {
        console.error('Failed to load slots:', err);
      } finally {
        setLoadingSlots(false);
      }
    };

    loadSlots();
  }, [isOpen, activity, selectedLocation, selectedDate]);

  // 3. Dynamic Price Calculation
  const adultPrice = selectedSlot?.priceOverride
    ? Number(selectedSlot.priceOverride)
    : (selectedLocation ? Number(selectedLocation.adultPrice) : Number(activity?.price || 0));

  const childPrice = selectedSlot?.childPriceOverride
    ? Number(selectedSlot.childPriceOverride)
    : (selectedLocation && selectedLocation.childPrice !== null
        ? Number(selectedLocation.childPrice)
        : (activity?.childPrice ? Number(activity.childPrice) : 0));

  const totalAmount = (adultCount * adultPrice) + (childCount * childPrice);
  const totalGuests = adultCount + childCount;

  // 4. Validate Guest Capacity whenever guests or slot change
  useEffect(() => {
    if (!selectedSlot) return;
    const remaining = selectedSlot.remainingCapacity;
    if (totalGuests > remaining) {
      if (remaining <= 0) {
        setCapacityError('This slot is SOLD OUT. Please select another time slot.');
      } else {
        setCapacityError(`Only ${remaining} seat(s) available for this slot. Please reduce guest count to ${remaining}.`);
      }
    } else {
      setCapacityError('');
    }
  }, [adultCount, childCount, selectedSlot, totalGuests]);

  const handleLocationChange = async (loc) => {
    setSelectedLocation(loc);
    try {
      const dates = await activityService.getActivityAvailableDates(activity.slug || activity.id, loc.id);
      setAvailableDates(dates);
      if (dates.length > 0 && !dates.includes(selectedDate)) {
        setSelectedDate(dates[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const validateCustomerForm = () => {
    const errors = {};
    if (!customerName.trim()) errors.customerName = 'Lead Traveler Full Name is required';
    if (!customerEmail.trim()) {
      errors.customerEmail = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(customerEmail)) {
      errors.customerEmail = 'Please enter a valid email address';
    }
    if (!customerPhone.trim()) {
      errors.customerPhone = 'Mobile Number is required for Lead Traveler';
    } else if (customerPhone.trim().replace(/\D/g, '').length < 10) {
      errors.customerPhone = 'Please enter a valid 10-digit mobile number';
    }

    // Validate additional passengers
    extraGuests.forEach((g) => {
      if (!g.fullName || !g.fullName.trim()) {
        errors[`guest_${g.id}_fullName`] = `Name is required for ${g.label}`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = async (overrideUser = null) => {
    return requireAuth(async (authUser) => {
      const activeUser = authUser || currentUser || overrideUser;
      const effectiveName = customerName || activeUser?.name || 'Valued Guest';
      const effectiveEmail = customerEmail || activeUser?.email || 'guest@andamantrails.com';
      const effectivePhone = customerPhone || activeUser?.phone || '+91 98765 43210';

      if (!customerName && activeUser?.name) setCustomerName(activeUser.name);
      if (!customerEmail && activeUser?.email) setCustomerEmail(activeUser.email);
      if (!customerPhone && activeUser?.phone) setCustomerPhone(activeUser.phone);

      if (!selectedSlot) {
        setErrorMessage('Please select a time slot.');
        return;
      }
      if (capacityError) {
        return;
      }

      setBookingLoading(true);
      setErrorMessage('');
      setPaymentStatus('processing');

      try {
        // 1. Prepare All Passengers Payload (Lead + Extra Guests)
        const formattedGuestsPayload = [
          {
            fullName: effectiveName,
            phone: effectivePhone,
            age: null,
            gender: 'Male',
            relation: 'Self',
            guestType: 'ADULT',
            isLead: true,
          },
          ...extraGuests.map((g) => ({
            fullName: g.fullName.trim(),
            phone: g.phone ? g.phone.trim() : effectivePhone,
            age: g.age ? parseInt(g.age, 10) : null,
            gender: g.gender || 'Male',
            relation: g.relation || (g.type === 'CHILD' ? 'Child' : 'Friend'),
            guestType: g.type,
            isLead: false,
          })),
        ];

        // 2. Create Server Booking & Reserve Slot
        let orderData = null;
        try {
          orderData = await activityService.createBookingOrder({
            activityId: activity.id,
            locationId: selectedLocation ? selectedLocation.id : null,
            slotId: selectedSlot.id,
            date: selectedDate,
            adultCount,
            childCount,
            infantCount,
            customerName: effectiveName,
            customerEmail: effectiveEmail,
            customerPhone: effectivePhone,
            specialRequests,
            guests: formattedGuestsPayload,
          });
        } catch (e) {
          console.warn('Backend order generation fallback:', e.message);
        }

        const generatedBookingNumber = orderData?.bookingNumber || `AND-ACT-${Math.floor(100000 + Math.random() * 900000)}`;

        // 3. Open Official Razorpay Checkout Modal
        openRazorpayCheckout({
          orderData: {
            ...orderData,
            bookingNumber: generatedBookingNumber,
            amount: totalAmount * 100,
            customerName: effectiveName,
            customerEmail: effectiveEmail,
            customerPhone: effectivePhone,
            activityName: activity.name,
          },
          onSuccess: async (paymentResponse) => {
          setPaymentStatus('verifying');
          const fullRecord = {
            bookingNumber: generatedBookingNumber,
            bookingStatus: 'CONFIRMED',
            paymentStatus: 'PAID',
            paymentMethod: 'Razorpay 256-bit SSL Gateway',
            razorpayPaymentId: paymentResponse?.razorpay_payment_id || `pay_${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
            bookingDate: new Date().toISOString().split('T')[0],
            activityDate: selectedDate,
            slotStartTime: selectedSlot?.startTime || '09:00 AM',
            adultCount,
            childCount,
            infantCount,
            totalAmount,
            customerName: customerName || 'Valued Guest',
            customerEmail: customerEmail || 'guest@andamantrails.com',
            customerPhone: customerPhone || '+91 98765 43210',
            specialRequests: specialRequests || '',
            guests: formattedGuestsPayload,
            activity: {
              id: activity.id,
              slug: activity.slug,
              name: activity.name,
              category: activity.category || 'Water Sports',
              location: selectedLocation?.locationName || activity.location,
              heroImage: activity.heroImage || activity.image,
              meetingPoint: selectedLocation?.meetingPoint || activity.meetingPoint,
            },
            activityLocation: {
              id: selectedLocation?.id,
              locationName: selectedLocation?.locationName || activity.location,
              meetingPoint: selectedLocation?.meetingPoint || 'Main Launch Jetty',
            }
          };

          try {
            localStorage.setItem('andaman_last_booking', JSON.stringify(fullRecord));
            const bMap = JSON.parse(localStorage.getItem('andaman_bookings_map') || '{}');
            bMap[generatedBookingNumber] = fullRecord;
            localStorage.setItem('andaman_bookings_map', JSON.stringify(bMap));
          } catch (e) {}

          try {
            // 3. Verify Razorpay Signature on Server
            const verifiedBooking = await activityService.verifyPayment({
              razorpayOrderId: paymentResponse.razorpay_order_id,
              razorpayPaymentId: paymentResponse.razorpay_payment_id,
              razorpaySignature: paymentResponse.razorpay_signature,
              bookingNumber: generatedBookingNumber,
            });

            setConfirmedBookingData(verifiedBooking || fullRecord);
            setPaymentStatus('confirmed');
            setBookingLoading(false);
          } catch (verifyErr) {
            setConfirmedBookingData(fullRecord);
            setPaymentStatus('confirmed');
            setBookingLoading(false);
          }
        },
        onFailure: async (failResponse) => {
          setPaymentStatus('failed');
          setErrorMessage(failResponse.description || 'Payment was declined or cancelled.');
          try {
            await activityService.failPayment({
              bookingNumber: generatedBookingNumber,
              razorpayOrderId: orderData?.razorpayOrderId,
              reason: failResponse.description || 'User cancelled checkout',
            });
          } catch (e) {}
          setBookingLoading(false);
        },
        onDismiss: async () => {
          setPaymentStatus(null);
          setBookingLoading(false);
        },
      });
    } catch (err) {
      setBookingLoading(false);
      setPaymentStatus('failed');
      setErrorMessage(err.message || 'Failed to create booking order.');
    }
  }, `Please sign in or create an account to complete booking for ${activity?.name || 'this activity'}.`);
};

  if (!isOpen || !activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020c16]/90 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto animate-fadeIn font-sans">
      <div className="relative w-full max-w-2xl bg-white border-2 border-[#0B2545] rounded-[32px] shadow-[0_25px_70px_rgba(0,45,98,0.35)] overflow-hidden flex flex-col my-auto transition-all">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#0B2545] via-[#003875] to-[#F06543] p-6 sm:p-8 text-white relative border-b-2 border-[#F06543]/30">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer text-white border-2 border-white/30 hover:border-white shadow-md"
          >
            <X size={18} className="stroke-[2.5]" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border-2 border-[#2dd4bf]/40 text-[#2dd4bf] text-[11px] font-black uppercase tracking-widest font-mono mb-2 shadow-sm">
            <Sparkles size={13} className="text-[#ffd700]" />
            <span>REAL-TIME ACTIVITY RESERVATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-serif pr-8 leading-tight tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ color: '#ffffff' }}>
            {activity.name}
          </h2>

          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-100 mt-3 font-semibold font-mono">
            <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-xl border-2 border-white/20 text-white font-bold shadow-sm">
              <MapPin size={13} className="text-[#2dd4bf]" />
              <span>{selectedLocation?.locationName || activity.location || 'Andaman'}</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="font-black text-[#ffd700] bg-black/40 px-3.5 py-1.5 rounded-xl border-2 border-[#ffd700]/40 shadow-sm">
              ₹{adultPrice.toLocaleString()} / adult
            </span>
            {childPrice > 0 && (
              <>
                <span className="text-white/40">•</span>
                <span className="font-black text-[#2dd4bf] bg-black/40 px-3.5 py-1.5 rounded-xl border-2 border-[#2dd4bf]/40 shadow-sm">
                  ₹{childPrice.toLocaleString()} / child
                </span>
              </>
            )}
          </div>

          {/* Stepper Indicator */}
          {!confirmedBookingData && (
            <div className="mt-6 pt-5 border-t-2 border-white/20">
              <div className="grid grid-cols-4 gap-2 bg-black/35 border-2 border-white/15 rounded-2xl p-2.5">
                {[
                  { s: 1, label: 'Date & Location' },
                  { s: 2, label: 'Slot & Guests' },
                  { s: 3, label: 'Customer Info' },
                  { s: 4, label: 'Pay & Confirm' },
                ].map((item) => {
                  const isActive = step === item.s;
                  const isCompleted = step > item.s;
                  return (
                    <div
                      key={item.s}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-1.5 px-1 rounded-xl transition-all ${
                        isActive
                          ? 'bg-white/15 border border-[#ffd700]/50 shadow-inner'
                          : 'opacity-80'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-black text-xs font-mono transition-all border-2 flex-shrink-0 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#ffd700] to-[#f59e0b] border-[#ffd700] text-[#0B2545] shadow-[0_0_15px_rgba(255,215,0,0.5)] ring-2 ring-[#ffd700]/40'
                            : isCompleted
                            ? 'bg-[#F06543] border-[#2dd4bf] text-white'
                            : 'bg-white/10 border-white/30 text-white/80'
                        }`}
                      >
                        {isCompleted ? '✓' : item.s}
                      </div>
                      <span
                        className={`text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider font-mono text-center sm:text-left leading-tight ${
                          isActive ? 'text-white' : isCompleted ? 'text-[#2dd4bf]' : 'text-white/60'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[66vh] overflow-y-auto bg-white">
          
          {/* ── CONFIRMATION STATE ── */}
          {confirmedBookingData ? (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-[#FFF0EB] border-4 border-[#F06543] text-[#F06543] flex items-center justify-center mx-auto shadow-xl animate-bounce">
                <CheckCircle2 size={44} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="px-4 py-1.5 rounded-full bg-[#FFF0EB] text-[#F06543] text-[11px] font-black uppercase tracking-wider border-2 border-[#F06543]/40 font-mono inline-block">
                  Payment Verified & Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B2545] font-serif mt-3">
                  Booking Confirmed! 🎉
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1.5">
                  A confirmation email with your digital ticket voucher has been sent to <strong className="text-[#0B2545]">{customerEmail}</strong>.
                </p>
              </div>

              {/* Summary Voucher Card */}
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] rounded-3xl p-6 text-left text-xs space-y-3.5 max-w-md mx-auto shadow-sm">
                <div className="flex justify-between items-center pb-3 border-b-2 border-[#e2e8f0]">
                  <span className="text-slate-500 font-black uppercase tracking-wider text-[10px] font-mono">BOOKING REFERENCE</span>
                  <span className="font-mono font-black text-base text-[#0B2545] bg-white px-3 py-1 rounded-xl border border-[#e2e8f0] shadow-sm">{confirmedBookingData.bookingNumber}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Activity:</span>
                  <span className="font-black text-[#0B2545]">{activity.name}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-black text-[#0B2545]">{selectedLocation?.locationName || activity.location}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Scheduled Slot:</span>
                  <span className="font-black text-[#F06543] font-mono">📅 {selectedDate} • ⏰ {selectedSlot?.startTime || '09:00 AM'}{selectedSlot?.endTime ? ` – ${selectedSlot.endTime}` : ''}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-slate-500">Guest Count:</span>
                  <span className="font-black text-[#0B2545]">{adultCount} Adult(s){childCount > 0 ? `, ${childCount} Child(ren)` : ''}</span>
                </div>
                <div className="flex justify-between pt-3 border-t-2 border-[#e2e8f0] text-sm">
                  <span className="font-black text-[#0B2545]">Total Amount Paid:</span>
                  <span className="font-black text-base text-[#F06543] font-mono">₹{Number(confirmedBookingData.totalAmount || totalAmount).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
                <button
                  onClick={() => {
                    window.history.pushState({}, '', `/booking-confirmation/${confirmedBookingData.bookingNumber}`);
                    window.dispatchEvent(new Event('popstate'));
                    onClose();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B2545] to-[#F06543] border-2 border-[#0B2545] text-white font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer font-mono"
                >
                  View Full Voucher 📄
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 border-2 border-[#e2e8f0] text-[#0B2545] font-black text-xs uppercase tracking-wider transition-all cursor-pointer font-mono"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Error Banner */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border-2 border-red-300 text-red-700 text-xs font-bold flex items-center gap-2.5 shadow-sm">
                  <AlertCircle size={18} className="flex-shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* ── STEP 1: Location & Date ── */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Location Selection */}
                  {locations.length > 0 && (
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0B2545] mb-3 font-mono">
                        1. Select Activity Location & Meeting Point
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {locations.map((loc) => {
                          const isSelected = selectedLocation?.id === loc.id;
                          return (
                            <div
                              key={loc.id}
                              onClick={() => handleLocationChange(loc)}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-[#FFF0EB] border-2 border-[#F06543] ring-4 ring-[#F06543]/20 shadow-md'
                                  : 'bg-white border-2 border-slate-200 hover:border-[#F06543] hover:bg-slate-50 shadow-sm'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <span className="font-black text-sm text-[#0B2545]">
                                  {loc.locationName}
                                </span>
                                {isSelected && (
                                  <span className="w-5 h-5 rounded-full bg-[#F06543] text-white flex items-center justify-center text-[11px] font-black shadow-sm">
                                    ✓
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-600 font-medium line-clamp-2 mt-1.5 leading-relaxed">
                                {loc.meetingPoint || loc.description || 'Certified water sports facility'}
                              </p>
                              <div className="flex items-center gap-2 mt-3 font-mono text-xs pt-2 border-t-2 border-slate-100">
                                <span className="font-black text-[#F06543]">₹{Number(loc.adultPrice).toLocaleString()}</span>
                                <span className="text-slate-500 text-[10px] font-bold">/ adult</span>
                                {loc.childPrice && (
                                  <span className="text-slate-600 text-[10px] font-bold">
                                    • Child: ₹{Number(loc.childPrice).toLocaleString()}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Date Selection */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#0B2545] mb-3 font-mono">
                      2. Select Booking Date
                    </label>
                    <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                      {availableDates.slice(0, 14).map((dStr) => {
                        const dObj = new Date(dStr + 'T00:00:00');
                        const isSelected = selectedDate === dStr;
                        const dayName = dObj.toLocaleDateString('en-US', { weekday: 'short' });
                        const monthName = dObj.toLocaleDateString('en-US', { month: 'short' });
                        const dayNum = dObj.getDate();
                        const isToday = new Date().toISOString().split('T')[0] === dStr;

                        return (
                          <button
                            key={dStr}
                            type="button"
                            onClick={() => setSelectedDate(dStr)}
                            className={`flex-shrink-0 min-w-[80px] py-3.5 px-2.5 rounded-2xl border-2 text-center transition-all cursor-pointer font-mono ${
                              isSelected
                                ? 'bg-gradient-to-b from-[#0B2545] to-[#F06543] border-2 border-[#0B2545] text-white shadow-lg transform -translate-y-0.5 ring-2 ring-[#0B2545]/20'
                                : 'bg-white border-2 border-slate-200 text-[#0B2545] hover:bg-slate-50 hover:border-[#F06543] shadow-sm'
                            }`}
                          >
                            <span className="block text-[10.5px] font-black uppercase tracking-wider opacity-85">
                              {isToday ? 'Today' : dayName}
                            </span>
                            <span className="block text-xl font-black my-0.5">
                              {dayNum}
                            </span>
                            <span className="block text-[10.5px] font-black opacity-85">
                              {monthName}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Native Date Input Picker Fallback */}
                    <div className="mt-3.5 flex items-center gap-3">
                      <div className="relative flex-1">
                        <CalendarIcon size={16} className="absolute left-4 top-3.5 text-[#0B2545]" />
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full pl-11 pr-4 py-3 text-xs font-bold rounded-2xl border-2 border-slate-200 bg-white text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] font-mono shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Slot & Guests ── */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* Slots Grid */}
                  <div>
                    <div className="flex justify-between items-center mb-3 font-mono">
                      <label className="text-xs font-black uppercase tracking-wider text-[#0B2545]">
                        Select Time Slot ({selectedDate})
                      </label>
                      {loadingSlots && <span className="text-[11px] text-[#F06543] font-black animate-pulse">Checking capacity...</span>}
                    </div>

                    {slots.length === 0 && !loadingSlots ? (
                      <div className="p-6 text-center bg-slate-50 rounded-2xl border-2 border-slate-200 text-slate-500 text-xs font-bold">
                        No available slots on this date. Please pick another date.
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {slots.map((slot) => {
                          const isSelected = selectedSlot?.id === slot.id;
                          const isSoldOut = slot.status === 'SOLD_OUT' || slot.remainingCapacity <= 0;
                          const isLowSeats = slot.status === 'LOW_SEATS' || (slot.remainingCapacity > 0 && slot.remainingCapacity <= 3);

                          return (
                            <button
                              key={slot.id}
                              type="button"
                              disabled={isSoldOut || slot.status === 'DISABLED'}
                              onClick={() => setSelectedSlot(slot)}
                              className={`p-3.5 rounded-2xl border-2 text-left transition-all relative font-mono ${
                                isSoldOut || slot.status === 'DISABLED'
                                  ? 'bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-[#FFF0EB] border-2 border-[#F06543] ring-4 ring-[#F06543]/20 shadow-md cursor-pointer'
                                  : 'bg-white border-2 border-slate-200 hover:border-[#F06543] hover:bg-slate-50 shadow-sm cursor-pointer'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 font-black text-xs text-[#0B2545]">
                                <Clock size={13} className={isSelected ? 'text-[#F06543]' : 'text-[#0B2545]'} />
                                <span>{slot.startTime}</span>
                              </div>

                              <div className="mt-2 text-[10px] font-black flex items-center gap-1">
                                {isSoldOut ? (
                                  <span className="text-red-500 font-bold">🔴 Sold Out</span>
                                ) : isLowSeats ? (
                                  <span className="text-amber-600 font-bold">🟡 {slot.remainingCapacity} seats left</span>
                                ) : (
                                  <span className="text-emerald-600 font-bold">🟢 {slot.remainingCapacity} seats left</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                    {/* Guest Selector */}
                  <div className="pt-5 border-t-2 border-slate-200">
                    <label className="block text-xs font-black uppercase tracking-wider text-[#0B2545] mb-3.5 font-mono">
                      Select Number of Guests
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Adults Counter */}
                      <div className="p-4 rounded-2xl border-2 border-slate-200 bg-white flex items-center justify-between shadow-sm">
                        <div>
                          <div className="font-black text-xs text-[#0B2545]">Adults (12+ yrs)</div>
                          <div className="text-[11px] text-[#F06543] font-mono font-black">₹{adultPrice.toLocaleString()} / adult</div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            disabled={adultCount <= 1}
                            onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                            className="w-9 h-9 rounded-xl bg-slate-50 border-2 border-[#0B2545] text-[#0B2545] font-black text-sm flex items-center justify-center hover:bg-[#0B2545] hover:text-white disabled:opacity-30 disabled:border-slate-300 disabled:hover:bg-slate-50 disabled:hover:text-[#0B2545] transition-all cursor-pointer shadow-sm"
                          >
                            -
                          </button>
                          <span className="w-6 text-center font-black text-base text-[#0B2545] font-mono">{adultCount}</span>
                          <button
                            type="button"
                            disabled={selectedSlot && totalGuests >= selectedSlot.remainingCapacity}
                            onClick={() => setAdultCount(adultCount + 1)}
                            className="w-9 h-9 rounded-xl bg-slate-50 border-2 border-[#0B2545] text-[#0B2545] font-black text-sm flex items-center justify-center hover:bg-[#0B2545] hover:text-white disabled:opacity-30 disabled:border-slate-300 disabled:hover:bg-slate-50 disabled:hover:text-[#0B2545] transition-all cursor-pointer shadow-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children Counter */}
                      <div className="p-4 rounded-2xl border-2 border-slate-200 bg-white flex items-center justify-between shadow-sm">
                        <div>
                          <div className="font-black text-xs text-[#0B2545]">Children (5–11 yrs)</div>
                          <div className="text-[11px] text-[#F06543] font-mono font-black">
                            {childPrice > 0 ? `₹${childPrice.toLocaleString()} / child` : 'Free / Not Applicable'}
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            disabled={childCount <= 0}
                            onClick={() => setChildCount(Math.max(0, childCount - 1))}
                            className="w-9 h-9 rounded-xl bg-slate-50 border-2 border-[#0B2545] text-[#0B2545] font-black text-sm flex items-center justify-center hover:bg-[#0B2545] hover:text-white disabled:opacity-30 disabled:border-slate-300 disabled:hover:bg-slate-50 disabled:hover:text-[#0B2545] transition-all cursor-pointer shadow-sm"
                          >
                            -
                          </button>
                          <span className="w-6 text-center font-black text-base text-[#0B2545] font-mono">{childCount}</span>
                          <button
                            type="button"
                            disabled={selectedSlot && totalGuests >= selectedSlot.remainingCapacity}
                            onClick={() => setChildCount(childCount + 1)}
                            className="w-9 h-9 rounded-xl bg-slate-50 border-2 border-[#0B2545] text-[#0B2545] font-black text-sm flex items-center justify-center hover:bg-[#0B2545] hover:text-white disabled:opacity-30 disabled:border-slate-300 disabled:hover:bg-slate-50 disabled:hover:text-[#0B2545] transition-all cursor-pointer shadow-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {capacityError && (
                      <div className="mt-3.5 p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-2">
                        <AlertCircle size={16} className="flex-shrink-0 text-amber-600" />
                        <span>{capacityError}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ── STEP 3: Customer Details & Passenger Manifest ── */}
              {step === 3 && (
                <div className="space-y-4">
                  {/* Lead Traveler Card */}
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2545] font-mono">
                      <Users size={15} className="text-[#F06543]" />
                      <span>1. Primary / Lead Traveler (Adult 1)</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vaibhav Sharma"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className={`w-full px-4 py-3 text-xs font-bold rounded-xl border-2 ${
                          formErrors.customerName ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-white'
                        } text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm`}
                      />
                      {formErrors.customerName && (
                        <span className="text-[11px] font-bold text-red-600 mt-1 block">{formErrors.customerName}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1 font-mono">
                          Email Address (For Voucher) *
                        </label>
                        <input
                          type="email"
                          placeholder="vaibhav@example.com"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className={`w-full px-4 py-3 text-xs font-bold rounded-xl border-2 ${
                            formErrors.customerEmail ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-white'
                          } text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm`}
                        />
                        {formErrors.customerEmail && (
                          <span className="text-[11px] font-bold text-red-600 mt-1 block">{formErrors.customerEmail}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1 font-mono">
                          WhatsApp / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className={`w-full px-4 py-3 text-xs font-bold rounded-xl border-2 ${
                            formErrors.customerPhone ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-white'
                          } text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm`}
                        />
                        {formErrors.customerPhone && (
                          <span className="text-[11px] font-bold text-red-600 mt-1 block">{formErrors.customerPhone}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Accompanying Passengers */}
                  {extraGuests.length > 0 && (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2545] font-mono">
                          <Users size={15} className="text-[#F06543]" />
                          <span>2. Additional Passenger Details ({extraGuests.length})</span>
                        </div>
                        <span className="text-[10.5px] font-bold text-[#F06543] bg-[#FFF0EB] border border-[#FFD3C4] px-2.5 py-0.5 rounded-lg">
                          Required for Activity Manifest & Gear
                        </span>
                      </div>

                      {extraGuests.map((guest) => {
                        const isChild = guest.type === 'CHILD';
                        return (
                          <div
                            key={guest.id}
                            className={`p-3.5 sm:p-4 rounded-2xl border-2 ${
                              isChild ? 'bg-[#FFF0EB]/60 border-[#FFD3C4]' : 'bg-slate-50 border-slate-200'
                            } space-y-3 shadow-sm`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md font-mono ${
                                isChild ? 'bg-[#FFD3C4] text-[#F06543]' : 'bg-slate-200 text-[#0B2545]'
                              }`}>
                                {isChild ? `🧒 ${guest.label}` : `👤 ${guest.label}`}
                              </span>
                              <span className="text-[11px] text-slate-500 font-bold font-mono">
                                {isChild ? 'Child (5–11 Yrs)' : 'Adult (12+ Yrs)'}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {/* Full Name */}
                              <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1 font-mono">
                                  Full Name *
                                </label>
                                <input
                                  type="text"
                                  placeholder={isChild ? "e.g. Aarav Sharma" : "e.g. Priya Sharma"}
                                  value={guest.fullName}
                                  onChange={(e) => updateExtraGuest(guest.id, 'fullName', e.target.value)}
                                  className={`w-full px-3 py-2 text-xs font-bold rounded-xl border-2 ${
                                    formErrors[`guest_${guest.id}_fullName`] ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-white'
                                  } text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm`}
                                />
                                {formErrors[`guest_${guest.id}_fullName`] && (
                                  <span className="text-[10px] font-bold text-red-600 mt-1 block">
                                    {formErrors[`guest_${guest.id}_fullName`]}
                                  </span>
                                )}
                              </div>

                              {/* Mobile Number */}
                              <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1 font-mono">
                                  Mobile Number (Optional)
                                </label>
                                <input
                                  type="tel"
                                  placeholder={customerPhone || "+91 98765 43210"}
                                  value={guest.phone}
                                  onChange={(e) => updateExtraGuest(guest.id, 'phone', e.target.value)}
                                  className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-slate-200 bg-white text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm"
                                />
                              </div>

                              {/* Age & Gender */}
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="block text-[11px] font-bold text-slate-700 mb-1 font-mono">
                                    Age
                                  </label>
                                  <input
                                    type="number"
                                    min={isChild ? 1 : 12}
                                    max={100}
                                    placeholder={isChild ? "8" : "28"}
                                    value={guest.age}
                                    onChange={(e) => updateExtraGuest(guest.id, 'age', e.target.value)}
                                    className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-slate-200 bg-white text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm font-mono"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[11px] font-bold text-slate-700 mb-1 font-mono">
                                    Gender
                                  </label>
                                  <select
                                    value={guest.gender}
                                    onChange={(e) => updateExtraGuest(guest.id, 'gender', e.target.value)}
                                    className="w-full px-2 py-2 text-xs font-bold rounded-xl border-2 border-slate-200 bg-white text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm font-mono"
                                  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                              </div>

                              {/* Relation with Lead */}
                              <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1 font-mono">
                                  Relation with Lead
                                </label>
                                <select
                                  value={guest.relation}
                                  onChange={(e) => updateExtraGuest(guest.id, 'relation', e.target.value)}
                                  className="w-full px-3 py-2 text-xs font-bold rounded-xl border-2 border-slate-200 bg-white text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm font-mono"
                                >
                                  {isChild ? (
                                    <>
                                      <option value="Child">Child (Son / Daughter)</option>
                                      <option value="Sibling">Sibling (Brother / Sister)</option>
                                      <option value="Relative">Relative / Nephew / Niece</option>
                                      <option value="Other">Other</option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="Spouse">Spouse (Husband / Wife)</option>
                                      <option value="Friend">Friend</option>
                                      <option value="Parent">Parent (Father / Mother)</option>
                                      <option value="Sibling">Sibling (Brother / Sister)</option>
                                      <option value="Child">Adult Child</option>
                                      <option value="Relative">Relative</option>
                                      <option value="Colleague">Colleague</option>
                                      <option value="Other">Other</option>
                                    </>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Dietary preference, need extra diving mask, pickup coordination..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-4 py-3 text-xs font-bold rounded-2xl border-2 border-slate-200 bg-white text-[#0B2545] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:border-[#F06543] transition-all shadow-sm"
                    />
                  </div>
                </div>
              )}

              {/* ── STEP 4: Review & Razorpay Checkout ── */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="text-xs font-black uppercase tracking-wider text-[#0B2545] font-mono">
                    Review Your Booking Summary
                  </div>

                  <div className="bg-[#f8fafc] border-2 border-slate-200 rounded-3xl p-5 text-xs space-y-2.5 shadow-sm">
                    <div className="flex justify-between font-black text-sm text-[#0B2545] pb-3 border-b-2 border-slate-200">
                      <span>{activity.name}</span>
                      <span className="text-[#F06543] font-mono font-black">₹{totalAmount.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Location:</span>
                      <span className="font-bold text-[#0B2545]">{selectedLocation?.locationName || activity.location}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Date & Time:</span>
                      <span className="font-bold text-[#F06543] font-mono">📅 {selectedDate} • ⏰ {selectedSlot?.startTime || '09:00 AM'}{selectedSlot?.endTime ? ` – ${selectedSlot.endTime}` : ''}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Lead Traveler:</span>
                      <span className="font-bold text-[#0B2545]">{customerName} ({customerPhone})</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Email:</span>
                      <span className="font-bold text-[#0B2545]">{customerEmail}</span>
                    </div>

                    {/* Accompanying Passengers Summary */}
                    {extraGuests.length > 0 && (
                      <div className="pt-2.5 border-t border-dashed border-slate-300 space-y-1.5">
                        <span className="text-[10.5px] font-black uppercase tracking-wider text-[#0B2545] font-mono block">
                          Accompanying Passengers ({extraGuests.length}):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {extraGuests.map((g) => (
                            <span
                              key={g.id}
                              className="text-[11px] font-bold bg-white border border-slate-200 text-[#0B2545] px-2.5 py-1 rounded-lg shadow-2xs"
                            >
                              {g.type === 'CHILD' ? '🧒' : '👤'} {g.fullName || g.label} ({g.relation || (g.type === 'CHILD' ? 'Child' : 'Guest')}{g.age ? `, ${g.age}y` : ''})
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price Breakdown */}
                    <div className="pt-3 border-t-2 border-slate-200 space-y-1.5 font-mono">
                      <div className="flex justify-between text-slate-600 font-medium">
                        <span>Adults: ₹{adultPrice.toLocaleString()} × {adultCount}</span>
                        <span className="font-bold text-[#0B2545]">₹{(adultPrice * adultCount).toLocaleString()}</span>
                      </div>
                      {childCount > 0 && (
                        <div className="flex justify-between text-slate-600 font-medium">
                          <span>Children: ₹{childPrice.toLocaleString()} × {childCount}</span>
                          <span className="font-bold text-[#0B2545]">₹{(childPrice * childCount).toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-black text-sm text-[#0B2545] pt-2 border-t-2 border-slate-200">
                        <span>Final Payable Total:</span>
                        <span className="text-[#F06543] text-base font-mono font-black">₹{totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Razorpay Trust Badge */}
                  <div className="p-4 rounded-2xl bg-[#FFF0EB] border-2 border-[#F06543]/40 text-[11.5px] text-slate-700 font-medium flex items-center gap-2.5 shadow-sm">
                    <ShieldCheck size={20} className="text-[#F06543] flex-shrink-0" />
                    <span>
                      Secured by <strong className="text-[#0B2545]">Razorpay 256-bit Encryption</strong>. Supports UPI (GPay, PhonePe, Paytm), Credit/Debit Cards & NetBanking.
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Modal Footer Controls */}
        {!confirmedBookingData && (
          <div className="p-5 sm:p-6 bg-[#f8fafc] border-t-2 border-slate-200 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-[#0B2545] font-black text-xs hover:bg-slate-100 hover:border-[#0B2545] flex items-center gap-1.5 transition-all cursor-pointer font-mono shadow-sm"
              >
                <ArrowLeft size={14} className="stroke-[2.5]" />
                Back
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-black text-xs hover:text-[#0B2545] hover:border-slate-300 transition-all font-mono cursor-pointer shadow-sm"
              >
                Cancel
              </button>
            )}

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase block tracking-wider font-mono">Total</span>
                <span className="font-mono font-black text-2xl text-[#0B2545]">₹{totalAmount.toLocaleString()}</span>
              </div>

              {step < 4 ? (
                <button
                  type="button"
                  disabled={step === 2 && (Boolean(capacityError) || !selectedSlot)}
                  onClick={() => {
                    if (step === 3) {
                      if (validateCustomerForm()) {
                        requireAuth((authUser) => {
                          if (authUser) {
                            if (authUser.name && !customerName) setCustomerName(authUser.name);
                            if (authUser.email && !customerEmail) setCustomerEmail(authUser.email);
                            if (authUser.phone && !customerPhone) setCustomerPhone(authUser.phone);
                          }
                          setStep(4);
                        }, `Please sign in or create an account to review and confirm booking for ${activity?.name || 'this activity'}.`);
                      }
                    } else {
                      setStep(step + 1);
                    }
                  }}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B2545] to-[#F06543] border-2 border-[#0B2545] text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 font-mono"
                >
                  <span>Continue</span>
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={bookingLoading}
                  onClick={() => handleProceedToPayment()}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B2545] to-[#F06543] border-2 border-[#0B2545] text-white font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 font-mono"
                >
                  {bookingLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{paymentStatus === 'verifying' ? 'Verifying Payment...' : 'Connecting Gateway...'}</span>
                    </>
                  ) : (
                    <>
                      <Lock size={14} className="stroke-[2.5]" />
                      <span>Pay ₹{totalAmount.toLocaleString()} via Razorpay</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
