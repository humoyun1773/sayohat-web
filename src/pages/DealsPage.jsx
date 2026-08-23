import React from 'react';
import { useApp } from '../context/AppContext';
import HotDeals from '../components/sections/HotDeals';
import { Flame, ShieldCheck, Plane } from 'lucide-react';

export default function DealsPage() {
  const { lang, currency, openBookingModal, t } = useApp();

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12 bg-transparent">
      {/* Page Title & Promo Banner with Background Image */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white p-8 sm:p-14 text-slate-900 shadow-xl border border-slate-200">
          
          {/* Crystal Clear Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1800&q=80')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-black uppercase tracking-wider shadow-xs">
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>
                {lang === 'ru' 
                  ? 'Горящие Скидки Ограниченного Времени' 
                  : lang === 'en' 
                  ? 'Limited Time Hot Discounts' 
                  : 'Cheklangan Vaqtli Qaynoq Chegirmalar'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'ru' ? 'Горящие Скидки и Акции' : lang === 'en' ? 'Hot Deals & Flash Sales' : "Qaynoq Chegirmalar & Maxsus Turlar"}
            </h1>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {lang === 'ru' 
                ? 'Экономьте до -30% на 5-дневные туры по Узбекистану со всеми включенными услугами!'
                : lang === 'en' 
                ? 'Save up to -30% on all-inclusive 5-day tours across Uzbekistan!'
                : "O'zbekiston bo'ylab 5 kunlik barcha xizmatlar kiritilgan turlarga 30% gacha maxsus chegirmalar!"}
            </p>
          </div>
        </div>

        {/* Promo Highlights Banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
              -30%
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {lang === 'ru' ? 'Скидка на Автобусные Туры' : lang === 'en' ? 'Bus Tour Discounts' : 'Avtobusli Turlar Chegirmasi'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'ru' ? 'По направлениям Самарканд, Бухара и Хива' : lang === 'en' ? 'For Samarkand, Bukhara, and Khiva routes' : 'Samarqand, Buxoro va Xiva yo\'nalishlariga'}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {lang === 'ru' ? 'Пакет «Все Включено» 100%' : lang === 'en' ? '100% All-Inclusive Package' : '100% All-Inclusive Paket'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'ru' ? 'Отель 4★, 3-раз. питание и гид включены' : lang === 'en' ? '4★ Hotel, 3 meals & guide included' : 'Mehmonxona, 3 mahal ovqat va gid ichida'}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-gradient-to-br from-sky-500/10 to-indigo-500/5 border border-sky-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shrink-0">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {lang === 'ru' ? 'VIP Авиаперелеты' : lang === 'en' ? 'VIP Domestic Flights' : 'VIP Samolyot Reyslari'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'ru' ? 'Быстрые и удобные прямые рейсы' : lang === 'en' ? 'Fast & comfortable direct flights' : 'Tez va qulay to\'g\'ridan-to\'g\'ri parvozlar'}
              </p>
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
