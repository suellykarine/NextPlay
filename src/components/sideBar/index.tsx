import { signOut } from "next-auth/react";

import {
  FaCog,
  FaFolder,
  FaHeart,
  FaHome,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { Logo, MenuItem, SidebarContainer, Tooltip } from "./style";

export const Sidebar = () => {
  const handleLogout = () => signOut({ callbackUrl: "/" });

  return (
    <SidebarContainer>
      <Logo>NextPlay</Logo>
      <nav>
        <MenuItem href="/dashboardPage">
          <FaHome /> Início
        </MenuItem>
        <MenuItem href="favoritesPage">
          <FaHeart /> Favoritos
        </MenuItem>
        <MenuItem>
          <FaFolder /> Playlists
          <Tooltip>Em breve</Tooltip>
        </MenuItem>
        <MenuItem href="#">
          <FaSearch /> Explorar
          <Tooltip>Em breve</Tooltip>
        </MenuItem>
        <MenuItem href="#">
          <FaCog /> Configurações
          <Tooltip>Em breve</Tooltip>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <FaSignOutAlt /> Sair
        </MenuItem>
      </nav>
    </SidebarContainer>
  );
};
