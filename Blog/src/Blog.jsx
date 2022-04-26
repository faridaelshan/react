import React from 'react'
import { combineReducers, createStore } from 'redux'


//Action start
const addBlog =()=>({
    type: "ADD_BLOG", 
    blog:{
        id:1,
        title:"basliq",
        description:"desc"
    }
})
//Action end



//Reducers start
const blogState=[];

const BlogReducer = (state=blogState, action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return[
                ...state,
                action.blog
            ]
            case "EDIT_BLOG":
                case "REMOVE_BLOG":
                    default:
                        return state;
    }
}
//Reducers end

//store start
const store = createStore(
    combineReducers({
        item: BlogReducer
    })
)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(addBlog())
//store end
const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog