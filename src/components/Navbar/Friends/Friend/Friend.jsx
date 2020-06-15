import React from 'react';
import styles from './Friend.module.css';

let Friend = (props) => {
 return (
  <li className={styles.friend}>
   <img className={styles.image} src="https://www.blexar.com/avatar.png" alt="avatar" />
   <span className={styles.name}>{props.name}</span>
  </li>
 )
}

export default Friend;