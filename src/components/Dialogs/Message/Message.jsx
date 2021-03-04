import styles from "./../Dialogs.module.css";

function Message(props) {
  return <li className={styles.messageItem}>{props.message}</li>;
}

export default Message;
