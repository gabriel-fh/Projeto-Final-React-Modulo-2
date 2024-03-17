import { putProfile } from "../../../../services";

import { MutateOptions, useMutation } from "@tanstack/react-query";

import { ProfileBodyType } from "../../types";
import { ProfileType } from "../../../../types";

export const usePutProfile = (
  options?: MutateOptions<
    ProfileType,
    unknown,
    { id: number; params: ProfileBodyType }
  >
) => {
  return useMutation<
    ProfileType,
    unknown,
    { id: number; params: ProfileBodyType }
  >({
    mutationFn: async ({ id, params }) => {
      const { data } = await putProfile(id, {
        avatarId: Number(params.avatarId),
        name: params.name,
      });
      return data[0];
    },
    ...options,
  });
};


