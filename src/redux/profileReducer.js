const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
      
      postsData: [
        { name: "Jonny", message: "Hello! It's my first message.", likes: '10' },
        { name: "Jonny", message: "I like React!", likes: '666' }
      ],
      newPostText: "text"
    }

const profileReducer =(state = initialState, action) =>{
  
 switch(action.type){
   case ADD_POST:
     {
       let newPost = {
         name: 'Jonny',
         message: state.newPostText,
         likes: '0'
       }
         
       let stateCopy = { ...state };
       stateCopy.postsData = [...state.postsData];
       stateCopy.postsData.push(newPost);
       stateCopy.newPostText = '';
       return stateCopy;
     }
   case UPDATE_NEW_POST_TEXT:
     {
       let stateCopy = { ...state };
       stateCopy.newPostText = action.newText;
       return stateCopy;
     }
  default:
   return state}
 }




export const addPostActionCreator = () => {
 return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
 return {type: UPDATE_NEW_POST_TEXT, newText : text}
}

export default profileReducer;