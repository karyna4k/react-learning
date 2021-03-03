import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

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

function Message(props) {
  return (
    <li className={styles.messageItem}>{props.message}</li>
  )
}

function Dialogs() {
  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <ul className={styles.dialogsList}>
          <DialogItem name="Barsik" id="1" />
          <DialogItem name="Marsik" id="2" />
          <DialogItem name="Pig" id="3" />
          <DialogItem name="Chupa" id="4" />
          <DialogItem name="Bublik" id="5" />
        </ul>
        <ul className={styles.messagesList}>
          <Message message="Hi!"/>
          <Message message="How are you?"/>
          <Message message="Hello! I'm fine."/>
          <Message message="And you?"/>
        </ul>
      </div>
    </div>
  );
}

export default Dialogs;
