import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VPSHosting from './pages/VPSHosting';
import DedicatedHosting from './pages/DedicatedHosting';
import MinecraftHosting from './pages/MinecraftHosting';
import About from './pages/About';
import Terms from './pages/Terms';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationPolicy from './pages/CancellationPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LimitedDeals from './pages/LimitedDeals';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vps" element={<VPSHosting />} />
          <Route path="/dedicated" element={<DedicatedHosting />} />
          <Route path="/minecraft" element={<MinecraftHosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/limited-deals" element={<LimitedDeals />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;