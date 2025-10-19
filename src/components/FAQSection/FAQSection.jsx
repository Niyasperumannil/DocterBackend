import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to visit your dentist every six months for a routine check-up and cleaning to maintain optimal oral health.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "In case of a dental emergency, contact your dentist immediately. If it’s severe, visit the nearest emergency room.",
  },
  {
    question: "Do you offer services for kids?",
    answer:
      "Yes, we provide specialized dental care for children in a friendly and comfortable environment.",
  },
  {
    question: "What are my options for replacing missing teeth?",
    answer:
      "Options include dental implants, bridges, or dentures, depending on your specific needs and preferences.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is a safe and effective procedure when performed under a dentist’s supervision.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left content */}
        <div className="faq-left">
          <p className="faq-subtitle">Everything You Need to Know</p>
          <h2 className="faq-title">Frequently Asked<br />Questions</h2>
        </div>

        {/* Right content */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  ▾
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
