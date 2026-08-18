import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AirplaneFleet from './components/AirplaneFleet';
import CountryExplorer from './components/CountryExplorer';
import HotDeals from './components/HotDeals';
import PriceCalculator from './components/PriceCalculator';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

// Modals
import ContactModal from './components/ContactModal';
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';
import ImageLightboxModal from './components/ImageLightboxModal';

// Floating Messengers Widget Icons
import { Send, MessageCircle, Phone, Headphones } from 'lucide-react';
import { CONTACT_INFO } from './data/travelData';

export default function App() {
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'UZS'
  const [selectedCountryId, setSelectedCountryId] = useState('turkey');
  const [calculatorPreselect, setCalculatorPreselect] = useState('turkey');
  
  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // User state
  const [currentUser, setCurrentUser] = useState(null);

  const handleOpenBooking = (tourDetails) => {
    setBookingDetails(tourDetails);
    setIsBookingOpen(true);
  };

  const handleOpenCalculatorWithCountry = (cId) => {
    setSelectedCountryId(cId);
    setCalculatorPreselect(cId);
    document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500 selection:text-white font-sans antialiased">
      
      {/* 1. Top Navbar */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
      />

      {/* 2. Hero Section with Real Plane Background */}
      <Hero
        onSelectCountry={(cId) => setSelectedCountryId(cId)}
        onOpenBooking={handleOpenBooking}
      />

      {/* 3. Real Fleet & Airplanes Section */}
      <AirplaneFleet
        onOpenBooking={handleOpenBooking}
      />

      {/* 4. Deep Country Explorer with Media Gallery */}
      <CountryExplorer
        selectedCountryId={selectedCountryId}
        onSelectCountry={(cId) => setSelectedCountryId(cId)}
        currency={currency}
        onOpenBooking={handleOpenBooking}
        onOpenImageLightbox={(img) => setLightboxImage(img)}
        onOpenCalculatorWithCountry={handleOpenCalculatorWithCountry}
      />

      {/* 5. Hot Deals & Flash Sales */}
      <HotDeals
        currency={currency}
        onOpenBooking={handleOpenBooking}
      />

      {/* 6. Dynamic Price & Flight Calculator */}
      <PriceCalculator
        preSelectedCountryId={calculatorPreselect}
        currency={currency}
        onOpenBooking={handleOpenBooking}
      />

      {/* 7. Why Us & Trust Guarantees */}
      <WhyUs />

      {/* 8. Traveler Reviews */}
      <Reviews />

      {/* 9. Clean Luxury Footer */}
      <Footer
        onSelectCountry={(cId) => setSelectedCountryId(cId)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Luxury Hover-Expandable Side Action Dock */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center justify-end group/dock">
        
        {/* Horizontal Expandable Capsule */}
        <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl shadow-slate-400/30 p-2 rounded-full flex items-center gap-2 transition-all duration-300 ease-out">
          
          {/* Hidden Actions that slide out on Hover */}
          <div className="flex items-center gap-2.5 max-w-0 opacity-0 group-hover/dock:max-w-xs group-hover/dock:opacity-100 transition-all duration-300 ease-out overflow-hidden pointer-events-none group-hover/dock:pointer-events-auto pl-1">
            
            {/* Telegram */}
            <a
              href={CONTACT_INFO.telegram}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-[#229ED9] hover:bg-[#1a8bc4] text-white shadow-md shadow-sky-500/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group/btn relative shrink-0"
              title="Telegram"
            >
              <Send className="w-5 h-5 ml-[-1px] mt-[1px]" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-xl whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-all pointer-events-none shadow-lg border border-slate-700">
                Telegram
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1eb956] text-white shadow-md shadow-emerald-500/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group/btn relative shrink-0"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-xl whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-all pointer-events-none shadow-lg border border-slate-700">
                WhatsApp
              </span>
            </a>

            {/* Phone Call */}
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="w-11 h-11 rounded-full bg-[#0f172a] hover:bg-[#10b981] text-white shadow-md shadow-slate-900/25 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group/btn relative shrink-0"
              title="To'g'ridan-to'g'ri qo'ng'iroq"
            >
              <Phone className="w-4 h-4" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-xl whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-all pointer-events-none shadow-lg border border-slate-700 font-mono">
                {CONTACT_INFO.phone}
              </span>
            </a>

          </div>

          {/* Main Floating Trigger Button */}
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#10b981] to-[#047857] text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-all duration-300 group-hover/dock:rotate-90 active:scale-95 shrink-0 relative"
            title="Tezkor Aloqa"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-40"></span>
            <Headphones className="w-6 h-6 relative z-10" />
          </button>

        </div>

      </div>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLogin={(user) => setCurrentUser(user)}
        onLogout={() => setCurrentUser(null)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        bookingData={bookingDetails}
        currency={currency}
        currentUser={currentUser}
      />

      <ImageLightboxModal
        isOpen={!!lightboxImage}
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

    </div>
  );
}
