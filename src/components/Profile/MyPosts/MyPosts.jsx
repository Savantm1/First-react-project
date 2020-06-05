import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post'

let MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div >
        <p className={styles.new}>new posts</p>
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;

