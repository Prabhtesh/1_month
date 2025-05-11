import React from 'react';
import { LandingPage } from './components/LandingPage';
import { Timeline } from './components/Timeline';
import { Countdown } from './components/Countdown';
import { SecretMessage } from './components/SecretMessage';
import { Footer } from './components/Footer';
import { Background } from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-gray-800">
      <Background />
      <div className="relative z-10">
        <LandingPage />
        <Timeline />
        <Countdown />
        <SecretMessage />
        <Footer />
      </div>
    </div>
  );
}

export default App;