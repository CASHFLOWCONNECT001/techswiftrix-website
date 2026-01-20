import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/main.css";

const SmartFix = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "📱 Mobile Devices",
      description: "Remote software support for phones and tablets.",
      colorClass: "#FF4C4C",
      items: [
        "Phone Unlocking & Flashing",
        "Software Updates",
        "Data Backup & Recovery",
        "Remote Troubleshooting & Optimization",
      ],
    },
    {
      title: "🧩 Software & Productivity",
      description: "Boost your workflow with advanced software solutions.",
      colorClass: "#28A745",
      items: [
        "Windows & Microsoft Office Setup",
        "Antivirus & Cybersecurity Setup",
        "Data Backup Automation & Cloud Storage",
        "Website Design & Development",
        "Mobile App Development",
        "SEO Optimization",
        "Social Media Branding",
      ],
      },
    {
      title: "☁️ Cloud & Online Services",
      description: "Manage files, collaboration, and online systems remotely.",
      colorClass: "#007BFF",
      items: [
        "Cloud Storage Setup (Google Drive, OneDrive, Dropbox)",
        "Remote Collaboration Tools (Slack, Teams, Zoom)",
        "Email Setup & Migration",
        "File Sharing & Automation",
        "Remote IT Monitoring",
      ],
    },
    {
      title: "📞 Remote Consultation",
      description: "Get guidance and solutions without leaving your home.",
      colorClass: "#FF7F50", // orange
      items: [
        "Online Tutorials & Guidance",
        "Troubleshooting via Call or Video",
        "Assistance with KRA, HELB, NTSA Forms",
        "Digital Services Consultation",
      ],
    },
    {
      title: "💬 Fast Support & Requests",
      description: "Reach us quickly via chat, WhatsApp, or email.",
      colorClass: "#6F42C1",
      items: [
        "24/7 Remote Assistance",
        "WhatsApp & Email Service Requests",
        "Screenshot & File Sharing Support",
        "Step-by-step Online Guidance",
      ],
    },
  ];

  const whatsappNumber = "254116698540"; // Cyber contact
  const emailAddress = "joshuamuuo234@gmail.com";

  return (
    <div className="smartfix-page container">
      {/* Header with Back Arrow */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          padding: "12px 20px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "6px",
          marginBottom: "15px",
        }}
      >
        <FaArrowLeft
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <h1 style={{ fontSize: "1.4rem", margin: 0, color: "#fff" }}>
          SmartFix Remote Software Services
        </h1>
      </header>

      {/* Sub-header / Description */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p style={{ fontSize: "1rem", maxWidth: "700px", margin: "0 auto" }}>
          We solve <strong>software issues</strong>, manage <strong>online forms</strong>, and boost your <strong>digital presence</strong>, <strong>quickly</strong>, <strong>securely</strong>, and <strong>remotely</strong> for <strong>individuals</strong> and <strong>businesses</strong> across <strong>Kenya</strong>.
        </p>
      </div>

      {/* Service Category Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {services.map((service, index) => {
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello Joshua, I would like to request: ${service.title}`
          )}`;
          const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            `Service Request: ${service.title}`
          )}&body=${encodeURIComponent(
            `Hello Joshua,\n\nI would like to request your service: ${service.title}.\n\nPlease contact me.\n\nThank you.`
          )}`;

          return (
            <div
              key={service.title}
              className="service-card landing-card"
              style={{
                backgroundColor: service.colorClass,
                color: "#fff",
                minWidth: "220px",
                maxWidth: "280px",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                animationDelay: `${0.2 * index}s`,
              }}
            >
              <h2 style={{ fontSize: "1.15rem", fontWeight: "bold" }}>
                {service.title}
              </h2>
              <p style={{ fontSize: "0.95rem", margin: "10px 0" }}>
                {service.description}
              </p>
              <ul style={{ fontSize: "0.85rem", marginLeft: "20px" }}>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="cta-button-container" style={{ marginTop: "15px" }}>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button className="cta-button whatsapp">Request via WhatsApp</button>
                </a>
                <a href={emailLink}>
                  <button className="cta-button email">Request via Email</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <p>© 2025 SmartFix — Remote Digital Solutions</p>
      </footer>
    </div>
  );
};

export default SmartFix;
