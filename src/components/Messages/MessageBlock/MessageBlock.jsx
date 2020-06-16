import React from 'react';
import styles from './MessageBlock.module.css';
import Message from './Message/Message';

const MessageBlock = (props) => {

 let newMessageElement = React.createRef();
 let addMessage = () => {
  let text = newMessageElement.current.value;
  alert(text);
 }


 let messagesElement = props.messagesData.map((element) => { return (<Message name={element.name} text={element.text} />) });
 return (
  <div className={styles.message_block}>
   <h3 className={styles.title}>Messages</h3>

   {messagesElement}
   <div className={styles.newMessage}>
    <textarea ref={newMessageElement} className={styles.text}></textarea>
    <button onClick={ addMessage} className={styles.btn}>send message</button>
   </div>
  </div>
 )
}

export default MessageBlock;