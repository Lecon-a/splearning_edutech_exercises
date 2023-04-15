import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CourseCard = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => { 
    fetch("/courses.json")
    .then(response => response.json())
    .then(data => setCourses(data))
    .catch(error => console.log("Error: ", error))
  }, [])

  const courseCardElement = courses.map(course => (
      <Link key={course.c_id} className='course-detail' to={course.c_id}>
          <div className='course-detail-partition'>
          <img src={`images/${course.c_image}`} alt={`${course.c_title} image`} />
          </div>
          <div className='course-detail-partition'>
              <h5>{ course.c_title }</h5>
              <div>{ course.c_rating }</div>
              <p>{ course.c_duration }</p>
          <p className='description'>{ course.c_desc }</p>
          </div>
        </Link>
  ));
  
  return (
    <>
      { courseCardElement }
    </>
  )
}

export default CourseCard