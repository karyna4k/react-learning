import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;

  return (
    <li className={styles.dialogItem}>
      <NavLink to={path} activeClassName={styles.active}>
        {props.name}
      </NavLink>
    </li>
  );
}

export default DialogItem;
