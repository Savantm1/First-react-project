
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { updateNewPostText, addPost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData
  }
}


// let mapDispatchToProps = (dispatch) => {
//   return {
//     onPostChange : (text) => {
//       dispatch(updateNewPostTextActionCreator(text))
//     },
//     newPost: () => {
//       dispatch(addPostActionCreator())
//     }
//   }
// }

const MyPostsContainer = connect(mapStateToProps,{updateNewPostText,addPost})(MyPosts)

export default MyPostsContainer;

