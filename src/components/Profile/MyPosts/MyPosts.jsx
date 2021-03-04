import styles from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost() {

  const postsData = [
    {id: 1, post: "It's my first post!", likesCount: 5},
    {id: 2, post: "Hi. How are you?", likesCount: 47}
  ];

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
        <Post message={postsData[1].post} likesCount={postsData[1].likesCount}/>
        <Post message={postsData[0].post} likesCount={postsData[0].likesCount}/>
      </ul>
    </div>
  );
}

export default MyPost;
