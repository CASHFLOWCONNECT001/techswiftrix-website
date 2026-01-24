import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../TechSwittrix.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  /* -------- Page detection -------- */
  const isCyber = location.pathname.startsWith("/cyber");
  const isTech = location.pathname.startsWith("/techswittrix");

  const showBackArrow =
    location.pathname === "/techswittrix" ||
    location.pathname === "/cyber" ||
    location.pathname === "/mainabout";

  /* -------- Links -------- */
  const techLinks = [
    { name: "Dashboard", path: "/techswittrix" }, // changed from Home
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
    <nav style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
        }}
      >
        {/* LEFT SIDE: Logo */}
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
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "#00ffff",
          }}
        >
          &#9776;
        </div>

        {/* HAMBURGER MENU LINKS */}
        <div
          className="nav-links"
          style={{
            display: isOpen ? "flex" : "none",
            position: "absolute",
            top: "100%",
            right: 0,
            flexDirection: "column",
            backgroundColor: "#001f3f", // navy background
            padding: "1rem",
            borderRadius: "8px",
            zIndex: 1000,
            minWidth: "200px",
          }}
        >
          {linksToShow.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontWeight: isActive(link.path) ? "bold" : "normal",
                textDecoration: "none",
                marginBottom: "10px",
                padding: "0.25rem 0.5rem",
                color: isActive(link.path) ? "#fffa00" : "#00ffff", // bright text
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff69b4")} // shiny hover pink
              onMouseLeave={(e) =>
                (e.target.style.color = isActive(link.path) ? "#fffa00" : "#00ffff")
              }
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP LINKS */}
        <div
          className="desktop-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {linksToShow.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontWeight: isActive(link.path) ? "bold" : "normal",
                textDecoration: "none",
                color: isActive(link.path) ? "#fffa00" : "#00ffff",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff69b4")}
              onMouseLeave={(e) =>
                (e.target.style.color = isActive(link.path) ? "#fffa00" : "#00ffff")
              }
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
