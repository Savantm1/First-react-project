import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from "../../redux/usersReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from './Users';
import React from 'react';
import Preloader from "../../common/Preloader/Preloader";


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(Response => {
    this.props.toggleIsFetching(false);
    this.props.setUsers(Response.data.items);
    this.props.setTotalUsersCount(Response.data.totalCount);
  })
  };

  


  onPageChanged = (pageNumber)=> {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${pageNumber}`).then(Response => {
      this.props.toggleIsFetching(false)
        this.props.setUsers( Response.data.items)
      })
    }
  

  render() {

    return (<>
      {this.props.isFetching ? <Preloader/>: null}
      <Users
      onPageChanged={this.onPageChanged}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      totalUsersCount={this.props.totalUsersCount}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      />
    </>)
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching
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
   },
   toggleIsFetching: (isFetching) => {
     dispatch(toggleIsFetchingAC(isFetching));
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

