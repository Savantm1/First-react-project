import { followAC, steUsersAC, unfollowAC } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./UsersC";


let mapStateToProps = (state) => {
 return { users: state.UsersPage.users}
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
   dispatch (steUsersAC(users))
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

