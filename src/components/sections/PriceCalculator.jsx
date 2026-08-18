import React, { useState, useEffect } from 'react';
import { 
  Calculator, Plane, Hotel, Users, 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  MapPin, Clock 
} from 'lucide-react';
import { COUNTRIES, EXCHANGE_RATE } from '../../data/travelData';
import CustomSelect from '../ui/CustomSelect';

export default function PriceCalculator({ 
  preSelectedCountryId = 'turkey', 
  currency = 'USD', 
  onOpenBooking 
}) {
  const [countryId, setCountryId] = useState(preSelectedCountryId);
  const [flightClass, setFlightClass] = useState('economy'); // 'economy' or 'business'
  const [hotelStars, setHotelStars] = useState(5); // 3, 4, 5
  const [durationDays, setDurationDays] = useState(7);
  const [peopleCount, setPeopleCount] = useState(2);
  const [includeTransfer, setIncludeTransfer] = useState(true);
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [includeGuide, setIncludeGuide] = useState(false);

  useEffect(() => {
    if (preSelectedCountryId) {
      setCountryId(preSelectedCountryId);
    }
  }, [preSelectedCountryId]);

  const country = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];

  const countryOptions = COUNTRIES.map((c) => ({
    value: c.id,
    label: `${c.name} (${c.title})`,
    flag: c.flag
  }));

  // Dynamic Price Engine
  const calculateTotal = () => {
    let base = country.priceUSD;

    // Flight class multiplier
    if (flightClass === 'business') {
      base += 450;
    }

    // Hotel stars adjustment
    if (hotelStars === 4) {
      base -= 80;
    } else if (hotelStars === 3) {
      base -= 160;
    }

    // Duration adjustment (base is for 7 days)
    const dayFactor = durationDays / 7;
    let totalPerPerson = base * dayFactor;

    // Addons
    if (includeTransfer) totalPerPerson += 40;
    if (includeInsurance) totalPerPerson += 25;
    if (includeGuide) totalPerPerson += 90;

    return Math.round(totalPerPerson * peopleCount);
  };

  const totalUSD = calculateTotal();

  const formatPrice = (usdAmount) => {
    if (currency === 'UZS') {
      return (usdAmount * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + usdAmount.toLocaleString('en-US');
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-slate-900">
      
      {/* 100% Pure, Razor-Sharp Alps Mountains & Sky from Airplane Window */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=2600&q=100"
          alt="Alps Mountain Peaks from Sky"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-950/40"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Calculator className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Smart Shaffof Narxlar & Qulay Tanlov</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Sayohat Narxini <span className="text-[#10b981]">Onlayn Hisoblang</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Samolyot klassi, mehmonxona yulduzi, sayohat muddatini tanlang — yakuniy real narxni darhol bilib oling!
            </p>
          </div>
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
              <CustomSelect
                value={countryId}
                onChange={setCountryId}
                options={countryOptions}
              />
            </div>

            {/* 2. Flight Class */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Aviachipta / Parvoz Klassi
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFlightClass('economy')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    flightClass === 'economy'
                      ? 'border-2 border-[#10b981] bg-[#ecfdf5] text-[#065f46] font-bold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 font-medium'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-black">Ekonom Klass</span>
                    <Plane className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <span className="text-[11px] text-slate-500 block">Qulay va arzon standart</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFlightClass('business')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    flightClass === 'business'
                      ? 'border-2 border-[#10b981] bg-[#ecfdf5] text-[#065f46] font-bold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 font-medium'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-black">VIP Biznes Klass</span>
                    <Sparkles className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <span className="text-[11px] text-slate-500 block">180° yotadigan VIP o'rindiq</span>
                </button>
              </div>
            </div>

            {/* 3. Hotel Stars */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Mehmonxona Darajasi
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[3, 4, 5].map((stars) => (
                  <button
                    key={stars}
                    type="button"
                    onClick={() => setHotelStars(stars)}
                    className={`py-3 px-2 rounded-2xl border text-center transition-all ${
                      hotelStars === stars
                        ? 'border-2 border-[#10b981] bg-[#ecfdf5] text-[#065f46] font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 font-medium'
                    }`}
                  >
                    <div className="text-sm font-black mb-0.5">{stars} Yulduzli</div>
                    <div className="text-[10px] text-amber-500 font-bold">
                      {'★'.repeat(stars)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Sliders: Duration & People */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  <span>Sayohat Muddati:</span>
                  <span className="text-[#10b981] text-sm font-black">{durationDays} kun</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="30"
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full accent-[#10b981] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  <span>Sayohatchilar:</span>
                  <span className="text-[#10b981] text-sm font-black">{peopleCount} kishi</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                    className="w-9 h-9 rounded-xl border border-slate-200 font-bold text-base hover:bg-slate-100 flex items-center justify-center text-slate-700"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-slate-900 text-sm">{peopleCount} kishi</span>
                  <button
                    type="button"
                    onClick={() => setPeopleCount(Math.min(15, peopleCount + 1))}
                    className="w-9 h-9 rounded-xl border border-slate-200 font-bold text-base hover:bg-slate-100 flex items-center justify-center text-slate-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Add-ons Checkboxes */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Qo'shimcha Xizmatlar:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <label className="flex items-center gap-2 p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeTransfer}
                    onChange={(e) => setIncludeTransfer(e.target.checked)}
                    className="w-4 h-4 accent-[#10b981] rounded"
                  />
                  <span className="font-semibold text-slate-800">VIP Transfer (+$40)</span>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeInsurance}
                    onChange={(e) => setIncludeInsurance(e.target.checked)}
                    className="w-4 h-4 accent-[#10b981] rounded"
                  />
                  <span className="font-semibold text-slate-800">Sug'urta (+$25)</span>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeGuide}
                    onChange={(e) => setIncludeGuide(e.target.checked)}
                    className="w-4 h-4 accent-[#10b981] rounded"
                  />
                  <span className="font-semibold text-slate-800">Gid xizmati (+$90)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Real-Time Calculation Preview Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 lg:sticky lg:top-28">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">{country.flag}</span>
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{country.name}</h4>
                  <span className="text-xs text-slate-500 font-medium">{country.title}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-3 py-1 rounded-full">
                Hisoblangan Real Narx
              </span>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Parvoz ({flightClass === 'business' ? 'VIP Biznes' : 'Ekonom'}):</span>
                <span className="font-bold text-slate-900">Kiritilgan</span>
              </div>
              <div className="flex justify-between">
                <span>Mehmonxona ({hotelStars}★, {durationDays} kecha):</span>
                <span className="font-bold text-slate-900">Kiritilgan</span>
              </div>
              <div className="flex justify-between">
                <span>Sayohatchilar:</span>
                <span className="font-bold text-slate-900">{peopleCount} kishi</span>
              </div>
              <div className="flex justify-between">
                <span>Qo'shimchalar (Transfer, Sug'urta):</span>
                <span className="font-bold text-slate-900">{includeTransfer || includeInsurance || includeGuide ? 'Faol' : 'Tanlanmagan'}</span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider mb-1">
                Jami Yakuniy Narx ({peopleCount} kishi uchun):
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#10b981]">
                {formatPrice(totalUSD)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">Barcha soliqlar va yig'imlar hisobga olingan</p>
            </div>

            {/* Instant Booking Action */}
            <button
              onClick={() => onOpenBooking({
                country: `${country.name} (${country.title})`,
                flightClass: flightClass === 'business' ? 'VIP Biznes Klass' : 'Ekonom Klass',
                hotelStar: `${hotelStars} Yulduzli Mehmonxona`,
                priceUSD: totalUSD
              })}
              className="w-full py-4 rounded-2xl btn-primary-emerald font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>USHBU HISOB BO'YICHA BRON QILISH</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>To'lov faqat shartnoma imzolangandan so'ng amalga oshiriladi.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
