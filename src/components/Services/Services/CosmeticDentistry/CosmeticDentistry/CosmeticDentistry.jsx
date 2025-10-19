import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import CosmeticDentistryHome from '../CosmeticDentistryHome/CosmeticDentistryHome'
import GeneralDentistrySection from '../../General Dentistry/GeneralDentistrySection/GeneralDentistrySection'
import DentalServicesSection from '../../General Dentistry/DentalServicesSection/DentalServicesSection'
import WhyChooseSection from '../../../../WhyChooseSection/WhyChooseSection'
import Footer from '../../../../Footer/Footer'

function CosmeticDentistry() {
  return (
    <>
    <Navbar />
    <CosmeticDentistryHome />
    <GeneralDentistrySection />
      <DentalServicesSection />
      <WhyChooseSection /> 
      <Footer />
      
    </>
  )
}

export default CosmeticDentistry
