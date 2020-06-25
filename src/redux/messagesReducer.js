const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messagesReducer = (state, action) =>{

 switch (action.type) {
  case UPDATE_NEW_MESSAGE_BODY:
    
   state.newMessageBody = action.body;
   return state;
  
  case SEND_MESSAGE:
   
   let body = state.newMessageBody;
   let message = {
    name: 'Me',
    text: body
   };
   state.newMessageBody = '';
   state.messagesData.push(message);
   return state;
 
  default:
   
   return state;
 }
};

export const sendMessageCreator = () => {
 return { type: SEND_MESSAGE }
};

export const updateNewMessageBodyCreator = (body) => {
 return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
};

export default messagesReducer;