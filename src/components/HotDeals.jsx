import React, { useState, useEffect } from 'react';
import { Flame, Clock, CheckCircle2, ArrowRight, Plane } from 'lucide-react';
import { HOT_DEALS, EXCHANGE_RATE } from '../data/travelData';

export default function HotDeals({ currency, onOpenBooking }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (usdAmount) => {
    if (currency === 'UZS') {
      return (usdAmount * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + usdAmount.toLocaleString('en-US');
  };

  return (
    <section id="deals" className="py-20 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 text-blue-700" />
              <span>Qaynoq Chegirmalar va Maxsus Takliflar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Cheklangan Muddatli <br />
              <span className="text-blue-700">
                Super Qaynoq Turlar
              </span>
            </h2>
          </div>

          {/* Flash Sale Countdown Timer */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 flex items-center gap-3.5 shadow-sm">
            <Clock className="w-7 h-7 text-blue-700" />
            <div>
              <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Aksiya tugashiga qoldi:</div>
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-black text-slate-900 font-mono mt-1">
                <span className="bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-blue-700 text-white px-2.5 py-1 rounded-xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOT_DEALS.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-700 text-white shadow-md">
                      {deal.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-semibold">
                    <span>{deal.country}</span>
                    <span className="bg-black/60 px-2.5 py-0.5 rounded-lg border border-white/20">{deal.days}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                    {deal.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                    {deal.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Book Button Bottom */}
              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-baseline justify-between border-t border-slate-100 pt-3">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-2 font-mono">
                      {formatPrice(deal.oldPriceUSD)}
                    </span>
                    <div className="text-2xl font-black text-blue-700">
                      {formatPrice(deal.newPriceUSD)}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    Tejaldi: {formatPrice(deal.oldPriceUSD - deal.newPriceUSD)}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking({
                    country: deal.country,
                    countryId: deal.countryId,
                    title: deal.title,
                    priceUSD: deal.newPriceUSD
                  })}
                  className="w-full py-3 px-4 rounded-2xl btn-primary-blue font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Plane className="w-4 h-4" />
                  <span>Chegirmada Band Qilish</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
