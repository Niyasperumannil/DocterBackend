import React, { useState, useEffect } from "react";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // ✅ Load backend base URL from environment variable
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Fetch bookings
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/api/bookings`);
      const data = await res.json();

      if (res.ok) {
        setBookings(data);
      } else {
        setError(data.message || "Failed to fetch bookings");
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Server error while fetching bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ✅ Handle booking deletion without reload
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`${BACKEND_URL}/api/bookings/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (res.ok) {
        // Instantly remove deleted booking from the list (no reload)
        setBookings((prev) => prev.filter((b) => b._id !== id));
      } else {
        alert(result.message || "Failed to delete booking");
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
      alert("Server error while deleting booking");
    }
  };

  // ✅ Filter bookings by selected date
  const filteredBookings = selectedDate
    ? bookings.filter((b) => b.date.split("T")[0] === selectedDate)
    : bookings;

  return (
    <div className="admin-bookings-container">
      <h2>All Appointments</h2>

      {/* 🔍 Date Filter */}
      <div className="date-filter">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button className="reset-btn" onClick={() => setSelectedDate("")}>
          Reset
        </button>
      </div>

      {/* 🌀 Status Messages */}
      {loading && <p className="status-msg">Loading bookings...</p>}
      {error && <p className="status-msg error">{error}</p>}
      {!loading && filteredBookings.length === 0 && (
        <p className="status-msg">No bookings found.</p>
      )}

      {/* 📋 Bookings Table */}
      {!loading && filteredBookings.length > 0 && (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b, idx) => (
              <tr key={b._id}>
                <td>{idx + 1}</td>
                <td>{b.services}</td>
                <td>{b.date.split("T")[0]}</td>
                <td>{b.time}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.message || "-"}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(b._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBookings;
