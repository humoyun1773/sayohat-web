import React from 'react';
import { 
  Flame, Plane, ArrowRight 
} from 'lucide-react';
import { HOT_DEALS, EXCHANGE_RATE } from '../../data/travelData';

export default function HotDeals({ currency = 'USD', onOpenBooking, t, lang = 'uz' }) {
  // Safe price formatter with defensive number fallback
  const formatPrice = (usdAmount) => {
    const num = Number(usdAmount) || 0;
    if (currency === 'UZS') {
      return (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + num.toLocaleString('en-US');
  };

  return (
    <section id="deals" className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-200">
      
      {/* 100% Pure, Razor-Sharp Khiva Ichan Kala Ancient City Sunset Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/landmarks/khiva-ichan-kala.png"
          alt="Khiva Ichan Kala Historical City"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-950/75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header in High Contrast Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 text-[#10b981]" />
              <span>{t.deals.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.deals.title1} <br />
              <span className="text-[#10b981]">
                {t.deals.title2}
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              {t.deals.desc}
            </p>
          </div>
        </div>

        {/* Hot Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOT_DEALS.map((deal) => {
            const oldPrice = deal.oldPriceUSD || 240;
            const newPrice = deal.newPriceUSD || 180;
            
            // Dynamic language fields
            const dealTitle = lang === 'ru' ? deal.titleRu : lang === 'en' ? deal.titleEn : deal.titleUz;
            const duration = lang === 'ru' ? deal.daysRu : lang === 'en' ? deal.daysEn : deal.daysUz;
            const badgeText = lang === 'ru' ? deal.badgeRu : lang === 'en' ? deal.badgeEn : deal.badgeUz;
            const inclusions = lang === 'ru' ? deal.includesRu : lang === 'en' ? deal.includesEn : deal.includesUz;

            return (
              <div 
                key={deal.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                
                {/* Photo & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={dealTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-[#10b981] text-white text-[11px] font-black shadow-md flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{badgeText}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs shadow-sm">
                    {duration}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Plane className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{t.deals.charterTag}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug line-clamp-2">
                      {dealTitle}
                    </h3>

                    {inclusions && (
                      <div className="space-y-1 pt-1">
                        {inclusions.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 line-through block font-medium">
                        {formatPrice(oldPrice)}
                      </span>
                      <div className="text-2xl font-black text-[#10b981]">
                        {formatPrice(newPrice)}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBooking({
                        country: dealTitle,
                        flightClass: 'VIP Tour',
                        hotelStar: '4-5★ Hotel',
                        priceUSD: newPrice
                      })}
                      className="py-3 px-4 rounded-2xl btn-primary-emerald font-black text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 hover:scale-105 transition-all"
                    >
                      <span>{t.deals.bookBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
