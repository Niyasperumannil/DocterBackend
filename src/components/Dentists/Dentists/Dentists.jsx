import React from 'react'
import OurDentists from '../../Dentists/OurDentists/OurDentists'
import Navbar from "../../Navbar/Navbar"
import DoctorProfile from '../DoctorProfile/DoctorProfile'
import BookSection from '../../BookSection/BookSection'
import Footer from '../../Footer/Footer'

function Dentists() {
  return (
    <>
    <Navbar />
      <OurDentists />
      <DoctorProfile />
      <BookSection />
            <Footer />
    </>
  )
}

export default Dentists
