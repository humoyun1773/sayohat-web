import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Bus, Plane,
  ShieldCheck, Printer, Phone, Calendar,
  Users, MapPin, Sparkles, Check
} from 'lucide-react';
import { COUNTRIES, EXCHANGE_RATE } from '../../data/travelData';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  bookingData, 
  currency = 'USD',
  t,
  lang = 'uz'
}) {
  const [selectedRegionId, setSelectedRegionId] = useState('samarkand');
  const [modalTransport, setModalTransport] = useState('bus');
  const [fullName, setFullName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [travelDate, setTravelDate] = useState('2026-09-15');
  const [passengers, setPassengers] = useState(2);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sync initial country and transport type from bookingData
  useEffect(() => {
    if (bookingData) {
      if (bookingData.country) {
        const found = COUNTRIES.find(c => 
          c.name.toLowerCase() === bookingData.country.toLowerCase() ||
          (c.nameRu && c.nameRu.toLowerCase() === bookingData.country.toLowerCase()) ||
          (c.nameEn && c.nameEn.toLowerCase() === bookingData.country.toLowerCase()) ||
          c.id === bookingData.country
        );
        if (found) {
          setSelectedRegionId(found.id);
        }
      }
      if (bookingData.flightClass) {
        if (
          bookingData.flightClass.toLowerCase().includes('samolyot') || 
          bookingData.flightClass.toLowerCase().includes('авиа') || 
          bookingData.flightClass.toLowerCase().includes('flight')
        ) {
          setModalTransport('plane');
        } else {
          setModalTransport('bus');
        }
      }
    }
    setIsConfirmed(false);
  }, [bookingData, isOpen]);

  // 100% Solid Background Scroll Freeze
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY || window.pageYOffset || 0;
    
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentCountry = COUNTRIES.find(c => c.id === selectedRegionId) || COUNTRIES[0];
  const countryName = lang === 'ru' ? (currentCountry.nameRu || currentCountry.name) : lang === 'en' ? (currentCountry.nameEn || currentCountry.name) : currentCountry.name;

  const currentPkg = currentCountry.packages ? currentCountry.packages[modalTransport] : null;
  const currentPrice = currentPkg ? currentPkg.priceUSD : (currentCountry.basePriceUSD || 190);
  const totalPriceUSD = currentPrice * passengers;

  const durationText = currentPkg 
    ? (lang === 'ru' ? currentPkg.durationRu : lang === 'en' ? currentPkg.durationEn : currentPkg.durationUz) 
    : currentCountry.flightDurationUz;
  const transportLabel = currentPkg 
    ? (lang === 'ru' ? currentPkg.transportLabelRu : lang === 'en' ? currentPkg.transportLabelEn : currentPkg.transportLabelUz) 
    : (modalTransport === 'plane' ? 'Samolyot' : 'Avtobus');

  // Format 9 digits nicely: e.g. 90 123 45 67
  const formatDisplayDigits = (val) => {
    let digits = val.replace(/\D/g, '').slice(0, 9);
    let res = '';
    if (digits.length > 0) res += digits.slice(0, 2);
    if (digits.length > 2) res += ' ' + digits.slice(2, 5);
    if (digits.length > 5) res += ' ' + digits.slice(5, 7);
    if (digits.length > 7) res += ' ' + digits.slice(7, 9);
    return res;
  };

  const handlePhoneInput = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    setPhoneDigits(raw.slice(0, 9));
  };

  const formatPrice = (usdAmount) => {
    const num = Number(usdAmount) || 0;
    const som = (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    const usd = '$' + num.toLocaleString('en-US');
    return `${som} (${usd})`;
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (phoneDigits.length < 9) {
      alert(lang === 'ru' ? 'Пожалуйста, введите 9-значный номер телефона полностью' : lang === 'en' ? 'Please enter your 9-digit phone number' : 'Iltimos, 9 xonali telefon raqamingizni to\'liq kiriting');
      return;
    }
    setIsConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md modal-backdrop-animate overscroll-none touch-none"
      onClick={onClose}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col modal-card-animate"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10b981] text-white flex items-center justify-center font-bold shadow-md">
              {modalTransport === 'plane' ? <Plane className="w-5 h-5 transform -rotate-45" /> : <Bus className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-[#065f46] uppercase">
                {modalTransport === 'plane' ? '✈️ SAMOLYOT PARVOZI' : '🚌 AVTOBUS & GAZEL TURI'} • 5 KUN ALL-INCLUSIVE
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {isConfirmed ? t.bookingModal.voucherTitle : t.bookingModal.headerTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body with overscroll-contain */}
        <div 
          className="p-5 sm:p-7 overflow-y-auto space-y-5 modal-scrollable overscroll-contain"
          onTouchMove={(e) => e.stopPropagation()}
        >
          
          {isConfirmed ? (
            /* Digital Boarding Pass Ticket / Voucher */
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
              
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden border border-slate-700">
                
                {/* Watermark Icon */}
                <div className="absolute right-[-15px] bottom-[-20px] text-white/5 pointer-events-none">
                  {modalTransport === 'plane' ? <Plane className="w-48 h-48" /> : <Bus className="w-48 h-48" />}
                </div>

                <div className="flex justify-between items-start border-b border-slate-700/80 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#a7f3d0] font-bold block">
                      {t.bookingModal.passTitle}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white">{countryName}</h4>
                    <p className="text-xs text-slate-300">
                      {modalTransport === 'plane' ? '✈️ Samolyot Parvozi' : '🚌 Sayyohlik Avtobusi'} • 5 Kun / 4 Kecha All-Inclusive
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-mono">STATUS</span>
                    <span className="text-xs font-bold text-[#a7f3d0] bg-emerald-950/90 border border-emerald-500/40 px-3 py-1 rounded-full">
                      {t.bookingModal.statusConfirmed}
                    </span>
                  </div>
                </div>

                {/* Ticket Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.passenger}</span>
                    <span className="font-bold text-white truncate block">{fullName || 'Sayohatchi'}</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.travelDate}</span>
                    <span className="font-bold text-white">{travelDate}</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.peopleCount}</span>
                    <span className="font-bold text-white">{passengers} kishi</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.totalPrice}</span>
                    <span className="font-black text-[#a7f3d0] text-sm">{formatPrice(totalPriceUSD)}</span>
                  </div>
                </div>

                {/* Inclusions Strip on Ticket */}
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                  <div className="font-bold text-[#a7f3d0]">✓ Paketga kiritilgan xizmatlar:</div>
                  <div>• {durationText}</div>
                  <div>• 4 kecha 4★ hashamatli mehmonxonada tunash</div>
                  <div>• 5 kun davomida 3 mahal to'liq milliy taomlar</div>
                  <div>• Barcha muzey va tarixiy obidalarga kirish chiptalari & shaxsiy gid</div>
                </div>

                {/* Perforated Barcode Area */}
                <div className="pt-4 mt-4 border-t-2 border-dashed border-slate-700 flex flex-col items-center">
                  <div className="w-full h-12 bg-slate-950 rounded-xl p-1.5 flex items-center justify-between opacity-90 border border-slate-800">
                    {[...Array(44)].map((_, i) => (
                      <div
                        key={i}
                        className="h-full bg-slate-300"
                        style={{ width: `${(i % 3) + 1}px` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1.5 tracking-widest font-bold">
                    TICKET VOUCHER • LOTOS-FIELD-VIP-2026
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs text-[#065f46] flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-[#10b981] shrink-0" />
                <span>{t.bookingModal.successMsg}</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all border border-slate-200 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t.bookingModal.printBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3.5 rounded-2xl btn-primary-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer"
                >
                  {t.bookingModal.closeBtn}
                </button>
              </div>

            </div>
          ) : (
            /* Complete Booking Form with Interactive Transport & Region Selection Inside Modal */
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              
              {/* 1. SELECT TRANSPORT INSIDE MODAL (BUS vs PLANE) */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center justify-between">
                  <span>1. Transport Turini Tanlang:</span>
                  <span className="text-[11px] text-[#10b981] font-bold">
                    {modalTransport === 'plane' ? '✈️ Samolyot Parvozi' : '🚌 Qulay Avtobus / Gazel'}
                  </span>
                </label>
                
                <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
                  <button
                    type="button"
                    onClick={() => setModalTransport('bus')}
                    className={`py-3 px-4 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      modalTransport === 'bus'
                        ? 'bg-[#10b981] text-white shadow-md scale-[1.02]'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <Bus className="w-4 h-4" />
                    <span>🚌 Avtobus / Gazel</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModalTransport('plane')}
                    className={`py-3 px-4 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      modalTransport === 'plane'
                        ? 'bg-[#10b981] text-white shadow-md scale-[1.02]'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <Plane className="w-4 h-4 transform -rotate-45" />
                    <span>✈️ Samolyot Reysi</span>
                  </button>
                </div>
              </div>

              {/* 2. SELECT REGION INSIDE MODAL */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>2. Sayohat Qilinadigan Viloyat:</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {COUNTRIES.map(c => {
                    const isSel = c.id === selectedRegionId;
                    const dName = lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedRegionId(c.id)}
                        className={`p-2 rounded-xl text-left border transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                          isSel 
                            ? 'bg-[#ecfdf5] border-[#10b981] text-[#065f46] ring-2 ring-[#10b981]/20 shadow-xs'
                            : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{c.flag}</span>
                        <span className="truncate">{dName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. DYNAMIC SUMMARY & ALL-INCLUSIVE PRICE BANNER */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                      5 KUN / 4 KECHA TO'LIQ PAKET (ALL-INCLUSIVE)
                    </div>
                    <div className="text-base font-extrabold text-white">
                      {countryName} ({transportLabel})
                    </div>
                    <div className="text-xs text-slate-300">
                      {durationText}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">1 Kishi Uchun:</div>
                    <div className="text-lg sm:text-xl font-black text-[#10b981]">
                      {formatPrice(currentPrice)}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>4★ Mehmonxona (4 kecha)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>5 kun 3 mahal ovqat</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Muzey kirish chiptalari</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Shaxsiy litsenziyali gid</span>
                  </div>
                </div>
              </div>

              {/* 4. USER DETAILS INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.bookingModal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.bookingModal.namePlaceholder}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.bookingModal.phoneLabel}
                  </label>
                  <div className="flex rounded-2xl border border-slate-200 bg-white overflow-hidden focus-within:border-[#10b981] focus-within:ring-3 focus-within:ring-[#10b981]/15 transition-all">
                    <span className="px-3.5 py-3 bg-slate-50 text-slate-600 font-bold text-sm border-r border-slate-200 flex items-center shrink-0">
                      +998
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="90 123 45 67"
                      value={formatDisplayDigits(phoneDigits)}
                      onChange={handlePhoneInput}
                      className="w-full px-3.5 py-3 text-sm font-bold focus:outline-none bg-white text-slate-900 tracking-wide placeholder:text-slate-400 placeholder:tracking-normal"
                      maxLength={12}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.bookingModal.dateLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.bookingModal.passengersLabel} ({passengers} kishi uchun jami: {formatPrice(totalPriceUSD)})
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>
                        {n} {lang === 'ru' ? 'человек' : lang === 'en' ? 'guests' : 'kishi'} — {formatPrice(currentPrice * n)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5. CONFIRM BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl btn-primary-emerald font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>{t.bookingModal.confirmBtn}</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                  {t.bookingModal.freeBookingNote}
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
