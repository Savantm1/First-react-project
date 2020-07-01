import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import styles from './Messages.module.css';
import MessageBlockContainer from './MessageBlock/MessageBlockContainer';

const Messages = (props) => {
  debugger;


 return (
   <div className={styles.block}>
     
     <Dialogs />
     <MessageBlockContainer />
   
   </div>
  )
}

export default Messages;