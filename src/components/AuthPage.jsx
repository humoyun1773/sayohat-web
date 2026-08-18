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
  const [phone, setPhone] = useState('+998 ');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Strict Phone Handler: only digits, +998 is permanent
  const handlePhoneChange = (e) => {
    const rawVal = e.target.value;
    
    // Extract only digits
    let digits = rawVal.replace(/\D/g, '');
    
    // If starts with 998, strip it to get the local 9 digits
    if (digits.startsWith('998')) {
      digits = digits.slice(3);
    }
    
    // Max 9 digits (e.g. 901234567)
    digits = digits.slice(0, 9);

    // Format cleanly without parentheses: +998 90 123 45 67
    let formatted = '+998';
    if (digits.length > 0) {
      formatted += ' ' + digits.slice(0, 2);
    }
    if (digits.length >= 2) {
      formatted += ' ' + digits.slice(2, 5);
    }
    if (digits.length >= 5) {
      formatted += ' ' + digits.slice(5, 7);
    }
    if (digits.length >= 7) {
      formatted += ' ' + digits.slice(7, 9);
    }

    setPhone(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that 9 full local digits were entered
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 12) { // 998 + 9 digits = 12 total digits
      setError('Iltimos, telefon raqamingizni to\'liq kiriting (masalan: +998 90 123 45 67)');
      return;
    }

    if (!password || password.trim().length < 4) {
      setError('Parol kamida 4 ta belgidan iborat bo\'lishi kerak');
      return;
    }

    setError('');
    
    // Successful login or registration
    const userData = {
      phone: phone,
      name: tab === 'register' ? (fullName || 'Yangi Sayohatchi') : 'Sardor Rahimov',
      memberSince: '2026',
      bonuses: 250000,
      tier: 'VIP Emerald Member',
      bookingsCount: 2
    };

    onLogin(userData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Top Simple Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between">
          
          <button
            type="button"
            onClick={onBackToHome}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Bosh sahifaga qaytish</span>
          </button>

          {/* Logo */}
          <div 
            onClick={onBackToHome}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-wider">LOTOS</span>{' '}
              <span className="text-xl font-black text-[#10b981]">FIELD</span>
            </div>
          </div>

          <div className="w-24 sm:w-36 text-right">
            <span className="text-[11px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full hidden sm:inline-block">
              24/7 Xavfsiz Tizim
            </span>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1536px] mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full flex-1 flex items-center justify-center">
        
        {currentUser ? (
          /* Logged In: Full Personal Profile Dashboard */
          <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            
            {/* Profile Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#10b981] to-[#047857] text-white flex items-center justify-center font-black text-3xl shadow-lg border-2 border-white/20">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold">{currentUser.name}</h2>
                      <span className="text-xs font-bold text-[#a7f3d0] bg-white/10 px-3 py-0.5 rounded-full border border-white/20">
                        {currentUser.tier}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono">{currentUser.phone}</p>
                    <p className="text-[11px] text-slate-400">LOTOS FIELD a'zosi: {currentUser.memberSince}-yildan buyon</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onLogout}
                  className="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-2 self-start sm:self-center transition-all shadow-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Profildan Chiqish</span>
                </button>

              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Stats 3 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200">
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-bold mb-2">
                    <CreditCard className="w-4 h-4 text-[#10b981]" />
                    <span>To'plangan Keshbek</span>
                  </div>
                  <div className="text-2xl font-black text-[#10b981]">{currentUser.bonuses.toLocaleString()} so'm</div>
                  <p className="text-[11px] text-slate-400 mt-1">Keyingi sayohatlaringizda chegirma sifatida ishlatishingiz mumkin</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200">
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-bold mb-2">
                    <Ticket className="w-4 h-4 text-sky-600" />
                    <span>Aktiv Chiptalar</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900">{currentUser.bookingsCount} ta buyurtma</div>
                  <p className="text-[11px] text-slate-400 mt-1">Barcha parvozlar rasman tasdiqlangan</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200">
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-bold mb-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Mijoz Darajasi</span>
                  </div>
                  <div className="text-xl font-black text-slate-900">VIP Premium</div>
                  <p className="text-[11px] text-slate-400 mt-1">Barcha turlarga 5% shaxsiy doimiy chegirma</p>
                </div>

              </div>

              {/* Bookings List */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-[#10b981]" />
                  Mening Sayohat Buyurtmalarim & Chiptalar
                </h3>

                <div className="space-y-2.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#10b981] transition-all">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">Dubay Luxury Ta'tili (5★ Atlantis Hotel)</span>
                        <span className="text-[10px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                          Tasdiqlangan
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Sana: 15-sentabr, 2026 • 2 kishi • Boeing 787 Dreamliner</p>
                    </div>
                    <div className="text-sm font-black text-[#10b981]">
                      $1,440 USD
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#10b981] transition-all">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">Istanbul Tarixiy Sayohati & Bosphorus Kruiz</span>
                        <span className="text-[10px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                          Tasdiqlangan
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Sana: 04-oktabr, 2026 • 2 kishi • Airbus A321 Neo</p>
                    </div>
                    <div className="text-sm font-black text-[#10b981]">
                      $890 USD
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to catalog CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">Yangi davlatlarni tanlash yoki parvoz narxlarini hisoblash uchun bosh sahifaga o'ting.</p>
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="w-full sm:w-auto py-3 px-8 rounded-2xl btn-primary-emerald font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  Sayohatlarni ko'rish
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* Not Logged In: Split Screen Login & Register Page */
          <div className="w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Left Col: Visual Brand & Perks Banner (5 cols) */}
            <div className="lg:col-span-5 relative bg-slate-950 p-8 sm:p-12 text-white flex flex-col justify-between overflow-hidden min-h-[380px] lg:min-h-[620px]">
              
              {/* Background Photo */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85"
                  alt="Airlines flight"
                  className="w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40"></div>
              </div>

              {/* Top info */}
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#a7f3d0] border border-white/20 text-xs font-bold backdrop-blur-md">
                  <Plane className="w-3.5 h-3.5 transform -rotate-45" />
                  <span>LOTOS FIELD SHAXSIY KABINET</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  Dunyo Bo'ylab Hashamatli Sayohatlar Bir Joyda!
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Profilingizga kiring va shaxsiy chegirmalar, keshbek bonuslari, 24/7 menejer yordami hamda raqamli vaucherlardan foydalaning.
                </p>
              </div>

              {/* Bottom Feature Perks */}
              <div className="relative z-10 space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Barcha buyurtmalarga 250,000 so'm start bonus</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>To'g'ridan-to'g'ri elektron aviachiptalar</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>100% rasmiy litsenziyalangan kafolat</span>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {tab === 'login' ? 'Hisobingizga Kiring' : 'Yangi Hisob Ochish'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {tab === 'login' 
                    ? 'Sayohatlaringizni boshqarish uchun telefon raqamingiz va parolingizni kiriting.' 
                    : 'Atigi 30 soniyada ro\'yxatdan o\'ting va birinchi chegirmangizga ega bo\'ling.'}
                </p>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold">
                <button
                  type="button"
                  onClick={() => { setTab('login'); setError(''); }}
                  className={`py-3 rounded-xl transition-all ${
                    tab === 'login' ? 'bg-white text-slate-900 shadow-md font-extrabold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Kirish (Login)
                </button>
                <button
                  type="button"
                  onClick={() => { setTab('register'); setError(''); }}
                  className={`py-3 rounded-xl transition-all ${
                    tab === 'register' ? 'bg-white text-slate-900 shadow-md font-extrabold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Ro'yxatdan o'tish
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-center">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {tab === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      To'liq Ism va Familiyangiz:
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Rahimov"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50 hover:bg-white border border-slate-200 focus:border-[#10b981] rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Telefon Raqamingiz (Faqat raqamlar):
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#10b981] absolute left-4 top-3.5" />
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full bg-slate-50 hover:bg-white border border-slate-200 focus:border-[#10b981] rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none font-mono font-bold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Parol:
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-white border border-slate-200 focus:border-[#10b981] rounded-2xl pl-11 pr-11 py-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl btn-primary-emerald text-white text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-95 transition-all mt-3"
                >
                  <span>{tab === 'login' ? 'TIZIMGA KIRISH' : 'RO\'YXATDAN O\'TISH VA BONUS OLISH'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>

              {/* Privacy footnote */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>Barcha ma'lumotlaringiz 256-bit SSL shifrlash orqali himoyalangan.</span>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Page Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        © 2026 LOTOS FIELD Airlines & Luxury Travel. Barcha huquqlar himoyalangan.
      </footer>

    </div>
  );
}
