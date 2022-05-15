import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "react-use-cart";
import Router from "./router/Router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class App extends Component{
    render(){
        return(
        <CartProvider>
        <Router />
        </CartProvider>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));