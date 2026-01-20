import React from "react";
import "../styles/main.css";
import CTAButtons from "../components/CTAButtons";

const AboutCyber = () => {
  return (
    <div className="AppContent container" style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>Welcome to <strong>TechSwiftTrix Cyber Services</strong></h1>

      <p style={{ fontSize: "18px", margin: "20px 0 40px 0" }}>
        Your online solution for <strong>government forms</strong>, <strong>document services</strong>, <strong>CVs</strong>, and more — <strong>fast</strong>, <strong>reliable</strong>, and <strong>100% online</strong>.
      </p>
{/* Who We Are */}
<h2>Who We Are</h2>
<p style={{ fontSize: "16px", marginBottom: "30px" }}>
  This <strong>Cyber service</strong> is under <strong>TechSwittrix</strong>, simplifying <strong>online forms</strong>, <strong>official documents</strong>, and <strong>digital services</strong> so <strong>businesses</strong> and <strong>individuals</strong> in Kenya can get things done faster and smarter.
</p>

      <p style={{ fontSize: "16px", marginBottom: "30px" }}>
        Our clients trust us for <strong>fast</strong>, <strong>secure</strong>, and <strong>professional</strong> service every time.
      </p>

      {/* Mission */}
      <h2>Our Mission</h2>
      <p style={{ fontSize: "16px", marginBottom: "30px" }}>
        To make essential <strong>online services</strong> accessible to everyone, providing a <strong>convenient</strong>, <strong>fast</strong>, and <strong>secure platform</strong> for all your cyber service needs.
      </p>

      {/* Vision */}
      <h2>Our Vision</h2>
      <p style={{ fontSize: "16px", marginBottom: "30px" }}>
        To be Kenya’s most <strong>trusted</strong> <strong>online cyber service provider</strong>.
      </p>

      {/* Why Choose Us */}
      <h2>Why Choose Us</h2>
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        <strong>Trustworthy:</strong> Your documents are safe with us.
      </p>
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        <strong>Fast & Efficient:</strong> Quick turnaround for all requests.
      </p>
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        <strong>Professional:</strong> High-quality service for all clients.
      </p>
      <p style={{ fontSize: "16px", marginBottom: "40px" }}>
        <strong>Accessible:</strong> 100% online, from anywhere.
      </p>

      {/* CTA */}
      <div className="cta-button-container">
        <CTAButtons service="Get Started via WhatsApp / Email" />
      </div>
    </div>
  );
};

export default AboutCyber;
