import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';




const App = () => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header/>
        <Navbar />
        <section className='app_wrapper__content'>
          <Route path="/profile/" component={Profile} />
          <Route path="/messages/" component={Messages} />
        </section>
      </div>
    </BrowserRouter>
  );

}



export default App;

