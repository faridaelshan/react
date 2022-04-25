import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div>
         <button type="button" className="btn btn-outline-secondary">Search or jump to...
           <button type="button" className="btn btn-outline-secondary">/</button>
         </button>
         <input type="text" placeholder='Search or jump to...' className='btn btn-outline-secondary'/>
      </div>
    )
  }
}

export default Search