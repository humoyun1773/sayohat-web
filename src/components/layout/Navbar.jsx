import React, { useState, useEffect } from 'react';
import { 
  Plane, Menu, X, Compass, Flame, 
  ShieldCheck, Star, Phone, ArrowRight 
} from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { CONTACT_INFO } from '../../data/travelData';

export default function Navbar({ lang = 'uz', onChangeLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero', icon: Compass },
    { name: t.nav.regions, href: '#destinations', icon: Compass },
    { name: t.nav.deals, href: '#deals', icon: Flame },
    { name: t.nav.whyUs, href: '#why-us', icon: ShieldCheck },
    { name: t.nav.reviews, href: '#reviews', icon: Star },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-8 lg:px-12 pt-2.5 sm:pt-4 transition-all duration-300">
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
                <Plane className="w-4 h-4 sm:w-6 sm:h-6 transform -rotate-45" />
              </div>

              <div>
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black tracking-wider text-slate-900">LOTOS</span>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#10b981]">FIELD</span>
                </div>
                <p className="text-[8px] sm:text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-0.5 hidden xs:block">
                  {t.nav.tagline || 'Luxury Travel'}
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

            {/* Mobile Right Controls: Compact Lang Switcher & Hamburger */}
            <div className="flex items-center gap-1.5 md:hidden">
              <LanguageSwitcher
                currentLang={lang}
                onChangeLang={onChangeLang}
              />
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-2xs hover:bg-white transition-all active:scale-95 cursor-pointer shrink-0"
                aria-label="Menyu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Animated Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 max-w-[1536px] mx-auto rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 p-4 space-y-3 shadow-2xl modal-card-animate">
            
            {/* Navigation Links Grid */}
            <div className="grid grid-cols-1 gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-2xl bg-slate-50 hover:bg-[#ecfdf5] text-xs font-bold text-slate-800 hover:text-[#065f46] border border-slate-200/70 transition-all flex items-center justify-between group cursor-pointer active:scale-98"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#10b981] shadow-2xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-bold">{link.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#10b981] transition-transform group-hover:translate-x-0.5" />
                  </button>
                );
              })}
            </div>

            {/* Direct Mobile Contact CTA */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex-1 py-3 px-4 rounded-2xl bg-[#10b981] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#059669] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>

          </div>
        )}
      </header>

      {/* Backdrop overlay on mobile when menu open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
