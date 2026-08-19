import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import CountryExplorer from '../components/sections/CountryExplorer';
import { COUNTRIES, CATEGORIES, EXCHANGE_RATE } from '../data/travelData';
import { 
  MapPin, Bus, Plane, Calendar, Star, 
  ArrowRight, Check, Search, Sparkles, Filter
} from 'lucide-react';

export default function ToursPage() {
  const {
    lang,
    currency,
    selectedCountryId,
    setSelectedCountryId,
    openBookingModal,
    openLightbox,
    t
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredList = COUNTRIES.filter(c => {
    const name = (lang === 'ru' ? c.nameRu : lang === 'en' ? c.nameEn : c.name) || c.name;
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'all' || c.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-14">
      {/* Page Header */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block shadow-xs">
            {lang === 'ru' ? 'Все Направления и Города' : lang === 'en' ? 'All Destinations & Cities' : "Barcha Viloyatlar & Shaharlar"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'ru' ? '5-Дневные Туры по Узбекистану' : lang === 'en' ? '5-Day All-Inclusive Uzbekistan Tours' : "O'zbekiston Bo'ylab 5 Kunlik VIP Turlar"}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {lang === 'ru' 
              ? 'Транспорт (Автобус / Самолет), 4★ отели, 3-разовое питание, входные билеты и гид включены!'
              : lang === 'en'
              ? 'Transportation (Bus / Flight), 4★ hotels, full 3-course meals, entry tickets & tour guide included!'
              : "Avtobus yoki samolyotda transport, 4★ mehmonxona, 3 mahal to'liq ovqat, barcha biletlar va shaxsiy gid kiritilgan!"}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 p-4 sm:p-5 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'ru' ? 'Поиск города...' : lang === 'en' ? 'Search city...' : "Shahar yoki viloyatni qidirish..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-all shadow-xs"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCat === cat.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {lang === 'ru' ? cat.nameRu : lang === 'en' ? cat.nameEn : cat.nameUz}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Country Explorer Section */}
      <CountryExplorer
        selectedCountryId={selectedCountryId}
        onSelectCountry={setSelectedCountryId}
        currency={currency}
        onOpenBooking={openBookingModal}
        onOpenImageLightbox={openLightbox}
        t={t}
        lang={lang}
      />

      {/* Complete Grid of All Destinations */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {lang === 'ru' ? 'Каталог Всех Направлений' : lang === 'en' ? 'All Tour Destinations' : "Barcha Yo'nalishlar Katalogi"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              {lang === 'ru' ? 'Выберите подходящий тур и ознакомьтесь с программой' : lang === 'en' ? 'Select a destination to explore detailed itinerary' : "O'zingizga ma'qul turni tanlang va batafsil dastur bilan tanishing"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredList.map((country) => {
              const name = (lang === 'ru' ? country.nameRu : lang === 'en' ? country.nameEn : country.name) || country.name;
              const tagline = (lang === 'ru' ? country.taglineRu : lang === 'en' ? country.taglineEn : country.taglineUz) || country.taglineUz;
              const priceDisplay = currency === 'UZS'
                ? `${(country.basePriceUSD * EXCHANGE_RATE).toLocaleString('uz-UZ')} UZS`
                : `$${country.basePriceUSD}`;

              return (
                <div
                  key={country.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col group"
                >
                  {/* Card Cover Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={country.coverImage}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    {/* Badge Flag & Category */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-lg bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-xs">
                        {country.flag}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider block">
                          5 Kunlik VIP Paket
                        </span>
                        <span className="text-lg font-black text-white">
                          {priceDisplay}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-medium">
                        {tagline}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Avtobus / Samolyot transporti</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>4★ Mehmonxona + 3 mahal ovqat</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Link
                        to={`/tours/${country.id}`}
                        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors"
                      >
                        {lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'Details' : "Batafsil"}
                      </Link>

                      <button
                        onClick={() => openBookingModal({
                          countryId: country.id,
                          countryName: name,
                          priceUSD: country.basePriceUSD,
                          transportMode: 'bus'
                        })}
                        className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition-colors shadow-sm cursor-pointer"
                      >
                        {lang === 'ru' ? 'Бронь' : lang === 'en' ? 'Book' : "Bron qilish"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
