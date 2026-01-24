import React from "react";
import CTAButtons from "../components/CTAButtons";
import "../styles/main.css";
import logo from "../TechSwittrix.png"; // <-- your full TST logo in src/

const Portfolio = () => {
  const projectsByField = {
    "Graphic Design": [
      { title: "TechSwiftTrix Logo", img: logo }, // Show full logo
      { title: "Social Media Banner - TrendyShop", img: "https://via.placeholder.com/250x150" }
    ],
    "Website Testing": [
      { title: "E-commerce Bug Report", img: "https://via.placeholder.com/250x150" },
      { title: "Performance Test - StartupSite", img: "https://via.placeholder.com/250x150" }
    ],
    "Writing & Editing": [
      { title: "Blog Article Sample", img: "https://via.placeholder.com/250x150" },
      { title: "Website Content Sample", img: "https://via.placeholder.com/250x150" }
    ],
    "Mobile App Development": [
      { title: "Android App Screenshot - TaskManager", img: "https://via.placeholder.com/250x150" },
      { title: "Firebase Integration Demo", img: "https://via.placeholder.com/250x150" }
    ]
  };

  const fieldColors = {
    "Graphic Design": "#FF6F61",
    "Website Testing": "#3498DB",
    "Writing & Editing": "#F1C40F",
    "Mobile App Development": "#2ECC71"
  };

  const whatsappNumber = "254116698540";
  const emailAddress = "info@techswifttrix.com";

  return (
    <div className="container" style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h1>Portfolio</h1>
      <p>Check out our professional work in each field.</p>

      {Object.keys(projectsByField).map(field => (
        <div key={field} style={{ marginTop: "50px" }}>
          <h2 style={{ color: fieldColors[field], marginBottom: "20px" }}>{field}</h2>

          {/* Section CTA Button */}
          <div className="cta-button-container" style={{ marginBottom: "20px" }}>
            <CTAButtons service={field} />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {projectsByField[field].map(project => {
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello Joshua, I am interested in your project: ${project.title}`
              )}`;

              const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
                `Project Inquiry: ${project.title}`
              )}&body=${encodeURIComponent(
                `Hello Joshua,\n\nI am interested in your project: ${project.title}.\n\nPlease contact me.\n\nThank you.`
              )}`;

              return (
                <div
                  key={project.title}
                  className="portfolio-card"
                  style={{
                    backgroundColor: fieldColors[field],
                    color: "#fff",
                    width: "250px",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: field === "Graphic Design" ? "auto" : "150px",
                      objectFit: "contain",
                      borderRadius: "5px",
                      boxShadow: field === "Graphic Design" ? "0 0 15px rgba(0,255,255,0.6)" : "none",
                      padding: field === "Graphic Design" ? "10px" : "0",
                    }}
                  />
                  <h3 style={{ marginTop: "10px" }}>{project.title}</h3>

                  {/* Single CTA buttons per project */}
                  <div className="cta-button-container" style={{ marginTop: "10px" }}>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <button className="cta-button whatsapp">WhatsApp</button>
                    </a>
                    <a href={emailLink}>
                      <button className="cta-button email">Email</button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
