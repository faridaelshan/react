import { combineReducers, createStore } from 'redux'
import BlogReducer from '../reducers/blog';

//store start
export default ()=>{
    const store = createStore(
    combineReducers({
        itema: BlogReducer
    })
)
return store;
}
//store end