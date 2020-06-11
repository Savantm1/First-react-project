import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post'

let MyPosts = (props) => {

  debugger;
  let PostsElements = props.postsData.map(element => < Post name={element.name} message={element.message} likes={element.likes} />);
  
  return (
    <div className={styles.posts}>
      <div >
        <p className={styles.new}>new posts</p>
       
        { PostsElements };
      </div>
    </div>
  )
}

export default MyPosts;

