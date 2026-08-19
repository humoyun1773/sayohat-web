import React from 'react';
import { useApp } from '../context/AppContext';
import WhyUs from '../components/sections/WhyUs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Bus, Award, Users, 
  Clock, MapPin, Sparkles, CheckCircle2, ArrowRight,
  Shield, Check, Star, BedDouble, Utensils
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
    <div className="pt-28 sm:pt-36 pb-20 space-y-16 bg-[#fafbfc]">
      
      {/* Header Banner */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block shadow-xs">
            Kompaniya Haqida
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            LOTOS FIELD — O'zbekiston Bo'ylab Rasmiy Sayohat Operatoringiz
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Biz har bir sayohatchiga shunchaki yo'l chiptasi emas, balki qulaylik, xavfsizlik va unutilmas xotiralarga to'la 5 kunlik mukammal dam olishni taqdim etamiz.
          </p>
        </motion.div>

        {/* Stats Grid with Animation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-slate-200 text-center space-y-2 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">
                {item.number}
              </div>
              <div className="text-sm font-bold text-slate-900">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Us Core Features */}
      <WhyUs
        t={t}
        lang={lang}
      />

      {/* Our Standards & Guarantees - Clean Gradient (No Background Photo) */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-6">
              <span className="text-xs uppercase font-black tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block">
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
                  className="py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 hover:scale-105"
                >
                  <span>Turlarni Ko'rish</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={openContactModal}
                  className="py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20 cursor-pointer hover:scale-105"
                >
                  Savollar bormi? Bog'lanish
                </button>
              </div>
            </div>

            {/* Right Feature Panel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="text-xl font-black text-white">100%</div>
                <div className="text-xs text-slate-300 font-medium">Rasmiy Litsenziya</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <Star className="w-8 h-8 text-amber-400 mx-auto" />
                <div className="text-xl font-black text-white">4.99 ★</div>
                <div className="text-xs text-slate-300 font-medium">Mijozlar Bahosi</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <Bus className="w-8 h-8 text-sky-400 mx-auto" />
                <div className="text-xl font-black text-white">VIP Flot</div>
                <div className="text-xs text-slate-300 font-medium">Yutong & King Long</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto" />
                <div className="text-xl font-black text-white">24/7</div>
                <div className="text-xs text-slate-300 font-medium">Doimiy Aloqa</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </div>
  );
}
