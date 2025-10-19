import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  YoutubeIcon,
  XIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo-removebg-preview.png" alt="Dentia Logo" className="logo-icon" />
            <span className="logo-text">Nirmala</span>
          </div>
          <p className="footer-desc">
            At Nirmala, we’re dedicated to providing high-quality, personalized
            dental care for patients of all ages. Our skilled team uses the
            latest technology to ensure comfortable, efficient treatments and
            beautiful, healthy smiles for life.
          </p>

          <div className="footer-social">
            <Facebook className="social-icon" />
            <XIcon className="social-icon" />
            <MessageCircle className="social-icon" />
            <Instagram className="social-icon" />
            <YoutubeIcon className="social-icon" />
          </div>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <div>
            <h4 className="footer-title">Company</h4>
            <ul>
              <li>Home</li>
              <li>Our Services</li>
              <li>Gallery</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Our Services</h4>
            <ul>
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Pediatric Dentistry</li>
              <li>Restorative Dentistry</li>
              <li>Preventive Dentistry</li>
              <li>Orthodontics</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <ul>
            <li>
              <MapPin className="contact-icon" />
              <div>
                <strong>Clinic Location</strong>
                <p>PTH Complex, Pattambi road, Cherpulassery</p>
              </div>
            </li>
            <li>
              <Phone className="contact-icon" />
              <div>
                <strong>Call Us</strong>
                <p>+91 996 121 0007</p>
              </div>
            </li>
            <li>
              <Mail className="contact-icon" />
              <div>
                <strong>Send a Message</strong>
                <p> nirmaladentalcare2007@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
