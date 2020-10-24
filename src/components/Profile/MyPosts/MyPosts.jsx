import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';



let MyPosts = (props) => {
  debugger;
  
  let newPostElement = React.createRef(); // создаем ссылку на новый элдемент

// добавляем новый пост
  // let newPost = () => {
    
  // props.addPost();

  // }
// вносим изменения в пост
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  }

  let PostsElements = props.postsData.map(element => < Post name={element.name} message={element.message} likes={element.likes} />);
  
  return (
    <div className={styles.posts}>
      <div>
        <div className={styles.new}>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} className={styles.text}/>
          <button onClick={props.addPost}  className={styles.btn}>Add post</button>
        </div>
       
        { PostsElements }
      </div>
    </div>
  )
}

export default MyPosts;

