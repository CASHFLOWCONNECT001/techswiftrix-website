import React from "react";

const Services = () => {
  const services = [
    {
      title: "Graphic Design",
      items: ["Logos", "Social media designs", "Banners", "Brand visuals"]
    },
    {
      title: "Website Testing",
      items: ["Manual testing", "Bug reports", "UX testing", "Performance testing"]
    },
    {
      title: "Writing & Editing",
      items: ["Articles", "Website content", "Editing & proofreading"]
    },
    {
      title: "Mobile App Development",
      items: ["Android apps", "Bug fixing", "Feature additions", "Firebase integration"]
    }
  ];

  const whatsappNumber = "254116698540"; // WhatsApp number (without +)
  const emailAddress = "joshuamuuo234@gmail.com";

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Services</h1>

      {services.map(service => {
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hello Joshua, I would like to request: ${service.title}`
        )}`;

        const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
          `Service Request: ${service.title}`
        )}&body=${encodeURIComponent(
          `Hello Joshua,\n\nI would like to request your service: ${service.title}.\n\nPlease contact me.\n\nThank you.`
        )}`;

        return (
          <div key={service.title} className="service-card">
            <h2>{service.title}</h2>
            <ul>
              {service.items.map(item => <li key={item}>{item}</li>)}
            </ul>

            {/* Buttons with updated bright colors */}
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
    </div>
  );
};

export default Services;
