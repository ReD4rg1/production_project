import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NavbarDeprecated.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "@/entities/User";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { getNavbarSelectors } from "../../model/selectors/getNavbarSelectors";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";

interface NavbarProps {
  className?: string;
  authData: User;
}

export const NavbarDeprecated = memo((props: NavbarProps) => {
  const { className, authData } = props;
  const { t } = useTranslation();
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const navbarItemsList = useSelector(getNavbarSelectors);

  const openModal = useCallback(() => {
    setModalIsOpened(true);
  }, [setModalIsOpened]);

  const closeModal = useCallback(() => {
    setModalIsOpened(false);
  }, [setModalIsOpened]);

  const itemsList = useMemo(
    () =>
      navbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    [navbarItemsList]
  );

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <HStack
        max
        align={"center"}
        justify={"center"}
        className={classNames(cls.links)}
      >
        {itemsList}
      </HStack>
      <HStack gap={"16"} className={cls.btn}>
        <NotificationButton />
        <AvatarDropdown authData={authData} />
      </HStack>
    </header>
  );
});
