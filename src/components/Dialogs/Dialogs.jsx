import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../../redux/state";

function Dialogs(props) {
  const dialogsElements = props.messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = props.messagesPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  function addMessage() {
    props.dispatch(addMessageActionCreator());
  }

  function onChangeMessage() {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
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
              onChange={onChangeMessage}
              value={props.messagesPage.newMessageText}
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
