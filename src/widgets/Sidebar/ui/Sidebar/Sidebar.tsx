import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useState } from "react";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import AddPost from "shared/assets/icons/add-square.svg";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid={"sidebar"}
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.menu}>
        {/*Нужно добавить доступ только для авторизованных пользователей*/}
        <AppLink to={RoutePath.articleCreate} className={cls.item}>
          <AddPost />
          <Text title={t("Создать пост")} className={cls.text} />
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={classNames(cls.lang, {}, [])} />
      </div>
      <div className={cls.buttonToggle}>
        <Button
          data-testid={"sidebar-toggle"}
          onClick={onToggle}
          size={ButtonSize.M}
          theme={ButtonTheme.OUTLINE}
        >
          {collapsed ? ">" : "<"}
        </Button>
      </div>
    </aside>
  );
});
