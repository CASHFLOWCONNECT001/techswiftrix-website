import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // back arrow

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // detect active page
  const navigate = useNavigate(); // for back arrow

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  // Show back arrow only on Home page
  const showBackArrow = location.pathname === "/techswittrix/";

  return (
    <nav
      style={{
        backgroundColor: "#000",
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Back Arrow */}
          {showBackArrow && (
            <FaArrowLeft
              size={20}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          )}

          {/* Logo */}
          <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>
            <Link
              to="/techswittrix/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              TechSwittrix
            </Link>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            cursor: "pointer",
            display: "none",
          }}
        >
          &#9776;
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links ${isOpen ? "active" : ""}`}
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {[
            { name: "Home", path: "/techswittrix/" },
            { name: "Services", path: "/techswittrix/services" },
            { name: "Portfolio", path: "/techswittrix/portfolio" },
            { name: "About", path: "/techswittrix/about" },
            { name: "Contact", path: "/techswittrix/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                padding: "8px 15px",
                backgroundColor: isActive(link.path) ? "#444" : "#222",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: isActive(link.path) ? "bold" : "normal",
                transition: "all 0.3s",
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
