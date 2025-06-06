import { useFavorites } from "@/hooks/useFavorites";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useVideos } from "@/hooks/useVideos";
import { Sidebar } from "../sideBar";
import { VideoCard } from "../videoCard";
import {
  DashboardContainer,
  HeaderContainer,
  MainContent,
  MusicGrid,
  PlayerContainer,
  SearchBar,
  SectionTitle,
  UserAvatar,
  UserProfile,
} from "./style";

const Dashboard = () => {
  const status = useProtectedRoute();
  const { favorites, toggleFavorite } = useFavorites();

  const {
    filteredVideos,
    isLoading,
    selectedVideoId,
    setSelectedVideoId,
    setSearchTerm,
    searchTerm,
  } = useVideos();

  if (status === "loading" || isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <DashboardContainer>
      <Sidebar />
      <HeaderContainer>
        <SearchBar
          type="text"
          placeholder="Buscar vídeos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
            src={`https://www.youtube.com/embed/${selectedVideoId}`}
            title="Player de vídeo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </PlayerContainer>
        <SectionTitle>Vídeos Recomendados</SectionTitle>
        <MusicGrid>
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              isFavorite={favorites.includes(video.id)}
              onSelect={() => setSelectedVideoId(video.id)}
              onToggleFavorite={() => toggleFavorite(video.id)}
            />
          ))}
        </MusicGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
