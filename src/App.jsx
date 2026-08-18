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
import { Send, MessageCircle, Phone } from 'lucide-react';
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

      {/* Floating 1-Tap Quick Action Dock (Telegram, WhatsApp, Direct Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Telegram Shortcut */}
        <a
          href={CONTACT_INFO.telegram}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          title="Telegramda bog'lanish"
        >
          <Send className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-semibold shadow-md pointer-events-none">
            Telegram
          </span>
        </a>

        {/* WhatsApp Shortcut */}
        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          title="WhatsAppda bog'lanish"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-semibold shadow-md pointer-events-none">
            WhatsApp
          </span>
        </a>

        {/* Phone Call Shortcut */}
        <a
          href={`tel:${CONTACT_INFO.phoneClean}`}
          className="w-12 h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          title="To'g'ridan-to'g'ri qo'ng'iroq"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-semibold shadow-md pointer-events-none">
            {CONTACT_INFO.phone}
          </span>
        </a>

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
