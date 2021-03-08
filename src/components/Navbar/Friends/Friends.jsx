import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

function Friends(props) {
  // debugger;
  const friendsElements = props.friends.map((f) => {
    return <Friend name={f.name} id={f.id} />;
  });

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Friends</h3>
      <ul className={styles.inner}>{friendsElements}</ul>
    </div>
  );
}

export default Friends;
