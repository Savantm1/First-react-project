import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import avatar_default from "../../assets/images/avatar_default.png";
import * as axios from "axios";




let Users = (props) => {

 let userElement = props.users.map((element) => {
   return (<User
     id={element.id}
     avatar={element.photos.small == null ? avatar_default : element.photos.small}
     status={element.status}
     name={element.name}
     county={'element.country'}
     city={'element.city'}
     btnText={element.followed ? "Follow" : "Unfollow"} onClick={element.followed ? () => {

       axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${element.id}`,
         {
           withCredentials: true,
           headers: {
             "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
           }
         }).then(response => {
           if (response.data.resultCode == 0) {
           
             props.unfollow(element.id)
           }
         });
       

     } : () => {
       
       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${element.id}`,
         {},
         
       {withCredentials: true,
         headers: {
           "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
         }
         }).then(response => {
           if (response.data.resultCode == 0) {
           
             props.follow(element.id)
             
         }
       })
       }

     } />)
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