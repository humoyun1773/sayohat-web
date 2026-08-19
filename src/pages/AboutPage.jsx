import React from 'react';
import { useApp } from '../context/AppContext';
import WhyUs from '../components/sections/WhyUs';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Bus, Award, Users, 
  Clock, MapPin, Sparkles, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const { lang, t, openContactModal } = useApp();

  const stats = [
    { number: '30,000+', label: "Mamnun Sayohatchilar", desc: "5 yil davomida O'zbekiston bo'ylab xizmat ko'rsatdik" },
    { number: '8+', label: "Asosiy Yo'nalishlar", desc: "Samarqand, Buxoro, Xiva, Termiz, Zomin va b." },
    { number: '100%', label: "All-Inclusive Xizmat", desc: "Transport + Mehmonxona + 3 mahal ovqat + Gid" },
    { number: '4.99 ★', label: "Mijozlar Bahosi", desc: "Eng yuqori qulaylik va xavfsizlik darajasi" },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16">
      
      {/* Header Banner */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block shadow-xs">
            Kompaniya Haqida
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            LOTOS FIELD — O'zbekiston Bo'ylab Rasmiy Sayohat Operatoringiz
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Biz har bir sayohatchiga shunchaki yo'l chiptasi emas, balki qulaylik, xavfsizlik va unutilmas xotiralarga to'la 5 kunlik mukammal dam olishni taqdim etamiz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">
                {item.number}
              </div>
              <div className="text-sm font-bold text-slate-900">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Us Core Features */}
      <WhyUs
        t={t}
        lang={lang}
      />

      {/* Our Standards & Guarantees */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-black tracking-widest text-emerald-400 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block">
                Rasmiy Standartlar
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Har Bir Sayohatimizda 100% Sifat va Xavfsizlik Kafolati
              </h2>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                LOTOS FIELD xalqaro turizm standartlariga to'liq javob beruvchi litsenziyalangan tur operator hisoblanadi. Bizning transport parkimiz muntazam texnik ko'rikdan o'tkaziladi va har bir haydovchimiz 10 yildan ortiq tajribaga ega.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Konditsioner va Wi-Fi bilan jihozlangan lyuks sayyohlik avtobuslari</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Tarixiy markazlarda joylashgan qulay 4★ mehmonxonalar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Milliy taomlar, to'y oshi va sifatli 3 mahal restoranda ovqatlanish</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>24/7 shaxsiy kurator va professional tarixchi gid hamrohligi</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/tours"
                  className="py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                >
                  <span>Turlarni Ko'rish</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={openContactModal}
                  className="py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20 cursor-pointer"
                >
                  Savollar bormi? Bog'lanish
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 h-80 sm:h-96">
              <img
                src="/images/landmarks/samarkand-registan.png"
                alt="LOTOS FIELD Sayohat Kafolati"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider block">
                  LOTOS FIELD
                </span>
                <span className="text-lg font-black text-white">
                  O'zbekistonning eng go'zal go'shalariga ishonchli sayohat!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
