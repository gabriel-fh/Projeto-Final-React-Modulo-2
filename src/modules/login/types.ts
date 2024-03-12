import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Informe o e-mail" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({ required_error: "Informe a senha" })
    .min(3, { message: "Senha inválida" }),
});

export type LoginType = z.infer<typeof LoginSchema>;
