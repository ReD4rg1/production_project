import cls from "./NavbarItem.module.scss";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { NavbarItemType } from "../../model/types/navbar";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = memo((props: NavbarItemProps) => {
  const { item } = props;
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={cls.link} variant={"secondary"} to={item.path}>
      {item.Icon && <item.Icon width={30} height={30} className={cls.icon} />}
      {/*{t(item.text)}*/}
    </AppLink>
  );
});
