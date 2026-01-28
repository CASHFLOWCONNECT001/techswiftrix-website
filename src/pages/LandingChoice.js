// pages/LandingChoice.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools, FaNetworkWired } from "react-icons/fa";
import logo from "../TechSwittrix.png";
import BusinessNeedsSection from "../components/BusinessNeed";

const LandingChoice = () => {
  const navigate = useNavigate();

  // ✅ FIX: Hook must be inside component
  const [aiOpen, setAiOpen] = useState(false);

  const brands = [
    {
      name: "Digital Solutions",
      color: "#2563eb",
      description:
        "Website Design, Mobile Apps, Graphics, Writing, and other professional Digital Services.",
      route: "/techswittrix",
      icon: <FaLaptopCode size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "SmartFix",
      color: "#16a34a",
      description:
        "Quick and friendly support for Phones, Laptops, and Software.",
      route: "/smartfix",
      icon: <FaTools size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "Cyber Services",
      color: "#9333ea",
      description:
        "Online Cyber Services including KRA, HELB, NTSA, Document Typing, and more.",
      route: "/cyber",
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

        <span
          onClick={() => navigate("/mainabout")}
          style={{
            color: "#00ffff",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            textDecoration: "underline",
          }}
        >
          TECHSWIFTTRIX AGENCY
        </span>

        <span
          onClick={() => navigate("/mainabout")}
          style={{
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "underline",
            marginLeft: "10px",
          }}
        >
          Click here to view About TechSwiftTrix
        </span>
      </header>

      {/* ================= LANDING TEXT ================= */}
      <div
        className="container"
        style={{ textAlign: "center", paddingTop: "80px" }}
      >
        <h1 className="landing-title">
          Welcome to <strong>TECHSWIFTTRIX</strong>!
        </h1>

        <p style={{ fontSize: "20px", margin: "20px 0" }}>
          Explore our <strong>Website Design</strong>,{" "}
          <strong>Mobile Apps</strong>, <strong>Graphics</strong>,{" "}
          <strong>Cyber Services</strong>, and other professional{" "}
          <strong>Digital Services</strong>.
        </p>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "40px",
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
            onClick={() => navigate(brand.route)}
            style={{
              backgroundColor: brand.color,
              color: "#fff",
              cursor: "pointer",
              minWidth: brand.highlight ? "280px" : "250px",
              maxWidth: brand.highlight ? "300px" : "280px",
              minHeight: brand.highlight ? "180px" : "160px",
              padding: brand.highlight ? "35px 20px" : "30px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: brand.highlight
                ? "0 8px 25px rgba(147, 51, 234, 0.6)"
                : "0 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            {brand.icon}
            <h2>{brand.name}</h2>
            <p style={{ fontSize: "0.95rem", textAlign: "center" }}>
              {brand.description}
            </p>
          </div>
        ))}
      </div>

      {/* ================= BUSINESS NEEDS SECTION ================= */}
      <BusinessNeedsSection />

      {/* ================= TECHSWIFTTRIX AI CHAT ================= */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        {/* Floating Button */}
        {!aiOpen && (
          <button
            onClick={() => setAiOpen(true)}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              fontSize: "22px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            🤖
          </button>
        )}

        {/* AI Chat Window */}
        {aiOpen && (
          <div
            style={{
              width: "360px",
              height: "540px",
              backgroundColor: "#0f172a",
              borderRadius: "16px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "45px",
                backgroundColor: "#111827",
                color: "#00ffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 12px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <span>TechSwiftTrix AI</span>
              <button
                onClick={() => setAiOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ✕
              </button>
            </div>

            <iframe
              src="https://tst-ai-next.vercel.app/chat"
              width="100%"
              height="495"
              style={{ border: "none" }}
              title="TechSwiftTrix AI Assistant"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingChoice;
