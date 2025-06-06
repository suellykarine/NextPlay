"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { getMockVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  DashboardContainer,
  HeaderContainer,
  MainContent,
  MusicGrid,
  SectionTitle,
} from "../dashboard/style";
import { Sidebar } from "../sideBar";
import { VideoCard } from "../videoCard";
import { Title } from "./style";

const Favorites = () => {
  const status = useProtectedRoute();
  const router = useRouter();

  const { favorites, toggleFavorite } = useFavorites();

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: getMockVideos,
  });

  if (status === "loading" || isLoading) return <p>Carregando...</p>;

  const favoriteVideos = videos.filter((video) => favorites.includes(video.id));

  return (
    <DashboardContainer>
      <Sidebar />
      <HeaderContainer>
        <Title>Seus Favoritos</Title>
      </HeaderContainer>
      <MainContent>
        <SectionTitle>Vídeos Favoritos</SectionTitle>
        <MusicGrid>
          {favoriteVideos.length > 0 ? (
            favoriteVideos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                isFavorite={favorites.includes(video.id)}
                onSelect={() => {
                  router.push(`/dashboardPage?video=${video.id}`);
                }}
                onToggleFavorite={() => toggleFavorite(video.id)}
              />
            ))
          ) : (
            <span>Nenhum vídeo favoritado ainda.</span>
          )}
        </MusicGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default Favorites;
