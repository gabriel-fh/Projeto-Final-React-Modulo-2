export type Role = "user" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type AvatarType = {
  id: number;
  name: string;
  image: string;
};

export type AvatarItem = {
  name: string;
  items: AvatarType[];
};

export type ProfileType = {
  id: number;
  name: string;
  avatar: AvatarType;
};

export type ProfileBodyType = {
  avatarId: number;
  name: string;
};

export type Banner = {
  id: number;
  title: string;
  description: string;
  headline: string;
  video: string;
  image: string;
  link: string;
};

export type TrailOffer = {
  offerId: number;
  title: string;
  offers?: Offer[];
};

export type Offer = {
  id: number;
  title: string;
  image: string;
  link: string;
};
