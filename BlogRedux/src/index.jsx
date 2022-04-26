import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { addBlog,removeBlog,editBlog } from './action/blog';

const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})
const megale1 =store.dispatch(addBlog({title:"blog",description:"live begins after coffee"}))
const megale2=store.dispatch(addBlog({title:"blog1",description:"live begins after coffee1"}))
console.log(megale1.blog.id);
store.dispatch(removeBlog({id:megale1.blog.id}))
store.dispatch(editBlog(megale2.blog.id,{title:"update"}))


const App=()=>{
    return(
        <>
        <h1>start</h1>
        </>
    )
}


ReactDOM.render(<App />,document.getElementById('root'));