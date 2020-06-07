import React from 'react';
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

let Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} activeClassName={styles.active} to="/profile"> Profile </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} activeClassName={styles.active} to="/messages"> Messages </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} activeClassName={styles.active} to="/news"> News </NavLink>
        </li>
        <li className={styles.item}> 
          <NavLink className={styles.link} activeClassName={styles.active} to="/music"> Music </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} activeClassName={styles.active} to="/settings"> Settings </NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar;