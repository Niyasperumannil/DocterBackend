import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State for the mobile menu (set to TRUE initially to match the screenshot state)
  const [isMenuOpen, setIsMenuOpen] = useState(true); 

  // States for Mobile Dropdowns (set 'Pages' to TRUE to match the screenshot)
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDentistsDropdownOpen, setIsDentistsDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(true); 
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  // State for Desktop Dropdown (Pages) - Used for hover on desktop
  const [isDesktopPagesDropdownOpen, setIsDesktopPagesDropdownOpen] = useState(false);


  const toggleDropdown = (setter, state) => () => setter(!state);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // When closing the mobile menu, reset all dropdowns
    if (isMenuOpen) {
        setIsHomeDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsDentistsDropdownOpen(false);
        setIsPagesDropdownOpen(false);
        setIsBlogDropdownOpen(false);
        setIsContactDropdownOpen(false);
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        
        {/* Logo Section */}
        <div className="logo">
          <NavLink to="/">
                       <img src="/logo-removebg-preview.png" alt="Dentia Logo" />
                     </NavLink>
        </div>

        {/* Action Button and Mobile Menu Icon */}
        

        {/* --- DESKTOP NAVIGATION (Visible on Large Screens) --- */}
        <nav className="nav-menu desktop-only">
          <ul className="nav-list">
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            
            <li className="nav-item dropdown">
              <NavLink to="/Aboutus">About Us</NavLink>
              {/* Placeholder for Desktop Services Dropdown */}
            </li>
            
            <li className="nav-item"><NavLink to="/Dentist">Dentists</NavLink></li>
            
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setIsDesktopPagesDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopPagesDropdownOpen(false)}
            >
              <NavLink to="#">Pages</NavLink>
              {/* Desktop Pages Dropdown */}
              <ul className={`dropdown-menu ${isDesktopPagesDropdownOpen ? 'open' : ''}`}>
                <li><NavLink to="/pages/general-dentistry">General Dentistry</NavLink></li>
                <li><NavLink to="/pages/CosmeticDentistry">Cosmetic Dentistry</NavLink></li>
                <li><NavLink to="/pages/PediatricDentistry">Pediatric Dentistry</NavLink></li>
              </ul>
            </li>
            
            <li className="nav-item"><NavLink to="/Blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="header-actions">
          {/* Action Button - Visible on desktop, hidden on mobile */}
          <button className="book-appointment-btn desktop-only"><NavLink to="/BookAppointmentScreen">Book Appointment</NavLink></button>

          {/* Hamburger/Close Icon - Visible on mobile/tablet */}
          <button className="hamburger-menu" onClick={toggleMobileMenu}>
            {isMenuOpen ? (
              <span className="close-icon">&minus;</span> // Minus sign from screenshot
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION (Visible only when isMenuOpen is true) --- */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          
          {/* Home */}
          <li className="mobile-nav-item has-dropdown">
            <div className="mobile-nav-link" onClick={toggleDropdown(setIsHomeDropdownOpen, isHomeDropdownOpen)}>
              <NavLink to="/">Home</NavLink>
              <span className={`dropdown-arrow ${isHomeDropdownOpen ? 'open' : ''}`}>&#9587;</span>
            </div>
            {/* Sub-menu structure can be added here if needed */}
          </li>

          {/* Services */}
          <li className="mobile-nav-item has-dropdown">
            <div className="mobile-nav-link" onClick={toggleDropdown(setIsServicesDropdownOpen, isServicesDropdownOpen)}>
              <NavLink to="/services">Services</NavLink>
              <span className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}>&#9587;</span>
            </div>
          </li>

          {/* Dentists */}
          <li className="mobile-nav-item has-dropdown">
            <div className="mobile-nav-link" onClick={toggleDropdown(setIsDentistsDropdownOpen, isDentistsDropdownOpen)}>
              <NavLink to="/Dentist">Dentist</NavLink>
              <span className={`dropdown-arrow ${isDentistsDropdownOpen ? 'open' : ''}`}>&#9587;</span>
            </div>
          </li>
          
          {/* Pages (The currently Open Dropdown in the screenshot) */}
          <li className={`mobile-nav-item has-dropdown ${isPagesDropdownOpen ? 'active-item' : ''}`}>
            <div className="mobile-nav-link" onClick={toggleDropdown(setIsPagesDropdownOpen, isPagesDropdownOpen)}>
              <NavLink to="#">Pages</NavLink>
              <span className={`dropdown-arrow ${isPagesDropdownOpen ? 'open' : ''}`}>&#9587;</span>
            </div>
            {/* Dropdown Menu - Sub-items appear below the main link */}
            <ul className={`mobile-dropdown-menu pages-menu ${isPagesDropdownOpen ? 'open' : ''}`}>
               <li><NavLink to="GeneralDentistry">General Dentistry</NavLink></li>
               <li><NavLink to="/pages/cosmetic-dentistry">Cosmetic Dentistry</NavLink></li>
               <li><NavLink to="/pages/pediatric-dentistry">Pediatric Dentistry</NavLink></li>
            </ul>
          </li>

          {/* Blog */}
          <li className="mobile-nav-item">
            <div className="mobile-nav-link">
              <NavLink to="/blog">Blog</NavLink>
            </div>
          </li>
          
          {/* Contact */}
          <li className="mobile-nav-item">
            <div className="mobile-nav-link">
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;