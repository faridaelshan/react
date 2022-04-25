import React, { Component } from 'react'
import Nav from './Nav'
import Repositories from './Repositories'
import Users from './Users'

export class App extends Component {
  render() {
    return (
      <>
      <Nav url="http://github.com" icon="fab fa-github"/>
      <div className='row bg-dark text-light'>
        <div className='col-3'>
          <Repositories icon="fa-light fa-book" />
        </div>
        <div className='col-9'>
          <Users />
        </div>
      </div>
      </>
    )
  }
}

export default App