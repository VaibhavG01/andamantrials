import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../api/apiClient';
import { Search, UserPlus, Info, Check, Printer, Mail, Download, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ReceptionBookingsCreate({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState('STAY');

  // Customer State
  const [customerSearch, setCustomerSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerResults, setCustomerResults] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', phone: '', email: '' });
  const [isCreatingCustomer, setIsCreatingCustomer] = useState(false);

  // Service State
  const [destinations, setDestinations] = useState([]);
  const [selectedDestId, setSelectedDestId] = useState('');
  const [stays, setStays] = useState([]);
  const [selectedStayId, setSelectedStayId] = useState('');
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalGuests, setTotalGuests] = useState(1);

  // Ferries / Cruises lists
  const [ferries, setFerries] = useState([]);
  const [cruiseSchedules, setCruiseSchedules] = useState([]);
  const [selectedFerryId, setSelectedFerryId] = useState('');
  const [selectedCruiseId, setSelectedCruiseId] = useState('');
  const [selectedScheduleId, setSelectedScheduleId] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  // Summary State
  const [priceSummary, setPriceSummary] = useState({ base: 0, taxes: 0, discount: 0, total: 0 });
  const [paymentMethod, setPaymentMethod] = useState('CASH');
  const [paymentStatus, setPaymentStatus] = useState('PAID');

  // Result state
  const [createdBooking, setCreatedBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load base details
  useEffect(() => {
    const loadServices = async () => {
      try {
        const destRes = await apiClient('/destinations');
        setDestinations(destRes.data || []);
        
        const staysRes = await apiClient('/reception/stays/availability');
        setStays(staysRes.data || []);

        const ferriesRes = await apiClient('/reception/ferries/availability');
        setFerries(ferriesRes.data || []);

        const cruisesRes = await apiClient('/reception/cruises/availability');
        setCruiseSchedules(cruisesRes.data || []);
      } catch (e) {
        console.warn('Failed to load services metadata:', e.message);
      }
    };
    loadServices();
  }, []);

  // Update Rooms when stay changes
  useEffect(() => {
    if (selectedStayId) {
      const match = stays.find(s => s.id === Number(selectedStayId));
      setRooms(match?.rooms || []);
    } else {
      setRooms([]);
    }
  }, [selectedStayId, stays]);

  // Customer search lookup
  const lookupCustomer = async (e) => {
    e.preventDefault();
    if (!customerSearch.trim()) return;
    try {
      const res = await apiClient(`/reception/customers?search=${customerSearch}`);
      setCustomerResults(res.data || []);
    } catch (e) {
      console.warn('Failed to lookup customer:', e);
    }
  };

  const handleCreateCustomer = async (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.email) return;
    try {
      const res = await apiClient('/reception/customers', {
        method: 'POST',
        body: JSON.stringify(newCustomer)
      });
      setSelectedCustomer(res.data);
      setIsCreatingCustomer(false);
      setStep(3); // proceed
    } catch (err) {
      alert('Error creating customer: ' + err.message);
    }
  };

  // Calculate pricing summary dynamically when room/schedule changes
  const calculatePricing = () => {
    let base = 0;
    if (bookingType === 'STAY' && selectedRoomId) {
      const rm = rooms.find(r => r.id === Number(selectedRoomId));
      base = rm ? parseFloat(rm.price) : 0;
    } else if (bookingType === 'FERRY' && selectedScheduleId) {
      const sc = ferries.find(f => f.id === Number(selectedScheduleId));
      base = sc ? parseFloat(sc.price) * totalGuests : 0;
    } else if (bookingType === 'CRUISE' && selectedScheduleId) {
      const cs = cruiseSchedules.find(c => c.id === Number(selectedScheduleId));
      base = cs ? parseFloat(cs.price) * totalGuests : 0;
    }
    const taxes = Math.round(base * 0.18); // 18% GST standard
    setPriceSummary({
      base,
      taxes,
      discount: 0,
      total: base + taxes
    });
  };

  useEffect(() => {
    calculatePricing();
  }, [bookingType, selectedRoomId, selectedScheduleId, totalGuests, rooms, ferries, cruiseSchedules]);

  const submitBooking = async () => {
    setLoading(true);
    try {
      const payload = {
        bookingType,
        customerName: selectedCustomer.name,
        customerEmail: selectedCustomer.email,
        customerPhone: selectedCustomer.phone || 'Walk-In',
        bookingDate: bookingDate || new Date().toISOString().split('T')[0],
        totalGuests,
        totalAmount: priceSummary.total,
        paymentStatus,
        paymentMethod,
        checkInDate,
        checkOutDate,
        stayId: bookingType === 'STAY' ? selectedStayId : null,
        roomId: bookingType === 'STAY' ? selectedRoomId : null,
        scheduleId: (bookingType === 'FERRY' || bookingType === 'CRUISE') ? selectedScheduleId : null,
        ferryId: bookingType === 'FERRY' ? selectedFerryId : null,
        cruiseId: bookingType === 'CRUISE' ? selectedCruiseId : null
      };

      const res = await apiClient('/reception/bookings', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      setCreatedBooking(res.data);
      setStep(6);
    } catch (err) {
      alert('Failed to submit booking: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl font-extrabold  text-[#0B2545]  uppercase">Walk-in Booking Wizard</h1>
        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Fast desk scheduling reservation system.</p>
      </div>

      {/* Steps Indicator */}
      <div className="flex justify-between items-center bg-[#ffffff] border border-[#e2e8f0] p-3 rounded-2xl text-[10px] font-black uppercase tracking-wider">
        {['Select Type', 'Guest Identity', 'Choose Service', 'Price Summary', 'Collect Payment', 'Manifest Confirmed'].map((sName, idx) => (
          <div key={idx} className={`flex items-center gap-2 ${step === idx + 1 ? 'text-[#F06543]' : step > idx + 1 ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[9px] ${
              step === idx + 1 ? 'border-[#F06543] bg-[rgba(33,230,193,0.1)]' : 'border-slate-700'
            }`}>
              {idx + 1}
            </span>
            <span className="hidden sm:inline">{sName}</span>
          </div>
        ))}
      </div>

      {/* STEP 1: Select Type */}
      {step === 1 && (
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-6 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#F06543]">Select Booking Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'STAY', title: 'Hotel / Resort Stay', desc: 'Secure rooms at luxury properties.' },
              { id: 'FERRY', title: 'Island Ferry Line', desc: 'Reserve seats on Nautika/Makruzz.' },
              { id: 'CRUISE', title: 'Private Ocean Cruise', desc: 'Luxury catamaran yacht charter.' }
            ].map(card => (
              <div 
                key={card.id}
                onClick={() => setBookingType(card.id)}
                className={`p-6 rounded-2xl border cursor-pointer hover:border-[#F06543]/40 transition-all ${
                  bookingType === card.id ? 'bg-[rgba(33,230,193,0.06)] border-[#F06543] shadow-lg' : 'bg-white/30 border-[#e2e8f0]'
                }`}
              >
                <h4 className="text-sm font-extrabold  text-[#0B2545]  uppercase">{card.title}</h4>
                <p className="text-xs text-slate-500 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-4">
            <button onClick={() => setStep(2)} className="flex items-center gap-1.5 px-6 py-3 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl shadow-lg">
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Customer Select */}
      {step === 2 && (
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#F06543]">Step 2: Guest Account Info</h3>
          
          {!selectedCustomer && !isCreatingCustomer && (
            <div className="space-y-6">
              <form onSubmit={lookupCustomer} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Lookup guest by name, phone or email..."
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2.5 px-4 text-xs  text-slate-800  placeholder-slate-500"
                />
                <button type="submit" className="px-5 py-2.5 bg-[#e2e8f0] text-[#F06543] font-bold text-xs uppercase rounded-xl hover:bg-slate-100">
                  Search
                </button>
              </form>

              {customerResults.length > 0 && (
                <div className="border border-[#e2e8f0] rounded-2xl p-4 space-y-2 max-h-60 overflow-y-auto">
                  {customerResults.map(c => (
                    <div 
                      key={c.id}
                      onClick={() => {
                        setSelectedCustomer(c);
                        setStep(3);
                      }}
                      className="p-3 bg-white/35 border border-slate-800 rounded-xl flex justify-between items-center hover:border-[#F06543]/40 cursor-pointer text-xs"
                    >
                      <span className="font-bold  text-[#0B2545] ">{c.name}</span>
                      <span className="text-slate-500">{c.phone} | {c.email}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-center py-4">
                <span className="text-xs text-slate-500">Guest is not in database?</span>
                <button onClick={() => setIsCreatingCustomer(true)} className="ml-2 text-xs font-black text-[#F06543] hover:underline uppercase">
                  + Add New Walk-in Customer
                </button>
              </div>
            </div>
          )}

          {isCreatingCustomer && (
            <form onSubmit={handleCreateCustomer} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input
                    type="text"
                    required
                    value={newCustomer.name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={newCustomer.phone}
                    onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input
                    type="email"
                    required
                    value={newCustomer.email}
                    onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsCreatingCustomer(false)} className="px-5 py-2.5 bg-white border border-slate-700  text-slate-800  rounded-xl text-xs">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 bg-[#F06543] text-white hover:bg-[#0b7c71] font-bold rounded-xl text-xs">
                  Create & Select
                </button>
              </div>
            </form>
          )}

          {selectedCustomer && (
            <div className="p-4 bg-white/35 border border-[#F06543]/25 rounded-2xl flex justify-between items-center text-xs">
              <div>
                <span className="text-[10px] font-bold text-[#F06543] uppercase block">Selected Guest</span>
                <span className="font-bold  text-[#0B2545]  text-sm">{selectedCustomer.name}</span>
                <span className="text-slate-500 ml-3">{selectedCustomer.phone} | {selectedCustomer.email}</span>
              </div>
              <button onClick={() => setSelectedCustomer(null)} className="text-[10px] text-red-400 font-bold uppercase">
                Change
              </button>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
            <button onClick={() => setStep(1)} className="flex items-center gap-1.5 px-4 py-2 border border-slate-700 text-slate-300 rounded-xl text-xs font-bold">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            {selectedCustomer && (
              <button onClick={() => setStep(3)} className="flex items-center gap-1.5 px-6 py-3 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl">
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* STEP 3: Select Service Details */}
      {step === 3 && (
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#F06543]">Step 3: Select Service Details</h3>

          {bookingType === 'STAY' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Resort / Stay</label>
                  <select
                    value={selectedStayId}
                    onChange={(e) => setSelectedStayId(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  >
                    <option value="">Choose resort...</option>
                    {stays.map(s => (
                      <option key={s.id} value={s.id}>{s.name} ({s.rooms?.length || 0} Room Types)</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Room Type</label>
                  <select
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    disabled={!selectedStayId}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800  disabled:opacity-50"
                  >
                    <option value="">Choose room...</option>
                    {rooms.map(r => (
                      <option key={r.id} value={r.id}>{r.name} - ₹{Number(r.price).toLocaleString('en-IN')}/night (Vacant: {r.availableRooms})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Check-in Date</label>
                  <input
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Check-out Date</label>
                  <input
                    type="date"
                    required
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Guests</label>
                  <input
                    type="number"
                    min="1"
                    value={totalGuests}
                    onChange={(e) => setTotalGuests(Number(e.target.value))}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
              </div>
            </div>
          )}

          {bookingType === 'FERRY' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Scheduled Route</label>
                  <select
                    value={selectedScheduleId}
                    onChange={(e) => setSelectedScheduleId(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  >
                    <option value="">Choose schedule...</option>
                    {ferries.map(f => (
                      <option key={f.id} value={f.id}>
                        {f.ferry?.name || 'Ferry'} ({f.departureTime}) - ₹{f.price}/passenger (Seats: {f.availableSeats})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Passengers</label>
                <input
                  type="number"
                  min="1"
                  value={totalGuests}
                  onChange={(e) => setTotalGuests(Number(e.target.value))}
                  className="w-full mt-2 sm:w-1/3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                />
              </div>
            </div>
          )}

          {bookingType === 'CRUISE' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Select Cruise Charter</label>
                  <select
                    value={selectedScheduleId}
                    onChange={(e) => setSelectedScheduleId(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  >
                    <option value="">Choose cruise schedule...</option>
                    {cruiseSchedules.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.cruise?.name || 'Cruise'} ({c.departureTime}) - ₹{c.price}/guest (Seats: {c.availableSeats})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Charter Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full mt-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Guests</label>
                <input
                  type="number"
                  min="1"
                  value={totalGuests}
                  onChange={(e) => setTotalGuests(Number(e.target.value))}
                  className="w-full mt-2 sm:w-1/3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl py-2 px-3 text-xs  text-slate-800 "
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
            <button onClick={() => setStep(2)} className="flex items-center gap-1.5 px-4 py-2 border border-slate-700 text-slate-300 rounded-xl text-xs font-bold">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button onClick={() => setStep(4)} className="flex items-center gap-1.5 px-6 py-3 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl">
              <span>Review Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Price Summary */}
      {step === 4 && (
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#F06543]">Step 4: Invoice & Pricing Breakdown</h3>

          <div className="bg-slate-50/40 p-5 rounded-2xl space-y-3.5 text-xs">
            <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-500">
              <span>Base Rate Price</span>
              <span className="font-bold  text-[#0B2545] ">₹{priceSummary.base.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-500">
              <span>Taxes (18% GST)</span>
              <span className="font-bold  text-[#0B2545] ">₹{priceSummary.taxes.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-500">
              <span>Discount</span>
              <span className="font-bold  text-[#0B2545] ">₹{priceSummary.discount}</span>
            </div>
            <div className="flex justify-between pt-2 text-sm font-black uppercase text-[#F06543]">
              <span>Grand Total Amount</span>
              <span>₹{priceSummary.total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
            <button onClick={() => setStep(3)} className="flex items-center gap-1.5 px-4 py-2 border border-slate-700 text-slate-300 rounded-xl text-xs font-bold">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button onClick={() => setStep(5)} className="flex items-center gap-1.5 px-6 py-3 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl">
              <span>Go to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Payment */}
      {step === 5 && (
        <div className="bg-[#ffffff] border border-[#e2e8f0] p-6 rounded-3xl space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#F06543]">Step 5: Record Payment Receipt</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Payment Method</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {['CASH', 'CARD', 'UPI', 'PAY LATER'].map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setPaymentMethod(m)}
                    className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                      paymentMethod === m ? 'bg-[#F06543] text-white hover:bg-[#0b7c71]' : 'bg-[#f8fafc] border border-slate-800 text-slate-400'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Payment Status</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {['PAID', 'PENDING'].map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setPaymentStatus(s)}
                    className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                      paymentStatus === s ? 'bg-[#F06543] text-white hover:bg-[#0b7c71]' : 'bg-[#f8fafc] border border-slate-800 text-slate-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
            <button onClick={() => setStep(4)} className="flex items-center gap-1.5 px-4 py-2 border border-slate-700 text-slate-300 rounded-xl text-xs font-bold">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button 
              onClick={submitBooking} 
              disabled={loading}
              className="flex items-center gap-1.5 px-6 py-3 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl disabled:opacity-50"
            >
              <span>{loading ? 'Creating Manifest...' : 'Confirm Reservation'}</span>
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: Confirmation Screen */}
      {step === 6 && createdBooking && (
        <div className="bg-[#ffffff] border border-[#F06543]/25 p-8 rounded-3xl space-y-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[rgba(33,230,193,0.1)] border border-[#F06543]/30 flex items-center justify-center mx-auto text-[#F06543]">
            <Check className="w-6 h-6" />
          </div>

          <h2 className="text-xl font-extrabold  text-[#0B2545]  uppercase">Reservation Booking Confirmed!</h2>
          <div className="max-w-md mx-auto bg-slate-50/40 p-5 rounded-2xl space-y-2.5 text-xs text-left">
            <div className="flex justify-between">
              <span className="text-slate-500">Booking Number:</span>
              <span className="font-bold text-[#F06543] text-sm">{createdBooking.bookingNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Guest Name:</span>
              <span className="font-bold  text-[#0B2545] ">{createdBooking.customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Total Paid Amount:</span>
              <span className="font-bold text-[#F06543]">₹{Number(createdBooking.totalAmount).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4">
            <button onClick={handlePrint} className="flex items-center gap-1.5 px-4.5 py-2.5 bg-slate-100  text-[#0B2545]  font-bold text-xs uppercase rounded-xl hover:bg-slate-700">
              <Printer className="w-4 h-4" />
              <span>Print Invoice</span>
            </button>
            <button onClick={() => onNavigate('/reception/dashboard')} className="flex items-center gap-1.5 px-6 py-2.5 bg-[#F06543] text-white hover:bg-[#0b7c71] font-black text-xs uppercase rounded-xl">
              <span>Finish</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
