import React, { useState, useEffect, useRef } from 'react';
import './AddTeamMember.css';

// ✅ Use environment variable
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5008';

const TeamAdmin = () => {
  const [formData, setFormData] = useState({ name: '', role: '', paragraph: '' });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [team, setTeam] = useState([]);
  const [editId, setEditId] = useState(null);
  const scrollRef = useRef(null);

  // Fetch team members
  const fetchTeam = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/team`);
      const data = await res.json();
      setTeam(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Preview
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', role: '', paragraph: '' });
    setImage(null);
    setImagePreview(null);
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.paragraph || (!image && !editId)) {
      setMessage('All fields are required');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('paragraph', formData.paragraph);
    if (image) data.append('image', image);

    try {
      setLoading(true);
      const url = editId
        ? `${BACKEND_URL}/api/team/${editId}`
        : `${BACKEND_URL}/api/team`;
      const method = editId ? 'PUT' : 'POST';

      const res = await fetch(url, { method, body: data });
      const result = await res.json();

      if (res.ok) {
        setMessage(editId ? 'Team member updated!' : 'Team member added!');
        resetForm();
        fetchTeam();
      } else {
        setMessage(result.message || 'Operation failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (member) => {
    setFormData({ name: member.name, role: member.role, paragraph: member.paragraph });
    setImagePreview(`${BACKEND_URL}/uploads/${member.image}`);
    setEditId(member._id);
    setMessage('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this member?')) return;

    try {
      const res = await fetch(`${BACKEND_URL}/api/team/${id}`, { method: 'DELETE' });
      const result = await res.json();
      if (res.ok) {
        setMessage('Team member deleted!');
        // Remove deleted member without reloading
        setTeam((prev) => prev.filter((member) => member._id !== id));
      } else {
        setMessage(result.message || 'Failed to delete');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error');
    }
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="team-admin-container">
      <div className="add-member-container">
        <h2>{editId ? 'Edit Team Member' : 'Add New Team Member'}</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit} className="add-member-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </label>

          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter role"
            />
          </label>

          <label>
            Paragraph:
            <textarea
              name="paragraph"
              value={formData.paragraph}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </label>

          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>

          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? (editId ? 'Updating...' : 'Adding...') : editId ? 'Update Member' : 'Add Member'}
          </button>
          {editId && (
            <button type="button" className="cancel-btn" onClick={resetForm}>
              Cancel
            </button>
          )}
        </form>
      </div>

      <h2 className="section-title">Team Members</h2>
      <div className="team-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>

        <div className="team-grid" ref={scrollRef}>
          {team.map((member) => (
            <div className="card" key={member._id}>
              <img
                src={`${BACKEND_URL}/uploads/${member.image}`}
                alt={member.name}
                className="card-img"
              />
              <div className="card-info">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-role">{member.role}</p>
                <p className="card-paragraph">{member.paragraph}</p>
                <div className="card-actions">
                  <button className="edit-btn" onClick={() => handleEdit(member)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(member._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>

      <div className="mobile-next-arrow" onClick={() => scroll('right')}>
        Next &rarr;
      </div>
    </div>
  );
};

export default TeamAdmin;
