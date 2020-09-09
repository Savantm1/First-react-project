import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';


let reducers = combineReducers({
 profilePage: profileReducer,
 messagesPage: messagesReducer,
 Navbar: navbarReducer,
 UsersPage: usersReducer,
 auth: authReducer
}) 


let store = createStore(reducers);


window.store = store;
export default store;