import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { id: 1, post: "It's my first post!", likesCount: 5 },
  { id: 2, post: "Hi. How are you?", likesCount: 47 },
  { id: 3, post: "6666", likesCount: 47 },
];

const dialogs = [
  { id: 1, name: "Barsik" },
  { id: 2, name: "Marsik" },
  { id: 3, name: "Pig" },
  { id: 4, name: "Chupa" },
  { id: 5, name: "Bublik" },
];

const messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Hello! I'm fine." },
  { id: 4, message: "And you?" },
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
