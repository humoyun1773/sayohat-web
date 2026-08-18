import React, { useState } from 'react';
import { 
  Plane, Shield, Users, Compass, 
  ChevronRight, Sparkles, CheckCircle2, 
  Calendar, ArrowUpRight, Maximize2 
} from 'lucide-react';
import { AIRPLANES_FLEET, LIVE_FLIGHTS } from '../../data/travelData';

export default function AirplaneFleet({ onOpenBooking, onOpenImageLightbox }) {
  const [selectedPlane, setSelectedPlane] = useState(AIRPLANES_FLEET[0]);
  const [activePhotoTab, setActivePhotoTab] = useState(0);

  const handleSelectPlane = (plane) => {
    setSelectedPlane(plane);
    setActivePhotoTab(0);
  };

  const currentPhoto = selectedPlane.gallery?.[activePhotoTab]?.url || selectedPlane.image;
  const currentPhotoTitle = selectedPlane.gallery?.[activePhotoTab]?.title || selectedPlane.name;

  return (
    <section id="fleet" className="py-24 relative overflow-hidden bg-slate-100 border-y border-slate-200">
      
      {/* 100% Verified Pure Razor-Sharp Tarmac Airliners Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2600&q=100"
          alt="Luxury Airliners on Tarmac"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Plane className="w-3.5 h-3.5 transform -rotate-45 text-[#10b981]" />
              <span>Zamonaviy Aviapark & HD Samolyotlar Galereyasi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Eng Xavfsiz va Hashamatli <br />
              <span className="text-[#10b981]">
                Boeing & Airbus Laynerlari
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Har bir samolyot ustiga bosing — uning tashqi ko'rinishi, VIP saloni, uchuvchilar kabinasi va bulutlar ustidagi HD fotosuratlarini tomosha qiling!
            </p>
          </div>
        </div>

        {/* 6 Planes Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
          {AIRPLANES_FLEET.map((plane) => {
            const isSelected = plane.id === selectedPlane.id;
            return (
              <button
                key={plane.id}
                onClick={() => handleSelectPlane(plane)}
                className={`p-4 sm:p-5 rounded-3xl text-left transition-all duration-300 border flex items-center gap-4 group ${
                  isSelected
                    ? 'bg-white border-2 border-[#10b981] ring-4 ring-[#10b981]/15 shadow-lg scale-[1.01]'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm relative">
                  <img
                    src={plane.image}
                    alt={plane.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#10b981]/30 flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white transform -rotate-45 drop-shadow-md" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className={`text-sm sm:text-base font-extrabold truncate ${isSelected ? 'text-slate-900 font-black' : 'text-slate-800'}`}>
                      {plane.name}
                    </h4>
                    <span className="text-[10px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full shrink-0">
                      {plane.speed}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">{plane.title}</p>
                  <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">{plane.routes}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Plane Featured Showcase Card */}
        <div className="bg-slate-900 rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-800 shadow-2xl relative mb-16 text-white">
          
          {/* Main Visual Display */}
          <div className="relative min-h-[440px] sm:min-h-[540px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            
            {/* Background Photo */}
            <div className="absolute inset-0 z-0">
              <img
                src={currentPhoto}
                alt={currentPhotoTitle}
                className="w-full h-full object-cover filter brightness-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20"></div>
            </div>

            {/* Top Bar inside showcase */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-sm">
                  {selectedPlane.routes}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#10b981] text-white text-xs font-black shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LOTOS FIELD Maxsus Floti</span>
                </span>
              </div>

              {/* Photo Lightbox expand button */}
              <button
                onClick={() => onOpenImageLightbox(currentPhoto)}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/30 text-xs font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>HD To'liq Ko'rish</span>
              </button>
            </div>

            {/* Middle: Photo Switcher Tabs */}
            {selectedPlane.gallery && (
              <div className="relative z-10 my-6 flex flex-wrap gap-2">
                {selectedPlane.gallery.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoTab(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md transition-all flex items-center gap-2 border ${
                      activePhotoTab === idx
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

            {/* Bottom: Specifications & Action */}
            <div className="relative z-10 space-y-6">
              
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#a7f3d0] mb-1">
                  {currentPhotoTitle}
                </div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
                  {selectedPlane.name}
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed">
                  {selectedPlane.description}
                </p>
              </div>

              {/* 4 Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-950/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Uchish Masofasi</span>
                  <span className="text-sm sm:text-base font-black text-white">{selectedPlane.range}</span>
                </div>
                <div className="bg-slate-950/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Maksimal Tezlik</span>
                  <span className="text-sm sm:text-base font-black text-[#10b981]">{selectedPlane.speed}</span>
                </div>
                <div className="bg-slate-950/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Sig'im / O'rinlar</span>
                  <span className="text-sm sm:text-base font-black text-white">{selectedPlane.capacity}</span>
                </div>
                <div className="bg-slate-950/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Uchish Balandligi</span>
                  <span className="text-sm sm:text-base font-black text-white">{selectedPlane.altitude}</span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2 border-t border-white/10">
                {selectedPlane.features?.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Booking Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({
                    country: `${selectedPlane.name} parvozi`,
                    flightClass: 'VIP Biznes',
                    hotelStar: '5 Yulduzli Servis',
                    priceUSD: 1200
                  })}
                  className="py-3.5 px-8 rounded-2xl btn-primary-emerald font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  <span>Ushbu Laynerda Parvozni Tanlash</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Live Flight Schedule Board */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#10b981]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  Toshkent Xalqaro Aeroporti — Jonli Parvozlar Jadvali
                </h4>
                <p className="text-xs text-slate-500 font-medium">Barcha reyslar reja asosida amalga oshirilmoqda</p>
              </div>
            </div>

            <span className="text-xs font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>LIVE DISPETCHER: ONLAYN</span>
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4">Reys №</th>
                  <th className="py-3 px-4">Yo'nalish</th>
                  <th className="py-3 px-4">Layner Turi</th>
                  <th className="py-3 px-4">Uchish Vaqti</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Harakat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {LIVE_FLIGHTS.map((flight, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{flight.flightNo}</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{flight.from} ➔ {flight.to}</td>
                    <td className="py-3.5 px-4 text-slate-600">{flight.plane}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-900 font-semibold">{flight.time}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                        <span>{flight.status}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onOpenBooking({
                          country: `${flight.from} - ${flight.to}`,
                          flightClass: 'Ekonom & Biznes',
                          hotelStar: '4-5 Yulduzli',
                          priceUSD: 650
                        })}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-200 group-hover:border-[#10b981] group-hover:bg-[#10b981] group-hover:text-white text-slate-700 text-xs font-bold transition-all shadow-xs"
                      >
                        Bron qilish
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
