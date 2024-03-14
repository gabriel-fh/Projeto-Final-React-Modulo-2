import {
  AvatarItem,
  Banner,
  ProfileBodyType,
  ProfileType,
  TrailOffer,
} from "../types";

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

export const getBanners = () => {
  return api.get<Banner[]>("/api/banners");
};

export const getTrailOffers = () => {
  return api.get<Omit<TrailOffer, "offers">[]>("/api/trail-offers");
};

export const getOffer = (id: number) => {
  return api.get<TrailOffer>(`/api/trail-offers/${id}`);
};
