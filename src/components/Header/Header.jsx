import React from 'react';
import styles from './Header.module.css';


let Header = () => {
 return (
  <header className={styles.header}>
    <img className={styles.img} src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/technology-logo-maker-lp/online-logo-design-template-for-an-eco-tech-company-2176l-206-el-1024x1024.png" alt="logo"></img>
  </header>
 )
}

export default Header;