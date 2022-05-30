import React from 'react'
import {FaSearch} from 'react-icons/fa'

const NotFound = () => {
  return (
      <div className='d-flex justify-content-center notfound'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='text-center page'>Page not found</h1>
          <h1 className='text-center text-info'>404</h1>
          <p className='first'>x</p>
          <p className="text-center">The page you are looking for has not been found, try using search</p>
          <div className='d-flex'>
              <input type="text" placeholder='Search...'/>
              <button className='btn-info ms-3'><FaSearch className='text-white'/></button>
          </div>
        </div>
      </div>
  )
}

export default NotFound