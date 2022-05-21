import React from 'react'
import {RiUser3Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <h5  className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Demos</Link>
              </h5>
              <h5 className="nav-item">
                <Link to="/shop" className="nav-link active" aria-current="page">Shop</Link>
              </h5>
              <h5 className="nav-item">
                <Link to="product" className="nav-link active" aria-current="page">Product</Link>
              </h5>
              <h5 className="nav-item">
                <Link to="/blog" className="nav-link active" aria-current="page">Blog</Link>
              </h5>
              <h5 className="nav-item">
                <Link to="/pages" className="nav-link active" aria-current="page">Pages</Link>
              </h5>
              <li className="nav-item nav-link active">
                  Call us: +1 (800) 312-2121
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-white" type="submit"><h5><RiUser3Fill style={{fontSize: "20"}}/>Login</h5></button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Nav