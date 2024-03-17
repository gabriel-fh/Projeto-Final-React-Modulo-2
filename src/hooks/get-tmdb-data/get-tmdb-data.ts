import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../../services/tmdb.service";

const CACHE_KEY = "tmdbData";

export const useGetTmdbData = (
  key: number,
  type: string,
  startLoading: boolean,
  endpoint?: string,
) => {
  return useQuery({
    queryKey: [CACHE_KEY, key],
    queryFn: async () => {
      const [page1, page2] = await Promise.all([
        getTrending(type, 1, endpoint),
        getTrending(type, 2, endpoint),
      ]);
      const data = [...page1, ...page2];
      return data;
    },
    enabled: startLoading,
  });
};
