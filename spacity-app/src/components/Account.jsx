import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  const [showLoginPanel, setShowLoginPanel] = useState(false)

  return (
    <div className='account-wrapper'>
      <img src='images/user.png' alt='User Account Image' onClick={() => setShowLoginPanel(!showLoginPanel)} />
      {showLoginPanel && <div className='login-signup'>
        <form className="account-form">
          <div className='account-form-control'>
            <label htmlFor="username">Username: </label>
            <input type="text" name='username' placeholder='Username' />
          </div>
          <div className='account-form-control'>
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' placeholder='Password' />
          </div>
          <div className="account-form-control account-grouped-button">
            <Link to="signup" className='sign-up-button mx-2' onClick={() => setShowLoginPanel(!showLoginPanel)}>Sign Up</Link>
            <button>Login</button>
          </div>
        </form>
        <div>
          <p className='forgot-password-text'>Forgot Password? <Link className='fpt-link' to="forgot-password" onClick={() => setShowLoginPanel(!showLoginPanel)}>Click Me</Link></p>
        </div>
      </div>}
    </div>
  )
}

export default Account