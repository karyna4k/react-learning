const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };

    case ADD_MESSAGE:
      let newMessage = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 10, message: newMessage }],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogsReducer;
