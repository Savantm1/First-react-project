import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post'

let MyPosts = (props) => {

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  let PostsElements = props.postsData.map(element => < Post name={element.name} message={element.message} likes={element.likes} />);
  
  return (
    <div className={styles.posts}>
      <div>
        <div className={styles.new}>
          <textarea ref={newPostElement} className={styles.text}></textarea>
          <button onClick={addPost}  className={styles.btn}>Add post</button>
        </div>
       
        { PostsElements }
      </div>
    </div>
  )
}

export default MyPosts;

