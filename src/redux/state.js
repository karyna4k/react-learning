const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "It's my first post!", likesCount: 5 },
        {
          id: 2,
          post: "Hi. How are you?",
          likesCount: 47,
        },
        {
          id: 3,
          post: "6666",
          likesCount: 47,
        },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        {
          id: 1,
          name: "Barsik",
        },
        {
          id: 2,
          name: "Marsik",
        },
        {
          id: 3,
          name: "Pig",
        },
        {
          id: 4,
          name: "Chupa",
        },
        {
          id: 5,
          name: "Bublik",
        },
      ],
      messages: [
        {
          id: 1,
          message: "Hi!",
        },
        {
          id: 2,
          message: "How are you?",
        },
        {
          id: 3,
          message: "Hello! I'm fine.",
        },
        {
          id: 4,
          message: "And you?",
        },
      ],
      newMessageText: "",
    },
    navbar: {
      friends: [
        {
          id: 1,
          name: "Barsik",
        },
        {
          id: 2,
          name: "Marsik",
        },
        {
          id: 3,
          name: "Chipik",
        },
        {
          id: 4,
          name: "Svinenok",
        },
        {
          id: 5,
          name: "Maloe",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 10,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.messagesPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
