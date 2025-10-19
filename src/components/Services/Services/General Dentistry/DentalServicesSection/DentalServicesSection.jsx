import React from "react";
import "./DentalServicesSection.css";

const DentalServicesSection = () => {
  const services = [
    {
      title: "Routine Exams & Cleanings",
      description:
        "Keep your teeth and gums healthy with regular check-ups and cleanings.",
    },
    {
      title: "Digital X-rays & Diagnostics",
      description:
        "Quick, safe imaging to detect hidden dental issues early.",
    },
    {
      title: "Tooth-Colored Fillings",
      description:
        "Natural-looking solutions to treat cavities and restore strength to your teeth.",
    },
    {
      title: "Tooth Extractions",
      description:
        "Comfortable, gentle removal of damaged or problematic teeth.",
    },
    {
      title: "Root Canal Therapy",
      description:
        "Save infected teeth with this pain-relieving, tooth-saving procedure.",
    },
    {
      title: "Gum Disease Treatment",
      description:
        "Non-surgical and deep-cleaning options to treat gingivitis and periodontitis.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalServicesSection;
