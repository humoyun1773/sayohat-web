import React, { useState } from 'react';
import { 
  Search, Bus, MapPin, Calendar, 
  ShieldCheck, Compass, Sparkles 
} from 'lucide-react';
import { COUNTRIES } from '../../data/travelData';
import CustomSelect from '../ui/CustomSelect';

export default function Hero({ onSelectCountry, t, lang = 'uz' }) {
  const [origin, setOrigin] = useState('TAS');
  const [selectedDest, setSelectedDest] = useState('samarkand');
  const [date, setDate] = useState('2026-09-15');

  const originOptions = [
    { value: 'TAS', label: lang === 'ru' ? 'Ташкент (Автовокзал / Центр)' : lang === 'en' ? 'Tashkent (Bus Terminal / Center)' : 'Toshkent (Avtovokzal / Markaz)', icon: Bus },
    { value: 'SKD', label: lang === 'ru' ? 'Самарканд' : lang === 'en' ? 'Samarkand' : 'Samarqand shahri', icon: Bus },
    { value: 'BHK', label: lang === 'ru' ? 'Бухара' : lang === 'en' ? 'Bukhara' : 'Buxoro shahri', icon: Bus },
    { value: 'UGC', label: lang === 'ru' ? 'Ургенч / Хива' : lang === 'en' ? 'Urgench / Khiva' : 'Urganch / Xiva', icon: Bus },
    { value: 'KSQ', label: lang === 'ru' ? 'Карши' : lang === 'en' ? 'Karshi' : 'Qarshi shahri', icon: Bus },
    { value: 'TMJ', label: lang === 'ru' ? 'Термез' : lang === 'en' ? 'Termez' : 'Termiz shahri', icon: Bus },
    { value: 'FEG', label: lang === 'ru' ? 'Фергана' : lang === 'en' ? 'Fergana' : 'Farg\'ona vodiysi', icon: Bus },
    { value: 'NCU', label: lang === 'ru' ? 'Нукус' : lang === 'en' ? 'Nukus' : 'Nukus shahri', icon: Bus },
  ];

  const destinationOptions = COUNTRIES.map((c) => ({
    value: c.id,
    label: lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name,
    flag: c.flag
  }));

  const handleSearch = (e) => {
    e.preventDefault();
    onSelectCountry(selectedDest);
    const element = document.querySelector('#countries');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[88vh] pt-28 sm:pt-36 pb-16 sm:pb-20 flex items-center justify-center overflow-hidden bg-white">
      
      {/* 100% Pure, Crystal-Clear Samarkand Registan Background - ZERO OPACITY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/landmarks/samarkand-registan.png"
          alt="Samarkand Registan Square Historical Architecture"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Title & Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              {t.hero.title1} <br />
              <span className="text-[#10b981]">
                {t.hero.title2}
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
              {t.hero.desc}
            </p>
          </div>
        </div>

        {/* Grand Search & Booking Panel */}
        <div className="w-full max-w-[1536px] mx-auto mb-14">
          <div className="bg-white/98 backdrop-blur-2xl p-5 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-slate-100 pb-5 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] border border-[#a7f3d0] shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 block">
                    {t.hero.panelTitle}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{t.hero.panelSub}</span>
                </div>
              </div>

              <span className="text-xs sm:text-sm text-[#065f46] font-bold bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#a7f3d0] flex items-center gap-2 self-start sm:self-auto shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>{t.hero.guarantee}</span>
              </span>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
              
              {/* Custom Origin Select */}
              <div className="space-y-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Bus className="w-4 h-4 text-[#10b981]" />
                  {t.hero.originLabel}
                </label>
                <CustomSelect
                  value={origin}
                  onChange={setOrigin}
                  options={originOptions}
                />
              </div>

              {/* Custom Destination Select */}
              <div className="space-y-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#10b981]" />
                  {t.hero.destLabel}
                </label>
                <CustomSelect
                  value={selectedDest}
                  onChange={setSelectedDest}
                  options={destinationOptions}
                />
              </div>

              {/* Date */}
              <div className="space-y-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#10b981]" />
                  {t.hero.dateLabel}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-900 rounded-2xl px-4 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none cursor-pointer transition-all shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="space-y-2 text-left flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl btn-primary-emerald font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.01] active:scale-95 transition-all"
                >
                  <Search className="w-5 h-5" />
                  <span>{t.hero.searchBtn}</span>
                </button>
              </div>

            </form>

            {/* Quick Region Direct Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap sm:flex-nowrap sm:overflow-x-auto no-scrollbar items-center gap-2 text-xs sm:text-sm">
              <span className="text-slate-600 font-bold mr-1 shrink-0">{t.hero.popular}</span>
              {COUNTRIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    onSelectCountry(c.id);
                    document.querySelector('#countries')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#ecfdf5] hover:text-[#065f46] border border-slate-200 text-slate-700 font-bold transition-all flex items-center gap-1.5 shadow-2xs hover:scale-105 shrink-0 cursor-pointer text-xs"
                >
                  <span>{c.flag}</span>
                  <span>{lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* 4 Grand Trust Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="card-light p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left bg-white">
            <div className="text-xl sm:text-3xl font-black text-[#10b981] mb-1">{t.hero.metrics.destCount}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{t.hero.metrics.destLabel}</div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">{t.hero.metrics.destDesc}</p>
          </div>

          <div className="card-light p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left bg-white">
            <div className="text-xl sm:text-3xl font-black text-[#10b981] mb-1">{t.hero.metrics.guaranteeCount}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{t.hero.metrics.guaranteeLabel}</div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">{t.hero.metrics.guaranteeDesc}</p>
          </div>

          <div className="card-light p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left bg-white">
            <div className="text-xl sm:text-3xl font-black text-[#10b981] mb-1">{t.hero.metrics.charterCount || t.hero.metrics.ratingCount}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{t.hero.metrics.charterLabel || t.hero.metrics.ratingLabel}</div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">{t.hero.metrics.charterDesc || t.hero.metrics.ratingDesc}</p>
          </div>

          <div className="card-light p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left bg-white">
            <div className="text-xl sm:text-3xl font-black text-[#10b981] mb-1">{t.hero.metrics.supportCount}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{t.hero.metrics.supportLabel}</div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">{t.hero.metrics.supportDesc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
