import React from "react";

const CTAButtons = ({ service }) => {
  const whatsappNumber = "254116698540";
  const emailAddress = "joshuamuuo234@gmail.com";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Joshua, I am interested in your service: ${service}`
  )}`;

  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Service Request: ${service}`
  )}&body=${encodeURIComponent(
    `Hello Joshua,\n\nI would like to request your service: ${service}.\n\nPlease contact me.\n\nThank you.`
  )}`;

  return (
    <div className="cta-button-container">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="cta-button whatsapp">WhatsApp</button>
      </a>
      <a href={emailLink}>
        <button className="cta-button email">Email</button>
      </a>
    </div>
  );
};

export default CTAButtons;
