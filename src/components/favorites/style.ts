import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  background: var(--light-blue);
  color: white;
`;
export const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid var(--dark);
`;

export const Title = styled.h2`
  color: var(--light-green);
`;

export const MainContent = styled.main`
  grid-area: main;
  padding: 30px;
  overflow-y: auto;
  max-height: calc(100vh - 80px - 90px);
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
