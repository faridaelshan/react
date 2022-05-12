import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/product">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Features</a>
              </li>
            </ul>
            <h1 className="navbar-brand me-auto" href="#">Razzi.</h1>
            <form className="d-flex">
              <button className="btn btn-light" type="submit">USD</button>
              <button className="btn btn-light" type="submit">EN</button>
              <button className="btn btn-light" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              <button className="btn btn-light" type="submit"><i className="fa-solid fa-user"></i></button>
              <button className="btn btn-light" type="submit"><i className="fa-solid fa-heart"></i></button>
              <Link className="btn btn-light" to="/cart"  type="submit"><i className="fa-solid fa-bag-shopping"></i><span className="visually-hidden">unread messages</span></Link>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Nav