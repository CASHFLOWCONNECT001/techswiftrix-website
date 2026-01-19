import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  // show back arrow on any TechSwittrix page
  const showBackArrow = location.pathname.startsWith("/techswittrix");

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
              size={18}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          )}

          <Link
            to="/techswittrix"
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "none",
            }}
          >
            TechSwittrix
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Links */}
        <div className="nav-links">
          {[
            { name: "Home", path: "/techswittrix" },
            { name: "Services", path: "/techswittrix/services" },
            { name: "Portfolio", path: "/techswittrix/portfolio" },
            { name: "About", path: "/techswittrix/about" },
            { name: "Contact", path: "/techswittrix/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={isActive(link.path) ? "active-link" : ""}
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
