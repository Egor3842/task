import {createStore, combineReducers, applyMiddleware}  from 'redux'
import {reducer as formReducer} from 'redux-form'
import UsersReducer from './UsersReducer';
import thunkMiddleware from 'redux-thunk'

let reducers=combineReducers({
    UsersReducer:UsersReducer,
    form:formReducer


})
let store=createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;