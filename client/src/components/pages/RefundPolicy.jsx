import React from 'react';
import { RefreshCcw, Ship, CloudLightning, CreditCard, Clock, AlertCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#FAF4EE] text-[#0B2545] pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#FFF0EB] border border-[#FFD3C4] mb-6 shadow-md">
            <RefreshCcw className="w-12 h-12 text-[#F06543]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-[#0B2545]">
            Refund & Cancellation Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Clear, transparent guidelines for cancellations and refunds to ensure a worry-free experience.
          </p>
        </div>

        <div className="bg-[#ffffff] border border-[#ebded2] shadow-xl rounded-3xl p-6 sm:p-8 md:p-12 space-y-12 sm:space-y-16">
          
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-[#FAF4EE] border border-[#ebded2]">
                <Clock className="w-6 h-6 text-[#F06543]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">1. Cancellation Timelines</h2>
            </div>
            
            {/* Responsive Table via Cards on Mobile */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-[#ebded2] bg-[#FAF4EE]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f5ede4] border-b border-[#ebded2]">
                    <th className="py-5 px-6 font-extrabold text-[#0B2545] uppercase tracking-wider text-sm">Days Prior to Arrival</th>
                    <th className="py-5 px-6 font-extrabold text-[#0B2545] uppercase tracking-wider text-sm">Cancellation Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ebded2]">
                  <tr className="hover:bg-[#FFF0EB] transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">30+ Days</td>
                    <td className="py-4 px-6 font-extrabold text-emerald-700">10% of total cost</td>
                  </tr>
                  <tr className="hover:bg-[#FFF0EB] transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">15 to 29 Days</td>
                    <td className="py-4 px-6 font-extrabold text-[#F06543]">25% of total cost</td>
                  </tr>
                  <tr className="hover:bg-[#FFF0EB] transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">7 to 14 Days</td>
                    <td className="py-4 px-6 font-extrabold text-amber-700">50% of total cost</td>
                  </tr>
                  <tr className="hover:bg-rose-50/50 transition-colors bg-rose-50/20">
                    <td className="py-4 px-6 font-bold text-slate-800">Less than 7 Days</td>
                    <td className="py-4 px-6 font-extrabold text-rose-700">100% (No Refund)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile View Cards */}
            <div className="sm:hidden space-y-4">
              {[
                { time: "30+ Days", fee: "10% of total cost", color: "text-emerald-700" },
                { time: "15 to 29 Days", fee: "25% of total cost", color: "text-[#F06543]" },
                { time: "7 to 14 Days", fee: "50% of total cost", color: "text-amber-700" },
                { time: "Less than 7 Days", fee: "100% (No Refund)", color: "text-rose-700" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-[#ebded2] bg-[#FAF4EE]">
                  <span className="font-bold text-slate-900">{item.time}</span>
                  <span className={`font-black ${item.color}`}>{item.fee}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-[#FAF4EE] border border-[#ebded2]">
                <Ship className="w-6 h-6 text-[#F06543]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">2. Ferry Refund Rules</h2>
            </div>
            <div className="bg-[#FAF4EE] p-5 sm:p-6 rounded-2xl border border-[#ebded2]">
              <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                Private ferry tickets (Makruzz, Green Ocean, Nautika, etc.) are subject to the respective operators' cancellation policies. Generally, no refunds are provided for ferry tickets cancelled within 48 hours of departure. In case the operator cancels the ferry due to technical reasons, a <strong className="text-[#0B2545] font-extrabold">full refund</strong> for the ticket will be provided.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-[#FAF4EE] border border-[#ebded2]">
                <CloudLightning className="w-6 h-6 text-[#F06543]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">3. Monsoon & Weather Guarantees</h2>
            </div>
            <div className="bg-[#FAF4EE] p-5 sm:p-6 rounded-2xl border border-[#ebded2]">
              <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                The Andaman Islands are subject to tropical weather. If activities (e.g., Scuba Diving, Sea Walk) or boat rides are cancelled by authorities due to bad weather or cyclones, we will attempt to reschedule. If rescheduling is not possible, a <strong className="text-[#0B2545] font-extrabold">100% refund</strong> for that specific activity will be initiated automatically.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-[#FAF4EE] border border-[#ebded2]">
                <CreditCard className="w-6 h-6 text-[#F06543]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">4. Instant Refund Processing</h2>
            </div>
            <div className="bg-[#FAF4EE] p-5 sm:p-6 rounded-2xl border border-[#ebded2]">
              <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                Approved refunds are processed instantly from our end. However, depending on your bank and payment method, it may take <strong>5 to 7 business days</strong> for the funds to reflect in your account. You will receive a transaction reference number via email once the refund is initiated.
              </p>
            </div>
          </section>

          <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-[#FFF0EB] border border-[#FFD3C4]">
            <AlertCircle className="w-6 h-6 text-[#F06543] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-800 font-medium">
              For any disputes or custom queries regarding cancellations, please contact our support team at <a href="mailto:support@andamantrails.com" className="text-[#0B2545] font-bold underline hover:text-[#F06543]">support@andamantrails.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
