import React from "react";
import "./ServicesCards.css";

export default function ServicesCards() {
  const services = [
    {
      icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-1.png",
      title: "General Dentistry",
      description: "Complete oral care for every smile with cleanings, exams, and more.",
    },
    {
      icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-2.png",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile’s beauty with whitening, veneers, and more.",
    },
    {
      icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-3.png",
      title: "Pediatric Dentistry",
      description: "Gentle and fun dental care for kids to grow healthy, happy smiles.",
    },
    {
      icon: "https://madebydesignesia.com/themes/dentia/images/icons/tooth-4.png",
      title: "Restorative Dentistry",
      description: "Repair and restore your teeth for lasting comfort and function.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-plus">+</button>
          </div>
        ))}
      </div>

      <button className="view-all-btn">View All Services</button>
    </section>
  );
}
