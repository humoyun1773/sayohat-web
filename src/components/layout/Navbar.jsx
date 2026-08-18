import React, { useState, useEffect } from 'react';
import { 
  Bus, Menu, X, Compass, Flame, 
  ShieldCheck, Star, Phone, ArrowRight,
  Send, MessageCircle, MapPin
} from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { CONTACT_INFO } from '../../data/travelData';

import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export default function Navbar({ lang = 'uz', onChangeLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 100% Solid Background Scroll Freeze when Mobile Modal Menu is open
  useBodyScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero', icon: Compass, badge: 'Asosiy' },
    { name: t.nav.regions, href: '#destinations', icon: MapPin, badge: '8 ta Shahar' },
    { name: t.nav.deals, href: '#deals', icon: Flame, badge: '-30% Avtotur' },
    { name: t.nav.whyUs, href: '#why-us', icon: ShieldCheck, badge: 'Kafolat' },
    { name: t.nav.location, href: '#location', icon: MapPin, badge: 'Ofis' },
    { name: t.nav.reviews, href: '#reviews', icon: Star, badge: '5.0 Reyting' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-2.5 sm:px-8 lg:px-12 pt-2.5 sm:pt-4 transition-all duration-300">
        <div className={`max-w-[1536px] mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2 px-3 sm:px-8 border border-white/80' 
            : 'bg-white/70 backdrop-blur-md py-2.5 sm:py-3.5 px-3 sm:px-8 border border-white/60 shadow-sm'
        }`}>
          <div className="flex items-center justify-between gap-2">
            
            {/* Brand Logo: LOTOS FIELD */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2 sm:gap-3 group shrink-0"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform shrink-0">
                <Bus className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black tracking-wider text-slate-900">LOTOS</span>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#10b981]">FIELD</span>
                </div>
                <p className="text-[8px] sm:text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-0.5 hidden xs:block">
                  {t.nav.tagline || 'Avtobus & Gazel Turlari'}
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md px-3 py-1 rounded-2xl border border-white/80">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs font-bold text-slate-800 hover:text-[#10b981] hover:bg-white rounded-xl transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Language Switcher (UZ / RU / EN) */}
            <div className="hidden md:flex items-center gap-2">
              <LanguageSwitcher
                currentLang={lang}
                onChangeLang={onChangeLang}
              />
            </div>

            {/* Mobile Right Controls: Only Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-[#10b981] text-white shadow-md hover:bg-[#059669] transition-all active:scale-95 cursor-pointer shrink-0"
                aria-label="Menyuni ochish"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE LUXURY FULL MODAL DIALOG */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md modal-backdrop-animate overscroll-contain"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col modal-card-animate"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Top Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center text-white shadow-md">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 leading-none">
                    <span className="text-xl font-black text-slate-900">LOTOS</span>
                    <span className="text-xl font-black text-[#10b981]">FIELD</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Avtobus & Gazel Turlari</span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Navigation Links */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 modal-scrollable">
              
              {/* Language Selector Inside Modal */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Tilni tanlang:</span>
                <LanguageSwitcher
                  currentLang={lang}
                  onChangeLang={(l) => {
                    onChangeLang(l);
                  }}
                />
              </div>

              {/* Navigation Links List */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                  Bo'limlar
                </span>
                
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left p-3.5 rounded-2xl bg-white hover:bg-[#ecfdf5] border border-slate-200/90 shadow-2xs hover:border-[#10b981]/50 transition-all flex items-center justify-between group cursor-pointer active:scale-98"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#ecfdf5] text-[#10b981] border border-[#a7f3d0] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#065f46] leading-tight">
                            {link.name}
                          </div>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {link.badge}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#10b981] group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>

              {/* Messengers & Fast Call */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                  Tezkor Bog'lanish
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={CONTACT_INFO.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center gap-2 text-xs font-bold transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-[#065f46] border border-emerald-200 flex items-center justify-center gap-2 text-xs font-bold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Qo'ng'iroq: {CONTACT_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
