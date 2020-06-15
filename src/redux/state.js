let state = {
  
  profilePage: {
    
    postsData: [
      { name: "Jonny", message: "Hello! It's my first message.", likes: '10' },
      { name: "Jonny", message: "I like React!", likes: '666' }
    ]
    },

  messagesPage: {
    
    namesData : [
  
      { id: '1', name: 'Margarita' },
      { id: '2', name: 'Tony' },
      { id: '3', name: 'Maks' },
      { id: '4', name: 'Dima' },
      { id: '5', name: 'Vlad' },
      { id: '6', name: 'Sid' }
    
    ],
      
    messagesData : [
      { name: 'Sid', text: "Hi bro! How are you ?" },
      { name: 'Me', text: "Hello dude! I'm fine. And you ?" },
      { name: 'Sid', text: "Me too. Let's go to the gym?" },
      { name: 'Me', text: "Ok, go!" }
    
    ],

  },

  Navbar: {

    friendsData: [

      { id: '1', name: 'Sid'},
      { id: '2', name: 'Vlad'},
      { id: '3', name: 'Dima'},
      { id: '4', name: 'Margarita' }
      
    ]
  }
 
}


export default state;