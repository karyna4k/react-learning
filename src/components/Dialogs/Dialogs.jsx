import React from "react";
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

  let newMessageElement = React.createRef();

  function addMessage() {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <ul className={styles.dialogsList}>{dialogsElements}</ul>
        <div className={styles.messagesWrap}>
          <div className={styles.messageList}>{messagesElements}</div>
          <div className={styles.messageTextInner}>
            <textarea
              ref={newMessageElement}
              className={styles.messageText}
              placeholder="Text your message..."
            ></textarea>
            <button onClick={addMessage} className={styles.messageBtn}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
