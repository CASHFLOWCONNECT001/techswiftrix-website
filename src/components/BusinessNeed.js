// components/BusinessNeed.js
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Single card component
const SingleBusinessNeed = ({ imageSrc, title, content }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  // Animate on scroll
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
      onClick={() => setOpen(!open)}
      className={`business-card ${visible ? "fade-up" : ""}`}
      style={{
        width: "280px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        marginBottom: "20px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{ width: "100px", marginBottom: "15px" }}
      />
      <h3 style={{ marginBottom: "10px", fontSize: "1.1rem", color: "#333" }}>
        {title}
      </h3>
      <div style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.4",
            color: "#555",
            marginTop: "10px",
          }}
        >
          {content}
        </p>
      )}
    </div>
  );
};

// Main Business Needs Section
const BusinessNeedsSection = () => {
  const businessNeeds = [
    {
      title: "Your Business Needs a Website",
      imageSrc: "/website.svg",
      content:
        "A professional website builds trust, showcases your products/services, and helps you reach more customers online.",
    },
    {
      title: "Your Business Needs a Mobile App",
      imageSrc: "/mobile-app.svg",
      content:
        "Mobile apps improve customer engagement, make services easily accessible, and increase brand loyalty.",
    },
    {
      title: "Digital Marketing is Essential",
      imageSrc: "/marketing.svg",
      content:
        "Social media, SEO, and email marketing help you reach your target audience and grow your business faster.",
    },
    {
      title: "Graphic Design Matters",
      imageSrc: "/graphic-design.svg",
      content:
        "Strong visuals communicate your brand message, increase recognition, and create a professional look.",
    },
    {
      title: "Cybersecurity Protection",
      imageSrc: "/cybersecurity.svg",
      content:
        "Protect your business data and your customers from cyber attacks with proper cybersecurity measures.",
    },
    {
      title: "E-commerce Solutions",
      imageSrc: "/ecommerce.svg",
      content:
        "Sell products online securely with an e-commerce website or app tailored to your business needs.",
    },
    {
      title: "Customer Relationship Management",
      imageSrc: "/crm.svg",
      content:
        "Manage clients, track interactions, and improve satisfaction with a CRM system designed for your business.",
    },
    {
      title: "Cloud Storage & Collaboration",
      imageSrc: "/cloud.svg",
      content:
        "Store, access, and share your business files securely from anywhere using cloud services.",
    },
    {
      title: "Data Analytics & Insights",
      imageSrc: "/data-analytics.svg",
      content:
        "Understand your customers, track performance, and make informed decisions with analytics tools.",
    },
    {
      title: "24/7 IT Support",
      imageSrc: "/it-support.svg",
      content:
        "Ensure your business runs smoothly with ongoing technical support and fast problem resolution.",
    },
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ marginBottom: "40px", color: "#2563eb" }}>
        Why Your Business Needs This
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {businessNeeds.map((need, index) => (
          <SingleBusinessNeed
            key={index}
            imageSrc={need.imageSrc}
            title={need.title}
            content={need.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessNeedsSection;
