import React, { useState, useEffect } from 'react';
import { 
  X, Plane, CheckCircle2, User, 
  Phone, Calendar, MapPin, Download, Printer, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXCHANGE_RATE } from '../data/travelData';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  bookingData, 
  currency, 
  currentUser 
}) {
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [passport, setPassport] = useState('');
  const [travelDate, setTravelDate] = useState('2026-09-20');
  const [passengers, setPassengers] = useState(bookingData?.adultsCount || 2);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

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

  // Freeze background page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !bookingData) return null;

  const formatPrice = (usdAmount) => {
    if (currency === 'UZS') {
      return (usdAmount * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + usdAmount.toLocaleString('en-US');
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const randomRef = 'LF-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10b981] text-white flex items-center justify-center font-bold shadow-md">
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-[#065f46] uppercase">LOTOS FIELD AIRLINES</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {isSuccess ? 'Buyurtma Tasdiqlandi!' : 'Chipta & Tur Paketi Bron Qilish'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {isSuccess ? (
            /* Luxury Airline Boarding Pass / Voucher */
            <div className="space-y-5 print:text-black">
              
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <Plane className="w-6 h-6 text-[#10b981]" />
                    <span className="font-black text-sm tracking-wider uppercase">LOTOS FIELD OFFICIAL VAUCHER</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white bg-[#10b981]/60 px-3 py-1 rounded-xl border border-[#10b981]/40">
                    {bookingRef}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Yo'nalish</span>
                    <span className="font-bold text-white text-sm">{bookingData.country}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Parvoz Sanasi</span>
                    <span className="font-bold text-white text-sm">{travelDate}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Sayohatchi</span>
                    <span className="font-bold text-white text-sm truncate block">{fullName || 'Mijoz'}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Telefon</span>
                    <span className="font-mono text-[#a7f3d0] font-bold">+998 {formatDisplayDigits(phoneDigits)}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Odamlar soni</span>
                    <span className="font-bold text-white">{passengers} kishi</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Jami To'lov</span>
                    <span className="font-bold text-[#a7f3d0] text-sm">{formatPrice(bookingData.priceUSD)}</span>
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
                <span>
                  Sizning buyurtmangiz tasdiqlandi. 10 daqiqa ichida LOTOS FIELD kuratoringiz qo'ng'iroq qiladi va barcha rasmiy chiptalarni Telegram orqali yuboradi!
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all border border-slate-200"
                >
                  <Printer className="w-4 h-4" />
                  <span>Chop etish (Vaucher)</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-2xl btn-primary-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  Yopish
                </button>
              </div>

            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              
              {/* Tour Summary Banner */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold">Tanlangan Yo'nalish:</div>
                  <div className="text-base font-bold text-slate-900">{bookingData.country}</div>
                  {bookingData.flightClass && (
                    <div className="text-[11px] text-[#10b981] font-medium">{bookingData.flightClass} • {bookingData.hotelStar}</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-500 font-semibold">Jami Narx:</div>
                  <div className="text-lg font-black text-[#10b981]">{formatPrice(bookingData.priceUSD)}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    To'liq Ism va Familiya:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor Rahimov"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Telefon raqam (Telegram / WhatsApp):
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
                    Sayohat boshlanish sanasi:
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
                    Sayohatchilar soni:
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

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Xorijga chiqish pasporti raqami (ixtiyoriy):
                </label>
                <input
                  type="text"
                  placeholder="Masalan: FA 1234567"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none uppercase font-mono"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs text-[#065f46] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Bron qilish bepul! To'lov faqat shartnoma imzolangandan so'ng amalga oshiriladi.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl btn-primary-emerald text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-95 transition-all"
              >
                <Plane className="w-4 h-4" />
                <span>BUYURTMANI TASDIQLASH VA VAUCHER OLISH</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
