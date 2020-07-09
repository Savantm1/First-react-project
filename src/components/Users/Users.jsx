import React from 'react';
import styles from './Users.module.css';
import User from './User/User';

let Users = (props) => {

 let userElement = props.users.map((element)=> {
  return (<User avatar={element.avatar} status={element.status} name={element.name} county={element.country} city={element.city} btnText={element.followed ? "Follow" : "Unfollow"} onClick={element.followed ? () => { props.unfollow(element.id) } : () => { props.follow(element.id) } } />)
 })
 return (
  
  < div className={styles.users}>
   <h3 className={styles.title}> Users</h3>
   {userElement}
  </div >
 )
 
}

export default Users;