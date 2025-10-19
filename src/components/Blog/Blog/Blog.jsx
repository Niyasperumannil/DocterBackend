import React from 'react'
import OurBlog from '../../Blog/OurBlog/OurBlog'
import Navbar from '../../Navbar/Navbar'
import BlogSection from '../BlogSection/BlogSection'
import BookSection from '../../BookSection/BookSection'
import Footer from '../../Footer/Footer'

function Blog() {
  return (
    <>
    <Navbar />
      <OurBlog />
      <BlogSection />
      <BookSection />
            <Footer />
    </>
  )
}

export default Blog
