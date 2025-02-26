import { Avatar, Text } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import styles from "./UserProfile.module.css";
import { GitHubUser } from "@/types";

interface UserProfileProps {
  user: GitHubUser;
  isFavorite: boolean;
}

export default function UserProfile({ user, isFavorite }: UserProfileProps) {
  return (
    <>
      <div className={styles.avatarContainer}>
        <Avatar
          src={user.avatar_url}
          alt={user.login}
          size={200}
          radius={200}
          mx="auto"
          mt={-30}
          className={`${styles.avatar} ${
            isFavorite ? styles.favoriteActive : ""
          }`}
        />
        {isFavorite && (
          <IconHeartFilled
            size={50}
            stroke={1.5}
            color="var(--mantine-color-red-filled)"
            className={styles.favoriteIcon}
          />
        )}
      </div>
      <Text ta="center" fz="h1" fw={600}>
        {user.name || user.login}
      </Text>
      {user.bio && (
        <Text ta="center" fz="sm" c="dimmed">
          {user.bio}
        </Text>
      )}
    </>
  );
}
