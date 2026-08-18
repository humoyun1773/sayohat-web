import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Plane, 
  Calendar, Users, ShieldCheck, Printer, 
  Phone
} from 'lucide-react';
import { EXCHANGE_RATE } from '../../data/travelData';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  bookingData, 
  currency = 'USD' 
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
    const num = Number(usdAmount) || 0;
    if (currency === 'UZS') {
      return (num * EXCHANGE_RATE).toLocaleString('uz-UZ') + ' so\'m';
    }
    return '$' + num.toLocaleString('en-US');
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (phoneDigits.length < 9) {
      alert('Iltimos, 9 xonali telefon raqamingizni to\'liq kiriting');
      return;
    }
    setIsConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

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
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-[#065f46] uppercase">LOTOS FIELD AIRLINES</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {isConfirmed ? 'Rasmiy Chipta & Vaucher' : 'Tur va Chiptani Bron Qilish'}
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
        <div className="p-6 overflow-y-auto space-y-5">
          
          {isConfirmed ? (
            /* Digital Boarding Pass Ticket */
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
              
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border border-slate-700">
                
                {/* Airplane Watermark */}
                <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none">
                  <Plane className="w-48 h-48 transform -rotate-45" />
                </div>

                <div className="flex justify-between items-start border-b border-slate-700 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#a7f3d0] font-bold block">ELEKTRON SAYOHAT VAUCHERI</span>
                    <h4 className="text-xl font-black text-white">{bookingData.country}</h4>
                    <p className="text-xs text-slate-300">Litsenziyalangan xalqaro charter parvozi</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block font-mono">Status</span>
                    <span className="text-xs font-bold text-[#a7f3d0] bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                      Tasdiqlandi
                    </span>
                  </div>
                </div>

                {/* Ticket Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Yo'lovchi</span>
                    <span className="font-bold text-white truncate block">{fullName}</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">Parvoz Sanasi</span>
                    <span className="font-bold text-white">{travelDate || '15-Oktabr, 2026'}</span>
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
            /* Clean Booking Form (Without Passport Input) */
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
