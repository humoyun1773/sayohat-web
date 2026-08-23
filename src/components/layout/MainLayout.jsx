import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Send, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/travelData';
import { useApp } from '../../context/AppContext';

// Global Modals
import ContactModal from '../modals/ContactModal';
import BookingModal from '../modals/BookingModal';
import ImageLightboxModal from '../modals/ImageLightboxModal';
import AddMediaModal from '../modals/AddMediaModal';

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased relative">
      {/* Full Website Fixed Background Image */}
      <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=2400&q=80" 
          alt="Uzbekistan Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Subtle Dark Glass Overlay */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 pointer-events-none"></div>

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
    </div>
  );
}
