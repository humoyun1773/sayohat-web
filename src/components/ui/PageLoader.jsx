import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, Sparkles } from 'lucide-react';

export default function PageLoader({ isLoading, lang = 'uz' }) {
  const loadingTexts = {
    uz: {
      title: "LOTOS FIELD",
      subtitle: "Sayohat sahifasi yuklanmoqda...",
      tag: "O'zbekiston Bo'ylab 5 Kunlik VIP Turlar"
    },
    ru: {
      title: "LOTOS FIELD",
      subtitle: "Загрузка страницы путешествия...",
      tag: "5-Дневные VIP Туры по Узбекистану"
    },
    en: {
      title: "LOTOS FIELD",
      subtitle: "Loading your travel experience...",
      tag: "5-Day All-Inclusive VIP Uzbekistan Tours"
    }
  };

  const text = loadingTexts[lang] || loadingTexts.uz;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
        >
          {/* Top linear progress indicator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 origin-left shadow-lg shadow-emerald-500/50 z-60"
          />

          {/* Center Luxury Glowing Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative flex flex-col items-center max-w-sm w-full mx-4 p-8 rounded-3xl bg-white/95 border border-white/80 shadow-2xl text-center space-y-5 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

            {/* Orbiting Plane & Compass Animation */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/40"
              />

              {/* Inner gradient spinner */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-2 border-t-emerald-600 border-r-teal-500 border-b-transparent border-l-transparent"
              />

              {/* Central Glowing Icon */}
              <motion.div
                animate={{ y: [-3, 3, -3], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30"
              >
                <Plane className="w-7 h-7" />
              </motion.div>

              {/* Flying mini spark badge */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-1 -right-1 text-amber-500 bg-amber-50 p-1 rounded-full border border-amber-200 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.div>
            </div>

            {/* Titles */}
            <div className="space-y-1.5 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                <Compass className="w-3 h-3 text-emerald-600 animate-spin" style={{ animationDuration: '4s' }} />
                <span>{text.tag}</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {text.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium animate-pulse">
                {text.subtitle}
              </p>
            </div>

            {/* Bottom pulsing dots */}
            <div className="flex items-center gap-1.5 pt-1">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 rounded-full bg-emerald-600"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 rounded-full bg-teal-500"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 rounded-full bg-amber-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
