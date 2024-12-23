// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommonHeader from './components/CommonHeader';
import Header from './components/Header';
import Home from './pages/Home';
import DigitalMarketing from './pages/DigitalMarketing';
import WebDevelopment from './pages/WebDevelopment';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <CommonHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
