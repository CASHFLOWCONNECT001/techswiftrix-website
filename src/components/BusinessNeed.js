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
        "A website is your digital headquarters. It builds credibility, works for you 24/7, showcases your services clearly, and converts visitors into paying customers. Without a website, your business loses trust and visibility in today’s digital-first world.",
    },
    {
      title: "Your Business Needs a Mobile App",
      imageSrc: "/mobile-app.svg",
      content:
        "Mobile apps place your business directly in your customers’ hands. They increase engagement, speed up service delivery, enable notifications, and strengthen customer loyalty—giving you a competitive edge in a mobile-driven market.",
    },
    {
      title: "Digital Marketing is Essential",
      imageSrc: "/marketing.svg",
      content:
        "Great products mean nothing if no one sees them. Digital marketing uses SEO, social media, and targeted campaigns to attract the right audience, generate leads, and consistently grow your brand and revenue online.",
    },
    {
      title: "Graphic Design Matters",
      imageSrc: "/graphic-design.svg",
      content:
        "Visuals shape first impressions. Professional graphic design strengthens brand identity, improves recognition, and communicates trust instantly—making your business look established, credible, and memorable.",
    },
    {
      title: "Cybersecurity Protection",
      imageSrc: "/cybersecurity.svg",
      content:
        "Cyber threats can destroy trust overnight. Strong cybersecurity protects sensitive business and customer data, prevents system breaches, and ensures compliance—keeping your operations safe and your reputation intact.",
    },
    {
      title: "E-commerce Solutions",
      imageSrc: "/ecommerce.svg",
      content:
        "E-commerce allows your business to sell anytime, anywhere. With secure payment systems and optimized user experience, you can expand your market reach, automate sales, and increase revenue without physical limitations.",
    },
    {
      title: "Customer Relationship Management",
      imageSrc: "/crm.svg",
      content:
        "A CRM system helps you understand your customers better. It centralizes client data, tracks interactions, improves follow-ups, and boosts customer satisfaction—turning one-time buyers into loyal clients.",
    },
    {
      title: "Cloud Storage & Collaboration",
      imageSrc: "/cloud.svg",
      content:
        "Cloud solutions enable secure data storage, remote access, and seamless collaboration. Your team can work efficiently from anywhere while keeping files protected, organized, and always available.",
    },
    {
      title: "Data Analytics & Insights",
      imageSrc: "/data-analytics.svg",
      content:
        "Data-driven decisions win. Analytics tools help you understand customer behavior, measure performance, identify opportunities, and optimize strategies—so your business grows based on facts, not guesswork.",
    },
    {
      title: "24/7 IT Support",
      imageSrc: "/it-support.svg",
      content:
        "Technology issues shouldn’t stop your business. Reliable IT support ensures fast problem resolution, system stability, and continuous operations—so you stay focused on growth, not technical setbacks.",
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
