
import { connect } from 'react-redux';
import Dialogs from './Dialogs';


let mapStateToProps = (state)=>{
 return {
  namesData: state.messagesPage.namesData
 }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;