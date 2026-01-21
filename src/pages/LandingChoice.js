import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools, FaNetworkWired, FaInfoCircle } from "react-icons/fa";

const LandingChoice = () => {
  const navigate = useNavigate();

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
      route: "/cyber",
      icon: <FaNetworkWired size={44} style={{ marginBottom: "8px" }} />,
      highlight: true,
    },
  ];

  return (
    <div>
      {/* Top About Us tab */}
      <div
        style={{
          backgroundColor: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "12px 0",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/mainabout")}
      >
        <FaInfoCircle style={{ marginRight: "8px" }} />
        About TECHSWITTRIX
      </div>

      {/* Landing text */}
      <div className="container" style={{ textAlign: "center", paddingTop: "80px" }}>
        <h1 className="landing-title">
          Welcome to <strong>TECHSWITTRIX</strong>!
        </h1>
        <p style={{ fontSize: "20px", margin: "20px 0 20px 0" }}>
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
            justifyContent: "center",
            gap: "5px",
          }}
        >
          Click the brand you want to be offered &rarr;
        </p>
      </div>

      {/* Brand cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          paddingBottom: "60px",
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
                ? "0 8px 25px rgba(147, 51, 234, 0.6)"
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
  );
};

export default LandingChoice;
