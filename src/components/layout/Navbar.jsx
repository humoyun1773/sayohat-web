import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Bus, Menu, X, Compass, Flame, 
  Star, Phone, ArrowRight,
  Send, MessageCircle, MapPin, Video,
  Info
} from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { CONTACT_INFO } from '../../data/travelData';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { lang, setLang, t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll Freeze when Mobile Modal Menu is open
  useBodyScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav?.home || (lang === 'ru' ? 'Главная' : lang === 'en' ? 'Home' : 'Bosh sahifa'), to: '/', icon: Compass, badge: lang === 'ru' ? 'Главная' : lang === 'en' ? 'Main' : 'Asosiy' },
    { name: t.nav?.regions || (lang === 'ru' ? 'Регионы и Города' : lang === 'en' ? 'Regions & Cities' : 'Viloyatlar & Turlar'), to: '/tours', icon: MapPin, badge: lang === 'ru' ? '8+ Городов' : lang === 'en' ? '8+ Cities' : '8 ta Shahar' },
    { name: t.nav?.deals || (lang === 'ru' ? 'Горящие Туры' : lang === 'en' ? 'Hot Deals' : 'Qaynoq Turlar'), to: '/deals', icon: Flame, badge: lang === 'ru' ? '-30% Акция' : lang === 'en' ? '-30% Promo' : '-30% Aksiya' },
    { name: t.nav?.media || (lang === 'ru' ? 'Медиа & Видео' : lang === 'en' ? 'Media & Video' : 'Jonli Media'), to: '/media', icon: Video, badge: lang === 'ru' ? 'Фото/Видео' : lang === 'en' ? 'Media' : 'Foto/Video' },
    { name: t.nav?.whyUs || (lang === 'ru' ? 'О Нас' : lang === 'en' ? 'About Us' : 'Biz haqimizda'), to: '/about', icon: Info, badge: lang === 'ru' ? 'Гарантии' : lang === 'en' ? 'Guarantee' : 'Kafolat' },
    { name: t.nav?.reviews || (lang === 'ru' ? 'Отзывы' : lang === 'en' ? 'Reviews' : 'Sharhlar'), to: '/reviews', icon: Star, badge: lang === 'ru' ? '5.0 Рейтинг' : lang === 'en' ? '5.0 Rating' : '5.0 Reyting' },
    { name: t.nav?.location || (lang === 'ru' ? 'Локация & Карты' : lang === 'en' ? 'Offices & Map' : 'Aloqa & Xarita'), to: '/contact', icon: MapPin, badge: lang === 'ru' ? 'Офис' : lang === 'en' ? 'Offices' : 'Ofis' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-2.5 sm:px-6 lg:px-8 pt-2.5 sm:pt-4 transition-all duration-300">
        <div className={`max-w-[1536px] mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2 px-3 sm:px-6 border border-white/80' 
            : 'bg-white/85 backdrop-blur-md py-2.5 sm:py-3.5 px-3 sm:px-6 border border-white/60 shadow-sm'
        }`}>
          <div className="flex items-center justify-between gap-2">
            
            {/* Brand Logo: LOTOS FIELD */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 group shrink-0 cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform shrink-0">
                <Bus className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="flex items-center gap-1 leading-none">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black tracking-wider text-slate-900">LOTOS</span>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#10b981]">FIELD</span>
                </div>
                <p className="text-[8px] sm:text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-0.5 hidden xs:block">
                  {t.nav?.tagline || (lang === 'ru' ? 'Автобусные и Авиа Туры' : lang === 'en' ? 'Coach & Flight Tours' : 'Avtobus & Samolyot Turlari')}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-2xl border border-white/80 shadow-xs">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#10b981] text-white shadow-xs'
                        : 'text-slate-800 hover:text-[#10b981] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Desktop Language Switcher (UZ / RU / EN) - Hidden on Mobile/Tablet */}
              <div className="hidden xl:flex items-center">
                <LanguageSwitcher
                  currentLang={lang}
                  onChangeLang={setLang}
                />
              </div>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all active:scale-95 cursor-pointer xl:hidden shrink-0"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5 text-slate-900" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE FULL MODAL DIALOG */}
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
                  <span className="text-[10px] uppercase font-bold text-slate-500">
                    {lang === 'ru' ? 'Автобусные и Авиа Туры' : lang === 'en' ? 'Coach & Flight Tours' : 'Avtobus & Samolyot Turlari'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Navigation Links */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 modal-scrollable">
              
              {/* Language Selector Inside Modal */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">
                  {lang === 'ru' ? 'Выберите язык:' : lang === 'en' ? 'Select language:' : 'Tilni tanlang:'}
                </span>
                <LanguageSwitcher
                  currentLang={lang}
                  onChangeLang={setLang}
                />
              </div>

              {/* Navigation Links List */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                  {lang === 'ru' ? 'Страницы' : lang === 'en' ? 'Pages' : 'Sahifalar'}
                </span>
                
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer active:scale-98 ${
                        isActive
                          ? 'bg-[#ecfdf5] border-[#10b981] shadow-xs'
                          : 'bg-white hover:bg-slate-50 border-slate-200/90 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${
                          isActive
                            ? 'bg-[#10b981] text-white'
                            : 'bg-[#ecfdf5] text-[#10b981] border border-[#a7f3d0]'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-sm font-bold leading-tight ${isActive ? 'text-[#065f46]' : 'text-slate-900'}`}>
                            {link.name}
                          </div>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {link.badge}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        isActive ? 'text-[#10b981]' : 'text-slate-400 group-hover:text-[#10b981] group-hover:translate-x-1'
                      }`} />
                    </Link>
                  );
                })}
              </div>

              {/* Messengers & Fast Call */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                  {lang === 'ru' ? 'Быстрая Связь' : lang === 'en' ? 'Fast Contact' : 'Tezkor Bog\'lanish'}
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={CONTACT_INFO.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="w-full p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#10b981]" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
