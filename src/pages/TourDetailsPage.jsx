import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COUNTRIES, EXCHANGE_RATE, CONTACT_INFO } from '../data/travelData';
import { 
  ArrowLeft, MapPin, Bus, Plane, Star, Calendar, 
  Check, ShieldCheck, Sun, Clock, Phone, Send, 
  MessageCircle, Sparkles, Maximize2, Share2
} from 'lucide-react';

export default function TourDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    lang, 
    currency, 
    openBookingModal, 
    openLightbox 
  } = useApp();

  const [activeTransport, setActiveTransport] = useState('bus');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const country = COUNTRIES.find(c => c.id === id) || COUNTRIES.find(c => c.id === 'samarkand') || COUNTRIES[0];

  const name = (lang === 'ru' ? country.nameRu : lang === 'en' ? country.nameEn : country.name) || country.name;
  const tagline = (lang === 'ru' ? country.taglineRu : lang === 'en' ? country.taglineEn : country.taglineUz) || country.taglineUz;
  const description = (lang === 'ru' ? country.descriptionRu : lang === 'en' ? country.descriptionEn : country.descriptionUz) || country.descriptionUz;
  const visa = (lang === 'ru' ? country.visaRu : lang === 'en' ? country.visaEn : country.visaUz) || country.visaUz;
  const bestTime = (lang === 'ru' ? country.bestTimeRu : lang === 'en' ? country.bestTimeEn : country.bestTimeUz) || country.bestTimeUz;

  const pkg = country.packages?.[activeTransport] || country.packages?.bus || {};
  const currentPriceUSD = pkg.priceUSD || country.basePriceUSD || 190;
  const priceDisplay = currency === 'UZS'
    ? `${(currentPriceUSD * EXCHANGE_RATE).toLocaleString('uz-UZ')} UZS`
    : `$${currentPriceUSD}`;

  const highlights = (lang === 'ru' ? pkg.highlightsRu : lang === 'en' ? pkg.highlightsEn : pkg.highlightsUz) 
    || (lang === 'ru' ? country.highlightsRu : lang === 'en' ? country.highlightsEn : country.highlightsUz)
    || [];

  const transportLabel = lang === 'ru' ? pkg.transportLabelRu : lang === 'en' ? pkg.transportLabelEn : pkg.transportLabelUz;
  const durationText = lang === 'ru' ? pkg.durationRu : lang === 'en' ? pkg.durationEn : pkg.durationUz;

  // Spots / gallery
  const gallery = [];
  if (country.spots && country.spots.length > 0) {
    country.spots.forEach(spot => {
      const spotTitle = lang === 'ru' ? (spot.nameRu || spot.nameUz) : lang === 'en' ? (spot.nameEn || spot.nameUz) : spot.nameUz;
      gallery.push({ url: spot.img, title: spotTitle });
    });
  } else if (country.images && country.images.length > 0) {
    country.images.forEach((imgUrl, i) => {
      gallery.push({ url: imgUrl, title: `${name} ${i + 1}` });
    });
  } else {
    gallery.push({ url: country.coverImage, title: name });
  }

  const activePhoto = gallery[activePhotoIdx] || gallery[0];

  const handleBook = () => {
    openBookingModal({
      countryId: country.id,
      countryName: name,
      priceUSD: currentPriceUSD,
      transportMode: activeTransport,
    });
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Top Breadcrumb / Back button */}
      <div className="flex items-center justify-between">
        <Link
          to="/tours"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors p-2 rounded-xl hover:bg-slate-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'ru' ? 'Назад ко всем турам' : lang === 'en' ? 'Back to all tours' : "Barcha turlarga qaytish"}</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            {country.flag} {name}
          </span>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            5 Kunlik VIP All-Inclusive Tur
          </span>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>4.99 (3,400+ baho)</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {name} — 5 Kunlik Sayohati
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl font-medium">
          {tagline}
        </p>
      </div>

      {/* Hero Media + Quick Booking Action Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Main Interactive HD Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative h-[340px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider block">
                  Diqqatga sazovor maskan
                </span>
                <span className="text-base sm:text-xl font-black text-white">
                  {activePhoto.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => openLightbox(activePhoto.url)}
                className="p-3 rounded-2xl bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border border-white/30 transition-all cursor-pointer"
                title="HD rasmni kattalashtirish"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Thumbnails list */}
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
              {gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activePhotoIdx === idx
                      ? 'border-emerald-500 shadow-md scale-102'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Col: Booking Card & Transport Selector (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
          
          {/* Transport Mode Switcher */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">
              Transport turini tanlang:
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTransport('bus')}
                className={`py-3 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTransport === 'bus'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Bus className="w-4 h-4" />
                <span>Avtobus / Gazel</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTransport('plane')}
                className={`py-3 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTransport === 'plane'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>Samolyot Parvozi</span>
              </button>
            </div>
            {durationText && (
              <p className="text-[11px] text-slate-500 font-medium mt-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{durationText}</span>
              </p>
            )}
          </div>

          {/* Price Box */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                5 Kunlik To'liq Paket:
              </span>
              <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                All-Inclusive
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900">
              {priceDisplay}
            </div>
            <p className="text-[11px] text-slate-400 font-medium mt-1">
              1 kishi uchun to'liq 5 kunlik xarajatlar kiritilgan
            </p>
          </div>

          {/* Key Inclusions Highlights */}
          <div className="space-y-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
              Paket ichiga kiritilgan:
            </span>
            <div className="space-y-2 text-xs text-slate-700 font-medium">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button
            type="button"
            onClick={handleBook}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
          >
            Turni Hoziroq Band Qilish (Bron)
          </button>

          {/* Quick Direct Hotline */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-600">
            <span>Savollaringiz bormi?</span>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>

        </div>

      </div>

      {/* Description & Detailed Itinerary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
        
        {/* Left 2 Cols: Description & Overview */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              Tur Haqida Batafsil Ma'lumot
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* 5-Day Program Roadmap */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-black text-slate-900">
              5 Kunlik Sayohat Dasturi (Marshrut)
            </h3>

            <div className="space-y-3">
              {[
                { day: '1-Kun', title: 'Yetib kelish, 4★ mehmonxonaga joylashish va tanishuv sayri', desc: 'Konditsionerli transportda manzilga yetib borish, qulay xonalarga joylashish va shahar markazi bo\'ylab kechki sayr hamda milliy taomlar kechki ovqati.' },
                { day: '2-Kun', title: 'Qadimiy obidalar, yodgorliklar va muzeylar bo\'ylab ekskursiya', desc: 'Professional litsenziyali tarixchi gid hamrohligida eng mashhur me\'moriy obidalarni ziyorat qilish, tarixiy fotosessiyalar va tushlikda an\'anaviy to\'y oshi.' },
                { day: '3-Kun', title: 'Tabiat go\'shalari, tog\' manzaralari va madaniy maskanlar', desc: 'Viloyatning eng chiroyli tabiiy manzaralari, sharsharalar yoki qo\'riqxonalari bo\'ylab sayohat, ochiq havoda dam olish va milliy hunarmandchilik markazlari.' },
                { day: '4-Kun', title: 'Sharq bozori, esdalik sovg\'alari va erkin xaridlar vaqti', desc: 'Mashhur sharq bozorlarida esdalik sovg\'alar, quruq mevalar va hunarmandchilik buyumlarini xarid qilish, qiziqarli mahorat darslari.' },
                { day: '5-Kun', title: 'Ertalabki nonushta, xotira fotosuratlari va Toshkentga qaytish', desc: 'Mehmonxonada to\'yimli nonushta, sayohatchilar bilan xotira rasmlari va qulay avtobus / samolyotda xavfsiz qaytish.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-16 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                    {item.day}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Quick Facts Card */}
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-5 shadow-xl">
            <h3 className="text-base font-black text-emerald-400 uppercase tracking-wider">
              Asosiy Ma'lumotlar
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">Viloyat / Shahar:</span>
                <span className="font-bold text-white">{name}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">Tur Davomiyligi:</span>
                <span className="font-bold text-white">5 Kun / 4 Kecha</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">Hozirgi Harorat:</span>
                <span className="font-bold text-emerald-400">{country.temp || '+25°C'}</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400">Eng Yaxshi Fasl:</span>
                <span className="font-bold text-white">{bestTime}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">Reyting:</span>
                <span className="font-bold text-amber-400">★ 4.99 / 5.0</span>
              </div>
            </div>

            <button
              onClick={handleBook}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Hozir band qilish
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
