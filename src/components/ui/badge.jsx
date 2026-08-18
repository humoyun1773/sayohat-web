import React from 'react';

export function Badge({ className = '', variant = 'default', children, ...props }) {
  const variants = {
    default: 'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80',
    secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80',
    destructive: 'border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80',
    outline: 'text-slate-950 border border-slate-200 hover:bg-slate-100',
    emerald: 'border-transparent bg-[#10b981] text-white hover:bg-[#059669]',
    emeraldSubtle: 'border-[#a7f3d0] bg-[#ecfdf5] text-[#065f46]'
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
