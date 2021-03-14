import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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
          name: "Chupa",
        },
        {
          id: 4,
          name: "Svinenok",
        },
        {
          id: 5,
          name: "Bublik",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
