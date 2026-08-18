import React from 'react';
import { 
  Plane, Phone, Send, MessageCircle, Mail, 
  MapPin, Clock, Heart, ShieldCheck, Globe 
} from 'lucide-react';
import { CONTACT_INFO, COUNTRIES } from '../data/travelData';

export default function Footer({ onSelectCountry, onOpenContact }) {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md">
                <Plane className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-wider">LOTOS</span>{' '}
                <span className="text-xl font-extrabold text-sky-400">FIELD</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              LOTOS FIELD — O'zbekistonning eng ishonchli xalqaro turizm va aviachiptalar platformasi. Dunyoning 50 dan ortiq davlatlariga to'g'ridan-to'g'ri reyslar, VIP lyuks xizmat va unutilmas sarguzashtlar.
            </p>

            {/* Social & Messenger Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-500 text-sky-400 hover:text-white border border-slate-700 flex items-center justify-center transition-all shadow-sm"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-slate-700 flex items-center justify-center transition-all shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-pink-400 hover:text-white border border-slate-700 flex items-center justify-center transition-all shadow-sm font-bold text-xs"
                title="Instagram"
              >
                IG
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-slate-700 flex items-center justify-center transition-all shadow-sm"
                title="Qo'ng'iroq"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Ommabop Davlatlar */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-sky-400">
              Ommabop Davlatlar
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {COUNTRIES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onSelectCountry(c.id);
                      document.querySelector('#countries')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Xizmatlar */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-sky-400">
              Xizmatlarimiz
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white cursor-pointer">Aviachiptalar bron qilish</li>
              <li className="hover:text-white cursor-pointer">Umra & Ziyorat turlari</li>
              <li className="hover:text-white cursor-pointer">VIP Cho'l & Orol safarlari</li>
              <li className="hover:text-white cursor-pointer">Viza hujjatlarini rasmiylashtirish</li>
              <li className="hover:text-white cursor-pointer">Tibbiy sug'urta xizmati</li>
              <li className="hover:text-white cursor-pointer">Gid va tarjimon xizmatlari</li>
            </ul>
          </div>

          {/* Col 5: Kontakt & Manzil */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Aloqa Markazi
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-slate-200 hover:text-white font-mono font-bold">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="text-slate-300">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Har kuni 08:00 - 22:00</span>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full mt-2 py-2 rounded-xl bg-slate-800 hover:bg-sky-600 text-white border border-slate-700 text-xs font-bold transition-all"
              >
                Operatorga Yozish
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © 2026 LOTOS FIELD. Barcha huquqlar himoyalangan. Litsenziya: #LF-88921-UZ
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Maxfiylik siyosati</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Foydalanish shartlari</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Ommaviy oferta</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
