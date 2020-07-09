
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange : (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    newPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

