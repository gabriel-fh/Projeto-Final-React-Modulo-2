import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { deleteProfile } from "../../../../services";

type DeleteResponseType = { message: string };
type DeleteErrorType = { error: string }; 

export const useDelProfile = (
  options?: UseMutationOptions<DeleteResponseType, DeleteErrorType, { id: number }>
) => {
  return useMutation<DeleteResponseType, DeleteErrorType, { id: number }>({
    mutationFn: async ({ id }) => {
      const { data } = await deleteProfile(id);
      return data;
    },
    ...options,
  });
};
