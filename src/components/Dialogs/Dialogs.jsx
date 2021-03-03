import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

function Dialogs() {
  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <ul className={styles.contactsList}>
          <li className={`${styles.contactsItem} ${styles.active}`}>
            <NavLink to="/dialogs/1" activeClassName={styles.active}>Barsik</NavLink>
          </li>
          <li className={styles.contactsItem}>
            <NavLink to="/dialogs/2" activeClassName={styles.active}>Marsik</NavLink>
          </li>
          <li className={styles.contactsItem}>
            <NavLink to="/dialogs/3" activeClassName={styles.active}>Hrusha</NavLink>
          </li>
          <li className={styles.contactsItem}>
            <NavLink to="/dialogs/4" activeClassName={styles.active}>Bublik</NavLink>
          </li>
        </ul>
        <ul className={styles.messagesList}>
          <li className={styles.messageItem}>Hi!</li>
          <li className={styles.messageItem}>How are you?</li>
          <li className={styles.messageItem}>Hello!</li>
        </ul>
      </div>
    </div>
  );
}

export default Dialogs;
