import React from 'react'
import BookAppointment from '../../Appointment/BookAppointment/BookAppointment'
import Navbar from "../../Navbar/Navbar"
import AppointmentSection from '../AppointmentSection/AppointmentSection'
import Footer from "../../Footer/Footer"
function Appointment() {
  return (
    <>
        <Navbar />

      <BookAppointment />
      <AppointmentSection />
      <Footer />
    </>
  )
}

export default Appointment
