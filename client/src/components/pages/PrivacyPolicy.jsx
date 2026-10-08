import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#0B2545] pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 border-b border-[#ebded2] pb-10">
          <Shield className="w-12 h-12 text-[#F06543] mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-[#0B2545]">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: August 2026</p>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-[#ffffff] border border-[#ebded2] backdrop-blur-[20px] space-y-10 shadow-[0_8px_30px_rgba(11,37,69,0.06)]">
          
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-[#F06543]" />
              <h2 className="text-2xl font-bold text-[#0B2545]">1. Information We Collect</h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              At Andaman Trails, your privacy is of utmost importance. We collect personal data to provide and improve our luxury travel services. This may include:
            </p>
            <ul className="space-y-3 ml-4 mt-4">
              {['Name, email address, phone number', 'Travel preferences and itineraries', 'Billing and payment details', 'Passport or government ID details (for bookings)'].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#F06543] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-[#F06543]" />
              <h2 className="text-2xl font-bold text-[#0B2545]">2. How We Use Your Data</h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              We use the collected data exclusively to facilitate your travel arrangements, process payments securely, communicate booking updates, and personalize your experience in the Andaman Islands. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-4">3. Data Security</h2>
            <p className="text-slate-700 font-medium leading-relaxed">
              Our systems utilize industry-standard encryption protocols (SSL/TLS) to protect your sensitive information during transmission. We implement robust access controls to ensure your data is accessible only to authorized personnel.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
}
