import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header/>
        <Navbar friendsData={props.state.Navbar.friendsData}/>
        <section className='app_wrapper__content'>
        
          <Route path="/profile/" render={() => {return <Profile profilePage={props.state.profilePage} />}} />
          <Route path="/messages/" render={() => {return <Messages messagesPage={props.state.messagesPage} />}} />
          
        </section>
      </div>
    </BrowserRouter>
  );

}



export default App;

