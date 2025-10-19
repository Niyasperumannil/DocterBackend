import React from "react";
import "./WhyChooseSection.css";

export default function WhyChooseSection() {
  return (
    <section className="why-choose">
      <div className="why-text">
        <p className="why-subtitle">Why Choose Our Dental Care</p>
        <h2 className="why-title">
          Exceptional Service With <br /> Personal Touch
        </h2>
        <p className="why-description">
          Choosing the right dental provider matters. We combine expert care, advanced
          technology, and a warm atmosphere to ensure every visit is comfortable,
          efficient, and tailored to your unique needs.
        </p>

        <hr className="why-divider" />

        <div className="why-features">
          <div className="why-feature">
            <h4>Experienced Dental</h4>
            <p>Skilled care backed by years of trusted dental experience.</p>
          </div>
          <div className="why-feature">
            <h4>Advanced Technology</h4>
            <p>Modern tools ensure accurate and efficient treatments.</p>
          </div>
          <div className="why-feature">
            <h4>Personalized Treatment</h4>
            <p>Custom care plans made to fit your smile and lifestyle.</p>
          </div>
          <div className="why-feature">
            <h4>Family-Friendly</h4>
            <p>Welcoming space for kids, teens, adults, and seniors.</p>
          </div>
        </div>
      </div>

      <div className="why-images">
        <div class="image-grid">
      <img class="img-one" src="https://madebydesignesia.com/themes/dentia/images/misc/s3.webp" alt="Dental care" />
      <img class="img-two" src="https://madebydesignesia.com/themes/dentia/images/misc/s2.webp" alt="Dental team" />
      <img class="img-three" src="https://madebydesignesia.com/themes/dentia/images/misc/p3.webp" alt="Patient smile" />
    </div>
      </div>
    </section>
  );
}
