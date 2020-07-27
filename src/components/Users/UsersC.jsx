import React from 'react';
import * as axios from "axios";
import styles from "./Users.module.css"
import User from './User/User';
import avatar_default from "../../assets/images/avatar_default.png";

class Users extends React.Component {

  // constructor(props) {
  //   super(props);
  componentDidMount() {

  axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(Response => {
    this.props.setUsers(Response.data.items);
    this.props.setTotalUsersCount(Response.data.totalCount);
  })
  }
  


      
  onPageChanged = (pageNumber)=> {
    {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${pageNumber}`).then(Response => {
        this.props.setUsers( Response.data.items)
  })
    }
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
    
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }




 return (
   < div className={styles.users}>
     <h3 className={styles.title}> Users</h3>
     <ul className={styles.paginator}>

       {pages.map(p => { 
         return <li className={this.props.currentPage === p ? styles.item__active : styles.item} onClick={(e) =>{this.onPageChanged(p)} }>{p}</li>
           }

          )}
      
     </ul>
     {/* <button onClick={this.setUsers}>btn</button> */}
   {userElement}
  </div >
 )
  }
}


export default Users;