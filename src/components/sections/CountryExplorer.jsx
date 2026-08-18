import React, { useState } from 'react';
import { 
  Globe, Star, Sun, Shield, 
  ArrowRight, Maximize2, Sparkles, Plane, 
  MapPin, Check 
} from 'lucide-react';
import { COUNTRIES, EXCHANGE_RATE } from '../../data/travelData';

export default function CountryExplorer({ 
  selectedCountryId, 
  onSelectCountry, 
  currency = 'USD', 
  onOpenBooking, 
  onOpenImageLightbox,
  onOpenCalculatorWithCountry
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const categories = [
    { id: 'all', label: 'Barcha Davlatlar' },
    { id: 'asia', label: 'Sharq & Osiyo' },
    { id: 'middle_east', label: 'Yaqin Sharq & Arab' },
    { id: 'europe', label: "Yevropa & O'rtayer" },
    { id: 'islands', label: 'Ekzotik Orollar' },
  ];

  const filteredCountries = selectedCategory === 'all'
    ? COUNTRIES
    : COUNTRIES.filter(c => c.category === selectedCategory);

  const currentCountry = COUNTRIES.find(c => c.id === selectedCountryId) || COUNTRIES[0];

  const formatPrice = (usdAmount) => {
    if (currency === 'UZS') {
      return (usdAmount * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + usdAmount.toLocaleString('en-US');
  };

  const handleCountryClick = (cId) => {
    onSelectCountry(cId);
    setActivePhotoIdx(0);
  };

  const activePhotoUrl = currentCountry.gallery?.[activePhotoIdx]?.url || currentCountry.image;
  const activePhotoTitle = currentCountry.gallery?.[activePhotoIdx]?.title || currentCountry.name;

  return (
    <section id="countries" className="py-24 relative overflow-hidden bg-white">
      
      {/* 100% Pure, Razor-Sharp Aerial Tropical Islands & Ocean from Plane Window */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2600&q=100"
          alt="Tropical Paradise from Sky"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-900/35"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Butun Dunyo Davlatlari & Jonli Media Galereyasi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Istalgan Davlatni Tanlang — <br />
              <span className="text-[#10b981]">
                Rasmlari, Parvozlari va Narxlari
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Qaysi davlat ustiga bossangiz, uning barcha HD fotosuratlari, samolyot qatnovlari, ob-havosi, viza shartlari va arzon narxlari bir zumda chiqadi!
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs ${
                selectedCategory === cat.id
                  ? 'btn-primary-emerald scale-105 shadow-md'
                  : 'bg-white/90 hover:bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Countries Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {filteredCountries.map((c) => {
            const isSelected = c.id === currentCountry.id;
            return (
              <button
                key={c.id}
                onClick={() => handleCountryClick(c.id)}
                className={`p-3 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center gap-1.5 group ${
                  isSelected
                    ? 'bg-white border-2 border-[#10b981] shadow-lg scale-105 ring-4 ring-[#10b981]/15'
                    : 'bg-white/90 hover:bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div className="text-2xl leading-none">{c.flag}</div>
                <div className="font-bold text-xs text-slate-900 truncate w-full">{c.name}</div>
                <div className="text-[11px] font-black text-[#10b981]">{formatPrice(c.priceUSD)}</div>
              </button>
            );
          })}
        </div>

        {/* Active Country Rich Media & Details Canvas */}
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
                  {currentCountry.flag} {currentCountry.name}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#10b981] text-white text-xs font-black shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>{currentCountry.rating}</span>
                </span>
              </div>

              <button
                onClick={() => onOpenImageLightbox(activePhotoUrl)}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/30 text-xs font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>HD Rasmni Ochish</span>
              </button>
            </div>

            {/* Photo Gallery Switcher Strip */}
            {currentCountry.gallery && (
              <div className="relative z-10 my-4 flex flex-wrap gap-2">
                {currentCountry.gallery.map((photo, idx) => (
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
                    <span>{photo.title}</span>
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
                {currentCountry.name} — {currentCountry.title}
              </h3>
            </div>

          </div>

          {/* Right: Comprehensive Info, Flights, Weather & Booking (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            
            <div className="space-y-6">
              
              {/* Header Title & Tagline */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#10b981] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>To'liq Tur Paketi & Qulayliklar</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900">
                  {currentCountry.name} Ta'tili
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {currentCountry.description}
                </p>
              </div>

              {/* 4 Fast Facts Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Hozirgi Harorat</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{currentCountry.weather}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Shield className="w-4 h-4 text-[#10b981]" />
                    <span>Viza Rejimi</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{currentCountry.visa}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Plane className="w-4 h-4 text-sky-600" />
                    <span>Parvoz Davomiyligi</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{currentCountry.flightHours}</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>Eng Yaxshi Fasl</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{currentCountry.bestSeason}</div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Tur Paketiga Kiritilgan Asosiy Xizmatlar:
                </span>
                <div className="space-y-1.5">
                  {currentCountry.highlights?.map((h, idx) => (
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
                  <span className="text-xs text-slate-400 font-bold block">Boshlang'ich Narx (1 kishi):</span>
                  <div className="text-3xl font-black text-[#10b981]">
                    {formatPrice(currentCountry.priceUSD)}
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Aviachipta + 5★ Mehmonxona
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={() => onOpenBooking({
                    country: `${currentCountry.name} (${currentCountry.title})`,
                    flightClass: 'Ekonom / Biznes',
                    hotelStar: '5★ Luxury Resort',
                    priceUSD: currentCountry.priceUSD
                  })}
                  className="py-3.5 px-4 rounded-2xl btn-primary-emerald font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  <span>Hoziroq Bron Qilish</span>
                </button>

                <button
                  onClick={() => onOpenCalculatorWithCountry(currentCountry.id)}
                  className="py-3.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>Kalkulyatorda Hisoblash</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
