import React from 'react'
import PediatricDentistryHome from '../PediatricDentistryHome/PediatricDentistryHome'
import Navbar from '../../../../Navbar/Navbar'
import GeneralDentistrySection from '../../General Dentistry/GeneralDentistrySection/GeneralDentistrySection'
import DentalServicesSection from '../../General Dentistry/DentalServicesSection/DentalServicesSection'
import WhyChooseSection from '../../../../WhyChooseSection/WhyChooseSection'
import Footer from '../../../../Footer/Footer'

function PediatricDentistry() {
  return (
    <>
    <Navbar />
      <PediatricDentistryHome />
      <GeneralDentistrySection />
      <DentalServicesSection />
      <WhyChooseSection /> 
      <Footer />
    </>
  )
}

export default PediatricDentistry
