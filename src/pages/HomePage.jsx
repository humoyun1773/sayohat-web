import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COUNTRIES, EXCHANGE_RATE, CONTACT_INFO } from '../data/travelData';
import { 
  Bus, Plane, MapPin, Calendar, Star, ShieldCheck, 
  Sparkles, CheckCircle2, ArrowRight, Phone, Send, 
  MessageCircle, Flame, Video, Award, Clock, 
  Users, ChevronDown, ChevronUp, Compass, Heart,
  Utensils, BedDouble, HelpCircle
} from 'lucide-react';

export default function HomePage() {
  const { 
    lang, 
    currency, 
    setSelectedCountryId, 
    openBookingModal, 
    openContactModal 
  } = useApp();

  const navigate = useNavigate();

  // Search Bar State
  const [selectedDest, setSelectedDest] = useState('samarkand');
  const [selectedTransport, setSelectedTransport] = useState('bus');
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Top 4 featured destinations
  const featuredIds = ['samarkand', 'bukhara', 'khiva', 'zaamin'];
  const featuredCountries = COUNTRIES.filter(c => featuredIds.includes(c.id));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSelectedCountryId(selectedDest, selectedTransport);
    navigate(`/tours/${selectedDest}`);
  };

  const toggleFaq = (index) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  const faqs = [
    {
      q: "5 kunlik tur narxiga nimalar kiritilgan (All-Inclusive)?",
      a: "Tur narxiga borish va qaytish transporti (sayyohlik avtobusi yoki samolyot chiptasi), 4 kecha 4★ mehmonxonada tunash, 5 kun davomida to'liq 3 mahal ovqatlanish (nonushta, tushlik, kechki ovqat), barcha muzey va tarixiy obidalarga kirish chiptalari hamda professional litsenziyali gid xizmati 100% kiritilgan."
    },
    {
      q: "Bolalar va oilalar uchun chegirmalar mavjudmi?",
      a: "Ha! 5 yoshgacha bo'lgan bolalar uchun bepul (alohida o'rindiqsiz), 5 yoshdan 12 yoshgacha bo'lgan bolalar uchun esa 30% gacha maxsus chegirmalar taqdim etiladi. Shuningdek, 4 kishidan ortiq oilaviy guruhlarga qo'shimcha bonuslar beriladi."
    },
    {
      q: "Avtobuslar qulaymi va yo'lda sharoitlar qanday?",
      a: "Biz faqat zamonaviy, yangi avlod Yutong va King Long VIP sayyohlik avtobuslaridan foydalanamiz. Ularda yumshoq anatomik o'rindiqlar, kuchli konditsioner (iqlim nazorati), telefon quvvatlagichlar (USB), muzlatgich va yukxona mavjud. Har 2 soatda qulay bekatlarda to'xtashlar tashkil etiladi."
    },
    {
      q: "Sayohat uchun qanday hujjatlar talab qilinadi?",
      a: "O'zbekiston Respublikasi fuqarolari uchun faqatgina shaxsni tasdiqlovchi pasport yoki ID-karta (samolyot uchun ham yetarli). Chet el fuqarolari uchun esa amaldagi xorijiy pasport talab qilinadi. Barcha boshqa hujjatlar va ro'yxatdan o'tish biz tomonidan rasmiylashtiriladi."
    },
    {
      q: "Turni qanday band qilish va to'lovni amalga oshirish mumkin?",
      a: "Saytimizda onlayn ariza qoldirishingiz, telefon yoki Telegram orqali menejerimizga bog'lanishingiz mumkin. To'lovni Click, Payme, bank o'tkazmasi yoki ofisimizda naqd va terminal orqali amalga oshirish mumkin."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Grand Uzbekistan Heritage Showcase & Smart Search Panel */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden">
        
        {/* Crisp Registan Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/landmarks/samarkand-registan.png"
            alt="Samarkand Registan Historical Architecture"
            className="w-full h-full object-cover object-center scale-105 filter brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/95"></div>
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10">
          
          {/* Hero Main Titles */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-500/30 text-emerald-700 text-xs sm:text-sm font-black tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>O'zbekiston Bo'ylab 1-Raqamli VIP Sayohat Operatoringiz</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight">
              O'zbekistonning Buyuk Merosini <br />
              <span className="text-[#10b981]">
                To'liq All-Inclusive Paketda
              </span> Kashf Eting!
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-800 max-w-2xl mx-auto font-semibold leading-relaxed bg-white/75 backdrop-blur-sm p-3 rounded-2xl border border-white/60">
              Samarqand, Buxoro, Xiva, Termiz va Zomin bo'ylab transport, 4★ mehmonxona, 3 mahal milliy taomlar, barcha biletlar va shaxsiy gid kiritilgan 5 kunlik real VIP turlar.
            </p>
          </div>

          {/* Smart Search & Booking Box */}
          <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-300/40">
            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              
              {/* Destination Selector */}
              <div>
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Qaysi Viloyatga?</span>
                </label>
                <select
                  value={selectedDest}
                  onChange={(e) => setSelectedDest(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.flag} {lang === 'ru' ? (c.nameRu || c.name) : lang === 'en' ? (c.nameEn || c.name) : c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transport Mode Selector */}
              <div>
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1.5 flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transport Turi:</span>
                </label>
                <select
                  value={selectedTransport}
                  onChange={(e) => setSelectedTransport(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="bus">🚌 Sayyohlik Avtobusi / Gazel</option>
                  <option value="plane">✈️ Samolyot Parvozi (VIP)</option>
                </select>
              </div>

              {/* Tour Duration Info */}
              <div>
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tur Formati:</span>
                </label>
                <div className="w-full px-3.5 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>5 Kun / 4 Kecha</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">To'liq Paket</span>
                </div>
              </div>

              {/* Search Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Turlarni Ko'rish</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

            {/* Quick Guarantees Pill under search */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Transport (Borish-kelish)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">4★ Shinam Mehmonxona</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">3 Mahal Milliy Taomlar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Barcha Biletlar & Tarixchi Gid</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Trust Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900">30,000+</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Sayohatchilar</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">8+ Viloyat</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Barcha Yo'nalishlar</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-amber-500">4.99 ★</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Mijozlar Bahosi</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900">100%</div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Rasmiy Kafolat</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TOP FEATURED DESTINATIONS: Ommabop 5 Kunlik VIP Turlar Showcase */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-2">
              Eng Ko'p Tanlangan
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Ommabop 5 Kunlik All-Inclusive Turlar
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Har bir tur transport, 4★ mehmonxona, 3 mahal ovqat va gid xizmatini o'z ichiga oladi
            </p>
          </div>

          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-emerald-600 hover:text-emerald-700 transition-colors self-start sm:self-auto group"
          >
            <span>Barcha 8+ Viloyatlarni Ko'rish</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCountries.map((c) => {
            const name = (lang === 'ru' ? c.nameRu : lang === 'en' ? c.nameEn : c.name) || c.name;
            const tagline = (lang === 'ru' ? c.taglineRu : lang === 'en' ? c.taglineEn : c.taglineUz) || c.taglineUz;
            const priceUSD = c.basePriceUSD || 190;
            const priceDisplay = currency === 'UZS'
              ? `${(priceUSD * EXCHANGE_RATE).toLocaleString('uz-UZ')} UZS`
              : `$${priceUSD}`;

            return (
              <div
                key={c.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
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
                    <span className="text-[10px] uppercase font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                      5 Kun / 4 Kecha
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider block">
                        To'liq VIP Paket
                      </span>
                      <span className="text-xl font-black">
                        {priceDisplay}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-500/90 backdrop-blur-md text-slate-950 text-xs font-black px-2 py-1 rounded-lg">
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
                      <span>Avtobus / Samolyot kiritilgan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>4★ Mehmonxona + 3 mahal ovqat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Barcha muzey chiptalari & gid</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to={`/tours/${c.id}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors"
                    >
                      Batafsil
                    </Link>

                    <button
                      type="button"
                      onClick={() => openBookingModal({
                        countryId: c.id,
                        countryName: name,
                        priceUSD: priceUSD,
                        transportMode: 'bus'
                      })}
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition-colors shadow-sm cursor-pointer"
                    >
                      Bron Qilish
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE US: Nega Aynan LOTOS FIELD? 4 ta Asosiy Afzallik */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-100/70 px-4 py-1.5 rounded-full inline-block">
              Bizning Afzalliklarimiz
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Nega Minglab Sayohatchilar LOTOS FIELDni Tanlashadi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Biz oddiy chipta sotuvchisi emasmiz — biz sizga butun sayohat davomida yuqori servis va qulaylik taqdim etamiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                1. Zamonaviy Transport Parki
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Konditsionerli Yutong, King Long avtobuslari va tezkor to'g'ridan-to'g'ri samolyot reyslari. Har bir transport muntazam texnik ko'rikdan o'tgan.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center">
                <BedDouble className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                2. 4★ Shinam Mehmonxonalar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Tarixiy obidalar yonida joylashgan premium mehmonxonalar. Har bir xonada Wi-Fi, yumshoq o'rin-to'shak va barcha sharoitlar mavjud.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                3. Mazali 3 Mahal Ovqat
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Mashhur Samarqand to'y oshi, Buxoro shashliklari, Xiva tuxum baragi va milliy dasturxon. Sifatli va toza restoranlarda xizmat.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                4. Professional Tarixchi Gid
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                5 kun davomida siz bilan birga bo'luvchi litsenziyali gidlar obidalar tarixini qiziqarli va maroqli qilib so'zlab berishadi.
              </p>
            </div>

          </div>

          <div className="text-center pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>Kompaniya va kafolatlar haqida batafsil ma'lumot →</span>
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
            Oson va Qulay
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Sayohatga Chiqish 3 Oddiy Qadamda
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Hech qanday murakkab hujjatlarsiz, bir necha daqiqada o'z o'rningizni band qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200 relative space-y-3 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md">
              1
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Yo'nalish va Transportni Tanlang
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Saytimizdagi turlar ro'yxatidan qiziqtirgan viloyatni (Samarqand, Buxoro, Xiva va b.) hamda transport formatini (avtobus yoki samolyot) belgilang.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 relative space-y-3 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md">
              2
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Onlayn Bron Qiling
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Ismingiz va telefon raqamingizni qoldiring. Menejerimiz 5 daqiqa ichida bog'lanib, barcha reys va mehmonxona tafsilotlarini rasmiylashtiradi.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 relative space-y-3 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md">
              3
            </div>
            <h3 className="text-base font-bold text-slate-900">
              5 Kunlik VIP Sayohatdan Zavqlaning!
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Belgilangan vaqtda qulay avtobus yoki aeroportga yetib keling. Barcha tashkiliy ishlarni, ovqatlanish va biletlarni biz to'liq ta'minlaymiz!
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOT DEALS & LIVE MEDIA DUAL SPOTLIGHT CARDS */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Hot Deals Spotlight */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-200" />
                <span>Qaynoq Chegirmalar (-30%)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Avtoturlar Uchun Maxsus 30% Chegirma!
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                Samarqand, Buxoro va Zomin yo'nalishlaridagi 5 kunlik barcha xizmatlar kiritilgan turlarga cheklangan muddatli maxsus narxlar.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/deals"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-white text-slate-950 font-black text-xs hover:bg-amber-50 transition-all shadow-md"
              >
                <span>Chegirmalarni Ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Live Media Spotlight */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>Jonli Sayohatlar Galereyasi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Sayohatchilarimizning Haqiqiy Foto & Videolari
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Biz bilan O'zbekiston bo'ylab sayohat qilgan yurtdoshlarimizning eng yorqin hissiyotlari va unutilmas xotiralari bilan tanishing.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/media"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs transition-all shadow-md"
              >
                <span>Foto va Videolarni Ochish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. VERIFIED CUSTOMER REVIEWS SPOTLIGHT */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-2">
              Xolis Baholar
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Mijozlarimiz Nima Deyishadi?
            </h2>
          </div>

          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-emerald-600 hover:text-emerald-700 transition-colors self-start sm:self-auto"
          >
            <span>Barcha 3,400+ Sharhlarni Ko'rish →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                "Samarqand va Buxoro 5 kunlik avtoturiga oilaviy bordik. Avtobus juda shinam, konditsioner a'lo darajada ishladi. Mehmonxona va ovqatlar sifatiga gap yo'q. Rahmat!"
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Jasur Karimov</div>
                <span className="text-[10px] text-slate-400">Toshkent shahri</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Samarqand Turi</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                "Xiva Ichan Qal'asiga samolyot reysi orqali uchdik. Tarixchi gidimiz har bir bino tarixini shunchalik qiziqarli so'zlab berdiki, 5 kun bir zumda o'tib ketdi. 100% tavsiya qilaman!"
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Madina Rustamova</div>
                <span className="text-[10px] text-slate-400">Farg'ona shahri</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Xiva Turi</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                "Zomin tog'larida dam olish ajoyib bo'ldi. Toza havo, shinam kottej va 3 mahal mazali ovqatlar. Ayniqsa bolalarimizga juda yoqdi. LOTOS FIELD jamoasiga minnatdormiz!"
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Oybek Ergashev</div>
                <span className="text-[10px] text-slate-400">Samarqand shahri</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Zomin Turi</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ ACCORDION: Tez-tez Beriladigan Savollar */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block">
            Ko'p So'raladigan Savollar
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Savollaringiz Bormi?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Sayohatchilarimiz eng ko'p beradigan savollarga aniq va to'liq javoblar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
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
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed font-medium border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. GRAND CALL TO ACTION: Orzuingizdagi Sayohatni Bugun Boshlang! */}
      {/* ========================================================================= */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800 inline-block">
              100% All-Inclusive VIP Xizmat
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              O'zbekiston Bo'ylab Unutilmas Sayohatga Tayyormisiz?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
              Joylar soni cheklangan. Hoziroq turni tanlang yoki bepul maslahat olish uchun telefon raqamingizni qoldiring.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/tours"
                className="py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs tracking-wide shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <span>Turlarni Tanlash</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={openContactModal}
                className="py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-xs tracking-wide transition-all border border-white/20 cursor-pointer"
              >
                Bepul Maslahat Olish
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="py-3.5 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-emerald-400 font-mono font-bold text-xs flex items-center gap-2 border border-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
