import React, { useState, useEffect } from 'react';
import { 
  Plane, User, 
  Menu, X 
} from 'lucide-react';

export default function Navbar({ 
  onOpenAuth, 
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
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 text-[#047857] text-sm font-bold hover:bg-white transition-all shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs font-black">
                  {currentUser.name.charAt(0)}
                </div>
                <span className="max-w-[110px] truncate">{currentUser.name}</span>
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
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/40 backdrop-blur-md text-slate-900 border border-white/50 hover:bg-white/60 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-[1536px] mx-auto rounded-3xl bg-white/85 backdrop-blur-xl border border-white/60 p-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          
          <div className="grid grid-cols-2 gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-xl bg-white/60 hover:bg-[#ecfdf5] text-xs font-bold text-slate-800 hover:text-[#10b981] border border-white/50 transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Auth Trigger */}
          <div className="pt-2 border-t border-slate-200/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-3.5 rounded-2xl btn-primary-emerald text-xs font-bold text-white shadow-md"
            >
              {currentUser ? 'Mening Profilim' : 'KIRISH / REGISTRATSIYA'}
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
