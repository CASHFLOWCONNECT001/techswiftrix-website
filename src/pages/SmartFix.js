import React from "react";
import "../styles/main.css";

const SmartFix = () => {
  const categories = [
    {
      title: "📱 Mobile Phones",
      description: "Software updates, backups, and phone optimization services.",
      colorClass: "red",
      items: [
        "Phone Unlocking & Flashing",
        "Software Updates",
        "Data Backup & Recovery",
        "Consultation (From Ksh 200)",
      ],
    },
    {
      title: "📺 Music Systems / TV",
      description: "Software setup and configuration for entertainment systems.",
      colorClass: "yellow",
      items: [
        "Smart TV Configuration",
        "Home Theatre Setup (software setup)",
        "Bluetooth & Wi-Fi Sync",
        "Decoder / Box Connections",
        "Consultation (From Ksh 200)",
      ],
    },
    {
      title: "🧩 Software / Technologies",
      description: "Boost your digital power with advanced software solutions.",
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
        <p>Fast & Friendly Software & Digital Support</p>
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
