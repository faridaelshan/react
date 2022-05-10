import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
  const [movies,setMovies]=useContext(MovieContext)
  return (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <div className="nav-link active" aria-current="page" >Movie({movies.length})</div>
    </li>
  </ul>
  )
}

export default Nav