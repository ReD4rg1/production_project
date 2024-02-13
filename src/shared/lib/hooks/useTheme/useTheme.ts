import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useEffect } from "react";
import { Theme } from "@/shared/const/theme";

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme || Theme.NORMAL;
  }, [theme]);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
    setTheme?.(newTheme);

    saveAction?.(newTheme);
  };

  return { theme: theme || Theme.NORMAL, toggleTheme };
}
