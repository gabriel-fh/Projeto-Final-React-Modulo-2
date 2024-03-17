import { getProfile, getProfiles } from "../../../../services";
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

export const useGetProfileById = (id: number) => {
  return useQuery({
    queryKey: [CACHE_KEY, id],
    queryFn: async () => {
      const { data } = await getProfile(id);
      return data;
    },
    enabled: true,
  })
}