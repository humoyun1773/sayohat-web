import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Bus, Plane,
  ShieldCheck, Printer,
  Users, MapPin, Check, Plus, Minus
} from 'lucide-react';
import { COUNTRIES, EXCHANGE_RATE } from '../../data/travelData';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  bookingData, 
  _currency = 'USD',
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

  // 100% Solid Background Scroll Freeze
  useBodyScrollLock(isOpen);

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
  }, [bookingData]);

  if (!isOpen) return null;

  // Selected country details
  const activeCountry = COUNTRIES.find(c => c.id === selectedRegionId) || COUNTRIES[0];
  const countryName = lang === 'ru' ? (activeCountry.nameRu || activeCountry.name) : lang === 'en' ? (activeCountry.nameEn || activeCountry.name) : activeCountry.name;

  // Safe pricing calculation
  const busPkg = activeCountry.packages?.bus;
  const planePkg = activeCountry.packages?.plane;
  const busPrice = busPkg?.priceUSD || activeCountry.basePriceUSD || 190;
  const planePrice = planePkg?.priceUSD || (activeCountry.basePriceUSD + 60) || 250;

  const currentPrice = modalTransport === 'plane' ? planePrice : busPrice;
  const totalPriceUSD = currentPrice * passengers;

  // Format Price with defensive Number conversion
  const formatPrice = (usdAmount) => {
    const num = Number(usdAmount) || 0;
    const som = (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    const usd = '$' + num.toLocaleString('en-US');
    return `${som} (${usd})`;
  };

  const handlePhoneInput = (e) => {
    const rawDigits = e.target.value.replace(/\D/g, '');
    const cleanDigits = rawDigits.startsWith('998') ? rawDigits.slice(3) : rawDigits;
    setPhoneDigits(cleanDigits.slice(0, 9));
  };

  const formatDisplayDigits = (digits) => {
    if (!digits) return '';
    let res = '';
    if (digits.length > 0) res += digits.slice(0, 2);
    if (digits.length > 2) res += ' ' + digits.slice(2, 5);
    if (digits.length > 5) res += ' ' + digits.slice(5, 7);
    if (digits.length > 7) res += ' ' + digits.slice(7, 9);
    return res;
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedPkg = modalTransport === 'plane' ? planePkg : busPkg;
  const durationText = selectedPkg 
    ? (lang === 'ru' ? selectedPkg.durationRu : lang === 'en' ? selectedPkg.durationEn : selectedPkg.durationUz)
    : (modalTransport === 'plane' 
      ? (lang === 'ru' ? '✈️ Прямой авиаперелет: 50 минут' : lang === 'en' ? '✈️ Direct Flight: 50 min' : '✈️ To\'g\'ridan-to\'g\'ri Samolyot: 50 daqiqa')
      : (lang === 'ru' ? '🚌 Комфортабельный автобус: 4-5 часов' : lang === 'en' ? '🚌 Tourist Coach: 4-5 hours' : '🚌 Qulay Sayyohlik Avtobusi: 4-5 soat'));

  const transportLabel = modalTransport === 'plane'
    ? (lang === 'ru' ? '✈️ Авиаперелет' : lang === 'en' ? '✈️ Flight Tour' : '✈️ Samolyot Reysi')
    : (lang === 'ru' ? '🚌 Автобусный тур' : lang === 'en' ? '🚌 Coach Tour' : '🚌 Sayyohlik Avtobusi');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-5 py-4 sm:px-7 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10b981] text-white flex items-center justify-center font-black shadow-md">
              {modalTransport === 'plane' ? <Plane className="w-5 h-5" /> : <Bus className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 leading-tight">
                {isConfirmed ? (lang === 'ru' ? 'Электронный Ваучер Туриста' : lang === 'en' ? 'Digital Tourist Voucher' : 'Rasmiy Sayohat Chiptasi') : (lang === 'ru' ? 'Бронирование Тура' : lang === 'en' ? 'Tour Booking' : 'Sayohatni Bron Qilish')}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {activeCountry.flag} {countryName} • {lang === 'ru' ? '5 Дней «Все Включено»' : lang === 'en' ? '5 Days All-Inclusive' : '5 Kunlik VIP Paket'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
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
                      {transportLabel} • {lang === 'ru' ? '5 Дней / 4 Ночи All-Inclusive' : lang === 'en' ? '5 Days / 4 Nights All-Inclusive' : '5 Kun / 4 Kecha All-Inclusive'}
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
                    <span className="font-bold text-white truncate block">{fullName || (lang === 'ru' ? 'Турист' : lang === 'en' ? 'Traveler' : 'Sayohatchi')}</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.travelDate}</span>
                    <span className="font-bold text-white">{travelDate}</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.peopleCount}</span>
                    <span className="font-bold text-white">{passengers} {lang === 'ru' ? 'чел.' : lang === 'en' ? 'pers.' : 'kishi'}</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.totalPrice}</span>
                    <span className="font-black text-[#a7f3d0] text-sm">{formatPrice(totalPriceUSD)}</span>
                  </div>
                </div>

                {/* Inclusions Strip on Ticket */}
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-[11px] text-slate-300 space-y-1">
                  <div className="font-bold text-[#a7f3d0]">
                    {lang === 'ru' ? '✓ Включено в тур:' : lang === 'en' ? '✓ Included Services:' : '✓ Paketga kiritilgan xizmatlar:'}
                  </div>
                  <div>• {durationText}</div>
                  <div>• {lang === 'ru' ? '4 ночи в 4★ отеле' : lang === 'en' ? '4 nights in 4★ hotel' : '4 kecha 4★ hashamatli mehmonxonada tunash'}</div>
                  <div>• {lang === 'ru' ? '3-разовое национальное питание на 5 дней' : lang === 'en' ? '3 full daily meals for 5 days' : '5 kun davomida 3 mahal to\'liq milliy taomlar'}</div>
                  <div>• {lang === 'ru' ? 'Входные билеты во все музеи и личный гид' : lang === 'en' ? 'All museum entry tickets and dedicated guide' : 'Barcha muzey va tarixiy obidalarga kirish chiptalari & shaxsiy gid'}</div>
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
            /* Complete Booking Form */
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              
              {/* 1. VISUAL 2-CARD TRANSPORT SELECTOR */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center justify-between">
                  <span>{lang === 'ru' ? '1. Выберите Вид Транспорта:' : lang === 'en' ? '1. Choose Transport Option:' : '1. Qaysi Transportda Borasiz?:'}</span>
                  <span className="text-[11px] text-[#10b981] font-bold">
                    {modalTransport === 'plane' 
                      ? (lang === 'ru' ? '✈️ Выбран Самолет' : lang === 'en' ? '✈️ Flight Selected' : '✈️ Samolyot Tanlandi')
                      : (lang === 'ru' ? '🚌 Выбран Автобус' : lang === 'en' ? '🚌 Coach Selected' : '🚌 Avtobus Tanlandi')}
                  </span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Option 1: BUS */}
                  <div
                    onClick={() => setModalTransport('bus')}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      modalTransport === 'bus'
                        ? 'border-[#10b981] bg-[#ecfdf5] shadow-md ring-4 ring-[#10b981]/20 scale-[1.01]'
                        : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold shrink-0 ${modalTransport === 'bus' ? 'bg-[#10b981] text-white shadow-xs' : 'bg-slate-200 text-slate-700'}`}>
                          <Bus className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-black text-sm text-slate-900">
                            {lang === 'ru' ? 'Комфортабельный Автобус' : lang === 'en' ? 'Comfortable Tourist Coach' : 'Qulay Sayyohlik Avtobusi'}
                          </div>
                          <div className="text-[11px] text-slate-600 font-medium">
                            {busPkg ? (lang === 'ru' ? busPkg.durationRu : lang === 'en' ? busPkg.durationEn : busPkg.durationUz) : 'Komfort avtotur'}
                          </div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${modalTransport === 'bus' ? 'border-[#10b981] bg-[#10b981]' : 'border-slate-300'}`}>
                        {modalTransport === 'bus' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-baseline justify-between">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">
                        {lang === 'ru' ? 'Цена за 1 чел:' : lang === 'en' ? 'Price per person:' : '1 kishi narxi:'}
                      </span>
                      <span className="text-sm font-black text-[#10b981]">{formatPrice(busPrice)}</span>
                    </div>
                  </div>

                  {/* Option 2: PLANE */}
                  <div
                    onClick={() => setModalTransport('plane')}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      modalTransport === 'plane'
                        ? 'border-[#10b981] bg-[#ecfdf5] shadow-md ring-4 ring-[#10b981]/20 scale-[1.01]'
                        : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold shrink-0 ${modalTransport === 'plane' ? 'bg-[#10b981] text-white shadow-xs' : 'bg-slate-200 text-slate-700'}`}>
                          <Plane className="w-5 h-5 transform -rotate-45" />
                        </div>
                        <div>
                          <div className="font-black text-sm text-slate-900">
                            {lang === 'ru' ? 'Прямой Авиаперелет' : lang === 'en' ? 'Direct Domestic Flight' : 'To\'g\'ridan-to\'g\'ri Samolyot'}
                          </div>
                          <div className="text-[11px] text-slate-600 font-medium">
                            {planePkg ? (lang === 'ru' ? planePkg.durationRu : lang === 'en' ? planePkg.durationEn : planePkg.durationUz) : 'Tezkor parvoz'}
                          </div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${modalTransport === 'plane' ? 'border-[#10b981] bg-[#10b981]' : 'border-slate-300'}`}>
                        {modalTransport === 'plane' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-baseline justify-between">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">
                        {lang === 'ru' ? 'Цена за 1 чел:' : lang === 'en' ? 'Price per person:' : '1 kishi narxi:'}
                      </span>
                      <span className="text-sm font-black text-[#10b981]">{formatPrice(planePrice)}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* 2. SELECT REGION INSIDE MODAL */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>{lang === 'ru' ? '2. Регион Путешествия:' : lang === 'en' ? '2. Travel Destination:' : '2. Sayohat Qilinadigan Viloyat:'}</span>
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
                      {lang === 'ru' ? '5 ДНЕЙ / 4 НОЧИ «ВСЕ ВКЛЮЧЕНО»' : lang === 'en' ? '5 DAYS / 4 NIGHTS ALL-INCLUSIVE' : "5 KUN / 4 KECHA TO'LIQ PAKET (ALL-INCLUSIVE)"}
                    </div>
                    <div className="text-base font-extrabold text-white">
                      {countryName} ({transportLabel})
                    </div>
                    <div className="text-xs text-slate-300">
                      {durationText}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      {lang === 'ru' ? 'За 1 человека:' : lang === 'en' ? 'Per Person:' : '1 Kishi Uchun:'}
                    </div>
                    <div className="text-lg sm:text-xl font-black text-[#10b981]">
                      {formatPrice(currentPrice)}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{lang === 'ru' ? '4★ Отель (4 ночи)' : lang === 'en' ? '4★ Hotel (4 nights)' : '4★ Mehmonxona (4 kecha)'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{lang === 'ru' ? '5 дней 3-раз. питание' : lang === 'en' ? '5 days 3 meals daily' : '5 kun 3 mahal ovqat'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{lang === 'ru' ? 'Все входные билеты' : lang === 'en' ? 'All museum tickets' : 'Muzey kirish chiptalari'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{lang === 'ru' ? 'Персональный гид' : lang === 'en' ? 'Licensed tour guide' : 'Shaxsiy litsenziyali gid'}</span>
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

              {/* 5. DATE AND CUSTOM LUXURY PASSENGERS STEPPER */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.bookingModal.dateLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm font-bold focus:outline-none focus:border-[#10b981] focus:ring-3 focus:ring-[#10b981]/15 bg-white text-slate-900 transition-all cursor-pointer shadow-2xs"
                  />
                </div>

                {/* Passengers Counter & Presets */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 uppercase tracking-wider">
                      <Users className="w-4 h-4 text-[#10b981]" />
                      <span>{lang === 'ru' ? 'Количество Путешественников:' : lang === 'en' ? 'Number of Travelers:' : 'Sayohatchilar Soni:'}</span>
                    </div>
                    <div className="text-xs font-black text-[#10b981]">
                      {lang === 'ru' ? 'Всего:' : lang === 'en' ? 'Total:' : 'Jami:'} {formatPrice(totalPriceUSD)}
                    </div>
                  </div>

                  {/* Counter Stepper with - and + */}
                  <div className="flex items-center justify-between gap-3 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                    <button
                      type="button"
                      disabled={passengers <= 1}
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-800 flex items-center justify-center font-bold transition-all active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="text-center">
                      <span className="text-base font-black text-slate-900">
                        {passengers} {lang === 'ru' ? 'чел.' : lang === 'en' ? 'guests' : 'nafar sayohatchi'}
                      </span>
                      <span className="text-[11px] text-slate-400 block font-medium">
                        ({passengers} × {formatPrice(currentPrice)})
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={passengers >= 15}
                      onClick={() => setPassengers(Math.min(15, passengers + 1))}
                      className="w-10 h-10 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white flex items-center justify-center font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Presets Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPassengers(num)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                          passengers === num
                            ? 'bg-[#10b981] text-white shadow-xs scale-105'
                            : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {num} {lang === 'ru' ? 'чел.' : lang === 'en' ? 'pax' : 'kishi'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. CONFIRM BUTTON */}
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
