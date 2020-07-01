import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';





const App = (props) => {
  debugger;

  return (
      <div className="app_wrapper">
        <Header/>
      <Navbar />
        <section className='app_wrapper__content'>
        
        <Route path="/profile/" render={() => { return <Profile />}} />
        <Route path="/messages/" render={() => {return <Messages />}} />
          
        </section>
      </div>
  );

}



export default App;

