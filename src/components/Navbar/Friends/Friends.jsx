import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';


let Friends = (props) => {
 debugger;
 let friendsElements = props.friendsData.map((friendElement)=>{return(<Friend id={friendElement.id} name={friendElement.name} />)})

 return (
  <section className={styles.block}>
   <p className={styles.title}>Friends</p>
   <ul className={styles.list}>
    {friendsElements}
   </ul>
  </section>
 )
}

export default Friends;