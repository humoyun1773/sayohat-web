import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import LocationMap from '../components/sections/LocationMap';
import { CONTACT_INFO } from '../data/travelData';
import { 
  Phone, Mail, Clock, Send, 
  MessageCircle, CheckCircle2, Building
} from 'lucide-react';

export default function ContactPage() {
  const { lang, t, setSelectedCountryId } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: 'samarkand',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', region: 'samarkand', message: '' });
    }, 4000);
  };

  const offices = [
    {
      city: lang === 'ru' ? 'г. Ташкент (Главный Офис)' : lang === 'en' ? 'Tashkent City (Head Office)' : 'Toshkent shahri (Bosh Ofis)',
      address: lang === 'ru' ? 'Проспект Амира Темура, 107-B, Orient Business Center, 4 этаж' : lang === 'en' ? 'Amir Temur Ave, 107-B, Orient Business Center, 4th Floor' : 'Amir Temur shoh ko\'chasi, 107-B, Orient Business Center, 4-qavat',
      phone: CONTACT_INFO.phone,
      hours: lang === 'ru' ? 'Пн - Сб: 09:00 - 20:00' : lang === 'en' ? 'Mon - Sat: 09:00 - 20:00' : 'Dush - Shan: 09:00 - 20:00'
    },
    {
      city: lang === 'ru' ? 'г. Самарканд (Филиал)' : lang === 'en' ? 'Samarkand Branch' : 'Samarqand shahri (Filial)',
      address: lang === 'ru' ? 'Улица Регистан, 45, Silk Road Plaza, 2 этаж' : lang === 'en' ? 'Registan St, 45, Silk Road Plaza, 2nd Floor' : 'Registon ko\'chasi, 45, Silk Road Plaza, 2-qavat',
      phone: '+998 (90) 821-33-22',
      hours: lang === 'ru' ? 'Ежедневно: 09:00 - 19:00' : lang === 'en' ? 'Daily: 09:00 - 19:00' : 'Har kuni: 09:00 - 19:00'
    },
    {
      city: lang === 'ru' ? 'г. Бухара (Филиал)' : lang === 'en' ? 'Bukhara Branch' : 'Buxoro shahri (Filial)',
      address: lang === 'ru' ? 'Улица Накшбанди, 12, Старый Город' : lang === 'en' ? 'Naqshbandi St, 12, Old City Center' : 'Naqshbandiy ko\'chasi, 12, Eski Shahar markazi',
      phone: '+998 (90) 821-33-22',
      hours: lang === 'ru' ? 'Ежедневно: 09:00 - 19:00' : lang === 'en' ? 'Daily: 09:00 - 19:00' : 'Har kuni: 09:00 - 19:00'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 bg-transparent">
      
      {/* Header with 100% Crystal Clear Background Photo */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[340px] flex items-center justify-center p-6 sm:p-12">
          
          {/* 100% Crystal Clear Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85')` }}
          ></div>

          {/* Floating Pure White Content Card */}
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4 bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/90">
            <span className="text-xs uppercase font-black tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block shadow-xs">
              {lang === 'ru' ? 'Свяжитесь с Нами' : lang === 'en' ? 'Contact & Locations' : "Aloqa va Ofis Manzillari"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'ru' ? 'Мы Всегда на Связи 24/7' : lang === 'en' ? 'We Are Always Here For You 24/7' : "Biz Doim Siz Bilan Aloqadamiz"}
            </h1>
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {lang === 'ru'
                ? 'Позвоните нам, напишите в мессенджеры или посетите наши офисы в Ташкенте, Самарканде и Бухаре.'
                : lang === 'en'
                ? 'Call us, reach out on messengers, or visit our welcoming branches in Tashkent, Samarkand, and Bukhara.'
                : "Savollaringiz bormi yoki tur band qilmoqchimisiz? Bizga qo'ng'iroq qiling yoki to'g'ridan-to'g'ri xabar yozing."}
            </p>
          </div>
        </div>

        {/* Contact Form & Direct Contacts Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Col: Contact Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-black text-white">
                {lang === 'ru' ? 'Прямые Контакты' : lang === 'en' ? 'Direct Contacts' : 'Tezkor Ma\'lumotlar'}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 transition-all text-slate-200 hover:text-emerald-400 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">
                      {lang === 'ru' ? 'Для звонков:' : lang === 'en' ? 'Phone Line:' : 'Qo\'ng\'iroq uchun:'}
                    </span>
                    <span className="font-bold text-white text-sm font-mono">{CONTACT_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 transition-all text-slate-200 hover:text-emerald-400 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">
                      {lang === 'ru' ? 'Электронная почта:' : lang === 'en' ? 'Email Address:' : 'Elektron pochta:'}
                    </span>
                    <span className="font-bold text-white">{CONTACT_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">
                      {lang === 'ru' ? 'Режим работы:' : lang === 'en' ? 'Working Hours:' : 'Ish vaqti:'}
                    </span>
                    <span className="font-bold text-white">
                      {lang === 'ru' ? 'Пн - Вс (24/7 Онлайн Прием)' : lang === 'en' ? 'Mon - Sun (24/7 Online Support)' : 'Dushanba - Yakshanba (24/7 Onlayn Qabul)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant Messenger buttons */}
              <div className="pt-2">
                <span className="text-xs text-slate-400 font-bold block mb-2">
                  {lang === 'ru' ? 'Быстрая связь в мессенджерах:' : lang === 'en' ? 'Instant messaging channels:' : 'Messangerlar orqali tezkor bog\'lanish:'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={CONTACT_INFO.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#229ED9] hover:bg-[#1a8bc4] text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#25D366] hover:bg-[#1eb956] text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Office Locations */}
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 px-1">
                {lang === 'ru' ? 'Наши Офисы:' : lang === 'en' ? 'Our Branches:' : 'Filiallarimiz:'}
              </h3>
              {offices.map((off, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{off.city}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium pl-6">
                    {off.address}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Col: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                {lang === 'ru' ? 'Оставьте Заявку или Задайте Вопрос' : lang === 'en' ? 'Leave an Inquiry or Booking Request' : 'Savol yoki Buyurtma Qoldiring'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {lang === 'ru'
                  ? 'Заполните форму, и наш менеджер свяжется с вами в течение 5 минут.'
                  : lang === 'en'
                  ? 'Fill out the form and our manager will contact you within 5 minutes.'
                  : 'Formani to\'ldiring, menejerimiz 5 daqiqa ichida siz bilan bog\'lanadi.'}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'ru' ? 'Ваша заявка успешно принята!' : lang === 'en' ? 'Your message has been sent successfully!' : 'Xabaringiz muvaffaqiyatli qabul qilindi!'}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {lang === 'ru' ? 'Наш оператор свяжется с вами в ближайшее время.' : lang === 'en' ? 'Our tour specialist will get in touch with you shortly.' : 'Tez orada operatorimiz siz bilan bog\'lanib, barcha ma\'lumotlarni taqdim etadi.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'ru' ? 'Ваше Имя:' : lang === 'en' ? 'Full Name:' : 'Ismingiz:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ru' ? 'Например: Сардор Алимов' : lang === 'en' ? 'E.g. Sardor Alimov' : 'Masalan: Sardor Alimov'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      {lang === 'ru' ? 'Номер телефона:' : lang === 'en' ? 'Phone Number:' : 'Telefon raqamingiz:'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 (91) 951-73-35"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      {lang === 'ru' ? 'Интересующий Регион:' : lang === 'en' ? 'Destination of Interest:' : 'Qiziqtirgan Viloyat:'}
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="samarkand">{lang === 'ru' ? 'Самарканд' : lang === 'en' ? 'Samarkand' : 'Samarqand Viloyati'}</option>
                      <option value="bukhara">{lang === 'ru' ? 'Бухара' : lang === 'en' ? 'Bukhara' : 'Buxoro Viloyati'}</option>
                      <option value="khiva">{lang === 'ru' ? 'Хорезм / Хива' : lang === 'en' ? 'Khorezm / Khiva' : 'Xorazm / Xiva'}</option>
                      <option value="zaamin">{lang === 'ru' ? 'Джизак / Заамин' : lang === 'en' ? 'Jizzakh / Zaamin' : 'Jizzax / Zomin'}</option>
                      <option value="termez">{lang === 'ru' ? 'Сурхандарья / Термез' : lang === 'en' ? 'Surkhandarya / Termez' : 'Surxondaryo / Termez'}</option>
                      <option value="shakhrisabz">{lang === 'ru' ? 'Кашкадарья / Шахрисабз' : lang === 'en' ? 'Kashkadarya / Shakhrisabz' : 'Qashqadaryo / Shahrisabz'}</option>
                      <option value="fergana">{lang === 'ru' ? 'Ферганская Долина' : lang === 'en' ? 'Fergana Valley' : 'Farg\'ona Vodiysi'}</option>
                      <option value="karakalpakstan">{lang === 'ru' ? 'Каракалпакстан / Нукус' : lang === 'en' ? 'Karakalpakstan / Nukus' : 'Qoraqalpog\'iston / Nukus'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {lang === 'ru' ? 'Ваше сообщение или пожелания:' : lang === 'en' ? 'Your Message or Tour Preferences:' : 'Xabaringiz yoki maxsus talablaringiz:'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'ru' ? 'Дата поездки, количество человек или другие вопросы...' : lang === 'en' ? 'Travel dates, group size, or questions...' : 'Sayohat sanasi, kishilar soni yoki boshqa savollaringiz...'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm tracking-wide shadow-lg shadow-emerald-600/25 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
                >
                  {lang === 'ru' ? 'Отправить Сообщение' : lang === 'en' ? 'Send Inquiry' : 'Xabarni Yuborish'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Interactive Map & Office Navigator */}
      <LocationMap
        onSelectCountry={setSelectedCountryId}
        t={t}
        lang={lang}
      />

    </div>
  );
}
