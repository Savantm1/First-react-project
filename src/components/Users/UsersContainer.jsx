import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./UsersC";


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

export default connect(mapStateToProps, mapDispatchToProps)(Users)

