import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../TechSwittrix.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(prev => !prev);

  /* -------- Page detection -------- */
  const isCyber = location.pathname.startsWith("/cyber");
  const isTech = location.pathname.startsWith("/techswittrix");
  const isMainAbout = location.pathname === "/mainabout";

  const headerText = isCyber
    ? "CYBER SERVICES"
    : isTech
    ? "TechSwiftTrix"
    : isMainAbout
    ? "About TechSwiftTrix"
    : "";

  const showBackArrow =
    location.pathname === "/techswittrix" ||
    location.pathname === "/cyber" ||
    location.pathname === "/mainabout";

  /* -------- Links -------- */
  const techLinks = [
    { name: "Home", path: "/techswittrix" },
    { name: "Services", path: "/techswittrix/services" },
    { name: "Portfolio", path: "/techswittrix/portfolio" },
    { name: "Contact", path: "/techswittrix/contact" },
  ];

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
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SIDE: Logo + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {showBackArrow && (
            <FaArrowLeft
              size={20}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          )}

          {/* Logo + Brand Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={logo}
              alt="TechSwiftTrix Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                boxShadow: "0 0 12px rgba(0,255,255,0.7)",
              }}
            />
            <div style={{ lineHeight: "1" }}>
              <div
                style={{
                  color: "#00ffff",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                }}
              >
                TECHSWIFTTRIX
              </div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  opacity: 0.8,
                }}
              >
                Agency
              </div>
            </div>
          </div>
        </div>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          style={{
            marginLeft: "auto",
            marginRight: "25%",
            cursor: "pointer",
          }}
        >
          &#9776;
        </div>

        {/* MENU LINKS */}
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
                marginLeft: "15px",
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
