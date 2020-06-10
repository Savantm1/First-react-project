import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

  let postsData = [
    { name: "Jonny", message: "Hello! It's my first message.", likes: '10' },
    { name: "Jonny", message: "I like React!", likes: '666' }
  ];

  let namesData = [
 
    { id: '1', name: 'Margarita' },
    { id: '2', name: 'Tony' },
    { id: '3', name: 'Maks' },
    { id: '4', name: 'Dima' },
    { id: '5', name: 'Vlad' },
    { id: '6', name: 'Sid' }
    
  ];
    
  let messagesData = [
    { name: 'Sid', text: "Hi bro! How are you ?" },
    { name: 'Me', text: "Hello dude! I'm fine. And you ?" },
    { name: 'Sid', text: "Me too. Let's go to the gym?" },
    { name: 'Me', text: "Ok, go!" }
    
   ];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} namesData={namesData} messagesData={messagesData} />
  </React.StrictMode >,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
