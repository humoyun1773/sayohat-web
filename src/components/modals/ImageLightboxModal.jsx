import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageLightboxModal({ isOpen, imageUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const scrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md modal-backdrop-animate overscroll-contain"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center lightbox-animate"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition-all backdrop-blur-md shadow-lg"
          title="Yopish"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 max-h-[82vh]">
          <img
            src={imageUrl}
            alt="Full HD View"
            className="w-full h-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
