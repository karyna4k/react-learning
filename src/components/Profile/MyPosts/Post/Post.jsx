import styles from "./Post.module.css";

function Post(props) {
  return (
    <li className={styles.post__item}>
      <div className={styles.post__img}>
        <img src="https://html5css.ru/w3images/avatar6.png" alt="" />
      </div>
      <div className={styles.text}>{props.message}</div>
    </li>
  );
}

export default Post;
