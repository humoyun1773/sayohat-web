import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder = "Tanlang", 
  icon: Icon,
  className = "" 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 hover:bg-white border text-left rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all flex items-center justify-between shadow-sm cursor-pointer ${
          isOpen 
            ? 'border-sky-500 ring-2 ring-sky-200 bg-white' 
            : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {Icon && <Icon className="w-4 h-4 text-sky-600 shrink-0" />}
          {selectedOption?.flag && <span className="text-base shrink-0">{selectedOption.flag}</span>}
          <span className="text-slate-900 font-bold truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <ChevronDown 
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-sky-600' : ''
          }`} 
        />
      </button>

      {/* Popover Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-64 overflow-y-auto p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {opt.flag && <span className="text-base shrink-0">{opt.flag}</span>}
                  {opt.icon && <opt.icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-sky-600'}`} />}
                  <span className="truncate">{opt.label}</span>
                </div>

                {isSelected && <Check className="w-4 h-4 shrink-0 text-white" />}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
