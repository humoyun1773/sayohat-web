import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Pages
import HomePage from '../pages/HomePage';
import ToursPage from '../pages/ToursPage';
import TourDetailsPage from '../pages/TourDetailsPage';
import DealsPage from '../pages/DealsPage';
import MediaPage from '../pages/MediaPage';
import AboutPage from '../pages/AboutPage';
import ReviewsPage from '../pages/ReviewsPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="tours/:id" element={<TourDetailsPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
