import React from 'react';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



let MyPostsContainer = (props) => {
 debugger;
 

  
  return (
    <StoreContext.Consumer>
      {store => {

          let newPost = () => {
            
          store.dispatch(addPostActionCreator());

          }

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
        
          return ( <MyPosts onPostChange={onPostChange} newPost={newPost} newPostText={store.getState().profilePage.newPostText} postsData={store.getState().profilePage.postsData} />
          )

      }
        
      }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

