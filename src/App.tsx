/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ExplorePage from './pages/ExplorePage';
import MenuPage from './pages/MenuPage';
import BlogPage from './pages/BlogPage';
import CampaignsPage from './pages/CampaignsPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetailPage from './pages/ProductDetailPage';
import EventDetailPage from './pages/EventDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
