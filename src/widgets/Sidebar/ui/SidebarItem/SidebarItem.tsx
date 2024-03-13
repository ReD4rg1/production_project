import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      variant={"secondary"}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      activeClassName={cls.active}
    >
      <item.Icon
        className={cls.icon}
        width={collapsed ? 32 : 16}
        height={collapsed ? 32 : 16}
      />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
