import React from 'react';
import { useApp } from '../context/AppContext';
import HotDeals from '../components/sections/HotDeals';
import { Flame, ShieldCheck, Sparkles } from 'lucide-react';

export default function DealsPage() {
  const { lang, currency, openBookingModal, t } = useApp();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-12">
      {/* Page Title & Promo Banner */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-black uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Cheklangan Vaqtli Qaynoq Chegirmalar</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'ru' ? 'Горящие Скидки и Акции' : lang === 'en' ? 'Hot Deals & Flash Sales' : "Qaynoq Chegirmalar & Maxsus Turlar"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {lang === 'ru' 
              ? 'Экономьте до -30% на 5-дневные туры по Узбекистану со всеми включенными услугами!'
              : lang === 'en'
              ? 'Save up to -30% on all-inclusive 5-day tours across Uzbekistan!'
              : "O'zbekiston bo'ylab 5 kunlik barcha xizmatlar kiritilgan turlarga 30% gacha maxsus chegirmalar!"}
          </p>
        </div>

        {/* Promo Highlights Banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
              -30%
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Avtobusli Turlar Chegirmasi</h3>
              <p className="text-xs text-slate-500 mt-0.5">Samarqand, Buxoro va Xiva yo'nalishlariga</p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">100% All-Inclusive Paket</h3>
              <p className="text-xs text-slate-500 mt-0.5">Mehmonxona, 3 mahal ovqat va gid ichida</p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-gradient-to-br from-sky-500/10 to-indigo-500/5 border border-sky-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">VIP Samolyot Reyslari</h3>
              <p className="text-xs text-slate-500 mt-0.5">Tez va qulay to'g'ridan-to'g'ri parvozlar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hot Deals Section Component */}
      <HotDeals
        currency={currency}
        onOpenBooking={openBookingModal}
        t={t}
        lang={lang}
      />
    </div>
  );
}
