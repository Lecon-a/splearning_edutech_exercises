import React, {useState} from 'react';
import Map from './Map';
import ContactUsForm from './ContactUsForm';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [readMore, setReadMore] = useState(false);

  return (
      <div className='footer-wrapper'>
          <div className='top-footer'></div>
          <div className='middle-footer'>
              <div className='middle-inner-footer'>
                  <div className='mif'>
                        <h2 className='level-two-heading'>Company At A Glance</h2>
                        <p className='about-us-paragraph'>SPACITY is a leading IT Institute that provides comprehensive and hands-on training to students on various IT courses. The institute has been in operation for two years, with a record of outstanding achievement in delivering high-quality education to students. SPLearning EduTech primary mission is to provide students with the necessary skills and tools that they need to succeed in the IT industry.</p>
                        <div className='read-more' onClick={() => {setReadMore(!readMore)}}>Read More</div>
                      {readMore && <div className="close-wrapper">
                          <span className="close" onClick={() => { setReadMore(!readMore) }}>X</span>
                      </div>
                      }
                      {
                          readMore && <ul className='mif-more-company-info'>
                          <li>Mission: <div className="divider"></div>&gt; To provide students with the necessary skills and tools that they need to succeed in the IT industry</li>
                          <li>Aim & Objectives: <div className="divider"></div>&gt; To provide quality IT education and skills training to individuals looking to grow their careers in the IT industry while contributing towards the growth and development of the IT sector</li>
                          <li>Belief & Values:<div className="divider"></div>
                              <ul>
                                  <li>Integrity</li>
                                  <li>Respect</li>
                                  <li>Hard work</li>
                                  <li>Committment</li>
                              </ul>
                          </li>
                          <li>Leadership Tree: <div className='divider'></div>
                                <ol>
                                    <li>Sunday P. Afolabi <>-</> CEO and Founder</li> 
                                </ol>
                          </li>
                        </ul>
                      }
                  </div>
              </div>
              <div className='middle-inner-footer'>
                  <div>
                        <h2 className='level-two-heading'>Support</h2>
                        <div>
                          { !isOpen && <div className='map'>
                              <Map />
                          </div>}
                          <div className='contact-us-form'>
                              <ContactUsForm isOpen={isOpen} />
                              <p className='open-form' onClick={() => {setIsOpen(!isOpen)}}>Click to reach us -&gt;</p>
                            </div>
                        </div>
                  </div>
              </div>
              <div className='middle-inner-footer'>
                  <div>
                      <h2 className='level-two-heading'>Policies</h2>
                      <ul>
                          <li>Privacy Policy</li>
                          <li>Feedback Policy</li>
                          <li>Service Policy</li>
                          <li>Course Creator Policy</li>
                          <li>Parternship Policy</li>
                          <li>Course Completion Policy</li>
                          <li>Terms & Conditions for Use</li>
                      </ul>
                  </div>
                  <div>
                      <h2 className='level-two-heading'>Audience</h2>
                      <ul>
                          <li>Primary School Students</li>
                          <li>High School Students</li>
                          <li>University Students</li>
                          <li>Graduates</li>
                          <li>Organization Staff</li>
                      </ul>
                  </div>
              </div>
              <div className='middle-inner-footer'>
                  <div>
                        <h2 className='level-two-heading'>Partnership & Scholarship</h2>
                        <ul>
                          <li>SPACITY for:
                              <ul>
                                  <li>Government</li>
                                  <li>Non Government</li>
                                  <li>Individuals</li>
                              </ul>
                          </li>
                          <li>Get A Free Course</li>
                      </ul>
                  </div>
                  <div>
                        <h2 className='level-two-heading'>Career At SPACITY</h2>
                        <ul>
                          <li>Become An Instructor</li>
                          <li>Affiliates</li>
                          <li>IT / SIWES Placement</li>
                          <li>Course Creator</li>
                      </ul>
                  </div>
              </div>
              <div className='middle-inner-footer'>
                  <div>
                      <h2 className='level-two-heading'>Featured Courses</h2>
                      <ul>
                          <li>Machine Learning</li>
                          <li>Data Science</li>
                          <li>Web Development
                              <ul>
                                  <li>Frontend Dev</li>
                                  <li>Backend Dev</li>
                                  <li>Full Stack Dev</li>
                              </ul>
                          </li>
                          <li>Mobile App Development</li>
                          <li>Microsoft Package</li>
                          <li>Graphics</li>
                      </ul>
                  </div>
                  <div>
                      <h2 className='level-two-heading'>Services</h2>
                       <ul>
                          <li>Put Your Institute Online</li>
                          <li>We Train The Trainers</li>
                          <li>IT Consultance</li>
                          <li>Dispatch Your IT Gadget</li>
                          <li>Procurement</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='bottom-footer'>
              <div className='bottom-footer-address'><p>SPACITY Developers</p><p> &copy; </p><p>2023</p></div>
          </div>
    </div>
  )
}

export default Footer