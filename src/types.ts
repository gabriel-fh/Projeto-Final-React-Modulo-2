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
