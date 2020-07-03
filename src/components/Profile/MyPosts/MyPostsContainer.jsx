
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';



// let MyPostsContainer = (props) => {
//  debugger;
 

  
//   return (
//     <StoreContext.Consumer>
//       {store => {

//           let newPost = () => {
            
//           store.dispatch(addPostActionCreator());

//           }

//           let onPostChange = (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           }
        
//           return ( <MyPosts onPostChange={onPostChange} newPost={newPost} newPostText={store.getState().profilePage.newPostText} postsData={store.getState().profilePage.postsData} />
//           )

//       }
        
//       }
//     </StoreContext.Consumer>
//     )
// }

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

