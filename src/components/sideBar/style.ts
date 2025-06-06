import styled from "styled-components";

// export const DashboardContainer = styled.div`
//   display: grid;
//   grid-template-areas:
//     "sidebar header"
//     "sidebar main"
//     "player player";
//   grid-template-columns: 250px 1fr;
//   grid-template-rows: 80px 1fr auto;
//   height: 100vh;
//   background: var( --light-blue);
//   color: white;
// `;

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

// export const PlayerContainer = styled.footer`
//   grid-area: player;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   padding: 0 20px;
//   border-top: 1px solid var( --dark);
//   justify-content: center;
// `;

// export const PlayerContainer = styled.main`
//   grid-area: player;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-top: 1px solid var( --dark);
//   padding: 40px 20px;
// `;

// export const PlayerContainer = styled.main`
//   grid-area: player;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-top: 1px solid var( --dark);
//   /* padding: 50px; */
//   height: 100%;
// `;
