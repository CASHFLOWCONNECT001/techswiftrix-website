import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import LandingChoice from "./pages/LandingChoice";
import SmartFix from "./pages/SmartFix";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page (no Navbar/Footer) */}
        <Route path="/" element={<LandingChoice />} />

        {/* TechSwittrix pages */}
        <Route
          path="/techswittrix/*"
          element={
            <div className="AppContainer">
              <Navbar />
              <div className="AppContent">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </div>
          }
        />

        {/* SmartFix page */}
        <Route path="/smartfix" element={<SmartFix />} />
      </Routes>
    </Router>
  );
}

export default App;
