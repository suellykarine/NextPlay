import { getMockVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useVideos() {
  const searchParams = useSearchParams();
  const videoParam = searchParams.get("video");

  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (videoParam) {
      setSelectedVideoId(videoParam);
    }
  }, [videoParam]);

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: getMockVideos,
  });

  const filteredVideos = videos
    .filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleCount);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (bottom) {
        setVisibleCount((prev) => prev + 6);
      }
    };

    document.addEventListener("scroll", handleScroll); 
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    videos,
    isLoading,
    selectedVideoId,
    setSelectedVideoId,
    searchTerm,
    setSearchTerm,
    filteredVideos,
  };
}
