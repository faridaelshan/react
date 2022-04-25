import React, { Component } from 'react'

export class Repositories extends Component {
  constructor(props){
    super(props);
    this.input=this.input.bind(this);
    this.state={
      keyword:""
    }
  }
  input(e){
    this.setState(
      {
        keyword: e.target.value
      }
    )
  }
  render() {
    return (
      <div className='container repositories mt-5' style={{"fontSize":"14px"}}>
          <div className='d-flex justify-content-between'>
              <p>Recent Repositories</p>
              <button style={{'width':'60px'}} className='btn-success rounded'><i className={this.props.icon}></i>  New</button>
          </div>
          <input style={{"width":"250px"}} onChange={this.state.input} type="text" placeholder='Find a repository...' className='btn mt-3 btn-outline-secondary'/>
          <ul>
              <li><a href=""><img src="" alt="" /></a></li>
          </ul>
          <hr className='bg-light' /> 
          <h6>Recent activity</h6>
          <p>{this.state.keyword}</p>
          <p className='text-muted'>When you take actions across GitHub, we'll provide links to that activity here.</p>
      </div>
    )
  }
}

export default Repositories