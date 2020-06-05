import React from 'react';
import styles from "./Post.module.css";

let Post = (props) => {
  return (
    <div className={styles.item}>
      <img className={styles.item__avatar} src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="small_avatar" />
      <div className={styles.block_message}>
        <span className={styles.name}>{props.name}</span>
        <p className={styles.message}>{props.message} </p>
        <span className={styles.like}>{props.likes}</span>

      </div>
    </div>
  )
}

export default Post;

