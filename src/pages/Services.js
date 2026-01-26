import React from "react";
import "../styles/main.css";

const Services = () => {
  const services = [
    {
      title: "Graphic Design",
      items: [
        "Logos",
        "Social media designs",
        "Banners",
        "Brand visuals",
        "Flyers",
        "Business cards",
      ],
      colorClass: "red",
    },
    {
      title: "Website Testing",
      items: [
        "Manual testing",
        "Bug reports",
        "UX testing",
        "Performance testing",
        "Cross-browser testing",
        "Responsive testing",
      ],
      colorClass: "blue",
    },
    {
      title: "Writing & Editing",
      items: [
        "Articles",
        "Website content",
        "Editing & proofreading",
        "Copywriting",
        "SEO content",
        "Blog posts",
      ],
      colorClass: "yellow",
    },
    {
      title: "Mobile App Development",
      items: [
        "Android apps",
        "iOS apps",
        "Bug fixing",
        "Feature additions",
        "Firebase integration",
        "UI/UX design",
      ],
      colorClass: "green",
    },
  ];

  const whatsappNumber = "254116698540"; 
  const emailAddress = "info@techswifttrix.com";

  return (
    <div className="AppContent container">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Services
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => {
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello TechSwiftTrix Team, I would like to request: ${service.title}`
          )}`;

          const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            `Service Request: ${service.title}`
          )}&body=${encodeURIComponent(
            `Hello TechSwiftTrix Team,\n\nI would like to request your service: ${service.title}.\n\nPlease contact me.\n\nThank you.`
          )}`;

          return (
            <div
              key={service.title}
              className={`service-card ${service.colorClass} landing-card`}
              style={{ animationDelay: `${0.2 * index}s` }} // subtle stagger
            >
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="cta-button-container" style={{ marginTop: "20px" }}>
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
    </div>
  );
};

export default Services;
