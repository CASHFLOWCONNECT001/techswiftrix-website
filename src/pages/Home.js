import React from "react";
import CTAButtons from "../components/CTAButtons";

const Home = () => {
  const services = [
    { name: "Graphic Design", color: "#FF6F61" },       // Orange / creative
    { name: "Website Testing", color: "#3498DB" },      // Blue / tech
    { name: "Writing & Editing", color: "#F1C40F" },    // Yellow / content
    { name: "Mobile App Development", color: "#2ECC71" } // Green / apps
  ];

  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>I help businesses design, test, and build high-quality digital products.</h1>
      <p style={{ fontSize: "20px", margin: "20px 0 40px 0" }}>
        Offering professional services in Graphic Design, Website Testing, Writing & Editing, and Mobile App Development.
      </p>

      <div className="cta-button-container">
        <CTAButtons service="General Inquiry / Hire Me" />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "50px" }}>
        {services.map(service => (
          <div key={service.name} className="card" style={{ backgroundColor: service.color, color: "#fff" }}>
            <h3>{service.name}</h3>
            <p>See details on Services page</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
