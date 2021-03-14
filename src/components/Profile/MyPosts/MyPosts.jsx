import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profileReducer";

function MyPost(props) {
  const postsElements = props.posts.map((p) => (
    <Post message={p.post} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  function addPost() {
    props.dispatch(addPostActionCreator());
  }

  function onChangeText() {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div>
      <div className={styles.MyPost}>
        <h2 className={styles.title}>My posts</h2>
        <textarea
          onChange={onChangeText}
          value={props.newPostText}
          ref={newPostElement}
          className={styles.textarea}
          placeholder="Text your post..."
        />
        <button onClick={addPost}>Post</button>
      </div>
      <ul className={styles.posts}>{postsElements}</ul>
    </div>
  );
}

export default MyPost;
