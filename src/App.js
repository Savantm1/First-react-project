import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';





const App = (props) => {


  return (
      <div className="app_wrapper">
        <Header/>
      <Navbar friendsData={props.state.Navbar.friendsData}/>
        <section className='app_wrapper__content'>
        
        <Route path="/profile/" render={() => { return <Profile store={props.store}/>}} />
        <Route path="/messages/" render={() => {return <Messages store={props.store} />}} />
          
        </section>
      </div>
  );

}



export default App;

