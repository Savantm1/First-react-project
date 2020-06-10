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
        <Navbar />
        <section className='app_wrapper__content'>
        
          <Route path="/profile/" render={() => {return <Profile postsData={props.postsData} />}} />
          <Route path="/messages/" render={()=>{return  <Messages namesData={props.namesData} messagesData={props.messagesData} />}} />
          
        </section>
      </div>
    </BrowserRouter>
  );

}



export default App;

