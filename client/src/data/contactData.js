// src/data/contactData.js
// ─────────────────────────────────────────────────────────────────────────────
// Contact & Travel Inquiry Data Configuration (Configurable Placeholders)

export const CONTACT_DATA = {
  phone: {
    display: '+91 91378 35433',
    value: '+919137835433',
    availability: 'Mon - Sun: 9:00 AM - 9:00 PM IST',
  },
  email: {
    display: 'info@andamantrails.com',
    support: 'bookings@andamantrails.com',
  },
  whatsapp: {
    display: '+91 91378 35433',
    number: '919137835433',
    defaultMessage: 'Hello Andaman Trails! I would like to plan a trip to the Andaman Islands.',
  },
  office: {
    address: 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair, Andaman & Nicobar — 744101',
    landmark: 'Opposite Jetty Gate',
    googleMapsUrl: 'https://maps.google.com/?q=Aberdeen+Bazaar+Port+Blair+Andaman+744101',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
  },
  socialLinks: {
    instagram: 'https://instagram.com/andamantrails',
    facebook: 'https://facebook.com/andamantrails',
    youtube: 'https://youtube.com/andamantrails',
    whatsapp: 'https://wa.me/919137835433',
  },
  contactCards: [
    {
      id: 'call-us',
      title: 'CALL US',
      desc: 'Get direct travel assistance from our island experts.',
      actionText: 'CALL NOW',
      actionType: 'phone',
      value: '+91 91378 35433',
      icon: 'PhoneCall',
    },
    {
      id: 'email-us',
      title: 'EMAIL US',
      desc: 'Send us your custom itinerary & travel requirements.',
      actionText: 'SEND EMAIL',
      actionType: 'email',
      value: 'info@andamantrails.com',
      icon: 'Mail',
    },
    {
      id: 'whatsapp-us',
      title: 'WHATSAPP',
      desc: 'Chat directly with our island vacation concierges.',
      actionText: 'CHAT NOW',
      actionType: 'whatsapp',
      value: '+91 91378 35433',
      icon: 'MessageSquare',
    },
    {
      id: 'visit-office',
      title: 'OFFICE',
      desc: 'Visit our island travel command desk in Port Blair.',
      actionText: 'GET DIRECTIONS',
      actionType: 'maps',
      value: 'Aberdeen Bazaar, Port Blair',
      icon: 'MapPin',
    },
  ],
  inquiryCategories: [
    { id: 'plan-a-trip', label: 'PLAN A TRIP', formValue: 'Plan A Trip' },
    { id: 'custom-package', label: 'CUSTOM PACKAGE', formValue: 'Custom Package' },
    { id: 'hotel-and-stay', label: 'HOTEL & STAY', formValue: 'Hotel & Stay' },
    { id: 'ferry-info', label: 'FERRY INFORMATION', formValue: 'Ferry Information' },
    { id: 'activities', label: 'ACTIVITIES', formValue: 'Activities' },
    { id: 'general-enquiry', label: 'GENERAL ENQUIRY', formValue: 'General Enquiry' },
  ],
  travelInterests: [
    'Beaches',
    'Scuba Diving',
    'Snorkeling',
    'Sea Walk',
    'Island Hopping',
    'Adventure',
    'Relaxation',
    'Family Trip',
    'Honeymoon',
  ],
  durations: [
    '3–4 Days',
    '5–6 Days',
    '7–8 Days',
    '9+ Days',
  ],
  trustPoints: [
    {
      id: 'local-experts',
      title: 'LOCAL TRAVEL EXPERTS',
      desc: 'Native island tour coordinators operating directly in Port Blair & Havelock.',
      icon: 'Compass',
    },
    {
      id: 'personalized',
      title: 'PERSONALIZED ITINERARIES',
      desc: '100% custom day-wise plans tailored to your pace, preferences, & budget.',
      icon: 'Sparkles',
    },
    {
      id: 'handpicked',
      title: 'HANDPICKED EXPERIENCES',
      desc: 'Curated PADI dive spots, private beachfront dining, and verified luxury resorts.',
      icon: 'Award',
    },
    {
      id: 'quick-support',
      title: 'QUICK SUPPORT',
      desc: 'Instant WhatsApp assistance and 24/7 on-ground dispatch team for ferry alerts.',
      icon: 'ShieldCheck',
    },
  ],
  faqs: [
    {
      q: 'How quickly will I receive a response?',
      a: 'Our travel experts respond within 15–30 minutes during working hours (9:00 AM – 7:00 PM IST) and within 2 hours on WhatsApp 24/7.',
    },
    {
      q: 'Can I customize my trip?',
      a: 'Yes! Every Andaman Trails itinerary is 100% customizable. You can adjust dates, hotels, islands, scuba diving sessions, and private transfers.',
    },
    {
      q: 'Can you help with ferry bookings?',
      a: 'Absolutely. We provide direct VIP seat reservations for high-speed catamarans including Nautika, Makruzz, and Green Ocean with instant e-tickets.',
    },
    {
      q: 'Can I change my travel dates after booking?',
      a: 'Yes, we offer flexible rescheduling policies up to 7 days before your departure date, subject to hotel and ferry availability.',
    },
    {
      q: 'Do you offer honeymoon packages?',
      a: 'We specialize in luxury honeymoon packages with candlelit beach dinners, private pool villas, rose petal decor, and romantic bioluminescence kayaking.',
    },
    {
      q: 'Can I plan a family trip with kids and senior citizens?',
      a: 'Yes, we design comfortable, low-intensity family itineraries with private AC vehicles, priority ferry boarding, and senior-friendly beach spots.',
    },
  ],
};
