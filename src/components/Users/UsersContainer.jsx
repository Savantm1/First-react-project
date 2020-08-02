import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from './Users';
import React from 'react';


class UsersAPIComponent extends React.Component {

  componentDidMount() {

  axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(Response => {
    this.props.setUsers(Response.data.items);
    this.props.setTotalUsersCount(Response.data.totalCount);
  })
  };

  
  

  onPageChanged = (pageNumber)=> {
    
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${pageNumber}`).then(Response => {
        this.props.setUsers( Response.data.items)
      })
    }
  

  render() {

    return (<Users
      onPageChanged={this.onPageChanged}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      totalUsersCount={this.props.totalUsersCount}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />)
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage
  }
}

let mapDispatchToProps =(dispatch)=> {
 return {
  follow: (userId) => {
   dispatch(followAC(userId))
  },
  unfollow: (userId) => {
   dispatch(unfollowAC(userId))
  },
  setUsers: (users) => {
   dispatch (setUsersAC(users))
   },
    setCurrentPage: (pageNumber)=> {
  dispatch(setCurrentPageAC(pageNumber))
   },
   setTotalUsersCount: (totalCount)=> {
    dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

