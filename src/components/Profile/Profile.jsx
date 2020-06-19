import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




let Profile = (props) => {

 return (
   <div className={styles.Profile_block}>
     <ProfileInfo />
     <MyPosts postsData={props.profilePage.postsData} changePostText={props.changePostText} addPost={props.addPost}/>
   </div>
 )
}

export default Profile;

