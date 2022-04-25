import React, { Component } from 'react'

export class Dropdown extends Component {
  render() {
    return (
        <li className="nav-item btn-group">
        <a type="button" className='btn btn-dark dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
          +
        </a>
        <ul className="dropdown-menu bg-dark dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item hclr text-light">New repository</a></li>
          <li><a className="dropdown-item hclr text-light">Import repository</a></li>
          <li><a className="dropdown-item hclr text-light">New gist</a></li>
          <li><a className="dropdown-item hclr text-light">New organization</a></li>
          <li><a className="dropdown-item hclr text-light">New project</a></li>
        </ul>
      </li>
    )
  }
}

export default Dropdown