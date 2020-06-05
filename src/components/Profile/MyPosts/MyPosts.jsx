import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post'

let MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div >
        <p className={styles.new}>new posts</p>
        <Post name="Jonny" message="Hello! It's my first message." likes="10"/>
        <Post name="Jonny" message="I like React!" likes="666"/>
      </div>
    </div>
  )
}

export default MyPosts;

