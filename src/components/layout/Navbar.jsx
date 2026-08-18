import React, { useState, useEffect } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';

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
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.regions, href: '#countries' },
    { name: t.nav.deals, href: '#deals' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.reviews, href: '#reviews' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-4 transition-all duration-300">
      <div className={`max-w-[1536px] mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2.5 px-6 sm:px-8 border border-white/60' 
          : 'bg-white/50 backdrop-blur-md py-3.5 px-6 sm:px-8 border border-white/50 shadow-sm'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: LOTOS FIELD */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3.5 group shrink-0"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform">
              <Plane className="w-6 h-6 transform -rotate-45" />
            </div>

            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 drop-shadow-sm">LOTOS</span>
                <span className="text-2xl sm:text-3xl font-black text-[#10b981] drop-shadow-sm">FIELD</span>
              </div>
              <p className="text-[10px] sm:text-[11px] tracking-widest uppercase font-bold text-slate-700 mt-0.5">
                Luxury Travel & Tourism
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/50 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-white/60">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#10b981] hover:bg-white/80 rounded-xl transition-all"
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

          {/* Mobile Right Controls: Lang Switcher & Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher
              currentLang={lang}
              onChangeLang={onChangeLang}
            />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/80 backdrop-blur-md text-slate-900 border border-white/60 hover:bg-white shadow-xs transition-all active:scale-95"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-[1536px] mx-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 p-5 space-y-4 shadow-2xl mobile-drawer-animate">
          
          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3.5 py-3 rounded-2xl bg-slate-50 hover:bg-[#ecfdf5] text-xs font-bold text-slate-800 hover:text-[#10b981] border border-slate-200/80 transition-all flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            ))}
          </div>

        </div>
      )}
    </header>
  );
}
