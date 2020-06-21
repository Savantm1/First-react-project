const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// CONST UPDATE_NEW_MESSAGE_



let store = {
    _state : {
        profilePage: {
              postsData: [
                { name: "Jonny", message: "Hello! It's my first message.", likes: '10' },
                { name: "Jonny", message: "I like React!", likes: '666' }
              ],
              newPostText: "text"
        },
  
    messagesPage: {
      
      namesData: [
    
        { id: '1', name: 'Margarita' },
        { id: '2', name: 'Tony' },
        { id: '3', name: 'Maks' },
        { id: '4', name: 'Dima' },
        { id: '5', name: 'Vlad' },
        { id: '6', name: 'Sid' }
      
      ],
        
      messagesData: [
        { name: 'Sid', text: "Hi bro! How are you ?" },
        { name: 'Me', text: "Hello dude! I'm fine. And you ?" },
        { name: 'Sid', text: "Me too. Let's go to the gym?" },
        { name: 'Me', text: "Ok, go!" }
      
      ],
      newMessageBody: "",
    },
  
    Navbar: {
  
      friendsData: [
  
        { id: '1', name: 'Sid' },
        { id: '2', name: 'Vlad' },
        { id: '3', name: 'Dima' },
        { id: '4', name: 'Margarita' }
        
      ]
    }
   
  },

  getState() {
    return this._state;
  },

  _callSubscriber()  {

  },

   subscribe (observer) {
      this._callSubscriber = observer;
  },
  
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        name: "Jonny",
        message: this._state.profilePage.newPostText,
        likes: '0'
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
      
  } 
}
export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText : text}
}
export default store;
window.store = store;

