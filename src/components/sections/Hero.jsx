import React, { useState } from 'react';
import { 
  Search, Plane, MapPin, Calendar, 
  ShieldCheck, Compass 
} from 'lucide-react';
import { COUNTRIES } from '../../data/travelData';
import CustomSelect from '../ui/CustomSelect';

export default function Hero({ onSelectCountry, onOpenBooking }) {
  const [origin, setOrigin] = useState('TAS');
  const [selectedDest, setSelectedDest] = useState('turkey');
  const [date, setDate] = useState('2026-09-15');

  const originOptions = [
    { value: 'TAS', label: 'Toshkent Xalqaro (TAS)', icon: Plane },
    { value: 'SKD', label: 'Samarqand (SKD)', icon: Plane },
    { value: 'BHK', label: 'Buxoro (BHK)', icon: Plane },
    { value: 'NMA', label: 'Namangan (NMA)', icon: Plane },
    { value: 'FEG', label: 'Farg\'ona (FEG)', icon: Plane },
    { value: 'UGC', label: 'Urganch (UGC)', icon: Plane },
  ];

  const destinationOptions = COUNTRIES.map((c) => ({
    value: c.id,
    label: c.name,
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
      
      {/* 100% Pure, Razor-Sharp, Crystal-Clear Airport Terminal Interior Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2600&q=100"
          alt="Modern Luxury Airport Terminal Interior"
          className="w-full h-full object-cover object-center scale-100 filter brightness-105 contrast-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Main Title & Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-white/70 shadow-lg space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Orzuingizdagi Sayohat — <br />
              <span className="text-[#10b981]">
                Dunyoning Har Qaysi Nuqtasiga!
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
              Zamonaviy Boeing & Airbus laynerlari, 100% rasmiy vizalar, 5 yulduzli mehmonxonalar va to'g'ridan-to'g'ri reyslar.
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
                    Tezkor Tur & Aviachipta Qidiruvi
                  </span>
                  <span className="text-xs text-slate-500 font-medium">To'g'ridan-to'g'ri qatnovlar va rasmiy narxlar</span>
                </div>
              </div>

              <span className="text-xs sm:text-sm text-[#065f46] font-bold bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#a7f3d0] flex items-center gap-2 self-start sm:self-auto shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>100% Rasmiy Kafolat & Litsenziya</span>
              </span>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
              
              {/* Custom Origin Select */}
              <div className="space-y-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#10b981] transform -rotate-45" />
                  Qayerdan uchiladi?
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
                  Qaysi davlatga borasiz?
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
                  Sayohat sanasi
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
                  <span>QIDIRISH VA NARXLAR</span>
                </button>
              </div>

            </form>

            {/* Quick Country Direct Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="text-slate-600 font-bold mr-1">Ommabop yo'nalishlar:</span>
              {COUNTRIES.slice(0, 6).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    onSelectCountry(c.id);
                    document.querySelector('#countries')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#ecfdf5] hover:text-[#065f46] border border-slate-200 text-slate-700 font-bold transition-all flex items-center gap-1.5 shadow-2xs hover:scale-105"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* 4 Grand Trust Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="card-light p-6 rounded-3xl text-left bg-white">
            <div className="text-2xl sm:text-3xl font-black text-[#10b981] mb-1">50+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">Dunyo Davlatlari</div>
            <p className="text-xs text-slate-500 mt-1">To'g'ridan-to'g'ri reyslar va eksklyuziv turlar</p>
          </div>

          <div className="card-light p-6 rounded-3xl text-left bg-white">
            <div className="text-2xl sm:text-3xl font-black text-[#10b981] mb-1">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">Rasmiy Kafolat</div>
            <p className="text-xs text-slate-500 mt-1">Davlat litsenziyasi va to'liq sug'urta</p>
          </div>

          <div className="card-light p-6 rounded-3xl text-left bg-white">
            <div className="text-2xl sm:text-3xl font-black text-[#10b981] mb-1">4.9 ★</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">Mijozlar Bahosi</div>
            <p className="text-xs text-slate-500 mt-1">20,000 dan ortiq mamnun sayohatchilar</p>
          </div>

          <div className="card-light p-6 rounded-3xl text-left bg-white">
            <div className="text-2xl sm:text-3xl font-black text-[#10b981] mb-1">24/7</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900">Shaxsiy Menejer</div>
            <p className="text-xs text-slate-500 mt-1">Sayohatning har bir daqiqasida yoningizda</p>
          </div>

        </div>

      </div>
    </section>
  );
}
