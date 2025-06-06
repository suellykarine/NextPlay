import { getMockVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useVideos() {
  const searchParams = useSearchParams();
  const videoParam = searchParams.get("video");

  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (videoParam) {
      setSelectedVideoId(videoParam);
    }
  }, [videoParam]);

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: getMockVideos,
  });

  return {
    videos,
    isLoading,
    selectedVideoId,
    setSelectedVideoId,
  };
}
