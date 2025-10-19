import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Aboutus from './pages/AboutUs/Aboutus';
import Dentist from './pages/Dentist/Dentist';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPageScreen from './pages/ContactPageScreen/ContactPageScreen';
import BookAppointmentScreen from './pages/BookAppointmentScreen/BookAppointmentScreen';
import ServicesGenerelHome from './pages/ServicesGeneralHome/ServicesGenerelHome';
import CosmeticDentistryServices from './pages/CosmeticDentistryServices/CosmeticDentistryServices';
import PediatricDentistryServices from './pages/PediatricDentistryServices/PediatricDentistryServices';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminAuthHome from './pages/AdminAuthHome/AdminAuthHome';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Dentist" element={<Dentist />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/Contact" element={<ContactPageScreen />} />
      <Route path="/BookAppointmentScreen" element={<BookAppointmentScreen />} />
      <Route path="/pages/GeneralDentistry" element={<ServicesGenerelHome />} />
      <Route path="/pages/CosmeticDentistry" element={<CosmeticDentistryServices />} />
      <Route path="/pages/PediatricDentistry" element={<PediatricDentistryServices />} />

      {/* Protected Admin Dashboard */}
      <Route
        path="/AdminDashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* Admin Login Page */}
      <Route path="/Adminlogin" element={<AdminAuthHome />} />
    </Routes>
  );
};

export default App;
