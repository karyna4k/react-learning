import styles from "./Friend.module.css";
import { NavLink } from "react-router-dom";

function Friend(props) {
  let path = "/friend/" + props.id;
  return (
    <li className={styles.item}>
      <NavLink className={styles.link} to={path}>
        <div className={styles.img}>
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className={styles.name}>{props.name}</div>
      </NavLink>
    </li>
  );
}

export default Friend;