import React from "react";
import CountUp from "react-countup";
import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    { number: 10000, suffix: "+", label: "Happy Patients" },
    { number: 2500, suffix: "+", label: "Teeth Whitened" },
    { number: 800, suffix: "+", label: "Dental Implants" },
    { number: 15, suffix: "+", label: "Years of Experience" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-number">
              <CountUp
                start={0}
                end={item.number}
                duration={2.5}
                separator=","
                suffix={item.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
