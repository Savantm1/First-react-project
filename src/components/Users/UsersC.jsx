import React from 'react';
import * as axios from "axios";
import styles from "./Users.module.css"
import User from './User/User';
import avatar_default from "../../assets/images/avatar_default.png";

class Users extends React.Component {

  constructor(props) {
    super(props);
  
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
        this.props.setUsers( Response.data.items)
  })

  }

  //  setUsers = () => {
  //   if (this.props.users.length === 0) {

  //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
  //       this.props.setUsers( Response.data.items)
  // })
  
  //   }
  // }

  render() {
    
  let userElement = this.props.users.map((element) => {
    return (<User 
     avatar={element.photos.small == null ? avatar_default : element.photos.small}
   status={element.status}
   name={element.name}
   county={'element.country'}
   city={'element.city'}
   btnText={element.followed ? "Follow" : "Unfollow"} onClick={element.followed ? () => { this.props.unfollow(element.id) } : () => { this.props.follow(element.id) }} />)
 })
 return (
   < div className={styles.users}>
     <h3 className={styles.title}> Users</h3>
     {/* <button onClick={this.setUsers}>btn</button> */}
   {userElement}
  </div >
 )
  }
}


export default Users;