import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Paths from './components/Paths';
import Footer from './components/Footer';
import { Toaster } from './components/ui/Toaster';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Paths />
        <Newsletter />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;