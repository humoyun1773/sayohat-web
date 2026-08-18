import React, { useState } from 'react';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Section Components
import Hero from '../components/sections/Hero';
import AirplaneFleet from '../components/sections/AirplaneFleet';
import CountryExplorer from '../components/sections/CountryExplorer';
import HotDeals from '../components/sections/HotDeals';
import PriceCalculator from '../components/sections/PriceCalculator';
import WhyUs from '../components/sections/WhyUs';
import Reviews from '../components/sections/Reviews';

// Modal Components
import ContactModal from '../components/modals/ContactModal';
import BookingModal from '../components/modals/BookingModal';
import ImageLightboxModal from '../components/modals/ImageLightboxModal';

// Floating Messengers Widget Icons
import { Send, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/travelData';

export default function HomePage() {
  // Persisted Currency ('USD' or 'UZS')
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('lotos_field_currency') || 'USD';
    } catch {
      return 'USD';
    }
  });

  // Persisted Selected Country
  const [selectedCountryId, setSelectedCountryId] = useState(() => {
    try {
      return localStorage.getItem('lotos_field_country') || 'turkey';
    } catch {
      return 'turkey';
    }
  });

  const [calculatorPreselect, setCalculatorPreselect] = useState('turkey');
  
  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleCurrencyChange = (curr) => {
    try {
      localStorage.setItem('lotos_field_currency', curr);
    } catch (e) {
      console.error(e);
    }
    setCurrency(curr);
  };

  const handleCountryChange = (cId) => {
    try {
      localStorage.setItem('lotos_field_country', cId);
    } catch (e) {
      console.error(e);
    }
    setSelectedCountryId(cId);
  };

  const handleOpenBooking = (tourDetails) => {
    setBookingDetails(tourDetails);
    setIsBookingOpen(true);
  };

  const handleOpenCalculatorWithCountry = (cId) => {
    handleCountryChange(cId);
    setCalculatorPreselect(cId);
    document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      
      {/* 1. Top Navbar */}
      <Navbar />

      {/* 2. Main Hero Section */}
      <Hero
        onSelectCountry={handleCountryChange}
        onOpenBooking={handleOpenBooking}
      />

      {/* 3. Modern Airplane Fleet & Live Board */}
      <AirplaneFleet
        onOpenBooking={handleOpenBooking}
        onOpenImageLightbox={(img) => setLightboxImage(img)}
      />

      {/* 4. Country Explorer & HD Photo Gallery */}
      <CountryExplorer
        selectedCountryId={selectedCountryId}
        onSelectCountry={handleCountryChange}
        currency={currency}
        onOpenBooking={handleOpenBooking}
        onOpenImageLightbox={(img) => setLightboxImage(img)}
        onOpenCalculatorWithCountry={handleOpenCalculatorWithCountry}
      />

      {/* 5. Hot Deals & Flash Sale Countdown */}
      <HotDeals
        currency={currency}
        onOpenBooking={handleOpenBooking}
      />

      {/* 6. Live Price Calculator */}
      <PriceCalculator
        preSelectedCountryId={calculatorPreselect}
        currency={currency}
        onOpenBooking={handleOpenBooking}
      />

      {/* 7. Why Choose Us */}
      <WhyUs />

      {/* 8. Verified Traveler Reviews */}
      <Reviews />

      {/* 9. Clean Luxury Footer */}
      <Footer
        onSelectCountry={handleCountryChange}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Direct Luxury Floating Contact Buttons */}
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

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        bookingData={bookingDetails}
        currency={currency}
      />

      <ImageLightboxModal
        isOpen={!!lightboxImage}
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

    </div>
  );
}
