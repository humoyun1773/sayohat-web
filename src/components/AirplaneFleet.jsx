import React, { useState } from 'react';
import { 
  Plane, Wind, ShieldCheck, Gauge, Navigation, Users, Radio 
} from 'lucide-react';
import { AIRPLANES_FLEET, LIVE_FLIGHTS } from '../data/travelData';

export default function AirplaneFleet({ onOpenBooking }) {
  const [selectedPlane, setSelectedPlane] = useState(AIRPLANES_FLEET[0]);
  const [viewMode, setViewMode] = useState('exterior'); // 'exterior' or 'cabin'

  return (
    <section id="fleet" className="py-20 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Plane className="w-3.5 h-3.5 transform -rotate-45 text-blue-700" />
            <span>Zamonaviy Aviapark & Premium Laynerlar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Eng Xavfsiz va Hashamatli <br />
            <span className="text-blue-700">
              Boeing & Airbus Laynerlari
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Parvozingiz davomida yuqori tezlikdagi Wi-Fi, 4K multimedia monitorlar, shaxsiy VIP o'rindiqlar va xalqaro servis.
          </p>
        </div>

        {/* Plane Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {AIRPLANES_FLEET.map((plane) => {
            const isSelected = plane.id === selectedPlane.id;
            return (
              <button
                key={plane.id}
                onClick={() => setSelectedPlane(plane)}
                className={`p-5 rounded-3xl text-left transition-all duration-300 border flex items-center gap-4 ${
                  isSelected
                    ? 'bg-white border-blue-600 ring-2 ring-blue-100 shadow-md scale-[1.01]'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 shadow-sm ${
                  isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  <Plane className="w-6 h-6 transform -rotate-45" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{plane.name}</h4>
                  <p className="text-xs text-slate-500 truncate max-w-[200px] mt-0.5">{plane.type}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Plane Showcase Box with Real Photos */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg mb-16">
          
          {/* Main Visual Screen */}
          <div className="relative min-h-[380px] sm:min-h-[460px] flex items-end p-6 sm:p-10">
            
            <img
              key={viewMode + selectedPlane.id}
              src={viewMode === 'exterior' ? selectedPlane.image : selectedPlane.cabinImage}
              alt={selectedPlane.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

            {/* View Switcher Controls on top right */}
            <div className="absolute top-6 right-6 z-20 flex gap-2">
              <button
                onClick={() => setViewMode('exterior')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md backdrop-blur-md ${
                  viewMode === 'exterior'
                    ? 'bg-blue-700 text-white shadow-blue-700/30'
                    : 'bg-white/80 text-slate-900 hover:bg-white border border-white/40'
                }`}
              >
                ✈️ Tashqi Ko'rinish
              </button>
              <button
                onClick={() => setViewMode('cabin')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md backdrop-blur-md ${
                  viewMode === 'cabin'
                    ? 'bg-blue-700 text-white shadow-blue-700/30'
                    : 'bg-white/80 text-slate-900 hover:bg-white border border-white/40'
                }`}
              >
                🛋️ VIP Salon & O'rindiqlar
              </button>
            </div>

            {/* Specs Overlay */}
            <div className="relative z-10 w-full space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md">
                  {selectedPlane.airline}
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Xalqaro IATA 5★ Xavfsizlik Standarti</span>
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                {selectedPlane.name}
              </h3>

              {/* Technical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                
                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600/40 text-white">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-300 font-bold">Kreyser Tezligi</div>
                    <div className="text-sm sm:text-base font-extrabold text-white">{selectedPlane.speed}</div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600/40 text-white">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-300 font-bold">Parvoz Masofasi</div>
                    <div className="text-sm sm:text-base font-extrabold text-white">{selectedPlane.range}</div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600/40 text-white">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-300 font-bold">Parvoz Balandligi</div>
                    <div className="text-sm sm:text-base font-extrabold text-white">{selectedPlane.altitude}</div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600/40 text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-300 font-bold">Sig'imi</div>
                    <div className="text-sm sm:text-base font-extrabold text-white">{selectedPlane.capacity}</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Features Checklist & Book Call to Action */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto flex-1">
              {selectedPlane.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <Plane className="w-4 h-4 text-blue-400 shrink-0 transform -rotate-45" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenBooking({
                country: 'Maxsus Aviachipta',
                title: `${selectedPlane.name} parvozi`,
                priceUSD: 450
              })}
              className="w-full lg:w-auto py-4 px-8 rounded-2xl btn-primary-blue font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Plane className="w-4 h-4" />
              <span>USHBU SAMOLYOTGA CHIPTA OLISH</span>
            </button>
          </div>

        </div>

        {/* Live Airport Board */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">Toshkent Xalqaro Aeroporti — Jonli Parvozlar Jadvali</h4>
                <p className="text-xs text-slate-500">Reyslar real vaqt rejimida avtomatik yangilanadi</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-xl border border-blue-200 flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-blue-700" />
              <span>TAS INTERNATIONAL AIRPORT LIVE</span>
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider bg-slate-50">
                  <th className="py-3 px-3">Reys No</th>
                  <th className="py-3 px-3">Qayerdan</th>
                  <th className="py-3 px-3">Qayerga</th>
                  <th className="py-3 px-3">Layner</th>
                  <th className="py-3 px-3">Vaqt</th>
                  <th className="py-3 px-3">Geyt</th>
                  <th className="py-3 px-3 text-right">Holat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {LIVE_FLIGHTS.map((flight, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-3 font-mono font-bold text-blue-700">{flight.flightNo}</td>
                    <td className="py-3.5 px-3 text-slate-700">{flight.from}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-900">{flight.to}</td>
                    <td className="py-3.5 px-3 text-slate-500">{flight.plane}</td>
                    <td className="py-3.5 px-3 font-mono text-slate-900 font-bold">{flight.time}</td>
                    <td className="py-3.5 px-3 font-mono text-slate-500">{flight.gate}</td>
                    <td className="py-3.5 px-3 text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                        {flight.status}
                      </span>
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
