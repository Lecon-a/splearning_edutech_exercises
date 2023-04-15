import React from 'react'

const Banner = () => {

  const styles = {
    bannerText: {
      padding: "19% 10%",
      position: "absolute",
      left: "0",
      right: "0",
      color: "#eee",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      fontSize: "20px",
      textAlign: "left",
    }
  }

  return (
      <div className='banner-wrapper'>
      <div className='banner-wall'>
        <div style={styles.bannerText}>
          <p>Only at SPACITY you can get programming complex concepts simplified for easy comprehension and productive learning...</p>
          </div>
          <img className='banner-wall-image' src='/images/machine-learning.jpeg' alt='Banner Image' />
        </div>
        <div className='banner-wall second-banner-wall'>
        <div className='banner-card'>
          <h3 className='level-two-heading course-title'><p>MACHINE LEARNING</p></h3>
              <img className='banner-wall-image' src='images/machine-learning.jpeg' alt='Banner Image' />
            </div>
            <div className='banner-card'>
          <h3 className='level-two-heading course-title'><p>DATA SCIENCE</p></h3>
              <img className='banner-wall-image' src='images/data-science-01.jpeg' alt='Banner Image' />

              </div>
              <div className='banner-card'>
          <h3 className='level-two-heading course-title'><p>WEB DEVELOPMENT</p></h3>
          <img className='banner-wall-image' src='images/web_development.webp' alt='Banner Image' />

              </div>
              <div className='banner-card'>
          <h3 className='level-two-heading course-title'><p>MOBILE APP DEVELOPMENT</p></h3>
          <img className='banner-wall-image' src='images/mobile-app-01.jpeg' alt='Banner Image' />

              </div>
          </div>
    </div>
  )
}

export default Banner