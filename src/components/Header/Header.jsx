import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
        alt=""
      />
    </header>
  );
}

export default Header;