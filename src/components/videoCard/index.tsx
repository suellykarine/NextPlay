import { FaHeart } from "react-icons/fa";

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
  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        width={150}
        onClick={onSelect}
        style={{ display: "block", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "8px", fontSize: "14px" }}>{title}</p>

      <FaHeart
        onClick={onToggleFavorite}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          color: isFavorite ? "red" : "gray",
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "4px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
};
