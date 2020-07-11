
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS";

let initialState = {
 users: [
    {
      id: 1, avatar: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s1200',
      followed: false, name: 'Dima', country: 'Belarus', city: 'Minsk', status: 'Whats up? Follow me!'
    },
  { id: 2, avatar: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s1200',followed: true, name: 'Rita', country: 'Russia', city: 'Moscow', status: 'Kukusik!' },
  { id: 3, avatar: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s1200',followed: false, name: 'Anna', country: 'Ukraine', city: 'Kiev', status: 'I like bikes!' },
  { id: 4, avatar: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s1200',followed: false, name: 'Alex', country: 'USA', city: 'New York', status: 'YEAAH!' },
 ]
};

const usersReducer = (state = initialState, action) => {
 switch (action.type) {
  case FOLLOW: {

   let stateCopy = {
    ...state,
    users: state.users.map(u => {
     if (u.id === action.userId) {
      return { ...u, followed: true }
      }
      return u;
    })
   }
   return stateCopy;
  }
   
  case UNFOLLOW: {
   
   let stateCopy = {
    ...state,
    users: state.users.map(u => {
     if (u.id === action.userId) {
      return { ...u, followed: false }
     }
     return u;
    })
   }
   return stateCopy;
  }
   
  case SET_USERS: {
   return { ...state, users: action.users}
   }
  default:
   return state;

 }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const steUsersAC = (users) => ({ type: SET_USERS, users})

export default usersReducer;