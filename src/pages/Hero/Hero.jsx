import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar"
import AboutSection from "../../components/AboutSection/AboutSection";
import "./Hero.css";
import InfoSection from "../../components/InfoSection/InfoSection";
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import StatsSection from "../../components/StatsSection/StatsSection";
import WhyChooseSection from "../../components/WhyChooseSection/WhyChooseSection";
import Team from "../../components/Team/Team";
import TeamSection from "../../components/TeamSection/TeamSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import TestimonialHeader from "../../components/Testimonials/Testimonials";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import BookSection from "../../components/BookSection/BookSection";
import Footer from "../../components/Footer/Footer";
// import HeroSection from "../../components/HeroSection/HeroSection";

function Hero() {
  return (
    <div className="hero-container">
            <Navbar />

      <Header />  
      {/* <HeroSection /> */}
       <InfoSection />
      <AboutSection />
      <ServicesHeader />
      <ServicesCards />
      <StatsSection />
      <WhyChooseSection />
      <Team />
      <TeamSection />
      <FAQSection />
      <TestimonialHeader />
      <TestimonialSection />
      <BookSection />
      <Footer />
      
    </div>
  );
}

export default Hero;
