import React from 'react'

const Lost = () => {
  return (
      <div className='d-flex justify-content-center lost'>
          <form className='d-flex flex-column align-items-start'>
        <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
        <label  className='text-muted mt-4' for="lost"><small>USERNAME OR EMAIL</small></label>
        <input id="lost" type="text" required/>
        <button className='btn-primary mb-5 rounded text-white mt-4'>Reset password</button>
    </form>
      </div>
  )
}

export default Lost