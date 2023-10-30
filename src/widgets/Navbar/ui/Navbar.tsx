import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useCallback, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpened(true);
  }, [setModalIsOpened]);

  const closeModal = useCallback(() => {
    setModalIsOpened(false);
  }, [setModalIsOpened]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          onClick={openModal}
          size={ButtonSize.M}
          theme={ButtonTheme.CLEAR}
        >
          {t("Войти")}
        </Button>
        <LoginModal isOpen={modalIsOpened} onClose={closeModal} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          className={cls.link}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          {t("Главная")}
        </AppLink>
        <AppLink
          className={cls.link}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.second}
        >
          {t("Второстепенная")}
        </AppLink>
      </div>
      <Button onClick={onLogout} size={ButtonSize.M} theme={ButtonTheme.CLEAR}>
        {t("Выйти")}
      </Button>
    </div>
  );
};
