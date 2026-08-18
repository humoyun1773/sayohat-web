import React, { useState, useEffect } from 'react';
import { 
  Flame, Clock, Plane, ArrowRight, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { HOT_DEALS, EXCHANGE_RATE } from '../../data/travelData';

export default function HotDeals({ currency = 'USD', onOpenBooking }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
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
    <section id="deals" className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-200">
      
      {/* 100% Pure, Razor-Sharp Sunset Airplane Flight Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=2600&q=100"
          alt="Sunset Airplane Flight"
          className="w-full h-full object-cover object-center filter brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-950/40"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header in High Contrast Glass Card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 text-[#10b981]" />
              <span>Qaynoq Chegirmalar va Maxsus Takliflar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Shoshiling! Bugungi <span className="text-[#10b981]">Flash Sale</span> Narxlari
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Ushbu narxlar cheklangan miqdorda bo'lib, taymer tugashi bilan o'zgaradi.
            </p>
          </div>

          {/* Flash Sale Countdown Timer */}
          <div className="flex items-center gap-3 bg-slate-900 p-3.5 rounded-2xl border border-slate-700 shadow-md text-white shrink-0">
            <Clock className="w-5 h-5 text-[#10b981] animate-pulse" />
            <div className="flex items-center gap-1.5 font-mono text-base sm:text-lg font-black">
              <span className="bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[#10b981]">:</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[#10b981]">:</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700 text-[#10b981]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Hot Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOT_DEALS.map((deal) => (
            <div 
              key={deal.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              
              {/* Photo & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#10b981] text-white text-xs font-black shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{deal.discount}</span>
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                    {deal.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs shadow-sm">
                  {deal.duration}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Plane className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{deal.airline} • To'g'ridan-to'g'ri reys</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 leading-snug">
                    {deal.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {deal.description}
                  </p>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 line-through block font-medium">
                      {formatPrice(deal.originalPriceUSD)}
                    </span>
                    <div className="text-2xl font-black text-[#10b981]">
                      {formatPrice(deal.discountedPriceUSD)}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking({
                      country: deal.title,
                      flightClass: 'Ekonom / Biznes',
                      hotelStar: '5★ All Inclusive',
                      priceUSD: deal.discountedPriceUSD
                    })}
                    className="py-3 px-5 rounded-2xl btn-primary-emerald font-black text-xs uppercase tracking-wider shadow-md flex items-center gap-2 hover:scale-105 transition-all"
                  >
                    <span>Band qilish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
