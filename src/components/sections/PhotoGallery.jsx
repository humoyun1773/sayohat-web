import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, MapPin, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GALLERY_PHOTOS = [
  {
    id: 'g-plane',
    category: 'transport',
    titleUz: 'Sayohat Samolyoti va Moviy Osmon',
    titleRu: 'Туристический Авиарейс и Небо',
    titleEn: 'Travel Flight & Blue Sky',
    locationUz: 'O\'zbekiston Bo\'ylab',
    locationRu: 'По всему Узбекистану',
    locationEn: 'Across Uzbekistan',
    image: '/images/plane-bg.png',
    span: 'col-span-1 sm:col-span-2 row-span-2'
  },
  {
    id: 'g-scrooge',
    category: 'culture',
    titleUz: 'VIP Sayohat & Moliyaviy Barqarorlik',
    titleRu: 'VIP Путешествия и Премиум Сервис',
    titleEn: 'VIP Travel & Golden Service',
    locationUz: 'LOTOS FIELD Club',
    locationRu: 'LOTOS FIELD Club',
    locationEn: 'LOTOS FIELD Club',
    image: '/images/scrooge-bg.png',
    span: 'col-span-1 sm:col-span-2'
  },
  {
    id: 'g-1',
    category: 'samarkand',
    titleUz: 'Registon Maydoni Tillakori jilosi',
    titleRu: 'Сияние медресе Тилля-Кари на Регистане',
    titleEn: 'Registan Square Tillya-Kori Splendor',
    locationUz: 'Samarqand shahri',
    locationRu: 'г. Самарканд',
    locationEn: 'Samarkand City',
    image: '/images/landmarks/samarkand-registan.png',
    span: 'col-span-1 sm:col-span-2'
  },
  {
    id: 'g-2',
    category: 'bukhara',
    titleUz: 'Buxoro Ark Qal\'asi va Minorai Kalon',
    titleRu: 'Цитадель Арк и Минарет Калян',
    titleEn: 'Bukhara Ark Citadel & Kalyan Minaret',
    locationUz: 'Buxoroyi Sharif',
    locationRu: 'Священная Бухара',
    locationEn: 'Noble Bukhara',
    image: '/images/landmarks/bukhara-ark.png',
    span: 'col-span-1'
  },
  {
    id: 'g-3',
    category: 'khiva',
    titleUz: 'Xiva Ichan Qal\'a va Kalta Minor',
    titleRu: 'Ичан-Кала и Минарет Кальта-Минор',
    titleEn: 'Ichan Kala & Kalta Minor in Khiva',
    locationUz: 'Xorazm, Xiva',
    locationRu: 'Хорезм, Хива',
    locationEn: 'Khorezm, Khiva',
    image: '/images/landmarks/khiva-ichan-kala.png',
    span: 'col-span-1'
  },
  {
    id: 'g-suv',
    category: 'transport',
    titleUz: 'Qashqadaryo & Hisor Tog\' Yo\'llari (SUV)',
    titleRu: 'Горные маршруты Кашкадарьи и Гиссара',
    titleEn: 'Kashkadarya & Hissar Mountain SUV Roads',
    locationUz: 'Qashqadaryo viloyati',
    locationRu: 'Кашкадарьинская область',
    locationEn: 'Kashkadarya Region',
    image: '/images/honda-suv.png',
    span: 'col-span-1 sm:col-span-2'
  },
  {
    id: 'g-fiat',
    category: 'transport',
    titleUz: 'Toshkent va Samarqand Shahar Sayrlari',
    titleRu: 'Городские Экскурсии и Автопарк',
    titleEn: 'City Excursions & Modern Auto Fleet',
    locationUz: 'Shahar sayohatlari',
    locationRu: 'Городские туры',
    locationEn: 'City Tours',
    image: '/images/fiat-retro.png',
    span: 'col-span-1'
  },
  {
    id: 'g-shahrisabz',
    category: 'samarkand',
    titleUz: 'Amir Temur Oqsaroy Majmuasi',
    titleRu: 'Дворец Аксарай Амира Тимура',
    titleEn: 'Amir Timur Ak-Saray Palace',
    locationUz: 'Qashqadaryo, Shahrisabz',
    locationRu: 'Шахрисабз',
    locationEn: 'Shahrisabz',
    image: '/images/landmarks/oqsaroy-shahrisabz.png',
    span: 'col-span-1'
  },
  {
    id: 'g-termiz',
    category: 'nature',
    titleUz: 'Surxondaryo Hakim at-Termiziy va Sangardak',
    titleRu: 'Сурхандарья: Термез и Сангардак',
    titleEn: 'Surkhandarya Termez & Sangardak',
    locationUz: 'Surxondaryo, Termiz',
    locationRu: 'Сурхандарья, Термез',
    locationEn: 'Surkhandarya, Termez',
    image: '/images/landmarks/termiz-historic.png',
    span: 'col-span-1'
  },
  {
    id: 'g-zomin',
    category: 'nature',
    titleUz: 'Zomin Milliy Bog\'i & Osma Shisha Ko\'prik',
    titleRu: 'Зааминский парк и Стеклянный Мост',
    titleEn: 'Zaamin National Park & Glass Bridge',
    locationUz: 'Jizzax, Zomin',
    locationRu: 'Джизак, Заамин',
    locationEn: 'Jizzakh, Zaamin',
    image: '/images/landmarks/uzbekistan-mountains.png',
    span: 'col-span-1 sm:col-span-2'
  },
  {
    id: 'g-tashkent',
    category: 'transport',
    titleUz: 'Toshkent Teleminorasi & Poytaxt Manzarasi',
    titleRu: 'Ташкентская Телебашня и Панорама',
    titleEn: 'Tashkent TV Tower & Capital View',
    locationUz: 'Toshkent shahri',
    locationRu: 'г. Ташкент',
    locationEn: 'Tashkent City',
    image: '/images/landmarks/tashkent-tv-tower.png',
    span: 'col-span-1'
  },
  {
    id: 'g-driver',
    category: 'transport',
    titleUz: 'Professional Haydovchilar & Transfer Xizmati',
    titleRu: 'Профессиональные Водители и Трансфер',
    titleEn: 'Professional Drivers & VIP Transfer',
    locationUz: '24/7 Xizmat',
    locationRu: '24/7 Сервис',
    locationEn: '24/7 Service',
    image: '/images/taxi-driver.png',
    span: 'col-span-1'
  }
];

