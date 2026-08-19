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
      city: 'Toshkent shahri (Bosh Ofis)',
      address: 'Amir Temur shoh ko\'chasi, 107-B, Orient Business Center, 4-qavat',
      phone: CONTACT_INFO.phone,
      hours: 'Dush - Shan: 09:00 - 20:00'
    },
    {
      city: 'Samarqand shahri (Filial)',
      address: 'Registon ko\'chasi, 45, Silk Road Plaza, 2-qavat',
      phone: '+998 (90) 821-33-22',
      hours: 'Har kuni: 09:00 - 19:00'
    },
    {
      city: 'Buxoro shahri (Filial)',
      address: 'Naqshbandiy ko\'chasi, 12, Eski Shahar markazi',
      phone: '+998 (90) 821-33-22',
      hours: 'Har kuni: 09:00 - 19:00'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block shadow-xs">
            {lang === 'ru' ? 'Свяжитесь с Нами' : lang === 'en' ? 'Contact & Locations' : "Aloqa va Ofis Manzillari"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'ru' ? 'Мы Всегда на Связи 24/7' : lang === 'en' ? 'We are always at your service 24/7' : "Biz Doim Siz Bilan Aloqadamiz"}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {lang === 'ru'
              ? 'Позвоните нам, напишите в мессенджеры или посетите наши офисы в Ташкенте и Самарканде.'
              : lang === 'en'
              ? 'Call us, reach out on messengers, or visit our branches in Tashkent and Samarkand.'
              : "Savollaringiz bormi yoki tur band qilmoqchimisiz? Bizga qo'ng'iroq qiling yoki to'g'ridan-to'g'ri xabar yozing."}
          </p>
        </div>

        {/* Contact Form & Direct Contacts Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Col: Contact Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-black text-white">
                Tezkor Ma'lumotlar
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 transition-all text-slate-200 hover:text-emerald-400 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Qo'ng'iroq uchun:</span>
                    <span className="font-bold text-white text-sm font-mono">{CONTACT_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 transition-all text-slate-200 hover:text-emerald-400 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Elektron pochta:</span>
                    <span className="font-bold text-white">{CONTACT_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Ish vaqti:</span>
                    <span className="font-bold text-white">Dushanba - Yakshanba (24/7 Onlayn Qabul)</span>
                  </div>
                </div>
              </div>

              {/* Instant Messenger buttons */}
              <div className="pt-2">
                <span className="text-xs text-slate-400 font-bold block mb-2">
                  Messangerlar orqali tezkor bog'lanish:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={CONTACT_INFO.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#229ED9] hover:bg-[#1a8bc4] text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#25D366] hover:bg-[#1eb956] text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-md"
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
                Filiallarimiz:
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
                Savol yoki Buyurtma Qoldiring
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Formani to'ldiring, menejerimiz 5 daqiqa ichida siz bilan bog'lanadi.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">
                  Xabaringiz muvaffaqiyatli qabul qilindi!
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Tez orada operatorimiz siz bilan bog'lanib, barcha ma'lumotlarni taqdim etadi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Ismingiz:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masalan: Sardor Alimov"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Telefon raqamingiz:
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Qiziqtirgan Viloyat:
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="samarkand">Samarqand Viloyati</option>
                      <option value="bukhara">Buxoro Viloyati</option>
                      <option value="khiva">Xorazm / Xiva</option>
                      <option value="zaamin">Jizzax / Zomin</option>
                      <option value="termez">Surxondaryo / Termiz</option>
                      <option value="shakhrisabz">Qashqadaryo / Shahrisabz</option>
                      <option value="fergana">Farg'ona Vodiysi</option>
                      <option value="karakalpakstan">Qoraqalpog'iston / Nukus</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Xabaringiz yoki maxsus talablaringiz:
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Sayohat sanasi, kishilar soni yoki boshqa savollaringiz..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm tracking-wide shadow-lg shadow-emerald-600/25 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
                >
                  Xabarni Yuborish
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
