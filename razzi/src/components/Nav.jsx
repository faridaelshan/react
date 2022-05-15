import React from 'react'
import Data from '../data/Data'
import { Link } from 'react-router-dom'
import {BsHandbag} from 'react-icons/bs'
import {FiHeart} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'

const NavItem = (props) => {
  return (
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={props.to} >{props.navItem}</Link>
    </li>
  )
}

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: "sticky", top: 0, zIndex: 10}} >
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Data.navData.map((item,index)=>{
                return(
                  <NavItem navItem={item.navItem} to={item.to} key={index}/>
                )
              })}
            </ul>
            <h1 className="navbar-brand me-auto" href="#">Razzi.</h1>
            <form className="d-flex">
              <button className="btn btn-light" type="submit">USD</button>
              <button className="btn btn-light" type="submit">EN</button>
              <button className="btn btn-light" type="submit"><FiSearch /></button>
              <button className="btn btn-light" type="submit"><FiUser /></button>
              <button className="btn btn-light" type="submit"><FiHeart /></button>
              <Link to='/cart'><BsHandbag /></Link>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Nav