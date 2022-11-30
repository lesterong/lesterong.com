import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Footer from './sections/Footer';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
