import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from 'react-use-cart';
import './assets/sass/style.css'
import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';


const initialState ={
    count:0
}

const store =createStore((state=initialState,action)=>{
switch (action.type) {
    case "INCREMENT":
        return{
            count:state.count+1
        }
        
    default:
        return state;
}
})

console.log(store.getState());

const App =()=>{
    return(
        <CartProvider>
        <AppRouter />
        </CartProvider>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
