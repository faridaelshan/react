import React, { Component } from 'react'

export class Dropdownnav extends Component {
  render() {
    return (
        <li className="nav-item btn-group">
        <a  type="button" className='btn btn-dark dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
          <img src={this.props.signimg} alt="" className='rounded-circle'/>
        </a>
        <ul className="dropdown-menu bg-dark dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item text-light" >Signed in as <br />{this.props.signname}</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item text-light" href="#"><button className='bg-dark text-light rounded-3'><i className='fa-regular fa-face-smile'></i>  Set status</button></a></li>
          <li><hr className="dropdown-divider bg-light" /></li>
          <li><a className="dropdown-item hclr text-light">Your profile</a></li>
          <li><a className="dropdown-item hclr text-light">Your repositories</a></li>
          <li><a className="dropdown-item hclr text-light">Your codespaces</a></li>
          <li><a className="dropdown-item hclr text-light">Your projects</a></li>
          <li><a className="dropdown-item hclr text-light">Your stars</a></li>
          <li><a className="dropdown-item hclr text-light">Your gists</a></li>
          <li><hr className="dropdown-divider bg-light" /></li>
          <li><a className="dropdown-item hclr text-light">Upgradet</a></li>
          <li><a className="dropdown-item hclr text-light">Feature preview</a></li>
          <li><a className="dropdown-item hclr text-light">Help</a></li>
          <li><a className="dropdown-item hclr text-light">Settings</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item hclr text-light">Sign out</a></li>
        </ul>
      </li>
    )
  }
}

export default Dropdownnav