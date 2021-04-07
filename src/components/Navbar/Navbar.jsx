import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

function Navbar(props) {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/profile"
              activeClassName={styles.active}
            >
              Profile
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/dialogs"
              activeClassName={styles.active}
            >
              Messages
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/news"
              activeClassName={styles.active}
            >
              News
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/music"
              activeClassName={styles.active}
            >
              Music
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/settings"
              activeClassName={styles.active}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Friends friends={props.state.friends} /> */}
    </div>
  );
}

export default Navbar;
