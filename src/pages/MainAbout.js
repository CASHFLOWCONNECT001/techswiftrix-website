import React from "react";
import SEO from "../components/SEO"; // ✅ ADD SEO
import joshuaPhoto from "../joshua.png";

const MainAbout = () => {
  return (
    <>
      {/* ✅ SEO FOR GOOGLE */}
      <SEO path="/main-about" />

      <div
        className="container"
        style={{
          padding: "80px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Header / Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Welcome to <strong>TECHSWITTRIX</strong>
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            We provide <strong>professional digital services</strong> and{" "}
            <strong>solutions</strong> to help you and your business succeed
            online.
          </p>
        </div>

        {/* About the Company */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            About TechSwiftTrix
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            At <strong>TechSwiftTrix</strong>, our mission is to make technology
            simple, accessible, and professional for everyone. Whether you are a
            small business, a freelancer, or an individual looking for digital
            services, we have you covered.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Our services include <strong>Website Design</strong>,{" "}
            <strong>Mobile App Development</strong>,{" "}
            <strong>Graphic Design</strong>,{" "}
            <strong>Writing Services</strong>, and{" "}
            <strong>Cyber Services</strong> such as document processing and
            online support.
          </p>
        </div>

        {/* Founder / CEO Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          <img
            src={joshuaPhoto}
            alt="Joshua Ngala, Founder & CEO of TechSwiftTrix"
            style={{
              width: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          />
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
              Joshua Ngala
            </h2>
            <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
              <strong>Founder & CEO</strong>
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Joshua Ngala is the visionary behind TechSwiftTrix, dedicated to
              making technology easy and accessible for businesses and
              individuals. Connect with him on{" "}
              <a
                href="https://www.linkedin.com/in/joshua-ngala-6440633a8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>

        {/* Highlight Services */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          {[
            "Website Design",
            "Mobile App Development",
            "Graphic Design",
            "Writing Services",
            "Cyber Services",
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
                borderRadius: "10px",
                padding: "20px",
                minWidth: "180px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                fontWeight: "bold",
              }}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            How to Use TechSwiftTrix
          </h2>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
<iframe
  src="https://www.youtube.com/embed/WRGlO9lV6_8"
  title="TechSwiftTrix Demo"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "0",
  }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

          </div>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <button
            onClick={() => (window.location.href = "/services")}
            style={{
              backgroundColor: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "15px 30px",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Explore Our Services &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default MainAbout;
