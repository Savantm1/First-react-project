import React from 'react';
import styles from './MessageBlock.module.css';
import Message from './Message/Message';

const MessageBlock = () => {
 return (
  <div className={styles.message_block}>
   <h3 className={styles.title}>Messages</h3>
   <Message name="Sid" text="Hi bro! How are you ?" />
   <Message name="Me" text="Hello dude! I'm fine. And you ?" />
   <Message name="Sid" text="Me too. Let's go to the gym?" />
   <Message name="Me" text="Ok, go!" />
  </div>
 )
}

export default MessageBlock;