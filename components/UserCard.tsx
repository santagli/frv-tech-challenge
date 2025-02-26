import Image from "next/image";
import { GitHubUser } from "@types";
import { JSX, useContext } from "react";
import { FavoritesContext } from "@context/FavoritesContext";
import { ActionIcon } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import styles from "./UserCard.module.css";

interface UserCardProps {
  user: GitHubUser;
}

export default function UserCard({ user }: UserCardProps): JSX.Element {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.login === user.login);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={user.avatar_url}
          alt={user.login}
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </div>

      <ActionIcon
        className={styles.favoriteIcon}
        variant="transparent"
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(user);
        }}
      >
        {isFavorite ? (
          <IconHeartFilled size={24} color="red" />
        ) : (
          <IconHeart size={24} color="gray" />
        )}
      </ActionIcon>

      <div className={styles.overlay}>
        <p className={styles.text}>{user.login}</p>
      </div>
    </div>
  );
}
