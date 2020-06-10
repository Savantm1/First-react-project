import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

 return (

  <li className={styles.item} >
   <NavLink to={'/messages/' + props.id}  className={styles.link} activeClassName={styles.active}> {props.name} </NavLink> 
  </li>
  
 )
}

export default Dialog;