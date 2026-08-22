import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COUNTRIES, EXCHANGE_RATE, CONTACT_INFO } from '../data/travelData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bus, Star, ArrowRight, Phone, 
  Flame, Video, Award, ChevronDown, ChevronUp, 
  Utensils, BedDouble, HelpCircle
} from 'lucide-react';
import PhotoGallery from '../components/sections/PhotoGallery';

export default function HomePage() {
  const { 
    lang, 
    currency, 
    openBookingModal, 
    openContactModal 
  } = useApp();

  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Top 4 featured destinations
  const featuredIds = ['samarkand', 'bukhara', 'khiva', 'zaamin'];
  const featuredCountries = COUNTRIES.filter(c => featuredIds.includes(c.id));

  const toggleFaq = (index) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  const faqs = [
    {
      qUz: "5 kunlik tur paketi ichiga aynan nimalar kiritilgan?",
      qRu: "Что именно входит в 5-дневный тур-пакет?",
      qEn: "What exactly is included in the 5-day tour package?",
      aUz: "Bizning paketimiz to'liq 'All-Inclusive' formatida: borish-kelish transporti (zamonaviy konditsionerli avtobus yoki samolyot), 4 yulduzli qulay mehmonxonada 4 kecha tunash, kuniga 3 mahal to'liq milliy taomlar, barcha muzey va obidalarga kirish chiptalari hamda professional shaxsiy tarixchi gid xizmati.",
      aRu: "Наш пакет полностью в формате 'All-Inclusive': комфортный транспорт (автобус или авиарейс), проживание в 4★ отеле (4 ночи), 3-разовое национальное питание, все входные билеты в музеи и памятники, а также персональный лицензированный гид-историк.",
      aEn: "Our package is completely 'All-Inclusive': round-trip transport (bus or flight), 4★ hotel accommodation (4 nights), 3 meals a day, all museum/landmark entry tickets, and a dedicated certified historical guide."
    },
    {
      qUz: "Avtobus va samolyot turlarining qanday farqi bor?",
      qRu: "В чем разница между автобусными и авиатурами?",
      qEn: "What is the difference between bus and flight tours?",
      aUz: "Avtoturlar Yutong / King Long zamonaviy sayyohlik avtobuslarida amalga oshiriladi va yo'l davomida go'zal manzaralardan bahramand bo'lasiz. Samolyot turlarimiz esa to'g'ridan-to'g'ri qisqa parvozlar orqali vaqtingizni tejaydi va VIP qulaylik beradi. Har ikkala formatda ham mehmonxona, ovqatlanish va ekskursiyalar bir xil yuqori darajada.",
      aRu: "Автобусные туры проходят на современных автобусах Yutong/King Long с кондиционером и панорамным видом. Авиатуры экономят время за счет быстрых прямых перелетов. В обоих вариантах уровень отеля, питания и экскурсий одинаково премиальный.",
      aEn: "Bus tours run on modern Yutong/King Long coaches with panoramic views. Flight tours save travel time with direct domestic flights. In both formats, hotel stay, dining, and excursion quality remain equally premium."
    },
    {
      qUz: "Guruh bilan yoki oilaviy sayohat qilish mumkinmi?",
      qRu: "Можно ли поехать семьей или большой группой?",
      qEn: "Can we travel as a family or a private group?",
      aUz: "Albatta! Biz oilalar, do'stlar va korporativ jamoalar uchun alohida qulay sharoitlar va oilaviy xonalarni taqdim etamiz. 4 kishidan ortiq guruhlar uchun qo'shimcha maxsus chegirmalar ham mavjud.",
      aRu: "Конечно! Мы предоставляем отличные условия, семейные номера и специальные скидки для семей, компаний друзей и корпоративных групп от 4 человек.",
      aEn: "Absolutely! We provide family rooms, tailored itineraries, and group discounts for families, friends, and corporate teams of 4+ members."
    },
    {
      qUz: "To'lov qanday amalga oshiriladi va oldindan to'lov qancha?",
      qRu: "Как производится оплата и какой размер предоплаты?",
      qEn: "How is payment made and what is the deposit amount?",
      aUz: "To'lovni Payme, Click, bank o'tkazmasi, karta yoki naqd pulda (so'm yoki USD) qulay usulda to'lashingiz mumkin. O'rinni band qilish uchun atigi 20-30% boshlang'ich to'lov kifoya qiladi.",
      aRu: "Оплата принимается через Payme, Click, банковские карты, перечислением или наличными (в UZS или USD). Для бронирования места достаточно внести 20-30% предоплаты.",
      aEn: "Payments are accepted via Payme, Click, credit cards, bank transfer, or cash (UZS / USD). A 20-30% deposit is sufficient to secure your booking."
    }
  ];

  const reviews = [
    {
      quoteUz: "Samarqand va Buxoro 5 kunlik avtoturiga oilaviy bordik. Avtobus juda shinam, konditsioner a'lo darajada ishladi. Mehmonxona va ovqatlar sifatiga gap yo'q. Rahmat!",
      quoteRu: "Ездили всей семьей в 5-дневный тур по Самарканду и Бухаре. Автобус комфортный, кондиционер работал отлично. Отель и 3-разовое питание на высшем уровне. Спасибо!",
      quoteEn: "Traveled with my family on the 5-day tour to Samarkand & Bukhara. The bus was modern and comfortable, hotel and 3-time meals were fantastic. Highly recommended!",
      authorUz: "Jasur Karimov",
      authorRu: "Жасур Каримов",
      authorEn: "Jasur Karimov",
      cityUz: "Toshkent shahri",
      cityRu: "г. Ташкент",
      cityEn: "Tashkent city",
      tourUz: "Samarqand Turi",
      tourRu: "Тур в Самарканд",
      tourEn: "Samarkand Tour"
    },
    {
      quoteUz: "Xiva Ichan Qal'asiga samolyot reysi orqali uchdik. Tarixchi gidimiz har bir bino tarixini shunchalik qiziqarli so'zlab berdiki, 5 kun bir zumda o'tib ketdi. 100% tavsiya qilaman!",
      quoteRu: "Летали прямым рейсом в Хиву (Ичан-Кала). Гид-историк так увлекательно рассказывал о каждом медресе и минарете, что 5 дней пролетели незаметно. 100% рекомендую!",
      quoteEn: "Flew directly to Khiva (Ichan Kala). Our historian guide explained the heritage so vividly that 5 days flew by instantly. 100% recommended!",
      authorUz: "Madina Rustamova",
      authorRu: "Мадина Рустамова",
      authorEn: "Madina Rustamova",
      cityUz: "Farg'ona shahri",
      cityRu: "г. Фергана",
      cityEn: "Fergana city",
      tourUz: "Xiva Turi",
      tourRu: "Тур в Хиву",
      tourEn: "Khiva Tour"
    },
    {
      quoteUz: "Zomin tog'larida dam olish ajoyib bo'ldi. Toza havo, shinam kottej va 3 mahal mazali ovqatlar. Ayniqsa bolalarimizga juda yoqdi. LOTOS FIELD jamoasiga minnatdormiz!",
      quoteRu: "Отдых в горах Заамина превзошел все ожидания. Чистый хвойный воздух, уютные коттеджи и вкусная еда. Детям очень понравилось!",
      quoteEn: "Vacation in the Zaamin mountains was breathtaking. Crisp fresh mountain air, cozy cabins, and delicious meals. Our kids loved it!",
      authorUz: "Oybek Ergashev",
      authorRu: "Ойбек Эргашев",
      authorEn: "Oybek Ergashev",
      cityUz: "Samarqand shahri",
      cityRu: "г. Самарканд",
      cityEn: "Samarkand city",
      tourUz: "Zomin Turi",
      tourRu: "Тур в Заамин",
      tourEn: "Zaamin Tour"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Clean Ambient Gradient Mesh (No Background Photos) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-[#fafbfc] border-b border-slate-200/80">
        
        {/* Ambient Subtle Mesh Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-teal-200/30 to-sky-200/30 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-60 -z-10"></div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10">
          
          {/* Hero Main Titles with Framer Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto space-y-5"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              {lang === 'ru' ? (
                <>
                  Откройте Великое Наследие Узбекистана <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    В Полном Пакете All-Inclusive!
                  </span>
                </>
              ) : lang === 'en' ? (
                <>
                  Discover the Great Heritage of Uzbekistan <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    In Full All-Inclusive VIP Package!
                  </span>
                </>
              ) : (
                <>
                  O'zbekistonning Buyuk Merosini <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    To'liq All-Inclusive Paketda
                  </span> Kashf Eting!
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              {lang === 'ru'
                ? '5-дневные незабываемые туры в Самарканд, Бухару, Хиву, Термез и Заамин: транспорт, 4★ отель, 3-разовое питание, все билеты и персональный гид.'
                : lang === 'en'
                ? 'Unforgettable 5-day tours across Samarkand, Bukhara, Khiva, Termez, and Zaamin: round-trip transport, 4★ hotel, 3 daily meals, all entry tickets, and private guide.'
                : 'Samarqand, Buxoro, Xiva, Termiz va Zomin bo\'ylab transport, 4★ mehmonxona, 3 mahal milliy taomlar, barcha biletlar va shaxsiy gid kiritilgan 5 kunlik unutilmas turlar.'}
            </p>

            <div className="flex items-center justify-center pt-2">
              <Link
                to="/tours"
                className="py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>
                  {lang === 'ru' ? 'Смотреть Все 8+ Туров' : lang === 'en' ? 'Explore All 8+ Tours' : 'Barcha 8+ Turlarni Ko\'rish'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Key Metrics Trust Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
          >
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-black text-slate-900">30,000+</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                {lang === 'ru' ? 'Путешественников' : lang === 'en' ? 'Happy Travelers' : 'Sayohatchilar'}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">8+</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                {lang === 'ru' ? 'Регионов и Маршрутов' : lang === 'en' ? 'Regions & Routes' : 'Barcha Yo\'nalishlar'}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-black text-amber-500">4.99 ★</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                {lang === 'ru' ? 'Оценка Клиентов' : lang === 'en' ? 'Customer Rating' : 'Mijozlar Bahosi'}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-black text-slate-900">100%</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                {lang === 'ru' ? 'Официальная Гарантия' : lang === 'en' ? 'Official Guarantee' : 'Rasmiy Kafolat'}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TOP FEATURED DESTINATIONS: Ommabop 5 Kunlik VIP Turlar Showcase */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-2">
              {lang === 'ru' ? 'Популярный Выбор' : lang === 'en' ? 'Most Popular' : 'Eng Ko\'p Tanlangan'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {lang === 'ru' ? 'Популярные 5-Дневные Туры All-Inclusive' : lang === 'en' ? 'Popular 5-Day All-Inclusive Tours' : 'Ommabop 5 Kunlik All-Inclusive Turlar'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              {lang === 'ru' 
                ? 'Каждый тур включает транспорт, 4★ отель, 3-разовое питание и услуги лицензированного гида'
                : lang === 'en'
                ? 'Each tour includes round-trip transport, 4★ hotel, 3 daily meals, and certified guide service'
                : 'Har bir tur transport, 4★ mehmonxona, 3 mahal ovqat va gid xizmatini o\'z ichiga oladi'}
            </p>
          </div>

          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-emerald-600 hover:text-emerald-700 transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>
              {lang === 'ru' ? 'Все 8+ Регионов' : lang === 'en' ? 'View All 8+ Regions' : 'Barcha 8+ Viloyatlarni Ko\'rish'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCountries.map((c, idx) => {
            const name = (lang === 'ru' ? c.nameRu : lang === 'en' ? c.nameEn : c.name) || c.name;
            const tagline = (lang === 'ru' ? c.taglineRu : lang === 'en' ? c.taglineEn : c.taglineUz) || c.taglineUz;
            const priceUSD = c.basePriceUSD || 190;
            const priceDisplay = currency === 'UZS'
              ? `${(priceUSD * EXCHANGE_RATE).toLocaleString('uz-UZ')} UZS`
              : `$${priceUSD}`;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Photo & Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.coverImage}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-lg bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-xs">
                      {c.flag}
                    </span>
                    <span className="text-[10px] uppercase font-extrabold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                      {lang === 'ru' ? '5 Дней / 4 Ночи' : lang === 'en' ? '5 Days / 4 Nights' : '5 Kun / 4 Kecha'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider block">
                        {lang === 'ru' ? 'Полный VIP Пакет' : lang === 'en' ? 'Full VIP Package' : 'To\'liq VIP Paket'}
                      </span>
                      <span className="text-xl font-black">
                        {priceDisplay}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-500/95 backdrop-blur-md text-slate-950 text-xs font-black px-2 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-slate-950" />
                      <span>4.99</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-medium">
                      {tagline}
                    </p>
                  </div>

                  {/* Included Badges */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Bus className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'ru' ? 'Автобус / Авиарейс включен' : lang === 'en' ? 'Bus / Flight included' : 'Avtobus / Samolyot kiritilgan'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'ru' ? '4★ Отель + 3-раз. питание' : lang === 'en' ? '4★ Hotel + 3 daily meals' : '4★ Mehmonxona + 3 mahal ovqat'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'ru' ? 'Все билеты в музеи и гид' : lang === 'en' ? 'All museum tickets & guide' : 'Barcha muzey chiptalari & gid'}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to={`/tours/${c.id}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors cursor-pointer"
                    >
                      {lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'Details' : 'Batafsil'}
                    </Link>

                    <button
                      type="button"
                      onClick={() => openBookingModal({
                        countryId: c.id,
                        countryName: name,
                        priceUSD: priceUSD,
                        transportMode: 'bus'
                      })}
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center shadow-xs transition-colors cursor-pointer"
                    >
                      {lang === 'ru' ? 'Забронировать' : lang === 'en' ? 'Book Now' : 'Bron Qilish'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE US: 4 Asosiy Ustun (Why Us Pillars) */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200 inline-block">
              {lang === 'ru' ? 'Наши Преимущества' : lang === 'en' ? 'Our Advantages' : 'Kafolatlangan Sifat'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {lang === 'ru' ? 'Почему Выбирают LOTOS FIELD?' : lang === 'en' ? 'Why Travelers Choose LOTOS FIELD?' : 'Nega Aynan LOTOS FIELD Sayyohlik Agentligi?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {lang === 'ru' 
                ? 'Мы предлагаем полный комплекс услуг без скрытых доплат и лишних хлопот' 
                : lang === 'en'
                ? 'We provide a complete full-service experience without hidden costs or worries'
                : 'Biz faqat chipta emas, balki boshidan oxirigacha to\'liq xotirjamlik va servisni taqdim etamiz'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shadow-xs">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                {lang === 'ru' ? '1. Премиум Автобусы и Авиа' : lang === 'en' ? '1. Premium Buses & Flights' : '1. Qulay Avtobus va Samolyotlar'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {lang === 'ru'
                  ? 'Yutong 2026 кондиционированные туристические автобусы и прямые авиаперелеты.'
                  : lang === 'en'
                  ? 'Modern Yutong 2026 climate-controlled tour coaches and direct airline tickets.'
                  : 'Yutong 2026 konditsionerli qulay sayyohlik avtobuslari hamda to\'g\'ridan-to\'g\'ri samolyot reyslari.'}
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shadow-xs">
                <BedDouble className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                {lang === 'ru' ? '2. Уютные 4★ Отели' : lang === 'en' ? '2. Cozy 4★ Hotels' : '2. 4★ Shinam Mehmonxonalar'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {lang === 'ru'
                  ? 'Премиум отели рядом с историческими памятниками. Wi-Fi, мягкие кровати и комфорт.'
                  : lang === 'en'
                  ? 'Premium hotels located steps from historic landmarks with Wi-Fi and top amenities.'
                  : 'Tarixiy obidalar yonida joylashgan premium mehmonxonalar. Har bir xonada Wi-Fi va barcha sharoitlar.'}
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shadow-xs">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                {lang === 'ru' ? '3. Вкусное 3-Раз. Питание' : lang === 'en' ? '3. Delicious 3 Daily Meals' : '3. Mazali 3 Mahal Ovqat'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {lang === 'ru'
                  ? 'Самаркандский плов, Бухарские шашлыки, Хивинский тухум-барак в лучших ресторанах.'
                  : lang === 'en'
                  ? 'Authentic Samarkand plov, Bukhara shashlik, and Khiva delicacies at curated restaurants.'
                  : 'Mashhur Samarqand to\'y oshi, Buxoro shashliklari, Xiva tuxum baragi va milliy dasturxon.'}
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                {lang === 'ru' ? '4. Профессиональный Гид' : lang === 'en' ? '4. Certified Historian Guide' : '4. Professional Tarixchi Gid'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {lang === 'ru'
                  ? 'Лицензированные гиды-историки сопровождают вас на протяжении всех 5 дней тура.'
                  : lang === 'en'
                  ? 'Licensed historian guides accompany your group throughout the entire 5-day journey.'
                  : '5 kun davomida siz bilan birga bo\'luvchi litsenziyali gidlar obidalar tarixini so\'zlab berishadi.'}
              </p>
            </motion.div>

          </div>

          <div className="text-center pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              <span>
                {lang === 'ru' ? 'Подробнее о компании и гарантиях →' : lang === 'en' ? 'Learn more about company & guarantees →' : 'Kompaniya va kafolatlar haqida batafsil ma\'lumot →'}
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW IT WORKS: 3 Oddiy Qadamda Sayohat Qiling */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block">
            {lang === 'ru' ? 'Легко и Просто' : lang === 'en' ? 'Easy & Simple' : 'Oson va Qulay'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === 'ru' ? 'Путешествие в 3 Простых Шага' : lang === 'en' ? 'Start Journey in 3 Easy Steps' : 'Sayohatga Chiqish 3 Oddiy Qadamda'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {lang === 'ru' 
              ? 'Без лишних документов — забронируйте свое место за пару минут' 
              : lang === 'en'
              ? 'Without complicated paperwork — secure your seat in just a few clicks'
              : 'Hech qanday murakkab hujjatlarsiz, bir necha daqiqada o\'z o\'rningizni band qiling.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 relative space-y-3 shadow-xs hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md">
              1
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'ru' ? 'Выберите Тур и Транспорт' : lang === 'en' ? 'Select Tour & Transport' : 'Yo\'nalish va Transportni Tanlang'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {lang === 'ru'
                ? 'Выберите желаемый город (Самарканд, Бухара, Хива и др.) и формат поездки (автобус или самолет).'
                : lang === 'en'
                ? 'Pick your favorite destination (Samarkand, Bukhara, Khiva, etc.) and preferred transport (bus or flight).'
                : 'Saytimizdagi turlar ro\'yxatidan qiziqtirgan viloyatni hamda transport formatini belgilang.'}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 relative space-y-3 shadow-xs hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md">
              2
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'ru' ? 'Забронируйте Онлайн' : lang === 'en' ? 'Book Online' : 'Onlayn Bron Qiling'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {lang === 'ru'
                ? 'Оставьте имя и номер телефона. Наш менеджер свяжется за 5 минут для подтверждения брони.'
                : lang === 'en'
                ? 'Leave your name and phone number. Our manager will call back within 5 minutes to confirm.'
                : 'Ismingiz va telefon raqamingizni qoldiring. Menejerimiz 5 daqiqa ichida bog\'lanib, tafsilotlarni rasmiylashtiradi.'}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 relative space-y-3 shadow-xs hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md">
              3
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'ru' ? 'Наслаждайтесь VIP Туром!' : lang === 'en' ? 'Enjoy Your VIP Tour!' : '5 Kunlik VIP Sayohatdan Zavqlaning!'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {lang === 'ru'
                ? 'Прибудьте к месту отправления. Всю организацию, питание и отель мы берем на себя!'
                : lang === 'en'
                ? 'Arrive at the departure hub on time. We handle all logistics, dining, tickets, and hotels!'
                : 'Belgilangan vaqtda yetib keling. Barcha tashkiliy ishlarni, ovqatlanish va biletlarni biz ta\'minlaymiz!'}
            </p>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOT DEALS & LIVE MEDIA DUAL SPOTLIGHT CARDS */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Hot Deals Spotlight */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden"
          >
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-200 animate-pulse" />
                <span>{lang === 'ru' ? 'Горящие Скидки (-30%)' : lang === 'en' ? 'Hot Deals (-30%)' : 'Qaynoq Chegirmalar (-30%)'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                {lang === 'ru' ? 'Специальная Скидка 30% на Автотуры!' : lang === 'en' ? 'Special 30% Off on Bus Tours!' : 'Avtoturlar Uchun Maxsus 30% Chegirma!'}
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                {lang === 'ru'
                  ? 'Ограниченное предложение на 5-дневные туры All-Inclusive в Самарканд, Бухару и Заамин.'
                  : lang === 'en'
                  ? 'Limited-time special prices on 5-day all-inclusive tours to Samarkand, Bukhara, and Zaamin.'
                  : 'Samarqand, Buxoro va Zomin yo\'nalishlaridagi 5 kunlik barcha xizmatlar kiritilgan turlarga maxsus narxlar.'}
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/deals"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-white text-slate-950 font-black text-xs hover:bg-amber-50 transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                <span>{lang === 'ru' ? 'Смотреть Скидки' : lang === 'en' ? 'View Deals' : 'Chegirmalarni Ko\'rish'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Live Media Spotlight */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden border border-slate-800"
          >
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>{lang === 'ru' ? 'Живая Медиа Галерея' : lang === 'en' ? 'Live Travel Gallery' : 'Jonli Sayohatlar Galereyasi'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                {lang === 'ru' ? 'Реальные Фото и Видео Наших Туристов' : lang === 'en' ? 'Real Photos & Videos from Travelers' : 'Sayohatchilarimizning Haqiqiy Foto & Videolari'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {lang === 'ru'
                  ? 'Познакомьтесь с живыми эмоциями и яркими моментами путешественников LOTOS FIELD.'
                  : lang === 'en'
                  ? 'Discover vivid emotions and genuine memories of tourists exploring Uzbekistan with LOTOS FIELD.'
                  : 'Biz bilan O\'zbekiston bo\'ylab sayohat qilgan yurtdoshlarimizning eng yorqin xotiralari.'}
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/media"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                <span>{lang === 'ru' ? 'Открыть Галерею' : lang === 'en' ? 'Open Gallery' : 'Foto va Videolarni Ochish'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GRAND PHOTO GALLERY: Rich Visual Travel Moments */}
      {/* ========================================================================= */}
      <PhotoGallery />

      {/* ========================================================================= */}
      {/* 7. VERIFIED CUSTOMER REVIEWS SPOTLIGHT */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-2">
              {lang === 'ru' ? 'Отзывы Клиентов' : lang === 'en' ? 'Verified Reviews' : 'Xolis Baholar'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {lang === 'ru' ? 'Что Говорят Наши Туристы?' : lang === 'en' ? 'What Our Travelers Say?' : 'Mijozlarimiz Nima Deyishadi?'}
            </h2>
          </div>

          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-emerald-600 hover:text-emerald-700 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>
              {lang === 'ru' ? 'Все 3,400+ Отзывов →' : lang === 'en' ? 'View All 3,400+ Reviews →' : 'Barcha 3,400+ Sharhlarni Ko\'rish →'}
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => {
            const quote = lang === 'ru' ? rev.quoteRu : lang === 'en' ? rev.quoteEn : rev.quoteUz;
            const author = lang === 'ru' ? rev.authorRu : lang === 'en' ? rev.authorEn : rev.authorUz;
            const city = lang === 'ru' ? rev.cityRu : lang === 'en' ? rev.cityEn : rev.cityUz;
            const tour = lang === 'ru' ? rev.tourRu : lang === 'en' ? rev.tourEn : rev.tourUz;

            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                    "{quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{author}</div>
                    <span className="text-[10px] text-slate-400">{city}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {tour}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ ACCORDION: Tez-tez Beriladigan Savollar */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block">
            {lang === 'ru' ? 'Часто Задаваемые Вопросы' : lang === 'en' ? 'Frequently Asked Questions' : 'Ko\'p So\'raladigan Savollar'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === 'ru' ? 'Есть Вопросы?' : lang === 'en' ? 'Have Questions?' : 'Savollaringiz Bormi?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {lang === 'ru' 
              ? 'Ответы на самые популярные вопросы о наших турах и бронировании.' 
              : lang === 'en'
              ? 'Clear answers to common questions regarding our tour packages and bookings.'
              : 'Sayohatchilarimiz eng ko\'p beradigan savollarga aniq va to\'liq javoblar.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            const question = lang === 'ru' ? faq.qRu : lang === 'en' ? faq.qEn : faq.qUz;
            const answer = lang === 'ru' ? faq.aRu : lang === 'en' ? faq.aEn : faq.aUz;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-100 overflow-hidden"
                    >
                      {answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. GRAND CALL TO ACTION: Orzuingizdagi Sayohatni Bugun Boshlang! */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800 inline-block">
              {lang === 'ru' ? '100% All-Inclusive VIP Сервис' : lang === 'en' ? '100% All-Inclusive VIP Service' : '100% All-Inclusive VIP Xizmat'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'ru' 
                ? 'Готовы к Незабываемому Путешествию по Узбекистану?' 
                : lang === 'en'
                ? 'Ready for an Unforgettable Journey Across Uzbekistan?'
                : 'O\'zbekiston Bo\'ylab Unutilmas Sayohatga Tayyormisiz?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              {lang === 'ru'
                ? 'Количество мест ограничено. Выберите тур прямо сейчас или оставьте номер для консультации.'
                : lang === 'en'
                ? 'Seats are limited. Select your favorite tour now or contact us for a free consultation.'
                : 'Joylar soni cheklangan. Hoziroq turni tanlang yoki bepul maslahat olish uchun telefon raqamingizni qoldiring.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/tours"
                className="py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs tracking-wide shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <span>{lang === 'ru' ? 'Выбрать Тур' : lang === 'en' ? 'Select Tour' : 'Turlarni Tanlash'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={openContactModal}
                className="py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-xs tracking-wide transition-all border border-white/20 cursor-pointer hover:scale-105"
              >
                {lang === 'ru' ? 'Бесплатная Консультация' : lang === 'en' ? 'Free Consultation' : 'Bepul Maslahat Olish'}
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="py-3.5 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-emerald-400 font-mono font-bold text-xs flex items-center gap-2 border border-white/10 hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
