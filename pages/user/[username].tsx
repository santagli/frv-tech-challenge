import { GetServerSideProps } from "next";
import { Raleway } from "next/font/google";
import { JSX, useContext } from "react";

import {
  ErrorMessage,
  FavoriteButton,
  ReposotiresList,
  UserProfile,
  UserStats,
} from "@/components";
import { BASE_URL } from "@/config";
import { FavoritesContext } from "@context/FavoritesContext";
import { Card } from "@mantine/core";
import { GitHubRepo, GitHubUser } from "@types";

import styles from "./UserDetail.module.css";

const REPOS_PER_PAGE = 6;

interface UserDetailProps {
  user: GitHubUser;
  repos: GitHubRepo[];
  error?: Error;
}

const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });

export default function UserDetail({
  user,
  repos,
  error,
}: UserDetailProps): JSX.Element {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.login === user.login);

  if (error) return <ErrorMessage error={error} />;
  if (!user)
    return (
      <ErrorMessage
        error={{ message: "No se pudo cargar el usuario." } as Error}
      />
    );

  return (
    <div className={`${styles.container} ${raleway.className}`}>
      <Card withBorder w="800" padding="xl" radius="md" className={styles.card}>
        <Card.Section
          h={140}
          style={{
            backgroundImage: "url(/user_background.avif)",
          }}
        />

        <UserProfile user={user} isFavorite={isFavorite} />
        <UserStats user={user} />
        <FavoriteButton
          isFavorite={isFavorite}
          handler={() => toggleFavorite(user)}
        />
        <ReposotiresList repos={repos} />
      </Card>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<UserDetailProps> = async (
  context
) => {
  const { username } = context.params as { username: string };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${BASE_URL}/users/${username}`),
      fetch(`${BASE_URL}/users/${username}/repos?per_page=${REPOS_PER_PAGE}`),
    ]);

    if (!userRes.ok) {
      if (userRes.status === 404) return { notFound: true };
      throw new Error(`Error al obtener usuario: ${userRes.status}`);
    }

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    return { props: { user, repos } };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { notFound: true };
  }
};
