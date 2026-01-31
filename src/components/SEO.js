import React from "react";
import { Helmet } from "react-helmet";

// Upgraded SEO component without external seoData.js
const SEO = ({ path }) => {
  // Default SEO settings
  const defaultData = {
    title: "TechSwiftTrix",
    description: "Professional digital services.",
    keywords: "techswifttrix, digital services",
  };

  // Dynamically generate SEO data based on the path
  const data = (() => {
    if (!path) return defaultData;

    // Simple path-based logic for dynamic titles and descriptions
    if (path.includes("government"))
      return {
        title: "Government & Official Services - TechSwiftTrix",
        description:
          "TechSwiftTrix handles all government registrations and identity services, including KRA, NHIF, NSSF, passports, eCitizen, and NTSA.",
        keywords: "TechSwiftTrix, government services, KRA, NHIF, NSSF, passport",
      };

    if (path.includes("business"))
      return {
        title: "Business & Professional Services - TechSwiftTrix",
        description:
          "TechSwiftTrix helps with company registration, VAT, permits, CR12 certificates, and other business compliance services.",
        keywords: "TechSwiftTrix, business services, company registration, VAT, CR12",
      };

    if (path.includes("jobs") || path.includes("employment"))
      return {
        title: "Job & Employment Services - TechSwiftTrix",
        description:
          "TechSwiftTrix supports job applications, professional cover letters, and career development services.",
        keywords: "TechSwiftTrix, jobs, employment, cover letters, career services",
      };

    if (path.includes("cv") || path.includes("career"))
      return {
        title: "CV & Career Services - TechSwiftTrix",
        description:
          "Professional CV typing and formatting to help you stand out in your career applications.",
        keywords: "TechSwiftTrix, CV services, career guidance, CV formatting",
      };

    if (path.includes("education") || path.includes("university"))
      return {
        title: "Education & University Applications - TechSwiftTrix",
        description:
          "Apply confidently with TechSwiftTrix for university and KUCCPS applications plus HELB support.",
        keywords: "TechSwiftTrix, university applications, KUCCPS, HELB, education",
      };

    // Catch-all for unknown paths
    return defaultData;
  })();

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    description: data.description,
    url: `https://techswifttrix.com${path || "/"}`,
  };

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
