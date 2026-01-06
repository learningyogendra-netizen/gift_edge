import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import AboutUs from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;