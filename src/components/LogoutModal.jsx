import React, { useEffect } from 'react';
import { LogOut, X, ShieldAlert } from 'lucide-react';

export default function LogoutModal({ isOpen, onClose, onConfirmLogout, currentUser }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentUser) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Dark Blur Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top Header with Close Button */}
        <div className="bg-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            title="Yopish"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#10b981] to-[#047857] text-white flex items-center justify-center font-black text-2xl shadow-lg border border-white/20">
              {currentUser.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h3 className="text-lg font-black text-white">{currentUser.name}</h3>
              <p className="text-xs text-slate-300 font-mono">{currentUser.phone}</p>
              <span className="inline-block mt-1 text-[10px] font-bold text-[#a7f3d0] bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
                ★ {currentUser.tier || 'VIP A\'zo'}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 bg-white">
          
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold block text-sm text-amber-950">
                Tizimdan chiqmoqchimisiz?
              </span>
              <p className="text-amber-800 leading-relaxed font-medium">
                Profildan chiqqaningizdan so'ng, shaxsiy keshbek va maxsus chegirmalardan foydalanish uchun qaytadan tizimga kirishingiz kerak bo'ladi.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
            >
              Bekor qilish
            </button>

            <button
              type="button"
              onClick={() => {
                onConfirmLogout();
                onClose();
              }}
              className="py-3 px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              <span>Ha, Chiqish</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
