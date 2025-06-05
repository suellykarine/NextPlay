import { useEffect, useState } from "react";
import {
  FaCog,
  FaFolder,
  FaHeart,
  FaHome,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  DashboardContainer,
  HeaderContainer,
  Logo,
  MainContent,
  MenuItem,
  MusicGrid,
  PlayerContainer,
  SearchBar,
  SectionTitle,
  SidebarContainer,
  Tooltip,
  UserAvatar,
  UserProfile,
} from "./style";

const mockVideos = [
  {
    id: "kPa7bsKwL-c",
    title: "Lady Gaga & Bruno Mars - Die With A Smile (Official Music Video)",
    thumbnail: "https://img.youtube.com/vi/kPa7bsKwL-c/hqdefault.jpg",
  },
  {
    id: "nz-QjfwUr2A",
    title: "Lady Gaga ft. Bruno Mars - I Still Dream Of You (Music Video)",
    thumbnail: "https://img.youtube.com/vi/nz-QjfwUr2A/hqdefault.jpg",
  },
  {
    id: "qETl8LY9We4",
    title: "Pop Hits 2025 - Bruno Mars, Lady Gaga, Adele, Ed Sheeran, Dua Lipa",
    thumbnail: "https://img.youtube.com/vi/qETl8LY9We4/hqdefault.jpg",
  },
  {
    id: "fnPxkuFIA48",
    title: "Lady Gaga, Bruno Mars - Die With A Smile (Live in Las Vegas)",
    thumbnail: "https://img.youtube.com/vi/fnPxkuFIA48/hqdefault.jpg",
  },

  {
    id: "2OEL4P1Rz04",
    title: "Switzerland Travel Guide | Scenic Places to Visit",
    thumbnail: "https://img.youtube.com/vi/2OEL4P1Rz04/hqdefault.jpg",
  },
];

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  const [selectedVideoId, setSelectedVideoId] = useState(mockVideos[0].id);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <DashboardContainer>
      <SidebarContainer>
        <Logo>NextPlay</Logo>
        <nav>
          <MenuItem href="#">
            <FaHome /> Início
          </MenuItem>
          <MenuItem href="#">
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

      <HeaderContainer>
        <SearchBar type="text" placeholder="Buscar vídeos..." />
        <UserProfile>
          <UserAvatar />
          <span>Usuário</span>
        </UserProfile>
      </HeaderContainer>

      <MainContent>
        <SectionTitle>Assistindo Agora</SectionTitle>
        <PlayerContainer>
          <iframe
            width="100%"
            height="100%"
            style={{
              aspectRatio: "16 / 9",
              width: "100%",
              maxWidth: "720px",
              height: "auto",
            }}
            src={`https://www.youtube.com/embed/${selectedVideoId}`}
            title="Player de vídeo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </PlayerContainer>
        <SectionTitle>Vídeos Recomendados</SectionTitle>
        <MusicGrid>
          {mockVideos.map((video) => (
            <div
              key={video.id}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedVideoId(video.id)}
            >
              <img src={video.thumbnail} alt={video.title} width={150} />
              <p>{video.title}</p>
            </div>
          ))}
        </MusicGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
