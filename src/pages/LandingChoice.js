import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools, FaNetworkWired } from "react-icons/fa";

const LandingChoice = () => {
  const navigate = useNavigate();

  // Brand cards
  const brands = [
    {
      name: "TechSwittrix",
      color: "#2563eb", // blue
      description: "Professional digital services and online business solutions.",
      route: "/techswittrix", 
      icon: <FaLaptopCode size={36} style={{ marginBottom: "8px" }} />,
      highlight: false, // not highlighted
    },
    {
      name: "SmartFix",
      color: "#16a34a", // green
      description: "Quick and friendly support for phones, laptops, and software.",
      route: "/smartfix",
      icon: <FaTools size={36} style={{ marginBottom: "8px" }} />,
      highlight: false,
    },
    {
      name: "Cyber Services",
      color: "#9333ea", // purple
      description: "Online cyber services including KRA, HELB, NTSA, document typing, and more.",
      route: "/cyber", // goes to HomeCyber.js
      icon: <FaNetworkWired size={44} style={{ marginBottom: "8px" }} />, // larger icon
      highlight: true, // highlight this card
    },
  ];

  return (
    <div>
      <div className="container" style={{ textAlign: "center", paddingTop: "120px" }}>
        <h1 className="landing-title">Welcome</h1>
        <p style={{ fontSize: "20px", margin: "20px 0 40px 0" }}>
          Choose your brand to continue:
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {brands.map((brand, index) => (
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
                  ? "0 8px 25px rgba(147, 51, 234, 0.6)" // glow for Cyber
                  : "0 5px 15px rgba(0,0,0,0.1)",
                animationDelay: `${0.4 + index * 0.2}s`,
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
      </div>
    </div>
  );
};

export default LandingChoice;
