import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import CTAButtons from "../components/CTAButtons";
import Navbar from "../components/Navbar";
import "../styles/main.css";

/* =======================
   SINGLE SERVICE CARD
======================= */
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
    `Hello TechSwiftTrix Team,\n\nI would like to request your service: ${service.name}.\n\nThank you.`
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
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="button"
      aria-expanded={open}
      className={`service-card ${visible ? "fade-up" : ""}`}
      style={{
        width: "320px",
        borderRadius: "12px",
        padding: "20px",
        cursor: "pointer",
        border: `2px solid ${service.color}`,
        transition: "transform 0.3s, box-shadow 0.3s",
        backgroundColor: "#fff",
        boxShadow: open
          ? "0 8px 20px rgba(0,0,0,0.2)"
          : "0 5px 15px rgba(0,0,0,0.1)",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ color: service.color, margin: 0 }}>{service.name}</h3>
        {open ? (
          <span style={{ fontSize: "1.2rem", color: "black" }}>▲</span>
        ) : (
          <span style={{ fontSize: "1.2rem", color: "black" }}>▼</span>
        )}
      </div>

      {open && (
        <>
          <ul style={{ marginTop: "12px", paddingLeft: 0 }}>
            {service.subcategories.map((item, idx) => (
              <li key={idx} style={{ listStyle: "none", marginBottom: "8px" }}>
                <span
                  style={{
                    backgroundColor: service.color,
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <CTAButtons whatsappLink={whatsappLink} emailLink={emailLink} />
        </>
      )}
    </div>
  );
};

/* =======================
   MAIN SERVICES PAGE
======================= */
const ServicesMain = () => {
  const servicesData = [
    {
      name: "Creative Design Services",
      color: "#FF6F61",
      subcategories: ["Graphic Design", "UI/UX Design", "Branding", "Motion Graphics", "Illustrations"],
    },
    {
      name: "Website Solutions",
      color: "#3498DB",
      subcategories: ["Website Development", "Full-Stack Development", "SEO", "Testing & QA", "Maintenance"],
    },
    {
      name: "Content Services",
      color: "#F1C40F",
      subcategories: ["Writing", "Editing", "Copywriting", "Blog Articles", "Proofreading"],
    },
    {
      name: "Mobile App Solutions",
      color: "#2ECC71",
      subcategories: ["Mobile App Development", "UI/UX Design", "Testing", "Deployment", "Maintenance"],
    },
  ];

  return (
    <>
      <SEO path="/techswittrix/services" />
      <Navbar />

      <div className="AppContent" style={{ width: "100%", marginTop: "20px" }}>
        {/* HERO SECTION */}
        <div
          style={{
            marginTop: "30px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <h1>
            We help businesses design, test, and build high-quality digital products.
          </h1>
          <p style={{ fontSize: "20px", margin: "20px 0 40px" }}>
            Offering professional services in Graphic Design, Website Testing, Writing & Editing, and Mobile App Development.
          </p>

          {/* QUICK SERVICE CARDS - SAME GRADIENT & 3+1 ROW WITH 4TH CENTERED */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    justifyItems: "center",
    marginBottom: "60px",
  }}
>
  {servicesData.slice(0, 3).map((service) => (
    <div
      key={service.name}
      style={{
        background: "linear-gradient(135deg, #0ff, #9b59b6)",
        color: "#fff",
        width: "250px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        textAlign: "center",
        cursor: "default",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{service.name}</h3>
      <p style={{ margin: 0 }}>Scroll down for details</p>
    </div>
  ))}
  {/* 4th card centered */}
  <div
    style={{
      background: "linear-gradient(135deg, #0ff, #9b59b6)",
      color: "#fff",
      width: "250px",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
      textAlign: "center",
      cursor: "default",
      transition: "transform 0.3s, box-shadow 0.3s",
      gridColumn: "2 / 3", // centers the 4th card
    }}
  >
    <h3 style={{ margin: "0 0 10px 0" }}>{servicesData[3].name}</h3>
    <p style={{ margin: 0 }}>Scroll down for details</p>
  </div>
</div>


          {/* DETAILED SERVICES SECTION */}
          <div
            style={{
              padding: "80px 20px",
              backgroundColor: "#f5f5f5",
              textAlign: "center",
            }}
          >
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
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
