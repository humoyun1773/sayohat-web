import React from 'react';
import { 
  Plane, ShieldCheck, HeartHandshake, Headphones, 
  CreditCard, Award, CheckCircle2 
} from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Plane className="w-7 h-7 text-sky-600" />,
      title: 'To\'g\'ridan-to\'g\'ri & Arzon Aviachiptalar',
      desc: 'Uzbekistan Airways, Turkish Airlines, FlyDubai, Emirates va 200+ xalqaro aviakompaniyalar bilan rasmiy hamkorlik.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: '100% Rasmiy Viza va Sug\'urta',
      desc: 'Barcha davlatlar bo\'yicha elchixona talablariga mos to\'liq hujjatlar to\'plami, Shengen, AQSH va Dubay vizalari ko\'magi.'
    },
    {
      icon: <Headphones className="w-7 h-7 text-amber-600" />,
      title: '24/7 Shaxsiy Menejer va Gid',
      desc: 'Sayohat boshidan to qaytib kelguningizcha telefon, Telegram va WhatsApp orqali doimiy qo\'llab-quvvatlash.'
    },
    {
      icon: <CreditCard className="w-7 h-7 text-purple-600" />,
      title: 'Qulay To\'lov & Bo\'lib To\'lash',
      desc: 'Click, Payme, Uzum Bank, Visa, Mastercard, xalqaro o\'tkazmalar hamda ortiqcha foizsiz qulay muddatli to\'lovlar.'
    }
  ];

  return (
    <section id="why-us" className="py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Kafolatlangan Sifat va Ishonch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nega Minglab Sayohatchilar <br />
            <span className="text-sky-600">
              LOTOS FIELDni Tanlashadi?
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Biz faqatgina tur sotmaymiz — biz sizga butun umr yodda qoladigan unutilmas xotiralar va betakror qulaylik ulashamiz.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
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
