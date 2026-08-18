import React, { useState, useEffect } from 'react';
import { 
  Plus, Image as ImageIcon, Video, Bus, Plane, 
  MapPin, Clock, Calendar, Users, Trash2, 
  Play, Maximize2, Sparkles, Filter, CheckCircle2 
} from 'lucide-react';
import { INITIAL_LIVE_MEDIA } from '../../data/liveMediaData';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import AddMediaModal from '../modals/AddMediaModal';

export default function LiveTravelsMedia({ onOpenImageLightbox, lang = 'uz' }) {
  const [trips, setTrips] = useState(() => {
    try {
      const saved = localStorage.getItem('lotos_live_trips');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return INITIAL_LIVE_MEDIA;
    } catch {
      return INITIAL_LIVE_MEDIA;
    }
  });

  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'image' | 'video' | 'bus' | 'plane'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('lotos_live_trips', JSON.stringify(trips));
    } catch (e) {
      console.error(e);
    }
  }, [trips]);

  const handleAddTrip = (newTrip) => {
    setTrips(prev => [newTrip, ...prev]);
  };

  const handleDeleteTrip = (tripId) => {
    if (window.confirm(lang === 'ru' ? 'Удалить эту публикацию?' : 'Ushbu sayohat kartasini o\'chirmoqchimisiz?')) {
      setTrips(prev => prev.filter(t => t.id !== tripId));
    }
  };

  const filteredTrips = trips.filter(trip => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'image') return trip.mediaType === 'image';
    if (activeFilter === 'video') return trip.mediaType === 'video';
    if (activeFilter === 'bus') return trip.transportType === 'bus';
    if (activeFilter === 'plane') return trip.transportType === 'plane';
    return true;
  });

  return (
    <section id="travel-media" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg space-y-3">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
              <span>{lang === 'ru' ? 'Медиа Дневник Путешествий' : lang === 'en' ? 'Live Travel Media Diary' : 'Jonli Sayohatlar & Media'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {lang === 'ru' ? 'Фото и Видео Отчеты с Рейсов' : lang === 'en' ? 'Live Photos & Videos From Tours' : 'Jonli Sayohatlar, Foto & Video Lavhalar'}
            </h2>

            <p className="text-slate-700 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              {lang === 'ru' 
                ? 'Реальные маршруты, время отправления и прибытия, фото и видео от наших гидов и туристов. Вы также можете добавить свою поездку!' 
                : 'Haqiqiy avtobus va samolyot turlarimizdan foto va video hisobotlar, jo\'nash va yetib borish soatlari. Siz ham o\'z rasmingiz yoki videongizni qo\'shishingiz mumkin!'}
            </p>

            {/* BIG ACTION BUTTON: + ADD NEW TRIP MEDIA */}
            <div className="pt-2">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="py-4 px-8 rounded-2xl btn-primary-emerald font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 mx-auto hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Plus className="w-5 h-5" />
                <span>{lang === 'ru' ? '+ Добавить Фото / Видео Поездки' : '+ Yangi Rasm / Video va Sayohat Qo\'shish'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Filter Tabs Strip */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200'
            }`}
          >
            {lang === 'ru' ? 'Все Записи' : 'Barchasi'} ({trips.length})
          </button>

          <button
            onClick={() => setActiveFilter('image')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeFilter === 'image'
                ? 'bg-[#10b981] text-white border-[#10b981] shadow-md scale-105'
                : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Фотографии' : '📸 Rasmlar'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('video')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeFilter === 'video'
                ? 'bg-[#10b981] text-white border-[#10b981] shadow-md scale-105'
                : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Видео' : '🎥 Videolar'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('bus')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeFilter === 'bus'
                ? 'bg-[#10b981] text-white border-[#10b981] shadow-md scale-105'
                : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200'
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Автобус' : '🚌 Avtobus'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('plane')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeFilter === 'plane'
                ? 'bg-[#10b981] text-white border-[#10b981] shadow-md scale-105'
                : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200'
            }`}
          >
            <Plane className="w-4 h-4 transform -rotate-45" />
            <span>{lang === 'ru' ? 'Самолет' : '✈️ Samolyot'}</span>
          </button>

        </div>

        {/* Trips Media Cards Grid */}
        {filteredTrips.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 rounded-3xl border border-slate-200 text-slate-500">
            <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="font-bold text-sm">Ushbu toifada hali sayohat kartalari mavjud emas.</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="mt-4 px-6 py-2.5 rounded-xl btn-primary-emerald text-xs font-bold text-white cursor-pointer"
            >
              + Birinchi bo'lib qo'shish
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map((trip) => {
              const isVid = trip.mediaType === 'video';

              return (
                <Card 
                  key={trip.id} 
                  className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl hover:border-[#10b981]/50 transition-all flex flex-col justify-between bg-white group"
                >
                  <div>
                    {/* Media Display Area (Video or Photo) */}
                    <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                      {isVid ? (
                        <div className="w-full h-full relative flex items-center justify-center">
                          <video
                            src={trip.mediaUrl}
                            controls
                            className="w-full h-full object-cover"
                            poster="/images/landmarks/samarkand-registan.png"
                          />
                          <div className="absolute top-3 left-3 pointer-events-none">
                            <Badge className="bg-red-600 text-white font-black text-xs flex items-center gap-1 shadow-md">
                              <Video className="w-3.5 h-3.5" />
                              <span>VIDEO</span>
                            </Badge>
                          </div>
                        </div>
                      ) : (
                        <div 
                          className="w-full h-full relative cursor-pointer"
                          onClick={() => onOpenImageLightbox && onOpenImageLightbox(trip.mediaUrl)}
                        >
                          <img
                            src={trip.mediaUrl}
                            alt={trip.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-emerald-600 text-white font-black text-xs flex items-center gap-1 shadow-md">
                              <ImageIcon className="w-3.5 h-3.5" />
                              <span>RASM</span>
                            </Badge>
                          </div>

                          <div className="absolute top-3 right-3">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenImageLightbox && onOpenImageLightbox(trip.mediaUrl);
                              }}
                              className="p-1.5 rounded-full bg-black/60 text-white hover:bg-[#10b981] transition-colors"
                              title="Kattalashtirish"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Transport Tag at bottom-left */}
                      <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                        <Badge variant="secondary" className="bg-white/90 text-slate-900 font-extrabold text-xs shadow-md flex items-center gap-1">
                          {trip.transportType === 'plane' ? (
                            <>
                              <Plane className="w-3 h-3 text-emerald-600 transform -rotate-45" />
                              <span>Samolyot</span>
                            </>
                          ) : (
                            <>
                              <Bus className="w-3 h-3 text-[#10b981]" />
                              <span>Avtobus / Gazel</span>
                            </>
                          )}
                        </Badge>
                      </div>

                      {/* Delete button (top-right next to view) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteTrip(trip.id);
                        }}
                        className="absolute bottom-3 right-3 z-10 p-1.5 rounded-full bg-white/90 text-slate-600 hover:bg-red-500 hover:text-white transition-colors shadow-md cursor-pointer"
                        title="O'chirish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Card Content & Schedule Details */}
                    <CardContent className="p-5 sm:p-6 space-y-4">
                      
                      {/* Trip Title */}
                      <h3 className="text-base font-black text-slate-900 group-hover:text-[#10b981] transition-colors leading-snug">
                        {trip.title}
                      </h3>

                      {/* Route Banner: From ➔ To */}
                      <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-black text-emerald-950">
                          <MapPin className="w-4 h-4 text-[#10b981] shrink-0" />
                          <span className="truncate">{trip.origin}</span>
                          <span className="text-[#10b981] font-bold">➔</span>
                          <span className="truncate">{trip.destination}</span>
                        </div>
                      </div>

                      {/* Departure and Arrival Time Grid */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#10b981]" />
                            <span>Jo'nash Vaqti:</span>
                          </span>
                          <span className="text-sm font-black text-slate-900 block mt-0.5">
                            {trip.departureTime}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-500" />
                            <span>Yetib Borish:</span>
                          </span>
                          <span className="text-sm font-black text-slate-900 block mt-0.5">
                            {trip.arrivalTime}
                          </span>
                        </div>
                      </div>

                      {/* Description & Author Note */}
                      {trip.description && (
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {trip.description}
                        </p>
                      )}

                      {/* Footer Info: Author & Passengers */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{trip.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-700">
                          <Users className="w-3.5 h-3.5 text-[#10b981]" />
                          <span>{trip.passengersCount} sayyoh</span>
                        </div>
                      </div>

                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

      </div>

      {/* Add Media Modal */}
      <AddMediaModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddMedia={handleAddTrip}
        lang={lang}
      />

    </section>
  );
}
