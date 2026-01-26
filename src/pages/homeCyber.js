import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "../components/CTAButtons";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../components/SEO"; // ✅ ADD THIS
import "../styles/main.css";

const HomeCyber = () => {
  const navigate = useNavigate();

  const servicesCategories = [
    { name: "Government & Official Services", color: "#3498DB" },
    { name: "Business & Professional Services", color: "#FF6F61" },
    { name: "Job & Education Services", color: "#F1C40F" },
    { name: "Document & Typing Services", color: "#2ECC71" },
    { name: "Online & Digital Services", color: "#9B59B6" },
  ];

  return (
    <>
      {/* ✅ SEO FOR GOOGLE */}
      <SEO path="/home-cyber" />

      <div
        className="AppContent"
        style={{ width: "100%", position: "relative", textAlign: "center" }}
      >
        {/* Back arrow below navbar */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "20px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={24} />
        </div>

        {/* Main content wrapper */}
        <div
          style={{
            marginTop: "60px",
            width: "100%",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Welcome to TechSwiftTrix Cyber Services</h1>

          <p style={{ fontSize: "20px", margin: "20px 0 40px 0" }}>
            We provide professional online cyber services including KRA, HELB,
            NTSA, document typing, CV formatting, and more.
          </p>

          <div className="cta-button-container" style={{ marginBottom: "50px" }}>
            <CTAButtons service="Send Documents / Get Started" />
          </div>

          {/* Services category cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              paddingBottom: "40px",
            }}
          >
            {servicesCategories.map((category) => (
              <div
                key={category.name}
                className="card"
                style={{
                  backgroundColor: category.color,
                  color: "#fff",
                  minWidth: "200px",
                  maxWidth: "250px",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  cursor: "default",
                }}
              >
                <h3>{category.name}</h3>
                <p>See details on Services page</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCyber;
