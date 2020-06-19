import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post'

let MyPosts = (props) => {

  let newPostElement = React.createRef();
  let newPost = () => {
    
    props.addPost();

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changePostText(text);
    console.log(text);
  }

  let PostsElements = props.postsData.map(element => < Post name={element.name} message={element.message} likes={element.likes} />);
  
  return (
    <div className={styles.posts}>
      <div>
        <div className={styles.new}>
          <textarea ref={newPostElement} onChange={onPostChange} className={styles.text}/>
          <button onClick={newPost}  className={styles.btn}>Add post</button>
        </div>
       
        { PostsElements }
      </div>
    </div>
  )
}

export default MyPosts;

