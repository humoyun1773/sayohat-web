import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Bus, 
  ShieldCheck, Printer, Phone
} from 'lucide-react';
import { EXCHANGE_RATE } from '../../data/travelData';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  bookingData, 
  currency = 'USD',
  t,
  lang = 'uz'
}) {
  const [fullName, setFullName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Format 9 digits nicely for display: e.g. 90 123 45 67
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

  // 100% Guaranteed Freeze of background page scroll and wheel events
  useEffect(() => {
    if (!isOpen) return;

    const handleWindowWheel = (e) => {
      const isInsideScrollable = e.target && e.target.closest && e.target.closest('.modal-scrollable');
      if (!isInsideScrollable) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e) => {
      const isInsideScrollable = e.target && e.target.closest && e.target.closest('.modal-scrollable');
      if (!isInsideScrollable) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWindowWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    const scrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (top) {
        window.scrollTo(0, parseInt(top || '0', 10) * -1);
      }
    };
  }, [isOpen]);

  if (!isOpen || !bookingData) return null;

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

  const currentPrice = bookingData.priceUSD || 80;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md modal-backdrop-animate overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col modal-card-animate"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10b981] text-white flex items-center justify-center font-bold shadow-md">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-[#065f46] uppercase">{t.bookingModal.airlineTag}</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {isConfirmed ? t.bookingModal.voucherTitle : t.bookingModal.headerTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 modal-scrollable">
          
          {isConfirmed ? (
            /* Digital Boarding Pass Ticket */
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
              
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border border-slate-700">
                
                {/* Bus Watermark */}
                <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none">
                  <Bus className="w-48 h-48" />
                </div>

                <div className="flex justify-between items-start border-b border-slate-700 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#a7f3d0] font-bold block">{t.bookingModal.passTitle}</span>
                    <h4 className="text-xl font-black text-white">{bookingData.country}</h4>
                    <p className="text-xs text-slate-300">{t.bookingModal.passSub}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-mono">Status</span>
                    <span className="text-xs font-bold text-[#a7f3d0] bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                      {t.bookingModal.statusConfirmed}
                    </span>
                  </div>
                </div>

                {/* Ticket Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.passenger}</span>
                    <span className="font-bold text-white truncate block">{fullName || 'Sayohatchi'}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.travelDate}</span>
                    <span className="font-bold text-white">{travelDate || '15-Oktabr, 2026'}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.peopleCount}</span>
                    <span className="font-bold text-white">{passengers}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">{t.bookingModal.totalPrice}</span>
                    <span className="font-bold text-[#a7f3d0] text-sm">{formatPrice(currentPrice)}</span>
                  </div>
                </div>

                {/* Perforated Barcode Area */}
                <div className="pt-3 border-t-2 border-dashed border-slate-700 flex flex-col items-center">
                  <div className="w-full h-12 bg-slate-950 rounded-xl p-1.5 flex items-center justify-between opacity-90 border border-slate-800">
                    {[...Array(42)].map((_, i) => (
                      <div
                        key={i}
                        className="h-full bg-slate-300"
                        style={{ width: `${(i % 3) + 1}px` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1.5 tracking-widest font-bold">
                    BOARDING PASS • LOTOS-FIELD-VIP-2026
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
                  className="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all border border-slate-200"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t.bookingModal.printBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-2xl btn-primary-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  {t.bookingModal.closeBtn}
                </button>
              </div>

            </div>
          ) : (
            /* Clean Booking Form (Without Passport Input) */
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              
              {/* Tour Summary Banner */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">{t.bookingModal.destLabel}</div>
                  <div className="text-base font-bold text-slate-900">{bookingData.country}</div>
                  {bookingData.flightClass && (
                    <div className="text-[11px] text-[#10b981] font-medium">{bookingData.flightClass} • {bookingData.hotelStar}</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-500 font-semibold">{t.bookingModal.priceLabel}</div>
                  <div className="text-lg font-black text-[#10b981]">{formatPrice(currentPrice)}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.bookingModal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.bookingModal.namePlaceholder}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.bookingModal.phoneLabel}
                  </label>
                  <div className="flex items-center bg-slate-50 border border-slate-300 focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981] rounded-2xl overflow-hidden">
                    <div className="flex items-center gap-1.5 pl-3 pr-2 py-3 text-slate-800 font-mono font-bold text-xs select-none border-r border-slate-200 shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>+998</span>
                    </div>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      placeholder="90 123 45 67"
                      value={formatDisplayDigits(phoneDigits)}
                      onChange={handlePhoneInput}
                      className="w-full bg-transparent px-3 py-3 text-xs text-slate-900 placeholder-slate-400 outline-none font-mono font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.bookingModal.dateLabel}
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.bookingModal.passengersLabel}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs text-[#065f46] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>{t.bookingModal.freeBookingNote}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl btn-primary-emerald text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-95 transition-all"
              >
                <Bus className="w-4 h-4" />
                <span>{t.bookingModal.confirmBtn}</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
