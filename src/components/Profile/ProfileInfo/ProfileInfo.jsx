import styles from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <div className={styles.topImage}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg"
          alt=""
        />
      </div>
      <div className={styles.descr}>ava + info</div>
    </div>
  );
}

export default ProfileInfo;