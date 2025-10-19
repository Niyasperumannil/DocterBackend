import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import AdminDoctersAdd from "../../Admin/AdminDoctersAdd/AdminDoctersAdd";
import AddTeamMember from "../AddTeamMember/AddTeamMember";
import AdminBookings from "../AdminBookings/AdminBookings";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Doctors");
  const [todayBookings, setTodayBookings] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // Fetch today's bookings for notification
  const fetchTodayBookings = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`);
      const data = await res.json();
      if (res.ok) {
        const today = new Date().toISOString().split("T")[0];
        const todaysBookings = data.filter(
          (b) => b.date.split("T")[0] === today
        );
        setTodayBookings(todaysBookings);
        setShowNotification(todaysBookings.length > 0);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodayBookings();
    const interval = setInterval(fetchTodayBookings, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "Doctors":
        return (
          <div>
            <h2>Doctors Management</h2>
            <AdminDoctersAdd />
          </div>
        );
      case "Reviews":
        return (
          <div>
            <h2>Reviews Management</h2>
            <AddTeamMember />
          </div>
        );
      case "Bookings":
        return (
          <div>
            <h2>Appointments</h2>
            <AdminBookings />
          </div>
        );
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title">Admin Panel</h3>
        <ul className="sidebar-menu">
          <li
            className={activeSection === "Doctors" ? "active" : ""}
            onClick={() => setActiveSection("Doctors")}
          >
            Doctors
          </li>
          <li
            className={activeSection === "Reviews" ? "active" : ""}
            onClick={() => setActiveSection("Reviews")}
          >
            Reviews
          </li>
          <li
            className={activeSection === "Bookings" ? "active" : ""}
            onClick={() => setActiveSection("Bookings")}
          >
            Bookings
            {todayBookings.length > 0 && (
              <span className="sidebar-badge">{todayBookings.length}</span>
            )}
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        {showNotification && (
          <div className="dashboard-notification">
            You have {todayBookings.length} booking
            {todayBookings.length > 1 ? "s" : ""} today
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
