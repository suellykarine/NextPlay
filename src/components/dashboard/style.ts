import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px auto;
  min-height: 100vh;
  background: var(--light-blue);
  color: white;
`;

export const PlayerContainer = styled.div`
  width: 100%;
  max-width: 720px;
  aspect-ratio: 16/9;
  margin: 0 auto 30px;
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background: var(--light-blue);
  padding: 20px;
  border-right: 1px solid var(--dark);
`;

export const Logo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 30px;
  background: var(--light-green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Tooltip = styled.span`
  position: absolute;
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: #333 transparent transparent;
  }
`;

export const MenuItem = styled.a`
  display: block;
  padding: 12px 10px;
  color: var(--light-green);
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 5px;
  transition: background 0.3s;
  position: relative;
  cursor: pointer;

  &:hover ${Tooltip} {
    background: var(--dark);
    opacity: 1;
  }

  svg {
    margin-right: 10px;
  }
`;

export const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid var(--dark);
`;

export const SearchBar = styled.input`
  background: var(--dark);
  border: none;
  padding: 10px 15px;
  border-radius: 50px;
  color: white;
  width: 300px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--light-green);
`;

export const MainContent = styled.main`
  grid-area: main;
  padding: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  background: var(--light-green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-top: 15px;
`;

export const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  color: var(--light-green);
`;
