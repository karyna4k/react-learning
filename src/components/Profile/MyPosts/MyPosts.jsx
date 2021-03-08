import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
  const postsElements = props.posts.map((p) => (
    <Post message={p.post} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  function addPost() {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <div className={styles.MyPost}>
        <h2 className={styles.title}>My posts</h2>
        <textarea
          className={styles.textarea}
          ref={newPostElement}
        ></textarea>
        <button onClick={addPost}>Post</button>
      </div>
      <ul className={styles.posts}>{postsElements}</ul>
    </div>
  );
}

export default MyPost;
