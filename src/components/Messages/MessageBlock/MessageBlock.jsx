import React from 'react';
import styles from './MessageBlock.module.css';
import Message from './Message/Message';



const MessageBlock = (props) => {


 let addMessage = () => {
  props.addMessage();
 }
 
 let onMessageChange = (evt) => {
  
  let body = evt.target.value;
  props.onMessageChange(body);
 }

 let messagesElement = props.messagesData.map((element) => { return (<Message name={element.name} text={element.text} />) });
 let newMessageBody = props.newMessageBody;
 return (
  <div className={styles.message_block}>
   <h3 className={styles.title}>Messages</h3>

   {messagesElement}
   <div className={styles.newMessage}>
    <textarea  onChange={onMessageChange} value ={newMessageBody} className={styles.text}></textarea>
    <button onClick={ addMessage} className={styles.btn}>send message</button>
   </div>
  </div>
 )
}

export default MessageBlock;