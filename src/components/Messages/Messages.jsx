import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import styles from './Messages.module.css';
import MessageBlock from './MessageBlock/MessageBlock';

const Messages = (props) => {
 return (
   <div className={styles.block}>
     <Dialogs />
    <MessageBlock/>
   
   </div>
  )
}

export default Messages;