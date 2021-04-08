import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.post} key={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={styles.MyPost}>
        <h2 className={styles.title}>My posts</h2>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          className={styles.textarea}
          placeholder="Text your post..."
        />
        <button onClick={onAddPost}>Post</button>
      </div>
      <ul className={styles.posts}>{postsElements}</ul>
    </div>
  );
};

export default MyPosts;
