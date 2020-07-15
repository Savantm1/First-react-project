import React from 'react';
import * as axios from "axios";
import styles from "./Users.module.css"
import User from './User/User';
import avatar_default from "../../assets/images/avatar_default.png";


let Users = (props) => {

  let setUsers = () => {
    if (props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
        props.setUsers( Response.data.items)
  })
  
    }
  }

  


  let userElement = props.users.map((element) => {
    return (<User 
     avatar={element.photos.small == null ? avatar_default : element.photos.small}
   status={element.status}
   name={element.name}
   county={'element.country'}
   city={'element.city'}
   btnText={element.followed ? "Follow" : "Unfollow"} onClick={element.followed ? () => { props.unfollow(element.id) } : () => { props.follow(element.id) }} />)
 })
 return (
   < div className={styles.users}>
     <h3 className={styles.title}> Users</h3>
     <button onClick={setUsers}>btn</button>
   {userElement}
  </div >
 )
 
}

export default Users;