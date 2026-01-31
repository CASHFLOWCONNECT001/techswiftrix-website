import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import SEO from "../components/SEO"; // ✅ SEO for Google
import "../styles/main.css";

// Single card component with WhatsApp & Email
const SingleService = ({ imageSrc, title, content }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  const whatsappNumber = "254116698540";
  const emailAddress = "info@techswifttrix.com";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello TechSwifttrix Cyber Team, I want to request: ${title}`
  )}`;

  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Service Request: ${title}`
  )}&body=${encodeURIComponent(
    `Hello TechSwifttrix Cyber Team,\n\nI would like to request your service: ${title}.\n\nPlease contact me.\n\nThank you.`
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
      onClick={() => setOpen(!open)}
      className={`service-card ${visible ? "fade-up" : ""}`}
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
        style={{ width: "80px", marginBottom: "15px" }}
      />
      <h3 style={{ marginBottom: "10px", fontSize: "1.1rem", color: "black" }}>
        {title}
      </h3>
      <div style={{ fontSize: "20px", color: "black", marginBottom: "10px" }}>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.4",
              color: "black",
              marginTop: "10px",
            }}
          >
            {content}
          </p>

          {/* WhatsApp & Email buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "15px",
              flexWrap: "wrap",
            }}
          >
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

// Main HomeCyber Page
const HomeCyber = () => {
  const navigate = useNavigate();

  // Categories (optional, can keep for top summary)
  const servicesCategories = [
    { name: "Government & Official Services", color: "#3498DB" },
    { name: "Business & Professional Services", color: "#FF6F61" },
    { name: "Job & Education Services", color: "#F1C40F" },
    { name: "Document & Typing Services", color: "#2ECC71" },
    { name: "Online & Digital Services", color: "#9B59B6" },
  ];

  // Full services data
  const services = [
    {
      title: "Government & Official Services",
      imageSrc: "/icons/government.svg",
      content:
        "TechSwifttrix handles all government registrations and identity services, including KRA iTax & PIN, NHIF & NSSF updates, passport & good conduct, eCitizen & NTSA services, birth certificates, and visa assistance.",
    },
    {
      title: "Business & Professional Services",
      imageSrc: "/icons/business.svg",
      content:
        "TechSwifttrix manages business compliance: business & company registration, CR12 certificates, VAT, withholding tax, and permits assistance.",
    },
    {
      title: "Job & Employment Services",
      imageSrc: "/icons/jobs.svg",
      content:
        "TechSwifttrix supports job applications and professional cover letter writing to improve your career opportunities.",
    },
    {
      title: "Career & CV Services",
      imageSrc: "/icons/cv.svg",
      content:
        "TechSwifttrix provides CV typing and professional formatting to make your resume stand out.",
    },
    {
      title: "Education & University Applications",
      imageSrc: "/icons/education.svg",
      content:
        "Apply confidently with TechSwifttrix — university and KUCCPS applications plus HELB all done accurately and on time.",
    },
    {
      title: "Examination Registration Services",
      imageSrc: "/icons/exam.svg",
      content:
        "TechSwifttrix handles online exam registrations correctly to avoid mistakes and delays.",
    },
    {
      title: "Document Typing & Editing",
      imageSrc: "/icons/typing.svg",
      content:
        "TechSwifttrix types, edits, and formats your documents professionally for personal or official purposes.",
    },
    {
      title: "Form Filling Services",
      imageSrc: "/icons/forms.svg",
      content:
        "TechSwifttrix fills out online and offline forms accurately to prevent errors and delays.",
    },
    {
      title: "PDF & Document Conversion",
      imageSrc: "/icons/pdf.svg",
      content:
        "TechSwifttrix scans, edits, merges, and converts PDFs to maintain a professional standard for all your documents.",
    },
    {
      title: "Email Setup & Management",
      imageSrc: "/icons/email.svg",
      content:
        "TechSwifttrix creates and configures your email accounts for smooth communication and productivity.",
    },
    {
      title: "Online Account Setup",
      imageSrc: "/icons/account.svg",
      content:
        "TechSwifttrix assists with setting up and recovering online accounts efficiently and securely.",
    },
    {
      title: "Account & Password Recovery",
      imageSrc: "/icons/recovery.svg",
      content:
        "TechSwifttrix recovers lost passwords or accounts safely to prevent workflow interruptions.",
    },
    {
      title: "Social Media Account Setup",
      imageSrc: "/icons/social.svg",
      content:
        "TechSwifttrix sets up professional social media accounts to help you stay connected and visible online.",
    },
    {
      title: "Online Form Submissions",
      imageSrc: "/icons/online-form.svg",
      content:
        "TechSwifttrix ensures accurate and timely online form submissions for official or personal tasks.",
    },
    {
      title: "General Cyber Services",
      imageSrc: "/icons/cyber.svg",
      content:
        "TechSwifttrix provides general cyber guidance and assistance to keep your digital life organized and secure.",
    },
    {
      title: "IT Support & Assistance",
      imageSrc: "/icons/support.svg",
      content:
        "TechSwifttrix offers IT support and troubleshooting to keep your systems running smoothly at all times.",
    },
  ];

  return (
    <>
      {/* ✅ SEO FOR GOOGLE */}
      <SEO path="/home-cyber" />

      <div
        className="AppContent"
        style={{ width: "100%", position: "relative", textAlign: "center" }}
      >
        {/* Back arrow below navbar */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "20px",
            cursor: "pointer",
            color: "black",
          }}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={24} />
        </div>

        {/* Main content wrapper */}
        <div
          style={{
            marginTop: "60px",
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1 style={{ color: "black" }}>Welcome to TechSwiftTrix Cyber Services</h1>

          <p style={{ fontSize: "20px", margin: "20px 0 40px 0", color: "black" }}>
            We provide professional online cyber services including KRA, HELB,
            NTSA, document typing, CV formatting, and more.
          </p>

          {/* Services category cards (optional summary) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              paddingBottom: "40px",
            }}
          >
            {servicesCategories.map((category) => (
              <div
                key={category.name}
                className="card"
                style={{
                  backgroundColor: category.color,
                  color: "black",
                  minWidth: "200px",
                  maxWidth: "250px",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  cursor: "default",
                }}
              >
                <h3>{category.name}</h3>
                <p>See details below</p>
              </div>
            ))}
          </div>

          {/* Full Services List with responsive 3-2-1 grid */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginTop: "40px",
              paddingBottom: "60px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  flex: "0 1 calc(33.333% - 20px)", // 3 per row desktop
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
                className="service-wrapper"
              >
                <SingleService
                  imageSrc={service.imageSrc}
                  title={service.title}
                  content={service.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 1024px) {
            .service-wrapper {
              flex: 0 1 calc(50% - 20px); /* 2 per row tablet */
            }
          }

          @media (max-width: 640px) {
            .service-wrapper {
              flex: 0 1 100%; /* 1 per row mobile */
            }
          }
        `}
      </style>
    </>
  );
};

export default HomeCyber;
