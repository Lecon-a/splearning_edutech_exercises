import React from 'react'

const SignUp = () => {
  return (
    <div className='signup-wrapper'>
      <div className='form-wrapper'>
        <form>
          <legend>Signup</legend>
          <div className='form-control'>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" name="firstname" id="firstname" placeholder='First Name' />
          </div>
          <div className='form-control'>
            <label htmlFor="lastname">Lastname:</label>
            <input type="text" name="lastname" id="lastname" placeholder='Lastname' />
          </div>
          <div className='form-control'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" placeholder='E-mail' />
          </div>
          <div className='form-control'>
            <label htmlFor="phone-number">Phone Number:</label>
            <input type="tel" name="phone-number" id="phone-number" placeholder='Phone Number' />
          </div>
          <div className='form-control'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder='Password' />
          </div>
          <div className='form-control'>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password" placeholder='Password' />
          </div>
          <div className='form-control'>
            <input type="submit" name="confirm-password" id="confirm-password" placeholder='Password' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp