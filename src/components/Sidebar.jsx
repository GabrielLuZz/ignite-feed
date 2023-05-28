import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import coverSidebar from "../assets/cover.avif";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverSidebar} alt="" />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/GabrielLuZz.png"
          alt=""
        />
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
