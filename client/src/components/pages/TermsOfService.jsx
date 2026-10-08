import React from 'react';
import { Scale, FileCheck, AlertCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#0B2545] pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 border-b border-[#ebded2] pb-10">
          <Scale className="w-12 h-12 text-[#F06543] mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-[#0B2545]">Terms of Service</h1>
          <p className="text-slate-600">Effective Date: August 9, 2026</p>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-[#ffffff] border border-[#ebded2] backdrop-blur-[20px] space-y-10 shadow-[0_8px_30px_rgba(11,37,69,0.06)]">
          
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileCheck className="w-6 h-6 text-[#F06543]" />
              <h2 className="text-2xl font-bold text-[#0B2545]">1. Booking and Payments</h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              A minimum deposit of 50% is required to confirm a booking with Andaman Trails. The remaining balance must be cleared 15 days prior to arrival. All rates are quoted in INR and are subject to change based on availability and season.
            </p>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-[#F06543]" />
              <h2 className="text-2xl font-bold text-[#0B2545]">2. Cancellation Policy</h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              We understand that plans can change. Our cancellation policy is structured as follows:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-700 font-medium ml-4 marker:text-[#F06543]">
              <li>More than 30 days before arrival: <strong className="text-[#0B2545] font-bold">10% cancellation fee</strong></li>
              <li>15 to 30 days before arrival: <strong className="text-[#0B2545] font-bold">50% cancellation fee</strong></li>
              <li>Less than 15 days before arrival: <strong className="text-[#0B2545] font-bold">100% cancellation fee</strong> (No refund)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-4">3. Liability</h2>
            <p className="text-slate-700 font-medium leading-relaxed">
              Andaman Trails acts strictly as an agent for hotels, transport operators, and local vendors. We shall not be held liable for any delays, alterations in program, or expenses incurred directly or indirectly due to natural hazards, flight cancellations, accidents, or machinery breakdown.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
}
