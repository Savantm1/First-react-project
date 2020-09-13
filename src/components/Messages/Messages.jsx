import React from 'react';
import styles from './Messages.module.css';
import MessageBlockContainer from './MessageBlock/MessageBlockContainer';
import DialogsContainer from './Dialogs/DialogsContainer';

const Messages = (props) => {



 return (
   <div className={styles.block}>
     
     <DialogsContainer />
     <MessageBlockContainer />
   
   </div>
  )
}

export default Messages;