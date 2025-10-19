import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDoctersAdd.css";

const AdminDoctersAdd = () => {
  const [professionals, setProfessionals] = useState([]);
  const [editProfessional, setEditProfessional] = useState(null);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Load backend URL from .env
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Fetch all doctors
  const fetchProfessionals = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/professionals`);
      setProfessionals(res.data);
    } catch (error) {
      console.error("Error fetching professionals:", error);
    }
  };

  useEffect(() => {
    fetchProfessionals();
  }, []);

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Handle add or update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !profession || (!image && !editProfessional)) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("profession", profession);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      if (editProfessional) {
        await axios.put(
          `${BACKEND_URL}/api/professionals/${editProfessional._id}`,
          formData
        );
      } else {
        await axios.post(`${BACKEND_URL}/api/professionals`, formData);
      }

      setName("");
      setProfession("");
      setImage(null);
      setPreview(null);
      setEditProfessional(null);
      fetchProfessionals();
    } catch (error) {
      console.error("Error saving professional:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete instantly (no reload)
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this professional?")) {
      try {
        await axios.delete(`${BACKEND_URL}/api/professionals/${id}`);
        setProfessionals((prev) => prev.filter((p) => p._id !== id)); // instantly remove
      } catch (error) {
        console.error("Error deleting professional:", error);
        alert("Failed to delete!");
      }
    }
  };

  // Handle edit
  const handleEdit = (prof) => {
    setEditProfessional(prof);
    setName(prof.name);
    setProfession(prof.profession);
    setPreview(`${BACKEND_URL}/uploads/${prof.image}`);
  };

  // Handle cancel edit
  const handleCancel = () => {
    setEditProfessional(null);
    setName("");
    setProfession("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="app-container">
      <form className="professional-form" onSubmit={handleSubmit}>
        <h2>{editProfessional ? "Edit Doctor" : "Add Doctor"}</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <div className="button-group">
          <button type="submit" disabled={loading}>
            {loading
              ? editProfessional
                ? "Updating..."
                : "Adding..."
              : editProfessional
              ? "Update"
              : "Add"}
          </button>
          {editProfessional && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Doctors list */}
      <div className="professional-list">
        {professionals.length === 0 ? (
          <p>No doctors found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Profession</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {professionals.map((prof, index) => (
                <tr key={prof._id}>
                  <td>{index + 1}</td>
                  <td>{prof.name}</td>
                  <td>{prof.profession}</td>
                  <td>
                    <img
                      src={`${BACKEND_URL}/uploads/${prof.image}`}
                      alt={prof.name}
                      className="profile-img"
                    />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(prof)}>Edit</button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(prof._id)}
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
    </div>
  );
};

export default AdminDoctersAdd;
