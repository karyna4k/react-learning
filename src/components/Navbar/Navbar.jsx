import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={`${styles.nav__link} ${styles.active}`} href="/profile">Profile</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="/dialogs">Messages</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="/news">News</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="/music">Music</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;