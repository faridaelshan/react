import React, { Component } from 'react'

export default class BlogForm extends Component {
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            title: props.blog? props.blog.title:"",
            description: props.blog? props.blog.description:"",
            error:""
        }
    }
    onTitleChange=(e)=>{
        const title =e.target.value;
        this.setState(()=>({title}))
    }
    onDescriptionChange=(e)=>{
        const description =e.target.value;
        this.setState(()=>({description}))
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.title||!this.state.description){
            this.setState({error:"xanalari doldurun"})
        }else{
            this.setState({error:''});
            this.props.onSubmit({
                title:this.state.title,
                description:this.state.description,
            })
        }
    }
    render(){
        return (
            <div>
                {this.state.error&&<p className='alert alert-info'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input placeholder='title' value={this.state.title} onChange={this.onTitleChange} className="form-control" />
                </div>
                <div className="form-floating mb-5">
                  <textarea onChange={this.onDescriptionChange}  value={this.state.description} className="form-control"></textarea>
                  <label>Description</label>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
        )
    }
}
