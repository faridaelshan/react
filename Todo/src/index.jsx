import React,{Component} from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class App extends Component{
    render(){
        return(
            <>
            <Todo />
            </>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));