import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar-wrapper'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link text-white" to="courses" >
                  Courses
                </Link>
                    </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link text-white" to="services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="about_us">About Us</Link>
                    </li>
                    <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="contact_us">Contact Us</Link>
              </li>
            </ul>
            <div className='account-wrapper-in-dropdown text-white'>
              Account
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar