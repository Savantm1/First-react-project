
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/messagesReducer';
import MessageBlock from './MessageBlock';
import { connect } from 'react-redux';



// const MessageBlockContainer = (props) => {



//  return (
//   <StoreContext.Consumer>
//    {(store) => {
//      let state = store.getState().messagesPage;

//      let addMessage = () => {
//       store.dispatch(sendMessageCreator());
      
//      }
     
//      let onMessageChange = (body) => {
      
//       let action = updateNewMessageBodyCreator(body);
//       store.dispatch(action);
//      }

//     return (
//      <MessageBlock newMessageBody={state.newMessageBody} addMessage={addMessage} onMessageChange={onMessageChange} messagesData={state.messagesData}/>
//     )
//    }}

//   </StoreContext.Consumer>
//  )
// }

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.messagesPage.newMessageBody,
    messagesData : state.messagesPage.messagesData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage  : () => {
      dispatch(sendMessageCreator())
    },
    onMessageChange : (body) => { 
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}
const MessageBlockContainer = connect(mapStateToProps,mapDispatchToProps)(MessageBlock);

export default MessageBlockContainer;