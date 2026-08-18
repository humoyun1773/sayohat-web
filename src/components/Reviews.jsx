import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, MapPin } from 'lucide-react';
import { REVIEWS } from '../data/travelData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Haqiqiy Fikrlar & Taassurotlar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mijozlarimiz Biz Haqimizda <br />
            <span className="text-amber-600">
              Nima Deyishadi?
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Har bir sayohat – bu yangi bir hayot. LOTOS FIELD xizmatlaridan foydalangan yurtdoshlarimizning samimiy fikrlari.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-amber-400 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-sky-700 font-bold flex items-center gap-1 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    {rev.country}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* User Avatar and Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-500 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-xs text-slate-500 block">{rev.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
