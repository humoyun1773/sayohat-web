import React, { useState, useEffect } from 'react';
import { 
  Plus, Image as ImageIcon, Video, Bus, Plane, 
  MapPin, Calendar, Users, Trash2, 
  Maximize2, Heart
} from 'lucide-react';
import { INITIAL_LIVE_MEDIA } from '../../data/liveMediaData';
import AddMediaModal from '../modals/AddMediaModal';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [likedTrips, setLikedTrips] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lotos_liked_trips') || '{}');
    } catch {
      return {};
    }
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('lotos_live_trips', JSON.stringify(trips));
    } catch (e) {
      console.error(e);
    }
  }, [trips]);

  // Listen to external additions
  useEffect(() => {
    const handleStorage = () => {
      try {
        const saved = localStorage.getItem('lotos_live_trips');
        if (saved) {
          setTrips(JSON.parse(saved));
        }
      } catch (e) {
        console.error(e);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleAddTrip = (newTrip) => {
    setTrips(prev => [newTrip, ...prev]);
  };

  const handleDeleteTrip = (tripId) => {
    if (window.confirm(lang === 'ru' ? 'Удалить эту публикацию?' : 'Ushbu sayohat kartasini o\'chirmoqchimisiz?')) {
      setTrips(prev => prev.filter(t => t.id !== tripId));
    }
  };

  const toggleLike = (tripId) => {
    setLikedTrips(prev => {
      const updated = { ...prev, [tripId]: !prev[tripId] };
      try {
        localStorage.setItem('lotos_liked_trips', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const filteredTrips = trips.filter(trip => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'image') return trip.mediaType === 'image';
    if (activeFilter === 'video') return trip.mediaType === 'video';
    if (activeFilter === 'bus') return trip.transportType === 'bus';
    if (activeFilter === 'plane') return trip.transportType === 'plane';
    return true;
  });

  const filterButtons = [
    { id: 'all', label: lang === 'ru' ? 'Все Записи' : 'Barchasi', count: trips.length, icon: null },
    { id: 'image', label: lang === 'ru' ? 'Фотографии' : 'Rasmlar', count: trips.filter(t => t.mediaType === 'image').length, icon: ImageIcon },
    { id: 'video', label: lang === 'ru' ? 'Videolar' : 'Videolar', count: trips.filter(t => t.mediaType === 'video').length, icon: Video },
    { id: 'bus', label: lang === 'ru' ? 'Автобус' : 'Avtobus', count: trips.filter(t => t.transportType === 'bus').length, icon: Bus },
    { id: 'plane', label: lang === 'ru' ? 'Самолет' : 'Samolyot', count: trips.filter(t => t.transportType === 'plane').length, icon: Plane },
  ];

  return (
    <section id="travel-media" className="py-12 sm:py-20 relative overflow-hidden bg-transparent">
      
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10">
        
        {/* Section Header Card */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider">
            <span>{lang === 'ru' ? 'Медиа Дневник Путешествий' : lang === 'en' ? 'Live Travel Media Diary' : 'Jonli Sayohatlar & Media'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === 'ru' ? 'Фото и Видео Отчеты с Рейсов' : lang === 'en' ? 'Live Photos & Videos From Tours' : 'Jonli Sayohatlar, Foto & Video Lavhalar'}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto leading-relaxed">
            {lang === 'ru' 
              ? 'Реальные маршруты, время отправления и прибытия, фото и видео от наших гидов и туристов.' 
              : 'Haqiqiy avtobus va samolyot turlarimizdan foto va video hisobotlar, jo\'nash va yetib borish soatlari.'}
          </p>

          {/* ADD BUTTON */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsAddModalOpen(true)}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'ru' ? '+ Добавить Фото / Видео' : '+ Yangi Rasm / Video Qo\'shish'}</span>
            </motion.button>
          </div>
        </div>

        {/* Responsive Filter Tabs Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none px-2">
          {filterButtons.map((btn) => {
            const Icon = btn.icon;
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 border ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{btn.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {btn.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Trips Media Cards Grid */}
        {filteredTrips.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 max-w-md mx-auto space-y-3">
            <Video className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="font-bold text-xs sm:text-sm">Ushbu toifada hali sayohat kartalari mavjud emas.</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white cursor-pointer shadow-sm"
            >
              + Birinchi bo'lib qo'shish
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredTrips.map((trip) => {
                const isVid = trip.mediaType === 'video';
                const isLiked = likedTrips[trip.id];

                return (
                  <motion.div
                    key={trip.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between bg-white group"
                  >
                    <div>
                      {/* Media Display Area (Video or Photo) */}
                      <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                        {isVid ? (
                          <div className="w-full h-full relative flex items-center justify-center">
                            <video
                              src={trip.mediaUrl}
                              controls
                              className="w-full h-full object-cover"
                              poster="/images/landmarks/samarkand-registan.png"
                            />
                            <div className="absolute top-3 left-3 pointer-events-none">
                              <span className="bg-red-600 text-white font-black text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                                <Video className="w-3 h-3" />
                                <span>VIDEO</span>
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div 
                            className="w-full h-full relative cursor-pointer"
                            onClick={() => onOpenImageLightbox?.(trip.mediaUrl)}
                          >
                            <img
                              src={trip.mediaUrl}
                              alt={trip.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            <div className="absolute top-3 left-3">
                              <span className="bg-emerald-600 text-white font-black text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                                <ImageIcon className="w-3 h-3" />
                                <span>RASM</span>
                              </span>
                            </div>

                            <div className="absolute top-3 right-3">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenImageLightbox?.(trip.mediaUrl);
                                }}
                                className="p-2 rounded-xl bg-black/60 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
                                title="Kattalashtirish"
                              >
                                <Maximize2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Transport Tag at bottom-left */}
                        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                          <span className="bg-white/95 text-slate-900 font-extrabold text-[11px] px-2.5 py-1 rounded-xl shadow-md flex items-center gap-1.5">
                            {trip.transportType === 'plane' ? (
                              <>
                                <Plane className="w-3 h-3 text-emerald-600 transform -rotate-45" />
                                <span>Samolyot</span>
                              </>
                            ) : (
                              <>
                                <Bus className="w-3 h-3 text-emerald-600" />
                                <span>Avtobus / Gazel</span>
                              </>
                            )}
                          </span>
                        </div>

                        {/* Route Name Tag at bottom-right */}
                        {trip.destination && (
                          <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                            <span className="bg-slate-900/85 text-white font-bold text-[10px] px-2.5 py-1 rounded-xl border border-white/20 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-emerald-400" />
                              <span>{trip.destination}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Info Body */}
                      <div className="p-5 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                            {trip.title}
                          </h3>

                          <button
                            type="button"
                            onClick={() => toggleLike(trip.id)}
                            className={`p-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                              isLiked ? 'text-red-500 bg-red-50' : 'text-slate-400 hover:text-red-500 hover:bg-slate-50'
                            }`}
                            title="Yoqdi"
                          >
                            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
                          </button>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-medium">
                          {trip.description}
                        </p>

                        {/* Trip Specs (Date, Duration, Travelers) */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                          {trip.date && (
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{trip.date}</span>
                            </div>
                          )}
                          {trip.travelers && (
                            <div className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{trip.travelers}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-medium">
                        LOTOS FIELD • Jonli Tur
                      </span>

                      <div className="flex items-center gap-2">
                        {trip.isUserAdded && (
                          <button
                            onClick={() => handleDeleteTrip(trip.id)}
                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="O'chirish"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
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
