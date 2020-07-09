import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
 profilePage: profileReducer,
 messagesPage: messagesReducer,
 Navbar: navbarReducer,
 UsersPage: usersReducer
}) 
let store = createStore(reducers);

export default store;