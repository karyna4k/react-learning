import styles from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={styles.dialogs}>
      <h2 className={styles.title}>Диалоги</h2>
      <div className={styles.wrap}>
        <div className={styles.contactsList}>
          <div className={`${styles.contactsItem} ${styles.active}`}>Barsik</div>
          <div className={styles.contactsItem}>Porosenok</div>
          <div className={styles.contactsItem}>Maria</div>
          <div className={styles.contactsItem}>Bublik</div>
        </div>
        <div className={styles.messagesList}>
          <div className={styles.messageItem}>Hi!</div>
          <div className={styles.messageItem}>How are you?</div>
          <div className={styles.messageItem}>Hello!</div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
