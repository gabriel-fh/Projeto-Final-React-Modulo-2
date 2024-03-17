import { getBanners } from "../../../services";
import { useQuery } from "@tanstack/react-query";

const CACHE_KEY = "banners";

export const useGetBanners = () => {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: async () => {
      const { data } = await getBanners();
      return data;
    },
    enabled: true,
  });
};
