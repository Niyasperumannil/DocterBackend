import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSection.css";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/team`); // backend endpoint
        const data = await res.json();
        // Map the API data to the structure Swiper expects
        const formatted = data.map((t) => ({
          img: `${import.meta.env.VITE_BACKEND_URL}/uploads/${t.image}`, // image from uploads
          name: t.name,
          role: t.role,
          text: t.paragraph,
        }));
        setTestimonials(formatted);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <span className="quote-icon">“</span>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-role">{t.role}</p>
              <p className="testimonial-text">"{t.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
