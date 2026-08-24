import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PageLoader from '../ui/PageLoader';
import { Send, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/travelData';
import { useApp } from '../../context/AppContext';

// Global Modals
import ContactModal from '../modals/ContactModal';
import BookingModal from '../modals/BookingModal';
import ImageLightboxModal from '../modals/ImageLightboxModal';
import AddMediaModal from '../modals/AddMediaModal';

const BACKGROUND_IMAGES = [
  '/images/plane-bg-1.png',
  '/images/plane-bg-2.png',
  '/images/plane-bg-3.png',
  '/images/plane-bg-4.png',
  '/images/plane-bg-5.png',
];

export default function MainLayout() {
  const {
    lang,
    currency,
    isContactOpen,
    closeContactModal,
    isBookingOpen,
    closeBookingModal,
    bookingDetails,
    isAddMediaOpen,
    closeAddMediaModal,
    handleAddNewTrip,
    lightboxImage,
    closeLightbox,
    t
  } = useApp();

  const location = useLocation();
  const [currentBgIdx, setCurrentBgIdx] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Initial load transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Route change page loading animation
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  // Background slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased relative">
      {/* Full Website Fixed Alternating Background Slider - 100% Crystal Clear Without Any Opacity */}
      <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden bg-slate-900">
        {BACKGROUND_IMAGES.map((imgSrc, index) => (
          <img
            key={imgSrc}
            src={imgSrc}
            alt={`Travel Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentBgIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Scroll to top on every route navigation */}
      <ScrollToTop />

      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Page Body Rendered by React Router */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Direct Floating Quick Contacts */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl shadow-slate-400/25 p-2 rounded-full">
        {/* Telegram */}
        <a
          href={CONTACT_INFO.telegram}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-[#229ED9] hover:bg-[#1a8bc4] text-white shadow-md shadow-sky-500/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          title="Telegram"
        >
          <Send className="w-5 h-5 ml-[-1px] mt-[1px]" />
        </a>

        {/* WhatsApp */}
        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1eb956] text-white shadow-md shadow-emerald-500/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Phone Call */}
        <a
          href={`tel:${CONTACT_INFO.phoneClean}`}
          className="w-11 h-11 rounded-full bg-[#0f172a] hover:bg-[#10b981] text-white shadow-md shadow-slate-900/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          title="To'g'ridan-to'g'ri qo'ng'iroq"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Global Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContactModal}
        t={t}
        lang={lang}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBookingModal}
        bookingData={bookingDetails}
        currency={currency}
        t={t}
        lang={lang}
      />

      <ImageLightboxModal
        isOpen={!!lightboxImage}
        imageUrl={lightboxImage}
        onClose={closeLightbox}
      />

      <AddMediaModal
        isOpen={isAddMediaOpen}
        onClose={closeAddMediaModal}
        onAddMedia={handleAddNewTrip}
        lang={lang}
      />

      {/* Global Multilingual Route & Page Loader */}
      <PageLoader isLoading={isPageLoading} lang={lang} />
    </div>
  );
}
