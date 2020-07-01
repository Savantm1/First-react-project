import React from 'react';
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import StoreContext from '../../StoreContext';

let Navbar = (props) => {
  return (
    <StoreContext.Consumer>
      {store => {
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
          <Friends friends={store.getState().Navbar.friendsData} />
        </nav>
        )

        }
      }
    </StoreContext.Consumer>

  )

}

export default Navbar;