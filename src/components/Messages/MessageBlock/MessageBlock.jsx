import React from 'react';
import styles from './MessageBlock.module.css';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/messagesReducer';


const MessageBlock = (props) => {

 let state = props.store.getState().messagesPage;

 let addMessage = () => {
  props.store.dispatch(sendMessageCreator());
 }
 
 let onMessageChange = (evt) => {
  
  let body = evt.target.value;
  let action = updateNewMessageBodyCreator(body);
  props.store.dispatch(action);
 }

 let messagesElement = state.messagesData.map((element) => { return (<Message name={element.name} text={element.text} />) });
 let newMessageBody = state.newMessageBody;
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