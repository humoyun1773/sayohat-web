import React from 'react';
import { LANGUAGES } from '../../data/translations';

export default function LanguageSwitcher({ currentLang, onChangeLang }) {
  return (
    <div className="flex items-center p-1 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xs">
      {LANGUAGES.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onChangeLang(lang.code)}
            className={`flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer ${
              isActive
                ? 'bg-[#10b981] text-white shadow-xs scale-105'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
            title={lang.fullName}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        );
      })}
    </div>
  );
}
