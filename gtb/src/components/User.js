import React, { Component } from 'react'

export class user extends Component {
  render() {
    return (
      <div className="card mt-5 ms-5 mb-3 bg-dark" style={{maxWidth: '500px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.username}</h5>
              <p className="card-text">{this.props.userinfo}</p>
              <p className="card-text"><small className="text-muted">{this.props.userid}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default user