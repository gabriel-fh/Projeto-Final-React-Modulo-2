import { MutateOptions, useMutation } from "@tanstack/react-query";

import { ProfileBodyType } from "../../types";
import { ProfileType } from "../../../../types";
import { postProfile } from "../../../../services";

export const usePostProfile = (
  options?: MutateOptions<ProfileType, unknown, ProfileBodyType>
) => {
  return useMutation<ProfileType, unknown, ProfileBodyType>({
    mutationFn: async (params) => {
      const { data } = await postProfile({
        ...params,
        avatarId: Number(params.avatarId),
      });
      return data;
    },
    ...options,
  });
};
