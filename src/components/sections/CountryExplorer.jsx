import React, { useState } from 'react';
import { 
  Plane, Star, Sun, Shield, 
  Maximize2, Check, Sparkles
} from 'lucide-react';
import { COUNTRIES, CATEGORIES, EXCHANGE_RATE } from '../../data/travelData';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export default function CountryExplorer({ 
  onOpenBooking, 
  onOpenImageLightbox,
  currency = 'USD',
  t,
  lang = 'uz'
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountryId, setSelectedCountryId] = useState('samarkand');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Defensive safe price formatter
  const formatPrice = (usdAmount) => {
    const num = Number(usdAmount) || 0;
    const som = (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    const usd = '$' + num.toLocaleString('en-US');
    return `${som} (${usd})`;
  };

  const handleCountryClick = (cId) => {
    setSelectedCountryId(cId);
    setActivePhotoIdx(0);
  };

  const filteredCountries = selectedCategory === 'all'
    ? COUNTRIES
    : COUNTRIES.filter(c => c.category === selectedCategory);

  const currentCountry = COUNTRIES.find(c => c.id === selectedCountryId) || COUNTRIES[0];

  // Dynamic localized fields
  const countryName = lang === 'ru' ? (currentCountry.nameRu || currentCountry.name) : lang === 'en' ? (currentCountry.nameEn || currentCountry.name) : currentCountry.name;
  const countryTagline = lang === 'ru' ? (currentCountry.taglineRu || currentCountry.taglineUz) : lang === 'en' ? (currentCountry.taglineEn || currentCountry.taglineUz) : currentCountry.taglineUz;
  const countryDescription = lang === 'ru' ? (currentCountry.descriptionRu || currentCountry.descriptionUz) : lang === 'en' ? (currentCountry.descriptionEn || currentCountry.descriptionUz) : currentCountry.descriptionUz;
  const countryVisa = lang === 'ru' ? (currentCountry.visaRu || currentCountry.visaUz) : lang === 'en' ? (currentCountry.visaEn || currentCountry.visaUz) : currentCountry.visaUz;
  const countryFlight = lang === 'ru' ? (currentCountry.flightDurationRu || currentCountry.flightDurationUz) : lang === 'en' ? (currentCountry.flightDurationEn || currentCountry.flightDurationUz) : currentCountry.flightDurationUz;
  const countryBestTime = lang === 'ru' ? (currentCountry.bestTimeRu || currentCountry.bestTimeUz) : lang === 'en' ? (currentCountry.bestTimeEn || currentCountry.bestTimeUz) : currentCountry.bestTimeUz;
  const countryHighlights = lang === 'ru' ? (currentCountry.highlightsRu || currentCountry.highlightsUz) : lang === 'en' ? (currentCountry.highlightsEn || currentCountry.highlightsUz) : currentCountry.highlightsUz;
  const currentPrice = currentCountry.basePriceUSD || currentCountry.priceUSD || 80;

  // Build unified dynamic photos list
  const spotsPhotos = currentCountry.spots?.map(s => ({
    url: s.img,
    title: lang === 'ru' ? (s.nameRu || s.nameUz) : lang === 'en' ? (s.nameEn || s.nameUz) : s.nameUz,
    desc: lang === 'ru' ? (s.descRu || s.descUz) : lang === 'en' ? (s.descEn || s.descUz) : s.descUz
  })) || [];

  const rawImages = currentCountry.images?.map((url, i) => ({
    url,
    title: `${countryName} ${i + 1}`,
    desc: countryTagline
  })) || [];

  const galleryPhotos = spotsPhotos.length > 0 ? spotsPhotos : rawImages;
  const activePhoto = galleryPhotos[activePhotoIdx] || { url: currentCountry.coverImage, title: countryName };
  const activePhotoUrl = activePhoto?.url || currentCountry.coverImage;
  const activePhotoTitle = activePhoto?.title || countryName;

  return (
    <section id="destinations" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* 100% Pure, Crystal-Clear Bukhara Ark Background - ZERO OPACITY & NO BLACK BORDERS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/landmarks/bukhara-ark.png"
          alt="Bukhara Ark Historic Architecture"
          className="w-full h-full object-cover object-center scale-120"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header in High Contrast Glass Card */}
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

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const catName = lang === 'ru' ? cat.nameRu : lang === 'en' ? cat.nameEn : cat.nameUz;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#10b981] text-white scale-105 shadow-md'
                    : 'bg-white/90 hover:bg-white text-slate-700 border border-slate-200'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Horizontal Regions Selector Bar with shadcn/ui Cards & REAL Landmark Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {filteredCountries.map((c) => {
            const isSelected = c.id === currentCountry.id;
            const price = c.basePriceUSD || c.priceUSD || 80;
            const displayName = lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name;
            return (
              <button
                key={c.id}
                onClick={() => handleCountryClick(c.id)}
                className={`p-2 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center group cursor-pointer ${
                  isSelected
                    ? 'bg-white border-2 border-[#10b981] shadow-lg scale-105 ring-4 ring-[#10b981]/20'
                    : 'bg-white/95 hover:bg-white border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                <div className="relative w-full h-16 sm:h-20 rounded-xl overflow-hidden mb-2 shadow-2xs">
                  <img src={c.coverImage} alt={displayName} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1 right-1.5 text-xs drop-shadow">{c.flag}</span>
                </div>
                <div className="font-bold text-xs text-slate-900 truncate w-full px-1">{displayName}</div>
                <div className="text-[10px] font-black text-[#10b981] mt-0.5 truncate w-full px-1">{formatPrice(price)}</div>
              </button>
            );
          })}
        </div>

        {/* Active Region Rich Media & Details Canvas with shadcn/ui Card */}
        <Card className="rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-12 p-0">
          
          {/* Left: Dynamic HD Media Viewer (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] flex flex-col justify-between p-6 sm:p-8 overflow-hidden bg-slate-900 text-white">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src={activePhotoUrl} alt={activePhotoTitle} className="w-full h-full object-cover filter brightness-95 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20"></div>
            </div>

            {/* Top Bar inside Media Viewer */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-white/20 backdrop-blur-md border-white/30 text-white shadow-xs font-bold text-xs py-1 px-3">
                  {currentCountry.flag} {countryName}
                </Badge>
                <Badge className="bg-[#10b981] shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>{currentCountry.rating || '4.99'}</span>
                </Badge>
              </div>

              <button 
                onClick={() => onOpenImageLightbox(activePhotoUrl)} 
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/30 text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
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
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md transition-all flex items-center gap-2 border cursor-pointer ${
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
              <div className="text-xs font-bold uppercase tracking-wider text-[#a7f3d0]">{activePhotoTitle}</div>
              <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">{countryName} — {countryTagline}</h3>
            </div>
          </div>

          {/* Right: Comprehensive Info, Transport, Weather & Booking (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#10b981] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.regions.packageTitle}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900">{countryName} {t.regions.tourSuffix}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{countryDescription}</p>
              </div>

              {/* 4 Fast Facts Badges in shadcn Card style */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>{t.regions.facts.temp}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{currentCountry.temp || '+26°C'}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Shield className="w-4 h-4 text-[#10b981]" />
                    <span>{t.regions.facts.visa}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{countryVisa}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Plane className="w-4 h-4 text-sky-600" />
                    <span>{t.regions.facts.duration}</span>
                  </div>
                  <div className="text-xs font-extrabold text-slate-900 leading-snug">{countryFlight}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>{t.regions.facts.season}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{countryBestTime}</div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">{t.regions.highlightsTitle}</span>
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
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <span className="text-xs text-slate-400 font-bold block">{t.regions.priceLabel}</span>
                  <div className="text-xl sm:text-2xl font-black text-[#10b981]">{formatPrice(currentPrice)}</div>
                </div>
                <Badge variant="secondary" className="font-bold text-slate-600 shrink-0">{t.regions.includedNote}</Badge>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ country: countryName, flightClass: 'Afrosiyob VIP / Avia', hotelStar: '4-5★ Hotel', priceUSD: currentPrice })}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#10b981] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:bg-[#059669] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plane className="w-4 h-4" />
                  <span>{t.regions.bookBtn}</span>
                </button>
              </div>
            </div>

          </div>
        </Card>

        {/* Must-See Landmarks in Region (4 spots cards with shadcn/ui Card) */}
        {currentCountry.spots && currentCountry.spots.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {countryName} — {t.regions.spotsTitle || 'Asosiy Diqqatga Sazovor Joylar'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentCountry.spots.map((spot, idx) => {
                const spotName = lang === 'ru' ? (spot.nameRu || spot.nameUz) : lang === 'en' ? (spot.nameEn || spot.nameUz) : spot.nameUz;
                const spotDesc = lang === 'ru' ? (spot.descRu || spot.descUz) : lang === 'en' ? (spot.descEn || spot.descUz) : spot.descUz;

                return (
                  <Card
                    key={idx}
                    onClick={() => {
                      setActivePhotoIdx(idx);
                      if (spot.img) onOpenImageLightbox(spot.img);
                    }}
                    className="overflow-hidden group cursor-pointer hover:shadow-xl hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-1 p-0"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={spot.img}
                        alt={spotName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-2 right-2">
                        <span className="p-1.5 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md inline-flex">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 right-3">
                        <h4 className="font-bold text-sm text-white drop-shadow-sm leading-tight">{spotName}</h4>
                      </div>
                    </div>

                    <CardContent className="p-3.5">
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{spotDesc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
