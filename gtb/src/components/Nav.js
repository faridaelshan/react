import React, { Component } from 'react'
import Search from './Search'
import Dropdown from './Dropdown'
import Dropdownnav from './Dropdownnav'

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a href={this.props.url} target="_blank" className='navicon ms-5'>
            <i className={this.props.icon}></i>
        </a>
        <Search />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pull requests</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Issues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Marketplacee</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Explore</a>
              </li>
              
              
              
            </ul>
            <ul className="navbar-nav me-1 mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#"><i className='fa-regular fa-bell'></i></a>
            </li>
              <Dropdown />
              <Dropdownnav />
            </ul>
            
          </div>
        </div>
      </nav>
      
    )
  }
}

export default Nav