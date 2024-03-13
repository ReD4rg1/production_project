import { classNames } from "../../../../lib/classNames/classNames";
import { Button } from "../../../redesigned/Button/Button";
import LanguageIcon from "../../../../assets/icons/language.svg?react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../../redesigned/Icon/Icon";

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
      variant={"clear"}
      className={classNames("", {}, [className])}
      onClick={toggleLanguage}
      style={{ cursor: "pointer" }}
    >
      <Icon Svg={LanguageIcon} fillIcon />
    </Button>
  );
};
