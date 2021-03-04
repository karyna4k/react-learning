import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
  const postsElements = props.posts.map((p) => (
    <Post message={p.post} likesCount={p.likesCount} />
  ));

  return (
    <div>
      <div className={styles.MyPost}>
        <h2 className={styles.title}>My posts</h2>
        <form action="">
          <textarea name="" id="" placeholder="Your news..."></textarea>
          <button>Send</button>
        </form>
      </div>
      <ul className={styles.posts}>{postsElements}</ul>
    </div>
  );
}

export default MyPost;
