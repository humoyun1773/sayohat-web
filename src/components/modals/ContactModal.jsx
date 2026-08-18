import React, { useState, useEffect } from 'react';
import { 
  X, Send, Phone, MessageSquare, 
  MapPin, CheckCircle2, Headphones 
} from 'lucide-react';
import { COUNTRIES } from '../../data/travelData';
import CustomSelect from '../ui/CustomSelect';

import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export default function ContactModal({ isOpen, onClose, t, lang = 'uz' }) {
  const [fullName, setFullName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('samarkand');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 100% Solid Background Scroll Freeze
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  const countryOptions = [
    ...COUNTRIES.map((c) => ({
      value: c.id,
      label: lang === 'en' ? c.nameEn : c.name,
      flag: c.flag
    })),
    { value: 'custom', label: lang === 'ru' ? 'Другой город или область' : lang === 'en' ? 'Other Region / City' : 'Boshqa viloyat yoki shahar', flag: '🇺🇿' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneDigits.length < 9) {
      alert(lang === 'ru' ? 'Пожалуйста, введите 9-значный номер телефона полностью' : lang === 'en' ? 'Please enter your 9-digit phone number' : 'Iltimos, 9 xonali telefon raqamingizni to\'liq kiriting');
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
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col modal-card-animate"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#10b981] shadow-xs">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {t.contactModal.title}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                <span>{t.contactModal.activeBadge}</span>
              </div>
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
        <div className="p-6 overflow-y-auto space-y-4 modal-scrollable">
          
          {isSubmitted ? (
            /* Success Feedback State */
            <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] border-2 border-[#10b981] flex items-center justify-center text-[#10b981] mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">{t.contactModal.successTitle}</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  {t.contactModal.successDesc}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl btn-primary-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md"
              >
                {t.contactModal.gotItBtn}
              </button>
            </div>
          ) : (
            /* Consultation Request Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.contactModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'ru' ? 'Сардор Рахимов' : lang === 'en' ? 'Sardor Rahimov' : 'Sardor Rahimov'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                />
              </div>

              {/* Phone with Clean +998 Prefix */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.contactModal.phoneLabel}
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

              {/* Selected Country / Region */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.contactModal.regionLabel}
                </label>
                <CustomSelect
                  value={selectedRegion}
                  onChange={setSelectedRegion}
                  options={countryOptions}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.contactModal.messageLabel}
                </label>
                <textarea
                  rows="3"
                  placeholder={t.contactModal.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl btn-primary-emerald text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{t.contactModal.submitBtn}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
