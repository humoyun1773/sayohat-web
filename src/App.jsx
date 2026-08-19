import React from 'react';
import { AppProvider } from './context/AppContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
