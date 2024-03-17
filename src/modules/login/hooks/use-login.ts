import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "../types";
import { usePostLogin } from "./use-post-login";
import { useAuth } from "../../../providers/AuthProvider";

const useLogin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending, isError } = usePostLogin({
    onSuccess: ({ data }) => {
        login(data.token);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  const onSubmit = (data: LoginType) => {
    mutate(data);
  };


  return {
    showPassword,
    errors,
    isPending,
    isError,
    register,
    togglePassword: () => setShowPassword(!showPassword),
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useLogin;
