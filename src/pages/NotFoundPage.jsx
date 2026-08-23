import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Bus, Home, Compass } from 'lucide-react';

export default function NotFoundPage() {
  const { lang } = useApp();

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 bg-slate-950">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626293952701-d7faef141154?auto=format&fit=crop&w=1800&q=80')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90"></div>

      <div className="relative z-10 max-w-md w-full text-center space-y-6 bg-slate-900/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl text-white">
        <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-inner">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <div className="space-y-2">
          <div className="text-6xl font-black text-slate-900 font-mono">404</div>
          <h1 className="text-xl font-black text-slate-800">
            {lang === 'ru' ? 'Страница не найдена' : lang === 'en' ? 'Page Not Found' : 'Sahifa topilmadi'}
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            {lang === 'ru'
              ? 'К сожалению, запрашиваемая страница не существует или была перемещена.'
              : lang === 'en'
              ? 'Sorry, the page you are looking for does not exist or has been moved.'
              : "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{lang === 'ru' ? 'На главную' : lang === 'en' ? 'Back Home' : 'Bosh sahifaga qaytish'}</span>
          </Link>

          <Link
            to="/tours"
            className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 cursor-pointer"
          >
            <Bus className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'ru' ? 'Все туры' : lang === 'en' ? 'View Tours' : 'Turlarni ko\'rish'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
