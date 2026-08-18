import React, { useState, useEffect } from 'react';
import { 
  Plane, User, Phone, Lock, ArrowLeft, 
  CheckCircle2, ShieldCheck, Ticket, LogOut, 
  Award, CreditCard, ArrowRight, Eye, EyeOff 
} from 'lucide-react';

export default function AuthPage({ 
  currentUser, 
  onLogin, 
  onLogout, 
  onBackToHome 
}) {
  const [tab, setTab] = useState('login'); // 'login' or 'register'
  const [phoneDigits, setPhoneDigits] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Format 9 digits nicely: e.g. 90 123 45 67
  const formatDisplayDigits = (val) => {
    let digits = val.replace(/\D/g, '').slice(0, 9);
    let res = '';
    if (digits.length > 0) res += digits.slice(0, 2);
    if (digits.length > 2) res += ' ' + digits.slice(2, 5);
    if (digits.length > 5) res += ' ' + digits.slice(5, 7);
    if (digits.length > 7) res += ' ' + digits.slice(7, 9);
    return res;
  };

  const handlePhoneInput = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    setPhoneDigits(raw.slice(0, 9));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (phoneDigits.length < 9) {
      setError('Iltimos, 9 xonali telefon raqamingizni to\'liq kiriting (masalan: 90 123 45 67)');
      return;
    }

    if (!password || password.trim().length < 4) {
      setError('Parol kamida 4 ta belgidan iborat bo\'lishi kerak');
      return;
    }

    setError('');
    
    // Successful login or registration
    const formattedFullPhone = '+998 ' + formatDisplayDigits(phoneDigits);
    const userData = {
      phone: formattedFullPhone,
      name: tab === 'register' ? (fullName || 'Yangi Sayohatchi') : 'Sardor Rahimov',
      memberSince: '2026',
      bonuses: 250000,
      tier: 'VIP Emerald Member',
      bookingsCount: 2
    };

    onLogin(userData);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-slate-900 font-sans">
      
      {/* 100% Verified Real Airliner in Sky Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2600&q=100"
          alt="Airliner in Sky"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        <div className="absolute inset-0 bg-slate-950/40"></div>
      </div>

      {/* Top Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-8 py-3 shadow-xs">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between">
          
          <button
            type="button"
            onClick={onBackToHome}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#10b981]" />
            <span>Bosh sahifaga qaytish</span>
          </button>

          {/* Logo */}
          <div 
            onClick={onBackToHome}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Plane className="w-4 h-4 transform -rotate-45" />
            </div>
            <div>
              <span className="text-lg font-black text-slate-900 tracking-wider">LOTOS</span>{' '}
              <span className="text-lg font-black text-[#10b981]">FIELD</span>
            </div>
          </div>

          <div className="w-24 sm:w-36 text-right">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-0.5 rounded-full hidden sm:inline-block">
              24/7 Xavfsiz Tizim
            </span>
          </div>

        </div>
      </header>

      {/* Center Auth Card (Compact & Perfectly Sized) */}
      <main className="max-w-[1536px] mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full flex-1 flex items-center justify-center relative z-10">
        
        {currentUser ? (
          /* Profile Dashboard View */
          <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            
            {/* Header Banner */}
            <div className="bg-slate-900 p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] text-white flex items-center justify-center font-black text-2xl shadow-lg border border-white/20">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-extrabold">{currentUser.name}</h2>
                      <span className="text-[10px] font-bold text-[#a7f3d0] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                        {currentUser.tier}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono">{currentUser.phone}</p>
                    <p className="text-[10px] text-slate-400">LOTOS FIELD a'zosi: {currentUser.memberSince}-yildan buyon</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onLogout}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-2 self-start sm:self-center transition-all shadow-sm"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Profildan Chiqish</span>
                </button>

              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 bg-white">
              
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-1">
                    <CreditCard className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>To'plangan Keshbek</span>
                  </div>
                  <div className="text-xl font-black text-[#10b981]">{currentUser.bonuses.toLocaleString()} so'm</div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Chegirma sifatida ishlatishingiz mumkin</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-1">
                    <Ticket className="w-3.5 h-3.5 text-sky-600" />
                    <span>Aktiv Chiptalar</span>
                  </div>
                  <div className="text-xl font-black text-slate-900">{currentUser.bookingsCount} ta buyurtma</div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Parvozlar tasdiqlangan</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Mijoz Darajasi</span>
                  </div>
                  <div className="text-lg font-black text-slate-900">VIP Premium</div>
                  <p className="text-[10px] text-slate-400 mt-0.5">5% doimiy chegirma</p>
                </div>

              </div>

              {/* Bookings List */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#10b981]" />
                  Mening Sayohat Buyurtmalarim & Chiptalar
                </h3>

                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#10b981] transition-all">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">Dubay Luxury Ta'tili (5★ Atlantis Hotel)</span>
                        <span className="text-[9px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                          Tasdiqlangan
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Sana: 15-sentabr, 2026 • 2 kishi • Boeing 787</p>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-[#10b981]">
                      $1,440 USD
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#10b981] transition-all">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">Istanbul Tarixiy Sayohati & Bosphorus Kruiz</span>
                        <span className="text-[9px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                          Tasdiqlangan
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Sana: 04-oktabr, 2026 • 2 kishi • Airbus A321</p>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-[#10b981]">
                      $890 USD
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to catalog CTA */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-500">Yangi davlatlarni tanlash uchun bosh sahifaga o'ting.</p>
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="w-full sm:w-auto py-2.5 px-6 rounded-xl btn-primary-emerald font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  Sayohatlarni ko'rish
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* Compact Luxury Split Card */
          <div className="w-full max-w-4xl bg-white rounded-[24px] border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Left Col: Dark Blue Brand Banner (5 cols) */}
            <div className="md:col-span-5 relative bg-[#0f172a] p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden min-h-[320px] md:min-h-[480px]">
              
              {/* Airplane Background */}
              <div className="absolute inset-0 z-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=85"
                  alt="Airliner in Sky"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Pill & Headline */}
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#a7f3d0] border border-white/15 text-[10px] font-bold">
                  <Plane className="w-3 h-3 transform -rotate-45" />
                  <span>LOTOS FIELD SHAXSIY KABINET</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                  Dunyo Bo'ylab Hashamatli Sayohatlar Bir Joyda!
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Profilingizga kiring va shaxsiy chegirmalar, keshbek bonuslari, 24/7 menejer yordamidan foydalaning.
                </p>
              </div>

              {/* Bottom Feature Perks */}
              <div className="relative z-10 space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-200 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span>Barcha buyurtmalarga 250,000 so'm start bonus</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span>To'g'ridan-to'g'ri elektron aviachiptalar</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span>100% rasmiy litsenziyalangan kafolat</span>
                </div>
              </div>

            </div>

            {/* Right Col: Solid White Interactive Form (7 cols) */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-4 bg-white">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {tab === 'login' ? 'Hisobingizga Kiring' : 'Yangi Hisob Ochish'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {tab === 'login' 
                    ? 'Sayohatlaringizni boshqarish uchun telefon raqamingiz va parolingizni kiriting.' 
                    : 'Atigi 30 soniyada ro\'yxatdan o\'ting va birinchi chegirmangizga ega bo\'ling.'}
                </p>
              </div>

              {/* Tab Selector Switcher */}
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => { setTab('login'); setError(''); }}
                  className={`py-2 rounded-lg transition-all ${
                    tab === 'login' ? 'bg-white text-slate-900 shadow-sm font-black' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Kirish (Login)
                </button>
                <button
                  type="button"
                  onClick={() => { setTab('register'); setError(''); }}
                  className={`py-2 rounded-lg transition-all ${
                    tab === 'register' ? 'bg-white text-slate-900 shadow-sm font-black' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Ro'yxatdan o'tish
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-center">
                  {error}
                </div>
              )}

              {/* Form Elements */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-0.5">
                
                {tab === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      To'liq Ism va Familiyangiz:
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Rahimov"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50 hover:bg-white border border-slate-200 focus:border-[#10b981] rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefon Raqamingiz:
                  </label>
                  
                  {/* Phone Input Box */}
                  <div className="flex items-center bg-slate-50 hover:bg-white border border-slate-200 focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981] rounded-xl overflow-hidden transition-all">
                    <div className="flex items-center gap-1.5 pl-3.5 pr-2.5 py-2.5 text-slate-800 font-mono font-bold text-xs sm:text-sm select-none border-r border-slate-200 shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>+998</span>
                    </div>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      value={formatDisplayDigits(phoneDigits)}
                      onChange={handlePhoneInput}
                      placeholder="90 123 45 67"
                      className="w-full bg-transparent px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none font-mono font-bold tracking-wide"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parol:
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-white border border-slate-200 focus:border-[#10b981] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none transition-all font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl btn-primary-emerald text-white text-xs sm:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-95 transition-all mt-2"
                >
                  <span>{tab === 'login' ? 'TIZIMGA KIRISH' : 'RO\'YXATDAN O\'TISH VA BONUS OLISH'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>

              {/* SSL Footnote */}
              <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Barcha ma'lumotlaringiz 256-bit SSL shifrlash orqali himoyalangan.</span>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-3.5 px-4 text-center text-xs text-slate-500 font-medium relative z-10">
        © 2026 LOTOS FIELD Airlines & Luxury Travel. Barcha huquqlar himoyalangan.
      </footer>

    </div>
  );
}
