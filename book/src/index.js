import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/style.css'
import Card from './components/Card';
import Counter from './components/Counter';


class App extends Component{
  render(){
    return(
      <div>
        <Card />
        <Counter />
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));