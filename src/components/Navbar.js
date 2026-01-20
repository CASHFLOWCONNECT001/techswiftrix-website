import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Determine which section we are in
  const isCyber = location.pathname.startsWith("/cyber");
  const isTech = location.pathname.startsWith("/techswittrix");

  // Header text dynamically
  const headerText = isCyber ? "CYBER SERVICES" : isTech ? "TechSwiftTrix" : "";

  // Show back arrow only on home pages
  const showBackArrow = location.pathname === "/techswittrix" || location.pathname === "/cyber";

  // Links for TechSwiftTrix
  const techLinks = [
    { name: "Home", path: "/techswittrix" },
    { name: "Services", path: "/techswittrix/services" },
    { name: "Portfolio", path: "/techswittrix/portfolio" },
    { name: "About", path: "/techswittrix/about" },
    { name: "Contact", path: "/techswittrix/contact" },
  ];

  // Links for Cyber
  const cyberLinks = [
    { name: "Home", path: "/cyber" },
    { name: "Services", path: "/cyber/services" },
    { name: "About", path: "/cyber/about" },
    { name: "FAQ", path: "/cyber/faq" },
  ];

  const linksToShow = isCyber ? cyberLinks : isTech ? techLinks : [];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={isOpen ? "active" : ""}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
        }}
      >
        {/* Left side */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {showBackArrow && (
            <FaArrowLeft
              size={20}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/")} // always go to Landing page
            />
          )}

          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "none",
            }}
          >
            {headerText}
          </span>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Links */}
        <div className="nav-links">
          {linksToShow.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={isActive(link.path) ? "active-link" : ""}
              style={{
                fontWeight: isActive(link.path) ? "bold" : "normal",
                textDecoration: "none",
                color: "#fff",
                padding: "0 10px",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
