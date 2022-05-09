import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
  return (
    <header>
      <ul className='nav'>
        <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/blog">Blog</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/create">Add Blog</Link></li>
      </ul>
    </header>
  )
}

export default Header