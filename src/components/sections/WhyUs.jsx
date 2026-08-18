import React from 'react';
import { 
  ShieldCheck, Award, Clock, HeartHandshake, 
  Plane, Headphones, CreditCard, Sparkles 
} from 'lucide-react';

export default function WhyUs({ t }) {
  const icons = [Plane, ShieldCheck, Headphones, CreditCard];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* 100% Pure, Crystal-Clear Shahrisabz Oqsaroy Background - ZERO OPACITY & NO BLACK BORDERS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/landmarks/oqsaroy-shahrisabz.png"
          alt="Shahrisabz Oqsaroy Historic Monument"
          className="w-full h-full object-cover object-center scale-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.whyUs.title1} <br />
              <span className="text-[#10b981]">
                {t.whyUs.title2}
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              {t.whyUs.desc}
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.pillars.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#10b981] mb-6 group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-3 py-1 rounded-full inline-block mb-3">
                    {item.badge}
                  </span>

                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-1 text-xs font-bold text-[#10b981]">
                  <span>{t.whyUs.guaranteeTag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
