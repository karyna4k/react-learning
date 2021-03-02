import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

function Profile() {
  return (
    <main className={styles.content}>
      <div className={styles.content__img}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg"
          alt=""
        />
      </div>
      <div>ava + info</div>
      <MyPost />
      <ul className={styles.posts}>
        <Post />
      </ul>
    </main>
  );
}

export default Profile;
