import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Button } from "@/shared/ui/redesigned/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/redesigned/Stack";
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

  const openModal = useCallback(() => {
    setModalIsOpened(true);
  }, [setModalIsOpened]);

  const closeModal = useCallback(() => {
    setModalIsOpened(false);
  }, [setModalIsOpened]);

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
      <Button onClick={openModal} size={"m"} variant={"clear"}>
        {t("Войти")}
      </Button>
      <LoginModal isOpen={modalIsOpened} onClose={closeModal} />
    </header>
  );
});
