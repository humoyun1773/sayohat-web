import React from 'react';
import { useApp } from '../context/AppContext';
import LiveTravelsMedia from '../components/sections/LiveTravelsMedia';
import { motion } from 'framer-motion';

export default function MediaPage() {
  const { lang, openLightbox } = useApp();

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-8 bg-transparent">
      {/* Centered Page Title Header with 100% Crystal Clear Background Photo */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[340px] flex items-center justify-center p-6 sm:p-12">
          
          {/* 100% Crystal Clear Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('/images/fiat-retro.png')` }}
          ></div>

          {/* Floating Pure White Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center max-w-3xl mx-auto space-y-4 bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/90"
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
