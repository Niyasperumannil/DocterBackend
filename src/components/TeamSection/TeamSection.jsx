import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import './TeamSection.css';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

const TeamCard = () => {
  const [doctors, setDoctors] = useState([]);
  const scrollRef = useRef(null);

  // Fetch professionals from backend
  const fetchDoctors = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/professionals`);
      setDoctors(res.data);
    } catch (error) {
      console.error('Error fetching professionals:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="team-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>

        <div className="team-grid" ref={scrollRef}>
          {doctors.map((doc, index) => (
            <div className="card" key={index}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${doc.image}`} // dynamic image from backend
                alt={doc.name}
                className="card-img"
              />
              <div className="card-info">
                <h3 className="card-name">{doc.name}</h3>
                <p className="card-role">{doc.profession}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>

      {/* Mobile-only Next arrow */}
      <div className="mobile-next-arrow" onClick={() => scroll('right')}>
        Next &rarr;
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default TeamCard;
