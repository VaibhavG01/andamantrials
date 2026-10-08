import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "What is the best time to visit the Andaman Islands?", a: "The best time to visit is between October and May when the weather is pleasant, ideal for sightseeing and water sports." },
  { q: "Do Indians need a passport to visit Andaman?", a: "No, Indian citizens do not require a passport. A valid government ID like Aadhar or Voter ID is sufficient." },
  { q: "Are water sports safe in Andaman?", a: "Yes, all water sports operators follow strict safety guidelines provided by the tourism department. Certified guides accompany you at all times." },
  { q: "How is the internet connectivity on the islands?", a: "Internet connectivity has improved significantly but can still be spotty in remote areas. Major networks like Airtel, Jio, and BSNL work best in Port Blair and Havelock." },
  { q: "Can I customize my tour package?", a: "Absolutely! We specialize in bespoke luxury itineraries tailored to your preferences, pace, and interests." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0B2545] pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-[#F06543] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">Find answers to common queries about traveling to the Andaman Islands.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-[#ffffff] border-[#F06543] shadow-[0_0_15px_rgba(22,217,255,0.1)]' 
                  : 'bg-[#ffffff] border-[#e2e8f0] hover:border-[#e2e8f0]'
              }`}
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-lg  text-slate-800  pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F06543] flex-shrink-0 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-700 flex-shrink-0 transition-transform" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-700 font-medium leading-relaxed pt-3 border-t border-[#e2e8f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
