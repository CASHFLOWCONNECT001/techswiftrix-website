import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools, FaNetworkWired } from "react-icons/fa";
import logo from "../TechSwittrix.png";
import BusinessNeedsSection from "../components/BusinessNeed";

const LandingChoice = () => {
  const navigate = useNavigate();
  const [aiOpen, setAiOpen] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null); // Track which card is flipped

  const brands = [
    {
      name: "Digital Solutions",
      color: "linear-gradient(135deg, #00c6ff, #2563eb)",
      glow: "0 0 30px rgba(37,99,235,0.9)",
      description: [
        "Website Design",
        "Mobile App Development",
        "Graphics Design",
        "Professional Writing",
        "SEO Optimization",
        "Social Media Management",
        "Branding & Logo Design",
        "Email Marketing",
        "UX/UI Design",
        "Other Digital Services"
      ],
      route: "/techswittrix",
      icon: <FaLaptopCode size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "SmartFix",
      color: "linear-gradient(135deg, #00f5d4, #0ea5e9)",
      glow: "0 0 30px rgba(14,165,233,0.9)",
      description: [
        "Phone Repair & Support",
        "Laptop Repair",
        "Tablet Repair",
        "Software Installation",
        "System Troubleshooting",
        "Virus Removal",
        "Data Recovery",
        "Hardware Upgrades",
        "Network Setup",
        "Other Tech Support Services"
      ],
      route: "/smartfix",
      icon: <FaTools size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "Cyber Services",
      color: "linear-gradient(135deg, #7c3aed, #9333ea)",
      glow: "0 0 35px rgba(147,51,234,0.9)",
      description: [
        "KRA Services",
        "HELB Applications",
        "NTSA Services",
        "Document Typing",
        "Online Form Submission",
        "E-Government Services",
        "Bill Payments",
        "Business Registrations",
        "Digital Certificates",
        "Other Online Services"
      ],
      route: "/cyber",
      icon: <FaNetworkWired size={44} style={{ marginBottom: "8px" }} />,
      highlight: true,
    },
  ];

  return (
    <div style={{ backgroundColor: "rgba(2,6,23,0.5)", minHeight: "100vh", color: "#fff" }}>
      {/* ================= HEADER ================= */}
      <header
        style={{
          width: "100%",
          backgroundColor: "rgba(2,6,23,0.5)",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(0,255,255,0.15)",
        }}
      >
        <img
          src={logo}
          alt="TechSwittrix Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            boxShadow: "0 0 14px rgba(0,255,255,0.7)",
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
            color: "#60a5fa",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "underline",
          }}
        >
          Click here to view About TechSwiftTrix
        </span>
      </header>

      {/* ================= LANDING TEXT ================= */}
      <div style={{ textAlign: "center", paddingTop: "80px" }}>
        <h1
          style={{
            color: "#fff",
            fontSize: "2.4rem",
            fontWeight: "900",
            textShadow:
              "0 0 6px #00eaff, 0 0 12px #00eaff, 0 0 20px #ff4ecd, 0 0 30px #ff4ecd, 0 0 40px #00eaff",
            animation: "neonGlow 2.5s ease-in-out infinite alternate",
          }}
        >
          Welcome to{" "}
          <strong
            style={{
              color: "#00eaff",
              textShadow: "0 0 12px #00eaff, 0 0 18px #ff4ecd, 0 0 30px #00eaff",
            }}
          >
            TECHSWIFTTRIX
          </strong>
          !
        </h1>

        <p style={{ fontSize: "20px", margin: "20px 0", color: "#cbd5f5" }}>
          Explore our <strong>Website Design</strong>, <strong>Mobile Apps</strong>,{" "}
          <strong>Graphics</strong>, <strong>Cyber Services</strong>, and other professional{" "}
          <strong>Digital Services</strong>.
        </p>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "40px",
            color: "#a78bfa",
            fontWeight: "600",
          }}
        >
          Click the brand card to flip and view all services →
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
        {brands.map((brand, idx) => {
          const isFlipped = flippedCard === idx;

          return (
            <div
              key={brand.name}
              className={`flip-card ${isFlipped ? "flipped" : ""}`}
              onClick={() => setFlippedCard(isFlipped ? null : idx)}
              style={{ cursor: "pointer", perspective: "1000px", position: "relative" }}
            >
              <div
                className="flip-card-inner"
                style={{
                  minWidth: brand.highlight ? "280px" : "250px",
                  maxWidth: brand.highlight ? "300px" : "280px",
                  padding: "30px 20px",
                  borderRadius: "12px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT */}
                <div
                  className="flip-card-front"
                  style={{
                    position: "absolute",
                    width: "100%",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: brand.color,
                    boxShadow: brand.glow,
                    color: "#fff",
                  }}
                >
                  {brand.icon}
                  <h2 style={{ margin: "8px 0" }}>{brand.name}</h2>
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    ✔ Click to View More
                  </span>
                </div>

                {/* BACK */}
                <div
                  className="flip-card-back"
                  style={{
                    position: "absolute",
                    width: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "10px",
                    backgroundColor: "#fff",
                    color: "#020617",
                    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
                  }}
                >
                  <h3 style={{ marginBottom: "12px" }}>{brand.name} Services</h3>
                  {brand.description.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "6px",
                      }}
                    >
                      <span style={{ color: "#ff4ecd", fontWeight: "bold" }}>✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  <button
                    onClick={() => navigate(brand.route)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      backgroundColor: "#00eaff",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "#020617",
                    }}
                  >
                    Go to {brand.name}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= BUSINESS NEEDS ================= */}
      <BusinessNeedsSection />

      {/* ================= TST AI FLOATING CHAT ================= */}
      {!aiOpen && (
        <button
          onClick={() => setAiOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "linear-gradient(135deg, #00eaff, #2563eb)",
            color: "#fff",
            border: "none",
            padding: "14px 18px",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(0,234,255,0.6)",
            zIndex: 9999,
          }}
        >
          💬 TST AI
        </button>
      )}

      {aiOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "90vw",
            maxWidth: "380px",
            height: "70vh",
            backgroundColor: "#020617",
            borderRadius: "16px",
            boxShadow: "0 0 30px rgba(0,234,255,0.35)",
            overflow: "hidden",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "50px",
              background: "linear-gradient(135deg, #00eaff, #2563eb)",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 12px",
              fontWeight: "bold",
            }}
          >
            <span>TST-AI Assistant</span>
            <button
              onClick={() => setAiOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <iframe
            src="https://tst-ai-next.vercel.app/chat"
            style={{ border: "none", flex: 1 }}
            title="TST-AI Assistant"
          />
        </div>
      )}

      <style>{`
        @keyframes neonGlow {
          0% { text-shadow: 0 0 6px #00eaff, 0 0 12px #00eaff, 0 0 20px #ff4ecd; }
          50% { text-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff, 0 0 25px #ff4ecd; }
          100% { text-shadow: 0 0 6px #00eaff, 0 0 12px #00eaff, 0 0 20px #ff4ecd; }
        }
      `}</style>
    </div>
  );
};

export default LandingChoice;
