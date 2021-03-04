import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {
  const posts = [
    { id: 1, post: "It's my first post!", likesCount: 5 },
    { id: 2, post: "Hi. How are you?", likesCount: 47 },
    { id: 3, post: "6666", likesCount: 47 },
  ];

  const postsElements = posts.map((p) => (
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
