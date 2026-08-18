import React, { useState, useEffect } from 'react';
import { 
  Plane, User, 
  Menu, X, LogOut 
} from 'lucide-react';

export default function Navbar({ 
  onOpenAuth, 
  currentUser, 
  onOpenLogoutModal 
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pt-4 transition-all duration-300">
      <div className={`max-w-[1536px] mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-xl shadow-lg py-2.5 px-6 sm:px-8 border border-white/50' 
          : 'bg-white/20 backdrop-blur-md py-3.5 px-6 sm:px-8 border border-white/40 shadow-sm'
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
                <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-900 drop-shadow-sm">LOTOS</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#10b981] drop-shadow-sm">FIELD</span>
              </div>
              <p className="text-[10px] sm:text-[11px] tracking-widest uppercase font-bold text-slate-700 mt-0.5">
                Luxury Travel & Airlines
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-white/40">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-bold text-slate-800 hover:text-[#10b981] hover:bg-white/50 rounded-xl transition-all"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <button
                onClick={onOpenLogoutModal}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 hover:border-[#10b981] hover:bg-white shadow-md hover:scale-105 transition-all text-left group"
                title="Profilingizdan chiqish uchun bosing"
              >
                <div className="w-7 h-7 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs font-black shadow-xs group-hover:scale-105 transition-transform">
                  {currentUser.name?.charAt(0) || 'U'}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#065f46] group-hover:text-[#047857] max-w-[120px] truncate">
                  {currentUser.name}
                </span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-primary-emerald text-white text-sm font-bold tracking-wide shadow-md hover:scale-105 transition-transform"
              >
                <User className="w-4 h-4" />
                <span>KIRISH</span>
              </button>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {currentUser && (
              <button
                onClick={onOpenLogoutModal}
                className="w-9 h-9 rounded-xl bg-[#10b981] text-white flex items-center justify-center text-xs font-black shadow-sm"
                title="Profil"
              >
                {currentUser.name?.charAt(0) || 'U'}
              </button>
            )}
            
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

          {/* User Profile / Auth Section in Mobile */}
          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            {currentUser ? (
              <div className="p-3.5 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#10b981] text-white flex items-center justify-center text-xs font-black shadow-xs">
                    {currentUser.name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-900 block leading-tight">{currentUser.name}</span>
                    <span className="text-[10px] text-[#065f46] font-bold">{currentUser.tier || 'VIP A\'zo'}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogoutModal();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-red-50 text-red-600 border border-red-200 text-[11px] font-bold shadow-xs transition-colors flex items-center gap-1"
                >
                  <LogOut className="w-3 h-3" />
                  <span>Chiqish</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-3.5 rounded-2xl btn-primary-emerald text-xs font-black text-white uppercase tracking-wider shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <User className="w-4 h-4" />
                <span>KIRISH / REGISTRATSIYA</span>
              </button>
            )}
          </div>

        </div>
      )}
    </header>
  );
}
