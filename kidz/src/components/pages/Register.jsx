import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <form className='d-flex flex-column align-items-center register'>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-outline-white fs-1'><Link className='text-dark text-muted' to="/login">Login</Link><span className='text-muted fs-1'>     /</span></button>
            <button className='btn btn-outline-white fs-1'>Register</button>
        </div>
        <div className='d-flex flex-column formregister'>
        <label for="user" className='text-muted mt-4'><h6>USERNAME OR EMAIL ADDRESS <span className='text-danger'>*</span></h6></label>
        <input id="user" type="text" required/>
        <p className='mt-4'>A link to set a new password will be sent to your email address.</p>
        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        <button className='btn-danger rounded'>Register</button>
        </div>
    </form>
  )
}

export default Register