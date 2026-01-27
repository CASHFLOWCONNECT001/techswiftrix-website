// components/ServicesMain.js
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SingleService = ({ service }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  const whatsappNumber = "254116698540";
  const emailAddress = "info@techswifttrix.com";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello TechSwiftTrix Team, I want to request: ${service.name}`
  )}`;

  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Service Request: ${service.name}`
  )}&body=${encodeURIComponent(
    `Hello TechSwiftTrix Team,\n\nI would like to request your service: ${service.name}.\n\nPlease contact me.\n\nThank you.`
  )}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`service-card ${visible ? "fade-up" : ""}`}
      style={{
        width: "320px",
        borderRadius: "12px",
        padding: "20px",
        cursor: "pointer",
        marginBottom: "20px",
        border: `2px solid ${service.color}`,
        transition: "transform 0.3s, box-shadow 0.3s",
        backgroundColor: "transparent", // removed white
      }}
      onClick={() => setOpen(!open)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: service.color, margin: 0 }}>{service.name}</h3>
        {open ? <FaChevronUp style={{ color: service.color }} /> : <FaChevronDown style={{ color: service.color }} />}
      </div>

      {open && (
        <>
          <ul style={{ marginTop: "12px", paddingLeft: "0" }}>
            {service.subcategories.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  marginRight: "8px",
                  listStyle: "none",
                }}
              >
                <span
                  style={{
                    backgroundColor: service.color,
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  backgroundColor: "#25D366",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Request via WhatsApp
              </button>
            </a>
            <a href={emailLink}>
              <button
                style={{
                  backgroundColor: "#0072c6",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Request via Email
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

const ServicesMain = () => {
  const servicesData = [
    {
      name: "Creative Design Services",
      color: "#FF6F61",
      subcategories: [
        "Graphic Design",
        "UI/UX Design",
        "Motion Graphics",
        "Visual Content Creation",
        "Branding & Identity",
        "Illustrations",
        "Photography & Editing",
      ],
    },
    {
      name: "Website Solutions",
      color: "#3498DB",
      subcategories: [
        "Website Development",
        "Full-Stack Development",
        "Testing & QA",
        "SEO & Optimization",
        "Maintenance & Updates",
        "E-commerce Setup",
        "Performance & Security",
      ],
    },
    {
      name: "Content Services",
      color: "#F1C40F",
      subcategories: [
        "Writing",
        "Editing",
        "Copywriting",
        "Content Creation",
        "Blogging & Articles",
        "Script & Newsletter Writing",
        "Proofreading & Polishing",
      ],
    },
    {
      name: "Mobile App Solutions",
      color: "#2ECC71",
      subcategories: [
        "Full-Stack App Development",
        "UI/UX Mobile Design",
        "Testing & QA",
        "Debugging & Optimization",
        "Deployment & Maintenance",
        "App Store Launch",
        "Updates & Feature Enhancements",
      ],
    },
  ];

  return (
    <div style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <h2 style={{ marginBottom: "40px", color: "#2563eb" }}>Our Services</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {servicesData.map((service, index) => (
          <SingleService key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesMain;
