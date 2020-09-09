import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';





const App = (props) => {
  debugger;

  return (
      <div className="app_wrapper">
        <HeaderContainer/>
      <Navbar />
        <section className='app_wrapper__content'>
        
        <Route path="/profile/:userId?" render={() => { return <ProfileContainer />}} />
        <Route path="/messages" render={() => { return <Messages /> }} />
        <Route path="/users" render={() => {return <UsersContainer/> }} />
          
        </section>
      </div>
  );

}



export default App;

