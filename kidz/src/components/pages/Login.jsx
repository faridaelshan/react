import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <form className='d-flex flex-column align-items-center login'>
        <div className='d-flex justify-content-center formbutton'>
            <button className='btn btn-outline-white fs-1'>Login<span className='text-muted fs-1'>     /</span></button>
            <button className='btn btn-outline-white fs-1'><Link className='text-dark text-muted' to="/register">Register</Link></button>
        </div>
        <div className='d-flex flex-column user'>
          <label for="user" className='text-muted mt-4'><h6>USERNAME OR EMAIL ADDRESS <span className='text-danger'>*</span></h6></label>
          <input id="user" type="text" required/>
          <label for="password" className='text-muted mt-4'><h6>PASSWORD<span className='text-danger'>*</span></h6></label>
          <input id="password" type="password" required/>
          <div className='d-flex mt-4 align-items-center justify-content-evenly remember'>
            <div>
              <input type="checkbox" name="" id="remember" />
              <label for="remember">REMEMBER ME</label>
            </div>
           <button className='btn-danger rounded p-2'>Login</button>
          </div>
        </div>
        <Link to="/lost" className='text-danger mt-5'>Lost your password?</Link>
    </form>
  )
}

export default Login