import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Agp from './pages/Agp';
import Contact from './pages/Contact';
import useAnimations from './hooks/useAnimations';

// Wrapper component to trigger animations on route change
function AnimatedRoutes() {
  const location = useLocation();
  useAnimations(); // Initialize animations

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/agp" element={<Agp />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Preloader />
      <main>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
