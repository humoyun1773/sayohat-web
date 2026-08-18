import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomSelect({ 
  value, 
  onChange, 
  options = [], 
  placeholder = "Tanlang...", 
  className = "" 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      
      {/* Trigger Box */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl px-4 py-3.5 text-left flex items-center justify-between transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:bg-white shadow-xs group"
      >
        <div className="flex items-center gap-2.5 truncate">
          {selectedOption?.flag && (
            <span className="text-lg leading-none">{selectedOption.flag}</span>
          )}
          {selectedOption?.icon && (
            <selectedOption.icon className="w-4 h-4 text-[#10b981]" />
          )}
          <span className={`text-sm font-semibold truncate ${selectedOption ? 'text-slate-900' : 'text-slate-400'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <ChevronDown 
          className={`w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-[#10b981]' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto py-1.5 animate-in fade-in zoom-in-95 duration-150">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                  isSelected 
                    ? 'bg-[#ecfdf5] text-[#065f46] font-bold' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {option.flag && <span className="text-base">{option.flag}</span>}
                  {option.icon && <option.icon className={`w-4 h-4 ${isSelected ? 'text-[#10b981]' : 'text-slate-400'}`} />}
                  <span className="truncate">{option.label}</span>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-[#10b981] shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
