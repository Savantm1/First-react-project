const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
      
  namesData: [

    { id: '1', name: 'Margarita' },
    { id: '2', name: 'Tony' },
    { id: '3', name: 'Maks' },
    { id: '4', name: 'Dima' },
    { id: '5', name: 'Vlad' },
    { id: '6', name: 'Sid' }
  
  ],
    
  messagesData: [
    { name: 'Sid', text: "Hi bro! How are you ?" },
    { name: 'Me', text: "Hello dude! I'm fine. And you ?" },
    { name: 'Sid', text: "Me too. Let's go to the gym?" },
    { name: 'Me', text: "Ok, go!" }
  
  ],
  newMessageBody: "",
}

const messagesReducer = (state = initialState, action) =>{

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