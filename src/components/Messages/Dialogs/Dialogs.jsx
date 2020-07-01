import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import StoreContext from '../../../StoreContext';




const Dialogs = (props) => {

  debugger;
  

  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().messagesPage.namesData;
        let namesElement = state.map(element => { return (<Dialog name={element.name} id={element.id} />) })
        return (
          <div className={styles.block}>
          <h3 className={styles.title}>Dialogs</h3>
          <ul className={styles.list}>
     
            {namesElement}
     
          </ul>
        </div>
        )
      }}
   </StoreContext.Consumer>
 )
};

export default Dialogs;