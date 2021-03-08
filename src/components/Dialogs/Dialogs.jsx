import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <ul className={styles.dialogsList}>{dialogsElements}</ul>
        <div className={styles.messagesWrap}>
          <div className={styles.messageList}>{messagesElements}</div>
          <div className={styles.messageTextInner}>
            <textarea className={styles.messageText}placeholder="Text your message..."></textarea>
            <button className={styles.messageBtn}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
