
import * as serviceWorker from './serviceWorker';

import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, changePostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
 ReactDOM.render(
  <BrowserRouter>
   <App state={state} addPost={addPost} changePostText={changePostText}/>
  </BrowserRouter>,document.getElementById('root')
 );

}
rerenderEntireTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



