import React, { useState } from 'react';
import { 
  X, User, Phone, Lock, 
  LogOut, Ticket, ArrowRight 
} from 'lucide-react';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onLogin, 
  onLogout 
}) {
  const [tab, setTab] = useState('login'); // 'login' or 'register'
  const [phone, setPhone] = useState('+998 ');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [step, setStep] = useState('credentials'); // 'credentials' or 'sms'
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleCredentialsSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 9) {
      setError('Iltimos, telefon raqamingizni to\'liq kiriting');
      return;
    }
    setError('');
    setStep('sms');
  };

  const handleSmsSubmit = (e) => {
    e.preventDefault();
    const userData = {
      phone: phone,
      name: fullName || 'Sayohatchi',
      memberSince: '2026',
      bonuses: 250000,
      tier: 'VIP Emerald Member',
      bookingsCount: 1
    };
    onLogin(userData);
    setStep('credentials');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#10b981] text-white flex items-center justify-center shadow-md">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold tracking-wider text-[#065f46] uppercase">LOTOS FIELD ACCOUNT</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {currentUser ? 'Foydalanuvchi Profili' : (tab === 'login' ? 'Tizimga Kirish' : 'Ro\'yxatdan O\'tish')}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          
          {currentUser ? (
            /* Logged-in Profile View */
            <div className="space-y-5">
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#10b981] text-white flex items-center justify-center font-black text-2xl shadow-sm">
                  {currentUser.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{currentUser.name}</h4>
                  <p className="text-xs text-slate-500 font-mono">{currentUser.phone}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-0.5 rounded-full">
                    ★ {currentUser.tier}
                  </span>
                </div>
              </div>

              {/* Bonus Balance & Bookings Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-semibold">To'plangan Keshbek:</div>
                  <div className="text-base font-extrabold text-[#10b981] mt-1">250,000 so'm</div>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-semibold">Aktiv Buyurtmalar:</div>
                  <div className="text-base font-extrabold text-[#10b981] mt-1">1 ta reys</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-800">
                  <span className="flex items-center gap-2 font-semibold">
                    <Ticket className="w-4 h-4 text-[#10b981]" />
                    Dubay VIP Sayohati
                  </span>
                  <span className="text-[10px] font-bold text-[#065f46] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full">
                    Tasdiqlangan
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>PROFIELDAN CHIQISH</span>
              </button>
            </div>
          ) : (
            /* Auth Form */
            <div className="space-y-4">
              
              {/* Tab Selector */}
              <div className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => { setTab('login'); setStep('credentials'); }}
                  className={`py-2.5 rounded-xl transition-all ${
                    tab === 'login' ? 'bg-white text-slate-900 shadow-sm font-extrabold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Kirish
                </button>
                <button
                  type="button"
                  onClick={() => { setTab('register'); setStep('credentials'); }}
                  className={`py-2.5 rounded-xl transition-all ${
                    tab === 'register' ? 'bg-white text-slate-900 shadow-sm font-extrabold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Ro'yxatdan o'tish
                </button>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-xs text-center font-semibold">
                  {error}
                </div>
              )}

              {step === 'credentials' ? (
                <form onSubmit={handleCredentialsSubmit} className="space-y-3.5 pt-1">
                  {tab === 'register' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        To'liq Ismingiz:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Rahimov"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Telefon raqamingiz:
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none font-mono"
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
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#10b981] focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl btn-primary-emerald text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] active:scale-95 transition-all mt-3"
                  >
                    <span>{tab === 'login' ? 'SMS Kod Olish & Kirish' : 'Ro\'yxatdan O\'tish'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* SMS Verification Step */
                <form onSubmit={handleSmsSubmit} className="space-y-4 pt-2 text-center">
                  <div className="p-4 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs text-[#065f46]">
                    <p>Tasdiqlash kodi telefon raqamingizga yuborildi:</p>
                    <p className="font-mono font-bold text-slate-900 text-sm mt-1">{phone}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      4 xonali SMS kodni kiriting (Simulyatsiya: 1234):
                    </label>
                    <input
                      type="text"
                      maxLength="4"
                      required
                      autoFocus
                      placeholder="1234"
                      value={smsCode}
                      onChange={(e) => setSmsCode(e.target.value)}
                      className="w-44 mx-auto bg-slate-50 border-2 border-[#10b981] text-center rounded-2xl py-3 text-xl font-extrabold tracking-widest text-slate-900 outline-none shadow-sm"
                    />
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setStep('credentials')}
                      className="flex-1 py-3 rounded-2xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-all"
                    >
                      Orqaga
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-2xl btn-primary-emerald text-white text-xs font-bold uppercase tracking-wider shadow-sm"
                    >
                      Tasdiqlash
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
