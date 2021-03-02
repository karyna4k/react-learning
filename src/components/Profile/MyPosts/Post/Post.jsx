import styles from "./Post.module.css";

function Post() {
  return (
    <li className={styles.post__item}>
      <div className={styles.post__img}>
        <img src="https://html5css.ru/w3images/avatar6.png" alt="" />
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        neque alias ab unde, cum modi minima eum error aut dolores explicabo
        quibusdam dolor? Laborum ut, nemo id magnam exercitationem aliquam.
      </div>
    </li>
  );
}

export default Post;
