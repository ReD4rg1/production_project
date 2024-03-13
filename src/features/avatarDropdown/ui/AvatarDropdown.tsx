import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { memo, useCallback } from "react";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Dropdown as DropdownDeprecated } from "@/shared/ui/deprecated/Popups";
import { useTranslation } from "react-i18next";
import { isUserAdmin, isUserManager, User, userActions } from "@/entities/User";
import { useDispatch, useSelector } from "react-redux";
import { getRouteAdminPanel, getRouteProfile } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/lib/features";
import { Dropdown } from "@/shared/ui/redesigned/Popups";
import { Avatar } from "@/shared/ui/redesigned/Avatar";

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

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t("Панель администрирования"),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: t("Профиль"),
      href: getRouteProfile(authData.id),
    },
    {
      content: t("Выйти"),
      onClick: onLogout,
    },
  ];

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <ToggleFeatures
        feature={"isAppRedesigned"}
        on={
          <Dropdown
            direction={"bottom left"}
            items={items}
            trigger={<Avatar size={48} src={authData.avatar} />}
          />
        }
        off={
          <DropdownDeprecated
            direction={"bottom left"}
            items={items}
            trigger={<AvatarDeprecated size={40} src={authData.avatar} />}
          />
        }
      />
    </div>
  );
});
