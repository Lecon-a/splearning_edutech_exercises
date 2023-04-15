import React from 'react'

const SignUp = () => {
  return (
    <div className='signup-wrapper'>
      <div className='form-wrapper'>
        <form>
          <legend>Forgot Password<br />
            <p>Enter your registered email where we are sending recovery link to.</p>
          </legend>
          <div className='form-control'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" placeholder='E-mail' />
          </div>
          <div className='form-control'>
            <input type="submit" value="Send Recovery Link" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp