import React from 'react';
import { 
  Plane, Phone, Send, MessageCircle, Mail, 
  MapPin, Clock 
} from 'lucide-react';
import { CONTACT_INFO, COUNTRIES } from '../../data/travelData';

export default function Footer({ onSelectCountry, onOpenContact }) {
  return (
    <footer className="relative bg-slate-950 text-white pt-16 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* 100% Verified Pure Razor-Sharp Twilight Airliner Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2600&q=100"
          alt="Airliner in Twilight"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-slate-950/85"></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center text-white shadow-lg">
                <Plane className="w-6 h-6 transform -rotate-45" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-wider">LOTOS</span>{' '}
                <span className="text-2xl font-black text-[#10b981]">FIELD</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              LOTOS FIELD — O'zbekistonning eng ishonchli xalqaro turizm va aviachiptalar platformasi. Dunyoning 50 dan ortiq davlatlariga to'g'ridan-to'g'ri reyslar, VIP lyuks xizmat va unutilmas sarguzashtlar.
            </p>

            {/* Social & Messenger Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={CONTACT_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm font-bold text-xs"
                title="Instagram"
              >
                IG
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#10b981] text-white border border-white/20 flex items-center justify-center transition-all shadow-sm"
                title="Qo'ng'iroq"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: O'zbekiston Viloyatlari */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              O'zbekiston Viloyatlari
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {COUNTRIES.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onSelectCountry(c.id);
                      document.querySelector('#countries')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#10b981] transition-colors flex items-center gap-1.5 text-left"
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
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Ichki Turizm Xizmatlari
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li className="hover:text-[#10b981] cursor-pointer transition-colors">Afrosiyob & VIP poyezd chiptalari</li>
              <li className="hover:text-[#10b981] cursor-pointer transition-colors">Viloyatlararo aviaparvozlar</li>
              <li className="hover:text-[#10b981] cursor-pointer transition-colors">Tarixiy shaharlar bo'ylab shaxsiy gid</li>
              <li className="hover:text-[#10b981] cursor-pointer transition-colors">Tog' & Ekoturizm (Zomin, Boysun, Hisor)</li>
              <li className="hover:text-[#10b981] cursor-pointer transition-colors">Qadimiy Qal'alar (Ellikqal'a) ekspeditsiyasi</li>
              <li className="hover:text-[#10b981] cursor-pointer transition-colors">VIP mehmonxonalar va transport</li>
            </ul>
          </div>

          {/* Col 5: Kontakt & Manzil */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Aloqa Markazi
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10b981] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-white hover:text-[#10b981] font-mono font-bold transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="text-slate-200 font-medium">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span className="text-slate-300">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="text-slate-300">Har kuni 08:00 - 22:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © 2026 LOTOS FIELD. Barcha huquqlar himoyalangan. Litsenziya: #LF-88921-UZ
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Maxfiylik siyosati</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Foydalanish shartlari</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Ommaviy oferta</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
