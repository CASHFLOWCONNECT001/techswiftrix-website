import React, { useState } from "react";
import "../styles/main.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "254116698540";
  const emailAddress = "joshuamuuo234@gmail.com";

  const handleWhatsApp = () => {
    const text = `Hello Joshua, my name is ${name}. ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleEmail = () => {
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailLink);
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h1>Contact Me</h1>
      <p>Fill the form and reach out. I respond within 24 hours.</p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        rows="6"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <div className="cta-button-container" style={{ justifyContent: "center" }}>
        <button className="cta-button whatsapp" onClick={handleWhatsApp}>Send via WhatsApp</button>
        <button className="cta-button email" onClick={handleEmail}>Send via Email</button>
      </div>
    </div>
  );
};

export default Contact;
