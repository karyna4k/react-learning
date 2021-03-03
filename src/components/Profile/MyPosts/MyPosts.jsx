import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {
  return (
    <div>
      <div className={styles.MyPost}>
        <h2 className={styles.title}>My posts</h2>
        <form action="">
          <textarea name="" id="" placeholder="Your news..."></textarea>
          <button>Send</button>
        </form>
      </div>
      <ul className={styles.posts}>
        <Post message="Hi. How are you?" />
        <Post message="It's my first post!" />
      </ul>
    </div>
  );
}

export default MyPost;
