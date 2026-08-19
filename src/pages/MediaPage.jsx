import React from 'react';
import { useApp } from '../context/AppContext';
import LiveTravelsMedia from '../components/sections/LiveTravelsMedia';
import { motion } from 'framer-motion';

export default function MediaPage() {
  const { lang, openLightbox } = useApp();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-8 bg-[#fafbfc]">
      {/* Centered Page Title Header */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 pb-4"
        >
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'ru' ? 'Живые Фото и Видео Дневники' : lang === 'en' ? 'Live Travel Photo & Video Journal' : "Jonli Sayohatlar Media & Video Galereyasi"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {lang === 'ru' 
              ? 'Реальные кадры наших путешественников со всех туров по Узбекистану!'
              : lang === 'en'
              ? 'Real moments and live footage from our travelers across Uzbekistan!'
              : "LOTOS FIELD bilan sayohat qilgan yurtdoshlarimizning haqiqiy video va fotosuratlari!"}
          </p>
        </motion.div>
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
