import React from 'react'
import Navbar from "../../../../Navbar/Navbar"
import GeneralDentistryHome from '../GeneralDentistry/GeneralDentistryHome'
import GeneralDentistrySection from '../GeneralDentistrySection/GeneralDentistrySection'
import DentalServicesSection from '../DentalServicesSection/DentalServicesSection'
import WhyChooseSection from '../../../../WhyChooseSection/WhyChooseSection'
import Footer from '../../../../Footer/Footer'

function General() {
  return (
    <>
      <Navbar />
      <GeneralDentistryHome />
      <GeneralDentistrySection />
      <DentalServicesSection />
      <WhyChooseSection /> 
      <Footer />
    </>
  )
}

export default General
