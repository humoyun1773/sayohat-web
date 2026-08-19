import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bus, Phone, Send, MessageCircle, Mail, 
  MapPin, Clock 
} from 'lucide-react';
import { CONTACT_INFO, COUNTRIES } from '../../data/travelData';
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { lang, setSelectedCountryId, openContactModal, t } = useApp();
  const navigate = useNavigate();

  const handleCountryClick = (countryId) => {
    setSelectedCountryId(countryId);
    navigate(`/tours/${countryId}`);
  };

  const navLinks = [
    { to: '/', label: lang === 'ru' ? 'Главная' : lang === 'en' ? 'Home' : 'Bosh sahifa' },
    { to: '/tours', label: lang === 'ru' ? 'Регионы и Города' : lang === 'en' ? 'Regions & Cities' : 'Viloyatlar va Shaharlar' },
    { to: '/deals', label: lang === 'ru' ? 'Горящие Скидки (-30%)' : lang === 'en' ? 'Hot Deals (-30%)' : 'Qaynoq Chegirmalar (-30%)' },
    { to: '/media', label: lang === 'ru' ? 'Живая Медиа & Видео' : lang === 'en' ? 'Live Travel Media' : 'Jonli Media & Video' },
    { to: '/about', label: lang === 'ru' ? 'О Компании & Гарантии' : lang === 'en' ? 'About Us & Guarantees' : 'Biz haqimizda & Kafolat' },
    { to: '/reviews', label: lang === 'ru' ? 'Отзывы Клиентов (5.0 ★)' : lang === 'en' ? 'Client Reviews (5.0 ★)' : 'Mijozlar Fikrlari (5.0 ★)' },
    { to: '/contact', label: lang === 'ru' ? 'Контакты & Офисы' : lang === 'en' ? 'Offices & Location' : 'Ofis & Joylashuv Xaritasi' },
  ];

  return (
    <footer className="relative bg-slate-950 text-white pt-16 pb-12 overflow-hidden border-t border-slate-800">
      {/* Ambient Luxury Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex cursor-pointer">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-wider">LOTOS</span>{' '}
                <span className="text-2xl font-black text-[#10b981]">FIELD</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              {lang === 'ru'
                ? 'Организатор комфортных 5-дневных VIP-путешествий по Узбекистану на туристических автобусах и авиарейсах.'
                : lang === 'en'
                ? 'Organizer of premier 5-day all-inclusive VIP journeys across Uzbekistan by modern coach and direct flights.'
                : "O'zbekiston bo'ylab qulay sayyohlik avtobuslari va samolyotlarida 5 kunlik unutilmas VIP sayohatlar tashkilotchisi."}
            </p>

            {/* Social & Messenger Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm hover:scale-110 cursor-pointer"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm hover:scale-110 cursor-pointer"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm font-bold text-xs hover:scale-110 cursor-pointer"
                title="Instagram"
              >
                IG
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm hover:scale-110 cursor-pointer"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: O'zbekiston Viloyatlari */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              {lang === 'ru' ? 'Регионы и Туры' : lang === 'en' ? 'Regions & Tours' : "Viloyatlar & Turlar"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {COUNTRIES.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleCountryClick(c.id)}
                    className="hover:text-[#10b981] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <span>{c.flag}</span>
                    <span>{lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <Link to="/tours" className="text-[#10b981] hover:underline font-bold inline-block pt-1 cursor-pointer">
                  {lang === 'ru' ? 'Все 8+ регионов →' : lang === 'en' ? 'All 8+ regions →' : 'Barcha 8+ viloyatlar →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sahifalar & Xizmatlar */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              {lang === 'ru' ? 'Страницы' : lang === 'en' ? 'Pages' : 'Sahifalar'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-[#10b981] transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Kontakt & Manzil */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              {lang === 'ru' ? 'Контакты' : lang === 'en' ? 'Contact' : "Bog'lanish"}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10b981] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-white hover:text-[#10b981] font-mono font-bold transition-colors cursor-pointer">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="text-slate-200 font-medium">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span className="text-slate-300">{lang === 'ru' ? CONTACT_INFO.addressRu : lang === 'en' ? CONTACT_INFO.addressEn : CONTACT_INFO.addressUz}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="text-slate-300">
                  {lang === 'ru' ? '24/7 Прием звонков и бронь' : lang === 'en' ? '24/7 Booking & Support' : '24/7 Qabul va Bron qilish'}
                </span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={openContactModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xs transition-all shadow-md cursor-pointer text-center"
                >
                  {lang === 'ru' ? 'Связаться с нами' : lang === 'en' ? 'Send a Message' : 'Xabar qoldirish'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            {lang === 'ru' 
              ? '© 2026 LOTOS FIELD. Все права защищены.' 
              : lang === 'en' 
              ? '© 2026 LOTOS FIELD. All rights reserved.' 
              : '© 2026 LOTOS FIELD. Barcha huquqlar himoyalangan.'}
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">
              {lang === 'ru' ? 'Политика конфиденциальности' : lang === 'en' ? 'Privacy Policy' : 'Maxfiylik siyosati'}
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {lang === 'ru' ? 'Условия использования' : lang === 'en' ? 'Terms of Service' : 'Foydalanish shartlari'}
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {lang === 'ru' ? 'Публичная оферта' : lang === 'en' ? 'Public Offer' : 'Ommaviy oferta'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
