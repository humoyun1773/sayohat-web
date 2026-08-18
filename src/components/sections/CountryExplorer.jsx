import React, { useState } from 'react';
import { 
  Globe, Star, Sun, Shield, 
  ArrowRight, Maximize2, Sparkles, Plane, 
  Check 
} from 'lucide-react';
import { COUNTRIES, CATEGORIES, EXCHANGE_RATE } from '../../data/travelData';

export default function CountryExplorer({ 
  selectedCountryId, 
  onSelectCountry, 
  currency = 'USD', 
  onOpenBooking, 
  onOpenImageLightbox,
  t,
  lang = 'uz'
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const filteredCountries = selectedCategory === 'all'
    ? COUNTRIES
    : COUNTRIES.filter(c => c.category === selectedCategory);

  const currentCountry = COUNTRIES.find(c => c.id === selectedCountryId) || COUNTRIES[0];

  // Defensive safe price formatter
  const formatPrice = (usdAmount) => {
    const num = Number(usdAmount) || 0;
    if (currency === 'UZS') {
      return (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + num.toLocaleString('en-US');
  };

  const handleCountryClick = (cId) => {
    onSelectCountry(cId);
    setActivePhotoIdx(0);
  };

  // Localized country attributes
  const countryName = lang === 'ru' ? (currentCountry.nameRu || currentCountry.name) : lang === 'en' ? (currentCountry.nameEn || currentCountry.name) : currentCountry.name;
  const countryTagline = lang === 'ru' ? (currentCountry.taglineRu || currentCountry.taglineUz) : lang === 'en' ? (currentCountry.taglineEn || currentCountry.taglineUz) : currentCountry.taglineUz;
  const countryDescription = lang === 'ru' ? (currentCountry.descriptionRu || currentCountry.descriptionUz) : lang === 'en' ? (currentCountry.descriptionEn || currentCountry.descriptionUz) : currentCountry.descriptionUz;
  const countryHighlights = lang === 'ru' ? (currentCountry.highlightsRu || currentCountry.highlightsUz) : lang === 'en' ? (currentCountry.highlightsEn || currentCountry.highlightsUz) : currentCountry.highlightsUz;
  const countryVisa = lang === 'ru' ? (currentCountry.visaRu || currentCountry.visaUz) : lang === 'en' ? (currentCountry.visaEn || currentCountry.visaUz) : currentCountry.visaUz;
  const countryFlight = lang === 'ru' ? (currentCountry.flightDurationRu || currentCountry.flightDurationUz) : lang === 'en' ? (currentCountry.flightDurationEn || currentCountry.flightDurationUz) : currentCountry.flightDurationUz;
  const countryBestTime = lang === 'ru' ? (currentCountry.bestTimeRu || currentCountry.bestTimeUz) : lang === 'en' ? (currentCountry.bestTimeEn || currentCountry.bestTimeUz) : currentCountry.bestTimeUz;

  // Safe gallery images & localized spot names directly from spots
  const galleryPhotos = currentCountry.spots && currentCountry.spots.length > 0
    ? currentCountry.spots.map((spot) => ({
        url: spot.img || currentCountry.coverImage,
        title: lang === 'ru' ? (spot.nameRu || spot.nameUz) : lang === 'en' ? (spot.nameEn || spot.nameUz) : spot.nameUz
      }))
    : currentCountry.images && currentCountry.images.length > 0
    ? currentCountry.images.map((url, i) => ({
        url,
        title: `${countryName} ${i + 1}`
      }))
    : [{ url: currentCountry.coverImage, title: countryName }];

  const activePhotoUrl = galleryPhotos[activePhotoIdx]?.url || currentCountry.coverImage;
  const activePhotoTitle = galleryPhotos[activePhotoIdx]?.title || countryName;

  const currentPrice = currentCountry.basePriceUSD || currentCountry.priceUSD || 80;

  return (
    <section id="countries" className="py-20 sm:py-24 relative overflow-hidden bg-white border-y border-slate-200">
      
      {/* 100% Pure, Crystal-Clear Bukhara Ark Background - No Black Borders */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/landmarks/bukhara-ark.png"
          alt="Bukhara Ark Historical Architecture"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.regions.title1} <br />
              <span className="text-[#10b981]">
                {t.regions.title2}
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              {t.regions.desc}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {CATEGORIES.map((cat) => {
            const catName = lang === 'ru' ? cat.ru : lang === 'en' ? cat.en : cat.uz;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs ${
                  selectedCategory === cat.id
                    ? 'btn-primary-emerald scale-105 shadow-md'
                    : 'bg-white/90 hover:bg-white text-slate-700 border border-slate-200'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Horizontal Regions Selector Bar with REAL Landmark Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {filteredCountries.map((c) => {
            const isSelected = c.id === currentCountry.id;
            const price = c.basePriceUSD || c.priceUSD || 80;
            const displayName = lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name;
            return (
              <button
                key={c.id}
                onClick={() => handleCountryClick(c.id)}
                className={`p-2 rounded-2xl text-center transition-all duration-300 border flex flex-col items-center group cursor-pointer ${
                  isSelected
                    ? 'bg-white border-2 border-[#10b981] shadow-xl scale-105 ring-4 ring-[#10b981]/20'
                    : 'bg-white/95 hover:bg-white border-slate-200 shadow-xs hover:border-slate-300 hover:-translate-y-1'
                }`}
              >
                <div className="relative w-full h-16 sm:h-20 rounded-xl overflow-hidden mb-2 shadow-2xs">
                  <img 
                    src={c.coverImage} 
                    alt={displayName} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1 right-1.5 text-xs drop-shadow">{c.flag}</span>
                </div>
                <div className="font-black text-xs text-slate-900 truncate w-full px-1">{displayName}</div>
                <div className="text-[11px] font-black text-[#10b981] mt-0.5">{formatPrice(price)} {t.regions.fromPrice}</div>
              </button>
            );
          })}
        </div>

        {/* Active Region Rich Media & Details Canvas */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-16">
          
          {/* Left: Dynamic HD Media Viewer (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] flex flex-col justify-between p-6 sm:p-8 overflow-hidden bg-slate-900 text-white">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={activePhotoUrl}
                alt={activePhotoTitle}
                className="w-full h-full object-cover filter brightness-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20"></div>
            </div>

            {/* Top Bar inside Media Viewer */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-sm">
                  {currentCountry.flag} {countryName}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#10b981] text-white text-xs font-black shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>{currentCountry.rating || '4.99'}</span>
                </span>
              </div>

              <button
                onClick={() => onOpenImageLightbox(activePhotoUrl)}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/30 text-xs font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{t.regions.openHD}</span>
              </button>
            </div>

            {/* Photo Gallery Switcher Strip */}
            {galleryPhotos.length > 1 && (
              <div className="relative z-10 my-4 flex flex-wrap gap-2">
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md transition-all flex items-center gap-2 border ${
                      activePhotoIdx === idx
                        ? 'bg-[#10b981] text-white border-[#10b981] shadow-md scale-105'
                        : 'bg-black/50 text-slate-200 border-white/20 hover:bg-black/70 hover:text-white'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white/80"></span>
                    <span className="truncate max-w-[140px]">{photo.title}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Bottom Caption */}
            <div className="relative z-10 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#a7f3d0]">
                {activePhotoTitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                {countryName} — {countryTagline}
              </h3>
            </div>

          </div>

          {/* Right: Comprehensive Info, Transport, Weather & Booking (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            
            <div className="space-y-6">
              
              {/* Header Title & Tagline */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#10b981] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.regions.packageTitle}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900">
                  {countryName} {t.regions.tourSuffix}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {countryDescription}
                </p>
              </div>

              {/* 4 Fast Facts Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>{t.regions.facts.temp}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{currentCountry.temp || '+26°C'}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Shield className="w-4 h-4 text-[#10b981]" />
                    <span>{t.regions.facts.visa}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{countryVisa}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Plane className="w-4 h-4 text-sky-600" />
                    <span>{t.regions.facts.duration}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{countryFlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>{t.regions.facts.season}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{countryBestTime}</div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  {t.regions.highlightsTitle}
                </span>
                <div className="space-y-1.5">
                  {countryHighlights?.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#10b981] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Price & Action Buttons */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-bold block">{t.regions.priceLabel}</span>
                  <div className="text-3xl font-black text-[#10b981]">
                    {formatPrice(currentPrice)}
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {t.regions.includedNote}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({
                    country: countryName,
                    flightClass: 'Afrosiyob VIP / Avia',
                    hotelStar: '4-5★ Hotel',
                    priceUSD: currentPrice
                  })}
                  className="w-full py-4 px-6 rounded-2xl btn-primary-emerald font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  <span>{t.regions.bookBtn}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
