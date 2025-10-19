import React from "react";
import "./BookSection.css";

export default function BookSection() {
  return (
    <section className="book-section">
      <div className="book-container">
        <h2 className="book-title">
          Ready to book your dental care session?
        </h2>
        <button className="book-btn">Book Appointment</button>
      </div>
    </section>
  );
}
