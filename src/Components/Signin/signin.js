
import React from 'react';
import './signin.css'

const SignUp = () => {
  return(
    <div className='signup-full-wrapper'>
      <div className='signup-container-wrapper'>
        <h1>Create Account</h1>
        <form className='form-wrapper'>
          <input type='text' placeholder='Name'></input>
          <input type='Email' placeholder='E-mail'></input>
          <input type='Password' placeholder='Password'></input>
          <input type='password' placeholder='Confirm-Password'></input>
          <p>Forgot Password ?</p>
          <button type='submit'>Signup</button>
        </form>
      </div>
  
    </div>
  )
}
export default SignUp;