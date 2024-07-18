import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";
export function Header() {
  return (
    <header>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Ignite Logo" />
      </header>
    </header>
  );
}
