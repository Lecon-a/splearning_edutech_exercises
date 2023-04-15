import React from 'react'

const Services = () => {
  return (
      <div className='services-wrapper'>
          <h1 className='level-one-heading'>Services</h1>
          <div className='services-card'>
        <div className='services-inner-card'>
                <img className='service-icon' src='images/service-02.png' alt='Service Image' />
                <h3 className='level-two-heading'>Add My School Online</h3>      
                <p className='service_description'>We help manage your school online by providing you with a tool that get you started</p>
        </div>
              <div className='services-inner-card'>
                <img className='service-icon' src='images/service-03.png' alt='Service Image' />
                <h3 className='level-two-heading'>We Train The Trainers</h3>      
                <p className='service_description'>Our team of experts render training services to empower your staffs and others to get most of the technology</p>
        </div>
        <div className='services-inner-card'>
                <img className='service-icon' src='images/service-04.png' alt='Service Image' />
                <h3 className='level-two-heading'>IT Consultance</h3>      
                <p className='service_description'>Are you thinking of leveraging on IT to enhance your buz productivity? SPACITY have you covered and helps bring your thought to rewarding end</p>
        </div>
        <div className='services-inner-card'>
                <img className='service-icon' src='images/service.png' alt='Service Image' />
                <h3 className='level-two-heading'>Dispatch Your IT Gadgets</h3>      
                <p className='service_description'>As a company, we help move your new and/or old IT gadgets from a given location to another location</p>
        </div>
          </div>
    </div>
  )
}

export default Services