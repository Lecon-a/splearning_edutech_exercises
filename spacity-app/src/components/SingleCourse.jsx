import React from 'react'

const SingleCourse = () => {

  return (
    <div className='single-course-wrapper'>
      <h5 className='center'>Dynamic Title</h5>
      <div className='sc-card-wrapper'>
        <div className='sidebar'>
          <ul className='sc-outline'>
          <h5 className='sidebar-heading'>Outline:</h5>
          <li><a href="/">What is Machine Learning?</a></li>
          <li><a href="/">Types of Machine Learning
            <ul>
              <li><a href="/">Supervised Machine Learning</a></li>
              <li><a href="/">Unsupervised Machine Learning</a></li>
              <li><a href="/">Reinforcement Learning</a></li>
            </ul>
          </a></li>
          <li><a href="/">Why Machine Learning?</a></li>
          <li><a href="/">Machine Learning Application</a></li>
          <li><a href="/">Getting Started with ML
            <ul>
              <li><a href="/">ML Algorithms</a></li>
              <li><a href="/">
                  Understanding ML Architecture
                  <ul>
                    <li><a href="/">Define you problem</a></li>
                    <li><a href="/">Prepare your data
                      <ul>
                        <li><a href="/">Loading ML Data in Python</a></li>
                        <li><a href="/">Study ML Data with Descriptive Statistics in Python</a></li>
                        <li><a href="/">Visualize ML Data using Pandas</a></li>
                        <li><a href="/">Feature Engineering for ML Data in Python</a></li>
                      </ul>
                    </a></li>
                    <li><a href="/">Build your model</a></li>
                    <li><a href="/">Evaluate your model</a></li>
                    <li><a href="/">Improve your results</a></li>
                    <li><a href="/">Explain your result</a></li>
                    <li><a href="/">Iterate your model</a></li>
                  </ul>
              </a></li>
                <li><a href="/">Machine Learning with Python
                  <ul>
                    <li><a href="/">Working with Scikit-Learn, Python ML Library</a></li>
                    <li><a href="/">Working through problem using ML in Python</a></li>
                  </ul>
                </a></li> 
              <li><a href="/">Example:
                  <ul>
                    <li><a href="/">Sentiment Analysis</a></li>
                    <li><a href="/">Predict House Price</a></li>
                </ul>
              </a></li>
            </ul>
          </a></li>
          <li><a href="/">Sign up for intermediate</a></li>
          </ul>
        </div>
        <div className='main-section'>
          <img className='single-course-image' src='/images/machine-learning.jpeg' alt='single course image' />
          <p className='sc-caption'>source of image</p>
          <div>
            <h4 className='cw-divider'></h4>
            <div className='content-wrapper'>
              <h5>Subtitle: What is Machine Learning?</h5>
              <p>Machine Learning </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse