import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";
import { useContext, useEffect } from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme || Theme.NORMAL;
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.NORMAL;
        break;
      case Theme.NORMAL:
        newTheme = Theme.RED;
        break;
      case Theme.RED:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.DARK;
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return { theme: theme || Theme.NORMAL, toggleTheme };
}
