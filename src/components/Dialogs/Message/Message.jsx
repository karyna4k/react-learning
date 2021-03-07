import styles from "./../Dialogs.module.css";

function Message(props) {
  return (
    <li className={styles.messageItem}>
      <div className={styles.messageImg}>
        <img
          src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
          alt=""
        />
      </div>
      <div className="messageWrap">
        <div className={styles.messageInner}>
          <div className="messageName">Karina</div>
          <div className="messageTime">12:45:34</div>
        </div>
        <div className="messageText">{props.message}</div>
      </div>
    </li>
  );
}

export default Message;
