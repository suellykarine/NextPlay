import { FaHeart } from "react-icons/fa";
import clsx from "clsx";
import styles from "./VideoCard.module.scss";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
}

export const VideoCard = ({
  title,
  thumbnail,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: VideoCardProps) => {
  const heartIconClasses = clsx(styles.favoriteIcon, {
    [styles.isFavorite]: isFavorite,
  });
  return (
    <div className={styles.videoCard}>
      <img
        src={thumbnail}
        alt={title}
        onClick={onSelect}
        className={styles.thumbnail}
      />
      <p className={styles.title}>{title}</p>

      <FaHeart
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className={heartIconClasses}
      />
    </div>
  );
};
