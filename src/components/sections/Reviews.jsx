import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../../data/travelData';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

export default function Reviews({ t, lang = 'uz' }) {
  return (
    <section id="reviews" className="py-16 sm:py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-black uppercase tracking-wider">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span>{lang === 'ru' ? '4.99 ★ Рейтинг Доверия Клиентов' : lang === 'en' ? '4.99 ★ Verified Customer Rating' : '4.99 ★ Haqiqiy Mijozlar Bahosi'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t.reviews.title1} <br />
            <span className="text-emerald-600">
              {t.reviews.title2}
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            {t.reviews.desc}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => {
            const reviewText = lang === 'ru' ? r.textRu : lang === 'en' ? r.textEn : r.textUz;
            const roleText = lang === 'ru' ? r.roleRu : lang === 'en' ? r.roleEn : r.roleUz;
            const countryText = lang === 'ru' ? r.countryRu : lang === 'en' ? r.countryEn : r.countryUz;
            const dateText = lang === 'ru' ? r.dateRu : lang === 'en' ? r.dateEn : r.dateUz;

            return (
              <Card
                key={r.id}
                className="flex flex-col justify-between group hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 bg-white border border-slate-200"
              >
                <div>
                  {/* Card Header with Rating & Quote Icon */}
                  <CardHeader className="p-6 pb-3 flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(r.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-emerald-100 group-hover:text-emerald-300 transition-colors" />
                  </CardHeader>

                  {/* Review Body */}
                  <CardContent className="p-6 pt-0">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      "{reviewText}"
                    </p>
                  </CardContent>
                </div>

                {/* Author Info in Card Footer */}
                <CardFooter className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 shadow-xs"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {lang === 'ru' ? (r.nameRu || r.name) : lang === 'en' ? (r.nameEn || r.name) : (r.nameUz || r.name)}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium block">{roleText}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold block mb-1">
                      {countryText}
                    </Badge>
                    <span className="text-[10px] text-slate-400 block font-medium">{dateText}</span>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
