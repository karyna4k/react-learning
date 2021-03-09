import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, {subscribe} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
} from "./redux/state";

function rerenderEntireTree(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
