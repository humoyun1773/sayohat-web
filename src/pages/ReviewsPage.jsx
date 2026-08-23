import React from 'react';
import { useApp } from '../context/AppContext';
import Reviews from '../components/sections/Reviews';
import { Star } from 'lucide-react';

export default function ReviewsPage() {
  const { lang, t, openContactModal } = useApp();

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12 bg-[#fafbfc]">
      {/* Header Banner with Background Photo */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-14 text-white shadow-xl border border-slate-800">
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>
                {lang === 'ru' ? '4.99 ★ Оценка Реальных Клиентов' : lang === 'en' ? '4.99 ★ Verified Customer Rating' : '4.99 ★ Haqiqiy Mijozlar Bahosi'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
              {lang === 'ru' ? 'Отзывы Наших Путешественников' : lang === 'en' ? 'Verified Traveler Reviews' : "Sayohatchilarimizning Haqiqiy Fikrlari"}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
              {lang === 'ru'
                ? 'Более 30,000 довольных туристов выбрали LOTOS FIELD для комфортных 5-дневных поездок.'
                : lang === 'en'
                ? 'Over 30,000 satisfied tourists chose LOTOS FIELD for memorable 5-day journeys.'
                : "Biz bilan Samarqand, Buxoro, Xiva va boshqa viloyatlarga sayohat qilgan mijozlarning xolis sharhlari."}
            </p>
          </div>
        </div>

        {/* Rating Breakdown Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1 shadow-xs">
            <div className="text-2xl font-black text-slate-900">99.4%</div>
            <div className="text-xs font-bold text-slate-700">
              {lang === 'ru' ? 'Положительные Отзывы' : lang === 'en' ? 'Positive Reviews' : 'Ijobiy Sharhlar'}
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'ru' ? 'Более 3,400+ подтвержденных оценок' : lang === 'en' ? 'Over 3,400+ verified ratings' : '3,400+ qoldirilgan baholashlar'}
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1 shadow-xs">
            <div className="text-2xl font-black text-emerald-600">5.0 / 5.0</div>
            <div className="text-xs font-bold text-slate-700">
              {lang === 'ru' ? 'Транспорт и Комфорт' : lang === 'en' ? 'Transport & Comfort' : 'Transport va Qulaylik'}
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'ru' ? 'Мягкие автобусы и пунктуальные рейсы' : lang === 'en' ? 'Comfortable coaches and flights' : 'Yumshoq avtobuslar va qatnovlar'}
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1 shadow-xs">
            <div className="text-2xl font-black text-amber-500">100%</div>
            <div className="text-xs font-bold text-slate-700">
              {lang === 'ru' ? 'Уровень Рекомендации' : lang === 'en' ? 'Recommendation Rate' : 'Tavsiya Qilish Nisbati'}
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'ru' ? 'Рекомендуют друзьям и семье' : lang === 'en' ? 'Recommend to friends and family' : "Do'stlari va oilasiga tavsiya etadi"}
            </p>
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
              {lang === 'ru' ? 'Вы тоже путешествовали с нами?' : lang === 'en' ? 'Have you traveled with us before?' : 'Siz ham biz bilan sayohat qilganmisiz?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {lang === 'ru' 
                ? 'Поделитесь своими впечатлениями и воспоминаниями!' 
                : lang === 'en' 
                ? 'Share your valuable impressions and journey feedback with us!' 
                : "O'z taassurotlaringiz va takliflaringizni biz bilan bo'lishing!"}
            </p>
          </div>

          <button
            type="button"
            onClick={openContactModal}
            className="py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            {lang === 'ru' ? 'Оставить отзыв' : lang === 'en' ? 'Leave a Review' : 'Sharh qoldirish'}
          </button>
        </div>
      </div>
    </div>
  );
}
