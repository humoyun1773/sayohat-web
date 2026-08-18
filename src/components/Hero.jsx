import React, { useState } from 'react';
import { 
  Plane, MapPin, Calendar, Users, Search, 
  ShieldCheck, Award, Headphones, Compass 
} from 'lucide-react';
import { COUNTRIES } from '../data/travelData';
import CustomSelect from './CustomSelect';

export default function Hero({ onSelectCountry, onOpenBooking }) {
  const [selectedDest, setSelectedDest] = useState('turkey');
  const [origin, setOrigin] = useState('TAS');
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
    <section id="hero" className="relative min-h-[92vh] pt-36 pb-20 flex items-center justify-center overflow-hidden bg-white">
      
      {/* Real Giant Airplane Hero Background Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85"
          alt="Majestic Airplane Flying in Sky"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft, clean, luminous white gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Main Title & Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight drop-shadow-sm">
            Orzuingizdagi Sayohat — <br />
            <span className="text-sky-600">
              Dunyoning Har Qaysi Nuqtasiga!
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Zamonaviy Boeing & Airbus laynerlari, 100% rasmiy vizalar, 5 yulduzli mehmonxonalar va eng arzon to'g'ridan-to'g'ri reyslar.
          </p>
        </div>

        {/* Grand, Spacious Search & Booking Panel (Katta Div) */}
        <div className="w-full max-w-[1536px] mx-auto mb-14">
          <div className="bg-white/98 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 rounded-3xl border-2 border-slate-200/90 shadow-2xl shadow-slate-300/60">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-slate-100 pb-5 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 border border-sky-100 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 block">
                    Tezkor Tur & Aviachipta Qidiruvi
                  </span>
                  <span className="text-xs text-slate-500 font-medium">To'g'ridan-to'g'ri qatnovlar va rasmiy narxlar</span>
                </div>
              </div>

              <span className="text-xs sm:text-sm text-emerald-800 font-bold bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 flex items-center gap-2 self-start sm:self-auto shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Rasmiy Kafolat & Litsenziya</span>
              </span>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
              
              {/* Custom Origin Select */}
              <div className="space-y-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Plane className="w-4 h-4 text-sky-600 transform -rotate-45" />
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
                  <MapPin className="w-4 h-4 text-amber-600" />
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
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Sayohat sanasi
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-900 rounded-2xl px-4 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none cursor-pointer transition-all shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="space-y-2 text-left flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl btn-primary-blue font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Search className="w-5 h-5" />
                  <span>QIDIRISH VA NARXLAR</span>
                </button>
              </div>

            </form>

            {/* Quick Country Direct Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="text-slate-600 font-bold mr-1">Ommabop yo'nalishlar:</span>
              {[
                { id: 'turkey', label: '🇹🇷 Turkiya' },
                { id: 'uae', label: '🇦🇪 Dubay' },
                { id: 'maldives', label: '🇲🇻 Maldiv' },
                { id: 'saudi', label: '🇸🇦 Umra' },
                { id: 'switzerland', label: '🇨🇭 Shveytsariya' },
                { id: 'japan', label: '🇯🇵 Yaponiya' },
                { id: 'uzbekistan', label: '🇺🇿 O\'zbekiston' },
                { id: 'indonesia', label: '🇮🇩 Bali' },
                { id: 'france', label: '🇫🇷 Parij' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedDest(item.id);
                    onSelectCountry(item.id);
                    document.querySelector('#countries')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 border border-slate-200 transition-all font-bold shadow-xs hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=200&q=80"
                alt="Airplane"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Boeing 787 & Airbus Laynerlari</h4>
              <p className="text-xs text-slate-500 mt-1">Shovqinsiz motorlar va toza tog' havosi filtratsiyasi</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=200&q=80"
                alt="Luxury Hotel"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">5★ Ultra All-Inclusive Kurortlar</h4>
              <p className="text-xs text-slate-500 mt-1">Xususiy villalar, dengiz bo'yi va gurme taomlar</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=200&q=80"
                alt="Guide"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Tajribali O'zbek Gidlari & Viza</h4>
              <p className="text-xs text-slate-500 mt-1">Har bir sayohatchiga shaxsiy kurator va 24/7 yordam</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
