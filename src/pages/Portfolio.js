import React from "react";
import CTAButtons from "../components/CTAButtons";
import "../styles/main.css";
import logo from "../TechSwittrix.png";

const Portfolio = () => {
  const projectsByField = {
    "Graphic Design": [
      { title: "TechSwiftTrix Logo", img: logo },
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

  const whatsappNumber = "254116698540";
  const emailAddress = "info@techswifttrix.com";

  // Unique gradient for each card (brand palette)
  const cardGradients = [
    "linear-gradient(135deg, #06b6d4, #a855f7)",      // Electric Blue → Violet
    "linear-gradient(135deg, #06b6d4, #ec4899)",      // Electric Blue → Magenta
    "linear-gradient(135deg, #a855f7, #ec4899)",      // Violet → Magenta
    "linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)" // Blue → Violet → Magenta
  ];

  let gradientIndex = 0; // for cycling gradients

  return (
    <div className="container" style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h1 style={{ color: "black" }}>Portfolio</h1>
      <p style={{ color: "black" }}>Check out our professional work in each field.</p>

      {Object.keys(projectsByField).map(field => (
        <div key={field} style={{ marginTop: "50px" }}>
          {/* Field Title */}
          <h2 style={{ color: "black", fontWeight: "700", fontSize: "2rem", marginBottom: "20px" }}>
            {field}
          </h2>

          {/* Section CTA Button */}
          <div className="cta-button-container" style={{ marginBottom: "20px" }}>
            <CTAButtons service={field} />
          </div>

          {/* Projects Cards */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {projectsByField[field].map(project => {
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello TechSwiftTrix Team, I am interested in your project: ${project.title}`
              )}`;

              const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
                `Project Inquiry: ${project.title}`
              )}&body=${encodeURIComponent(
                `Hello TechSwiftTrix Team,\n\nI am interested in your project: ${project.title}.\n\nPlease contact me.\n\nThank you.`
              )}`;

              // pick gradient for this card
              const cardGradient = cardGradients[gradientIndex % cardGradients.length];
              gradientIndex++;

              return (
                <div
                  key={project.title}
                  className="portfolio-card"
                  style={{
                    background: cardGradient,
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.25), 0 0 20px rgba(6,182,212,0.3)",
                    width: "250px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.3s",
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                      borderRadius: "5px",
                      boxShadow: "0 0 15px rgba(6,182,212,0.5)",
                      padding: "5px",
                      transition: "box-shadow 0.3s",
                    }}
                  />
                  <h3
                    style={{
                      marginTop: "10px",
                      color: "black",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      textAlign: "center"
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Single CTA buttons per project */}
                  <div className="cta-button-container" style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
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
