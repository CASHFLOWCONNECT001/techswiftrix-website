import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../TechSwittrix.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Track screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------- Page detection -------- */
  const isCyber = location.pathname.startsWith("/cyber");
  const isTech = location.pathname.startsWith("/techswittrix");

  const showBackArrow =
    location.pathname === "/techswittrix" ||
    location.pathname === "/cyber" ||
    location.pathname === "/mainabout";

  /* -------- Links -------- */
  const techLinks = [
    { name: "Dashboard", path: "/techswittrix" },
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
    <nav style={{ background: "#111", padding: "0.5rem 0" }}>
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
        {/* LEFT: Logo + Back Arrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {showBackArrow && (
            <FaArrowLeft
              size={20}
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          )}

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

        {/* HAMBURGER: show only on mobile */}
        {isMobile && (
          <div
            className="hamburger"
            onClick={toggleMenu}
            style={{ fontSize: "24px", cursor: "pointer" }}
          >
            &#9776;
          </div>
        )}

        {/* MENU LINKS */}
        {(isMobile ? isOpen : true) && (
          <div
            className="nav-links"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              position: isMobile ? "absolute" : "static",
              top: isMobile ? "60px" : "auto",
              right: isMobile ? "10px" : "auto",
              background: isMobile ? "#111" : "transparent",
              padding: isMobile ? "10px" : "0",
              borderRadius: isMobile ? "5px" : "0",
              gap: "15px",
              zIndex: 1000,
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
