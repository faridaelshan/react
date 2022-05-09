import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addBlog,removeBlog,editBlog } from './action/blog';
import AppRouter from './routers/AppRouter';

const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})
const megale1 =store.dispatch(addBlog({title:"blog",description:"live begins after coffee"}))
const megale2=store.dispatch(addBlog({title:"blog1",description:"live begins after coffee1"}))
console.log(megale1.blog.id);
store.dispatch(removeBlog({id:megale1.blog.id}))
store.dispatch(editBlog(megale2.blog.id,{title:"update"}))
store.dispatch(addBlog({title:"new",description:"new description"}))


const App=()=>{
    return(
        <Provider store={store}>
            <div className='container'>
            <AppRouter />
            </div>
        </Provider>
    )
}


ReactDOM.render(<App />,document.getElementById('root'));