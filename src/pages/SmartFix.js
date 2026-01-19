import React from "react";
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
        "Decoder / Box Connections",
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
    <div className="smartfix-page">
      {/* SmartFix Header */}
      <header className="smartfix-header">
        <h1>SmartFix</h1>
        <p>Fast & Friendly Tech Support</p>
      </header>

      <div className="container">
        {categories.map((category) => {
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello SmartFix, I am interested in: ${category.title}`
          )}`;

          const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            `SmartFix Service Request: ${category.title}`
          )}`;

          return (
            <div key={category.title} className={`service-card ${category.colorClass}`}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>

              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="cta-button-container">
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

        {/* Chat Section */}
        <div className="smartfix-chat">
          <h2>💬 Chat With SmartFix Admin</h2>
          <textarea placeholder="Type your message..." />
          <button className="cta-button">Send</button>

          <p>You can share screenshots and videos during consultation.</p>
          <p>📞 +254 796675724 | +254 729414369</p>
          <p>📧 {emailAddress}</p>
          <p>© 2025 SmartFix — Fast Turnaround | Smart Tech Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default SmartFix;
