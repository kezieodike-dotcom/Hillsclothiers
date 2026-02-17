
import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import Investors from './pages/Investors';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Academy from './pages/Academy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={setCurrentPage} />;
      case Page.SHOP: return <Shop onNavigate={setCurrentPage} />;
      case Page.CUSTOM_ORDER: return <CustomOrder onNavigate={setCurrentPage} />;
      case Page.INVESTORS: return <Investors />;
      case Page.DASHBOARD: return <Dashboard />;
      case Page.CHECKOUT: return <Checkout onNavigate={setCurrentPage} />;
      case Page.ABOUT: return <About />;
      case Page.CONTACT: return <Contact />;
      case Page.ACADEMY: return <Academy />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  // Check if we are in admin dashboard or checkout, they have unique headers
  const isSpecialView = currentPage === Page.DASHBOARD || currentPage === Page.CHECKOUT;

  return (
    <div className="min-h-screen flex flex-col">
      {!isSpecialView && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />}
      <main className={`flex-grow ${!isSpecialView ? 'pt-20' : ''}`}>
        {renderPage()}
      </main>
      {!isSpecialView && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
};

export default App;
