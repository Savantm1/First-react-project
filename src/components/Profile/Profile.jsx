import React from 'react';
import styles from "./Profile.module.css";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';




let Profile = (props) => {
  debugger;
 return (
   <div className={styles.Profile_block}>
     <ProfileInfo />
     <MyPostsContainer />
   </div>
 )
}

export default Profile;

