import React from 'react'
import PageHeader from './AboutUsSection/PageHeader'
import Navbar from '../../Navbar/Navbar'
import './AboutUsHero.css' // 👈 Import the CSS file
import AboutSection from '../../AboutSection/AboutSection'
import ServicesHeader from '../../ServicesHeader/ServicesHeader'
import ServicesCards from '../../ServicesCards/ServicesCards'
import StatsSection from '../../StatsSection/StatsSection'
import WhyChooseSection from '../../WhyChooseSection/WhyChooseSection'
import Team from "../../Team/Team";
import TeamSection from "../../TeamSection/TeamSection";
import BookSection from '../../BookSection/BookSection'
import Footer from '../../Footer/Footer'


function AboutUsHero() {
  return (
    <div className="about-us-hero-container">
      <Navbar />
      <PageHeader />
            <AboutSection />
            <ServicesHeader />
      <ServicesCards />
      <StatsSection />
      <WhyChooseSection />
      <Team />
      <TeamSection />
      <BookSection />
            <Footer />

    </div>
  )
}

export default AboutUsHero
