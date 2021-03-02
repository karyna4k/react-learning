import styles from "./MyPost.module.css";

function MyPost() {
  return (
    <div className={styles.MyPost}>
      <h2 className={styles.title}>My posts</h2>
      <form action="">
        <textarea name="" id="" placeholder="Your news..."></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default MyPost;
