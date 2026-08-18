import React, { useState, useEffect } from 'react';
import { 
  Calculator, Plane, Hotel, Users, Calendar, 
  Sparkles, CheckCircle2, ShieldCheck, DollarSign, ArrowRight 
} from 'lucide-react';
import { COUNTRIES, EXCHANGE_RATE } from '../data/travelData';

export default function PriceCalculator({ 
  preSelectedCountryId, 
  currency, 
  onOpenBooking 
}) {
  const [countryId, setCountryId] = useState(preSelectedCountryId || 'turkey');
  const [flightClass, setFlightClass] = useState('economy'); // economy, premium, business
  const [hotelStar, setHotelStar] = useState('4'); // 3, 4, 5
  const [durationDays, setDurationDays] = useState(7);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [needInsurance, setNeedInsurance] = useState(true);
  const [needVipTransfer, setNeedVipTransfer] = useState(false);
  const [needTourGuide, setNeedTourGuide] = useState(false);

  useEffect(() => {
    if (preSelectedCountryId) {
      setCountryId(preSelectedCountryId);
    }
  }, [preSelectedCountryId]);

  const selectedCountry = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];

  // Price Calculation Formula
  const basePrice = selectedCountry.basePriceUSD;
  
  // Flight class multiplier
  let flightMultiplier = 1;
  if (flightClass === 'premium') flightMultiplier = 1.35;
  if (flightClass === 'business') flightMultiplier = 2.2;

  // Hotel multiplier
  let hotelMultiplier = 1;
  if (hotelStar === '3') hotelMultiplier = 0.8;
  if (hotelStar === '4') hotelMultiplier = 1.0;
  if (hotelStar === '5') hotelMultiplier = 1.45;

  // Duration factor
  const baseDuration = 7;
  const durationFactor = durationDays / baseDuration;

  // Extras
  const insuranceCost = needInsurance ? (adultsCount + childrenCount) * 20 : 0;
  const transferCost = needVipTransfer ? 80 : 0;
  const guideCost = needTourGuide ? durationDays * 35 : 0;

  // Base per-person calculation
  const calculatedPerAdult = Math.round(basePrice * flightMultiplier * hotelMultiplier * durationFactor);
  const calculatedPerChild = Math.round(calculatedPerAdult * 0.65);

  const totalUSD = (calculatedPerAdult * adultsCount) + (calculatedPerChild * childrenCount) + insuranceCost + transferCost + guideCost;

  const formatPrice = (usdAmount) => {
    if (currency === 'UZS') {
      return (usdAmount * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + usdAmount.toLocaleString('en-US');
  };

  const handleBookCalculatedTour = () => {
    onOpenBooking({
      country: selectedCountry.name,
      countryId: selectedCountry.id,
      priceUSD: totalUSD,
      flightClass: flightClass === 'economy' ? 'Ekonom' : flightClass === 'premium' ? 'Premium Ekonom' : 'Biznes Klass',
      hotelStar: `${hotelStar}★ Mehmonxona`,
      durationDays: durationDays,
      adultsCount: adultsCount,
      childrenCount: childrenCount,
    });
  };

  return (
    <section id="calculator" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Aqlli Narx Hisoblagich & Live Narxlar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sayohat Narxini <br />
            <span className="text-sky-600">
              Jonli Hisoblang!
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Parvoz klassi, mehmonxona darajasi, sayohatchilar soni va qo'shimcha qulayliklarni tanlang — narx bir zumda hisoblanadi.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            
            {/* 1. Country Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Yo'nalish va Davlatni tanlang
              </label>
              <select
                value={countryId}
                onChange={(e) => setCountryId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 hover:border-sky-400 text-slate-900 rounded-2xl px-4 py-3.5 text-sm font-bold focus:ring-2 focus:ring-sky-500 focus:bg-white outline-none cursor-pointer transition-all"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {c.name} — Boshlang'ich narx: ${c.basePriceUSD}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Flight Class */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Parvoz / Aviachipta klassi
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'economy', label: 'Ekonom', desc: 'Standart qulaylik' },
                  { id: 'premium', label: 'Premium', desc: 'Qo\'shimcha joy' },
                  { id: 'business', label: 'Biznes Klass', desc: 'VIP Lounge & Xizmat' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFlightClass(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      flightClass === item.id
                        ? 'bg-sky-50 border-sky-600 text-sky-900 shadow-sm ring-1 ring-sky-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Hotel Stars */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Mehmonxona Darajasi
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { stars: '3', label: '3★ Standart', desc: 'Shinam va hamyonbop' },
                  { stars: '4', label: '4★ Komfort', desc: 'Basseyn & Nonushta' },
                  { stars: '5', label: '5★ Ultra Lyuks', desc: 'VIP All-Inclusive' }
                ].map((item) => (
                  <button
                    key={item.stars}
                    type="button"
                    onClick={() => setHotelStar(item.stars)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      hotelStar === item.stars
                        ? 'bg-amber-50 border-amber-600 text-amber-900 shadow-sm ring-1 ring-amber-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-amber-800">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Duration and Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Duration Slider */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>Kunlar davomiyligi:</span>
                  <span className="text-sky-700 font-extrabold">{durationDays} kun / {durationDays - 1} kecha</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="21"
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                  <span>3 kun</span>
                  <span>7 kun</span>
                  <span>14 kun</span>
                  <span>21 kun</span>
                </div>
              </div>

              {/* People Counter */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Kattalar:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAdultsCount(Math.max(1, adultsCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-slate-900 w-4 text-center">{adultsCount}</span>
                    <button
                      onClick={() => setAdultsCount(Math.min(10, adultsCount + 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                  <span className="text-xs font-bold text-slate-700">Bolalar (2-12 yosh):</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-amber-700 w-4 text-center">{childrenCount}</span>
                    <button
                      onClick={() => setChildrenCount(Math.min(6, childrenCount + 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* 5. Additional Perks */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Qo'shimcha Qulayliklar:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                
                <label className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-sky-400 transition-all">
                  <input
                    type="checkbox"
                    checked={needInsurance}
                    onChange={(e) => setNeedInsurance(e.target.checked)}
                    className="accent-sky-600 w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-slate-800">Tibbiy Sug'urta (+20$)</span>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-sky-400 transition-all">
                  <input
                    type="checkbox"
                    checked={needVipTransfer}
                    onChange={(e) => setNeedVipTransfer(e.target.checked)}
                    className="accent-sky-600 w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-slate-800">VIP Transfer (+80$)</span>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-sky-400 transition-all">
                  <input
                    type="checkbox"
                    checked={needTourGuide}
                    onChange={(e) => setNeedTourGuide(e.target.checked)}
                    className="accent-sky-600 w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-slate-800">O'zbek Gidi (+35$/kun)</span>
                </label>

              </div>
            </div>

          </div>

          {/* Results & Invoice Summary Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedCountry.flag}</span>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{selectedCountry.name}</h4>
                  <p className="text-xs text-slate-500">{durationDays} kunlik to'liq tur paketi</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Chegirma bilan
              </span>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Aviaparvoz ({flightClass === 'economy' ? 'Ekonom' : flightClass === 'premium' ? 'Premium' : 'Biznes'}):</span>
                <span className="font-bold text-slate-900">{formatPrice(Math.round(basePrice * 0.45 * flightMultiplier * (adultsCount + childrenCount * 0.8)))}</span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Mehmonxona ({hotelStar}★, {durationDays} kun):</span>
                <span className="font-bold text-slate-900">{formatPrice(Math.round(basePrice * 0.55 * hotelMultiplier * durationFactor * (adultsCount + childrenCount * 0.5)))}</span>
              </div>

              {(insuranceCost > 0 || transferCost > 0 || guideCost > 0) && (
                <div className="flex justify-between text-slate-600">
                  <span>Qo'shimcha xizmatlar:</span>
                  <span className="font-bold text-amber-700">
                    +{formatPrice(insuranceCost + transferCost + guideCost)}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-slate-500 text-xs pt-1">
                <span>Sayohatchilar:</span>
                <span className="font-semibold text-slate-800">{adultsCount} katta {childrenCount > 0 ? `, ${childrenCount} bola` : ''}</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Jami Hisoblangan Summa:
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-600">
                {formatPrice(totalUSD)}
              </div>
              {currency === 'UZS' && (
                <div className="text-xs text-slate-500">
                  (${totalUSD.toLocaleString()} AQSH Dollari)
                </div>
              )}
            </div>

            {/* Call to Action Button */}
            <button
              onClick={handleBookCalculatedTour}
              className="w-full py-4 px-6 rounded-2xl btn-gold font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>USHBU BUYURTMANI BRON QILISH</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Oldindan hech qanday majburiy to'lovsiz</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
