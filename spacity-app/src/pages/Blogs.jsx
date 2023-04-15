import React from 'react'

const Blog = () => {
  return (
        <div className='blog-wrapper'>
          <h1 className='level-one-heading'>Blogs</h1>
          <div className='blog-cards'>
                <div className="blog-card">
                    <img className='blog-card-image' src='images/blog-1.jpg' alt='Blog Image' />
                          <div className='blog-card-details'>
                              <div>
                                      <h3 className='level-two-heading'>Blog Title</h3>
                                    <span className='blog-post-date'>Date</span>
                              </div>
                                <p className='desc'>Blog description...</p>
                        </div>
                  </div>
              <div className="blog-card">
                    <img className='blog-card-image' src='images/blog-1.jpg' alt='Blog Image' />
                    <div className='blog-card-details'>
                        <div>
                              <h3 className='level-two-heading'>Blog Title</h3>
                              <span className='blog-post-date'>Date</span>
                        </div>
                        <p className='desc'>Blog description...</p>
                    </div>
              </div>
              <div className="blog-card">
                    <img className='blog-card-image' src='images/blog-1.jpg' alt='Blog Image' />
                    <div className='blog-card-details'>
                        <div>
                              <h3 className='level-two-heading'>Blog Title</h3>
                              <span className='blog-post-date'>Date</span>
                        </div>
                        <p className='desc'>Blog description...</p>
                    </div>
              </div>
              <div className="blog-card">
                    <img className='blog-card-image' src='images/blog-1.jpg' alt='Blog Image' />
                    <div className='blog-card-details'>
                        <div>
                              <h3 className='level-two-heading'>Blog Title</h3>
                              <span className='blog-post-date'>Date</span>
                        </div>
                        <p className='desc'>Blog description...</p>
                    </div>
              </div>
              <div className="blog-card">
                    <img className='blog-card-image' src='images/blog-1.jpg' alt='Blog Image' />
                    <div className='blog-card-details'>
                        <div>
                              <h3 className='level-two-heading'>Blog Title</h3>
                              <span className='blog-post-date'>Date</span>
                        </div>
                        <p className='desc'>Blog description...</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Blog