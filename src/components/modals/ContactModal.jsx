import React, { useState, useEffect } from 'react';
import { 
  X, Send, Phone, User, 
  MapPin, CheckCircle2
} from 'lucide-react';
import { COUNTRIES } from '../../data/travelData';
import CustomSelect from '../ui/CustomSelect';

export default function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('turkey');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  if (!isOpen) return null;

  const countryOptions = [
    ...COUNTRIES.map((c) => ({
      value: c.id,
      label: c.name,
      flag: c.flag
    })),
    { value: 'umrah', label: 'Saudiya Arabistoni (Umra ziyorati)', flag: '🇸🇦' },
    { value: 'other', label: 'Boshqa xalqaro yo\'nalish', flag: '🌍' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneDigits.length < 9) {
      alert('Iltimos, 9 xonali telefon raqamingizni to\'liq kiriting');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md modal-backdrop-animate overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden modal-card-animate"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Banner */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#10b981] text-white flex items-center justify-center shadow-md">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-wider text-[#065f46] uppercase">LOTOS FIELD</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#ecfdf5] text-[#065f46] font-bold border border-[#a7f3d0]">
                  24/7 Aktiv
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900">Biz Bilan Bog'lanish & Konsultatsiya</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] border-2 border-[#a7f3d0] text-[#10b981] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Arizangiz Muvaffaqiyatli Qabul Qilindi!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Rahmat, <strong className="text-slate-900">{name || 'Hurmatli mijoz'}</strong>. 
                5-10 daqiqa ichida shaxsiy turizm menejeri siz bilan bog'lanib, eng qulay narxlar va parvozlarni taqdim etadi.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-8 py-3 rounded-2xl btn-primary-emerald font-bold text-xs uppercase tracking-wider"
              >
                Tushundim
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Ismingiz:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Sardor Rahimov"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Telefon raqamingiz:
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
                      className="w-full bg-transparent px-3 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none font-mono font-bold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Qiziqtirayotgan Davlat / Yo'nalish:
                </label>
                <CustomSelect
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={countryOptions}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Savolingiz yoki Qo'shimcha Istaklar (Ixtiyoriy):
                </label>
                <textarea
                  rows="3"
                  placeholder="Masalan: 4 kishilik oilaviy tur, dengiz bo'yi mehmonxonasi va to'g'ridan-to'g'ri reys kerak..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl btn-primary-emerald text-white text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-95 transition-all mt-2"
              >
                <Send className="w-4 h-4" />
                <span>ARIZANI YUBORISH (BEPUL KONSULTATSIYA)</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
