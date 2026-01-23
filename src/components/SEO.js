import React from "react";
import { Helmet } from "react-helmet";
import seoData from "../seoData";

const SEO = ({ path }) => {
  const data = seoData[path] || {
    title: "TechSwiftTrix",
    description: "Professional digital services.",
    keywords: "techswifttrix, digital services"
  };

  // Optional JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.title,
    "description": data.description,
    "url": `https://techswifttrix.com${path}`
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
