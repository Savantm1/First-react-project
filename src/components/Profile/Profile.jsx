import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




let Profile = (props) => {
  debugger;
 return (
   <div className={styles.Profile_block}>
     <ProfileInfo />
     <MyPosts store={props.store}/>
   </div>
 )
}

export default Profile;