export default function PhotoGallery() {
  const { lang, openLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelUz: 'Barcha Rasmlar (12+)', labelRu: 'Все Фото (12+)', labelEn: 'All Photos (12+)' },
    { id: 'samarkand', labelUz: '🏛️ Samarqand', labelRu: '🏛️ Самарканд', labelEn: '🏛️ Samarkand' },
    { id: 'bukhara', labelUz: '🕌 Buxoro', labelRu: '🕌 Бухара', labelEn: '🕌 Bukhara' },
    { id: 'khiva', labelUz: '🏰 Xiva', labelRu: '🏰 Хива', labelEn: '🏰 Khiva' },
    { id: 'nature', labelUz: '🏔️ Zomin & Tog\'lar', labelRu: '🏔️ Заамин и Горы', labelEn: '🏔️ Mountains & Nature' },
    { id: 'food', labelUz: '🍲 Milliy Taomlar', labelRu: '🍲 Кухня и Плов', labelEn: '🍲 Cuisine & Pilaf' },
    { id: 'transport', labelUz: '🚌 VIP Avtobuslar', labelRu: '🚌 Автобусы', labelEn: '🚌 Tourist Coaches' },
    { id: 'hotels', labelUz: '🏨 4★ Mehmonxonalar', labelRu: '🏨 Отели', labelEn: '🏨 4★ Hotels' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1.5 mb-2">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'ru' ? 'HD Фотогалерея' : lang === 'en' ? 'HD Photo Gallery' : 'Jonli HD Fotogalereya'}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === 'ru' 
              ? 'Красота Узбекистана в Кадрах LOTOS FIELD' 
              : lang === 'en'
              ? 'The Beauty of Uzbekistan Captured by LOTOS FIELD'
              : 'O\'zbekistonning Sehrli Manzaralari Rasmlarda'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            {lang === 'ru'
              ? 'Более 1,000+ реальных фотографий памятников, комфортных отелей, автобусов и национальной кухни'
              : lang === 'en'
              ? 'Over 1,000+ real photographs of monuments, 4★ hotels, tourist coaches, and culinary feasts'
              : '1,000 dan ortiq muazzam obidalar, 4★ mehmonxonalar, qulay avtobuslar va milliy taomlar suratlari'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{filteredPhotos.length} {lang === 'ru' ? 'фотографий' : lang === 'en' ? 'photos' : 'ta rasm'}</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => {
          const isSelected = activeCategory === cat.id;
          const label = lang === 'ru' ? cat.labelRu : lang === 'en' ? cat.labelEn : cat.labelUz;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all whitespace-nowrap cursor-pointer border ${
                isSelected
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-2xs'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Masonry / Grid Gallery */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredPhotos.map((photo, idx) => {
            const title = lang === 'ru' ? photo.titleRu : lang === 'en' ? photo.titleEn : photo.titleUz;
            const location = lang === 'ru' ? photo.locationRu : lang === 'en' ? photo.locationEn : photo.locationUz;

            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/90 transition-all duration-500 bg-slate-900 cursor-pointer min-h-[260px] sm:min-h-[300px] flex flex-col justify-end ${photo.span}`}
                onClick={() => openLightbox && openLightbox(photo.image, title)}
              >
                {/* Photo Image */}
                <img
                  src={photo.image}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Top Quick Actions */}
                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 shadow-md group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Photo Info */}
                <div className="relative z-10 p-4 sm:p-5 space-y-1 text-white">
                  <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-lg border border-emerald-800 backdrop-blur-xs mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{location}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white leading-snug drop-shadow-sm group-hover:text-emerald-300 transition-colors">
                    {title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
