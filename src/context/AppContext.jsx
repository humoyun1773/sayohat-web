/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Multilingual State ('uz', 'ru', 'en')
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lotos_field_lang') || 'uz';
    } catch {
      return 'uz';
    }
  });

  // Persisted Currency ('USD' or 'UZS')
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('lotos_field_currency') || 'USD';
    } catch {
      return 'USD';
    }
  });

  // Persisted Selected Region
  const [selectedCountryId, setSelectedCountryId] = useState(() => {
    try {
      const saved = localStorage.getItem('lotos_field_country');
      return (saved && saved !== 'turkey') ? saved : 'samarkand';
    } catch {
      return 'samarkand';
    }
  });

  // Transport Mode State ('bus' | 'plane')
  const [transportMode, setTransportMode] = useState('bus');

  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleLangChange = (newLang) => {
    try {
      localStorage.setItem('lotos_field_lang', newLang);
    } catch (e) {
      console.error(e);
    }
    setLang(newLang);
  };

  const handleCountryChange = (cId, mode) => {
    try {
      localStorage.setItem('lotos_field_country', cId);
    } catch (e) {
      console.error(e);
    }
    setSelectedCountryId(cId);
    if (mode) {
      setTransportMode(mode);
    }
  };

  const openBookingModal = (tourDetails) => {
    setBookingDetails(tourDetails);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
  };

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  const openAddMediaModal = () => setIsAddMediaOpen(true);
  const closeAddMediaModal = () => setIsAddMediaOpen(false);

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  const handleAddNewTrip = (newTrip) => {
    try {
      const saved = localStorage.getItem('lotos_live_trips');
      let parsed = [];
      if (saved) {
        parsed = JSON.parse(saved);
      }
      const updated = [newTrip, ...parsed];
      localStorage.setItem('lotos_live_trips', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error(e);
    }
  };

  const t = translations[lang] || translations.uz;

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang: handleLangChange,
        currency,
        setCurrency,
        selectedCountryId,
        setSelectedCountryId: handleCountryChange,
        transportMode,
        setTransportMode,
        isContactOpen,
        openContactModal,
        closeContactModal,
        isBookingOpen,
        bookingDetails,
        openBookingModal,
        closeBookingModal,
        isAddMediaOpen,
        openAddMediaModal,
        closeAddMediaModal,
        lightboxImage,
        openLightbox,
        closeLightbox,
        handleAddNewTrip,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
