"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { getMockVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import styles from "./favorites.module.scss";
import Sidebar from "../sideBar";
import VideoCard from "../videoCard";

const Favorites = () => {
  const { status } = useProtectedRoute();
  const router = useRouter();

  const { favorites, toggleFavorite } = useFavorites();

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: getMockVideos,
  });

  if (status === "loading" || isLoading) return <p>Carregando...</p>;

  const favoriteVideos = videos.filter((video) => favorites.includes(video.id));

  return (
    <div className={styles.container}>
      <Sidebar />
      <header>
        <h2 className={styles.title}>Seus Favoritos</h2>
      </header>
      <main className="mainContent">
        <h2 className={styles.sectionTitle}>Vídeos Favoritos</h2>
        <div className={styles.musicGrid}>
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
        </div>
      </main>
    </div>
  );
};

export default Favorites;
