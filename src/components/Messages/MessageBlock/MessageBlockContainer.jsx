
import { updateNewMessageBody, sendMessage} from '../../../redux/messagesReducer';
import MessageBlock from './MessageBlock';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    newMessageBody: state.messagesPage.newMessageBody,
    messagesData : state.messagesPage.messagesData
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage  : () => {
//       dispatch(sendMessageCreator())
//     },
//     onMessageChange : (body) => { 
//       dispatch(updateNewMessageBodyCreator(body))
//     }
//   }
// }
const MessageBlockContainer = connect(mapStateToProps,{sendMessage,updateNewMessageBody})(MessageBlock);

export default MessageBlockContainer;