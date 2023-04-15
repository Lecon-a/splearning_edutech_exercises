import React, { useState, useEffect } from 'react'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  
  return (
    <div className='courses-wrapper'>
      <div className='course-sidebar'>
        <p className='sidebar-heading'>Filter by:</p>
        <ul>
          <li>Category</li>
          <li>Price</li>
          <li>Duration</li>
        </ul>
      </div>
      <div className='coursecard-wrapper'>
        <h2 className='center text-white'>Courses</h2>
        <div className='inner-course-card-wrapper'>
            <CourseCard />
        </div>
        </div>
    </div>
  )
}

export default Courses