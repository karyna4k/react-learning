import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // debugger;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.addMessage();
  };

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

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
              onChange={onNewMessageChange}
              value={props.dialogsPage.newMessageText}
              className={styles.messageText}
              placeholder="Enter your message..."
            ></textarea>
            <button onClick={onSendMessageClick} className={styles.messageBtn}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
