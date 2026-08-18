import React, { useState, useEffect } from 'react';
import { 
  Plane, Phone, User, 
  Menu, X, Globe, Sparkles, ChevronRight, ShieldCheck 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/travelData';

export default function Navbar({ 
  currency, 
  setCurrency, 
  onOpenAuth, 
  onOpenContact, 
  currentUser, 
  onLogout 
}) {
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
    { name: 'Bosh sahifa', href: '#hero' },
    { name: 'Laynerlar', href: '#fleet' },
    { name: 'Davlatlar', href: '#countries' },
    { name: 'Qaynoq Turlar', href: '#deals' },
    { name: 'Kalkulyator', href: '#calculator' },
    { name: 'Afzalliklar', href: '#why-us' },
    { name: 'Fikrlar', href: '#reviews' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-light shadow-lg py-2.5 px-4 sm:px-6 border border-slate-200' 
          : 'bg-white/95 backdrop-blur-md shadow-md py-3 px-4 sm:px-6 border border-slate-100'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: LOTOS FIELD */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-700 flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform">
              <Plane className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-45" />
            </div>

            <div>
              <div className="flex items-center gap-1 leading-none">
                <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-slate-900">LOTOS</span>
                <span className="text-xl sm:text-2xl font-extrabold text-sky-600">FIELD</span>
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-0.5">
                Luxury Travel & Airlines
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Currency Switcher */}
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'UZS' : 'USD')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-200 transition-all"
              title="Valyutani almashtirish"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{currency === 'USD' ? '$ USD' : 'So\'m (UZS)'}</span>
            </button>

            {/* Operator Contact Trigger */}
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
            >
              Aloqa
            </button>

            {/* User Profile / Login Button */}
            {currentUser ? (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold hover:bg-sky-100 transition-all shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-black">
                  {currentUser.name.charAt(0)}
                </div>
                <span className="max-w-[90px] truncate">{currentUser.name}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-primary-blue text-white text-xs font-bold tracking-wide shadow-sm"
              >
                <User className="w-3.5 h-3.5" />
                <span>KIRISH</span>
              </button>
            )}

          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'UZS' : 'USD')}
              className="px-2.5 py-1 rounded-xl bg-slate-100 text-[11px] font-bold text-slate-800 border border-slate-200"
            >
              {currency === 'USD' ? '$ USD' : 'UZS'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-white border border-slate-200 p-5 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-xs font-bold text-slate-800 hover:text-sky-600 border border-slate-100 transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Auth & Operator Triggers */}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-3 rounded-2xl bg-slate-100 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-all"
            >
              Operatorga Yozish
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="flex-1 py-3 rounded-2xl btn-primary-blue text-xs font-bold text-white shadow-md"
            >
              {currentUser ? 'Mening Profilim' : 'KIRISH / REGISTRATSIYA'}
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
