// import React from "react";
import clsx from "clsx";
import user from "../../assets/user.svg"; // Caminho do placeholder para usuários sem imagem
import styles from "./Avatar.module.css";
import { IconEdit } from "../../assets/Icons";

type AvatarProps = {
  image?: string;
  isEdit?: boolean;
  size?: "medium" | "large" | "small";
  disabled?: boolean;
  name?: string;
};

const Avatar = ({
  image,
  isEdit,
  size = "medium",
  disabled,
  name,
}: AvatarProps) => {
  const imagePath = image ? `/images/${image}.webp` : user;

  if (name === "New Profile" || name === 'Novo Perfil') {
    return (
      <>
        <div className={styles.avatar__image}>+</div>
        <div className={styles.avatar__name}>{name}</div>
      </>
    );
  }
  
  return (
    <div className={styles.avatarContainer}>
      <div
        className={clsx(styles.container, {
          [styles[size]]: true,
          [styles.disabled]: disabled,
        })}
      >
        <img className={clsx({[styles[size]]: true})} src={imagePath} alt={name || "Avatar"} />
        {isEdit && (
          <div className={styles.icon}>
            <IconEdit />
          </div>
        )}
      </div>
      <div className={styles.avatar__name}>{name}</div>
    </div>
  );
};

export default Avatar;
