import { GitHubUser } from "../types/index";
import { createContext, useState, ReactNode } from "react";

interface FavoritesContextProps {
  favorites: GitHubUser[];
  toggleFavorite: (user: GitHubUser) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<GitHubUser[]>([]);

  const toggleFavorite = (user: GitHubUser) => {
    setFavorites((prev) => {
      const exists = prev.find((u) => u.login === user.login);
      if (exists) {
        return prev.filter((u) => u.login !== user.login);
      }
      return [...prev, user];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
