import React from 'react'
import logo from '../../assets/img/logo-white.png'
import search from '../../assets/img/twotone_search_white_24dp.png'
import person from '../../assets/img/outline_person_white_24dp.png'
import basket from '../../assets/img/basket.png'
import heart from '../../assets/img/heart.png'
import { NavLink ,Link} from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Nav = () => {
  const{
    totalItems,totalUniqueItems
  }=useCart();

  return (
    <>
    <ul className="nav navbar-dark">
      <li className="nav-item ms-5">
        <img src={logo} alt="" />
      </li>
      <li className="nav-item ms-5">
        <div className='lines'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </li>
      <li className="nav-item ms-5">
        <div className='input-group bg-light'>
         <div className="dropdown">
           <a className="btn dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown">All</a>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
             <li><a className="dropdown-item">1</a></li>
             <li><a className="dropdown-item">2</a></li>
             <li><a className="dropdown-item">3</a></li>
           </ul>
        </div>
        <input type="text" placeholder='Search in 20,000+products...' />
        <button className='btnbg'>
          <img src={search} alt="" />
        </button>
      </div>
      </li>
      <li className="nav-item ms-5">
        <div className='d-flex ms-5'>
          <img className='me-3' src={person} alt="" />
          <div className='text-light'>
            Account <br />Login/Register
          </div>
        </div>
      </li>
      <li className="nav-item ms-5">
      <Link to="wish" type="button" className="btn ms-5 position-relative">
        <img className='cartbtn' src={heart} alt="" />
        <span className="number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
        {totalUniqueItems}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
      </li>
      <li className="nav-item ms-5">
      <Link  to="/cart" type="button" className="btn position-relative">
        <img className='cartbtn' src={basket} alt="" />
        <span className="number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
          {totalItems}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
      </li>
    </ul>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" exact to="/" aria-current="page" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/product" aria-current="page" >Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="#" aria-current="page" >Pages</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="#" aria-current="page" >Electronic Devices</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="#" aria-current="page" >Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="#" aria-current="page" >Become A Vendor</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="#" aria-current="page" >Flash Deals</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Nav