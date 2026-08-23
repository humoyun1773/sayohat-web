import React from 'react';
import { useApp } from '../context/AppContext';
import WhyUs from '../components/sections/WhyUs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Bus, Clock, 
  CheckCircle2, ArrowRight, Star
} from 'lucide-react';

export default function AboutPage() {
  const { lang, t, openContactModal } = useApp();

  const stats = [
    { 
      number: '30,000+', 
      label: lang === 'ru' ? 'Довольных Туристов' : lang === 'en' ? 'Satisfied Travelers' : "Mamnun Sayohatchilar", 
      desc: lang === 'ru' ? 'Более 5 лет организуем туры по Узбекистану' : lang === 'en' ? 'Serving travelers across Uzbekistan for 5+ years' : "5 yil davomida O'zbekiston bo'ylab xizmat ko'rsatdik" 
    },
    { 
      number: '8+', 
      label: lang === 'ru' ? 'Главных Направлений' : lang === 'en' ? 'Primary Destinations' : "Asosiy Yo'nalishlar", 
      desc: lang === 'ru' ? 'Самарканд, Бухара, Хива, Термез, Заамин и др.' : lang === 'en' ? 'Samarkand, Bukhara, Khiva, Termez, Zaamin, etc.' : "Samarqand, Buxoro, Xiva, Termiz, Zomin va b." 
    },
    { 
      number: '100%', 
      label: lang === 'ru' ? 'Сервис «Все Включено»' : lang === 'en' ? 'All-Inclusive Care' : "All-Inclusive Xizmat", 
      desc: lang === 'ru' ? 'Транспорт + Отель 4★ + 3-раз. питание + Гид' : lang === 'en' ? 'Transport + 4★ Hotel + 3 Meals + Guide' : "Transport + Mehmonxona + 3 mahal ovqat + Gid" 
    },
    { 
      number: '4.99 ★', 
      label: lang === 'ru' ? 'Рейтинг Доверия' : lang === 'en' ? 'Customer Rating' : "Mijozlar Bahosi", 
      desc: lang === 'ru' ? 'Высочайший уровень комфорта и безопасности' : lang === 'en' ? 'Highest standards of comfort and safety' : "Eng yuqori qulaylik va xavfsizlik darajasi" 
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 bg-[#fafbfc]">
      
      {/* Header Banner with Background Photo */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-14 text-white shadow-xl border border-slate-800">
          
          {/* Crystal Clear Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1800&q=80')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs uppercase font-black tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800 inline-block shadow-xs">
              {lang === 'ru' ? 'О Компании' : lang === 'en' ? 'About Us' : 'Kompaniya Haqida'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
              {lang === 'ru'
                ? 'LOTOS FIELD — Ваш Официальный Туроператор по Узбекистану'
                : lang === 'en'
                ? 'LOTOS FIELD — Your Official Tour Operator in Uzbekistan'
                : "LOTOS FIELD — O'zbekiston Bo'ylab Rasmiy Sayohat Operatoringiz"}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
              {lang === 'ru'
                ? 'Мы предоставляем не просто билеты, а полноценный 5-дневный отдых с комфортом, безопасностью и заботой в каждой детали.'
                : lang === 'en'
                ? 'We provide not just transportation, but complete 5-day journeys crafted with comfort, safety, and unforgettable memories.'
                : "Biz har bir sayohatchiga shunchaki yo'l chiptasi emas, balki qulaylik, xavfsizlik va unutilmas xotiralarga to'la 5 kunlik mukammal dam olishni taqdim etamiz."}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid with Animation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-slate-200 text-center space-y-2 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">
                {item.number}
              </div>
              <div className="text-sm font-bold text-slate-900">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Us Core Features */}
      <WhyUs
        t={t}
        lang={lang}
      />

      {/* Photo Showcase of Fleet & Hotels */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block">
            {lang === 'ru' ? 'Наш Сервис в Кадрах' : lang === 'en' ? 'Our Service in Photos' : 'Xizmatlarimiz Rasmlarda'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {lang === 'ru' ? 'Премиальный Комфорт и Забота о Каждом Госте' : lang === 'en' ? 'Premium Comfort & Dedicated Hospitality' : 'Har Bir Mehmonimiz Uchun Oliy Darajadagi Qulaylik'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 relative group h-64 bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" 
              alt="VIP Coaches" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-black block">{lang === 'ru' ? 'VIP Автобусы Yutong 2026' : lang === 'en' ? 'Yutong 2026 VIP Coaches' : 'Yutong 2026 VIP Avtobuslar'}</span>
              <span className="text-[10px] text-slate-300 font-medium">{lang === 'ru' ? 'Кондиционер, Wi-Fi, мягкие кресла' : lang === 'en' ? 'AC, Wi-Fi, ergonomic reclining seats' : 'Konditsioner, Wi-Fi, qulay o\'rindiqlar'}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 relative group h-64 bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" 
              alt="4 Star Hotel" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-black block">{lang === 'ru' ? '4★ Исторические Отели' : lang === 'en' ? '4★ Historic Boutique Hotels' : '4★ Tarixiy Mehmonxonalar'}</span>
              <span className="text-[10px] text-slate-300 font-medium">{lang === 'ru' ? 'В шаге от Регистана и Ляби-Хауз' : lang === 'en' ? 'Steps from Registan and Lyabi-Khauz' : 'Registon va Labi Hovuz yonida'}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 relative group h-64 bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="National Feast" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-black block">{lang === 'ru' ? '3-Разовое Питание' : lang === 'en' ? '3-Course Gourmet Meals' : '3 Mahal Mazali Milliy Taomlar'}</span>
              <span className="text-[10px] text-slate-300 font-medium">{lang === 'ru' ? 'Самаркандский плов, шашлыки, самса' : lang === 'en' ? 'Authentic pilaf, kebabs, tandoor somsa' : 'Samarqand oshi, shashlik, somsalar'}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 relative group h-64 bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80" 
              alt="Historian Guides" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-black block">{lang === 'ru' ? 'Лицензированные Гиды' : lang === 'en' ? 'Licensed Historian Guides' : 'Shaxsiy Tarixchi Gidlar'}</span>
              <span className="text-[10px] text-slate-300 font-medium">{lang === 'ru' ? 'Глубокие знания истории и забота' : lang === 'en' ? 'Deep cultural immersion and care' : 'Tarixiy obidalar bo\'ylab ekskursiya'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Standards & Guarantees - Clean Gradient */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-6">
              <span className="text-xs uppercase font-black tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80 inline-block">
                {lang === 'ru' ? 'Официальные Стандарты' : lang === 'en' ? 'Official Standards' : 'Rasmiy Standartlar'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {lang === 'ru'
                  ? '100% Гарантия Качества и Безопасности в Каждой Поездке'
                  : lang === 'en'
                  ? '100% Quality & Safety Guarantee in Every Single Tour'
                  : 'Har Bir Sayohatimizda 100% Sifat va Xavfsizlik Kafolati'}
              </h2>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                {lang === 'ru'
                  ? 'LOTOS FIELD — лицензированный туроператор, отвечающий высшим стандартам туризма. Наш транспортный парк проходит регулярный техосмотр, а водители имеют стаж более 10 лет.'
                  : lang === 'en'
                  ? 'LOTOS FIELD is a fully licensed tour operator adhering to the highest tourism standards. Our vehicles undergo strict regular technical inspections.'
                  : "LOTOS FIELD xalqaro turizm standartlariga to'liq javob beruvchi litsenziyalangan tur operator hisoblanadi. Bizning transport parkimiz muntazam texnik ko'rikdan o'tkaziladi."}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'ru'
                      ? 'Люксовые автобусы с климат-контролем и Wi-Fi'
                      : lang === 'en'
                      ? 'Luxury coaches equipped with AC, comfortable seating & Wi-Fi'
                      : 'Konditsioner va Wi-Fi bilan jihozlangan lyuks sayyohlik avtobuslari'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'ru'
                      ? 'Уютные 4★ отели в исторических центрах городов'
                      : lang === 'en'
                      ? 'Comfortable 4★ hotels located right in historic city centers'
                      : 'Tarixiy markazlarda joylashgan qulay 4★ mehmonxonalar'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'ru'
                      ? '3-разовое национальное питание в лучших ресторанах'
                      : lang === 'en'
                      ? 'Full 3-course national meals at top certified restaurants'
                      : "Milliy taomlar, to'y oshi va sifatli 3 mahal restoranda ovqatlanish"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'ru'
                      ? '24/7 персональный куратор и сертифицированный гид'
                      : lang === 'en'
                      ? '24/7 personal tour curator & licensed historian guide'
                      : '24/7 shaxsiy kurator va professional tarixchi gid hamrohligi'}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/tours"
                  className="py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 hover:scale-105 cursor-pointer"
                >
                  <span>{lang === 'ru' ? 'Смотреть Туры' : lang === 'en' ? 'View Tours' : 'Turlarni Ko\'rish'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={openContactModal}
                  className="py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20 cursor-pointer hover:scale-105"
                >
                  {lang === 'ru' ? 'Есть вопросы? Связаться' : lang === 'en' ? 'Questions? Contact Us' : 'Savollar bormi? Bog\'lanish'}
                </button>
              </div>
            </div>

            {/* Right Feature Panel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="text-xl font-black text-white">100%</div>
                <div className="text-xs text-slate-300 font-medium">
                  {lang === 'ru' ? 'Лицензия' : lang === 'en' ? 'Licensed' : 'Rasmiy Litsenziya'}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <Star className="w-8 h-8 text-amber-400 mx-auto" />
                <div className="text-xl font-black text-white">4.99 ★</div>
                <div className="text-xs text-slate-300 font-medium">
                  {lang === 'ru' ? 'Оценка Клиентов' : lang === 'en' ? 'Client Rating' : 'Mijozlar Bahosi'}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <Bus className="w-8 h-8 text-sky-400 mx-auto" />
                <div className="text-xl font-black text-white">VIP Flot</div>
                <div className="text-xs text-slate-300 font-medium">Yutong & King Long</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto" />
                <div className="text-xl font-black text-white">24/7</div>
                <div className="text-xs text-slate-300 font-medium">
                  {lang === 'ru' ? 'Поддержка' : lang === 'en' ? 'Support' : 'Doimiy Aloqa'}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </div>
  );
}
