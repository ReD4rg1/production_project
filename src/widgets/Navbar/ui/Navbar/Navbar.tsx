import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { getNavbarSelectors } from "../../model/selectors/getNavbarSelectors";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const navbarItemsList = useSelector(getNavbarSelectors);

  const openModal = useCallback(() => {
    setModalIsOpened(true);
  }, [setModalIsOpened]);

  const closeModal = useCallback(() => {
    setModalIsOpened(false);
  }, [setModalIsOpened]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const itemsList = useMemo(
    () =>
      navbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    [navbarItemsList]
  );

  if (!authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={classNames(cls.links)}>{itemsList}</div>
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
