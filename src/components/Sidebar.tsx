import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import coverSidebar from "../assets/cover.avif";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverSidebar} alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/GabrielLuZz.png" alt='' />
        <strong>Gabriel Luz</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
