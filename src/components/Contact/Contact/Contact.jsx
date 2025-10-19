import React from 'react'
import ContactUs from '../../Contact/ContactUs/ContactUs'
import Navbar from "../../Navbar/Navbar"
import ContactSection from '../ContactSection/ContactSection'
import BookSection from '../../BookSection/BookSection'
import Footer from '../../Footer/Footer'

function Contact() {
  return (
    <>
    <Navbar />
      <ContactUs />
      <ContactSection />
      <BookSection />
                  <Footer />
    </>
  )
}

export default Contact
