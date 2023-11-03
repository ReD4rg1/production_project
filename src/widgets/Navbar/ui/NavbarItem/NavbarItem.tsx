import cls from "./NavbarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { NavbarItemType } from "../../model/items";
import { memo } from "react";

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = memo((props: NavbarItemProps) => {
  const { item } = props;
  const { t } = useTranslation();

  return (
    <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={item.path}>
      {item.Icon && <item.Icon className={cls.icon} />}
      {t(item.text)}
    </AppLink>
  );
});
