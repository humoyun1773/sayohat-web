import React, { useState } from 'react';
import { 
  MapPin, Navigation, ExternalLink, 
  Phone, Clock, Train, Building2
} from 'lucide-react';
import { CONTACT_INFO, COUNTRIES } from '../../data/travelData';
import { Badge } from '../ui/badge';

export default function LocationMap({ _onSelectCountry, t, lang = 'uz' }) {
  const [selectedHub, setSelectedHub] = useState('tashkent-hq');

  const destinationLocations = [
    {
      id: 'tashkent-hq',
      nameUz: 'LOTOS FIELD Bosh Ofisi (Toshkent)',
      nameRu: 'Главный Офис LOTOS FIELD (Ташкент)',
      nameEn: 'LOTOS FIELD Head Office (Tashkent)',
      category: 'Bosh Markaz',
      addressUz: CONTACT_INFO.addressUz,
      addressRu: CONTACT_INFO.addressRu,
      addressEn: CONTACT_INFO.addressEn,
      metroUz: CONTACT_INFO.metroUz,
      metroRu: CONTACT_INFO.metroRu,
      metroEn: CONTACT_INFO.metroEn,
      phone: CONTACT_INFO.phone,
      googleUrl: CONTACT_INFO.googleMapsUrl,
      yandexUrl: CONTACT_INFO.yandexMapsUrl,
      embedUrl: CONTACT_INFO.embedMapUrl,
      badgeUz: 'Bosh Ofis & Bilet Kassasi',
      badgeRu: 'Главный Офис и Касса',
      badgeEn: 'Head Office & Booking Hub'
    },
    ...COUNTRIES.map(c => ({
      id: c.id,
      nameUz: c.name,
      nameRu: c.nameRu || c.name,
      nameEn: c.nameEn || c.name,
      category: 'Sayyohlik Manzili',
      addressUz: `${c.name}, ${c.taglineUz}`,
      addressRu: `${c.nameRu || c.name}, ${c.taglineRu}`,
      addressEn: `${c.nameEn || c.name}, ${c.taglineEn}`,
      metroUz: `${c.flightDurationUz} (Avtobus / Samolyot)`,
      metroRu: `${c.flightDurationRu} (Автобус / Самолет)`,
      metroEn: `${c.flightDurationEn} (Coach / Flight)`,
      phone: CONTACT_INFO.phone,
      googleUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ' Uzbekistan')}`,
      yandexUrl: `https://yandex.uz/maps/?text=${encodeURIComponent(c.name + ' Uzbekistan')}`,
      embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(c.name + ' Uzbekistan')}&t=&z=13&ie=UTF8&iwloc=&output=embed`,
      badgeUz: `${c.flag} 5 Kunlik Tur`,
      badgeRu: `${c.flag} Тур на 5 Дней`,
      badgeEn: `${c.flag} 5-Day Tour`
    }))
  ];

  const currentLoc = destinationLocations.find(l => l.id === selectedHub) || destinationLocations[0];
  const locName = lang === 'ru' ? currentLoc.nameRu : lang === 'en' ? currentLoc.nameEn : currentLoc.nameUz;
  const locAddress = lang === 'ru' ? currentLoc.addressRu : lang === 'en' ? currentLoc.addressEn : currentLoc.addressUz;
  const locMetro = lang === 'ru' ? currentLoc.metroRu : lang === 'en' ? currentLoc.metroEn : currentLoc.metroUz;
  const locBadge = lang === 'ru' ? currentLoc.badgeRu : lang === 'en' ? currentLoc.badgeEn : currentLoc.badgeUz;
  const locHours = lang === 'ru' ? CONTACT_INFO.workHoursRu : lang === 'en' ? CONTACT_INFO.workHoursEn : CONTACT_INFO.workHoursUz;

  return (
    <section id="location" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-black uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
              <span>{t.location?.badge || (lang === 'ru' ? 'Наши Офисы и Карты' : lang === 'en' ? 'Our Offices & Maps' : 'Ofisimiz & Xaritalar')}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.location?.title1 || (lang === 'ru' ? 'Наш Главный Офис и' : lang === 'en' ? 'Our Head Office and' : 'Bizning Bosh Ofisimiz va')}{' '}
              <span className="text-[#10b981]">
                {t.location?.title2 || (lang === 'ru' ? 'Локация на Карте' : lang === 'en' ? 'Map Location' : 'Xaritadagi Joylashuv')}
              </span>
            </h2>
            
            <p className="text-slate-700 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              {t.location?.desc || (lang === 'ru' 
                ? 'Посетите наш центральный офис в Ташкенте для бесплатной консультации или изучите расположение всех исторических направлений на интерактивной карте.'
                : lang === 'en' 
                ? 'Visit our central office in Tashkent for free consultation or explore destination routes on our interactive map.'
                : "Toshkent shahridagi bosh ofisimizga tashrif buyurib, bepul maslahat oling yoki xarita orqali O'zbekistonning barcha 8 ta viloyatidagi qadimiy maskanlarning joylashuvini ko'ring.")}
            </p>
          </div>
        </div>

        {/* Location Hubs Switcher Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {destinationLocations.map(hub => {
            const isSelected = hub.id === selectedHub;
            const hName = lang === 'ru' ? hub.nameRu : lang === 'en' ? hub.nameEn : hub.nameUz;
            return (
              <button
                key={hub.id}
                type="button"
                onClick={() => setSelectedHub(hub.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? 'bg-[#10b981] text-white border-[#10b981] shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#10b981]'}`} />
                <span>{hName}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Left Map + Right Detailed Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Google Map View (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[420px]">
            
            {/* Map Top Bar */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#10b981] text-white flex items-center justify-center font-bold">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">{locName}</span>
                  <span className="text-[10px] text-slate-400 font-mono">INTERACTIVE MAP • GPS VERIFIED</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentLoc.googleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={currentLoc.yandexUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Yandex Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Live Map Frame */}
            <div className="flex-1 w-full min-h-[360px] relative bg-slate-100">
              <iframe
                title={locName}
                src={currentLoc.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>

          {/* Right: Office & Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Office Info Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <Badge variant="secondary" className="text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] font-extrabold mb-1">
                    {locBadge}
                  </Badge>
                  <h3 className="text-xl font-black text-slate-900">{locName}</h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">
                      {t.location?.addressTitle || (lang === 'ru' ? 'Адрес:' : lang === 'en' ? 'Address:' : "Bosh Ofis Manzili:")}
                    </span>
                    <span className="font-extrabold text-slate-900 leading-snug block">
                      {locAddress}
                    </span>
                  </div>
                </div>

                {/* Metro */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">
                      {t.location?.metroTitle || (lang === 'ru' ? 'Ближайшее Метро / Транспорт:' : lang === 'en' ? 'Nearest Metro / Transport:' : "Eng Yaqin Metro:")}
                    </span>
                    <span className="font-extrabold text-slate-900 leading-snug block">
                      {locMetro}
                    </span>
                  </div>
                </div>

                {/* Work Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">
                      {t.location?.hoursTitle || (lang === 'ru' ? 'Время Работы:' : lang === 'en' ? 'Working Hours:' : "Ish Vaqti:")}
                    </span>
                    <span className="font-extrabold text-slate-900 leading-snug block">
                      {locHours}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">
                      {t.location?.phoneTitle || (lang === 'ru' ? 'Прямая Линия:' : lang === 'en' ? 'Hotline:' : "Tezkor Aloqa & Maslahat:")}
                    </span>
                    <a href={`tel:${CONTACT_INFO.phoneClean}`} className="font-black text-[#10b981] hover:underline text-sm block cursor-pointer">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>

              {/* Direct Navigation Button */}
              <div className="pt-2 border-t border-slate-100 flex gap-2.5">
                <a
                  href={currentLoc.googleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-2xl btn-primary-emerald font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.location?.routeBtn || (lang === 'ru' ? 'Построить Маршрут' : lang === 'en' ? 'Get Directions' : "Marshrut Chizish")}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
