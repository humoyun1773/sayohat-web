import React from 'react';
import { useApp } from '../context/AppContext';
import Reviews from '../components/sections/Reviews';
import { Star, MessageSquare, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';

export default function ReviewsPage() {
  const { lang, t, openContactModal } = useApp();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-12">
      {/* Header Banner */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-black uppercase tracking-wider">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span>4.99 ★ Haqiqiy Mijozlar Bahosi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'ru' ? 'Отзывы Наших Путешественников' : lang === 'en' ? 'Verified Traveler Reviews' : "Sayohatchilarimizning Haqiqiy Fikrlari"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {lang === 'ru'
              ? 'Более 30,000 довольных туристов выбрали LOTOS FIELD для комфортных 5-дневных поездок.'
              : lang === 'en'
              ? 'Over 30,000 satisfied tourists chose LOTOS FIELD for memorable 5-day journeys.'
              : "Biz bilan Samarqand, Buxoro, Xiva va boshqa viloyatlarga sayohat qilgan mijozlarning xolis sharhlari."}
          </p>
        </div>

        {/* Rating Breakdown Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-2xl font-black text-slate-900">99.4%</div>
            <div className="text-xs font-bold text-slate-600">Ijobiy Sharhlar</div>
            <p className="text-[11px] text-slate-400">3,400+ qoldirilgan baholashlar</p>
          </div>

          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-2xl font-black text-emerald-600">5.0 / 5.0</div>
            <div className="text-xs font-bold text-slate-600">Transport va Qulaylik</div>
            <p className="text-[11px] text-slate-400">Yumshoq avtobuslar va qatnovlar</p>
          </div>

          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-2xl font-black text-amber-500">100%</div>
            <div className="text-xs font-bold text-slate-600">Tavsiya Qilish Nisbati</div>
            <p className="text-[11px] text-slate-400">Do'stlari va oilasiga tavsiya etadi</p>
          </div>
        </div>
      </div>

      {/* Main Reviews Component */}
      <Reviews
        t={t}
        lang={lang}
      />

      {/* Leave Feedback CTA */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Siz ham biz bilan sayohat qilganmisiz?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              O'z taassurotlaringiz va takliflaringizni biz bilan bo'lishing!
            </p>
          </div>

          <button
            type="button"
            onClick={openContactModal}
            className="py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Sharh qoldirish
          </button>
        </div>
      </div>
    </div>
  );
}
