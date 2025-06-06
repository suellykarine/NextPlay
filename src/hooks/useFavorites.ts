import { useQuery, useQueryClient } from "@tanstack/react-query";

const FAVORITES_KEY = "favorites";

const getStoredFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const { data: favorites = [] } = useQuery<string[]>({
    queryKey: [FAVORITES_KEY],
    queryFn: () => getStoredFavorites(),
    staleTime: Infinity,
  });

  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    queryClient.setQueryData([FAVORITES_KEY], updated);
  };

  return { favorites, toggleFavorite };
};
