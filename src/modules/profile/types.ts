import { z } from "zod";

export const ProfileBodySchema = z.object({
  avatarId: z.string({ required_error: "Escolha um Avatar" }),
  name: z
    .string({ required_error: "Informe o nome do perfil" })
    .min(3, { message: "O nome do perfil deve ter no mínimo 3 caracteres" }),
});

export type ProfileBodyType = z.infer<typeof ProfileBodySchema>;
