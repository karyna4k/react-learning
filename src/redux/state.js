import { rerenderEntireTree } from "./../render";

const state = {
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
};

export function addPost() {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
}

export function updateNewPostText(newText) {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
