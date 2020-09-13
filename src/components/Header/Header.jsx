import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';


let Header = (props) => {
  debugger
 return (
  <header className={styles.header}>
     <img className={styles.img} src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/technology-logo-maker-lp/online-logo-design-template-for-an-eco-tech-company-2176l-206-el-1024x1024.png" alt="logo"></img>
     <div className={styles.loginBlock}>
       {props.isAuth ? <div className={styles.login}>{props.login}</div> : <NavLink className={styles.login} to={'/login'}>Login</NavLink> }
        
     </div>
  </header>
 )
}

export default Header;