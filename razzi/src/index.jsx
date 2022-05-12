import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { CartProvider } from 'react-use-cart';



class App extends Component{
  render(){
      return( 
          <>
           <CartProvider>
        <Router />
        </CartProvider>
          </>
      )
  }
}
   
  
  
  ReactDOM.render(<App />,document.getElementById("root"))