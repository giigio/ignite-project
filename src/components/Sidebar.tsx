import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import sidenavBackground from "../assets/sidenav-background.png";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={sidenavBackground}
        alt="Sidenav Background Image"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/Giigio.png" />
        <strong>Giovanna</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="https://github.com/Giigio">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
