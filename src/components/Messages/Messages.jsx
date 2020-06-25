import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import styles from './Messages.module.css';
import MessageBlock from './MessageBlock/MessageBlock';

const Messages = (props) => {
  debugger;


 return (
   <div className={styles.block}>
     
     <Dialogs store={props.store}/>
     <MessageBlock store={props.store}/>
   
   </div>
  )
}

export default Messages;