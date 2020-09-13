import React from 'react';
import styles from "./Profile.module.css";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../common/Preloader/Preloader';




let Profile = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

 return (
   <div className={styles.Profile_block}>
     <ProfileInfo profile={props.profile}/>
     <MyPostsContainer />
   </div>
 )
}

export default Profile;

