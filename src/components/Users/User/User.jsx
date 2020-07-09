import React from 'react';
import styles from './User.module.css';

let User = (props) => {
 return (
  <div className={styles.block}>
   <div className={styles.left_side}>
    <img className={styles.avatar} src={props.avatar} alt="avatar" />
    <button className={styles.btn}>{props.btnText} onClick={props.onClick}</button>
   </div>
   <div className={styles.right_side}>
    <span className={styles.name}>{props.name}</span>
    <div className={styles.place_block}>
     <span className={styles.country}>{props.county}</span>
     <span className={styles.city}>{props.city}</span>
    </div>
    <span className={styles.status}>{props.status}</span>
   </div>
  </div>
 )
}

export default User;