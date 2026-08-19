import React from 'react';
import { useApp } from '../context/AppContext';
import LiveTravelsMedia from '../components/sections/LiveTravelsMedia';
import { motion } from 'framer-motion';
import { Camera, Plus } from 'lucide-react';

export default function MediaPage() {
  const { lang, openAddMediaModal, openLightbox } = useApp();

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-12 bg-[#fafbfc]">
      {/* Page Title & Call to Action */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider">
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>Haqiqiy Sayohatchilar Xotiralari</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'ru' ? 'Живые Фото и Видео Дневники' : lang === 'en' ? 'Live Travel Photo & Video Journal' : "Jonli Sayohatlar Media & Video Galereyasi"}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {lang === 'ru' 
                ? 'Смотрите реальные кадры наших путешественников или загрузите свои воспоминания!'
                : lang === 'en'
                ? 'Watch real footage from our travelers or upload your own journey memories!'
                : "LOTOS FIELD bilan sayohat qilgan yurtdoshlarimizning haqiqiy video va fotosuratlari!"}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={openAddMediaModal}
            className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>+ O'z Rasmingiz yoki Videongizni Qo'shish</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Main Live Media Section Component */}
      <LiveTravelsMedia
        onOpenImageLightbox={openLightbox}
        lang={lang}
      />
    </div>
  );
}
