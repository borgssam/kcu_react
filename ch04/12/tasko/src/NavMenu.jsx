import styles from "./NavMenu.module.css";

function NavMenu() {
  return(
    <nav>
      <span className={styles.item}>전체</span>
      <span className={styles.item}>완료</span>
    </nav>

  );
}

export default NavMenu;