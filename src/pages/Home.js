import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "../components/CTAButtons";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/main.css";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Graphic Design", color: "#FF6F61" },
    { name: "Website Testing", color: "#3498DB" },
    { name: "Writing & Editing", color: "#F1C40F" },
    { name: "Mobile App Development", color: "#2ECC71" },
  ];

  return (
    <div className="AppContent" style={{ width: "100%", position: "relative", textAlign: "center" }}>
      
      {/* Back arrow below navbar */}
      <div
        style={{
          position: "absolute",
          top: "80px",  // below fixed navbar
          left: "20px",
          cursor: "pointer",
          color: "#fff",
        }}
        onClick={() => navigate("/")}
      >
        <FaArrowLeft size={24} />
      </div>

      {/* Main content wrapper */}
      <div style={{ marginTop: "60px", width: "100%", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        <h1>We help businesses design, test, and build high-quality digital products.</h1>

        <p style={{ fontSize: "20px", margin: "20px 0 40px 0" }}>
          Offering professional services in Graphic Design, Website Testing, Writing & Editing, and Mobile App Development.
        </p>

        <div className="cta-button-container" style={{ marginBottom: "50px" }}>
          <CTAButtons service="General Inquiry / Hire Me" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", paddingBottom: "40px" }}>
          {services.map((service) => (
            <div
              key={service.name}
              className="card"
              style={{
                backgroundColor: service.color,
                color: "#fff",
                minWidth: "200px",
                maxWidth: "250px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{service.name}</h3>
              <p>See details on Services page</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
