import { getProfiles } from "../../services";
import { useQuery } from "@tanstack/react-query";

const CACHE_KEY = "profiles";

export const useGetProfiles = () => {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: async () => {
      const { data } = await getProfiles();
      return data;
    },
    enabled: true,
  });
};
