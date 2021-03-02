import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={`${styles.nav__link} ${styles.active}`} href="">Profile</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="">Messages</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="">News</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="">Music</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;