import React, { useState } from "react";
import "./AppointmentSection.css";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    date: "",
    time: "",
    message: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, services, date, time } = formData;

    if (!name || !email || !phone || !services || !date || !time) {
      setStatusMsg("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMsg("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        setStatusMsg(data.message || "Failed to book appointment");
      }
    } catch (err) {
      console.error(err);
      setStatusMsg("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        {/* Left Side - Form */}
        <div className="appointment-form">
          <h2 className="appointment-title">
            <span role="img" aria-label="mail">📧</span> Book Your Appointment
          </h2>
          <p className="appointment-subtitle">
            Book your appointment today for expert dental care tailored to your needs.
            Healthy, beautiful smiles start with a simple step, schedule now!
          </p>

          {statusMsg && <p className="status-msg">{statusMsg}</p>}

          <form onSubmit={handleSubmit}>
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select Service</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Whitening">Whitening</option>
              <option value="Filling">Filling</option>
              <option value="Root Canal">Root Canal</option>
            </select>

            <div className="form-row">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
              />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select Time</option>
                <option value="09:00">09:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            />

            <button
              type="submit"
              className="form-button"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="appointment-image">
          <img
            src="https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg"
            alt="Dentist with child"
          />
          <div className="opening-hours">
            <div className="icon">🕒</div>
            <div>
              <h4>Opening Hours</h4>
              <p>Mon to Sat 08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
