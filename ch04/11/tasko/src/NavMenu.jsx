import styles from "./NavMenu.module.css";

function NavMenu(){
  return(
  <div>
    <span className={styles.item}>전체</span>
    <span className={styles.item}>완료</span>
  </div>
  );
}

export default NavMenu