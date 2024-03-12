import { AvatarItem, ProfileBodyType, ProfileType } from "../types";

import { api } from "../clients/api";

export const apiPostSignIn = (email: string, password: string) => {
  return api.post<{ token: string }>("/api/signIn", {
    email,
    password,
  });
};

export const getAvatars = () => {
  return api.get<AvatarItem[]>("/api/avatar");
};

export const getProfiles = () => {
  return api.get<ProfileType[]>("/api/profile");
};

export const getProfile = (id: number) => {
  return api.get<ProfileType>(`/api/profile/${id}`);
};

export const postProfile = (body: ProfileBodyType) => {
  return api.post<ProfileType>("/api/profile", body);
};

export const putProfile = (id: number, body: ProfileBodyType) => {
  return api.put<ProfileType[]>(`/api/profile/${id}`, body);
};

export const deleteProfile = (id: number) => {
  return api.delete(`/api/profile/${id}`);
};
