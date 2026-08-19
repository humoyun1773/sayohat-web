import React from 'react';
import { 
  Flame, ArrowRight, Bus, Plane
} from 'lucide-react';
import { HOT_DEALS, EXCHANGE_RATE } from '../../data/travelData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export default function HotDeals({ onOpenBooking, _currency = 'USD', t, lang = 'uz' }) {
  // Safe price formatter with defensive number fallback
  const formatPrice = (usdAmount) => {
    const num = Number(usdAmount) || 0;
    const som = (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    const usd = '$' + num.toLocaleString('en-US');
    return `${som} (${usd})`;
  };

  return (
    <section id="deals" className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
      
      {/* 100% Pure, Crystal-Clear Khiva Ichan Kala Background - ZERO OPACITY & NO BLACK BORDERS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/landmarks/khiva-ichan-kala.png"
          alt="Khiva Ichan Kala Historical City"
          className="w-full h-full object-cover object-center scale-120"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header in High Contrast Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
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

        {/* Deals Grid using shadcn/ui Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOT_DEALS.map((deal) => {
            const oldPrice = deal.oldPriceUSD || 200;
            const newPrice = deal.newPriceUSD || 150;
            const dealTitle = lang === 'ru' ? (deal.titleRu || deal.titleUz) : lang === 'en' ? (deal.titleEn || deal.titleUz) : deal.titleUz;
            const duration = lang === 'ru' ? (deal.daysRu || deal.daysUz) : lang === 'en' ? (deal.daysEn || deal.daysUz) : deal.daysUz;
            const badgeText = lang === 'ru' ? (deal.badgeRu || deal.badgeUz) : lang === 'en' ? (deal.badgeEn || deal.badgeUz) : deal.badgeUz;
            const inclusions = lang === 'ru' ? deal.includesRu : lang === 'en' ? deal.includesEn : deal.includesUz;

            return (
              <Card 
                key={deal.id}
                className="overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Photo & Badges */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={deal.image}
                      alt={dealTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <Badge variant="emerald" className="shadow-md flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5" />
                        <span>{badgeText}</span>
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <Badge variant="secondary" className="bg-white/95 backdrop-blur-md shadow-xs font-bold text-slate-900">
                        {duration}
                      </Badge>
                    </div>
                  </div>

                  {/* Header */}
                  <CardHeader className="p-5 pb-3 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      {deal.transportType === 'plane' ? (
                        <Plane className="w-3.5 h-3.5 text-[#10b981] transform -rotate-45" />
                      ) : (
                        <Bus className="w-3.5 h-3.5 text-[#10b981]" />
                      )}
                      <span>{deal.transportType === 'plane' ? 'To\'g\'ridan-to\'g\'ri Samolyot Reysi' : 'Qulay Sayyohlik Avtobusi'}</span>
                    </div>

                    <CardTitle className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                      {dealTitle}
                    </CardTitle>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="p-5 pt-0 space-y-2">
                    {inclusions && (
                      <div className="space-y-1.5 pt-1">
                        {inclusions.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0"></span>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </div>

                {/* Footer with Pricing & CTA */}
                <CardFooter className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] text-slate-400 line-through block font-medium truncate">
                      {formatPrice(oldPrice)}
                    </span>
                    <div className="text-sm sm:text-base font-black text-[#10b981] truncate">
                      {formatPrice(newPrice)}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking({
                      country: dealTitle,
                      flightClass: deal.transportType === 'plane' ? 'To\'g\'ridan-to\'g\'ri Samolyot' : 'Qulay Sayyohlik Avtobusi',
                      hotelStar: '4★ Mehmonxona (4 kecha) + 3 mahal ovqat',
                      priceUSD: newPrice
                    })}
                    className="py-2.5 px-3.5 rounded-xl btn-primary-emerald font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 hover:scale-105 transition-all shrink-0 cursor-pointer"
                  >
                    <span>{t.deals.bookBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </CardFooter>

              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
