
import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
 debugger
 return {
  friendsData: state.Navbar.friendsData
 }
}

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;