import React from 'react'
import Banner from '../components/Banner'
import Services from './Services'
import Testimony from '../components/Testimony'
import Blog from './Blogs'

const LandingPage = () => {
  return (
    <div className='landing-page-wrapper'>
      <Banner />
      <Services />
      <Testimony />
      <Blog />
    </div>
  )
}

export default LandingPage