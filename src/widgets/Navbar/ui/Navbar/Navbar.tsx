import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { getNavbarSelectors } from "../../model/selectors/getNavbarSelectors";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { ToggleFeatures } from "@/shared/lib/features";
import { NavbarDeprecated } from "../NavbarDeprecated/NavbarDeprecated";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
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

  if (authData) {
    return (
      <ToggleFeatures
        feature={"isAppRedesigned"}
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown authData={authData} />
            </HStack>
          </header>
        }
        off={<NavbarDeprecated authData={authData} />}
      />
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={openModal} size={ButtonSize.M} theme={ButtonTheme.CLEAR}>
        {t("Войти")}
      </Button>
      <LoginModal isOpen={modalIsOpened} onClose={closeModal} />
    </header>
  );
});
