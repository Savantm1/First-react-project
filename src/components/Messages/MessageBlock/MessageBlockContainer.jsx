import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/messagesReducer';
import MessageBlock from './MessageBlock';
import StoreContext from '../../../StoreContext';


const MessageBlockContainer = (props) => {



 return (
  <StoreContext.Consumer>
   {(store) => {
     let state = store.getState().messagesPage;

     let addMessage = () => {
      store.dispatch(sendMessageCreator());
      
     }
     
     let onMessageChange = (body) => {
      
      let action = updateNewMessageBodyCreator(body);
      store.dispatch(action);
     }

    return (
     <MessageBlock newMessageBody={state.newMessageBody} addMessage={addMessage} onMessageChange={onMessageChange} messagesData={state.messagesData}/>
    )
   }}

  </StoreContext.Consumer>
 )
}

export default MessageBlockContainer;