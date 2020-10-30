import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, toggleIsFetching } from "../../redux/usersReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from './Users';
import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import { usersAPI} from "../../api/api.js";


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
      debugger;
    this.props.toggleIsFetching(false);
    this.props.setUsers(data.items);
    this.props.setUsersTotalCount(data.totalCount);
  })
  };

  


  onPageChanged = (pageNumber)=> {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(this.props.pageSize, pageNumber )
      .then(data => {
      this.props.toggleIsFetching(false)
        this.props.setUsers( data.items)
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



export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersAPIComponent)

