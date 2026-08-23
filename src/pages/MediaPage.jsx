import React from 'react';
import { useApp } from '../context/AppContext';
import LiveTravelsMedia from '../components/sections/LiveTravelsMedia';
import { motion } from 'framer-motion';

export default function MediaPage() {
  const { lang, openLightbox } = useApp();

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-8 bg-transparent">
      {/* Centered Page Title Header with Background Photo */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white p-8 sm:p-14 text-slate-900 shadow-xl border border-slate-200">
          
          {/* Crystal Clear Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1800&q=80')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs uppercase font-black tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block shadow-xs">
              {lang === 'ru' ? 'Медиа Хроника' : lang === 'en' ? 'Live Media Chronicle' : 'Jonli Sayohat Kundaligi'}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'ru' ? 'Живые Фото и Видео Дневники' : lang === 'en' ? 'Live Travel Photo & Video Journal' : "Jonli Sayohatlar Media & Video Galereyasi"}
            </h1>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
              {lang === 'ru' 
                ? 'Реальные кадры наших путешественников со всех туров по Узбекистану!'
                : lang === 'en'
                ? 'Real moments and live footage from our travelers across Uzbekistan!'
                : "LOTOS FIELD bilan sayohat qilgan yurtdoshlarimizning haqiqiy video va fotosuratlari!"}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Live Media Section Component */}
      <LiveTravelsMedia
        onOpenImageLightbox={openLightbox}
        lang={lang}
        hideHeader={true}
      />
    </div>
  );
}
