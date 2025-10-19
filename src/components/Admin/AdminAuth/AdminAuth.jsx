import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminAuth.css";

const AdminAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Load backend URL from .env
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", password: "" });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setMessage("All fields are required");
      return;
    }

    const endpoint = isLogin
      ? `${BACKEND_URL}/api/admin/login`
      : `${BACKEND_URL}/api/admin/register`;

    try {
      setLoading(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage(isLogin ? "Login successful!" : "Registration successful!");
        localStorage.setItem("adminToken", result.token);

        // Redirect after login
        if (isLogin) {
          navigate("/AdminDashboard");
        }

        setFormData({ username: "", password: "" });
      } else {
        setMessage(result.message || "Error occurred");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-auth-container">
      <h2>{isLogin ? "Admin Login" : "Admin Registration"}</h2>
      {message && <p className="auth-message">{message}</p>}

      <form onSubmit={handleSubmit} className="admin-auth-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading
            ? isLogin
              ? "Logging in..."
              : "Registering..."
            : isLogin
            ? "Login"
            : "Register"}
        </button>

        <p className="toggle-link" onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default AdminAuth;
