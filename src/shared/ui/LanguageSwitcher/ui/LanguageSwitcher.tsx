import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/language-light.svg";
import DarkThemeIcon from "shared/assets/icons/language-dark.svg";
import RedThemeIcon from "shared/assets/icons/language-red.svg";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", {}, [className])}
      onClick={toggleLanguage}
    >
      {theme === Theme.DARK && <LightThemeIcon />}
      {theme === Theme.NORMAL && <RedThemeIcon />}
      {theme === Theme.RED && <DarkThemeIcon />}
    </Button>
  );
};
