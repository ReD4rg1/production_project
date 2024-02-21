import { classNames } from "../../../../lib/classNames/classNames";
import { Button, ButtonTheme } from "../../Button/Button";
import LanguageIcon from "../../../../assets/icons/language.svg?react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../Icon/Icon";

interface LanguageSwitcherProps {
  className?: string;
}
/**
 * @deprecated
 * */
export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;
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
      <Icon Svg={LanguageIcon} fillIcon />
    </Button>
  );
};
