import Link from "next/link";
import { Title } from "@mantine/core";
import styles from "./RepositoriesList.module.css";
import { Raleway, Inconsolata } from "next/font/google";
import { GitHubRepo } from "@types";

const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"] });

interface RepositoriesListProps {
  repos: GitHubRepo[];
}

export default function RepositoriesList({ repos }: RepositoriesListProps) {
  return (
    <div className={styles.repos}>
      <Title order={4} lh={3}>
        Repositorios
      </Title>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <div
            key={repo.id}
            className={`${styles.repoCard} ${inconsolata.className}`}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href={repo.html_url} className={styles.repoTitle}>
                {repo.name}
              </Link>
              {repo.language && (
                <span className={`${styles.repoBadge} ${raleway.className}`}>
                  {repo.language}
                </span>
              )}
            </div>
            {repo.description && <p>{repo.description}</p>}
          </div>
        ))
      ) : (
        <p>No se encontraron repositorios.</p>
      )}
    </div>
  );
}
