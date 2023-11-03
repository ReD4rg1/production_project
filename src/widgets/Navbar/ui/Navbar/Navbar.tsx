import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { NavbarItemsList } from "../../model/items";
import { NavbarItem } from "../NavbarItem/NavbarItem";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
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

  const itemsList = NavbarItemsList.map((item) => (
    <NavbarItem item={item} key={item.path} />
  ));

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
      <div className={classNames(cls.links)}>{itemsList}</div>
      <Button onClick={onLogout} size={ButtonSize.M} theme={ButtonTheme.CLEAR}>
        {t("Выйти")}
      </Button>
    </div>
  );
});
