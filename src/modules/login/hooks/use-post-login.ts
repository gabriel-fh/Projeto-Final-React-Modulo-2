import { MutateOptions, useMutation } from "@tanstack/react-query";

import { AxiosResponse } from "axios";
import { apiPostSignIn } from "../../../services";

type Params = {
  email: string;
  password: string;
};

type SuccessResponse = AxiosResponse<{
  token: string;
}>;

export const usePostLogin = (
  options?: MutateOptions<SuccessResponse, unknown, Params>
) => {
  return useMutation<SuccessResponse, unknown, Params>({
    mutationFn: async ({ email, password }) => apiPostSignIn(email, password),
    ...options,
  });
};
