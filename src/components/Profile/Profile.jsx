import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div>
      <div className={styles.content__img}>
        <img className={styles.content__i}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg"
          alt=""
        />
      </div>
      <div>ava + info</div>
      <MyPost />
    </div>
  );
}

export default Profile;
