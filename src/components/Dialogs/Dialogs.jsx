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
  return <li className={styles.messageItem}>{props.message}</li>;
}

function Dialogs() {
  const dialogs = [
    { id: 1, name: "Barsik" },
    { id: 2, name: "Marsik" },
    { id: 3, name: "Pig" },
    { id: 4, name: "Chupa" },
    { id: 5, name: "Bublik" },
  ];

  const messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hello! I'm fine." },
    { id: 4, message: "And you?" },
  ];

  const dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <ul className={styles.dialogsList}>{dialogsElements}</ul>
        <ul className={styles.messagesList}>{messagesElements}</ul>
      </div>
    </div>
  );
}

export default Dialogs;
