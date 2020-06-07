import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';


const Dialogs = () => {
 return (
  <div className={styles.block}>
  <h3 className={styles.title}>Dialogs</h3>
  <ul className={styles.list}>
   <Dialog name="Margarita" />
   <Dialog name="Tony"/>
   <Dialog name="Maks"/>
   <Dialog name="Dima"/>
   <Dialog name="Vlad" />
   <Dialog name="Sid"/>
  </ul>
  </div>
 )
};

export default Dialogs;