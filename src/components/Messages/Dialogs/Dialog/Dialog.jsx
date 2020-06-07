import React from 'react';
import styles from './Dialog.module.css';

const Dialog = (props) => {
 return (

  <li className={styles.item}>{props.name}</li>
  
 )
}

export default Dialog;