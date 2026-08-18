import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../../data/travelData';

export default function Reviews({ t, lang = 'uz' }) {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-200">
      
      {/* 100% Pure, Razor-Sharp VIP Aircraft Cabin Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=2600&q=100"
          alt="VIP First Class Cabin"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-950/40"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#10b981] text-[#10b981]" />
              <span>{t.reviews.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.reviews.title1} <br />
              <span className="text-[#10b981]">
                {t.reviews.title2}
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              {t.reviews.desc}
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((r) => {
            let reviewText = r.text || r.comment;
            let roleText = r.role || r.city;
            let countryText = r.country;

            if (lang === 'ru') {
              if (r.id === 1) {
                reviewText = 'Мы поехали семьей на скоростном поезде Афросиаб в Самарканд и Бухару на 4 дня. Организация LOTOS FIELD на высшем уровне – отели чистые, гиды невероятно образованные!';
                roleText = 'Предприниматель, Ташкент';
                countryText = 'Тур по Самарканду и Бухаре';
              } else if (r.id === 2) {
                reviewText = 'Ночные огни Ичан-Калы и древние виды Аяз-калы в Элликкале запомнятся на всю жизнь. Мы еще раз убедились, насколько прекрасна и богата история нашей страны.';
                roleText = 'Врач, Фергана';
                countryText = 'Экспедиция Хива & Элликкала';
              } else if (r.id === 3) {
                reviewText = 'Водопад Сангардак и чистейший горный воздух Байсуна, целебный источник Омонхона — настоящее чудо природы! Все организовано точно в срок и по высшему разряду.';
                roleText = 'Архитектор, Наманган';
                countryText = 'Сурхандарья Сангардак & Байсун';
              }
            } else if (lang === 'en') {
              if (r.id === 1) {
                reviewText = 'Our family took the high-speed Afrosiyob train for a 4-day journey to Samarkand and Bukhara. LOTOS FIELD organized everything flawlessly — immaculate hotels and brilliant guides!';
                roleText = 'Entrepreneur, Tashkent';
                countryText = 'Samarkand & Bukhara Tour';
              } else if (r.id === 2) {
                reviewText = 'The night lights of Ichan Kala and the ancient fortresses of Ayaz Kala in Ellikqala were breathtaking. Truly an unforgettable immersion into Uzbekistan\'s timeless heritage.';
                roleText = 'Physician, Fergana';
                countryText = 'Khiva & Ellikqala Expedition';
              } else if (r.id === 3) {
                reviewText = 'Sangardak waterfall, the fresh mountain breeze of Boysun, and the healing springs of Omonkhona are real wonders of nature! Transit, hotel, and meals were 100% on point.';
                roleText = 'Architect, Namangan';
                countryText = 'Surkhandarya Sangardak & Boysun';
              }
            }

            return (
              <div
                key={r.id}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(r.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-emerald-100 group-hover:text-emerald-300 transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6">
                    "{reviewText}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#10b981] shadow-xs"
                    />
                    <div>
                      <h4 className="text-sm font-black text-slate-900 leading-tight">{r.name}</h4>
                      <span className="text-[11px] text-slate-400 font-medium block">{roleText}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full block">
                      {countryText}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block font-medium">{r.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
