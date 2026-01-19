import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.css";

const SmartFix = () => {
  const categories = [
    {
      title: "📱 Mobile Phones",
      description: "We provide the latest smartphones and repair services.",
      colorClass: "red",
      items: [
        "Phone Screen Replacement",
        "Battery Change & Optimization",
        "Phone Unlocking & Flashing",
        "iPhone & Android Repairs",
        "Mobile Accessories",
        "Camera & Speaker Repairs",
        "Software Updates",
        "Data Backup & Recovery",
        "New & Refurbished Phone Sales",
        "Consultation (From Ksh 200)",
      ],
    },
    {
      title: "🖥️💻 Laptops & Computers",
      description: "Professional computer support and hardware solutions.",
      colorClass: "blue",
      items: [
        "Laptop Screen Replacement",
        "Keyboard & Battery Repairs",
        "Windows Installation",
        "Software Troubleshooting",
        "Data Recovery & Backup",
        "Networking & Wi-Fi Setup",
        "Custom PC Builds",
        "Hardware Upgrades",
        "Performance Optimization",
        "Consultation (From Ksh 200)",
      ],
    },
    {
      title: "📺 Music Systems / TV",
      description: "Setup, repair, and enhancement for your entertainment systems.",
      colorClass: "yellow",
      items: [
        "TV Wall Mounting",
        "Smart TV Configuration",
        "Home Theatre Setup",
        "Speaker System Wiring",
        "Sound Calibration",
        "Bluetooth & Wi-Fi Sync",
        "Remote & Sensor Fixes",
        "Decoder/Box Connections",
        "TV Screen Repairs",
        "Consultation (From Ksh 200)",
      ],
    },
    {
      title: "🧩 Software / Technologies",
      description: "Boost your digital power with our advanced software solutions.",
      colorClass: "green",
      items: [
        "All Windows Installation",
        "Microsoft Office Setup",
        "Antivirus & Protection",
        "Data Backup Automation",
        "Website Development",
        "Mobile App Development",
        "Online Presence & Advertising",
        "SEO Optimization",
        "Social Media Branding",
        "Consultation (From Ksh 200)",
      ],
    },
  ];

  const whatsappNumber = "254796675724";
  const emailAddress = "russelalmeric9@gmail.com";

  return (
    <div className="AppContainer">
      <Navbar />
      <div className="AppContent container">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Welcome to SmartFix</h1>
        <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "18px" }}>
          Choose a category to see our services
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {categories.map((category, index) => {
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello SmartFix, I am interested in: ${category.title}`
            )}`;
            const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
              `SmartFix Service Request: ${category.title}`
            )}&body=${encodeURIComponent(
              `Hello SmartFix,\n\nI am interested in your service: ${category.title}.\n\nPlease contact me.\n\nThank you.`
            )}`;

            return (
              <div
                key={category.title}
                className={`service-card ${category.colorClass}`}
                style={{ minWidth: "280px", maxWidth: "320px", flex: "1 1 280px" }}
              >
                <h2>{category.title}</h2>
                <p style={{ marginBottom: "10px", fontSize: "0.95rem" }}>{category.description}</p>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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

        {/* Chat / Contact Section */}
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2>💬 Chat With SmartFix Admin</h2>
          <textarea
            placeholder="Type your message..."
            style={{ width: "100%", maxWidth: "600px", height: "120px", margin: "10px 0", padding: "10px" }}
          ></textarea>
          <br />
          <button className="cta-button" style={{ marginBottom: "20px" }}>Send</button>
          <p>
            You can share screenshots and videos during consultation.
          </p>
          <p>
            📞 +254 796675724 | +254 729414369
          </p>
          <p>
            📧 {emailAddress}
          </p>
          <p>© 2025 SmartFix — Fast Turnaround | Smart Tech Solutions</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmartFix;
