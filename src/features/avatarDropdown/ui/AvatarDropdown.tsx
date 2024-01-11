import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { memo, useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Dropdown } from "shared/ui/Popups";
import { useTranslation } from "react-i18next";
import { isUserAdmin, isUserManager, User, userActions } from "entities/User";
import { useDispatch, useSelector } from "react-redux";

interface AvatarDropdownProps {
  className?: string;
  authData: User;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className, authData } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <Dropdown
        direction={"bottom left"}
        items={[
          ...(isAdminPanelAvailable
            ? [
                {
                  content: t("Панель администрирования"),
                  href: RoutePath.admin_panel,
                },
              ]
            : []),
          {
            content: t("Профиль"),
            href: RoutePath.profile + authData.id,
          },
          {
            content: t("Выйти"),
            onClick: onLogout,
          },
        ]}
        trigger={<Avatar size={40} src={authData.avatar} />}
      />
    </div>
  );
});
