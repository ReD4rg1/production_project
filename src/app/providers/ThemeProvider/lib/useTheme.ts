import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return {theme, toggleTheme};
}