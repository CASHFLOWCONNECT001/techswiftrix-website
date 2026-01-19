import React from "react";

const About = () => {
  return (
    <div
      className="container"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#ff6600" }}>About Me</h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Hello! I am <strong>Joshua Ngala</strong>, a <strong>professional freelancer</strong> specializing in 
        <strong> Graphic Design</strong>, <strong>Website Development & Testing</strong>, 
        <strong> Writing & Editing</strong>, and <strong>Mobile App Development</strong>.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "20px" }}>
        My work philosophy: <strong>deliver high-quality digital solutions efficiently and professionally</strong>. 
        I help clients achieve their goals with <strong>honest, reliable, and innovative work</strong>.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "20px" }}>
        With over <strong>2 years of experience</strong> in freelancing, I have successfully completed projects for 
        individuals and businesses, helping them <strong>grow their digital presence</strong> and achieve results.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "30px", color: "#0077e6" }}>
        Feel free to <strong>contact me</strong> for collaborations, projects, or just to say hello!
      </p>
    </div>
  );
};

export default About;
