import React, { useState } from 'react';
import { 
  X, Phone, Send, MessageCircle, Clock, 
  MapPin, CheckCircle2 
} from 'lucide-react';
import { CONTACT_INFO, COUNTRIES } from '../data/travelData';
import CustomSelect from './CustomSelect';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    country: 'uae',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
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
            className="p-2 rounded-2xl bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Quick 1-Tap Connect Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Telegram */}
            <a
              href={CONTACT_INFO.telegram}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-[#10b981] text-slate-800 hover:text-white border border-slate-200 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-white/20 text-[#10b981] group-hover:text-white flex items-center justify-center mb-2 shadow-sm">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">Telegram Kanal & Bot</span>
              <span className="text-[11px] text-slate-500 group-hover:text-white mt-0.5">{CONTACT_INFO.telegramUser}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-[#10b981] text-slate-800 hover:text-white border border-slate-200 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-white/20 text-[#10b981] group-hover:text-white flex items-center justify-center mb-2 shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">WhatsApp Tezkor Chat</span>
              <span className="text-[11px] text-slate-500 group-hover:text-white mt-0.5">1 daqiqada javob</span>
            </a>

            {/* Phone Dial */}
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-[#10b981] text-slate-800 hover:text-white border border-slate-200 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-white/20 text-[#10b981] group-hover:text-white flex items-center justify-center mb-2 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">To'g'ridan-to'g'ri Qo'ng'iroq</span>
              <span className="text-[11px] text-slate-500 group-hover:text-white mt-0.5">{CONTACT_INFO.phone}</span>
            </a>

          </div>

          {/* Callback Request Form Box */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
            
            <div className="flex items-center justify-between">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10b981]" />
                Operatorga qayta qo'ng'iroq buyurtma qilish
              </h4>
              <span className="text-[10px] text-[#065f46] bg-[#ecfdf5] px-2.5 py-1 rounded-full font-bold border border-[#a7f3d0]">
                Mutlaqo Bepul
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto" />
                <h5 className="text-lg font-bold text-slate-900">So'rovingiz Muvaffaqiyatli Qabul Qilindi!</h5>
                <p className="text-xs text-slate-600">
                  LOTOS FIELD sayohat bo'yicha shaxsiy menejeri 5 daqiqa ichida siz bilan bog'lanadi.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-5 py-2 rounded-xl btn-primary-emerald text-white text-xs font-bold shadow-sm"
                >
                  Yangi so'rov yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ismingiz:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Sardor Rahimov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Telefon raqamingiz:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 (90) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Qaysi davlat yoki tur qiziqtirmoqda?
                  </label>
                  <CustomSelect
                    value={formData.country}
                    onChange={(val) => setFormData({ ...formData, country: val })}
                    options={countryOptions}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Qo'shimcha istak yoki savolingiz (ixtiyoriy):
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Masalan: 4 kishilik oilaviy ta'til, bolalar uchun qulayliklar kerak..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-2xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl btn-primary-emerald text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>MENGA QO'NG'IROQ QILING (BEPUL)</span>
                </button>
              </form>
            )}

          </div>

          {/* Office Address & Workhours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.workHours}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
