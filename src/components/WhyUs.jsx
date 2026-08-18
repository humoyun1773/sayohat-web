import React from 'react';
import { 
  Plane, ShieldCheck, Headphones, 
  CreditCard, Award 
} from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Plane className="w-7 h-7 text-[#10b981]" />,
      title: 'To\'g\'ridan-to\'g\'ri & Arzon Aviachiptalar',
      desc: 'Uzbekistan Airways, Turkish Airlines, FlyDubai, Emirates va 200+ xalqaro aviakompaniyalar bilan rasmiy hamkorlik.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#10b981]" />,
      title: '100% Rasmiy Viza va Sug\'urta',
      desc: 'Barcha davlatlar bo\'yicha elchixona talablariga mos to\'liq hujjatlar to\'plami, Shengen, AQSH va Dubay vizalari ko\'magi.'
    },
    {
      icon: <Headphones className="w-7 h-7 text-[#10b981]" />,
      title: '24/7 Shaxsiy Menejer va Gid',
      desc: 'Sayohat boshidan to qaytib kelguningizcha telefon, Telegram va WhatsApp orqali doimiy qo\'llab-quvvatlash.'
    },
    {
      icon: <CreditCard className="w-7 h-7 text-[#10b981]" />,
      title: 'Qulay To\'lov & Bo\'lib To\'lash',
      desc: 'Click, Payme, Uzum Bank, Visa, Mastercard, xalqaro o\'tkazmalar hamda ortiqcha foizsiz qulay muddatli to\'lovlar.'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-200">
      
      {/* 100% Pure, Razor-Sharp High Altitude Airplane Wing Background Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517400508447-88cca5584458?auto=format&fit=crop&w=2600&q=100"
          alt="Airplane Wing in Clouds"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-950/45"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Kafolatlangan Sifat va Ishonch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Nega Minglab Sayohatchilar <br />
              <span className="text-[#10b981]">
                LOTOS FIELDni Tanlashadi?
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Biz faqatgina tur sotmaymiz — biz sizga butun umr yodda qoladigan unutilmas xotiralar va betakror qulaylik ulashamiz.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
