import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import avatar_default from "../../assets/images/avatar_default.png";




let Users = (props) => {

 let userElement = props.users.map((element) => {
  return (<User
   avatar={element.photos.small == null ? avatar_default : element.photos.small}
 status={element.status}
 name={element.name}
 county={'element.country'}
 city={'element.city'}
    btnText={element.followed ? "Follow" : "Unfollow"} onClick={element.followed ? () => { props.unfollow(element.id) } : () => { props.follow(element.id) }} />)
})
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }

 return (
 
  < div className={styles.users}>
  <h3 className={styles.title}> Users</h3>
  <ul className={styles.paginator}>
  
    {pages.map(p => { 
      return <li className={props.currentPage === p ? styles.item__active : styles.item} onClick={(e) =>{props.onPageChanged(p)} }>{p}</li>
        }
  
       )}
   
   </ul>
   
   {userElement}
   
  </div >
  )
  
}


export default Users;