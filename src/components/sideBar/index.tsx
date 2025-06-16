import { signOut } from "next-auth/react";

import {
  FaCog,
  FaFolder,
  FaHeart,
  FaHome,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  const handleLogout = () => signOut({ callbackUrl: "/" });

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logo}>NextPlay</div>
      <nav>
        <a className={styles.menuItem} href="/dashboardPage">
          <FaHome /> Início
        </a>
        <a className={styles.menuItem} href="favoritesPage">
          <FaHeart /> Favoritos
        </a>
        <a className={styles.menuItem}>
          <FaFolder /> Playlists
          <span className={styles.tooltip}>Em breve</span>
        </a>
        <a className={styles.menuItem} href="#">
          <FaSearch /> Explorar
          <span className={styles.tooltip}>Em breve</span>
        </a>
        <a className={styles.menuItem} href="#">
          <FaCog /> Configurações
          <span className={styles.tooltip}>Em breve</span>
        </a>
        <a className={styles.menuItem} onClick={handleLogout}>
          <FaSignOutAlt /> Sair
        </a>
      </nav>
    </div>
  );
};
