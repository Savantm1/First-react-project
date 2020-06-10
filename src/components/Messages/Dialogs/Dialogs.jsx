import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';




const Dialogs = (props) => {

  
  let namesElement = props.namesData.map(element => { return (<Dialog name={element.name} id={element.id} />) })

 return (
   <div className={styles.block}>
     <h3 className={styles.title}>Dialogs</h3>
     <ul className={styles.list}>

       {namesElement}

     </ul>
   </div>
 )
};

export default Dialogs;