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
  const dialogsData = [
    { id: 1, name: "Barsik" },
    { id: 2, name: "Marsik" },
    { id: 3, name: "Pig" },
    { id: 4, name: "Chupa" },
    { id: 5, name: "Bublik" },
  ];

  const messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hello! I'm fine." },
    { id: 4, message: "And you?" },
  ];

  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <ul className={styles.dialogsList}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        </ul>
        <ul className={styles.messagesList}>
          <Message message={messagesData[0].message} />
          <Message message={messagesData[1].message} />
          <Message message={messagesData[2].message} />
          <Message message={messagesData[3].message} />
        </ul>
      </div>
    </div>
  );
}

export default Dialogs;
