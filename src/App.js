import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Existing TechSwiftTrix pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Landing and SmartFix
import LandingChoice from "./pages/LandingChoice";
import SmartFix from "./pages/SmartFix";

// Cyber pages
import HomeCyber from "./pages/homeCyber";
import AboutCyber from "./pages/aboutCyber";
import ServicesCyber from "./pages/servicesCyber";
import FaqCyber from "./pages/faqCyber";

// New MainAbout page
import MainAbout from "./pages/MainAbout"; // <-- corrected casing

// Layout wrapper for pages with Navbar/Footer
const Layout = ({ children }) => (
  <div className="AppContainer">
    <Navbar />
    <div className="AppContent">{children}</div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page (no Navbar/Footer) */}
        <Route path="/" element={<LandingChoice />} />

        {/* TechSwiftTrix pages */}
        <Route
          path="/techswittrix"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/techswittrix/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/techswittrix/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/techswittrix/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/techswittrix/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* TechSwiftTrix About Us (new page) */}
        <Route
          path="/mainabout"
          element={
            <Layout>
              <MainAbout />
            </Layout>
          }
        />

        {/* SmartFix page */}
        <Route path="/smartfix" element={<SmartFix />} />

        {/* Cyber pages */}
        <Route
          path="/cyber"
          element={
            <Layout>
              <HomeCyber />
            </Layout>
          }
        />
        <Route
          path="/cyber/about"
          element={
            <Layout>
              <AboutCyber />
            </Layout>
          }
        />
        <Route
          path="/cyber/services"
          element={
            <Layout>
              <ServicesCyber />
            </Layout>
          }
        />
        <Route
          path="/cyber/faq"
          element={
            <Layout>
              <FaqCyber />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
