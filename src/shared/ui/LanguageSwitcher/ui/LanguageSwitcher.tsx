import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/language-light.svg";
import DarkThemeIcon from "shared/assets/icons/language-dark.svg";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
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
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
});
