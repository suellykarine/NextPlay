import { useFavorites } from "@/hooks/useFavorites";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useVideos } from "@/hooks/useVideos";

import styles from "./dashboard.module.scss";
import Sidebar from "../sideBar";
import VideoCard from "../videoCard";

const Dashboard = () => {
  const { status, session } = useProtectedRoute();
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
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <header className={styles.headerContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Buscar vídeos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>{session?.user.initials}</div>
          <span>Usuário</span>
        </div>
      </header>

      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Assistindo Agora</h2>
        <div className={styles.playerContainer}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideoId}`}
            title="Player de vídeo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className={styles.sectionTitle}>Vídeos Recomendados</h2>
        <div className={styles.musicGrid}>
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
