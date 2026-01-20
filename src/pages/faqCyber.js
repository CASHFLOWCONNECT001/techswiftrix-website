import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/main.css";
import CTAButtons from "../components/CTAButtons";

const faqData = [
  {
    question: "How do I send my documents?",
    answer:
      "You can send your documents via WhatsApp or Email using the buttons on our Services page. Include all required details for faster processing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfer, and PayPal (where applicable). Payment instructions are provided once you request a service.",
  },
  {
    question: "How fast will I receive my processed documents?",
    answer:
      "We complete services in the SHORTEST TIME POSSIBLE, depending on the type of request. Complex tasks may take slightly longer.",
  },
  {
    question: "Are my documents safe with you?",
    answer:
      "Absolutely. At TechSwiftTrix, your documents are treated with confidentiality and security as a top priority.",
  },
  {
    question: "Can I request multiple services at once?",
    answer:
      "Yes! You can request multiple services in one submission. Make sure to clearly list all tasks when sending your documents.",
  },
  {
    question: "Do I need a physical visit to your cyber service?",
    answer:
      "No. Everything is 100% online. You only need to send your documents digitally, and we handle the rest.",
  },
];

const FaqCyber = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="AppContent container" style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>Frequently Asked <strong>Questions</strong></h1>
      <p style={{ fontSize: "18px", margin: "20px 0 40px 0" }}>
        Here are answers to common questions about <strong>TechSwiftTrix Cyber Services</strong>.
      </p>

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => toggleIndex(index)}
            >
              <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>{item.question}</h3>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <p style={{ marginTop: "10px", fontSize: "16px" }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="cta-button-container" style={{ marginTop: "40px" }}>
        <CTAButtons service="Send Your Documents Now" />
      </div>
    </div>
  );
};

export default FaqCyber;
