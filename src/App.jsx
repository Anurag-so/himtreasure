// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import FloatingHelpButton from './components/FloatingHelpButton';
import Footer from './components/Footer'; // Ensure Footer is imported if it's global
import './index.css'; // General app styles if any

// Import all your section components
import HeroSection from './components/HeroSection';
import ServiceTicker from './components/ServiceTicker';
import About from './components/About';
import ServicesGridSection from './components/ServicesGridSection';
import AchievementsSection from './components/AchievementsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AboutUsSection from './components/AboutUsSection';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import WebDesigningPage from './components/WebDesigningPage';
/**
 * HomePage component groups all sections that appear on the main landing page.
 * This helps keep App.jsx clean and manage routes effectively.
 */
function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceTicker />
      <AboutUsSection />
      {/* These sections are part of the home page content */}
      <ServicesGridSection />
      <AchievementsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <Testimonials />
      <Blogs />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="App">
        <Navbar /> {/* Navbar stays outside Routes so it's always visible */}

        <main>
          <Routes> {/* Define your routes here */}
            {/* Home Page Route: Renders HomePage component when path is '/' */}
            <Route path="/" element={<HomePage />} />

            {/* About Us Page Route: Renders AboutUsSection when path is '/about' */}
            <Route path="/about" element={<About />} />

            {/* Contact Page Route: Renders Contact component when path is '/contact' */}
            <Route path="/contact" element={<Contact />} />

            <Route path="/career" element={<Career />} />

            <Route path="/Portfolio" element={<Portfolio />} />

            <Route path="/Blog" element={<Blog />} />

            <Route path="/WebDesigningPage" element={<WebDesigningPage />} />

            {/* Add more routes for other dedicated pages if needed */}
            {/* Example: <Route path="/services" element={<ServicesGridSection />} /> */}
            {/* Example: <Route path="/blog-posts" element={<Blogs />} /> */}
          </Routes>
        </main>

        <Footer /> {/* Footer stays outside Routes if it's global */}
        <FloatingHelpButton /> {/* Floating button also stays outside if it's global */}
      </div>
    </Router>
  );
}

export default App;