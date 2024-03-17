import { getTrailOffers } from "../../../services";
import { useQuery } from "@tanstack/react-query";

const CACHE_KEY = "trail-offers";

export const useGetTrailOffers = () => {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: async () => {
      const { data } = await getTrailOffers();
      return data;
    },
    enabled: true,
  });
};
