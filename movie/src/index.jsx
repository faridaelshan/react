import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList.jsx";
import Nav from './Nav'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


class App extends Component{
  render(){
    return(
      <>
      <MovieProvider>
      <Nav />
      <MovieList />
      </MovieProvider>
      </>
    )
  }
}
 


ReactDOM.render(<App />,document.getElementById("root"))