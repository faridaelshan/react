import React,{Component} from "react";
import ReactDOM from "react-dom";
import './sass/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Router from "./router/Router";
import { CartProvider } from "react-use-cart";

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