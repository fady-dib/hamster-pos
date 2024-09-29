import React from 'react';
import { HelmetProvider } from 'react-helmet-async'

import './App.css';
import Landing from './pages/Landing';

const App = () => {
  return (
    <HelmetProvider>
      <Landing />
    </HelmetProvider>
  );
};

export default App;
