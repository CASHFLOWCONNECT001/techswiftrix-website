// pages/LandingChoice.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools, FaNetworkWired } from "react-icons/fa";
import logo from "../TechSwittrix.png";
import BusinessNeedsSection from "../components/BusinessNeed"; // ✅ Import the business needs section

const LandingChoice = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: "Digital Solutions",
      color: "#2563eb",
      description:
        "Website Design, Mobile Apps, Graphics, Writing, and other professional Digital Services.",
      route: "/techswittrix", // ✅ points to Home.js route
      icon: <FaLaptopCode size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "SmartFix",
      color: "#16a34a",
      description: "Quick and friendly support for Phones, Laptops, and Software.",
      route: "/smartfix",
      icon: <FaTools size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "Cyber Services",
      color: "#9333ea",
      description:
        "Online Cyber Services including KRA, HELB, NTSA, Document Typing, and more.",
      route: "/cyber", // ✅ points to HomeCyber page
      icon: <FaNetworkWired size={44} style={{ marginBottom: "8px" }} />,
      highlight: true,
    },
  ];

  return (
    <div>
      {/* ================= HEADER ================= */}
      <header
        style={{
          width: "100%",
          backgroundColor: "#111",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="TechSwittrix Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            boxShadow: "0 0 12px rgba(0,255,255,0.7)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/mainabout")}
        />

        {/* Brand name */}
        <span
          onClick={() => navigate("/mainabout")}
          style={{
            color: "#00ffff",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            textDecoration: "underline",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          TECHSWIFTTRIX AGENCY
        </span>

        {/* About clickable */}
        <span
          onClick={() => navigate("/mainabout")}
          style={{
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "underline",
            marginLeft: "10px",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Click here to view About TechSwiftTrix
        </span>
      </header>

      {/* ================= LANDING TEXT ================= */}
      <div className="container" style={{ textAlign: "center", paddingTop: "80px" }}>
        <h1 className="landing-title">
          Welcome to <strong>TECHSWIFTTRIX</strong>!
        </h1>

        <p style={{ fontSize: "20px", margin: "20px 0" }}>
          Explore our <strong>Website Design</strong>, <strong>Mobile Apps</strong>,{" "}
          <strong>Graphics</strong>, <strong>Cyber Services</strong>, and other professional{" "}
          <strong>Digital Services</strong>.
        </p>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "40px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#9333ea",
            fontWeight: "600",
          }}
        >
          Click the brand you want to be offered →
        </p>
      </div>

      {/* ================= BRAND CARDS ================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          paddingBottom: "60px",
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="card landing-card"
            style={{
              backgroundColor: brand.color,
              color: "#fff",
              cursor: "pointer",
              minWidth: brand.highlight ? "280px" : "250px",
              maxWidth: brand.highlight ? "300px" : "280px",
              minHeight: brand.highlight ? "180px" : "160px",
              padding: brand.highlight ? "35px 20px" : "30px 20px",
              transition: "transform 0.3s, box-shadow 0.3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: brand.highlight
                ? "0 8px 25px rgba(147, 51, 234, 0.6)"
                : "0 5px 15px rgba(0,0,0,0.15)",
            }}
            onClick={() => navigate(brand.route)}
            onMouseEnter={(e) => {
              if (brand.highlight) e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              if (brand.highlight) e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {brand.icon}
            <h2 style={{ marginBottom: "10px" }}>{brand.name}</h2>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.3" }}>{brand.description}</p>
          </div>
        ))}
      </div>

      {/* ================= BUSINESS NEEDS SECTION ================= */}
      <BusinessNeedsSection />
    </div>
  );
};

export default LandingChoice;
