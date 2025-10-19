import React from "react";
import "./BlogSection.css";
import { FaTag } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "20",
      month: "Jun",
      image: "https://img.freepik.com/free-photo/woman-dentist-with-patient-hospital_1150-18987.jpg",
      title:
        "Discover 10 Easy Tips to Maintain a Healthier and Brighter Smile Today",
      author: "Brunilda Doniger",
      category: "Health Care",
    },
    {
      id: 2,
      date: "20",
      month: "Jun",
      image: "https://img.freepik.com/free-photo/dentists-working-dental-clinic_23-2149333916.jpg",
      title:
        "Is Teeth Whitening Safe and Effective? Here’s What You Need to Know",
      author: "Brunilda Doniger",
      category: "Health Care",
    },
    {
      id: 3,
      date: "20",
      month: "Jun",
      image: "https://img.freepik.com/free-photo/portrait-young-dentist-with-tools_23-2148171428.jpg",
      title:
        "Braces vs. Clear Aligners: Which Orthodontic Option Fits You Best?",
      author: "Brunilda Doniger",
      category: "Health Care",
    },
    {
      id: 4,
      date: "20",
      month: "Jun",
      image: "https://img.freepik.com/free-photo/dentist-treating-patient-clinic_23-2149333924.jpg",
      title: "How Regular Dental Visits Prevent Major Oral Problems",
      author: "Brunilda Doniger",
      category: "Health Care",
    },
    {
      id: 5,
      date: "20",
      month: "Jun",
      image: "https://img.freepik.com/free-photo/dentists-office-with-professionals_23-2149345995.jpg",
      title: "Meet Our Expert Team of Dental Specialists",
      author: "Brunilda Doniger",
      category: "Health Care",
    },
    {
      id: 6,
      date: "20",
      month: "Jun",
      image: "https://img.freepik.com/free-photo/woman-getting-dental-treatment_23-2149351122.jpg",
      title: "Why Early Orthodontic Checkups Are So Important for Kids",
      author: "Brunilda Doniger",
      category: "Health Care",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-date">
                <span className="date-number">{blog.date}</span>
                <span className="date-month">{blog.month}</span>
              </div>
            </div>

            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>

              <div className="blog-meta">
                <img
                  src="https://i.pravatar.cc/30?img=8"
                  alt={blog.author}
                  className="author-img"
                />
                <span className="author-name">{blog.author}</span>
                <FaTag className="meta-icon" />
                <span className="blog-category">{blog.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
