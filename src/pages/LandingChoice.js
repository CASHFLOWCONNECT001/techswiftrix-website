import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools } from "react-icons/fa";

const LandingChoice = () => {
  const navigate = useNavigate();

  // Brand cards
  const brands = [
    {
      name: "TechSwittrix",
      color: "#2563eb", // blue
      description: "Professional digital services and online business solutions.",
      route: "/techswittrix", // will go to Home.js with Navbar
      icon: <FaLaptopCode size={36} style={{ marginBottom: "8px" }} />,
    },
    {
      name: "SmartFix",
      color: "#16a34a", // green
      description: "Quick and friendly support for phones, laptops, and software.",
      route: "/smartfix",
      icon: <FaTools size={36} style={{ marginBottom: "8px" }} />,
    },
  ];

  return (
    <div>
      {/* Landing page content */}
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
                minWidth: "250px",
                maxWidth: "280px",
                minHeight: "160px",
                padding: "30px 20px",
                transition: "transform 0.3s, box-shadow 0.3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                animationDelay: `${0.4 + index * 0.2}s`, // stagger fade-in
              }}
              onClick={() => navigate(brand.route)}
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
