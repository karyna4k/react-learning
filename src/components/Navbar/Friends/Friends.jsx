import styles from "./Friends.module.css";

function Friends() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Friends</h3>
      <ul className={styles.inner}>
        <li className={styles.item}>
          <a className={styles.link} href="">
            <div className={styles.img}>
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className={styles.name}>Barsik</div>
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="">
            <div className={styles.img}>
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className={styles.name}>Barsik</div>
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="">
            <div className={styles.img}>
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className={styles.name}>Barsik</div>
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="">
            <div className={styles.img}>
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className={styles.name}>Barsik</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Friends;
