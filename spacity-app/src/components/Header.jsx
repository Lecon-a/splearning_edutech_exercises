import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import Search from './Search'
import Account from './Account'

const Header = () => {

  return (
    <header className='header-wrapper'>
          <div className='upper-header-wrapper'>
              <Logo />
              <Search />
              <Account />
        </div>
          <NavBar />
          <div className='marquee-wrapper'>
        <div className='sponsor'></div>
        <marquee>
          <div className='brands'>
            <img src='images/brand-03.png' alt='brand image' />
            <img src='images/brand-04.png' alt='brand image' />
            <img src='images/brand-05.png' alt='brand image' />
            <img src='images/brand-06.png' alt='brand image' />
            <img src='images/brand-07.png' alt='brand image' />
            <img src='images/brand-08.png' alt='brand image' />
            <span className='custom-brand text-white'>ALX</span>
            <span className='custom-brand udacity-brand'>Udacity</span>
          </div>
        </marquee>
        <div className='sponsor'></div>
          </div>
    </header>
  )
}

export default Header