import React, { Component } from 'react'

export default class BlogForm extends Component {
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            title:"",
            description:"",
            error:""
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.title||!this.state.description){
            this.setState({error:"xanalari doldurun"})
        }
    }
    render(){
        return (
            <div>
                {this.state.error&&<p className='alert alert-info'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input placeholder='title' className="form-control" />
                </div>
                <div className="form-floating mb-5">
                  <textarea className="form-control"/>
                  <label>Description</label>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
        )
    }
}
