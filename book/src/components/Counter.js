import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        this.minusbtn = this.minusbtn.bind(this);
        this.plsbtn = this.plsbtn.bind(this);
        this.state={
            count:0
        }
    }
    minusbtn(){
        if(this.state.count>0){
            this.setState({
                count: this.state.count -1
            })
        }
    }
    plsbtn(){
        this.setState({
            count: this.state.count +1
        })
    }
  render() {
    return (
      <div className='counter'>
          <button onClick={this.minusbtn} className='min'>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.plsbtn} className='pls'>+</button>
      </div>
    )
  }
}

export default Counter