import React from "react";
import "../styles/main.css";

const ServicesCyber = () => {
  const services = [
    {
      title: "Government & Official Services",
      items: [
        "KRA iTax registration, returns & PIN services",
        "HELB loan application & compliance",
        "NHIF & NSSF registration and updates",
        "Passport & Good Conduct applications",
        "eCitizen & NTSA services",
        "Birth certificate application",
        "Visa application assistance",
      ],
      colorClass: "blue",
    },
    {
      title: "Business & Professional Services",
      items: [
        "Business name & company registration",
        "CR12 & tax compliance certificates",
        "KRA VAT registration",
        "Withholding tax services",
        "Business permits assistance",
      ],
      colorClass: "red",
    },
    {
      title: "Job & Education Services",
      items: [
        "CV typing & professional formatting",
        "Cover letter writing",
        "Online job applications",
        "University & KUCCPS applications",
        "Online exam registrations",
      ],
      colorClass: "yellow",
    },
    {
      title: "Document & Typing Services",
      items: [
        "Document typing & editing",
        "Form filling (online & offline)",
        "PDF scanning, editing, merging & conversion",
        "Document formatting",
      ],
      colorClass: "green",
    },
    {
      title: "Online & Digital Services",
      items: [
        "Email creation & setup",
        "Online account setup & recovery",
        "Password recovery assistance",
        "Social media account setup",
        "Online form submissions",
      ],
      colorClass: "purple",
    },
  ];

  const whatsappNumber = "254116698540"; 
  const emailAddress = "joshuamuuo234@gmail.com";

  return (
    <div className="AppContent container">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Cyber Services
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
              className={`service-card ${service.colorClass} landing-card`}
              style={{ animationDelay: `${0.2 * index}s` }}
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

export default ServicesCyber;
