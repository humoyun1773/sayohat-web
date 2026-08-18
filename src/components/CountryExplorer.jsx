import React, { useState } from 'react';
import { 
  Globe, Sun, SunMedium, CloudSun, Compass, 
  MapPin, Clock, Calendar, ShieldCheck, DollarSign, 
  Sparkles, Camera, CheckCircle2, ArrowRight, Send, MessageCircle, Heart, Share2, Layers, Plane, Video, Image as ImageIcon
} from 'lucide-react';
import { COUNTRIES, CATEGORIES, EXCHANGE_RATE, CONTACT_INFO } from '../data/travelData';

export default function CountryExplorer({ 
  selectedCountryId, 
  onSelectCountry, 
  currency, 
  onOpenBooking, 
  onOpenImageLightbox,
  onOpenCalculatorWithCountry
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery', 'plane', 'spots', 'visa'

  // Filter countries by category
  const filteredCountries = COUNTRIES.filter((c) => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  const selectedCountry = COUNTRIES.find((c) => c.id === selectedCountryId) || COUNTRIES[0];

  const formatPrice = (usdAmount) => {
    if (currency === 'UZS') {
      return (usdAmount * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + usdAmount.toLocaleString('en-US');
  };

  return (
    <section id="countries" className="py-20 relative bg-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Globe className="w-3.5 h-3.5" />
            <span>Butun Dunyo Davlatlari & Jonli Media Galereyasi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Istalgan Davlatni Tanlang — <br />
            <span className="text-sky-600">
              Rasmlari, Parvozlari va Narxlari
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Qaysi davlat ustiga bossangiz, uning barcha HD fotosuratlari, samolyot qatnovlari, ob-havosi, viza shartlari va arzon narxlari bir zumda chiqadi!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Country Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {filteredCountries.map((c) => {
            const isSelected = c.id === selectedCountry.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  onSelectCountry(c.id);
                  setActiveImageIndex(0);
                }}
                className={`p-3.5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden border group ${
                  isSelected
                    ? 'bg-sky-50 border-2 border-sky-600 shadow-md scale-105'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
                  </span>
                )}
                <span className="text-3xl sm:text-4xl mb-1 filter drop-shadow-sm group-hover:scale-105 transition-transform">{c.flag}</span>
                <span className={`text-xs font-bold truncate max-w-full ${isSelected ? 'text-sky-800 font-extrabold' : 'text-slate-800'}`}>
                  {c.name.split(' ')[0]}
                </span>
                <span className="text-[10px] text-amber-700 font-bold mt-0.5">
                  dan {formatPrice(c.basePriceUSD)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Country Showcase Container on White Theme */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          
          {/* Top Giant Banner with Gallery Preview */}
          <div className="relative min-h-[420px] sm:min-h-[500px] flex items-end p-6 sm:p-10">
            
            {/* Background High-Res Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                key={selectedCountry.id + activeImageIndex}
                src={selectedCountry.images[activeImageIndex] || selectedCountry.coverImage}
                alt={selectedCountry.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
            </div>

            {/* Quick Gallery Swatcher on Top Right */}
            <div className="absolute top-6 right-6 z-20 flex flex-wrap justify-end gap-2.5 max-w-md">
              {selectedCountry.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shadow-lg ${
                    activeImageIndex === idx
                      ? 'border-sky-400 scale-105 ring-4 ring-sky-400/40'
                      : 'border-white/70 opacity-85 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
              
              <button
                onClick={() => onOpenImageLightbox(selectedCountry.images[activeImageIndex] || selectedCountry.coverImage)}
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 flex flex-col items-center justify-center text-slate-900 hover:bg-white transition-all shadow-lg"
                title="Rasmni to'liq ekranda ko'rish"
              >
                <Camera className="w-5 h-5 mb-0.5 text-sky-600" />
                <span className="text-[9px] font-bold uppercase">Katta Rasm</span>
              </button>
            </div>

            {/* Banner Main Titles & Info Badges */}
            <div className="relative z-10 w-full space-y-4">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-5xl sm:text-6xl drop-shadow-md">{selectedCountry.flag}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {selectedCountry.name}
                    </h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/25 text-white border border-white/40 backdrop-blur-md">
                      Poytaxt: {selectedCountry.capital}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-amber-300 font-semibold italic mt-1 drop-shadow-md">
                    "{selectedCountry.tagline}"
                  </p>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                
                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 flex items-center gap-3 text-white">
                  <div className="p-2 rounded-xl bg-amber-500/30 text-amber-300">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-300">Ob-Havo</div>
                    <div className="text-sm font-bold text-white">{selectedCountry.temp}</div>
                    <div className="text-[10px] text-amber-200 truncate max-w-[120px]">{selectedCountry.weatherDesc}</div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 flex items-center gap-3 text-white">
                  <div className="p-2 rounded-xl bg-sky-500/30 text-sky-200">
                    <Plane className="w-5 h-5 transform -rotate-45" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-300">Parvoz Vaqti</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate max-w-[130px]">{selectedCountry.flightDuration}</div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 flex items-center gap-3 text-white">
                  <div className="p-2 rounded-xl bg-emerald-500/30 text-emerald-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-300">Viza Tartibi</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-200 truncate max-w-[130px]">{selectedCountry.visa}</div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 flex items-center gap-3 text-white">
                  <div className="p-2 rounded-xl bg-purple-500/30 text-purple-200">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-300">Eng Qulay Fasl</div>
                    <div className="text-xs sm:text-sm font-bold text-purple-200 truncate max-w-[130px]">{selectedCountry.bestTime}</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Media Content Tabs Bar */}
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
            {[
              { id: 'gallery', label: '📸 Foto & Video Galereya', count: selectedCountry.images.length },
              { id: 'plane', label: '✈️ Samolyot & Parvozlar', count: 'To\'g\'ridan-to\'g\'ri' },
              { id: 'spots', label: '🏛️ Diqqatga Sazovor Joylar', count: selectedCountry.spots.length },
              { id: 'visa', label: '📋 Viza & To\'liq Ma\'lumot', count: '100% Kafolat' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content 1: Gallery */}
          {activeTab === 'gallery' && (
            <div className="p-6 sm:p-10 bg-white space-y-8">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-sky-600" />
                  {selectedCountry.name}ning Yuqori Sifatli HD Manzaralari
                </h4>
                <p className="text-xs text-slate-500">Har qanday rasm ustiga bosib uni to'liq ekranda tomosha qilishingiz mumkin</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedCountry.images.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => onOpenImageLightbox(imgUrl)}
                    className="relative h-56 rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500 group cursor-pointer shadow-sm hover:shadow-md transition-all"
                  >
                    <img
                      src={imgUrl}
                      alt="Gallery Spot"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
                      <span>Rasm #{i + 1}</span>
                      <span className="p-1.5 rounded-lg bg-black/50 border border-white/20">
                        <Camera className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 2: Airplane & Flights */}
          {activeTab === 'plane' && (
            <div className="p-6 sm:p-10 bg-white space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
                    To'g'ridan-to'g'ri Parvozlar
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Toshkentdan {selectedCountry.name}ga Xavfsiz Parvoz
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Ushbu yo'nalish bo'yicha zamonaviy keng fyuzelyajli Boeing 787 Dreamliner va Airbus laynerlarida qulay parvoz qilasiz. Parvoz davomida issiq taomlar, ichimliklar, 4K ekranlar va 23 kg bepul bagaj taqdim etiladi.
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Parvoz davomiyligi: <b>{selectedCountry.flightDuration}</b></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Viza holati: <b>{selectedCountry.visa}</b></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Bortda bepul 23kg + 8kg qo'l yuki</span>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72">
                  <img
                    src={selectedCountry.planeImage || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80'}
                    alt="Plane flight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-bold text-sky-300">Uzbekistan Airways & Hamkorlar</div>
                    <div className="text-sm font-black">Boeing 787 Dreamliner / Airbus A350</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Famous Spots */}
          {activeTab === 'spots' && (
            <div className="p-6 sm:p-10 bg-white space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedCountry.spots.map((spot, i) => (
                  <div
                    key={i}
                    onClick={() => onOpenImageLightbox(spot.img)}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500 group cursor-pointer transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={spot.img}
                        alt={spot.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-3 right-3">
                        <h5 className="text-sm font-bold text-white drop-shadow-md">{spot.name}</h5>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-slate-600 line-clamp-2">{spot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 4: Visa & Full Info */}
          {activeTab === 'visa' && (
            <div className="p-6 sm:p-10 bg-white space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                  <h5 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    Viza va Hujjatlar
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedCountry.name} bo'yicha O'zbekiston fuqarolari uchun: <b>{selectedCountry.visa}</b>. Bizning viza mutaxassislarimiz barcha anketalarni to'ldirish va elchixona suhbatiga tayyorgarlikda 100% yordam beradi.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                  <h5 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                    Valyuta & To'lovlar
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Amaldagi pul birligi: <b>{selectedCountry.currency}</b>. Shuningdek xalqaro Visa va Mastercard kartalari barcha joyda qabul qilinadi.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Footer on White Theme */}
          <div className="p-6 sm:p-10 bg-slate-50 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {selectedCountry.name} uchun to'liq tur narxi (1 kishi):
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">
                {formatPrice(selectedCountry.basePriceUSD)}
              </div>
              {currency === 'UZS' && (
                <div className="text-xs text-slate-500">taxminan ${selectedCountry.basePriceUSD} USD</div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
              
              <button
                onClick={() => onOpenBooking({
                  country: selectedCountry.name,
                  countryId: selectedCountry.id,
                  priceUSD: selectedCountry.basePriceUSD
                })}
                className="py-3.5 px-6 rounded-2xl btn-gold font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <Plane className="w-4 h-4" />
                <span>USHBU TURNI BRON QILISH</span>
              </button>

              <button
                onClick={() => onOpenCalculatorWithCountry(selectedCountry.id)}
                className="py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 flex items-center gap-2 transition-all shadow-sm"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Kalkulyatorda hisoblash</span>
              </button>

              <a
                href={`${CONTACT_INFO.telegram}?text=${encodeURIComponent(`Assalomu alaykum! Men ${selectedCountry.name} sayohati bo'yicha ma'lumot olmoqchiman.`)}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-4 rounded-2xl bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white border border-sky-200 text-xs font-bold flex items-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>

              <a
                href={`${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Assalomu alaykum! Men ${selectedCountry.name} sayohati bo'yicha ma'lumot olmoqchiman.`)}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-4 rounded-2xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 text-xs font-bold flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
