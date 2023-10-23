import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, [setModalIsOpen]);

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
      <Button onClick={openModal} size={ButtonSize.M} theme={ButtonTheme.CLEAR}>
        {t("Войти")}
      </Button>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dolorum odit quam saepe sunt! Accusamus adipisci aperiam at exercitationem expedita facere molestias, natus, nostrum omnis pariatur quam quod, veritatis!"
        }
      </Modal>
    </div>
  );
};
