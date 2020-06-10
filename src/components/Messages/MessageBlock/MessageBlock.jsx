import React from 'react';
import styles from './MessageBlock.module.css';
import Message from './Message/Message';

const MessageBlock = (props) => {



 let messagesElement = props.messagesData.map((element) => { return (<Message name={element.name} text={element.text} />) });
 return (
  <div className={styles.message_block}>
   <h3 className={styles.title}>Messages</h3>

   {messagesElement};

  </div>
 )
}

export default MessageBlock;